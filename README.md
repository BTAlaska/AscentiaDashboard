# Ascentia — AAA Gap Dashboard

Live status board for **Ascentia** (UE 5.8 open-world Soulslike) measured against
the AAA open-world ARPG bar (Elden Ring benchmark + PoE/D4 itemization goal).
134 features across 12 categories, each rated have / partial / missing with a
plan badge (P11/P12 phase plan, backlog, designed-in-xlsx, Landscry, unplanned).

**Live:** https://ascentiadashboard.onrender.com

## How this repo works

This is a **deploy mirror** — a dependency-free static site (no build step).
Render serves the repo root; every push to `main` auto-deploys.

The status source of truth is shared:

- tracked prose/status docs in the Ascentia project, especially
  `Docs/README.md`, `Docs/Ascentia_MVP_Phases.md`,
  `Docs/Ascentia_Designer_Systems_Plan.md`, and
  `Docs/Feature_Gap_Analysis_2026-06-12.md`
- this repo's `gap-data.js`, which is the deployable dashboard data

The Ascentia project may also have an ignored local dashboard copy
(`gap-data.js`, `index.html`, `serve.ps1`, and/or `Docs/GapDashboard/`) for
local serving, but those files are not tracked in the game repo.

### Updating a status

1. Update the tracked Ascentia docs that explain the status change.
2. Edit `gap-data.js` here: set a feature's `s` field
   (`have | partial | missing`), adjust its note, bump `GAP_META.updated`, and
   keep progress-history totals coherent.
3. Optionally copy the dashboard files back into the ignored Ascentia local
   dashboard copy for local serving.
4. Commit + push this repo; Render redeploys.

### Running locally

Open `index.html` directly, or `.\serve.ps1` → http://localhost:8765.

## Files

| File | Purpose |
|---|---|
| `index.html` | The dashboard (vanilla HTML/CSS/JS, no dependencies) |
| `gap-data.js` | All feature statuses — the only file that changes routinely |
| `serve.ps1` | Optional local server (TcpListener, no admin needed) |
| `sync-from-ascentia.ps1` | Legacy helper for pulling an intentionally refreshed ignored local Ascentia dashboard copy |
| `render.yaml` | Render blueprint (static site, publish root) |
