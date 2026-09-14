# Awesome Code as Agent

**[中文版](README_CN.md)** | **English**

> A navigable 3D knowledge map of **291 papers** on how LLM agents use executable code to perceive, act, learn, and improve — spanning **10 scenes × 7 directions × 5 update levels × 4 runtime quadrants**.

**Don't just read the list — navigate the space.**

## 🧊 Preview

| 3D Knowledge Cube | Paper Database |
|:-:|:-:|
| ![3D Cube](screenshots/cube-overview.png) | ![Database](screenshots/database-view.png) |
| Drag · Zoom · Click cubes | Search · Filter · 8-dim tags |

## Quick Start

**Step 1** — Clone this repo:

```bash
git clone https://github.com/ExuberantWitness/awesome-code-as-agent.git
cd awesome-code-as-agent
```

**Step 2** — Open the 3D cube in your browser:

```bash
# macOS / Linux
open code-as-policy-cube.html

# Windows
start code-as-policy-cube.html

# Or just double-click the file in your file manager
```

> ⚠️ Requires internet connection (Three.js loads from CDN)

**Step 3** — Explore:

1. **Drag to rotate** the 3D lattice, scroll to zoom
2. **Click any cube** to see papers in that cell, grouped by runtime quadrants
3. **Click paper titles** in popups → jumps to the database entry with full tags
4. **Filter** by update level (L0-L4), or switch to Database view for multi-dimensional search
5. **Find research gaps** — cells showing "no papers yet" are empty research slots

## The Taxonomy

### X: Scene — What does the agent write?

| Scene | Description | Papers |
|-------|-------------|--------|
| 🎯 Policy | Code as robot/control policy | 24 |
| 🖱️ Action | Code as unified action space (GUI/OS) | 26 |
| 🏆 Reward | Code as reward function or training pipeline | 19 |
| 🔧 Skill | Code as reusable skill/library unit | 16 |
| 🛡️ Constraint | Code as safety constraint or monitor | 18 |
| 🌍 World | Code as world model / executable world | 33 |
| 📐 Design | Code as design artifact (CAD, ontology, law) | 27 |
| 🧠 Reasoning | Code as reasoning medium | 22 |
| 🤖 Agent-Self | Code as the agent's own architecture | 25 |
| 🔬 Research | Code as the research process itself | 26 |

### Z: Research Direction — How does the agent write?

| Direction | Philosophy |
|-----------|-----------|
| One-shot | Generate once, no iteration |
| Closed-Loop | Generate → execute → diagnose → revise |
| Evolutionary | Population + parallel evaluation + selection |
| Skill Accumulation | "Turn one-time success into retrievable assets" |
| Multi-Agent | Role division across multiple agents |
| World Model | Feedback via a world model, not direct interaction |
| Memory/Context | Management of experience representations is itself improved |

### Y: Update Capability — Where does improvement land?

| Level | Name | Description |
|-------|------|-------------|
| L0 | Mechanism Frozen | LLM frozen, no self-improvement |
| L1 | Self-Evolvable | Modify prompts/workflows/skills, no weights |
| L2 | Adaptive Output | Test-time training, no permanent weights |
| L3 | Weight Adjustment | Formal weight updates (LoRA or full SFT/RL) |
| L4 | RSI | Self-update with accelerating improvement |

### Time Quadrant — Runtime behavior (2-bit)

| | Train ✓ | Train ✗ |
|---|---|---|
| **Collect ✓** | 🔴 A: Online learning (52) | 🟡 B: Experience accumulation (128) |
| **Collect ✗** | 🔵 C: Input-stream adaptation (6) | ⚪ D: Frozen (95) |

## Additional Tags

- **Feedback Stack**: ★ Evidence → ★★ Verification → ★★★ Data Flywheel
- **Oracle Type**: ⚙ Symbolic / 🖥 Simulation / 🧠 Model / 🦾 Real / 👤 Human
- **Domain**: 14 verticals (robot, software, math, chip, CAD, frontend, ontology, law, ...)
- **Self-Referential Closure**: 🪞 Does the improvement target include the improver itself?

## Key Findings

1. **Hourglass distribution** — L0 (frozen) and L3 (weight training) are crowded; L1/L2 (lightweight, reversible) are the gap
2. **World models have 5 roles** — oracle / training ground / filter / imagination space / intrinsic motivation source
3. **Code space vs latent space** — two parallel world model methodologies (CWM writes executable Python; PAN predicts in JEPA latent)
4. **RSI vertical ladder** — Math (STP→AZR), Software (SICA→Frontis-MA1→DGM), Drug discovery (molecular self-improvement)
5. **Memory direction is exploding** — 25 papers in 4 survey rounds, from MemGPT to Memory-R1 (RL-trained memory operations)

## Repository Structure

```
awesome-code-as-agent/
├── README.md                       # You are here
├── README_CN.md                    # 中文版
├── code-as-policy-cube.html        # 3D interactive cube
├── code-as-policy-spectrum.html    # 2D matrix (legacy)
├── data/
│   └── papers.json                 # 291 papers, 8-dim tags
├── screenshots/
│   ├── cube-overview.png           # 3D cube view
│   ├── database-view.png           # Paper database
│   └── modal-quadrant-groups.png   # Quadrant groups in popup
└── .claude/skills/open-awesome-cube/  # Agent skill
```

## Student Guide

New to this field? Check out the [Student Guide](STUDENT_GUIDE.md) — a 5-minute walkthrough on how to use the 3D cube to find research gaps, pick a thesis topic, and understand the landscape.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the paper tag format and guidelines.

## License

MIT
