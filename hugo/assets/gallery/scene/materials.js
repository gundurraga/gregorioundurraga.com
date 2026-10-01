// Materials of the building. Every surface is unlit (its light is baked into
// vertex colours), so paintings keep their exact colour and phones stay cool.
// Textures are drawn once at startup: neutral detail (grain, mottling, leaf)
// that the vertex colour tints, so one oak texture serves floor and frames.

import {
  CanvasTexture, MeshBasicMaterial, RepeatWrapping, SRGBColorSpace, FrontSide,
} from "../vendor/three/three.module.js";

// Seeded, so the building looks the same on every visit.
export function random(seed) {
  let state = seed;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let value = Math.imul(state ^ (state >>> 15), 1 | state);
    value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value;
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

export function canvas(width, height = width) {
  const element = document.createElement("canvas");
  element.width = width;
  element.height = height;
  return { element, context: element.getContext("2d") };
}

const grey = (value, alpha = 1) => {
  const level = Math.round(value * 255);
  return `rgba(${level}, ${level}, ${level}, ${alpha})`;
};

// 2 x 2 m of oiled oak: 20 cm planks along u, staggered joints, fine grain.
function drawOak() {
  const size = 1024;
  const { element, context } = canvas(size);
  const next = random(7);
  const plankHeight = size / 10;
  for (let row = 0; row < 10; row += 1) {
    const top = row * plankHeight;
    let start = -next() * size;
    while (start < size) {
      const length = size * (0.6 + next() * 0.4);
      context.fillStyle = grey(0.9 + next() * 0.06);
      for (const shift of [0, size]) context.fillRect(start + shift, top, length, plankHeight);
      context.fillStyle = grey(0.55, 0.5);
      context.fillRect(start + length - 1, top, 1.5, plankHeight);
      start += length;
    }
    for (let line = 0; line < 26; line += 1) {
      const y = top + next() * plankHeight;
      const amplitude = 1 + next() * 3;
      const periods = 1 + Math.floor(next() * 3);
      context.strokeStyle = next() > 0.5 ? grey(0.4, 0.06 + next() * 0.06) : grey(1, 0.08);
      context.lineWidth = 0.6 + next() * 1.4;
      context.beginPath();
      for (let x = 0; x <= size; x += 16) {
        const offset = Math.sin((x / size) * periods * Math.PI * 2 + row) * amplitude;
        if (x === 0) context.moveTo(x, y + offset); else context.lineTo(x, y + offset);
      }
      context.stroke();
    }
    context.fillStyle = grey(0.45, 0.55);
    context.fillRect(0, top, size, 1.5);
  }
  return element;
}

// 2.4 x 2.4 m of precast concrete paving: 60 x 120 cm slabs laid in a running
// bond, long side along the walk. Each slab is its own pour: a tone and a soft
// cloud across it. Fine joints with a lit arris. No grain: at a distance grain
// reads as carpet, not stone.
const PAVING_METRES = 2.4;

function drawConcrete() {
  const size = 1024;
  const { element, context } = canvas(size);
  const next = random(11);
  const pixelsPerMetre = size / PAVING_METRES;
  const slabLength = 1.2 * pixelsPerMetre;
  const slabWidth = 0.6 * pixelsPerMetre;
  context.fillStyle = grey(0.9);
  context.fillRect(0, 0, size, size);
  // A joint: a dark line, then the lit arris beside it.
  const joint = (x, y, width, height, across) => {
    context.fillStyle = grey(0.4, 0.35);
    context.fillRect(x, y, across ? 2 : width, across ? height : 2);
    context.fillStyle = grey(1, 0.12);
    context.fillRect(across ? x + 2 : x, across ? y : y + 2, across ? 1 : width, across ? height : 1);
  };
  const rows = Math.round(size / slabWidth);
  const slabsPerRow = Math.round(size / slabLength);
  for (let row = 0; row < rows; row += 1) {
    const top = row * slabWidth;
    for (let slab = 0; slab < slabsPerRow; slab += 1) {
      // One pour per slab, drawn twice where it crosses the texture's edge so the tiling never seams.
      const start = (row % 2) * slabLength / 2 + slab * slabLength;
      const tone = 0.86 + next() * 0.08;
      const cloudX = start + next() * slabLength;
      const cloudY = top + next() * slabWidth;
      const cloudTone = next() > 0.5 ? 1 : 0.6;
      for (const shift of [-size, 0]) {
        const left = start + shift;
        context.fillStyle = grey(tone);
        context.fillRect(left, top, slabLength, slabWidth);
        const cloud = context.createRadialGradient(cloudX + shift, cloudY, 0, cloudX + shift, cloudY, slabLength * 0.7);
        cloud.addColorStop(0, grey(cloudTone, 0.05));
        cloud.addColorStop(1, grey(0.8, 0));
        context.fillStyle = cloud;
        context.fillRect(left, top, slabLength, slabWidth);
        joint(left, top, 0, slabWidth, true);
      }
    }
    joint(0, top, size, 0, false);
  }
  return element;
}

// 24 x 24 cm of water gilding: 8 cm leaf squares with faint overlaps.
function drawGilt() {
  const size = 256;
  const { element, context } = canvas(size);
  const next = random(3);
  const leaf = size / 3;
  for (let row = 0; row < 3; row += 1) {
    for (let column = 0; column < 3; column += 1) {
      context.fillStyle = grey(0.96 + next() * 0.04);
      context.fillRect(column * leaf, row * leaf, leaf, leaf);
      context.fillStyle = grey(0.8, 0.2);
      context.fillRect(column * leaf, row * leaf, leaf, 1);
      context.fillRect(column * leaf, row * leaf, 1, leaf);
    }
  }
  return element;
}

// A soft rectangle of shadow as a grey alpha map (white = shadow), drawn by
// its blur alone.
function drawShadow() {
  const size = 128;
  const { element, context } = canvas(size);
  const inset = 22;
  context.fillStyle = "black";
  context.fillRect(0, 0, size, size);
  context.shadowColor = "white";
  context.shadowBlur = 16;
  context.shadowOffsetX = size * 4;
  context.fillRect(inset - size * 4, inset, size - 2 * inset, size - 2 * inset);
  return element;
}

// metres: what one repeat of the image covers, one number or [across, along].
export function tiledTexture(image, metres, anisotropy) {
  const [across, along] = Array.isArray(metres) ? metres : [metres, metres];
  const texture = new CanvasTexture(image);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(1 / across, 1 / along);
  texture.colorSpace = SRGBColorSpace;
  texture.anisotropy = anisotropy;
  // Once on the GPU the drawing canvas is dead weight; a lost context reloads the page anyway.
  texture.onUpdate = () => {
    image.width = 0;
    image.height = 0;
  };
  return texture;
}

// Things a few millimetres off a wall (frames, label cards, their shadows) would
// fight the wall for depth across a long room and flicker; this settles every
// tie in their favour.
export const ON_THE_WALL = { polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -4 };

export function createMaterials(anisotropy) {
  const surface = (map) => new MeshBasicMaterial({ vertexColors: true, map, side: FrontSide });
  const shadowTexture = new CanvasTexture(drawShadow());
  return {
    plain: surface(null),
    oak: surface(tiledTexture(drawOak(), 2, anisotropy)),
    concrete: surface(tiledTexture(drawConcrete(), PAVING_METRES, anisotropy)),
    gilt: surface(tiledTexture(drawGilt(), 0.24, anisotropy)),
    shadow: new MeshBasicMaterial({
      color: 0x000000, alphaMap: shadowTexture, transparent: true, opacity: 0.42, depthWrite: false, ...ON_THE_WALL,
    }),
  };
}
