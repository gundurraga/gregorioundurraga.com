import { test } from "node:test";
import assert from "node:assert/strict";
import { gapBetween, requiredSpan, justify, hangRoom, arrangeSymmetrically } from "./hanging.js";
import { MIN_GAP, MAX_GAP, MAX_SPREAD, LABEL_OFFSET, LABEL_WIDTH } from "../constants.js";

const LABEL_TAIL = LABEL_OFFSET + LABEL_WIDTH;
const work = (slug, width) => ({ slug, width });

test("gap grows with size and stays within museum bounds", () => {
  assert.equal(gapBetween(0.2, 0.2), MIN_GAP);
  assert.equal(gapBetween(3, 3), MAX_GAP);
  assert.ok(gapBetween(1, 1) > MIN_GAP && gapBetween(1, 1) < MAX_GAP);
});

test("a lone work is centred on its wall", () => {
  assert.deepEqual(justify([work("a", 1)], 6), [3]);
});

test("justified works keep at least their required gap and never exceed the wall", () => {
  const works = [work("a", 0.6), work("b", 1.2), work("c", 0.4)];
  const length = 8;
  const centres = justify(works, length);
  for (let index = 1; index < works.length; index += 1) {
    const air = centres[index] - works[index].width / 2 - (centres[index - 1] + works[index - 1].width / 2);
    assert.ok(air >= gapBetween(works[index - 1].width, works[index].width) - 1e-9);
    assert.ok(air <= MAX_SPREAD + 1e-9);
  }
  assert.ok(centres[0] - works[0].width / 2 >= 0);
  assert.ok(centres[2] + works[2].width / 2 + LABEL_TAIL <= length + 1e-9);
});

test("a short wall still centres its group when the air would be too wide", () => {
  const works = [work("a", 0.5), work("b", 0.5)];
  const centres = justify(works, 30);
  const air = centres[1] - centres[0] - 0.5;
  assert.ok(Math.abs(air - MAX_SPREAD) < 1e-9);
});

test("each wall centres its largest work and steps down in size on both sides", () => {
  const arranged = arrangeSymmetrically([work("a", 1), work("b", 3), work("c", 2), work("d", 0.5), work("e", 1.5)]);
  assert.deepEqual(arranged.map((item) => item.slug), ["d", "e", "b", "c", "a"]);
});

test("every work is hung exactly once, walls following viewing order", () => {
  const works = Array.from({ length: 12 }, (_, index) => work(`w${index}`, 0.5 + (index % 3) * 0.2));
  const segments = [{ id: "s1", length: 7 }, { id: "s2", length: 3.5 }, { id: "s3", length: 8 }];
  const placements = hangRoom(works, segments);
  assert.deepEqual(placements.map((placement) => placement.slug).sort(), works.map((item) => item.slug).sort());
  const wallOf = (slug) => segments.findIndex((segment) => segment.id === placements.find((placement) => placement.slug === slug).segmentId);
  works.slice(1).forEach((item, index) => assert.ok(wallOf(item.slug) >= wallOf(works[index].slug)));
  for (const segment of segments) {
    const onWall = works.filter((item) => placements.find((placement) => placement.slug === item.slug).segmentId === segment.id);
    assert.ok(requiredSpan(onWall) <= segment.length + 1e-9, `${segment.id} overflows`);
  }
});

test("the anchor hangs alone at the centre of its wall", () => {
  const works = [work("a", 0.5), work("anchor", 1), work("b", 0.5)];
  const segments = [{ id: "side", length: 5 }, { id: "end", length: 9 }];
  const placements = hangRoom(works, segments, { slug: "anchor", segmentId: "end" });
  const onEnd = placements.filter((placement) => placement.segmentId === "end");
  assert.deepEqual(onEnd, [{ slug: "anchor", segmentId: "end", along: 4.5 }]);
});

test("a room too small for its works fails loudly", () => {
  assert.throws(() => hangRoom([work("a", 3), work("b", 3)], [{ id: "s", length: 4 }]), /overflow/);
});
