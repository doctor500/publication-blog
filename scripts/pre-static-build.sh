#!/bin/bash
# Pre-build script for GitHub Pages static export
# This script temporarily removes CMS-only routes that cannot be statically generated

set -e

echo "📦 Preparing for static export..."

# Backup CMS routes
if [ -d "src/app/outstatic" ]; then
  echo "📁 Backing up CMS routes..."
  mv src/app/outstatic src/app/.outstatic.bak
fi

if [ -d "src/app/api" ]; then
  echo "📁 Backing up API routes..."
  mv src/app/api src/app/.api.bak
fi

echo "✅ CMS routes backed up. Ready for static build."
