# Deployment Guide - PDF Book Page Trimmer

Complete step-by-step guide to deploy the PDF Book Page Trimmer to production.

## 📋 Pre-Deployment Checklist

### ✅ Frontend Build Verification
- [x] `npm run build` completes successfully
- [x] All pages render correctly in production mode
- [x] Environment variables are properly configured
- [x] ESLint passes (warnings OK, no errors)
- [x] TypeScript compilation succeeds

### ✅ Content & SEO
- [x] All 6 legal/content pages created (Home, Privacy, Terms, FAQ, Contact, About)
- [x] 600-900+ words on each major page
- [x] Sitemap.xml generated at `/sitemap.xml`
- [x] robots.txt generated at `/robots.txt`
- [x] ads.txt with publisher ID at `/ads.txt`
- [x] Structured data (JSON-LD) on homepage
- [x] OpenGraph metadata configured
- [x] 404 page created (no ads)

### ✅ AdSense Compliance
- [x] Single ad unit below content fold
- [x] No ads on legal pages (Privacy, Terms, FAQ, Contact, About, 404)
- [x] Google Funding Choices CMP integrated
- [x] Cookie policy documented
- [x] Privacy policy covers AdSense
- [x] ads.txt accessible

### ✅ Backend API
- [ ] Flask backend deployed to production
- [ ] Backend API URL known (e.g., `https://api.pdftrimmer.com`)
- [ ] CORS configured for frontend domain
- [ ] File upload endpoint tested
- [ ] Preview endpoint tested
- [ ] Process endpoint tested
- [ ] Download endpoint tested

---

## 🚀 Deployment Steps

### Step 1: Update Production Environment Variables

Update `.env.local` with production values:

```bash
# Production Backend API URL
NEXT_PUBLIC_API_URL=https://your-backend-api.vercel.app

# Production Domain
NEXT_PUBLIC_BASE_URL=https://your-frontend-domain.vercel.app

# AdSense Publisher ID (already set)
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-1190913191003622
```

### Step 2: Test Production Build Locally

```bash
# Build for production
npm run build

# Start production server
npm start

# Open http://localhost:3000
# Test all features:
# - File upload
# - Preview generation
# - Crop controls
# - Export functionality
# - All page links
```

### Step 3: Deploy to Vercel (Recommended)

#### Option A: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to frontend folder
cd d:\Dev\pdf_trimmer\frontend

# Deploy to Vercel
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Choose your account
# - Link to existing project? No (first time)
# - What's your project's name? pdf-trimmer-frontend
# - In which directory is your code located? ./
# - Want to override settings? No

# Deploy to production
vercel --prod
```

#### Option B: Vercel Dashboard (GitHub Integration)

1. **Push to GitHub**
   ```bash
   cd d:\Dev\pdf_trimmer
   git add .
   git commit -m "Complete AdSense-compliant Next.js frontend"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your repository
   - Configure project:
     - **Framework Preset**: Next.js
     - **Root Directory**: `frontend`
     - **Build Command**: `npm run build`
     - **Output Directory**: `.next`

3. **Set Environment Variables** in Vercel Dashboard:
   - `NEXT_PUBLIC_API_URL` = Your backend API URL
   - `NEXT_PUBLIC_BASE_URL` = Your frontend domain
   - `NEXT_PUBLIC_ADSENSE_CLIENT` = `ca-pub-1190913191003622`

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Visit your live site!

### Step 4: Update Backend CORS

Update Flask backend to allow your frontend domain:

```python
# In Flask app.py
from flask_cors import CORS

# Update allowed origins
CORS(app, origins=[
    "http://localhost:3000",
    "https://your-frontend-domain.vercel.app"
])
```

Redeploy backend after updating CORS.

### Step 5: Verify Deployment

Check all features work in production:

#### ✅ Core Functionality
- [ ] Homepage loads
- [ ] PDF file upload works
- [ ] Preview images display
- [ ] Crop controls respond
- [ ] Export downloads ZIP

#### ✅ Navigation
- [ ] All page links work
- [ ] Footer links navigate correctly
- [ ] 404 page displays for invalid URLs
- [ ] Back buttons function

#### ✅ SEO & Indexing
- [ ] Visit `https://yourdomain.com/sitemap.xml` - should show XML
- [ ] Visit `https://yourdomain.com/robots.txt` - should show text
- [ ] Visit `https://yourdomain.com/ads.txt` - should show publisher ID
- [ ] View page source - check for OpenGraph tags
- [ ] View page source - check for JSON-LD structured data

#### ✅ AdSense
- [ ] AdSense script loads in browser DevTools > Network
- [ ] Ad unit div appears on homepage (below content)
- [ ] No ads on Privacy, Terms, FAQ, Contact, About, 404 pages
- [ ] CMP consent banner appears for EEA users (test with VPN)

---

## 🔧 Post-Deployment Configuration

### Step 6: Update Google AdSense

