// Bamboo as a Japanese court grows it against its wall: running Phyllostachys,
// culms of 4 to 9 m, most clearing the coping, each bowed its own way,
// bare below and leafy above. Each culm tapers and is ringed by nodes that
// stand proud, a band of white bloom under each. From the upper nodes branches
// leave in pairs, on alternate sides node to node, rise and arch over; along
// them and at their tips the narrow leaves hang in fans, each one modelled:
// a pointed blade folded along its midrib and drooping at its tip.
//
// Built in a garden's own measures (u along it, fromGlass out from the glass,
// y up), so nothing reaches through its walls below their coping.

import { pushVertex, linearAlbedo } from "./surfaces.js";
import { smoothstep } from "../plan/light.js";

const CULM = ["#7E9450", "#8FA45A", "#6F8846", "#9AAE6A"]; // at the foot
const CULM_TIP = "#B4B46A";
const BLOOM = "#C8CDB6";
const BRANCH = "#8C9A58";
const LEAF = ["#5E7A35", "#6E8A3C", "#7F9846", "#55702F", "#688A40", "#7A9040"];
const AGEING_LEAF = ["#A8A055", "#B9A76A"]; // the few yellowing among them
const AGEING_SHARE = 0.06;

const CULM_SIDES = 8;
const NODE_HEIGHT = 0.012;
const NODE_PROUD = 1.1; // a node's width against the shaft's
const BLOOM_DEPTH = 0.05; // the white band below each node
const TIP_TAPER = 0.5; // how much thinner the culm is at its tip
const TAPER_CURVE = 2; // it keeps its girth low down and thins in the upper part
const MAX_LEAN = 1.3; // metres off plumb at the tip
const MAX_SWAY = 0.15; // metres a culm wanders either side of its bow on the way up
const BRANCHING_FROM = 0.33; // share of the culm's height below which it is bare
const BRANCH_SIDES = 3;
const WALL_MARGIN = 0.15; // how near a wall a leaf may come

const add = (a, b) => a.map((value, index) => value + b[index]);
const scale = (vector, amount) => vector.map((value) => value * amount);
const cross = ([ax, ay, az], [bx, by, bz]) => [ay * bz - az * by, az * bx - ax * bz, ax * by - ay * bx];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
function normalise(vector) {
  return scale(vector, 1 / Math.hypot(...vector));
}

const LIGHT_FROM = normalise([0.35, -0.45, 1]); // [along, out from the glass, up], as on the ground
const SIDE_LIGHT_FROM = normalise([0.35, -0.45, 0]); // the same sun, level

// Where a grove's culms stand: count of them between fromU and toU, from the
// glass between near and far, never closer together than a hand's width nor
// on a stone. A running bamboo comes up in patches where its rhizomes have
// spread, dense at their hearts and straggling at their edges, so the culms
// gather round a few centres rather than fill the band evenly. Most are slim,
// 4 to 10 cm across; one in four an old one, 10 to 16 cm across and among the
// tallest; one in five a young one, still short.
const OLD_SHARE = 0.25;
const YOUNG_SHARE = 0.2;
const CULM_SPACING = 0.12;
const CULMS_PER_PATCH = 7;
const PATCH_SPREAD = [0.7, 0.4]; // metres: along the garden, and out from the glass

