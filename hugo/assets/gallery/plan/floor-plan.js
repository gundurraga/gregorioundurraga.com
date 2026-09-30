// The building, generated from what it must hold. An enfilade: the lobby, then
// one room per country in a row, doorways centred on one axis so the lobby
// looks straight through to the last room's end wall. Visitors walk towards -z;
// x runs across the rooms. Each room grows until its walls hold its hang, then
// gains free-standing partitions (parallel to the axis, which stays clear).

import {
  WALL_THICKNESS, DOOR_WIDTH, LOBBY_WIDTH, LOBBY_LENGTH, LOBBY_CEILING,
  ROOM_MIN_WIDTH, ROOM_MAX_WIDTH, ROOM_ASPECT, ROOM_MAX_LENGTH, ROOM_STEP,
  CEILING_TO_WIDTH, MIN_CEILING, CEILING_TO_TALLEST_WORK, MAX_PARTITIONS,
  PARTITION_PASSAGE, PARTITION_HEIGHT, CORNER_MARGIN, DOOR_CLEARANCE, MIN_SEGMENT,
  HANG_SLACK, BODY_RADIUS, LOBBY_ID, SPAWN_DISTANCE_TO_DOOR,
} from "../constants.js";

const DOOR_EDGE = DOOR_WIDTH / 2 + DOOR_CLEARANCE;

function segment(id, start, direction, normal, length) {
  return { id, start, direction, normal, length };
}

// Horizontal run along a wall, with a door gap in the middle when needed.
function wallRuns(id, from, to, hasDoor) {
  if (!hasDoor) return [{ id, from, to }];
  const sign = Math.sign(to - from);
  return [
    { id: `${id}-1`, from, to: -sign * DOOR_EDGE },
    { id: `${id}-2`, from: sign * DOOR_EDGE, to },
  ];
}

function perimeterSegments(room) {
  const { id, width, nearZ, farZ, doors } = room;
  const halfWidth = width / 2;
  const segments = [
    segment(`${id}:left`, { x: -halfWidth, z: nearZ - CORNER_MARGIN }, { x: 0, z: -1 }, { x: 1, z: 0 },
      nearZ - farZ - 2 * CORNER_MARGIN),
  ];
  for (const run of wallRuns(`${id}:far`, -halfWidth + CORNER_MARGIN, halfWidth - CORNER_MARGIN, doors.far)) {
    segments.push(segment(run.id, { x: run.from, z: farZ }, { x: 1, z: 0 }, { x: 0, z: 1 }, run.to - run.from));
  }
  segments.push(segment(`${id}:right`, { x: halfWidth, z: farZ + CORNER_MARGIN }, { x: 0, z: 1 }, { x: -1, z: 0 },
    nearZ - farZ - 2 * CORNER_MARGIN));
  for (const run of wallRuns(`${id}:near`, halfWidth - CORNER_MARGIN, -halfWidth + CORNER_MARGIN, doors.near)) {
    segments.push(segment(run.id, { x: run.from, z: nearZ }, { x: -1, z: 0 }, { x: 0, z: -1 }, run.from - run.to));
  }
  return segments;
}

function partitionSegments(room) {
  return room.partitions.flatMap((partition, index) => {
    const length = partition.nearZ - partition.farZ - 2 * CORNER_MARGIN;
    const halfThickness = WALL_THICKNESS / 2;
    return [
      segment(`${room.id}:partition-${index}-west`, { x: partition.x - halfThickness, z: partition.farZ + CORNER_MARGIN },
        { x: 0, z: 1 }, { x: -1, z: 0 }, length),
      segment(`${room.id}:partition-${index}-east`, { x: partition.x + halfThickness, z: partition.nearZ - CORNER_MARGIN },
        { x: 0, z: -1 }, { x: 1, z: 0 }, length),
    ];
  });
}

function partitionsFor(count, width, nearZ, farZ) {
  const offsets = [-width / 4, width / 4].slice(0, count);
  return offsets.map((x) => ({
    x, nearZ: nearZ - PARTITION_PASSAGE, farZ: farZ + PARTITION_PASSAGE, height: PARTITION_HEIGHT,
  }));
}

