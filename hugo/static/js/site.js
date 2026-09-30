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
}
window.addEventListener("load", () => {
  setTimeout(revealBody, Math.max(0, MIN_LOADER_MS - (performance.now() - bootedAt)));
});
// Fail-safe: if load never fires (cache quirks), reveal anyway.
setTimeout(revealBody, 2500);

// ---- Deep-link back into the gallery (#<slug>), so leaving a
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
  ["wheel", "touchstart", "keydown"].forEach((eventName) =>
    window.addEventListener(eventName, release, { once: true, passive: true }));

  const anchor = () => {
    if (!anchoring) return;
    const painting = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (painting) painting.scrollIntoView({ block: "start", behavior: "instant" });
  };
  anchor();
  window.addEventListener("load", () => {
    [0, 150, 400, 900].forEach((t) => setTimeout(anchor, t));
    setTimeout(release, 1000);
  });
})();

// ---- Menu toggles (referenced by inline onclick in the header).
function showMenu(toggle) {
  toggle.classList.toggle("in-view");
  document.querySelector("#menu").classList.toggle("in-view");
  document.querySelector(".languages").classList.remove("lang-in-view");
}
function showLanguages() {
  document.querySelector(".languages").classList.toggle("lang-in-view");
}
function closeMenu() {
  document.querySelectorAll(".nav-toggle, #menu").forEach((element) => element.classList.remove("in-view"));
  document.querySelector(".languages").classList.remove("lang-in-view");
}

document.addEventListener("DOMContentLoaded", () => {
  // ---- Zoom on the detail image.
  const zoomImage = document.querySelector("img.zoom");
  if (zoomImage && typeof wheelzoom === "function") wheelzoom(zoomImage);

  // ---- Download tracking.
  const paintingDownload = document.querySelector(".painting-download");
  if (paintingDownload) paintingDownload.addEventListener("click", () => {
    if (typeof umami !== "undefined") umami.track("painting_download", { painting: paintingDownload.dataset.painting });
  });

  // ---- "Download all" asks first: it is one large zip.
  const downloadDialog = document.getElementById("download-all-dialog");
  document.querySelector("[data-download-all]").addEventListener("click", (event) => {
    if (!downloadDialog.showModal) return; // no <dialog> support: the link downloads directly
    event.preventDefault();
    closeMenu();
    downloadDialog.showModal();
  });
  downloadDialog.addEventListener("click", (event) => {
    if (event.target === downloadDialog) downloadDialog.close(); // a tap on the backdrop
  });
  downloadDialog.querySelector(".download-dialog-confirm").addEventListener("click", () => {
    downloadDialog.close();
    if (typeof umami !== "undefined") umami.track("download_all");
  });

  // ---- Header hides while scrolling down; the menu closes on scroll or a click outside it.
  const header = document.querySelector("#header");
  // Start from wherever the page actually is: landing on a #slug anchor
  // means we open partway down, and comparing that against 0 would read as a
  // scroll and hide the header the moment you arrive.
  let lastScrollY = window.pageYOffset;
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    if (anchoring) { lastScrollY = scrollY; return; }
    if (lastScrollY < scrollY && scrollY > 112) {
      header.classList.add("scrollUp");
      closeMenu();
    } else if (scrollY === 0 || lastScrollY > scrollY) {
      header.classList.remove("scrollUp");
    }
    lastScrollY = scrollY;
  });

  document.addEventListener("click", (event) => {
    const menu = document.querySelector("#menu");
    const toggle = document.querySelector(".nav-toggle");
    if (!menu.contains(event.target) && !toggle.contains(event.target)) closeMenu();
  });
});

function backTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.querySelector("#header").classList.remove("scrollUp");
}

// ---- Carousel helpers (top thumbnail strip on the home page).
function scrollSmoothTo(elementId) {
  const element = document.getElementById(elementId);
  if (element) element.scrollIntoView({ block: "start", behavior: "smooth" });
}
function trackCarouselClick(slug) {
  if (typeof umami !== "undefined") umami.track("carousel_click", { painting: slug });
}
