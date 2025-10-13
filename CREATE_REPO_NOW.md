# Create GitHub Repository - QUICK STEPS

## Step 1: Create Repository on GitHub

1. **Open this link in your browser:**
   https://github.com/new

2. **Fill in the form:**
   - **Owner:** Select "Reckless98"
   - **Repository name:** `tyres2go-website`
   - **Description:** `Tyres2Go - Premium Tyre & Auto Services Website | Christchurch, NZ`
   - **Privacy:** Choose "Private" (recommended)
   - **Important:** Leave all checkboxes UNCHECKED:
     - ❌ Do NOT add a README file
     - ❌ Do NOT add .gitignore
     - ❌ Do NOT choose a license

3. **Click:** "Create repository"

---

## Step 2: You'll See This Screen

GitHub will show you commands. **IGNORE THEM** and use the commands below instead.

---

## Step 3: Run These Commands

Copy and paste these commands into PowerShell **ONE AT A TIME**:

```powershell
# Add GitHub remote (this links your local code to GitHub)
git remote add origin https://github.com/Reckless98/tyres2go-website.git

# Check it's connected
git remote -v

# Rename branch to 'main' (modern standard)
git branch -M main

# Push all your code to GitHub
git push -u origin main
```

---

## Step 4: Enter Your GitHub Credentials

When you run `git push`, Windows will prompt you to sign in:
- A browser window may open for authentication
- OR enter your GitHub username and Personal Access Token

### If You Need a Personal Access Token:

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Set:
   - Note: "Tyres2Go Website"
   - Expiration: 90 days
   - Scopes: Check "repo" (all sub-items)
4. Click "Generate token"
5. **COPY THE TOKEN** (you won't see it again!)
6. Use this token as your password when pushing

---

## Step 5: Verify Upload

1. Go to: https://github.com/Reckless98/tyres2go-website
2. Refresh the page
3. You should see all your files!
4. Check that README.md displays correctly

---

## ✅ Success!

Your code is now backed up on GitHub! 

**Next:** Deploy to Vercel or Netlify (see DEPLOYMENT.md)

---

## ⚠️ Troubleshooting

### Error: "remote origin already exists"
```powershell
git remote remove origin
git remote add origin https://github.com/Reckless98/tyres2go-website.git
```

### Error: "failed to push"
Make sure you created the repo with NO initial files (no README, no .gitignore, no license).

### Authentication Issues
- Use a Personal Access Token (not your GitHub password)
- See instructions above for creating a token

---

**Ready? Start with Step 1!**
