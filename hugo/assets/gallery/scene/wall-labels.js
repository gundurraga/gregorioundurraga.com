// Each work's label, lettered straight onto the wall as a museum sets it in
// vinyl: the title in italics and the year in roman, then medium, size and
// place, in sentence case, in an ink dark or light to suit the wall. Drawn in
// the site's typeface only for labels near enough to read, it fades in as the
// visitor approaches and is freed again when they walk away.

import { CanvasTexture, Mesh, MeshBasicMaterial, PlaneGeometry } from "../vendor/three/three.module.js";
import { yawFacing } from "../plan/focus-pose.js";
import { ON_THE_WALL } from "./materials.js";
import {
  LABEL_WIDTH, LABEL_HEIGHT, LABEL_TEXT_START, LABEL_TEXT_FULL, LABEL_TEXT_DROP,
} from "../constants.js";

const PIXELS_PER_METRE = 4000;
const TEXT_PX = 40; // 1 cm letters, as a museum sets labels read from a step back
const LINE_HEIGHT = 1.35;
const TITLE_TO_BODY_GAP = 0.3; // in body lines
const MAX_NEW_PER_UPDATE = 2;
const TEXT_LIFT = 0.0005; // vinyl lies on the paint
const OPACITY_STEP = 0.01; // smaller fades are not worth a redraw
const FONT = '"Roboto Condensed", Helvetica, sans-serif';
const DARK_INK = "#2B2926";
const LIGHT_INK = "#F3F0EA";
const LIGHT_INK_BELOW = 0.3; // a wall darker than this (relative luminance) takes the light ink
// Scripts with no italics of their own: their titles stay upright.
const UPRIGHT_LANGUAGES = ["ja", "ko", "zh"];

function luminance(hex) {
  const [red, green, blue] = [1, 3, 5].map((start) => {
    const channel = parseInt(hex.slice(start, start + 2), 16) / 255;
    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

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

// The letters as a stencil, white where they are: the label's material lays
// the ink through it, so their edges blend cleanly into the wall.
function drawText(painting, titleStyle) {
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(LABEL_WIDTH * PIXELS_PER_METRE);
  canvas.height = Math.round(LABEL_HEIGHT * PIXELS_PER_METRE);
  const context = canvas.getContext("2d");
  context.fillStyle = "#FFFFFF";
  context.textBaseline = "top";
  const lineHeight = TEXT_PX * LINE_HEIGHT;
  const roman = `400 ${TEXT_PX}px ${FONT}`;
  const title = `${titleStyle} 400 ${TEXT_PX}px ${FONT}`;
  // The title wraps in its own italics; the year follows its last line in roman,
  // or takes a line of its own when it does not fit there.
  context.font = title;
  const titleLines = wrapText(context, `${painting.title},`, canvas.width);
  const lastWidth = context.measureText(titleLines[titleLines.length - 1]).width;
  context.font = roman;
  const year = ` ${painting.year}`;
  const yearFits = lastWidth + context.measureText(year).width <= canvas.width;
  let y = 0;
  context.font = title;
  for (const line of titleLines) {
    context.fillText(line, 0, y);
    y += lineHeight;
  }
  context.font = roman;
  if (yearFits) context.fillText(year, lastWidth, y - lineHeight);
  else {
    context.fillText(year.trimStart(), 0, y);
    y += lineHeight;
  }
  y += TEXT_PX * TITLE_TO_BODY_GAP;
  for (const text of [painting.media, painting.dimensions, painting.location]) {
    context.fillText(text, 0, y);
    y += lineHeight;
  }
  const texture = new CanvasTexture(canvas);
  texture.premultiplyAlpha = true; // so each pixel's coverage lands in the channel the stencil reads
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
  const titleStyle = UPRIGHT_LANGUAGES.some((language) => document.documentElement.lang.startsWith(language)) ? "normal" : "italic";
  Promise.all([`${titleStyle} 400`, "400"].map((style) => document.fonts.load(`${style} ${TEXT_PX}px ${FONT}`, labelText)))
    .catch((error) => console.error("[gallery] label font failed to load", error))
    .then(() => { canDraw = true; });

  const labels = artworks.map((artwork) => {
    const ink = luminance(artwork.wallPaint) < LIGHT_INK_BELOW ? LIGHT_INK : DARK_INK;
    const material = new MeshBasicMaterial({
      color: ink, transparent: true, depthWrite: false, visible: false, opacity: 0, ...ON_THE_WALL,
    });
    const { scale } = artwork.label;
    const mesh = new Mesh(new PlaneGeometry(LABEL_WIDTH * scale, LABEL_HEIGHT * scale), material);
    mesh.position.set(artwork.label.x + artwork.normal.x * TEXT_LIFT, artwork.label.y, artwork.label.z + artwork.normal.z * TEXT_LIFT);
    mesh.rotation.y = yawFacing(artwork.normal);
    return { artwork, mesh };
  });

  // Returns true when any text appeared, faded or disappeared.
  // zoom: the lens magnification. A label seen at 4x from 12 m reads as one 3 m
  // away, so its text appears through the zoom just as it does on approach.
  function update(cameraPosition, zoom) {
    if (!canDraw) return false;
    let changed = false;
    let created = 0;
    for (const { artwork, mesh } of labels) {
      // Larger letters read from as much further away.
      const distance = mesh.position.distanceTo(cameraPosition) / (zoom * artwork.label.scale);
      const material = mesh.material;
      if (!material.alphaMap && distance < LABEL_TEXT_START && created < MAX_NEW_PER_UPDATE) {
        material.alphaMap = drawText(artwork.painting, titleStyle);
        material.needsUpdate = true;
        created += 1;
      } else if (material.alphaMap && distance > LABEL_TEXT_DROP) {
        material.alphaMap.dispose();
        material.alphaMap = null;
        material.needsUpdate = true;
      }
      const opacity = material.alphaMap ? opacityAt(distance) : 0;
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
