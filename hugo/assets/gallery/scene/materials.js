// Materials of the building. Every surface is unlit (its light is baked into
// vertex colours), so paintings keep their exact colour and phones stay cool.
// Textures are drawn once at startup: neutral detail (grain, mottling, leaf)
// that the vertex colour tints, so one oak texture serves floor and frames.

import {
  CanvasTexture, MeshBasicMaterial, RepeatWrapping, SRGBColorSpace, FrontSide,
} from "../vendor/three/three.module.js";

// Seeded, so the building looks the same on every visit.
function random(seed) {
  let state = seed;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let value = Math.imul(state ^ (state >>> 15), 1 | state);
    value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value;
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function canvas(size) {
  const element = document.createElement("canvas");
  element.width = size;
  element.height = size;
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

// 4 x 4 m of polished concrete: soft mottling and fine speckle.
function drawConcrete() {
  const size = 1024;
  const { element, context } = canvas(size);
  const next = random(11);
  context.fillStyle = grey(0.92);
  context.fillRect(0, 0, size, size);
  for (let blot = 0; blot < 500; blot += 1) {
    const x = next() * size;
    const y = next() * size;
    const radius = 20 + next() * 160;
    const tone = next() > 0.5 ? 0.7 : 1;
    // Blots that cross an edge are drawn again on the opposite side, so the texture tiles.
    for (const dx of [-size, 0, size]) {
      if (x + dx + radius < 0 || x + dx - radius > size) continue;
      for (const dy of [-size, 0, size]) {
        if (y + dy + radius < 0 || y + dy - radius > size) continue;
        const gradient = context.createRadialGradient(x + dx, y + dy, 0, x + dx, y + dy, radius);
        gradient.addColorStop(0, grey(tone, 0.05));
        gradient.addColorStop(1, grey(tone, 0));
        context.fillStyle = gradient;
        context.fillRect(x + dx - radius, y + dy - radius, radius * 2, radius * 2);
      }
    }
  }
  const pixels = context.getImageData(0, 0, size, size);
  for (let index = 0; index < pixels.data.length; index += 4) {
    const speckle = (next() - 0.5) * 10;
    pixels.data[index] += speckle;
    pixels.data[index + 1] += speckle;
    pixels.data[index + 2] += speckle;
  }
  context.putImageData(pixels, 0, 0);
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

function tiledTexture(image, metres, anisotropy) {
  const texture = new CanvasTexture(image);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(1 / metres, 1 / metres);
  texture.colorSpace = SRGBColorSpace;
  texture.anisotropy = anisotropy;
  return texture;
}

export function createMaterials(anisotropy) {
  const surface = (map) => new MeshBasicMaterial({ vertexColors: true, map, side: FrontSide });
  const shadowTexture = new CanvasTexture(drawShadow());
  return {
    plain: surface(null),
    oak: surface(tiledTexture(drawOak(), 2, anisotropy)),
    concrete: surface(tiledTexture(drawConcrete(), 4, anisotropy)),
    gilt: surface(tiledTexture(drawGilt(), 0.24, anisotropy)),
    shadow: new MeshBasicMaterial({
      color: 0x000000, alphaMap: shadowTexture, transparent: true, opacity: 0.42, depthWrite: false,
    }),
  };
}
