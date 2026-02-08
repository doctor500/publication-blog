# Security Best Practices

This document outlines security guidelines, checklists, and credential management procedures for the publication-blog project.

---

## Credential Management

### Environment Variables

| Variable | Purpose | Storage Location |
|----------|---------|------------------|
| `OST_GITHUB_ID` | GitHub OAuth Client ID | Netlify/Local `.env.local` |
| `OST_GITHUB_SECRET` | GitHub OAuth Client Secret | Netlify/Local `.env.local` |
| `OST_REPO_OWNER` | Repository owner | Netlify/Local `.env.local` |
| `OST_REPO_SLUG` | Repository name | Netlify/Local `.env.local` |

### Where to Store Secrets

| Environment | Storage Method |
|-------------|----------------|
| **Local Dev** | `.env.local` (gitignored) |
| **Netlify** | Site Settings → Environment Variables |
| **GitHub Actions** | Repository Settings → Secrets → Actions |

> [!CAUTION]
> **NEVER** commit secrets to the repository. All `.env*` files are gitignored.

---

## Security Checklist

### Before Each Commit

- [ ] No hardcoded API keys, tokens, or passwords
- [ ] No `.env` files staged (check with `git status`)
- [ ] No private keys (`.pem`, `.key`) in commit
- [ ] Sensitive data uses `process.env` only

### Before Deployment

- [ ] Environment variables set in Netlify Dashboard
- [ ] OAuth callback URLs configured correctly
- [ ] GitHub OAuth App permissions are minimal
- [ ] No test credentials in production config

### Periodic Review (Monthly)

- [ ] Rotate GitHub OAuth credentials if exposed
- [ ] Review repository access permissions
- [ ] Check for leaked secrets in git history
- [ ] Update dependencies for security patches

---

## OAuth App Configuration

### Required Scopes

The GitHub OAuth App requires **minimal scopes**:
- `repo` - Read/write access to commit content
- `user:email` - Read user email for authentication

### Callback URLs

| Environment | Callback URL |
|-------------|--------------|
| Production | `https://cms.publication.layardi.com/api/outstatic/callback` |
| Local Dev | `http://localhost:3000/api/outstatic/callback` |

---

## Secret Rotation Procedure

### When to Rotate

1. Suspected credential exposure
2. Team member access revoked
3. Quarterly security review

### How to Rotate

1. **GitHub OAuth App:**
   - Go to [GitHub Developer Settings](https://github.com/settings/developers)
   - Click your OAuth App → Generate new client secret
   - Update `OST_GITHUB_SECRET` in Netlify
   - Delete old secret after verification

2. **Verification:**
   - Test Outstatic dashboard login
   - Verify content save functionality
   - Check error logs for auth failures

---

## Protected Files

Files that should **NEVER** be committed:

```
.env
.env.local
.env.production
.env.*.local
*.pem
*.key
*_rsa
*.p12
*.pfx
```

These patterns are included in `.gitignore`.

---

## Incident Response

### If Secrets Are Exposed

1. **Immediately** rotate the exposed credential
2. Check git history for other exposed secrets:
   ```bash
   git log -p | grep -i "secret\|password\|key\|token"
   ```
3. If in git history, consider repository cleanup or re-creation
4. Review access logs for unauthorized usage
5. Document incident and remediation

---

## Security Contacts

For security concerns related to third-party services:
- **GitHub Security:** https://github.com/security
- **Netlify Security:** https://docs.netlify.com/security/
- **Outstatic Issues:** https://github.com/avitorio/outstatic/issues

---

*Last Updated: 2026-02-09*
