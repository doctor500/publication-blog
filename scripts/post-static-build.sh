#!/bin/bash
# Post-build script for GitHub Pages static export
# This script restores CMS-only routes after static build completes

set -e

echo "📦 Restoring CMS routes after static build..."

# Restore CMS routes
if [ -d "src/app/.outstatic.bak" ]; then
  echo "📁 Restoring CMS routes..."
  mv src/app/.outstatic.bak src/app/outstatic
fi

if [ -d "src/app/.api.bak" ]; then
  echo "📁 Restoring API routes..."
  mv src/app/.api.bak src/app/api
fi

echo "✅ CMS routes restored."
