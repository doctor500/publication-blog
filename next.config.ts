/**
 * Next.js Config - Dual Deployment Support
 * - Vercel: Dynamic (API routes, CMS) 
 * - GitHub Pages: Static export (blog only)
 */
import type { NextConfig } from "next";

// Set STATIC_EXPORT=true for GitHub Pages builds
const isStaticExport = process.env.STATIC_EXPORT === 'true';

// Custom domain uses root path; GitHub Pages uses /repo-name subpath
const hasCustomDomain = !process.env.NEXT_PUBLIC_BASE_PATH;

const nextConfig: NextConfig = {
  // Static export mode for GitHub Pages
  ...(isStaticExport && {
    output: 'export',
    trailingSlash: true,
  }),

  // Only set basePath when using GitHub Pages without custom domain
  basePath: (isStaticExport && !hasCustomDomain)
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : '',

  // Disable image optimization for static builds
  images: {
    unoptimized: isStaticExport,
  },
};

export default nextConfig;
