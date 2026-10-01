// Where the camera stands to look at one work closely: square to the wall, at
// the work's centre height, far enough back that frame and label fit the screen
// with a margin.

import { FOCUS_MARGIN, LABEL_WIDTH, EYE_HEIGHT } from "../constants.js";

const MIN_DISTANCE = 0.35;
const STANDING_FARTHEST = 2.5;
const STANDING_NEAREST = 0.8;
const STANDING_STEP = 0.1;

// The rotation about the vertical axis that faces along a wall's normal.
export function yawFacing(normal) {
  return Math.atan2(normal.x, normal.z);
}

// How far right of the work's centre its label ends. A label usually sits
// beside its work, but a set stacks its labels after the last work.
export function labelReach(artwork) {
  const { centre, right, label } = artwork;
  return (label.x - centre.x) * right.x + (label.z - centre.z) * right.z + LABEL_WIDTH / 2;
}

export function focusPose(artwork, verticalFov, aspect) {
  const { frame, centre, normal, right } = artwork;
  const leftEdge = -artwork.width / 2;
  const rightEdge = labelReach(artwork);
  const width = rightEdge - leftEdge;
  const sideways = (leftEdge + rightEdge) / 2;
  const halfVertical = Math.tan(verticalFov / 2);
  const halfHorizontal = halfVertical * aspect;
  const distance = Math.max(
    MIN_DISTANCE,
    FOCUS_MARGIN * Math.max(frame.outerHeight / (2 * halfVertical), width / (2 * halfHorizontal)),
  ) + frame.depth;
  return {
    x: centre.x + right.x * sideways + normal.x * distance,
    z: centre.z + right.z * sideways + normal.z * distance,
    y: centre.y,
    yaw: yawFacing(normal),
    pitch: 0,
  };
}

// Where a visitor stands to see a work from a comfortable distance: used when
// they arrive already looking closely (a shared link) and step back.
export function standingPose(artwork, isWalkableAt) {
  const { centre, normal } = artwork;
  for (let distance = STANDING_FARTHEST; distance > STANDING_NEAREST; distance -= STANDING_STEP) {
    const x = centre.x + normal.x * distance;
    const z = centre.z + normal.z * distance;
    if (isWalkableAt(x, z)) return { x, z, y: EYE_HEIGHT, yaw: yawFacing(normal), pitch: 0 };
  }
  throw new Error(`No floor in front of "${artwork.slug}"`);
}
