/**
 * Outstatic API Route Handler
 * 
 * Handles OAuth callbacks and CMS operations:
 * - GET: GitHub OAuth callback, content fetching
 * - POST: Content creation/updates via GitHub API
 * 
 * SECURITY: This route is excluded from static builds.
 * Only available on Vercel deployment with proper env vars.
 * 
 * @requires OST_GITHUB_ID - GitHub OAuth App Client ID
 * @requires OST_GITHUB_SECRET - GitHub OAuth App Client Secret
 * @requires OST_REPO_OWNER - GitHub username/org owning the repo
 * @requires OST_REPO_SLUG - Repository name
 */
import { OutstaticApi } from 'outstatic';

// Re-export Outstatic's built-in route handlers
export const GET = OutstaticApi.GET;
export const POST = OutstaticApi.POST;
