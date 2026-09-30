// Paintings on the walls: frames (merged per material), soft contact shadows
// (one merged mesh), and one textured mesh per painting, which is what a tap
// hits and what the texture tiers swap. A diptych's canvases each get a frame
// and share the painting's one image.

import { BufferGeometry, Float32BufferAttribute, Group, Mesh, MeshBasicMaterial } from "../vendor/three/three.module.js";
import { createSurfaces, addBox, addQuad, linearAlbedo, toGeometry, isEmpty } from "./surfaces.js";
import { yawFacing } from "../plan/focus-pose.js";
import { LABEL_WIDTH, LABEL_HEIGHT, LABEL_DEPTH, CENTIMETRE } from "../constants.js";

const CANVAS_EDGE = "#E9E4D8";
const TRAY_INSIDE = "#2A2724";
const PLACEHOLDER = "#8C8883";
const FRAME_SHADOW = { spread: 0.035, drop: 0.02 };
const CARD_SHADOW = { spread: 0.008, drop: 0.004 };
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

// Four rails around an opening: top and bottom run full width (grain along
// them), the stiles fit between (grain vertical).
function addRails(surfaces, frame, { inner, outer, fromW, toW, albedo }) {
  const [innerWidth, innerHeight] = inner;
  const [outerWidth, outerHeight] = outer;
  const left = -outerWidth / 2;
  const bottom = -outerHeight / 2;
  addBox(surfaces, { ...frame, albedo, min: [left, innerHeight / 2, fromW], max: [-left, -bottom, toW] });
  addBox(surfaces, { ...frame, albedo, min: [left, bottom, fromW], max: [-left, -innerHeight / 2, toW] });
  addBox(surfaces, { ...frame, albedo, grainAlongV: true, min: [left, -innerHeight / 2, fromW], max: [-innerWidth / 2, innerHeight / 2, toW] });
  addBox(surfaces, { ...frame, albedo, grainAlongV: true, min: [innerWidth / 2, -innerHeight / 2, fromW], max: [-left, innerHeight / 2, toW] });
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

function addShadow(shadows, { origin, right, up, out }, objectWidth, objectHeight, { spread, drop }) {
  const width = objectWidth + 2 * spread;
  const height = objectHeight + 2 * spread;
  const corner = origin.map((value, index) =>
    value - right[index] * width / 2 - up[index] * (height / 2 + drop) + out[index] * WALL_OFFSET);
  addQuad(shadows, {
    origin: corner, uAxis: right, vAxis: up, uBreaks: [0, width], vBreaks: [0, height],
    albedo: [1, 1, 1], uvOffset: [0, 0],
  });
  const uvs = shadows.uvs;
  for (let index = uvs.length - 8; index < uvs.length; index += 2) {
    uvs[index] = uvs[index] > 0 ? 1 : 0;
    uvs[index + 1] = uvs[index + 1] > 0 ? 1 : 0;
  }
}

// The paper card each label is printed on, flush on the wall.
function addLabelCard(plain, shadows, artwork) {
  const card = { ...basis(artwork), origin: [artwork.label.x, artwork.label.y, artwork.label.z] };
  addBox(plain, {
    ...card, albedo: linearAlbedo(artwork.labelCard),
    min: [-LABEL_WIDTH / 2, -LABEL_HEIGHT / 2, 0], max: [LABEL_WIDTH / 2, LABEL_HEIGHT / 2, LABEL_DEPTH],
  });
  addShadow(shadows, card, LABEL_WIDTH, LABEL_HEIGHT, CARD_SHADOW);
}

// Oak and gilt frames take their material's grain; every other finish is plain.
function surfacesForProfile(profileId, { plain, oak, gilt }) {
  if (profileId.startsWith("oak")) return oak;
  if (profileId.startsWith("gilt")) return gilt;
  return plain;
}

export function buildFrames(artworks, materials) {
  const group = new Group();
  const plain = createSurfaces();
  const oak = createSurfaces();
  const gilt = createSurfaces();
  const shadows = createSurfaces();
  for (const artwork of artworks) {
    const { profile } = artwork;
    const target = surfacesForProfile(profile.id, { plain, oak, gilt });
    const albedo = linearAlbedo(profile.color);
    for (const panel of artwork.panels) {
      if (profile.geometry === "tray") addTray(target, plain, artwork, panel, albedo);
      else addCassetta(target, artwork, panel, albedo);
      addShadow(shadows, panelBasis(artwork, panel), artwork.frame.outerWidth, artwork.frame.outerHeight, FRAME_SHADOW);
    }
    addLabelCard(plain, shadows, artwork);
  }
  if (!isEmpty(shadows)) group.add(new Mesh(toGeometry(shadows), materials.shadow));
  for (const [surfaces, material] of [[plain, materials.plain], [oak, materials.oak], [gilt, materials.gilt]]) {
    if (!isEmpty(surfaces)) group.add(new Mesh(toGeometry(surfaces), material));
  }
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

// One mesh per painting, facing out of its wall, just proud of the canvas front.
export function buildPaintings(artworks) {
  const group = new Group();
  const meshes = artworks.map((artwork) => {
    const material = new MeshBasicMaterial({ color: PLACEHOLDER });
    const mesh = new Mesh(canvasGeometry(artwork), material);
    const lift = artwork.frame.canvasFront + CANVAS_LIFT;
    mesh.position.set(
      artwork.centre.x + artwork.normal.x * lift,
      artwork.centre.y,
      artwork.centre.z + artwork.normal.z * lift,
    );
    mesh.rotation.y = yawFacing(artwork.normal);
    mesh.userData.artwork = artwork;
    group.add(mesh);
    return mesh;
  });
  return { group, meshes };
}
