# Ascentia Designer Compendium

> Status: dashboard-published atlas, synchronized with the Title Screen and
> current MVP arena music designer surfaces on 2026-07-21.
> Source: `Docs/DesignerSurfaces` on `BTAlaska/Ascentia`, branch
> `codex/designer-compendium`, source commit `717b343`.
> Scope: designer-facing map of Ascentia Editor surfaces, safe tuning paths,
> native boundaries, placeholder image policy, evidence requirements, and future
> custom tool needs.

The Designer Compendium is the designer-facing companion to the architecture
Compendium. The architecture Compendium explains how Ascentia systems should be
built. This page explains where Designers are expected to work in the Unreal
Editor, what they can safely change, why each surface exists, and how a change
should be validated.

This page is intentionally conservative. It names source-visible surfaces and
planned tool homes. Placeholder images are allowed until real tools or surfaces
exist, but canonical Editor screenshots are still future work.

## 2026-06-20 Itemization/Economy Sync

The Designer-facing itemization entry points now point at implemented source
data and runtime contracts, not a future-only affix plan:

- Edit/review source rows under `Tools/data/item_affixes/` before treating
  generated Unreal assets as truth.
- Use `Tools/data/build_endgame_item_affix_pack.py` to regenerate the source
  pack and `Tools/data/import_item_affix_data_assets.py` for generated data
  asset imports.
- Run `python Tools/data/validate_item_affix_data.py` after data edits. The
  validator covers schema rows, rarity budgets, natural affix depth,
  build-archetype coverage, loot profiles, curve bindings, crafting recipes,
  unique-power fixtures, and source-contract hooks.
- Runtime ownership is native: loot rolls through `UAscentiaLootSubsystem`,
  reward grants through `UAscentiaRewardGrantSubsystem`, affix crafting through
  `UAscentiaInventoryComponent` transaction helpers, and vendor purchases
  through `AAscentiaVendorNPC` purchase transactions.
- Designer gaps are now presentation and tooling: crafting/vendor/salvage UI,
  unique-power tooltip/cue presentation, resolved-content provenance browser,
  economy simulation board, canonical screenshots, and surface-to-evidence
  bridge.

## What This Page Answers

- What can a Designer tune, author, skin, place, inspect, or validate?
- Where does that work happen in the Unreal Editor today?
- Why is the surface designer-owned, stock Unreal, future custom tooling, or
  native-only?
- How should the work be validated before it becomes a public or production
  claim?
- Which images are placeholders, and which images are real captured Editor
  screenshots?

## Current Status Vocabulary

- `source_visible`: backed by C++ reflection, Blueprint exposure, current docs,
  project settings, stock assets, or existing reports. Screenshots may still be
  missing.
- `standard_editor`: use stock Unreal Editor workflows. Ascentia should add
  docs, validation, screenshots, and evidence around them instead of replacing
  them.
- `planned`: intended surface, but not implemented as a designer-ready workflow.
- `missing_custom_tool`: stock Unreal UI is not enough for the workflow Ascentia
  needs.
- `native_only`: Designers may read reports or telemetry, but should not author
  behavior there.

## Current Editor Surface Map

