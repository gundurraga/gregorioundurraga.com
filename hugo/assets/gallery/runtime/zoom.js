// Looking closer without walking, like a lens: two fingers pinch on a phone,
// the wheel or a trackpad pinch on a computer. Reports relative scale steps;
// the caller owns the zoom level and its limits.

import { WHEEL_ZOOM_RATE } from "../constants.js";

export function createZoomGestures(canvas, onZoom) {
  const touches = new Map();
  let lastSpread = 0;

  function spread() {
    const [first, second] = [...touches.values()];
    return Math.hypot(first.x - second.x, first.y - second.y);
  }

  canvas.addEventListener("pointerdown", (event) => {
    if (event.pointerType !== "touch") return;
    touches.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (touches.size === 2) lastSpread = spread();
  });
  canvas.addEventListener("pointermove", (event) => {
    if (!touches.has(event.pointerId)) return;
    touches.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (touches.size !== 2) return;
    const current = spread();
    if (lastSpread > 0 && current > 0) onZoom(current / lastSpread);
    lastSpread = current;
  });
  const release = (event) => {
    touches.delete(event.pointerId);
    if (touches.size < 2) lastSpread = 0;
  };
  canvas.addEventListener("pointerup", release);
  canvas.addEventListener("pointercancel", release);

  canvas.addEventListener("wheel", (event) => {
    event.preventDefault();
    onZoom(Math.exp(-event.deltaY * WHEEL_ZOOM_RATE));
  }, { passive: false });
  // Safari's own pinch would zoom the whole page instead.
  canvas.addEventListener("gesturestart", (event) => event.preventDefault());

  return { isPinching: () => touches.size >= 2 };
}
