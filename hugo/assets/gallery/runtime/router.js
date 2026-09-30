// A painting has an address: /gallery/#<slug> starts in front of it, looking
// closely (the painting pages link here). Looking closely adds one history
// entry, so Back steps away from the painting; walking never touches history.

export function createRouter({ artworks, navigation }) {
  const bySlug = new Map(artworks.map((artwork) => [artwork.slug, artwork]));
  const languageLinks = [...document.querySelectorAll("#header .languages a")];
  languageLinks.forEach((link) => { link.dataset.base = link.getAttribute("href"); });

  function currentSlug() {
    try {
      return decodeURIComponent(location.hash.slice(1));
    } catch {
      return "";
    }
  }

  // Switching language keeps the visitor in front of the same painting.
  function syncLanguageLinks() {
    languageLinks.forEach((link) => { link.href = link.dataset.base + location.hash; });
  }

  function clearHash() {
    history.replaceState(null, "", location.pathname + location.search);
    syncLanguageLinks();
  }

  function arrive() {
    const artwork = bySlug.get(currentSlug());
    if (artwork) navigation.focus(artwork, { instant: true });
    else if (location.hash) clearHash();
    syncLanguageLinks();
  }

  window.addEventListener("popstate", () => {
    const artwork = bySlug.get(currentSlug());
    if (artwork) navigation.focus(artwork);
    else navigation.unfocus();
    syncLanguageLinks();
  });

  // Called by navigation whenever the close view opens or closes.
  function focusChanged(artwork) {
    if (artwork && currentSlug() !== artwork.slug) {
      history.pushState({ focus: artwork.slug }, "", `#${artwork.slug}`);
      syncLanguageLinks();
    } else if (!artwork && bySlug.has(currentSlug())) {
      if (history.state?.focus) history.back();
      else clearHash();
    }
  }

  return { arrive, focusChanged };
}
