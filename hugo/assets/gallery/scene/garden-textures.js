// The lobby gardens' materials, drawn once at startup like the building's:
// moss, fair-faced concrete with its form-tie holes, granite, and the woods
// beyond the garden walls. Unlike the building's neutral textures these
// carry their own colour; vertex colour adds only the light. The bamboo needs
// none: its colour is all in its vertices.

import { MeshBasicMaterial, DoubleSide, ClampToEdgeWrapping } from "../vendor/three/three.module.js";
import { random, canvas, tiledTexture, speckle, concreteSkin } from "./materials.js";

export const PANEL_WIDTH = 1.8; // a formwork panel, in metres
export const PANEL_HEIGHT = 0.9;

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

// Three by three formwork panels of fair-faced concrete, so neighbouring
// panels differ the way separate pours do: each its own tone and soft cloud,
// the joints a faint line with a lit lip, six form-tie holes per panel as
// recessed cones (shadowed at the top, lit at the bottom edge), and faint
// streaks where rain has run down an outdoor wall.
const CONCRETE_PANELS = 3;
const CONCRETE_PIXELS_PER_METRE = 284;

function drawAndoConcrete() {
  const panelWidth = Math.round(PANEL_WIDTH * CONCRETE_PIXELS_PER_METRE);
  const panelHeight = Math.round(PANEL_HEIGHT * CONCRETE_PIXELS_PER_METRE);
  const size = [panelWidth * CONCRETE_PANELS, panelHeight * CONCRETE_PANELS];
  const { element, context } = canvas(...size);
  const next = random(41);
  for (let row = 0; row < CONCRETE_PANELS; row += 1) {
    for (let column = 0; column < CONCRETE_PANELS; column += 1) {
      const left = column * panelWidth;
      const top = row * panelHeight;
      const tone = 198 + Math.round(next() * 14);
      context.fillStyle = `rgb(${tone}, ${tone - 3}, ${tone - 9})`;
      context.fillRect(left, top, panelWidth, panelHeight);
      const cloud = context.createRadialGradient(
        left + next() * panelWidth, top + next() * panelHeight, 0,
        left + panelWidth / 2, top + panelHeight / 2, panelWidth * 0.8);
      cloud.addColorStop(0, `rgba(${next() > 0.5 ? "232, 230, 224" : "170, 166, 158"}, 0.12)`);
      cloud.addColorStop(1, "rgba(200, 196, 188, 0)");
      context.fillStyle = cloud;
      context.fillRect(left, top, panelWidth, panelHeight);
    }
  }
  blots(context, size, next, {
    count: 260, smallest: 30, largest: 120,
    colours: ["rgba(182, 178, 170, 0.04)", "rgba(226, 224, 218, 0.05)"],
  });
  concreteSkin(context, size, next, CONCRETE_PIXELS_PER_METRE, 1);
  // Rain streaks: long, faint and soft, wrapping top to bottom so the wall tiles upwards too.
  for (let streak = 0; streak < 40; streak += 1) {
    const x = next() * size[0];
    const y = next() * size[1];
    const length = size[1] * (0.3 + next() * 0.6);
    const width = 2 + next() * 6;
    const fall = context.createLinearGradient(0, y, 0, y + length);
    fall.addColorStop(0, "rgba(120, 116, 108, 0)");
    fall.addColorStop(0.2, `rgba(120, 116, 108, ${0.04 + next() * 0.05})`);
    fall.addColorStop(1, "rgba(120, 116, 108, 0)");
    for (const shift of [-size[1], 0]) {
      context.save();
      context.translate(0, shift);
      context.fillStyle = fall;
      context.fillRect(x, y, width, length);
      context.restore();
    }
  }
  for (let row = 0; row < CONCRETE_PANELS; row += 1) {
    for (let column = 0; column < CONCRETE_PANELS; column += 1) {
      const left = column * panelWidth;
      const top = row * panelHeight;
      context.fillStyle = "rgba(118, 114, 106, 0.15)";
      context.fillRect(left, top, panelWidth, 1.5);
      context.fillRect(left, top, 1.5, panelHeight);
      context.fillStyle = "rgba(255, 255, 255, 0.25)";
      context.fillRect(left, top + 1.5, panelWidth, 1);
      context.fillRect(left + 1.5, top, 1, panelHeight);
      for (const across of [1 / 6, 1 / 2, 5 / 6]) {
        for (const up of [1 / 4, 3 / 4]) {
          const x = left + across * panelWidth;
          const y = top + up * panelHeight;
          context.fillStyle = "rgba(150, 146, 138, 0.5)";
          context.beginPath();
          context.arc(x, y, 7, 0, Math.PI * 2);
          context.fill();
          context.fillStyle = "rgb(84, 81, 76)";
          context.beginPath();
          context.arc(x, y, 4.5, 0, Math.PI * 2);
          context.fill();
          context.strokeStyle = "rgba(240, 238, 232, 0.7)";
          context.lineWidth = 1.2;
          context.beginPath();
          context.arc(x, y, 5, Math.PI * 0.15, Math.PI * 0.85);
          context.stroke();
        }
      }
    }
  }
  return element;
}

