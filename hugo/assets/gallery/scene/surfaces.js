// Collects flat surfaces (subdivided quads and boxes) with baked vertex colours,
// then turns them into one BufferGeometry per material: one draw call each.
// Axes: a quad's front faces the direction uAxis x vAxis.

import { BufferGeometry, Float32BufferAttribute, Uint32BufferAttribute, Color } from "../vendor/three/three.module.js";
import { FACE_LIGHT, toLinear } from "../plan/light.js";

export function createSurfaces() {
  return { positions: [], uvs: [], colors: [], indices: [] };
}

const scratchColor = new Color();

// Albedo from a hex string, as linear RGB.
export function linearAlbedo(hex) {
  scratchColor.set(hex);
  return [scratchColor.r, scratchColor.g, scratchColor.b];
}

// Ascending break positions from 0 to length: every step, plus extra ones where
// light changes fast or edges fall.
export function breaks(length, step, extra = []) {
  const values = [0, length, ...extra.filter((value) => value > 0 && value < length)];
  for (let value = step; value < length; value += step) values.push(value);
  return [...new Set(values.map((value) => Math.round(value * 1000) / 1000))].sort((a, b) => a - b);
}

// Appends one vertex: position, texture coordinate, and colour as albedo times
// display brightness (converted to linear once, here). Returns its index.
export function pushVertex(surfaces, position, uv, albedo, light) {
  surfaces.positions.push(...position);
  surfaces.uvs.push(...uv);
  const brightness = toLinear(light);
  surfaces.colors.push(albedo[0] * brightness, albedo[1] * brightness, albedo[2] * brightness);
  return surfaces.positions.length / 3 - 1;
}

// origin, uAxis, vAxis: [x, y, z]. uBreaks, vBreaks: ascending positions along
// each axis. skip(u, v): true for a cell to leave open (a doorway). light(u, v):
// display brightness at a vertex. uvOffset shifts the texture.
export function addQuad(surfaces, { origin, uAxis, vAxis, uBreaks, vBreaks, albedo, light, skip, uvOffset = [0, 0], swapUv = false }) {
  const base = surfaces.positions.length / 3;
  for (const v of vBreaks) {
    for (const u of uBreaks) {
      const position = origin.map((value, index) => value + uAxis[index] * u + vAxis[index] * v);
      const textureU = u + uvOffset[0];
      const textureV = v + uvOffset[1];
      pushVertex(surfaces, position, swapUv ? [textureV, textureU] : [textureU, textureV], albedo, light ? light(u, v) : 1);
    }
  }
  const columns = uBreaks.length;
  for (let row = 0; row < vBreaks.length - 1; row += 1) {
    for (let column = 0; column < columns - 1; column += 1) {
      const centreU = (uBreaks[column] + uBreaks[column + 1]) / 2;
      const centreV = (vBreaks[row] + vBreaks[row + 1]) / 2;
      if (skip && skip(centreU, centreV)) continue;
      const a = base + row * columns + column;
      const b = a + 1;
      const c = a + columns + 1;
      const d = a + columns;
      surfaces.indices.push(a, b, c, a, c, d);
    }
  }
}

// Any flat four-sided face, corners in order with the front on the side they
// turn anticlockwise around. lights: display brightness at each corner.
export function addFace(surfaces, { corners, uvs, albedo, lights }) {
  const [a, b, c, d] = corners.map((corner, index) => pushVertex(surfaces, corner, uvs[index], albedo, lights[index]));
  surfaces.indices.push(a, b, c, a, c, d);
}

const scale = (vector, amount) => vector.map((component) => component * amount);
const add = (...vectors) => vectors.reduce((sum, vector) => sum.map((component, index) => component + vector[index]));

// A box in a local frame (right, up, out of the wall) placed at origin. min and
// max are [u, v, w] in that frame. The back face (against the wall) is omitted;
// faces lists which of front/top/bottom/left/right to emit.
export function addBox(surfaces, { origin, right, up, out, min, max, albedo, faces, grainAlongV = false, uvOffset = [0.05, 0.05] }) {
  const point = (u, v, w) => add(origin, scale(right, u), scale(up, v), scale(out, w));
  const width = max[0] - min[0];
  const height = max[1] - min[1];
  const depth = max[2] - min[2];
  const quad = (faceOrigin, uAxis, vAxis, uLength, vLength, brightness) => addQuad(surfaces, {
    origin: faceOrigin, uAxis, vAxis, uBreaks: [0, uLength], vBreaks: [0, vLength],
    albedo, light: () => brightness, uvOffset, swapUv: grainAlongV,
  });
  const back = scale(out, -1);
  const emit = new Set(faces ?? ["front", "top", "bottom", "left", "right"]);
  if (emit.has("front")) quad(point(min[0], min[1], max[2]), right, up, width, height, FACE_LIGHT.front);
  if (emit.has("top")) quad(point(min[0], max[1], max[2]), right, back, width, depth, FACE_LIGHT.top);
  if (emit.has("bottom")) quad(point(min[0], min[1], min[2]), right, out, width, depth, FACE_LIGHT.bottom);
  if (emit.has("right")) quad(point(max[0], min[1], max[2]), back, up, depth, height, FACE_LIGHT.side);
  if (emit.has("left")) quad(point(min[0], min[1], min[2]), out, up, depth, height, FACE_LIGHT.side);
}

export function toGeometry(surfaces) {
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new Float32BufferAttribute(surfaces.positions, 3));
  geometry.setAttribute("uv", new Float32BufferAttribute(surfaces.uvs, 2));
  geometry.setAttribute("color", new Float32BufferAttribute(surfaces.colors, 3));
  geometry.setIndex(new Uint32BufferAttribute(surfaces.indices, 1));
  geometry.computeBoundingSphere();
  return geometry;
}

export function isEmpty(surfaces) {
  return surfaces.indices.length === 0;
}
