// Paintings on the walls: frames (merged per material), soft contact shadows
// (one merged mesh), and one textured mesh per painting, which is what a tap
// hits and what the texture tiers swap. A diptych's canvases each get a frame
// and share the painting's one image.

import { BufferGeometry, Float32BufferAttribute, Group, Mesh, MeshBasicMaterial } from "../vendor/three/three.module.js";
import { createSurfaces, addBox, addFace, addQuad, pushVertex, linearAlbedo, toGeometry, isEmpty } from "./surfaces.js";
import { FACE_LIGHT } from "../plan/light.js";
import { yawFacing } from "../plan/focus-pose.js";
import { ON_THE_WALL } from "./materials.js";
import { CENTIMETRE } from "../constants.js";

const CANVAS_EDGE = "#E9E4D8";
const TRAY_INSIDE = "#2A2724";
const PLACEHOLDER = "#8C8883";
const MAT_BOARD = "#EFEBE2"; // warm ivory: bright white would make the paper look dull
const MAT_BACKING = "#E2DDD2"; // the board behind the floated sheet, a step deeper, so the sheet reads as lying on it
const MAT_CORE = "#FDFBF6"; // the board's white core, bared by the bevel
// The floated sheet's shadow on the backing board: light from above, so it
// shows mostly below the sheet, a hairline at its sides.
const PAPER_SHADOW = { side: 0.002, top: -0.0005, bottom: 0.005, softness: 0.004, standOff: 0.0003 };
const GLASS_LIFT = 0.0005; // the glass rests on the mat
// Shadows, as shares of how far the frame stands off the wall: a deeper frame
// casts a longer shadow.
const FRAME_SHADOW_FALL = 1.3; // in the middle: full right under the frame, gone by the end of its fall
const FRAME_SHADOW_ENDS = 0.45; // how much shorter it falls at the frame's ends
const FRAME_SHADOW_SOFTNESS = 0.5; // how wide its sides fade
const FRAME_SHADOW_TAPER = 0.3; // how far its sides draw in towards the middle as it falls
const WALL_OFFSET = 0.002;
const CANVAS_LIFT = 0.0005; // the painting plane sits just proud of the canvas box
// Cassetta profile, in metres: the frieze stops short of the raised outer lip,
// and a fine sight edge rises around the opening.
const CASSETTA_LIP_HEIGHT = 0.008;
const CASSETTA_LIP_WIDTH = 0.01;
const CASSETTA_SIGHT_EDGE_WIDTH = 0.008;
const CASSETTA_SIGHT_EDGE_HEIGHT = 0.006;

function basis(artwork) {
  return {
    origin: [artwork.centre.x, artwork.centre.y, artwork.centre.z],
    right: [artwork.right.x, 0, artwork.right.z],
    up: [0, 1, 0],
    out: [artwork.normal.x, 0, artwork.normal.z],
  };
}

// The local frame of one canvas: the work's frame, slid along the wall.
function panelBasis(artwork, panel) {
  const frame = basis(artwork);
  return { ...frame, origin: frame.origin.map((value, index) => value + frame.right[index] * panel.offset) };
}

// The front of each rail is cut at 45 degrees where it meets the next, as a
// framer mitres a moulding: the grain turns the corner along the diagonal, and
// the stiles catch the top light a shade differently from the rails. The
// outer arris is eased, as sanded wood is, so a fine band there catches the
// light, and the face darkens a little as it turns into the sight edge.
const STILE_TONE = 0.95;
const ARRIS_WIDTH = 0.004;
const ARRIS_LIGHT = 1.16;
const SIGHT_EDGE_LIGHT = 0.93;

const lerp = (from, to, amount) => from.map((value, index) => value + (to[index] - value) * amount);

