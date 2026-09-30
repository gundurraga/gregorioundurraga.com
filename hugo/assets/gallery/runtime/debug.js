// ?debug: frame times, draw calls and texture memory on the device itself.
// Never on by default.

const SAMPLES = 120;
const REFRESH_MS = 500;
const CONSECUTIVE_FRAME_MS = 100; // longer gaps are idle time, not slow frames
const BYTES_PER_MEGABYTE = 1048576;

function percentile(sorted, fraction) {
  return sorted.length ? sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * fraction))] : 0;
}

export function createDebugOverlay({ renderer, residentBytes }) {
  const panel = document.createElement("div");
  panel.style.cssText = "position:fixed;left:8px;bottom:8px;z-index:20;padding:8px 10px;"
    + "background:rgba(0,0,0,.72);color:#fff;font:12px/1.5 ui-monospace,monospace;border-radius:4px;text-align:left;";
  const readout = document.createElement("pre");
  readout.style.margin = "0";
  panel.append(readout);
  document.body.append(panel);

  const frameTimes = [];
  let lastFrame = 0;
  let lastRefresh = 0;

  function frameRendered(now) {
    const interval = now - lastFrame;
    lastFrame = now;
    if (interval < CONSECUTIVE_FRAME_MS) {
      frameTimes.push(interval);
      if (frameTimes.length > SAMPLES) frameTimes.shift();
    }
    if (now - lastRefresh < REFRESH_MS) return;
    lastRefresh = now;
    const sorted = [...frameTimes].sort((a, b) => a - b);
    const { render, memory } = renderer.info;
    readout.textContent = [
      `frame p50 ${percentile(sorted, 0.5).toFixed(1)} ms  p90 ${percentile(sorted, 0.9).toFixed(1)} ms`,
      `draws ${render.calls}  triangles ${render.triangles}`,
      `textures ${memory.textures}  paintings ${(residentBytes() / BYTES_PER_MEGABYTE).toFixed(0)} MB`,
      `pixel ratio ${renderer.getPixelRatio()}`,
    ].join("\n");
  }

  return { frameRendered };
}