export function planGrove({ count, fromU, toU, near, far, stones, next }) {
  const patches = Array.from({ length: Math.max(2, Math.round(count / CULMS_PER_PATCH)) }, () => [
    fromU + next() * (toU - fromU), near + next() * (far - near),
  ]);
  // Roughly normal, from the sum of three draws.
  const scatter = () => (next() + next() + next() - 1.5) * 1.4;
  const culms = [];
  while (culms.length < count) {
    const [patchU, patchFromGlass] = patches[Math.floor(next() * patches.length)];
    const u = patchU + scatter() * PATCH_SPREAD[0];
    const fromGlass = patchFromGlass + scatter() * PATCH_SPREAD[1];
    const isOutside = u < fromU || u > toU || fromGlass < near || fromGlass > far;
    const isCrowded = culms.some((culm) => Math.hypot(culm.u - u, culm.fromGlass - fromGlass) < CULM_SPACING);
    const isOnStone = stones.some((stone) => Math.hypot(stone.u - u, stone.fromGlass - fromGlass) < stone.radius + 0.25);
    if (isOutside || isCrowded || isOnStone) continue;
    const age = next();
    if (age < OLD_SHARE) culms.push({ u, fromGlass, height: 7.5 + next() * 2, radius: 0.05 + next() * 0.03 });
    else if (age < OLD_SHARE + YOUNG_SHARE) culms.push({ u, fromGlass, height: 3.5 + next() * 2, radius: 0.018 + next() * 0.012 });
    else culms.push({ u, fromGlass, height: 5.5 + next() * 3.5, radius: 0.02 + next() ** 2 * 0.03 });
  }
  return culms;
}

// Every culm of a grove, with its branches and leaves, into surfaces.
// frame: the garden's (point, groundAt, length); bounds: { depth, wallHeight }.
export function addGrove(surfaces, frame, culms, bounds, next) {
  const fits = ([u, fromGlass, y]) => y > bounds.wallHeight
    || (u > WALL_MARGIN && u < frame.length - WALL_MARGIN && fromGlass > WALL_MARGIN && fromGlass < bounds.depth - WALL_MARGIN);
  const put = ([u, fromGlass, y], albedo, light) => pushVertex(surfaces, frame.point(u, fromGlass, y), [0, 0], albedo, light);
  for (const culm of culms) {
    const foot = [culm.u, culm.fromGlass, frame.groundAt(culm.u, culm.fromGlass)];
    // Leaning to the light, mostly out from the wall towards the glass, but
    // never so far along the garden that it meets an end wall below the coping.
    const leanAngle = Math.PI + (next() - 0.5) * 3;
    const lean = [Math.sin(leanAngle), Math.cos(leanAngle)].map((value) => value * (0.2 + 0.8 * next()) * MAX_LEAN);
    const atCoping = (bounds.wallHeight / culm.height) ** 2;
    if (!fits([culm.u + lean[0] * atCoping, culm.fromGlass + lean[1] * atCoping, 0])) lean[0] = -lean[0];
    const { centreAt, radiusAt, nodes } = addCulm(put, surfaces, foot, culm, lean, next);
    // Deeper in the grove, nearer the wall, the light is less.
    const shade = 1 - 0.22 * smoothstep(bounds.depth - 1.5, bounds.depth - 0.2, culm.fromGlass);
    let side = next() * Math.PI * 2;
    for (const level of nodes) {
      if (level < culm.height * BRANCHING_FROM) continue;
      side += Math.PI + (next() - 0.5) * 0.8;
      const reach = (level - culm.height * BRANCHING_FROM) / (culm.height * (1 - BRANCHING_FROM));
      const length = (0.45 + 0.7 * (1 - reach)) * (0.7 + next() * 0.6);
      for (const [turn, share] of [[-0.3, 1], [0.3, 0.6]]) {
        const heading = side + turn;
        const start = add(centreAt(level), [Math.cos(heading) * radiusAt(level), Math.sin(heading) * radiusAt(level), 0.01]);
        addBranch(put, surfaces, { start, heading, length: length * share, shade, fits }, next);
      }
    }
  }
}

