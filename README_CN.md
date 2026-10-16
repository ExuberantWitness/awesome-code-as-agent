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
共 **369 篇**，单表列出，按场景归拢、更新能力降序排列。八个维度各占一列，含义见 [四维分类体系](#四维分类体系) 与 [附加-tag](#附加-tag)。最后一列「自己改自己？」指改进闭环是否绕回改进机制本身（如 DGM 重写自己的代码、Self-Taught Evaluator 给自己造训练数据）。

| # | 论文 | 场景 | 方向 | 更新能力 | 运行时行为 | 反馈栈 | Oracle | 领域 | 自己改自己？ |
|---|---|---|---|---|---|---|---|---|---|
| 1 | [Puro-2B: Poor Lab Qwen2-1.5B Trained on RTX 5090 within $5090](https://arxiv.org/abs/2608.27370) | 策略 | 单次生成 | 权重训练 | 采集数据＋训练 | 证据反馈 | 符号 | NLP | 否 |
| 2 | [CLIFT: Turning Gemini Robotics On-Device into Humanoid Specialists via Non-Invasive Closed-Loop Iterative Fine-Tuning](https://arxiv.org/abs/2607.29172) | 策略 | 闭环调整 | 权重训练 | 采集数据＋训练 | 验证反馈 | 真实环境 | 机器人 | 否 |
| 3 | [Sirius: Human-in-the-Loop Autonomy and Learning During Deployment](https://arxiv.org/abs/2211.08416) | 策略 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 真实环境, 人类 | 机器人 | 否 |
| 4 | [Learning While Deploying (LWD): Fleet-Scale Offline-to-Online RL for Generalist Robots](https://arxiv.org/abs/2605.00416) | 策略 | 闭环调整, 多智能体 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 真实环境 | 机器人 | 否 |
| 5 | [OHP-RL: Online Human Preference Reinforcement Learning for Real-World Manipulation](https://arxiv.org/abs/2605.15971) | 策略, 奖励 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 真实环境, 人类 | 机器人 | 否 |
| 6 | [LifeLong-RFT: Continual Learning VLA Models via Reinforcement Fine-Tuning](https://arxiv.org/abs/2602.10503) | 策略 | 闭环调整, 记忆上下文 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 真实环境 | 机器人 | 否 |
| 7 | [Self-Adapting Robotic Agents through Online Continual Reinforcement Learning](https://arxiv.org/abs/2603.04029) | 策略 | 闭环调整, 记忆上下文 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 真实环境 | 机器人 | 否 |
| 8 | [What Matters for Simulation-to-Online Reinforcement Learning](https://arxiv.org/abs/2602.20220) | 策略 | 单次生成 | 权重训练 | 采集数据＋训练 | 验证反馈 | 真实环境 | 机器人 | 否 |
| 9 | [RL-100: Performant Robotic Manipulation with Real-World RL](https://arxiv.org/abs/2510.14830) | 策略 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 真实环境 | 机器人 | 否 |
| 10 | [Long-Horizon Planning in World Models with Latent Planners](https://arxiv.org/abs/2606.09311) | 策略 | 世界模型 | 权重训练 | 采集数据＋训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 11 | [Sparse Imagination: Efficient Visual World Model Planning](https://arxiv.org/abs/2506.01392) | 策略 | 世界模型 | 权重训练 | 采集数据＋训练 | 验证反馈 | 仿真 | 机器人 | 否 |
| 12 | [Dream to Manipulate: Compositional World Models Empowering Robot Imitation Learning](https://dreamtomanipulate.github.io/) | 策略, 世界 | 世界模型 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 仿真, 真实环境 | 机器人 | 否 |
| 13 | [AOR: Act-Observe-Rewrite for Robot Manipulation Policy Improvement](https://arxiv.org/abs/2603.04466) | 策略 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 真实环境, 仿真 | 机器人 | 否 |
| 14 | [Dreamer 4: Training Agents Inside of Scalable World Models](https://arxiv.org/abs/2509.24527) | 策略 | 世界模型 | 权重训练 | 采集数据＋训练 | 验证反馈 | 模型 | 通用 | 否 |
| 15 | [MuZero: Mastering Atari, Go, Chess and Shogi by Planning with a Learned Model](https://arxiv.org/abs/1911.08265) | 策略 | 世界模型 | 权重训练 | 采集数据＋训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 16 | [DreamerV3: Mastering Diverse Domains through World Models](https://arxiv.org/abs/2301.04104) | 策略 | 世界模型 | 权重训练 | 采集数据＋训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 17 | [Robot-Powered Data Flywheel (RPDF)](https://arxiv.org/abs/2511.19647) | 策略 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 真实环境, 模型 | 机器人 | 否 |
| 18 | [DexFlyWheel](https://arxiv.org/abs/2509.23829) | 策略 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 真实环境, 模型 | 机器人 | 否 |
| 19 | [VERITAS](https://arxiv.org/abs/2606.18247) | 策略 | 闭环调整 | 权重训练 | 只采集数据，不训练 | 数据飞轮 | 模型, 真实环境 | 通用 | 否 |
| 20 | [CodeDiffuser](https://www.roboticsproceedings.org/rss21/p072.pdf) | 策略 | 单次生成 | 权重训练 | 运行时全冻结 | 证据反馈 | 不适用 | 通用 | 否 |
| 21 | [RoboPro (Robotic Programmer)](https://arxiv.org/abs/2501.04268) | 策略 | 单次生成 | 权重训练 | 运行时全冻结 | 验证反馈 | 模型, 人类 | 通用 | 否 |
| 22 | [TT-VLA: On-the-Fly VLA Adaptation via Test-Time Reinforcement Learning](https://arxiv.org/abs/2601.06748) | 策略 | 闭环调整, 世界模型 | 运行时适应 | 采集数据＋训练 | 数据飞轮 | 真实环境 | 机器人 | 否 |
| 23 | [Dejavu: Post-Deployment Learning for Embodied Agents via Experience Feedback Network](https://arxiv.org/abs/2510.10181) | 策略 | 闭环调整, 记忆上下文 | 运行时适应 | 采集数据＋训练 | 数据飞轮 | 真实环境 | 机器人 | 否 |
| 24 | [AdaWorldPolicy: World-Model-Driven Diffusion Policy with Test-Time Adaptation](https://arxiv.org/abs/2602.20057) | 策略 | 世界模型 | 运行时适应 | 只训练，不采集 | 验证反馈 | 模型 | 机器人 | 否 |
| 25 | [Episodic Memory for Long-Horizon Robotic Manipulation](https://openreview.net/pdf?id=BBgDA4y0B9) | 策略 | 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 真实环境 | 机器人 | 否 |
| 26 | [MemoAct: Memory-Augmented Robotic Policies](https://tlf-tlf.github.io/MemoActPage/) | 策略 | 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 真实环境, 模型 | 机器人 | 否 |
| 27 | [RoboPara](https://proceedings.iclr.cc/paper_files/paper/2026/file/e8aa3f5e8b5f24b830f31fd828e2a2a3-Paper-Conference.pdf) | 策略 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 28 | [ASPIRE: Agentic Skills Discovery for Robotics](https://arxiv.org/abs/2607.00272) | 策略 | 技能沉淀, 闭环调整 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 真实环境, 仿真 | 机器人 | 否 |
| 29 | [EpiMem: Episodic Memory Indexing for Pretrained Manipulation Policies](https://arxiv.org/abs/2603.24576) | 策略 | 记忆上下文 | 机制冻结 | 只采集数据，不训练 | 数据飞轮 | 真实环境 | 机器人 | 否 |
| 30 | [RISE (Embodied): Compositional World Model Imagined Rollouts for Robot Policy](https://arxiv.org/abs/2602.11075) | 策略 | 世界模型 | 机制冻结 | 采集数据＋训练 | 验证反馈 | 仿真 | 机器人 | 否 |
| 31 | [Large Language Models as Commonsense Knowledge for Large-Scale Task Planning (LLM-MCTS)](https://arxiv.org/abs/2305.14078) | 策略 | 世界模型 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 32 | [GenSwarm](https://www.nature.com/articles/s44182-025-00065-w) | 策略 | 多智能体 | 机制冻结 | 运行时全冻结 | 证据反馈 | 真实环境 | 机器人 | 否 |
| 33 | [Genesys](https://dl.acm.org/doi/10.1145/3776736) | 策略 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 仿真 | 通用 | 否 |
| 34 | [Code Evolution for Control](https://arxiv.org/abs/2601.06845) | 策略 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 35 | [Evolution through Large Models (ELM)](https://arxiv.org/abs/2206.08896) | 策略 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 机器人 | 否 |
| 36 | [OmniManip](https://arxiv.org/abs/2501.03841) | 策略 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型, 仿真 | 通用 | 否 |
| 37 | [Contact-Rich Adaptive LLM-based Control (CoRAL)](https://arxiv.org/abs/2605.02600) | 策略 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 真实环境, 仿真 | 机器人 | 否 |
| 38 | [RoboInspector](https://arxiv.org/abs/2508.21378) | 策略 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 39 | [RoboCodeX](https://arxiv.org/abs/2402.16117) | 策略 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 40 | [ChatGPT for Robotics](https://arxiv.org/abs/2306.17582) | 策略 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 机器人 | 否 |
| 41 | [Robot Policy Code for High-Precision Tasks](https://scholar.google.com/scholar?q=%22Generating+Robot+Policy+Code%22+dexterous) | 策略 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 42 | [VoxPoser](https://arxiv.org/abs/2307.05973) | 策略 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 通用 | 否 |
| 43 | [ProgPrompt](https://arxiv.org/abs/2209.11302) | 策略 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 通用 | 否 |
| 44 | [Code as Policies](https://arxiv.org/abs/2209.07753) | 策略 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 机器人 | 否 |
| 45 | [CoRe: Collaborative Reinforcement Learning for Multi-Agent Code Generation](https://arxiv.org/abs/2605.24812) | 动作 | 多智能体, 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 软件工程 | 否 |
| 46 | [RLUF: Reinforcement Learning from User Feedback](https://arxiv.org/abs/2505.14946) | 动作, 奖励 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 人类 | 通用 | 否 |
| 47 | [WebRL: Training LLM Web Agents via Self-Evolving Online Curriculum Reinforcement Learning](https://arxiv.org/abs/2411.02337) | 动作 | 闭环调整, 进化搜索 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 网页 | 否 |
| 48 | [Tool-R0: Self-Evolving LLM Agents for Tool-Learning from Zero Data](https://arxiv.org/abs/2602.21320) | 动作 | 进化搜索, 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 49 | [UI-TARS: Pioneering Automated GUI Interaction with Native Agents](https://arxiv.org/abs/2501.12326) | 动作 | 单次生成 | 权重训练 | 运行时全冻结 | 验证反馈 | 不适用 | 图形界面 | 否 |
| 50 | [SWEET-RL: Training Multi-Turn LLM Agents on Collaborative Tasks](https://arxiv.org/abs/2503.15478) | 动作 | 多智能体 | 权重训练 | 采集数据＋训练 | 验证反馈 | 模型 | 软件工程 | 否 |
| 51 | [Socratic-SWE: Self-Evolving Coding Agents via Trace-Driven Evolution](https://arxiv.org/abs/2606.07412) | 动作 | 闭环调整 | 权重训练 | 只采集数据，不训练 | 数据飞轮 | 符号 | 软件工程 | 否 |
| 52 | [Reinforcement World Model Learning (RWML)](https://arxiv.org/abs/2602.05842) | 动作 | 世界模型 | 权重训练 | 采集数据＋训练 | 无反馈 | 模型 | 通用 | 否 |
| 53 | [Web Agents with World Models (WMA)](https://openreview.net/forum?id=moWiYJuSGF) | 动作 | 世界模型 | 权重训练 | 采集数据＋训练 | 无反馈 | 仿真 | 前端 | 否 |
| 54 | [ToolGen: Unified Tool Retrieval and Calling via Generation（近邻）](https://openreview.net/forum?id=XLMAMmowdY) | 动作 | 单次生成 | 权重训练 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 55 | [AgentTuning: Enabling Generalized Agent Abilities for LLMs](https://arxiv.org/abs/2310.12823) | 动作 | 闭环调整 | 权重训练 | 运行时全冻结 | 验证反馈 | 符号 | 通用 | 否 |
| 56 | [OpenHands CodeAct 2.1](https://www.openhands.dev/blog/openhands-codeact-21-an-open-state-of-the-art-software-development-agent) | 动作 | 闭环调整 | 权重训练 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 57 | [CodeActInstruct → CodeActAgent](https://huggingface.co/xingyaoww/CodeActAgent-Mistral-7b-v0.1) | 动作 | 闭环调整 | 权重训练 | 运行时全冻结 | 数据飞轮 | 符号 | 软件工程 | 否 |
| 58 | [TT-SI: Self-Improving LLM Agents with Test-Time Training](https://aclanthology.org/2026.findings-acl.462.pdf) | 动作 | 闭环调整 | 运行时适应 | 采集数据＋训练 | 验证反馈 | 模型 | 通用 | 否 |
| 59 | [Grounded Test-Time Adaptation for LLM Agents](https://arxiv.org/abs/2511.04847) | 动作 | 闭环调整 | 运行时适应 | 采集数据＋训练 | 验证反馈 | 符号 | 通用 | 否 |
| 60 | [aTTT: Agentic Test-Time Training for LLM Agents](https://arxiv.org/abs/2607.03441) | 动作 | 闭环调整 | 运行时适应 | 采集数据＋训练 | 验证反馈 | 符号 | 通用 | 否 |
| 61 | [Scaling Agent Productivity with Automated Tool Generation](https://arxiv.org/abs/2512.24615) | 动作 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 数学 | 否 |
| 62 | [H-EPM: Experience-Evolving Multi-Turn Tool-Use Agent with Hybrid Episodic-Procedural Memory](https://arxiv.org/abs/2512.07287) | 动作 | 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 63 | [WebXSkill: Skill Learning for Autonomous Web Agents](https://arxiv.org/abs/2604.13318) | 动作 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 网页 | 否 |
| 64 | [Runtime Harness Adaptation for Deterministic LLM Agents](https://arxiv.org/abs/2605.22166) | 动作 | 闭环调整 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 软件工程 | 否 |
| 65 | [PILOT in the Loop: Live Self-Improvement for Long-Horizon Agents](https://arxiv.org/abs/2608.26530) | 动作 | 闭环调整, 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号, 真实环境 | 通用 | 否 |
| 66 | [ExpeL: LLM Agents Are Experiential Learners](https://arxiv.org/abs/2308.10144) | 动作 | 技能沉淀, 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 67 | [SICA: A Self-Improving Coding Agent](https://arxiv.org/abs/2504.15228) | 动作 | 闭环调整 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 软件工程 | 是 |
| 68 | [Live-SWE-agent: Can Software Engineering Agents Self-Evolve on the Fly?](https://arxiv.org/abs/2511.13646) | 动作 | 闭环调整 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 软件工程 | 否 |
| 69 | [LATM (LLMs as Tool Makers)](https://openreview.net/forum?id=qV83K9d5WB) | 动作 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 70 | [CRAFT: Customizing LLMs by Creating and Retrieving Specialized Tools](https://arxiv.org/abs/2309.17428) | 动作 | 技能沉淀 | 机制自进化 | 运行时全冻结 | 数据飞轮 | 模型 | 通用 | 否 |
| 71 | [DynaSaur](https://arxiv.org/abs/2411.01747) | 动作 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 72 | [SkillWeaver: Web Agents can Self-Improve by Discovering and Honing Skills](https://arxiv.org/abs/2504.07079) | 动作 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 73 | [Agent Workflow Memory (AWM)](https://arxiv.org/abs/2409.07429) | 动作 | 技能沉淀, 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 前端 | 否 |
| 74 | [SWE-bench Science: Can Coding Agents Resolve Engineering Tasks in Science?](https://arxiv.org/abs/2608.19799) | 动作, 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 符号 | 软件工程 | 否 |
| 75 | [World-Model-Augmented Web Agents with Action Correction](https://arxiv.org/abs/2602.15384) | 动作 | 世界模型 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 网页 | 否 |
| 76 | [CREATOR: Tool Creation for Disentangling Abstraction and Reasoning](https://arxiv.org/abs/2305.14318) | 动作 | 技能沉淀 | 机制冻结 | 运行时全冻结 | 验证反馈 | 符号 | 通用 | 否 |
| 77 | [Is Your LLM Secretly a World Model of the Internet? (WebDreamer)](https://arxiv.org/abs/2411.06559) | 动作 | 世界模型 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 网页 | 否 |
| 78 | [LATS（近邻）](https://arxiv.org/abs/2310.04406) | 动作 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 79 | [CoAct-1: Computer-Using Agents with Coding as Actions](https://arxiv.org/abs/2508.03923) | 动作 | 闭环调整, 多智能体 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 图形界面 | 否 |
| 80 | [CodeAct: Executable Code Actions Elicit Better LLM Agents](https://arxiv.org/abs/2402.01030) | 动作 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 软件工程 | 否 |
| 81 | [Agent S3 / OSWorld-ACI](https://github.com/simular-ai/agent-s) | 动作 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 符号 | 前端 | 否 |
| 82 | [Self-Taught Evaluators](https://arxiv.org/abs/2408.02666) | 奖励 | 闭环调整 | 权重训练 | 采集数据＋训练 | 验证反馈 | 模型 | NLP | 是 |
| 83 | [RM-R1: Reward Modeling as Reasoning](https://arxiv.org/abs/2505.02387) | 奖励 | 闭环调整 | 权重训练 | 采集数据＋训练 | 验证反馈 | 模型 | NLP | 否 |
| 84 | [Rubric-ARM: Alternating RL for Rubric-Based Reward Modeling](https://arxiv.org/abs/2602.01511) | 奖励 | 闭环调整, 多智能体 | 权重训练 | 采集数据＋训练 | 验证反馈 | 模型 | NLP | 是 |
| 85 | [Weaver: Shrinking the Generation-Verification Gap with Weak Verifiers](https://arxiv.org/abs/2506.18203) | 奖励 | 单次生成 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 86 | [From Curiosity to Competence: How World Models Interact with the Dynamics of Exploration](https://arxiv.org/abs/2507.08210) | 奖励, 策略 | 世界模型 | 权重训练 | 采集数据＋训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 87 | [Large Reward Models: Generalizable Online Robot Reward Models](https://arxiv.org/abs/2603.16065) | 奖励 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 真实环境, 人类 | 机器人 | 否 |
| 88 | [DERL: Differentiable Evolutionary Discovery of Optimal Reward Structures](https://arxiv.org/abs/2512.13399) | 奖励 | 进化搜索 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 仿真 | 通用 | 否 |
| 89 | [Self-Rewarding Language Models](https://arxiv.org/abs/2401.10020) | 奖励 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 90 | [SER: Self-Evolved Reward Learning for LLMs](https://arxiv.org/abs/2411.00418) | 奖励 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 91 | [RM-Distiller（近邻）](https://arxiv.org/abs/2601.14032) | 奖励 | 单次生成 | 权重训练 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 92 | [Generating and Refining Dynamic Evaluation Rubrics for LLM-as-a-Judge](https://arxiv.org/abs/2605.30568) | 奖励 | 闭环调整 | 运行时适应 | 只采集数据，不训练 | 验证反馈 | 模型 | NLP | 否 |
| 93 | [Inference-Time Reward Hacking in Large Language Models](https://arxiv.org/abs/2508.08884) | 奖励 | 单次生成 | 运行时适应 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 94 | [TDRM: Smooth Reward Models with Temporal Difference for LLM Reasoning](https://openreview.net/forum?id=j2oWVgTFNX) | 奖励 | 世界模型, 闭环调整 | 机制自进化 | 运行时全冻结 | 验证反馈 | 模型 | 数学 | 否 |
| 95 | [ENPIRE: Agentic Robot Policy Self-Improvement in the Real World](https://arxiv.org/abs/2606.19980) | 奖励 | 多智能体, 闭环调整 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 真实环境 | 机器人 | 否 |
| 96 | [OpenRubrics: Scalable Synthetic Rubric Generation for Reward Modeling](https://arxiv.org/abs/2510.07743) | 奖励 | 进化搜索 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型, 人类 | NLP | 否 |
| 97 | [Autorubric: A Unifying Framework for Rubric-Based LLM Evaluation on Non-Verifiable Tasks](https://arxiv.org/abs/2603.00077) | 奖励 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | NLP | 否 |
| 98 | [AutoRubric: Rubric-Based Generative Rewards for Faithful Multimodal Reasoning](https://arxiv.org/abs/2510.14738) | 奖励 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 多模态 | 否 |
| 99 | [Rubrics as Rewards: Reinforcement Learning Beyond Verifiable Domains](https://arxiv.org/abs/2507.17746) | 奖励 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | NLP | 否 |
| 100 | [Reward Model Overoptimisation in Iterated RLHF](https://arxiv.org/abs/2505.18126) | 奖励 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 101 | [FORGE: A Multi-Agent LLM Framework for Reward Design](https://openreview.net/forum?id=Z6GStCfccl) | 奖励 | 多智能体, 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 102 | [LaRes: Evolutionary Reinforcement Learning with LLM-based Adaptive Reward Search](https://papers.nips.cc/paper_files/paper/2025/hash/21b5d3a17aa5525f30bfd2bc59ac3a48-Abstract-Conference.html) | 奖励 | 进化搜索 | 机制冻结 | 采集数据＋训练 | 验证反馈 | 仿真 | 机器人 | 否 |
| 103 | [Reward Modeling for Reinforcement Learning-Based LLM Reasoning: A Survey](https://arxiv.org/abs/2602.09305) | 奖励 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 通用 | 否 |
| 104 | [SENSEI: Semantic Exploration Guided by Foundation Models](https://arxiv.org/abs/2503.01584) | 奖励 | 世界模型 | 机制冻结 | 采集数据＋训练 | 数据飞轮 | 模型 | 机器人 | 否 |
| 105 | [REvolve: Reward Evolution with Large Language Models](https://arxiv.org/abs/2406.01309) | 奖励 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 106 | [PCGRLLM](https://arxiv.org/abs/2502.10906) | 奖励 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 仿真 | Minecraft | 否 |
| 107 | [MoRE](https://imt-atlantique.hal.science/hal-05450173/document) | 奖励 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 108 | [DrEureka](https://arxiv.org/abs/2406.01967) | 奖励 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 109 | [Eureka](https://arxiv.org/abs/2310.12931) | 奖励 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 机器人 | 否 |
| 110 | [CARD: A Large Language Model-Driven Reward Design Framework](https://arxiv.org/abs/2410.14660) | 奖励 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 111 | [Reward Design with Language Models (L2R)（近邻）](https://arxiv.org/abs/2303.00001) | 奖励 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 112 | [Text2Reward（初版）](https://arxiv.org/abs/2309.11489) | 奖励 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 仿真, 人类 | 通用 | 否 |
| 113 | [Emergent Tool Use From Multi-Agent Autocurricula](https://arxiv.org/abs/1909.07528) | 技能 | 多智能体, 进化搜索 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 仿真 | Minecraft | 否 |
| 114 | [SAGE: Skill Augmented GRPO for Self-Evolution](https://arxiv.org/abs/2512.17102) | 技能 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 115 | [DADS: Dynamics-Aware Unsupervised Discovery of Skills](https://arxiv.org/abs/1907.01657) | 技能 | 世界模型 | 权重训练 | 采集数据＋训练 | 验证反馈 | 模型 | 通用 | 否 |
| 116 | [LUCID: Latent-Skill Unified Control via Imagined Dynamics](https://arxiv.org/abs/2608.07746) | 技能 | 世界模型 | 权重训练 | 采集数据＋训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 117 | [Odyssey](https://openreview.net/forum?id=vtGLtSxtqv) | 技能 | 技能沉淀 | 权重训练 | 只采集数据，不训练 | 无反馈 | 模型 | 通用 | 否 |
| 118 | [JARVIS-1](https://arxiv.org/search/?searchtype=all&query=JARVIS-1+open-world+multi-task+agents+memory-augmented) | 技能 | 技能沉淀 | 权重训练 | 只采集数据，不训练 | 无反馈 | 模型 | 通用 | 否 |
| 119 | [DreamCoder](https://arxiv.org/abs/2006.08381) | 技能 | 技能沉淀 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 120 | [SkillFoundry: Building Self-Evolving Agent Skill Libraries](https://arxiv.org/abs/2604.03964) | 技能 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 121 | [SkillAxe: Sharpening LLM-Authored Agent Skills Through Execution Feedback](https://arxiv.org/abs/2606.10546) | 技能 | 闭环调整 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 122 | [MineEvolve: Minecraft Skills and Guardrails from Experience](https://arxiv.org/abs/2603.13131) | 技能, 约束 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | Minecraft | 否 |
| 123 | [Self-Evolving Embodied Agents via Skill-Harness Evolution](https://arxiv.org/abs/2608.11350) | 技能 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 124 | [Super Library Agent](https://arxiv.org/abs/2608.29310) | 技能 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 无反馈 | 模型 | 通用 | 否 |
| 125 | [Voyager](https://arxiv.org/abs/2305.16291) | 技能 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | Minecraft | 否 |
| 126 | [Multi-Resolution Skill Discovery for HRL Agents](https://arxiv.org/abs/2505.21410) | 技能 | 世界模型 | 机制冻结 | 运行时全冻结 | 验证反馈 | 仿真 | 机器人 | 否 |
| 127 | [CoEvoSkills: Self-Evolving Agent Skills via Co-Evolutionary Methods](https://arxiv.org/abs/2604.01687) | 技能 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 128 | [EvoSkill](https://arxiv.org/abs/2603.02766) | 技能 | 多智能体 | 机制冻结 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 129 | [LEGO-Prover](https://scholar.google.com/scholar?q=LEGO-Prover+skill+library+theorem+proving) | 技能, 研究 | 技能沉淀 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 模型 | 数学 | 否 |
| 130 | [LILO](https://arxiv.org/abs/2310.19791) | 技能 | 技能沉淀 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 模型 | 通用 | 否 |
| 131 | [Provably Safe Policy Updates in Deep Reinforcement Learning](https://arxiv.org/abs/2604.09452) | 约束 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 132 | [SafeDreamer: Safe Reinforcement Learning with World Models](https://arxiv.org/abs/2307.07176) | 约束 | 世界模型 | 权重训练 | 采集数据＋训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 133 | [Test-Time Adaptation for Generalizable Task Progress Estimation](https://arxiv.org/abs/2506.10085) | 约束 | 闭环调整 | 运行时适应 | 只训练，不采集 | 验证反馈 | 模型 | 机器人 | 否 |
| 134 | [Where LLM Agents Fail and How They Can Learn From Failures](https://arxiv.org/abs/2509.25370) | 约束, 动作 | 记忆上下文, 闭环调整 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 135 | [AIR: Improving Agent Safety through Incident Response](https://arxiv.org/abs/2602.11749) | 约束 | 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 136 | [CAPS: Constraint-Adaptive Policy Switching for Offline Safe RL](https://ojs.aaai.org/index.php/AAAI/article/view/33726) | 约束 | 闭环调整 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 137 | [Proactive Runtime Enforcement of LLM Agent Safety](https://arxiv.org/abs/2508.00500) | 约束 | 世界模型, 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 138 | [Toward Safe LLM Agents: A Survey of Specification, Verification, and Enforcement](https://arxiv.org/abs/2608.14590) | 约束 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 符号 | 通用 | 否 |
| 139 | [ToolEmu: Identifying the Risks of LLM Agents with an LLM Emulator](https://arxiv.org/abs/2309.04786) | 约束 | 世界模型 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 140 | [SafeManip: A Property-Driven Benchmark for Temporal Safety in Robotic Manipulation](https://arxiv.org/abs/2605.12386) | 约束 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 机器人 | 否 |
| 141 | [RoboGuard: Safety Guardrails for LLM-Enabled Robots](https://arxiv.org/abs/2503.07885) | 约束 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 机器人 | 否 |
| 142 | [Learning Failure Prevention Skills for Safe Robot Manipulation](https://arxiv.org/abs/2305.02807) | 约束 | 技能沉淀 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 真实环境 | 机器人 | 否 |
| 143 | [SAHOO: Monitoring Alignment Drift during RSI](https://arxiv.org/abs/2603.06333) | 约束 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 144 | [AutoSafeCoder](https://neurips.cc/virtual/2024/99390) | 约束 | 多智能体 | 机制冻结 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 145 | [AssertMiner（近邻）](https://arxiv.org/abs/2511.10007) | 约束 | 技能沉淀 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 符号 | 通用 | 否 |
| 146 | [Lisa（近邻）](https://arxiv.org/abs/2607.18711) | 约束 | 技能沉淀 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 147 | [QD 漏洞多样性搜索（近邻）](https://arxiv.org/abs/2606.00801) | 约束 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 模型 | 通用 | 否 |
| 148 | [UnitTenX（近邻）](https://arxiv.org/abs/2510.05441) | 约束 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 符号 | 通用 | 否 |
| 149 | [Property-Generated Solver](https://arxiv.org/abs/2506.18315) | 约束 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 符号 | 通用 | 否 |
| 150 | [Code-as-Monitor (CaM)](https://arxiv.org/abs/2412.04455) | 约束 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型, 仿真 | 通用 | 否 |
| 151 | [Pre-Execution Safety Gate](https://arxiv.org/abs/2604.05427) | 约束 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 机器人 | 否 |
| 152 | [Plug in the Safety Chip](https://openreview.net/pdf?id=INvxF4iQ34) | 约束 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 153 | [FlexiWorld: Learning and Planning via Flexible Action Chunks Across Multiple Time Scales](https://arxiv.org/abs/2609.35138) | 世界, 动作 | 世界模型 | 权重训练 | 采集数据＋训练 | 无反馈 | 仿真 | 机器人 | 否 |
| 154 | [SimWorld Studio: Open-Source UE5 Platform for Automatic Generation of Evolving Embodied Environments](https://arxiv.org/abs/2605.09423) | 世界 | 单次生成 | 权重训练 | 采集数据＋训练 | 验证反馈 | 仿真 | 机器人 | 否 |
| 155 | [PAN: A World Model for General Interactable Worlds via Generative Latent Prediction](https://arxiv.org/abs/2506.16616) | 世界, 策略 | 世界模型 | 权重训练 | 采集数据＋训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 156 | [Genie: Generative Interactive Environments](https://arxiv.org/abs/2402.15391) | 世界 | 单次生成 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 仿真 | 通用 | 否 |
| 157 | [Agent-World: Scaling Real-World Environment Synthesis](https://arxiv.org/abs/2604.18292) | 世界 | 世界模型, 进化搜索 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 仿真 | 通用 | 否 |
| 158 | [Agent World Model: Infinity Synthetic Environments](https://arxiv.org/abs/2602.10090) | 世界 | 单次生成 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 仿真 | 通用 | 否 |
| 159 | [Code2Worlds: Empowering Coding LLMs for 4D World Models](https://arxiv.org/abs/2602.11757) | 世界 | 单次生成 | 权重训练 | 运行时全冻结 | 验证反馈 | 仿真 | 通用 | 否 |
| 160 | [Cosmos（近邻，非代码）](https://arxiv.org/abs/2501.03575) | 世界 | 单次生成 | 权重训练 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 161 | [Code-as-World-VL](https://arxiv.org/abs/2608.27549) | 世界 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 仿真 | 通用 | 否 |
| 162 | [Memento 3: Model-Based Recursive Self-Improvement through Reflective Rulebooks](https://arxiv.org/abs/2610.11794) | 世界, 自我 | 世界模型, 记忆上下文, 闭环调整 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 是 |
| 163 | [Self-Evolving World Models for LLM Agent Planning](https://arxiv.org/abs/2606.30639) | 世界 | 闭环调整 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 164 | [Dual Digital Twin（近邻）](https://www.mdpi.com/2079-9292/14/24/4806) | 世界 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 无反馈 | 仿真 | 通用 | 否 |
| 165 | [Scaling Laws for Pre-training Agents and World Models](https://arxiv.org/abs/2411.04434) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 仿真 | 通用 | 否 |
| 166 | [A Definition and Roadmap for World Models](https://arxiv.org/abs/2607.06401) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 模型 | 通用 | 否 |
| 167 | [NeSyS: Neuro-Symbolic Synergy for Interactive World Modeling](https://arxiv.org/abs/2602.10480) | 世界 | 世界模型 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 168 | [World Model for Robot Learning: A Comprehensive Survey](https://arxiv.org/abs/2605.00080) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 仿真 | 机器人 | 否 |
| 169 | [Foundation World Models for Agents that Learn, Verify, and Plan](https://arxiv.org/abs/2602.23997) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 模型 | 通用 | 否 |
| 170 | [From Word to World: Can Large Language Models be World Models?](https://arxiv.org/abs/2512.18832) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 通用 | 否 |
| 171 | [SR-Platform](https://arxiv.org/abs/2605.14700) | 世界 | 技能沉淀, 多智能体 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 172 | [Agent2World: Learning to Generate Symbolic World Models via Adaptive Tool-Use](https://arxiv.org/abs/2512.22336) | 世界 | 世界模型, 多智能体 | 机制冻结 | 运行时全冻结 | 数据飞轮 | 模型 | 通用 | 否 |
| 173 | [PoE-World: Compositional World Modeling with Products of Experts](https://arxiv.org/abs/2505.10819) | 世界 | 世界模型 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 174 | [Generating Code World Models with LLMs (GIF-MCTS)](https://arxiv.org/abs/2405.15383) | 世界 | 世界模型 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 175 | [Executable World Models for ARC-AGI-3](https://arxiv.org/abs/2608.27549) | 世界 | 世界模型 | 机制冻结 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 176 | [Code World Models for General Game Playing](https://arxiv.org/abs/2510.04542) | 世界 | 世界模型, 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 177 | [WorldCoder: A Model-Based LLM Agent](https://arxiv.org/abs/2402.12275) | 世界 | 世界模型 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 178 | [Code as Worlds](https://arxiv.org/abs/2608.27549) | 世界 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 数据飞轮 | 仿真 | 通用 | 否 |
| 179 | [3DCodeBench](https://arxiv.org/abs/2606.01057) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 180 | [VoxelCodeBench](https://arxiv.org/abs/2604.02580) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 181 | [Code-as-Room](https://arxiv.org/abs/2605.18451) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 182 | [SceneCode](https://arxiv.org/abs/2605.19587) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 183 | [Scene Language](https://arxiv.org/search/?searchtype=all&query=Scene+Language+visual+numerical+scene+generation) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 184 | [Genesis](https://arxiv.org/abs/2502.02590) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 185 | [RoboGen](https://arxiv.org/abs/2311.01455) | 世界 | 单次生成 | 机制冻结 | 采集数据＋训练 | 无反馈 | 仿真 | 通用 | 否 |
| 186 | [Leveraging Human Revisions for Improving Text-to-Layout Generation](https://arxiv.org/abs/2405.13026) | 设计 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 人类 | 前端 | 否 |
| 187 | [BRepCLIP: Contrastive Multimodal Pretraining on BRep](https://arxiv.org/abs/2606.05515) | 设计 | 技能沉淀 | 权重训练 | 运行时全冻结 | 验证反馈 | 仿真 | CAD | 否 |
| 188 | [Generative Floor Plan Design with LLMs via Reinforcement Learning](https://arxiv.org/abs/2605.14117) | 设计 | 单次生成 | 权重训练 | 运行时全冻结 | 验证反馈 | 不适用 | 体系结构 | 否 |
| 189 | [VeriCoder: Fine-tuned RTL Generation with 125K+ Examples](https://arxiv.org/abs/2504.15659) | 设计 | 单次生成 | 权重训练 | 运行时全冻结 | 验证反馈 | 符号 | 芯片 | 否 |
| 190 | [RTLCoder: Outperforming GPT-3.5 in Design RTL Generation](https://arxiv.org/abs/2312.08617) | 设计 | 单次生成 | 权重训练 | 运行时全冻结 | 数据飞轮 | 符号 | 芯片 | 否 |
| 191 | [CAD-Recode: Reverse Engineering CAD Code from Point Clouds](https://arxiv.org/abs/2412.14042) | 设计 | 单次生成 | 权重训练 | 运行时全冻结 | 验证反馈 | 不适用 | CAD | 否 |
| 192 | [Text2CAD](https://sadilkhan.github.io/text2cad-project/) | 设计 | 单次生成 | 权重训练 | 运行时全冻结 | 证据反馈 | 不适用 | CAD | 否 |
| 193 | [Interactive Evolutionary Image Generation with Bayesian Optimization](https://research-portal.uu.nl/ws/files/235432773/Image_Generation_with_Interactive_Evolutionary_System_using_Bayesian_Optimization.pdf) | 设计 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 人类 | 通用 | 否 |
| 194 | [AssemCAD: Representative Production-Ready CAD Assemblies](https://arxiv.org/abs/2607.05123) | 设计 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 仿真 | CAD | 否 |
| 195 | [CADIR: A Cross-Backend Editable Intermediate Representation](https://arxiv.org/abs/2608.00891) | 设计 | 技能沉淀 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | CAD | 否 |
| 196 | [Large Language Models for Computer-Aided Design: A Survey](https://arxiv.org/abs/2505.08137) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | CAD | 否 |
| 197 | [Catala: A Programming Language for the Law](https://arxiv.org/abs/2103.03198) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 符号 | 法律 | 否 |
| 198 | [IFC-Based Building Design Using Large Language Models](https://arxiv.org/abs/2511.05533) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 体系结构 | 否 |
| 199 | [Text2MBL: Text-to-Code Generation for Modular Building Layouts](https://arxiv.org/abs/2509.23713) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 体系结构 | 否 |
| 200 | [Interaction2Code: How Far Are We From Automatic Interactive Webpage Generation?](https://arxiv.org/abs/2411.03292) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 前端 | 否 |
| 201 | [Web2Code: A Large-scale Webpage-to-Code Dataset and Benchmark](https://proceedings.neurips.cc/paper_files/paper/2024/file/cb66be286795d71f89367d596bf78ea7-Paper-Datasets_and_Benchmarks_Track.pdf) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 前端 | 否 |
| 202 | [Text2CAD-Bench: A Benchmark for LLM-based Text-to-CAD](https://arxiv.org/abs/2605.18430) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | CAD | 否 |
| 203 | [EvolVE: Evolutionary Search for LLM-based Verilog Generation](https://arxiv.org/abs/2601.18067) | 设计 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 芯片 | 否 |
| 204 | [CADEvolve: Creating Realistic CAD via Program Evolution](https://arxiv.org/abs/2602.16317) | 设计 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 数据飞轮 | 仿真 | CAD | 否 |
| 205 | [EvoCAD: Evolutionary CAD Code Generation with Vision Language Models](https://arxiv.org/abs/2510.11631) | 设计 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | CAD | 否 |
| 206 | [From Surrogate Modeling to Autonomous Design](https://arxiv.org/abs/2608.18279) | 设计 | 世界模型 | 机制冻结 | 运行时全冻结 | 证据反馈 | 仿真 | 通用 | 否 |
| 207 | [NeOn-GPT](https://2024.eswc-conferences.org/wp-content/uploads/2024/05/77770034.pdf) | 设计 | 多智能体 | 机制冻结 | 运行时全冻结 | 无反馈 | 模型 | 本体 | 否 |
| 208 | [NL2SHACL 基准（近邻）](https://arxiv.org/html/2608.07530v2) | 设计 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 证据反馈 | 符号 | 本体 | 否 |
| 209 | [xpSHACL](https://arxiv.org/abs/2507.08432) | 设计 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 符号 | 本体 | 否 |
| 210 | [Extended NeOn-GPT](https://journals.sagepub.com/doi/abs/10.1177/22104968261453138) | 设计 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 本体 | 否 |
| 211 | [Text-to-CAD + Visual Feedback](https://icml.cc/virtual/2025/poster/46007) | 设计 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | CAD | 否 |
| 212 | [SPIRES / OntoGPT: Structured Prompt Interrogation and Recursive Extraction of Semantics](https://arxiv.org/abs/2304.02711) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 本体 | 否 |
| 213 | [RIGOR: Retrieval-Augmented Generation of Ontologies from Relational Schemas](https://arxiv.org/abs/2506.01232) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 本体 | 否 |
| 214 | [Ontology Generation using LLMs](https://arxiv.org/abs/2503.05388) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 本体 | 否 |
| 215 | [Text-to-CadQuery](https://arxiv.org/abs/2505.06507) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 仿真 | CAD | 否 |
| 216 | [Design2Code](https://arxiv.org/abs/2403.03163) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 前端 | 否 |
| 217 | [Improving Test-Time Scaling with Adaptive Looped Transformers](https://arxiv.org/abs/2609.35748) | 推理 | 闭环调整 | 权重训练 | 只训练，不采集 | 无反馈 | 不适用 | NLP | 否 |
| 218 | [Knowing When Thinking Is Not Enough: Teaching Small Reasoning Models to Reason Beyond Their Parametric Knowledge](https://arxiv.org/abs/2609.34327) | 推理 | 闭环调整 | 权重训练 | 采集数据＋训练 | 验证反馈 | 符号 | NLP | 否 |
| 219 | [Beyond Repeated Sampling: Learning Search Policies for LLM Reasoning](https://arxiv.org/abs/2609.26704) | 推理 | 闭环调整 | 权重训练 | 采集数据＋训练 | 验证反馈 | 符号 | 数学 | 否 |
| 220 | [ReflectRL: Learning from Golden Negative Trajectories via Reflective-to-Direct Reasoning](https://arxiv.org/abs/2608.03972) | 推理 | 闭环调整 | 权重训练 | 采集数据＋训练 | 验证反馈 | 模型 | 数学 | 否 |
| 221 | [Self-Improvement of Language Models by Post-Training on Multi-Agent Debate](https://arxiv.org/abs/2509.15172) | 推理 | 多智能体 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 222 | [SimpleTIR: End-to-End Reinforcement Learning for Multi-Turn Tool-Integrated Reasoning](https://arxiv.org/abs/2509.02479) | 推理 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 数学 | 否 |
| 223 | [ReTool: Reinforcement Learning for Strategic Tool Use in LLMs](https://arxiv.org/abs/2504.11536) | 推理 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 数学 | 否 |
| 224 | [STaR: Bootstrapping Reasoning with Reasoning](https://arxiv.org/abs/2203.14465) | 推理 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 数学 | 否 |
| 225 | [rStar-Math: Small LLMs Master Math Reasoning with Self-Evolved Deep Thinking](https://arxiv.org/abs/2501.04519) | 推理 | 进化搜索 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 数学 | 否 |
| 226 | [AlphaGeometry: Solving Olympiad Geometry without Human Demonstrations](https://www.nature.com/articles/s41586-023-06747-5) | 推理 | 闭环调整 | 权重训练 | 只采集数据，不训练 | 数据飞轮 | 符号 | 数学 | 否 |
| 227 | [VPD (Visual Program Distillation)](https://www.semanticscholar.org/paper/af1c871282ec122869d03f5420ef5d9143358a91) | 推理 | 单次生成 | 权重训练 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 228 | [Test-Time Curricula for Targeted Reinforcement Learning](https://openreview.net/forum?id=HoUIYpitfo) | 推理 | 进化搜索, 闭环调整 | 运行时适应 | 采集数据＋训练 | 验证反馈 | 模型 | 数学 | 否 |
| 229 | [Test-Time Policy Adaptation for Enhanced Multi-Turn Reasoning](https://arxiv.org/abs/2509.23166) | 推理 | 闭环调整 | 运行时适应 | 采集数据＋训练 | 验证反馈 | 模型 | 数学 | 否 |
| 230 | [Test-Time Tool Evolution for Scientific Reasoning](https://arxiv.org/abs/2601.07641) | 推理 | 技能沉淀 | 运行时适应 | 只采集数据，不训练 | 验证反馈 | 符号 | 数学 | 否 |
| 231 | [Tent: Fully Test-time Adaptation by Entropy Minimization](https://arxiv.org/abs/2006.10726) | 推理 | 单次生成 | 运行时适应 | 只训练，不采集 | 验证反馈 | 模型 | 通用 | 否 |
| 232 | [TTRL: Test-Time Reinforcement Learning](https://arxiv.org/abs/2504.16084) | 推理 | 闭环调整 | 运行时适应 | 采集数据＋训练 | 验证反馈 | 模型 | 数学 | 否 |
| 233 | [Titans: Learning to Memorize at Test Time（近邻）](https://arxiv.org/abs/2501.00663) | 推理 | 单次生成 | 运行时适应 | 只训练，不采集 | 无反馈 | 不适用 | 通用 | 否 |
| 234 | [The Surprising Effectiveness of Test-Time Training for Abstract Reasoning（近邻）](https://icml.cc/virtual/2025/poster/44773) | 推理 | 单次生成 | 运行时适应 | 只训练，不采集 | 无反馈 | 不适用 | 通用 | 否 |
| 235 | [Learning to (Learn at Test Time): RNNs with Expressive Hidden States (TTT)（近邻）](https://arxiv.org/abs/2407.04620) | 推理 | 单次生成 | 运行时适应 | 只训练，不采集 | 无反馈 | 不适用 | 通用 | 否 |
| 236 | [Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366) | 推理 | 闭环调整, 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 237 | [ReasoningBank（语言形态）](https://arxiv.org/abs/2509.25140) | 推理 | 技能沉淀, 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 238 | [Improving Factuality and Reasoning in Language Models through Multiagent Debate](https://arxiv.org/abs/2305.14325) | 推理 | 多智能体 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 239 | [What Learning Algorithm is In-Context Learning? Investigations with Linear Models](https://arxiv.org/abs/2211.15661) | 推理 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 模型 | 通用 | 否 |
| 240 | [RAP: Reasoning via Planning in Language Model is Planning with World Model](https://aclanthology.org/2023.emnlp-main.507.pdf) | 推理 | 世界模型 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 241 | [MAC-Reasoner](https://aclanthology.org/2026.findings-acl.233.pdf) | 推理 | 多智能体 | 机制冻结 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 242 | [AgentGroupChat-V2](https://arxiv.org/abs/2506.15451) | 推理 | 多智能体 | 机制冻结 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 243 | [AutoQD](https://arxiv.org/abs/2506.05634) | 推理 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 模型 | 通用 | 否 |
| 244 | [Quality-Diversity through AI Feedback (QDAIF)](https://arxiv.org/abs/2310.13032) | 推理 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 模型 | 通用 | 否 |
| 245 | [Self-Debugging](https://arxiv.org/abs/2304.05128) | 推理 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 246 | [ExoViP: Step-by-Step Verification with Exoskeleton Modules](https://arxiv.org/abs/2408.02210) | 推理 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 模型 | 通用 | 否 |
| 247 | [LLM+P](https://arxiv.org/abs/2304.11477) | 推理 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 符号 | 通用 | 否 |
| 248 | [PoT (Program of Thoughts)](https://arxiv.org/abs/2211.12588) | 推理 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 249 | [PAL](https://arxiv.org/abs/2211.10435) | 推理 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 符号 | 通用 | 否 |
| 250 | [ViperGPT: Visual Inference via Python Execution for Reasoning](https://arxiv.org/abs/2303.08128) | 推理 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 符号 | 通用 | 否 |
| 251 | [VisProg: Visual Programming — Compositional Visual Reasoning without Training](https://arxiv.org/abs/2211.11559) | 推理 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 符号 | 通用 | 否 |
| 252 | [Evo^2: Evolving the Evolver through Weight-Harness Co-Evolution](https://arxiv.org/abs/2610.13025) | 自我 | 进化搜索, 闭环调整 | 递归自我改进 | 采集数据＋训练 | 数据飞轮 | 符号 | 软件工程 | 是 |
| 253 | [RSI-Anything: Unlocking Recursive Self-Improvement with World Models](https://arxiv.org/abs/2610.13912) | 自我, 世界 | 世界模型, 闭环调整 | 递归自我改进 | 采集数据＋训练 | 数据飞轮 | 模型 | 通用 | 是 |
| 254 | [RRSI: Regularized Recursive Self-Improvement of Agent Harnesses](https://arxiv.org/abs/2609.24972) | 自我 | 进化搜索, 闭环调整 | 递归自我改进 | 只采集数据，不训练 | 数据飞轮 | 符号 | 通用 | 是 |
| 255 | [SoL-Pi: Recursively Scaling Auto-Research Loops for Efficient Agent Harness](https://arxiv.org/abs/2609.20519) | 自我, 研究 | 进化搜索, 闭环调整 | 递归自我改进 | 只采集数据，不训练 | 数据飞轮 | 符号 | 软件工程 | 是 |
| 256 | [MetaRSI-v1: A Meta-Recursive Self-Improving System for Recursive Self-Improving Systems Themselves](https://arxiv.org/abs/2609.06396) | 自我, 研究 | 闭环调整, 进化搜索, 记忆上下文 | 递归自我改进 | 采集数据＋训练 | 数据飞轮 | 符号 | 通用 | 是 |
| 257 | [Agent0: Curriculum and Executor Agents Co-Evolve from Zero Data](https://arxiv.org/abs/2511.16043) | 自我 | 多智能体 | 递归自我改进 | 采集数据＋训练 | 数据飞轮 | 模型 | 通用 | 是 |
| 258 | [Darwin Gödel Machine: Open-Ended Evolution of Self-Improving Agents (DGM)](https://arxiv.org/abs/2505.22954) | 自我 | 进化搜索, 技能沉淀 | 递归自我改进 | 只采集数据，不训练 | 数据飞轮 | 符号 | 软件工程 | 是 |
| 259 | [Aspire: Can Models Self-Evolve from Vague Goals?](https://arxiv.org/abs/2608.31111) | 自我 | 闭环调整 | 权重训练 | 采集数据＋训练 | 验证反馈 | 符号 | NLP | 是 |
| 260 | [AtomMem: Learnable Dynamic Agentic Memory with Atomic Memory Operation](https://arxiv.org/abs/2601.08323) | 自我 | 记忆上下文 | 权重训练 | 采集数据＋训练 | 验证反馈 | 模型 | 通用 | 否 |
| 261 | [rLLM: Continual Learning via Real-Time RL for Agents](https://rllm-project.com/post.html?post=realtime_rl.md) | 自我 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 262 | [Flying Serving: On-the-Fly Parallelism Switching for LLM Serving](https://arxiv.org/abs/2602.22593) | 自我 | 单次生成 | 权重训练 | 运行时全冻结 | 验证反馈 | 符号 | 通用 | 否 |
| 263 | [Rollout-Training Co-Design for Efficient LLM-Based Multi-Agent RL](https://arxiv.org/abs/2602.09578) | 自我 | 多智能体 | 权重训练 | 采集数据＋训练 | 验证反馈 | 符号 | 通用 | 否 |
| 264 | [On-Policy Replay for Continual Supervised Fine-Tuning](https://arxiv.org/abs/2605.29495) | 自我 | 闭环调整, 记忆上下文 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 265 | [CLaaS: Continual Learning as a Service for Deployed Agents](https://arxiv.org/abs/2606.05559) | 自我 | 单次生成 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 266 | [EvoHarness-RL: Learning Self-Evolving Runtime Harness](https://arxiv.org/abs/2608.05446) | 自我 | 进化搜索 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 267 | [FlowBalance: Verifier-Grounded Self-Improvement from On-Policy Reasoning Experience](https://arxiv.org/abs/2609.03241) | 自我, 推理 | 闭环调整, 记忆上下文 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 数学 | 否 |
| 268 | [SCOPE: Data-Free Self-Play for Open-Ended Task Co-Evolution](https://arxiv.org/abs/2608.19197) | 自我 | 进化搜索 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 269 | [Mem-α: Learning Memory Construction via Reinforcement Learning](https://openreview.net/forum?id=dm42omwep1) | 自我 | 记忆上下文 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 270 | [Memory-R1: Enhancing LLM Agents to Manage and Utilize External Memory via RL](https://arxiv.org/abs/2508.19828) | 自我 | 记忆上下文, 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 271 | [SDRL: Prepare Reasoning Language Models for Multi-Agent Settings](https://arxiv.org/abs/2601.22297) | 自我 | 单次生成 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 数学 | 否 |
| 272 | [RAGEN: Understanding Self-Evolution in LLM Agents via Multi-Turn RL](https://arxiv.org/abs/2504.20073) | 自我 | 闭环调整 | 权重训练 | 采集数据＋训练 | 验证反馈 | 模型 | 通用 | 否 |
| 273 | [RISE: Recursive Introspection — Teaching Language Model Agents How to Self-Improve](https://arxiv.org/abs/2407.18219) | 自我 | 闭环调整 | 权重训练 | 运行时全冻结 | 数据飞轮 | 模型 | 通用 | 否 |
| 274 | [RISE: Recursive Improvement via Self-Extrapolating Policy Distillation](https://arxiv.org/abs/2609.05295) | 自我 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 通用 | 是 |
| 275 | [AgentDistill](https://arxiv.org/abs/2506.14728) | 自我 | 单次生成 | 权重训练 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 276 | [Agent Distillation](https://neurips.cc/virtual/2025/poster/117657) | 自我 | 多智能体 | 权重训练 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 277 | [AgentArk](https://arxiv.org/abs/2602.03955) | 自我 | 多智能体 | 权重训练 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 278 | [FlowReasoner](https://arxiv.org/abs/2504.15257) | 自我 | 多智能体 | 权重训练 | 运行时全冻结 | 数据飞轮 | 模型 | 通用 | 否 |
| 279 | [Self-Adapting Language Models (SEAL)](https://arxiv.org/abs/2506.10943) | 自我 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 通用 | 是 |
| 280 | [Continual Learning, Not Training: Online Adaptation for Deployed Agents](https://arxiv.org/abs/2511.01093) | 自我, 动作 | 闭环调整, 记忆上下文 | 运行时适应 | 采集数据＋训练 | 验证反馈 | 模型 | 通用 | 否 |
| 281 | [MemRL: Self-Evolving Agents via Runtime Non-Parametric Reinforcement Learning on Memory](https://arxiv.org/abs/2601.03192) | 自我 | 记忆上下文, 闭环调整 | 运行时适应 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 282 | [RSI Agent: Autonomous Exploration for Recursive Self-improvement in New Environments](https://arxiv.org/abs/2609.15364) | 自我 | 多智能体, 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 图形界面 | 否 |
| 283 | [MemCodex: Self-Programming Hierarchical Memory for Language Agents](https://arxiv.org/abs/2609.39765) | 自我 | 记忆上下文, 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 是 |
| 284 | [Observability-Driven Automatic Evolution of Coding Agents](https://arxiv.org/abs/2604.25850) | 自我 | 闭环调整 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 软件工程 | 否 |
| 285 | [Retrospective Harness Optimization: Improving LLM Agents via Self-Preference over Trajectory](https://arxiv.org/abs/2606.05922) | 自我 | 闭环调整, 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 软件工程 | 否 |
| 286 | [The Last Harness You Will Ever Build: Evolution Agent Modifies Harness End-to-End](https://arxiv.org/abs/2604.21003) | 自我 | 进化搜索, 闭环调整 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 软件工程 | 否 |
| 287 | [Worth Remembering: Surprise-Gated Robot Episodic Memory via World Model Loss](https://arxiv.org/abs/2606.03787) | 自我, 世界 | 记忆上下文, 世界模型 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 机器人 | 否 |
| 288 | [Agentic Context Engineering (ACE): Evolving Contexts for Long-Horizon Agents](https://arxiv.org/abs/2510.04618) | 自我 | 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 软件工程 | 否 |
| 289 | [A-MEM: Agentic Memory for LLM Agents](https://arxiv.org/abs/2502.12110) | 自我 | 记忆上下文, 进化搜索 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 290 | [Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory](https://arxiv.org/abs/2504.19413) | 自我 | 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 291 | [EvolveMem: Self-Evolving Memory Architecture](https://arxiv.org/abs/2605.13941) | 自我 | 闭环调整, 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 292 | [MemSkill: Learning and Evolving Memory Skills for Self-Evolving LLM Agents](https://arxiv.org/abs/2602.02474) | 自我 | 技能沉淀, 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 293 | [Meta-Harness: End-to-End Optimization of Model Harnesses](https://arxiv.org/abs/2603.28052) | 自我 | 闭环调整, 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 是 |
| 294 | [MetaSkill-Evolve: Two-Timescale Skill and Meta-Skill Loops](https://arxiv.org/abs/2607.05297) | 自我 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 295 | [STOP: Recursively Self-Improving Scaffolding](https://arxiv.org/abs/2310.02304) | 自我 | 闭环调整 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 是 |
| 296 | [Promptbreeder: Self-Referential Evolution of Prompts](https://arxiv.org/abs/2309.16797) | 自我 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 是 |
| 297 | [Gödel Agent: A Self-Referential Agent Framework for Recursive Self-Improvement](https://arxiv.org/abs/2410.04444) | 自我 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 是 |
| 298 | [EvoPrompt: Connecting LLMs with Evolutionary Algorithms](https://arxiv.org/abs/2309.08532) | 自我 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 299 | [GEPA: Reflective Prompt Evolution Can Outperform Reinforcement Learning](https://arxiv.org/abs/2507.19457) | 自我 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 300 | [AgentSquare: Automatic LLM Agent Search in Modular Design Space](https://arxiv.org/abs/2410.06153) | 自我 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 301 | [EvoAgent: Towards Automatic Multi-Agent Generation](https://arxiv.org/abs/2406.14228) | 自我 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 302 | [GPTSwarm: Language Agents as Optimizable Graphs](https://arxiv.org/abs/2402.16823) | 自我 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 303 | [AFlow: Automating Agentic Workflow Generation](https://arxiv.org/abs/2410.10762) | 自我 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 304 | [Automated Design of Agentic Systems (ADAS / Meta Agent Search)](https://arxiv.org/abs/2408.08435) | 自我 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 305 | [DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines](https://arxiv.org/abs/2310.03714) | 自我 | 闭环调整 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 306 | [TextGrad: Automatic “Differentiation” via Text](https://arxiv.org/abs/2406.07496) | 自我 | 闭环调整 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 307 | [AgentVerse: Dynamic Multi-Agent Collaboration with Emergent Team Composition](https://arxiv.org/abs/2308.10848) | 自我 | 多智能体 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 308 | [Agent Lightning: Train ANY AI Agents with Reinforcement Learning](https://arxiv.org/abs/2508.03680) | 自我 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 符号 | 通用 | 否 |
| 309 | [Next-Generation Agentic Reinforcement Learning Systems](https://arxiv.org/abs/2607.01120) | 自我 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 模型 | 通用 | 否 |
| 310 | [Deployed Reinforcement Learning should be Continual](https://arxiv.org/abs/2606.04029) | 自我 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 311 | [LMAC: LLM-Guided Communication for Cooperative Multi-Agent RL](https://arxiv.org/abs/2605.18077) | 自我 | 多智能体 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 312 | [HarnessDev: Can LLMs Create and Evolve Their Own Agent Harness?](https://arxiv.org/abs/2609.01437) | 自我 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 符号 | 软件工程 | 否 |
| 313 | [SwarmSys: Decentralized Swarm-Inspired Multi-Agent Reasoning](https://arxiv.org/abs/2510.10047) | 自我 | 多智能体 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 314 | [Context Engineering: From Prompts to Corporate Multi-Agent Architecture](https://arxiv.org/abs/2603.09619) | 自我 | 记忆上下文 | 机制冻结 | 运行时全冻结 | 证据反馈 | 模型 | 通用 | 否 |
| 315 | [HIMM: Human-Inspired Long-Term Memory Modeling for Embodied Agents](https://arxiv.org/abs/2602.15513) | 自我 | 记忆上下文 | 机制冻结 | 只采集数据，不训练 | 数据飞轮 | 模型 | 机器人 | 否 |
| 316 | [MemGPT: Towards LLMs as Operating Systems](https://arxiv.org/abs/2310.08560) | 自我 | 记忆上下文 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 317 | [Scaling Self-Evolving Agents via Parametric Memory](https://arxiv.org/abs/2606.04536) | 自我 | 闭环调整, 记忆上下文 | 机制冻结 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 318 | [Sleep-time Compute: Beyond Inference Scaling at Test-time](https://arxiv.org/abs/2504.13171) | 自我 | 技能沉淀, 记忆上下文 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 319 | [Gödel Machine: Self-Referential Optimal Problem Solvers](https://arxiv.org/abs/cs/0309048) | 自我 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 数学 | 否 |
| 320 | [The Introspection Threshold for Recursive Self-Improvement](https://arxiv.org/abs/2607.04277) | 自我 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 通用 | 否 |
| 321 | [Recursive Self-Improvement in AI: From Bounded Self-Refinement to Autonomous Research Loops](https://arxiv.org/abs/2607.07663) | 自我 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 通用 | 否 |
| 322 | [A Dynamic LLM-Powered Agent Network for Task-Oriented Collaboration (DyLAN)](https://arxiv.org/abs/2310.02170) | 自我 | 多智能体 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 323 | [Search Self-play: Pushing the Frontier of Agent Capability without Supervision](https://arxiv.org/abs/2510.18821) | 研究 | 进化搜索 | 递归自我改进 | 采集数据＋训练 | 验证反馈 | 真实环境 | 网页 | 是 |
| 324 | [Machines That Accelerate Machine-Making: A Research Agenda for Human-Demand-Guided Physical Recursive Self-Improvement](https://www.datafluxdynamics.ltd/research/machines-that-accelerate-machine-making.pdf) | 研究, 策略 | 单次生成 | 递归自我改进 | 运行时全冻结 | 数据飞轮 | 符号 | 通用 | 是 |
| 325 | [Absolute Zero: Reinforced Self-play Reasoning with Zero Data (AZR)](https://arxiv.org/abs/2505.03335) | 研究 | 进化搜索 | 递归自我改进 | 采集数据＋训练 | 无反馈 | 模型 | 通用 | 是 |
| 326 | [IdeaScientist: Orchestrating Agents for Grounded Scientific Ideation](https://arxiv.org/abs/2610.04074) | 研究 | 多智能体 | 权重训练 | 采集数据＋训练 | 验证反馈 | 模型 | 通用 | 否 |
| 327 | [From Self-Evolving Synthetic Data to Verifiable-Reward RL for Multi-Turn Tool-Using Agents](https://arxiv.org/abs/2601.22607) | 研究, 自我 | 闭环调整, 进化搜索 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 328 | [MatBrain: Collaborative Dual-Model Agent for Autonomous Crystal Materials Research](https://arxiv.org/abs/2604.11540) | 研究, 设计 | 多智能体 | 权重训练 | 采集数据＋训练 | 验证反馈 | 符号 | 通用 | 否 |
| 329 | [SPIRAL: Self-Play on Zero-Sum Games Incentivizes Reasoning](https://arxiv.org/abs/2506.24119) | 研究, 自我 | 进化搜索, 多智能体 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 数学 | 否 |
| 330 | [Frontis-MA1: Training an AI4AI Model towards Recursive Self-Improvement in Machine Learning Engineering](https://arxiv.org/abs/2607.28568) | 研究 | 进化搜索, 闭环调整 | 权重训练 | 只采集数据，不训练 | 数据飞轮 | 符号 | 软件工程 | 否 |
| 331 | [Scaling Self-Play with Self-Guidance in Lean4](https://arxiv.org/abs/2604.20209) | 研究 | 进化搜索 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 数学 | 否 |
| 332 | [STP: Self-play LLM Theorem Provers with Iterative Conjecturing and Proving](https://arxiv.org/abs/2502.00212) | 研究 | 进化搜索 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 数学 | 否 |
| 333 | [RefineCoder](https://arxiv.org/abs/2502.09183) | 研究 | 闭环调整 | 权重训练 | 采集数据＋训练 | 无反馈 | 符号 | 通用 | 否 |
| 334 | [DreamProver](https://arxiv.org/abs/2604.26311) | 研究 | 技能沉淀 | 权重训练 | 只采集数据，不训练 | 无反馈 | 模型 | 通用 | 否 |
| 335 | [EvoTune](https://claire-labo.github.io/EvoTune/) | 研究 | 进化搜索 | 权重训练 | 采集数据＋训练 | 无反馈 | 仿真 | 通用 | 否 |
| 336 | [Scaling Automatic Research Agents via World Models (WMRL)](https://arxiv.org/abs/2608.12564) | 研究 | 世界模型 | 权重训练 | 采集数据＋训练 | 验证反馈 | 模型 | 软件工程 | 否 |
| 337 | [Sample Efficient Generative Molecular Optimization](https://arxiv.org/abs/2602.10984) | 研究 | 闭环调整 | 运行时适应 | 只采集数据，不训练 | 验证反馈 | 模型 | 药物研发 | 否 |
| 338 | [FrugalEvo: Towards Cost-Aware LLM-Guided Program Evolution](https://arxiv.org/abs/2610.03675) | 研究 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 数学 | 否 |
| 339 | [Arbor: Toward Generalist Autonomous Research via Hypothesis-Tree Refinement](https://arxiv.org/abs/2606.11926) | 研究 | 多智能体, 闭环调整, 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 340 | [Dream-RSI: Recursive Self-Improvement through Evolving Worlds](https://github.com/zhengkid/Dream-RSI) | 研究, 自我 | 世界模型, 记忆上下文, 进化搜索 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 341 | [MLEvolve: Progressive Graph Search with Retrospective Memory](https://arxiv.org/abs/2606.06473) | 研究 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 342 | [AlphaEvolve](https://arxiv.org/abs/2506.13131) | 研究 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 无反馈 | 符号 | 软件工程 | 否 |
| 343 | [Fork-and-Flush: Escaping Idea Basins in Autoresearch Agents](https://arxiv.org/abs/2610.07447) | 研究 | 多智能体, 记忆上下文 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 344 | [Benchmark Radar: A Living Database and Search Engine for AI Benchmarks](https://arxiv.org/abs/2609.11115) | 研究 | 单次生成 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 345 | [OmniScientist: An Omni-Modal Omni-Discipline AI Scientist](https://arxiv.org/abs/2608.13558) | 研究 | 多智能体 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 真实环境 | 通用 | 否 |
| 346 | [ExplorationBench: Measuring AI Systems Exploration in Verifiable Alien Worlds](https://arxiv.org/abs/2609.30199) | 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 符号 | 通用 | 否 |
| 347 | [ScholarCatalyst: A Benchmark for Retrieving Papers That Inspire New Research](https://arxiv.org/abs/2610.02202) | 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 人类 | 通用 | 否 |
| 348 | [awesome-rubric-rewards（论文清单库）](https://github.com/chrisliu298/awesome-rubric-rewards) | 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 符号 | 通用 | 否 |
| 349 | [RubricEval: A Rubric-Level Meta-Evaluation Benchmark for LLM Judges](https://arxiv.org/abs/2603.25133) | 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | NLP | 是 |
| 350 | [AutoBencher: Towards Declarative Benchmark Construction](https://arxiv.org/abs/2407.08351) | 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 符号, 模型 | 通用 | 否 |
| 351 | [AI for Scientific Discovery is a Social Problem](https://www.cell.com/patterns/fulltext/S2666-3899(26)00006-1) | 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 模型 | 通用 | 否 |
| 352 | [Automating the Search for Artificial Life with Foundation Models](https://arxiv.org/abs/2412.17799) | 研究, 世界 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | Minecraft | 否 |
| 353 | [Autonomous Agents for Scientific Discovery: Vision and Roadmap](https://arxiv.org/abs/2510.09901) | 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 模型 | 通用 | 否 |
| 354 | [Sparks: Multi-Agent AI Model Discovers Novel Scientific Ideas](https://arxiv.org/abs/2504.19017) | 研究 | 多智能体, 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 355 | [Foundation Models for Scientific Discovery: From Paradigm Enhancement to Paradigm Transition](https://arxiv.org/abs/2510.15280) | 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 模型 | 通用 | 否 |
| 356 | [Discovery Foundation Models: Toward Open-Ended Discovery Intelligence](https://arxiv.org/abs/2609.15973) | 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 模型 | 通用 | 否 |
| 357 | [Evolutionary Discovery of RL Algorithms via LLMs](https://arxiv.org/abs/2603.28416) | 研究 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 358 | [FT-Dojo: Fine-Tuning Pipeline as an Executable Environment](https://arxiv.org/abs/2603.01712) | 研究 | 世界模型 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 359 | [AutoResearch: Insight In, Hallucination Out](https://arxiv.org/abs/2608.17906) | 研究 | 闭环调整, 多智能体 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 360 | [CodeScientist: End-to-End Semi-Automated Scientific Discovery with Code-based Experimentation](https://arxiv.org/abs/2503.22708) | 研究 | 进化搜索, 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 361 | [Towards an AI Co-Scientist](https://arxiv.org/abs/2502.18864) | 研究 | 多智能体, 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 药物研发 | 否 |
| 362 | [AI Scientist-v2](https://arxiv.org/abs/2504.08066) | 研究 | 多智能体 | 机制冻结 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 363 | [The AI Scientist](https://arxiv.org/abs/2408.06292) | 研究 | 多智能体 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 364 | [ChatDev](https://arxiv.org/abs/2307.07924) | 研究 | 多智能体 | 机制冻结 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 365 | [MetaGPT](https://arxiv.org/abs/2308.00352) | 研究 | 多智能体 | 机制冻结 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 366 | [Self-Collaboration Code Generation](https://arxiv.org/abs/2304.07590) | 研究 | 多智能体 | 机制冻结 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 367 | [Digital Red Queen](https://pub.sakana.ai/drq/) | 研究 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 仿真 | 通用 | 否 |
| 368 | [FunSearch](https://www.nature.com/articles/s41586-023-06924-6) | 研究 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 符号 | 数学 | 否 |
| 369 | [Learning to Evaluate Before Improving (AutoSciRub)](https://arxiv.org/abs/2608.31076) | 研究 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 软件工程 | 否 |
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
