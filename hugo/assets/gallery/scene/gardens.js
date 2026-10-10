// The lobby's gardens. Its long sides are frameless floor-to-ceiling glass,
// and beyond each lies a walled court open to the sky, enclosed by
// fair-faced concrete as Tadao Ando's are, with woods beyond the walls. Both
// are ground of rolling moss with stones bedded in it and bamboo against
// the far wall, its dry leaves fallen round it: in one a grove behind a group
// of three stones, in the other a smaller stand beyond a path of stepping
// stones to one boulder.

import { Mesh } from "../vendor/three/three.module.js";
import { createSurfaces, addQuad, addBox, breaks, pushVertex, linearAlbedo, toGeometry } from "./surfaces.js";
import { random } from "./materials.js";
import { createGardenMaterials, PANEL_WIDTH, PANEL_HEIGHT } from "./garden-textures.js";
import { planGrove, addGrove } from "./bamboo.js";
import { createGlassMirror } from "./glass.js";
import { smoothstep } from "../plan/light.js";
import { WALL_THICKNESS } from "../constants.js";

const GARDEN_DEPTH = 4.5; // from the glass to the garden wall
const GARDEN_WALL_HEIGHT = 4.8;
const GARDEN_LEVEL = -0.12; // a step down from the lobby floor
const PANE_WIDTH = 3; // the glass comes in panes of about this width
const JOINT_WIDTH = 0.01; // the silicone between two panes
const GLASS_THICKNESS = 0.03; // laminated double glazing, as a pane this size needs
export const SLOT_WIDTH = 0.045; // the slot in floor, ceiling and jambs that takes the glass
export const GLASS_INSET = 0.03; // the glass stands this far inside the wall's outer face
const GLAZING_MARGIN = 0.9; // solid wall left at each end of the lobby's glass sides
const JOINT = "#3E3F40";
const GLASS_EDGE = "#5F8F88"; // a pane seen edge on: the green of the iron in the glass
export const SLOT = "#1F3B39"; // dark, with the green of a glass edge
const STONE = ["#6E6B63", "#7D7A70", "#5E5C56", "#78796A"]; // grey granite, a little lichen
const STONE_SINK = 0.03; // stones are bedded in the ground, never set on it: by this much at least
const MOSS_RELIEF = 0.035; // the tallest moss cushion, in metres
const MOSS_SWELL = 0.22; // the highest knoll of the moss garden
const MOSS_GRID = 0.08;
const WOODS_DISTANCE = 12; // beyond the garden wall
const WOODS_TILE = [28, 9]; // metres covered by one repeat of the woods texture
const WOODS_BASE = 4; // its crowns rise well above the garden walls
const UP = [0, 1, 0];
const WHITE = [1, 1, 1];
// Each garden's plan: u along it from the lobby's near end, fromGlass out
// from the glass, in metres. In one, three uneven stones sunk deep as a
// garden sets them stand before a grove the length of the wall; in the
// other, a path runs to a single boulder, and a smaller stand of bamboo
// rises beyond it at the far end.
const GROVE = { count: 32, fromU: 0.4, near: 2.7, far: 4.3 };
const STAND = { count: 12, fromU: 6.0, near: 2.6, far: 4.3 };
const GROUP_STONES = [
  { u: 6.3, fromGlass: 2.0, radius: 0.5, height: 0.55, sink: 0.12 },
  { u: 6.95, fromGlass: 2.8, radius: 0.34, height: 0.3, sink: 0.08 },
  { u: 5.7, fromGlass: 2.9, radius: 0.24, height: 0.15, sink: 0.06 },
];
const PATH_STONES = [
  ...[[1.6, 1.2], [2.5, 1.7], [3.5, 1.4], [4.4, 1.9]].map(([u, fromGlass]) => ({ u, fromGlass, radius: 0.24, height: 0.07 })),
  { u: 5.2, fromGlass: 3.2, radius: 0.5, height: 0.6, sink: 0.1 },
];

// The glass in a lobby side wall, as an opening in that wall.
export function glazingOpening(room) {
  return { from: GLAZING_MARGIN, to: room.length - GLAZING_MARGIN, height: room.ceiling };
}

