// The building's shell from the floor plan: walls with doorways, thick reveals,
// skirtings, laylit ceilings, oak and concrete floors, partitions, and the
// lobby's glass sides onto its gardens. One merged mesh per material per room.

import { Group, Mesh } from "../vendor/three/three.module.js";
import { createSurfaces, addQuad, addFace, breaks, linearAlbedo, toGeometry } from "./surfaces.js";
import { wallLight, floorLight, ceilingLight, plasterNoise, FACE_LIGHT } from "../plan/light.js";
import { glazingOpening, addGlazingFrames, buildGardens } from "./gardens.js";
import { WALL_THICKNESS, DOOR_WIDTH, DOOR_HEIGHT, LAYLIGHT_FRACTION } from "../constants.js";

const LOBBY_WALL = "#F4F2EE";
const CEILING = "#F6F5F2";
const LAYLIGHT = "#FFF6EC";
const OAK_FLOOR = "#B09B7E";
const CONCRETE_FLOOR = "#AEAAA2";
const STRIP_WIDTH = 0.022;
const STRIP_HEIGHT = 0.004; // just proud of the floors
const UP = [0, 1, 0];
const SKIRTING_HEIGHT = 0.08;
const SKIRTING_DEPTH = 0.012;
const SKIRTING_TONE = 1.18; // a touch lighter than the oak floor, so it never shouts
const SKIRTING_TOP_LIGHT = 1.06; // its top edge catches the light from above
const PALE_WALL = 0.5; // linear luminance
// The reveal's skirting is lit as if under a ceiling well above the door, so
// the darkening wallLight gives the top of a wall never reaches it.
const REVEAL_CEILING = DOOR_HEIGHT + 1;

function heightBreaks(ceiling, openings) {
  const extra = [0.06, 0.22, 0.5, 1, 1.6, 2.2, ceiling - 0.35, ceiling - 0.1, ...openings.map((opening) => opening.height)];
  return breaks(ceiling, 1, extra);
}

// How a skirting's face ends at a joint, in skirting depths from the corner:
// short of an inner corner, past an outer one, flush where it stops square.
const MITRE = { inner: 1, outer: -1, square: 0 };

// A slim skirting along the foot of a wall. It takes the wall's light, so it
// sits in the same soft shadow near floor and corners. Where two runs meet they
// are mitred at 45 degrees, never overlapping: at an inner corner the face stops
// short, at an outer corner (a partition's end, a doorway's reveal) it runs on,
// and where nothing continues it, it stops square with an end face.
// skirting: { surfaces, albedo }: the mesh it joins and its colour.
// ends: how the wall's own two ends meet the next wall.
function addSkirting({ surfaces, albedo: tone }, { origin, uAxis, length, ceiling, openings, ends = ["inner", "inner"] }) {
  const into = [-uAxis[2], 0, uAxis[0]]; // towards the room
  const back = into.map((value) => -value);
  const at = (u, offset, height = 0) => origin.map((value, index) => value + uAxis[index] * u + into[index] * offset + UP[index] * height);
  const shade = (u, height) => wallLight(height, ceiling, Math.min(Math.max(u, 0), length - u));
  const run = (from, to, startJoint, endJoint) => {
    const frontFrom = from + MITRE[startJoint] * SKIRTING_DEPTH;
    const frontTo = to - MITRE[endJoint] * SKIRTING_DEPTH;
    const frontLength = frontTo - frontFrom;
    addQuad(surfaces, {
      origin: at(frontFrom, SKIRTING_DEPTH), uAxis, vAxis: UP, albedo: tone,
      uBreaks: breaks(frontLength, 0.25, [0.15, 0.35, frontLength - 0.15, frontLength - 0.35]), vBreaks: [0, SKIRTING_HEIGHT],
      uvOffset: [frontFrom, 0], light: (u, v) => shade(frontFrom + u, v),
    });
    const topLight = (u) => shade(u, SKIRTING_HEIGHT) * SKIRTING_TOP_LIGHT;
    addFace(surfaces, {
      corners: [at(frontFrom, SKIRTING_DEPTH, SKIRTING_HEIGHT), at(frontTo, SKIRTING_DEPTH, SKIRTING_HEIGHT), at(to, 0, SKIRTING_HEIGHT), at(from, 0, SKIRTING_HEIGHT)],
      uvs: [[frontFrom, 0], [frontTo, 0], [to, SKIRTING_DEPTH], [from, SKIRTING_DEPTH]],
      albedo: tone, lights: [topLight(frontFrom), topLight(frontTo), topLight(to), topLight(from)],
    });
    for (const [joint, u, faceOrigin, faceU] of [[startJoint, from, at(from, 0), into], [endJoint, to, at(to, SKIRTING_DEPTH), back]]) {
      if (joint !== "square") continue;
      addQuad(surfaces, {
        origin: faceOrigin, uAxis: faceU, vAxis: UP, albedo: tone, uBreaks: [0, SKIRTING_DEPTH], vBreaks: [0, SKIRTING_HEIGHT],
        light: (_, v) => shade(u, v) * FACE_LIGHT.side,
      });
    }
  };
  let from = 0;
  let joint = ends[0];
  // The only openings in a skirted wall are doorways, whose reveals it turns into.
  for (const opening of openings) {
    run(from, opening.from, joint, "outer");
    from = opening.to;
    joint = "outer";
  }
  run(from, length, joint, ends[1]);
}

