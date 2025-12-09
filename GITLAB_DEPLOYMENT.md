# GitLab Pages Deployment Guide

This guide will help you deploy your React + Vite login page to GitLab Pages.

## Prerequisites

- A GitLab account
- Your code ready to push

## Step-by-Step Instructions

### 1. Create a GitLab Repository

1. Go to [GitLab.com](https://gitlab.com) and sign in
2. Click "New project" → "Create blank project"
3. Give your project a name (e.g., `ps-login`)
4. Set visibility to **Public** (required for free GitLab Pages)
5. Click "Create project"

### 2. Push Your Code to GitLab

```bash
# If you haven't initialized git yet
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - Ready for GitLab Pages deployment"

# Add GitLab remote (replace with your GitLab repo URL)
git remote add origin https://gitlab.com/<your-username>/<your-project-name>.git

# Push to GitLab
git push -u origin main
```

**Note**: If your default branch is `master` instead of `main`, use `master` in the commands above.

### 3. CI/CD Pipeline

The `.gitlab-ci.yml` file is already configured in your project. It will:

1. **Build Stage**: Install dependencies and build your Vite app
2. **Deploy Stage**: Copy the built files to the `public` directory for GitLab Pages

### 4. Access Your Live Site

1. Go to your GitLab project
2. Navigate to **Settings** → **Pages**
3. After the CI/CD pipeline completes (usually 2-3 minutes), your site will be available at:
   ```
   https://<your-username>.gitlab.io/<your-project-name>/
   ```

### 5. Custom Domain (Optional)

1. Go to **Settings** → **Pages**
2. Under "Custom domains", click "Add domain"
3. Enter your domain name
4. Follow the DNS configuration instructions
5. GitLab will automatically provision an SSL certificate

## CI/CD Pipeline Details

The pipeline runs automatically when you:
- Push to `main` or `master` branch
- Merge a merge request

### Pipeline Stages:

1. **Build**: 
   - Uses Node.js 20
   - Runs `npm ci` to install dependencies
   - Runs `npm run build` to create production build
   - Caches `node_modules` for faster subsequent builds

2. **Deploy**:
   - Copies built files from `dist` to `public`
   - GitLab Pages serves files from the `public` directory

## Troubleshooting

### Pipeline Fails

- Check the **CI/CD** → **Pipelines** section for error details
- Common issues:
  - Missing dependencies in `package.json`
  - Build errors in your code
  - Node version compatibility

### Pages Not Showing

- Ensure your project visibility is set to **Public** (required for free GitLab Pages)
- Wait a few minutes after pipeline completes
- Check **Settings** → **Pages** for the deployment status
- Clear your browser cache

### 404 Errors on Routes

If you're using React Router and getting 404s on direct route access:

1. Update `vite.config.ts` to set the base path:
```typescript
export default defineConfig({
  base: '/<your-project-name>/', // Add this
  // ... rest of config
})
```

2. Rebuild and push:
```bash
npm run build
git add .
git commit -m "Fix base path for GitLab Pages"
git push
```

## Updating Your Site

Simply push changes to your `main` or `master` branch:

```bash
git add .
git commit -m "Update login page"
git push
```

The CI/CD pipeline will automatically rebuild and redeploy your site.

## Environment Variables (if needed)

If you need environment variables:

1. Go to **Settings** → **CI/CD** → **Variables**
2. Add your variables
3. They will be available during the build process

## Support

- [GitLab Pages Documentation](https://docs.gitlab.com/ee/user/project/pages/)
- [GitLab CI/CD Documentation](https://docs.gitlab.com/ee/ci/)