// The ground of a garden is never flat: it swells into low knolls, as a
// garden is shaped, settling to the level at the glass and the walls.
// Returns 0 to 1.
const SWELL_EDGE = 0.8; // metres from an edge before the ground may rise

function swell(u, fromGlass, length) {
  const toEdge = Math.min(u, length - u, GARDEN_DEPTH - fromGlass, fromGlass);
  const waves = 0.55 * Math.sin(u * 1.9 + 0.7) * Math.sin(fromGlass * 1.6 + 1.1)
    + 0.3 * Math.sin(u * 3.3 - fromGlass * 2.2 + 2.4) + 0.15 * Math.sin(u * 0.9 + fromGlass * 4.1);
  return (0.5 + 0.5 * waves) * smoothstep(0, SWELL_EDGE, toEdge);
}

// How bright a point of rolling ground is, against flat ground: brighter
// where it tilts up towards the light, darker where it turns away.
const GROUND_LIGHT_FROM = [0.35, 1, -0.45]; // [along, up, out from the glass]

function slopeLight(heightAt, u, fromGlass) {
  const step = 0.05;
  const alongSlope = (heightAt(u + step, fromGlass) - heightAt(u - step, fromGlass)) / (2 * step);
  const outSlope = (heightAt(u, fromGlass + step) - heightAt(u, fromGlass - step)) / (2 * step);
  const [along, up, out] = GROUND_LIGHT_FROM;
  const facing = (-alongSlope * along + up - outSlope * out) / Math.hypot(alongSlope, 1, outSlope);
  return facing / up;
}

// side: -1 for the garden at -x, +1 for the one at +x. A garden point: u along
// the garden from the lobby's near end, fromGlass out from the wall's outer
// face, where the glass stands, at height y.
// groundAt(u, fromGlass): the height of the rolling ground there.
function gardenFrame(room, side, swellHeight) {
  const wallX = side * (room.width / 2 + WALL_THICKNESS);
  return {
    side,
    length: room.length,
    point: (u, fromGlass, y) => [wallX + side * fromGlass, y, room.nearZ - u],
    groundAt: (u, fromGlass) => GARDEN_LEVEL + swell(u, fromGlass, room.length) * swellHeight,
    along: [0, 0, -1],
    outward: [side, 0, 0],
  };
}

// The glass as Ando and Herzog & de Meuron set it: no frame. Large panes run
// into slots in the floor, the ceiling and the jambs, so wall meets glass with only a
// shadow line, dark with the green of the glass's own edge, and stand edge to
// edge with a slim grey silicone joint, so the garden reads whole rather than
// through bars. The glass stands at the wall's outer face, at the end of the
// reveal through it; the slots are drawn into the reveal (see building.js).
// The glass has its real thickness: at each joint the silicone shows grey
// face on, and the panes' edges green either side of it, a band that widens
// the more obliquely it is seen. The joints go in the walls' own mesh.
export function addGlazingJoints(walls, room) {
  const { from, to } = glazingOpening(room);
  const span = to - from;
  const panes = Math.max(1, Math.round(span / PANE_WIDTH));
  const [silicone, edge] = [JOINT, GLASS_EDGE].map(linearAlbedo);
  for (const side of [-1, 1]) {
    const wallX = side * (room.width / 2 + WALL_THICKNESS);
    const basis = (z) => ({ origin: [wallX, 0, z], right: [0, 0, side], up: UP, out: [-side, 0, 0] });
    // Measured into the room from the wall's outer face; the glass stands GLASS_INSET inside it.
    const [outside, inside] = [GLASS_INSET - GLASS_THICKNESS / 2, GLASS_INSET + GLASS_THICKNESS / 2];
    for (let pane = 1; pane < panes; pane += 1) {
      const joint = {
        ...basis(room.nearZ - from - (pane * span) / panes),
        min: [-JOINT_WIDTH / 2, 0, outside], max: [JOINT_WIDTH / 2, room.ceiling, inside],
      };
      addBox(walls, { ...joint, albedo: silicone, faces: ["front"] });
      addBox(walls, { ...joint, albedo: edge, faces: ["left", "right"] });
    }
  }
}

