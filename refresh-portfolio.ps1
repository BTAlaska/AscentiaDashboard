[CmdletBinding()]
param(
    [string]$AscentiaRoot = "D:\Ascentia",
    [string]$LegacyDocumentsRoot = "",
    [switch]$SkipDisk
)

$ErrorActionPreference = "Stop"
$sweepStart = Get-Date

if ([string]::IsNullOrWhiteSpace($LegacyDocumentsRoot)) {
    if (-not [string]::IsNullOrWhiteSpace($env:OneDrive)) {
        $LegacyDocumentsRoot = Join-Path $env:OneDrive "Documents"
    }
    else {
        $LegacyDocumentsRoot = [Environment]::GetFolderPath(
            [Environment+SpecialFolder]::MyDocuments
        )
    }
}

$projects = @(
    @{ Id = "ascentia"; Path = (Join-Path $AscentiaRoot "repos\game") },
    @{ Id = "dashboard"; Path = (Join-Path $AscentiaRoot "repos\dashboard") },
    @{ Id = "landscry"; Path = (Join-Path $AscentiaRoot "repos\landscry") },
    @{ Id = "worldheart"; Path = (Join-Path $AscentiaRoot "repos\worldheart") },
    @{ Id = "assetfactory"; Path = (Join-Path $AscentiaRoot "repos\asset-factory") },
    @{ Id = "interfaceforge"; Path = (Join-Path $AscentiaRoot "repos\interface-forge") },
    @{ Id = "skinforge"; Path = (Join-Path $AscentiaRoot "sandboxes\skin-forge") },
    @{ Id = "themeforge"; Path = (Join-Path $AscentiaRoot "libraries\themeforge\ThemeForge") },
    @{ Id = "pcgsheetlibrary"; Path = (Join-Path $AscentiaRoot "libraries\themeforge\PCG_Sheet_Library") },
    @{ Id = "pcgcontactsheets"; Path = (Join-Path $AscentiaRoot "libraries\themeforge\PCG Contact Sheets") }
)

function Invoke-GitText {
    param(
        [Parameter(Mandatory = $true)][string]$Repo,
        [Parameter(Mandatory = $true)][string[]]$Arguments
    )

    $previousPreference = $ErrorActionPreference
    $ErrorActionPreference = "SilentlyContinue"
    $text = (& git -c safe.directory=* -C $Repo @Arguments 2>$null | Out-String).Trim()
    $exitCode = $LASTEXITCODE
    $ErrorActionPreference = $previousPreference
    if ($exitCode -ne 0) {
        return ""
    }
    return $text
}

function Get-PortfolioGitPulse {
    param(
        [Parameter(Mandatory = $true)][string]$Id,
        [Parameter(Mandatory = $true)][string]$Path,
        [Parameter(Mandatory = $true)][string]$PathLabel
    )

    if (-not (Test-Path -LiteralPath $Path)) {
        return [ordered]@{
            id = $Id
            exists = $false
            path = $Path
            pathLabel = $PathLabel
            git = $false
        }
    }

    $gitRoot = Invoke-GitText -Repo $Path -Arguments @("rev-parse", "--show-toplevel")
    if ([string]::IsNullOrWhiteSpace($gitRoot)) {
        $item = Get-Item -LiteralPath $Path
        return [ordered]@{
            id = $Id
            exists = $true
            path = $Path
            pathLabel = $PathLabel
            git = $false
            lastWrite = $item.LastWriteTime.ToString("yyyy-MM-ddTHH:mm:ssK")
        }
    }

    $branch = Invoke-GitText -Repo $Path -Arguments @("branch", "--show-current")
    $head = Invoke-GitText -Repo $Path -Arguments @("log", "-1", "--pretty=format:%h")
    $headFull = Invoke-GitText -Repo $Path -Arguments @("log", "-1", "--pretty=format:%H")
    $date = Invoke-GitText -Repo $Path -Arguments @("log", "-1", "--date=short", "--pretty=format:%ad")
    $subject = Invoke-GitText -Repo $Path -Arguments @("log", "-1", "--pretty=format:%s")
    $upstream = Invoke-GitText -Repo $Path -Arguments @("rev-parse", "--abbrev-ref", "--symbolic-full-name", "@{upstream}")
    $statusLines = @(& git -c safe.directory=* -C $Path status --short --untracked-files=all 2>$null)
    $dirty = $statusLines.Count
    $untracked = @($statusLines | Where-Object { $_ -match "^\?\?" }).Count
    $ahead = $null
    $behind = $null

    if (-not [string]::IsNullOrWhiteSpace($upstream)) {
        $counts = (Invoke-GitText -Repo $Path -Arguments @("rev-list", "--left-right", "--count", "$upstream...HEAD")) -split "\s+"
        if ($counts.Count -ge 2) {
            $behind = [int]$counts[0]
            $ahead = [int]$counts[1]
        }
    }

    return [ordered]@{
        id = $Id
        exists = $true
        path = $Path
        pathLabel = $PathLabel
        git = $true
        branch = $branch
        head = $head
        headFull = $headFull
        date = $date
        subject = $subject
        upstream = $upstream
        dirty = $dirty
        untracked = $untracked
        ahead = $ahead
        behind = $behind
    }
}

