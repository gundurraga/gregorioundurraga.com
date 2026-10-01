// How a visitor moves. One gesture set on every device: drag to look, tap the
// floor to walk there, tap a painting to glide in front of it, drag there to
// move along it and its label, tap again (or Esc) to step back. Keyboard
// walking on desktop, never required. No pointer lock, no joystick.

import { MathUtils } from "../vendor/three/three.module.js";
import { isWalkable, slide, route } from "../plan/walk-bounds.js";
import { focusPose, standingPose, labelReach } from "../plan/focus-pose.js";
import {
  EYE_HEIGHT, WALK_SPEED, TURN_SPEED, DRAG_SENSITIVITY, MAX_PITCH, TAP_MAX_MOVE_PX, TAP_MAX_MS,
  GLIDE_BASE_SECONDS, GLIDE_SECONDS_PER_METRE, GLIDE_MAX_SECONDS, LABEL_HEIGHT,
} from "../constants.js";

const REACHABLE_STEPS = 20;
const PRIMARY_BUTTON = 0;

const KEYS = {
  forward: ["KeyW", "ArrowUp"], back: ["KeyS", "ArrowDown"],
  left: ["KeyA"], right: ["KeyD"], turnLeft: ["ArrowLeft"], turnRight: ["ArrowRight"],
};

const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);

function angleBetween(from, to) {
  return Math.atan2(Math.sin(to - from), Math.cos(to - from));
}

function pathLength(points) {
  let total = 0;
  for (let index = 1; index < points.length; index += 1) {
    total += Math.hypot(points[index].x - points[index - 1].x, points[index].z - points[index - 1].z);
  }
  return total;
}

function pointAlong(points, distance) {
  let remaining = distance;
  for (let index = 1; index < points.length; index += 1) {
    const from = points[index - 1];
    const to = points[index];
    const length = Math.hypot(to.x - from.x, to.z - from.z);
    if (remaining <= length && length > 0) {
      const t = remaining / length;
      return { x: from.x + (to.x - from.x) * t, z: from.z + (to.z - from.z) * t };
    }
    remaining -= length;
  }
  return points[points.length - 1];
}

