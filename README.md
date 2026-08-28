# gregorioundurraga.com

The personal gallery of painter Gregorio Undurraga. 88 oil paintings, all released to the public domain (CC0), free for anyone to download and use.

Live at [gregorioundurraga.com](https://gregorioundurraga.com).

## The paintings are yours

Every painting here is in the public domain by the artist's choice. You may copy, modify, distribute and use the works, even commercially, without asking permission. Download any one at full resolution from its page, or grab [the whole collection as a zip](https://github.com/gundurraga/gregorioundurraga.com/releases/latest/download/all-paintings.zip).

## The site

A static site built with [Hugo](https://gohugo.io), available in eight languages: English, Spanish, French, German, Russian, Japanese, Korean and Traditional Chinese. English lives at the root, the other languages under their own path (`/es/`, `/ja/`, and so on).

- Source of truth: every painting is one entry in `hugo/data/paintings.yaml`, and a content adapter turns it into a page in each language.
- No build service: the site is built locally and the output committed to `docs/`, which GitHub Pages serves. Run `./deploy.sh` to rebuild and publish.
- Self-contained: fonts and icons are self-hosted, with no external CDNs.

## Repository layout

- `hugo/`: the Hugo project (data, layouts, content adapter, i18n, assets)
- `images/gundurraga/`: the paintings at every resolution, plus the full-resolution originals
- `docs/`: the built site GitHub Pages serves (generated, not edited by hand)
- `deploy.sh`: build and publish
- `build-paintings-zip.sh`: package the full-resolution collection as a Release asset

## License

The paintings are public domain (CC0). The site's code is released under the MIT License (see `LICENSE`).