function Get-TreeStat {
    # List-only robocopy: fast, junction-safe (/XJ avoids double counting the
    # data junctions), and immune to long-path issues. Exit code 1 = success.
    param([Parameter(Mandatory = $true)][string]$Path)

    if (-not (Test-Path -LiteralPath $Path)) { return $null }
    $out = & robocopy $Path "C:\__hygiene_null__" /L /E /BYTES /NFL /NDL /NJH /NP /XJ /R:0 /W:0 2>$null
    $bytes = $null
    $files = $null
    $bytesLine = ($out | Select-String -Pattern '^\s+Bytes :' | Select-Object -First 1)
    $filesLine = ($out | Select-String -Pattern '^\s+Files :' | Select-Object -First 1)
    if ($null -ne $bytesLine -and $bytesLine.Line -match 'Bytes :\s+(\d+)') { $bytes = [long]$Matches[1] }
    if ($null -ne $filesLine -and $filesLine.Line -match 'Files :\s+(\d+)') { $files = [long]$Matches[1] }
    if ($null -eq $bytes) { return $null }
    $item = Get-Item -LiteralPath $Path -Force
    return [ordered]@{
        path = $Path
        bytes = $bytes
        files = $files
        lastWrite = $item.LastWriteTime.ToString("yyyy-MM-dd")
    }
}

Write-Output "Portfolio refresh starting (SkipDisk: $([bool]$SkipDisk))..."

$pulse = @()
foreach ($project in $projects) {
    $pulse += Get-PortfolioGitPulse -Id $project.Id -Path $project.Path -PathLabel $project.Path
}

$alternateDashboardPath = Join-Path $AscentiaRoot "archives\dashboard-divergence\claude-clone"
$alternateDashboard = Get-PortfolioGitPulse -Id "dashboard-alternate" -Path $alternateDashboardPath -PathLabel $alternateDashboardPath

$pluginSource = Join-Path $AscentiaRoot "repos\interface-forge"
$pluginInstalled = Join-Path $AscentiaRoot "sandboxes\skin-forge\Plugins\InterfaceArtForge"
$pluginCompared = 0
$pluginDifferent = 0
$pluginMissing = 0

if ((Test-Path -LiteralPath $pluginSource) -and (Test-Path -LiteralPath $pluginInstalled)) {
    $trackedPluginFiles = @(& git -c safe.directory=* -C $pluginSource ls-files 2>$null | Where-Object {
        $_ -match "^(Source|Resources|InterfaceArtForge\.uplugin)"
    })

    foreach ($relativeFile in $trackedPluginFiles) {
        $sourceFile = Join-Path $pluginSource $relativeFile
        $installedFile = Join-Path $pluginInstalled $relativeFile
        $pluginCompared++
        if (-not (Test-Path -LiteralPath $installedFile)) {
            $pluginMissing++
            continue
        }
        if ((Get-FileHash -LiteralPath $sourceFile -Algorithm SHA256).Hash -ne
            (Get-FileHash -LiteralPath $installedFile -Algorithm SHA256).Hash) {
            $pluginDifferent++
        }
    }
}