function shapeRoom(spec, width, length, partitionCount, nearZ) {
  const farZ = nearZ - length;
  const room = {
    ...spec, width, length, nearZ, farZ,
    partitions: partitionsFor(partitionCount, width, nearZ, farZ),
  };
  room.segments = [...perimeterSegments(room), ...partitionSegments(room)]
    .filter((wall) => wall.length >= MIN_SEGMENT);
  return room;
}

function hangingCapacity(room) {
  return room.segments
    .filter((wall) => wall.id !== room.anchorSegmentId)
    .reduce((total, wall) => total + wall.length, 0);
}

// Smallest room of the house proportions whose walls hold the hang.
function sizeRoom(spec, nearZ) {
  const needed = spec.requiredSpan * HANG_SLACK;
  for (let width = ROOM_MIN_WIDTH; width <= ROOM_MAX_WIDTH; width += ROOM_STEP) {
    const length = Math.min(ROOM_MAX_LENGTH, Math.ceil(width * ROOM_ASPECT / ROOM_STEP) * ROOM_STEP);
    const room = shapeRoom(spec, width, length, 0, nearZ);
    if (hangingCapacity(room) >= needed) return room;
  }
  for (let partitionCount = 1; partitionCount <= MAX_PARTITIONS; partitionCount += 1) {
    const room = shapeRoom(spec, ROOM_MAX_WIDTH, ROOM_MAX_LENGTH, partitionCount, nearZ);
    if (hangingCapacity(room) >= needed) return room;
  }
  throw new Error(`Room "${spec.id}" cannot hold ${needed.toFixed(1)} m of hanging`);
}

function ceilingFor(width, tallestWork) {
  return Math.max(MIN_CEILING, CEILING_TO_WIDTH * width, CEILING_TO_TALLEST_WORK * tallestWork);
}

function walkableAreas(rooms) {
  const areas = rooms.map((room) => ({
    minX: -room.width / 2 + BODY_RADIUS, maxX: room.width / 2 - BODY_RADIUS,
    minZ: room.farZ + BODY_RADIUS, maxZ: room.nearZ - BODY_RADIUS,
  }));
  rooms.slice(1).forEach((room, index) => {
    areas.push({
      minX: -DOOR_WIDTH / 2 + BODY_RADIUS, maxX: DOOR_WIDTH / 2 - BODY_RADIUS,
      minZ: room.nearZ - BODY_RADIUS, maxZ: rooms[index].farZ + BODY_RADIUS,
    });
  });
  return areas;
}

function blockedAreas(rooms) {
  return rooms.flatMap((room) => room.partitions.map((partition) => ({
    minX: partition.x - WALL_THICKNESS / 2 - BODY_RADIUS, maxX: partition.x + WALL_THICKNESS / 2 + BODY_RADIUS,
    minZ: partition.farZ - BODY_RADIUS, maxZ: partition.nearZ + BODY_RADIUS,
  })));
}

// specs: [{ id, requiredSpan, tallestWork }] in walking order after the lobby.
export function planBuilding(specs) {
  const rooms = [];
  const lobby = shapeRoom({ id: LOBBY_ID, isLobby: true, doors: { near: false, far: specs.length > 0 } },
    LOBBY_WIDTH, LOBBY_LENGTH, 0, 0);
  lobby.ceiling = LOBBY_CEILING;
  rooms.push(lobby);

  specs.forEach((spec, index) => {
    const isLast = index === specs.length - 1;
    const nearZ = rooms[rooms.length - 1].farZ - WALL_THICKNESS;
    const doors = { near: true, far: !isLast };
    const anchorSegmentId = isLast ? `${spec.id}:far` : undefined;
    const room = sizeRoom({ ...spec, isLobby: false, doors, anchorSegmentId }, nearZ);
    room.ceiling = ceilingFor(room.width, spec.tallestWork);
    rooms.push(room);
  });

  return {
    rooms,
    walkable: walkableAreas(rooms),
    blocked: blockedAreas(rooms),
    spawn: { x: 0, z: lobby.farZ + SPAWN_DISTANCE_TO_DOOR, yaw: 0 },
  };
}
