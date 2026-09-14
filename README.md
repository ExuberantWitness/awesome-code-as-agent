# Awesome Code as Agent

> A navigable 3D knowledge map of **291 papers** on how LLM agents use executable code to perceive, act, learn, and improve — spanning **10 scenes × 7 directions × 5 update levels × 4 runtime quadrants**.

**Don't just read the list — navigate the space.**

## 🧊 Quick Start

Open [`code-as-policy-cube.html`](code-as-policy-cube.html) in your browser (needs internet for Three.js CDN):
- **Drag to rotate, scroll to zoom, click cubes to explore papers**
- Switch between **3D Spectrum** and **Paper Database** views
- Filter by scene, direction, update level, time quadrant, oracle type, domain, verification status
- Click any paper title in a popup → jumps to its database entry

## The Four-Dimension Taxonomy

### X: Scene — What does the agent write?

| Scene | Description | Papers |
|-------|-------------|--------|
| Policy | Code as robot/control policy | 24 |
| Action | Code as unified action space (GUI/OS/software) | 26 |
| Reward | Code as reward function or training pipeline | 19 |
| Skill | Code as reusable skill/library unit | 16 |
| Constraint | Code as executable safety constraint or monitor | 18 |
| World | Code as world model / executable world representation | 33 |
| Design | Code as design artifact (CAD, ontology, frontend, law) | 27 |
| Reasoning | Code as reasoning medium (program-of-thought) | 22 |
| Agent-Self | Code as the agent's own architecture/workflow | 25 |
| Research | Code as the research process itself | 26 |

### Z: Research Direction — How does the agent write?

| Direction | Philosophy |
|-----------|-----------|
| One-shot Generation | Generate once, no iteration |
| Closed-Loop Adjustment | Generate → execute → diagnose → revise |
| Evolutionary Search | Population + parallel evaluation + selection |
| Skill Accumulation | "Turn one-time success into retrievable assets" |
| Multi-Agent | Role division and collaboration across agents |
| World Model | Feedback/planning via a world model, not direct interaction |
| Memory/Context | The management of experience representations is itself improved |

### Y: Update Capability — Where does improvement land?

| Level | Name | Description |
|-------|------|-------------|
| L0 | Mechanism Frozen | LLM frozen, no self-improvement |
| L1 | Self-Evolvable | Modify prompts/workflows/skill libraries, no weight updates |
| L2 | Adaptive Output | Test-time training, no permanent weights |
| L3 | Weight Adjustment | Formal weight updates (LoRA or full SFT/RL) |
| L4 | RSI | Weight/code self-update with accelerating improvement trend |

### Time Quadrant — Runtime behavior (2-bit)

| Quadrant | Collect Data | Train | Count |
|----------|-------------|-------|-------|
| 🔴 A | ✓ | ✓ | 52 |
| 🟡 B | ✓ | ✗ | 128 |
| 🔵 C | ✗ | ✓ | 6 |
| ⚪ D | ✗ | ✗ | 95 |

## Additional Tags

- **Feedback Stack**: ★ Evidence → ★★ Verification → ★★★ Data Flywheel
- **Oracle Type**: ⚙ Symbolic / 🖥 Simulation / 🧠 Model / 🦾 Real / 👤 Human
- **Domain**: 14 verticals (robot, software, math, chip, CAD, frontend, ontology, law, ...)
- **Self-Referential Closure**: 🪞 Does the improvement target include the improver itself?

## Key Findings

1. **Hourglass distribution**: L0 (frozen) and L3 (weight training) are crowded; L1/L2 (lightweight, reversible, test-time) are the gap
2. **World models have 5 roles**: oracle / training ground / filter / imagination space / intrinsic motivation source
3. **Code space vs latent space**: Two parallel world model methodologies (CWM writes executable Python; PAN predicts in JEPA latent space)
4. **RSI vertical ladder**: Math (STP→AZR), Software (SICA→Frontis-MA1→DGM), Drug discovery (molecular self-improvement)
5. **Memory direction is exploding**: 25 papers in 4 rounds — from MemGPT to Memory-R1 (RL-trained memory operations)

## Repository Structure

```
awesome-code-as-agent/
├── README.md                       # You are here
├── code-as-policy-cube.html        # 3D interactive cube (v6.5)
├── code-as-policy-spectrum.html    # 2D matrix snapshot (Rev.8, legacy)
└── data/
    └── papers.json                 # 291 papers with 8-dimension tags
```

## Contributing

To add a paper, edit `data/papers.json` with this format:

```json
{
  "n": "Paper Title",
  "l": "https://arxiv.org/abs/XXXX.XXXXX",
  "m": "Venue · Year · Team",
  "d": "One-sentence description",
  "v": "ok | search | mem",
  "nums": ["key result numbers"],
  "scenes": ["policy", "action"],
  "dirs": ["loop", "evo"],
  "lvl": 0,
  "stk": 2,
  "rtc": 1, "rtt": 0,
  "ts": "b",
  "oracle": ["sim", "model"],
  "dom": "robot"
}
```

Then rebuild the HTML from the JSON data.

## License

MIT

## Acknowledgments

Built through iterative literature survey rounds (R1-R12+), with papers verified through direct arXiv page access where possible. Verification levels: ✅ session-verified / 🔍 multi-source confirmed / ⚠️ from memory (link points to search page).
