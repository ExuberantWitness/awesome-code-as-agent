# Awesome Code as Agent

**[中文版](README_CN.md)** | **English**

> A navigable 3D knowledge map of **428 papers** on how LLM agents use executable code to perceive, act, learn, and improve — spanning **10 scenes × 7 directions × 5 update levels × 4 runtime quadrants**.

**Don't just read the list — navigate the space.**

## ▶ [Play the live 3D cube — no install, runs in your browser](https://exuberantwitness.github.io/awesome-code-as-agent/code-as-policy-cube.html)

## 🧊 Preview

| 3D Knowledge Cube | Paper Database |
|:-:|:-:|
| ![3D Cube](screenshots/cube-overview.png) | ![Database](screenshots/database-view.png) |
| Drag · Zoom · Click cubes | Search · Filter · 8-dim tags |

## Quick Start

**Step 0 — No install?** [Play it live in your browser](https://exuberantwitness.github.io/awesome-code-as-agent/code-as-policy-cube.html).

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
5. **Memory direction is exploding** — from MemGPT to Memory-R1 (RL-trained memory operations), plus self-programming memory (MemCodex) and learnable CRUD policies (AtomMem)
6. **Harness-RSI cluster has formed** (L4 × agent-self) — DGM stood alone; now SoL-Pi (NVIDIA, auto-research loops recursively optimizing the agent harness, 3.4k stars), RRSI (first systematic diagnosis of harness-RSI overfitting), and RSI-Anything join it
7. **World model × L4 was a blank cell — now filled** — RSI-Anything uses JEPA predictive world models to guide both action selection and learning-data selection, connecting the two formerly separate clusters
8. **Auto-defined rubrics** — the verifier library has a second auto-fill path: instead of memorizing verification experience, systems now synthesize structured criteria (RaR, Rubric-ARM's co-evolving generator+judge, RM-R1), converging on executable rubrics — the natural-language twin of the reward-code line (Text2Reward/Eureka)

## Recent Updates

- **2026-10-22 — Papers-with-Code integration (live)**
  - : weekly enrichment (citations/repositories/datasets) + keyword-based candidate discovery; first full sync: 248/370 arXiv-linked papers matched, 62 new candidates found
  - Weekly automation scheduled (Mon 09:00): sync → commit → push → report top candidates

- **2026-10-21 — +43 papers (427 total)**
  - Harness-RSI line grows: Harness², Terminal-RSI, DiscoveryRSI; rubric×RL meets (RARE); self-distillation line (OPSD, Neighborhood-OPSD, RISE-family); memory line (Hy-Memory-30B, CarryOn); JEPA-Anything (RSI-Anything foundation); Self-Building Labs & Compositional Machine Design (PRSI P4/P5 neighbors); RealtimeBench live-clock eval; code-worlds line (AgentGarten, WorldStream, Player-1)

- **2026-10-21 — +15 papers (427 total): physics-grounded 3D generation & simulation cluster**
  - PhysGaussian / 3D Constitutive Gaussians / PhysDreamer (physics×3D Gaussians line), PAC-NeRF / NeuMA / PhysTwin (system identification & digital twins), Atlas3D / PhysX-3D / GaussianProperty (physics-grounded assets), URDFormer / Articulate-Anything / SPARK / RoboCousin (VLM-built simulation environments), PhyScene, Material Palette

- **2026-10-16 — Paper index redesigned as GPT-3-baseline improvement cards**
  - Each paper card shows, per dimension (Direction / Update Capability / Runtime Behavior / Feedback Stack / Improves itself?), the concrete design and its gain over the simplest chatbot Q&A
  - Pilot: 30 cards live (RSI cluster + self-referential + data-flywheel papers); remaining 339 auto-listed in the pending table until migrated

- **2026-10-16 — +26 papers (369 total)**
  - **Weight×harness bridge** — [Evo²](https://arxiv.org/abs/2610.13025) co-evolves model weights and the agent harness with a dual-role Proposer/Reflector, training the evolver itself (L4); the evolved harness transfers cross-benchmark without further evolution
  - 🎯 **Filled the last blank frontier cell: World model × L4** — [RSI-Anything](https://arxiv.org/abs/2610.13912) (JEPA-Anything) lets a predictive world model select both actions and learning data, with compatibility checks gating retention
  - **Harness-RSI cluster formed** — [SoL-Pi](https://arxiv.org/abs/2609.20519) (NVIDIA, 3.4k★: auto-research loops that recursively optimize the agent's own harness) + [RRSI](https://arxiv.org/abs/2609.24972) (regularization against harness overfitting — the ML-101 lesson DGM was missing)
  - **Memory self-evolution thickens** — MemCodex (open-ended evolution of memory programs), AtomMem (RL-trained CRUD policies), RSI Agent (training-free 3-agent exploration)
  - **Autoresearch pathology** — Fork-and-Flush's "idea basins" (repeated runs get trapped in local solution regions) and Arbor's hypothesis-tree countermeasure
- **2026-10-15 — +12 papers (343 total)**
  - **Auto-rubric line imported** (RaR, Rubric-ARM, RM-R1, Self-Taught Evaluators, AutoBencher, …) — the verifier library's second auto-fill path
  - **PRSI manifesto** — physical recursive self-improvement (P1–P5 causal positions), the physical-world mirror of the DFM endpoint

## Paper Index (369)

<!-- PAPER-INDEX:START -->
<!-- Paper index (generated by tools/gen_paper_table.js — do not edit by hand) -->

The reference baseline of this index is the **simplest chatbot Q&A (GPT-3 mode)**: a frozen model, single-turn prompt→answer, no tools, no feedback, no memory. Each card answers one question — what concrete designs the paper introduces over that baseline, and the gain each design brings. The five dimensions (Direction / Update Capability / Runtime Behavior / Feedback Stack / Improves itself?) each get a four-column sub-table: **Tag** (which dimension) → **Design in the paper** (what was done) → **Gain from the design** (what was achieved) → **Why the gain happens** (first-principles explanation). Design and gain cells quote the paper's original wording wherever possible (quote + one-line summary); the **why column is editorial by default** (papers rarely explain their own why) and quotes the paper when it does. Editorial inference is marked "编者按"/"editor". See [The Taxonomy](#the-taxonomy) and [Additional Tags](#additional-tags).

**Progress**: 32 papers migrated to cards | 396 pending (listed in the table below until fully migrated)

### 1. [Robot-Powered Data Flywheel (RPDF)](https://arxiv.org/abs/2511.19647)

**Scene**: Policy | **Domain**: Robotics | **Oracle**: Real-world, Model

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Closed-loop | Paper: "Robots, as embodied agents, are uniquely positioned to close this gap: they can act in physical environments to collect large-scale, real-world data that enriches FM training with precisely the examples current models lack"<br>**Summary**: robots turn from model consumers into data producers | Motive, verbatim: "their reliance on internet pretraining data leaves them brittle in unstructured, real-world settings. The messy, real-world data encountered during deployment (e.g. occluded or multilingual text) remains massively underrepresented"<br>**Summary**: internet corpora miss exactly the messy deployment data | **Why**: distribution repair — deployment naturally generates complement-of-training samples; the robot fills the long tail while working (editor) |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Weight training | Collected data + auto-labeling flow back to FM training (mechanism)<br>**Summary**:— | Paper: FM gains on real-robot tasks (numbers in paper)<br>**Summary**:— | **Why**:— |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Collects + trains | Deployment is collection (mechanism)<br>**Summary**:— | — | **Why**:— |

**Feedback Stack**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Data flywheel | More deployment → more data → stronger model → more deployment (mechanism)<br>**Summary**:— | — | **Why**:— |

**Improves itself?**：No

---

### 2. [DexFlyWheel](https://arxiv.org/abs/2509.23829)

**Scene**: Policy | **Domain**: Robotics | **Oracle**: Real-world, Model

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Closed-loop | Paper: "a scalable data generation framework that employs a self-improving cycle to continuously enrich data diversity. Starting from efficient seed demonstrations warmup, DexFlyWheel expands the dataset through i[terative...]"<br>**Summary**: seed-demo warmup → self-improving cycle expands data | Motive, verbatim: "diverse and high-quality datasets remain scarce. Existing data collection methods either rely on human teleoperation or require significant human engineering, or generate data with limited diversity"<br>**Summary**: teleop is costly; auto-generation lacks diversity | **Why**: diversity comes from combinatorial task explosion — each round's successful policies seed the next; task space grows with the capability radius (editor) |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Weight training | IL init + residual RL on top (paper setup, editor summary)<br>**Summary**: keeps demo priors, exceeds the IL ceiling | Paper: dexterous manipulation gains (numbers in paper)<br>**Summary**:— | **Why**: residual parameterization separates "learn corrections" from "learn the whole policy" — small correction gradients are stable and don't wash out demo priors (editor) |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Collects + trains | Real-robot rollouts are the collection (mechanism)<br>**Summary**: data distribution = deployment distribution | — | **Why**:— |

**Feedback Stack**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Data flywheel | Paper: "self-improving cycle to continuously enrich data diversity"<br>**Summary**: flywheel in the title | — | **Why**:— |

**Improves itself?**：No

---

### 3. [VERITAS](https://arxiv.org/abs/2606.18247)

**Scene**: Policy | **Domain**: General | **Oracle**: Model, Real-world

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Closed-loop | Paper: "a generator-verifier framework for generalist robot policies for inference-time policy steering and self-improvement. We use a pre-trained generalist robot policy as a 'generator' and pair it with a gradient-free 'visual verifier' that evaluates actions at inference time"<br>**Summary**: pretrained policy as generator + gradient-free visual verifier scoring actions at inference | Motive, verbatim: "Robots deployed in the real world should learn from their experience and improve over time. This requires a mechanism of practicing and learning from feedback"<br>**Summary**: deployed robots need experience-based improvement | **Why**: gradient-free verification filters actions without touching weights — verification is orders cheaper than training: generate expensively, filter cheaply (editor) |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Weight training | Paper: verified experience flows back to retrain the policy (mechanism)<br>**Summary**: only verified trajectories return | Paper: post-self-improvement gains (numbers in paper)<br>**Summary**: both inference-time steering and training-time gains | **Why**: data passes a verification gate first — bad trajectories never enter training; data quality monotonically improves (editor) |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Collects, no training | Inference-time verification-only steering; training offline (mechanism)<br>**Summary**: zero training overhead at deployment | Paper: "improves policy performance without additional training" (steering part)<br>**Summary**: gains without training | **Why**: constraint satisfaction at decoding — the verifier's score acts as a search heuristic; best-of-N needs no gradients (editor) |

**Feedback Stack**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Data flywheel | Verified trajectories keep flowing back (mechanism)<br>**Summary**: the textbook flywheel | — | **Why**:— |

**Improves itself?**：No

---

### 4. [Socratic-SWE: Self-Evolving Coding Agents via Trace-Driven Evolution](https://arxiv.org/abs/2606.07412)

**Scene**: Action | **Domain**: Software | **Oracle**: Symbolic

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Closed-loop | Paper: "a closed-loop self-evolution framework that reuses the agent's historical solving traces as a source of training signal. Rather than treating traces only as [outcomes]"<br>**Summary**: historical solving traces recycled as training signal | Paper (critique of prior synthetic data): "Existing synthetic data methods typically create tasks through fixed mutation or bug-injection procedures, making the resulting distributions largely independent of the agent's own weaknesses and training progress"<br>**Summary**: fixed-mutation tasks ignore the agent's weaknesses | **Why**: training data should target current weaknesses — one's own failure traces are exactly at the ability edge, closer to the zone of proximal development than synthetic bugs (editor) |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Weight training | Paper: targeted repair tasks generated from traces; closed-loop finetuning (mechanism)<br>**Summary**: traces → tasks → training | Paper: SWE success improves after self-evolution (numbers in paper)<br>**Summary**:— | **Why**:— |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Collects, no training | Traces collected at runtime; training offline (mechanism)<br>**Summary**:— | — | **Why**:— |

**Feedback Stack**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Data flywheel | Traces → tasks → training → stronger agent → better traces (mechanism)<br>**Summary**:— | — | **Why**:— |

**Improves itself?**：No

---

### 5. [CodeActInstruct → CodeActAgent](https://huggingface.co/xingyaoww/CodeActAgent-Mistral-7b-v0.1)

**Scene**: Action | **Domain**: Software | **Oracle**: Symbolic

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Closed-loop | Project page (editor note): 7,139 execution-feedback self-correction trajectories instruction-tune the model — distill notice-error → fix → retry into weights<br>**Summary**: self-correction behavior into weights | Project claim: 7B matches models 5-10× larger (self-reported)<br>**Summary**: small model + self-correction ≈ big model | **Why**: self-correction is emergent in large models — explicitly collecting and SFT-ing these trajectories gives 7B the behavior without the emergence (editor) |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Weight training | 7,139 self-correction trajectories SFT (project setup)<br>**Summary**: one-time distillation | — | **Why**:— |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Frozen at runtime | No collection or training at deployment; self-correction lives in weights (setup)<br>**Summary**: zero inference overhead | — | **Why**:— |

**Feedback Stack**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Data flywheel | Execution feedback produced the dataset (one-time; open-sourced)<br>**Summary**:— | — | **Why**:— |

**Improves itself?**：No

**Other findings in the paper**: This entry is a model card, not a paper; quotes from the project page.

---

### 6. [Self-Taught Evaluators](https://arxiv.org/abs/2408.02666)

**Scene**: Reward | **Domain**: NLP | **Oracle**: Model

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Closed-loop | Paper: "an iterative self-training algorithm... starting from a small seed set of instructions, responses are generated, and pairs of responses are compared"<br>**Summary**: synthesize response pairs → reason preferences → train the judge, loop | Motive, verbatim: "the standard approach is to collect a large amount of human preference judgments over model responses, which is costly and the data becomes stale as models improve"<br>**Summary**: human preferences are costly and go stale | **Why**: only a judge evolving with the judged stays fresh — static RMs systematically miscalibrate as models strengthen (editor) |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Weight training | Paper: "improve a strong LLM (Llama3-70B-Instruct) from 75.4 to 88.3 (88.7 with...) [on RewardBench]"<br>**Summary**: self-trained judge 75.4→88.3 | Paper: "Without any labeled preference data"<br>**Summary**: zero labels, matching human-labeled RMs | **Why**: preference-judgment ability already latents in strong models — self-training aligns that potential to the evaluation format (editor) |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Collects + trains | Synthetic data used as produced (mechanism)<br>**Summary**: data cost ≈ inference cost | — | **Why**:— |

**Feedback Stack**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Verification feedback | Paper: generates "analysis of the differences between the responses" as preference rationale (mechanism)<br>**Summary**: every label carries a reasoning chain | — | **Why**: the chain is the label's explicit rationale — wrong labels localize to wrong reasoning steps (editor) |

**Improves itself?**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Yes | The judge creates its own training data (mechanism)<br>**Summary**: evaluator self-reference | — | **Why**: self-reference risk = preference drift; mitigation = start from a strong seed's relative judgments, anchored in inter-model consistency (editor) |

---

### 7. [Rubric-ARM: Alternating RL for Rubric-Based Reward Modeling](https://arxiv.org/abs/2602.01511)

**Scene**: Reward | **Domain**: NLP | **Oracle**: Model

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Closed-loop | Paper: "jointly optimizes a rubric generator and a judge using reinforcement learning from preference feedback"<br>**Summary**: rubric generator and judge evolve in alternating RL | Paper (on prior work): "Unlike existing methods that rely on st[atic...]" — static rubrics cannot evolve<br>**Summary**: criteria and execution co-evolve | **Why**: rubric and judge are two halves of an evaluation system — fixing one and optimizing the other reaches only local optima; alternation approaches the joint optimum (editor) |
| Multi-agent | Generator πr and judge πj with separated duties (paper construction)<br>**Summary**: clear per-role objectives | — | **Why**: separation makes credit assignable — judge errors and criteria errors are separately attributable (editor) |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Weight training | Both RL-trained from preference feedback (paper construction)<br>**Summary**: both roles reach the weight layer | Paper: "achieving a +4.7% average gain on reward-modeling [benchmarks]" (9 reward-modeling + 6 policy benchmarks)<br>**Summary**: +4.7% average gain | **Why**: alternating training is coordinate ascent — fix one side, optimize the other; monotone hill-climbing (editor) |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Collects + trains | Preference pairs collected and consumed during training (mechanism)<br>**Summary**:— | — | **Why**:— |

**Feedback Stack**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Verification feedback | Judge scores rubric item by item (mechanism)<br>**Summary**: structured scoring | — | **Why**: rubrics decompose "is it good" into checkable predicates — evaluation becomes an auditable checklist, not a gestalt impression (editor) |

**Improves itself?**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Yes | The judge grades the generator; both train each other (mechanism)<br>**Summary**: answers "who grades the grader" | — | **Why**: the judge's judge is the preference data itself — external preference anchors the alternation's fixed point, preventing collusive degeneration (editor) |

---

### 8. [Self-Rewarding Language Models](https://arxiv.org/abs/2401.10020)

**Scene**: Reward | **Domain**: General | **Oracle**: Model

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Closed-loop | Paper: "the language model itself is used via LLM-as-a-Judge prompting to provide its own rewards during training"<br>**Summary**: the LLM judges itself to issue rewards | Motive, verbatim: "Current approaches commonly train reward models from human preferences, which may then be bottlenecked by human performance level, and secondly these separate frozen reward models cannot then learn to improve during LLM training"<br>**Summary**: human ceiling + frozen-RM staleness | **Why**: reward source and trainee are the same model — the reward rises with the model, bypassing both the human ceiling and RM staleness (editor) |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Weight training | Paper: "during Iterative DPO training that not only does instr[uction following improve]" — self-rewarded data via iterative DPO (mechanism)<br>**Summary**: self-reward + iterative DPO | Paper: sustained multi-round gains on instruction following and chat (numbers in paper)<br>**Summary**:— | **Why**: DPO needs no explicit RM — preference pairs go straight into policy, and the self-judge's output is exactly the pairs (editor) |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Collects + trains | — | — | **Why**:— |

**Feedback Stack**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Data flywheel | Each round's self-rewarded data trains a stronger self-judge (mechanism)<br>**Summary**:— | — | **Why**:— |

**Improves itself?**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Yes | Paper (editor note): judge, data source, and trainee are one model<br>**Summary**: the canonical self-referential form | — | **Why**: the failure mode is self-preference drift (favoring one's own style); mitigation per paper: judging anchored to instruction-following criteria rather than free preference (editor) |

---

### 9. [SER: Self-Evolved Reward Learning for LLMs](https://arxiv.org/abs/2411.00418)

**Scene**: Reward | **Domain**: General | **Oracle**: Model

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Closed-loop | Paper: "As language models improve, human input may become less effective in further enhancing their perfor[mance]" — the RM must co-evolve (motive)<br>**Summary**: the reward model must evolve with the rewarded | Motive, verbatim: "A core challenge in employing RLHF lies in training a reliable reward model (RM), which relies on high-quality labels typically provided by human experts or advanced AI system. These methods can be costly and may introduce biases"<br>**Summary**: RMs depend on costly, biased labels | **Why**: a static RM becomes the policy's ceiling — once the model surpasses the RM's judgment, the RM rewards "resembling the old model", not "better" (editor) |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Weight training | Paper mechanism: the RM self-generates extra training data to iteratively improve itself; the improved reward optimizes policy via PPO (mechanism)<br>**Summary**: RM self-produces data, self-improves | Paper: policy performance improves across RM iterations (numbers in paper)<br>**Summary**:— | **Why**:— |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Collects + trains | — | — | **Why**:— |

**Feedback Stack**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Data flywheel | Self-improving RM flywheel (title setup)<br>**Summary**:— | — | **Why**:— |

**Improves itself?**：No

---

### 10. [DreamCoder](https://arxiv.org/abs/2006.08381)

**Scene**: Skill | **Domain**: General | **Oracle**: Model

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Skill-accrual | Paper: "It builds expertise by creating programming languages for expressing domain concepts, together with neural networks to guide the search for programs within these languages"<br>**Summary**: skill = a language for domain concepts + nets guiding search | Motive, verbatim: "Expert problem-solving is driven by powerful languages for thinking about problems and their solutions. Acquiring expertise means learning these languages"<br>**Summary**: expertise = learning languages of thought | **Why**: language determines the expressible solution space — an abstracted DSL makes old solutions primitives of new ones; composition depth grows with the library (editor) |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Weight training | Paper: "A 'wake-sleep' learning algorithm alternately extends the language with new symbolic abstractions and trains the neural n[etworks]"<br>**Summary**: wake-sleep alternation: extend library ↔ train recognition | Paper: gains from few-shot to general problem solving (numbers in paper)<br>**Summary**: library reuse accelerates new-task learning | **Why**: the recognition model turns "how to search programs" into a prior of "what programs look like" — blind enumeration becomes guided sampling; the exponential space flattens (editor) |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Collects + trains | Each round's solving trains the recognition model (mechanism)<br>**Summary**: experience → prior | — | **Why**:— |

**Feedback Stack**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Data flywheel | Library and recognition model co-evolve (mechanism)<br>**Summary**:— | — | **Why**:— |

**Improves itself?**：No

**Other findings in the paper**: Editor note: recognition model trained inside the loop — the ancestor of L4-style skill accrual (DreamCoder, 2020).

---

### 11. [Code as Worlds](https://arxiv.org/abs/2608.27549)

**Scene**: World | **Domain**: General | **Oracle**: Simulation

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Closed-loop | Paper: "a paradigm that represents physical worlds through executable world representations. By expressing physical composition, dynamic evolution, [and governing rules] as code"<br>**Summary**: physical world = executable world representation (EWR) | Motive, verbatim: "they often lack explicit representations of the underlying mechanisms—such as object states, physical parameters, and governing dynamics—needed for reliably reasoning how the world evolves"<br>**Summary**: VLMs lack explicit mechanism representations | **Why**: code = an executable world model — prediction by running, not regression; mechanisms stay transparent and intervenable (editor) |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Weight training | EWR auto-generates precise annotations → SFT+GRPO train the VLM (mechanism)<br>**Summary**: code produces data that trains the model | Archived number: QuantiPhy 58.6 beating Gemini-3.1-Flash (self-reported)<br>**Summary**: small model beats a commercial giant | **Why**: annotations come from executing world code — ground truth needs no humans; label volume is compute-bound only (editor) |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Collects + trains | Executing world code yields training data (mechanism)<br>**Summary**:— | — | **Why**:— |

**Feedback Stack**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Data flywheel | World code generates data that trains the model; the model improves the world code (mechanism)<br>**Summary**:— | — | **Why**:— |

**Improves itself?**：No

---

### 12. [rStar-Math: Small LLMs Master Math Reasoning with Self-Evolved Deep Thinking](https://arxiv.org/abs/2501.04519)

**Scene**: Reasoning | **Domain**: Math | **Oracle**: Symbolic

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Evolutionary | Paper: "exercising 'deep thinking' through Monte Carlo Tree Search (MCTS), where a math policy SLM performs test-time search guided by an SLM-based process reward model"<br>**Summary**: MCTS deep thinking + small-model process rewards | Paper (positioning): "small language models (SLMs) can rival or even surpass the math reasoning capability of OpenAI o1, without distillation from superior models"<br>**Summary**: SLMs rival o1-level reasoning without distillation | **Why**: MCTS swaps "answer in one pass" for "answer after search" — inference compute trades for model parameters; 7B reaches 100B+ reasoning quality via the tree (editor) |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Weight training | Paper: "a novel code-augmented CoT data synthesis method, which performs extensive MCTS rollouts to generate step-by-step verified r[easoning]" (one of three innovations)<br>**Summary**: MCTS rollouts produce step-verified data training both SLMs | Paper: large gains on olympiad-level benchmarks (numbers in paper, incl. MATH/GSM8K)<br>**Summary**: olympiad level for small models | **Why**: the process reward model learns "is this step right" — step-level supervision is an order denser in credit assignment than outcome-level (editor) |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Collects + trains | — | — | **Why**:— |

**Feedback Stack**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Data flywheel | Better policies yield better trajectories training better process rewards (mechanism)<br>**Summary**:— | — | **Why**:— |

**Improves itself?**：No

---

### 13. [AlphaGeometry: Solving Olympiad Geometry without Human Demonstrations](https://www.nature.com/articles/s41586-023-06747-5)

**Scene**: Reasoning | **Domain**: Math | **Oracle**: Symbolic

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Closed-loop | Nature abstract (editor note): a neural LM proposes auxiliary constructions; a symbolic deduction engine derives strictly; failures re-trigger proposals<br>**Summary**: neural proposes, symbolic proves, loop feeds both | Self-reported: 25/30 on the IMO geometry benchmark (gold-medal level), zero human demonstrations<br>**Summary**: gold-medal level without human demos | **Why**: networks are good at guessing where to add lines (heuristics over unbounded space); symbolic engines are good at walking premises to conclusions (bounded rule search) — the loop lets each do its half (editor) |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Weight training | Self-reported: the symbolic engine generates 100M synthetic theorems and proofs to train the LM<br>**Summary**: engine manufactures data for the network | — | **Why**: the symbolic engine generates unlimited labeled problems — data scarcity is replaced by compute scarcity (editor) |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Collects, no training | Pure inference at solve time (DD+AR); training offline (mechanism)<br>**Summary**:— | — | **Why**:— |

**Feedback Stack**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Data flywheel | Engine data trains the proposer; the proposer feeds the engine (mechanism)<br>**Summary**:— | — | **Why**:— |

**Improves itself?**：No

---

### 14. [Evo^2: Evolving the Evolver through Weight-Harness Co-Evolution](https://arxiv.org/abs/2610.13025)

**Scene**: Agent-Self | **Domain**: Software | **Oracle**: Symbolic

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Evolutionary | Paper: "a unified dual-role pipeline that a single policy serves as both a Proposer, which writes harness edits, and a Reflector, which diagnoses their effects and guides revision"<br>**Summary**: one policy, two roles — Proposer writes, Reflector diagnoses | Paper: "Polyglot 82.1%... compared with 62.6%... for the strongest baseline"<br>**Summary**: Polyglot 82.1% vs 62.6% baseline | **Why**: proposal/reflection split = generation/verification division — two views of one model check each other, defeating single-role self-confirmation (editor) |
| Closed-loop | Paper: "harness modifications and their execution outcomes guide the training of both the Proposer and the Reflector"<br>**Summary**: edit outcomes retrain both roles | Paper: "48.3% on SWE-bench Verified, compared with... 41.0% for the strongest baseline"<br>**Summary**: SWE-bench Verified 48.3% vs 41.0% | **Why**: weight updates condition on harness changes — the temporal mismatch (code first, weights later) disappears (editor) |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Recursive self-improvement | Paper: "EvoTIDE, a training pipeline that recovers usable trajectories through edit extraction and prefix continuation, then combines SFT with interleaved GRPO across the two roles"<br>**Summary**: EvoTIDE recovers trajectories + SFT + interleaved GRPO — the evolver itself is trained | Paper: "the evolved harnesses transfer to different tasks without further evolution and rank first in cross-benchmark evaluations"<br>**Summary**: evolved harnesses transfer, ranked first, no further evolution | **Why**: the evolver learns which kinds of edits work, not specific edits — kinds transfer, artifacts don't (editor) |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Collects + trains | Execution outcomes of harness edits become training data immediately (mechanism)<br>**Summary**: weights and harness in sync | — | **Why**:— |

**Feedback Stack**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Data flywheel | Better harness → better trajectories → better evolver (mechanism)<br>**Summary**: two-layer flywheel | — | **Why**:— |

**Improves itself?**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Yes | Paper (editor note): the dual-role evolver is trained by its own products<br>**Summary**: GPT-5-mini agent 24.4%→48.3% (works for proprietary models) | — | **Why**: proprietary weights are frozen but harnesses are writable — self-reference lands on the writable surface, bypassing the weight lock (editor) |

**Other findings in the paper**: Bridges the formerly separate weight-line and harness-line (paper's own positioning).

---

### 15. [RSI-Anything: Unlocking Recursive Self-Improvement with World Models](https://arxiv.org/abs/2610.13912)

**Scene**: Agent-Self, World | **Domain**: General | **Oracle**: Model

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| World-model | Paper: "uses predictive world models to guide action and learning-data selection"<br>**Summary**: a JEPA-Anything predictive world model guides both action selection and learning-data selection | Motive, verbatim: "external feedback is costly"<br>**Summary**: data selection delegated to an internal predictor when external feedback is expensive | **Why**: every real-environment sample costs an execution; the predictor moves the "is this datum worth sampling" judgment into imagination — approximate cost replaces real cost, real sampling only when prediction is uncertain (editor) |
| Closed-loop | Paper: "observed feedback drives policy or workflow improvement and conditional world-model adaptation"<br>**Summary**: observed feedback improves policy/workflow and conditionally adapts the world model | The paper concedes "world-model predictions may become unreliable as policies evolve" and counters with conditional adaptation<br>**Summary**: mitigates (not eliminates) model staleness under policy drift | **Why**: a changed policy makes old experience stale — a frozen world model accumulates prediction bias as the policy drifts; conditional adaptation locally updates the predictor after each batch, pulling drift error back into a small neighborhood (editor) |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Recursive self-improvement | Paper: "component and compatibility checks govern the retention of updated policy-model pairs"<br>**Summary**: whether an updated policy-model pair is kept is gated by component and compatibility checks | Paper: "In code repair, with the coder fixed, success increases from 26.3% with a static verifier to 29.2%"<br>**Summary**: code repair 26.3%→29.2% with the coder held fixed | **Why**: RSI's core risk is well-intentioned regressions — updates that score locally but misfit globally; the check turns "update" from unilateral application into apply-and-audit, blocking bad updates at the door (editor) |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Collects + trains | Experience flows back to update policy and world model jointly (editor summary; abstract does not detail runtime) | — | **Why**: co-training removes the chicken-and-egg mismatch — the model understanding an old policy's world while the policy adapts to a new model's world; alternating updates keep each current for the other (editor) |

**Feedback Stack**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Data flywheel | World model picks data → better data → better world model (editor summary) | — | **Why**: data-selection quality and prediction accuracy are mutually causal; the positive loop holds only if the selection pressure is real — which is exactly what the compatibility checks supply (editor) |

**Improves itself?**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Yes | Paper (editor note): "compatibility checks govern the retention of updated policy-model pairs" — retention is judged by the system's own world model | — | **Why**: self-assessing self = judge and player united, risking self-reinforcing bias; here executable compatibility predicates constrain the judge's authority — self-referential but not arbitrary (editor) |

**Other findings in the paper**: The paper claims domain generality ("Across diverse computational and scientific domains ... demonstrates substantial gains"); per-domain numbers in the full text.

---

### 16. [RRSI: Regularized Recursive Self-Improvement of Agent Harnesses](https://arxiv.org/abs/2609.24972)

**Scene**: Agent-Self | **Domain**: General | **Oracle**: Symbolic

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Evolutionary | Paper: "iteratively proposing and selecting component-wise edits of an agent harness, practically establishing a form of recursive self-improvement (RSI) at the agent-system level"<br>**Summary**: iterative propose-and-select of harness component edits | — | **Why**: component-level edits keep the search space tractable — whole rewrites are unattributable; component edits isolate causality (editor) |
| Closed-loop | Evaluation scores select edits (mechanism)<br>**Summary**: scores pick edits | — | **Why**:— |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Recursive self-improvement | Harness-RSI: recursively rewrites prompts/control flow/tools/memory (paper setup)<br>**Summary**: RSI at the agent-system level | Paper: "such recursive evolution may overfit by memorizing the training tasks, showing large in-distribution gains that shrink or even vanish on out-of-distribution benchmarks" — the diagnosis<br>**Summary**: big in-distribution, vanishing OOD (overfitting) | **Why**: when selection signal = training-task scores, edits can memorize tasks instead of raising capability — optimizing the metric breaks the goal (editor) |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Collects, no training | Edit search on a frozen backbone (paper setup)<br>**Summary**: zero training overhead | — | **Why**:— |

**Feedback Stack**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Data flywheel | Paper: "incorporates the principles of regularizations into harness self-improvement"<br>**Summary**: regularization enters the self-improvement loop | Paper: OOD gains preserved (numbers in paper)<br>**Summary**: gains transfer after the fix | **Why**: weight-training anti-overfitting tools (regularization/early stopping/held-out selection) transplant directly to code-edit search — ML 101 applies to harness-RSI (editor) |

**Improves itself?**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Yes | The harness-editing pipeline improves the harness itself (mechanism)<br>**Summary**:— | — | **Why**:— |

**Other findings in the paper**: First systematic diagnosis of harness-RSI overfitting: in-distribution and OOD gains decouple or invert.

---

### 17. [SoL-Pi: Recursively Scaling Auto-Research Loops for Efficient Agent Harness](https://arxiv.org/abs/2609.20519)

**Scene**: Agent-Self, Research | **Domain**: Software | **Oracle**: Symbolic

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Evolutionary | Paper: "scaling auto-research loops across increasingly numerous and diverse environments for harness rollouts... the process yields reusable improvements that transfer beyond their development setting"<br>**Summary**: research loops roll out cross-environment; surviving mechanisms transfer | Motive, verbatim: "before scaling agent loops, can agents first make the harness itself more efficient?"<br>**Summary**: optimize the harness before scaling the loop | **Why**: cross-environment selection filters out environment-specific tricks — survivors must capture harness-universal inefficiencies (editor) |
| Closed-loop | Discovered improvements deploy back into the loop's own harness (mechanism)<br>**Summary**: the research tool becomes the research output | — | **Why**:— |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Recursive self-improvement | Paper: "We take an RSI-inspired approach at the harness layer"<br>**Summary**: RSI at the harness layer (token efficiency) | Four surviving mechanisms: Action Fusion, ObservationPack, Evidence-Preserving Reducer, Online Context Compact (README; large token-cost cuts on long tasks)<br>**Summary**: all four target token efficiency | **Why**: long-task cost is dominated by repeated validation calls, stale observation replay, over-reading logs — each mechanism kills one repeated overhead (editor) |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Collects, no training | Backbone frozen; improvement lives in harness mechanisms (paper setup)<br>**Summary**: production-grade open source (3.4k stars) | — | **Why**:— |

**Feedback Stack**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Data flywheel | Cross-environment rollout evidence filters mechanisms (mechanism)<br>**Summary**: transferability validated by selection | — | **Why**:— |

**Improves itself?**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Yes | The auto-research loop improves the harness that runs it (mechanism)<br>**Summary**: improver = improved | — | **Why**: harness efficiency bounds the research loop's own scalability — here self-reference is practical: carrier and target coincide (editor) |

**Other findings in the paper**: Open-sourced as a Pi coding-agent extension (github.com/NVlabs/SoL-Pi), MIT, 3,476 stars.

---

### 18. [MetaRSI-v1: A Meta-Recursive Self-Improving System for Recursive Self-Improving Systems Themselves](https://arxiv.org/abs/2609.06396)

**Scene**: Agent-Self, Research | **Domain**: General | **Oracle**: Symbolic

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Closed-loop | Paper (system): Data/Harness/Model as three writable surfaces unified as operators of one loop kernel (editor summary)<br>**Summary**: all three improvement kinds share one verification/scheduling machinery | Paper: "RSI has been validated almost exclusively on coding and formal benchmarks... This format bound limits RSI to improvement within a machine-checkable slice, not general capability where questions are settled by argument, replication, or measurement"<br>**Summary**: existing RSI locked inside a machine-checkable slice | **Why**: one kernel removes verification-logic fragmentation across D/H/M — one permission boundary and freshness rule serve all improvement types (editor) |
| Evolutionary | An RSI² scheduler composes operator sequences under typed contracts (system, editor summary)<br>**Summary**: improvement steps themselves are searchable | — | **Why**: improvement order is a combinatorial space; search beats fixed pipelines (editor) |
| Memory | Signal-freshness rules: H→M and M→M banned (system)<br>**Summary**: data must not predate capability change | — | **Why**: stale signals training new capability = old map, new road; the ban enforces informational causal order (editor) |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Recursive self-improvement | MetaRSI² improves the scheduler itself — RSI applied to RSI (system)<br>**Summary**: the meta level joins the loop | Paper numbers (archived): +10.9 avg, +3.6 over fixed pipelines, SWE-bench Pro 10.3→19.5<br>**Summary**: scheduling itself carries weight | **Why**: the scheduler decides operator sequences — improving "how to improve" is one order higher leverage than any single improvement (editor) |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Collects + trains | Model proposes; deterministic code verifies/scores/releases (system)<br>**Summary**: auditable permission boundary | — | **Why**: propose/execute separation is a one-way gate — model hallucination cannot enter the release channel (editor) |

**Feedback Stack**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Data flywheel | Closed-loop tracking across the chain (system)<br>**Summary**: observable loops | Paper survey: loop formation tracks verification format, not capability (ρ=-0.75)<br>**Summary**: quantitative evidence that oracle type bounds RSI | **Why**: decidable verification formats naturally form loops first — causation runs format→loop, not capability→loop (editor) |

**Improves itself?**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Yes | The scheduler improves the scheduler (system)<br>**Summary**: meta self-reference | — | **Why**: the constraint on meta self-reference is the typed contract — infinite regress is cut to finite levels by the type system (editor) |

**Other findings in the paper**: The paper argues RSI must next enter open scientific domains judged by "argument, replication, or measurement" (position, verbatim fragments).

---

### 19. [Agent0: Curriculum and Executor Agents Co-Evolve from Zero Data](https://arxiv.org/abs/2511.16043)

**Scene**: Agent-Self | **Domain**: General | **Oracle**: Model

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Multi-agent | Paper: "a fully autonomous framework that evolves high-performing agents without external data through multi-step co-evolution and seamless tool i[ntegration]"<br>**Summary**: zero external data; multi-step co-evolution + tool integration | Motive, verbatim: "constrained by a dependency on human-curated data, limiting scalability and tethering AI to human knowledge... restricted by the model's inherent capabilities and single-round interactions"<br>**Summary**: human data caps scale; prior self-evolution capped by single-round interaction | **Why**: curriculum and executor split roles — the poser keeps tasks at the executor's ability edge, and multi-step interaction lets curricula involve tool use with dynamic reasoning (editor) |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Recursive self-improvement | Paper: "multi-step co-evolution" — the two roles are each other's training signal (mechanism)<br>**Summary**: zero-data cold-start co-evolution | Paper reports sustained improvement with no external data (numbers in paper)<br>**Summary**: successful bootstrapping | **Why**: role split breaks the degenerate "self-posed tasks drift easy" — the poser's reward ties to the solver's progress, so hard tasks pay (editor) |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Collects + trains | Multi-step rollouts flow back immediately (mechanism)<br>**Summary**: collect-train alternation | — | **Why**: difficulty and capability grow in lockstep, keeping training signal valid (editor) |

**Feedback Stack**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Data flywheel | Curriculum difficulty tracks the executor (mechanism)<br>**Summary**: perpetually effective advantage | — | **Why**: adaptive difficulty = automatic curriculum learning — avoiding fixed curricula that are too easy (no signal) or too hard (no successes) (editor) |

**Improves itself?**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Yes | Curriculum and executor improve each other (mechanism)<br>**Summary**: bidirectional self-reference | — | **Why**: cross self-reference is stabler than single-point — two complementary views correct each other (editor) |

---

### 20. [Darwin Gödel Machine: Open-Ended Evolution of Self-Improving Agents (DGM)](https://arxiv.org/abs/2505.22954)

**Scene**: Agent-Self | **Domain**: Software | **Oracle**: Symbolic

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Evolutionary | Paper: "a self-improving AI that repeatedly modifies itself in a provably beneficial manner" — replaced by Darwinian open-ended evolution<br>**Summary**: archive + mutation + selection; open-ended self-modification search | Motive, verbatim: "Today's AI systems have human-designed, fixed architectures and cannot autonomously and continuously improve themselves... Meta-learning... is limited by first-order improvements and the human design of a suitable search space"<br>**Summary**: fixed architectures cannot self-improve; meta-learning capped by human-designed search spaces | **Why**: provable self-improvement (the Gödel-machine route) is prohibitively expensive to certify; open evolution swaps "provably better" for "selected by environment" — turning an undecidable property into an executable one (editor) |
| Skill-accrual | Improvements persist as code components in the lineage archive (paper mechanism)<br>**Summary**: good edits inherit across generations | — | **Why**: the archive is an explicit skill library; evolution over discrete artifacts is traceable and reusable (editor) |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Recursive self-improvement | The agent rewrites its own code; the rewritten self continues rewriting (paper setup)<br>**Summary**: recursion in code space | Paper: coding performance roughly doubles on SWE-bench (exact numbers per paper)<br>**Summary**: doubled coding performance | **Why**: improvement lands on the scaffold, not weights — discrete code edits change the starting point of the next search round, compounding capability (editor) |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Collects, no training | Backbone frozen; all improvement in code (paper setup)<br>**Summary**: zero training infrastructure | — | **Why**: avoids catastrophic forgetting and compute cost of weight training; the price is improvement granularity bounded by what the scaffold can express (editor) |

**Feedback Stack**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Data flywheel | Each generation's evaluation feeds the archive guiding selection (paper mechanism)<br>**Summary**: selection pressure accumulates | — | **Why**: failed branches retained — negative evidence stops evolution from repeating mistakes (editor) |

**Improves itself?**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Yes | Improvement target = the improver's own code (paper setup)<br>**Summary**: the textbook self-reference | — | **Why**: the ceiling is no longer anchored to the initial scaffold — initial design is a starting point, not a cap (editor) |

**Other findings in the paper**: The lineage archive retaining eliminated branches is the diversity source of open-endedness (paper mechanism, editor summary).

---

### 21. [Aspire: Can Models Self-Evolve from Vague Goals?](https://arxiv.org/abs/2608.31111)

**Scene**: Agent-Self | **Domain**: NLP | **Oracle**: Symbolic

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Closed-loop | Paper (benchmark design): "ASPIRE provides only a natural-language capability goal while downstream evaluation tasks remain hidden. The agent must operationalize the goal by choosing data and update methods"<br>**Summary**: vague goal only; hidden eval; agent operationalizes the goal itself | Paper (gap): "existing work on LLM self-evolution typically begins with tasks and evaluation metrics specified by humans, reducing self-evolution to optimizing an explicit objective rather than deciding what and how to learn"<br>**Summary**: prior self-evolution optimizes human-given goals, not deciding what to learn | **Why**: isolating meta-decision for measurement — hidden tasks prevent goal-operationalization from degenerating into memorization (editor) |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Weight training | Paper: "choosing data and update methods, and determining whether they have actually improved"<br>**Summary**: self-chosen data, methods, self-assessed progress | Benchmark property: measures the meta-capability (no single SOTA number)<br>**Summary**: the meta-capability becomes the measured object | **Why**:— |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Collects + trains | Data selection decided at runtime by the agent (benchmark setup)<br>**Summary**:— | — | **Why**:— |

**Feedback Stack**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Verification feedback | Hidden evaluation tasks verify real progress (setup)<br>**Summary**: guards against feel-good evolution | — | **Why**: hidden eval = blind testing — the gap between self-reported and blind-tested progress measures self-deception (editor) |

**Improves itself?**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Yes | The agent decides whether and what to learn (setup)<br>**Summary**: fills the meta-decision blind spot | — | **Why**:— |

---

### 22. [AtomMem: Learnable Dynamic Agentic Memory with Atomic Memory Operation](https://arxiv.org/abs/2601.08323)

**Scene**: Agent-Self | **Domain**: General | **Oracle**: Model

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Memory | Paper: "reframes memory management as a dynamic decision-making problem ... deconstruct high-level memory processes into fundamental atomic CRUD (Create, Read, Update, Delete) operations"<br>**Summary**: memory management becomes a dynamic decision problem; high-level processes decompose into atomic CRUD ops | Motive, verbatim: "most existing agent memory mechanisms rely on static and hand-crafted workflows"<br>**Summary**: static hand-crafted flows cap performance and generalization | **Why**: a hand-crafted workflow is the designer's prior guess at the task distribution — once the distribution shifts, the workflow mismatches systematically; CRUD-ification turns when-to-read/write from a fixed program into a learnable policy (editor) |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Weight training | Paper: "combining supervised fine-tuning with reinforcement learning ... learns an autonomous, task-aligned policy to orchestrate memory behaviors"<br>**Summary**: SFT+RL train an autonomous memory-orchestration policy | Paper: "the trained AtomMem-8B consistently outperforms prior static-workflow memory methods" (3 long-context benchmarks; no percentages reported)<br>**Summary**: 8B consistently beats static-workflow memory | **Why**: RL ties memory operations directly to task reward — each read/write decision is credited from task success, so the policy learns to remember for the task, not for storage's sake (editor) |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Collects + trains | Memory-operation decisions during execution are recycled as SFT+RL signal (editor summary; runtime not detailed in the abstract) | — | **Why**: training data and deployment behavior share one distribution — the model learns its own memory decisions in its own tasks, avoiding offline/online mismatch (editor) |

**Feedback Stack**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Verification feedback | Paper: "orchestrate memory behaviors tailored to specific task demands"<br>**Summary**: CRUD orchestrated per task demand | Paper: "learning-based formulation enables the agent to discover structured, task-aligned memory management strategies"<br>**Summary**: discovered, structured, task-aligned strategies — not predefined routines | **Why**: task success is the final judge of a memory strategy — verifiable task signal tempers discovered strategies under selection pressure, while predefined routines were never task-screened (editor) |

**Improves itself?**：No

**Other findings in the paper**: Training-dynamics analysis (paper): the learning-based formulation lets the agent discover structured, task-aligned memory strategies — "highlighting a key advantage over predefined routines".

---

### 23. [RISE: Recursive Improvement via Self-Extrapolating Policy Distillation](https://arxiv.org/abs/2609.05295)

**Scene**: Agent-Self | **Domain**: General | **Oracle**: Model

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Closed-loop | Paper: "constructs a synthetic teacher directly from the model's own RLVR training trajectory. By extrapolating the displacement between the current checkpoint and a trailing anchor—in parameter space or output logit space"<br>**Summary**: a synthetic teacher extrapolated from checkpoint displacement in its own RLVR trajectory | Paper (twin bottleneck): "external teachers suffer from distribution mismatch, while self-distillation with privileged conditioning is limited by in-context learning capacity"<br>**Summary**: external teachers mismatch; privileged self-distillation capped by ICL capacity | **Why**: displacement extrapolation ≈ linear continuation of multi-step discrete updates — a momentum hypothesis: one more step along a proven improvement direction likely stays on the improvement manifold (editor) |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Weight training | Paper: "RISE converts a sparse outcome-induced parameter update into a dense token-level ta[rget]"<br>**Summary**: sparse outcome reward → dense token-level supervision | Paper: beats RLVR-only and one-way self-distillation baselines (numbers in paper)<br>**Summary**: a third route beyond the two known ones | **Why**: credit assignment under sparse rewards must propagate over rounds to reach tokens; the extrapolated dense target lays credit directly on every token (editor) |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Collects + trains | Training trajectories recycled as distillation material (mechanism)<br>**Summary**: zero extra data cost | — | **Why**: the teacher derives from the student's trajectory — training distribution always matches (editor) |

**Feedback Stack**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Data flywheel | The teacher is re-extrapolated each round (mechanism)<br>**Summary**: recursive, not one-shot | — | **Why**: stronger student → more accurate displacement → better teacher → stronger student (editor) |

**Improves itself?**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Yes | Paper (editor note): the teacher is extrapolated from the student's own parameter motion<br>**Summary**: self-supervised, no external anchor | — | **Why**: self-reference's failure mode is self-reinforcing error; here the anchor is the RLVR verifier — extrapolation only amplifies verified improvement (editor) |

---

### 24. [FlowReasoner](https://arxiv.org/abs/2504.15257)

**Scene**: Agent-Self | **Domain**: General | **Oracle**: Model

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Multi-agent | Paper: "a query-level meta-agent... to automate the design of query-level multi-agent systems, i.e., one system per user query"<br>**Summary**: a meta-agent emits a custom MAS per query | Paper (core idea): "incentivize a reasoning-based meta-agent via external execution feedback"<br>**Summary**: execution feedback incentivizes the reasoning meta-agent | **Why**: one query, one system — a fixed architecture is the query-distribution average of optimal architectures; customization takes the per-point conditional optimum (editor) |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Weight training | Paper: "by distilling DeepSeek R1, we first endow the basic reasoning ability... Then, we further enhance it via reinforcement learning (RL) with external execution feedback"<br>**Summary**: R1 distillation base + execution-feedback RL | Paper: a multi-purpose reward guides performance/complexity/efficiency (numbers in paper)<br>**Summary**: three-objective balance | **Why**: execution feedback is system-level ground truth — MAS quality is judged by running results, not human review (editor) |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Frozen at runtime | At deployment the meta-agent only generates (mechanism)<br>**Summary**:— | — | **Why**:— |

**Feedback Stack**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Data flywheel | Execution feedback keeps training the meta-agent (mechanism)<br>**Summary**:— | — | **Why**:— |

**Improves itself?**：No

---

### 25. [Self-Adapting Language Models (SEAL)](https://arxiv.org/abs/2506.10943)

**Scene**: Agent-Self | **Domain**: General | **Oracle**: Model

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Closed-loop | Paper: "generating their own finetuning data and update directives... a self-edit—a generation that may restructure the information in different ways, specify optimization hyperparameters, or invoke tools"<br>**Summary**: the model emits self-edits — restructured knowledge, hyperparameters, tool calls as adaptation directives | Motive, verbatim: "LLMs are powerful but static; they lack mechanisms to adapt their weights in response to new tasks, knowledge, or examples"<br>**Summary**: static weights cannot absorb new tasks/knowledge/examples | **Why**: the adaptation "manual" is written by the model itself — an external designer cannot enumerate all adaptation scenarios; self-authored edits customize adaptation per task (editor) |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Weight training | Paper: "Through supervised finetuning (SFT), these self-edits result in persistent weight changes"<br>**Summary**: self-edits become persistent weight changes via SFT | No single headline number; adaptation outperforms external RAG/ICL variants (paper experiments)<br>**Summary**: adaptation internalized into parameters beats context-externalized knowledge | **Why**: external context pays window and attention-dilution costs; parameterized knowledge has no retrieval latency and no window占用 — the classic parametric-vs-contextual memory trade (editor) |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Collects + trains | Paper: "a generation that may... invoke tools for data augmentation and gradient-based updates"<br>**Summary**: runtime self-generated data + gradient updates | — | **Why**: data, directives, and updates all close inside the session — adaptation no longer queues for offline batches (editor) |

**Feedback Stack**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Data flywheel | Each round's adaptation output feeds the next (editor) | — | **Why**: self-edit quality compounds — last round's learned phrasing improves this round's edit generation (editor) |

**Improves itself?**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Yes | Paper (editor note): "self-adapt by generating their own finetuning data" — data, directives, and trainee are one model | — | **Why**: the minimal self-referential weight-level RSI — no external teacher in the loop (editor) |

---

### 26. [MemCodex: Self-Programming Hierarchical Memory for Language Agents](https://arxiv.org/abs/2609.39765)

**Scene**: Agent-Self | **Domain**: General | **Oracle**: Symbolic

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Memory | Paper: "organizes experience into executable memory programs for summaries, relational knowledge, reusable skills, and latent memory"<br>**Summary**: experience becomes four layers of executable memory programs — summaries, relational knowledge, reusable skills, latent memory | Motive, verbatim: "a single-hop question may require one piece of evidence, whereas a multi-hop question must combine evidence from multiple sources. Predefined memory workflows cannot adapt to these varying needs"<br>**Summary**: single-hop and multi-hop needs differ; fixed workflows cannot serve both | **Why**: layering turns "what evidence to find" into "which layer to look in" — single-hop stops at the top, multi-hop follows pointers down; flat memory scans everything per query, layered access costs scale with evidence depth, not memory size (editor) |
| Evolutionary | Paper: "Open-ended program evolution searches the open design space of layer programs by rewriting how each layer is constructed, indexed, retrieved, and routed"<br>**Summary**: the design space itself is open — construction/indexing/retrieval/routing of every layer is evolvable | Paper (on neighbors): "Recent adaptive methods search or learn over memory components and their compositions, but the design space itself remains predefined"<br>**Summary**: others tune within a given space; MemCodex opens the space | **Why**: predefined methods are capped by the designer's imagination — if the needed structure (e.g., a temporal-causal hybrid index) is outside the predefined set, no tuning reaches it; evolution can invent structures outside the set (editor) |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Mechanism self-evolves | Paper: "a self-evolving hierarchical memory system"<br>**Summary**: evolution touches memory programs only, never weights (no weight update appears in the abstract — editor) | Paper: "improves average task success by 10.1% relative to the strongest adaptive-memory baseline"<br>**Summary**: +10.1% average task success vs the strongest adaptive-memory baseline | **Why**: gains sediment in external executable artifacts, not parameters — no model capacity consumed, no training infrastructure needed; the price is one extra program-execution hop at inference, buying plug-and-play improvement (editor) |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Collects, no training | Paper: "reads traverse the hierarchy from coarse to fine and stop once sufficient evidence is found, descending to the original history when needed"<br>**Summary**: coarse-to-fine traversal, stop when evidence suffices, fall back to raw history | Paper: "using 3.4x fewer context tokens and achieving 2.1x faster inference"<br>**Summary**: 3.4× fewer context tokens, 2.1× faster inference | **Why**: a retrieval tree with early stopping — context length grows with needed evidence depth, not memory size; "stop when sufficient" avoids paying 100% retrieval cost for 20% questions, and raw-history fallback keeps truncation lossless (editor) |

**Feedback Stack**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Verification feedback | Paper: "stop once sufficient evidence is found"<br>**Summary**: evidence-sufficiency as the stopping predicate (executability/verifiability — editor) | Same source as above — the direct origin of the 3.4× saving<br>**Summary**: stop early, spend less | **Why**: "sufficient evidence" is a decidable predicate — turning when-to-stop from open-ended heuristics into a checkable condition; undecidable stopping has exactly two failure modes (over-retrieval waste, under-retrieval loss), and the predicate closes both (editor) |

**Improves itself?**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Yes | Paper (editor note): evolution rewrites how memory itself is constructed/indexed/retrieved/routed<br>**Summary**: the target is "how memory is organized", not any fixed task | Paper (counter-anchor): "the design space itself remains predefined" — the neighbors' ceiling<br>**Summary**: organization itself evolves, no preset boundary | **Why**: self-reference lets how-to-index and how-to-query co-evolve — in non-self-referential systems the two inevitably mismatch (index built by logic A, queries arriving by logic B), paying an interface-friction tax on every access; co-evolution removes the tax (editor) |

**Other findings in the paper**: MemArena companion runtime — paper: "a unified runtime that places heterogeneous data and memory systems behind a common interface"; only behind a common interface can heterogeneous memory designs be compared fairly.

---

### 27. [Search Self-play: Pushing the Frontier of Agent Capability without Supervision](https://arxiv.org/abs/2510.18821)

**Scene**: Research | **Domain**: Web | **Oracle**: Real-world

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Evolutionary | Paper: "the learning LLM utilizes multi-turn search engine calling and acts simultaneously as both a task proposer and [a solver]"<br>**Summary**: proposer and solver at once, in multi-turn real search | Motive, verbatim: "RLVR highly depends on well-crafted task queries and corresponding ground-truth answers... which requires significant human effort and hinders the scaling of RL processes"<br>**Summary**: RLVR's human QA pools block scaling | **Why**: a real search engine as environment = an unlimited free task source and judge; proposal cost moves from human labor to inference (editor) |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Recursive self-improvement | Paper: "the difficulty of the generated agentic tasks can hardly be controlled to provide effective RL training advantages" — self-play as the difficulty controller (mechanism)<br>**Summary**: self-play = difficulty control | Paper: sustained gains for search agents (numbers in paper)<br>**Summary**: removes the agent-RL data bottleneck | **Why**: difficulty blowup is the synthetic-task disease (too easy → no advantage, too hard → no successes); poser reward tied to solver progress pins difficulty in the effective band (editor) |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Collects + trains | Paper: multi-turn real search-engine calls are the collection<br>**Summary**: real task distribution | — | **Why**: real-environment posing avoids synthetic distribution narrowing (editor) |

**Feedback Stack**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Verification feedback | Real search results as judge (mechanism)<br>**Summary**: ground truth free and unlimited | — | **Why**: retrieval results are objective physical feedback — unlike model judges, they cannot be persuaded (editor) |

**Improves itself?**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Yes | Proposer = solver, same model (paper setup)<br>**Summary**: AZR-isomorphic with a real-environment oracle | — | **Why**:— |

---

### 28. [Machines That Accelerate Machine-Making: A Research Agenda for Human-Demand-Guided Physical Recursive Self-Improvement](https://www.datafluxdynamics.ltd/research/machines-that-accelerate-machine-making.pdf)

**Scene**: Research, Policy | **Domain**: General | **Oracle**: Symbolic

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| One-shot | Paper (manifesto definitions, editor note): formalization of Physical Recursive Self-Improvement (PRSI) and the Physical Improvement-Production Edge (PIPE); five causal positions P1 hardware interface → P5 the operator producing subsequent machines<br>**Summary**: a unified coordinate system for physical RSI | Paper claim (positioning): machines accelerating machine-making, steered by human demand — the physical mirror of the DFM endpoint<br>**Summary**: manifesto, not implementation | **Why**: slicing "AI into the physical world" into five decidable grades — position determines capability ceiling and risk exposure; formalization makes the debate provable (editor) |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Recursive self-improvement | Paper (P5, editor summary): the operator producing subsequent machines — improving physical manufacturing itself<br>**Summary**: P5 = physical RSI | Paper theorems (editor note): certificate-chain constructibility, geometric contraction, selection regret bound, labor contraction<br>**Summary**: four theorems as the feasibility skeleton | **Why**: geometric contraction = the selection space shrinks as certificate-chain evidence accumulates — recursive convergence presupposes monotone information gain, and the certificate chain is its carrier (editor) |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Frozen at runtime | Pure theory, no running system (editor note)<br>**Summary**:— | — | **Why**:— |

**Feedback Stack**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Data flywheel | Paper mechanism: certificate chains — every machine's making is traceable and verifiable<br>**Summary**: manufacturing history as an evidence chain | — | **Why**: traceability turns "why trust this machine" into a checkable record rather than trust in the maker (editor) |

**Improves itself?**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Yes | Paper dual loop: demand ring steers direction + physical ring executes (editor summary)<br>**Summary**: human demand against the capability trap | — | **Why**: purely endogenous improvement falls into "improving only what it is good at improving" — the outer ring gives direction an exogenous anchor (editor) |

**Other findings in the paper**: Quotes are the paper's own defined terms and structure (editor note); this entry is a PDF manifesto.

---

### 29. [Absolute Zero: Reinforced Self-play Reasoning with Zero Data (AZR)](https://arxiv.org/abs/2505.03335)

**Scene**: Research | **Domain**: General | **Oracle**: Model

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Evolutionary | Paper (title & setup): one system self-proposes tasks, self-solves, self-verifies in reinforced self-play<br>**Summary**: proposer = solver = same model | Motive, verbatim: "still depend on manually curated collections of questions and answers for training. The scarcity of high-quality, human-produced examples raises concerns about the long-term scalability of relying on human supervision"<br>**Summary**: RLVR still leans on manual QA pools; not scalable long-term | **Why**: the data bottleneck moves from collection to generation — when verifiers are free (code/math checks), task-proposal itself becomes a trainable skill (editor) |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Recursive self-improvement | Self-play task-solution-verification triples flow back to train the model (mechanism summary)<br>**Summary**: training data fully self-produced | Paper reports steady gains across math/code reasoning benchmarks (numbers in paper)<br>**Summary**: broad gains with zero human data | **Why**: task difficulty is set by current ability (what it can pose is the edge of what it can solve) — the curriculum sits in the zone of proximal development automatically (editor) |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Collects + trains | Self-play rollouts are the collection; training interleaves (mechanism)<br>**Summary**: data supply grows with ability | — | **Why**: capability and data form a causal loop without external pipelines (editor) |

**Feedback Stack**：No feedback

**Improves itself?**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Yes | Proposer, solver, verifier, trainee — four roles in one (mechanism)<br>**Summary**: the minimal fully self-referential form | — | **Why**: self-verification leans on executor objectivity — decidability of code/math anchors the loop (editor) |

**Other findings in the paper**: No acceleration trend evidenced in the paper: capability rises but improvement rate does not grow (important caveat).

---

### 30. [Frontis-MA1: Training an AI4AI Model towards Recursive Self-Improvement in Machine Learning Engineering](https://arxiv.org/abs/2607.28568)

**Scene**: Research | **Domain**: Software | **Oracle**: Symbolic

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Evolutionary | Paper: "long-horizon search (OpenMLE-Evo)... four atomic program-evolution operators (Dr[aft/Improve/Debug/Crossover])"<br>**Summary**: four-operator long-horizon search | Paper (positioning): "machine learning engineering (MLE) offers a concrete, executable testbed for studying this capability" — an executable testbed for AI4AI<br>**Summary**: MLE as RSI's landing testbed | **Why**: operators mirror human engineering actions (draft/improve/debug/crossover) — primitivizing the MLE workflow makes long-horizon search composable (editor) |
| Closed-loop | Paper: "spanning verifiable task environments with execution feedback (OpenMLE-Gym), operator learning (OpenMLE-RL)"<br>**Summary**: verifiable environments + operator learning | — | **Why**: execution feedback makes every operator's quality decidable — each search step has a referee (editor) |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Weight training | Paper: "we post-train Frontis-MA1 (35B) as a meta-evolution agent for MLE, aligning post-training and inference around four atomic program-evolution operators"<br>**Summary**: 35B post-trained as a meta-evolution agent | Archived (self-reported): MLE-Bench Lite 39→71%, beating GPT-5.5+Codex, near Kimi K3 (2.8T)<br>**Summary**: 35B punches far above its scale | **Why**: training and inference align on the same operators — learning exactly the action distribution inference executes, no train/inference skew (editor) |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Collects, no training | Evolutionary search at deployment; training offline (mechanism)<br>**Summary**:— | — | **Why**:— |

**Feedback Stack**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Data flywheel | Search results flow back into operator training (mechanism)<br>**Summary**:— | — | **Why**:— |

**Improves itself?**：No

**Other findings in the paper**: Archived note: RSI neighbor (no acceleration trend shown); framework and 35B weights fully open.

---

### 31. [Scaling Self-Play with Self-Guidance in Lean4](https://arxiv.org/abs/2604.20209)

**Scene**: Research | **Domain**: Math | **Oracle**: Symbolic

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Evolutionary | Paper: "a Conjecturer model creates problems for a Solver, and both improve together"<br>**Summary**: Self-Guided Self-play (SGS) | Paper (diagnosis of prior self-play): "existing LLM self-play methods do not scale well with large amounts of compute, instead hitting learning plateaus. We argue this is because over long training runs, the Conjecturer learns to hack its reward, collapsing to artificially complex problems that do not help the Solver improve"<br>**Summary**: the poser learns reward hacking — fake-hard problems | **Why**: reward hacking is a structural disease of self-play — if the poser's reward decouples from solver progress, the cheapest strategy is "looks-hard" problems; self-guidance anchors difficulty to the model's own ability (editor) |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Weight training | Paper: "a self-play algorithm in which the language model itself gui[des]" — self-guided signal drives training (mechanism)<br>**Summary**:— | Archived (self-reported): asymptotic solve rate surpasses strong RL baselines<br>**Summary**:— | **Why**:— |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Collects + trains | — | — | **Why**:— |

**Feedback Stack**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Data flywheel | Proof attempts flow back into training (mechanism)<br>**Summary**:— | — | **Why**:— |

**Improves itself?**：No

**Other findings in the paper**: The reward-hacking diagnosis generalizes to other proposer-solver systems (editor note).

---

### 32. [STP: Self-play LLM Theorem Provers with Iterative Conjecturing and Proving](https://arxiv.org/abs/2502.00212)

**Scene**: Research | **Domain**: Math | **Oracle**: Symbolic

**Direction**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Evolutionary | Paper: "we draw inspiration from mathematicians, who continuously develop new results, partly by proposing novel conjectures or exercises (which are often variants of known results) and attempting [them]"<br>**Summary**: conjecturer + prover self-play | Motive, verbatim: "performance quickly plateaus due to the scarcity of correct proofs (sparse rewards)"<br>**Summary**: proof scarcity causes plateaus | **Why**: solving-data is capped by "what it can already do"; posing-data is uncapped — conjecture extends the data source from solved to solvable-variants, bypassing sparse rewards (editor) |

**Update Capability**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Weight training | Paper mechanism: the two roles supply each other's training signal and iteratively lift each other (mechanism)<br>**Summary**: mutual-feeding co-training | Paper: proving ability improves iteratively (numbers in paper)<br>**Summary**:— | **Why**:— |

**Runtime Behavior**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Collects + trains | — | — | **Why**:— |

**Feedback Stack**

| Tag | Design in the paper | Gain from the design | Why the gain happens (first-principles) |
|---|---|---|---|
| Data flywheel | Prover output trains the conjecturer and vice versa (mechanism)<br>**Summary**:— | — | **Why**:— |

**Improves itself?**：No

---


## Pending Migration Table (396 papers)

| # | Paper | Scene | Direction | Update Capability | Runtime Behavior | Feedback Stack | Oracle | Domain | Improves itself? |
|---|---|---|---|---|---|---|---|---|---|
| 1 | [WaypointOPD（航点在线策略蒸馏实现）](https://github.com/hhhbxloveai/WaypointOPD) | Policy | Closed-loop | Weight training | Collects data + trains | Verification feedback | Simulation | Robotics | No |
| 2 | [Player-1: Learning to Play from Synthetic Experience](https://arxiv.org/abs/2610.20584) | Policy, Skill | Skill-accrual | Weight training | Collects data + trains | Data flywheel | Simulation | Minecraft | No |
| 3 | [Puro-2B: Poor Lab Qwen2-1.5B Trained on RTX 5090 within $5090](https://arxiv.org/abs/2608.27370) | Policy | One-shot | Weight training | Collects data + trains | Evidence feedback | Symbolic | NLP | No |
| 4 | [CLIFT: Turning Gemini Robotics On-Device into Humanoid Specialists via Non-Invasive Closed-Loop Iterative Fine-Tuning](https://arxiv.org/abs/2607.29172) | Policy | Closed-loop | Weight training | Collects data + trains | Verification feedback | Real-world | Robotics | No |
| 5 | [Sirius: Human-in-the-Loop Autonomy and Learning During Deployment](https://arxiv.org/abs/2211.08416) | Policy | Closed-loop | Weight training | Collects data + trains | Data flywheel | Real-world, Human | Robotics | No |
| 6 | [Learning While Deploying (LWD): Fleet-Scale Offline-to-Online RL for Generalist Robots](https://arxiv.org/abs/2605.00416) | Policy | Closed-loop, Multi-agent | Weight training | Collects data + trains | Data flywheel | Real-world | Robotics | No |
| 7 | [OHP-RL: Online Human Preference Reinforcement Learning for Real-World Manipulation](https://arxiv.org/abs/2605.15971) | Policy, Reward | Closed-loop | Weight training | Collects data + trains | Data flywheel | Real-world, Human | Robotics | No |
| 8 | [LifeLong-RFT: Continual Learning VLA Models via Reinforcement Fine-Tuning](https://arxiv.org/abs/2602.10503) | Policy | Closed-loop, Memory | Weight training | Collects data + trains | Data flywheel | Real-world | Robotics | No |
| 9 | [Self-Adapting Robotic Agents through Online Continual Reinforcement Learning](https://arxiv.org/abs/2603.04029) | Policy | Closed-loop, Memory | Weight training | Collects data + trains | Data flywheel | Real-world | Robotics | No |
| 10 | [What Matters for Simulation-to-Online Reinforcement Learning](https://arxiv.org/abs/2602.20220) | Policy | One-shot | Weight training | Collects data + trains | Verification feedback | Real-world | Robotics | No |
| 11 | [RL-100: Performant Robotic Manipulation with Real-World RL](https://arxiv.org/abs/2510.14830) | Policy | Closed-loop | Weight training | Collects data + trains | Data flywheel | Real-world | Robotics | No |
| 12 | [Long-Horizon Planning in World Models with Latent Planners](https://arxiv.org/abs/2606.09311) | Policy | World-model | Weight training | Collects data + trains | Verification feedback | Simulation | General | No |
| 13 | [Sparse Imagination: Efficient Visual World Model Planning](https://arxiv.org/abs/2506.01392) | Policy | World-model | Weight training | Collects data + trains | Verification feedback | Simulation | Robotics | No |
| 14 | [Dream to Manipulate: Compositional World Models Empowering Robot Imitation Learning](https://dreamtomanipulate.github.io/) | Policy, World | World-model | Weight training | Collects data + trains | Data flywheel | Simulation, Real-world | Robotics | No |
| 15 | [AOR: Act-Observe-Rewrite for Robot Manipulation Policy Improvement](https://arxiv.org/abs/2603.04466) | Policy | Closed-loop | Weight training | Collects data + trains | Data flywheel | Real-world, Simulation | Robotics | No |
| 16 | [Dreamer 4: Training Agents Inside of Scalable World Models](https://arxiv.org/abs/2509.24527) | Policy | World-model | Weight training | Collects data + trains | Verification feedback | Model | General | No |
| 17 | [MuZero: Mastering Atari, Go, Chess and Shogi by Planning with a Learned Model](https://arxiv.org/abs/1911.08265) | Policy | World-model | Weight training | Collects data + trains | Verification feedback | Simulation | General | No |
| 18 | [DreamerV3: Mastering Diverse Domains through World Models](https://arxiv.org/abs/2301.04104) | Policy | World-model | Weight training | Collects data + trains | Verification feedback | Simulation | General | No |
| 19 | [CodeDiffuser](https://www.roboticsproceedings.org/rss21/p072.pdf) | Policy | One-shot | Weight training | Frozen at runtime | Evidence feedback | N/A | General | No |
| 20 | [RoboPro (Robotic Programmer)](https://arxiv.org/abs/2501.04268) | Policy | One-shot | Weight training | Frozen at runtime | Verification feedback | Model, Human | General | No |
| 21 | [TT-VLA: On-the-Fly VLA Adaptation via Test-Time Reinforcement Learning](https://arxiv.org/abs/2601.06748) | Policy | Closed-loop, World-model | Adapts at runtime | Collects data + trains | Data flywheel | Real-world | Robotics | No |
| 22 | [Dejavu: Post-Deployment Learning for Embodied Agents via Experience Feedback Network](https://arxiv.org/abs/2510.10181) | Policy | Closed-loop, Memory | Adapts at runtime | Collects data + trains | Data flywheel | Real-world | Robotics | No |
| 23 | [AdaWorldPolicy: World-Model-Driven Diffusion Policy with Test-Time Adaptation](https://arxiv.org/abs/2602.20057) | Policy | World-model | Adapts at runtime | Trains, no data collection | Verification feedback | Model | Robotics | No |
| 24 | [EmbodiedEvo: Self-Evolving Coding Agent For Physical Intelligence](https://arxiv.org/abs/2610.18867) | Policy, Agent-Self | Closed-loop, Skill-accrual | Mechanism self-evolves | Collects data, no training | Data flywheel | Real-world | Robotics | No |
| 25 | [Episodic Memory for Long-Horizon Robotic Manipulation](https://openreview.net/pdf?id=BBgDA4y0B9) | Policy | Memory | Mechanism self-evolves | Collects data, no training | Data flywheel | Real-world | Robotics | No |
| 26 | [MemoAct: Memory-Augmented Robotic Policies](https://tlf-tlf.github.io/MemoActPage/) | Policy | Memory | Mechanism self-evolves | Collects data, no training | Data flywheel | Real-world, Model | Robotics | No |
| 27 | [RoboPara](https://proceedings.iclr.cc/paper_files/paper/2026/file/e8aa3f5e8b5f24b830f31fd828e2a2a3-Paper-Conference.pdf) | Policy | Skill-accrual | Mechanism self-evolves | Collects data, no training | Data flywheel | Model | General | No |
| 28 | [ASPIRE: Agentic Skills Discovery for Robotics](https://arxiv.org/abs/2607.00272) | Policy | Skill-accrual, Closed-loop | Mechanism self-evolves | Collects data, no training | Data flywheel | Real-world, Simulation | Robotics | No |
| 29 | [EpiMem: Episodic Memory Indexing for Pretrained Manipulation Policies](https://arxiv.org/abs/2603.24576) | Policy | Memory | Frozen mechanism | Collects data, no training | Data flywheel | Real-world | Robotics | No |
| 30 | [RISE (Embodied): Compositional World Model Imagined Rollouts for Robot Policy](https://arxiv.org/abs/2602.11075) | Policy | World-model | Frozen mechanism | Collects data + trains | Verification feedback | Simulation | Robotics | No |
| 31 | [Large Language Models as Commonsense Knowledge for Large-Scale Task Planning (LLM-MCTS)](https://arxiv.org/abs/2305.14078) | Policy | World-model | Frozen mechanism | Frozen at runtime | Verification feedback | Model | General | No |
| 32 | [GenSwarm](https://www.nature.com/articles/s44182-025-00065-w) | Policy | Multi-agent | Frozen mechanism | Frozen at runtime | Evidence feedback | Real-world | Robotics | No |
| 33 | [Genesys](https://dl.acm.org/doi/10.1145/3776736) | Policy | Evolutionary | Frozen mechanism | Collects data, no training | No feedback | Simulation | General | No |
| 34 | [Code Evolution for Control](https://arxiv.org/abs/2601.06845) | Policy | Evolutionary | Frozen mechanism | Collects data, no training | Verification feedback | Simulation | General | No |
| 35 | [Evolution through Large Models (ELM)](https://arxiv.org/abs/2206.08896) | Policy | Evolutionary | Frozen mechanism | Collects data, no training | Verification feedback | Simulation | Robotics | No |
| 36 | [OmniManip](https://arxiv.org/abs/2501.03841) | Policy | Closed-loop | Frozen mechanism | Collects data, no training | Verification feedback | Model, Simulation | General | No |
| 37 | [Contact-Rich Adaptive LLM-based Control (CoRAL)](https://arxiv.org/abs/2605.02600) | Policy | Closed-loop | Frozen mechanism | Collects data, no training | Verification feedback | Real-world, Simulation | Robotics | No |
| 38 | [RoboInspector](https://arxiv.org/abs/2508.21378) | Policy | Closed-loop | Frozen mechanism | Collects data, no training | Verification feedback | Simulation | General | No |
| 39 | [RoboCodeX](https://arxiv.org/abs/2402.16117) | Policy | One-shot | Frozen mechanism | Frozen at runtime | No feedback | N/A | General | No |
| 40 | [ChatGPT for Robotics](https://arxiv.org/abs/2306.17582) | Policy | One-shot | Frozen mechanism | Frozen at runtime | No feedback | N/A | Robotics | No |
| 41 | [Robot Policy Code for High-Precision Tasks](https://scholar.google.com/scholar?q=%22Generating+Robot+Policy+Code%22+dexterous) | Policy | One-shot | Frozen mechanism | Frozen at runtime | No feedback | N/A | General | No |
| 42 | [VoxPoser](https://arxiv.org/abs/2307.05973) | Policy | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | N/A | General | No |
| 43 | [ProgPrompt](https://arxiv.org/abs/2209.11302) | Policy | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | N/A | General | No |
| 44 | [Code as Policies](https://arxiv.org/abs/2209.07753) | Policy | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | N/A | Robotics | No |
| 45 | [CoRe: Collaborative Reinforcement Learning for Multi-Agent Code Generation](https://arxiv.org/abs/2605.24812) | Action | Multi-agent, Closed-loop | Weight training | Collects data + trains | Data flywheel | Symbolic | Software | No |
| 46 | [RLUF: Reinforcement Learning from User Feedback](https://arxiv.org/abs/2505.14946) | Action, Reward | Closed-loop | Weight training | Collects data + trains | Data flywheel | Human | General | No |
| 47 | [WebRL: Training LLM Web Agents via Self-Evolving Online Curriculum Reinforcement Learning](https://arxiv.org/abs/2411.02337) | Action | Closed-loop, Evolutionary | Weight training | Collects data + trains | Data flywheel | Symbolic | Web | No |
| 48 | [Tool-R0: Self-Evolving LLM Agents for Tool-Learning from Zero Data](https://arxiv.org/abs/2602.21320) | Action | Evolutionary, Closed-loop | Weight training | Collects data + trains | Data flywheel | Symbolic | General | No |
| 49 | [UI-TARS: Pioneering Automated GUI Interaction with Native Agents](https://arxiv.org/abs/2501.12326) | Action | One-shot | Weight training | Frozen at runtime | Verification feedback | N/A | GUI | No |
| 50 | [SWEET-RL: Training Multi-Turn LLM Agents on Collaborative Tasks](https://arxiv.org/abs/2503.15478) | Action | Multi-agent | Weight training | Collects data + trains | Verification feedback | Model | Software | No |
| 51 | [Reinforcement World Model Learning (RWML)](https://arxiv.org/abs/2602.05842) | Action | World-model | Weight training | Collects data + trains | No feedback | Model | General | No |
| 52 | [Web Agents with World Models (WMA)](https://openreview.net/forum?id=moWiYJuSGF) | Action | World-model | Weight training | Collects data + trains | No feedback | Simulation | Frontend | No |
| 53 | [ToolGen: Unified Tool Retrieval and Calling via Generation（近邻）](https://openreview.net/forum?id=XLMAMmowdY) | Action | One-shot | Weight training | Frozen at runtime | No feedback | N/A | General | No |
| 54 | [AgentTuning: Enabling Generalized Agent Abilities for LLMs](https://arxiv.org/abs/2310.12823) | Action | Closed-loop | Weight training | Frozen at runtime | Verification feedback | Symbolic | General | No |
| 55 | [OpenHands CodeAct 2.1](https://www.openhands.dev/blog/openhands-codeact-21-an-open-state-of-the-art-software-development-agent) | Action | Closed-loop | Weight training | Frozen at runtime | No feedback | Model | General | No |
| 56 | [TT-SI: Self-Improving LLM Agents with Test-Time Training](https://aclanthology.org/2026.findings-acl.462.pdf) | Action | Closed-loop | Adapts at runtime | Collects data + trains | Verification feedback | Model | General | No |
| 57 | [Grounded Test-Time Adaptation for LLM Agents](https://arxiv.org/abs/2511.04847) | Action | Closed-loop | Adapts at runtime | Collects data + trains | Verification feedback | Symbolic | General | No |
| 58 | [aTTT: Agentic Test-Time Training for LLM Agents](https://arxiv.org/abs/2607.03441) | Action | Closed-loop | Adapts at runtime | Collects data + trains | Verification feedback | Symbolic | General | No |
| 59 | [Scaling Agent Productivity with Automated Tool Generation](https://arxiv.org/abs/2512.24615) | Action | Skill-accrual | Mechanism self-evolves | Collects data, no training | Data flywheel | Symbolic | Math | No |
| 60 | [H-EPM: Experience-Evolving Multi-Turn Tool-Use Agent with Hybrid Episodic-Procedural Memory](https://arxiv.org/abs/2512.07287) | Action | Memory | Mechanism self-evolves | Collects data, no training | Data flywheel | Symbolic | General | No |
| 61 | [WebXSkill: Skill Learning for Autonomous Web Agents](https://arxiv.org/abs/2604.13318) | Action | Skill-accrual | Mechanism self-evolves | Collects data, no training | Data flywheel | Symbolic | Web | No |
| 62 | [Runtime Harness Adaptation for Deterministic LLM Agents](https://arxiv.org/abs/2605.22166) | Action | Closed-loop | Mechanism self-evolves | Collects data, no training | Verification feedback | Symbolic | Software | No |
| 63 | [PILOT in the Loop: Live Self-Improvement for Long-Horizon Agents](https://arxiv.org/abs/2608.26530) | Action | Closed-loop, Skill-accrual | Mechanism self-evolves | Collects data, no training | Data flywheel | Symbolic, Real-world | General | No |
| 64 | [ExpeL: LLM Agents Are Experiential Learners](https://arxiv.org/abs/2308.10144) | Action | Skill-accrual, Memory | Mechanism self-evolves | Collects data, no training | Data flywheel | Model | General | No |
| 65 | [SICA: A Self-Improving Coding Agent](https://arxiv.org/abs/2504.15228) | Action | Closed-loop | Mechanism self-evolves | Collects data, no training | Verification feedback | Symbolic | Software | Yes |
| 66 | [Live-SWE-agent: Can Software Engineering Agents Self-Evolve on the Fly?](https://arxiv.org/abs/2511.13646) | Action | Closed-loop | Mechanism self-evolves | Collects data, no training | Verification feedback | Symbolic | Software | No |
| 67 | [LATM (LLMs as Tool Makers)](https://openreview.net/forum?id=qV83K9d5WB) | Action | Skill-accrual | Mechanism self-evolves | Collects data, no training | Verification feedback | Model | General | No |
| 68 | [CRAFT: Customizing LLMs by Creating and Retrieving Specialized Tools](https://arxiv.org/abs/2309.17428) | Action | Skill-accrual | Mechanism self-evolves | Frozen at runtime | Data flywheel | Model | General | No |
| 69 | [DynaSaur](https://arxiv.org/abs/2411.01747) | Action | Skill-accrual | Mechanism self-evolves | Collects data, no training | Data flywheel | Model | General | No |
| 70 | [SkillWeaver: Web Agents can Self-Improve by Discovering and Honing Skills](https://arxiv.org/abs/2504.07079) | Action | Skill-accrual | Mechanism self-evolves | Collects data, no training | Data flywheel | Model | General | No |
| 71 | [Agent Workflow Memory (AWM)](https://arxiv.org/abs/2409.07429) | Action | Skill-accrual, Memory | Mechanism self-evolves | Collects data, no training | Data flywheel | Model | Frontend | No |
| 72 | [ChunkAct: Action Chunking for Agentic Robotics](https://arxiv.org/abs/2610.18874) | Action, Policy | Skill-accrual | Frozen mechanism | Collects data, no training | Evidence feedback | Real-world | Robotics | No |
| 73 | [SWE-bench Science: Can Coding Agents Resolve Engineering Tasks in Science?](https://arxiv.org/abs/2608.19799) | Action, Research | One-shot | Frozen mechanism | Frozen at runtime | Verification feedback | Symbolic | Software | No |
| 74 | [World-Model-Augmented Web Agents with Action Correction](https://arxiv.org/abs/2602.15384) | Action | World-model | Frozen mechanism | Collects data, no training | Verification feedback | Model | Web | No |
| 75 | [CREATOR: Tool Creation for Disentangling Abstraction and Reasoning](https://arxiv.org/abs/2305.14318) | Action | Skill-accrual | Frozen mechanism | Frozen at runtime | Verification feedback | Symbolic | General | No |
| 76 | [Is Your LLM Secretly a World Model of the Internet? (WebDreamer)](https://arxiv.org/abs/2411.06559) | Action | World-model | Frozen mechanism | Collects data, no training | Verification feedback | Model | Web | No |
| 77 | [LATS（近邻）](https://arxiv.org/abs/2310.04406) | Action | Evolutionary | Frozen mechanism | Collects data, no training | Verification feedback | Simulation | General | No |
| 78 | [CoAct-1: Computer-Using Agents with Coding as Actions](https://arxiv.org/abs/2508.03923) | Action | Closed-loop, Multi-agent | Frozen mechanism | Collects data, no training | Verification feedback | Symbolic | GUI | No |
| 79 | [CodeAct: Executable Code Actions Elicit Better LLM Agents](https://arxiv.org/abs/2402.01030) | Action | Closed-loop | Frozen mechanism | Collects data, no training | Verification feedback | Symbolic | Software | No |
| 80 | [Agent S3 / OSWorld-ACI](https://github.com/simular-ai/agent-s) | Action | One-shot | Frozen mechanism | Frozen at runtime | No feedback | Symbolic | Frontend | No |
| 81 | [RARE: Reinforcement Learning with Adaptive Rubric Evolution for Open-Ended Generation](https://arxiv.org/abs/2610.25434) | Reward | Evolutionary, Closed-loop | Weight training | Collects data + trains | Verification feedback | Model | NLP | No |
| 82 | [RM-R1: Reward Modeling as Reasoning](https://arxiv.org/abs/2505.02387) | Reward | Closed-loop | Weight training | Collects data + trains | Verification feedback | Model | NLP | No |
| 83 | [Weaver: Shrinking the Generation-Verification Gap with Weak Verifiers](https://arxiv.org/abs/2506.18203) | Reward | One-shot | Weight training | Collects data + trains | Data flywheel | Model | General | No |
| 84 | [From Curiosity to Competence: How World Models Interact with the Dynamics of Exploration](https://arxiv.org/abs/2507.08210) | Reward, Policy | World-model | Weight training | Collects data + trains | Verification feedback | Simulation | General | No |
| 85 | [Large Reward Models: Generalizable Online Robot Reward Models](https://arxiv.org/abs/2603.16065) | Reward | Closed-loop | Weight training | Collects data + trains | Data flywheel | Real-world, Human | Robotics | No |
| 86 | [DERL: Differentiable Evolutionary Discovery of Optimal Reward Structures](https://arxiv.org/abs/2512.13399) | Reward | Evolutionary | Weight training | Collects data + trains | Data flywheel | Simulation | General | No |
| 87 | [RM-Distiller（近邻）](https://arxiv.org/abs/2601.14032) | Reward | One-shot | Weight training | Frozen at runtime | No feedback | N/A | General | No |
| 88 | [Generating and Refining Dynamic Evaluation Rubrics for LLM-as-a-Judge](https://arxiv.org/abs/2605.30568) | Reward | Closed-loop | Adapts at runtime | Collects data, no training | Verification feedback | Model | NLP | No |
| 89 | [Inference-Time Reward Hacking in Large Language Models](https://arxiv.org/abs/2508.08884) | Reward | One-shot | Adapts at runtime | Frozen at runtime | Verification feedback | Model | General | No |
| 90 | [TDRM: Smooth Reward Models with Temporal Difference for LLM Reasoning](https://openreview.net/forum?id=j2oWVgTFNX) | Reward | World-model, Closed-loop | Mechanism self-evolves | Frozen at runtime | Verification feedback | Model | Math | No |
| 91 | [ENPIRE: Agentic Robot Policy Self-Improvement in the Real World](https://arxiv.org/abs/2606.19980) | Reward | Multi-agent, Closed-loop | Mechanism self-evolves | Collects data, no training | Data flywheel | Real-world | Robotics | No |
| 92 | [OpenRubrics: Scalable Synthetic Rubric Generation for Reward Modeling](https://arxiv.org/abs/2510.07743) | Reward | Evolutionary | Frozen mechanism | Frozen at runtime | Verification feedback | Model, Human | NLP | No |
| 93 | [Autorubric: A Unifying Framework for Rubric-Based LLM Evaluation on Non-Verifiable Tasks](https://arxiv.org/abs/2603.00077) | Reward | One-shot | Frozen mechanism | Frozen at runtime | Verification feedback | Model | NLP | No |
| 94 | [AutoRubric: Rubric-Based Generative Rewards for Faithful Multimodal Reasoning](https://arxiv.org/abs/2510.14738) | Reward | One-shot | Frozen mechanism | Frozen at runtime | Verification feedback | Model | Multimodal | No |
| 95 | [Rubrics as Rewards: Reinforcement Learning Beyond Verifiable Domains](https://arxiv.org/abs/2507.17746) | Reward | One-shot | Frozen mechanism | Frozen at runtime | Verification feedback | Model | NLP | No |
| 96 | [Reward Model Overoptimisation in Iterated RLHF](https://arxiv.org/abs/2505.18126) | Reward | One-shot | Frozen mechanism | Frozen at runtime | Verification feedback | Model | General | No |
| 97 | [FORGE: A Multi-Agent LLM Framework for Reward Design](https://openreview.net/forum?id=Z6GStCfccl) | Reward | Multi-agent, Evolutionary | Frozen mechanism | Collects data, no training | Verification feedback | Simulation | General | No |
| 98 | [LaRes: Evolutionary Reinforcement Learning with LLM-based Adaptive Reward Search](https://papers.nips.cc/paper_files/paper/2025/hash/21b5d3a17aa5525f30bfd2bc59ac3a48-Abstract-Conference.html) | Reward | Evolutionary | Frozen mechanism | Collects data + trains | Verification feedback | Simulation | Robotics | No |
| 99 | [Reward Modeling for Reinforcement Learning-Based LLM Reasoning: A Survey](https://arxiv.org/abs/2602.09305) | Reward | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | N/A | General | No |
| 100 | [SENSEI: Semantic Exploration Guided by Foundation Models](https://arxiv.org/abs/2503.01584) | Reward | World-model | Frozen mechanism | Collects data + trains | Data flywheel | Model | Robotics | No |
| 101 | [REvolve: Reward Evolution with Large Language Models](https://arxiv.org/abs/2406.01309) | Reward | Evolutionary | Frozen mechanism | Collects data, no training | Verification feedback | Simulation | General | No |
| 102 | [PCGRLLM](https://arxiv.org/abs/2502.10906) | Reward | Evolutionary | Frozen mechanism | Collects data, no training | No feedback | Simulation | Minecraft | No |
| 103 | [MoRE](https://imt-atlantique.hal.science/hal-05450173/document) | Reward | Evolutionary | Frozen mechanism | Collects data, no training | Verification feedback | Simulation | General | No |
| 104 | [DrEureka](https://arxiv.org/abs/2406.01967) | Reward | Evolutionary | Frozen mechanism | Collects data, no training | Verification feedback | Simulation | General | No |
| 105 | [Eureka](https://arxiv.org/abs/2310.12931) | Reward | Evolutionary | Frozen mechanism | Collects data, no training | Verification feedback | Simulation | Robotics | No |
| 106 | [CARD: A Large Language Model-Driven Reward Design Framework](https://arxiv.org/abs/2410.14660) | Reward | Closed-loop | Frozen mechanism | Collects data, no training | Verification feedback | Model | General | No |
| 107 | [Reward Design with Language Models (L2R)（近邻）](https://arxiv.org/abs/2303.00001) | Reward | One-shot | Frozen mechanism | Frozen at runtime | No feedback | N/A | General | No |
| 108 | [Text2Reward（初版）](https://arxiv.org/abs/2309.11489) | Reward | One-shot | Frozen mechanism | Frozen at runtime | No feedback | Simulation, Human | General | No |
| 109 | [Emergent Tool Use From Multi-Agent Autocurricula](https://arxiv.org/abs/1909.07528) | Skill | Multi-agent, Evolutionary | Weight training | Collects data + trains | Data flywheel | Simulation | Minecraft | No |
| 110 | [SAGE: Skill Augmented GRPO for Self-Evolution](https://arxiv.org/abs/2512.17102) | Skill | Closed-loop | Weight training | Collects data + trains | Data flywheel | Symbolic | General | No |
| 111 | [DADS: Dynamics-Aware Unsupervised Discovery of Skills](https://arxiv.org/abs/1907.01657) | Skill | World-model | Weight training | Collects data + trains | Verification feedback | Model | General | No |
| 112 | [LUCID: Latent-Skill Unified Control via Imagined Dynamics](https://arxiv.org/abs/2608.07746) | Skill | World-model | Weight training | Collects data + trains | Verification feedback | Simulation | General | No |
| 113 | [Odyssey](https://openreview.net/forum?id=vtGLtSxtqv) | Skill | Skill-accrual | Weight training | Collects data, no training | No feedback | Model | General | No |
| 114 | [JARVIS-1](https://arxiv.org/search/?searchtype=all&query=JARVIS-1+open-world+multi-task+agents+memory-augmented) | Skill | Skill-accrual | Weight training | Collects data, no training | No feedback | Model | General | No |
| 115 | [SkillFoundry: Building Self-Evolving Agent Skill Libraries](https://arxiv.org/abs/2604.03964) | Skill | Skill-accrual | Mechanism self-evolves | Collects data, no training | Data flywheel | Model | General | No |
| 116 | [SkillAxe: Sharpening LLM-Authored Agent Skills Through Execution Feedback](https://arxiv.org/abs/2606.10546) | Skill | Closed-loop | Mechanism self-evolves | Collects data, no training | Verification feedback | Symbolic | General | No |
| 117 | [MineEvolve: Minecraft Skills and Guardrails from Experience](https://arxiv.org/abs/2603.13131) | Skill, Constraint | Skill-accrual | Mechanism self-evolves | Collects data, no training | Data flywheel | Model | Minecraft | No |
| 118 | [Self-Evolving Embodied Agents via Skill-Harness Evolution](https://arxiv.org/abs/2608.11350) | Skill | Skill-accrual | Mechanism self-evolves | Collects data, no training | Data flywheel | Model | General | No |
| 119 | [Super Library Agent](https://arxiv.org/abs/2608.29310) | Skill | Skill-accrual | Mechanism self-evolves | Collects data, no training | No feedback | Model | General | No |
| 120 | [Voyager](https://arxiv.org/abs/2305.16291) | Skill | Skill-accrual | Mechanism self-evolves | Collects data, no training | Data flywheel | Model | Minecraft | No |
| 121 | [Multi-Resolution Skill Discovery for HRL Agents](https://arxiv.org/abs/2505.21410) | Skill | World-model | Frozen mechanism | Frozen at runtime | Verification feedback | Simulation | Robotics | No |
| 122 | [CoEvoSkills: Self-Evolving Agent Skills via Co-Evolutionary Methods](https://arxiv.org/abs/2604.01687) | Skill | Evolutionary | Frozen mechanism | Collects data, no training | Verification feedback | Model | General | No |
| 123 | [EvoSkill](https://arxiv.org/abs/2603.02766) | Skill | Multi-agent | Frozen mechanism | Frozen at runtime | No feedback | Model | General | No |
| 124 | [LEGO-Prover](https://scholar.google.com/scholar?q=LEGO-Prover+skill+library+theorem+proving) | Skill, Research | Skill-accrual | Frozen mechanism | Collects data, no training | No feedback | Model | Math | No |
| 125 | [LILO](https://arxiv.org/abs/2310.19791) | Skill | Skill-accrual | Frozen mechanism | Collects data, no training | No feedback | Model | General | No |
| 126 | [Provably Safe Policy Updates in Deep Reinforcement Learning](https://arxiv.org/abs/2604.09452) | Constraint | Closed-loop | Weight training | Collects data + trains | Data flywheel | Symbolic | General | No |
| 127 | [SafeDreamer: Safe Reinforcement Learning with World Models](https://arxiv.org/abs/2307.07176) | Constraint | World-model | Weight training | Collects data + trains | Verification feedback | Simulation | General | No |
| 128 | [Test-Time Adaptation for Generalizable Task Progress Estimation](https://arxiv.org/abs/2506.10085) | Constraint | Closed-loop | Adapts at runtime | Trains, no data collection | Verification feedback | Model | Robotics | No |
| 129 | [Where LLM Agents Fail and How They Can Learn From Failures](https://arxiv.org/abs/2509.25370) | Constraint, Action | Memory, Closed-loop | Mechanism self-evolves | Collects data, no training | Data flywheel | Symbolic | General | No |
| 130 | [AIR: Improving Agent Safety through Incident Response](https://arxiv.org/abs/2602.11749) | Constraint | Memory | Mechanism self-evolves | Collects data, no training | Data flywheel | Symbolic | General | No |
| 131 | [CAPS: Constraint-Adaptive Policy Switching for Offline Safe RL](https://ojs.aaai.org/index.php/AAAI/article/view/33726) | Constraint | Closed-loop | Mechanism self-evolves | Collects data, no training | Verification feedback | Symbolic | General | No |
| 132 | [Proactive Runtime Enforcement of LLM Agent Safety](https://arxiv.org/abs/2508.00500) | Constraint | World-model, Closed-loop | Frozen mechanism | Collects data, no training | Verification feedback | Model | General | No |
| 133 | [Toward Safe LLM Agents: A Survey of Specification, Verification, and Enforcement](https://arxiv.org/abs/2608.14590) | Constraint | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | Symbolic | General | No |
| 134 | [ToolEmu: Identifying the Risks of LLM Agents with an LLM Emulator](https://arxiv.org/abs/2309.04786) | Constraint | World-model | Frozen mechanism | Collects data, no training | Verification feedback | Model | General | No |
| 135 | [SafeManip: A Property-Driven Benchmark for Temporal Safety in Robotic Manipulation](https://arxiv.org/abs/2605.12386) | Constraint | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | N/A | Robotics | No |
| 136 | [RoboGuard: Safety Guardrails for LLM-Enabled Robots](https://arxiv.org/abs/2503.07885) | Constraint | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | N/A | Robotics | No |
| 137 | [Learning Failure Prevention Skills for Safe Robot Manipulation](https://arxiv.org/abs/2305.02807) | Constraint | Skill-accrual | Frozen mechanism | Collects data, no training | Verification feedback | Real-world | Robotics | No |
| 138 | [SAHOO: Monitoring Alignment Drift during RSI](https://arxiv.org/abs/2603.06333) | Constraint | Closed-loop | Frozen mechanism | Collects data, no training | Verification feedback | Model | General | No |
| 139 | [AutoSafeCoder](https://neurips.cc/virtual/2024/99390) | Constraint | Multi-agent | Frozen mechanism | Frozen at runtime | No feedback | Model | General | No |
| 140 | [AssertMiner（近邻）](https://arxiv.org/abs/2511.10007) | Constraint | Skill-accrual | Frozen mechanism | Collects data, no training | No feedback | Symbolic | General | No |
| 141 | [Lisa（近邻）](https://arxiv.org/abs/2607.18711) | Constraint | Skill-accrual | Frozen mechanism | Collects data, no training | Verification feedback | Symbolic | General | No |
| 142 | [QD 漏洞多样性搜索（近邻）](https://arxiv.org/abs/2606.00801) | Constraint | Evolutionary | Frozen mechanism | Collects data, no training | No feedback | Model | General | No |
| 143 | [UnitTenX（近邻）](https://arxiv.org/abs/2510.05441) | Constraint | Closed-loop | Frozen mechanism | Collects data, no training | No feedback | Symbolic | General | No |
| 144 | [Property-Generated Solver](https://arxiv.org/abs/2506.18315) | Constraint | Closed-loop | Frozen mechanism | Collects data, no training | No feedback | Symbolic | General | No |
| 145 | [Code-as-Monitor (CaM)](https://arxiv.org/abs/2412.04455) | Constraint | Closed-loop | Frozen mechanism | Collects data, no training | Verification feedback | Model, Simulation | General | No |
| 146 | [Pre-Execution Safety Gate](https://arxiv.org/abs/2604.05427) | Constraint | One-shot | Frozen mechanism | Frozen at runtime | No feedback | N/A | Robotics | No |
| 147 | [Plug in the Safety Chip](https://openreview.net/pdf?id=INvxF4iQ34) | Constraint | One-shot | Frozen mechanism | Frozen at runtime | No feedback | N/A | General | No |
| 148 | [JEPA-Anything: Learning Predictive Models across Different Worlds](https://arxiv.org/abs/2609.20800) | World | World-model | Weight training | Collects data + trains | Evidence feedback | Simulation | General | No |
| 149 | [NeuMA: Neural Material Adaptor for Visual Grounding of Intrinsic Dynamics](https://arxiv.org/abs/2410.08257) | World | World-model, Closed-loop | Weight training | Collects data + trains | Verification feedback | Real-world | General | No |
| 150 | [FlexiWorld: Learning and Planning via Flexible Action Chunks Across Multiple Time Scales](https://arxiv.org/abs/2609.35138) | World, Action | World-model | Weight training | Collects data + trains | No feedback | Simulation | Robotics | No |
| 151 | [SimWorld Studio: Open-Source UE5 Platform for Automatic Generation of Evolving Embodied Environments](https://arxiv.org/abs/2605.09423) | World | One-shot | Weight training | Collects data + trains | Verification feedback | Simulation | Robotics | No |
| 152 | [PAN: A World Model for General Interactable Worlds via Generative Latent Prediction](https://arxiv.org/abs/2506.16616) | World, Policy | World-model | Weight training | Collects data + trains | Verification feedback | Simulation | General | No |
| 153 | [Genie: Generative Interactive Environments](https://arxiv.org/abs/2402.15391) | World | One-shot | Weight training | Collects data + trains | Data flywheel | Simulation | General | No |
| 154 | [Agent-World: Scaling Real-World Environment Synthesis](https://arxiv.org/abs/2604.18292) | World | World-model, Evolutionary | Weight training | Collects data + trains | Data flywheel | Simulation | General | No |
| 155 | [Agent World Model: Infinity Synthetic Environments](https://arxiv.org/abs/2602.10090) | World | One-shot | Weight training | Collects data + trains | Data flywheel | Simulation | General | No |
| 156 | [Code2Worlds: Empowering Coding LLMs for 4D World Models](https://arxiv.org/abs/2602.11757) | World | One-shot | Weight training | Frozen at runtime | Verification feedback | Simulation | General | No |
| 157 | [Cosmos（近邻，非代码）](https://arxiv.org/abs/2501.03575) | World | One-shot | Weight training | Frozen at runtime | No feedback | N/A | General | No |
| 158 | [Code-as-World-VL](https://arxiv.org/abs/2608.27549) | World | Closed-loop | Weight training | Collects data + trains | Data flywheel | Simulation | General | No |
| 159 | [AgentGarten: Code Worlds for Evolving Agents](https://arxiv.org/abs/2610.12374) | World, Agent-Self | Evolutionary, Skill-accrual | Mechanism self-evolves | Collects data, no training | Data flywheel | Symbolic | General | No |
| 160 | [Memento 3: Model-Based Recursive Self-Improvement through Reflective Rulebooks](https://arxiv.org/abs/2610.11794) | World, Agent-Self | World-model, Memory, Closed-loop | Mechanism self-evolves | Collects data, no training | Verification feedback | Symbolic | General | Yes |
| 161 | [Self-Evolving World Models for LLM Agent Planning](https://arxiv.org/abs/2606.30639) | World | Closed-loop | Mechanism self-evolves | Collects data, no training | Verification feedback | Model | General | No |
| 162 | [Dual Digital Twin（近邻）](https://www.mdpi.com/2079-9292/14/24/4806) | World | Skill-accrual | Mechanism self-evolves | Collects data, no training | No feedback | Simulation | General | No |
| 163 | [WorldStream（流式 3D 世界生成）](https://krennic999.github.io/WorldStream/) | World, Design | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | Symbolic | General | No |
| 164 | [Fysiverse-3D-SimReady: Agentic Physical Simulation for Pragmatic 3D World Reconstruction](https://arxiv.org/abs/2609.31715) | World, Design | Multi-agent | Frozen mechanism | Frozen at runtime | Evidence feedback | Simulation, Real-world | Robotics | No |
| 165 | [URDFormer: A Pipeline for Constructing Articulated Simulation Environments from Real-world Images](https://www.roboticsproceedings.org/rss20/p124.pdf) | World | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | Simulation, Real-world | Robotics | No |
| 166 | [RoboCousin: Build Your Own Simulation Playground for Robust Bimanual Robotic Manipulation](https://arxiv.org/abs/2609.08339) | World, Skill | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | Simulation | Robotics | No |
| 167 | [PhysTwin: Physics-Informed Reconstruction and Simulation of Deformable Objects from Videos](https://arxiv.org/abs/2503.17973) | World | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | Real-world | Robotics | No |
| 168 | [PAC-NeRF: Physics Augmented Continuum NeRF for Geometry-Agnostic System Identification](https://arxiv.org/abs/2303.05512) | World | One-shot | Frozen mechanism | Frozen at runtime | Verification feedback | Real-world | Robotics | No |
| 169 | [PhysGaussian: Physics-Integrated 3D Gaussians for Generative Dynamics](https://arxiv.org/abs/2311.12198) | World | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | Simulation | General | No |
| 170 | [PhysDreamer: Physics-Based Interaction with 3D Objects via Video Generation](https://arxiv.org/abs/2404.13026) | World, Design | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | Real-world, Model | General | No |
| 171 | [3D Constitutive Gaussians for General Physics-Based Simulation](https://openreview.net/forum?id=9HZtP6I5lv) | World | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | Simulation | General | No |
| 172 | [PhyScene: Physically Interactable 3D Scene Synthesis for Embodied AI](https://arxiv.org/abs/2404.09465) | World, Design | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | Simulation | Robotics | No |
| 173 | [Scaling Laws for Pre-training Agents and World Models](https://arxiv.org/abs/2411.04434) | World | One-shot | Frozen mechanism | Frozen at runtime | Verification feedback | Simulation | General | No |
| 174 | [A Definition and Roadmap for World Models](https://arxiv.org/abs/2607.06401) | World | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | Model | General | No |
| 175 | [NeSyS: Neuro-Symbolic Synergy for Interactive World Modeling](https://arxiv.org/abs/2602.10480) | World | World-model | Frozen mechanism | Collects data, no training | Verification feedback | Symbolic | General | No |
| 176 | [World Model for Robot Learning: A Comprehensive Survey](https://arxiv.org/abs/2605.00080) | World | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | Simulation | Robotics | No |
| 177 | [Foundation World Models for Agents that Learn, Verify, and Plan](https://arxiv.org/abs/2602.23997) | World | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | Model | General | No |
| 178 | [From Word to World: Can Large Language Models be World Models?](https://arxiv.org/abs/2512.18832) | World | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | N/A | General | No |
| 179 | [SR-Platform](https://arxiv.org/abs/2605.14700) | World | Skill-accrual, Multi-agent | Frozen mechanism | Collects data, no training | Verification feedback | Simulation | General | No |
| 180 | [Agent2World: Learning to Generate Symbolic World Models via Adaptive Tool-Use](https://arxiv.org/abs/2512.22336) | World | World-model, Multi-agent | Frozen mechanism | Frozen at runtime | Data flywheel | Model | General | No |
| 181 | [PoE-World: Compositional World Modeling with Products of Experts](https://arxiv.org/abs/2505.10819) | World | World-model | Frozen mechanism | Frozen at runtime | Verification feedback | Model | General | No |
| 182 | [Generating Code World Models with LLMs (GIF-MCTS)](https://arxiv.org/abs/2405.15383) | World | World-model | Frozen mechanism | Collects data, no training | Verification feedback | Model | General | No |
| 183 | [Executable World Models for ARC-AGI-3](https://arxiv.org/abs/2608.27549) | World | World-model | Frozen mechanism | Frozen at runtime | No feedback | Model | General | No |
| 184 | [Code World Models for General Game Playing](https://arxiv.org/abs/2510.04542) | World | World-model, Evolutionary | Frozen mechanism | Collects data, no training | Verification feedback | Symbolic | General | No |
| 185 | [WorldCoder: A Model-Based LLM Agent](https://arxiv.org/abs/2402.12275) | World | World-model | Frozen mechanism | Collects data, no training | Verification feedback | Symbolic | General | No |
| 186 | [3DCodeBench](https://arxiv.org/abs/2606.01057) | World | One-shot | Frozen mechanism | Frozen at runtime | No feedback | N/A | General | No |
| 187 | [VoxelCodeBench](https://arxiv.org/abs/2604.02580) | World | One-shot | Frozen mechanism | Frozen at runtime | No feedback | N/A | General | No |
| 188 | [Code-as-Room](https://arxiv.org/abs/2605.18451) | World | One-shot | Frozen mechanism | Frozen at runtime | No feedback | N/A | General | No |
| 189 | [SceneCode](https://arxiv.org/abs/2605.19587) | World | One-shot | Frozen mechanism | Frozen at runtime | No feedback | N/A | General | No |
| 190 | [Scene Language](https://arxiv.org/search/?searchtype=all&query=Scene+Language+visual+numerical+scene+generation) | World | One-shot | Frozen mechanism | Frozen at runtime | No feedback | N/A | General | No |
| 191 | [Genesis](https://arxiv.org/abs/2502.02590) | World | One-shot | Frozen mechanism | Frozen at runtime | No feedback | N/A | General | No |
| 192 | [RoboGen](https://arxiv.org/abs/2311.01455) | World | One-shot | Frozen mechanism | Collects data + trains | No feedback | Simulation | General | No |
| 193 | [YuE2: Unifying Symbolic and Audio Music Generation at Frontier Quality](https://arxiv.org/abs/2609.33757) | Design | One-shot | Weight training | Collects data + trains | Evidence feedback | Model | General | No |
| 194 | [Leveraging Human Revisions for Improving Text-to-Layout Generation](https://arxiv.org/abs/2405.13026) | Design | Closed-loop | Weight training | Collects data + trains | Data flywheel | Human | Frontend | No |
| 195 | [BRepCLIP: Contrastive Multimodal Pretraining on BRep](https://arxiv.org/abs/2606.05515) | Design | Skill-accrual | Weight training | Frozen at runtime | Verification feedback | Simulation | CAD | No |
| 196 | [Generative Floor Plan Design with LLMs via Reinforcement Learning](https://arxiv.org/abs/2605.14117) | Design | One-shot | Weight training | Frozen at runtime | Verification feedback | N/A | Architecture | No |
| 197 | [VeriCoder: Fine-tuned RTL Generation with 125K+ Examples](https://arxiv.org/abs/2504.15659) | Design | One-shot | Weight training | Frozen at runtime | Verification feedback | Symbolic | Chip | No |
| 198 | [RTLCoder: Outperforming GPT-3.5 in Design RTL Generation](https://arxiv.org/abs/2312.08617) | Design | One-shot | Weight training | Frozen at runtime | Data flywheel | Symbolic | Chip | No |
| 199 | [CAD-Recode: Reverse Engineering CAD Code from Point Clouds](https://arxiv.org/abs/2412.14042) | Design | One-shot | Weight training | Frozen at runtime | Verification feedback | N/A | CAD | No |
| 200 | [Text2CAD](https://sadilkhan.github.io/text2cad-project/) | Design | One-shot | Weight training | Frozen at runtime | Evidence feedback | N/A | CAD | No |
| 201 | [Interactive Evolutionary Image Generation with Bayesian Optimization](https://research-portal.uu.nl/ws/files/235432773/Image_Generation_with_Interactive_Evolutionary_System_using_Bayesian_Optimization.pdf) | Design | Evolutionary | Mechanism self-evolves | Collects data, no training | Verification feedback | Human | General | No |
| 202 | [AssemCAD: Representative Production-Ready CAD Assemblies](https://arxiv.org/abs/2607.05123) | Design | Skill-accrual | Mechanism self-evolves | Collects data, no training | Data flywheel | Simulation | CAD | No |
| 203 | [Compositional Machine Design as Program Synthesis with LLMs](https://arxiv.org/abs/2510.14980) | Design, Research | One-shot | Frozen mechanism | Frozen at runtime | Verification feedback | Real-world, Symbolic | Robotics | No |
| 204 | [PhysX-3D: Physical-Grounded 3D Asset Generation](https://arxiv.org/abs/2507.12465) | Design, World | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | Simulation | CAD | No |
| 205 | [SPARK: Sim-ready Part-level Articulated Reconstruction with VLM Knowledge](https://arxiv.org/abs/2512.01629) | Design, World | One-shot | Frozen mechanism | Frozen at runtime | Verification feedback | Model | Robotics | No |
| 206 | [Articulate-Anything: Automatic Modeling of Articulated Objects via a Vision-Language Foundation Model](https://arxiv.org/abs/2410.13882) | Design | Closed-loop | Frozen mechanism | Frozen at runtime | Verification feedback | Model, Simulation | Robotics | No |
| 207 | [Atlas3D: Physically Constrained Self-Supporting Text-to-3D for Simulation and Fabrication](https://neurips.cc/virtual/2024/poster/96557) | Design, Constraint | Closed-loop | Frozen mechanism | Frozen at runtime | Verification feedback | Simulation | CAD | No |
| 208 | [GaussianProperty: Integrating Physical Properties to 3D Gaussians with LMMs](https://arxiv.org/abs/2412.11258) | Design, World | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | Model | Robotics | No |
| 209 | [Material Palette: Extraction of Materials from a Single Image](https://astra-vision.github.io/MaterialPalette/) | Design | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | Real-world | CAD | No |
| 210 | [CADIR: A Cross-Backend Editable Intermediate Representation](https://arxiv.org/abs/2608.00891) | Design | Skill-accrual | Frozen mechanism | Collects data, no training | Verification feedback | Model | CAD | No |
| 211 | [Large Language Models for Computer-Aided Design: A Survey](https://arxiv.org/abs/2505.08137) | Design | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | N/A | CAD | No |
| 212 | [Catala: A Programming Language for the Law](https://arxiv.org/abs/2103.03198) | Design | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | Symbolic | Legal | No |
| 213 | [IFC-Based Building Design Using Large Language Models](https://arxiv.org/abs/2511.05533) | Design | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | N/A | Architecture | No |
| 214 | [Text2MBL: Text-to-Code Generation for Modular Building Layouts](https://arxiv.org/abs/2509.23713) | Design | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | N/A | Architecture | No |
| 215 | [Interaction2Code: How Far Are We From Automatic Interactive Webpage Generation?](https://arxiv.org/abs/2411.03292) | Design | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | N/A | Frontend | No |
| 216 | [Web2Code: A Large-scale Webpage-to-Code Dataset and Benchmark](https://proceedings.neurips.cc/paper_files/paper/2024/file/cb66be286795d71f89367d596bf78ea7-Paper-Datasets_and_Benchmarks_Track.pdf) | Design | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | N/A | Frontend | No |
| 217 | [Text2CAD-Bench: A Benchmark for LLM-based Text-to-CAD](https://arxiv.org/abs/2605.18430) | Design | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | N/A | CAD | No |
| 218 | [EvolVE: Evolutionary Search for LLM-based Verilog Generation](https://arxiv.org/abs/2601.18067) | Design | Evolutionary | Frozen mechanism | Collects data, no training | Verification feedback | Symbolic | Chip | No |
| 219 | [CADEvolve: Creating Realistic CAD via Program Evolution](https://arxiv.org/abs/2602.16317) | Design | Evolutionary | Frozen mechanism | Collects data, no training | Data flywheel | Simulation | CAD | No |
| 220 | [EvoCAD: Evolutionary CAD Code Generation with Vision Language Models](https://arxiv.org/abs/2510.11631) | Design | Evolutionary | Frozen mechanism | Collects data, no training | Verification feedback | Simulation | CAD | No |
| 221 | [From Surrogate Modeling to Autonomous Design](https://arxiv.org/abs/2608.18279) | Design | World-model | Frozen mechanism | Frozen at runtime | Evidence feedback | Simulation | General | No |
| 222 | [NeOn-GPT](https://2024.eswc-conferences.org/wp-content/uploads/2024/05/77770034.pdf) | Design | Multi-agent | Frozen mechanism | Frozen at runtime | No feedback | Model | Ontology | No |
| 223 | [NL2SHACL 基准（近邻）](https://arxiv.org/html/2608.07530v2) | Design | Closed-loop | Frozen mechanism | Collects data, no training | Evidence feedback | Symbolic | Ontology | No |
| 224 | [xpSHACL](https://arxiv.org/abs/2507.08432) | Design | Closed-loop | Frozen mechanism | Collects data, no training | No feedback | Symbolic | Ontology | No |
| 225 | [Extended NeOn-GPT](https://journals.sagepub.com/doi/abs/10.1177/22104968261453138) | Design | Closed-loop | Frozen mechanism | Collects data, no training | Verification feedback | Symbolic | Ontology | No |
| 226 | [Text-to-CAD + Visual Feedback](https://icml.cc/virtual/2025/poster/46007) | Design | Closed-loop | Frozen mechanism | Collects data, no training | Verification feedback | Simulation | CAD | No |
| 227 | [SPIRES / OntoGPT: Structured Prompt Interrogation and Recursive Extraction of Semantics](https://arxiv.org/abs/2304.02711) | Design | One-shot | Frozen mechanism | Frozen at runtime | No feedback | N/A | Ontology | No |
| 228 | [RIGOR: Retrieval-Augmented Generation of Ontologies from Relational Schemas](https://arxiv.org/abs/2506.01232) | Design | One-shot | Frozen mechanism | Frozen at runtime | No feedback | N/A | Ontology | No |
| 229 | [Ontology Generation using LLMs](https://arxiv.org/abs/2503.05388) | Design | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | N/A | Ontology | No |
| 230 | [Text-to-CadQuery](https://arxiv.org/abs/2505.06507) | Design | One-shot | Frozen mechanism | Frozen at runtime | No feedback | Simulation | CAD | No |
| 231 | [Design2Code](https://arxiv.org/abs/2403.03163) | Design | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | N/A | Frontend | No |
| 232 | [Contextual Credit Policy Optimization](https://arxiv.org/abs/2610.19103) | Reasoning | Closed-loop | Weight training | Collects data + trains | Verification feedback | Symbolic | General | No |
| 233 | [Surprising Success, Repeated Failure: Entropy-Guided Credit Assignment for Exploration in LLM Reasoning](https://arxiv.org/abs/2609.33781) | Reasoning | Closed-loop | Weight training | Collects data + trains | Verification feedback | Symbolic | Math | No |
| 234 | [Better Supervision Is Nearby: Neighborhood On-Policy Self-Distillation](https://arxiv.org/abs/2609.39687) | Reasoning | One-shot | Weight training | Collects data + trains | Verification feedback | Symbolic | Math | No |
| 235 | [Recursive Self-Improvement via On-Policy Distillation for Reasoning](https://arxiv.org/abs/2609.30652) | Reasoning, Agent-Self | Closed-loop | Weight training | Collects data + trains | Verification feedback | Symbolic | Math | Yes |
| 236 | [Rethinking Cross-Tokenizer On-Policy Distillation: From Alignment Coverage to Supervision Reliability](https://arxiv.org/abs/2610.08448) | Reasoning | One-shot | Weight training | Collects data + trains | Verification feedback | Symbolic | NLP | No |
| 237 | [HybridAgents: Hybrid Reasoning Agents](https://arxiv.org/abs/2610.18861) | Reasoning | World-model | Weight training | Collects data + trains | Evidence feedback | Model | NLP | No |
| 238 | [LatentLoop: Scaling Looped MoE Models with Asymmetric Compute Allocation](https://arxiv.org/abs/2610.19975) | Reasoning | Closed-loop | Weight training | Trains, no data collection | No feedback | N/A | NLP | No |
| 239 | [CoTranslator: Reverse to Forward Chain-of-Thought Translator for Reasoning Distillation](https://arxiv.org/abs/2610.20828) | Reasoning | One-shot | Weight training | Collects data + trains | Verification feedback | Symbolic | NLP | No |
| 240 | [Improving Test-Time Scaling with Adaptive Looped Transformers](https://arxiv.org/abs/2609.35748) | Reasoning | Closed-loop | Weight training | Trains, no data collection | No feedback | N/A | NLP | No |
| 241 | [Knowing When Thinking Is Not Enough: Teaching Small Reasoning Models to Reason Beyond Their Parametric Knowledge](https://arxiv.org/abs/2609.34327) | Reasoning | Closed-loop | Weight training | Collects data + trains | Verification feedback | Symbolic | NLP | No |
| 242 | [Beyond Repeated Sampling: Learning Search Policies for LLM Reasoning](https://arxiv.org/abs/2609.26704) | Reasoning | Closed-loop | Weight training | Collects data + trains | Verification feedback | Symbolic | Math | No |
| 243 | [ReflectRL: Learning from Golden Negative Trajectories via Reflective-to-Direct Reasoning](https://arxiv.org/abs/2608.03972) | Reasoning | Closed-loop | Weight training | Collects data + trains | Verification feedback | Model | Math | No |
| 244 | [Self-Improvement of Language Models by Post-Training on Multi-Agent Debate](https://arxiv.org/abs/2509.15172) | Reasoning | Multi-agent | Weight training | Collects data + trains | Data flywheel | Model | General | No |
| 245 | [SimpleTIR: End-to-End Reinforcement Learning for Multi-Turn Tool-Integrated Reasoning](https://arxiv.org/abs/2509.02479) | Reasoning | Closed-loop | Weight training | Collects data + trains | Data flywheel | Symbolic | Math | No |
| 246 | [ReTool: Reinforcement Learning for Strategic Tool Use in LLMs](https://arxiv.org/abs/2504.11536) | Reasoning | Closed-loop | Weight training | Collects data + trains | Data flywheel | Symbolic | Math | No |
| 247 | [STaR: Bootstrapping Reasoning with Reasoning](https://arxiv.org/abs/2203.14465) | Reasoning | Closed-loop | Weight training | Collects data + trains | Data flywheel | Model | Math | No |
| 248 | [VPD (Visual Program Distillation)](https://www.semanticscholar.org/paper/af1c871282ec122869d03f5420ef5d9143358a91) | Reasoning | One-shot | Weight training | Frozen at runtime | No feedback | N/A | General | No |
| 249 | [Test-Time Curricula for Targeted Reinforcement Learning](https://openreview.net/forum?id=HoUIYpitfo) | Reasoning | Evolutionary, Closed-loop | Adapts at runtime | Collects data + trains | Verification feedback | Model | Math | No |
| 250 | [Test-Time Policy Adaptation for Enhanced Multi-Turn Reasoning](https://arxiv.org/abs/2509.23166) | Reasoning | Closed-loop | Adapts at runtime | Collects data + trains | Verification feedback | Model | Math | No |
| 251 | [Test-Time Tool Evolution for Scientific Reasoning](https://arxiv.org/abs/2601.07641) | Reasoning | Skill-accrual | Adapts at runtime | Collects data, no training | Verification feedback | Symbolic | Math | No |
| 252 | [Tent: Fully Test-time Adaptation by Entropy Minimization](https://arxiv.org/abs/2006.10726) | Reasoning | One-shot | Adapts at runtime | Trains, no data collection | Verification feedback | Model | General | No |
| 253 | [TTRL: Test-Time Reinforcement Learning](https://arxiv.org/abs/2504.16084) | Reasoning | Closed-loop | Adapts at runtime | Collects data + trains | Verification feedback | Model | Math | No |
| 254 | [Titans: Learning to Memorize at Test Time（近邻）](https://arxiv.org/abs/2501.00663) | Reasoning | One-shot | Adapts at runtime | Trains, no data collection | No feedback | N/A | General | No |
| 255 | [The Surprising Effectiveness of Test-Time Training for Abstract Reasoning（近邻）](https://icml.cc/virtual/2025/poster/44773) | Reasoning | One-shot | Adapts at runtime | Trains, no data collection | No feedback | N/A | General | No |
| 256 | [Learning to (Learn at Test Time): RNNs with Expressive Hidden States (TTT)（近邻）](https://arxiv.org/abs/2407.04620) | Reasoning | One-shot | Adapts at runtime | Trains, no data collection | No feedback | N/A | General | No |
| 257 | [Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366) | Reasoning | Closed-loop, Memory | Mechanism self-evolves | Collects data, no training | Verification feedback | Model | General | No |
| 258 | [ReasoningBank（语言形态）](https://arxiv.org/abs/2509.25140) | Reasoning | Skill-accrual, Memory | Mechanism self-evolves | Collects data, no training | Data flywheel | Model | General | No |
| 259 | [The World Won't Wait: Evaluating and Teaching Agents Under a Live Clock](https://arxiv.org/abs/2610.20665) | Reasoning, Policy | One-shot | Frozen mechanism | Frozen at runtime | Verification feedback | Simulation | General | No |
| 260 | [Thinking Before Thinking: Scaling Agentic Inference Through Meta-Reasoning](https://arxiv.org/abs/2609.38147) | Reasoning | Multi-agent, Closed-loop | Frozen mechanism | Collects data, no training | Verification feedback | Model | General | No |
| 261 | [TreeFlex: Agents Navigating Their Own Search Trees](https://arxiv.org/abs/2610.20334) | Reasoning, Agent-Self | Closed-loop, Memory | Frozen mechanism | Collects data, no training | Verification feedback | Model | General | No |
| 262 | [Can LLMs Anticipate Their Cruxes?](https://arxiv.org/abs/2610.21006) | Reasoning | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | Model | NLP | No |
| 263 | [Improving Factuality and Reasoning in Language Models through Multiagent Debate](https://arxiv.org/abs/2305.14325) | Reasoning | Multi-agent | Frozen mechanism | Frozen at runtime | Verification feedback | Model | General | No |
| 264 | [What Learning Algorithm is In-Context Learning? Investigations with Linear Models](https://arxiv.org/abs/2211.15661) | Reasoning | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | Model | General | No |
| 265 | [RAP: Reasoning via Planning in Language Model is Planning with World Model](https://aclanthology.org/2023.emnlp-main.507.pdf) | Reasoning | World-model | Frozen mechanism | Frozen at runtime | Verification feedback | Model | General | No |
| 266 | [MAC-Reasoner](https://aclanthology.org/2026.findings-acl.233.pdf) | Reasoning | Multi-agent | Frozen mechanism | Frozen at runtime | No feedback | Model | General | No |
| 267 | [AgentGroupChat-V2](https://arxiv.org/abs/2506.15451) | Reasoning | Multi-agent | Frozen mechanism | Frozen at runtime | No feedback | Model | General | No |
| 268 | [AutoQD](https://arxiv.org/abs/2506.05634) | Reasoning | Evolutionary | Frozen mechanism | Collects data, no training | No feedback | Model | General | No |
| 269 | [Quality-Diversity through AI Feedback (QDAIF)](https://arxiv.org/abs/2310.13032) | Reasoning | Evolutionary | Frozen mechanism | Collects data, no training | No feedback | Model | General | No |
| 270 | [Self-Debugging](https://arxiv.org/abs/2304.05128) | Reasoning | Closed-loop | Frozen mechanism | Collects data, no training | Verification feedback | Symbolic | General | No |
| 271 | [ExoViP: Step-by-Step Verification with Exoskeleton Modules](https://arxiv.org/abs/2408.02210) | Reasoning | Closed-loop | Frozen mechanism | Collects data, no training | No feedback | Model | General | No |
| 272 | [LLM+P](https://arxiv.org/abs/2304.11477) | Reasoning | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | Symbolic | General | No |
| 273 | [PoT (Program of Thoughts)](https://arxiv.org/abs/2211.12588) | Reasoning | One-shot | Frozen mechanism | Frozen at runtime | No feedback | N/A | General | No |
| 274 | [PAL](https://arxiv.org/abs/2211.10435) | Reasoning | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | Symbolic | General | No |
| 275 | [ViperGPT: Visual Inference via Python Execution for Reasoning](https://arxiv.org/abs/2303.08128) | Reasoning | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | Symbolic | General | No |
| 276 | [VisProg: Visual Programming — Compositional Visual Reasoning without Training](https://arxiv.org/abs/2211.11559) | Reasoning | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | Symbolic | General | No |
| 277 | [Terminal-RSI: Recursive Self-Improving Terminal Agents via Recursive Self-Rewrite and Policy-Refine](https://arxiv.org/abs/2610.22192) | Agent-Self | Closed-loop | Recursive self-improvement | Collects data + trains | Data flywheel | Symbolic | Software | Yes |
| 278 | [Harness^2: Recursive Agent Harnessing for an Open World](https://arxiv.org/abs/2610.14224) | Agent-Self | Evolutionary, Closed-loop | Recursive self-improvement | Collects data, no training | Data flywheel | Symbolic | General | Yes |
| 279 | [QwenGyre: An Elastic Reinforcement Learning Framework for Training xLong-Horizon Agents](https://arxiv.org/abs/2609.33848) | Agent-Self | Closed-loop | Weight training | Collects data + trains | Verification feedback | Symbolic | General | No |
| 280 | [Self-Challenging Language Model Agents](https://arxiv.org/abs/2506.01716) | Agent-Self | Closed-loop, Skill-accrual | Weight training | Collects data + trains | Data flywheel | Model | GUI | Yes |
| 281 | [Agent-Reflex: Teaching Language Agents to Act Reflectively](https://arxiv.org/abs/2610.17953) | Agent-Self | Closed-loop | Weight training | Collects data + trains | Verification feedback | Model, Human | GUI | No |
| 282 | [Hy-Memory-30B-A3B: Attributed Reinforcement Learning for Long-Term Memory Writing](https://arxiv.org/abs/2610.22196) | Agent-Self | Memory | Weight training | Collects data + trains | Data flywheel | Model | NLP | No |
| 283 | [rLLM: Continual Learning via Real-Time RL for Agents](https://rllm-project.com/post.html?post=realtime_rl.md) | Agent-Self | Closed-loop | Weight training | Collects data + trains | Data flywheel | Model | General | No |
| 284 | [Flying Serving: On-the-Fly Parallelism Switching for LLM Serving](https://arxiv.org/abs/2602.22593) | Agent-Self | One-shot | Weight training | Frozen at runtime | Verification feedback | Symbolic | General | No |
| 285 | [Rollout-Training Co-Design for Efficient LLM-Based Multi-Agent RL](https://arxiv.org/abs/2602.09578) | Agent-Self | Multi-agent | Weight training | Collects data + trains | Verification feedback | Symbolic | General | No |
| 286 | [On-Policy Replay for Continual Supervised Fine-Tuning](https://arxiv.org/abs/2605.29495) | Agent-Self | Closed-loop, Memory | Weight training | Collects data + trains | Data flywheel | Model | General | No |
| 287 | [CLaaS: Continual Learning as a Service for Deployed Agents](https://arxiv.org/abs/2606.05559) | Agent-Self | One-shot | Weight training | Collects data + trains | Data flywheel | Model | General | No |
| 288 | [EvoHarness-RL: Learning Self-Evolving Runtime Harness](https://arxiv.org/abs/2608.05446) | Agent-Self | Evolutionary | Weight training | Collects data + trains | Data flywheel | Symbolic | General | No |
| 289 | [FlowBalance: Verifier-Grounded Self-Improvement from On-Policy Reasoning Experience](https://arxiv.org/abs/2609.03241) | Agent-Self, Reasoning | Closed-loop, Memory | Weight training | Collects data + trains | Data flywheel | Symbolic | Math | No |
| 290 | [SCOPE: Data-Free Self-Play for Open-Ended Task Co-Evolution](https://arxiv.org/abs/2608.19197) | Agent-Self | Evolutionary | Weight training | Collects data + trains | Data flywheel | Symbolic | General | No |
| 291 | [Mem-α: Learning Memory Construction via Reinforcement Learning](https://openreview.net/forum?id=dm42omwep1) | Agent-Self | Memory | Weight training | Collects data + trains | Data flywheel | Model | General | No |
| 292 | [Memory-R1: Enhancing LLM Agents to Manage and Utilize External Memory via RL](https://arxiv.org/abs/2508.19828) | Agent-Self | Memory, Closed-loop | Weight training | Collects data + trains | Data flywheel | Model | General | No |
| 293 | [SDRL: Prepare Reasoning Language Models for Multi-Agent Settings](https://arxiv.org/abs/2601.22297) | Agent-Self | One-shot | Weight training | Collects data + trains | Data flywheel | Model | Math | No |
| 294 | [RAGEN: Understanding Self-Evolution in LLM Agents via Multi-Turn RL](https://arxiv.org/abs/2504.20073) | Agent-Self | Closed-loop | Weight training | Collects data + trains | Verification feedback | Model | General | No |
| 295 | [RISE: Recursive Introspection — Teaching Language Model Agents How to Self-Improve](https://arxiv.org/abs/2407.18219) | Agent-Self | Closed-loop | Weight training | Frozen at runtime | Data flywheel | Model | General | No |
| 296 | [AgentDistill](https://arxiv.org/abs/2506.14728) | Agent-Self | One-shot | Weight training | Frozen at runtime | No feedback | N/A | General | No |
| 297 | [Agent Distillation](https://neurips.cc/virtual/2025/poster/117657) | Agent-Self | Multi-agent | Weight training | Frozen at runtime | No feedback | Model | General | No |
| 298 | [AgentArk](https://arxiv.org/abs/2602.03955) | Agent-Self | Multi-agent | Weight training | Frozen at runtime | No feedback | Model | General | No |
| 299 | [Continual Learning, Not Training: Online Adaptation for Deployed Agents](https://arxiv.org/abs/2511.01093) | Agent-Self, Action | Closed-loop, Memory | Adapts at runtime | Collects data + trains | Verification feedback | Model | General | No |
| 300 | [MemRL: Self-Evolving Agents via Runtime Non-Parametric Reinforcement Learning on Memory](https://arxiv.org/abs/2601.03192) | Agent-Self | Memory, Closed-loop | Adapts at runtime | Collects data, no training | Verification feedback | Model | General | No |
| 301 | [Raven: The Harness of Harnesses for Composable Agentic Intelligence](https://arxiv.org/abs/2609.33439) | Agent-Self | Evolutionary, Multi-agent | Mechanism self-evolves | Collects data, no training | Data flywheel | Model, Symbolic | General | No |
| 302 | [RSI Agent: Autonomous Exploration for Recursive Self-improvement in New Environments](https://arxiv.org/abs/2609.15364) | Agent-Self | Multi-agent, Memory | Mechanism self-evolves | Collects data, no training | Data flywheel | Model | GUI | No |
| 303 | [Observability-Driven Automatic Evolution of Coding Agents](https://arxiv.org/abs/2604.25850) | Agent-Self | Closed-loop | Mechanism self-evolves | Collects data, no training | Data flywheel | Symbolic | Software | No |
| 304 | [Retrospective Harness Optimization: Improving LLM Agents via Self-Preference over Trajectory](https://arxiv.org/abs/2606.05922) | Agent-Self | Closed-loop, Memory | Mechanism self-evolves | Collects data, no training | Data flywheel | Symbolic | Software | No |
| 305 | [The Last Harness You Will Ever Build: Evolution Agent Modifies Harness End-to-End](https://arxiv.org/abs/2604.21003) | Agent-Self | Evolutionary, Closed-loop | Mechanism self-evolves | Collects data, no training | Data flywheel | Symbolic | Software | No |
| 306 | [Worth Remembering: Surprise-Gated Robot Episodic Memory via World Model Loss](https://arxiv.org/abs/2606.03787) | Agent-Self, World | Memory, World-model | Mechanism self-evolves | Collects data, no training | Data flywheel | Model | Robotics | No |
| 307 | [Agentic Context Engineering (ACE): Evolving Contexts for Long-Horizon Agents](https://arxiv.org/abs/2510.04618) | Agent-Self | Memory | Mechanism self-evolves | Collects data, no training | Data flywheel | Model | Software | No |
| 308 | [A-MEM: Agentic Memory for LLM Agents](https://arxiv.org/abs/2502.12110) | Agent-Self | Memory, Evolutionary | Mechanism self-evolves | Collects data, no training | Data flywheel | Model | General | No |
| 309 | [Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory](https://arxiv.org/abs/2504.19413) | Agent-Self | Memory | Mechanism self-evolves | Collects data, no training | Data flywheel | Model | General | No |
| 310 | [EvolveMem: Self-Evolving Memory Architecture](https://arxiv.org/abs/2605.13941) | Agent-Self | Closed-loop, Memory | Mechanism self-evolves | Collects data, no training | Verification feedback | Model | General | No |
| 311 | [MemSkill: Learning and Evolving Memory Skills for Self-Evolving LLM Agents](https://arxiv.org/abs/2602.02474) | Agent-Self | Skill-accrual, Memory | Mechanism self-evolves | Collects data, no training | Data flywheel | Model | General | No |
| 312 | [Meta-Harness: End-to-End Optimization of Model Harnesses](https://arxiv.org/abs/2603.28052) | Agent-Self | Closed-loop, Evolutionary | Mechanism self-evolves | Collects data, no training | Verification feedback | Symbolic | General | Yes |
| 313 | [MetaSkill-Evolve: Two-Timescale Skill and Meta-Skill Loops](https://arxiv.org/abs/2607.05297) | Agent-Self | Skill-accrual | Mechanism self-evolves | Collects data, no training | Data flywheel | Model | General | No |
| 314 | [STOP: Recursively Self-Improving Scaffolding](https://arxiv.org/abs/2310.02304) | Agent-Self | Closed-loop | Mechanism self-evolves | Collects data, no training | Verification feedback | Model | General | Yes |
| 315 | [Promptbreeder: Self-Referential Evolution of Prompts](https://arxiv.org/abs/2309.16797) | Agent-Self | Evolutionary | Mechanism self-evolves | Collects data, no training | Verification feedback | Simulation | General | Yes |
| 316 | [Gödel Agent: A Self-Referential Agent Framework for Recursive Self-Improvement](https://arxiv.org/abs/2410.04444) | Agent-Self | Evolutionary | Mechanism self-evolves | Collects data, no training | Verification feedback | Symbolic | General | Yes |
| 317 | [EvoPrompt: Connecting LLMs with Evolutionary Algorithms](https://arxiv.org/abs/2309.08532) | Agent-Self | Evolutionary | Mechanism self-evolves | Collects data, no training | Verification feedback | Model | General | No |
| 318 | [GEPA: Reflective Prompt Evolution Can Outperform Reinforcement Learning](https://arxiv.org/abs/2507.19457) | Agent-Self | Evolutionary | Mechanism self-evolves | Collects data, no training | Verification feedback | Model | General | No |
| 319 | [AgentSquare: Automatic LLM Agent Search in Modular Design Space](https://arxiv.org/abs/2410.06153) | Agent-Self | Evolutionary | Mechanism self-evolves | Collects data, no training | Data flywheel | Symbolic | General | No |
| 320 | [EvoAgent: Towards Automatic Multi-Agent Generation](https://arxiv.org/abs/2406.14228) | Agent-Self | Evolutionary | Mechanism self-evolves | Collects data, no training | Verification feedback | Simulation | General | No |
| 321 | [GPTSwarm: Language Agents as Optimizable Graphs](https://arxiv.org/abs/2402.16823) | Agent-Self | Evolutionary | Mechanism self-evolves | Collects data, no training | Verification feedback | Simulation | General | No |
| 322 | [AFlow: Automating Agentic Workflow Generation](https://arxiv.org/abs/2410.10762) | Agent-Self | Evolutionary | Mechanism self-evolves | Collects data, no training | Verification feedback | Symbolic | General | No |
| 323 | [Automated Design of Agentic Systems (ADAS / Meta Agent Search)](https://arxiv.org/abs/2408.08435) | Agent-Self | Evolutionary | Mechanism self-evolves | Collects data, no training | Verification feedback | Symbolic | General | No |
| 324 | [DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines](https://arxiv.org/abs/2310.03714) | Agent-Self | Closed-loop | Mechanism self-evolves | Collects data, no training | Verification feedback | Symbolic | General | No |
| 325 | [TextGrad: Automatic “Differentiation” via Text](https://arxiv.org/abs/2406.07496) | Agent-Self | Closed-loop | Mechanism self-evolves | Collects data, no training | Verification feedback | Model | General | No |
| 326 | [JiuwenSymbiosis（Physical AI 助手）](https://github.com/openJiuwen-ai/jiuwensymbiosis) | Agent-Self | Multi-agent | Frozen mechanism | Frozen at runtime | Evidence feedback | Model, Real-world | Robotics | No |
| 327 | [CarryOn: Building Object-Oriented Context for Long-Horizon Agents](https://arxiv.org/abs/2610.18784) | Agent-Self | Memory | Frozen mechanism | Collects data, no training | Verification feedback | Model | General | No |
| 328 | [Memorizing Who, Knowing How: Benchmarking Personal and Procedural Memory for Persistent Assistants](https://arxiv.org/abs/2610.20022) | Agent-Self | Memory | Frozen mechanism | Frozen at runtime | Verification feedback | Human | General | No |
| 329 | [AgentVerse: Dynamic Multi-Agent Collaboration with Emergent Team Composition](https://arxiv.org/abs/2308.10848) | Agent-Self | Multi-agent | Frozen mechanism | Collects data, no training | Verification feedback | Model | General | No |
| 330 | [Agent Lightning: Train ANY AI Agents with Reinforcement Learning](https://arxiv.org/abs/2508.03680) | Agent-Self | One-shot | Frozen mechanism | Frozen at runtime | Verification feedback | Symbolic | General | No |
| 331 | [Next-Generation Agentic Reinforcement Learning Systems](https://arxiv.org/abs/2607.01120) | Agent-Self | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | Model | General | No |
| 332 | [Deployed Reinforcement Learning should be Continual](https://arxiv.org/abs/2606.04029) | Agent-Self | One-shot | Frozen mechanism | Frozen at runtime | Verification feedback | Model | General | No |
| 333 | [LMAC: LLM-Guided Communication for Cooperative Multi-Agent RL](https://arxiv.org/abs/2605.18077) | Agent-Self | Multi-agent | Frozen mechanism | Frozen at runtime | Verification feedback | Model | General | No |
| 334 | [HarnessDev: Can LLMs Create and Evolve Their Own Agent Harness?](https://arxiv.org/abs/2609.01437) | Agent-Self | One-shot | Frozen mechanism | Frozen at runtime | Verification feedback | Symbolic | Software | No |
| 335 | [SwarmSys: Decentralized Swarm-Inspired Multi-Agent Reasoning](https://arxiv.org/abs/2510.10047) | Agent-Self | Multi-agent | Frozen mechanism | Collects data, no training | Verification feedback | Model | General | No |
| 336 | [Context Engineering: From Prompts to Corporate Multi-Agent Architecture](https://arxiv.org/abs/2603.09619) | Agent-Self | Memory | Frozen mechanism | Frozen at runtime | Evidence feedback | Model | General | No |
| 337 | [HIMM: Human-Inspired Long-Term Memory Modeling for Embodied Agents](https://arxiv.org/abs/2602.15513) | Agent-Self | Memory | Frozen mechanism | Collects data, no training | Data flywheel | Model | Robotics | No |
| 338 | [MemGPT: Towards LLMs as Operating Systems](https://arxiv.org/abs/2310.08560) | Agent-Self | Memory | Frozen mechanism | Frozen at runtime | Verification feedback | Model | General | No |
| 339 | [Scaling Self-Evolving Agents via Parametric Memory](https://arxiv.org/abs/2606.04536) | Agent-Self | Closed-loop, Memory | Frozen mechanism | Collects data, no training | Data flywheel | Model | General | No |
| 340 | [Sleep-time Compute: Beyond Inference Scaling at Test-time](https://arxiv.org/abs/2504.13171) | Agent-Self | Skill-accrual, Memory | Frozen mechanism | Collects data, no training | Verification feedback | Model | General | No |
| 341 | [Gödel Machine: Self-Referential Optimal Problem Solvers](https://arxiv.org/abs/cs/0309048) | Agent-Self | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | N/A | Math | No |
| 342 | [The Introspection Threshold for Recursive Self-Improvement](https://arxiv.org/abs/2607.04277) | Agent-Self | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | N/A | General | No |
| 343 | [Recursive Self-Improvement in AI: From Bounded Self-Refinement to Autonomous Research Loops](https://arxiv.org/abs/2607.07663) | Agent-Self | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | N/A | General | No |
| 344 | [A Dynamic LLM-Powered Agent Network for Task-Oriented Collaboration (DyLAN)](https://arxiv.org/abs/2310.02170) | Agent-Self | Multi-agent | Frozen mechanism | Frozen at runtime | Verification feedback | Model | General | No |
| 345 | [DiscoveryRSI: Recursively Learning to Discover Valuable Hypotheses](https://arxiv.org/abs/2610.23839) | Research | Closed-loop, Evolutionary | Recursive self-improvement | Collects data + trains | Data flywheel | Symbolic, Model | General | Yes |
| 346 | [AutoSFT: An Agentic System for Automated Data Research in Supervised Fine-Tuning](https://arxiv.org/abs/2610.22194) | Research | Closed-loop | Weight training | Collects data + trains | Data flywheel | Symbolic | NLP | No |
| 347 | [MLExpert: Towards a Generalist Agentic Model for Autonomous Machine Learning Engineering](https://arxiv.org/abs/2610.22344) | Research | Closed-loop | Weight training | Collects data + trains | Data flywheel | Symbolic | Software | No |
| 348 | [Training Reasoning Models to Generate Diverse Scientific Ideas](https://arxiv.org/abs/2610.22324) | Research | One-shot | Weight training | Collects data + trains | Verification feedback | Model, Human | General | No |
| 349 | [IdeaAnchor: Teaching LLMs to Turn Literature into Research Ideas](https://arxiv.org/abs/2610.08781) | Research | One-shot | Weight training | Collects data + trains | Verification feedback | Symbolic, Model | General | No |
| 350 | [IdeaScientist: Orchestrating Agents for Grounded Scientific Ideation](https://arxiv.org/abs/2610.04074) | Research | Multi-agent | Weight training | Collects data + trains | Verification feedback | Model | General | No |
| 351 | [From Self-Evolving Synthetic Data to Verifiable-Reward RL for Multi-Turn Tool-Using Agents](https://arxiv.org/abs/2601.22607) | Research, Agent-Self | Closed-loop, Evolutionary | Weight training | Collects data + trains | Data flywheel | Symbolic | General | No |
| 352 | [MatBrain: Collaborative Dual-Model Agent for Autonomous Crystal Materials Research](https://arxiv.org/abs/2604.11540) | Research, Design | Multi-agent | Weight training | Collects data + trains | Verification feedback | Symbolic | General | No |
| 353 | [SPIRAL: Self-Play on Zero-Sum Games Incentivizes Reasoning](https://arxiv.org/abs/2506.24119) | Research, Agent-Self | Evolutionary, Multi-agent | Weight training | Collects data + trains | Data flywheel | Symbolic | Math | No |
| 354 | [RefineCoder](https://arxiv.org/abs/2502.09183) | Research | Closed-loop | Weight training | Collects data + trains | No feedback | Symbolic | General | No |
| 355 | [DreamProver](https://arxiv.org/abs/2604.26311) | Research | Skill-accrual | Weight training | Collects data, no training | No feedback | Model | General | No |
| 356 | [EvoTune](https://claire-labo.github.io/EvoTune/) | Research | Evolutionary | Weight training | Collects data + trains | No feedback | Simulation | General | No |
| 357 | [Scaling Automatic Research Agents via World Models (WMRL)](https://arxiv.org/abs/2608.12564) | Research | World-model | Weight training | Collects data + trains | Verification feedback | Model | Software | No |
| 358 | [Sample Efficient Generative Molecular Optimization](https://arxiv.org/abs/2602.10984) | Research | Closed-loop | Adapts at runtime | Collects data, no training | Verification feedback | Model | Drug discovery | No |
| 359 | [Hypoloom（自主研究框架）](https://github.com/EIMP-Lab/Hypoloom) | Research | Closed-loop, Multi-agent | Mechanism self-evolves | Collects data, no training | Data flywheel | Symbolic | General | No |
| 360 | [Gan Jiang: A Self-Learning Scientific Agent for X-ray Diffraction](https://arxiv.org/abs/2610.07862) | Research | Closed-loop, Memory | Mechanism self-evolves | Collects data, no training | Data flywheel | Symbolic, Real-world | General | No |
| 361 | [DuoDiscover: Scaling Autonomous Discovery Beyond the Evaluation Bottleneck](https://arxiv.org/abs/2610.17184) | Research | Multi-agent, Closed-loop | Mechanism self-evolves | Collects data, no training | Verification feedback | Model | General | No |
| 362 | [Self-Building Labs](https://arxiv.org/abs/2610.23826) | Research, Design | Closed-loop | Mechanism self-evolves | Collects data, no training | Data flywheel | Real-world | General | Yes |
| 363 | [FrugalEvo: Towards Cost-Aware LLM-Guided Program Evolution](https://arxiv.org/abs/2610.03675) | Research | Evolutionary | Mechanism self-evolves | Collects data, no training | Verification feedback | Symbolic | Math | No |
| 364 | [Arbor: Toward Generalist Autonomous Research via Hypothesis-Tree Refinement](https://arxiv.org/abs/2606.11926) | Research | Multi-agent, Closed-loop, Memory | Mechanism self-evolves | Collects data, no training | Data flywheel | Symbolic | General | No |
| 365 | [Dream-RSI: Recursive Self-Improvement through Evolving Worlds](https://github.com/zhengkid/Dream-RSI) | Research, Agent-Self | World-model, Memory, Evolutionary | Mechanism self-evolves | Collects data, no training | Data flywheel | Symbolic | General | No |
| 366 | [MLEvolve: Progressive Graph Search with Retrospective Memory](https://arxiv.org/abs/2606.06473) | Research | Evolutionary | Mechanism self-evolves | Collects data, no training | Verification feedback | Simulation | General | No |
| 367 | [AlphaEvolve](https://arxiv.org/abs/2506.13131) | Research | Evolutionary | Mechanism self-evolves | Collects data, no training | No feedback | Symbolic | Software | No |
| 368 | [Large Language Models Extend Known Research But Do Not Create New Research Directions](https://arxiv.org/abs/2610.17439) | Research | One-shot | Frozen mechanism | Frozen at runtime | Verification feedback | Human | General | No |
| 369 | [Cogentic: Multi-Agent Orchestration for Automated Proof Discovery](https://arxiv.org/abs/2609.40324) | Research | Multi-agent | Frozen mechanism | Collects data, no training | Verification feedback | Symbolic | Math | No |
| 370 | [Fork-and-Flush: Escaping Idea Basins in Autoresearch Agents](https://arxiv.org/abs/2610.07447) | Research | Multi-agent, Memory | Frozen mechanism | Collects data, no training | Verification feedback | Symbolic | General | No |
| 371 | [Benchmark Radar: A Living Database and Search Engine for AI Benchmarks](https://arxiv.org/abs/2609.11115) | Research | One-shot | Frozen mechanism | Collects data, no training | Verification feedback | Symbolic | General | No |
| 372 | [OmniScientist: An Omni-Modal Omni-Discipline AI Scientist](https://arxiv.org/abs/2608.13558) | Research | Multi-agent | Frozen mechanism | Collects data, no training | Verification feedback | Real-world | General | No |
| 373 | [ExplorationBench: Measuring AI Systems Exploration in Verifiable Alien Worlds](https://arxiv.org/abs/2609.30199) | Research | One-shot | Frozen mechanism | Frozen at runtime | Verification feedback | Symbolic | General | No |
| 374 | [ScholarCatalyst: A Benchmark for Retrieving Papers That Inspire New Research](https://arxiv.org/abs/2610.02202) | Research | One-shot | Frozen mechanism | Frozen at runtime | Verification feedback | Human | General | No |
| 375 | [awesome-rubric-rewards（论文清单库）](https://github.com/chrisliu298/awesome-rubric-rewards) | Research | One-shot | Frozen mechanism | Frozen at runtime | Verification feedback | Symbolic | General | No |
| 376 | [RubricEval: A Rubric-Level Meta-Evaluation Benchmark for LLM Judges](https://arxiv.org/abs/2603.25133) | Research | One-shot | Frozen mechanism | Frozen at runtime | Verification feedback | Model | NLP | Yes |
| 377 | [AutoBencher: Towards Declarative Benchmark Construction](https://arxiv.org/abs/2407.08351) | Research | One-shot | Frozen mechanism | Frozen at runtime | Verification feedback | Symbolic, Model | General | No |
| 378 | [AI for Scientific Discovery is a Social Problem](https://www.cell.com/patterns/fulltext/S2666-3899(26)00006-1) | Research | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | Model | General | No |
| 379 | [Automating the Search for Artificial Life with Foundation Models](https://arxiv.org/abs/2412.17799) | Research, World | Evolutionary | Frozen mechanism | Collects data, no training | Verification feedback | Simulation | Minecraft | No |
| 380 | [Autonomous Agents for Scientific Discovery: Vision and Roadmap](https://arxiv.org/abs/2510.09901) | Research | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | Model | General | No |
| 381 | [Sparks: Multi-Agent AI Model Discovers Novel Scientific Ideas](https://arxiv.org/abs/2504.19017) | Research | Multi-agent, Evolutionary | Frozen mechanism | Collects data, no training | Verification feedback | Model | General | No |
| 382 | [Foundation Models for Scientific Discovery: From Paradigm Enhancement to Paradigm Transition](https://arxiv.org/abs/2510.15280) | Research | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | Model | General | No |
| 383 | [Discovery Foundation Models: Toward Open-Ended Discovery Intelligence](https://arxiv.org/abs/2609.15973) | Research | One-shot | Frozen mechanism | Frozen at runtime | Evidence feedback | Model | General | No |
| 384 | [Evolutionary Discovery of RL Algorithms via LLMs](https://arxiv.org/abs/2603.28416) | Research | Evolutionary | Frozen mechanism | Collects data, no training | Verification feedback | Simulation | General | No |
| 385 | [FT-Dojo: Fine-Tuning Pipeline as an Executable Environment](https://arxiv.org/abs/2603.01712) | Research | World-model | Frozen mechanism | Frozen at runtime | Verification feedback | Model | General | No |
| 386 | [AutoResearch: Insight In, Hallucination Out](https://arxiv.org/abs/2608.17906) | Research | Closed-loop, Multi-agent | Frozen mechanism | Collects data, no training | Verification feedback | Model | General | No |
| 387 | [CodeScientist: End-to-End Semi-Automated Scientific Discovery with Code-based Experimentation](https://arxiv.org/abs/2503.22708) | Research | Evolutionary, Closed-loop | Frozen mechanism | Collects data, no training | Verification feedback | Simulation | General | No |
| 388 | [Towards an AI Co-Scientist](https://arxiv.org/abs/2502.18864) | Research | Multi-agent, Evolutionary | Frozen mechanism | Collects data, no training | Verification feedback | Simulation | Drug discovery | No |
| 389 | [AI Scientist-v2](https://arxiv.org/abs/2504.08066) | Research | Multi-agent | Frozen mechanism | Frozen at runtime | No feedback | Model | General | No |
| 390 | [The AI Scientist](https://arxiv.org/abs/2408.06292) | Research | Multi-agent | Frozen mechanism | Frozen at runtime | Verification feedback | Model | General | No |
| 391 | [ChatDev](https://arxiv.org/abs/2307.07924) | Research | Multi-agent | Frozen mechanism | Frozen at runtime | No feedback | Model | General | No |
| 392 | [MetaGPT](https://arxiv.org/abs/2308.00352) | Research | Multi-agent | Frozen mechanism | Frozen at runtime | No feedback | Model | General | No |
| 393 | [Self-Collaboration Code Generation](https://arxiv.org/abs/2304.07590) | Research | Multi-agent | Frozen mechanism | Frozen at runtime | No feedback | Model | General | No |
| 394 | [Digital Red Queen](https://pub.sakana.ai/drq/) | Research | Evolutionary | Frozen mechanism | Collects data, no training | No feedback | Simulation | General | No |
| 395 | [FunSearch](https://www.nature.com/articles/s41586-023-06924-6) | Research | Evolutionary | Frozen mechanism | Collects data, no training | No feedback | Symbolic | Math | No |
| 396 | [Learning to Evaluate Before Improving (AutoSciRub)](https://arxiv.org/abs/2608.31076) | Research | Closed-loop | Frozen mechanism | Collects data, no training | Verification feedback | Symbolic | Software | No |
<!-- PAPER-INDEX:END -->

## Repository Structure

```
awesome-code-as-agent/
├── README.md                       # You are here
├── README_CN.md                    # 中文版
├── code-as-policy-cube.html        # 3D interactive cube
├── code-as-policy-spectrum.html    # 2D matrix (legacy)
├── data/
│   ├── papers.json                 # 428 papers, 8-dim tags
│   ├── pwc-enrichment.json         # PwC citations/repos/datasets cache
│   └── candidates.json             # Auto-discovered candidate papers
├── tools/
│   ├── gen_paper_table.js      # Regenerate README paper tables
│   └── pwc_sync.js             # Weekly Papers-with-Code enrichment sync
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
