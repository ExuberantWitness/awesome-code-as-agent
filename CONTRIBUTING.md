# Contributing to Awesome Code as Agent

## How to Add a Paper

1. Edit `data/papers.json` — add a new entry at the end of the array
2. Follow the tag format below
3. Submit a PR with title format: `[paper] Paper Title (arXiv ID)`

## Tag Format Reference

| Field | Type | Values | Description |
|-------|------|--------|-------------|
| `n` | string | — | Full paper title |
| `l` | string | URL | Direct link (prefer arXiv abs page) |
| `m` | string | — | Venue · Year · Team |
| `d` | string | — | One-sentence description (Chinese or English) |
| `v` | string | `ok` / `search` / `mem` | Verification level |
| `nums` | array | — | Key result numbers (e.g., `["+52%", "SOTA"])` |
| `scenes` | array | See below | Scene tags (multi-value) |
| `dirs` | array | See below | Direction tags (multi-value, combo=true if >1) |
| `lvl` | int | 0-4 | Update capability level |
| `stk` | int | 0-3 | Feedback stack depth (0=none, 1=evidence, 2=verification, 3=flywheel) |
| `rtc` | int | 0/1 | Runtime data collection (1=yes) |
| `rtt` | int | 0/1 | Runtime training (1=yes) |
| `ts` | string | `a`/`b`/`c`/`d` | Time quadrant (derived from rtc/rtt) |
| `oracle` | array | See below | Feedback oracle types (multi-value) |
| `dom` | string | See below | Vertical domain |
| `combo` | bool | auto | Set true if scenes.length>1 or dirs.length>1 |

## Scene Values

`policy` `action` `reward` `skill` `constraint` `world` `design` `reasoning` `agentself` `research`

## Direction Values

`oneshot` (one-shot generation) `loop` (closed-loop adjustment) `evo` (evolutionary search) `skill` (skill accumulation) `multi` (multi-agent) `wm` (world model) `mem` (memory/context)

## Oracle Values

`sym` (compiler/tests/reasoner) `sim` (simulation/rendering) `model` (VLM/self-eval/majority-vote) `real` (physical robot) `human` (human feedback) `na` (none)

## Domain Values

`general` `robot` `swe` (software engineering) `math` `chip` `front` (frontend) `gui` `web` `cad` `onto` (ontology) `law` `arch` (architecture/BIM) `drug` `mc` (game)

## Time Quadrant

| ts | rtc | rtt | Meaning |
|----|-----|-----|---------|
| a | 1 | 1 | Runtime collect + runtime train (online learning) |
| b | 1 | 0 | Runtime collect, no training (experience accumulation) |
| c | 0 | 1 | No collection, runtime train (input-stream adaptation) |
| d | 0 | 0 | Frozen at runtime |

## Guidelines

- **Link must be to a paper page** (arXiv, OpenReview, publisher) — not to GitHub repos or blog posts
- **Full paper title** — if there's an abbreviation, include both (e.g., "GEPA: Reflective Prompt Evolution Can Outperform RL")
- **Description should capture the key mechanism**, not just the result
- **Verification honesty**: mark `mem` if you haven't opened the paper page; `search` if you found it via search but haven't read it; `ok` only if you've directly accessed and verified the paper
