#!/usr/bin/env bash
#
# Deploy gregorioundurraga.com.
#
# Builds the Hugo site into ./docs and commits+pushes it. GitHub Pages serves
# the site from this same branch at the /docs folder (main:/docs), so there is
# no gh-pages branch and no CI/CD, just this one command.
#
# One-time setup (only needed once, after the first successful push):
#   GitHub -> Settings -> Pages -> Build and deployment -> Source: "Deploy from
#   a branch" -> Branch: main, folder: /docs. Or via CLI:
#     gh api -X PUT repos/gundurraga/gregorioundurraga.com/pages \
#       -f 'source[branch]=main' -f 'source[path]=/docs'
#
# Usage: ./deploy.sh
#
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$REPO_ROOT"

command -v hugo >/dev/null || { echo "ERROR: hugo not found in PATH." >&2; exit 1; }

./strip-location.sh

echo "==> Building site (production, minified) into ./docs ..."
# Wipe docs so deleted pages/images don't linger. The custom-domain CNAME is
# sourced from hugo/static/CNAME, so Hugo re-emits docs/CNAME every build.
rm -rf docs
hugo --source hugo --destination "$REPO_ROOT/docs" --minify --gc --environment production

test -f docs/CNAME || { echo "ERROR: docs/CNAME missing, refusing to deploy (custom domain would break)." >&2; exit 1; }

echo "==> Testing the 3D gallery against the built site ..."
command -v node >/dev/null || { echo "ERROR: node not found in PATH (needed for the gallery tests)." >&2; exit 1; }
node --test "hugo/assets/gallery/plan/*.test.js"

GALLERY_BUNDLE=$(ls docs/js/gallery.*.js)
BUNDLE_KB=$(( $(gzip -c "$GALLERY_BUNDLE" | wc -c) / 1024 ))
test "$BUNDLE_KB" -le 250 || { echo "ERROR: gallery bundle is ${BUNDLE_KB} KB gzipped, over the 250 KB budget." >&2; exit 1; }
# The gallery fetches only from this site: no CDN, decoder or font host may slip
# in. The two allowed hosts are plain strings inside three.js, never requested.
FOREIGN_HOSTS=$(grep -oE 'https?://[a-zA-Z0-9.-]+' "$GALLERY_BUNDLE" | grep -vE '^https?://(www\.w3\.org|jcgt\.org)$' || true)
test -z "$FOREIGN_HOSTS" || { echo "ERROR: gallery bundle references outside hosts: ${FOREIGN_HOSTS}" >&2; exit 1; }
# Every language has an i18n file; English lives at the site root.
LANGUAGE_COUNT=0
for I18N_FILE in hugo/i18n/*.yaml; do
  LANGUAGE=$(basename "$I18N_FILE" .yaml)
  LANGUAGE_DIR=$([ "$LANGUAGE" = en ] && echo "" || echo "$LANGUAGE/")
  test -f "docs/${LANGUAGE_DIR}gallery/index.html" || { echo "ERROR: docs/${LANGUAGE_DIR}gallery/index.html missing." >&2; exit 1; }
  LANGUAGE_COUNT=$((LANGUAGE_COUNT + 1))
done
echo "==> Gallery bundle ${BUNDLE_KB} KB gzipped, no outside hosts, ${LANGUAGE_COUNT} languages."

FILES=$(find docs -type f | wc -l | tr -d ' ')
SIZE=$(du -sh docs | cut -f1)
echo "==> Built ${FILES} files (${SIZE})."

echo "==> Staging docs/ ..."
git add docs
if git diff --cached --quiet -- docs; then
  echo "==> No changes in docs/, nothing to deploy."
  exit 0
fi

# Commit ONLY docs/ so a deploy never sweeps up unrelated staged work.
git commit -m "deploy: rebuild site $(date +%Y-%m-%d)" -- docs
echo "==> Pushing to origin ..."
git push
echo "==> Done. Live at https://gregorioundurraga.com"
