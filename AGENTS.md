# Ascentia Coordination Depot Instructions

This repository is the central coordination depot for Ascentia development. Start here before changing game systems, content data, editor tooling, design docs, evidence artifacts, release notes, or public claims.

## Primary Orientation

- `portfolio.html` is the cross-project control room for Ascentia, Landscry
  v0.2, Worldheart, ARPG Asset Factory, Interface Art Forge / MythicSkinForge,
  and this coordination depot.
- `portfolio-data.js` is the curated portfolio truth. Keep activity,
  capability, proof/review posture, blockers, authority, touchpoints, and next
  action separate.
- `PORTFOLIO_UPDATE_PROTOCOL.md` defines the standing closeout contract for
  material work across the named portfolio.
- `index.html` is the coordination depot: current status, workstream lanes, gates, proof posture, phase ladder, handoff cards, and gap matrix.
- `gap-data.js` is the deployable status data source for the dashboard.
- `compendium.html` and `AAA_ARPG_Compendium.md` carry broad game/design architecture.
- `designer-compendium.html` and `Designer_Compendium.md` carry Editor-facing design surfaces, screenshot posture, and handoff routes.
- `tools.html` and `Tools_Compendium.md` carry editor-external bridge posture, maturity, safety, and evidence requirements.
- `source-snapshots.html` plus the snapshot Markdown files provide public-safe source artifacts when private branch links would not be reliable.

## Workstream Lanes

Before editing, identify the lane the work belongs to:

- Game Implementation: Unreal gameplay code, Blueprints, maps, assets, and automation proof.
- Content Data: source sheets/CSV, generated DataTables, PDA overlays, registry facades, and fallback debt.
- Tools & Bridges: Landscry, Asset Factory, Skin Forge / InterfaceArtForge, Ultra Dynamic Sky, Fab / Marketplace intake, validators, and Build Doctor surfaces.
- Design Surfaces: Designer Compendium, Editor screenshots, coverage matrix, task index, and handoff docs.
- Evidence & QA: remote playtest logs, validation scripts, screenshots, link checks, source snapshots, and build reports.
- Release & Claims: Render deploys, GitHub history, public claims, release notes, compliance posture, and public artifacts.

## Coordination Rules

- Keep implementation status and proof status separate. A feature can be partially implemented while its proof is stale, missing, or only scaffold-level.
- Treat `CURRENT` proof as claim-supporting. Treat `SCAFFOLD`, `STALE`, `PLANNED`, and `MISSING` proof as debt that must be visible.
- Keep P0/P23 content spine gates ahead of broad P11-P18 content expansion.
- For third-party or editor-external tools, do not list only the tool name. Show the Ascentia bridge posture, evidence owner, maturity, and mutation safety.
- Public-facing claims need supporting evidence, last verified build, risk, and explicit blocked/unblocked state.
- Designer readiness needs screenshot status. Placeholders do not count as verified proof.
- Generated artifacts may be tracked for convenience, but source authority and freshness must stay explicit.

## Update Pattern

1. Update the governed project source artifact that explains the change.
2. Follow `PORTFOLIO_UPDATE_PROTOCOL.md` when material work changes a named
   project's focus, capability, proof, blocker, authority, touchpoint, or next
   decision. If cross-repo writing is not authorized, require its structured
   handoff payload.
3. Update `portfolio-data.js` for portfolio truth and run
   `refresh-portfolio.ps1` for ignored local Git pulse. Never infer readiness
   from Git activity.
4. Update `gap-data.js` if Ascentia status, evidence posture, gates, decisions, workstream lanes, or claim safety changed.
5. Update rendered pages or Markdown companions when navigation, source snapshots, or durable guidance changes.
6. Run local validation before committing:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\check-links.ps1
```

7. When JavaScript changes, also run a syntax/data smoke check with Node.
8. Commit only the intended dashboard/depot files. Never commit
   `portfolio-local.js`; it contains machine-local observational data.

## GitHub / Deployment

The deploy repo remote is `BTAlaska/AscentiaDashboard`. Render serves this repository as a dependency-free static site. The user deploys from committed dashboard changes unless they explicitly ask for a push or PR.