// openings: [{ from, to, height }] along the wall, in order: doorways, glazing.
function addWall(surfaces, { origin, uAxis, length, ceiling, albedo, skirting, openings = [], ends }) {
  if (skirting) addSkirting(skirting, { origin, uAxis, length, ceiling, openings, ends });
  addQuad(surfaces, {
    origin, uAxis, vAxis: UP, albedo,
    uBreaks: breaks(length, 0.5, [0.15, 0.35, length - 0.15, length - 0.35, ...openings.flatMap(({ from, to }) => [from, to])]),
    vBreaks: heightBreaks(ceiling, openings),
    skip: (u, v) => openings.some((opening) => u > opening.from && u < opening.to && v < opening.height),
    light: (u, v) => wallLight(v, ceiling, Math.min(u, length - u))
      * plasterNoise(origin[0] + uAxis[0] * u, v, origin[2] + uAxis[2] * u),
  });
}

const doorway = (length) => [{ from: length / 2 - DOOR_WIDTH / 2, to: length / 2 + DOOR_WIDTH / 2, height: DOOR_HEIGHT }];

function addRoomWalls(surfaces, room, albedo, skirting) {
  const halfWidth = room.width / 2;
  const { length } = room;
  const common = { ceiling: room.ceiling, albedo, skirting };
  // The lobby's long sides are glass onto its gardens.
  const sides = room.isLobby ? [glazingOpening(room)] : [];
  addWall(surfaces, { ...common, origin: [-halfWidth, 0, room.nearZ], uAxis: [0, 0, -1], length, openings: sides });
  addWall(surfaces, { ...common, origin: [-halfWidth, 0, room.farZ], uAxis: [1, 0, 0], length: room.width, openings: room.doors.far ? doorway(room.width) : [] });
  addWall(surfaces, { ...common, origin: [halfWidth, 0, room.farZ], uAxis: [0, 0, 1], length, openings: sides });
  addWall(surfaces, { ...common, origin: [halfWidth, 0, room.nearZ], uAxis: [-1, 0, 0], length: room.width, openings: room.doors.near ? doorway(room.width) : [] });
}

