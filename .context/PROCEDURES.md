# Procedures

## 1. Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# Access at http://localhost:3000

# Access Outstatic dashboard (local)
# http://localhost:3000/outstatic
```

## 2. Creating GitHub OAuth App

1. Go to [GitHub Developer Settings → OAuth Apps](https://github.com/settings/developers)
2. Click **"New OAuth App"**
3. Fill in:
   - **Application name:** `publication-blog CMS`
   - **Homepage URL:** `https://your-dashboard.vercel.app`
   - **Authorization callback URL:** `https://your-dashboard.vercel.app/api/outstatic/callback`
4. Click **"Register application"**
5. Generate **Client Secret**
6. Save both **Client ID** and **Client Secret**

## 3. Deploying CMS Dashboard (Vercel)

1. Create a new Vercel project linked to this repo
2. Add environment variables:
   - `OST_GITHUB_ID` = your Client ID
   - `OST_GITHUB_SECRET` = your Client Secret
   - `OST_REPO_SLUG` = `publication-blog`
   - `OST_REPO_OWNER` = `doctor500`
3. Deploy
4. Update OAuth App callback URL with actual Vercel domain

## 4. Content Workflow

1. Access Outstatic dashboard at Vercel URL
2. Login with GitHub
3. Create/edit content
4. Click "Save" → auto-commits to repo
5. GitHub Actions builds and deploys to Pages

## 5. Manual Deployment

```bash
# Build static export
npm run build

# Output is in ./out directory
```

## 6. Adding New Blog Post (Direct)

If bypassing CMS:

1. Create file: `outstatic/content/posts/your-post-slug.mdx`
2. Add frontmatter:
   ```md
   ---
   title: "Your Post Title"
   publishedAt: "2026-02-07"
   status: published
   author:
     name: "Your Name"
     picture: "/images/avatar.png"
   ---
   
   Your content here...
   ```
3. Commit and push → GitHub Actions deploys automatically