// Stone profiles, foot to top, as [reach, height] fractions: a weathered
// boulder, and a stepping stone with a flat, worn top.
const BOULDER = [[1, 0], [1.02, 0.22], [0.92, 0.5], [0.72, 0.76], [0.42, 0.94], [0, 1]];
const STEPPING = [[1, 0], [1, 0.55], [0.9, 0.92], [0.62, 1], [0, 1]];
const STONE_SIDES = 16;

// A stone of rings around a vertical axis. Each ring is lumped by a few soft
// waves, so the outline is irregular without turning spiky; light comes from
// the slope (faces turned to the sky are brightest) and fades into the ground
// at the foot, and the colour is mottled vertex by vertex.
function addStone(surfaces, [x, y, z], { radius, height, sink = STONE_SINK }, profile, next) {
  const waves = [2, 3, 5].map((count) => ({ count, phase: next() * Math.PI * 2, amount: 0.04 + next() * 0.04 }));
  const lump = (angle, fraction) => 1 + waves.reduce((sum, wave) => sum + wave.amount * Math.sin(wave.count * angle + wave.phase + fraction * 1.7), 0);
  const tones = STONE.map(linearAlbedo);
  const rings = profile.map(([reach, fraction], level) => {
    const below = profile[Math.max(0, level - 1)];
    const above = profile[Math.min(profile.length - 1, level + 1)];
    // The slope here, from the rings either side: rise over run gives how much the face looks up.
    const run = (below[0] - above[0]) * radius;
    const rise = (above[1] - below[1]) * height;
    const skyward = run / Math.hypot(run, rise);
    const foot = smoothstep(0, 0.35, fraction);
    // The granite's texture wraps round the stone in metres; up it, roughly the distance climbed.
    const textureV = fraction * height + (1 - reach) * radius;
    const mottle = Array.from({ length: STONE_SIDES }, () => ({ tone: tones[Math.floor(next() * tones.length)], shade: 0.96 + next() * 0.08 }));
    const vertex = (index) => {
      const angle = (index / STONE_SIDES) * Math.PI * 2;
      const distance = reach * radius * lump(angle, fraction);
      const { tone, shade } = mottle[index % STONE_SIDES];
      const light = (0.5 + 0.42 * skyward) * (0.72 + 0.28 * foot) * shade;
      return pushVertex(surfaces, [x + Math.cos(angle) * distance, y - sink + fraction * (height + sink), z + Math.sin(angle) * distance], [angle * radius, textureV], tone, light);
    };
    // The top is one vertex: one colour per side there would draw a star.
    if (reach === 0) return new Array(STONE_SIDES + 1).fill(vertex(0));
    // The last vertex closes the ring where the first opened it, with the texture's far edge.
    return Array.from({ length: STONE_SIDES + 1 }, (_, index) => vertex(index));
  });
  for (let level = 0; level < rings.length - 1; level += 1) {
    const [lower, upper] = [rings[level], rings[level + 1]];
    for (let index = 0; index < STONE_SIDES; index += 1) {
      const following = index + 1;
      surfaces.indices.push(lower[index], upper[index], upper[following], lower[index], upper[following], lower[following]);
    }
  }
}

// Cushion moss over the rolling ground: a fine grid lifted into soft mounds by a few crossing waves,
// lower towards the walls and around the stones, brighter on the crowns and
// darker in the hollows between them, and in the shade of the bamboo.
// stones: [{ u, fromGlass, radius }]; culms: [{ u, fromGlass }].
const CANOPY_SHADE = 0.2;
const CANOPY_RADIUS = 1.4; // how far a culm's leaves spread their shade