function addPartitions(surfaces, room, albedo, skirting) {
  for (const partition of room.partitions) {
    const west = partition.x - WALL_THICKNESS / 2;
    const east = partition.x + WALL_THICKNESS / 2;
    const length = partition.nearZ - partition.farZ;
    const common = { ceiling: partition.height, albedo, skirting, ends: ["outer", "outer"] };
    addWall(surfaces, { ...common, origin: [west, 0, partition.farZ], uAxis: [0, 0, 1], length });
    addWall(surfaces, { ...common, origin: [east, 0, partition.nearZ], uAxis: [0, 0, -1], length });
    addWall(surfaces, { ...common, origin: [west, 0, partition.nearZ], uAxis: [1, 0, 0], length: WALL_THICKNESS });
    addWall(surfaces, { ...common, origin: [east, 0, partition.farZ], uAxis: [-1, 0, 0], length: WALL_THICKNESS });
    addQuad(surfaces, {
      origin: [west, partition.height, partition.nearZ], uAxis: [1, 0, 0], vAxis: [0, 0, -1],
      uBreaks: [0, WALL_THICKNESS], vBreaks: [0, length], albedo, light: () => 0.95,
    });
  }
}

// Plaster coffer around a frosted laylight over the middle of the room.
function addCeiling(surfaces, room) {
  const laylightWidth = room.width * LAYLIGHT_FRACTION;
  const { length } = room;
  const laylightLength = length * LAYLIGHT_FRACTION;
  const fromU = (room.width - laylightWidth) / 2;
  const fromV = (length - laylightLength) / 2;
  const isLaylight = (u, v) => u > fromU && u < fromU + laylightWidth && v > fromV && v < fromV + laylightLength;
  const origin = [-room.width / 2, room.ceiling, room.farZ];
  addQuad(surfaces, {
    origin, uAxis: [1, 0, 0], vAxis: [0, 0, 1], albedo: linearAlbedo(CEILING),
    uBreaks: breaks(room.width, 1, [0.25, 0.5, room.width - 0.5, room.width - 0.25, fromU, fromU + laylightWidth]),
    vBreaks: breaks(length, 1, [0.25, 0.5, length - 0.5, length - 0.25, fromV, fromV + laylightLength]),
    skip: isLaylight,
    light: (u, v) => ceilingLight(Math.min(u, room.width - u, v, length - v)),
  });
  addQuad(surfaces, {
    origin: [origin[0] + fromU, room.ceiling, room.farZ + fromV], uAxis: [1, 0, 0], vAxis: [0, 0, 1],
    albedo: linearAlbedo(LAYLIGHT), uBreaks: [0, laylightWidth], vBreaks: [0, laylightLength],
  });
}

// The walls a visitor could stand against, as segments on the floor plan.
// Doorways and the lobby's glass are gaps; each doorway's jambs are walls.
function solidWallSegments(room) {
  const half = room.width / 2;
  const door = DOOR_WIDTH / 2;
  const segments = [];
  for (const [z, hasDoor, revealZ] of [
    [room.nearZ, room.doors.near, room.nearZ + WALL_THICKNESS],
    [room.farZ, room.doors.far, room.farZ - WALL_THICKNESS],
  ]) {
    if (!hasDoor) {
      segments.push([-half, z, half, z]);
      continue;
    }
    segments.push([-half, z, -door, z], [door, z, half, z], [-door, z, -door, revealZ], [door, z, door, revealZ]);
  }
  for (const x of [-half, half]) {
    if (room.isLobby) {
      const glass = glazingOpening(room);
      segments.push([x, room.nearZ, x, room.nearZ - glass.from], [x, room.nearZ - glass.to, x, room.farZ]);
    } else {
      segments.push([x, room.nearZ, x, room.farZ]);
    }
  }
  for (const partition of room.partitions) {
    const west = partition.x - WALL_THICKNESS / 2;
    const east = partition.x + WALL_THICKNESS / 2;
    segments.push(
      [west, partition.nearZ, west, partition.farZ], [east, partition.nearZ, east, partition.farZ],
      [west, partition.nearZ, east, partition.nearZ], [west, partition.farZ, east, partition.farZ],
    );
  }
  return segments;
}

