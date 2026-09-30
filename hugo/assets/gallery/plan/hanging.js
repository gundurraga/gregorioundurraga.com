// Curated hanging: works (in viewing order) onto a room's wall segments (in
// walking order). A single line at a common centre height; the air between
// neighbours grows with their size; on each wall the largest work takes the
// centre and the others step down in size outwards; each wall's leftover space
// is shared out evenly so no wall ends in a lonely gap. An optional anchor
// hangs alone, centred on its own wall.

import {
  GAP_TO_WIDTH, MIN_GAP, MAX_GAP, MAX_SPREAD, LABEL_OFFSET, LABEL_WIDTH,
} from "../constants.js";

const LABEL_TAIL = LABEL_OFFSET + LABEL_WIDTH;

export function gapBetween(leftWidth, rightWidth) {
  const gap = GAP_TO_WIDTH * (leftWidth + rightWidth) / 2;
  return Math.min(MAX_GAP, Math.max(MIN_GAP, gap));
}

function requiredGaps(works) {
  return works.slice(1).map((work, index) => gapBetween(works[index].width, work.width));
}

function sum(values) {
  return values.reduce((total, value) => total + value, 0);
}

// Wall length a run of works needs: widths, the air between them, and room for
// the last label.
export function requiredSpan(works) {
  if (works.length === 0) return 0;
  return sum(works.map((work) => work.width)) + sum(requiredGaps(works)) + LABEL_TAIL;
}

// Spread works along one wall. Returns the centre of each work, measured from
// the wall segment's start.
export function justify(works, length) {
  if (works.length === 0) return [];
  if (works.length === 1) {
    const centred = length / 2;
    return [Math.min(centred, length - LABEL_TAIL - works[0].width / 2)];
  }
  const gaps = requiredGaps(works);
  const free = length - requiredSpan(works);
  const extraPerSlot = free / works.length; // n-1 inner gaps plus two half-weight margins
  const innerGaps = gaps.map((gap) => Math.min(MAX_SPREAD, Math.max(gap, gap + extraPerSlot)));
  const occupied = sum(works.map((work) => work.width)) + sum(innerGaps) + LABEL_TAIL;
  let cursor = (length - occupied) / 2;
  return works.map((work, index) => {
    const centre = cursor + work.width / 2;
    cursor += work.width + (innerGaps[index] ?? 0);
    return centre;
  });
}

// Deal works to segments in proportion to wall length, so every wall carries a
// similar density, then push any overflow forward to the next wall.
function distribute(works, segments) {
  const capacity = sum(segments.map((segment) => segment.length));
  const scale = capacity / requiredSpan(works);
  const buckets = segments.map(() => []);
  let cursor = 0;
  let segmentIndex = 0;
  let segmentEnd = segments[0].length;
  works.forEach((work, index) => {
    const virtualCentre = (cursor + work.width / 2) * scale;
    while (virtualCentre > segmentEnd && segmentIndex < segments.length - 1) {
      segmentIndex += 1;
      segmentEnd += segments[segmentIndex].length;
    }
    buckets[segmentIndex].push(work);
    const next = works[index + 1];
    cursor += work.width + (next ? gapBetween(work.width, next.width) : 0);
  });

  const overflows = (index) => requiredSpan(buckets[index]) > segments[index].length;
  for (let index = 0; index < buckets.length - 1; index += 1) {
    while (overflows(index)) buckets[index + 1].unshift(buckets[index].pop());
  }
  // Whatever the last wall cannot hold flows back to walls that still have air.
  for (let index = buckets.length - 1; index > 0 && overflows(index); index -= 1) {
    const previous = buckets[index - 1];
    while (overflows(index)) {
      previous.push(buckets[index].shift());
      if (overflows(index - 1)) {
        buckets[index].unshift(previous.pop());
        break;
      }
    }
  }
  if (buckets.some((_, index) => overflows(index))) {
    throw new Error(`Hanging overflow: ${works.length} works do not fit this room`);
  }
  return buckets;
}

// Largest in the middle, then alternating right and left, so a wall reads as
// one symmetric composition. Ties keep viewing order.
export function arrangeSymmetrically(works) {
  const bySize = works
    .map((work, index) => ({ work, index }))
    .sort((left, right) => right.work.width - left.work.width || left.index - right.index);
  const arranged = [];
  bySize.forEach(({ work }, rank) => {
    if (rank % 2 === 1) arranged.push(work);
    else arranged.unshift(work);
  });
  return arranged;
}

// works: [{ slug, width }] in viewing order. segments: [{ id, length }] in
// walking order. anchor: optional { slug, segmentId }.
// Returns [{ slug, segmentId, along }].
export function hangRoom(works, segments, anchor) {
  const placements = [];
  let flowWorks = works;
  let flowSegments = segments;

  if (anchor) {
    const anchorWork = works.find((work) => work.slug === anchor.slug);
    const anchorSegment = segments.find((segment) => segment.id === anchor.segmentId);
    if (!anchorWork || !anchorSegment) throw new Error(`Unknown anchor ${anchor.slug} on ${anchor.segmentId}`);
    placements.push({ slug: anchorWork.slug, segmentId: anchorSegment.id, along: anchorSegment.length / 2 });
    flowWorks = works.filter((work) => work !== anchorWork);
    flowSegments = segments.filter((segment) => segment !== anchorSegment);
  }
  if (flowWorks.length === 0) return placements;

  distribute(flowWorks, flowSegments).forEach((bucket, index) => {
    const segment = flowSegments[index];
    const arranged = arrangeSymmetrically(bucket);
    justify(arranged, segment.length).forEach((along, workIndex) => {
      placements.push({ slug: arranged[workIndex].slug, segmentId: segment.id, along });
    });
  });
  return placements;
}
