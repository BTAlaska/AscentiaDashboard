# Ascentia Tools

> Status: dashboard-published bridge map for editor-external production tools.
> Scope: Landscry, ARPG Asset Factory, Game World Asset Factory, Skin Forge /
> InterfaceArtForge, Ultra Dynamic Sky, and Fab / Marketplace intake.

The Tools page is not a list of things to buy or install. It is the bridge map
for external UI, art, world, and intake tools that can accelerate Ascentia only
when their output is wrapped by Ascentia profiles, validators, evidence, and
human review.

House rule:

```text
Buy the commodity.
Bridge the provider.
Build the Ascentia-specific contract.
Validate the result.
```

## Bridge Matrix

| Provider | Ascentia bridge | Evidence posture | Promotion gate |
| --- | --- | --- | --- |
| Landscry | `EUW_AscentiaWorldDirector`, `EUW_AscentiaLandscryImportAudit`, `EUW_AscentiaPCGProvenanceGate`, `PDA_WorldZone`, `PDA_WorldGenerationProfile` | Landscry output is source material. Evidence must show staging import, classification, Data Layer/HLOD coverage, PCG seed/provenance, nav and scale checks, and zone signoff under `Saved/AscentiaEvidence/P17/LandscryImport/{RunId}/report.json` plus zone delivery reports. | Generated terrain or POIs do not become production world structure until provenance, stable world identity, gameplay replacement, and human verdict pass. |
| Asset Factory | `EUW_AscentiaModularFitLab`, `EUW_AscentiaWeaponMountLab`, `EUW_AscentiaLODAndCollisionDoctor`, `EUW_AscentiaPackIngestor` | Generated armor and weapon variants are drafts. Evidence must include fit/clipping screenshots, socket profiles, LOD/collision/material reports, provenance, license notes, and equip-preview results. | Asset Factory output may create socket-profile drafts, but production rows cannot reference variants until a Designer verdict and source/provenance report exist. |
| Game World Asset Factory | Future P17/P23 non-structural world-asset quarantine intake, `EUW_AscentiaLODAndCollisionDoctor`, PCG provenance tags, Worldheart attachment metadata, and world-zone review | Generated static meshes remain external source material. Owner law assigns buildings and structural meshes to Worldheart; Meshy is limited to terrain/PCG meshes, props, and reviewed decorative attachments. The locked v3 catalog contains 25 archetypes and 1,125 plans. Of 79 completed packages, 50 remain current non-structural candidates and 29 structural results are historical quarantine only. Prompt Go and generated-result acceptance are separate: all 50 current packages start at Needs human review and require Keep or Reject bound to the exact GLB and package-manifest SHA-256. The browser also supports unlit/studio, full-screen, GLB, and canonical package-path review. Blender warnings and all missing Unreal checks remain explicit debt. | No generated mesh may bypass `ImportQueue/WorldAssets`, source/task provenance, Blender QA, a separate result Keep, Unreal quarantine, and a human Nanite/PCG/Worldheart-mount verdict. Keep retains a candidate only. The v2 approval is invalid; no job resumes without a new exact v3 user decision, hash, ID list, and cap. Structural results can never be promoted as Meshy-owned content. |
| Skin Forge / InterfaceArtForge | `EUW_AscentiaSkinForgeBridge`, UMGToolSet operations, CommonUI style assets, `EUW_AscentiaInputGlyphBinder`, text-scale/contrast checks | UI skin output is art direction and WBP styling, not UI authority. Evidence must include WBP skin application reports, missing binding warnings, style variance screenshots, keyboard/mouse/gamepad navigation proof, localization stress, and accessibility contrast results. | No generated skin ships unless CommonUI behavior, widget bindings, glyphs, localization, and readability proof survive the bridge. |
| Ultra Dynamic Sky | `EUW_AscentiaAtmosphereDirector`, `UAscentiaUDSAtmosphereAdapter`, `IAscentiaAtmosphereProvider`, `PDA_LightingMoodProfile`, `PDA_WeatherProfile`, `PDA_TimeOfDayProfile`, `EUW_AscentiaWeatherTimeScenarioLab` | UDS is an art-direction provider behind Ascentia atmosphere profiles. Evidence must include weather/time screenshot grids, lighting readability warnings, material/weather response checks, audio/VFX budget rows, performance buckets, and explicit gameplay opt-in proof. | Raw UDS actor edits are prototype-only. Cooked builds should block profile bypasses when atmosphere affects saves, gameplay, readability, performance, or accessibility. |
| Fab / Marketplace intake | `EUW_AscentiaExternalContentRegistry`, `EUW_AscentiaLicenseComplianceBoard`, `EUW_AscentiaExternalAssetQuarantine`, `EUW_AscentiaPluginDescriptorDoctor`, `EUW_AscentiaExternalUpgradePlanner`, `EUW_AscentiaExternalContentPromotionGate` | Intake is governance. Evidence must include source rows, license policy, purchase/version date, staging and production roots, plugin risk, attribution needs, quarantine findings, promotion report, and upgrade regression links. | Every promoted asset needs a source record. Unknown downloads, standalone redistribution risk, missing license rows, dangerous references, and unresolved plugin risk block promotion. |

