# GitHub Pages Preview Setup

This guide will help you set up automatic deployment to GitHub Pages using GitHub Actions.

## Quick Setup Steps

### 1. Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository: `https://github.com/designerias/welcome-connect-portal`
2. Navigate to **Settings** → **Pages**
3. Under "Source", select **GitHub Actions** (not "Deploy from a branch")
4. Save the settings

### 2. Push the Workflow File

The GitHub Actions workflow file (`.github/workflows/deploy.yml`) is already created. Just push it:

```bash
git add .github/workflows/deploy.yml
git add vite.config.ts
git commit -m "Add GitHub Pages deployment workflow"
git push origin main
```

### 3. Wait for Deployment

1. Go to your repository → **Actions** tab
2. You'll see the workflow running
3. Wait for it to complete (usually 2-3 minutes)
4. Once complete, go to **Settings** → **Pages**
5. Your site will be available at:
   ```
   https://designerias.github.io/welcome-connect-portal/
   ```

## How It Works

The workflow automatically:
- ✅ Builds your Vite app on every push to `main`
- ✅ Deploys to GitHub Pages
- ✅ Updates the site automatically

## Accessing Your Pages

- **Main site**: `https://designerias.github.io/welcome-connect-portal/`
- **V1 page**: `https://designerias.github.io/welcome-connect-portal/loginpage_v1`
- **V2 page**: `https://designerias.github.io/welcome-connect-portal/loginpage_v2`

## Manual Deployment

You can also trigger the workflow manually:
1. Go to **Actions** tab
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"
4. Select branch and click "Run workflow"

## Troubleshooting

### Pages Not Showing

1. Check **Actions** tab for any errors
2. Ensure **Settings** → **Pages** → Source is set to **GitHub Actions**
3. Wait a few minutes after the workflow completes
4. Clear browser cache

### 404 Errors on Routes

The `vite.config.ts` is already configured with the correct base path (`/welcome-connect-portal/`). If you still see 404s:
- Ensure the base path matches your repository name
- Rebuild and redeploy

### Workflow Fails

- Check the **Actions** tab for error details
- Common issues:
  - Missing dependencies
  - Build errors
  - Node version issues

## Custom Domain (Optional)

1. Go to **Settings** → **Pages**
2. Under "Custom domain", enter your domain
3. Follow DNS configuration instructions
4. GitHub will automatically provision SSL

## Notes

- The site updates automatically on every push to `main`
- Build artifacts are cached for faster subsequent builds
- The workflow uses Node.js 20 and npm

