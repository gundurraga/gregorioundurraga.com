// The building's shell from the floor plan: walls with doorways, thick reveals,
// laylit ceilings, oak and concrete floors, partitions. One merged mesh per
// material per room.

import { Group, Mesh } from "../vendor/three/three.module.js";
import { createSurfaces, addQuad, linearAlbedo, toGeometry } from "./surfaces.js";
import { wallLight, floorLight, ceilingLight, plasterNoise } from "../plan/light.js";
import { WALL_THICKNESS, DOOR_WIDTH, DOOR_HEIGHT, LAYLIGHT_FRACTION } from "../constants.js";

export const LOBBY_WALL = "#F4F2EE"; // also the page background behind the canvas
const CEILING = "#F6F5F2";
const LAYLIGHT = "#FFF6EC";
const OAK_FLOOR = "#B09B7E";
const CONCRETE_FLOOR = "#9A968F";
const UP = [0, 1, 0];

// Breaks every step, plus extra ones where light changes fast or edges fall.
function breaks(length, step, extra = []) {
  const values = [0, length, ...extra.filter((value) => value > 0 && value < length)];
  for (let value = step; value < length; value += step) values.push(value);
  return [...new Set(values.map((value) => Math.round(value * 1000) / 1000))].sort((a, b) => a - b);
}

function heightBreaks(ceiling, hasDoor) {
  const extra = [0.06, 0.22, 0.5, 1, 1.6, 2.2, ceiling - 0.35, ceiling - 0.1];
  if (hasDoor) extra.push(DOOR_HEIGHT);
  return breaks(ceiling, 1, extra);
}

function addWall(surfaces, { origin, uAxis, length, ceiling, albedo, hasDoor }) {
  const doorFrom = length / 2 - DOOR_WIDTH / 2;
  const doorTo = length / 2 + DOOR_WIDTH / 2;
  addQuad(surfaces, {
    origin, uAxis, vAxis: UP, albedo,
    uBreaks: breaks(length, 0.5, [0.15, 0.35, length - 0.15, length - 0.35, ...(hasDoor ? [doorFrom, doorTo] : [])]),
    vBreaks: heightBreaks(ceiling, hasDoor),
    skip: hasDoor ? (u, v) => u > doorFrom && u < doorTo && v < DOOR_HEIGHT : undefined,
    light: (u, v) => wallLight(v, ceiling, Math.min(u, length - u))
      * plasterNoise(origin[0] + uAxis[0] * u, v, origin[2] + uAxis[2] * u),
  });
}

function addRoomWalls(surfaces, room, albedo) {
  const halfWidth = room.width / 2;
  const { length } = room;
  const common = { ceiling: room.ceiling, albedo };
  addWall(surfaces, { ...common, origin: [-halfWidth, 0, room.nearZ], uAxis: [0, 0, -1], length, hasDoor: false });
  addWall(surfaces, { ...common, origin: [-halfWidth, 0, room.farZ], uAxis: [1, 0, 0], length: room.width, hasDoor: room.doors.far });
  addWall(surfaces, { ...common, origin: [halfWidth, 0, room.farZ], uAxis: [0, 0, 1], length, hasDoor: false });
  addWall(surfaces, { ...common, origin: [halfWidth, 0, room.nearZ], uAxis: [-1, 0, 0], length: room.width, hasDoor: room.doors.near });
}

