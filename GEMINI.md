# Publication Blog

> AI agents: Read `.context/PROJECT_CONTEXT.md` for full context.

## Quick Reference

**Stack:** Next.js 15 + Outstatic CMS + Tailwind  
**Deploy:** Vercel (full CMS) or GitHub Pages (static only)

## Commands

```bash
npm install                    # Install
npm run dev                    # Dev server (localhost:3000)
npm run build                  # Vercel build (dynamic)
STATIC_EXPORT=true npm run build  # GitHub Pages build (static)
```

## Key Paths

- `.context/` - Project documentation & governance
- `outstatic/content/` - Markdown content (CMS-managed)
- `.github/workflows/` - GitHub Actions for Pages deploy
- `vercel.json` - Vercel deployment configuration

## Deployment

| Platform | CMS Dashboard | Command |
|----------|---------------|---------|
| Vercel | ✅ Yes | `vercel deploy` |
| GitHub Pages | ❌ No | Push to main (auto) |
