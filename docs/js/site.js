"use strict";

// ---- Reveal (CSS hides <body> until the loader clears; never leave it hidden).
function revealBody() {
  const loader = document.querySelector(".loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => { loader.style.display = "none"; }, 450);
  }
  document.body.style.visibility = "visible";
  applyTheme();
}
window.addEventListener("load", () => setTimeout(revealBody, 300));
// Fail-safe: if load never fires (cache quirks), reveal anyway.
setTimeout(revealBody, 2500);

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
  let last = 0;
  window.addEventListener("scroll", () => {
    const y = window.pageYOffset;
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