function addPartitions(surfaces, room, albedo) {
  for (const partition of room.partitions) {
    const west = partition.x - WALL_THICKNESS / 2;
    const east = partition.x + WALL_THICKNESS / 2;
    const length = partition.nearZ - partition.farZ;
    const common = { ceiling: partition.height, albedo, hasDoor: false };
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

function distanceToPartitions(room, x, z) {
  return room.partitions.reduce((nearest, partition) => {
    const dx = Math.max(Math.abs(x - partition.x) - WALL_THICKNESS / 2, 0);
    const dz = Math.max(partition.farZ - z, z - partition.nearZ, 0);
    return Math.min(nearest, Math.hypot(dx, dz));
  }, Infinity);
}

// Floor texture coordinates follow the world, so planks run on unbroken from
// room to doorway to room.
function worldFloorUv(originX, originZ) {
  return [-originZ, -originX];
}

// Distance to the nearest wall a visitor could stand against; an open doorway
// is not a wall, so the floor does not darken there.
function distanceToSolidWall(room, x, z) {
  const inDoorway = Math.abs(x) < DOOR_WIDTH / 2;
  const toNear = inDoorway && room.doors.near ? Infinity : room.nearZ - z;
  const toFar = inDoorway && room.doors.far ? Infinity : z - room.farZ;
  return Math.min(room.width / 2 - Math.abs(x), toNear, toFar, distanceToPartitions(room, x, z));
}

function addFloor(surfaces, room, albedo) {
  const { length } = room;
  const halfDiagonal = Math.hypot(room.width, length) / 2;
  addQuad(surfaces, {
    origin: [room.width / 2, 0, room.nearZ], uAxis: [0, 0, -1], vAxis: [-1, 0, 0], albedo,
    uvOffset: worldFloorUv(room.width / 2, room.nearZ),
    uBreaks: breaks(length, 0.5, [0.2, length - 0.2]),
    vBreaks: breaks(room.width, 0.5, [0.2, room.width - 0.2, (room.width - DOOR_WIDTH) / 2, (room.width + DOOR_WIDTH) / 2]),
    light: (u, v) => {
      const x = room.width / 2 - v;
      const z = room.nearZ - u;
      const centreness = 1 - Math.hypot(x, z - (room.nearZ + room.farZ) / 2) / halfDiagonal;
      return floorLight(distanceToSolidWall(room, x, z), centreness);
    },
  });
}

// The doorway through the wall in front of this room: jambs, soffit, threshold.
function addReveal(walls, floor, room, wallAlbedo, floorAlbedo) {
  const outer = room.nearZ + WALL_THICKNESS;
  const jamb = (origin, uAxis) => addQuad(walls, {
    origin, uAxis, vAxis: UP, uBreaks: [0, WALL_THICKNESS], vBreaks: breaks(DOOR_HEIGHT, 1, [0.06, 0.22]),
    albedo: wallAlbedo, light: (u, v) => wallLight(v, DOOR_HEIGHT + 1, 0.3),
  });
  jamb([-DOOR_WIDTH / 2, 0, outer], [0, 0, -1]);
  jamb([DOOR_WIDTH / 2, 0, room.nearZ], [0, 0, 1]);
  addQuad(walls, {
    origin: [-DOOR_WIDTH / 2, DOOR_HEIGHT, room.nearZ], uAxis: [1, 0, 0], vAxis: [0, 0, 1],
    uBreaks: [0, DOOR_WIDTH], vBreaks: [0, WALL_THICKNESS], albedo: wallAlbedo, light: () => 0.7,
  });
  addQuad(floor, {
    origin: [DOOR_WIDTH / 2, 0, outer], uAxis: [0, 0, -1], vAxis: [-1, 0, 0],
    uBreaks: [0, WALL_THICKNESS], vBreaks: [0, DOOR_WIDTH], albedo: floorAlbedo,
    uvOffset: worldFloorUv(DOOR_WIDTH / 2, outer),
    light: () => floorLight(Infinity, 0),
  });
}

// Returns { group, floors } where floors are the meshes a tap can walk onto.
export function buildBuilding(plan, materials) {
  const group = new Group();
  const floors = [];
  for (const room of plan.rooms) {
    const walls = createSurfaces();
    const floor = createSurfaces();
    const wallAlbedo = linearAlbedo(room.isLobby ? LOBBY_WALL : room.wall);
    const floorAlbedo = linearAlbedo(room.isLobby ? CONCRETE_FLOOR : OAK_FLOOR);
    addRoomWalls(walls, room, wallAlbedo);
    addPartitions(walls, room, wallAlbedo);
    addCeiling(walls, room);
    addFloor(floor, room, floorAlbedo);
    if (room.doors.near) addReveal(walls, floor, room, wallAlbedo, floorAlbedo);

    const floorMesh = new Mesh(toGeometry(floor), room.isLobby ? materials.concrete : materials.oak);
    floors.push(floorMesh);
    group.add(new Mesh(toGeometry(walls), materials.plain), floorMesh);
  }
  return { group, floors };
}
