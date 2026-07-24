#!/usr/bin/env bash
# Deploy the site to one of its two targets.
#
#   ./deploy.sh demo   -> demo.adsmerce.com  (staging branch, noindex)
#   ./deploy.sh live   -> adsmerce.com       (main branch, public)
#
# Staging carries work in progress (blog, newsletter); main carries only
# what is meant to be public. Preview on demo first, then ship to live.
set -euo pipefail

case "${1:-}" in
  demo)
    git push demo staging:main
    echo "-> https://demo.adsmerce.com/ (build takes about a minute)"
    ;;
  live)
    git push origin main
    echo "-> https://adsmerce.com/ (build takes about a minute)"
    ;;
  *)
    echo "usage: ./deploy.sh demo|live" >&2
    exit 1
    ;;
esac