$legacyChecks = @(
    "Unreal Projects\MythicCore",
    "Unreal Projects\MythicCore 5.3",
    "GitHub\MythicCore",
    "Backups - Mythic Core\MythicCore",
    "MythicItemSystem",
    "Ascentia Design",
    "Landscry",
    "Landscry-codex-torch"
) | ForEach-Object {
    [ordered]@{
        pathLabel = $_
        exists = Test-Path -LiteralPath (Join-Path $LegacyDocumentsRoot $_)
    }
}

$migrationManifestPath = Join-Path $AscentiaRoot "ops\migration-manifest.json"
$migrationManifest = Get-Content -LiteralPath $migrationManifestPath -Raw | ConvertFrom-Json
$migrationEntries = @($migrationManifest.entries | ForEach-Object {
    [ordered]@{
        id = $_.id
        status = $_.status
        compatibilityPathStatus = $_.compatibilityPathStatus
        rollbackSourcePath = $_.rollbackSourcePath
        updatedAt = $_.updatedAt
    }
})

$quarantines = @(
    [ordered]@{ id = "dashboard-divergence"; path = (Join-Path $AscentiaRoot "archives\dashboard-divergence"); exists = (Test-Path -LiteralPath (Join-Path $AscentiaRoot "archives\dashboard-divergence")) },
    [ordered]@{ id = "legacy-landscry"; path = (Join-Path $AscentiaRoot "archives\quarantine\landscry-legacy"); exists = (Test-Path -LiteralPath (Join-Path $AscentiaRoot "archives\quarantine\landscry-legacy")) },
    [ordered]@{ id = "legacy-mythiccore"; path = (Join-Path $AscentiaRoot "archives\quarantine\mythiccore-legacy"); exists = (Test-Path -LiteralPath (Join-Path $AscentiaRoot "archives\quarantine\mythiccore-legacy")) },
    [ordered]@{ id = "ascentia-design"; path = (Join-Path $AscentiaRoot "archives\quarantine\ascentia-design"); exists = (Test-Path -LiteralPath (Join-Path $AscentiaRoot "archives\quarantine\ascentia-design")) }
)

# --- Volumes -----------------------------------------------------------------

$volumes = [ordered]@{}
foreach ($driveName in @("C", "D")) {
    $drive = Get-PSDrive -Name $driveName -PSProvider FileSystem -ErrorAction SilentlyContinue
    if ($null -ne $drive) {
        $volumes[$driveName] = [ordered]@{
            freeBytes = [long]$drive.Free
            usedBytes = [long]$drive.Used
            totalBytes = [long]($drive.Free + $drive.Used)
        }
    }
}

# --- Disk + hygiene sweep (see D:\Ascentia\ops\ARTIFACT_HYGIENE.md) ----------

$disk = @()
$hygiene = $null