function addMossGround(surfaces, frame, stones, culms) {
  const { point, length } = frame;
  const columns = Math.round(length / MOSS_GRID);
  const rows = Math.round(GARDEN_DEPTH / MOSS_GRID);
  const mounds = (u, v) => 0.5 + 0.25 * Math.sin(u * 6.1 + 1.3) * Math.sin(v * 5.3 + 0.4)
    + 0.15 * Math.sin(u * 11.7 + v * 4.1) + 0.1 * Math.sin(u * 2.9 - v * 9.7 + 2);
  const shadeAt = (u, fromGlass) => Math.max(0, ...culms.map((culm) =>
    1 - smoothstep(CANOPY_RADIUS * 0.4, CANOPY_RADIUS, Math.hypot(u - culm.u, fromGlass - culm.fromGlass))));
  const nearStoneAt = (u, fromGlass) => Math.min(1, ...stones.map((stone) =>
    smoothstep(stone.radius * 0.9, stone.radius + 0.3, Math.hypot(u - stone.u, fromGlass - stone.fromGlass))));
  const cushion = (u, fromGlass) => mounds(u, fromGlass)
    * smoothstep(0, 0.3, Math.min(u, length - u, GARDEN_DEPTH - fromGlass, fromGlass)) * nearStoneAt(u, fromGlass);
  const base = surfaces.positions.length / 3;
  for (let row = 0; row <= rows; row += 1) {
    for (let column = 0; column <= columns; column += 1) {
      const u = (column / columns) * length;
      const fromGlass = (row / rows) * GARDEN_DEPTH;
      const nearStone = nearStoneAt(u, fromGlass);
      const rise = cushion(u, fromGlass);
      const light = (0.8 + 0.2 * smoothstep(0, 1.2, Math.min(u, length - u, GARDEN_DEPTH - fromGlass)))
        * (0.76 + 0.38 * rise) * (0.85 + 0.15 * nearStone) * slopeLight(frame.groundAt, u, fromGlass)
        * (1 - CANOPY_SHADE * shadeAt(u, fromGlass));
      pushVertex(surfaces, point(u, fromGlass, frame.groundAt(u, fromGlass) + rise * MOSS_RELIEF), [u, fromGlass], WHITE, light);
    }
  }
  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const a = base + row * (columns + 1) + column;
      const c = a + columns + 2;
      surfaces.indices.push(a, a + 1, c, a, c, c - 1);
    }
  }
  return (u, fromGlass) => frame.groundAt(u, fromGlass) + cushion(u, fromGlass) * MOSS_RELIEF;
}

// A wall of formwork panels whose edges are chamfered, as the fillets in the
// formwork leave them: each joint is a shallow V, read by its shape and a
// faint catch of light on its lower lip rather than by any dark line. origin,
// uAxis, vAxis: the wall's face; into: the direction into the wall. As Ando
// sizes a wall to whole panels, each wall is divided into whole panels near
// the formwork's size, and the texture stretched to match, so no panel and no
// form-tie hole is ever cut at a corner or the coping. No joint at the wall's
// own ends, and every V closes at its edges, so none opens a slot through.
const CHAMFER = 0.012;

