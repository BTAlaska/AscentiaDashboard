// Curated portfolio truth. Git pulse is overlaid from optional portfolio-local.js.
// Do not turn activity into a completion claim: capability and proof are separate.
window.PORTFOLIO_DATA = {
  meta: {
    title: 'Mythic Systems',
    subtitle: 'Portfolio control room for Ascentia and its independent creation tools',
    surveyed: '2026-07-19',
    rule: 'No global completion percentage. Report activity, capability, proof, blockers, and the next decision separately.',
  },
  priorities: [
    {
      level: 'review',
      title: 'Leave C: behind — retirement readiness is on this page',
      body: 'Ratified direction (2026-07-18): the portfolio is wholly D:/Ascentia plus its GitHub repos. The Retirement readiness section below classifies every old C: source as retire-ready (junction-covered, awaiting per-entry approval) or blocked with a named reason (skin-forge 147 cloud-only Saved files, landscry winding gate, worldheart file locker, game .vs indexes, quarantine placeholder families). Retirement stays a per-entry, user-approved, verified pass.',
      owner: 'User decision / Portfolio',
    },
    {
      level: 'active',
      title: 'S1 sediment lane: eleven slices — your call landed, and the rock is real now',
      body: 'You chose A with S8 before SED-07 — your sequencing argument was right and is recorded. S8 v1 is shipped: a real structural lithology model (dipping, folded strata anchored in world space, eight rock classes from cliff-formers to shales) replaces the elevation-band stand-in, so hard and soft units now cut across contours and differential erosion carves benches and cliff-formers. Honest verdict from the re-run calibration: family-envelope medians are statistically unchanged — real lithology is calibration-neutral at defaults, its value is the structural texture itself (and a larger rockfall share as faces steepen). Labels stay provisional per your A. The remaining A-item is SED-07 tiled flagship (prompt below)',
      owner: 'User decision (retirement A/B/C) / Landscry S1 lane',
    },
    {
      level: 'review',
      title: 'Close the two human-facing world gates',
      body: 'Landscry T4b needs final terrain/water material presentation (hand-off prompt below), then YOUR complete-world fly verdict — the deliverable is a lit flyable level for you to fly yourself. The validated mountain-region 4 km window package also waits on your water re-confirm and consumer-project choice (import prompt below). Worldheart stays in lean R50+ visual exploration until YOU (as Program Steward) call FREEZE; no prompt can close that gate.',
      owner: 'User decision (fly verdict + FREEZE) / Landscry + Worldheart',
    },
    {
      level: 'active',
      title: 'Continue Asset Factory at P1 paired-slot symmetry',
      body: 'P0 is complete, locally verified, and GitHub-current at f671a21: strict IDs, approved-root and opened-descriptor I/O, bounded contact sheets and request/reference payloads, symlink/junction/hard-link defenses, immutable locked approval snapshots, rollback-aware inbox-last publication, and expanded no-credit boundary/regression smokes. P1 paired-slot symmetry for hands, feet, and legs is now the active default priority; CharacterBase and fitting expansion remain later roadmap work.',
      owner: 'ARPG Asset Factory',
    },
    {
      level: 'review',
      title: 'Review the non-structural Game World Asset Factory results',
      body: 'Owner correction (2026-07-19): Meshy owns terrain/PCG meshes, props, and decorative attachments; Worldheart owns buildings and structural meshes. Generation is stopped and locked. The review UI now separates prompt Go from final Meshy-result acceptance: all 50 landed current-scope packages start at RESULT · NEEDS REVIEW and require an explicit Keep or Reject; the old 120-prompt go approves none of them. Twenty-nine structural packages remain historical quarantine evidence only. After the 50 result verdicts, the separate next decision is whether to prepare an exact v3 remainder.',
      owner: 'User decision (v3 remainder + candidate review) / Game World Asset Factory',
    },
    {
      level: 'review',
      title: 'Reconcile the InterfaceArtForge history split',
      body: 'GitHub main was force-replaced with a release-prep commit sharing no history with the local line that is actually vendored into the game and skin-forge — PRs are impossible until YOU pick the truth line. The hand-off prompt below carries the decision slot (A: local line is truth / B: remote release-prep is truth / C: propose a merge plan first).',
      owner: 'User decision / Interface Art Forge',
    },
    {
      level: 'active',
      title: 'Keep artifact hygiene visible',
      body: 'Every project generates caches, review bundles, and scratch. The standing law (ops/ARTIFACT_HYGIENE.md) is: declared homes or date-stamped scratch, promote-or-delete at closeout, and the Hygiene panel below reports the measured weight. Nothing is auto-deleted — the cache-reclaim hand-off below carries your approval slot.',
      owner: 'All projects / Portfolio',
    },
  ],
  // Hand-off prompts: one ready-to-paste prompt per outstanding concern,
  // written by the agent that closed the previous round. Maintenance law
  // (PORTFOLIO_UPDATE_PROTOCOL.md): at closeout, prune finished concerns and
  // author a prompt for each new one. [BRACKETED SLOTS] are for the user to
  // fill before pasting. Use String.raw so Windows paths survive verbatim.
  handoffs: [
    {
      id: 'game-world-factory-batch-review',
      title: 'Review retained world assets and decide the v3 remainder',
      target: 'User + any agent · D:\\Ascentia\\repos\\game-world-asset-factory',
      decision: true,
      why: 'The old 120-ID/v2 approval is invalid and no provider work is running. Fifty completed packages still belong to the corrected non-structural catalog, but prompt Go never accepted their final Meshy output. Each now requires a separate hash-bound Keep or Reject before the user considers any exact v3 remainder. Structural output stays quarantined and never re-enters Meshy scope.',
      prompt: String.raw`Review the retained Game World Asset Factory candidates and decide whether to authorize a v3 remainder.

MY DECISION: [choose one — (A) review only, no new generation; (B) prepare an exact non-structural Physical/Magical/Chilled remainder and credit estimate for my approval; (C) define decorative-attachment archetypes first, without provider calls]

Start in D:\Ascentia\repos\game-world-asset-factory and read AGENTS.md, docs\project-status.md, docs\generated-asset-review.md, docs\worldheart-structural-boundary.md, docs\images2-prompt-review.md, and docs\generation-go-no-go.md. Commit e2ef05d separates prompt verdicts from generated-result verdicts; commit 30567c0 establishes the ownership boundary. Meshy may create terrain/PCG meshes, freestanding props, and reviewed decorative attachments; Worldheart owns all buildings and structural modules. The v3 catalog hash is 99b25c0dca8f7b747adca8d8ac480092766353c7a3f61b29e6ad52b81893d916 with 25 archetypes and 1,125 plans. The browser at http://127.0.0.1:8790 is intentionally locked. There are 50 completed current-scope packages awaiting result review and 29 structural packages retained only as historical quarantine evidence. Prompt Go or batch approval never accepts a result. Do not delete evidence, revive old jobs, reuse the v2 approval, call providers, write into Unreal Content, or promote structural results.

For option A, select Generated result → Needs human review and Asset availability → 3D models only. Inspect Unlit texture, Neutral studio, Full screen, Open GLB, and Folder path, then record Keep or Reject plus notes. Keep means retain this exact hash-bound GLB/package as a candidate only; it does not approve Nanite, collision, PCG, Worldheart mounting, Unreal import, or production use. For option B, complete or explicitly defer that result review, then derive the exact current-catalog remainder only after subtracting successful current-scope packages; list IDs and estimated credits for user approval, then stop before creating an approval or calling providers. For option C, write a small explicit library of non-load-bearing, Worldheart-mountable attachments, add ownership tests and v3 prompts, and stop for prompt review before any approval. Run all no-credit smokes, update docs\project-status.md first, follow D:\Ascentia\repos\dashboard\PORTFOLIO_UPDATE_PROTOCOL.md, refresh the dashboard, check links/JavaScript, and sweep artifacts under D:\Ascentia\ops\ARTIFACT_HYGIENE.md.`
    },
    {
      id: 'interfaceforge-history-split',
      title: 'Resolve the InterfaceArtForge history split',
      target: 'Any agent · D:\\Ascentia\\repos\\interface-forge',
      decision: true,
      why: 'GitHub main was force-replaced with release-prep work sharing no history with the local vendored line — no PR is possible until one line is chosen.',
      prompt: String.raw`Resolve the InterfaceArtForge history split (found 2026-07-18).

Context: the local canonical repo D:\Ascentia\repos\interface-forge holds the line e59c0db -> 8a23b83 -> 34471dc -> 6370b66 (branch claude/docs-accuracy, pushed to origin). This line's plugin files are the ones actually vendored into D:\Ascentia\repos\game\Plugins\InterfaceArtForge and D:\Ascentia\sandboxes\skin-forge\Plugins\InterfaceArtForge (content-identical after newline normalization, verified 2026-07-18). But GitHub main (BTAlaska/InterfaceArtForge) was force-replaced at some point with the single commit b4dcfac "Initial Interface Art Forge plugin release prep", which adds Marketplace/, Tools/BuildFabPackage.ps1, and a ~374-line-larger Source/InterfaceArtForgeEditor/Private/InterfaceArtForgeEditor.cpp. The two histories share no common ancestor ("no history in common"), so PRs are impossible until reconciled. origin/main is already fetched locally.

MY DECISION: [pick one — (A) the local line is truth: graft the remote release-prep additions on top of it; (B) remote b4dcfac is truth: replay the local docs/sync commits onto it; (C) inspect both and propose a merge plan for my review before changing anything]

Steps: read AGENTS.md first. Diff the lines (git diff origin/main claude/docs-accuracy) and summarize what each uniquely contains before acting. Whichever direction applies, preserve BOTH lines: tag the non-chosen head (e.g. archive/pre-reconcile-20260718) and push the tag — never discard history. Build the reconciled branch, run descriptor/module/preset validation, run .\sync-vendored.ps1 -DryRun to preview vendored impact (note: a full source sync flips vendored files LF->CRLF — newline-only, but say so), push, and open a PR to main once histories connect. Close out with the Portfolio Signal per D:\Ascentia\repos\dashboard\PORTFOLIO_UPDATE_PROTOCOL.md (update the interfaceforge entry, prune this hand-off, refresh the pulse).`,
    },
    {
      id: 'retirement-approvals',
      title: 'Execute approved C: retirements',
      target: 'Any agent · D:\\Ascentia (umbrella)',
      decision: true,
      why: '8 entries are retire-ready pending your per-entry approval; retirement is verified, recorded, and never bulk.',
      prompt: String.raw`Execute approved C: source retirements (per-entry, verified, recorded).

MY APPROVAL — retire exactly these entries from the Portfolio's Retirement readiness panel: [list entry ids, e.g. dashboard, asset-factory, interface-forge, themeforge, pcg-sheet-library, pcg-contact-sheets, worldheart-worktree-family, worldheart-output-family — or write "none yet"]

In D:\Ascentia (read AGENTS.md, ops\ARTIFACT_HYGIENE.md, and the safety block in ops\migration-manifest.json first): for EACH approved entry and only those: (1) re-open its verificationReport and confirm the D: target still satisfies its recorded verify; (2) confirm the old-path junction still resolves to the D: target; (3) the retained bytes live at the recorded rollbackSourcePath (*.rollback-source-20260718-*) — delete only that directory; leave the junction in place as a path alias; (4) HAZARD to confirm per entry: these sources sit under OneDrive with sync disabled — a local deletion can propagate to the cloud if sync is ever re-enabled; never touch placeholder-bearing (cloud-only) trees, they are not in the ready set; (5) record the execution in ops\migration-manifest.json (per-entry status + note; keep the global flags truthful) and the matching ops\rollback\<entry>.json; (6) run the dashboard refresh and confirm the Retirement panel reflects the new state. Entries not in my list stay untouched. Close out with the Portfolio Signal (update this hand-off's remaining scope or prune it).`,
    },
    {
      id: 'cache-cleanup',
      title: 'Reclaim approved cache space (~37 GB measured)',
      target: 'Any agent · D:\\Ascentia (umbrella)',
      decision: true,
      why: 'The Hygiene panel measures the reclaimable caches; deletion runs only on your named approval.',
      prompt: String.raw`Reclaim approved cache space from the Portfolio Hygiene panel.

MY APPROVAL — delete exactly these cache-class paths: [list from the Hygiene panel, e.g. data\landscry-saved\DDC, repos\landscry\unreal\Intermediate, repos\game\.vs, repos\landscry\target — or write "all cache-class entries"]

In D:\Ascentia (read ops\ARTIFACT_HYGIENE.md first): delete ONLY the approved cache-class paths. Laws: repos\landscry\unreal\Binaries is generated-state, NOT cache — if I listed it, first prove a clean rebuild of the winding-fixed importer DLLs; never touch evidence/artifact/generated-state classes under a cache approval; before deleting a tree's caches confirm no editor or build is running against it (any open UE 5.8 editor blocks builds repo-wide via the Live Coding mutex); UE recreates DDC/Intermediate on demand so the directories can go entirely. Afterwards run the full refresh (refresh-portfolio.ps1) and report the reclaimed GB from the Hygiene tiles, before/after. Close out with the Portfolio Signal (update this hand-off or prune it).`,
    },
    {
      id: 'landscry-s1-sediment',
      title: 'Continue S1 (choice A): SED-07 tiled flagship sediment',
      target: 'Any agent · D:\\Ascentia\\repos\\landscry',
      decision: false,
      why: 'Owner chose A (2026-07-19) with S8 before SED-07; S8 is shipped, so the tiled flagship is the remaining A-item. Retirement labels stay provisional; that decision re-opens when the spill graph and multi-seed conditions mature.',
      prompt: String.raw`Continue the ACTIVE S1 sediment lane under the owner's recorded choice A: run SED-07, tiled >8192-cell sediment windows.

In D:\Ascentia\repos\landscry on branch agent/s1-sediment (read AGENTS.md, the lane row in D:\Ascentia\ops\PIPELINE_STATUS.md, and docs\S1_SEDIMENT_WORK_ORDER.md entries 6-7 first): the 16,384-cell full-world rung carries no sediment (manifest defers it honestly); a single pass needs ~20 GB, so the sized design is 4,096-cell tiles coupled through the EXISTING boundary-export mechanism — receivers cross tile edges along drainage, so tiles route in topological order per interval and each downstream tile ingests its upstream neighbors' per-edge-cell exports as injected supply; the summed ledger stays exact by construction (per-tile identity gains an injected term). Mind the SED-06/06b machinery: re-routing and spill receivers are per-window state — rebuild within tiles, keep the window edge ring pinned per tile, and prove the tiled 8,192 window matches the untiled one EXACTLY before touching 16,384. Laws: frozen gates green; wall/memory reported per AGENTS section 8; any commit re-keys preview identities (sub-caches survive) — export flagship before committing further; leave before/after bundles in the Studio. Close out with the Portfolio Signal per D:\Ascentia\repos\dashboard\PORTFOLIO_UPDATE_PROTOCOL.md and re-scope this hand-off (next: true spill graph re-solve, or the retirement re-visit when its conditions mature).`,
    },
    {
      id: 'landscry-t4b-materials',
      title: 'Author T4b terrain/water materials; deliver the owner fly build',
      target: 'Any agent · D:\\Ascentia\\repos\\landscry',
      decision: false,
      why: 'T4b’s open presentation gate; ends with a lit flyable level so the user can record the complete-world fly verdict.',
      prompt: String.raw`Author the T4b terrain/water material presentation and deliver the owner fly build.

In D:\Ascentia\repos\landscry (read AGENTS.md and the Landscry lane row in D:\Ascentia\ops\PIPELINE_STATUS.md first): T4b slice 04's canonical streamed world is shipped (branch agent/t1b-a-declared-boundary); the open presentation gate is the terrain/water MATERIAL pass. Task: author final terrain and water materials for the canonical streamed World Partition map. Laws and gotchas: build materials BEFORE load_level in scripted passes; REUSE existing assets — never delete+recreate; cross-section UV seams are solved with WORLD-POSITION UVs (worldXY/worldSize+0.5); keep the winding gate green when inspecting section geometry (get_section_from_static_mesh dot-product convention, CONV=-1); do not edit crates/ + Cargo + fixtures mid-build (execution identity hashes them — it forks the engine cache key); close editors before headless builds (Live Coding patch-DLL law; bypass flag is -NoHotReloadFromIDE). While in there, gather evidence and a recommendation for the open Nanite far-field HLOD vs discrete-LOD seam obligation (the decision itself stays with the owner). ALSO: your lane's untracked scripts\ue\*.py and .scratch\20260718-t4b-materials python currently FAIL scripts\verify-clean-room.mjs ("Python/Java production source"; Python is research/calibration-only per AGENTS §4) — disposition them (relocate to a dated .scratch, ledger, or reimplement) so the root gate is green. For quick terrain/water raster comparisons the browser preview loop is available (docs\PREVIEW.md; scripts\preview-world.ps1 + scripts\preview-server.ps1 on :4970). DELIVER: a lit, flyable level plus its path for me to fly myself — renders are internal verification only; my fly verdict is the T4b owner gate. Close out with the Portfolio Signal (update the landscry entry; keep this hand-off open, re-scoped to the fly verdict, until my verdict is recorded).`,
    },
    {
      id: 'mountain-region-import',
      title: 'Mountain-region 4 km: confirm and import into UE',
      target: 'Any agent · D:\\Ascentia\\repos\\landscry',
      decision: true,
      why: 'The validated 16-tile UE window package awaits your water re-confirm and a consumer-project choice.',
      prompt: String.raw`Mountain-region 4 km: import the validated window package into a UE project.

MY CONFIRMATION: the water question is settled (the chat previews were the untinted views; water_overlay shows the finger lakes). Import into: [Worldheart_Test / the landscry unreal host project / another project path]

In D:\Ascentia\repos\landscry (read AGENTS.md and the mountain-region lane row in D:\Ascentia\ops\PIPELINE_STATUS.md first): the validated 16-tile UE window package t4b-native-de1c19affdbe624b sits in artifacts\mountain-region-20260718 (225 MB, 80 artifacts, all checks green, same source identity as the review bundle). Run the import: one source round of 16 tiles + the WP MeshPartition builder with ByPackageHash reuse (verify-don't-resave definition assets) + optional HLOD pass as ONE BUILDER PROCESS PER HLOD ACTOR via -BuildSingleHLOD (labels carry the <HLODLayer>/ prefix) + inspect with the winding gate. Gotchas: editing anything under crates/ + Cargo + fixtures mid-build forks the engine cache identity; close editors before headless builds (Live Coding patch-DLL law; bypass flag is -NoHotReloadFromIDE); the terrain/water MATERIAL is still the open T4b presentation gate — this import proves geometry and streaming, not final look. Deliver a lit, flyable level plus its path for me to fly myself — renders are internal verification only. Close out with the Portfolio Signal.`,
    },
  ],
  projects: [
    {
      id: 'ascentia',
      name: 'Ascentia',
      futureName: 'Planned product name: Mythic Core',
      role: 'Main game',
      state: 'active',
      phase: 'P11/P15 — Aether external-only residue refill implemented',
      summary: 'The authoritative UE 5.8 open-world RPG. Aether remains the reward layer: ETH is spell mana, enemy attacks deposit per-cell supersaturation, casts consume charge for overcharge, and depleted residue never refills through passive field time.',
      focus: 'Preserve the proven Aether save/presentation/refill behavior and continue broader P11/P15 UI, animation, audio, and content work.',
      capability: 'The multiplayer-aware Aether field separates effective capacity from its regeneration ceiling, so authored baseline energy can recover while transient residue stays spent. Ordinary enemies and bosses share the deposit path; seeded pockets stay dormant after consumption and expose an authority-only regeneration seam for future specific environmental generators.',
      proof: 'Local game commit db4d8b7 passed the final editor build, Ascentia.Aether 20/20, and the dedicated-server two-client fixture 34/34 under 120 ms / 5% loss, including a four-second no-refill hold after two concurrent draws. GitHub publication remains blocked by tenant export policy even after explicit user approval; Codex did not bypass the safeguard.',
      blockers: [
        'Six new Unreal Content assets are intentionally ignored. Their paths, bytes, SHA-256 custody, and tracked reconstruction/audit tools are recorded in AetherContinuationSummary.md; Git publication does not itself carry those binaries.',
        'Specific environmental generator content does not exist yet; the authority-only regeneration hook is intentionally present for later authored integration.',
        'Commit db4d8b7 is one commit ahead of origin/codex/designer-compendium because tenant export policy denied the Codex push even after explicit user approval; publication requires the user-owned Git client.',
      ],
      next: 'User: run `git push origin codex/designer-compendium` from D:/Ascentia/repos/game to publish db4d8b7; otherwise continue the broader P11/P15 designer-content remainder and implement environmental generators only when their authored design exists.',
      authority: 'D:/Ascentia/repos/game',
      evidence: [
        'Docs/Evidence/Latest/AetherResidueRefillSummary.md — external-only refill decision, implementation, and validation proof',
        'Docs/Evidence/Latest/AetherContinuationSummary.md — tracked continuation proof and exact ignored-asset custody',
        'Docs/Evidence/Latest/NetworkAetherSmokeSummary.md — latest 34/34 dedicated two-client run',
        'Git HEAD db4d8b7; clean, one ahead of origin/codex/designer-compendium after the Codex push was policy-blocked',
      ],
      snapshot: { branch: 'codex/designer-compendium', head: 'db4d8b7', date: '2026-07-19', dirty: 0, ahead: 1, behind: 0 },
    },
    {
      id: 'dashboard',
      name: 'AscentiaDashboard + Designer Compendium',
      role: 'Portfolio coordination',
      state: 'review',
      phase: 'Portfolio consolidation',
      summary: 'The existing coordination depot is the correct home for the portfolio view. Its detailed game matrix, Designer Compendium, tool bridge map, decisions, proof posture, and claim gates are current again: the detailed Ascentia record was re-curated through the 2026-07-19 Aether residue decision evidence.',
      focus: 'Operate portfolio control room v2 from main with the detailed Ascentia record current; the open dashboard decision is the user-triggered Render deploy.',
      capability: 'Dependency-free local/static browser dashboard with detailed Ascentia feature data, designer routes, evidence gates, and tool bridge pages.',
      proof: 'gap-data.js was re-curated to the 2026-07-18 evidence set (commit eaade66: Aether field row, montage/layering moves, fallback-gate correction, two progress entries) with the six-page link check and Node syntax checks passing. Archived commit 93a1b208 remains preserved in the divergent clone and verified bundle after reconciliation as 4fdcd49. Render deployment remains user-owned and was not probed or claimed in this round.',
      blockers: [
        'Render requires a user-triggered manual deployment; live status is unverified for the current main.',
        'The original C: sources remain retained because source retirement is not authorized.',
      ],
      next: 'User: trigger and verify the Render deployment when ready.',
      authority: 'D:/Ascentia/repos/dashboard',
      evidence: [
        'gap-data.js re-curated to 2026-07-18 (commit eaade66); check-links.ps1 and Node syntax checks passed 2026-07-18',
        'Curation sources: AetherResidueRefillSummary.md 20/20 + external-only refill proof, NetworkAetherSmokeSummary.md 34/34, AetherContinuationSummary.md exact ignored-asset custody, NetworkEvidenceChecklist 10/10 (scoped rows noted), PublicBuildProfile.md, Swing_Whoosh_Authoring.md 152/152 bake',
        'Archived commit 93a1b208 (2026-07-07) reconciled as cherry-pick 4fdcd49 on 2026-07-18; clone + verified bundle preserved',
        'Render deployment not attempted or verified by this round; user owns the manual deploy',
      ],
      snapshot: { branch: 'main', head: 'eaade66', date: '2026-07-18', dirty: 0, ahead: 0, behind: 0 },
    },
    {
      id: 'landscry',
      name: 'Landscry v0.2',
      role: 'Authoritative initial terrain',
      state: 'active',
      phase: 'S1 sediment lane (ACTIVE) + T4b first composed world',
      summary: 'The clean-room local-first terrain compiler has crossed from contracts and native terrain proof into a canonical streamed UE 5.8 world package, an exercised packaged build, and — as of the owner\'s 2026-07-19 GO — its first real geological process lane: conservatively routed sediment with an integer-exact mass ledger.',
      focus: 'S1 sediment slices (SED-02 capacity-limited deposition next — the first terrain-reshaping slice) as the default terrain work, alongside the open T4b presentation gates, all iterated through the local Studio web app.',
      capability: 'One World Partition map with 16 partitions, 256 compiled sections, Nanite input topology, 64 far-field HLOD actors, collision, packaging, and a seven-station runtime streaming proof. New: the local Studio (apps/studio-web, loopback :4970) — size-ladder terrain builds (512..16,384 bodies + centered windows over the fixed 16,384 m world; engine custom review mode) requested from the browser, each validated as a direct offline no-model WorldRequestV2 through the canonical Rust validator, built deterministically, published with request/intent/transcript provenance, with A/B review, an orbiting 3D relief view (true-metre WebGL heightfield with draped review layers), and flagship-only Unreal package export.',
      proof: 'The D: repo passes Git, Rust, TypeScript, UE editor build, retained-package validation, and all ten junction checks. New recovery evidence rebuilt 256 sections and 64 HLODs, but two current inspections repeatably failed winding validation; cook/proof were intentionally not run. The Studio flow is browser-verified end to end (compose -> canonical validation PASS x4 -> build -> provenance served; rejection paths and traversal guards exercised); the full 512/1024/2048/4096/8192 ladder plus a 2 m window built clean. Preview sizes are presentation tooling only — custom mode carries authority custom_preview_non_fidelity and can never claim native detail or a package.',
      blockers: [
        'The reconstructed Content is new recovery evidence, not historical byte recovery, and currently fails winding inspection.',
        'Owner complete-world visual acceptance is absent.',
        'Nanite + far-field HLOD versus discrete LOD seam obligation needs a decision.',
        'Older strict-target promotion matrices remain blocked by GitHub billing/spending-limit execution failure.',
      ],
      next: 'SED-05 DEM calibration (provisional constants -> calibrated; imitation-retirement recommendation to the owner); alongside the T4b remainder: materials, fly verdict, LOD decision, close audit.',
      authority: 'D:/Ascentia/repos/landscry',
      evidence: [
        'S1/SED-01 shipped 2026-07-19 (agent/s1-sediment ee9049a, pushed): exact integer sediment ledger proven on the 2048 rung (19.44M m3 detached = 12.29M outlet-exported + 7.15M lake-delivered, balances_exactly true), sediment_flux layer in every new bundle, terrain-core 222 tests + engine 50 green, workspace pedantic clippy clean; detachment source documented provisional (SED-01b instruments true T1b erosion)',
        'S1/SED-02 shipped 2026-07-19 (agent/s1-sediment 573147d..4fd3549, pushed): capacity-limited deposition reshapes terrain — 2048 rung 11.99M m3 deposited on 1.41M cells, before/after diff 1,409,418 lifted / 0 lowered / max exactly the 1 m cap, f32 surface volume matches the integer ledger to 3 m3 in 12M; deposition_thickness layer + aggraded presentation surface disclosed in manifests; SED-02 flagship + 256-tile UE export E2E green at matching identity; terrain-core 224 tests + engine 50 green',
        'S1/SED-03 shipped 2026-07-19 (agent/s1-sediment 934d02c..4245234, pushed): subaqueous deposition — delta fronts and lake infill bounded by the water surface (2048 rung: 0.81M m3 across 19,078 lake cells, 80.3% of strong deposition at/inside lakes; ceiling proven on a 1 cm lake; full lakes spill downstream); terminal ledger detached = land + lake + exported + boundary, exact; 12 sediment tests; flagship + 256-tile UE export E2E green at matching identity; bundle schema v3',
        'S1/SED-04 shipped 2026-07-19 (agent/s1-sediment 8153998..df9bd93, pushed): hillslope creep V=KD*S*cell*T joins the ledger with an exact channel/hillslope split (2048 rung: 120.3M m3 = 19.4M + 100.8M; 97.1M land-deposited over 3.43M cells; deltas 2.7x); 14 sediment tests; flagship + export E2E green; bundle schema v4',
        'S1/SED-04b shipped 2026-07-19 (agent/s1-sediment 045d368..90423b1, pushed): repose-gated deposition + threshold rockfall (three-way exact split; land mantling -31 percent, exports 3x) + elevation-banded erodibility proxy on bedrock terms (owner-requested spatial variation; real lithology deferred to S8, disclosed); 17 sediment tests; flagship + 256-tile export E2E green; bundle schema v5',
        'S1/SED-04c shipped 2026-07-19 (agent/s1-sediment b0f4f89.., pushed): 25-interval evolution over an evolving surface (fixed routing, documented); 2048 rung moved 3,045M m3, gorges -259.5 m, aprons +24 m, 80 percent of cells lowered; cumulative ledger exact; 19 sediment tests; evolved surface published with heights_include_erosion + evolution_intervals (schema v6); flagship + export E2E green',
        'S1/SED-05 measured 2026-07-19 (agent/s1-sediment ff4813c, pushed): calibration instrument s1_sediment_calibration (T3 metric code, 18-run sweep: interval ladder + one-law x0.5/x2) + report docs/S1_SED05_CALIBRATION.md; toward-family on all sediment-ownable axes, fluvial valley floors in-envelope, fixed routing = measured binding constraint; constants retained; laws promoted as documented instrumentation only (product outputs bit-identical, 228 tests green); retirement recommendation to owner',
        'S1/SED-01b measured 2026-07-19 (agent/s1-sediment cdc7841, pushed): true trace-channel carve exported in-memory (additive wrapper, review rasters byte-identical; carve-cell count matches frozen diagnostics exactly) + probe vs sediment proxy: channel volume within 4.3 percent of the true carve but spatially uncorrelated (r -0.02, top-decile Jaccard 0.003) — right total, wrong map; carve is post-hydrology presentation vs T2-boundary sediment bed; unification rides with the re-routing follow-up (owner A-choice)',
        'S1/SED-03b shipped 2026-07-19 (agent/s1-sediment 58f071e, pushed): emergent-land reclassification — filled lake cells evolve as land, deltas emerge and prograde above the waterline (2048: lake deposition 46.0 to 41.3M m3, land deposition 1,778 to 1,800M, exports 1,221 to 1,203M); 20 sediment tests; flagship + 256-tile export E2E green at matching identity',
        'S1/SED-06 shipped 2026-07-19 (agent/s1-sediment 35116c8, pushed): re-routing between evolution intervals — land receivers re-point to the steepest lower neighbor on the evolved surface, accumulation recomputed exactly; lakes/outlets/edge pinned; sill-bounded pit ponds with overflow to the export bucket (disclosed, 966M of 1,205M m3 exports); cycle members revert to hydrology receivers; 234 core tests; schema v7; flagship + 256-tile export E2E green. Re-sweep: fluvial concavity improves at 25 intervals (0.32 vs 0.39 baseline; was 0.91 FAIL under fixed routing), fluvial local relief PASS at depth, steep-tail growth reverses',
        'S1/SED-06b shipped 2026-07-19 (agent/s1-sediment 32fc336, pushed): true spill routing — full ponds overtop along their original hydrology path, conservation closed (pit-overflow export 0.0 m3, was 966M vanishing; ponds sill-bounded 2.4M; cycle reverts 0.26 percent disclosed); 235 core tests; manifest schema v8 (pit_spilled_volume_m3); flagship + 256-tile export E2E green; final sweep: conserving concavity 0.59 warn at 25 intervals vs 0.91 FAIL under fixed routing',
        'S1/S8 v1 shipped 2026-07-19 (agent/s1-sediment af5b1c2, pushed; owner choice A recorded, S8-first sequencing accepted): structural strata erodibility — 18/205 dipping folded stack sampled in world space (windows see the same rock as the full world), 8 hash-selected rock classes, supersedes the elevation-band proxy; strata cut across contours (rockfall 216M m3 as faces steepen); manifest schema v9 (structural_strata_v1 + dip/azimuth); 236 core tests; calibration-neutral on family medians (disclosed, not overclaimed); flagship + 256-tile export E2E green',
        'T4B_FIRST_COMPOSED_WORLD_SLICE_04_2026-07-17.md',
        'Git HEAD 0d129822 at survey time',
        'Packaged proof: 7/7 stations, streaming/collision report passed',
        'docs/PREVIEW.md + agent/preview-loop f728d50..a25e5cf (pushed 2026-07-18/19): local Studio, custom review mode, 19/19 app tests, engine 50/50 lib tests, browser-verified request-to-provenance cycle',
        'Flagship Unreal export E2E-proven 2026-07-19: 256-tile complete-world package at matching engine revision, package-validation green (complete_world_acceptance and unreal_import_exercised honestly false), 87 s warm; revision-mismatch guard exercised on a real fork',
      ],
      snapshot: { branch: 'agent/s1-sediment', head: 'af5b1c2', date: '2026-07-19', dirty: 6, ahead: 0, behind: 0 },
    },
    {
      id: 'worldheart',
      name: 'Worldheart',
      role: 'World composition + architecture',
      state: 'active',
      phase: 'WH-WO-0020 — thematic dressing asset factory R0',
      summary: 'Worldheart is now actively producing deterministic non-Unreal Master Architect building previews. R49 froze the first bounded synthetic technical witness; R50+ is a deliberately fast visual-development sequence, not a gate-acceptance sequence.',
      focus: 'Strengthen visible Mythic Core architectural identity through exact generated mesh while keeping typed non-AI inputs and lightweight catastrophic-integrity checks.',
      capability: 'Frozen R49 produced a 244-component semantic civic-hall mesh, pack, receipt, and four exact-mesh reviews. Its focused tests, independent replay, and 333/333 full suite passed at the recorded revision.',
      proof: 'The governed D: migration preserved the exact dirty/untracked state, worktrees, output, seven detached snapshots, and append-only evidence. The 13 focused WH-WO-0020 tests, local HTTP smoke, Node syntax, and diff check pass; no full suite or gate promotion was performed and G01 remains RED.',
      blockers: [
        'Human architecture, aesthetic, culture, engineering, and production acceptance are absent.',
        'No Unreal consumption is authorized for the active work order.',
        'G01 remains RED and migration verification supplies no missing human acceptance.',
        'Current visual rounds are intentionally not claim-bearing evidence packs.',
        'Branch intentionally has no upstream during R50+ visual rounds; the WH-WO-0020 dressing-factory source and governed candidate records remain dirty/untracked and separate from the landed doc-only commit.',
      ],
      next: 'Continue WH-WO-0020 only within its focused-test boundary; do not run a full suite, rebuild evidence, resolve gates, or claim Unreal acceptance without a governing work order.',
      authority: 'D:/Ascentia/repos/worldheart',
      evidence: [
        'Git HEAD 3938c0b: Portfolio Signal and D: migration docs committed separately without touching dressing-factory state',
        'WH-WO-0020_THEMATIC_DRESSING_ASSET_FACTORY_R0.md',
        'WH-HANDOFF-0020_MASTER_ARCHITECT_BUILDING_R49.md',
        'Ignored review outputs r50, r51, and r52 existed at survey time',
      ],
      snapshot: { branch: 'codex/master-architect-visual-r50', head: '3938c0b', date: '2026-07-18', dirty: 18, ahead: null, behind: null },
    },
    {
      id: 'assetfactory',
      name: 'ARPG Asset Factory',
      role: 'Game-ready equipment pipeline',
      state: 'active',
      phase: 'P1 — paired-slot symmetry',
      summary: 'The standalone equipment pipeline has a published P0 boundary-hardening pass and now advances to paired-slot symmetry while preserving ImportQueue as the human-review boundary and never writing into Unreal Content.',
      focus: 'Implement the P1 paired-slot contract: one right-side source for hands and feet becomes a deterministic mirrored pair, while legs declare paired-output semantics explicitly.',
      capability: 'Strict asset IDs, approved-root and same-descriptor file access, bounded image/request/reference handling, junction/symlink/hard-link rejection, exact Fitting Room evidence identity, per-asset locks, immutable approval snapshots, and rollback-aware inbox-last publication are implemented.',
      proof: 'P0 commit f671a21 is pushed and matches origin/main. The build and expanded security/no-credit regression suite passed, including traversal, external ImportQueue, decoded/encoded image limits, deterministic rollback, same-ID regeneration/reapproval, Blender development smoke, and Meshy official no-credit test mode.',
      blockers: [],
      next: 'Continue at P1 paired-slot symmetry; keep CharacterBase, character creator, and fitting expansion in their later roadmap order.',
      authority: 'D:/Ascentia/repos/asset-factory',
      evidence: [
        'docs/development-priority-roadmap.md — P0 completed/local verification record and P1 next-default declaration',
        'P0 implementation commits a6a2d97 and f46c72e; scratch-hygiene follow-ups 75e4e43 and f671a21',
        'Git HEAD f671a21; even with origin/main. Publication closeout was clean; the current pulse separately reports untracked game-world-staging/ state outside the P0 publication.',
      ],
      snapshot: { branch: 'main', head: 'f671a21', date: '2026-07-18', dirty: 1, ahead: 0, behind: 0 },
    },
    {
      id: 'gameworldfactory',
      name: 'Game World Asset Factory',
      role: 'Thematic Nanite / PCG static-world mesh pipeline',
      state: 'review',
      phase: 'P1 — corrected non-structural catalog / external quarantine',
      summary: 'The owner assigned buildings and structural meshes to Worldheart. Game World Asset Factory stopped paid work and now exposes a locked v3 catalog containing only terrain/PCG meshes and freestanding props. Decorative attachments remain an allowed but currently empty reviewed lane. Existing structural provider output is preserved strictly as historical quarantine evidence.',
      focus: 'Record a separate Keep or Reject for each of the 50 landed current-scope packages, keep 29 structural packages quarantined, and only then obtain a new explicit user decision before preparing any v3 remainder or attachment library.',
      capability: '45 governed themes combine with 25 Meshy-owned archetypes—16 terrain/PCG meshes and 9 props—into 1,125 deterministic v3 plans. Fifteen former structural archetypes are removed and regression-tested as Worldheart-owned. Prompts declare Meshy responsibility and exclude buildings and structural modules. The browser now separates prompt Go/Revise/No-go from generated-result Keep/Reject: generated cards show RESULT · NEEDS REVIEW/KEEP/REJECT, distinct filters isolate the 50 landed results, and result verdicts bind to SHA-256 values for the exact GLB and package manifest. Keep retains a candidate only and does not approve Unreal import. Existing reference/GLB, unlit/studio, full-screen, direct-link, and Blender QA features remain.',
      proof: 'Commit e2ef05d on codex/game-world-factory implements separate prompt and result review on top of ownership commit 30567c0. Build, six no-credit factory smokes, and JavaScript syntax checks pass. The result-review smoke reports 50 eligible / 0 keep / 0 reject / 50 awaiting review; a prompt Go sent to the result endpoint returns HTTP 400 and writes nothing. In-app browser verification showed 0 / 50 generated decisions, exactly 50 assets under Needs human review + 3D models only, Keep/Reject/Clear on a generated card, and Go/Revise/No-go/Clear only on a prompt-only card. Generation remains locked.',
      blockers: [
        'The old 120-ID/2,295-credit v2 approval is invalid; any v3 remainder requires a new exact user decision, ID list, hash, and cap.',
        'All 50 current completed packages still require an explicit generated-result Keep or Reject; prior prompt Go approved none of their final output.',
        'Twenty-nine completed structural packages plus incomplete structural evidence remain quarantined and must never be promoted as Meshy-owned content.',
        'The first mesh has 3,491 non-manifold/boundary edges and 194 disconnected islands, requiring human geometry review before any Unreal intake.',
        'No completed result has Nanite, collision, PCG placement, Worldheart mounting, Unreal quarantine-import, or production proof.',
      ],
      next: 'Use Generated result → Needs human review plus 3D models only to record Keep or Reject for the 50 landed packages, then choose preparation of an exact non-structural v3 remainder or a prompt-only decorative-attachment design pass. No old job resumes automatically.',
      authority: 'D:/Ascentia/repos/game-world-asset-factory',
      evidence: [
        'docs/project-status.md — governed authority, capability, proof posture, and next decision',
        'docs/generated-asset-review.md — prompt/result decision separation and exact-output hash binding',
        'docs/worldheart-structural-boundary.md — Meshy/Worldheart ownership contract and exact removed-ID regression list',
        'docs/images2-prompt-review.md — v3 technical review and current scope',
        'docs/provider-capability-audit.md — official GPT Image 2 and Meshy contract audit (4K base color / 2K PBR; no native 8K claim)',
        'Git HEAD e2ef05d; catalog hash 99b25c0dca8f7b747adca8d8ac480092766353c7a3f61b29e6ad52b81893d916; generated verdicts 0 keep / 0 reject / 50 awaiting review',
      ],
      snapshot: { branch: 'codex/game-world-factory', head: 'e2ef05d', date: '2026-07-19', dirty: 0, ahead: null, behind: null },
    },
    {
      id: 'interfaceforge',
      name: 'Interface Art Forge / Mythic Skin Forge',
      role: 'Game UI skin tooling',
      state: 'attention',
      phase: 'V1 implemented / Marketplace hardening',
      summary: 'Interface Art Forge is the plugin authority; MythicSkinForge is an unversioned UE 5.8 proving-ground project that contains a copied plugin and generated UI assets. They are one product track, not two independent roadmaps.',
      focus: 'Marketplace packaging and clean-install evidence. The canonical-to-vendored sync path now exists: sync-vendored.ps1 + Docs/VENDORED_SYNC.md (docs re-synced 2026-07-18).',
      capability: 'The plugin documents a complete V1 workbench: standalone and embedded UMG flows, Skin Fit templates/masks, Images 2 generation, slicing, candidate lifecycle, style references, presentation controls, and supported UMG write-back.',
      proof: 'The canonical repo passes descriptor/module/preset validation and is pushed current at 6370b66 on claude/docs-accuracy. All seven production files are content-identical across canonical, Game, and Skin copies after newline normalization (raw hashes differ only by CRLF-vs-LF, verified 2026-07-18); the successful UE 5.8 Game build compiled both equivalent modules.',
      blockers: [
        'MythicSkinForge is not under Git and mixes sample content, generated assets, caches, and the copied plugin (it now carries an AGENTS.md stating the canonical relationship).',
        'The workbench remains a large ownership monolith slated for service/adaptor extraction.',
        'Clean UE screenshots, demo video, API-key shipping policy, and broader smoke coverage remain; compat wording updated to UE 5.8.',
        'HISTORY SPLIT (found 2026-07-18): GitHub main was force-replaced with a single release-prep commit b4dcfac (Marketplace/ folder, BuildFabPackage.ps1, ~374-line larger editor module) that shares NO history with the local canonical line. claude/docs-accuracy is pushed but a PR is impossible until the user reconciles which line is truth.',
      ],
      next: 'USER DECISION: reconcile the two InterfaceArtForge histories — remote b4dcfac release-prep versus the local docs-accuracy line (the one actually vendored into the game and skin-forge). Then merge and capture the Marketplace evidence set using sync-vendored.ps1 for installs.',
      authority: 'D:/Ascentia/repos/interface-forge (plugin); D:/Ascentia/sandboxes/skin-forge (proving ground only)',
      evidence: [
        'Feature_Set_Inventory.md V1 completion section',
        'Architecture_Review.md refactor targets',
        'sync-vendored.ps1 -DocsOnly run 2026-07-18: 7 docs refreshed in both vendored copies; production files newline-only diffs',
      ],
      snapshot: { branch: 'claude/docs-accuracy', head: '6370b66', date: '2026-07-18', dirty: 0, ahead: 0, behind: 0 },
    },
    {
      id: 'skinforge',
      name: 'Mythic Skin Forge',
      role: 'Interface Art Forge proving ground',
      state: 'attention',
      phase: 'D: sandbox migration with retained offline exception',
      summary: 'The UE 5.8 proving ground is preserved at D:/Ascentia/sandboxes/skin-forge as a sandbox, not the canonical plugin authority.',
      focus: 'Retain authoritative sample/generated content, keep the canonical Interface Forge relationship explicit, and recover the 147 unavailable Saved files only if OneDrive recall is later authorized.',
      capability: 'All 1,018 locally readable files are SHA-256 verified on D:, including the complete accessible plugin and project surfaces.',
      proof: 'The target intentionally omits exactly 147 unavailable Saved files. The original placeholder-bearing source remains untouched and no compatibility redirect is installed.',
      blockers: ['147 OneDrive placeholder files in Saved were unavailable during migration.'],
      next: 'Operate from D: for available sandbox work and preserve the C: source for possible later placeholder recall.',
      authority: 'D:/Ascentia/sandboxes/skin-forge (proving ground only)',
      evidence: ['D:/Ascentia/ops/verification/skin-forge-tree.json'],
      snapshot: { branch: '', head: '', date: '2026-07-18', dirty: 0, ahead: null, behind: null },
    },
    {
      id: 'themeforge',
      name: 'ThemeForge library family',
      role: 'Read-only Worldheart visual upstream',
      state: 'active',
      phase: 'Verified 45-theme corpus on D:',
      summary: 'ThemeForge, PCG Sheet Library, and PCG Contact Sheets are migrated together under D:/Ascentia/libraries/themeforge with lineage and immutable evidence preserved.',
      focus: 'Consume the migrated reflib read-only, keep mutable incremental state D:-native, and preserve historical manifests without path rewriting.',
      capability: '47,490 files, 22,729 PNGs, the processed reflib/out corpus, gates, state, handoffs, immutable snapshots, and unborn tooling Git state are present on D:.',
      proof: 'Complete SHA-256 family manifests, 45-theme reconciliation checks, current-manifest dry runs, and all 1,819 immutable snapshot PNG checks pass.',
      blockers: [],
      next: 'Use D: defaults for future runs; do not regenerate evidence merely to prove access.',
      authority: 'D:/Ascentia/libraries/themeforge',
      evidence: ['D:/Ascentia/ops/verification/themeforge-family-corpus.json'],
      snapshot: { branch: '', head: '', date: '2026-07-18', dirty: 0, ahead: null, behind: null },
    },
  ],
  flows: [
    {
      from: 'Landscry v0.2',
      contract: 'Pinned terrain snapshot + explicit lineage',
      to: 'Worldheart',
      then: 'Typed world/architecture output → Ascentia (future authorized consumption)',
      posture: 'Defined boundary; no automatic live integration',
    },
    {
      from: 'ARPG Asset Factory',
      contract: 'ImportQueue review package',
      to: 'Human review / Fitting Room',
      then: 'Guarded Unreal intake → Ascentia',
      posture: 'Standalone tool; direct Content writes forbidden',
    },
    {
      from: 'Game World Asset Factory',
      contract: 'Non-structural prompt-reviewed reference + Meshy/Blender evidence package',
      to: 'ImportQueue world-asset quarantine',
      then: 'Human Nanite/PCG/Worldheart-mount review → guarded Ascentia intake',
      posture: 'Generation stopped and locked; 50 current-scope packages require separate hash-bound Keep/Reject verdicts while 29 structural packages remain historical quarantine only, with no direct Content writes or Unreal/Nanite/PCG acceptance claims',
    },
    {
      from: 'Interface Art Forge',
      contract: 'Versioned plugin install + reviewed candidate art',
      to: 'MythicSkinForge proving ground',
      then: 'Validated skin assets/workflow → Ascentia UI',
      posture: 'Current copied plugin is drifted; sync is not yet repeatable',
    },
    {
      from: 'All projects',
      contract: 'Status + evidence + blocker + next decision',
      to: 'AscentiaDashboard',
      then: 'Human portfolio decisions',
      posture: 'Reporting relationship only; dashboard never overrides project law',
    },
  ],
  authority: [
    {
      name: 'Main game identity',
      canonical: 'D:/Ascentia/repos/game',
      noncanonical: 'The original Ascentia source is retained; Unreal Projects/MythicCore, MythicCore 5.3, GitHub/MythicCore, and Backups - Mythic Core are incomplete quarantined provenance.',
    },
    {
      name: 'Terrain identity',
      canonical: 'D:/Ascentia/repos/landscry',
      noncanonical: 'Landscry is the earlier/reference line; Landscry-codex-torch is a worktree, not a separate product.',
    },
    {
      name: 'Dashboard identity',
      canonical: 'D:/Ascentia/repos/dashboard',
      noncanonical: 'Both original C: dashboard sources are retained; the Claude clone and verified bundle preserve unique commit 93a1b208 as archive provenance.',
    },
    {
      name: 'Worldheart identity',
      canonical: 'D:/Ascentia/repos/worldheart plus its signed work orders/handoffs',
      noncanonical: 'Worldheart_output, candidate/evidence clones, and worktrees are outputs or audit surfaces—not restore authorities.',
    },
    {
      name: 'UI tool identity',
      canonical: 'D:/Ascentia/repos/interface-forge',
      noncanonical: 'D:/Ascentia/sandboxes/skin-forge is the proving ground; its accessible production files are normalized-content-identical while 147 Saved placeholders remain unavailable.',
    },
    {
      name: 'Asset Factory identity',
      canonical: 'D:/Ascentia/repos/asset-factory',
      noncanonical: 'The original OneDrive working tree is retained only for rollback during the compatibility period.',
    },
    {
      name: 'Game World Asset Factory identity',
      canonical: 'D:/Ascentia/repos/game-world-asset-factory',
      noncanonical: 'Fork lineage comes from ARPG Asset Factory, but this is an independent static-world tool and the ARPG equipment factory remains separately canonical.',
    },
    {
      name: 'ThemeForge family identity',
      canonical: 'D:/Ascentia/libraries/themeforge',
      noncanonical: 'The three original source roots are retained for rollback; historical path fields remain immutable provenance.',
    },
  ],
};
