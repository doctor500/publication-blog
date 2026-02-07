/**
 * Next.js Configuration
 * 
 * This config supports dual deployment:
 * - Vercel: Full dynamic features (API routes, CMS dashboard)
 * - GitHub Pages: Static export only (blog content)
 * 
 * @see https://nextjs.org/docs/app/api-reference/next-config-js
 */
import type { NextConfig } from "next";

/**
 * Environment-based static export toggle
 * Set STATIC_EXPORT=true for GitHub Pages builds
 */
const isStaticExport = process.env.STATIC_EXPORT === 'true';

const nextConfig: NextConfig = {
  /**
   * Static Export Settings (GitHub Pages)
   * - output: 'export' generates static HTML files
   * - trailingSlash: Required for GitHub Pages URL compatibility
   */
  ...(isStaticExport && {
    output: 'export',
    trailingSlash: true,
  }),

  /**
   * Base Path Configuration
   * GitHub Pages serves from /publication-blog subpath
   * Vercel serves from root (/)
   */
  basePath: isStaticExport ? (process.env.NEXT_PUBLIC_BASE_PATH || '') : '',

  /**
   * Image Optimization
   * - Static: Disabled (no server-side processing)
   * - Vercel: Uses Vercel's Image Optimization API
   */
  images: {
    unoptimized: isStaticExport,
  },
};

export default nextConfig;