// 50 x 50 cm of weathered granite, neutral so the stones' vertex colour tints
// it: a dense grain of dark and pale crystals, small pits with a lit lower
// rim, and faint blooms of lichen.
const GRANITE_METRES = 0.5;

function drawGranite() {
  const size = 512;
  const { element, context } = canvas(size);
  const next = random(83);
  context.fillStyle = "rgb(236, 236, 232)";
  context.fillRect(0, 0, size, size);
  blots(context, [size, size], next, {
    count: 120, smallest: 20, largest: 90,
    colours: ["rgba(150, 150, 146, 0.12)", "rgba(240, 240, 236, 0.12)", "rgba(170, 176, 140, 0.12)"],
  });
  speckle(context, [size, size], next, 120);
  for (let crystal = 0; crystal < 5000; crystal += 1) {
    const dark = next() > 0.45;
    context.fillStyle = dark ? `rgba(60, 60, 58, ${0.2 + next() * 0.4})` : `rgba(255, 255, 250, ${0.2 + next() * 0.4})`;
    const width = 1 + next() * 2.5;
    const x = next() * size;
    const y = next() * size;
    for (const [shiftX, shiftY] of [[0, 0], [-size, 0], [0, -size], [-size, -size]]) context.fillRect(x + shiftX, y + shiftY, width, width * (0.6 + next() * 0.8));
  }
  for (let pit = 0; pit < 140; pit += 1) {
    const x = next() * size;
    const y = next() * size;
    const radius = 1.2 + next() * 2.5;
    context.fillStyle = "rgba(70, 68, 64, 0.55)";
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = "rgba(255, 255, 250, 0.4)";
    context.lineWidth = 0.8;
    context.beginPath();
    context.arc(x, y, radius + 0.4, Math.PI * 0.15, Math.PI * 0.85);
    context.stroke();
  }
  return element;
}

// The woods beyond the garden walls, as an architect's render shows them: no
// leaves, no single tree, only soft masses of crowns seen through haze, in
// greys of green close to the sky's own value, so they read as woods without
// drawing the eye away from the walls and the garden's own trees. Two
// layers, the nearer
// a little darker. Every mass is drawn again a width over, so the band
// repeats along the horizon without a seam.
function drawWoods() {
  const width = 1024;
  const height = 256;
  const { element, context } = canvas(width, height);
  const next = random(61);
  for (const [top, count, colour] of [[70, 26, "150, 168, 160"], [110, 22, "118, 138, 122"]]) {
    for (let mass = 0; mass < count; mass += 1) {
      const x = next() * width;
      const radius = 50 + next() * 60;
      const y = top + radius * 0.6 + next() * 20;
      for (const shift of [-width, 0, width]) {
        const haze = context.createRadialGradient(x + shift, y, radius * 0.35, x + shift, y, radius);
        haze.addColorStop(0, `rgba(${colour}, 0.9)`);
        haze.addColorStop(1, `rgba(${colour}, 0)`);
        context.fillStyle = haze;
        context.fillRect(x + shift - radius, y - radius, radius * 2, radius * 2);
      }
    }
    context.fillStyle = `rgba(${colour}, 0.9)`; // the wood below its crowns, hidden by the garden walls
    context.fillRect(0, top + 90, width, height);
  }
  return element;
}

function woodsTexture(anisotropy) {
  const texture = tiledTexture(drawWoods(), 1, anisotropy);
  texture.wrapT = ClampToEdgeWrapping;
  return texture;
}

export function createGardenMaterials(anisotropy) {
  const lit = (map, extra = {}) => new MeshBasicMaterial({ vertexColors: true, map, side: DoubleSide, ...extra });
  return {
    solid: lit(null),
    stone: lit(tiledTexture(drawGranite(), GRANITE_METRES, anisotropy)),
    moss: lit(tiledTexture(drawMoss(), 2, anisotropy)),
    concrete: lit(tiledTexture(drawAndoConcrete(), [PANEL_WIDTH * CONCRETE_PANELS, PANEL_HEIGHT * CONCRETE_PANELS], anisotropy)),
    // Soft-edged, so blended rather than cut out like the leaves.
    woods: lit(woodsTexture(anisotropy), { transparent: true, depthWrite: false }),
    // The glass's body: the faintest green; its reflection is drawn on its inner face (see glass.js).
    glass: new MeshBasicMaterial({ color: 0xdfe9e6, transparent: true, opacity: 0.06, depthWrite: false, side: DoubleSide }),
  };
}
