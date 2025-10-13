# GitHub Deployment Instructions

## 🚀 Push to GitHub Repository (Reckless98)

### Step 1: Create Repository on GitHub

1. Go to: https://github.com/Reckless98
2. Click the "+" icon in top right → "New repository"
3. Repository details:
   - **Name**: `tyres2go-website` (or your preferred name)
   - **Description**: "Tyres2Go - Premium Tyre & Auto Services Website | Christchurch, NZ"
   - **Visibility**: Private (recommended) or Public
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click "Create repository"

### Step 2: Link Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these in PowerShell:

```powershell
# Add GitHub remote (replace YOUR-REPO-NAME with actual name)
git remote add origin https://github.com/Reckless98/YOUR-REPO-NAME.git

# Verify remote was added
git remote -v

# Rename branch to main (optional, modern standard)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 3: Verify Upload

1. Refresh your GitHub repository page
2. You should see all files uploaded
3. Check that README.md displays correctly

---

## 📋 Pre-Deployment Checklist

### ✅ Completed
- [x] Git repository initialized
- [x] All files committed
- [x] .gitignore configured
- [x] README.md updated
- [x] Quality check document created
- [x] Asset directories created

### ⚠️ Before Going Live
- [ ] Add tyre brand logos (see `/public/images/DOWNLOAD_INSTRUCTIONS.md`)
- [ ] Test build: `npm run build`
- [ ] Test production build: `npm run preview`
- [ ] Update environment variables if needed
- [ ] Configure hosting (Vercel/Netlify/Custom)

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click "Deploy"
7. Your site will be live in ~1 minute!

### Option 2: Netlify

1. Go to https://netlify.com
2. Sign in with GitHub
3. Click "New site from Git"
4. Choose your repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

### Option 3: Custom Server

Build the production files:
```bash
npm run build
```

This creates a `dist` folder with all static files. Upload these to your web server.

---

## 🔧 Post-Deployment Tasks

### 1. Domain Setup
- Point custom domain to hosting provider
- Configure DNS settings
- Enable HTTPS/SSL

### 2. Performance Optimization
- Enable CDN
- Configure caching
- Optimize images

### 3. Monitoring
- Set up Google Analytics
- Configure error tracking (Sentry)
- Monitor performance (Lighthouse)

### 4. SEO
- Submit sitemap to Google Search Console
- Verify meta tags
- Check mobile-friendliness

---

## 📞 Support Information

**Repository**: https://github.com/Reckless98/YOUR-REPO-NAME
**Dev Server**: http://localhost:5173
**Contact**: info@tyres2go.net.nz
**Phone**: 03 341 7675

---

## 🎯 Quick Commands Reference

```bash
# Development
npm run dev          # Start dev server

# Build
npm run build        # Build for production
npm run preview      # Preview production build

# Git
git status           # Check status
git add .            # Stage all changes
git commit -m "msg"  # Commit changes
git push             # Push to GitHub

# Pull latest changes
git pull origin main
```

---

**Last Updated**: October 14, 2025
**Status**: Ready for deployment
**Build**: Production-ready