// A culm in rings from foot to tip. Returns the shaft's centre and girth at
// a height above its foot, and the heights of its nodes.
function addCulm(put, surfaces, [u, fromGlass, y], { height, radius }, lean, next) {
  const foot = linearAlbedo(CULM[Math.floor(next() * CULM.length)]);
  const [tip, bloom] = [CULM_TIP, BLOOM].map(linearAlbedo);
  // A gentle bow, steepening upwards, and a slow wander either side of it.
  const sway = [next() * MAX_SWAY, next() * MAX_SWAY];
  const phase = next() * Math.PI * 2;
  const centreAt = (level) => {
    const fraction = level / height;
    const bow = fraction ** 2;
    const wander = Math.sin(fraction * Math.PI * 1.5 + phase) * fraction;
    return [u + lean[0] * bow + sway[0] * wander, fromGlass + lean[1] * bow + sway[1] * wander, y + level];
  };
  const radiusAt = (level) => radius * (1 - TIP_TAPER * (level / height) ** TAPER_CURVE);
  const ring = (level, { proud = 1, tone = 0, brightness = 1 } = {}) => {
    const fraction = level / height;
    const centre = centreAt(level);
    const shaft = foot.map((channel, index) => channel + (tip[index] - channel) * fraction * 0.6);
    const albedo = shaft.map((channel, index) => channel + (bloom[index] - channel) * tone);
    const width = radiusAt(level) * proud;
    const lift = (0.6 + 0.4 * smoothstep(0, 5, level)) * brightness;
    return Array.from({ length: CULM_SIDES }, (_, index) => {
      const angle = (index / CULM_SIDES) * Math.PI * 2;
      const facing = Math.cos(angle) * SIDE_LIGHT_FROM[0] + Math.sin(angle) * SIDE_LIGHT_FROM[1];
      return put([centre[0] + Math.cos(angle) * width, centre[1] + Math.sin(angle) * width, centre[2]], albedo, lift * (0.74 + 0.26 * facing));
    });
  };
  const nodes = [];
  const rings = [ring(0)];
  for (let level = 0.25 + next() * 0.15; level < height; level += 0.28 + next() * 0.1) {
    nodes.push(level);
    rings.push(
      ring(level - BLOOM_DEPTH),
      ring(level - NODE_HEIGHT, { tone: 0.55 }),
      ring(level - NODE_HEIGHT / 2, { proud: NODE_PROUD, tone: 0.3, brightness: 1.12 }),
      ring(level + NODE_HEIGHT / 2, { proud: NODE_PROUD, brightness: 1.12 }),
      ring(level + NODE_HEIGHT),
    );
  }
  rings.push(ring(height));
  joinRings(surfaces, rings, CULM_SIDES);
  return { centreAt, radiusAt, nodes };
}

function joinRings(surfaces, rings, sides) {
  for (let index = 0; index < rings.length - 1; index += 1) {
    const [lower, upper] = [rings[index], rings[index + 1]];
    for (let side = 0; side < sides; side += 1) {
      const following = (side + 1) % sides;
      surfaces.indices.push(lower[side], upper[side], upper[following], lower[side], upper[following], lower[following]);
    }
  }
}

// How bright foliage is at a height: the grove's foot lies in its own shade.
const lightAt = (y) => 0.55 + 0.45 * smoothstep(1.5, 7, y);

// A branch rising from the culm and arching over, with its leaves. It is
// shortened until its tip stays clear of the walls.
const BRANCH_RISE = 0.8; // radians above level as it leaves the culm
const BRANCH_ARCH = 1.1; // how far it bends over along its length
const BRANCH_STEPS = 4;

function addBranch(put, surfaces, { start, heading, length, shade, fits }, next) {
  const out = [Math.cos(heading), Math.sin(heading), 0];
  // Its slope falls evenly along it: it rises, levels, then dips.
  const pointAt = (along, total) => {
    const angle = BRANCH_RISE - BRANCH_ARCH * (along / total);
    const outward = ((Math.sin(BRANCH_RISE) - Math.sin(angle)) * total) / BRANCH_ARCH;
    const rise = ((Math.cos(angle) - Math.cos(BRANCH_RISE)) * total) / BRANCH_ARCH;
    return add(start, [out[0] * outward, out[1] * outward, rise]);
  };
  let total = length;
  while (total > 0.15 && !fits(pointAt(total, total))) total *= 0.85;
  if (!fits(pointAt(total, total))) return;
  const path = Array.from({ length: BRANCH_STEPS + 1 }, (_, step) => pointAt((total * step) / BRANCH_STEPS, total));
  const albedo = linearAlbedo(BRANCH);
  const rings = path.map((centre, step) => {
    const width = 0.004 * (1 - 0.6 * (step / BRANCH_STEPS));
    return Array.from({ length: BRANCH_SIDES }, (_, index) => {
      const angle = (index / BRANCH_SIDES) * Math.PI * 2;
      const offset = add(scale([-out[1], out[0], 0], Math.cos(angle) * width), [0, 0, Math.sin(angle) * width]);
      return put(add(centre, offset), albedo, lightAt(centre[2]) * shade * 0.9);
    });
  });
  joinRings(surfaces, rings, BRANCH_SIDES);
  // Fans of leaves along the outer part of the branch, the fullest at its tip.
  for (let along = total * (0.3 + next() * 0.15); along < total; along += 0.07 + next() * 0.05) {
    addFan(put, surfaces, { at: pointAt(along, total), out, count: 2 + Math.floor(next() * 3), shade, fits }, next);
  }
  addFan(put, surfaces, { at: pointAt(total, total), out, count: 4 + Math.floor(next() * 4), shade, fits }, next);
}