function addMitredFronts(surfaces, { origin, right, up, out }, { inner, outer, toW, albedo }) {
  const point = ([u, v]) => origin.map((value, index) => value + right[index] * u + up[index] * v + out[index] * toW);
  const [innerX, innerY] = inner.map((length) => length / 2);
  const [outerX, outerY] = outer.map((length) => length / 2);
  // Each rail's outer and inner edge, corner by corner along the mitres.
  const rails = [
    { outerEdge: [[-outerX, outerY], [outerX, outerY]], innerEdge: [[-innerX, innerY], [innerX, innerY]], alongV: false },
    { outerEdge: [[-outerX, -outerY], [outerX, -outerY]], innerEdge: [[-innerX, -innerY], [innerX, -innerY]], alongV: false },
    { outerEdge: [[-outerX, -outerY], [-outerX, outerY]], innerEdge: [[-innerX, -innerY], [-innerX, innerY]], alongV: true },
    { outerEdge: [[outerX, -outerY], [outerX, outerY]], innerEdge: [[innerX, -innerY], [innerX, innerY]], alongV: true },
  ];
  rails.forEach(({ outerEdge, innerEdge, alongV }, index) => {
    const shift = index * 0.37; // each rail is its own length of wood, so the grain breaks at the mitre
    const uv = ([u, v]) => (alongV ? [v + shift, u] : [u + shift, v]);
    const face = FACE_LIGHT.front * (alongV ? STILE_TONE : 1);
    const railWidth = alongV ? outerX - innerX : outerY - innerY;
    const band = outerEdge.map((corner, end) => lerp(corner, innerEdge[end], Math.min(0.3, ARRIS_WIDTH / railWidth)));
    for (const [from, to, fromLight, toLight] of [
      [outerEdge, band, face * ARRIS_LIGHT, face],
      [band, innerEdge, face, face * SIGHT_EDGE_LIGHT],
    ]) {
      let corners = [from[0], from[1], to[1], to[0]];
      let lights = [fromLight, fromLight, toLight, toLight];
      // Front faces turn anticlockwise; flip any strip that does not.
      const area = corners.reduce((sum, [u, v], corner) => {
        const [nextU, nextV] = corners[(corner + 1) % 4];
        return sum + u * nextV - nextU * v;
      }, 0);
      if (area < 0) {
        corners = corners.reverse();
        lights = lights.reverse();
      }
      addFace(surfaces, { corners: corners.map(point), uvs: corners.map(uv), albedo, lights });
    }
  });
}

// Four rails around an opening. Their edges are boxes (top and bottom full
// width, the stiles between), their fronts mitred. Only edges that show are
// drawn: where the rails meet, a face buried in the joint would surface at the
// front as a fine line across the stile.
function addRails(surfaces, frame, { inner, outer, fromW, toW, albedo }) {
  const [innerWidth, innerHeight] = inner;
  const [outerWidth, outerHeight] = outer;
  const left = -outerWidth / 2;
  const bottom = -outerHeight / 2;
  const [innerX, innerY] = [innerWidth / 2, innerHeight / 2];
  addBox(surfaces, { ...frame, albedo, faces: ["top", "left", "right"], min: [left, innerY, fromW], max: [-left, -bottom, toW] });
  addBox(surfaces, { ...frame, albedo, faces: ["bottom", "left", "right"], min: [left, bottom, fromW], max: [-left, -innerY, toW] });
  addBox(surfaces, { ...frame, albedo, faces: ["bottom"], min: [-innerX, innerY, fromW], max: [innerX, innerY, toW] });
  addBox(surfaces, { ...frame, albedo, faces: ["top"], min: [-innerX, -innerY, fromW], max: [innerX, -innerY, toW] });
  addBox(surfaces, { ...frame, albedo, faces: ["left", "right"], grainAlongV: true, min: [left, -innerY, fromW], max: [-innerX, innerY, toW] });
  addBox(surfaces, { ...frame, albedo, faces: ["left", "right"], grainAlongV: true, min: [innerX, -innerY, fromW], max: [-left, innerY, toW] });
  addMitredFronts(surfaces, frame, { inner, outer, toW, albedo });
}

function addTray(target, plain, artwork, panel, frameAlbedo) {
  const frame = panelBasis(artwork, panel);
  const { painting, frame: size } = artwork;
  const canvasWidth = panel.widthCm * CENTIMETRE;
  const canvasHeight = painting.heightCm * CENTIMETRE;
  const openingWidth = canvasWidth + 2 * size.gap;
  const openingHeight = canvasHeight + 2 * size.gap;
  addBox(plain, {
    ...frame, albedo: linearAlbedo(TRAY_INSIDE), faces: ["front"],
    min: [-openingWidth / 2, -openingHeight / 2, 0], max: [openingWidth / 2, openingHeight / 2, size.canvasBack],
  });
  addBox(plain, {
    ...frame, albedo: linearAlbedo(CANVAS_EDGE), faces: ["top", "bottom", "left", "right"],
    min: [-canvasWidth / 2, -canvasHeight / 2, size.canvasBack], max: [canvasWidth / 2, canvasHeight / 2, size.canvasFront],
  });
  addRails(target, frame, {
    inner: [openingWidth, openingHeight], outer: [size.outerWidth, size.outerHeight],
    fromW: 0, toW: size.depth, albedo: frameAlbedo,
  });
}