1. **Submit for AdSense Review**
   - Go to [AdSense Dashboard](https://www.google.com/adsense/)
   - Add your site: `https://your-frontend-domain.vercel.app`
   - Paste ad code (already in `app/layout.tsx`)
   - Submit for review

2. **Verification**
   - Google will check `ads.txt` is accessible
   - Wait 1-2 days for verification
   - Wait 1-2 weeks for content review

3. **After Approval**
   - Ads will start appearing automatically
   - Monitor performance in AdSense dashboard
   - Optimize ad placement if needed

### Step 7: Submit to Google Search Console

1. **Add Property**
   - Go to [Google Search Console](https://search.google.com/search-console/)
   - Click "Add Property"
   - Enter your domain: `https://your-frontend-domain.vercel.app`

2. **Verify Ownership**
   - Choose "HTML tag" method
   - Add meta tag to `app/layout.tsx` in `<head>`:
     ```tsx
     <meta name="google-site-verification" content="YOUR_CODE_HERE" />
     ```
   - Redeploy
   - Click "Verify"

3. **Submit Sitemap**
   - In Search Console, go to "Sitemaps"
   - Add new sitemap: `https://your-frontend-domain.vercel.app/sitemap.xml`
   - Click "Submit"

4. **Monitor Indexing**
   - Check "Coverage" to see indexed pages
   - Use "URL Inspection" to test individual pages
   - Wait 3-7 days for full indexing

### Step 8: Optional - Custom Domain

If you have a custom domain (e.g., `pdftrimmer.com`):

1. **In Vercel Dashboard**
   - Go to Project Settings > Domains
   - Click "Add"
   - Enter your domain: `pdftrimmer.com` and `www.pdftrimmer.com`

2. **Update DNS Records** (in your domain registrar)
   - Add A record: `76.76.21.21` (Vercel IP)
   - Add CNAME record: `www` → `cname.vercel-dns.com`

3. **Wait for DNS Propagation** (5 minutes - 48 hours)

4. **Update Environment Variables**
   ```bash
   NEXT_PUBLIC_BASE_URL=https://pdftrimmer.com
   ```
   Redeploy after updating.

5. **Update AdSense & Search Console**
   - Add new domain in AdSense
   - Add new property in Search Console
   - Update `ads.txt` if needed

---

## 📊 Monitoring & Analytics

### Optional: Add Google Analytics

1. **Create GA4 Property**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create new property
   - Get Measurement ID (e.g., `G-XXXXXXXXXX`)

2. **Add to Next.js**
   In `app/layout.tsx`, add before `</head>`:
   ```tsx
   <script async src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}></script>
   <script
     dangerouslySetInnerHTML={{
       __html: `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'G-XXXXXXXXXX');
       `,
     }}
   />
   ```

3. **Verify Tracking**
   - Visit your site
   - Open GA4 > Reports > Realtime
   - Should see yourself as active user

### Performance Monitoring

Use Vercel Analytics (built-in):
- Go to Project Dashboard > Analytics
- View page load times
- Monitor Core Web Vitals
- Track user interactions

---

## 🐛 Troubleshooting

### Issue: Ads Not Showing

**Solution:**
1. Check `NEXT_PUBLIC_ADSENSE_CLIENT` is set correctly
2. Verify `ads.txt` is accessible at root domain
3. Wait 24-48 hours after AdSense approval
4. Test without ad blocker
5. Check browser console for AdSense errors

### Issue: API Calls Failing

**Solution:**
1. Check `NEXT_PUBLIC_API_URL` is correct
2. Verify backend is deployed and running
3. Check CORS configuration on backend
4. Test backend endpoints directly
5. Check browser DevTools > Network for error details

### Issue: 404 on Page Refresh

**Solution:**
- Vercel handles this automatically for Next.js
- If using another host, configure rewrites:
  ```json
  // vercel.json
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/" }]
  }
  ```

### Issue: Environment Variables Not Working

**Solution:**
1. Ensure variables start with `NEXT_PUBLIC_`
2. Rebuild after changing env vars: `npm run build`
3. Redeploy to Vercel after updating dashboard env vars
4. Check Vercel deployment logs for env var values

---

## ✅ Final Checklist

Before going live:

### Frontend
- [ ] Production build succeeds
- [ ] All pages accessible
- [ ] All links work
- [ ] Forms submit correctly
- [ ] PDF upload/process works
- [ ] Mobile responsive
- [ ] Fast load times (<3s)

### Backend
- [ ] Deployed to production
- [ ] CORS configured
- [ ] File cleanup working (1-hour deletion)
- [ ] All endpoints tested
- [ ] Error handling works
- [ ] Rate limiting configured

### SEO
- [ ] Sitemap submitted to Search Console
- [ ] robots.txt allows crawling
- [ ] Meta descriptions on all pages
- [ ] Structured data validates
- [ ] OpenGraph images set
- [ ] No broken links

### AdSense
- [ ] Ad code on homepage only
- [ ] Below content fold
- [ ] ads.txt accessible
- [ ] CMP consent working
- [ ] Privacy policy mentions AdSense
- [ ] Site submitted for review

### Legal
- [ ] Privacy policy published
- [ ] Terms of service published
- [ ] Contact page with email
- [ ] Cookie policy disclosed
- [ ] GDPR rights documented

---

## 🎉 You're Live!

After deployment:

1. **Share your site**: `https://your-domain.vercel.app`
2. **Monitor AdSense**: Check approval status (1-2 weeks)
3. **Track SEO**: Watch Search Console for indexing
4. **Collect feedback**: Share with users, gather suggestions
5. **Iterate**: Add features from roadmap

### Next Steps

- Add Google Analytics for user insights
- Implement auto-crop detection
- Create batch processing feature
- Optimize for mobile devices
- Add more export formats
- Consider user accounts (optional)

---

## 📧 Support

If you encounter issues:
- Email: admin@ripstuff.net
- Check README.md for troubleshooting
- Review Vercel deployment logs
- Test locally with `npm run build && npm start`

**Good luck with your deployment! 🚀**
