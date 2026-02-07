# Publication Blog - Project Context

## Overview

A blog powered by **Outstatic CMS** with dual deployment architecture.

## Architecture

| Platform | Purpose | URL |
|----------|---------|-----|
| **GitHub Pages** | Static Blog | https://publication.layardi.com/ |
| **Netlify** | CMS Admin | https://cms.publication.layardi.com/outstatic/ |

## Tech Stack

| Component | Technology |
|-----------|------------|
| Framework | Next.js 16 (App Router) |
| CMS | Outstatic v2.0 (headless, Git-based) |
| Styling | Tailwind CSS v4 |

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Local development (localhost:3000) |
| `npm run build` | Default build (used by Netlify) |
| `STATIC_EXPORT=true npm run build` | GitHub Pages build |

## Content Directory

```
outstatic/content/
├── posts/           # Blog posts
└── _singletons/     # Single pages
```

## Environment Variables (Netlify)

| Variable | Description |
|----------|-------------|
| `OST_GITHUB_ID` | GitHub OAuth App Client ID |
| `OST_GITHUB_SECRET` | GitHub OAuth App Secret |
| `OST_REPO_SLUG` | `publication-blog` |
| `OST_REPO_OWNER` | `doctor500` |

## Content Workflow

1. Editor logs in at CMS → creates/edits post
2. CMS commits to GitHub repo
3. GitHub Actions builds static export
4. GitHub Pages deploys updated blog

---

*Last Updated: 2026-02-08*
