# Custom Domain Setup - pdftrim.app

## 🌐 Connect pdftrim.app to Your Frontend

### Step 1: Add Domain in Vercel Dashboard

1. Go to: https://vercel.com/dashboard
2. Select project: **pdftrim** (your frontend)
3. Go to: **Settings → Domains**
4. Click: **"Add Domain"**
5. Enter: `pdftrim.app`
6. Click: **"Add"**

### Step 2: Update DNS Records

Vercel will show you DNS records. Go to your domain registrar (where you bought pdftrim.app) and add these records:

#### For Root Domain (pdftrim.app)

**Type**: A  
**Name**: @ (or leave blank)  
**Value**: `76.76.21.21` (Vercel's IP)  
**TTL**: 3600

#### For WWW Subdomain (www.pdftrim.app)

**Type**: CNAME  
**Name**: www  
**Value**: `cname.vercel-dns.com`  
**TTL**: 3600

### Step 3: Wait for DNS Propagation

- Usually takes: 5-30 minutes
- Can take up to: 48 hours
- Check status at: https://www.whatsmydns.net/#A/pdftrim.app

### Step 4: Verify in Vercel

Once DNS propagates:
- Vercel will automatically detect it
- SSL certificate will be issued automatically
- Your site will be live at https://pdftrim.app

### Step 5: Update Environment Variable

After domain is working, update the BASE_URL:

```bash
npx vercel env rm NEXT_PUBLIC_BASE_URL production
npx vercel env add NEXT_PUBLIC_BASE_URL production
# Enter: https://pdftrim.app
```

Then redeploy:
```bash
npx vercel --prod
```

## 🔍 Troubleshooting

### Domain Already in Use?

If domain is assigned to your backend project:

1. Go to backend project settings
2. Remove pdftrim.app from domains
3. Then add it to frontend project

### DNS Not Propagating?

Check with:
```bash
nslookup pdftrim.app
```

Should show: `76.76.21.21`

### Still Getting 404?

- Make sure domain is added to the **frontend** project, not backend
- Check Vercel dashboard for any error messages
- Try accessing https://pdftrim.app (with https)

## ✅ Verification Checklist

- [ ] Domain added in Vercel dashboard
- [ ] A record points to 76.76.21.21
- [ ] CNAME record points to cname.vercel-dns.com
- [ ] DNS propagation complete (check whatsmydns.net)
- [ ] Site accessible at https://pdftrim.app
- [ ] SSL certificate issued (https works)
- [ ] Update NEXT_PUBLIC_BASE_URL environment variable
- [ ] Redeploy with new BASE_URL

## 📧 Need Help?

- Check Vercel docs: https://vercel.com/docs/custom-domains
- Check domain registrar DNS settings
- Wait 30 minutes for DNS to propagate

---

**Once live at pdftrim.app, you can submit to AdSense!** 🚀
