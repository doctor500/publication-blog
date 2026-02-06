import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === 'true';

const nextConfig: NextConfig = {
  // For GitHub Pages: enable static export
  // For Vercel: disable static export to support API routes and CMS dashboard
  ...(isStaticExport && {
    output: 'export',
    trailingSlash: true,
  }),

  // Base path for GitHub Pages (only when static exporting)
  basePath: isStaticExport ? (process.env.NEXT_PUBLIC_BASE_PATH || '') : '',

  // Disable image optimization for static export, use Vercel's for dynamic
  images: {
    unoptimized: isStaticExport,
  },
};

export default nextConfig;
