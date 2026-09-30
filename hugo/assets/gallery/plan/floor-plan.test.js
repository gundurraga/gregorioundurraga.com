import { test } from "node:test";
import assert from "node:assert/strict";
import { planBuilding } from "./floor-plan.js";
import { isWalkable, slide, route, roomIndexAt } from "./walk-bounds.js";
import { HANG_SLACK, WALL_THICKNESS, ROOM_MAX_WIDTH } from "../constants.js";

const specs = [
  { id: "small", requiredSpan: 8, tallestWork: 0.7 },
  { id: "large", requiredSpan: 60, tallestWork: 0.9 },
  { id: "last", requiredSpan: 40, tallestWork: 1.6 },
];

const capacity = (room) => room.segments
  .filter((wall) => wall.id !== room.anchorSegmentId)
  .reduce((total, wall) => total + wall.length, 0);

test("rooms follow the lobby in order, separated by one wall", () => {
  const plan = planBuilding(specs);
  assert.deepEqual(plan.rooms.map((room) => room.id), ["lobby", "small", "large", "last"]);
  plan.rooms.slice(1).forEach((room, index) => {
    assert.ok(Math.abs(plan.rooms[index].farZ - WALL_THICKNESS - room.nearZ) < 1e-9);
  });
});

test("every room offers the wall its hang needs", () => {
  const plan = planBuilding(specs);
  plan.rooms.slice(1).forEach((room, index) => {
    assert.ok(capacity(room) >= specs[index].requiredSpan * HANG_SLACK, `${room.id} too small`);
  });
});

test("a room outgrowing its walls gains partitions, never width beyond the maximum", () => {
  const plan = planBuilding(specs);
  const large = plan.rooms.find((room) => room.id === "large");
  assert.ok(large.partitions.length >= 1);
  assert.ok(large.width <= ROOM_MAX_WIDTH);
});

test("only the last room has an end wall for its anchor", () => {
  const plan = planBuilding(specs);
  const last = plan.rooms[plan.rooms.length - 1];
  assert.ok(last.segments.some((wall) => wall.id === last.anchorSegmentId));
  assert.equal(plan.rooms.slice(0, -1).filter((room) => room.anchorSegmentId).length, 0);
});

test("the ceiling clears the tallest work", () => {
  const plan = planBuilding(specs);
  plan.rooms.slice(1).forEach((room, index) => assert.ok(room.ceiling >= specs[index].tallestWork * 2));
});

test("walls stop walking, doorways do not, and a visitor slides along walls", () => {
  const plan = planBuilding(specs);
  const lobby = plan.rooms[0];
  assert.ok(isWalkable(plan, plan.spawn.x, plan.spawn.z));
  assert.ok(!isWalkable(plan, lobby.width / 2 + 0.1, -5));
  assert.ok(isWalkable(plan, 0, lobby.farZ - WALL_THICKNESS / 2));
  assert.ok(!isWalkable(plan, 3, lobby.farZ - WALL_THICKNESS / 2));
  const slid = slide(plan, { x: 0, z: -5 }, { x: 99, z: -6 });
  assert.equal(slid.z, -6);
  assert.ok(slid.x < lobby.width / 2);
});

test("a route from the lobby to the last room passes every doorway and stays walkable", () => {
  const plan = planBuilding(specs);
  const last = plan.rooms[plan.rooms.length - 1];
  const target = { x: last.width / 2 - 1, z: last.farZ + 1 };
  const path = route(plan, { x: plan.spawn.x, z: plan.spawn.z }, target);
  assert.deepEqual(path[path.length - 1], target);
  let cursor = plan.spawn;
  for (const point of path) {
    for (let t = 0; t <= 1; t += 0.02) {
      const x = cursor.x + (point.x - cursor.x) * t;
      const z = cursor.z + (point.z - cursor.z) * t;
      assert.ok(isWalkable(plan, x, z), `route leaves the floor at ${x.toFixed(2)}, ${z.toFixed(2)}`);
    }
    cursor = point;
  }
  assert.equal(roomIndexAt(plan, target.x, target.z), plan.rooms.length - 1);
});