function distanceToSegments(segments, x, z) {
  return segments.reduce((nearest, [x1, z1, x2, z2]) => {
    const dx = x2 - x1;
    const dz = z2 - z1;
    const t = Math.max(0, Math.min(1, ((x - x1) * dx + (z - z1) * dz) / (dx * dx + dz * dz)));
    return Math.min(nearest, Math.hypot(x - (x1 + t * dx), z - (z1 + t * dz)));
  }, Infinity);
}

// Floor texture coordinates follow the world, so planks run on unbroken from
// room to doorway to room.
function worldFloorUv(originX, originZ) {
  return [-originZ, -originX];
}

// The floor darkens softly towards every wall, by true distance, so the shade
// rounds each doorway's corners and runs on through the reveal unbroken.
function floorShade(room) {
  const segments = solidWallSegments(room);
  const halfDiagonal = Math.hypot(room.width, room.length) / 2;
  const middleZ = (room.nearZ + room.farZ) / 2;
  return (x, z) => floorLight(distanceToSegments(segments, x, z), Math.max(0, 1 - Math.hypot(x, z - middleZ) / halfDiagonal));
}

// Extra vertices where the shade changes fast: by the walls and the doorways.
const NEAR_EDGE = [0.1, 0.25, 0.45, 0.7];

function addFloor(surfaces, room, albedo) {
  const { length, width } = room;
  const shade = floorShade(room);
  const doorEdges = [(width - DOOR_WIDTH) / 2, (width + DOOR_WIDTH) / 2];
  addQuad(surfaces, {
    origin: [width / 2, 0, room.nearZ], uAxis: [0, 0, -1], vAxis: [-1, 0, 0], albedo,
    uvOffset: worldFloorUv(width / 2, room.nearZ),
    uBreaks: breaks(length, 0.5, NEAR_EDGE.flatMap((step) => [step, length - step])),
    vBreaks: breaks(width, 0.5, [
      ...NEAR_EDGE.flatMap((step) => [step, width - step]),
      ...doorEdges.flatMap((edge) => [edge, ...NEAR_EDGE.flatMap((step) => [edge - step, edge + step])]),
    ]),
    light: (u, v) => shade(width / 2 - v, room.nearZ - u),
  });
}

// The doorway through the wall in front of this room: jambs, soffit, threshold.
// The oak runs through every doorway. Out of the lobby it starts against a
// strip in the skirting's colour, set a few millimetres proud, where the
// concrete paving ends: each material simply stops, with nothing to cover it.
function addReveal({ walls, floor, room, wallAlbedo, floorAlbedo, skirting, fromLobby }) {
  const outer = room.nearZ + WALL_THICKNESS;
  const jamb = (origin, uAxis) => addQuad(walls, {
    origin, uAxis, vAxis: UP, uBreaks: [0, WALL_THICKNESS], vBreaks: breaks(DOOR_HEIGHT, 1, [0.06, 0.22]),
    albedo: wallAlbedo, light: (u, v) => wallLight(v, REVEAL_CEILING, 0.3),
  });
  jamb([-DOOR_WIDTH / 2, 0, outer], [0, 0, -1]);
  jamb([DOOR_WIDTH / 2, 0, room.nearZ], [0, 0, 1]);
  // On the lobby side nothing continues the reveal's skirting, so it stops square.
  const lobbyEnd = fromLobby ? "square" : "outer";
  const revealSkirting = { length: WALL_THICKNESS, ceiling: REVEAL_CEILING, openings: [] };
  addSkirting(skirting, { ...revealSkirting, origin: [-DOOR_WIDTH / 2, 0, outer], uAxis: [0, 0, -1], ends: [lobbyEnd, "outer"] });
  addSkirting(skirting, { ...revealSkirting, origin: [DOOR_WIDTH / 2, 0, room.nearZ], uAxis: [0, 0, 1], ends: ["outer", lobbyEnd] });
  addQuad(walls, {
    origin: [-DOOR_WIDTH / 2, DOOR_HEIGHT, room.nearZ], uAxis: [1, 0, 0], vAxis: [0, 0, 1],
    uBreaks: [0, DOOR_WIDTH], vBreaks: [0, WALL_THICKNESS], albedo: wallAlbedo, light: () => 0.7,
  });
  const threshold = { origin: [DOOR_WIDTH / 2, 0, outer], uAxis: [0, 0, -1], vAxis: [-1, 0, 0], vBreaks: [0, DOOR_WIDTH] };
  const shade = floorShade(room);
  addQuad(floor, {
    ...threshold, vBreaks: breaks(DOOR_WIDTH, 0.5, NEAR_EDGE.flatMap((step) => [step, DOOR_WIDTH - step])),
    uBreaks: [0, WALL_THICKNESS / 2, WALL_THICKNESS], albedo: floorAlbedo,
    uvOffset: worldFloorUv(DOOR_WIDTH / 2, outer), light: (u, v) => shade(DOOR_WIDTH / 2 - v, outer - u),
  });
  if (!fromLobby) return;
  const strip = skirting.albedo;
  // Lit as the skirting's face is, so the two read as the same piece of oak.
  const stripLight = wallLight(SKIRTING_HEIGHT / 2, REVEAL_CEILING, WALL_THICKNESS / 2);
  addQuad(floor, {
    ...threshold, origin: [DOOR_WIDTH / 2, STRIP_HEIGHT, outer], swapUv: true,
    uBreaks: [0, STRIP_WIDTH], albedo: strip, light: () => stripLight,
  });
  const edge = { vAxis: UP, uBreaks: [0, DOOR_WIDTH], vBreaks: [0, STRIP_HEIGHT], albedo: strip, light: () => stripLight * FACE_LIGHT.side };
  addQuad(floor, { ...edge, origin: [-DOOR_WIDTH / 2, 0, outer], uAxis: [1, 0, 0] });
  addQuad(floor, { ...edge, origin: [DOOR_WIDTH / 2, 0, outer - STRIP_WIDTH], uAxis: [-1, 0, 0] });
}