| Surface area | Open first | Designer-owned work | Boundary or next gap |
| --- | --- | --- | --- |
| Title screen and front-end presentation | `/Game/Ascentia/TitleScreen/DA_TitleScreen`; PIE `/Game/Ascentia/TitleScreen/L_TitleScreen` | Set background/logo/wordmark, menu rows and Play destination, font/colors/spacing/cursor, title music, UI sounds, flow timing, and ambient motion | Layout, navigation/focus/cursor ownership, validation, level travel, and quit stay native. Settings, remapping, pause, loading, and localization remain P21 work. See `Docs/DesignerSurfaces/TitleScreen_README.md`. |
| Current `MVP_Arena` level music | Open `/Game/Ascentia/MVP/Maps/MVP_Arena`, select the placed `BP_MVPArenaMusic`, then use Details > `Ascentia|Audio`; reusable defaults live at `/Game/Ascentia/MVP/Blueprints/BP_MVPArenaMusic` | Assign the `Music` asset and tune volume, auto-start, restart/loop, and GameMode-fallback handoff | Keep `GM_GaspTest`; arena music is owned by the placed ambient actor, not the GameMode. Dynamic music states, mix/accessibility policy, and conflict evidence remain future P20 work. |
| Combat, GASP, dodge, combos, and weapon feel | `BP_AscentiaGaspPlayer` Class Defaults, `AvatarComponent` Details, weapon animation slots, root-motion and dodge categories, `Ascentia Swing Whoosh` notifies on attack AnimSequences | Assign animation assets, root-motion slots, dodge feel, trail/audio/contact presentation, authored swing-whoosh timing per attack animation, weapon family overrides, and debug visualization | Gameplay authority, GAS cost/commit, damage, replication, save state, and action-window math stay native. Combat Feel Lab is still needed. |
| Items, loot, affixes, spells, skills, and data content | Content Browser paths under `/Game/Ascentia/Design/Items`, `/Affixes`, `/LootTables`, `/Spells`, ability sets, DataTables, and source CSV/JSON under `Tools/data/item_affixes/` | Author stable tags, display/lore/source text, stats, visuals, footprints, expansion-bag grants, 209 affix rows, rarity budgets, unique-power metadata, loot profiles, spell metadata, and row data | Registry resolution, fallback debt, generated asset freshness, grants, package gates, and migrations need validators plus a Content Registry Browser. |
| Magic, spellbook, Eth flask, targeting, and skill UI | Spell DataAssets, skill rows, `SpellbookComponent`, combat spell/Eth request nodes, and current input fallbacks | Assign starter spells, spell cost/display/cue fields, UI prompts, safe getters, and presentation events | Eth spend, unlocks, cooldown authority, targeting, damage, save state, and replication stay native. Skill/Spell Forge and replay labs are future. |
| Inventory, equipment, menu, loot window, and progression UI | `WBP_AscentiaMenu`, inventory widget trees, `UAscentiaInventoryScreen`, `UAscentiaLootWindow`, progression bindings | Skin slots, tabs, detail panels, active inventory panels, footprint anchor and covered-cell states, stat allocation, passive readouts, and optional UMG trees | Mutations, footprint fit, item transactions, held cursor authority, passive activation, corpse-loot authority, and save state stay native. |
| Narrative, dialogue, vendors, tutorial prompts, and world state | NPC/vendor actor Details, Blueprint graphs using `UAscentiaWorldStateSubsystem`, and tutorial prompt calls | Edit current dialogue arrays, vendor-facing text, stock references, prompt copy, map/memory tags, and presentation events | Branching dialogue, localization, VO, state simulation, and dependency graphs need Dialogue Graph and World State Tree Viewer tools. |
| Enemy AI, boss behavior, encounters, and fog walls | Enemy Blueprint/Class Defaults, stock Behavior Tree and Blackboard editors, `UAscentiaBossDefinition`, encounter and fog-wall actors | Assign Behavior Trees, Blackboard assets, AI tuning fields, boss phase thresholds, ability sets, music states, fog-wall links, and presentation hooks | Target choice, damage, rewards, phase authority, fog-wall runtime state, encounter state, and save state stay native/evidence-owned. |
| World placement, traversal, campsites, gates, discovery, and endgame entries | Level Editor placed actor Details for campsites, gates, fast travel, discovery actors, encounter zones, boss fog walls, and endgame entry/exit actors | Set tags, identities, references, transforms, encounter spawn rows, extents, request fields, and presentation context | Route safety, streaming readiness, reset policy, duplicate identities, and zone signoff need placement validators and a Zone Delivery Board. |
| Presentation, Niagara, GameplayCues, camera, rumble, UI payoff, and audio | GameplayCue Blueprints, Niagara systems, item visual fields, `AvatarComponent` trail fields, ambient music actors, boss music rows, UMG widgets | Assign VFX/audio/camera/rumble/UMG presentation assets and implement event responses to native facts | Do not build a custom Niagara editor. Need GameplayCue coverage, presentation event browser, audio route, and budget evidence. |
| Character creator, cosmetics, armor visuals, grooms, cloth, and portraits | Current GASP visual override, character base equipment seams, item `WornMesh` fields, future avatar/cosmetic profiles | Assign visual override classes, leader/costume meshes, worn meshes, sockets/transforms, carry poses, animation mesh policy, and preview fields | Stable avatar identity, hide masks, groom/cloth policy, portrait capture, and save migration need creator/cosmetic labs. |
| Tools, evidence, Build Doctor, mutation safety, and reports | Project Settings > Ascentia Tooling, descriptor/profile assets, Build Doctor commandlet direction, report roots, Tool Registry/Evidence Browser backends | Configure descriptor roots, profile roots, dry-run roots, report roots, scan roots, and inspect report output | Visual Tool Registry, Evidence Browser, Mutation Preview, manifest validator, and evidence bridge are not complete yet. |
| Accessibility, settings, glyphs, subtitles, readability, and public claims | Current UI/input/prompt hooks, future settings/glyph/accessibility profile assets, UMG surfaces | Skin readable UI, plan glyph/subtitle/caption/motion/flash settings, collect acceptance proof, and expose setting propagation | Public claims, waivers, accessibility acceptance, and compliance gates need evidence-backed boards. |
| Governance, compliance, external content, performance, and release | Current mock reports, cadence/public-claim-freeze mock, stock Unreal Insights/stat/UAT/Gauntlet tools, and future profile assets | Inspect source/license/provenance, claim rows, waivers, package blockers, performance scenarios, release candidates, artifacts, and dashboard cards | Synthetic mocks do not pass release gates. Production boards must import structured evidence and expose waivers. |

