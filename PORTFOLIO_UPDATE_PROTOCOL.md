# Mythic Systems Portfolio Update Protocol

This dashboard is the portfolio reporting layer for Ascentia, Landscry v0.2,
Worldheart, ARPG Asset Factory, Interface Art Forge / MythicSkinForge, and the
coordination depot itself. It does not replace any project's constitution,
accepted work order, ADR, gate, source record, or handoff.

## Required closeout for material work

After work changes a project's current focus, capability, proof posture,
blocker, authority, integration boundary, or next decision:

1. Update the governed source record in that project first.
2. Update the matching curated record in `portfolio-data.js`.
3. Keep activity, capability, and proof separate. A commit, generated image,
   or passing local test does not by itself promote a gate or release claim.
4. Set the review date and cite the exact evidence or signed record used.
5. Sweep your own outputs per `D:\Ascentia\ops\ARTIFACT_HYGIENE.md`: promote
   generated material to its declared home (and record it) or delete it.
   Disposables belong in date-stamped `.scratch\YYYYMMDD-<purpose>\` folders.
6. Run `refresh-portfolio.ps1` for current local Git pulse plus the disk and
   hygiene sweep (`-SkipDisk` for a quick pulse-only pass), then check the
   Hygiene panel for new weight, overdue scratch, or unindexed paths.
7. Run `check-links.ps1` and a JavaScript syntax smoke before closeout.

If the dashboard repo is unavailable or out of scope, the handoff must include
this payload so the next dashboard session can apply it without guessing:

```text
PORTFOLIO UPDATE
project:
source revision:
current focus:
capability change:
proof/review change:
blockers:
next decision/action:
dashboard record still required: yes
```

## What does not require a curated update

- formatting-only changes;
- refactors with no user-visible capability, proof, risk, or plan change;
- generated retries that do not change the accepted candidate; and
- ordinary commits already covered by the existing project summary.

The local Git overlay may still show these as activity after a refresh.

## Status vocabulary

- `active`: coherent work is in progress under a current authority.
- `attention`: useful capability exists, but coordination, proof, drift, or
  ownership needs a decision.
- `blocked`: the declared next work is gated by an unresolved prerequisite.
- `review`: machine work is ready for an explicitly human decision.
- `paused`: intentionally not consuming development attention.

Never collapse these into one portfolio completion percentage.

## Local refresh

From the dashboard repo:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\refresh-portfolio.ps1
```

This writes ignored `portfolio-local.js`. It records local paths and live Git
pulse for this machine, so it must not be committed or used as claim evidence.
