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

echo "==> Building site (production, minified) into ./docs ..."
# Wipe docs so deleted pages/images don't linger. The custom-domain CNAME is
# sourced from hugo/static/CNAME, so Hugo re-emits docs/CNAME every build.
rm -rf docs
hugo --source hugo --destination "$REPO_ROOT/docs" --minify --gc --environment production

test -f docs/CNAME || { echo "ERROR: docs/CNAME missing, refusing to deploy (custom domain would break)." >&2; exit 1; }

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
