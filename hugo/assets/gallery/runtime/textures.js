// Painting textures in three tiers. Small (256 px) for every painting, loaded
// nearest first; medium (1024 px) for the few that fill enough of the screen;
// large (2048 px) only for the painting being looked at closely. Decoding
// happens off the main thread and at most one texture uploads per frame, so
// walking never stutters. Demoted tiers are freed at once.

import { Texture, SRGBColorSpace, LinearMipmapLinearFilter, Vector3 } from "../vendor/three/three.module.js";
import {
  MEDIUM_TIER_MIN_PX, MEDIUM_TIER_DROP_PX, MAX_MEDIUM_TEXTURES, MAX_CONCURRENT_FETCHES, CENTIMETRE,
} from "../constants.js";

const TIERS = ["small", "medium", "large"];
const MAX_ATTEMPTS = 2; // a flaky phone connection gets one retry
const BYTES_PER_PIXEL_WITH_MIPMAPS = 4 * 4 / 3;
const MIN_DISTANCE = 0.2; // keeps the projected size finite with the nose on the canvas
const FACING_THRESHOLD = 0.3; // cosine of the angle off the view direction that still counts as in view
const OUT_OF_VIEW_WEIGHT = 0.2; // works behind or beside the visitor load later, not never
const forward = new Vector3();

export function createTextureTiers({ renderer, paintingMeshes, anisotropy, onError }) {
  const entries = paintingMeshes.map((mesh) => ({
    mesh,
    artwork: mesh.userData.artwork,
    textures: {},
    placeholder: mesh.material.color.getHex(),
    queued: new Set(),
    loading: new Map(),
    failures: new Map(),
    wanted: new Set(["small"]),
    priority: 0,
  }));
  const queue = [];
  const ready = [];
  let activeFetches = 0;
  let residentBytes = 0;

  function showBest(entry) {
    const tier = [...TIERS].reverse().find((name) => entry.wanted.has(name) && entry.textures[name]);
    const map = tier ? entry.textures[tier] : null;
    const material = entry.mesh.material;
    if (material.map === map) return false;
    material.map = map;
    material.color.set(map ? 0xffffff : entry.placeholder);
    material.needsUpdate = true;
    return true;
  }

  function release(entry, tier) {
    entry.loading.get(tier)?.abort();
    entry.loading.delete(tier);
    const texture = entry.textures[tier];
    if (!texture) return;
    residentBytes -= texture.image.width * texture.image.height * BYTES_PER_PIXEL_WITH_MIPMAPS;
    delete entry.textures[tier];
    showBest(entry);
    texture.dispose();
    // dispose() frees only the GPU copy; the decoded bitmap would otherwise
    // wait for garbage collection, which iOS Safari may not reach in time.
    texture.image.close();
  }

  function pump() {
    queue.sort((left, right) => right.entry.priority - left.entry.priority);
    while (activeFetches < MAX_CONCURRENT_FETCHES && queue.length > 0) {
      const { entry, tier } = queue.shift();
      entry.queued.delete(tier);
      if (!entry.wanted.has(tier) || entry.textures[tier] || entry.loading.has(tier)) continue;
      const controller = new AbortController();
      entry.loading.set(tier, controller);
      activeFetches += 1;
      fetch(entry.artwork.painting.textures[tier], { signal: controller.signal })
        .then((response) => {
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          return response.blob();
        })
        .then((blob) => createImageBitmap(blob))
        .then((bitmap) => ready.push({ entry, tier, bitmap, controller }))
        .catch((error) => {
          if (controller.signal.aborted) return;
          entry.loading.delete(tier);
          const failures = (entry.failures.get(tier) ?? 0) + 1;
          entry.failures.set(tier, failures);
          if (failures === MAX_ATTEMPTS) onError(`texture ${entry.artwork.slug} ${tier}: ${error.message}`);
        })
        .finally(() => {
          activeFetches -= 1;
          pump();
        });
    }
  }

  function want(entry, tier) {
    entry.wanted.add(tier);
    const hasGivenUp = (entry.failures.get(tier) ?? 0) >= MAX_ATTEMPTS;
    if (entry.textures[tier] || entry.loading.has(tier) || entry.queued.has(tier) || hasGivenUp) return;
    entry.queued.add(tier);
    queue.push({ entry, tier });
  }

  // Upload at most one decoded texture. Returns true when the screen changed.
  function applyOne() {
    const item = ready.shift();
    if (!item) return false;
    const { entry, tier, bitmap, controller } = item;
    if (entry.loading.get(tier) !== controller || !entry.wanted.has(tier)) {
      bitmap.close();
      return false;
    }
    entry.loading.delete(tier);
    const texture = new Texture(bitmap);
    texture.flipY = false; // image bitmaps upload unflipped; the painting planes' UVs are flipped instead
    texture.colorSpace = SRGBColorSpace;
    texture.anisotropy = anisotropy;
    texture.minFilter = LinearMipmapLinearFilter;
    texture.needsUpdate = true;
    renderer.initTexture(texture);
    residentBytes += bitmap.width * bitmap.height * BYTES_PER_PIXEL_WITH_MIPMAPS;
    entry.textures[tier] = texture;
    return showBest(entry);
  }

  // Decide tiers from what the camera sees. focalPx: pixels per unit of
  // height at one metre, i.e. viewport height / (2 tan(fov / 2)).
  function update(camera, focalPx, focusedSlug) {
    camera.getWorldDirection(forward);
    for (const entry of entries) {
      const { centre } = entry.artwork;
      const dx = centre.x - camera.position.x;
      const dy = centre.y - camera.position.y;
      const dz = centre.z - camera.position.z;
      const distance = Math.max(MIN_DISTANCE, Math.hypot(dx, dy, dz));
      const facing = (dx * forward.x + dy * forward.y + dz * forward.z) / distance;
      const projected = ((entry.artwork.painting.heightCm * CENTIMETRE) / distance) * focalPx;
      entry.priority = facing > FACING_THRESHOLD ? projected : projected * OUT_OF_VIEW_WEIGHT;
    }

    const byPriority = [...entries].sort((left, right) => right.priority - left.priority);
    const medium = new Set(byPriority
      .filter((entry) => entry.priority >= (entry.textures.medium ? MEDIUM_TIER_DROP_PX : MEDIUM_TIER_MIN_PX))
      .slice(0, MAX_MEDIUM_TEXTURES));

    for (const entry of entries) {
      const isFocused = entry.artwork.slug === focusedSlug;
      if (medium.has(entry) || isFocused) want(entry, "medium");
      else if (entry.wanted.delete("medium")) release(entry, "medium");
      if (isFocused) want(entry, "large");
      else if (entry.wanted.delete("large")) release(entry, "large");
      want(entry, "small");
    }
    pump();
  }

  return { update, applyOne, residentBytes: () => residentBytes };
}
