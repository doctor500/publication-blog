import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',

  // Base path for GitHub Pages (repo name as subdirectory)
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',

  // GitHub Pages serves from subdirectory, so we need trailing slashes
  trailingSlash: true,

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
