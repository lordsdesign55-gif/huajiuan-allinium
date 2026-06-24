# Push Huajiuan Allinium to GitHub
# Run this script in PowerShell with git installed
# Set GITHUB_TOKEN environment variable before running

$repoPath = "C:\Users\Tsagaan\Documents\Open code\erxes-skills\content-plugin\headless\web\output\huajiuan-allinium"
$repoUrl = "https://github.com/lordsdesign55-gif/huajiuan-allinium.git"

Set-Location -LiteralPath $repoPath

$token = $env:GITHUB_TOKEN
if (-not $token) {
    $token = Read-Host -Prompt "Enter your GitHub token" -AsSecureString | ConvertFrom-SecureString -AsPlainText
}

# Remove any existing git history if present
if (Test-Path ".git") {
    Remove-Item -Recurse -Force ".git"
}

# Initialize fresh repo
git init
git config user.email "lordsdesign55-gif@users.noreply.github.com"
git config user.name "lordsdesign55-gif"

$authUrl = $repoUrl -replace "https://", "https://$token@"
git remote add origin $authUrl

# Stage and commit
git add .
git commit -m "Initial commit: Huajiuan Allinium website

- Next.js 15 + TypeScript + Tailwind CSS v4
- EOSS brand integration, Passive House certified
- Mongolian language content
- Services, Unitized Glass System, Gallery, Blog, Contact pages"

# Push
git push -u origin main --force

Write-Host "Repository pushed to: $repoUrl" -ForegroundColor Green