function addPanelledWall(surfaces, { origin, uAxis, vAxis, into, width, height, light }) {
  const joints = (length, spacing) => {
    const positions = [];
    for (let joint = spacing; joint < length - spacing / 2; joint += spacing) positions.push(joint);
    return positions;
  };
  const [panelWidth, panelHeight] = [[width, PANEL_WIDTH], [height, PANEL_HEIGHT]].map(([length, size]) =>
    length / Math.max(1, Math.round(length / size)));
  const [jointsU, jointsV] = [joints(width, panelWidth), joints(height, panelHeight)];
  const around = (positions) => positions.flatMap((joint) => [joint - CHAMFER, joint, joint + CHAMFER]);
  const uBreaks = breaks(width, 0.75, [...around(jointsU), CHAMFER, width - CHAMFER]);
  const vBreaks = breaks(height, 0.6, [...around(jointsV), height - CHAMFER]);
  const isEdge = (u, v) => u === 0 || u === width || v === 0 || v === height;
  // How deep into a joint a position lies (1 at the crease), and which side of it.
  const nearest = (position, positions) => positions.reduce((best, joint) =>
    (Math.abs(position - joint) < Math.abs(best) ? position - joint : best), Infinity);
  const crease = (offset) => Math.max(0, 1 - Math.abs(offset) / CHAMFER);
  const base = surfaces.positions.length / 3;
  for (const v of vBreaks) {
    for (const u of uBreaks) {
      const [acrossOffset, upOffset] = [nearest(u, jointsU), nearest(v, jointsV)];
      const depth = isEdge(u, v) ? 0 : Math.max(crease(acrossOffset), crease(upOffset)) * CHAMFER;
      // The lower lip of a horizontal joint faces the sky, the upper one the ground.
      const edgeLight = (1 - 0.1 * crease(upOffset)) * (1 - 0.08 * crease(acrossOffset))
        * (Math.abs(upOffset) === CHAMFER ? (upOffset < 0 ? 1.05 : 0.97) : 1);
      const position = origin.map((value, index) => value + uAxis[index] * u + vAxis[index] * v + into[index] * depth);
      pushVertex(surfaces, position, [u * (PANEL_WIDTH / panelWidth), v * (PANEL_HEIGHT / panelHeight)], WHITE, light(u, v) * edgeLight);
    }
  }
  for (let row = 0; row < vBreaks.length - 1; row += 1) {
    for (let column = 0; column < uBreaks.length - 1; column += 1) {
      const a = base + row * uBreaks.length + column;
      const c = a + uBreaks.length + 1;
      surfaces.indices.push(a, a + 1, c, a, c, c - 1);
    }
  }
}

function addEnclosure(concrete, frame) {
  const { point, along, outward, length } = frame;
  const height = GARDEN_WALL_HEIGHT - GARDEN_LEVEL;
  const light = (cornerDistance, level) => (0.7 + 0.28 * smoothstep(0, height, level)) * (0.84 + 0.16 * smoothstep(0, 1.2, cornerDistance));
  addPanelledWall(concrete, {
    origin: point(0, GARDEN_DEPTH, GARDEN_LEVEL), uAxis: along, vAxis: UP, into: outward, width: length, height,
    light: (u, level) => light(Math.min(u, length - u), level),
  });
  for (const [u, into] of [[0, along.map((value) => -value)], [length, along]]) {
    addPanelledWall(concrete, {
      origin: point(u, 0, GARDEN_LEVEL), uAxis: outward, vAxis: UP, into, width: GARDEN_DEPTH, height,
      light: (fromGlass, level) => light(GARDEN_DEPTH - fromGlass, level),
    });
  }
  addQuad(concrete, {
    origin: point(0, 0, GARDEN_LEVEL), uAxis: along, vAxis: UP, albedo: WHITE,
    uBreaks: [0, length], vBreaks: [0, -GARDEN_LEVEL], light: () => 0.66,
  });
}

// Bamboo sheds its narrow leaves all year: they lie thickest among the culms
// and thin out beyond them, each on the ground it fell on, from the green of
// a fresh fall to straw. surfaceAt(u, fromGlass): the ground's height there.
const FALLEN_LEAF = { length: 0.13, width: 0.017, colours: ["#B9A56A", "#C8B37C", "#A48E5A", "#8E8A50", "#D2C08E", "#7E7A46"] };
const FALLEN_SPREAD = 1.8; // metres from a culm that its leaves reach