// Flat frieze with a raised outer edge and a finer sight edge at the opening.
function addCassetta(target, artwork, panel, frameAlbedo) {
  const frame = panelBasis(artwork, panel);
  const { painting, frame: size } = artwork;
  const openingWidth = panel.widthCm * CENTIMETRE - 2 * size.rebate;
  const openingHeight = painting.heightCm * CENTIMETRE - 2 * size.rebate;
  const outer = [size.outerWidth, size.outerHeight];
  const frieze = size.depth - CASSETTA_LIP_HEIGHT;
  addRails(target, frame, { inner: [openingWidth, openingHeight], outer, fromW: 0, toW: frieze, albedo: frameAlbedo });
  addRails(target, frame, {
    inner: [size.outerWidth - 2 * CASSETTA_LIP_WIDTH, size.outerHeight - 2 * CASSETTA_LIP_WIDTH],
    outer, fromW: frieze, toW: size.depth, albedo: frameAlbedo,
  });
  const sightOuter = [openingWidth + 2 * CASSETTA_SIGHT_EDGE_WIDTH, openingHeight + 2 * CASSETTA_SIGHT_EDGE_WIDTH];
  addRails(target, frame, {
    inner: [openingWidth, openingHeight], outer: sightOuter,
    fromW: frieze, toW: frieze + CASSETTA_SIGHT_EDGE_HEIGHT, albedo: frameAlbedo,
  });
}

// A work on paper floated on a backing board, a bevelled mat round it (wider
// below), the glass resting on the mat, all in a slim moulding. The bevel cuts
// the mat's edge at 45 degrees, so it faces the visitor and shows the board's
// white core as a fine line round the window, lit by where it faces.
function addMatFrame(target, plain, glass, shadows, artwork, panel, frameAlbedo) {
  const frame = panelBasis(artwork, panel);
  const { painting, frame: size } = artwork;
  const { face, windowWidth, windowHeight, thickness } = size.mat;
  const back = size.canvasBack;
  const front = back + thickness;
  const inner = [size.outerWidth - 2 * face, size.outerHeight - 2 * face];
  const [innerX, innerY] = inner.map((length) => length / 2);
  const windowX = windowWidth / 2;
  const [windowBottom, windowTop] = [size.raise - windowHeight / 2, size.raise + windowHeight / 2];
  const board = linearAlbedo(MAT_BOARD);
  addBox(plain, {
    ...frame, albedo: linearAlbedo(MAT_BACKING), faces: ["front"], min: [-windowX, windowBottom, 0], max: [windowX, windowTop, back],
  });
  const onBacking = { ...frame, origin: frame.origin.map((value, index) => value + frame.up[index] * size.raise + frame.out[index] * back) };
  addShadow(shadows, onBacking, panel.widthCm * CENTIMETRE, painting.heightCm * CENTIMETRE, PAPER_SHADOW);
  // The mat's face: full-width strips above and below the window, the sides between.
  for (const [min, max] of [
    [[-innerX, windowTop + thickness], [innerX, innerY]],
    [[-innerX, -innerY], [innerX, windowBottom - thickness]],
    [[-innerX, windowBottom - thickness], [-windowX - thickness, windowTop + thickness]],
    [[windowX + thickness, windowBottom - thickness], [innerX, windowTop + thickness]],
  ]) {
    addBox(plain, { ...frame, albedo: board, faces: ["front"], min: [...min, 0], max: [...max, front] });
  }
  // The bevels, each between the window (at the board) and the window grown by
  // the mat's thickness (at the mat's face), corner to corner.
  const foot = [-windowX, windowBottom, windowX, windowTop];
  const lip = [-windowX - thickness, windowBottom - thickness, windowX + thickness, windowTop + thickness];
  const corner = ([left, bottom, right, top], index) => [[left, top], [left, bottom], [right, bottom], [right, top]][index % 4];
  // The white core reads as a fine bright line on every side: the sides lit as
  // the face is, the lower bevel turned up to the light, the upper one away.
  const tilted = (light) => (FACE_LIGHT.front + light) / 2;
  const sides = [FACE_LIGHT.front, FACE_LIGHT.top, FACE_LIGHT.front, tilted(FACE_LIGHT.bottom)];
  const point = ([u, v, w]) => frame.origin.map((value, index) => value + frame.right[index] * u + frame.up[index] * v + frame.out[index] * w);
  sides.forEach((light, index) => {
    // left (facing right), bottom (facing up), right, top (facing down), each wound to face the visitor
    const corners = [[...corner(foot, index), back], [...corner(lip, index), front], [...corner(lip, index + 1), front], [...corner(foot, index + 1), back]];
    addFace(plain, { corners: corners.map(point), uvs: corners.map(() => [0, 0]), albedo: linearAlbedo(MAT_CORE), lights: [light, light, light, light] });
  });
  addRails(target, frame, { inner, outer: [size.outerWidth, size.outerHeight], fromW: 0, toW: size.depth, albedo: frameAlbedo });
  addBox(glass, {
    ...frame, albedo: [1, 1, 1], faces: ["front"], min: [-innerX, -innerY, 0], max: [innerX, innerY, front + GLASS_LIFT],
  });
}