## Cross-Cutting Posture

- Direct provider actors are allowed in prototype maps only.
- Direct provider use is acceptable for art-only content, not gameplay contracts.
- Cooked builds should block raw provider settings that bypass Ascentia profiles.
- Every bridge needs a stable profile, adapter, validator, and evidence report.
- Dashboard rows should link to the latest passing and latest failing proof.

## Tool Maturity Ledger

Every tool should use the same schema:

`Tool ID` | `owner` | `maturity` | `read/write/mutation level` |
`input assets` | `output reports` | `dry-run behavior` | `evidence path` |
`CI command` | `dashboard card` | `rollback path`

Start with the tools that prevent drift and unsafe mutation:

| Tool ID | Owner | Maturity | Mutation level | Inputs | Outputs | CI / proof | Rollback path |
| --- | --- | --- | --- | --- | --- | --- | --- |
| TOOL-SURF-001 Surface Manifest Validator + Evidence Bridge | Tools | P0 planned | Read/report only | Designer surface manifests, screenshots, source links, validation refs | Broken link/screenshot/proof report, dashboard card | `./check-links.ps1` plus future Build Doctor commandlet | No mutation; report rows only |
| TOOL-BUILD-001 Build Doctor | Build + QA | P0 planned | Dry-run first | Project settings, asset registry, plugin descriptors, maps, validators | PIE/cook blocker report with fix links | `AscentiaRunToolCommandlet -ToolId=BuildDoctor -DryRun` | Safe fix buttons only after validated maturity |
| TOOL-CONTENT-001 Content Registry Browser / Fallback Debt Reporter | Tech Design | P0/P23 gate | Read/report, guarded import later | CSV/source rows, generated DataTables, PrimaryDataAssets, native fallbacks | Resolved-record report, fallback-debt report, stale generated asset list | Data validation plus source hash/freshness checks | Generated artifacts can be rebuilt from source rows |
| TOOL-SHOT-001 Screenshot Capture/Verification Queue | Design + QA | P0 planned | Capture only | Screenshot manifest, target assets, source commit, viewport profile | Captured/stale/verified screenshot report | Screenshot manifest validator and dashboard snapshot table | Recapture from manifest; placeholders never count as proof |
| TOOL-REL-001 Release Candidate / Artifact Board | Release | P21 planned | Report/waiver only | UAT logs, artifacts, public claims, waivers, package profiles | Release candidate report, claim-safety rows, artifact manifest | Package smoke plus public claim safety check | Candidate can be blocked or superseded; no content mutation |

## Evidence Roots

```text
Saved/AscentiaEvidence/P17/LandscryImport/{RunId}/report.json
Saved/AscentiaEvidence/P17/{Atmosphere,WeatherTime,LightingReadability,AtmospherePerformance}
Saved/AscentiaEvidence/Tools/{ContentProvenanceBrowser,WeaponMountLab,BuildDoctor}/{RunId}/report.json
Saved/AscentiaEvidence/P23/{ExternalContent,LicenseCompliance,PluginDescriptors}
Saved/AscentiaEvidence/P23/{ExternalAssetQuarantine,ExternalContentPromotion,ExternalUpgradePlan}
```

## First Implementation Slices

1. Landscry: import one test zone into staging, attach `PDA_WorldZone`, run
   import audit, and publish a no-promotion evidence card.
2. Asset Factory: ingest two armor/weapon variants, run fit/socket/LOD/collision
   checks, and require a Designer accept/reject verdict.
3. Game World Asset Factory: record a separate hash-bound Keep or Reject for
   each of the 50 landed current-scope packages, keep 29 structural packages as
   historical quarantine only, and require a new explicit v3 decision before
   preparing any remainder or attachment prompts. Prompt Go never accepts a
   provider result; Keep still requires later Unreal Nanite/PCG and
   Worldheart-mount verdicts.
4. Skin Forge / InterfaceArtForge: apply one UI skin to inventory, loot window,
   HUD, and settings, then prove bindings, navigation, text scale, and contrast.
5. Ultra Dynamic Sky: wrap clear, rain, storm, dusk, night, and snow profiles in
   Ascentia atmosphere data and capture screenshot/performance/readability proof.
6. Fab / Marketplace: quarantine one pack, record source/license/plugin rows,
   generate a promotion plan, and block production use until the evidence is
   accepted.
