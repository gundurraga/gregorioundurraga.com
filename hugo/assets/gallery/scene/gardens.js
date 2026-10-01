// The lobby's gardens. Its long sides are floor-to-ceiling glass in slim steel
// frames, and beyond each lies a walled garden open to the sky, after the
// courtyards of Japanese houses and of Tadao Ando: raked gravel, stones and a
// bamboo grove on one side, moss, stepping stones and a bamboo clump on the
// other, both enclosed by fair-faced concrete, with woods beyond the walls.

import { Mesh } from "../vendor/three/three.module.js";
import { createSurfaces, addQuad, addBox, breaks, pushVertex, linearAlbedo, toGeometry } from "./surfaces.js";
import { random } from "./materials.js";
import { createGardenMaterials } from "./garden-textures.js";
import { smoothstep } from "../plan/light.js";

const GARDEN_DEPTH = 4.5; // from the glass to the garden wall
const GARDEN_WALL_HEIGHT = 4.8;
const GARDEN_LEVEL = -0.12; // a step down from the lobby floor
const MULLION_SPACING = 1.8;
const MULLION_WIDTH = 0.05;
const MULLION_DEPTH = 0.08;
const SILL_HEIGHT = 0.04;
const HEAD_HEIGHT = 0.06;
const GLAZING_MARGIN = 0.9; // solid wall left at each end of the lobby's glass sides
const STEEL = "#2E2D2B";
const STONE = "#6E6B63";
const BAMBOO = ["#7E9450", "#8FA45A", "#6F8846", "#9AAE6A"];
const LEAF_SPREAD = 0.35; // how far a leaf spray hangs off its culm
const WOODS_DISTANCE = 12; // beyond the garden wall
const WOODS_TILE = [28, 9]; // metres covered by one repeat of the woods texture
const WOODS_BASE = 4; // its crowns rise well above the garden walls
const UP = [0, 1, 0];
const WHITE = [1, 1, 1];
// Where the raked garden's stones lie: u along the garden, v away from the glass.
const RAKED_STONES = [{ u: 3.1, v: 1.9, radius: 0.38 }, { u: 5.9, v: 1.1, radius: 0.24 }];
const STEPPING_STONES = [{ u: 1.6, v: 1.2 }, { u: 2.5, v: 1.7 }, { u: 3.5, v: 1.4 }, { u: 4.4, v: 1.9 }];



// The glass in a lobby side wall, as an opening in that wall.
export function glazingOpening(room) {
  return { from: GLAZING_MARGIN, to: room.length - GLAZING_MARGIN, height: room.ceiling };
}

// side: -1 for the garden at -x, +1 for the one at +x. A garden point: u along
// the garden from the lobby's near end, fromGlass out from the glass, at height y.
function gardenFrame(room, side) {
  const wallX = (side * room.width) / 2;
  return {
    side,
    length: room.length,
    point: (u, fromGlass, y) => [wallX + side * fromGlass, y, room.nearZ - u],
    along: [0, 0, -1],
    outward: [side, 0, 0],
  };
}

// Mullions, sill and head in the walls' own mesh, standing proud on the room side.
export function addGlazingFrames(walls, room) {
  const { from, to } = glazingOpening(room);
  const span = to - from;
  const panes = Math.max(1, Math.round(span / MULLION_SPACING));
  const albedo = linearAlbedo(STEEL);
  for (const side of [-1, 1]) {
    const wallX = (side * room.width) / 2;
    const basis = (z) => ({ origin: [wallX, 0, z], right: [0, 0, side], up: UP, out: [-side, 0, 0] });
    for (let pane = 0; pane <= panes; pane += 1) {
      addBox(walls, {
        ...basis(room.nearZ - from - (pane * span) / panes), albedo, faces: ["front", "left", "right"],
        min: [-MULLION_WIDTH / 2, 0, 0], max: [MULLION_WIDTH / 2, room.ceiling, MULLION_DEPTH],
      });
    }
    // right runs towards +z on the +x side and towards -z on the other.
    const start = side < 0 ? room.nearZ - from : room.nearZ - to;
    addBox(walls, { ...basis(start), albedo, faces: ["front", "top"], min: [0, 0, 0], max: [span, SILL_HEIGHT, MULLION_DEPTH] });
    addBox(walls, { ...basis(start), albedo, faces: ["front", "bottom"], min: [0, room.ceiling - HEAD_HEIGHT, 0], max: [span, room.ceiling, MULLION_DEPTH] });
  }
}