// A soft shadow on the wall. side, top, bottom: how far it reaches past the
// object each way, in metres (negative stays hidden behind it). softness: how
// wide its edge fades. standOff: how far in front of the surface it lies. Nine-sliced: the edge maps onto the texture's border
// and the middle onto its full centre, so every size of work fades alike.
function addShadow(shadows, { origin, right, up, out }, objectWidth, objectHeight, { side, top, bottom, softness, standOff = WALL_OFFSET }) {
  const width = objectWidth + 2 * side;
  const height = objectHeight + top + bottom;
  const corner = origin.map((value, index) =>
    value - right[index] * width / 2 - up[index] * (objectHeight / 2 + bottom) + out[index] * standOff);
  const slices = (length, fade) => {
    const edge = Math.min(fade, length / 2);
    return { edge, breaks: [0, edge, length - edge, length] };
  };
  const sliceUv = (position, length, edge) => {
    if (position <= edge) return (position / edge) * 0.5;
    if (position >= length - edge) return 1 - ((length - position) / edge) * 0.5;
    return 0.5;
  };
  const across = slices(width, softness);
  const upwards = slices(height, softness);
  const first = shadows.uvs.length;
  addQuad(shadows, {
    origin: corner, uAxis: right, vAxis: up, uBreaks: across.breaks, vBreaks: upwards.breaks,
    albedo: [1, 1, 1], uvOffset: [0, 0],
  });
  const uvs = shadows.uvs;
  for (let index = first; index < uvs.length; index += 2) {
    uvs[index] = sliceUv(uvs[index], width, across.edge);
    uvs[index + 1] = sliceUv(uvs[index + 1], height, upwards.edge);
  }
}

// A frame's shadow under the ceiling's light: it falls below the frame, as
// far as the frame stands off the wall, and none shows beside or above it, so
// the work hangs on the wall rather than floating in front of it. A light as
// broad as a laylight reaches in under the frame from both sides, so the
// shadow falls furthest in the middle and less towards the ends, its lower
// edge a soft curve, its sides drawing in a little as they fall. Laid on the
// shadow texture as a grid: three rows (hidden behind the frame, at its bottom
// edge, at the end of the fall) and, across, each side's outer and inner fade
// line with columns between to carry the curve.
const SHADOW_CURVE_COLUMNS = 8;