## Common Designer Tasks

| Task | Open first | Validate with |
| --- | --- | --- |
| Reskin or tune the Title Screen | `/Game/Ascentia/TitleScreen/DA_TitleScreen`; preview `/Game/Ascentia/TitleScreen/L_TitleScreen` | Asset Actions > Validate Assets, `Ascentia.UI.TitleScreen.SettingsValidation`, and `Tools/titlescreen_pie_probe.py` |
| Change `MVP_Arena` level music | Select placed `BP_MVPArenaMusic` in `/Game/Ascentia/MVP/Maps/MVP_Arena` > Details > `Ascentia|Audio` | `Tools/remote_playtest.py ascentia_content_contract --project Ascentia`, plus a PIE listen check for track/content changes |
| Tune dodge, root motion, weapon animation, or combat feel | `BP_AscentiaGaspPlayer` Class Defaults and `AvatarComponent` Details | `Tools/gasp_controls_surface.py`, `Tools/remote_playtest.py gasp_dodge_motion`, `Tools/remote_playtest.py gasp_attack_dodge_cancel` |
| Author swing-whoosh timing on attack animations | The AnimSequence Notifies panel: `AscentiaSwingAudio` track, `Ascentia Swing Whoosh` notify (per-marker volume/pitch/override/lock knobs); bulk-stamp new packs with the token-guarded `Tools/animation/bake_swing_whoosh_notifies.py` | PIE log prints `authored swing whoosh` per attack; `NATIVE FALLBACK - no authored swing notify` lines are the remaining debt list; atlas doc `Docs/DesignerSurfaces/Audio_Music/Swing_Whoosh_Authoring.md` |
| Add items, affixes, loot, lore, spells, abilities, or row content | Content Browser design paths and DataTables | Equipment/stat audits, inventory lifecycle audit, relevant remote playtest, and future Data Validation reports |
| Build spellbook, Eth flask, targeting, or magic UI | Spell DataAssets, spellbook component, and magic request nodes | `spellbook_surface`, `spell_eth`, and `eth_potion` remote playtests |
| Skin inventory, equipment, menu, loot, or progression UI | Menu/inventory WBP paths and native fallback screen bindings | `gasp_inventory_interaction`, `stat_investment`, `threshold_passive`, and UX mock reports |
| Write NPC dialogue, vendor copy, lore beats, or tutorial prompts | NPC/vendor Details, world-state subsystem calls, and tutorial prompt subsystem | `npc_dialogue`, `vendor_trade`, `world_state_objective`, and `tutorial_prompt` remote playtests |
| Modify AI, Behavior Trees, Blackboard, or boss phases | Enemy Class Defaults, stock BT/BB editors, boss definition assets | `bt_asset_ai`, `bt_phase_ai`, `boss_phase`, and `boss_presentation` remote playtests |
| Place traversal, discovery, fast-travel, camp, fog-wall, or endgame actors | Level Editor placed actor Details | `fog_wall`, relevant playtest scenario, zone validator mock, and future placement/zone reports |
| Adjust Niagara, GameplayCues, camera, rumble, or UI payoff | GameplayCue Blueprints, Niagara, item visual fields, UMG, and presentation events | `impact_cue`, `status_payload`, and future cue coverage and presentation budget reports |
| Inspect tools, evidence, Build Doctor, or mutation safety | Ascentia Tooling settings, descriptor/profile assets, commandlet reports | `AscentiaRunToolCommandlet -ToolId=BuildDoctor -DryRun`, editor tooling tests, and manifest validation |
| Budget performance, release candidates, artifacts, waivers, or regression health | Performance/pipeline mock outputs and future release boards | Performance scenario mock, Agent 10 release mock, future packaged scenario and release candidate reports |

## Native-Only Stops

Stop at docs/evidence and route through native implementation work when a task
requires:

- authoritative gameplay state changes, damage application, rewards, inventory
  grants, currency mutation, spell unlocks, boss phase authority, encounter
  runtime state, or fog-wall runtime state;
