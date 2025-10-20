#!/usr/bin/env pwsh

# Update Vercel environment variables for pdftrim frontend

Write-Host "Setting up Vercel environment variables..." -ForegroundColor Green

# Set the API URL to point to the new backend
npx vercel env add NEXT_PUBLIC_API_URL "https://pdftrim-hqe2u86kc-michaels-projects-4c786e88.vercel.app" production
npx vercel env add NEXT_PUBLIC_API_URL "https://pdftrim-hqe2u86kc-michaels-projects-4c786e88.vercel.app" preview

# Set the base URL for your custom domain
npx vercel env add NEXT_PUBLIC_BASE_URL "https://pdftrim.app" production
npx vercel env add NEXT_PUBLIC_BASE_URL "https://pdftrim.app" preview

# Set AdSense client ID
npx vercel env add NEXT_PUBLIC_ADSENSE_CLIENT "ca-pub-1190913191003622" production
npx vercel env add NEXT_PUBLIC_ADSENSE_CLIENT "ca-pub-1190913191003622" preview

Write-Host "Environment variables updated. Now deploying with new configuration..." -ForegroundColor Green

# Redeploy to apply the environment variables
npx vercel --prod

Write-Host "Deployment complete!" -ForegroundColor Green
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Go to your Vercel dashboard" -ForegroundColor White
Write-Host "2. Add your custom domain 'pdftrim.app' to this project" -ForegroundColor White  
Write-Host "3. Update your DNS to point to Vercel" -ForegroundColor White