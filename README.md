# Mythic Systems / Ascentia - Coordination Depot

Portfolio control room for **Ascentia**, Landscry v0.2, Worldheart, ARPG Asset
Factory, and Interface Art Forge / MythicSkinForge, plus the detailed central
coordination depot for **Ascentia** (UE 5.8 open-world Soulslike):
game implementation, content data, editor-external tooling, designer surfaces,
evidence, release readiness, and decision governance all roll up here. Tracked
features are rated have / partial / missing with a plan badge and an independent
proof status. P0/P23 gates content spine, evidence, screenshots, decisions,
source links, and public claims before large P11-P18 content expansion.

**Live:** https://ascentiadashboard.onrender.com

## How this repo works

This is a **deploy mirror** — a dependency-free static site (no build step).
Render serves the repo root; every push to `main` auto-deploys.

The companion references are available as separate static pages:

- `portfolio.html` - portfolio-level authority, current focus, capability,
  proof boundary, blockers, next actions, and narrow integration touchpoints
- `index.html` - coordination depot / status view
- `compendium.html` - Ascentia Compendium with linked table of contents
- `designer-compendium.html` - Designer Compendium with the current Editor
  surface map, native-only stops, screenshot status, and custom tool candidates
- `tools.html` - Tools bridge map for Landscry, Asset Factory, Skin Forge /
  InterfaceArtForge, Ultra Dynamic Sky, and Fab / Marketplace intake
- `source-snapshots.html` - public static source snapshot index used instead
  of private GitHub branch links
- `AAA_ARPG_Compendium.md` - source Markdown for the rendered compendium page
- `Designer_Compendium.md` - source Markdown for the rendered Designer
  Compendium page
- `Tools_Compendium.md` - source Markdown for the rendered Tools bridge page
- `AGENTS.md` - repo guidance directing agents to use this dashboard as the
  central coordination depot
- `PORTFOLIO_UPDATE_PROTOCOL.md` - standing closeout instruction for material
  work across the named project portfolio

The status source of truth is shared:

- tracked prose/status docs in the Ascentia project, especially
  `Docs/README.md`, `Docs/Ascentia_MVP_Phases.md`,
  `Docs/Ascentia_Designer_Systems_Plan.md`, and
  `Docs/Feature_Gap_Analysis_2026-06-12.md`
- designer-surface docs in the Ascentia project under
  `Docs/DesignerSurfaces` on the current Designer Compendium branch
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
4. Run `powershell -NoProfile -ExecutionPolicy Bypass -File .\check-links.ps1`
   before committing. Add `-CheckPublic` when public HTTP links should be checked.
5. Commit + push this repo; Render redeploys.

### Running locally

Open `portfolio.html` directly, or `.\serve.ps1` and visit
http://localhost:8765/portfolio.html.

To refresh machine-local Git pulse before opening the portfolio page:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\refresh-portfolio.ps1
```

The generated `portfolio-local.js` is ignored. It is observational local data,
not capability or proof evidence.

## Files

| File | Purpose |
|---|---|
| `portfolio.html` | Cross-project portfolio control room |
| `portfolio-data.js` | Curated portfolio truth and survey baseline |
| `refresh-portfolio.ps1` | Refreshes ignored local Git pulse for this machine |
| `PORTFOLIO_UPDATE_PROTOCOL.md` | Standing portfolio update and handoff contract |
| `index.html` | The central coordination depot and status dashboard (vanilla HTML/CSS/JS, no dependencies) |
| `compendium.html` | The rendered Ascentia Compendium, including anchored headings and a filterable table of contents |
| `designer-compendium.html` | The rendered Designer Compendium, including Editor surface map, task routing, and custom tool candidates |
| `tools.html` | The rendered Tools bridge map for editor-external tool posture, evidence, and promotion gates |
| `source-snapshots.html` | Static public source snapshot index for dashboard trust links |
| `AAA_ARPG_Compendium.md` | Source Markdown for the rendered compendium |
| `Designer_Compendium.md` | Source Markdown for the rendered Designer Compendium |
| `Tools_Compendium.md` | Source Markdown for the rendered Tools bridge page |
| `AGENTS.md` | Agent guidance for keeping dashboard coordination, evidence, and source posture aligned |
| `DesignerSurface_Coverage_Matrix_Snapshot.md` | Static public snapshot of Designer surface coverage posture |
| `Designer_Task_Index_Snapshot.md` | Static public snapshot of Designer task routes |
| `gap-data.js` | All feature statuses — the only file that changes routinely |
| `serve.ps1` | Optional local server (TcpListener, no admin needed) |
| `check-links.ps1` | Local/static link checker, with optional public HTTP checking |
| `sync-from-ascentia.ps1` | Legacy helper for pulling an intentionally refreshed ignored local Ascentia dashboard copy |
| `render.yaml` | Render blueprint (static site, publish root) |