- replication, Iris/Mover policy, server RPC validation, rollback, or audit
  logs;
- save/load internals, migration code, durable schema ownership, or release
  compatibility gates;
- evidence report schemas, mutation guard behavior, source-control/session guard
  policy, or commandlet repair execution;
- public claims, legal/privacy/rating policy, player data handling, or release
  signoff.

## Definite Custom Tool Candidates

These are worth planning because stock Unreal Editor surfaces will not give
Designers enough context by themselves. These tools should inspect, validate,
preview, and produce evidence. They should not replace stock Unreal editors
where those editors already handle the base authoring job.

Use `tools.html` for the specific editor-external bridge posture around
Landscry, Asset Factory, Skin Forge / InterfaceArtForge, Ultra Dynamic Sky, and
Fab / Marketplace intake.

| Tool | Why Ascentia needs it | First write policy |
| --- | --- | --- |
| Content Registry Browser | Shows resolved source, fallback debt, schema drift, source manifests, generated/external status, and package blockers across DataAssets, DataTables, registry rows, and fallbacks | Reports only until guarded import/promotion exists |
| World State Tree Viewer | Shows active/completed tags, objective dependencies, dialogue/vendor/tutorial sources, persistence status, stale tags, fixture state, and evidence | Read-only first |
| Dialogue Graph and Preview | Branching dialogue, localization, VO, subtitle rules, and state simulation outgrow actor arrays quickly | Compile to validated dialogue data once policy exists |
| AI Evidence Labs and Boss Move Matrix | Stock BT/BB editors do not show resolved enemy definitions, blackboard contracts, perception/threat decisions, reset policy, boss move quality, and latest evidence together | Reports and guarded profile updates only |
| GameplayCue Coverage Matrix | Designers own VFX/audio/camera/UI payoff, but every emitted cue/event needs visible coverage and scenario evidence | Reports only |
| Avatar Creator and Cosmetics Labs | Runtime assembly, stable save identity, hide-mask conflicts, PhysicsAsset/groom/cloth blockers, portrait drift, and stale evidence need a unified inspector | Guarded data/profile writes only |
| Item Economy and Reward Labs | Atomic vendor/crafting/reward transactions, price balance, vendor persistence, crafting/salvage outcomes, item identity, unique-power activation posture, Below rewards, and deterministic replay cannot be proven in stock panels | Guarded profile/data writes plus reports |
| Save Progression and Migration Labs | Slot summaries, fragments, migration fixtures, async results, checkpoint identity, old-save compatibility, and release gates need visible proof | Reports and guarded profile changes only |
| Skill/Spell Forge and Magic Replay Labs | Spell cost, cooldown, targeting, delivery, spellbook state, flask policy, cue coverage, UI prompts, and latest evidence need one relationship view | Guarded profile/data writes plus reports |
| Performance Budget and Scenario Boards | Insights/stat tools diagnose runs, but Ascentia needs target profiles, scenario identity, artifacts, percentiles, asset weights, scalability policy, trend deltas, and blockers | Reports and guarded profile changes only |
| Release Candidate and Artifact Boards | UAT logs, staged folders, regression evidence, waivers, artifact manifests, and cadence verdicts are too scattered for producer decisions | Candidate, waiver, and artifact report outputs |
| Surface Manifest Validator and Evidence Bridge | The compendium will rot without checks for broken docs, screenshots, IDs, statuses, validation references, missing proof, and stale proof | CI/build-doctor style report output |

## Screenshot Status

The current Designer Compendium is not screenshot-complete. The source branch
contains a screenshot runbook and P0 capture queue for 46 planned canonical
Editor screenshots. Placeholder images are expected while custom tools, report
boards, local content, or source-visible surfaces cannot be captured yet.

Placeholders must be visibly labeled, must live outside canonical `screenshots`
folders, and must not be listed in `canonical_screenshots`. They keep the UI
capture layer navigable, but they do not count as proof and they must not change
a shot to `captured`.

Evidence screenshots under `Saved/Automation/Evidence` or
`Saved/AscentiaEvidence` must not be copied into the compendium as if they were
canonical UI documentation.

Dashboard screenshot status now uses `missing`, `placeholder`, `captured`,
`stale`, and `verified`. See `DesignerSurface_Coverage_Matrix_Snapshot.md` for
the current public surface status.

## Source Links

- Source snapshots:
  source-snapshots.html
- Coverage matrix snapshot:
  DesignerSurface_Coverage_Matrix_Snapshot.md
- Designer task index snapshot:
  Designer_Task_Index_Snapshot.md
- External tool bridges:
  tools.html
