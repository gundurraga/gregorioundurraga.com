import { test } from "node:test";
import assert from "node:assert/strict";
import { frameGeometry } from "./frame-geometry.js";

const close = (actual, expected) => assert.ok(Math.abs(actual - expected) < 1e-9, `${actual} is not ${expected}`);

test("a mat is about a fifth of the paper's long side, wider below, round a floated sheet", () => {
  const frame = frameGeometry("mat", 38.5, 28);
  // 28 + 2 x 1.5 reveal + 2 x 8 mat + 2 x 2 moulding
  close(frame.outerWidth, 0.51);
  // 38.5 + 2 x 1.5 reveal + 8 above + 9.5 below + 2 x 2 moulding
  close(frame.outerHeight, 0.63);
  close(frame.raise, 0.0075);
  assert.ok(frame.canvasFront < frame.depth, "the paper lies behind the glass, inside the moulding");
});

test("a mat stays within a framer's widths on very small and very large sheets", () => {
  const border = (heightCm, widthCm) => (frameGeometry("mat", heightCm, widthCm).outerWidth * 100 - widthCm - 3 - 4) / 2;
  close(border(15, 10), 6);
  close(border(120, 80), 12);
});
