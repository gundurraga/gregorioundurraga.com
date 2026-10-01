# gregorioundurraga.com

The personal gallery of painter Gregorio Undurraga. 88 oil paintings, all released to the public domain (CC0), free for anyone to download and use.

Live at [gregorioundurraga.com](https://gregorioundurraga.com).

## The paintings are yours

Every painting here is in the public domain by the artist's choice. You may copy, modify, distribute and use the works, even commercially, without asking permission. Download any one at full resolution from its page, or grab [the whole collection as a zip](https://github.com/gundurraga/gregorioundurraga.com/releases/latest/download/gregorio-undurraga-collected-works.zip).

## The 3D gallery

[gregorioundurraga.com/gallery](https://gregorioundurraga.com/gallery/) is a walkable museum of the whole collection: a glazed lobby between two walled Japanese gardens, then one room per country where the paintings were made, each work hung at its true size in its own frame, with a wall label beside it. Tap or click the floor to walk, tap a painting to stand in front of it, drag to look around, pinch or scroll to zoom. It runs in the browser on phones and desktops, and `/gallery/#<painting-slug>` opens straight in front of a painting.

## The site

A static site built with [Hugo](https://gohugo.io), available in eight languages: English, Spanish, French, German, Russian, Japanese, Korean and Traditional Chinese. English lives at the root, the other languages under their own path (`/es/`, `/ja/`, and so on).

- Source of truth: every painting is one entry in `hugo/data/paintings.yaml`, and a content adapter turns it into a page in each language.
- No build service: the site is built locally and the output committed to `docs/`, which GitHub Pages serves. Run `./deploy.sh` to rebuild and publish.
- Self-contained: fonts, icons and the 3D engine ([three.js](https://threejs.org), MIT) are self-hosted, with no external CDNs.
- The gallery's building, hanging and frames are computed from the painting data at load time, so a new painting finds its wall on its own. The build fails on data the gallery cannot show truthfully, such as dimensions that disagree with the image.
- `./deploy.sh` runs the gallery tests (`node --test "hugo/assets/gallery/plan/*.test.js"`) against the fresh build before publishing.

## Repository layout

- `hugo/`: the Hugo project (data, layouts, content adapter, i18n, assets)
- `hugo/assets/gallery/`: the 3D gallery (floor plan and hanging logic, scene, controls)
- `images/gundurraga/`: the paintings at every resolution, plus the full-resolution originals
- `docs/`: the built site GitHub Pages serves (generated, not edited by hand)
- `deploy.sh`: build and publish
- `build-paintings-zip.sh`: package the full-resolution collection as a Release asset, and record its painting count and size for the "Download all" dialog. Run it whenever the paintings change; the build fails while the zip holds a different number of paintings than the site.

## License

The paintings are public domain (CC0). The site's code is released under the MIT License (see `LICENSE`).
