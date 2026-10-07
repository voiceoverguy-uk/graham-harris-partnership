#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")/.."

# Use the merged lockfile without rewriting dependency versions.
npm ci --no-audit --no-fund
npm run build
