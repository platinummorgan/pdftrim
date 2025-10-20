# Vercel Environment Variables Setup Script

This script helps you add environment variables to Vercel systematically using the CLI.

## 📋 Prerequisites

```bash
# Install Vercel CLI globally (if not already installed)
npm install -g vercel

# Login to Vercel
vercel login
```

## 🔧 Add Environment Variables

### Option 1: Interactive Commands (Recommended)

Run these commands one by one from your frontend directory:

```bash
# Navigate to frontend directory
cd d:\Dev\pdf_trimmer\frontend

# Add AdSense Client ID (Production only)
vercel env add NEXT_PUBLIC_ADSENSE_CLIENT production
# When prompted, paste: ca-pub-1190913191003622

# Add Base URL (Production only - update after first deploy)
vercel env add NEXT_PUBLIC_BASE_URL production
# When prompted, paste: https://your-frontend-name.vercel.app

# Add API URL (Production only)
vercel env add NEXT_PUBLIC_API_URL production
# When prompted, paste: https://pdftrim-bftezys2s-michaels-projects-4c786e88.vercel.app
```

### Option 2: Non-Interactive (One-Liners)

```bash
# Add all environment variables at once
echo "ca-pub-1190913191003622" | vercel env add NEXT_PUBLIC_ADSENSE_CLIENT production

echo "https://pdftrim-bftezys2s-michaels-projects-4c786e88.vercel.app" | vercel env add NEXT_PUBLIC_API_URL production

# Note: Add NEXT_PUBLIC_BASE_URL after first deployment when you know the URL
```

### Option 3: PowerShell Script (Windows)

Create a file `setup-vercel-env.ps1`:

```powershell
# Vercel Environment Variables Setup
Write-Host "Setting up Vercel environment variables..." -ForegroundColor Green

# AdSense Client
Write-Host "`nAdding NEXT_PUBLIC_ADSENSE_CLIENT..." -ForegroundColor Yellow
"ca-pub-1190913191003622" | vercel env add NEXT_PUBLIC_ADSENSE_CLIENT production

# API URL
Write-Host "`nAdding NEXT_PUBLIC_API_URL..." -ForegroundColor Yellow
"https://pdftrim-bftezys2s-michaels-projects-4c786e88.vercel.app" | vercel env add NEXT_PUBLIC_API_URL production

Write-Host "`n✅ Environment variables added!" -ForegroundColor Green
Write-Host "`n⚠️  Remember to add NEXT_PUBLIC_BASE_URL after first deployment" -ForegroundColor Yellow
```

Run it:
```bash
cd d:\Dev\pdf_trimmer\frontend
powershell -ExecutionPolicy Bypass -File setup-vercel-env.ps1
```

## 📝 Verify Environment Variables

```bash
# List all environment variables
vercel env ls

# Pull environment variables to local .env file
vercel env pull .env.vercel

# Check specific environment
vercel env ls production
```

## 🔄 Update Existing Variables

```bash
# Remove a variable
vercel env rm NEXT_PUBLIC_BASE_URL production

# Add updated value
vercel env add NEXT_PUBLIC_BASE_URL production
# Paste new value when prompted
```

## 📊 Environment Variable Scopes

Vercel supports three environments:
- **Production**: `vercel --prod` deployments
- **Preview**: Branch deployments (git push)
- **Development**: `vercel dev` (local)

### Add to Multiple Environments

```bash
# Add to production
vercel env add NEXT_PUBLIC_API_URL production

# Add to preview (same value)
vercel env add NEXT_PUBLIC_API_URL preview

# Add to development (different value for localhost)
vercel env add NEXT_PUBLIC_API_URL development
# Paste: http://localhost:5001
```

## 🚀 Complete Setup Workflow

### Step 1: Login and Link Project

```bash
cd d:\Dev\pdf_trimmer\frontend

# Login to Vercel
vercel login

# Link to project (first time)
vercel link
# Choose your scope/team
# Link to existing project or create new
```

### Step 2: Add Environment Variables

```bash
# Method A: Interactive (easier)
vercel env add NEXT_PUBLIC_ADSENSE_CLIENT production
vercel env add NEXT_PUBLIC_API_URL production

# Method B: From file
vercel env pull .env.vercel  # First time, pulls existing vars
# Edit .env.vercel with your values
vercel env push .env.vercel production
```

### Step 3: Deploy

```bash
# Deploy to production
vercel --prod

# Your app is now live with environment variables!
```

## 📋 Your Specific Variables

Here are your exact values:

| Variable | Value | Environment |
|----------|-------|-------------|
| `NEXT_PUBLIC_ADSENSE_CLIENT` | `ca-pub-1190913191003622` | production |
| `NEXT_PUBLIC_API_URL` | `https://pdftrim-bftezys2s-michaels-projects-4c786e88.vercel.app` | production |
| `NEXT_PUBLIC_BASE_URL` | *(Add after first deploy)* | production |

## 🔍 Troubleshooting

### Variables Not Showing Up?

```bash
# Redeploy after adding variables
vercel --prod --force
```

### Check if Variables Are Set

```bash
# List all environment variables
vercel env ls

# Should show:
# NEXT_PUBLIC_ADSENSE_CLIENT (production)
# NEXT_PUBLIC_API_URL (production)
# NEXT_PUBLIC_BASE_URL (production)
```

### Variables Not Working in Build?

Make sure they start with `NEXT_PUBLIC_` prefix (required for client-side access in Next.js)

## ✅ Quick Copy-Paste Commands

**Run these in order:**

```bash
# 1. Navigate to frontend
cd d:\Dev\pdf_trimmer\frontend

# 2. Login to Vercel
vercel login

# 3. Link project (first time only)
vercel link

# 4. Add AdSense Client
vercel env add NEXT_PUBLIC_ADSENSE_CLIENT production
# Paste: ca-pub-1190913191003622

# 5. Add API URL
vercel env add NEXT_PUBLIC_API_URL production
# Paste: https://pdftrim-bftezys2s-michaels-projects-4c786e88.vercel.app

# 6. Verify
vercel env ls

# 7. Deploy
vercel --prod

# 8. After deployment, add Base URL
vercel env add NEXT_PUBLIC_BASE_URL production
# Paste: https://your-new-vercel-url.vercel.app

# 9. Redeploy to apply Base URL
vercel --prod
```

## 🎯 Alternative: Use Vercel Dashboard

If CLI gives issues, you can also add variables via web UI:

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Click **Add New**
5. Enter:
   - **Key**: `NEXT_PUBLIC_ADSENSE_CLIENT`
   - **Value**: `ca-pub-1190913191003622`
   - **Environment**: Production
6. Click **Save**
7. Repeat for other variables

## 📧 Support

- **Vercel CLI Docs**: [vercel.com/docs/cli](https://vercel.com/docs/cli)
- **Environment Variables**: [vercel.com/docs/environment-variables](https://vercel.com/docs/environment-variables)

---

**Ready to set up your variables?** Start with the Quick Copy-Paste Commands section! 🚀
