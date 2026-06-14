# Legacy helper: copies an ignored local dashboard copy from the Ascentia project
# into this deploy-mirror repo. Use only when that local copy was deliberately
# refreshed. The tracked Ascentia docs plus this repo's gap-data.js are the
# durable source of truth.
$src = "C:\Users\TarrT\OneDrive\Documents\Unreal Projects\Ascentia\Docs\GapDashboard"
$dst = Split-Path -Parent $MyInvocation.MyCommand.Path

if (-not (Test-Path $src)) {
    Write-Error "Ascentia local dashboard copy not found at $src. Update gap-data.js in this repo and the tracked Ascentia docs instead."
    exit 1
}

foreach ($f in @('index.html', 'gap-data.js', 'serve.ps1')) {
    Copy-Item (Join-Path $src $f) (Join-Path $dst $f) -Force
    Write-Host "synced $f"
}
git -C $dst status --short
