// The 3D gallery: reads the page's painting data, hangs the building, and runs
// a loop that only draws when something changed.

import {
  WebGLRenderer, Scene, PerspectiveCamera, Raycaster, Vector2, Color, MathUtils,
} from "./vendor/three/three.module.js";
import { layoutGallery } from "./plan/layout.js";
import { createMaterials } from "./scene/materials.js";
import { buildBuilding, LOBBY_WALL } from "./scene/building.js";
import { buildFrames, buildPaintings } from "./scene/artworks.js";
import { createWallLabels } from "./scene/wall-labels.js";
import { createNavigation } from "./runtime/navigation.js";
import { createTextureTiers } from "./runtime/textures.js";
import { createDebugOverlay } from "./runtime/debug.js";
import { createRouter } from "./runtime/router.js";
import { createZoomGestures } from "./runtime/zoom.js";
import {
  MAX_PIXEL_RATIO, MAX_TOUCH_PIXEL_RATIO, MAX_ANISOTROPY, LOD_INTERVAL_MS,
  DEFAULT_VERTICAL_FOV_DEGREES, MIN_HORIZONTAL_FOV_DEGREES, MAX_VERTICAL_FOV_DEGREES, MAX_ZOOM,
} from "./constants.js";

const NEAR_PLANE = 0.05;
const FAR_PLANE = 120;
const MAX_FRAME_SECONDS = 0.1; // after a stall (tab switch, GC), resume instead of leaping

function reportError(detail) {
  console.error(`[gallery] ${detail}`);
  if (typeof umami !== "undefined") umami.track("gallery_error", { kind: detail.split(" ")[0] });
}

function verticalFovFor(aspect) {
  const minimumHorizontal = MathUtils.degToRad(MIN_HORIZONTAL_FOV_DEGREES);
  const needed = MathUtils.radToDeg(2 * Math.atan(Math.tan(minimumHorizontal / 2) / aspect));
  return Math.min(MAX_VERTICAL_FOV_DEGREES, Math.max(DEFAULT_VERTICAL_FOV_DEGREES, needed));
}

