# Ascentia — AAA Gap Dashboard

Live status board for **Ascentia** (UE 5.8 open-world Soulslike) measured against
the AAA open-world ARPG bar (Elden Ring benchmark + PoE/D4 itemization goal).
134 features across 12 categories, each rated have / partial / missing with a
plan badge (P11/P12 phase plan, backlog, designed-in-xlsx, Landscry, unplanned).

**Live:** https://ascentiadashboard.onrender.com

## How this repo works

This is a **deploy mirror** — a dependency-free static site (no build step).
Render serves the repo root; every push to `main` auto-deploys.

The **source of truth** lives in the Ascentia project:
`Ascentia\Docs\GapDashboard\` (alongside `Docs/Feature_Gap_Analysis_2026-06-12.md`
and the code-review fix log, which track the same statuses in prose).

### Updating a status

1. Edit `gap-data.js` in the **Ascentia** copy — set a feature's `s` field
   (`have | partial | missing`), adjust its note, bump `GAP_META.updated`.
   Keep the gap-analysis doc + fix log in sync.
2. Run `.\sync-from-ascentia.ps1` here (copies the dashboard files over).
3. Commit + push → Render redeploys.

### Running locally

Open `index.html` directly, or `.\serve.ps1` → http://localhost:8765.

## Files

| File | Purpose |
|---|---|
| `index.html` | The dashboard (vanilla HTML/CSS/JS, no dependencies) |
| `gap-data.js` | All feature statuses — the only file that changes routinely |
| `serve.ps1` | Optional local server (TcpListener, no admin needed) |
| `sync-from-ascentia.ps1` | Pulls the latest copy from the Ascentia project |
| `render.yaml` | Render blueprint (static site, publish root) |
