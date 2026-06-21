# Validates local dashboard links. Use -CheckPublic to also test http(s) links.
param(
    [switch]$CheckPublic
)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$pages = @(
    'index.html',
    'compendium.html',
    'designer-compendium.html',
    'tools.html',
    'source-snapshots.html'
)
$errors = New-Object System.Collections.Generic.List[string]

function Get-Ids([string]$Html) {
    $ids = New-Object System.Collections.Generic.HashSet[string]
    foreach ($match in [regex]::Matches($Html, 'id="([^"]+)"')) {
        [void]$ids.Add($match.Groups[1].Value)
    }
    return $ids
}

function Test-LocalLink([string]$From, [string]$Href) {
    if ($Href -eq '' -or $Href.StartsWith('mailto:')) { return }
    if ($Href.StartsWith('http://') -or $Href.StartsWith('https://')) { return }

    $parts = $Href.Split('#', 2)
    $target = $parts[0]
    $anchor = if ($parts.Count -eq 2) { $parts[1] } else { '' }

    if ($target -eq '') {
        $target = $From
    }

    $targetPath = Join-Path $root $target
    if (-not (Test-Path -LiteralPath $targetPath -PathType Leaf)) {
        $errors.Add("$From -> missing file: $Href")
        return
    }

    if ($anchor -ne '') {
        $html = Get-Content -Raw -Path $targetPath
        $ids = Get-Ids $html
        if (-not $ids.Contains($anchor)) {
            $errors.Add("$From -> missing anchor: $Href")
        }
    }
}

function Test-PublicLink([string]$From, [string]$Href) {
    if (-not ($Href.StartsWith('http://') -or $Href.StartsWith('https://'))) { return }
    try {
        $response = Invoke-WebRequest -Uri $Href -Method Head -MaximumRedirection 5 -TimeoutSec 15
        if ([int]$response.StatusCode -ge 400) {
            $errors.Add("$From -> HTTP $($response.StatusCode): $Href")
        }
    } catch {
        $errors.Add("$From -> public link failed: $Href ($($_.Exception.Message))")
    }
}

foreach ($page in $pages) {
    $path = Join-Path $root $page
    if (-not (Test-Path -LiteralPath $path -PathType Leaf)) {
        $errors.Add("missing page: $page")
        continue
    }

    $html = Get-Content -Raw -Path $path
    $linkHtml = [regex]::Replace(
        $html,
        '<script[\s\S]*?</script>',
        '',
        [System.Text.RegularExpressions.RegexOptions]::IgnoreCase
    )
    foreach ($match in [regex]::Matches($linkHtml, 'href="([^"]+)"')) {
        $href = $match.Groups[1].Value
        Test-LocalLink $page $href
        if ($CheckPublic) { Test-PublicLink $page $href }
    }
}

if ($errors.Count -gt 0) {
    $errors | ForEach-Object { Write-Error $_ }
    exit 1
}

Write-Host "Link check passed for $($pages.Count) pages."
