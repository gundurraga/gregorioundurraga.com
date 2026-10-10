// The sky: a dome drawn behind everything and kept centred on whichever
// camera draws it, so it is always at the horizon however far the visitor
// walks, seen through the lobby's glass and in its reflections.

import { Mesh, MeshBasicMaterial, BufferGeometry, Float32BufferAttribute, ClampToEdgeWrapping, DoubleSide } from "../vendor/three/three.module.js";
import { random, canvas, tiledTexture } from "./materials.js";

const SKY_RADIUS = 60; // well inside the far plane
const SKY_STEPS = [24, 8]; // around, up
const LOWEST = -0.1; // radians below the horizon, hidden by the woods

// The sky, mapped onto a dome: deeper blue overhead, paling
// to a hazy horizon, with soft flat-bottomed clouds that grow smaller and
// thinner towards the horizon. u runs round the dome, v from horizon to zenith.
function drawSky() {
  const width = 1024;
  const height = 256;
  const { element, context } = canvas(width, height);
  const next = random(67);
  const gradient = context.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, "rgb(150, 182, 210)");
  gradient.addColorStop(0.6, "rgb(196, 214, 228)");
  gradient.addColorStop(1, "rgb(226, 232, 234)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);
  for (let cloud = 0; cloud < 46; cloud += 1) {
    const towardsHorizon = next();
    const y = height * (0.15 + towardsHorizon * 0.75);
    const scale = 1 - towardsHorizon * 0.6;
    const x = next() * width;
    for (let puff = 0; puff < 7; puff += 1) {
      const radius = (10 + next() * 22) * scale;
      const puffX = x + (next() - 0.5) * 70 * scale;
      const puffY = y - next() * radius * 0.6;
      for (const shift of [-width, 0, width]) {
        const glow = context.createRadialGradient(puffX + shift, puffY, 0, puffX + shift, puffY, radius);
        glow.addColorStop(0, `rgba(255, 255, 255, ${0.5 * scale + 0.2})`);
        glow.addColorStop(1, "rgba(255, 255, 255, 0)");
        context.fillStyle = glow;
        context.fillRect(puffX + shift - radius, puffY - radius, radius * 2, radius * 2);
      }
    }
  }
  return element;
}

function domeGeometry() {
  const positions = [];
  const uvs = [];
  const indices = [];
  for (let row = 0; row <= SKY_STEPS[1]; row += 1) {
    const elevation = LOWEST + (row / SKY_STEPS[1]) * (Math.PI / 2 - LOWEST);
    for (let column = 0; column <= SKY_STEPS[0]; column += 1) {
      const azimuth = (column / SKY_STEPS[0]) * Math.PI * 2;
      const across = Math.cos(elevation) * SKY_RADIUS;
      positions.push(Math.cos(azimuth) * across, Math.sin(elevation) * SKY_RADIUS, Math.sin(azimuth) * across);
      uvs.push(column / SKY_STEPS[0], Math.max(0, elevation) / (Math.PI / 2));
    }
  }
  for (let row = 0; row < SKY_STEPS[1]; row += 1) {
    for (let column = 0; column < SKY_STEPS[0]; column += 1) {
      const a = row * (SKY_STEPS[0] + 1) + column;
      const c = a + SKY_STEPS[0] + 2;
      indices.push(a, a + 1, c, a, c, c - 1);
    }
  }
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
  geometry.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  return geometry;
}

export function createSky(anisotropy) {
  const texture = tiledTexture(drawSky(), 1, anisotropy);
  texture.wrapT = ClampToEdgeWrapping;
  const sky = new Mesh(domeGeometry(), new MeshBasicMaterial({ map: texture, side: DoubleSide, depthWrite: false }));
  sky.renderOrder = -1; // first, so everything draws over it
  sky.frustumCulled = false;
  sky.raycast = () => {};
  // Centred on the camera about to draw it, the lobby's mirrors' included.
  sky.onBeforeRender = (renderer, scene, camera) => {
    sky.matrixWorld.setPosition(camera.matrixWorld.elements[12], camera.matrixWorld.elements[13], camera.matrixWorld.elements[14]);
  };
  return sky;
}
