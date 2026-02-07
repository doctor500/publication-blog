# Procedures

## 1. Local Development

```bash
npm install
npm run dev
# Access at http://localhost:3000
# CMS dashboard: http://localhost:3000/outstatic
```

## 2. Creating GitHub OAuth App

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click **"New OAuth App"**
3. Fill in:
   - **Name:** `Publication Blog CMS`
   - **Homepage URL:** `https://cms.publication.layardi.com`
   - **Callback URL:** `https://cms.publication.layardi.com/api/outstatic/callback`
4. Save **Client ID** and **Client Secret**

## 3. Netlify CMS Deployment

1. Connect repo to Netlify: `doctor500/publication-blog`
2. Add environment variables:
   - `OST_GITHUB_ID` = Client ID
   - `OST_GITHUB_SECRET` = Client Secret
   - `OST_REPO_SLUG` = `publication-blog`
   - `OST_REPO_OWNER` = `doctor500`
3. Deploy → auto-builds Next.js

**CMS URL:** https://cms.publication.layardi.com/outstatic/

## 4. Content Workflow

1. Access CMS at https://cms.publication.layardi.com/outstatic/
2. Login with GitHub
3. Create/edit content → auto-commits to repo
4. GitHub Actions builds and deploys to Pages

## 5. Manual Post Creation

Create file `outstatic/content/posts/your-slug.mdx`:

```md
---
title: "Your Title"
publishedAt: "2026-02-08"
status: published
author:
  name: "Your Name"
---

Content here...
```

Push to repo → auto-deploys.
