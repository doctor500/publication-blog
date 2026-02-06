# Publication Blog

A static blog powered by [Outstatic CMS](https://outstatic.com), deployed to GitHub Pages via GitHub Actions.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Access at http://localhost:3000

# Access CMS dashboard (local)
# http://localhost:3000/outstatic
```

## 📖 Documentation

**Start Here:** `.context/PROJECT_CONTEXT.md`

| File | Purpose |
|------|---------|
| `.context/PROJECT_CONTEXT.md` | Project overview & architecture |
| `.context/GOVERNANCE.md` | AI agent interaction rules |
| `.context/PROCEDURES.md` | Step-by-step procedures |

## 🏗️ Architecture

| Component | Platform |
|-----------|----------|
| CMS Dashboard | Vercel/Netlify (OAuth required) |
| Blog Frontend | GitHub Pages (static) |
| CI/CD | GitHub Actions |

## 🎯 Key Info

- **Framework:** Next.js 15 (App Router)
- **CMS:** Outstatic (Git-based, no database)
- **Content:** Stored as Markdown in `outstatic/content/`

## 📝 Content Workflow

1. Editor logs into CMS dashboard (Vercel deployment)
2. Creates/edits content → auto-commits to repo
3. GitHub Actions builds → deploys to GitHub Pages

---

## 📂 Structure

```
publication-blog/
├── .context/              # AI agent documentation
├── .github/workflows/     # GitHub Actions
├── src/app/               # Next.js pages
├── outstatic/content/     # Markdown content
└── public/                # Static assets
```

---

*Built with [Outstatic](https://outstatic.com) + [Next.js](https://nextjs.org)*