// A weathered stone: an irregular ring at the ground, a smaller one near the
// top, and a crown, lit from the sky.
function addStone(surfaces, [x, y, z], radius, height, next) {
  const albedo = linearAlbedo(STONE);
  const sides = 9;
  const ring = (scale, level, light) => Array.from({ length: sides }, (_, index) => {
    const angle = (index / sides) * Math.PI * 2;
    const reach = radius * scale * (0.82 + next() * 0.3);
    return pushVertex(surfaces, [x + Math.cos(angle) * reach, y + level * (0.9 + next() * 0.15), z + Math.sin(angle) * reach], [0, 0], albedo, light);
  });
  const base = ring(1, 0, 0.62);
  const shoulder = ring(0.62, height * 0.8, 0.86);
  const crown = pushVertex(surfaces, [x, y + height, z], [0, 0], albedo, 1);
  for (let index = 0; index < sides; index += 1) {
    const following = (index + 1) % sides;
    surfaces.indices.push(base[index], shoulder[index], shoulder[following], base[index], shoulder[following], base[following]);
    surfaces.indices.push(shoulder[index], crown, shoulder[following]);
  }
}

// A culm of bamboo: a slim green shaft, darker at its foot, ringed by paler
// nodes that stand a little proud of it, as real bamboo's do.
const NODE_HEIGHT = 0.016;
const NODE_PROUD = 1.12; // a node's width against the shaft's

function addCulm(surfaces, [x, y, z], radius, height, next) {
  const albedo = linearAlbedo(BAMBOO[Math.floor(next() * BAMBOO.length)]);
  const light = (shade, level) => shade * (0.6 + 0.4 * smoothstep(0, 5, level));
  const ring = (halfWidth, from, to, brightness) => {
    const corners = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([dx, dz]) => [x + dx * halfWidth, from, z + dz * halfWidth]);
    corners.forEach((corner, index) => {
      const following = corners[(index + 1) % 4];
      const shade = index % 2 ? 1 : 0.93; // two faces turned to the sky, two away
      addQuad(surfaces, {
        origin: corner, uAxis: [(following[0] - corner[0]) / (2 * halfWidth), 0, (following[2] - corner[2]) / (2 * halfWidth)], vAxis: UP, albedo,
        uBreaks: [0, 2 * halfWidth], vBreaks: breaks(to - from, 2),
        light: (_, level) => light(shade, from + level - y) * brightness,
      });
    });
  };
  ring(radius, y, y + height, 1);
  for (let level = 0.25 + next() * 0.15; level < height; level += 0.28 + next() * 0.1) {
    ring(radius * NODE_PROUD, y + level - NODE_HEIGHT / 2, y + level + NODE_HEIGHT / 2, 1.2);
  }
}

// A leaf card: one spray of leaves on a quad that faces the lobby, turned a little.
function addLeafCard(surfaces, [x, y, z], width, height, side, next) {
  const turn = (next() - 0.5) * 1.2;
  const facing = [-side * Math.cos(turn), 0, Math.sin(turn)];
  const across = [facing[2], 0, -facing[0]].map((value) => value * width * (next() > 0.5 ? 1 : -1));
  addQuad(surfaces, {
    origin: [x - across[0] / 2, y - height / 2, z - across[2] / 2], uAxis: across, vAxis: UP.map((value) => value * height),
    uBreaks: [0, 1], vBreaks: [0, 1], albedo: WHITE,
    light: (u, v) => 0.62 + 0.38 * smoothstep(2, 9, y + (v - 0.5) * height),
  });
}

function addGrove(solid, leaves, frame, { count, fromU, toU, next }) {
  for (let culm = 0; culm < count; culm += 1) {
    const u = fromU + next() * (toU - fromU);
    const fromGlass = GARDEN_DEPTH - 0.25 - next() * 1.2;
    const height = 6.5 + next() * 3;
    const base = frame.point(u, fromGlass, GARDEN_LEVEL);
    addCulm(solid, base, 0.025 + next() * 0.015, height, next);
    for (let level = 3 + next() * 0.8; level < height - 0.2; level += 0.8 + next() * 0.5) {
      const centre = [base[0] + (next() - 0.5) * LEAF_SPREAD, level, base[2] + (next() - 0.5) * LEAF_SPREAD];
      addLeafCard(leaves, centre, 1.1 + next() * 0.7, 0.8 + next() * 0.5, frame.side, next);
    }
  }
}

