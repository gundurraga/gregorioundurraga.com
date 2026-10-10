// Materials of the building. Every surface is unlit (its light is baked into
// vertex colours), so paintings keep their exact colour and phones stay cool.
// Textures are drawn once at startup: neutral detail (grain, mottling, leaf)
// that the vertex colour tints, so one oak texture serves floor and skirtings.

import {
  CanvasTexture, MeshBasicMaterial, ShaderMaterial, Color, RepeatWrapping, SRGBColorSpace, FrontSide,
} from "../vendor/three/three.module.js";
import { smoothstep } from "../plan/light.js";

// Seeded, so the building looks the same on every visit.
export function random(seed) {
  let state = seed;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let value = Math.imul(state ^ (state >>> 15), 1 | state);
    value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value;
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

export function canvas(width, height = width) {
  const element = document.createElement("canvas");
  element.width = width;
  element.height = height;
  return { element, context: element.getContext("2d") };
}

// Fine grain laid over a texture: one small tile of random light and dark
// pixels, repeated. Grain this fine shows no repeat, and drawing a tile costs a
// fraction of touching every pixel of the texture.
const GRAIN_TILE = 256;

export function speckle(context, size, next, amount) {
  const tile = canvas(GRAIN_TILE);
  const pixels = tile.context.createImageData(GRAIN_TILE, GRAIN_TILE);
  for (let index = 0; index < pixels.data.length; index += 4) {
    const offset = (next() - 0.5) * amount;
    const level = offset > 0 ? 255 : 0;
    pixels.data[index] = level;
    pixels.data[index + 1] = level;
    pixels.data[index + 2] = level;
    pixels.data[index + 3] = Math.abs(offset) * 2;
  }
  tile.context.putImageData(pixels, 0, 0);
  context.fillStyle = context.createPattern(tile.element, "repeat");
  context.fillRect(0, 0, size[0], size[1]);
}

// The skin of poured concrete: a fine sand grain, and here and there a small
// blowhole where an air bubble met the formwork, shadowed above and lit below.
// Kept at the edge of notice. size in pixels; strength scales it (1 for a
// wall; less on a floor, where any dot seen from afar reads as carpet).
const BLOWHOLES_PER_SQUARE_METRE = 12;

export function concreteSkin(context, size, next, pixelsPerMetre, strength) {
  speckle(context, size, next, 40 * strength);
  const holes = Math.round((size[0] * size[1] / pixelsPerMetre ** 2) * BLOWHOLES_PER_SQUARE_METRE * strength);
  for (let hole = 0; hole < holes; hole += 1) {
    const x = next() * size[0];
    const y = next() * size[1];
    const radius = (0.002 + next() * 0.004) * pixelsPerMetre;
    // Drawn again a texture over where it crosses an edge, so the tiling never seams.
    for (const [shiftX, shiftY] of [[0, 0], [-size[0], 0], [0, -size[1]], [-size[0], -size[1]]]) {
      context.fillStyle = `rgba(96, 92, 86, ${0.3 * strength})`;
      context.beginPath();
      context.arc(x + shiftX, y + shiftY, radius, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = `rgba(250, 248, 242, ${0.25 * strength})`;
      context.fillRect(x + shiftX - radius, y + shiftY + radius * 0.6, radius * 2, 0.8);
    }
  }
}

const grey = (value, alpha = 1) => {
  const level = Math.round(value * 255);
  return `rgba(${level}, ${level}, ${level}, ${alpha})`;
};

// 2 x 2 m of oiled oak: 20 cm planks along u, staggered joints, fine grain.
function drawOak() {
  const size = 1024;
  const { element, context } = canvas(size);
  const next = random(7);
  const plankHeight = size / 10;
  for (let row = 0; row < 10; row += 1) {
    const top = row * plankHeight;
    let start = -next() * size;
    while (start < size) {
      const length = size * (0.6 + next() * 0.4);
      context.fillStyle = grey(0.9 + next() * 0.06);
      for (const shift of [0, size]) context.fillRect(start + shift, top, length, plankHeight);
      context.fillStyle = grey(0.55, 0.5);
      context.fillRect(start + length - 1, top, 1.5, plankHeight);
      start += length;
    }
    for (let line = 0; line < 26; line += 1) {
      const y = top + next() * plankHeight;
      const amplitude = 1 + next() * 3;
      const periods = 1 + Math.floor(next() * 3);
      context.strokeStyle = next() > 0.5 ? grey(0.4, 0.06 + next() * 0.06) : grey(1, 0.08);
      context.lineWidth = 0.6 + next() * 1.4;
      context.beginPath();
      for (let x = 0; x <= size; x += 16) {
        const offset = Math.sin((x / size) * periods * Math.PI * 2 + row) * amplitude;
        if (x === 0) context.moveTo(x, y + offset); else context.lineTo(x, y + offset);
      }
      context.stroke();
    }
    context.fillStyle = grey(0.45, 0.55);
    context.fillRect(0, top, size, 1.5);
  }
  return element;
}

// 60 x 60 cm of quarter-sawn oak for frame mouldings: straight close grain
// along u, the silver flecks of the rays, and no plank joints, since a rail is
// one length of wood. Lines wave a whole number of times across, so it tiles.
const FRAME_OAK_METRES = 0.6;

function drawFrameOak() {
  const size = 512;
  const { element, context } = canvas(size);
  const next = random(17);
  context.fillStyle = grey(0.9);
  context.fillRect(0, 0, size, size);
  for (let band = 0; band < 14; band += 1) {
    const y = next() * size;
    const height = 8 + next() * 30;
    context.fillStyle = grey(next() > 0.5 ? 1 : 0.75, 0.06 + next() * 0.05);
    for (const shift of [-size, 0, size]) context.fillRect(0, y + shift, size, height);
  }
  for (let line = 0; line < 150; line += 1) {
    const y = next() * size;
    const amplitude = 0.5 + next() * 2.5;
    const periods = 1 + Math.floor(next() * 2);
    const phase = next() * Math.PI * 2;
    context.strokeStyle = grey(0.35, 0.08 + next() * 0.14);
    context.lineWidth = 0.5 + next() * 1.1;
    for (const shift of [-size, 0, size]) {
      context.beginPath();
      for (let x = 0; x <= size; x += 8) {
        const offset = Math.sin((x / size) * periods * Math.PI * 2 + phase) * amplitude;
        if (x === 0) context.moveTo(x, y + shift + offset); else context.lineTo(x, y + shift + offset);
      }
      context.stroke();
    }
  }
  for (let fleck = 0; fleck < 260; fleck += 1) {
    context.fillStyle = grey(1, 0.12 + next() * 0.12);
    context.fillRect(next() * size, next() * size, 4 + next() * 14, 1 + next());
  }
  return element;
}

// 2.4 x 2.4 m of precast concrete paving: 60 x 120 cm slabs laid in a running
// bond, long side along the walk. Each slab is its own pour: a tone and a soft
// cloud across it. Fine joints with a lit arris, and the faintest skin of the
// pour: any stronger grain reads as carpet at a distance.
const PAVING_METRES = 2.4;

function drawConcrete() {
  const size = 1024;
  const { element, context } = canvas(size);
  const next = random(11);
  const pixelsPerMetre = size / PAVING_METRES;
  const slabLength = 1.2 * pixelsPerMetre;
  const slabWidth = 0.6 * pixelsPerMetre;
  context.fillStyle = grey(0.9);
  context.fillRect(0, 0, size, size);
  // A joint: a dark line, then the lit arris beside it.
  const joint = (x, y, width, height, across) => {
    context.fillStyle = grey(0.4, 0.35);
    context.fillRect(x, y, across ? 2 : width, across ? height : 2);
    context.fillStyle = grey(1, 0.12);
    context.fillRect(across ? x + 2 : x, across ? y : y + 2, across ? 1 : width, across ? height : 1);
  };
  const rows = Math.round(size / slabWidth);
  const slabsPerRow = Math.round(size / slabLength);
  for (let row = 0; row < rows; row += 1) {
    const top = row * slabWidth;
    for (let slab = 0; slab < slabsPerRow; slab += 1) {
      // One pour per slab, drawn twice where it crosses the texture's edge so the tiling never seams.
      const start = (row % 2) * slabLength / 2 + slab * slabLength;
      const tone = 0.86 + next() * 0.08;
      const cloudX = start + next() * slabLength;
      const cloudY = top + next() * slabWidth;
      const cloudTone = next() > 0.5 ? 1 : 0.6;
      for (const shift of [-size, 0]) {
        const left = start + shift;
        context.fillStyle = grey(tone);
        context.fillRect(left, top, slabLength, slabWidth);
        const cloud = context.createRadialGradient(cloudX + shift, cloudY, 0, cloudX + shift, cloudY, slabLength * 0.7);
        cloud.addColorStop(0, grey(cloudTone, 0.05));
        cloud.addColorStop(1, grey(0.8, 0));
        context.fillStyle = cloud;
        context.fillRect(left, top, slabLength, slabWidth);
        joint(left, top, 0, slabWidth, true);
      }
    }
    joint(0, top, size, 0, false);
  }
  concreteSkin(context, [size, size], next, pixelsPerMetre, 0.5);
  return element;
}

// 24 x 24 cm of water gilding: 8 cm leaf squares with faint overlaps.
function drawGilt() {
  const size = 256;
  const { element, context } = canvas(size);
  const next = random(3);
  const leaf = size / 3;
  for (let row = 0; row < 3; row += 1) {
    for (let column = 0; column < 3; column += 1) {
      context.fillStyle = grey(0.96 + next() * 0.04);
      context.fillRect(column * leaf, row * leaf, leaf, leaf);
      context.fillStyle = grey(0.8, 0.2);
      context.fillRect(column * leaf, row * leaf, leaf, 1);
      context.fillRect(column * leaf, row * leaf, 1, leaf);
    }
  }
  return element;
}

// The soft edge of a shadow as a grey alpha map (white = shadow): clear at the
// border, full at the centre, with rounded corners where two edges fade
// together. Shadows are nine-sliced over it (see addShadow in artworks.js), so
// their penumbra keeps one width in metres whatever the size of the work.
function drawShadow() {
  const size = 64;
  const { element, context } = canvas(size);
  const pixels = context.createImageData(size, size);
  const fade = (pixel) => smoothstep(0, 1, Math.min(pixel + 0.5, size - pixel - 0.5) / (size / 2));
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const level = Math.round(fade(x) * fade(y) * 255);
      const index = (y * size + x) * 4;
      pixels.data.set([level, level, level, 255], index);
    }
  }
  context.putImageData(pixels, 0, 0);
  return element;
}

