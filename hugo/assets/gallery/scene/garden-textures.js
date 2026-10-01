// The lobby gardens' materials, drawn once at startup like the building's:
// raked gravel, moss, fair-faced concrete with its form-tie holes, bamboo
// leaves, and the woods beyond the garden walls. Unlike the building's neutral
// textures these carry their own colour; vertex colour adds only the light.

import { MeshBasicMaterial, DoubleSide, ClampToEdgeWrapping } from "../vendor/three/three.module.js";
import { random, canvas, tiledTexture } from "./materials.js";

const GRAVEL_PIXELS_PER_METRE = 160;
const RAKE_SPACING = 0.07; // metres between furrows
const RIPPLES = 5; // furrows circling each stone
const PANEL_WIDTH = 1.8; // a formwork panel, in metres
const PANEL_HEIGHT = 0.9;

// Fine grain laid over a texture: one small tile of random light and dark
// pixels, repeated. Grain this fine shows no repeat, and drawing a tile costs a
// fraction of touching every pixel of the texture.
const GRAIN_TILE = 256;

function speckle(context, size, next, amount) {
  const tile = canvas(GRAIN_TILE);
  const pixels = tile.context.createImageData(GRAIN_TILE, GRAIN_TILE);
  for (let index = 0; index < pixels.data.length; index += 4) {
    const offset = (next() - 0.5) * amount;
    const level = offset > 0 ? 255 : 0;
    pixels.data[index] = level;
    pixels.data[index + 1] = level;
    pixels.data[index + 2] = level;
    pixels.data[index + 3] = Math.abs(offset) * 2;
  }
  tile.context.putImageData(pixels, 0, 0);
  context.fillStyle = context.createPattern(tile.element, "repeat");
  context.fillRect(0, 0, size[0], size[1]);
}

// Soft round blots; one that crosses an edge is drawn again on the opposite
// side, so the texture tiles without seams.
function blots(context, size, next, { count, smallest, largest, colours }) {
  for (let blot = 0; blot < count; blot += 1) {
    const x = next() * size[0];
    const y = next() * size[1];
    const radius = smallest + next() * (largest - smallest);
    const colour = colours[Math.floor(next() * colours.length)];
    for (const shiftX of [-size[0], 0, size[0]]) {
      for (const shiftY of [-size[1], 0, size[1]]) {
        const centreX = x + shiftX;
        const centreY = y + shiftY;
        if (centreX + radius < 0 || centreX - radius > size[0] || centreY + radius < 0 || centreY - radius > size[1]) continue;
        const gradient = context.createRadialGradient(centreX, centreY, 0, centreX, centreY, radius);
        gradient.addColorStop(0, colour);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        context.fillStyle = gradient;
        context.fillRect(centreX - radius, centreY - radius, radius * 2, radius * 2);
      }
    }
  }
}

// Gravel raked in straight furrows along the garden, rippling in rings around
// each stone. stones: [{ u, v, radius }] in metres; u runs along the garden,
// v away from the glass. The whole garden is one texture, never repeated.
function drawGravel(length, depth, stones) {
  const width = Math.round(length * GRAVEL_PIXELS_PER_METRE);
  const height = Math.round(depth * GRAVEL_PIXELS_PER_METRE);
  const { element, context } = canvas(width, height);
  const next = random(23);
  const toPixel = (u, v) => [u * GRAVEL_PIXELS_PER_METRE, (1 - v / depth) * height];
  context.fillStyle = "rgb(196, 191, 181)";
  context.fillRect(0, 0, width, height);
  speckle(context, [width, height], next, 40);

  const furrow = (draw) => {
    for (const [style, lineWidth, shift] of [["rgba(104, 98, 88, 0.6)", 3, 0], ["rgba(255, 255, 255, 0.55)", 2, 3.5]]) {
      context.strokeStyle = style;
      context.lineWidth = lineWidth;
      context.beginPath();
      draw(shift);
      context.stroke();
    }
  };
  const ripple = (stone) => stone.radius + RIPPLES * RAKE_SPACING;
  for (let v = RAKE_SPACING / 2; v < depth; v += RAKE_SPACING) {
    // Where this furrow meets a stone's rings it stops, and starts again beyond them.
    const gaps = stones
      .filter((stone) => Math.abs(v - stone.v) < ripple(stone))
      .map((stone) => {
        const half = Math.sqrt(ripple(stone) ** 2 - (v - stone.v) ** 2);
        return [stone.u - half, stone.u + half];
      })
      .sort((a, b) => a[0] - b[0]);
    furrow((shift) => {
      let from = 0;
      for (const [gapFrom, gapTo] of [...gaps, [length, length]]) {
        if (gapFrom > from) {
          const [x1, y] = toPixel(from, v);
          const [x2] = toPixel(gapFrom, v);
          context.moveTo(x1, y + shift);
          context.lineTo(x2, y + shift);
        }
        from = Math.max(from, gapTo);
      }
    });
  }
  for (const stone of stones) {
    for (let ring = 1; ring <= RIPPLES; ring += 1) {
      const [x, y] = toPixel(stone.u, stone.v);
      furrow((shift) => {
        const radius = (stone.radius + ring * RAKE_SPACING) * GRAVEL_PIXELS_PER_METRE;
        context.moveTo(x + radius, y + shift);
        context.arc(x, y + shift, radius, 0, Math.PI * 2);
      });
    }
  }
  return element;
}