function start() {
  const canvas = document.getElementById("gallery-canvas");
  const data = JSON.parse(document.getElementById("gallery-data").textContent);
  const { building: plan, artworks } = layoutGallery(data);

  const renderer = new WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
  document.documentElement.classList.add("gallery-is-3d");
  const isTouch = window.matchMedia("(pointer: coarse)").matches;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isTouch ? MAX_TOUCH_PIXEL_RATIO : MAX_PIXEL_RATIO));
  const anisotropy = Math.min(MAX_ANISOTROPY, renderer.capabilities.getMaxAnisotropy());

  const scene = new Scene();
  scene.background = new Color(LOBBY_WALL);
  const camera = new PerspectiveCamera(DEFAULT_VERTICAL_FOV_DEGREES, 1, NEAR_PLANE, FAR_PLANE);
  const materials = createMaterials(anisotropy);

  const building = buildBuilding(plan, materials);
  const paintings = buildPaintings(artworks);
  const labels = createWallLabels(artworks);
  scene.add(building.group, paintings.group, buildFrames(artworks, materials), ...labels.meshes);

  let needsRender = true;
  const requestRender = () => { needsRender = true; };
  // How to move, in the words of the visitor's device, until they first do.
  const hint = document.getElementById("gallery-hint");
  const hintLines = (isTouch ? hint.dataset.touch : hint.dataset.pointer).split("\n");
  const hintSlots = hint.querySelectorAll("span");
  if (hintLines.length !== hintSlots.length) {
    throw new Error(`gallery hint has ${hintLines.length} lines for ${hintSlots.length} gestures`);
  }
  hintLines.forEach((line, index) => { hintSlots[index].textContent = line; });
  hint.hidden = false;
  canvas.addEventListener("pointerdown", () => { hint.hidden = true; }, { once: true });

  const raycaster = new Raycaster();
  const pointer = new Vector2();
  const blockers = building.group.children.filter((mesh) => !building.floors.includes(mesh));
  function pick(clientX, clientY) {
    const bounds = canvas.getBoundingClientRect();
    pointer.set(((clientX - bounds.left) / bounds.width) * 2 - 1, -((clientY - bounds.top) / bounds.height) * 2 + 1);
    raycaster.setFromCamera(pointer, camera);
    const [hit] = raycaster.intersectObjects([...paintings.meshes, ...building.floors, ...blockers], false);
    if (!hit) return null;
    if (hit.object.userData.artwork) return { kind: "painting", artwork: hit.object.userData.artwork };
    if (building.floors.includes(hit.object)) return { kind: "floor", point: { x: hit.point.x, z: hit.point.z } };
    return null;
  }

  // Zoom narrows the lens; the texture tiers see the narrower lens as a closer
  // painting and sharpen it.
  let baseFov = DEFAULT_VERTICAL_FOV_DEGREES;
  let zoomLevel = 1;
  let focalPx = 1;
  function updateLens() {
    const halfBase = MathUtils.degToRad(baseFov) / 2;
    camera.fov = MathUtils.radToDeg(2 * Math.atan(Math.tan(halfBase) / zoomLevel));
    camera.updateProjectionMatrix();
    focalPx = (canvas.clientHeight * renderer.getPixelRatio()) / (2 * Math.tan(MathUtils.degToRad(camera.fov) / 2));
    requestRender();
  }
  function setZoom(level) {
    zoomLevel = MathUtils.clamp(level, 1, MAX_ZOOM);
    updateLens();
  }
  const gestures = createZoomGestures(canvas, (scale) => setZoom(zoomLevel * scale));
  const zoom = { level: () => zoomLevel, reset: () => setZoom(1), isPinching: gestures.isPinching };

  let router = null;
  const navigation = createNavigation({
    canvas, camera, plan, pick, zoom,
    onFocusChange: (artwork) => {
      requestRender();
      router?.focusChanged(artwork);
    },
  });
  const textures = createTextureTiers({
    renderer, paintingMeshes: paintings.meshes, anisotropy, onError: reportError,
  });

  function resize() {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    baseFov = verticalFovFor(camera.aspect);
    updateLens();
    navigation.refit();
  }
  new ResizeObserver(resize).observe(canvas);
  resize();

  router = createRouter({ artworks, navigation });
  router.arrive();

  const debug = new URLSearchParams(location.search).has("debug")
    && createDebugOverlay({ renderer, residentBytes: textures.residentBytes });

  // Phones drop the 3D context under memory pressure; offer a clean restart.
  const reload = document.getElementById("gallery-reload");
  reload.addEventListener("click", () => location.reload());
  canvas.addEventListener("webglcontextlost", (event) => {
    event.preventDefault();
    reload.hidden = false;
    reportError("context-lost");
  });

  let previous = performance.now();
  let lastLod = -Infinity;
  function frame(now) {
    const seconds = Math.min(MAX_FRAME_SECONDS, (now - previous) / 1000);
    previous = now;
    const moved = navigation.update(seconds);
    const isLodTick = now - lastLod > LOD_INTERVAL_MS;
    if (moved) requestRender();
    if (isLodTick) {
      lastLod = now;
      textures.update(camera, focalPx, navigation.focusedSlug());
    }
    if ((moved || isLodTick) && labels.update(camera.position)) requestRender();
    if (textures.applyOne()) requestRender();
    if (needsRender) {
      needsRender = false;
      renderer.render(scene, camera);
      if (debug) debug.frameRendered(now);
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

// Without WebGL2 (or on any failure starting it) the page stays the plain list.
try {
  start();
} catch (error) {
  document.documentElement.classList.remove("gallery-is-3d");
  document.getElementById("gallery-hint").hidden = true;
  reportError(`start ${error.message}`);
}
