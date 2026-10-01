// The real collection, as the built site ships it: every painting hangs once,
// nothing overlaps, everything fits its wall and its room. Needs a build first
// (deploy.sh runs it after Hugo); GALLERY_PAGE overrides the page path.

import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { layoutGallery } from "./layout.js";
import { gapBetween } from "./hanging.js";
import { LABEL_TAIL, MIN_BOTTOM_EDGE } from "../constants.js";

const page = process.env.GALLERY_PAGE ?? new URL("../../../../docs/gallery/index.html", import.meta.url).pathname;
if (!existsSync(page)) throw new Error(`No built gallery page at ${page}: build the site first`);
const html = readFileSync(page, "utf8");
// The minified build drops attribute quotes, so accept either form.
const json = html.match(/<script[^>]*\bid="?gallery-data"?[^>]*>([\s\S]*?)<\/script>/);
if (!json) throw new Error(`${page} has no gallery data`);
const data = JSON.parse(json[1]);
const { building, artworks } = layoutGallery(data);
const EPSILON = 1e-6;

const along = (artwork, wall) =>
  (artwork.centre.x - wall.start.x) * wall.direction.x + (artwork.centre.z - wall.start.z) * wall.direction.z;

test("every painting hangs exactly once", () => {
  const slugs = artworks.map((artwork) => artwork.slug).sort();
  assert.deepEqual(slugs, data.paintings.map((painting) => painting.slug).sort());
});

test("works and labels stay on their wall and keep their air", () => {
  for (const room of building.rooms) {
    for (const wall of room.segments) {
      const onWall = artworks
        .filter((artwork) => artwork.wallId === wall.id)
        .map((artwork) => ({ artwork, centre: along(artwork, wall), width: artwork.width }))
        .sort((left, right) => left.centre - right.centre);
      onWall.forEach((item, index) => {
        assert.ok(item.centre - item.width / 2 >= -EPSILON, `${item.artwork.slug} starts before ${wall.id}`);
        assert.ok(item.centre + item.width / 2 + LABEL_TAIL <= wall.length + EPSILON,
          `${item.artwork.slug} label runs past ${wall.id}`);
        const next = onWall[index + 1];
        if (!next || (next.artwork.setId && next.artwork.setId === item.artwork.setId)) return;
        const air = next.centre - next.width / 2 - (item.centre + item.width / 2);
        assert.ok(air >= gapBetween(item.width, next.width) - EPSILON, `${item.artwork.slug} crowds ${next.artwork.slug}`);
      });
    }
  }
});

test("every work clears the floor and the ceiling", () => {
  for (const artwork of artworks) {
    const room = building.rooms.find((candidate) => candidate.id === artwork.roomId);
    assert.ok(artwork.centre.y - artwork.frame.outerHeight / 2 >= MIN_BOTTOM_EDGE - EPSILON, `${artwork.slug} too low`);
    assert.ok(artwork.centre.y + artwork.frame.outerHeight / 2 <= room.ceiling - 0.5, `${artwork.slug} too high`);
  }
});

test("the last room's tallest work anchors its end wall, alone", () => {
  const last = building.rooms[building.rooms.length - 1];
  const onAnchorWall = artworks.filter((artwork) => artwork.wallId === last.anchorSegmentId);
  assert.equal(onAnchorWall.length, 1);
  const tallest = Math.max(...artworks.filter((artwork) => artwork.roomId === last.id).map((artwork) => artwork.frame.outerHeight));
  assert.equal(onAnchorWall[0].frame.outerHeight, tallest);
});

test("small works of one size and year hang together as a set", () => {
  const hens = artworks.filter((artwork) => artwork.slug.endsWith("-hen-2023"));
  assert.equal(hens.length, 3);
  assert.equal(new Set(hens.map((hen) => hen.setId)).size, 1);
  assert.equal(new Set(hens.map((hen) => hen.wallId)).size, 1);
});

test("a diptych hangs as its canvases side by side, each framed", () => {
  const diptych = artworks.find((artwork) => artwork.painting.panels === 2);
  assert.ok(diptych, "the data has a diptych");
  assert.equal(diptych.panels.length, 2);
  const [left, right] = diptych.panels;
  assert.ok(right.offset - left.offset > diptych.frame.outerWidth, "the frames do not overlap");
  assert.ok(Math.abs(diptych.width - (right.offset + diptych.frame.outerWidth / 2 - (left.offset - diptych.frame.outerWidth / 2))) < 1e-9);
});