function addFrameShadow(shadows, { origin, right, up, out }, objectWidth, objectHeight, depth) {
  const fall = FRAME_SHADOW_FALL * depth;
  const soft = FRAME_SHADOW_SOFTNESS * depth;
  const taper = FRAME_SHADOW_TAPER * fall;
  const half = objectWidth / 2;
  const edge = -objectHeight / 2;
  // How far it falls across the frame, from its middle (0) to its ends (1).
  const fallAt = (fromMiddle) => fall * (1 - FRAME_SHADOW_ENDS * fromMiddle ** 2);
  // Across, [position at the frame's edge as a share of half its width, extra inset, u].
  const inner = Array.from({ length: SHADOW_CURVE_COLUMNS + 1 }, (_, index) => [-1 + (2 * index) / SHADOW_CURVE_COLUMNS, soft, 0.5]);
  const columns = [[-1, 0, 0], ...inner, [1, 0, 1]];
  const base = shadows.positions.length / 3;
  for (const row of [0, 1, 2]) {
    for (const [share, extra, u] of columns) {
      const side = Math.sign(share) || 1;
      const isSide = Math.abs(share) === 1;
      const inset = (row === 2 && isSide ? taper : 0) + (isSide ? extra : 0);
      const across = share * half - side * inset;
      const fromMiddle = Math.min(1, Math.abs(across) / half);
      const height = [edge + fall, edge, edge - fallAt(fromMiddle)][row];
      const position = origin.map((value, index) => value + right[index] * across + up[index] * height + out[index] * WALL_OFFSET);
      pushVertex(shadows, position, [u, [1, 0.5, 0][row]], [1, 1, 1], 1);
    }
  }
  for (let row = 0; row < 2; row += 1) {
    for (let column = 0; column < columns.length - 1; column += 1) {
      const a = base + row * columns.length + column;
      const c = a + columns.length + 1;
      shadows.indices.push(a, c, a + 1, a, c - 1, c);
    }
  }
}


export function buildFrames(artworks, materials) {
  const group = new Group();
  const plain = createSurfaces();
  const wood = createSurfaces();
  const gilt = createSurfaces();
  const shadows = createSurfaces();
  const glass = createSurfaces();
  for (const artwork of artworks) {
    const { profile } = artwork;
    // Gilt frames take the leaf; oak and black ones are wood, the black painted,
    // its grain still showing through the paint.
    const target = profile.id.startsWith("gilt") ? gilt : wood;
    const albedo = linearAlbedo(profile.color);
    for (const panel of artwork.panels) {
      if (profile.geometry === "tray") addTray(target, plain, artwork, panel, albedo);
      else if (profile.geometry === "mat") addMatFrame(target, plain, glass, shadows, artwork, panel, albedo);
      else addCassetta(target, artwork, panel, albedo);
      addFrameShadow(shadows, panelBasis(artwork, panel), artwork.frame.outerWidth, artwork.frame.outerHeight, artwork.frame.depth);
    }
  }
  if (!isEmpty(shadows)) group.add(new Mesh(toGeometry(shadows), materials.shadow));
  for (const [surfaces, material] of [[plain, materials.plainOnTheWall], [wood, materials.frameOak], [gilt, materials.gilt]]) {
    if (!isEmpty(surfaces)) group.add(new Mesh(toGeometry(surfaces), material));
  }
  if (!isEmpty(glass)) group.add(new Mesh(toGeometry(glass), materials.frameGlass));
  return group;
}

// One quad per canvas in the mesh's own plane (x along the wall, y up), each
// showing its slice of the image. Image bitmaps arrive top row first on every
// browser, so v runs downwards rather than asking browsers to flip on decode.
function canvasGeometry(artwork) {
  const height = artwork.painting.heightCm * CENTIMETRE;
  const positions = [];
  const uvs = [];
  const indices = [];
  artwork.panels.forEach((panel, index) => {
    const left = panel.offset - (panel.widthCm * CENTIMETRE) / 2;
    const right = panel.offset + (panel.widthCm * CENTIMETRE) / 2;
    positions.push(left, -height / 2, 0, right, -height / 2, 0, right, height / 2, 0, left, height / 2, 0);
    uvs.push(panel.imageFrom, 1, panel.imageTo, 1, panel.imageTo, 0, panel.imageFrom, 0);
    const base = index * 4;
    indices.push(base, base + 1, base + 2, base, base + 2, base + 3);
  });
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
  geometry.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeBoundingSphere();
  return geometry;
}

// One mesh per painting, facing out of its wall, just proud of the canvas front,
// raised where a mat sits the work above the frame's middle.
export function buildPaintings(artworks) {
  const group = new Group();
  const meshes = artworks.map((artwork) => {
    const material = new MeshBasicMaterial({ color: PLACEHOLDER, ...ON_THE_WALL });
    const mesh = new Mesh(canvasGeometry(artwork), material);
    const lift = artwork.frame.canvasFront + CANVAS_LIFT;
    mesh.position.set(
      artwork.centre.x + artwork.normal.x * lift,
      artwork.centre.y + artwork.frame.raise,
      artwork.centre.z + artwork.normal.z * lift,
    );
    mesh.rotation.y = yawFacing(artwork.normal);
    mesh.userData.artwork = artwork;
    group.add(mesh);
    return mesh;
  });
  return { group, meshes };
}
