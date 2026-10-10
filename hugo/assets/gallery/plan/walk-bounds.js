// Where a visitor can stand, and how they get from one spot to another.
// The floor is a union of rectangles (rooms and doorways) minus blockers
// (partitions), all already shrunk by the body radius.

const COVER_TOLERANCE = 1e-9;
const GRID_STEP = 0.2; // finer than any doorway or gap beside a partition

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

// The stretch of a segment, as shares of its length from 0 to 1, that lies
// inside a rectangle (slab clipping), or null if it misses it.
function clip(area, from, to) {
  let enter = 0;
  let leave = 1;
  for (const [start, end, min, max] of [[from.x, to.x, area.minX, area.maxX], [from.z, to.z, area.minZ, area.maxZ]]) {
    const delta = end - start;
    if (delta === 0) {
      if (start < min || start > max) return null;
      continue;
    }
    const [near, far] = [(min - start) / delta, (max - start) / delta].sort((left, right) => left - right);
    enter = Math.max(enter, near);
    leave = Math.min(leave, far);
    if (enter > leave) return null;
  }
  return [enter, leave];
}

// Exact: the floor's rectangles together cover the whole segment, and no
// partition touches it, so a line never clips a corner.
function straightLineIsClear(plan, from, to) {
  if (plan.blocked.some((area) => clip(area, from, to))) return false;
  const stretches = plan.walkable.map((area) => clip(area, from, to)).filter(Boolean).sort((left, right) => left[0] - right[0]);
  let covered = 0;
  for (const [enter, leave] of stretches) {
    if (enter > covered + COVER_TOLERANCE) return false;
    covered = Math.max(covered, leave);
  }
  return covered >= 1 - COVER_TOLERANCE;
}

// The floor as a grid of cells, each walkable or not, laid once per plan.
const grids = new WeakMap();

function gridFor(plan) {
  if (grids.has(plan)) return grids.get(plan);
  const minX = Math.min(...plan.walkable.map((area) => area.minX));
  const minZ = Math.min(...plan.walkable.map((area) => area.minZ));
  const columns = Math.ceil((Math.max(...plan.walkable.map((area) => area.maxX)) - minX) / GRID_STEP) + 1;
  const rows = Math.ceil((Math.max(...plan.walkable.map((area) => area.maxZ)) - minZ) / GRID_STEP) + 1;
  const centre = (cell) => ({ x: minX + (cell % columns) * GRID_STEP, z: minZ + Math.floor(cell / columns) * GRID_STEP });
  const open = Array.from({ length: columns * rows }, (_, cell) => {
    const { x, z } = centre(cell);
    return isWalkable(plan, x, z);
  });
  // The open cell nearest a spot, which may itself be a little off the floor
  // (a visitor close up to a painting stands nearer the wall than a walk would).
  const nearest = ({ x, z }) => {
    let best = -1;
    let bestDistance = Infinity;
    open.forEach((isOpen, cell) => {
      if (!isOpen) return;
      const point = centre(cell);
      const distance = (point.x - x) ** 2 + (point.z - z) ** 2;
      if (distance < bestDistance) [best, bestDistance] = [cell, distance];
    });
    return best;
  };
  const neighbours = (cell) => {
    const column = cell % columns;
    return [
      column > 0 ? cell - 1 : -1, column < columns - 1 ? cell + 1 : -1, cell - columns, cell + columns,
    ].filter((next) => next >= 0 && next < open.length && open[next]);
  };
  const grid = { centre, nearest, neighbours };
  grids.set(plan, grid);
  return grid;
}

// The cells from one to another, fewest steps first, or null if none join them.
function cellPath(grid, start, goal) {
  const cameFrom = new Map([[start, -1]]);
  const queue = [start];
  for (let head = 0; head < queue.length; head += 1) {
    const cell = queue[head];
    if (cell === goal) {
      const cells = [];
      for (let at = goal; at !== -1; at = cameFrom.get(at)) cells.unshift(at);
      return cells;
    }
    for (const next of grid.neighbours(cell)) {
      if (cameFrom.has(next)) continue;
      cameFrom.set(next, cell);
      queue.push(next);
    }
  }
  return null;
}

// Waypoints from one spot to another: straight when clear, otherwise along the
// floor's shortest way round walls and partitions, pulled taut so the glide
// cuts no corner it cannot and turns only where it must.
export function route(plan, from, to) {
  if (straightLineIsClear(plan, from, to)) return [to];
  const grid = gridFor(plan);
  const cells = cellPath(grid, grid.nearest(from), grid.nearest(to));
  if (!cells) return [to]; // never on one connected floor
  // The cells' centres, the true ends in place of their cells where they are
  // on the floor, else one short step on to them.
  const points = cells.map(grid.centre);
  if (isWalkable(plan, to.x, to.z)) points[points.length - 1] = to;
  else points.push(to);
  const startsOnFloor = isWalkable(plan, from.x, from.z);
  const path = startsOnFloor ? [] : [points[0]];
  let index = startsOnFloor ? -1 : 0;
  let anchor = startsOnFloor ? from : points[0];
  while (index < points.length - 1) {
    let farthest = index + 1;
    for (let candidate = points.length - 1; candidate > farthest; candidate -= 1) {
      if (straightLineIsClear(plan, anchor, points[candidate])) {
        farthest = candidate;
        break;
      }
    }
    anchor = points[farthest];
    path.push(anchor);
    index = farthest;
  }
  return path;
}
