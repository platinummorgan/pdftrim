# Vercel Setup - Step by Step Commands

## 🔧 Step 1: Open New PowerShell Terminal

Close and reopen your PowerShell terminal to refresh the PATH, or run:

```powershell
# Refresh environment variables in current session
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
```

## 🔑 Step 2: Login to Vercel

```bash
vercel login
```

This will open a browser window. Confirm your login.

## 🔗 Step 3: Link Your Project

```bash
cd d:\Dev\pdf_trimmer\frontend
vercel link
```

**Prompts you'll see**:
- **Set up and deploy?** → Choose your preference
- **Which scope?** → Select your account/team
- **Link to existing project?** → No (first time) or Yes (if you already created it)
- **What's your project's name?** → `pdf-trimmer-frontend` (or your choice)
- **In which directory is your code located?** → `./` (press Enter)

## 📝 Step 4: Add Environment Variables (One by One)

### Add AdSense Client ID

```bash
vercel env add NEXT_PUBLIC_ADSENSE_CLIENT production
```

When prompted, paste:
```
ca-pub-1190913191003622
```

Press Enter.

### Add API URL

```bash
vercel env add NEXT_PUBLIC_API_URL production
```

When prompted, paste:
```
https://pdftrim-bftezys2s-michaels-projects-4c786e88.vercel.app
```

Press Enter.

## ✅ Step 5: Verify Variables

```bash
vercel env ls
```

You should see:
```
Environment Variables for pdf-trimmer-frontend

  NEXT_PUBLIC_ADSENSE_CLIENT (production)
  NEXT_PUBLIC_API_URL (production)
```

## 🚀 Step 6: Deploy to Production

```bash
vercel --prod
```

**Wait for deployment to complete** (2-3 minutes).

You'll see output like:
```
✔  Production: https://pdf-trimmer-frontend-xyz123.vercel.app [2m 15s]
```

**Copy your Vercel URL!**

## 🔄 Step 7: Add Base URL

Now that you have your Vercel URL, add it as an environment variable:

```bash
vercel env add NEXT_PUBLIC_BASE_URL production
```

When prompted, paste your Vercel URL from Step 6:
```
https://pdf-trimmer-frontend-xyz123.vercel.app
```

Press Enter.

## 🔁 Step 8: Redeploy (to apply Base URL)

```bash
vercel --prod
```

## ✅ Step 9: Verify Your Deployment

Open your browser and visit your Vercel URL. Check:
- [ ] Homepage loads
- [ ] All pages are accessible
- [ ] `/sitemap.xml` works
- [ ] `/robots.txt` works
- [ ] `/ads.txt` shows your publisher ID
- [ ] Ad slot appears on homepage (below content)

---

## 📋 Quick Copy-Paste (All Commands)

**Run these in order:**

```bash
# 1. Login
vercel login

# 2. Navigate to frontend
cd d:\Dev\pdf_trimmer\frontend

# 3. Link project
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
# Copy the URL from output

# 8. Add Base URL
vercel env add NEXT_PUBLIC_BASE_URL production
# Paste: your-vercel-url-from-step-7

# 9. Redeploy
vercel --prod
```

---

## 🐛 Troubleshooting

### "vercel: command not found"

**Solution**: Open a NEW PowerShell terminal or run:
```powershell
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
```

### "Error: No token found"

**Solution**: Run `vercel login` first.

### "Error: Project not linked"

**Solution**: Run `vercel link` first.

### Environment Variables Not Working

**Solution**: After adding variables, always redeploy:
```bash
vercel --prod --force
```

---

## 🎯 Alternative: Use Vercel Dashboard

If CLI gives issues, use the web interface:

1. **Deploy first** (to create the project):
   ```bash
   vercel --prod
   ```

2. **Go to Vercel Dashboard**: https://vercel.com/dashboard

3. **Select your project** → Settings → Environment Variables

4. **Add each variable**:
   - Key: `NEXT_PUBLIC_ADSENSE_CLIENT`
   - Value: `ca-pub-1190913191003622`
   - Environment: Production
   - Click Save

5. **Repeat for other variables**

6. **Redeploy** from dashboard or CLI

---

## ✅ Next Steps After Deployment

1. **Update Backend CORS**: Add your frontend URL to Flask backend
2. **Test PDF Upload**: Try uploading and processing a PDF
3. **Submit to AdSense**: Add site in AdSense dashboard
4. **Submit to Search Console**: Add property and submit sitemap
5. **Monitor**: Check Vercel dashboard for analytics and logs

---

**You're almost there!** 🚀

Run the commands above in a new PowerShell terminal.
