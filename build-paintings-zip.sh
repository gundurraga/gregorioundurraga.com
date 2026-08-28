#!/usr/bin/env bash
# Build a full-resolution zip of every painting and publish it as a GitHub
# Release asset. The site's "Download all" menu link points at the stable URL
#   https://github.com/gundurraga/gregorioundurraga.com/releases/latest/download/all-paintings.zip
# Run this whenever the paintings change (or from deploy.sh). Needs `gh` auth.
#
# The zip is built in a temp dir, never committed (it is far over GitHub's 100MB
# per-file limit; Release assets allow up to 2GB, which is why we use a Release).
set -euo pipefail
cd "$(dirname "$0")"

TAG="paintings"
ASSET="all-paintings.zip"
SRC="images/gundurraga/download"
TMP="$(mktemp -d)"
ZIP="$TMP/$ASSET"

echo "==> Zipping $SRC ..."
# -j flattens (just the .jpg files, no directory nesting); -X drops extra metadata.
( cd "$SRC" && zip -q -j -X "$ZIP" ./*.jpg )
COUNT=$(unzip -l "$ZIP" | tail -1 | awk '{print $2}')
SIZE=$(du -h "$ZIP" | cut -f1)
echo "    $ASSET: $COUNT files, $SIZE"

echo "==> Publishing GitHub Release asset ($TAG) ..."
if gh release view "$TAG" >/dev/null 2>&1; then
  gh release upload "$TAG" "$ZIP" --clobber
else
  gh release create "$TAG" "$ZIP" \
    --title "All paintings, full resolution" \
    --notes "Every oil painting by Gregorio Undurraga at full resolution. Public domain (CC0), free to use and download. Rebuilt whenever the collection changes."
fi

rm -rf "$TMP"
echo "==> Done: https://github.com/gundurraga/gregorioundurraga.com/releases/latest/download/$ASSET"
