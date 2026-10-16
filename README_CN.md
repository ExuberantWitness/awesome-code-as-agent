# Awesome Code as Agent

**中文版** | **[English](README.md)**

> 一张可导航的 3D 知识地图，收录 **369 篇论文**——LLM agent 如何用可执行代码感知、行动、学习和自我改进。覆盖 **10 个场景 × 7 个方向 × 5 层更新能力 × 4 象限运行时行为**。

**不只是读列表——导航整个空间。**

## 🧊 预览

| 3D 知识立方体 | 论文数据库 |
|:-:|:-:|
| ![3D 立方体](screenshots/cube-overview.png) | ![数据库](screenshots/database-view.png) |
| 拖拽 · 缩放 · 点击立方体 | 搜索 · 过滤 · 8 维 tag |

## 快速开始

**第 1 步** — 克隆本仓库：

```bash
git clone https://github.com/ExuberantWitness/awesome-code-as-agent.git
cd awesome-code-as-agent
```

**第 2 步** — 在浏览器中打开 3D 立方体：

```bash
# macOS / Linux
open code-as-policy-cube.html

# Windows
start code-as-policy-cube.html

# 或者直接在文件管理器中双击该文件
```

> ⚠️ 需要联网（Three.js 从 CDN 加载）

**第 3 步** — 开始探索：

1. **拖拽旋转** 3D 晶格，滚轮缩放
2. **点击任何立方体** 查看该格论文，按运行时象限分组显示
3. **点击弹窗中的论文标题** → 跳转到数据库条目（含完整 tag）
4. **按更新层级过滤**（L0-L4），或切换到数据库视图做多维搜索
5. **发现研究空白** — 标注"暂无论文"的格子就是选题机会

## 四维分类体系

### X 轴：场景——agent 写什么？

| 场景 | 描述 | 篇数 |
|------|------|------|
| 🎯 策略 Policy | 代码即机器人/控制策略 | 24 |
| 🖱️ 动作 Action | 代码即统一动作空间（GUI/OS） | 26 |
| 🏆 奖励 Reward | 代码即奖励函数或训练管线 | 19 |
| 🔧 技能 Skill | 代码即可复用技能/库单元 | 16 |
| 🛡️ 约束 Constraint | 代码即可执行安全约束/监控 | 18 |
| 🌍 世界 World | 代码即世界模型/可执行世界表示 | 33 |
| 📐 设计 Design | 代码即设计产物（CAD/本体/法规） | 27 |
| 🧠 推理 Reasoning | 代码即推理介质 | 22 |
| 🤖 Agent 自身 | 代码即 agent 自己的架构/工作流 | 25 |
| 🔬 科研 Research | 代码即科研流程本身 | 26 |

### Z 轴：研究方向——agent 怎么写？

| 方向 | 哲学 |
|------|------|
| 单次生成 | 一次生成即交付，无迭代 |
| 闭环调整 | 生成→执行→诊断→修订 |
| 进化搜索 | 种群+并行评估+选择变异 |
| 技能沉淀 | "把一次性成功变成可检索的资产" |
| 多智能体 | 角色分工与协作 |
| 世界模型 | 反馈经由世界模型而非直接交互 |
| 记忆上下文 | 经验表示的管理本身在被改进 |

### Y 轴：更新能力——改进落在哪？

| 层级 | 名称 | 描述 |
|------|------|------|
| L0 | 机制冻结 | LLM 冻结，无自我改进 |
| L1 | 可自进化 | 改 prompt/流程/技能库，不动权重 |
| L2 | 适应性输出 | 推理时轻量适应，不留权重 |
| L3 | 权重调整 | 正式权重更新（LoRA 或整体 SFT/RL） |
| L4 | RSI | 自我更新且有加速趋势 |

### 时间象限——运行时行为（2 比特）

| | 训练 ✓ | 训练 ✗ |
|---|---|---|
| **采集 ✓** | 🔴 A：在线学习（52 篇） | 🟡 B：经验积累（128 篇） |
| **采集 ✗** | 🔵 C：输入流适应（6 篇） | ⚪ D：冻结（95 篇） |

## 附加 tag

- **反馈栈**：★ 证据构建 → ★★ 闭环验证 → ★★★ 资产飞轮
- **反馈 oracle 类型**：⚙ 符号 / 🖥 仿真 / 🧠 模型 / 🦾 真实物理 / 👤 人类
- **垂直域**：14 个（机器人/软件/数学/芯片/CAD/前端/本体/法规/建筑/药物…）
- **自指闭合**：🪞 改进对象是否包含改进者自身？

## 关键发现

1. **沙漏形分布**——L0（冻结）和 L3（权重训练）挤满，L1/L2（轻量可逆）是断层
2. **世界模型的五种角色**——oracle / 训练场 / 过滤器 / 想象空间 / 内在动机源
3. **代码空间 vs 潜空间**——两种平行的世界模型方法论（CWM 写可执行 Python；PAN 在 JEPA 潜空间预测）
4. **RSI 垂直梯子**——数学（STP→AZR）、软件（SICA→Frontis-MA1→DGM）、药物（分子自改进）
5. **记忆方向正在爆发**——从 MemGPT 到 Memory-R1（RL 训练记忆操作），再到自编程记忆（MemCodex）与可学习 CRUD 策略（AtomMem）
6. **Harness-RSI 集群成型**（L4 × 自我）——此前 DGM 独守此格，现在 SoL-Pi（NVIDIA，自动研究循环递归优化 agent harness 本身，3.4k 星）、RRSI（首次系统诊断 harness-RSI 过拟合）、RSI-Anything 加入
7. **「世界模型 × L4」空白格已被填上**——RSI-Anything 用 JEPA 预测性世界模型同时指导动作选择与学习数据选择，把此前分离的两个聚类连接起来
8. **自动定义 rubric**——验证器库的第二条自动填充路径：不是记忆验证经验，而是合成结构化标准（RaR、Rubric-ARM 的生成器/判官共演化、RM-R1），并收敛到可执行 rubric——奖励代码线（Text2Reward/Eureka）的自然语言孪生

## 更新日志