// Leaves spread from one point, fanned across the branch and hanging down.
function addFan(put, surfaces, { at, out, count, shade, fits }, next) {
  const across = [-out[1], out[0], 0];
  for (let leaf = 0; leaf < count; leaf += 1) {
    const spread = (count === 1 ? 0 : (leaf / (count - 1) - 0.5) * 2.2) + (next() - 0.5) * 0.5;
    const hang = 0.25 + next() * 0.6; // radians below level
    const flat = add(scale(out, Math.cos(spread)), scale(across, Math.sin(spread)));
    const direction = normalise([flat[0] * Math.cos(hang), flat[1] * Math.cos(hang), -Math.sin(hang)]);
    const length = 0.12 + next() * 0.1;
    if (!fits(add(at, scale(direction, length)))) continue;
    addLeaf(put, surfaces, { base: at, direction, length, roll: (next() - 0.5) * 0.8, shade }, next);
  }
}

// One blade: narrow at its stalk, widest a third along, drawn out to a point,
// folded a little along its midrib, which shows paler, and drooping as it goes.
const LEAF_STATIONS = [[0, 0.2], [0.3, 1], [0.65, 0.75], [1, 0]]; // [along, half width share]
const LEAF_WIDTH = 0.13; // against its length
const LEAF_FOLD = 0.25; // how far the edges stand above the midrib, against the half width
const LEAF_DROOP = 0.35; // how far the tip falls, against the length

function addLeaf(put, surfaces, { base, direction, length, roll, shade }, next) {
  const palette = next() < AGEING_SHARE ? AGEING_LEAF : LEAF;
  const tone = linearAlbedo(palette[Math.floor(next() * palette.length)]);
  const flat = normalise(cross(direction, [0, 0, 1]));
  const side = add(scale(flat, Math.cos(roll)), scale(cross(flat, direction), Math.sin(roll)));
  const normal = normalise(cross(side, direction));
  // Sky on its face or its back: a blade turned edge on to the light is darker.
  const facing = Math.abs(dot(normal, LIGHT_FROM));
  const light = lightAt(base[2]) * shade * (0.72 + 0.28 * facing) * (0.92 + next() * 0.16);
  const rows = LEAF_STATIONS.map(([along, share]) => {
    const centre = add(add(base, scale(direction, along * length)), [0, 0, -LEAF_DROOP * length * along * along]);
    const half = share * LEAF_WIDTH * length * 0.5;
    const edge = (sign) => add(add(centre, scale(side, sign * half)), scale(normal, LEAF_FOLD * half));
    return [
      put(edge(-1), tone, light * 0.94),
      put(centre, tone.map((channel) => channel * 1.15), light),
      put(edge(1), tone, light * 0.94),
    ];
  });
  for (let row = 0; row < rows.length - 1; row += 1) {
    const [lower, upper] = [rows[row], rows[row + 1]];
    surfaces.indices.push(lower[0], lower[1], upper[1], lower[0], upper[1], upper[0]);
    surfaces.indices.push(lower[1], lower[2], upper[2], lower[1], upper[2], upper[1]);
  }
}