if (-not $SkipDisk) {
    $diskTargets = @(
        @{ Id = "ascentia"; Path = (Join-Path $AscentiaRoot "repos\game") },
        @{ Id = "dashboard"; Path = (Join-Path $AscentiaRoot "repos\dashboard") },
        @{ Id = "landscry"; Path = (Join-Path $AscentiaRoot "repos\landscry") },
        @{ Id = "worldheart"; Path = (Join-Path $AscentiaRoot "repos\worldheart") },
        @{ Id = "assetfactory"; Path = (Join-Path $AscentiaRoot "repos\asset-factory") },
        @{ Id = "interfaceforge"; Path = (Join-Path $AscentiaRoot "repos\interface-forge") },
        @{ Id = "skinforge"; Path = (Join-Path $AscentiaRoot "sandboxes\skin-forge") },
        @{ Id = "libraries"; Path = (Join-Path $AscentiaRoot "libraries") },
        @{ Id = "landscry-content"; Path = (Join-Path $AscentiaRoot "data\landscry-content") },
        @{ Id = "landscry-saved"; Path = (Join-Path $AscentiaRoot "data\landscry-saved") },
        @{ Id = "worldheart-output"; Path = (Join-Path $AscentiaRoot "data\worldheart-output") },
        @{ Id = "archives"; Path = (Join-Path $AscentiaRoot "archives") },
        @{ Id = "worktrees"; Path = (Join-Path $AscentiaRoot "worktrees") },
        @{ Id = "ops"; Path = (Join-Path $AscentiaRoot "ops") }
    )
    foreach ($target in $diskTargets) {
        Write-Output "  measuring $($target.Path)..."
        $stat = Get-TreeStat -Path $target.Path
        if ($null -ne $stat) {
            $disk += [ordered]@{ id = $target.Id; path = $stat.path; bytes = $stat.bytes; files = $stat.files }
        }
    }

    # Class table. Classes: cache (rebuildable, reclaimable), generated-state
    # (review before purge), artifact (open-lane outputs), evidence (protected).
    $hygieneClasses = @(
        @{ Project = "ascentia"; Rel = "repos\game\Intermediate"; Class = "cache"; Note = "UE build intermediates" },
        @{ Project = "ascentia"; Rel = "repos\game\DerivedDataCache"; Class = "cache"; Note = "UE local DDC" },
        @{ Project = "ascentia"; Rel = "repos\game\.vs"; Class = "cache"; Note = "Visual Studio index cache" },
        @{ Project = "ascentia"; Rel = "repos\game\Binaries"; Class = "cache"; Note = "Rebuilds via Build.bat; auto-signed (SAC PostBuildSteps)" },
        @{ Project = "ascentia"; Rel = "repos\game\Saved"; Class = "generated-state"; Note = "UE logs/config/autosaves - review before purge" },
        @{ Project = "landscry"; Rel = "repos\landscry\target"; Class = "cache"; Note = "cargo build cache" },
        @{ Project = "landscry"; Rel = "repos\landscry\node_modules"; Class = "cache"; Note = "npm/pnpm install cache" },
        @{ Project = "landscry"; Rel = "repos\landscry\unreal\Intermediate"; Class = "cache"; Note = "UE build intermediates" },
        @{ Project = "landscry"; Rel = "repos\landscry\unreal\Binaries"; Class = "generated-state"; Note = "Winding-fixed importer DLLs - verify clean rebuild before purge" },
        @{ Project = "landscry"; Rel = "repos\landscry\artifacts"; Class = "artifact"; Note = "Review bundles + UE window packages; active T4b lane" },
        @{ Project = "landscry"; Rel = "data\landscry-saved\DDC"; Class = "cache"; Note = "UE DerivedDataCache - largest reclaimable item" },
        @{ Project = "landscry"; Rel = "data\landscry-saved\Saved"; Class = "generated-state"; Note = "UE Saved state for the landscry host project" },
        @{ Project = "landscry"; Rel = "data\landscry-content"; Class = "evidence"; Note = "Reconstructed Content recovery evidence (unaccepted; winding gate)" },
        @{ Project = "assetfactory"; Rel = "repos\asset-factory\node_modules"; Class = "cache"; Note = "npm install cache" },
        @{ Project = "assetfactory"; Rel = "repos\asset-factory\generated"; Class = "evidence"; Note = "Evidence-bearing generation record" },
        @{ Project = "assetfactory"; Rel = "repos\asset-factory\ImportQueue"; Class = "evidence"; Note = "Human-review boundary packages" },
        @{ Project = "worldheart"; Rel = "repos\worldheart\out"; Class = "evidence"; Note = "Governed append-only output; Worldheart lane only" },
        @{ Project = "worldheart"; Rel = "data\worldheart-output"; Class = "evidence"; Note = "Governed output corpus + detached snapshots" },
        @{ Project = "skinforge"; Rel = "sandboxes\skin-forge\Saved"; Class = "generated-state"; Note = "UE Saved state (147 source placeholders remain on C:)" },
        @{ Project = "skinforge"; Rel = "sandboxes\skin-forge\Intermediate"; Class = "cache"; Note = "UE build intermediates" },
        @{ Project = "skinforge"; Rel = "sandboxes\skin-forge\DerivedDataCache"; Class = "cache"; Note = "UE local DDC" }
    )

    $entries = @()
    foreach ($cls in $hygieneClasses) {
        $full = Join-Path $AscentiaRoot $cls.Rel
        $stat = Get-TreeStat -Path $full
        if ($null -ne $stat) {
            $entries += [ordered]@{
                project = $cls.Project
                path = $full
                class = $cls.Class
                bytes = $stat.bytes
                files = $stat.files
                lastWrite = $stat.lastWrite
                note = $cls.Note
            }
        }
    }

    # Scratch TTL sweep: <project>\.scratch\YYYYMMDD-<purpose>, 14-day TTL.
    $scratch = @()
    $scratchRoots = @($projects | ForEach-Object { $_.Path })
    foreach ($rootPath in $scratchRoots) {
        $scratchDir = Join-Path $rootPath ".scratch"
        if (-not (Test-Path -LiteralPath $scratchDir)) { continue }
        foreach ($child in @(Get-ChildItem -LiteralPath $scratchDir -Force -ErrorAction SilentlyContinue)) {
            $ageDays = [int]((Get-Date) - $child.LastWriteTime).TotalDays
            $childStat = $null
            if ($child.PSIsContainer) { $childStat = Get-TreeStat -Path $child.FullName }
            $bytes = 0
            if ($null -ne $childStat) { $bytes = $childStat.bytes } elseif (-not $child.PSIsContainer) { $bytes = [long]$child.Length }
            $scratch += [ordered]@{
                project = $rootPath
                path = $child.FullName
                bytes = $bytes
                ageDays = $ageDays
                overdue = ($ageDays -gt 14)
            }
        }
    }

    # Unindexed detector: strangers at the umbrella's top levels.
    $knownSets = @(
        @{ Root = $AscentiaRoot; Known = @("repos", "sandboxes", "data", "archives", "libraries", "ops", "worktrees", "README.md", "AGENTS.md") },
        @{ Root = (Join-Path $AscentiaRoot "repos"); Known = @("game", "dashboard", "landscry", "worldheart", "asset-factory", "interface-forge") },
        @{ Root = (Join-Path $AscentiaRoot "data"); Known = @("landscry-content", "landscry-saved", "worldheart-output") },
        @{ Root = (Join-Path $AscentiaRoot "sandboxes"); Known = @("skin-forge") },
        @{ Root = (Join-Path $AscentiaRoot "archives"); Known = @("dashboard-divergence", "quarantine", "game-staged-latest", "samples-parking") }
    )
    $unindexed = @()
    foreach ($set in $knownSets) {
        if (-not (Test-Path -LiteralPath $set.Root)) { continue }
        foreach ($child in @(Get-ChildItem -LiteralPath $set.Root -Force -ErrorAction SilentlyContinue)) {
            if ($set.Known -contains $child.Name) { continue }
            $childStat = $null
            if ($child.PSIsContainer) { $childStat = Get-TreeStat -Path $child.FullName }
            $bytes = $null
            $files = $null
            if ($null -ne $childStat) { $bytes = $childStat.bytes; $files = $childStat.files }
            elseif (-not $child.PSIsContainer) { $bytes = [long]$child.Length; $files = 1 }
            $unindexed += [ordered]@{
                path = $child.FullName
                bytes = $bytes
                files = $files
                lastWrite = $child.LastWriteTime.ToString("yyyy-MM-dd")
                note = "NEW - not in the portfolio manifest or known layout; index it or remove it"
            }
        }
    }
    # Manifest-recorded but unaudited provenance: keep them visible until an owner call.
    foreach ($recorded in @("archives\game-staged-latest", "archives\samples-parking")) {
        $full = Join-Path $AscentiaRoot $recorded
        $stat = Get-TreeStat -Path $full
        if ($null -ne $stat) {
            $unindexed += [ordered]@{
                path = $full
                bytes = $stat.bytes
                files = $stat.files
                lastWrite = $stat.lastWrite
                note = "Recorded in migration manifest as pre-existing provenance, not audited - needs an owner call"
            }
        }
    }

    # Legacy C:\tmp pipeline roots (v0.1-era session tooling; user decision to retire).
    $legacyTmp = @()
    foreach ($tmpPath in @("C:\tmp\worldgen", "C:\tmp\biomes", "C:\tmp\geo", "C:\tmp\themes")) {
        if (Test-Path -LiteralPath $tmpPath) {
            $stat = Get-TreeStat -Path $tmpPath
            if ($null -ne $stat) {
                $legacyTmp += [ordered]@{ path = $tmpPath; bytes = $stat.bytes; files = $stat.files; lastWrite = $stat.lastWrite }
            }
        }
    }

    $cacheBytes = [long]0
    $reviewBytes = [long]0
    $evidenceBytes = [long]0
    foreach ($entry in $entries) {
        if ($entry.class -eq "cache") { $cacheBytes += $entry.bytes }
        elseif ($entry.class -eq "evidence") { $evidenceBytes += $entry.bytes }
        else { $reviewBytes += $entry.bytes }
    }

    $hygiene = [ordered]@{
        scannedAt = (Get-Date).ToUniversalTime().ToString("o")
        policyPath = (Join-Path $AscentiaRoot "ops\ARTIFACT_HYGIENE.md")
        rule = "Measured report only. Nothing is auto-deleted; deletions need explicit user approval in the owning project's lane."
        entries = $entries
        scratch = $scratch
        unindexed = $unindexed
        legacyTmp = $legacyTmp
        totals = [ordered]@{
            cacheBytes = $cacheBytes
            reviewBytes = $reviewBytes
            evidenceBytes = $evidenceBytes
        }
    }
}