function addEnclosure(concrete, frame) {
  const { point, along, outward, length } = frame;
  const height = GARDEN_WALL_HEIGHT - GARDEN_LEVEL;
  const light = (cornerDistance, level) => (0.7 + 0.28 * smoothstep(0, height, level)) * (0.84 + 0.16 * smoothstep(0, 1.2, cornerDistance));
  addQuad(concrete, {
    origin: point(0, GARDEN_DEPTH, GARDEN_LEVEL), uAxis: along, vAxis: UP, albedo: WHITE,
    uBreaks: breaks(length, 0.75), vBreaks: breaks(height, 0.6),
    light: (u, level) => light(Math.min(u, length - u), level),
  });
  for (const u of [0, length]) {
    addQuad(concrete, {
      origin: point(u, 0, GARDEN_LEVEL), uAxis: outward, vAxis: UP, albedo: WHITE,
      uBreaks: breaks(GARDEN_DEPTH, 0.75), vBreaks: breaks(height, 0.6),
      light: (fromGlass, level) => light(GARDEN_DEPTH - fromGlass, level),
    });
  }
  addQuad(concrete, {
    origin: point(0, 0, GARDEN_LEVEL), uAxis: along, vAxis: UP, albedo: WHITE,
    uBreaks: [0, length], vBreaks: [0, -GARDEN_LEVEL], light: () => 0.66,
  });
}

function addGround(surfaces, frame) {
  const { point, along, outward, length } = frame;
  addQuad(surfaces, {
    origin: point(0, 0, GARDEN_LEVEL), uAxis: along, vAxis: outward, albedo: WHITE,
    uBreaks: breaks(length, 0.5), vBreaks: breaks(GARDEN_DEPTH, 0.5),
    light: (u, fromGlass) => 0.8 + 0.2 * smoothstep(0, 1.2, Math.min(u, length - u, GARDEN_DEPTH - fromGlass)),
  });
}

function addWoods(surfaces, frame) {
  const overhang = 25;
  const repeats = Math.round((frame.length + 2 * overhang) / WOODS_TILE[0]);
  addQuad(surfaces, {
    origin: frame.point(-overhang, GARDEN_DEPTH + WOODS_DISTANCE, WOODS_BASE),
    uAxis: frame.along.map((value) => (value * (frame.length + 2 * overhang)) / repeats), vAxis: UP.map((value) => value * WOODS_TILE[1]),
    uBreaks: [0, repeats], vBreaks: [0, 1], albedo: WHITE, light: () => 0.95,
  });
}

function addGlass(surfaces, room, frame) {
  const { from, to } = glazingOpening(room);
  addQuad(surfaces, {
    origin: frame.point(from, 0.01, 0), uAxis: frame.along, vAxis: UP, albedo: WHITE,
    uBreaks: [0, to - from], vBreaks: [0, room.ceiling],
  });
}

// Every mesh of both gardens, ready to add to the building.
export function buildGardens(room, anisotropy) {
  const materials = createGardenMaterials(anisotropy, { length: room.length, depth: GARDEN_DEPTH, stones: RAKED_STONES });
  const next = random(71);
  const surfaces = Object.fromEntries(Object.keys(materials).map((name) => [name, createSurfaces()]));
  const [raked, mossy] = [gardenFrame(room, -1), gardenFrame(room, 1)];

  addGround(surfaces.gravel, raked);
  addGround(surfaces.moss, mossy);
  for (const stone of RAKED_STONES) addStone(surfaces.solid, raked.point(stone.u, stone.v, GARDEN_LEVEL), stone.radius, stone.radius * 0.9, next);
  addStone(surfaces.solid, mossy.point(6.4, 2.4, GARDEN_LEVEL), 0.6, 0.75, next);
  for (const stone of STEPPING_STONES) addStone(surfaces.solid, mossy.point(stone.u, stone.v, GARDEN_LEVEL), 0.24, 0.05, next);
  addGrove(surfaces.solid, surfaces.leaves, raked, { count: 34, fromU: 0.4, toU: room.length - 0.4, next });
  addGrove(surfaces.solid, surfaces.leaves, mossy, { count: 12, fromU: room.length - 3.4, toU: room.length - 0.4, next });
  for (const frame of [raked, mossy]) {
    addEnclosure(surfaces.concrete, frame);
    addWoods(surfaces.woods, frame);
    addGlass(surfaces.glass, room, frame);
  }
  return Object.entries(surfaces).map(([name, collected]) => {
    const mesh = new Mesh(toGeometry(collected), materials[name]);
    // The glass stops every tap aimed outside, so nothing behind it needs testing.
    if (name !== "glass") mesh.raycast = () => {};
    return mesh;
  });
}
