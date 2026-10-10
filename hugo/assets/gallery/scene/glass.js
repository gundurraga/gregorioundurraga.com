// The reflection on the lobby's glass: a true mirror image of the scene,
// drawn from a camera mirrored in the glass's plane, into a texture the glass
// then shows. Glass barely reflects when looked at straight on and turns to a
// mirror as the eye comes round to its edge (Fresnel), so the reflection
// shifts and strengthens as the visitor moves.

import {
  Mesh, PlaneGeometry, ShaderMaterial, PerspectiveCamera, WebGLRenderTarget, HalfFloatType,
  Matrix4, Vector2, Vector3, Vector4, Plane, DoubleSide,
} from "../vendor/three/three.module.js";

const MAX_SHEEN = 0.6; // how mirror-like the glass becomes at a glancing angle
const LEAST_SHEEN = 0.04; // straight on
const MAX_TEXTURE = 2048; // the reflection matches the screen's pixels up to this size
const SAMPLES = 4; // antialiased, as the screen is
const FARTHEST = 20; // metres: beyond this the glass is too far off to show a reflection worth drawing
const CLIP_BIAS = 0.003;

// Every mirror hides while any one of them draws, so the two facing panes
// show each other as plain glass, never reflections of reflections.
const mirrors = new Set();

const scratch = {
  mirrorPosition: new Vector3(), cameraPosition: new Vector3(), normal: new Vector3(), rotation: new Matrix4(),
  view: new Vector3(), lookAt: new Vector3(), aim: new Vector3(), plane: new Plane(), clip: new Vector4(), q: new Vector4(),
};

// A mirror of width x height metres, facing +z in its own frame; the caller places it.
export function createGlassMirror(width, height) {
  const target = new WebGLRenderTarget(1, 1, { type: HalfFloatType, samples: SAMPLES });
  const textureMatrix = new Matrix4();
  const virtualCamera = new PerspectiveCamera();
  const material = new ShaderMaterial({
    transparent: true,
    // It writes depth, so nothing behind the glass drawn after it shows through it.
    depthWrite: true,
    side: DoubleSide,
    uniforms: {
      reflection: { value: target.texture },
      textureMatrix: { value: textureMatrix },
      maxSheen: { value: MAX_SHEEN },
      leastSheen: { value: LEAST_SHEEN },
    },
    vertexShader: /* glsl */ `
      uniform mat4 textureMatrix;
      varying vec4 vReflection;
      varying vec3 vWorld;
      void main() {
        vReflection = textureMatrix * vec4(position, 1.0);
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform sampler2D reflection;
      uniform float maxSheen;
      uniform float leastSheen;
      varying vec4 vReflection;
      varying vec3 vWorld;
      void main() {
        vec3 view = normalize(vWorld - cameraPosition);
        vec3 normal = normalize(cross(dFdx(vWorld), dFdy(vWorld)));
        float facing = abs(dot(view, normal));
        // Schlick's curve, eased from the fifth power so the sheen already
        // shows at the angles a visitor looks at the glass from.
        float fresnel = 0.04 + 0.96 * pow(1.0 - facing, 2.5);
        vec3 reflected = texture2DProj(reflection, vReflection).rgb;
        gl_FragColor = vec4(reflected, leastSheen + (maxSheen - leastSheen) * fresnel);
        #include <colorspace_fragment>
      }
    `,
  });
  const mirror = new Mesh(new PlaneGeometry(width, height), material);
  mirror.raycast = () => {};
  mirrors.add(mirror);

  // Before the glass is drawn, draw what it reflects (after three.js's Reflector).
  // It follows the screen's size, so the reflection is as sharp as the view.
  const drawingSize = new Vector2();
  mirror.onBeforeRender = (renderer, scene, camera) => {
    renderer.getDrawingBufferSize(drawingSize);
    const scale = Math.min(1, MAX_TEXTURE / Math.max(drawingSize.x, drawingSize.y));
    const [width, height] = [Math.round(drawingSize.x * scale), Math.round(drawingSize.y * scale)];
    if (target.width !== width || target.height !== height) target.setSize(width, height);
    const { mirrorPosition, cameraPosition, normal, rotation, view, lookAt, aim, plane, clip, q } = scratch;
    mirrorPosition.setFromMatrixPosition(mirror.matrixWorld);
    cameraPosition.setFromMatrixPosition(camera.matrixWorld);
    rotation.extractRotation(mirror.matrixWorld);
    normal.set(0, 0, 1).applyMatrix4(rotation);
    view.subVectors(mirrorPosition, cameraPosition);
    // From behind, or too far off to matter: keep the last reflection.
    if (view.dot(normal) > 0 || view.length() > FARTHEST) return;
    view.reflect(normal).negate().add(mirrorPosition);
    rotation.extractRotation(camera.matrixWorld);
    lookAt.set(0, 0, -1).applyMatrix4(rotation).add(cameraPosition);
    aim.subVectors(mirrorPosition, lookAt).reflect(normal).negate().add(mirrorPosition);
    virtualCamera.position.copy(view);
    virtualCamera.up.set(0, 1, 0).applyMatrix4(rotation).reflect(normal);
    virtualCamera.lookAt(aim);
    virtualCamera.far = camera.far;
    virtualCamera.updateMatrixWorld();
    virtualCamera.projectionMatrix.copy(camera.projectionMatrix);
    textureMatrix.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1)
      .multiply(virtualCamera.projectionMatrix).multiply(virtualCamera.matrixWorldInverse).multiply(mirror.matrixWorld);
    // Clip the mirrored view at the glass, so nothing behind it shows in the reflection.
    plane.setFromNormalAndCoplanarPoint(normal, mirrorPosition).applyMatrix4(virtualCamera.matrixWorldInverse);
    clip.set(plane.normal.x, plane.normal.y, plane.normal.z, plane.constant);
    const projection = virtualCamera.projectionMatrix.elements;
    q.set(
      (Math.sign(clip.x) + projection[8]) / projection[0],
      (Math.sign(clip.y) + projection[9]) / projection[5],
      -1,
      (1 + projection[10]) / projection[14],
    );
    clip.multiplyScalar(2 / clip.dot(q));
    projection[2] = clip.x;
    projection[6] = clip.y;
    projection[10] = clip.z + 1 - CLIP_BIAS;
    projection[14] = clip.w;

    mirrors.forEach((each) => { each.visible = false; });
    const previousTarget = renderer.getRenderTarget();
    renderer.setRenderTarget(target);
    // The glass is drawn without writing depth, and that state is still set
    // here: unlocked, so the clear really empties the mirror's depth.
    renderer.state.buffers.depth.setMask(true);
    renderer.clear();
    renderer.render(scene, virtualCamera);
    renderer.setRenderTarget(previousTarget);
    mirrors.forEach((each) => { each.visible = true; });
  };
  return mirror;
}
