# Copies the dashboard from its source of truth (the Ascentia project) into
# this deploy-mirror repo. Review with git diff, then commit + push to deploy.
$src = "C:\Users\TarrT\OneDrive\Documents\Unreal Projects\Ascentia\Docs\GapDashboard"
$dst = Split-Path -Parent $MyInvocation.MyCommand.Path

foreach ($f in @('index.html', 'gap-data.js', 'serve.ps1')) {
    Copy-Item (Join-Path $src $f) (Join-Path $dst $f) -Force
    Write-Host "synced $f"
}
git -C $dst status --short
