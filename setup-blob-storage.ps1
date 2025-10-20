#!/usr/bin/env pwsh

Write-Host "Setting up Vercel Blob Storage..." -ForegroundColor Green
Write-Host ""
Write-Host "Steps to complete setup:" -ForegroundColor Yellow
Write-Host "1. Go to https://vercel.com/dashboard" -ForegroundColor White
Write-Host "2. Select your 'pdftrim' project" -ForegroundColor White
Write-Host "3. Go to Storage tab" -ForegroundColor White
Write-Host "4. Click 'Create Database' and select 'Blob'" -ForegroundColor White
Write-Host "5. Follow the prompts to create a Blob store" -ForegroundColor White
Write-Host "6. The BLOB_READ_WRITE_TOKEN will be automatically added to your project" -ForegroundColor White
Write-Host ""
Write-Host "After completing the above steps, redeploy your frontend:" -ForegroundColor Yellow
Write-Host "  npx vercel --prod" -ForegroundColor Cyan
Write-Host ""
Write-Host "The Blob token will be automatically available as an environment variable." -ForegroundColor Green
