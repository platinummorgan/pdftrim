#!/usr/bin/env pwsh
# Vercel Environment Variables Setup Script
# Run this from: d:\Dev\pdf_trimmer\frontend

Write-Host "================================================" -ForegroundColor Cyan
Write-Host "  Vercel Environment Variables Setup" -ForegroundColor Cyan
Write-Host "  PDF Book Page Trimmer - Frontend" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# Check if Vercel CLI is installed
Write-Host "Checking Vercel CLI installation..." -ForegroundColor Yellow
$vercelInstalled = Get-Command vercel -ErrorAction SilentlyContinue

if (-not $vercelInstalled) {
    Write-Host "❌ Vercel CLI not found!" -ForegroundColor Red
    Write-Host "Installing Vercel CLI..." -ForegroundColor Yellow
    npm install -g vercel
    Write-Host "✅ Vercel CLI installed!" -ForegroundColor Green
    Write-Host ""
}
else {
    Write-Host "✅ Vercel CLI is installed" -ForegroundColor Green
    Write-Host ""
}

# Ensure we're in the frontend directory
$currentDir = Get-Location
if ($currentDir -notlike "*frontend") {
    Write-Host "⚠️  Not in frontend directory. Navigating..." -ForegroundColor Yellow
    Set-Location -Path "d:\Dev\pdf_trimmer\frontend"
    Write-Host "✅ Now in: $(Get-Location)" -ForegroundColor Green
    Write-Host ""
}

# Environment variables to set
$envVars = @{
    "NEXT_PUBLIC_ADSENSE_CLIENT" = "ca-pub-1190913191003622"
    "NEXT_PUBLIC_API_URL" = "https://pdftrim-bftezys2s-michaels-projects-4c786e88.vercel.app"
}

Write-Host "================================================" -ForegroundColor Cyan
Write-Host "  Environment Variables to Add:" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
foreach ($key in $envVars.Keys) {
    Write-Host "  $key = $($envVars[$key])" -ForegroundColor White
}
Write-Host ""

# Ask for confirmation
Write-Host "Do you want to add these environment variables to Vercel?" -ForegroundColor Yellow
Write-Host "[Y] Yes  [N] No  (default is Y): " -NoNewline -ForegroundColor Yellow
$confirmation = Read-Host
if ($confirmation -eq "" -or $confirmation -eq "Y" -or $confirmation -eq "y") {
    Write-Host ""
    Write-Host "Adding environment variables to Vercel..." -ForegroundColor Green
    Write-Host ""

    # Add each environment variable
    foreach ($key in $envVars.Keys) {
        $value = $envVars[$key]
        Write-Host "Adding $key..." -ForegroundColor Yellow
        
        try {
            # Use echo to pipe value to vercel env add
            $value | vercel env add $key production
            Write-Host "  ✅ $key added successfully!" -ForegroundColor Green
        }
        catch {
            Write-Host "  ⚠️  Error adding $key : $_" -ForegroundColor Red
            Write-Host "  You can add this manually via: vercel env add $key production" -ForegroundColor Yellow
        }
        Write-Host ""
    }

    # Reminder about NEXT_PUBLIC_BASE_URL
    Write-Host "================================================" -ForegroundColor Cyan
    Write-Host "  ⚠️  IMPORTANT REMINDER" -ForegroundColor Yellow
    Write-Host "================================================" -ForegroundColor Cyan
    Write-Host "After your first deployment, add NEXT_PUBLIC_BASE_URL:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "  vercel env add NEXT_PUBLIC_BASE_URL production" -ForegroundColor White
    Write-Host "  # Then paste your Vercel URL (e.g., https://your-app.vercel.app)" -ForegroundColor Gray
    Write-Host ""

    # Verify environment variables
    Write-Host "================================================" -ForegroundColor Cyan
    Write-Host "  Verifying Environment Variables" -ForegroundColor Cyan
    Write-Host "================================================" -ForegroundColor Cyan
    Write-Host ""
    vercel env ls
    Write-Host ""

    # Ask if user wants to deploy now
    Write-Host "Do you want to deploy to Vercel now?" -ForegroundColor Yellow
    Write-Host "[Y] Yes  [N] No  (default is N): " -NoNewline -ForegroundColor Yellow
    $deployNow = Read-Host
    if ($deployNow -eq "Y" -or $deployNow -eq "y") {
        Write-Host ""
        Write-Host "Deploying to Vercel (production)..." -ForegroundColor Green
        vercel --prod
        Write-Host ""
        Write-Host "================================================" -ForegroundColor Cyan
        Write-Host "  ✅ Deployment Complete!" -ForegroundColor Green
        Write-Host "================================================" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Next steps:" -ForegroundColor Yellow
        Write-Host "  1. Note your Vercel URL from the deployment output above" -ForegroundColor White
        Write-Host "  2. Add NEXT_PUBLIC_BASE_URL with that URL:" -ForegroundColor White
        Write-Host "     vercel env add NEXT_PUBLIC_BASE_URL production" -ForegroundColor Gray
        Write-Host "  3. Redeploy: vercel --prod" -ForegroundColor White
        Write-Host "  4. Update backend CORS to allow your frontend domain" -ForegroundColor White
        Write-Host "  5. Submit to AdSense!" -ForegroundColor White
        Write-Host ""
    }
    else {
        Write-Host ""
        Write-Host "Environment variables added! Deploy when ready with:" -ForegroundColor Green
        Write-Host "  vercel --prod" -ForegroundColor White
        Write-Host ""
    }
}
else {
    Write-Host ""
    Write-Host "Setup cancelled. You can add variables manually with:" -ForegroundColor Yellow
    Write-Host "  vercel env add VARIABLE_NAME production" -ForegroundColor White
    Write-Host ""
}

Write-Host "================================================" -ForegroundColor Cyan
Write-Host "  Setup Complete!" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Useful commands:" -ForegroundColor Yellow
Write-Host "  vercel env ls              # List all environment variables" -ForegroundColor White
Write-Host "  vercel env pull            # Download variables to .env file" -ForegroundColor White
Write-Host "  vercel --prod              # Deploy to production" -ForegroundColor White
Write-Host "  vercel logs --prod         # View production logs" -ForegroundColor White
Write-Host ""