function addFallenLeaves(surfaces, frame, surfaceAt, { count, culms, stones, next }) {
  const leaf = FALLEN_LEAF;
  const tones = leaf.colours.map(linearAlbedo);
  for (let fallen = 0; fallen < count; fallen += 1) {
    const culm = culms[Math.floor(next() * culms.length)];
    const angle = next() * Math.PI * 2;
    const distance = FALLEN_SPREAD * next() ** 1.2;
    const u = culm.u + Math.cos(angle) * distance;
    const fromGlass = culm.fromGlass + Math.sin(angle) * distance;
    if (u < 0.15 || u > frame.length - 0.15 || fromGlass < 0.15 || fromGlass > GARDEN_DEPTH - 0.15) continue;
    if (stones.some((stone) => Math.hypot(u - stone.u, fromGlass - stone.fromGlass) < stone.radius * 1.1)) continue;
    const turn = next() * Math.PI;
    const [alongU, alongV] = [Math.cos(turn), Math.sin(turn)];
    const length = leaf.length * (0.7 + next() * 0.6);
    const [first, second] = [tones[Math.floor(next() * tones.length)], tones[Math.floor(next() * tones.length)]];
    const mix = next();
    const albedo = first.map((channel, index) => channel + (second[index] - channel) * mix);
    const light = 0.78 + next() * 0.3;
    // Tip, one side, stem, the other side: widest a third of the way from the stem.
    const outline = [[0.5, 0], [-0.17, 0.5], [-0.5, 0], [-0.17, -0.5]].map(([along, across]) => {
      const pointU = u + alongU * along * length - alongV * across * leaf.width;
      const pointV = fromGlass + alongV * along * length + alongU * across * leaf.width;
      return pushVertex(surfaces, frame.point(pointU, pointV, surfaceAt(pointU, pointV) + 0.004), [0, 0], albedo, light);
    });
    surfaces.indices.push(outline[0], outline[1], outline[2], outline[0], outline[2], outline[3]);
  }
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

// The glass's outer face, its faintly green body. Its inner face, its
// thickness nearer the room, carries the reflection (see addGlassMirror).
function addGlass(surfaces, room, frame) {
  const { from, to } = glazingOpening(room);
  addQuad(surfaces, {
    origin: frame.point(from, -GLASS_INSET - GLASS_THICKNESS / 2, 0), uAxis: frame.along, vAxis: UP, albedo: WHITE,
    uBreaks: [0, to - from], vBreaks: [0, room.ceiling],
  });
}

// The reflection on the glass's inner face, facing the lobby.
function addGlassMirror(room, frame) {
  const { from, to } = glazingOpening(room);
  const mirror = createGlassMirror(to - from, room.ceiling);
  mirror.position.set(...frame.point((from + to) / 2, -GLASS_INSET + GLASS_THICKNESS / 2, room.ceiling / 2));
  mirror.rotation.y = (-frame.side * Math.PI) / 2; // its face, +z of its own, turned towards the room
  return mirror;
}

// Every mesh of both gardens, ready to add to the building.
export function buildGardens(room, anisotropy) {
  const next = random(71);
  const materials = createGardenMaterials(anisotropy);
  const surfaces = Object.fromEntries(Object.keys(materials).map((name) => [name, createSurfaces()]));
  const gardens = [gardenFrame(room, -1, MOSS_SWELL), gardenFrame(room, 1, MOSS_SWELL)];
  const groundPoint = (frame, { u, fromGlass }) => frame.point(u, fromGlass, frame.groundAt(u, fromGlass));
  const [stonesGarden, pathGarden] = gardens;
  const bounds = { depth: GARDEN_DEPTH, wallHeight: GARDEN_WALL_HEIGHT };
  for (const [frame, stones, plan] of [
    [stonesGarden, GROUP_STONES, { ...GROVE, toU: room.length - 0.4 }],
    [pathGarden, PATH_STONES, { ...STAND, toU: room.length - 0.4 }],
  ]) {
    const culms = planGrove({ ...plan, stones, next });
    const ground = addMossGround(surfaces.moss, frame, stones, culms);
    for (const stone of stones) addStone(surfaces.stone, groundPoint(frame, stone), stone, stone.height < stone.radius * 0.5 ? STEPPING : BOULDER, next);
    addGrove(surfaces.solid, frame, culms, bounds, next);
    addFallenLeaves(surfaces.solid, frame, ground, { count: culms.length * 140, culms, stones, next });
  }
  for (const frame of gardens) {
    addEnclosure(surfaces.concrete, frame);
    addWoods(surfaces.woods, frame);
    addGlass(surfaces.glass, room, frame);
  }
  const meshes = Object.entries(surfaces).map(([name, collected]) => {
    const mesh = new Mesh(toGeometry(collected), materials[name]);
    mesh.name = name;
    // The glass stops every tap aimed outside, so nothing behind it needs testing.
    if (name !== "glass") mesh.raycast = () => {};
    return mesh;
  });
  return [...meshes, ...gardens.map((frame) => addGlassMirror(room, frame))];
}
