# Publication Blog

> AI agents: Read `.context/PROJECT_CONTEXT.md` for full context.  
> **Security:** Read `.context/SECURITY.md` before handling credentials.

## Quick Reference

**Stack:** Next.js 16 + Outstatic CMS v2.0 + Tailwind v4

## Live URLs

| Purpose | URL |
|---------|-----|
| **Blog** | https://publication.layardi.com/ |
| **CMS** | https://cms.publication.layardi.com/outstatic/ |

## Commands

```bash
npm install                    # Install
npm run dev                    # Dev server
npm run build                  # Netlify build
STATIC_EXPORT=true npm run build  # GitHub Pages build
```

## Key Paths

- `.context/` - Project documentation & governance
- `outstatic/content/` - Markdown content (CMS-managed)
- `.github/workflows/` - GitHub Actions for Pages deploy

## Deployment

| Platform | Purpose | Auto-Deploy |
|----------|---------|-------------|
| Netlify | CMS Admin | On push/commit |
| GitHub Pages | Static Blog | On push via Actions |