- **2026-10-16 ——新增 26 篇（共 369 篇）**
  - **权重×harness 桥接**——[Evo²](https://arxiv.org/abs/2610.13025) 用双角色 Proposer/Reflector 协同进化模型权重与 agent harness，连「进化器本身被进化」（L4）；进化出的 harness 无需继续进化即可跨基准迁移
  - 🎯 **填上最后一块前沿空白格：世界模型 × L4**——[RSI-Anything](https://arxiv.org/abs/2610.13912)（JEPA-Anything 底座）让预测性世界模型同时选择动作与学习数据，保留更新需过兼容性检查
  - **Harness-RSI 集群成型**——[SoL-Pi](https://arxiv.org/abs/2609.20519)（NVIDIA，3.4k 星：自动研究循环递归优化 agent 自己的 harness）+ [RRSI](https://arxiv.org/abs/2609.24972)（对 harness 过拟合加正则——DGM 路线缺的机器学习 101 一课）
  - **记忆自进化加厚**——MemCodex（记忆程序开放式进化）、AtomMem（RL 训 CRUD 策略）、RSI Agent（免训练三 agent 探索）
  - **自主研究病理学**——Fork-and-Flush 的「想法盆地」（重复运行被困解空间局部区域）与 Arbor 的假设树解法
- **2026-10-15 ——新增 12 篇（共 343 篇）**
  - **自动 rubric 线入库**（RaR、Rubric-ARM、RM-R1、Self-Taught Evaluators、AutoBencher 等）——验证器库的第二条自动填充路径
  - **PRSI 纲领论文**——物理递归自我改进（P1–P5 因果位置），DFM 终点的物理世界镜像

## 论文索引（369 篇）

<!-- PAPER-INDEX:START -->
<!-- 论文索引（由 tools/gen_paper_table.js 生成，勿手改） -->
共 **369 篇**，按主场景分组，组内按更新能力层级降序（同层最新在前）。

标签列格式：场景 · 方向 · 层级 · 反馈栈 · 时间象限 · oracle（🪞=自指闭环）

- **策略**（44 篇）
- **动作**（37 篇）
- **奖励**（31 篇）
- **技能**（18 篇）
- **约束**（22 篇）
- **世界**（33 篇）
- **设计**（31 篇）
- **推理**（35 篇）
- **自我**（71 篇）
- **研究**（47 篇）


### 策略（44 篇）

| # | 论文 | 标签 | 来源 |
|---|---|---|---|
| 1 | [Puro-2B: Poor Lab Qwen2-1.5B Trained on RTX 5090 within $5090](https://arxiv.org/abs/2608.27370) | Policy · oneshot · L3 · ★ · A · sym | 2026-08 |
| 2 | [CLIFT: Turning Gemini Robotics On-Device into Humanoid Specialists via Non-Invasive Closed-Loop Iterative Fine-Tuning](https://arxiv.org/abs/2607.29172) | Policy · loop · L3 · ★★ · A · real | 2026-07 |
| 3 | [Sirius: Human-in-the-Loop Autonomy and Learning During Deployment](https://arxiv.org/abs/2211.08416) | Policy · loop · L3 · ★★★ · A · real/human | UT Austin RPL · RSS 2023 |
| 4 | [Learning While Deploying (LWD): Fleet-Scale Offline-to-Online RL for Generalist Robots](https://arxiv.org/abs/2605.00416) | Policy · loop,multi · L3 · ★★★ · A · real | 2026 |
| 5 | [OHP-RL: Online Human Preference Reinforcement Learning for Real-World Manipulation](https://arxiv.org/abs/2605.15971) | Policy+Reward · loop · L3 · ★★★ · A · real/human | 2026 |
| 6 | [LifeLong-RFT: Continual Learning VLA Models via Reinforcement Fine-Tuning](https://arxiv.org/abs/2602.10503) | Policy · loop,mem · L3 · ★★★ · A · real | 2026 |
| 7 | [Self-Adapting Robotic Agents through Online Continual Reinforcement Learning](https://arxiv.org/abs/2603.04029) | Policy · loop,mem · L3 · ★★★ · A · real | 2026 |
| 8 | [What Matters for Simulation-to-Online Reinforcement Learning](https://arxiv.org/abs/2602.20220) | Policy · oneshot · L3 · ★★ · A · real | 2026 |
| 9 | [RL-100: Performant Robotic Manipulation with Real-World RL](https://arxiv.org/abs/2510.14830) | Policy · loop · L3 · ★★★ · A · real | 2025 |
| 10 | [Long-Horizon Planning in World Models with Latent Planners](https://arxiv.org/abs/2606.09311) | Policy · wm · L3 · ★★ · A · sim | 2026 |
| 11 | [Sparse Imagination: Efficient Visual World Model Planning](https://arxiv.org/abs/2506.01392) | Policy · wm · L3 · ★★ · A · sim | 2025 |
| 12 | [Dream to Manipulate: Compositional World Models Empowering Robot Imitation Learning](https://dreamtomanipulate.github.io/) | Policy+World · wm · L3 · ★★★ · A · sim/real | 2026 · 56+ 引用 |
| 13 | [AOR: Act-Observe-Rewrite for Robot Manipulation Policy Improvement](https://arxiv.org/abs/2603.04466) | Policy · loop · L3 · ★★★ · A · real/sim | 2026 |
| 14 | [Dreamer 4: Training Agents Inside of Scalable World Models](https://arxiv.org/abs/2509.24527) | Policy · wm · L3 · ★★ · A · model | Hafner · 2025 |
| 15 | [MuZero: Mastering Atari, Go, Chess and Shogi by Planning with a Learned Model](https://arxiv.org/abs/1911.08265) | Policy · wm · L3 · ★★ · A · sim | DeepMind · Nature 2020 · 4100+ 引用 |
| 16 | [DreamerV3: Mastering Diverse Domains through World Models](https://arxiv.org/abs/2301.04104) | Policy · wm · L3 · ★★ · A · sim | Hafner · Nature 2025 版 |
| 17 | [Robot-Powered Data Flywheel (RPDF)](https://arxiv.org/abs/2511.19647) | Policy · loop · L3 · ★★★ · A · real/model | 2025 |
| 18 | [DexFlyWheel](https://arxiv.org/abs/2509.23829) | Policy · loop · L3 · ★★★ · A · real/model | NeurIPS 2025 |
| 19 | [VERITAS](https://arxiv.org/abs/2606.18247) | Policy · loop · L3 · ★★★ · B · model/real | 2026 |
| 20 | [CodeDiffuser](https://www.roboticsproceedings.org/rss21/p072.pdf) | Policy · oneshot · L3 · ★ · D · na | RSS 2025 |
| 21 | [RoboPro (Robotic Programmer)](https://arxiv.org/abs/2501.04268) | Policy · oneshot · L3 · ★★ · D · model/human | arXiv 2501.04268 · 2025 |
| 22 | [TT-VLA: On-the-Fly VLA Adaptation via Test-Time Reinforcement Learning](https://arxiv.org/abs/2601.06748) | Policy · loop,wm · L2 · ★★★ · A · real | 2026 |
| 23 | [Dejavu: Post-Deployment Learning for Embodied Agents via Experience Feedback Network](https://arxiv.org/abs/2510.10181) | Policy · loop,mem · L2 · ★★★ · A · real | 2025 |
| 24 | [AdaWorldPolicy: World-Model-Driven Diffusion Policy with Test-Time Adaptation](https://arxiv.org/abs/2602.20057) | Policy · wm · L2 · ★★ · C · model | 2026 |
| 25 | [Episodic Memory for Long-Horizon Robotic Manipulation](https://openreview.net/pdf?id=BBgDA4y0B9) | Policy · mem · L1 · ★★★ · B · real | OpenReview · 2026 |
| 26 | [MemoAct: Memory-Augmented Robotic Policies](https://tlf-tlf.github.io/MemoActPage/) | Policy · mem · L1 · ★★★ · B · real/model | 2026 |
| 27 | [RoboPara](https://proceedings.iclr.cc/paper_files/paper/2026/file/e8aa3f5e8b5f24b830f31fd828e2a2a3-Paper-Conference.pdf) | Policy · skill · L1 · ★★★ · B · model | ICLR 2026 |
| 28 | [ASPIRE: Agentic Skills Discovery for Robotics](https://arxiv.org/abs/2607.00272) | Policy · skill,loop · L1 · ★★★ · B · real/sim | NVIDIA+CMU+Berkeley 等 · 2026 |
| 29 | [EpiMem: Episodic Memory Indexing for Pretrained Manipulation Policies](https://arxiv.org/abs/2603.24576) | Policy · mem · L0 · ★★★ · B · real | 2026 |
| 30 | [RISE (Embodied): Compositional World Model Imagined Rollouts for Robot Policy](https://arxiv.org/abs/2602.11075) | Policy · wm · L0 · ★★ · A · sim | 2026 |
| 31 | [Large Language Models as Commonsense Knowledge for Large-Scale Task Planning (LLM-MCTS)](https://arxiv.org/abs/2305.14078) | Policy · wm · L0 · ★★ · D · model | 2023 · 537+ 引用 |
| 32 | [GenSwarm](https://www.nature.com/articles/s44182-025-00065-w) | Policy · multi · L0 · ★ · D · real | npj Robotics 2025 · 西湖大学 |
| 33 | [Genesys](https://dl.acm.org/doi/10.1145/3776736) | Policy · evo · L0 · — · B · sim | ACM TOSEM 2025 |
| 34 | [Code Evolution for Control](https://arxiv.org/abs/2601.06845) | Policy · evo · L0 · ★★ · B · sim | arXiv 2601.06845 · 2026 |
| 35 | [Evolution through Large Models (ELM)](https://arxiv.org/abs/2206.08896) | Policy · evo · L0 · ★★ · B · sim | OpenAI · 2022 |
| 36 | [OmniManip](https://arxiv.org/abs/2501.03841) | Policy · loop · L0 · ★★ · B · model/sim | CVPR 2025 |
| 37 | [Contact-Rich Adaptive LLM-based Control (CoRAL)](https://arxiv.org/abs/2605.02600) | Policy · loop · L0 · ★★ · B · real/sim | RSS 2026 |
| 38 | [RoboInspector](https://arxiv.org/abs/2508.21378) | Policy · loop · L0 · ★★ · B · sim | arXiv 2508.21378 · 2025 |
| 39 | [RoboCodeX](https://arxiv.org/abs/2402.16117) | Policy · oneshot · L0 · — · D · na | ICML 2024 · 上交等 |
| 40 | [ChatGPT for Robotics](https://arxiv.org/abs/2306.17582) | Policy · oneshot · L0 · — · D · na | IEEE Access 2024 · Microsoft |
| 41 | [Robot Policy Code for High-Precision Tasks](https://scholar.google.com/scholar?q=%22Generating+Robot+Policy+Code%22+dexterous) | Policy · oneshot · L0 · — · D · na | Burns et al. |
| 42 | [VoxPoser](https://arxiv.org/abs/2307.05973) | Policy · oneshot · L0 · ★ · D · na | CoRL 2023 · Stanford |
| 43 | [ProgPrompt](https://arxiv.org/abs/2209.11302) | Policy · oneshot · L0 · ★ · D · na | ICRA 2023 · NVIDIA |
| 44 | [Code as Policies](https://arxiv.org/abs/2209.07753) | Policy · oneshot · L0 · ★ · D · na | ICRA 2023 · Google · 3300+ 引用 |

### 动作（37 篇）

| # | 论文 | 标签 | 来源 |
|---|---|---|---|
| 45 | [CoRe: Collaborative Reinforcement Learning for Multi-Agent Code Generation](https://arxiv.org/abs/2605.24812) | Action · multi,loop · L3 · ★★★ · A · sym | 2026 |
| 46 | [RLUF: Reinforcement Learning from User Feedback](https://arxiv.org/abs/2505.14946) | Action+Reward · loop · L3 · ★★★ · A · human | 2025 |
| 47 | [WebRL: Training LLM Web Agents via Self-Evolving Online Curriculum Reinforcement Learning](https://arxiv.org/abs/2411.02337) | Action · loop,evo · L3 · ★★★ · A · sym | ICLR 2025 · 111+ 引用 |
| 48 | [Tool-R0: Self-Evolving LLM Agents for Tool-Learning from Zero Data](https://arxiv.org/abs/2602.21320) | Action · evo,loop · L3 · ★★★ · A · sym | 2026 |
| 49 | [UI-TARS: Pioneering Automated GUI Interaction with Native Agents](https://arxiv.org/abs/2501.12326) | Action · oneshot · L3 · ★★ · D · na | ByteDance · 2025 · UI-TARS-2 技术报告 2509.02544 |
| 50 | [SWEET-RL: Training Multi-Turn LLM Agents on Collaborative Tasks](https://arxiv.org/abs/2503.15478) | Action · multi · L3 · ★★ · A · model | Meta · 2025 |
| 51 | [Socratic-SWE: Self-Evolving Coding Agents via Trace-Driven Evolution](https://arxiv.org/abs/2606.07412) | Action · loop · L3 · ★★★ · B · sym | 2026 |
| 52 | [Reinforcement World Model Learning (RWML)](https://arxiv.org/abs/2602.05842) | Action · wm · L3 · — · A · model | 2026 |
| 53 | [Web Agents with World Models (WMA)](https://openreview.net/forum?id=moWiYJuSGF) | Action · wm · L3 · — · A · sim | 2024 · 137+ 引用 |
| 54 | [ToolGen: Unified Tool Retrieval and Calling via Generation（近邻）](https://openreview.net/forum?id=XLMAMmowdY) | Action · oneshot · L3 · — · D · na | 2024/2025 |
| 55 | [AgentTuning: Enabling Generalized Agent Abilities for LLMs](https://arxiv.org/abs/2310.12823) | Action · loop · L3 · ★★ · D · sym | ACL 2024 Findings · THUDM · 397+ 引用 |
| 56 | [OpenHands CodeAct 2.1](https://www.openhands.dev/blog/openhands-codeact-21-an-open-state-of-the-art-software-development-agent) | Action · loop · L3 · — · D · model | 2025 · 产品级 |
| 57 | [CodeActInstruct → CodeActAgent](https://huggingface.co/xingyaoww/CodeActAgent-Mistral-7b-v0.1) | Action · loop · L3 · ★★★ · D · sym | ICML 2024 附带 |
| 58 | [TT-SI: Self-Improving LLM Agents with Test-Time Training](https://aclanthology.org/2026.findings-acl.462.pdf) | Action · loop · L2 · ★★ · A · model | ACL 2026 Findings |
| 59 | [Grounded Test-Time Adaptation for LLM Agents](https://arxiv.org/abs/2511.04847) | Action · loop · L2 · ★★ · A · sym | 2025 · 11+ 引用 |
| 60 | [aTTT: Agentic Test-Time Training for LLM Agents](https://arxiv.org/abs/2607.03441) | Action · loop · L2 · ★★ · A · sym | 2026 |
| 61 | [Scaling Agent Productivity with Automated Tool Generation](https://arxiv.org/abs/2512.24615) | Action · skill · L1 · ★★★ · B · sym | 2025 |
| 62 | [H-EPM: Experience-Evolving Multi-Turn Tool-Use Agent with Hybrid Episodic-Procedural Memory](https://arxiv.org/abs/2512.07287) | Action · mem · L1 · ★★★ · B · sym | 2025 |
| 63 | [WebXSkill: Skill Learning for Autonomous Web Agents](https://arxiv.org/abs/2604.13318) | Action · skill · L1 · ★★★ · B · sym | 2026 |
| 64 | [Runtime Harness Adaptation for Deterministic LLM Agents](https://arxiv.org/abs/2605.22166) | Action · loop · L1 · ★★ · B · sym | 2026 |
| 65 | [PILOT in the Loop: Live Self-Improvement for Long-Horizon Agents](https://arxiv.org/abs/2608.26530) | Action · loop,skill · L1 · ★★★ · B · sym/real | AllSpark · 2026 |
| 66 | [ExpeL: LLM Agents Are Experiential Learners](https://arxiv.org/abs/2308.10144) | Action · skill,mem · L1 · ★★★ · B · model | AAAI 2024 |
| 67 | [SICA: A Self-Improving Coding Agent](https://arxiv.org/abs/2504.15228) | Action · loop · L1 · ★★ · B · sym 🪞 | Bristol/Cambridge · 2025 · 74+ 引用 |
| 68 | [Live-SWE-agent: Can Software Engineering Agents Self-Evolve on the Fly?](https://arxiv.org/abs/2511.13646) | Action · loop · L1 · ★★ · B · sym | 2025 · 85+ 引用 |
| 69 | [LATM (LLMs as Tool Makers)](https://openreview.net/forum?id=qV83K9d5WB) | Action · skill · L1 · ★★ · B · model | ICLR 2024 · 380+ 引用 |
| 70 | [CRAFT: Customizing LLMs by Creating and Retrieving Specialized Tools](https://arxiv.org/abs/2309.17428) | Action · skill · L1 · ★★★ · D · model | ICLR 2024 · 157+ 引用 |
| 71 | [DynaSaur](https://arxiv.org/abs/2411.01747) | Action · skill · L1 · ★★★ · B · model | Adobe · COLM 2025 |
| 72 | [SkillWeaver: Web Agents can Self-Improve by Discovering and Honing Skills](https://arxiv.org/abs/2504.07079) | Action · skill · L1 · ★★★ · B · model | OSU · 2025 · 110+ 引用 |
| 73 | [Agent Workflow Memory (AWM)](https://arxiv.org/abs/2409.07429) | Action · skill,mem · L1 · ★★★ · B · model | WWW 2025 · CMU · 500+ 引用 |
| 74 | [SWE-bench Science: Can Coding Agents Resolve Engineering Tasks in Science?](https://arxiv.org/abs/2608.19799) | Action+Research · oneshot · L0 · ★★ · D · sym | 2026-08 |
| 75 | [World-Model-Augmented Web Agents with Action Correction](https://arxiv.org/abs/2602.15384) | Action · wm · L0 · ★★ · B · model | 2026 |
| 76 | [CREATOR: Tool Creation for Disentangling Abstraction and Reasoning](https://arxiv.org/abs/2305.14318) | Action · skill · L0 · ★★ · D · sym | ICLR 2024 · 根作 |
| 77 | [Is Your LLM Secretly a World Model of the Internet? (WebDreamer)](https://arxiv.org/abs/2411.06559) | Action · wm · L0 · ★★ · B · model | OSU · 2024 · 136+ 引用 |
| 78 | [LATS（近邻）](https://arxiv.org/abs/2310.04406) | Action · evo · L0 · ★★ · B · sim | ICML 2024 · 720+ 引用 |
| 79 | [CoAct-1: Computer-Using Agents with Coding as Actions](https://arxiv.org/abs/2508.03923) | Action · loop,multi · L0 · ★★ · B · sym | Salesforce · 2025 |
| 80 | [CodeAct: Executable Code Actions Elicit Better LLM Agents](https://arxiv.org/abs/2402.01030) | Action · loop · L0 · ★★ · B · sym | ICML 2024 · UIUC |
| 81 | [Agent S3 / OSWorld-ACI](https://github.com/simular-ai/agent-s) | Action · oneshot · L0 · — · D · sym | Simular AI |

### 奖励（31 篇）

| # | 论文 | 标签 | 来源 |
|---|---|---|---|
| 82 | [Self-Taught Evaluators](https://arxiv.org/abs/2408.02666) | Reward · loop · L3 · ★★ · A · model 🪞 | Meta AI · Wang et al. · 2024-08 |
| 83 | [RM-R1: Reward Modeling as Reasoning](https://arxiv.org/abs/2505.02387) | Reward · loop · L3 · ★★ · A · model | 2025-05 |
| 84 | [Rubric-ARM: Alternating RL for Rubric-Based Reward Modeling](https://arxiv.org/abs/2602.01511) | Reward · loop,multi · L3 · ★★ · A · model 🪞 | Emory · Xu et al. · 2026-02 |
| 85 | [Weaver: Shrinking the Generation-Verification Gap with Weak Verifiers](https://arxiv.org/abs/2506.18203) | Reward · oneshot · L3 · ★★★ · A · model | Stanford/Hazy · 2025 |
| 86 | [From Curiosity to Competence: How World Models Interact with the Dynamics of Exploration](https://arxiv.org/abs/2507.08210) | Reward+Policy · wm · L3 · ★★ · A · sim | MPI · Charley Wu 组 · 2025 |
| 87 | [Large Reward Models: Generalizable Online Robot Reward Models](https://arxiv.org/abs/2603.16065) | Reward · loop · L3 · ★★★ · A · real/human | 2026 |
| 88 | [DERL: Differentiable Evolutionary Discovery of Optimal Reward Structures](https://arxiv.org/abs/2512.13399) | Reward · evo · L3 · ★★★ · A · sim | 2025 |
| 89 | [Self-Rewarding Language Models](https://arxiv.org/abs/2401.10020) | Reward · loop · L3 · ★★★ · A · model | Meta · ICLR 2024 |
| 90 | [SER: Self-Evolved Reward Learning for LLMs](https://arxiv.org/abs/2411.00418) | Reward · loop · L3 · ★★★ · A · model | 2024 |
| 91 | [RM-Distiller（近邻）](https://arxiv.org/abs/2601.14032) | Reward · oneshot · L3 · — · D · na | 2026 |
| 92 | [Generating and Refining Dynamic Evaluation Rubrics for LLM-as-a-Judge](https://arxiv.org/abs/2605.30568) | Reward · loop · L2 · ★★ · B · model | U Arizona · Wang & Blanco · 2026-05 |
| 93 | [Inference-Time Reward Hacking in Large Language Models](https://arxiv.org/abs/2508.08884) | Reward · oneshot · L2 · ★★ · D · model | NeurIPS 2025 |
| 94 | [TDRM: Smooth Reward Models with Temporal Difference for LLM Reasoning](https://openreview.net/forum?id=j2oWVgTFNX) | Reward · wm,loop · L1 · ★★ · D · model | OpenReview · 2025 |
| 95 | [ENPIRE: Agentic Robot Policy Self-Improvement in the Real World](https://arxiv.org/abs/2606.19980) | Reward · multi,loop · L1 · ★★★ · B · real | 2026 · Berkeley/NVIDIA 等 17 人 |
| 96 | [OpenRubrics: Scalable Synthetic Rubric Generation for Reward Modeling](https://arxiv.org/abs/2510.07743) | Reward · evo · L0 · ★★ · D · model/human | 2025-10 |
| 97 | [Autorubric: A Unifying Framework for Rubric-Based LLM Evaluation on Non-Verifiable Tasks](https://arxiv.org/abs/2603.00077) | Reward · oneshot · L0 · ★★ · D · model | 2026-03 |
| 98 | [AutoRubric: Rubric-Based Generative Rewards for Faithful Multimodal Reasoning](https://arxiv.org/abs/2510.14738) | Reward · oneshot · L0 · ★★ · D · model | 2025-10 · ACL 2026 |
| 99 | [Rubrics as Rewards: Reinforcement Learning Beyond Verifiable Domains](https://arxiv.org/abs/2507.17746) | Reward · oneshot · L0 · ★★ · D · model | Scale AI · Gunjal et al. · 2025-07 |
| 100 | [Reward Model Overoptimisation in Iterated RLHF](https://arxiv.org/abs/2505.18126) | Reward · oneshot · L0 · ★★ · D · model | NeurIPS 2025 |
| 101 | [FORGE: A Multi-Agent LLM Framework for Reward Design](https://openreview.net/forum?id=Z6GStCfccl) | Reward · multi,evo · L0 · ★★ · B · sim | OpenReview · 2025 |
| 102 | [LaRes: Evolutionary Reinforcement Learning with LLM-based Adaptive Reward Search](https://papers.nips.cc/paper_files/paper/2025/hash/21b5d3a17aa5525f30bfd2bc59ac3a48-Abstract-Conference.html) | Reward · evo · L0 · ★★ · A · sim | NeurIPS 2025 · 8+ 引用 |
| 103 | [Reward Modeling for Reinforcement Learning-Based LLM Reasoning: A Survey](https://arxiv.org/abs/2602.09305) | Reward · oneshot · L0 · ★ · D · na | 2026 · 综述 |
| 104 | [SENSEI: Semantic Exploration Guided by Foundation Models](https://arxiv.org/abs/2503.01584) | Reward · wm · L0 · ★★★ · A · model | MPI · ICML 2025 · Sancaktar/Martius 等 |
| 105 | [REvolve: Reward Evolution with Large Language Models](https://arxiv.org/abs/2406.01309) | Reward · evo · L0 · ★★ · B · sim | NVIDIA · 2024 |
| 106 | [PCGRLLM](https://arxiv.org/abs/2502.10906) | Reward · evo · L0 · — · B · sim | 2025 |
| 107 | [MoRE](https://imt-atlantique.hal.science/hal-05450173/document) | Reward · evo · L0 · ★★ · B · sim | 2025 |
| 108 | [DrEureka](https://arxiv.org/abs/2406.01967) | Reward · evo · L0 · ★★ · B · sim | 2024 · UPenn/NVIDIA |
| 109 | [Eureka](https://arxiv.org/abs/2310.12931) | Reward · evo · L0 · ★★ · B · sim | NVIDIA · ICLR 2024 |
| 110 | [CARD: A Large Language Model-Driven Reward Design Framework](https://arxiv.org/abs/2410.14660) | Reward · loop · L0 · ★★ · B · model | 2024 |
| 111 | [Reward Design with Language Models (L2R)（近邻）](https://arxiv.org/abs/2303.00001) | Reward · oneshot · L0 · — · D · na | ICML 2023 · 511+ 引用 |
| 112 | [Text2Reward（初版）](https://arxiv.org/abs/2309.11489) | Reward · oneshot · L0 · — · D · sim/human | ICLR 2024 |

### 技能（18 篇）

| # | 论文 | 标签 | 来源 |
|---|---|---|---|
| 113 | [Emergent Tool Use From Multi-Agent Autocurricula](https://arxiv.org/abs/1909.07528) | Skill · multi,evo · L3 · ★★★ · A · sim | OpenAI · 2019 · 3000+ 引用 |
| 114 | [SAGE: Skill Augmented GRPO for Self-Evolution](https://arxiv.org/abs/2512.17102) | Skill · loop · L3 · ★★★ · A · sym | 2025 · 100+ 引用 |
| 115 | [DADS: Dynamics-Aware Unsupervised Discovery of Skills](https://arxiv.org/abs/1907.01657) | Skill · wm · L3 · ★★ · A · model | ICLR 2020 · 史前根 |
| 116 | [LUCID: Latent-Skill Unified Control via Imagined Dynamics](https://arxiv.org/abs/2608.07746) | Skill · wm · L3 · ★★ · A · sim | 2026 |
| 117 | [Odyssey](https://openreview.net/forum?id=vtGLtSxtqv) | Skill · skill · L3 · — · B · model | 2023/2024 |
| 118 | [JARVIS-1](https://arxiv.org/search/?searchtype=all&query=JARVIS-1+open-world+multi-task+agents+memory-augmented) | Skill · skill · L3 · — · B · model | 2023 · OpenDILAB |
| 119 | [DreamCoder](https://arxiv.org/abs/2006.08381) | Skill · skill · L3 · ★★★ · A · model | PLDI 2021 · 386+ 引用 |
| 120 | [SkillFoundry: Building Self-Evolving Agent Skill Libraries](https://arxiv.org/abs/2604.03964) | Skill · skill · L1 · ★★★ · B · model | 2026 |
| 121 | [SkillAxe: Sharpening LLM-Authored Agent Skills Through Execution Feedback](https://arxiv.org/abs/2606.10546) | Skill · loop · L1 · ★★ · B · sym | 2026 |
| 122 | [MineEvolve: Minecraft Skills and Guardrails from Experience](https://arxiv.org/abs/2603.13131) | Skill+Constraint · skill · L1 · ★★★ · B · model | 2026 |
| 123 | [Self-Evolving Embodied Agents via Skill-Harness Evolution](https://arxiv.org/abs/2608.11350) | Skill · skill · L1 · ★★★ · B · model | 2026 |
| 124 | [Super Library Agent](https://arxiv.org/abs/2608.29310) | Skill · skill · L1 · — · B · model | 2026 |
| 125 | [Voyager](https://arxiv.org/abs/2305.16291) | Skill · skill · L1 · ★★★ · B · model | TMLR 2023 · 3300+ 引用 |
| 126 | [Multi-Resolution Skill Discovery for HRL Agents](https://arxiv.org/abs/2505.21410) | Skill · wm · L0 · ★★ · D · sim | 2025 |
| 127 | [CoEvoSkills: Self-Evolving Agent Skills via Co-Evolutionary Methods](https://arxiv.org/abs/2604.01687) | Skill · evo · L0 · ★★ · B · model | 2026 |
| 128 | [EvoSkill](https://arxiv.org/abs/2603.02766) | Skill · multi · L0 · — · D · model | 2026 |
| 129 | [LEGO-Prover](https://scholar.google.com/scholar?q=LEGO-Prover+skill+library+theorem+proving) | Skill+Research · skill · L0 · — · B · model | NeurIPS 2024 |
| 130 | [LILO](https://arxiv.org/abs/2310.19791) | Skill · skill · L0 · — · B · model | 2024 |

### 约束（22 篇）

| # | 论文 | 标签 | 来源 |
|---|---|---|---|
| 131 | [Provably Safe Policy Updates in Deep Reinforcement Learning](https://arxiv.org/abs/2604.09452) | Constraint · loop · L3 · ★★★ · A · sym | 2026 |
| 132 | [SafeDreamer: Safe Reinforcement Learning with World Models](https://arxiv.org/abs/2307.07176) | Constraint · wm · L3 · ★★ · A · sim | PKU-Alignment · 2023 |
| 133 | [Test-Time Adaptation for Generalizable Task Progress Estimation](https://arxiv.org/abs/2506.10085) | Constraint · loop · L2 · ★★ · C · model | 2025 |
| 134 | [Where LLM Agents Fail and How They Can Learn From Failures](https://arxiv.org/abs/2509.25370) | Constraint+Action · mem,loop · L1 · ★★★ · B · sym | 2025 |
| 135 | [AIR: Improving Agent Safety through Incident Response](https://arxiv.org/abs/2602.11749) | Constraint · mem · L1 · ★★★ · B · sym | 2026 |
| 136 | [CAPS: Constraint-Adaptive Policy Switching for Offline Safe RL](https://ojs.aaai.org/index.php/AAAI/article/view/33726) | Constraint · loop · L1 · ★★ · B · sym | AAAI 2024 |
| 137 | [Proactive Runtime Enforcement of LLM Agent Safety](https://arxiv.org/abs/2508.00500) | Constraint · wm,loop · L0 · ★★ · B · model | 2025 |
| 138 | [Toward Safe LLM Agents: A Survey of Specification, Verification, and Enforcement](https://arxiv.org/abs/2608.14590) | Constraint · oneshot · L0 · ★ · D · sym | 2026 · 综述 |
| 139 | [ToolEmu: Identifying the Risks of LLM Agents with an LLM Emulator](https://arxiv.org/abs/2309.04786) | Constraint · wm · L0 · ★★ · B · model | ICLR 2024 · Stanford |
| 140 | [SafeManip: A Property-Driven Benchmark for Temporal Safety in Robotic Manipulation](https://arxiv.org/abs/2605.12386) | Constraint · oneshot · L0 · ★ · D · na | 2026 |
| 141 | [RoboGuard: Safety Guardrails for LLM-Enabled Robots](https://arxiv.org/abs/2503.07885) | Constraint · oneshot · L0 · ★ · D · na | 2025 |
| 142 | [Learning Failure Prevention Skills for Safe Robot Manipulation](https://arxiv.org/abs/2305.02807) | Constraint · skill · L0 · ★★ · B · real | 2023 |
| 143 | [SAHOO: Monitoring Alignment Drift during RSI](https://arxiv.org/abs/2603.06333) | Constraint · loop · L0 · ★★ · B · model | 2026 |
| 144 | [AutoSafeCoder](https://neurips.cc/virtual/2024/99390) | Constraint · multi · L0 · — · D · model | NeurIPS 2024 |
| 145 | [AssertMiner（近邻）](https://arxiv.org/abs/2511.10007) | Constraint · skill · L0 · — · B · sym | 2025 |
| 146 | [Lisa（近邻）](https://arxiv.org/abs/2607.18711) | Constraint · skill · L0 · ★★ · B · sym | 2026 |
| 147 | [QD 漏洞多样性搜索（近邻）](https://arxiv.org/abs/2606.00801) | Constraint · evo · L0 · — · B · model | 2026 |
| 148 | [UnitTenX（近邻）](https://arxiv.org/abs/2510.05441) | Constraint · loop · L0 · — · B · sym | 2025 |
| 149 | [Property-Generated Solver](https://arxiv.org/abs/2506.18315) | Constraint · loop · L0 · — · B · sym | 2025 |
| 150 | [Code-as-Monitor (CaM)](https://arxiv.org/abs/2412.04455) | Constraint · loop · L0 · ★★ · B · model/sim | CVPR 2025 · 71+ 引用 |
| 151 | [Pre-Execution Safety Gate](https://arxiv.org/abs/2604.05427) | Constraint · oneshot · L0 · — · D · na | 2026 |
| 152 | [Plug in the Safety Chip](https://openreview.net/pdf?id=INvxF4iQ34) | Constraint · oneshot · L0 · — · D · na | 2023 · 147+ 引用 |

### 世界（33 篇）

| # | 论文 | 标签 | 来源 |
|---|---|---|---|
| 153 | [FlexiWorld: Learning and Planning via Flexible Action Chunks Across Multiple Time Scales](https://arxiv.org/abs/2609.35138) | World+Action · wm · L3 · — · A · sim | 2026-09 |
| 154 | [SimWorld Studio: Open-Source UE5 Platform for Automatic Generation of Evolving Embodied Environments](https://arxiv.org/abs/2605.09423) | World · oneshot · L3 · ★★ · A · sim | 2026 |
| 155 | [PAN: A World Model for General Interactable Worlds via Generative Latent Prediction](https://arxiv.org/abs/2506.16616) | World+Policy · wm · L3 · ★★ · A · sim | LeCun 系 · 2025 |
| 156 | [Genie: Generative Interactive Environments](https://arxiv.org/abs/2402.15391) | World · oneshot · L3 · ★★★ · A · sim | DeepMind · 2024 |
| 157 | [Agent-World: Scaling Real-World Environment Synthesis](https://arxiv.org/abs/2604.18292) | World · wm,evo · L3 · ★★★ · A · sim | 2026 |
| 158 | [Agent World Model: Infinity Synthetic Environments](https://arxiv.org/abs/2602.10090) | World · oneshot · L3 · ★★★ · A · sim | 2026 · 39+ 引用 |
| 159 | [Code2Worlds: Empowering Coding LLMs for 4D World Models](https://arxiv.org/abs/2602.11757) | World · oneshot · L3 · ★★ · D · sim | 2026 |
| 160 | [Cosmos（近邻，非代码）](https://arxiv.org/abs/2501.03575) | World · oneshot · L3 · — · D · na | NVIDIA · 765+ 引用 |
| 161 | [Code-as-World-VL](https://arxiv.org/abs/2608.27549) | World · loop · L3 · ★★★ · A · sim | MirroS · 2026 |
| 162 | [Memento 3: Model-Based Recursive Self-Improvement through Reflective Rulebooks](https://arxiv.org/abs/2610.11794) | World+Agent-Self · wm,mem,loop · L1 · ★★ · B · sym 🪞 | 2026-10 |
| 163 | [Self-Evolving World Models for LLM Agent Planning](https://arxiv.org/abs/2606.30639) | World · loop · L1 · ★★ · B · model | 2026 |
| 164 | [Dual Digital Twin（近邻）](https://www.mdpi.com/2079-9292/14/24/4806) | World · skill · L1 · — · B · sim | MDPI Electronics 2025 |
| 165 | [Scaling Laws for Pre-training Agents and World Models](https://arxiv.org/abs/2411.04434) | World · oneshot · L0 · ★★ · D · sim | 2024 · 36+ 引用 |
| 166 | [A Definition and Roadmap for World Models](https://arxiv.org/abs/2607.06401) | World · oneshot · L0 · ★ · D · model | 2026 · 立场论文 |
| 167 | [NeSyS: Neuro-Symbolic Synergy for Interactive World Modeling](https://arxiv.org/abs/2602.10480) | World · wm · L0 · ★★ · B · sym | COLM 2026 |
| 168 | [World Model for Robot Learning: A Comprehensive Survey](https://arxiv.org/abs/2605.00080) | World · oneshot · L0 · ★ · D · sim | 2026 · 综述 |
| 169 | [Foundation World Models for Agents that Learn, Verify, and Plan](https://arxiv.org/abs/2602.23997) | World · oneshot · L0 · ★ · D · model | 2026 · 愿景 |
| 170 | [From Word to World: Can Large Language Models be World Models?](https://arxiv.org/abs/2512.18832) | World · oneshot · L0 · ★ · D · na | 2025 |
| 171 | [SR-Platform](https://arxiv.org/abs/2605.14700) | World · skill,multi · L0 · ★★ · B · sim | 2026 · Strike Robotics |
| 172 | [Agent2World: Learning to Generate Symbolic World Models via Adaptive Tool-Use](https://arxiv.org/abs/2512.22336) | World · wm,multi · L0 · ★★★ · D · model | 2025 |
| 173 | [PoE-World: Compositional World Modeling with Products of Experts](https://arxiv.org/abs/2505.10819) | World · wm · L0 · ★★ · D · model | 2025 |
| 174 | [Generating Code World Models with LLMs (GIF-MCTS)](https://arxiv.org/abs/2405.15383) | World · wm · L0 · ★★ · B · model | NeurIPS 2024 · 72+ 引用 |
| 175 | [Executable World Models for ARC-AGI-3](https://arxiv.org/abs/2608.27549) | World · wm · L0 · — · D · model | Rodionov |
| 176 | [Code World Models for General Game Playing](https://arxiv.org/abs/2510.04542) | World · wm,evo · L0 · ★★ · B · sym | DeepMind · ICLR 2026 |
| 177 | [WorldCoder: A Model-Based LLM Agent](https://arxiv.org/abs/2402.12275) | World · wm · L0 · ★★ · B · sym | NeurIPS 2024 · 135+ 引用 |
| 178 | [Code as Worlds](https://arxiv.org/abs/2608.27549) | World · loop · L0 · ★★★ · B · sim | MirroS · 2026 |
| 179 | [3DCodeBench](https://arxiv.org/abs/2606.01057) | World · oneshot · L0 · — · D · na | 2026 |
| 180 | [VoxelCodeBench](https://arxiv.org/abs/2604.02580) | World · oneshot · L0 · — · D · na | 2026 |
| 181 | [Code-as-Room](https://arxiv.org/abs/2605.18451) | World · oneshot · L0 · — · D · na | 2026 |
| 182 | [SceneCode](https://arxiv.org/abs/2605.19587) | World · oneshot · L0 · — · D · na | 2026 |
| 183 | [Scene Language](https://arxiv.org/search/?searchtype=all&query=Scene+Language+visual+numerical+scene+generation) | World · oneshot · L0 · — · D · na | CVPR 2025 |
| 184 | [Genesis](https://arxiv.org/abs/2502.02590) | World · oneshot · L0 · — · D · na | 2024-12 开源 |
| 185 | [RoboGen](https://arxiv.org/abs/2311.01455) | World · oneshot · L0 · — · A · sim | ICML 2024 · Genesis 团队 · 286+ 引用 |

### 设计（31 篇）

| # | 论文 | 标签 | 来源 |
|---|---|---|---|
| 186 | [Leveraging Human Revisions for Improving Text-to-Layout Generation](https://arxiv.org/abs/2405.13026) | Design · loop · L3 · ★★★ · A · human | 2024 |
| 187 | [BRepCLIP: Contrastive Multimodal Pretraining on BRep](https://arxiv.org/abs/2606.05515) | Design · skill · L3 · ★★ · D · sim | 2026 |
| 188 | [Generative Floor Plan Design with LLMs via Reinforcement Learning](https://arxiv.org/abs/2605.14117) | Design · oneshot · L3 · ★★ · D · na | 2026 |
| 189 | [VeriCoder: Fine-tuned RTL Generation with 125K+ Examples](https://arxiv.org/abs/2504.15659) | Design · oneshot · L3 · ★★ · D · sym | 2025 |
| 190 | [RTLCoder: Outperforming GPT-3.5 in Design RTL Generation](https://arxiv.org/abs/2312.08617) | Design · oneshot · L3 · ★★★ · D · sym | HKUST · 2023/2024 |
| 191 | [CAD-Recode: Reverse Engineering CAD Code from Point Clouds](https://arxiv.org/abs/2412.14042) | Design · oneshot · L3 · ★★ · D · na | NVIDIA · NeurIPS 2024 |
| 192 | [Text2CAD](https://sadilkhan.github.io/text2cad-project/) | Design · oneshot · L3 · ★ · D · na | NeurIPS 2024 Spotlight |
| 193 | [Interactive Evolutionary Image Generation with Bayesian Optimization](https://research-portal.uu.nl/ws/files/235432773/Image_Generation_with_Interactive_Evolutionary_System_using_Bayesian_Optimization.pdf) | Design · evo · L1 · ★★ · B · human | Utrecht · 2024 |
| 194 | [AssemCAD: Representative Production-Ready CAD Assemblies](https://arxiv.org/abs/2607.05123) | Design · skill · L1 · ★★★ · B · sim | 2026 |
| 195 | [CADIR: A Cross-Backend Editable Intermediate Representation](https://arxiv.org/abs/2608.00891) | Design · skill · L0 · ★★ · B · model | 2026 |
| 196 | [Large Language Models for Computer-Aided Design: A Survey](https://arxiv.org/abs/2505.08137) | Design · oneshot · L0 · ★ · D · na | 2025 · 综述 |
| 197 | [Catala: A Programming Language for the Law](https://arxiv.org/abs/2103.03198) | Design · oneshot · L0 · ★ · D · sym | Inria · SIGPLAN/ICFP · 160+ 引用 |
| 198 | [IFC-Based Building Design Using Large Language Models](https://arxiv.org/abs/2511.05533) | Design · oneshot · L0 · ★ · D · na | 2025 |
| 199 | [Text2MBL: Text-to-Code Generation for Modular Building Layouts](https://arxiv.org/abs/2509.23713) | Design · oneshot · L0 · ★ · D · na | 2025 |
| 200 | [Interaction2Code: How Far Are We From Automatic Interactive Webpage Generation?](https://arxiv.org/abs/2411.03292) | Design · oneshot · L0 · ★ · D · na | 2024/2025 |
| 201 | [Web2Code: A Large-scale Webpage-to-Code Dataset and Benchmark](https://proceedings.neurips.cc/paper_files/paper/2024/file/cb66be286795d71f89367d596bf78ea7-Paper-Datasets_and_Benchmarks_Track.pdf) | Design · oneshot · L0 · ★ · D · na | NeurIPS 2024 D&B · 115+ 引用 |
| 202 | [Text2CAD-Bench: A Benchmark for LLM-based Text-to-CAD](https://arxiv.org/abs/2605.18430) | Design · oneshot · L0 · ★ · D · na | 2026 |
| 203 | [EvolVE: Evolutionary Search for LLM-based Verilog Generation](https://arxiv.org/abs/2601.18067) | Design · evo · L0 · ★★ · B · sym | 2026 · 7+ 引用 |
| 204 | [CADEvolve: Creating Realistic CAD via Program Evolution](https://arxiv.org/abs/2602.16317) | Design · evo · L0 · ★★★ · B · sim | 2026 |
| 205 | [EvoCAD: Evolutionary CAD Code Generation with Vision Language Models](https://arxiv.org/abs/2510.11631) | Design · evo · L0 · ★★ · B · sim | 2025 · 8+ 引用 |
| 206 | [From Surrogate Modeling to Autonomous Design](https://arxiv.org/abs/2608.18279) | Design · wm · L0 · ★ · D · sim | 2026 · 综述 |
| 207 | [NeOn-GPT](https://2024.eswc-conferences.org/wp-content/uploads/2024/05/77770034.pdf) | Design · multi · L0 · — · D · model | ESWC 2024 · 85+ 引用 |
| 208 | [NL2SHACL 基准（近邻）](https://arxiv.org/html/2608.07530v2) | Design · loop · L0 · ★ · B · sym | 2026 |
| 209 | [xpSHACL](https://arxiv.org/abs/2507.08432) | Design · loop · L0 · — · B · sym | 2025 |
| 210 | [Extended NeOn-GPT](https://journals.sagepub.com/doi/abs/10.1177/22104968261453138) | Design · loop · L0 · ★★ · B · sym | Semantic Web J · 2026 |
| 211 | [Text-to-CAD + Visual Feedback](https://icml.cc/virtual/2025/poster/46007) | Design · loop · L0 · ★★ · B · sim | ICML 2025 |
| 212 | [SPIRES / OntoGPT: Structured Prompt Interrogation and Recursive Extraction of Semantics](https://arxiv.org/abs/2304.02711) | Design · oneshot · L0 · — · D · na | Monarch Initiative · 工具 |
| 213 | [RIGOR: Retrieval-Augmented Generation of Ontologies from Relational Schemas](https://arxiv.org/abs/2506.01232) | Design · oneshot · L0 · — · D · na | 2025 |
| 214 | [Ontology Generation using LLMs](https://arxiv.org/abs/2503.05388) | Design · oneshot · L0 · ★ · D · na | 2025 · 85+ 引用 |
| 215 | [Text-to-CadQuery](https://arxiv.org/abs/2505.06507) | Design · oneshot · L0 · — · D · sim | 2025 |
| 216 | [Design2Code](https://arxiv.org/abs/2403.03163) | Design · oneshot · L0 · ★ · D · na | NAACL 2025 · Stanford · 248+ 引用 |

### 推理（35 篇）

| # | 论文 | 标签 | 来源 |
|---|---|---|---|
| 217 | [Improving Test-Time Scaling with Adaptive Looped Transformers](https://arxiv.org/abs/2609.35748) | Reasoning · loop · L3 · — · C · na | MIT-IBM · 2026-09 |
| 218 | [Knowing When Thinking Is Not Enough: Teaching Small Reasoning Models to Reason Beyond Their Parametric Knowledge](https://arxiv.org/abs/2609.34327) | Reasoning · loop · L3 · ★★ · A · sym | KAIST · 2026-09 |
| 219 | [Beyond Repeated Sampling: Learning Search Policies for LLM Reasoning](https://arxiv.org/abs/2609.26704) | Reasoning · loop · L3 · ★★ · A · sym | 2026-09 |
| 220 | [ReflectRL: Learning from Golden Negative Trajectories via Reflective-to-Direct Reasoning](https://arxiv.org/abs/2608.03972) | Reasoning · loop · L3 · ★★ · A · model | 2026-08 · 开源 github.com/bibisbar/ReflectRL |
| 221 | [Self-Improvement of Language Models by Post-Training on Multi-Agent Debate](https://arxiv.org/abs/2509.15172) | Reasoning · multi · L3 · ★★★ · A · model | 2025 |
| 222 | [SimpleTIR: End-to-End Reinforcement Learning for Multi-Turn Tool-Integrated Reasoning](https://arxiv.org/abs/2509.02479) | Reasoning · loop · L3 · ★★★ · A · sym | NeurIPS 2025 |
| 223 | [ReTool: Reinforcement Learning for Strategic Tool Use in LLMs](https://arxiv.org/abs/2504.11536) | Reasoning · loop · L3 · ★★★ · A · sym | ByteDance · 2025 |
| 224 | [STaR: Bootstrapping Reasoning with Reasoning](https://arxiv.org/abs/2203.14465) | Reasoning · loop · L3 · ★★★ · A · model | NeurIPS 2022 · 根作 |
| 225 | [rStar-Math: Small LLMs Master Math Reasoning with Self-Evolved Deep Thinking](https://arxiv.org/abs/2501.04519) | Reasoning · evo · L3 · ★★★ · A · sym | Microsoft · 2025 |
| 226 | [AlphaGeometry: Solving Olympiad Geometry without Human Demonstrations](https://www.nature.com/articles/s41586-023-06747-5) | Reasoning · loop · L3 · ★★★ · B · sym | Google DeepMind · Nature 2024 |
| 227 | [VPD (Visual Program Distillation)](https://www.semanticscholar.org/paper/af1c871282ec122869d03f5420ef5d9143358a91) | Reasoning · oneshot · L3 · — · D · na | 2024/2025 |
| 228 | [Test-Time Curricula for Targeted Reinforcement Learning](https://openreview.net/forum?id=HoUIYpitfo) | Reasoning · evo,loop · L2 · ★★ · A · model | 2025 · 13+ 引用 |
| 229 | [Test-Time Policy Adaptation for Enhanced Multi-Turn Reasoning](https://arxiv.org/abs/2509.23166) | Reasoning · loop · L2 · ★★ · A · model | 2025 |
| 230 | [Test-Time Tool Evolution for Scientific Reasoning](https://arxiv.org/abs/2601.07641) | Reasoning · skill · L2 · ★★ · B · sym | 2026 |
| 231 | [Tent: Fully Test-time Adaptation by Entropy Minimization](https://arxiv.org/abs/2006.10726) | Reasoning · oneshot · L2 · ★★ · C · model | ICLR 2021 · C 象限经典根 · 2000+ 引用 |
| 232 | [TTRL: Test-Time Reinforcement Learning](https://arxiv.org/abs/2504.16084) | Reasoning · loop · L2 · ★★ · A · model | NeurIPS 2025 · 267+ 引用 |
| 233 | [Titans: Learning to Memorize at Test Time（近邻）](https://arxiv.org/abs/2501.00663) | Reasoning · oneshot · L2 · — · C · na | Google · 386+ 引用 |
| 234 | [The Surprising Effectiveness of Test-Time Training for Abstract Reasoning（近邻）](https://icml.cc/virtual/2025/poster/44773) | Reasoning · oneshot · L2 · — · C · na | ICML 2025 |
| 235 | [Learning to (Learn at Test Time): RNNs with Expressive Hidden States (TTT)（近邻）](https://arxiv.org/abs/2407.04620) | Reasoning · oneshot · L2 · — · C · na | ICML 2025 · Sun et al. · 378+ 引用 |
| 236 | [Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366) | Reasoning · loop,mem · L1 · ★★ · B · model | NeurIPS 2023 · 2000+ 引用 |
| 237 | [ReasoningBank（语言形态）](https://arxiv.org/abs/2509.25140) | Reasoning · skill,mem · L1 · ★★★ · B · model | Google · ICLR 2026 · 208+ 引用 |
| 238 | [Improving Factuality and Reasoning in Language Models through Multiagent Debate](https://arxiv.org/abs/2305.14325) | Reasoning · multi · L0 · ★★ · D · model | MIT · 2023 · 2750+ 引用 |
| 239 | [What Learning Algorithm is In-Context Learning? Investigations with Linear Models](https://arxiv.org/abs/2211.15661) | Reasoning · oneshot · L0 · ★ · D · model | ICLR 2023 · 理论锚 |
| 240 | [RAP: Reasoning via Planning in Language Model is Planning with World Model](https://aclanthology.org/2023.emnlp-main.507.pdf) | Reasoning · wm · L0 · ★★ · D · model | EMNLP 2023 · 奠基作 |
| 241 | [MAC-Reasoner](https://aclanthology.org/2026.findings-acl.233.pdf) | Reasoning · multi · L0 · — · D · model | ACL 2026 Findings |
| 242 | [AgentGroupChat-V2](https://arxiv.org/abs/2506.15451) | Reasoning · multi · L0 · — · D · model | 2025 |
| 243 | [AutoQD](https://arxiv.org/abs/2506.05634) | Reasoning · evo · L0 · — · B · model | 2025 |
| 244 | [Quality-Diversity through AI Feedback (QDAIF)](https://arxiv.org/abs/2310.13032) | Reasoning · evo · L0 · — · B · model | ICLR 2024 · 98+ 引用 |
| 245 | [Self-Debugging](https://arxiv.org/abs/2304.05128) | Reasoning · loop · L0 · ★★ · B · sym | ICLR 2024 · Google/Berkeley · 1538+ 引用 |
| 246 | [ExoViP: Step-by-Step Verification with Exoskeleton Modules](https://arxiv.org/abs/2408.02210) | Reasoning · loop · L0 · — · B · model | 2024 |
| 247 | [LLM+P](https://arxiv.org/abs/2304.11477) | Reasoning · oneshot · L0 · ★ · D · sym | 2023 · 878+ 引用 |
| 248 | [PoT (Program of Thoughts)](https://arxiv.org/abs/2211.12588) | Reasoning · oneshot · L0 · — · D · na | TMLR 2023 |
| 249 | [PAL](https://arxiv.org/abs/2211.10435) | Reasoning · oneshot · L0 · ★ · D · sym | ICML 2023 |
| 250 | [ViperGPT: Visual Inference via Python Execution for Reasoning](https://arxiv.org/abs/2303.08128) | Reasoning · oneshot · L0 · ★ · D · sym | 2023 · Columbia |
| 251 | [VisProg: Visual Programming — Compositional Visual Reasoning without Training](https://arxiv.org/abs/2211.11559) | Reasoning · oneshot · L0 · ★ · D · sym | CVPR 2023 最佳论文 · AI2 |

### 自我（71 篇）

| # | 论文 | 标签 | 来源 |
|---|---|---|---|
| 252 | [Evo^2: Evolving the Evolver through Weight-Harness Co-Evolution](https://arxiv.org/abs/2610.13025) | Agent-Self · evo,loop · L4 · ★★★ · A · sym 🪞 | 2026-10 · Xu/Zhang/Zhou/Lambert |
| 253 | [RSI-Anything: Unlocking Recursive Self-Improvement with World Models](https://arxiv.org/abs/2610.13912) | Agent-Self+World · wm,loop · L4 · ★★★ · A · model 🪞 | 2026-10 |
| 254 | [RRSI: Regularized Recursive Self-Improvement of Agent Harnesses](https://arxiv.org/abs/2609.24972) | Agent-Self · evo,loop · L4 · ★★★ · B · sym 🪞 | 2026-09 |
| 255 | [SoL-Pi: Recursively Scaling Auto-Research Loops for Efficient Agent Harness](https://arxiv.org/abs/2609.20519) | Agent-Self+Research · evo,loop · L4 · ★★★ · B · sym 🪞 | NVIDIA NVlabs · 2026-09 · 3476 星 |
| 256 | [MetaRSI-v1: A Meta-Recursive Self-Improving System for Recursive Self-Improving Systems Themselves](https://arxiv.org/abs/2609.06396) | Agent-Self+Research · loop,evo,mem · L4 · ★★★ · A · sym 🪞 | 2026 · 30 人 · CosmosMind |
| 257 | [Agent0: Curriculum and Executor Agents Co-Evolve from Zero Data](https://arxiv.org/abs/2511.16043) | Agent-Self · multi · L4 · ★★★ · A · model 🪞 | 2025 |
| 258 | [Darwin Gödel Machine: Open-Ended Evolution of Self-Improving Agents (DGM)](https://arxiv.org/abs/2505.22954) | Agent-Self · evo,skill · L4 · ★★★ · B · sym 🪞 | Sakana+UBC(Clune) · 2025 |
| 259 | [Aspire: Can Models Self-Evolve from Vague Goals?](https://arxiv.org/abs/2608.31111) | Agent-Self · loop · L3 · ★★ · A · sym 🪞 | 2026-08 |
| 260 | [AtomMem: Learnable Dynamic Agentic Memory with Atomic Memory Operation](https://arxiv.org/abs/2601.08323) | Agent-Self · mem · L3 · ★★ · A · model | 2026-01 |
| 261 | [rLLM: Continual Learning via Real-Time RL for Agents](https://rllm-project.com/post.html?post=realtime_rl.md) | Agent-Self · loop · L3 · ★★★ · A · model | rLLM Project · 2026 |
| 262 | [Flying Serving: On-the-Fly Parallelism Switching for LLM Serving](https://arxiv.org/abs/2602.22593) | Agent-Self · oneshot · L3 · ★★ · D · sym | 2026 |
| 263 | [Rollout-Training Co-Design for Efficient LLM-Based Multi-Agent RL](https://arxiv.org/abs/2602.09578) | Agent-Self · multi · L3 · ★★ · A · sym | 2026 |
| 264 | [On-Policy Replay for Continual Supervised Fine-Tuning](https://arxiv.org/abs/2605.29495) | Agent-Self · loop,mem · L3 · ★★★ · A · model | 2026 |
| 265 | [CLaaS: Continual Learning as a Service for Deployed Agents](https://arxiv.org/abs/2606.05559) | Agent-Self · oneshot · L3 · ★★★ · A · model | 2026 |
| 266 | [EvoHarness-RL: Learning Self-Evolving Runtime Harness](https://arxiv.org/abs/2608.05446) | Agent-Self · evo · L3 · ★★★ · A · sym | 2026 |
| 267 | [FlowBalance: Verifier-Grounded Self-Improvement from On-Policy Reasoning Experience](https://arxiv.org/abs/2609.03241) | Agent-Self+Reasoning · loop,mem · L3 · ★★★ · A · sym | Tencent · UPenn · 2026 |
| 268 | [SCOPE: Data-Free Self-Play for Open-Ended Task Co-Evolution](https://arxiv.org/abs/2608.19197) | Agent-Self · evo · L3 · ★★★ · A · sym | 2026 |
| 269 | [Mem-α: Learning Memory Construction via Reinforcement Learning](https://openreview.net/forum?id=dm42omwep1) | Agent-Self · mem · L3 · ★★★ · A · model | OpenReview · 81+ 引用 |
| 270 | [Memory-R1: Enhancing LLM Agents to Manage and Utilize External Memory via RL](https://arxiv.org/abs/2508.19828) | Agent-Self · mem,loop · L3 · ★★★ · A · model | 2025 |
| 271 | [SDRL: Prepare Reasoning Language Models for Multi-Agent Settings](https://arxiv.org/abs/2601.22297) | Agent-Self · oneshot · L3 · ★★★ · A · model | 2026 |
| 272 | [RAGEN: Understanding Self-Evolution in LLM Agents via Multi-Turn RL](https://arxiv.org/abs/2504.20073) | Agent-Self · loop · L3 · ★★ · A · model | 2025 |
| 273 | [RISE: Recursive Introspection — Teaching Language Model Agents How to Self-Improve](https://arxiv.org/abs/2407.18219) | Agent-Self · loop · L3 · ★★★ · D · model | CMU · NeurIPS 2024 |
| 274 | [RISE: Recursive Improvement via Self-Extrapolating Policy Distillation](https://arxiv.org/abs/2609.05295) | Agent-Self · loop · L3 · ★★★ · A · model 🪞 | Salesforce · 2026 · Li/Yavuz/Joty |
| 275 | [AgentDistill](https://arxiv.org/abs/2506.14728) | Agent-Self · oneshot · L3 · — · D · na | 2025 |
| 276 | [Agent Distillation](https://neurips.cc/virtual/2025/poster/117657) | Agent-Self · multi · L3 · — · D · model | NeurIPS 2025 |
| 277 | [AgentArk](https://arxiv.org/abs/2602.03955) | Agent-Self · multi · L3 · — · D · model | 2026 |
| 278 | [FlowReasoner](https://arxiv.org/abs/2504.15257) | Agent-Self · multi · L3 · ★★★ · D · model | 2025 · NTU |
| 279 | [Self-Adapting Language Models (SEAL)](https://arxiv.org/abs/2506.10943) | Agent-Self · loop · L3 · ★★★ · A · model 🪞 | MIT · 2025 |
| 280 | [Continual Learning, Not Training: Online Adaptation for Deployed Agents](https://arxiv.org/abs/2511.01093) | Agent-Self+Action · loop,mem · L2 · ★★ · A · model | 2025 |
| 281 | [MemRL: Self-Evolving Agents via Runtime Non-Parametric Reinforcement Learning on Memory](https://arxiv.org/abs/2601.03192) | Agent-Self · mem,loop · L2 · ★★ · B · model | 2026 |
| 282 | [RSI Agent: Autonomous Exploration for Recursive Self-improvement in New Environments](https://arxiv.org/abs/2609.15364) | Agent-Self · multi,mem · L1 · ★★★ · B · model | 2026-09 |
| 283 | [MemCodex: Self-Programming Hierarchical Memory for Language Agents](https://arxiv.org/abs/2609.39765) | Agent-Self · mem,evo · L1 · ★★ · B · sym 🪞 | 2026-09 |
| 284 | [Observability-Driven Automatic Evolution of Coding Agents](https://arxiv.org/abs/2604.25850) | Agent-Self · loop · L1 · ★★★ · B · sym | 2026 |
| 285 | [Retrospective Harness Optimization: Improving LLM Agents via Self-Preference over Trajectory](https://arxiv.org/abs/2606.05922) | Agent-Self · loop,mem · L1 · ★★★ · B · sym | 2026 |
| 286 | [The Last Harness You Will Ever Build: Evolution Agent Modifies Harness End-to-End](https://arxiv.org/abs/2604.21003) | Agent-Self · evo,loop · L1 · ★★★ · B · sym | 2026 |
| 287 | [Worth Remembering: Surprise-Gated Robot Episodic Memory via World Model Loss](https://arxiv.org/abs/2606.03787) | Agent-Self+World · mem,wm · L1 · ★★★ · B · model | 2026 |
| 288 | [Agentic Context Engineering (ACE): Evolving Contexts for Long-Horizon Agents](https://arxiv.org/abs/2510.04618) | Agent-Self · mem · L1 · ★★★ · B · model | 2025 |
| 289 | [A-MEM: Agentic Memory for LLM Agents](https://arxiv.org/abs/2502.12110) | Agent-Self · mem,evo · L1 · ★★★ · B · model | 2025 |
| 290 | [Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory](https://arxiv.org/abs/2504.19413) | Agent-Self · mem · L1 · ★★★ · B · model | 2025 · 产品级 |
| 291 | [EvolveMem: Self-Evolving Memory Architecture](https://arxiv.org/abs/2605.13941) | Agent-Self · loop,mem · L1 · ★★ · B · model | 2026 |
| 292 | [MemSkill: Learning and Evolving Memory Skills for Self-Evolving LLM Agents](https://arxiv.org/abs/2602.02474) | Agent-Self · skill,mem · L1 · ★★★ · B · model | 2026 |
| 293 | [Meta-Harness: End-to-End Optimization of Model Harnesses](https://arxiv.org/abs/2603.28052) | Agent-Self · loop,evo · L1 · ★★ · B · sym 🪞 | Stanford 等 · 2026 · Finn/Khattab/Lee |
| 294 | [MetaSkill-Evolve: Two-Timescale Skill and Meta-Skill Loops](https://arxiv.org/abs/2607.05297) | Agent-Self · skill · L1 · ★★★ · B · model | 2026 |
| 295 | [STOP: Recursively Self-Improving Scaffolding](https://arxiv.org/abs/2310.02304) | Agent-Self · loop · L1 · ★★ · B · model 🪞 | 2023 |
| 296 | [Promptbreeder: Self-Referential Evolution of Prompts](https://arxiv.org/abs/2309.16797) | Agent-Self · evo · L1 · ★★ · B · sim 🪞 | DeepMind · ICLR 2024 |
| 297 | [Gödel Agent: A Self-Referential Agent Framework for Recursive Self-Improvement](https://arxiv.org/abs/2410.04444) | Agent-Self · evo · L1 · ★★ · B · sym 🪞 | ACL 2025 · PKU · 70+ 引用 |
| 298 | [EvoPrompt: Connecting LLMs with Evolutionary Algorithms](https://arxiv.org/abs/2309.08532) | Agent-Self · evo · L1 · ★★ · B · model | ICLR 2024 · 640+ 引用 |
| 299 | [GEPA: Reflective Prompt Evolution Can Outperform Reinforcement Learning](https://arxiv.org/abs/2507.19457) | Agent-Self · evo · L1 · ★★ · B · model | 2025 · 530+ 引用 |
| 300 | [AgentSquare: Automatic LLM Agent Search in Modular Design Space](https://arxiv.org/abs/2410.06153) | Agent-Self · evo · L1 · ★★★ · B · sym | 2024 · 清华 |
| 301 | [EvoAgent: Towards Automatic Multi-Agent Generation](https://arxiv.org/abs/2406.14228) | Agent-Self · evo · L1 · ★★ · B · sim | 2024 · 158+ 引用 |
| 302 | [GPTSwarm: Language Agents as Optimizable Graphs](https://arxiv.org/abs/2402.16823) | Agent-Self · evo · L1 · ★★ · B · sim | ICML 2024 |
| 303 | [AFlow: Automating Agentic Workflow Generation](https://arxiv.org/abs/2410.10762) | Agent-Self · evo · L1 · ★★ · B · sym | ICLR 2025 |
| 304 | [Automated Design of Agentic Systems (ADAS / Meta Agent Search)](https://arxiv.org/abs/2408.08435) | Agent-Self · evo · L1 · ★★ · B · sym | ICLR 2025 |
| 305 | [DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines](https://arxiv.org/abs/2310.03714) | Agent-Self · loop · L1 · ★★ · B · sym | NeurIPS 2023 · 830+ 引用 |
| 306 | [TextGrad: Automatic “Differentiation” via Text](https://arxiv.org/abs/2406.07496) | Agent-Self · loop · L1 · ★★ · B · model | Stanford · ICLR 2025 |
| 307 | [AgentVerse: Dynamic Multi-Agent Collaboration with Emergent Team Composition](https://arxiv.org/abs/2308.10848) | Agent-Self · multi · L0 · ★★ · B · model | 2023 · 1200+ 引用 |
| 308 | [Agent Lightning: Train ANY AI Agents with Reinforcement Learning](https://arxiv.org/abs/2508.03680) | Agent-Self · oneshot · L0 · ★★ · D · sym | 2025 |
| 309 | [Next-Generation Agentic Reinforcement Learning Systems](https://arxiv.org/abs/2607.01120) | Agent-Self · oneshot · L0 · ★ · D · model | 2026 · 4+ 引用 |
| 310 | [Deployed Reinforcement Learning should be Continual](https://arxiv.org/abs/2606.04029) | Agent-Self · oneshot · L0 · ★★ · D · model | 2026 · 立场论文 |
| 311 | [LMAC: LLM-Guided Communication for Cooperative Multi-Agent RL](https://arxiv.org/abs/2605.18077) | Agent-Self · multi · L0 · ★★ · D · model | ICML 2026 |
| 312 | [HarnessDev: Can LLMs Create and Evolve Their Own Agent Harness?](https://arxiv.org/abs/2609.01437) | Agent-Self · oneshot · L0 · ★★ · D · sym | 2026 |
| 313 | [SwarmSys: Decentralized Swarm-Inspired Multi-Agent Reasoning](https://arxiv.org/abs/2510.10047) | Agent-Self · multi · L0 · ★★ · B · model | 2025 |
| 314 | [Context Engineering: From Prompts to Corporate Multi-Agent Architecture](https://arxiv.org/abs/2603.09619) | Agent-Self · mem · L0 · ★ · D · model | 2026 · 综述 |
| 315 | [HIMM: Human-Inspired Long-Term Memory Modeling for Embodied Agents](https://arxiv.org/abs/2602.15513) | Agent-Self · mem · L0 · ★★★ · B · model | 2026 |
| 316 | [MemGPT: Towards LLMs as Operating Systems](https://arxiv.org/abs/2310.08560) | Agent-Self · mem · L0 · ★★ · D · model | Berkeley · 2023 · 1000+ 引用 |
| 317 | [Scaling Self-Evolving Agents via Parametric Memory](https://arxiv.org/abs/2606.04536) | Agent-Self · loop,mem · L0 · ★★★ · B · model | 2026 |
| 318 | [Sleep-time Compute: Beyond Inference Scaling at Test-time](https://arxiv.org/abs/2504.13171) | Agent-Self · skill,mem · L0 · ★★ · B · model | Letta · 2025 |
| 319 | [Gödel Machine: Self-Referential Optimal Problem Solvers](https://arxiv.org/abs/cs/0309048) | Agent-Self · oneshot · L0 · ★ · D · na | Schmidhuber · 2003 · 理论根 |
| 320 | [The Introspection Threshold for Recursive Self-Improvement](https://arxiv.org/abs/2607.04277) | Agent-Self · oneshot · L0 · ★ · D · na | 2026 · 理论 |
| 321 | [Recursive Self-Improvement in AI: From Bounded Self-Refinement to Autonomous Research Loops](https://arxiv.org/abs/2607.07663) | Agent-Self · oneshot · L0 · ★ · D · na | 综述 · 1250 篇论文 · 2026 |
| 322 | [A Dynamic LLM-Powered Agent Network for Task-Oriented Collaboration (DyLAN)](https://arxiv.org/abs/2310.02170) | Agent-Self · multi · L0 · ★★ · D · model | ICLR 2024 · 281+ 引用 |

### 研究（47 篇）

| # | 论文 | 标签 | 来源 |
|---|---|---|---|
| 323 | [Search Self-play: Pushing the Frontier of Agent Capability without Supervision](https://arxiv.org/abs/2510.18821) | Research · evo · L4 · ★★ · A · real 🪞 | 2025-10 |
| 324 | [Machines That Accelerate Machine-Making: A Research Agenda for Human-Demand-Guided Physical Recursive Self-Improvement](https://www.datafluxdynamics.ltd/research/machines-that-accelerate-machine-making.pdf) | Research+Policy · oneshot · L4 · ★★★ · D · sym 🪞 | DataFlux Dynamics · Zhang Minghao · 2026-08 |
| 325 | [Absolute Zero: Reinforced Self-play Reasoning with Zero Data (AZR)](https://arxiv.org/abs/2505.03335) | Research · evo · L4 · — · A · model 🪞 | NeurIPS 2025 |
| 326 | [IdeaScientist: Orchestrating Agents for Grounded Scientific Ideation](https://arxiv.org/abs/2610.04074) | Research · multi · L3 · ★★ · A · model | 2026-10 |
| 327 | [From Self-Evolving Synthetic Data to Verifiable-Reward RL for Multi-Turn Tool-Using Agents](https://arxiv.org/abs/2601.22607) | Research+Agent-Self · loop,evo · L3 · ★★★ · A · sym | 2026 |
| 328 | [MatBrain: Collaborative Dual-Model Agent for Autonomous Crystal Materials Research](https://arxiv.org/abs/2604.11540) | Research+Design · multi · L3 · ★★ · A · sym | 2026 · 12 人 |
| 329 | [SPIRAL: Self-Play on Zero-Sum Games Incentivizes Reasoning](https://arxiv.org/abs/2506.24119) | Research+Agent-Self · evo,multi · L3 · ★★★ · A · sym | 2025 |
| 330 | [Frontis-MA1: Training an AI4AI Model towards Recursive Self-Improvement in Machine Learning Engineering](https://arxiv.org/abs/2607.28568) | Research · evo,loop · L3 · ★★★ · B · sym | FrontisAI · 2026 · 24 人 |
| 331 | [Scaling Self-Play with Self-Guidance in Lean4](https://arxiv.org/abs/2604.20209) | Research · evo · L3 · ★★★ · A · sym | 2026 |
| 332 | [STP: Self-play LLM Theorem Provers with Iterative Conjecturing and Proving](https://arxiv.org/abs/2502.00212) | Research · evo · L3 · ★★★ · A · sym | 2025 · 96+ 引用 |
| 333 | [RefineCoder](https://arxiv.org/abs/2502.09183) | Research · loop · L3 · — · A · sym | 2025 |
| 334 | [DreamProver](https://arxiv.org/abs/2604.26311) | Research · skill · L3 · — · B · model | 2026 |
| 335 | [EvoTune](https://claire-labo.github.io/EvoTune/) | Research · evo · L3 · — · A · sim | 2026 |
| 336 | [Scaling Automatic Research Agents via World Models (WMRL)](https://arxiv.org/abs/2608.12564) | Research · wm · L3 · ★★ · A · model | 2026 |
| 337 | [Sample Efficient Generative Molecular Optimization](https://arxiv.org/abs/2602.10984) | Research · loop · L2 · ★★ · B · model | 2026 |
| 338 | [FrugalEvo: Towards Cost-Aware LLM-Guided Program Evolution](https://arxiv.org/abs/2610.03675) | Research · evo · L1 · ★★ · B · sym | 2026-10 |
| 339 | [Arbor: Toward Generalist Autonomous Research via Hypothesis-Tree Refinement](https://arxiv.org/abs/2606.11926) | Research · multi,loop,mem · L1 · ★★★ · B · sym | 人大 RUC-NLPIR · 2026-06 · 1112 星 |
| 340 | [Dream-RSI: Recursive Self-Improvement through Evolving Worlds](https://github.com/zhengkid/Dream-RSI) | Research+Agent-Self · wm,mem,evo · L1 · ★★★ · B · sym | Google + DeepMind + UMD + UVA · 17 人 · 2026 |
| 341 | [MLEvolve: Progressive Graph Search with Retrospective Memory](https://arxiv.org/abs/2606.06473) | Research · evo · L1 · ★★ · B · sim | 2026 |
| 342 | [AlphaEvolve](https://arxiv.org/abs/2506.13131) | Research · evo · L1 · — · B · sym | DeepMind · 2025 |
| 343 | [Fork-and-Flush: Escaping Idea Basins in Autoresearch Agents](https://arxiv.org/abs/2610.07447) | Research · multi,mem · L0 · ★★ · B · sym | 2026-10 |
| 344 | [Benchmark Radar: A Living Database and Search Engine for AI Benchmarks](https://arxiv.org/abs/2609.11115) | Research · oneshot · L0 · ★★ · B · sym | 2026-09 |
| 345 | [OmniScientist: An Omni-Modal Omni-Discipline AI Scientist](https://arxiv.org/abs/2608.13558) | Research · multi · L0 · ★★ · B · real | 2026-08 |
| 346 | [ExplorationBench: Measuring AI Systems Exploration in Verifiable Alien Worlds](https://arxiv.org/abs/2609.30199) | Research · oneshot · L0 · ★★ · D · sym | 2026-09 |
| 347 | [ScholarCatalyst: A Benchmark for Retrieving Papers That Inspire New Research](https://arxiv.org/abs/2610.02202) | Research · oneshot · L0 · ★★ · D · human | 2026-10 |
| 348 | [awesome-rubric-rewards（论文清单库）](https://github.com/chrisliu298/awesome-rubric-rewards) | Research · oneshot · L0 · ★★ · D · sym | GitHub · chrisliu298 · 2026-08 |
| 349 | [RubricEval: A Rubric-Level Meta-Evaluation Benchmark for LLM Judges](https://arxiv.org/abs/2603.25133) | Research · oneshot · L0 · ★★ · D · model 🪞 | 2026-03 |
| 350 | [AutoBencher: Towards Declarative Benchmark Construction](https://arxiv.org/abs/2407.08351) | Research · oneshot · L0 · ★★ · D · sym/model | ICLR 2025 · Li et al. |
| 351 | [AI for Scientific Discovery is a Social Problem](https://www.cell.com/patterns/fulltext/S2666-3899(26)00006-1) | Research · oneshot · L0 · ★ · D · model | Patterns/Cell · 2026 · 17+ 引用 |
| 352 | [Automating the Search for Artificial Life with Foundation Models](https://arxiv.org/abs/2412.17799) | Research+World · evo · L0 · ★★ · B · sim | Sakana · 2024 |
| 353 | [Autonomous Agents for Scientific Discovery: Vision and Roadmap](https://arxiv.org/abs/2510.09901) | Research · oneshot · L0 · ★ · D · model | 2025 · 愿景 |
| 354 | [Sparks: Multi-Agent AI Model Discovers Novel Scientific Ideas](https://arxiv.org/abs/2504.19017) | Research · multi,evo · L0 · ★★ · B · model | Buehler · MIT · 2025 · 28+ 引用 |
| 355 | [Foundation Models for Scientific Discovery: From Paradigm Enhancement to Paradigm Transition](https://arxiv.org/abs/2510.15280) | Research · oneshot · L0 · ★ · D · model | 2025 · 综述 |
| 356 | [Discovery Foundation Models: Toward Open-Ended Discovery Intelligence](https://arxiv.org/abs/2609.15973) | Research · oneshot · L0 · ★ · D · model | PHAI Labs · 2026 · 13 人 |
| 357 | [Evolutionary Discovery of RL Algorithms via LLMs](https://arxiv.org/abs/2603.28416) | Research · evo · L0 · ★★ · B · sim | 2026 |
| 358 | [FT-Dojo: Fine-Tuning Pipeline as an Executable Environment](https://arxiv.org/abs/2603.01712) | Research · wm · L0 · ★★ · D · model | 2026 |
| 359 | [AutoResearch: Insight In, Hallucination Out](https://arxiv.org/abs/2608.17906) | Research · loop,multi · L0 · ★★ · B · model | 2026 |
| 360 | [CodeScientist: End-to-End Semi-Automated Scientific Discovery with Code-based Experimentation](https://arxiv.org/abs/2503.22708) | Research · evo,loop · L0 · ★★ · B · sim | AI2 · ACL 2025 Findings · 66+ 引用 |
| 361 | [Towards an AI Co-Scientist](https://arxiv.org/abs/2502.18864) | Research · multi,evo · L0 · ★★ · B · sim | Google · 2025 · Gottweis 等 |
| 362 | [AI Scientist-v2](https://arxiv.org/abs/2504.08066) | Research · multi · L0 · — · D · model | Sakana · 2025 |
| 363 | [The AI Scientist](https://arxiv.org/abs/2408.06292) | Research · multi · L0 · ★★ · D · model | Sakana · 2024 · 1350+ 引用 |
| 364 | [ChatDev](https://arxiv.org/abs/2307.07924) | Research · multi · L0 · — · D · model | ACL 2024 |
| 365 | [MetaGPT](https://arxiv.org/abs/2308.00352) | Research · multi · L0 · — · D · model | ICLR 2024 Oral · 4000+ 引用 |
| 366 | [Self-Collaboration Code Generation](https://arxiv.org/abs/2304.07590) | Research · multi · L0 · — · D · model | 2023 · 656+ 引用 |
| 367 | [Digital Red Queen](https://pub.sakana.ai/drq/) | Research · evo · L0 · — · B · sim | Sakana AI |
| 368 | [FunSearch](https://www.nature.com/articles/s41586-023-06924-6) | Research · evo · L0 · — · B · sym | Nature · DeepMind · 2023 |
| 369 | [Learning to Evaluate Before Improving (AutoSciRub)](https://arxiv.org/abs/2608.31076) | Research · loop · L0 · ★★ · B · sym | ZJU-NLP · 2026 |
<!-- PAPER-INDEX:END -->

## 仓库结构

```
awesome-code-as-agent/
├── README.md                       # English
├── README_CN.md                    # 中文版（当前页面）
├── code-as-policy-cube.html        # 3D 交互立方体
├── code-as-policy-spectrum.html    # 2D 矩阵（旧版）
├── data/
│   └── papers.json                 # 369 篇论文，8 维 tag
├── tools/
│   └── gen_paper_table.js      # Regenerate README paper tables
├── screenshots/
│   ├── cube-overview.png           # 3D 立方体
│   ├── database-view.png           # 论文数据库
│   └── modal-quadrant-groups.png   # 四象限分组弹窗
└── .claude/skills/open-awesome-cube/  # Agent 技能
```

## 学生指南

刚接触这个领域？看 [学生指南](STUDENT_GUIDE.md)——5 分钟学会用 3D 立方体找研究空白、选论文题目、理解领域全景。

## 贡献

参见 [CONTRIBUTING.md](CONTRIBUTING.md)——论文 tag 格式与投稿指南。

## 许可

MIT
