# Publication Blog - Project Context

## Overview

A blog powered by **Outstatic CMS** with flexible deployment options.

## Tech Stack

| Component | Technology |
|-----------|------------|
| **Framework** | Next.js 15 (App Router) |
| **CMS** | Outstatic (headless, Git-based) |
| **Styling** | Tailwind CSS |
| **Deployment** | Vercel (full) or GitHub Pages (static) |

## Deployment Options

| Platform | CMS Dashboard | API Routes | Static Content |
|----------|---------------|------------|----------------|
| **Vercel** | ✅ | ✅ | ✅ |
| **GitHub Pages** | ❌ | ❌ | ✅ |

### Vercel (Recommended)
- Full Outstatic CMS dashboard at `/outstatic`
- OAuth authentication works
- Dynamic and static content

### GitHub Pages
- Static blog content only
- Uses `STATIC_EXPORT=true` env var
- Auto-deploys via GitHub Actions

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Local development |
| `npm run build` | Vercel build (dynamic) |
| `STATIC_EXPORT=true npm run build` | GitHub Pages build (static) |

## Content Directory

```
outstatic/content/
├── posts/           # Blog posts (Collection)
└── _singletons/     # Single pages (Homepage, About, etc.)
```

## Environment Variables

Required for Vercel deployment:

| Variable | Description |
|----------|-------------|
| `OST_GITHUB_ID` | GitHub OAuth App Client ID |
| `OST_GITHUB_SECRET` | GitHub OAuth App Client Secret |
| `OST_REPO_SLUG` | `publication-blog` |
| `OST_REPO_OWNER` | `doctor500` |

---

*Last Updated: 2026-02-07*
