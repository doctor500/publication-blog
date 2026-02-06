# Publication Blog

A blog powered by [Outstatic CMS](https://outstatic.com) with flexible deployment options.

## 🚀 Quick Start

```bash
npm install      # Install dependencies
npm run dev      # Start dev server (localhost:3000)
```

## 📖 Documentation

See `.context/PROJECT_CONTEXT.md` for full details.

## 🏗️ Deployment Options

| Platform | CMS Dashboard | How to Deploy |
|----------|---------------|---------------|
| **Vercel** | ✅ Full support | Connect repo in Vercel dashboard |
| **GitHub Pages** | ❌ Static only | Auto-deploy via GitHub Actions |

### Vercel (Recommended)

1. Import repo in [Vercel](https://vercel.com/new)
2. Add environment variables:
   - `OST_GITHUB_ID` - GitHub OAuth Client ID
   - `OST_GITHUB_SECRET` - GitHub OAuth Client Secret
   - `OST_REPO_SLUG` - `publication-blog`
   - `OST_REPO_OWNER` - `doctor500`
3. Deploy!

### GitHub Pages

Push to `main` → GitHub Actions auto-deploys static site.

> Note: CMS dashboard requires Vercel deployment.

---

*Built with [Outstatic](https://outstatic.com) + [Next.js](https://nextjs.org)*
