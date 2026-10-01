// The gallery's light, computed rather than rendered: soft, even top light from
// a laylight, as in a museum. Values are display brightness (1 = full albedo);
// the scene converts them to linear once, when it writes vertex colours.

export const smoothstep = (edge0, edge1, value) => {
  const t = Math.min(1, Math.max(0, (value - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
};

// Walls: brightest across the hanging band, a little darker towards floor and
// ceiling, and soft contact darkening where planes meet.
export function wallLight(height, ceiling, distanceToCorner) {
  let light = 0.9;
  if (height < 1) light *= 0.88 + 0.12 * smoothstep(0, 1, height);
  if (height > 2.2) light *= 1 - 0.1 * smoothstep(2.2, ceiling, height);
  light *= 0.8 + 0.2 * smoothstep(0, 0.22, height);
  light *= 0.86 + 0.14 * smoothstep(0, 0.35, ceiling - height);
  light *= 0.86 + 0.14 * smoothstep(0, 0.6, distanceToCorner);
  return light;
}

// Floors: pooled under the laylight, falling off towards the walls.
export function floorLight(distanceToWall, centreness) {
  return (0.84 + 0.1 * centreness) * (0.78 + 0.22 * smoothstep(0, 0.7, distanceToWall));
}

// Plaster ceiling around the laylight (the laylight itself is fully lit).
export function ceilingLight(distanceToEdge) {
  return 0.74 * (0.85 + 0.15 * smoothstep(0, 0.5, distanceToEdge));
}

// Box faces (frames, partitions' edges): lit from above.
export const FACE_LIGHT = { front: 0.93, top: 1, bottom: 0.6, side: 0.82 };

// Faint, fixed irregularity so no surface is render-perfect.
export function plasterNoise(x, y, z) {
  const hash = Math.sin(x * 12.9898 + y * 78.233 + z * 37.719) * 43758.5453;
  return 1 + ((hash - Math.floor(hash)) - 0.5) * 0.008;
}

export function toLinear(display) {
  return display ** 2.2;
}
