# Vercel Deployment Guide

**Platform**: Vercel (Serverless)  
**Backend**: Already deployed on Vercel  
**Frontend**: Ready to deploy on Vercel

---

## 🔍 Important: Vercel File Storage

**Vercel does NOT store uploaded files permanently.** This is actually PERFECT for your use case:

### ✅ Why Vercel is Ideal

1. **Serverless Functions**: Each request runs in an isolated container
2. **Ephemeral Storage**: `/tmp` directory is cleared between function invocations
3. **Auto-Cleanup**: No need for manual file deletion scripts
4. **Privacy-Friendly**: Files naturally disappear, can't accumulate

### How Your App Works on Vercel

```
User uploads PDF → Flask backend (Vercel) → Saved to /tmp
↓
Backend processes PDF → Generates images → Saved to /tmp
↓
User downloads ZIP → File streamed from /tmp
↓
Function ends → /tmp automatically cleared ✅
```

**File Retention**: Files exist only during the function execution (seconds to minutes), then auto-deleted.

---

## 🚀 Deploy Frontend to Vercel

### Method 1: Vercel CLI (Fastest)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to frontend folder
cd d:\Dev\pdf_trimmer\frontend

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

**Follow prompts**:
- Set up and deploy? **Yes**
- Which scope? **Your account**
- Link to existing project? **No** (first time)
- Project name? **pdf-trimmer-frontend**
- Directory? **./** (already in frontend folder)
- Override settings? **No**

### Method 2: GitHub Integration (Recommended for CI/CD)

#### Step 1: Push to GitHub

```bash
# In your project root (d:\Dev\pdf_trimmer)
git add .
git commit -m "Complete AdSense-compliant Next.js frontend"
git push origin main
```

#### Step 2: Import to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Project"**
3. Select **"Import Git Repository"**
4. Choose your repository
5. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: `frontend` ⚠️ IMPORTANT!
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install`

#### Step 3: Environment Variables

In Vercel dashboard, add these environment variables:

| Name | Value | Environment |
|------|-------|-------------|
| `NEXT_PUBLIC_API_URL` | `https://your-backend.vercel.app` | Production |
| `NEXT_PUBLIC_BASE_URL` | `https://your-frontend.vercel.app` | Production |
| `NEXT_PUBLIC_ADSENSE_CLIENT` | `ca-pub-1190913191003622` | Production |

**Note**: Vercel will auto-assign a domain like `pdf-trimmer-frontend.vercel.app`. Update `NEXT_PUBLIC_BASE_URL` after first deployment.

#### Step 4: Deploy

- Click **"Deploy"**
- Wait 2-3 minutes for build
- Visit your live site!

---

## 🔧 Post-Deployment Configuration

### Update Backend CORS

Your Flask backend (also on Vercel) needs to allow requests from your frontend:

**File**: `d:\Dev\pdf_trimmer\web\app.py` (or wherever your Flask app is)

```python
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

# Update CORS to allow your Vercel frontend domain
CORS(app, origins=[
    "http://localhost:3000",  # Development
    "https://your-frontend-name.vercel.app",  # Production
    "https://*.vercel.app"  # All Vercel preview deployments (optional)
])

# Your existing routes...
```

**Redeploy backend** after updating CORS:
```bash
cd d:\Dev\pdf_trimmer\web
vercel --prod
```

---

## 📋 Vercel-Specific Settings

### Project Settings

In Vercel Dashboard → Project Settings:

#### Build & Development Settings
- **Framework Preset**: Next.js
- **Root Directory**: `frontend`
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

#### Environment Variables
Add all `NEXT_PUBLIC_*` variables here (see Step 3 above)

#### Domains
- Default: `your-project.vercel.app`
- Custom: Add your own domain (optional)

#### Functions
- **Region**: Auto (closest to users)
- **Max Duration**: 10s (default, enough for page loads)

---

## 🌐 Custom Domain (Optional)

If you own a domain like `pdftrimmer.com`:

### Step 1: Add Domain in Vercel

1. Go to Project Settings → Domains
2. Click **"Add"**
3. Enter: `pdftrimmer.com` and `www.pdftrimmer.com`

### Step 2: Update DNS Records

In your domain registrar (GoDaddy, Namecheap, etc.):

**For root domain** (`pdftrimmer.com`):
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

**For www subdomain** (`www.pdftrimmer.com`):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### Step 3: Wait for DNS Propagation

- Typically 5-30 minutes
- Can take up to 48 hours in rare cases
- Vercel will auto-detect and assign SSL certificate

### Step 4: Update Environment Variables

```bash
NEXT_PUBLIC_BASE_URL=https://pdftrimmer.com
```

Redeploy after updating.

---

## 🔄 Deployment Workflow

### Every Code Change

**Option A: Automatic (GitHub)**
1. Make changes locally
2. `git add .`
3. `git commit -m "Description"`
4. `git push origin main`
5. Vercel auto-deploys in 2-3 minutes

**Option B: Manual (CLI)**
1. Make changes locally
2. `vercel --prod` (from frontend folder)
3. Deployment starts immediately

### Preview Deployments

Every git branch gets a preview URL:
```bash
git checkout -b feature/new-feature
git push origin feature/new-feature
# Vercel creates: https://pdf-trimmer-git-feature-new-feature.vercel.app
```

---

## 🔍 Vercel vs Traditional Hosting

| Feature | Vercel | Traditional VPS |
|---------|--------|-----------------|
| **File Storage** | Ephemeral (/tmp) | Persistent |
| **Auto-Cleanup** | ✅ Automatic | ❌ Manual cron jobs |
| **Scaling** | ✅ Automatic | ❌ Manual |
| **SSL/HTTPS** | ✅ Free, automatic | ❌ Setup required |
| **CDN** | ✅ Global, built-in | ❌ Extra cost |
| **Deployment** | ✅ Git push or CLI | ❌ FTP/SSH |

**Your setup**: Both frontend AND backend on Vercel = Perfect for serverless architecture!

---

## ⚠️ Vercel Limitations (What You Need to Know)

### File Upload Limits
- **Vercel Serverless Functions**: 4.5 MB request body limit
- **Your app**: Uses direct file upload to backend (bypasses this limit ✅)
- **Backend Vercel limit**: 4.5 MB for serverless, use Vercel Blob for larger files

### Solution for Large PDFs (100MB)

Since you mention 100MB limit, you'll need **Vercel Blob Storage**:

```bash
# In your Flask backend
npm install @vercel/blob

# Or use Vercel's built-in file upload
# https://vercel.com/docs/storage/vercel-blob
```

**Alternative**: Use Cloudflare R2, AWS S3, or similar for large file uploads.

### Function Execution Time
- **Hobby Plan**: 10 seconds max
- **Pro Plan**: 60 seconds max
- **Enterprise**: 900 seconds max

**Your app**: PDF processing should complete in <10s for most files.

---

## 📊 Vercel Dashboard

After deployment, monitor:

1. **Deployments**: See all builds, previews, production
2. **Analytics**: Page views, load times (free tier)
3. **Logs**: Real-time function logs
4. **Speed Insights**: Core Web Vitals
5. **Usage**: Bandwidth, function invocations

---

## 🐛 Troubleshooting Vercel

### Build Fails

**Check**:
1. Vercel build logs in dashboard
2. Root directory set to `frontend`
3. Build command is `npm run build`
4. All dependencies in `package.json`

**Fix**:
```bash
# Test locally first
cd frontend
npm run build
# If this works, Vercel build should work
```

### Environment Variables Not Working

**Check**:
1. Variables start with `NEXT_PUBLIC_`
2. Added in Vercel Dashboard → Settings → Environment Variables
3. Selected "Production" environment
4. Redeployed after adding variables

**Fix**: Redeploy to apply new env vars:
```bash
vercel --prod --force
```

### CORS Errors

**Symptoms**: API calls fail with "CORS policy" error

**Fix**: Update Flask backend CORS (see "Update Backend CORS" above)

### Files Not Persisting

**This is normal!** Vercel doesn't store files. Use:
- **Vercel Blob**: For user uploads
- **Vercel KV**: For metadata
- **External storage**: S3, Cloudflare R2

---

## ✅ Deployment Checklist

- [ ] Frontend deployed to Vercel
- [ ] Environment variables set in Vercel dashboard
- [ ] Custom domain added (optional)
- [ ] Backend CORS updated with frontend domain
- [ ] Backend redeployed with CORS changes
- [ ] Test file upload end-to-end
- [ ] Verify `/sitemap.xml` accessible
- [ ] Verify `/robots.txt` accessible
- [ ] Verify `/ads.txt` accessible
- [ ] Check AdSense ad loads
- [ ] Test all page navigation
- [ ] Submit to AdSense
- [ ] Submit sitemap to Google Search Console

---

## 🎯 Your Current Setup

**Backend** (Flask + PyMuPDF):
- Already deployed to Vercel ✅
- URL: `https://pdftrim-bftezys2s-michaels-projects-4c786e88.vercel.app`
- Endpoints: `/upload`, `/preview`, `/process`, `/download`

**Frontend** (Next.js + TypeScript):
- Ready to deploy 🚀
- Will connect to backend via `NEXT_PUBLIC_API_URL`
- Files: `d:\Dev\pdf_trimmer\frontend\`

**File Storage**:
- ✅ No permanent storage on Vercel (by design)
- ✅ Files auto-deleted after function execution
- ✅ Privacy-friendly, no cleanup scripts needed
- ✅ Perfect for temporary PDF processing

---

## 🚀 Deploy Now!

```bash
# Quick deploy
cd d:\Dev\pdf_trimmer\frontend
vercel --prod

# Get your URL
# Update backend CORS with this URL
# Test the site
# Submit to AdSense
```

**That's it!** Your app will be live on Vercel in minutes. 🎉

---

## 📧 Support

**Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)  
**Vercel Status**: [vercel-status.com](https://vercel-status.com)  
**Your Email**: admin@ripstuff.net

**Questions?** Vercel has excellent support and documentation!
