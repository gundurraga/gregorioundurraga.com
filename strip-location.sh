#!/usr/bin/env bash
# Remove location metadata from every source image before it is published.
# Phone photos embed GPS coordinates, and the full-resolution downloads are
# public, so an unstripped photo publishes where it was taken (usually home).
#
# Any image carrying a GPS position loses all its metadata except the colour
# profile (paintings must keep their colours) and orientation. The edit is
# lossless: exiftool rewrites metadata, never the pixels. Called by deploy.sh
# and build-paintings-zip.sh, so a new photo can never ship with a location.
set -euo pipefail
cd "$(dirname "$0")"

command -v exiftool >/dev/null || { echo "ERROR: exiftool not found (brew install exiftool)." >&2; exit 1; }

echo "==> Stripping location metadata from images/ and icons/ ..."
exiftool -q -q -r -overwrite_original -if '$GPSLatitude or $GPSLongitude or $GPSPosition' \
  -all= -tagsfromfile @ -icc_profile -orientation \
  -ext jpg -ext jpeg -ext png -ext webp -ext heic -ext tif -ext tiff images icons || true

LEFT=$(exiftool -q -q -r -if '$GPSLatitude or $GPSLongitude or $GPSPosition' -p '$Directory/$FileName' \
  -ext jpg -ext jpeg -ext png -ext webp -ext heic -ext tif -ext tiff images icons || true)
if [ -n "$LEFT" ]; then
  echo "ERROR: these images still carry a location, refusing to publish:" >&2
  echo "$LEFT" >&2
  exit 1
fi
echo "    no image carries a location."
