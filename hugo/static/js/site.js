"use strict";

// ---- Reveal. The loader dissolves forward while the gallery rises into place;
// CSS owns the motion, this only flips the classes. Never leave body hidden.
const MIN_LOADER_MS = 400; // a floor, so a cached load doesn't flash the loader
const bootedAt = performance.now();
let revealed = false;

function revealBody() {
  if (revealed) return;
  revealed = true;
  const loader = document.querySelector(".loader");
  if (loader) {
    loader.classList.add("is-gone");
    loader.addEventListener("transitionend", () => loader.remove(), { once: true });
    setTimeout(() => loader.remove(), 1000); // in case the transition never fires
  }
  document.body.classList.add("is-ready");
  applyTheme();
}
window.addEventListener("load", () => {
  setTimeout(revealBody, Math.max(0, MIN_LOADER_MS - (performance.now() - bootedAt)));
});
// Fail-safe: if load never fires (cache quirks), reveal anyway.
setTimeout(revealBody, 2500);

// ---- Deep-link back into the gallery (#<slug>-painting-card), so leaving a
// painting page returns you to that painting instead of the top. Images stream
// in and shift the page under us, so re-anchor for a moment after load, and let
// go the instant the visitor takes over.
// While this is true the page is being positioned by us, not by the visitor, so
// the header must not read those jumps as scrolling and slide itself away.
let anchoring = false;

(function anchorToPainting() {
  if (!location.hash) return;
  anchoring = true;
  const release = () => { anchoring = false; };
  ["wheel", "touchstart", "keydown"].forEach((evt) =>
    window.addEventListener(evt, release, { once: true, passive: true }));

  const anchor = () => {
    if (!anchoring) return;
    const el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (el) el.scrollIntoView({ block: "start", behavior: "instant" });
  };
  anchor();
  window.addEventListener("load", () => {
    [0, 150, 400, 900].forEach((t) => setTimeout(anchor, t));
    setTimeout(release, 1000);
  });
})();

// ---- Theme (system preference, overridable and persisted).
function applyTheme() {
  const saved = localStorage.getItem("theme");
  const dark = saved ? saved === "night"
    : window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.body.classList.toggle("night-mode", dark);
}
document.addEventListener("DOMContentLoaded", () => {
  applyTheme();
  const btn = document.querySelector(".theme-toggle");
  if (btn) btn.addEventListener("click", () => {
    document.body.classList.toggle("night-mode");
    localStorage.setItem("theme",
      document.body.classList.contains("night-mode") ? "night" : "light");
  });

  // ---- Zoom on the detail image.
  const zoomImage = document.querySelector("img.zoom");
  if (zoomImage && typeof wheelzoom === "function") wheelzoom(zoomImage);

  // ---- Download tracking.
  const dl = document.querySelector(".painting-download");
  if (dl) dl.addEventListener("click", () => {
    if (typeof umami !== "undefined") umami.track("painting_download", { painting: dl.dataset.painting });
  });
});

// ---- Menu toggles (referenced by inline onclick in the header).
function showMenu(x) {
  x.classList.toggle("in-view");
  document.querySelector("#menu").classList.toggle("in-view");
  const langs = document.querySelector(".languages");
  if (langs) langs.classList.remove("lang-in-view");
}
function showLanguages() {
  const langs = document.querySelector(".languages");
  if (langs) langs.classList.toggle("lang-in-view");
}
window.showMenu = showMenu;
window.showLanguages = showLanguages;

// ---- Header hide-on-scroll-down + close menu when clicking outside.
window.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("#header");
  // Start from wherever the page actually is: landing on #slug-painting-card
  // means we open partway down, and comparing that against 0 would read as a
  // scroll and hide the header the moment you arrive.
  let last = window.pageYOffset;
  window.addEventListener("scroll", () => {
    const y = window.pageYOffset;
    if (anchoring) { last = y; return; }
    if (last < y && y > 112) {
      navbar.classList.add("scrollUp");
      document.querySelector("#menu").classList.remove("in-view");
      document.querySelector(".nav-toggle").classList.remove("in-view");
      const langs = document.querySelector(".languages");
      if (langs) langs.classList.remove("lang-in-view");
    } else if (y === 0 || last > y) {
      navbar.classList.remove("scrollUp");
    }
    last = y;
  });

  document.addEventListener("click", (e) => {
    const menu = document.querySelector("#menu");
    const burger = document.querySelector(".nav-toggle");
    if (!menu.contains(e.target) && !burger.contains(e.target)) {
      menu.classList.remove("in-view");
      burger.classList.remove("in-view");
      const langs = document.querySelector(".languages");
      if (langs) langs.classList.remove("lang-in-view");
    }
  });
});

function backTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  const h = document.querySelector("#header");
  if (h) h.classList.remove("scrollUp");
}
window.backTop = backTop;

// ---- Carousel helpers (top thumbnail strip on the home page).
function scrollSmoothTo(elementId) {
  const el = document.getElementById(elementId);
  if (el) el.scrollIntoView({ block: "start", behavior: "smooth" });
}
function trackCarouselClick(id) {
  if (typeof umami !== "undefined") umami.track("carousel_click", { painting: id });
}
window.scrollSmoothTo = scrollSmoothTo;
window.trackCarouselClick = trackCarouselClick;
