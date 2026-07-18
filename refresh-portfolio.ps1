[CmdletBinding()]
param(
    [string]$AscentiaRoot = "D:\Ascentia",
    [string]$LegacyDocumentsRoot = ""
)

$ErrorActionPreference = "Stop"

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

$payload = [ordered]@{
    generatedAt = (Get-Date).ToUniversalTime().ToString("o")
    source = "Local filesystem and Git pulse; not capability or proof evidence"
    projects = $pulse
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

$json = $payload | ConvertTo-Json -Depth 8
$javascript = "window.PORTFOLIO_LOCAL = $json;`n"
$outputPath = Join-Path $PSScriptRoot "portfolio-local.js"
$utf8 = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($outputPath, $javascript, $utf8)

Write-Output "Portfolio pulse refreshed: $outputPath"
Write-Output "Projects observed: $($pulse.Count)"
Write-Output "Generated UTC: $($payload.generatedAt)"
