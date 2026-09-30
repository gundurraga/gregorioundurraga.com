// From the page's painting data to a hung building: every work with its frame,
// its place on a wall, and its label. Pure: same data, same gallery.

import { planBuilding } from "./floor-plan.js";
import { hangRoom, requiredSpan } from "./hanging.js";
import { frameGeometry } from "./frame-geometry.js";
import {
  HANG_CENTER, MIN_BOTTOM_EDGE, LABEL_OFFSET, LABEL_WIDTH, LABEL_HEIGHT, LABEL_CENTER, LABEL_STACK_GAP,
  SET_MAX_SIDE_CM, SET_GAP, PANEL_GAP,
} from "../constants.js";

function framedWorks(data) {
  const profiles = new Map(data.frames.map((profile) => [profile.id, profile]));
  return data.paintings.map((painting) => {
    const profile = profiles.get(painting.frame);
    if (!profile) throw new Error(`Painting "${painting.slug}" has unknown frame "${painting.frame}"`);
    // A diptych is photographed as one image but hangs as separate canvases,
    // each in its own frame; `frame` describes one canvas.
    const panelWidthCm = painting.widthCm / painting.panels;
    const frame = frameGeometry(profile.geometry, painting.heightCm, panelWidthCm);
    const width = painting.panels * frame.outerWidth + (painting.panels - 1) * PANEL_GAP;
    const panels = Array.from({ length: painting.panels }, (_, index) => ({
      offset: -width / 2 + frame.outerWidth / 2 + index * (frame.outerWidth + PANEL_GAP),
      widthCm: panelWidthCm,
      imageFrom: index / painting.panels,
      imageTo: (index + 1) / painting.panels,
    }));
    return { painting, profile, frame, panels, slug: painting.slug, width };
  });
}

// Chronological, keeping the data's order within a year.
function viewingOrder(works) {
  return works
    .map((work, index) => ({ work, index }))
    .sort((left, right) => left.work.painting.year - right.work.painting.year || left.index - right.index)
    .map(({ work }) => work);
}

function belongTogether(left, right) {
  const { painting: a } = left;
  const { painting: b } = right;
  return a.year === b.year && a.heightCm === b.heightCm && a.widthCm === b.widthCm
    && Math.max(a.heightCm, a.widthCm) <= SET_MAX_SIDE_CM;
}

// Consecutive small works of one size and year become one hanging unit.
function groupSets(works) {
  const units = [];
  for (const work of works) {
    const previous = units[units.length - 1];
    if (previous && belongTogether(previous.members[previous.members.length - 1], work)) {
      previous.members.push(work);
      previous.width += SET_GAP + work.width;
    } else {
      units.push({ slug: work.slug, width: work.width, members: [work] });
    }
  }
  return units;
}

function tallest(works) {
  return works.reduce((best, work) => (work.frame.outerHeight > best.frame.outerHeight ? work : best));
}

function pointOn(wall, along) {
  return { x: wall.start.x + wall.direction.x * along, z: wall.start.z + wall.direction.z * along };
}

// A unit's members side by side; their labels stacked to the right of the unit.
function placeUnit(unit, wall, along, roomId) {
  const labelPoint = pointOn(wall, along + unit.width / 2 + LABEL_OFFSET + LABEL_WIDTH / 2);
  const middle = (unit.members.length - 1) / 2;
  let cursor = along - unit.width / 2;
  return unit.members.map((work, index) => {
    const point = pointOn(wall, cursor + work.width / 2);
    cursor += work.width + SET_GAP;
    return {
      ...work,
      roomId,
      setId: unit.members.length > 1 ? unit.slug : null,
      wallId: wall.id,
      centre: { x: point.x, y: Math.max(HANG_CENTER, work.frame.outerHeight / 2 + MIN_BOTTOM_EDGE), z: point.z },
      normal: wall.normal,
      right: wall.direction,
      label: { x: labelPoint.x, y: LABEL_CENTER + (middle - index) * (LABEL_HEIGHT + LABEL_STACK_GAP), z: labelPoint.z },
    };
  });
}

export function layoutGallery(data) {
  const works = framedWorks(data);
  const rooms = data.rooms
    .map((room) => ({ room, units: groupSets(viewingOrder(works.filter((work) => work.painting.room === room.id))) }))
    .filter(({ units }) => units.length > 0);

  const anchors = new Map();
  const lastRoom = rooms[rooms.length - 1];
  if (lastRoom) {
    const anchorWork = tallest(lastRoom.units.flatMap((unit) => unit.members));
    anchors.set(lastRoom.room.id, lastRoom.units.find((unit) => unit.members.includes(anchorWork)));
  }

  const building = planBuilding(rooms.map(({ room, units }) => ({
    ...room,
    requiredSpan: requiredSpan(units.filter((unit) => unit !== anchors.get(room.id))),
    tallestWork: tallest(units.flatMap((unit) => unit.members)).frame.outerHeight,
  })));

  const artworks = rooms.flatMap(({ room, units }) => {
    const planned = building.rooms.find((candidate) => candidate.id === room.id);
    const anchor = anchors.get(room.id);
    const walls = new Map(planned.segments.map((wall) => [wall.id, wall]));
    const bySlug = new Map(units.map((unit) => [unit.slug, unit]));
    const anchorPlacement = anchor && { slug: anchor.slug, segmentId: planned.anchorSegmentId };
    return hangRoom(units, planned.segments, anchorPlacement).flatMap((placement) =>
      placeUnit(bySlug.get(placement.slug), walls.get(placement.segmentId), placement.along, room.id)
        .map((artwork) => ({ ...artwork, labelCard: room.card })));
  });

  return { building, artworks };
}
