// The text printed on each label card: title and year, medium, size, place.
// The card itself is part of the frames mesh and always visible; the text is
// drawn in the site's typeface only for cards near enough to read, fades in as
// the visitor approaches, and is freed again when they walk away.

import { CanvasTexture, Mesh, MeshBasicMaterial, PlaneGeometry, SRGBColorSpace } from "../vendor/three/three.module.js";
import { yawFacing } from "../plan/focus-pose.js";
import { ON_THE_WALL } from "./materials.js";
import {
  LABEL_WIDTH, LABEL_HEIGHT, LABEL_DEPTH, LABEL_TEXT_START, LABEL_TEXT_FULL, LABEL_TEXT_DROP,
} from "../constants.js";

const PIXELS_PER_METRE = 4000;
const PADDING_PX = 40;
const TITLE_PX = 38;
const BODY_PX = 31;
const LINE_HEIGHT = 1.35;
const TITLE_TO_BODY_GAP = 0.3; // in body lines
const MAX_NEW_PER_UPDATE = 2;
const TEXT_LIFT = 0.0005; // the text plane sits just proud of the card
const OPACITY_STEP = 0.01; // smaller fades are not worth a redraw
const FONT = '"Roboto Condensed", Helvetica, sans-serif';
const INK = "#2B2926";

// Words wrap at spaces. A word wider than a line, as whole titles are in
// Japanese and Chinese, which use no spaces, wraps between its characters.
function wrapText(context, text, maxWidth) {
  const fits = (candidate) => context.measureText(candidate).width <= maxWidth;
  const pieces = text.split(" ").flatMap((word, index) => {
    const spaced = index === 0 ? word : ` ${word}`;
    return fits(word) ? [spaced] : [...spaced];
  });
  const lines = [];
  let line = "";
  for (const piece of pieces) {
    const candidate = line + piece;
    if (line && !fits(candidate)) {
      lines.push(line);
      line = piece.trimStart();
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function drawText(painting) {
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(LABEL_WIDTH * PIXELS_PER_METRE);
  canvas.height = Math.round(LABEL_HEIGHT * PIXELS_PER_METRE);
  const context = canvas.getContext("2d");
  const textWidth = canvas.width - 2 * PADDING_PX;
  context.fillStyle = INK;
  context.textBaseline = "top";
  let y = PADDING_PX;
  context.font = `700 ${TITLE_PX}px ${FONT}`;
  for (const line of wrapText(context, `${painting.title.toUpperCase()}, ${painting.year}`, textWidth)) {
    context.fillText(line, PADDING_PX, y);
    y += TITLE_PX * LINE_HEIGHT;
  }
  y += BODY_PX * TITLE_TO_BODY_GAP;
  context.font = `400 ${BODY_PX}px ${FONT}`;
  for (const text of [painting.media, painting.dimensions, painting.location]) {
    context.fillText(text, PADDING_PX, y);
    y += BODY_PX * LINE_HEIGHT;
  }
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  return texture;
}

function opacityAt(distance) {
  return Math.min(1, Math.max(0, (LABEL_TEXT_START - distance) / (LABEL_TEXT_START - LABEL_TEXT_FULL)));
}

export function createWallLabels(artworks) {
  let canDraw = false;
  // Draw once the typeface is in; if it never loads, draw in the fallback font.
  // The label text itself is passed so every script it uses (Cyrillic, accents) loads, not just Latin.
  const labelText = artworks.map(({ painting }) => `${painting.title} ${painting.media} ${painting.location}`).join(" ");
  Promise.all([`700 ${TITLE_PX}px`, `400 ${BODY_PX}px`].map((size) => document.fonts.load(`${size} ${FONT}`, labelText)))
    .catch((error) => console.error("[gallery] label font failed to load", error))
    .then(() => { canDraw = true; });

  const labels = artworks.map((artwork) => {
    const material = new MeshBasicMaterial({ transparent: true, depthWrite: false, visible: false, opacity: 0, ...ON_THE_WALL });
    const mesh = new Mesh(new PlaneGeometry(LABEL_WIDTH, LABEL_HEIGHT), material);
    const lift = LABEL_DEPTH + TEXT_LIFT;
    mesh.position.set(artwork.label.x + artwork.normal.x * lift, artwork.label.y, artwork.label.z + artwork.normal.z * lift);
    mesh.rotation.y = yawFacing(artwork.normal);
    return { artwork, mesh };
  });

  // Returns true when any text appeared, faded or disappeared.
  // zoom: the lens magnification. A card seen at 4x from 12 m reads as one 3 m
  // away, so its text appears through the zoom just as it does on approach.
  function update(cameraPosition, zoom) {
    if (!canDraw) return false;
    let changed = false;
    let created = 0;
    for (const { artwork, mesh } of labels) {
      const distance = mesh.position.distanceTo(cameraPosition) / zoom;
      const material = mesh.material;
      if (!material.map && distance < LABEL_TEXT_START && created < MAX_NEW_PER_UPDATE) {
        material.map = drawText(artwork.painting);
        material.needsUpdate = true;
        created += 1;
      } else if (material.map && distance > LABEL_TEXT_DROP) {
        material.map.dispose();
        material.map = null;
        material.needsUpdate = true;
      }
      const opacity = material.map ? opacityAt(distance) : 0;
      const isVisible = opacity > 0;
      if (Math.abs(opacity - material.opacity) > OPACITY_STEP || isVisible !== material.visible) {
        material.opacity = opacity;
        material.visible = isVisible;
        changed = true;
      }
    }
    return changed;
  }

  return { meshes: labels.map((label) => label.mesh), update };
}