// pick(clientX, clientY) returns { kind: "painting", artwork } or
// { kind: "floor", point } or null.
export function createNavigation({ canvas, camera, plan, pick, onFocusChange, zoom }) {
  const pose = { x: plan.spawn.x, z: plan.spawn.z, y: EYE_HEIGHT, yaw: plan.spawn.yaw, pitch: 0 };
  const pressed = new Set();
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let glide = null;
  let focused = null; // { artwork, returnPose }
  let pointer = null;
  let jumped = false;
  let refitAfterGlide = false;

  function startGlide(target, { path = [target] } = {}) {
    const points = [{ x: pose.x, z: pose.z }, ...path];
    const distance = pathLength(points);
    const seconds = reducedMotion.matches ? 0
      : Math.min(GLIDE_MAX_SECONDS, GLIDE_BASE_SECONDS + distance * GLIDE_SECONDS_PER_METRE);
    glide = {
      points, distance, seconds, elapsed: 0,
      from: { ...pose },
      to: { y: target.y ?? pose.y, yaw: target.yaw ?? pose.yaw, pitch: target.pitch ?? pose.pitch },
    };
  }

  // Jump without moving through space (arriving from a link).
  function placeAt(target) {
    glide = null;
    Object.assign(pose, target);
    jumped = true;
  }

  function focus(artwork, { instant = false } = {}) {
    if (focused?.artwork === artwork) return;
    zoom.reset();
    const target = focusPose(artwork, MathUtils.degToRad(camera.fov), camera.aspect);
    const returnPose = instant ? standingPose(artwork, (x, z) => isWalkable(plan, x, z)) : { ...pose };
    focused = { artwork, returnPose };
    onFocusChange(artwork);
    if (instant) placeAt(target);
    else startGlide(target, { path: route(plan, pose, target) });
  }

  // The screen changed shape (rotation, resize): frame the open painting again.
  function refit() {
    if (!focused) return;
    if (glide) {
      refitAfterGlide = true;
      return;
    }
    placeAt(focusPose(focused.artwork, MathUtils.degToRad(camera.fov), camera.aspect));
  }

  function unfocus() {
    if (!focused) return;
    const { returnPose } = focused;
    focused = null;
    zoom.reset();
    onFocusChange(null);
    startGlide(returnPose);
  }

  // In front of a painting, a drag slides the view along the wall, as a visitor
  // leans towards a corner of the canvas or the label, never past their edges.
  // The content follows the finger at any zoom.
  function pan(dx, dy) {
    const { centre, normal, right, frame, label, width } = focused.artwork;
    const offsetX = pose.x - centre.x;
    const offsetZ = pose.z - centre.z;
    const distance = offsetX * normal.x + offsetZ * normal.z;
    const metresPerPixel = (2 * distance * Math.tan(MathUtils.degToRad(camera.fov) / 2)) / canvas.clientHeight;
    const lateral = MathUtils.clamp(
      offsetX * right.x + offsetZ * right.z - dx * metresPerPixel,
      -width / 2, labelReach(focused.artwork),
    );
    pose.x = centre.x + right.x * lateral + normal.x * distance;
    pose.z = centre.z + right.z * lateral + normal.z * distance;
    pose.y = MathUtils.clamp(
      pose.y + dy * metresPerPixel,
      Math.min(centre.y - frame.outerHeight / 2, label.y - LABEL_HEIGHT / 2),
      centre.y + frame.outerHeight / 2,
    );
  }

  // The nearest walkable spot on the way from the target back to the visitor.
  function reachable(point) {
    for (let step = 0; step <= REACHABLE_STEPS; step += 1) {
      const t = step / REACHABLE_STEPS;
      const x = point.x + (pose.x - point.x) * t;
      const z = point.z + (pose.z - point.z) * t;
      if (isWalkable(plan, x, z)) return { x, z };
    }
    return null;
  }

  function tap(clientX, clientY) {
    if (glide) return;
    if (focused) {
      unfocus();
      return;
    }
    const target = pick(clientX, clientY);
    if (target?.kind === "painting") focus(target.artwork);
    if (target?.kind === "floor") {
      const destination = reachable(target.point);
      if (destination) startGlide(destination, { path: route(plan, pose, destination) });
    }
  }

  canvas.addEventListener("pointerdown", (event) => {
    if (pointer || event.button !== PRIMARY_BUTTON) return;
    pointer = {
      id: event.pointerId, x: event.clientX, y: event.clientY, time: performance.now(), isDrag: false, moved: false,
    };
    canvas.setPointerCapture(event.pointerId);
  });
  canvas.addEventListener("pointermove", (event) => {
    if (!pointer || event.pointerId !== pointer.id) return;
    const dx = event.clientX - pointer.x;
    const dy = event.clientY - pointer.y;
    // A second finger turns the gesture into a pinch: no tap, and no looking.
    if (zoom.isPinching()) {
      pointer.isDrag = true;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      return;
    }
    if (!pointer.isDrag && Math.hypot(dx, dy) > TAP_MAX_MOVE_PX) {
      pointer.isDrag = true;
      canvas.classList.add("is-dragging");
    }
    if (!pointer.isDrag) return;
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    if (glide) return;
    pointer.moved = true;
    if (focused) {
      pan(dx, dy);
      return;
    }
    const sensitivity = DRAG_SENSITIVITY / zoom.level(); // magnified views turn slower, like a telescope
    pose.yaw += dx * sensitivity;
    pose.pitch = Math.max(-MAX_PITCH, Math.min(MAX_PITCH, pose.pitch + dy * sensitivity));
  });
  const endPointer = (event, isCancel) => {
    if (!pointer || event.pointerId !== pointer.id) return;
    const isTap = !isCancel && !pointer.isDrag && performance.now() - pointer.time < TAP_MAX_MS;
    pointer = null;
    canvas.classList.remove("is-dragging");
    if (isTap) tap(event.clientX, event.clientY);
  };
  canvas.addEventListener("pointerup", (event) => endPointer(event, false));
  canvas.addEventListener("pointercancel", (event) => endPointer(event, true));

  window.addEventListener("keydown", (event) => {
    if (event.target.closest?.("#header")) return;
    // macOS sends no keyup for a key released while Cmd is held: it would walk forever.
    if (event.metaKey || event.ctrlKey || event.altKey) {
      pressed.clear();
      return;
    }
    if (event.code === "Escape") unfocus();
    pressed.add(event.code);
  });
  window.addEventListener("keyup", (event) => pressed.delete(event.code));
  window.addEventListener("blur", () => pressed.clear());

  const isPressed = (action) => KEYS[action].some((code) => pressed.has(code));

  function walk(seconds) {
    const forward = (isPressed("forward") ? 1 : 0) - (isPressed("back") ? 1 : 0);
    const sideways = (isPressed("right") ? 1 : 0) - (isPressed("left") ? 1 : 0);
    const turn = (isPressed("turnLeft") ? 1 : 0) - (isPressed("turnRight") ? 1 : 0);
    if (!forward && !sideways && !turn) return false;
    pose.yaw += turn * TURN_SPEED * seconds;
    const step = WALK_SPEED * seconds / (forward && sideways ? Math.SQRT2 : 1);
    const sin = Math.sin(pose.yaw);
    const cos = Math.cos(pose.yaw);
    const next = {
      x: pose.x - sin * forward * step + cos * sideways * step,
      z: pose.z - cos * forward * step - sin * sideways * step,
    };
    Object.assign(pose, slide(plan, pose, next));
    return true;
  }

  function advanceGlide(seconds) {
    glide.elapsed += seconds;
    const t = glide.seconds === 0 ? 1 : Math.min(1, glide.elapsed / glide.seconds);
    const eased = easeInOut(t);
    Object.assign(pose, pointAlong(glide.points, glide.distance * eased));
    pose.y = glide.from.y + (glide.to.y - glide.from.y) * eased;
    pose.yaw = glide.from.yaw + angleBetween(glide.from.yaw, glide.to.yaw) * eased;
    pose.pitch = glide.from.pitch + (glide.to.pitch - glide.from.pitch) * eased;
    if (t === 1) {
      glide = null;
      if (refitAfterGlide) {
        refitAfterGlide = false;
        refit();
      }
    }
  }

  // Advances movement; returns true when the camera moved.
  function update(seconds) {
    let moved = false;
    if (glide) {
      advanceGlide(seconds);
      moved = true;
    } else if (!focused) {
      moved = walk(seconds);
    }
    if (pointer?.moved || jumped) {
      if (pointer) pointer.moved = false;
      jumped = false;
      moved = true;
    }
    if (moved) {
      camera.position.set(pose.x, pose.y, pose.z);
      camera.rotation.set(pose.pitch, pose.yaw, 0, "YXZ");
    }
    return moved;
  }

  camera.position.set(pose.x, pose.y, pose.z);
  camera.rotation.set(pose.pitch, pose.yaw, 0, "YXZ");

  return { update, focus, unfocus, refit, focusedSlug: () => focused?.artwork.slug ?? null };
}
