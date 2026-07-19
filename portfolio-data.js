// Curated portfolio truth. Git pulse is overlaid from optional portfolio-local.js.
// Do not turn activity into a completion claim: capability and proof are separate.
window.PORTFOLIO_DATA = {
  meta: {
    title: 'Mythic Systems',
    subtitle: 'Portfolio control room for Ascentia and its independent creation tools',
    surveyed: '2026-07-18',
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
      level: 'critical',
      title: 'Restore one coordination truth',
      body: 'The detailed Ascentia dashboard was last curated on July 5/6 while the game moved materially through network proof, P11 combat work, and a large Aether slice. The archived Designer Compendium divergence was reconciled on 2026-07-18; the remaining debt is current game-detail curation.',
      owner: 'Portfolio / AscentiaDashboard',
    },
    {
      level: 'active',
      title: 'Keep the game branch published and its record current',
      body: 'codex/designer-compendium is pushed current (Aether replication proof plus the 2026-07-18 D: doc alignment). Remaining discipline: ignored Unreal Content changes still need explicit handoffs, and the detailed gap-data record remains at 2026-07-05 pending re-curation.',
      owner: 'Ascentia',
    },
    {
      level: 'review',
      title: 'Close the two human-facing world gates',
      body: 'Landscry T4b needs final terrain/water presentation plus the owner complete-world verdict. Worldheart is intentionally in lean R50+ visual exploration until the Program Steward says FREEZE.',
      owner: 'Landscry + Worldheart',
    },
    {
      level: 'blocked',
      title: 'Do the Asset Factory security pass before expansion',
      body: 'Safe IDs, approved-root path handling, file serving, reference reads, payload limits, and traversal smokes are the declared P0 gate. CharacterBase and fitting expansion wait behind it.',
      owner: 'ARPG Asset Factory',
    },
    {
      level: 'active',
      title: 'Keep artifact hygiene visible',
      body: 'Every project generates caches, review bundles, and scratch. The standing law (ops/ARTIFACT_HYGIENE.md) is: declared homes or date-stamped scratch, promote-or-delete at closeout, and the Hygiene panel below reports the measured weight. Nothing is auto-deleted.',
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
      id: 'dashboard-merge-deploy',
      title: 'Merge the control room to main; settle the deploy',
      target: 'Any agent · D:\\Ascentia\\repos\\dashboard',
      decision: false,
      why: 'The portfolio lives on a pushed side branch; main is the Render deploy branch.',
      prompt: String.raw`Merge the portfolio control room into main and settle the deploy.

In D:\Ascentia\repos\dashboard (read AGENTS.md first): branch codex/portfolio-control-room (HEAD a477ef7 or later) holds portfolio control room v2.1 and is pushed with upstream; main is the Render deploy branch (live: https://ascentiadashboard.onrender.com). Task: merge codex/portfolio-control-room into main, run check-links.ps1 and node --check on gap-data.js + portfolio-data.js, confirm portfolio-local.js remains untracked, then push main. Afterwards verify honestly whether Render actually redeployed (auto-deploy has been unreliable — probe the live site; do not claim a deploy you did not observe). Expected on the LIVE site: the portfolio page shows "Snapshot only" because portfolio-local.js is machine-local — that is correct behavior, not a bug. Close out with the Portfolio Signal (update the dashboard entry, prune this hand-off, refresh).`,
    },
    {
      id: 'worldheart-lane-docs',
      title: 'Worldheart lane: land the two portfolio doc edits',
      target: 'Codex (Worldheart lane) · D:\\Ascentia\\repos\\worldheart',
      decision: false,
      why: 'Two doc-only edits from the portfolio pass sit uncommitted in the governed tree; only the Worldheart lane may commit there.',
      prompt: String.raw`Worldheart lane: review and land two portfolio doc edits sitting uncommitted in the working tree.

In D:\Ascentia\repos\worldheart, within WH-WO-0020's boundary (read AGENTS.md and the session protocol first; G01 stays RED; no gate, evidence, or acceptance changes): the 2026-07-18 portfolio pass left two doc-only edits uncommitted — docs/MIGRATION.md (a supersession banner recording the move to D:\Ascentia\repos\worldheart; the historical migration-#1 record below it is untouched) and AGENTS.md (a new "Portfolio signal" section, explicitly reporting-only and subordinate to governance). Review both diffs. If acceptable to the lane, commit them as their own doc-only commit with explicit paths (git add docs/MIGRATION.md AGENTS.md) — separate from the dressing_factory feature work, which you must not touch. Whether to push remains the lane's call. Close out with the Portfolio Signal payload in your handoff (a dashboard write is optional for this lane).`,
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
      id: 'unindexed-archives',
      title: 'Classify the two unindexed archive folders',
      target: 'Any agent · D:\\Ascentia (umbrella)',
      decision: true,
      why: 'archives\\game-staged-latest (5.4 GB) and archives\\samples-parking (5.9 GB) predate the migration goal and have no owner call.',
      prompt: String.raw`Classify the two unindexed archive folders flagged on the Portfolio Hygiene panel.

MY DECISION: archives\game-staged-latest (5.4 GB, ~90 files) -> [keep-and-index / delete / inspect-first]; archives\samples-parking (5.9 GB, ~3,166 files) -> [keep-and-index / delete / inspect-first]

In D:\Ascentia (read AGENTS.md first): both folders predate the migration goal and are recorded as "pre-existing provenance, not audited". For keep-and-index: add a proper archives[] entry to ops\portfolio-manifest.json describing origin and purpose, then remove that folder from the always-flag list in repos\dashboard\refresh-portfolio.ps1 so the Hygiene panel stops flagging it. For delete: first enumerate contents and confirm nothing references them, then delete and record the action in ops\migration-manifest.json notes. For inspect-first: produce a sized listing and a one-paragraph origin hypothesis, then stop and report back. Close out with the Portfolio Signal.`,
    },
    {
      id: 'gapdata-recuration',
      title: 'Re-curate the Ascentia detail dashboard (gap-data.js)',
      target: 'Any agent · D:\\Ascentia\\repos\\dashboard (+ game repo reads)',
      decision: false,
      why: 'The detailed Ascentia record is curated 2026-07-05 while the game shipped network proof, P11 combat, and the Aether slice since.',
      prompt: String.raw`Re-curate the Ascentia detail dashboard (gap-data.js) against current evidence.

In D:\Ascentia\repos\dashboard (read AGENTS.md; for game-repo reads follow ITS bootstrap: AGENTS.md -> Docs/rules/SESSION_BOOTSTRAP.md -> COMPENDIUM_MAP): gap-data.js is curated 2026-07-05, but the game has since recorded the dedicated-server network evidence checklist 10/10, packaged public-profile proof, P11 combat/montage work, and the Aether reward-layer slice with a 33/33 two-client replication fixture (2026-07-18, HEAD 413b5573). Task: walk D:\Ascentia\repos\game\Docs\Evidence\Latest plus the network/public-profile records and Aether docs, update gap-data.js feature statuses, notes, and progress history to the evidenced state — keep implementation status and proof status separate and never promote a claim past its evidence — then bump GAP_META.updated. Validate with check-links.ps1 and node --check gap-data.js; update index.html only if the data shape changed. Commit per AGENTS. Close out with the Portfolio Signal (update the ascentia and dashboard entries, prune this hand-off).`,
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
    {
      id: 'aether-residue-refill',
      title: 'Decide and implement Aether residue self-refill',
      target: 'Any agent · D:\\Ascentia\\repos\\game',
      decision: true,
      why: 'The reward-layer design left one open question: whether depleted residue pockets replenish without boss events.',
      prompt: String.raw`Decide the Aether residue self-refill behavior and implement it.

MY DECISION: depleted residue pockets [slowly self-refill toward their authored ambient / stay depleted until boss events re-deposit / hybrid — describe]

In D:\Ascentia\repos\game (follow the full bootstrap: AGENTS.md -> Docs/rules/SESSION_BOOTSTRAP.md -> Docs/COMPENDIUM_MAP.md -> the magic-lane rules): Aether is the REWARD layer — ETH is spell mana with Elden Ring rules; boss strikes deposit supersaturation residue; casts opportunistically consume charge for damage overcharge; the field drains toward the ambient norm; DepositSupersaturation energy is PER CELL (pool roughly 10x a per-cast request). Implement my decision in the field core and the designer surfaces described by Docs/Architecture/Aether_EnvironmentalMagic.md and Docs/DesignerSurfaces/AetherMagic_README.md, keep the Ascentia.Aether automation suite green and extend it to pin the new behavior, and verify multiplayer with the two-client fixture (-AscentiaNetAetherSmoke via Tools/network/run_two_client_aether_smoke.py; launch clients only after the driver prints START; the deplete sphere must stay wider than probe reach). Close out per Docs/rules/SOURCE_CONTROL.md (commit, push) plus the Portfolio Signal (update the ascentia entry, prune this hand-off).`,
    },
  ],
  projects: [
    {
      id: 'ascentia',
      name: 'Ascentia',
      futureName: 'Planned product name: Mythic Core',
      role: 'Main game',
      state: 'active',
      phase: 'P11 combat / Aether vertical slice',
      summary: 'The authoritative UE 5.8 open-world RPG. Recent work moved beyond the old dashboard record into dedicated-server verb proof, packaged-profile proof, layered combat presentation, and a substantial environmental Aether system.',
      focus: 'Aether field gameplay and presentation, Magic Sight, Breath-backed sprinting, ground-hugging tells, and current controller/game-mode work.',
      capability: 'A live multiplayer-aware Unreal codebase with recorded network checklist passes and public-profile packaging proof. The new Aether field core has a committed deterministic automation suite, authoring volumes, HUD/castability surfaces, and world interactions.',
      proof: 'Recent commits are evidence of activity, not a clean current-release claim. The survey did not rebuild the six-file modified C++ working tree, and ignored Content assets require an exact handoff.',
      blockers: [
        'The detailed gap-data record predates most July 6-17 work (re-curation pending).',
        'Ignored Unreal Content changes can disappear from Git-based status reporting — handoffs must record asset state explicitly.',
      ],
      next: 'Re-curate gap-data.js against the current evidence set, then continue the P11/Aether slice (node save-spine, Magic Sight art remainder, residue self-refill decision).',
      authority: 'D:/Ascentia/repos/game',
      evidence: [
        'Git HEAD 413b5573 (2026-07-18), pushed; branch clean after the D: doc-alignment commit',
        'Docs/Evidence/Latest and network/public-profile records',
        'Docs/DesignerSurfaces/AetherMagic_README.md',
      ],
      snapshot: { branch: 'codex/designer-compendium', head: '413b5573', date: '2026-07-18', dirty: 0, ahead: 0, behind: 0 },
    },
    {
      id: 'dashboard',
      name: 'AscentiaDashboard + Designer Compendium',
      role: 'Portfolio coordination',
      state: 'attention',
      phase: 'Portfolio consolidation',
      summary: 'The existing coordination depot is the correct home for the portfolio view. Its detailed game matrix, Designer Compendium, tool bridge map, decisions, proof posture, and claim gates remain useful, but its source status has drifted behind the projects.',
      focus: 'Operate the portfolio control room v2: drift detection against curated records, disk/waste hygiene instrumentation, and migration/junction posture surfaced on the page.',
      capability: 'Dependency-free local/static browser dashboard with detailed Ascentia feature data, designer routes, evidence gates, and tool bridge pages.',
      proof: 'The canonical dashboard working tree was copied with exact hash and Git verification to D:/Ascentia/repos/dashboard. Archived commit 93a1b208 was reviewed against the current line and remained additive, then was cherry-picked as 4fdcd49; the divergent clone and verified bundle remain preserved provenance.',
      blockers: [
        'Curated status date was 2026-07-05 while major game work continued through 2026-07-17.',
        'The original C: sources remain retained because source retirement is not authorized.',
      ],
      next: 'User decision: merge codex/portfolio-control-room to main (deploy gate); then re-curate gap-data.js.',
      authority: 'D:/Ascentia/repos/dashboard',
      evidence: [
        'Control room v2 commits b409531/660d15c/ab88cf0 (2026-07-18) on codex/portfolio-control-room',
        'Archived commit 93a1b208 (2026-07-07) reconciled as cherry-pick 4fdcd49 on 2026-07-18; clone + verified bundle preserved',
        'gap-data.js curated date 2026-07-05 (Ascentia detail lags; portfolio survey 2026-07-18 is current)',
      ],
      snapshot: { branch: 'codex/portfolio-control-room', head: '4fdcd49', date: '2026-07-18', dirty: 0, ahead: null, behind: null },
    },
    {
      id: 'landscry',
      name: 'Landscry v0.2',
      role: 'Authoritative initial terrain',
      state: 'active',
      phase: 'T4b — first composed world',
      summary: 'The clean-room local-first terrain compiler has crossed from contracts and native terrain proof into a canonical streamed UE 5.8 world package and an exercised packaged build.',
      focus: 'Final terrain/water presentation, native-detail complete-world review, and the remaining T4b checkpoint decisions.',
      capability: 'One World Partition map with 16 partitions, 256 compiled sections, Nanite input topology, 64 far-field HLOD actors, collision, packaging, and a seven-station runtime streaming proof.',
      proof: 'The D: repo passes Git, Rust, TypeScript, UE editor build, retained-package validation, and all ten junction checks. New recovery evidence rebuilt 256 sections and 64 HLODs, but two current inspections repeatably failed winding validation; cook/proof were intentionally not run.',
      blockers: [
        'The reconstructed Content is new recovery evidence, not historical byte recovery, and currently fails winding inspection.',
        'Owner complete-world visual acceptance is absent.',
        'Nanite + far-field HLOD versus discrete LOD seam obligation needs a decision.',
        'Older strict-target promotion matrices remain blocked by GitHub billing/spending-limit execution failure.',
      ],
      next: 'Author and inspect final materials, fly the canonical streamed world, record the owner verdict, resolve the LOD obligation, then run the T4b close audit.',
      authority: 'D:/Ascentia/repos/landscry',
      evidence: [
        'T4B_FIRST_COMPOSED_WORLD_SLICE_04_2026-07-17.md',
        'Git HEAD 0d129822 at survey time',
        'Packaged proof: 7/7 stations, streaming/collision report passed',
      ],
      snapshot: { branch: 'agent/t1b-a-declared-boundary', head: 'c4e3979', date: '2026-07-18', dirty: 0, ahead: 0, behind: 0 },
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
        'Branch intentionally has no upstream during R50+ visual rounds; the dressing_factory working tree and the 2026-07-18 doc edits (MIGRATION supersession note, Portfolio Signal section) await commit by the Worldheart lane.',
      ],
      next: 'Continue WH-WO-0020 only within its focused-test boundary; do not run a full suite, rebuild evidence, resolve gates, or claim Unreal acceptance without a governing work order.',
      authority: 'D:/Ascentia/repos/worldheart',
      evidence: [
        'WH-WO-0020_THEMATIC_DRESSING_ASSET_FACTORY_R0.md',
        'WH-HANDOFF-0020_MASTER_ARCHITECT_BUILDING_R49.md',
        'Ignored review outputs r50, r51, and r52 existed at survey time',
      ],
      snapshot: { branch: 'codex/master-architect-visual-r50', head: 'd115798', date: '2026-07-18', dirty: 20, ahead: null, behind: null },
    },
    {
      id: 'assetfactory',
      name: 'ARPG Asset Factory',
      role: 'Game-ready equipment pipeline',
      state: 'blocked',
      phase: 'P0 — security hardening',
      summary: 'A standalone contact-sheet-to-Meshy-to-Blender equipment pipeline that writes review packages to ImportQueue rather than mutating Unreal Content.',
      focus: 'Safe asset-set IDs, approved-root path helpers, file serving, local reference reads, request limits, and traversal/oversize smokes.',
      capability: 'The MVP includes preview/create/inspect tools, contact-sheet planning and slicing, slot-aware prompts, Meshy adapters, approved Blender processing, QA previews, and a Fitting Room handoff.',
      proof: 'The full working tree is preserved on D:. Its package build, eight no-credit smoke checks, and local HTTP surface pass from D:/Ascentia/repos/asset-factory; paid provider actions were not used. main is pushed current as of 2026-07-18 (P0 roadmap and restart scripts now tracked).',
      blockers: [
        'P0 identifies non-uniform set_id sanitization and broad path-prefix checks.',
        'Contact-sheet reference reads and request bodies need explicit bounds.',
        'CharacterBase, character creator, and fitting QA expansion are gated behind P0.',
      ],
      next: 'Implement P0 as one focused pass with traversal and oversize smokes; only then resume paired-slot, image configuration, base-body, or fitting work.',
      authority: 'D:/Ascentia/repos/asset-factory',
      evidence: [
        'docs/development-priority-roadmap.md',
        'Git HEAD b1821de5; six working-tree paths at survey time',
        'ImportQueue is a human-review boundary, not an Unreal import claim',
      ],
      snapshot: { branch: 'main', head: 'b8b0522', date: '2026-07-18', dirty: 0, ahead: 0, behind: 0 },
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
      name: 'ThemeForge family identity',
      canonical: 'D:/Ascentia/libraries/themeforge',
      noncanonical: 'The three original source roots are retained for rollback; historical path fields remain immutable provenance.',
    },
  ],
};
