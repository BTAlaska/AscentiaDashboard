# Serves the gap dashboard at http://localhost:<Port>/ (Ctrl+C to stop).
# TcpListener-based: no admin rights / URL ACLs needed, PowerShell 5.1 compatible.
# The dashboard also works without any server - just open index.html directly.
param(
    [int]$Port = 8765,
    [switch]$NoBrowser
)

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$listener = New-Object System.Net.Sockets.TcpListener([System.Net.IPAddress]::Loopback, $Port)
$listener.Start()
Write-Host "Serving $root"
Write-Host "  -> http://localhost:$Port/   (Ctrl+C to stop)"
if (-not $NoBrowser) { Start-Process "http://localhost:$Port/" }

$mime = @{
    '.html' = 'text/html; charset=utf-8'
    '.js'   = 'text/javascript; charset=utf-8'
    '.css'  = 'text/css; charset=utf-8'
    '.json' = 'application/json; charset=utf-8'
    '.png'  = 'image/png'
    '.svg'  = 'image/svg+xml'
    '.ico'  = 'image/x-icon'
}
$resolvedRoot = (Resolve-Path $root).Path

try {
    while ($true) {
        $client = $listener.AcceptTcpClient()
        try {
            $stream = $client.GetStream()
            $reader = New-Object System.IO.StreamReader($stream)
            $requestLine = $reader.ReadLine()
            while ($true) { $line = $reader.ReadLine(); if ($null -eq $line -or $line -eq '') { break } }

            $path = '/'
            if ($requestLine -match '^(GET|HEAD)\s+(\S+)') { $path = $Matches[2].Split('?')[0] }
            if ($path -eq '/') { $path = '/index.html' }
            $file = Join-Path $root ([uri]::UnescapeDataString($path).TrimStart('/').Replace('/', '\'))

            $ok = Test-Path $file -PathType Leaf
            if ($ok) { $ok = (Resolve-Path $file).Path.StartsWith($resolvedRoot) }  # no path escapes

            if ($ok) {
                $bytes = [System.IO.File]::ReadAllBytes($file)
                $ext = [System.IO.Path]::GetExtension($file).ToLower()
                $ct = $mime[$ext]; if (-not $ct) { $ct = 'application/octet-stream' }
                $header = "HTTP/1.1 200 OK`r`nContent-Type: $ct`r`nContent-Length: $($bytes.Length)`r`nCache-Control: no-cache`r`nConnection: close`r`n`r`n"
            } else {
                $bytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $path")
                $header = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain`r`nContent-Length: $($bytes.Length)`r`nConnection: close`r`n`r`n"
            }
            $hb = [System.Text.Encoding]::ASCII.GetBytes($header)
            $stream.Write($hb, 0, $hb.Length)
            if ($requestLine -notmatch '^HEAD') { $stream.Write($bytes, 0, $bytes.Length) }
            $stream.Flush()
        } catch { } finally { $client.Close() }
    }
} finally {
    $listener.Stop()
}