$payload = [ordered]@{
    generatedAt = (Get-Date).ToUniversalTime().ToString("o")
    source = "Local filesystem and Git pulse; not capability or proof evidence"
    sweepSeconds = [int]((Get-Date) - $sweepStart).TotalSeconds
    volumes = $volumes
    projects = $pulse
    disk = $disk
    hygiene = $hygiene
    observations = [ordered]@{
        alternateDashboard = $alternateDashboard
        interfacePluginCopy = [ordered]@{
            source = $pluginSource
            installed = $pluginInstalled
            compared = $pluginCompared
            different = $pluginDifferent
            missing = $pluginMissing
        }
        legacyPaths = $legacyChecks
        quarantines = $quarantines
        migration = [ordered]@{
            manifest = $migrationManifestPath
            status = $migrationManifest.status
            updatedAt = $migrationManifest.updatedAt
            sourceRetirementAuthorized = $migrationManifest.sourceRetirementAuthorized
            entries = $migrationEntries
        }
    }
}

$json = $payload | ConvertTo-Json -Depth 9
$javascript = "window.PORTFOLIO_LOCAL = $json;`n"
$outputPath = Join-Path $PSScriptRoot "portfolio-local.js"
$utf8 = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($outputPath, $javascript, $utf8)

Write-Output "Portfolio pulse refreshed: $outputPath"
Write-Output "Projects observed: $($pulse.Count)"
if (-not $SkipDisk) {
    Write-Output "Disk roots measured: $($disk.Count); hygiene entries: $($hygiene.entries.Count)"
}
Write-Output "Sweep seconds: $($payload.sweepSeconds)"
Write-Output "Generated UTC: $($payload.generatedAt)"
exit 0
