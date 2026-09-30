// Where a visitor can stand, and how they get from one spot to another.
// The floor is a union of rectangles (rooms and doorways) minus blockers
// (partitions), all already shrunk by the body radius.

import { WALL_THICKNESS } from "../constants.js";

const LINE_CHECK_STEP = 0.1;
const DOORWAY_WAYPOINT_DEPTH = 0.15; // just inside the next room, clear of the reveal
const PARTITION_CLEARANCE = 0.2;

function inside(area, x, z) {
  return x >= area.minX && x <= area.maxX && z >= area.minZ && z <= area.maxZ;
}

export function isWalkable(plan, x, z) {
  return plan.walkable.some((area) => inside(area, x, z)) && !plan.blocked.some((area) => inside(area, x, z));
}

// Move one axis at a time and drop the axis that would leave the floor, so a
// visitor walking into a wall slides along it instead of stopping dead.
export function slide(plan, from, to) {
  let { x, z } = from;
  if (isWalkable(plan, to.x, z)) x = to.x;
  if (isWalkable(plan, x, to.z)) z = to.z;
  return { x, z };
}

// A doorway counts as part of the room it leads out of.
export function roomIndexAt(plan, x, z) {
  return plan.rooms.findIndex((room) =>
    Math.abs(x) <= room.width / 2 && z <= room.nearZ && z >= room.farZ - WALL_THICKNESS);
}

function straightLineIsClear(plan, from, to) {
  const distance = Math.hypot(to.x - from.x, to.z - from.z);
  const steps = Math.max(1, Math.ceil(distance / LINE_CHECK_STEP));
  for (let step = 1; step <= steps; step += 1) {
    const t = step / steps;
    if (!isWalkable(plan, from.x + (to.x - from.x) * t, from.z + (to.z - from.z) * t)) return false;
  }
  return true;
}

// Waypoints from one spot to another: straight when clear, otherwise through
// the doorway centres of the rooms in between, stepping around partitions.
export function route(plan, from, to) {
  if (straightLineIsClear(plan, from, to)) return [to];
  const fromRoom = roomIndexAt(plan, from.x, from.z);
  const toRoom = roomIndexAt(plan, to.x, to.z);
  const waypoints = [];
  const step = Math.sign(toRoom - fromRoom);
  for (let index = fromRoom; index !== toRoom; index += step) {
    const doorZ = step > 0 ? plan.rooms[index].farZ : plan.rooms[index].nearZ;
    waypoints.push({ x: 0, z: doorZ - DOORWAY_WAYPOINT_DEPTH * step });
  }
  waypoints.push(to);

  // A partition in the way: go round its nearer end.
  const path = [];
  let cursor = from;
  for (const point of waypoints) {
    if (!straightLineIsClear(plan, cursor, point)) {
      const blocker = plan.blocked.find((area) => !straightLineIsClear({ ...plan, blocked: [area] }, cursor, point));
      if (blocker) {
        const aroundZ = Math.abs(cursor.z - blocker.maxZ) < Math.abs(cursor.z - blocker.minZ)
          ? blocker.maxZ + PARTITION_CLEARANCE : blocker.minZ - PARTITION_CLEARANCE;
        path.push({ x: cursor.x, z: aroundZ }, { x: point.x, z: aroundZ });
      }
    }
    path.push(point);
    cursor = point;
  }
  return path;
}