// Deep cushion moss, 2 x 2 m, tiling.
function drawMoss() {
  const size = 512;
  const { element, context } = canvas(size);
  const next = random(31);
  context.fillStyle = "rgb(88, 108, 52)";
  context.fillRect(0, 0, size, size);
  blots(context, [size, size], next, {
    count: 900, smallest: 6, largest: 40,
    colours: ["rgba(122, 140, 66, 0.5)", "rgba(62, 82, 38, 0.45)", "rgba(140, 150, 80, 0.35)"],
  });
  speckle(context, [size, size], next, 40);
  return element;
}

// One formwork panel of fair-faced concrete, 1.8 x 0.9 m: a soft mottle, the
// panel joints, and six form-tie holes, the way Tadao Ando leaves them.
function drawAndoConcrete() {
  const width = 1024;
  const height = 512;
  const { element, context } = canvas(width, height);
  const next = random(41);
  context.fillStyle = "rgb(206, 203, 196)";
  context.fillRect(0, 0, width, height);
  blots(context, [width, height], next, {
    count: 160, smallest: 60, largest: 220,
    colours: ["rgba(182, 178, 170, 0.03)", "rgba(226, 224, 218, 0.04)"],
  });
  context.fillStyle = "rgba(140, 136, 128, 0.4)";
  context.fillRect(0, 0, width, 2);
  context.fillRect(0, 0, 2, height);
  const pixelsPerMetre = width / PANEL_WIDTH;
  for (const across of [0.3, 0.9, 1.5]) {
    for (const up of [0.225, 0.675]) {
      const x = across * pixelsPerMetre;
      const y = up * pixelsPerMetre;
      context.fillStyle = "rgba(150, 146, 138, 0.6)";
      context.beginPath();
      context.arc(x, y, 13, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = "rgb(92, 89, 84)";
      context.beginPath();
      context.arc(x, y, 8, 0, Math.PI * 2);
      context.fill();
    }
  }
  return element;
}

// Sprays of narrow bamboo leaves on a clear ground, for leaf cards.
function drawBambooLeaves() {
  const size = 512;
  const { element, context } = canvas(size);
  const next = random(53);
  for (let spray = 0; spray < 34; spray += 1) {
    const startX = 30 + next() * (size - 60);
    const startY = 20 + next() * (size - 120);
    const lean = (next() - 0.5) * 1.2;
    for (let leaf = 0; leaf < 6 + Math.floor(next() * 8); leaf += 1) {
      const along = leaf * (8 + next() * 6);
      const x = startX + Math.sin(lean) * along;
      const y = startY + Math.cos(lean) * along * 0.6;
      const angle = Math.PI / 2 + lean + (next() - 0.5) * 1.6;
      const length = 46 + next() * 38;
      const breadth = 5 + next() * 4;
      context.save();
      context.translate(x, y);
      context.rotate(angle);
      context.fillStyle = `hsl(${78 + next() * 24}, ${34 + next() * 18}%, ${24 + next() * 22}%)`;
      context.beginPath();
      context.moveTo(0, 0);
      context.quadraticCurveTo(length * 0.35, -breadth, length, 0);
      context.quadraticCurveTo(length * 0.35, breadth, 0, 0);
      context.fill();
      context.restore();
    }
  }
  return element;
}

// The woods beyond the garden walls: a band of rounded crowns, softened by
// distance, repeating along the horizon.
function drawWoods() {
  const width = 1024;
  const height = 256;
  const { element, context } = canvas(width, height);
  const next = random(61);
  // Farthest layer first: paler and bluer with distance, as air veils it.
  for (let layer = 0; layer < 3; layer += 1) {
    const top = 70 + layer * 34;
    for (let crown = 0; crown < 180; crown += 1) {
      const x = next() * width;
      const radius = 12 + next() * 26;
      const y = top + next() * 30 + radius * 0.5;
      context.fillStyle = `hsl(${150 + next() * 30}, ${8 + layer * 4 + next() * 6}%, ${70 - layer * 7 + next() * 5}%)`;
      const crownHeight = radius * (0.8 + next() * 0.4);
      for (const shift of [-width, 0, width]) {
        context.beginPath();
        context.ellipse(x + shift, y, radius, crownHeight, 0, 0, Math.PI * 2);
        context.fill();
      }
    }
    context.fillStyle = `hsl(160, ${10 + layer * 4}%, ${68 - layer * 7}%)`; // the wood below its crowns
    context.fillRect(0, top + 40, width, height);
  }
  return element;
}

// gardens: { length, depth, stones } of the raked garden, so the gravel ripples
// around the stones where they actually lie.
export function createGardenMaterials(anisotropy, gardens) {
  const lit = (map, extra = {}) => new MeshBasicMaterial({ vertexColors: true, map, side: DoubleSide, ...extra });
  // Cards repeat only across, so a card's clear top never picks up its solid foot.
  const card = (image) => {
    const texture = tiledTexture(image, 1, anisotropy);
    texture.wrapT = ClampToEdgeWrapping;
    return lit(texture, { alphaTest: 0.5 });
  };
  return {
    solid: lit(null),
    gravel: lit(tiledTexture(drawGravel(gardens.length, gardens.depth, gardens.stones), [gardens.length, gardens.depth], anisotropy)),
    moss: lit(tiledTexture(drawMoss(), 2, anisotropy)),
    concrete: lit(tiledTexture(drawAndoConcrete(), [PANEL_WIDTH, PANEL_HEIGHT], anisotropy)),
    leaves: card(drawBambooLeaves()),
    woods: card(drawWoods()),
    glass: new MeshBasicMaterial({ color: 0xdfe9e6, transparent: true, opacity: 0.1, depthWrite: false, side: DoubleSide }),
  };
}