// metres: what one repeat of the image covers, one number or [across, along].
export function tiledTexture(image, metres, anisotropy) {
  const [across, along] = Array.isArray(metres) ? metres : [metres, metres];
  const texture = new CanvasTexture(image);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(1 / across, 1 / along);
  texture.colorSpace = SRGBColorSpace;
  texture.anisotropy = anisotropy;
  // Once on the GPU the drawing canvas is dead weight; a lost context reloads the page anyway.
  texture.onUpdate = () => {
    image.width = 0;
    image.height = 0;
  };
  return texture;
}

// Things a few millimetres off a wall (frames, label cards, their shadows) would
// fight the wall for depth across a long room and flicker; this settles every
// tie in their favour.
export const ON_THE_WALL = { polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -4 };

// The glass over a work on paper: museum glass, which hardly reflects. Looked
// at straight on it is not there; from the side it catches a faint sheen of
// the gallery's light (Fresnel), enough to tell the work is glazed.
const FRAME_GLASS_SHEEN = "#F4F4F2"; // the laylight it reflects
const FRAME_GLASS_LEAST = 0.01;
const FRAME_GLASS_MOST = 0.22;

function frameGlass() {
  return new ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: {
      sheen: { value: new Color(FRAME_GLASS_SHEEN) },
      least: { value: FRAME_GLASS_LEAST },
      most: { value: FRAME_GLASS_MOST },
    },
    vertexShader: /* glsl */ `
      varying vec3 vWorld;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 sheen;
      uniform float least;
      uniform float most;
      varying vec3 vWorld;
      void main() {
        vec3 normal = normalize(cross(dFdx(vWorld), dFdy(vWorld)));
        float facing = abs(dot(normalize(vWorld - cameraPosition), normal));
        gl_FragColor = vec4(sheen, least + (most - least) * pow(1.0 - facing, 3.0));
        #include <colorspace_fragment>
      }
    `,
  });
}

export function createMaterials(anisotropy) {
  // Dithered: the walls' gentle falls of light would otherwise show as steps.
  const surface = (map, extra = {}) => new MeshBasicMaterial({ vertexColors: true, map, side: FrontSide, dithering: true, ...extra });
  const shadowTexture = new CanvasTexture(drawShadow());
  return {
    plain: surface(null),
    plainOnTheWall: surface(null, ON_THE_WALL),
    oak: surface(tiledTexture(drawOak(), 2, anisotropy)),
    frameOak: surface(tiledTexture(drawFrameOak(), FRAME_OAK_METRES, anisotropy), ON_THE_WALL),
    concrete: surface(tiledTexture(drawConcrete(), PAVING_METRES, anisotropy)),
    gilt: surface(tiledTexture(drawGilt(), 0.24, anisotropy), ON_THE_WALL),
    shadow: new MeshBasicMaterial({
      color: 0x000000, alphaMap: shadowTexture, transparent: true, opacity: 0.15, depthWrite: false, ...ON_THE_WALL,
    }),
    frameGlass: frameGlass(),
  };
}