const luminance = ([red, green, blue]) => 0.2126 * red + 0.7152 * green + 0.0722 * blue;

// Oak against pale walls. A dark room is one monochrome volume instead: its
// skirting is the wall's own colour, read only by its lit top edge, as if the
// wall folded at the floor. The lobby has none: its walls meet the concrete
// directly.
function skirtingFor(room, { walls, floor, wallAlbedo }) {
  if (room.isLobby) return null;
  if (luminance(wallAlbedo) > PALE_WALL) {
    return { surfaces: floor, albedo: linearAlbedo(OAK_FLOOR).map((channel) => channel * SKIRTING_TONE) };
  }
  return { surfaces: walls, albedo: wallAlbedo };
}

// Returns { group, floors } where floors are the meshes a tap can walk onto.
export function buildBuilding(plan, materials, anisotropy) {
  const group = new Group();
  const floors = [];
  for (const [index, room] of plan.rooms.entries()) {
    const walls = createSurfaces();
    const floor = createSurfaces();
    const wallAlbedo = linearAlbedo(room.isLobby ? LOBBY_WALL : room.wall);
    const floorAlbedo = linearAlbedo(room.isLobby ? CONCRETE_FLOOR : OAK_FLOOR);
    const skirting = skirtingFor(room, { walls, floor, wallAlbedo });
    addRoomWalls(walls, room, wallAlbedo, skirting);
    addPartitions(walls, room, wallAlbedo, skirting);
    addCeiling(walls, room);
    addFloor(floor, room, floorAlbedo);
    if (room.doors.near) {
      const fromLobby = Boolean(plan.rooms[index - 1]?.isLobby);
      addReveal({ walls, floor, room, wallAlbedo, floorAlbedo, skirting, fromLobby });
    }
    if (room.isLobby) {
      addGlazingFrames(walls, room);
      group.add(...buildGardens(room, anisotropy));
    }

    const floorMesh = new Mesh(toGeometry(floor), room.isLobby ? materials.concrete : materials.oak);
    floors.push(floorMesh);
    group.add(new Mesh(toGeometry(walls), materials.plain), floorMesh);
  }
  return { group, floors };
}
