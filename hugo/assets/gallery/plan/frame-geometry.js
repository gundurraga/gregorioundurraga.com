// A painting's frame, measured the way a framer does, then returned in metres.
// "tray" is a float frame: the canvas sits inside a shadow gap, no paint hidden.
// "cassetta" is a flat box frame whose rebate laps over the paint's edge.

import {
  CANVAS_DEPTH_CM, LARGE_CANVAS_DEPTH_CM, LARGE_SIDE_CM,
  TRAY_GAP_CM, TRAY_PROUD_CM, TRAY_BACK_CM,
  CASSETTA_FACE_SHARE, CASSETTA_MIN_FACE_CM, CASSETTA_MAX_FACE_CM,
  CASSETTA_DEPTH_CM, LARGE_CASSETTA_DEPTH_CM, CASSETTA_REBATE_CM, CENTIMETRE,
} from "../constants.js";

const SMALL_SIDE_CM = 45;
const SMALL_TRAY_FACE_CM = 0.8;
const MEDIUM_TRAY_FACE_CM = 1;
const LARGE_TRAY_FACE_CM = 1.3;
const CANVAS_BELOW_FRIEZE_CM = 1.1;

function roundToHalf(value) {
  return Math.round(value * 2) / 2;
}

function trayFaceCm(longSideCm) {
  if (longSideCm < SMALL_SIDE_CM) return SMALL_TRAY_FACE_CM;
  if (longSideCm < LARGE_SIDE_CM) return MEDIUM_TRAY_FACE_CM;
  return LARGE_TRAY_FACE_CM;
}

function cassettaFaceCm(longSideCm) {
  const face = roundToHalf(longSideCm * CASSETTA_FACE_SHARE);
  return Math.min(CASSETTA_MAX_FACE_CM, Math.max(CASSETTA_MIN_FACE_CM, face));
}

export function frameGeometry(geometry, heightCm, widthCm) {
  const longSideCm = Math.max(heightCm, widthCm);
  const isLarge = longSideCm >= LARGE_SIDE_CM;
  const canvasDepthCm = isLarge ? LARGE_CANVAS_DEPTH_CM : CANVAS_DEPTH_CM;

  if (geometry === "tray") {
    const faceCm = trayFaceCm(longSideCm);
    const borderCm = TRAY_GAP_CM + faceCm;
    return {
      gap: TRAY_GAP_CM * CENTIMETRE,
      rebate: 0,
      depth: (TRAY_BACK_CM + canvasDepthCm + TRAY_PROUD_CM) * CENTIMETRE,
      canvasBack: TRAY_BACK_CM * CENTIMETRE,
      canvasFront: (TRAY_BACK_CM + canvasDepthCm) * CENTIMETRE,
      outerWidth: (widthCm + 2 * borderCm) * CENTIMETRE,
      outerHeight: (heightCm + 2 * borderCm) * CENTIMETRE,
    };
  }

  if (geometry === "cassetta") {
    const faceCm = cassettaFaceCm(longSideCm);
    const depthCm = isLarge ? LARGE_CASSETTA_DEPTH_CM : CASSETTA_DEPTH_CM;
    const borderCm = faceCm - CASSETTA_REBATE_CM;
    const canvasFrontCm = depthCm - CANVAS_BELOW_FRIEZE_CM;
    return {
      gap: 0,
      rebate: CASSETTA_REBATE_CM * CENTIMETRE,
      depth: depthCm * CENTIMETRE,
      canvasBack: (canvasFrontCm - canvasDepthCm) * CENTIMETRE,
      canvasFront: canvasFrontCm * CENTIMETRE,
      outerWidth: (widthCm + 2 * borderCm) * CENTIMETRE,
      outerHeight: (heightCm + 2 * borderCm) * CENTIMETRE,
    };
  }

  throw new Error(`Unknown frame geometry "${geometry}"`);
}
