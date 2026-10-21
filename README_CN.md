# Awesome Code as Agent

**中文版** | **[English](README.md)**

> 一张可导航的 3D 知识地图，收录 **428 篇论文**——LLM agent 如何用可执行代码感知、行动、学习和自我改进。覆盖 **10 个场景 × 7 个方向 × 5 层更新能力 × 4 象限运行时行为**。

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

- **2026-10-21 ——新增 43 篇（共 428 篇）**
  - harness-RSI 线加厚（Harness²、Terminal-RSI、DiscoveryRSI）；rubric×RL 会师（RARE）；自蒸馏线（OPSD、邻域 OPSD）；记忆线（Hy-Memory-30B、CarryOn）；JEPA-Anything（RSI-Anything 底座）；Self-Building Labs 与组合式机器设计（PRSI P4/P5 近邻）；RealtimeBench 活时钟评测；代码世界线（AgentGarten、WorldStream、Player-1）

- **2026-10-21 ——新增 15 篇（共 428 篇）：物理接地 3D 生成与仿真聚类**
  - PhysGaussian/3D Constitutive Gaussians/PhysDreamer（物理×3D 高斯线）、PAC-NeRF/NeuMA/PhysTwin（系统辨识与数字孪生）、Atlas3D/PhysX-3D/GaussianProperty（物理接地资产）、URDFormer/Articulate-Anything/SPARK/RoboCousin（VLM 建仿真环境）、PhyScene、Material Palette

- **2026-10-16 ——论文索引改版为 GPT-3 基线增量卡片**
  - 每张卡片按五维度（方向/更新能力/运行时行为/反馈栈/自己改自己？）给出相对最简 chatbot 问答的具体设计与增益
  - 试点 30 张卡片已上线（RSI 集群+自指+数据飞轮论文）；其余 339 篇暂列待迁移表格，全部完成后自动消失

- **2026-10-16 ——新增 26 篇（共 428 篇）**
  - **权重×harness 桥接**——[Evo²](https://arxiv.org/abs/2610.13025) 用双角色 Proposer/Reflector 协同进化模型权重与 agent harness，连「进化器本身被进化」（L4）；进化出的 harness 无需继续进化即可跨基准迁移
  - 🎯 **填上最后一块前沿空白格：世界模型 × L4**——[RSI-Anything](https://arxiv.org/abs/2610.13912)（JEPA-Anything 底座）让预测性世界模型同时选择动作与学习数据，保留更新需过兼容性检查
  - **Harness-RSI 集群成型**——[SoL-Pi](https://arxiv.org/abs/2609.20519)（NVIDIA，3.4k 星：自动研究循环递归优化 agent 自己的 harness）+ [RRSI](https://arxiv.org/abs/2609.24972)（对 harness 过拟合加正则——DGM 路线缺的机器学习 101 一课）
  - **记忆自进化加厚**——MemCodex（记忆程序开放式进化）、AtomMem（RL 训 CRUD 策略）、RSI Agent（免训练三 agent 探索）
  - **自主研究病理学**——Fork-and-Flush 的「想法盆地」（重复运行被困解空间局部区域）与 Arbor 的假设树解法
- **2026-10-15 ——新增 12 篇（共 343 篇）**
  - **自动 rubric 线入库**（RaR、Rubric-ARM、RM-R1、Self-Taught Evaluators、AutoBencher 等）——验证器库的第二条自动填充路径
  - **PRSI 纲领论文**——物理递归自我改进（P1–P5 因果位置），DFM 终点的物理世界镜像

## 论文索引（428 篇）

<!-- PAPER-INDEX:START -->
<!-- 论文索引（由 tools/gen_paper_table.js 生成，勿手改） -->

本索引的参照基线是**最简 chatbot 问答（GPT-3 模式）**：冻结模型、单轮提示→回答、无工具、无反馈、无记忆。每张卡片回答一个问题——这篇论文相对该基线引入了哪些具体设计，各带来什么增益。五个维度（方向/更新能力/运行时行为/反馈栈/自己改自己？）各一张四列子表：**tag方向**（哪一维）→ **文章中具体设计**（做了什么）→ **具体设计带来增益**（得到什么）→ **带来增益的原理**（为什么会得到，第一性解释）。设计列与增益列尽量**直接引用论文原文**（原句+一句话总结）；**原理列默认为编者推演**（论文很少自解释 why），论文自己给出机理时则引原文。无原文支撑处标「编者按」。维度语义见 [四维分类体系](#四维分类体系) 与 [附加-tag](#附加-tag)。

**进度**：已迁移卡片 32 篇 ｜ 待迁移 396 篇（暂列下方表格，全部迁移完成后表格自动消失）

### 1. [Robot-Powered Data Flywheel (RPDF)](https://arxiv.org/abs/2511.19647)

**场景**：策略 ｜ **领域**：机器人 ｜ **Oracle**：真实环境, 模型

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 闭环调整 | 原文："Robots, as embodied agents, are uniquely positioned to close this gap: they can act in physical environments to collect large-scale, real-world data that enriches FM training with precisely the examples current models lack"<br>**总结**：机器人从模型消费者变数据生产者 | 原文动机："their reliance on internet pretraining data leaves them brittle in unstructured, real-world settings. The messy, real-world data encountered during deployment (e.g. occluded or multilingual text) remains massively underrepresented"<br>**总结**：互联网数据缺的恰是部署时的"脏"数据 | **原理**：分布修复——部署环境天然生成训练分布的补集样本，机器人边干活边补齐长尾（编辑推演） |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 权重训练 | 采集数据+自动标注回流训练 FM（机制概述）<br>**总结**：— | 原文：FM 在真机相关任务上提升（数字见原文）<br>**总结**：— | **原理**：— |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 采集数据＋训练 | 部署即采集（机制概述）<br>**总结**：— | — | **原理**：— |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 数据飞轮 | 部署越多→数据越多→模型越强→部署更多（机制概述）<br>**总结**：— | — | **原理**：— |

**自己改自己？**：否

---

### 2. [DexFlyWheel](https://arxiv.org/abs/2509.23829)

**场景**：策略 ｜ **领域**：机器人 ｜ **Oracle**：真实环境, 模型

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 闭环调整 | 原文："a scalable data generation framework that employs a self-improving cycle to continuously enrich data diversity. Starting from efficient seed demonstrations warmup, DexFlyWheel expands the dataset through i[terative...]"<br>**总结**：种子演示热身→自改进循环持续扩数据 | 原文动机："diverse and high-quality datasets remain scarce. Existing data collection methods either rely on human teleoperation or require significant human engineering, or generate data with limited diversity"<br>**总结**：人工遥操贵、自动生成多样性差 | **原理**：多样性来自任务的组合爆炸——每轮成功策略成为下轮的种子，任务空间按能力半径扩张（编辑推演） |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 权重训练 | IL 初始化+残差 RL 在其上微调（原文设定，编者概述）<br>**总结**：保留演示先验、超越 IL 上限 | 原文：灵巧操纵任务性能提升（数字见原文）<br>**总结**：— | **原理**：残差参数化把"学修正量"与"学全策略"分开——小修正量梯度稳定，不冲毁演示先验（编辑推演） |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 采集数据＋训练 | 真机 rollout 即采集（机制概述）<br>**总结**：数据分布=部署分布 | — | **原理**：— |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 数据飞轮 | 原文："self-improving cycle to continuously enrich data diversity"<br>**总结**：飞轮直接写进题目 | — | **原理**：— |

**自己改自己？**：否

---

### 3. [VERITAS](https://arxiv.org/abs/2606.18247)

**场景**：策略 ｜ **领域**：通用 ｜ **Oracle**：模型, 真实环境

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 闭环调整 | 原文："a generator-verifier framework for generalist robot policies for inference-time policy steering and self-improvement. We use a pre-trained generalist robot policy as a 'generator' and pair it with a gradient-free 'visual verifier' that evaluates actions at inference time"<br>**总结**：预训策略当生成器+免梯度视觉验证器推理时评估动作 | 原文动机："Robots deployed in the real world should learn from their experience and improve over time. This requires a mechanism of practicing and learning from feedback"<br>**总结**：真机部署需要从经验改进的机制 | **原理**：视觉验证免梯度=不碰权重也能筛选动作——验证比训练便宜几个数量级，先用贵的生成、便宜的筛选（编辑推演） |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 权重训练 | 原文："verified experience is then used to improve the underlying policy"（验证经验回流训策略，机制概述）<br>**总结**：只有验证过的轨迹回流 | 原文：自改进后策略性能提升（数字见原文）<br>**总结**：推理时转向+训练自改进双收益 | **原理**：数据先过验证闸门——坏轨迹进不了训练集，数据质量单调提升（编辑推演） |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 只采集数据，不训练 | 推理时只做验证式转向，训练离线（机制概述）<br>**总结**：部署期零训练开销 | 原文："improves policy performance without additional training"（推理时转向部分）<br>**总结**：不训练也能涨分 | **原理**：推理解码时的约束满足——验证器打分当作推理期搜索的启发式，choose-best-of-N 无需梯度（编辑推演） |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 数据飞轮 | 验证过的轨迹持续回流训练（机制概述）<br>**总结**：飞轮教科书形态 | — | **原理**：— |

**自己改自己？**：否

---

### 4. [Socratic-SWE: Self-Evolving Coding Agents via Trace-Driven Evolution](https://arxiv.org/abs/2606.07412)

**场景**：动作 ｜ **领域**：软件工程 ｜ **Oracle**：符号

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 闭环调整 | 原文："a closed-loop self-evolution framework that reuses the agent's historical solving traces as a source of training signal. Rather than treating traces only as [outcomes]"<br>**总结**：历史解题痕迹复用为训练信号 | 原文（对既有合成数据的批评）："Existing synthetic data methods typically create tasks through fixed mutation or bug-injection procedures, making the resulting distributions largely independent of the agent's own weaknesses and training progress"<br>**总结**：固定变异造的题与 agent 弱点无关 | **原理**：训练数据应对准当前弱点——自己的失败痕迹天然是"恰好在能力边缘"的样本，比合成 bug 更贴最近发展区（编辑推演） |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 权重训练 | 原文：从痕迹生成针对性修复任务，闭环持续微调 agent（机制概述）<br>**总结**：痕迹→任务→训练 | 原文：自进化后 SWE 任务成功率提升（数字见原文）<br>**总结**：— | **原理**：— |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 只采集数据，不训练 | 运行时采集痕迹，训练离线（机制概述）<br>**总结**：— | — | **原理**：— |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 数据飞轮 | 痕迹→任务→训练→更强 agent→更佳痕迹（机制概述）<br>**总结**：— | — | **原理**：— |

**自己改自己？**：否

---

### 5. [CodeActInstruct → CodeActAgent](https://huggingface.co/xingyaoww/CodeActAgent-Mistral-7b-v0.1)

**场景**：动作 ｜ **领域**：软件工程 ｜ **Oracle**：符号

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 闭环调整 | 原文（项目页，编者按）：7139 条执行反馈下的自纠轨迹指令微调——把"发现错误→改正→重试"的行为蒸馏进权重<br>**总结**：自纠行为权重化 | 项目自述：7B 达到匹敌 5-10× 参数量大模型的效果（数字为项目自报）<br>**总结**：小模型+自纠≈大模型 | **原理**：自纠是大模型涌现的行为——显式收集自纠轨迹微调，让 7B 免涌现直接获得该行为（编辑推演） |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 权重训练 | 7139 条自纠轨迹 SFT（项目设定）<br>**总结**：一次性蒸馏 | — | **原理**：— |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 运行时全冻结 | 部署时无采集无训练，自纠能力已在权重（项目设定）<br>**总结**：零推理开销 | — | **原理**：— |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 数据飞轮 | 执行反馈产生自纠数据集（一次性沉淀，项目设定）<br>**总结**：数据集开源 | — | **原理**：— |

**自己改自己？**：否

**论文中的其他发现**：本条目为模型卡而非论文，引语来自项目页自述。

---

### 6. [Self-Taught Evaluators](https://arxiv.org/abs/2408.02666)

**场景**：奖励 ｜ **领域**：NLP ｜ **Oracle**：模型

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 闭环调整 | 原文："an iterative self-training algorithm... starting from a small seed set of instructions, responses are generated, and pairs of responses are compared"<br>**总结**：合成响应对→偏好推理→训练判官，循环 | 原文动机："the standard approach is to collect a large amount of human preference judgments over model responses, which is costly and the data becomes stale as models improve"<br>**总结**：人类偏好贵且随模型进步过时 | **原理**：判官随被评者共同进化才不过时——静态 RM 在模型变强后系统性失准（编辑推演） |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 权重训练 | 原文："improve a strong LLM (Llama3-70B-Instruct) from 75.4 to 88.3 (88.7 with...) [on RewardBench]"<br>**总结**：自训判官 75.4→88.3 | 原文："Without any labeled preference data"<br>**总结**：零标注达成，匹敌人类标注 RM | **原理**：偏好判断能力已潜伏在强模型里——自训练只是把这种潜能对齐到评测任务格式（编辑推演） |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 采集数据＋训练 | 合成数据即产即用（机制概述）<br>**总结**：数据成本≈推理成本 | — | **原理**：— |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 验证反馈 | 原文：生成"analysis of the differences between the responses"作为偏好理由（机制概述）<br>**总结**：每个标签带推理链 | — | **原理**：推理链=标签的显式理由，错标签可定位到错误推理步（编辑推演） |

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 是 | 判官给自己造训练数据（机制概述）<br>**总结**：评测器自指 | — | **原理**：自指风险=偏好漂移；缓解=从强种子模型的相对判断起步，锚在模型间一致性而非绝对真理（编辑推演） |

---

### 7. [Rubric-ARM: Alternating RL for Rubric-Based Reward Modeling](https://arxiv.org/abs/2602.01511)

**场景**：奖励 ｜ **领域**：NLP ｜ **Oracle**：模型

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 闭环调整 | 原文："jointly optimizes a rubric generator and a judge using reinforcement learning from preference feedback"<br>**总结**：rubric 生成器与判官交替 RL、轮流进化 | 原文定位（对既有方法）："Unlike existing methods that rely on st[atic...]"——静态 rubric 不可进化<br>**总结**：标准与执行共演 | **原理**：rubric 与判官是评价体系的两半——固定一半优化另一半只能到局部最优，交替优化逼近联合最优（编辑推演） |
| 多智能体 | 生成器 πr 与判官 πj 职责分离（原文构造）<br>**总结**：分工使各自目标清晰 | — | **原理**：职责分离让奖励归因明确——判官的错与标准的错可分开追责（编辑推演） |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 权重训练 | 两者都从偏好反馈被 RL 训练（原文构造）<br>**总结**：双角色都进权重层 | 原文："achieving a +4.7% average gain on reward-modeling [benchmarks]"（9 个奖励建模+6 个策略基准）<br>**总结**：+4.7% 平均增益 | **原理**：交替训练类似坐标上升——每次固定一方优化另一方，单调可证地爬坡（编辑推演） |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 采集数据＋训练 | 偏好对训练中采集消费（机制概述）<br>**总结**：— | — | **原理**：— |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 验证反馈 | 判官按 rubric 逐条核对（机制概述）<br>**总结**：结构化评分 | — | **原理**：rubric 把"好不好"拆成可逐项核对的谓词——评价从整体印象变成可审计清单（编辑推演） |

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 是 | 判官给生成器打分，两者互为训练信号（机制概述）<br>**总结**：回答"谁给判官打分" | — | **原理**：裁判的裁判=偏好数据本身——外部偏好锚定交替优化的不动点，防止共谋退化（编辑推演） |

---

### 8. [Self-Rewarding Language Models](https://arxiv.org/abs/2401.10020)

**场景**：奖励 ｜ **领域**：通用 ｜ **Oracle**：模型

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 闭环调整 | 原文："the language model itself is used via LLM-as-a-Judge prompting to provide its own rewards during training"<br>**总结**：LLM 当自己的裁判发奖励 | 原文动机："Current approaches commonly train reward models from human preferences, which may then be bottlenecked by human performance level, and secondly these separate frozen reward models cannot then learn to improve during LLM training"<br>**总结**：人类偏好封顶+冻结 RM 无法共进 | **原理**：奖励来源与被训者同一模型——奖励随模型进步水涨船高，绕开人类天花板与 RM 过时两个瓶颈（编辑推演） |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 权重训练 | 原文："during Iterative DPO training that not only does instr[uction following improve]"——自奖励数据经迭代 DPO 训练（机制概述）<br>**总结**：自奖励+迭代 DPO | 原文：指令跟随与对话质量多轮持续提升（数字见原文）<br>**总结**：— | **原理**：DPO 免显式 RM——偏好对直接进策略，自裁判的输出恰好就是偏好对（编辑推演） |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 采集数据＋训练 | — | — | **原理**：— |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 数据飞轮 | 每轮自奖励数据训练更强的自裁判（机制概述）<br>**总结**：— | — | **原理**：— |

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 是 | 原文（编者按）：裁判、数据来源、被训练者是同一个模型<br>**总结**：自指的经典形态 | — | **原理**：自指失效模式=自我偏好漂移（自己偏爱自己的风格）；原文缓解：裁判时以指令跟随准则为锚而非自由偏好（编辑推演） |

---

### 9. [SER: Self-Evolved Reward Learning for LLMs](https://arxiv.org/abs/2411.00418)

**场景**：奖励 ｜ **领域**：通用 ｜ **Oracle**：模型

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 闭环调整 | 原文："As language models improve, human input may become less effective in further enhancing their perfor[mance]"——RM 需自我改进以跟上模型（动机）<br>**总结**：奖励模型必须与被奖励者同步进化 | 原文动机："A core challenge in employing RLHF lies in training a reliable reward model (RM), which relies on high-quality labels typically provided by human experts or advanced AI system. These methods can be costly and may introduce biases"<br>**总结**：RM 依赖贵且有偏的高质量标注 | **原理**：静态 RM 会成为策略天花板——模型超过 RM 判断力后，RM 奖励的是"像旧模型"而非"更好"（编辑推演） |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 权重训练 | 原文机制：RM 自生成额外训练数据迭代改进自身，改进的奖励经 PPO 优化策略（机制概述）<br>**总结**：RM 自产数据自改进 | 原文：策略性能随 RM 迭代轮数持续提升（数字见原文）<br>**总结**：— | **原理**：— |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 采集数据＋训练 | — | — | **原理**：— |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 数据飞轮 | RM 自我改进飞轮（题目设定）<br>**总结**：— | — | **原理**：— |

**自己改自己？**：否

---

### 10. [DreamCoder](https://arxiv.org/abs/2006.08381)

**场景**：技能 ｜ **领域**：通用 ｜ **Oracle**：模型

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 技能沉淀 | 原文："It builds expertise by creating programming languages for expressing domain concepts, together with neural networks to guide the search for programs within these languages"<br>**总结**：技能=领域概念的语言+引导搜索的神经网 | 原文动机："Expert problem-solving is driven by powerful languages for thinking about problems and their solutions. Acquiring expertise means learning these languages"<br>**总结**：专长=学会思维语言 | **原理**：语言决定可表达解的空间——抽象出的 DSL 让旧解成为新解的原语，组合深度随库增长（编辑推演） |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 权重训练 | 原文："A 'wake-sleep' learning algorithm alternately extends the language with new symbolic abstractions and trains the neural n[etworks]"<br>**总结**：wake-sleep 交替：扩库↔训识别网络 | 原文：跨领域从少样本到通用的问题求解提升（数字见原文）<br>**总结**：技能库复用加速新任务学习 | **原理**：识别网络把"程序怎么搜"变成"程序长什么样"的先验——搜索从盲枚举变有引导采样，指数空间被先验压扁（编辑推演） |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 采集数据＋训练 | 每轮解题经验训练识别网络（机制概述）<br>**总结**：经验→先验 | — | **原理**：— |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 数据飞轮 | 技能库与识别网络共进化（机制概述）<br>**总结**：— | — | **原理**：— |

**自己改自己？**：否

**论文中的其他发现**：编者按：识别网络在环内训练——L4 形态技能沉淀的鼻祖（DreamCoder, 2020）。

---

### 11. [Code as Worlds](https://arxiv.org/abs/2608.27549)

**场景**：世界 ｜ **领域**：通用 ｜ **Oracle**：仿真

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 闭环调整 | 原文："a paradigm that represents physical worlds through executable world representations. By expressing physical composition, dynamic evolution, [and governing rules] as code"<br>**总结**：物理世界=可执行世界表示（EWR），组成/演化/规则都写成代码 | 原文动机："they often lack explicit representations of the underlying mechanisms—such as object states, physical parameters, and governing dynamics—needed for reliably reasoning how the world evolves"<br>**总结**：VLM 缺显式机制表示 | **原理**：代码=可执行的世界模型——预测靠运行而非回归，机制透明可干预（编辑推演） |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 权重训练 | EWR 自动生成精确标注 → SFT+GRPO 训 VLM（机制概述）<br>**总结**：代码产出数据训模型 | 库内数字：QuantiPhy 58.6 超 Gemini-3.1-Flash（自报）<br>**总结**：小模型超商业大模型 | **原理**：标注来自世界代码的执行——真值无需人工，标注量只受算力限制（编辑推演） |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 采集数据＋训练 | 世界代码执行产生训练数据（机制概述）<br>**总结**：— | — | **原理**：— |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 数据飞轮 | 世界代码生成数据训模型，模型再改进世界代码（机制概述）<br>**总结**：— | — | **原理**：— |

**自己改自己？**：否

---

### 12. [rStar-Math: Small LLMs Master Math Reasoning with Self-Evolved Deep Thinking](https://arxiv.org/abs/2501.04519)

**场景**：推理 ｜ **领域**：数学 ｜ **Oracle**：符号

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 进化搜索 | 原文："exercising 'deep thinking' through Monte Carlo Tree Search (MCTS), where a math policy SLM performs test-time search guided by an SLM-based process reward model"<br>**总结**：MCTS 深度思考+小模型过程奖励引导 | 原文（定位）："small language models (SLMs) can rival or even surpass the math reasoning capability of OpenAI o1, without distillation from superior models"<br>**总结**：小模型不蒸馏对抗 o1 级推理 | **原理**：MCTS 把"一步答对"换成"搜索后答对"——推理算力换模型参数，7B 借搜索树够到 100B+ 的推理质量（编辑推演） |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 权重训练 | 原文："a novel code-augmented CoT data synthesis method, which performs extensive MCTS rollouts to generate step-by-step verified r[easoning]"（三大创新之一）<br>**总结**：MCTS rollout 产逐步验证数据训双 SLM | 原文：奥数级基准大幅提升（数字见原文，含 MATH/GSM8K 等）<br>**总结**：小模型奥数级 | **原理**：过程奖励模型学会"这步对不对"——步级监督比结果级监督的信用分配密度高一个量级（编辑推演） |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 采集数据＋训练 | — | — | **原理**：— |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 数据飞轮 | 更好的策略产生更好轨迹，训出更好过程奖励（机制概述）<br>**总结**：— | — | **原理**：— |

**自己改自己？**：否

---

### 13. [AlphaGeometry: Solving Olympiad Geometry without Human Demonstrations](https://www.nature.com/articles/s41586-023-06747-5)

**场景**：推理 ｜ **领域**：数学 ｜ **Oracle**：符号

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 闭环调整 | 原文（Nature 摘要，编者按）：神经语言模型提议辅助构图，符号演绎引擎严格推导，失败再提议<br>**总结**：神经提点子、符号管证明、闭环互喂 | 原文自报：IMO 几何基准 25/30（金牌水准）、零人类示范<br>**总结**：无人类示范达金牌水准 | **原理**：神经网络擅长猜"往哪添线"（无限解空间的启发式），符号引擎擅长"从前提走到结论"（有限规则的穷举）——闭环让两者各做擅长的一半（编辑推演） |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 权重训练 | 原文自报：符号引擎生成 1 亿条合成定理与证明训练语言模型<br>**总结**：引擎造数据训网络 | — | **原理**：符号引擎可无限生成带真值标注的题库——数据稀缺被算力稀缺替换（编辑推演） |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 只采集数据，不训练 | 解题时纯推理（DD+AR 演绎），训练离线（机制概述）<br>**总结**：— | — | **原理**：— |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 数据飞轮 | 引擎产数据训提议器，提议器反哺引擎搜索（机制概述）<br>**总结**：— | — | **原理**：— |

**自己改自己？**：否

---

### 14. [Evo^2: Evolving the Evolver through Weight-Harness Co-Evolution](https://arxiv.org/abs/2610.13025)

**场景**：自我 ｜ **领域**：软件工程 ｜ **Oracle**：符号

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 进化搜索 | 原文："a unified dual-role pipeline that a single policy serves as both a Proposer, which writes harness edits, and a Reflector, which diagnoses their effects and guides revision"<br>**总结**：单策略双角色——Proposer 写编辑、Reflector 诊断引导 | 原文："Polyglot 82.1%... compared with 62.6%... for the strongest baseline"（原文数字）<br>**总结**：Polyglot 82.1% vs 基线 62.6% | **原理**：提议与反思分离=生成与检验分工——同一模型两个视角互相制衡，避免单角色的自我确认（编辑推演） |
| 闭环调整 | 原文："harness modifications and their execution outcomes guide the training of both the Proposer and the Reflector"<br>**总结**：编辑的执行结果反过来训练两个角色 | 原文："48.3% on SWE-bench Verified, compared with... 41.0% for the strongest baseline"<br>**总结**：SWE-bench Verified 48.3% vs 41.0% | **原理**：权重更新以 harness 变化为条件——两层的时序错位（先改代码后训权重）被消除（编辑推演） |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 递归自我改进 | 原文："EvoTIDE, a training pipeline that recovers usable trajectories through edit extraction and prefix continuation, then combines SFT with interleaved GRPO across the two roles"<br>**总结**：EvoTIDE 回收轨迹+SFT+交错 GRPO——进化器本身被训练 | 原文（迁移性）："the evolved harnesses transfer to different tasks without further evolution and rank first in cross-benchmark evaluations"<br>**总结**：进化产物跨基准第一、免继续进化 | **原理**：进化器学到的是"哪类编辑有效"的规律而非具体编辑——规律可迁移，编辑不可迁移（编辑推演） |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 采集数据＋训练 | harness 修改的执行结果即时成为训练数据（机制概述）<br>**总结**：权重与 harness 同步 | — | **原理**：— |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 数据飞轮 | 更好的 harness→更好轨迹→更好进化器（机制概述）<br>**总结**：双层飞轮 | — | **原理**：— |

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 是 | 原文（编者按）：进化器（双角色）被自己的产物训练<br>**总结**：GPT-5-mini agent 24.4%→48.3%（闭源模型同样适用） | — | **原理**：闭源模型权重不可训，但 harness 可写——双角色框架把"自指"落在可写面上，绕开权重封锁（编辑推演） |

**论文中的其他发现**：连上此前独立的权重线与 harness 线（原文贡献定位）。

---

### 15. [RSI-Anything: Unlocking Recursive Self-Improvement with World Models](https://arxiv.org/abs/2610.13912)

**场景**：自我, 世界 ｜ **领域**：通用 ｜ **Oracle**：模型

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 世界模型 | 原文："uses predictive world models to guide action and learning-data selection"<br>**总结**：JEPA-Anything 预测性世界模型同时指导动作选择与学习数据选择 | 原文动机："external feedback is costly"<br>**总结**：外部反馈昂贵时，数据选择由内部预测器代劳 | **原理**：真实环境采样每条都要付执行成本；预测器把"这条数据值不值得采"的判断前移到想象空间——用近似成本换真实成本，只有当预测不确定时才花真钱采样（编辑概述） |
| 闭环调整 | 原文："observed feedback drives policy or workflow improvement and conditional world-model adaptation"<br>**总结**：观测反馈一边改进策略/工作流，一边做世界模型的条件适应 | 原文承认"world-model predictions may become unreliable as policies evolve"，以条件适应应对<br>**总结**：缓解（而非消除）世界模型随策略进化而失准 | **原理**：策略变了，旧经验分布就过时——世界模型若冻结，预测偏差会随策略偏移累积；条件适应=每批新观测后局部更新预测器，把分布漂移的误差压回小邻域（编辑推演） |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 递归自我改进 | 原文："component and compatibility checks govern the retention of updated policy-model pairs"<br>**总结**：策略-模型对的更新是否保留，由组件与兼容性检查把关 | 原文："In code repair, with the coder fixed, success increases from 26.3% with a static verifier to 29.2%"<br>**总结**：代码修复（coder 固定）26.3%→29.2% | **原理**：RSI 的最大风险是好心改坏——更新在局部任务上涨分却在全局失配；兼容性检查是一道闸门，把"更新"从单向应用变成"申请-审批"，坏更新进不了系统（编辑推演） |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 采集数据＋训练 | 经验回流同时更新策略与世界模型（编辑概述，摘要未展开运行时细节） | — | **原理**：策略与世界模型共训消除"鸡生蛋"错位——模型理解的是旧策略的世界，策略适应的是新模型的世界，交替更新让两者始终互为对方的当前版本（编辑推演） |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 数据飞轮 | 世界模型选数据→更好数据→更好世界模型（编辑概述） | — | **原理**：数据选择质量与模型预测精度互为因果，正循环成立的前提是选择压力真实存在——这正是兼容性检查提供的（编辑推演） |

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 是 | 原文（编者按）："compatibility checks govern the retention of updated policy-model pairs"——保留与否由系统自身的世界模型预判 | — | **原理**：自我评估自我=裁判与选手同体，风险是自我强化偏差；该设计用可执行的兼容性谓词约束裁判权，自指但非任意（编辑推演） |

**论文中的其他发现**：论文自述域通用（"Across diverse computational and scientific domains ... demonstrates substantial gains"），完整分域数字见原文。

---

### 16. [RRSI: Regularized Recursive Self-Improvement of Agent Harnesses](https://arxiv.org/abs/2609.24972)

**场景**：自我 ｜ **领域**：通用 ｜ **Oracle**：符号

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 进化搜索 | 原文："iteratively proposing and selecting component-wise edits of an agent harness, practically establishing a form of recursive self-improvement (RSI) at the agent-system level"<br>**总结**：迭代提出+选择 harness 组件编辑 | — | **原理**：组件级编辑让搜索空间可控——整体重写不可评估，组件编辑可隔离归因（编辑推演） |
| 闭环调整 | 以评估成绩为选择信号（机制概述）<br>**总结**：成绩选编辑 | — | **原理**：— |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 递归自我改进 | harness-RSI：递归修改提示/控制流/工具/记忆组件（原文设定）<br>**总结**：agent 系统层 RSI | 原文："such recursive evolution may overfit by memorizing the training tasks, showing large in-distribution gains that shrink or even vanish on out-of-distribution benchmarks"——诊断结论<br>**总结**：分布内大涨、OOD 消失（过拟合病） | **原理**：选择信号=训练任务成绩时，编辑可以记忆任务而非提升能力——评价集即优化目标时过拟合不可避免（编辑推演） |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 只采集数据，不训练 | 冻结骨干上做编辑搜索（原文设定）<br>**总结**：零训练开销 | — | **原理**：— |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 数据飞轮 | 原文："incorporates the principles of regularizations into harness self-improvement"<br>**总结**：正则化进自改进循环 | 原文：OOD 增益保持（数字见原文）<br>**总结**：修复过拟合后增益可迁移 | **原理**：权重训练的过拟合解法（正则/早停/held-out 选择）原样移植到代码编辑搜索——ML 基础课对 harness-RSI 的适用性（编辑推演） |

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 是 | harness 编辑流程改进 harness 自身（机制概述）<br>**总结**：— | — | **原理**：— |

**论文中的其他发现**：首次系统诊断 harness-RSI 过拟合：分布内增益与 OOD 增益脱钩甚至反号。

---

### 17. [SoL-Pi: Recursively Scaling Auto-Research Loops for Efficient Agent Harness](https://arxiv.org/abs/2609.20519)

**场景**：自我, 研究 ｜ **领域**：软件工程 ｜ **Oracle**：符号

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 进化搜索 | 原文："scaling auto-research loops across increasingly numerous and diverse environments for harness rollouts... the process yields reusable improvements that transfer beyond their development setting"<br>**总结**：研究循环跨环境 rollout，机制经选择存活且可迁移 | 原文动机："before scaling agent loops, can agents first make the harness itself more efficient?"<br>**总结**：先优化 harness 再扩大循环 | **原理**：跨环境选择压力过滤掉环境特定技巧——活下来的机制必然抓住的是 harness 的通用低效（编辑推演） |
| 闭环调整 | 研究循环发现的改进直接部署回运行它的 harness（机制概述）<br>**总结**：研究工具成为研究成果 | — | **原理**：— |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 递归自我改进 | 原文："We take an RSI-inspired approach at the harness layer"<br>**总结**：RSI 作用于 harness 层（token 效率） | 四个存活机制：Action Fusion、ObservationPack、Evidence-Preserving Reducer、Online Context Compact（README 自述，长任务 token 成本显著下降）<br>**总结**：四机制全部命中 token 效率 | **原理**：长任务的主要成本是重复验证调用、过期观测回放、日志过度读取——四机制分别消灭一种重复开销（编辑推演） |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 只采集数据，不训练 | 骨干冻结，改进落在 harness 机制（原文设定）<br>**总结**：生产级开源（3.4k 星） | — | **原理**：— |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 数据飞轮 | 跨环境 rollout 证据筛选机制（机制概述）<br>**总结**：可迁移性经选择验证 | — | **原理**：— |

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 是 | 自动研究循环改进运行它的 harness（机制概述）<br>**总结**：改进者=被改进者 | — | **原理**：harness 效率决定研究循环本身的可扩展性——自指在此是实用的：优化载体和优化对象是同一个（编辑推演） |

**论文中的其他发现**：开源为 Pi 编码 agent 的扩展（github.com/NVlabs/SoL-Pi），MIT 协议，3476 星。

---

### 18. [MetaRSI-v1: A Meta-Recursive Self-Improving System for Recursive Self-Improving Systems Themselves](https://arxiv.org/abs/2609.06396)

**场景**：自我, 研究 ｜ **领域**：通用 ｜ **Oracle**：符号

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 闭环调整 | 原文（系统构造）：Data(𝒟)/Harness(ℋ)/Model(θ) 三可写面统一为同一循环内核的算子（编者概述）<br>**总结**：三类自我改进共用一套验证调度 | 原文："RSI has been validated almost exclusively on coding and formal benchmarks... This format bound limits RSI to improvement within a machine-checkable slice, not general capability where questions are open and correctness is settled by argument, replication, or measurement"<br>**总结**：现有 RSI 被锁在机器可判定切片里 | **原理**：统一内核消除了 D/H/M 三线各自的验证逻辑碎片——一份权限边界与新鲜度规则服务全部改进类型（编辑推演） |
| 进化搜索 | RSI² 调度器在类型化契约下编排算子序列（系统构造，编者概述）<br>**总结**：改进步骤本身可搜索 | — | **原理**：改进顺序是组合空间，搜索优于固定管线（编辑推演） |
| 记忆上下文 | 信号新鲜度规则：H→M 与 M→M 禁止（系统构造）<br>**总结**：数据不得早于能力变化 | — | **原理**：过时信号训新能力=用旧地图走新路，禁止规则强制信息因果序（编辑推演） |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 递归自我改进 | MetaRSI² 再改进调度器——RSI 应用于 RSI（系统构造）<br>**总结**：元层也进闭环 | 原文数字（nums 存档）：平均 +10.9、胜固定管线 +3.6、SWE-bench Pro 10.3→19.5<br>**总结**：调度本身承重 | **原理**：调度器决定算子序列——改进"怎么改进"的杠杆比单次改进高一阶（编辑推演） |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 采集数据＋训练 | 模型只提案，确定性代码验证/打分/发布（系统构造）<br>**总结**：权限边界可复核 | — | **原理**：提案/执行分离=信息流单向闸门，模型幻觉进不了发布通道（编辑推演） |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 数据飞轮 | 全链路闭环追踪（系统构造）<br>**总结**：闭环可观测 | 原文普查：闭环形成追踪验证格式而非能力（ρ=-0.75）<br>**总结**：oracle 类型决定 RSI 上限的定量证据 | **原理**：可判定的验证格式自然先形成闭环——因果方向是格式→闭环，不是能力→闭环（编辑推演） |

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 是 | 调度器改进调度器自身（系统构造）<br>**总结**：元自指 | — | **原理**：元层自指的约束是类型化契约——无限自指被类型系统截断为有限层级（编辑推演） |

**论文中的其他发现**：论文主张 RSI 下一步须进入"论证/复现/测量"裁决的开放科学域（原文立场）。

---

### 19. [Agent0: Curriculum and Executor Agents Co-Evolve from Zero Data](https://arxiv.org/abs/2511.16043)

**场景**：自我 ｜ **领域**：通用 ｜ **Oracle**：模型

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 多智能体 | 原文："a fully autonomous framework that evolves high-performing agents without external data through multi-step co-evolution and seamless tool i[ntegration]"<br>**总结**：零外部数据，多步共进化+工具集成 | 原文动机："constrained by a dependency on human-curated data, limiting scalability and tethering AI to human knowledge... restricted by the model's inherent capabilities and single-round interactions"<br>**总结**：人工数据限制扩展；现有自进化受单轮交互限制 | **原理**：课程与执行分工——出题方维持任务在执行方能力边缘，多步交互让课程可以包含工具使用与动态推理的组合题（编辑推演） |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 递归自我改进 | 原文："multi-step co-evolution"——两角色互为训练信号（机制概述）<br>**总结**：零数据冷启动共进化 | 原文报告全程无外部数据下持续提升（数字见原文）<br>**总结**：自举成功 | **原理**：角色分工打破了"自己给自己出题必然偏简单"的退化——出题方奖励挂钩解题方进步，出难题才有回报（编辑推演） |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 采集数据＋训练 | 多步 rollout 轨迹即时回流（机制概述）<br>**总结**：采集训练交替 | — | **原理**：课程难度与执行能力同步生长，训练信号始终有效（编辑推演） |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 数据飞轮 | 课程难度动态跟随执行者水平（机制概述）<br>**总结**：始终有效优势 | — | **原理**：难度自适应=自动课程学习，避免固定课程过易（无信号）或过难（无成功样本）（编辑推演） |

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 是 | 课程 agent 与执行 agent 互相改进（机制概述）<br>**总结**：双向自指 | — | **原理**：交叉自指比单点自指稳定——两个互补视角互相纠偏（编辑推演） |

---

### 20. [Darwin Gödel Machine: Open-Ended Evolution of Self-Improving Agents (DGM)](https://arxiv.org/abs/2505.22954)

**场景**：自我 ｜ **领域**：软件工程 ｜ **Oracle**：符号

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 进化搜索 | 原文："a self-improving AI that repeatedly modifies itself in a provably beneficial manner"——以达尔文式开放进化替代可证明改进<br>**总结**：谱系档案+变异+选择，开放式搜索自我修改 | 原文动机："Today's AI systems have human-designed, fixed architectures and cannot autonomously and continuously improve themselves... Meta-learning... is limited by first-order improvements and the human design of a suitable search space"<br>**总结**：固定架构无法自改；元学习受限于人工搜索空间 | **原理**：可证明的自我改进（Gödel 机路线）在现实中证明成本过高，开放进化用"生成多样变体+环境选择"绕过证明——把不可判定的"变好"换成可执行的"被选"（编辑推演） |
| 技能沉淀 | 改进以代码组件形式留在谱系档案（原文机制）<br>**总结**：好改动跨代际继承 | — | **原理**：档案=外显的技能库，进化在离散工件上操作，可回溯可复用（编辑推演） |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 递归自我改进 | 原文（摘要末段，DGM 自述）：在 SWE-bench 上从 20% 提升到 50%（编码性能翻倍量级，具体数字以原文为准）<br>**总结**：agent 重写自身代码，重写后的自己继续重写 | 原文："coding performance... doubles"（量级以原文为准）<br>**总结**：SWE-bench 性能翻倍 | **原理**：改进作用于 scaffold 而非权重——搜索空间是离散代码编辑，每次改进改变下一轮搜索的起点，形成能力复合（编辑推演） |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 只采集数据，不训练 | 骨干冻结，全部改进在代码层（原文设定）<br>**总结**：零训练基础设施 | — | **原理**：避开权重训练的灾难性遗忘与算力门槛，代价是改进粒度受限于 scaffold 可表达范围（编辑推演） |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 数据飞轮 | 每代评估结果进档案指导选择（原文机制）<br>**总结**：选择压力随档案积累 | — | **原理**：档案保留失败分支——负面证据防止进化重复踩坑（编辑推演） |

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 是 | 改进对象=改进者自身的代码（原文设定）<br>**总结**：教科书式自指 | — | **原理**：能力上限不再锚定初始 scaffold——初始设计只是进化起点而非天花板（编辑推演） |

**论文中的其他发现**：保留被淘汰分支的谱系档案是开放-ended多样性的来源（原文机制，编者概述）。

---

### 21. [Aspire: Can Models Self-Evolve from Vague Goals?](https://arxiv.org/abs/2608.31111)

**场景**：自我 ｜ **领域**：NLP ｜ **Oracle**：符号

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 闭环调整 | 原文（基准设计）："ASPIRE provides only a natural-language capability goal while downstream evaluation tasks remain hidden. The agent must operationalize the goal by choosing data and update methods"<br>**总结**：只给模糊目标，评测任务隐藏，agent 自己操作化目标 | 原文（缺口定位）："existing work on LLM self-evolution typically begins with tasks and evaluation metrics specified by humans, reducing self-evolution to optimizing an explicit objective rather than deciding what and how to learn"<br>**总结**：现有自进化=优化人类给定的目标，不是决定学什么 | **原理**：把"元决策"从训练目标里剥离出来单独评测——任务隐藏使目标操作化无法被作弊为记住任务（编辑推演） |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 权重训练 | 原文："choosing data and update methods, and determining whether they have actually improved"<br>**总结**：自选数据、自选更新方法、自评进步 | 基准属性：测"学与不学"的元能力（无单一 SOTA 数字）<br>**总结**：元能力成为被测对象 | **原理**：— |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 采集数据＋训练 | 数据选择在运行时由 agent 决定（基准设定）<br>**总结**：— | — | **原理**：— |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 验证反馈 | 隐藏评测任务校验真实进步（基准设定）<br>**总结**：防自我感觉良好 | — | **原理**：评测对 agent 不可见=盲测——自我报告的进步与盲测进步的差值就是自欺程度（编辑推演） |

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 是 | 学与不学、学什么的决策由 agent 自己做（基准设定）<br>**总结**：补测元决策盲区 | — | **原理**：— |

---

### 22. [AtomMem: Learnable Dynamic Agentic Memory with Atomic Memory Operation](https://arxiv.org/abs/2601.08323)

**场景**：自我 ｜ **领域**：通用 ｜ **Oracle**：模型

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 记忆上下文 | 原文："reframes memory management as a dynamic decision-making problem ... deconstruct high-level memory processes into fundamental atomic CRUD (Create, Read, Update, Delete) operations"<br>**总结**：记忆管理重构为动态决策问题，高层记忆过程拆成原子 CRUD 操作 | 原文动机："most existing agent memory mechanisms rely on static and hand-crafted workflows"<br>**总结**：静态手工流程限制性能与泛化 | **原理**：手工流程是设计者对任务分布的先验猜测——任务分布一变，流程就系统性错配；CRUD 化把"何时读、何时写"从固定程序变成可学策略，让行为随任务分布自适应（编辑推演） |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 权重训练 | 原文："combining supervised fine-tuning with reinforcement learning ... learns an autonomous, task-aligned policy to orchestrate memory behaviors"<br>**总结**：SFT+RL 训出自主的记忆编排策略 | 原文："the trained AtomMem-8B consistently outperforms prior static-workflow memory methods"（3 个长上下文基准，原文未报百分比）<br>**总结**：8B 一致超越静态流程记忆方法 | **原理**：RL 把"记忆操作"直接绑定到任务回报——每一次读/写决策的奖惩最终来自任务成败，策略于是学会为通过任务而记忆，而不是为存而存（编辑推演） |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 采集数据＋训练 | 任务执行中的记忆操作决策被回收为 SFT+RL 训练信号（编辑概述，原文未展开运行时细节） | — | **原理**：训练数据与部署行为同分布——学的是"我自己在这种任务里会怎么做记忆决策"，避免离线记忆语料与在线需求的错位（编辑推演） |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 验证反馈 | 原文："orchestrate memory behaviors tailored to specific task demands"<br>**总结**：按任务需求动态编排 CRUD | 原文："learning-based formulation enables the agent to discover structured, task-aligned memory management strategies"<br>**总结**：学到的是结构化、任务对齐的记忆策略，不是预定义例程 | **原理**：任务成败是记忆策略的最终裁判——可验证的任务信号让"发现的策略"经过选择压力淬炼，而预定义例程从未被任务筛选过（编辑推演） |

**自己改自己？**：否

**论文中的其他发现**：原文训练动力学分析：学习式表述让 agent 自己发现结构化、任务对齐的记忆管理策略——"highlighting a key advantage over predefined routines"（相对预定义例程的关键优势）。

---

### 23. [RISE: Recursive Improvement via Self-Extrapolating Policy Distillation](https://arxiv.org/abs/2609.05295)

**场景**：自我 ｜ **领域**：通用 ｜ **Oracle**：模型

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 闭环调整 | 原文："constructs a synthetic teacher directly from the model's own RLVR training trajectory. By extrapolating the displacement between the current checkpoint and a trailing anchor—in parameter space or output logit space"<br>**总结**：从自身 RLVR 轨迹外推 checkpoint 位移构造合成教师 | 原文（双瓶颈）："external teachers suffer from distribution mismatch, while self-distillation with privileged conditioning is limited by in-context learning capacity"<br>**总结**：外部教师分布失配；特权条件自蒸馏受限于上下文容量 | **原理**：位移外推=把多步离散更新近似为其线性延拓——参数空间的"动量"假说：沿已有改进方向多走一步，大概率仍在改进流形上（编辑推演） |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 权重训练 | 原文："RISE converts a sparse outcome-induced parameter update into a dense token-level ta[rget]"<br>**总结**：稀疏结果奖励→密集 token 级监督 | 原文：胜 RLVR-only 与单向自蒸馏基线（数字见原文）<br>**总结**：两条已知路线之外的第三条 | **原理**：稀疏奖励的信用分配要经多轮传播才到 token；外推的密集目标把信用直接铺到每个 token 上（编辑推演） |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 采集数据＋训练 | 训练轨迹本身回收为蒸馏素材（机制概述）<br>**总结**：零额外数据成本 | — | **原理**：教师由学生轨迹派生，训练分布永远匹配（编辑推演） |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 数据飞轮 | 教师随学生每轮重新外推（机制概述）<br>**总结**：递归而非一次性 | — | **原理**：学生变强→位移更准→教师更好→学生更强，正循环（编辑推演） |

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 是 | 原文（编者按）：教师从学生自己的参数位移外推而来<br>**总结**：自监督无外部锚 | — | **原理**：自指的失效模式是自嗨（错误自我强化）；此处锚是 RLVR 验证器，外推只放大已验证的改进（编辑推演） |

---

### 24. [FlowReasoner](https://arxiv.org/abs/2504.15257)

**场景**：自我 ｜ **领域**：通用 ｜ **Oracle**：模型

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 多智能体 | 原文："a query-level meta-agent... to automate the design of query-level multi-agent systems, i.e., one system per user query"<br>**总结**：元 agent 按每条查询生成定制 MAS | 原文（核心思想）："incentivize a reasoning-based meta-agent via external execution feedback"<br>**总结**：执行反馈激励推理式元 agent | **原理**：一查询一系统——固定架构是最优架构在查询分布上的平均，定制架构取每点的条件最优（编辑推演） |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 权重训练 | 原文："by distilling DeepSeek R1, we first endow the basic reasoning ability... Then, we further enhance it via reinforcement learning (RL) with external execution feedback"<br>**总结**：R1 蒸馏打底+执行反馈 RL 强化 | 原文：多用途奖励从性能/复杂度/效率三方面引导（数字见原文）<br>**总结**：生成质量三目标平衡 | **原理**：执行反馈是系统级真值——MAS 设计好坏由运行结果裁决，不由人评（编辑推演） |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 运行时全冻结 | 部署时元 agent 只做生成（机制概述）<br>**总结**：— | — | **原理**：— |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 数据飞轮 | 执行反馈持续训练元 agent（机制概述）<br>**总结**：— | — | **原理**：— |

**自己改自己？**：否

---

### 25. [Self-Adapting Language Models (SEAL)](https://arxiv.org/abs/2506.10943)

**场景**：自我 ｜ **领域**：通用 ｜ **Oracle**：模型

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 闭环调整 | 原文："generating their own finetuning data and update directives... a self-edit—a generation that may restructure the information in different ways, specify optimization hyperparameters, or invoke tools"<br>**总结**：模型产出 self-edit——重述知识、指定超参、调用工具的自适应指令 | 原文动机："LLMs are powerful but static; they lack mechanisms to adapt their weights in response to new tasks, knowledge, or examples"<br>**总结**：静态权重无法适应新任务/知识/样本 | **原理**：适应的"说明书"由模型自己写而非外部训练器设计——外部设计者无法穷举所有适应场景，模型自述可以把适应方式随任务定制（编辑推演） |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 权重训练 | 原文："Through supervised finetuning (SFT), these self-edits result in persistent weight changes"<br>**总结**：self-edit 经 SFT 变成持久权重变化 | 原文未给单一基准数字；核心结果为适应后知识任务表现优于外置 RAG/ICL 变体（原文实验节）<br>**总结**：适应内化为参数，优于把知识挂在外部上下文 | **原理**：外部上下文受窗口与注意力稀释限制，权重化后的知识无检索延迟、无窗口占用——这是"参数记忆 vs 上下文记忆"的经典交换（编辑推演） |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 采集数据＋训练 | 原文："a generation that may... invoke tools for data augmentation and gradient-based updates"<br>**总结**：运行时自产数据+梯度更新 | — | **原理**：数据、指令、更新三件事都在会话内闭环——适应不再排队等离线批次（编辑推演） |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 数据飞轮 | 每轮适应产物成为下一轮素材（编辑概述） | — | **原理**：自我编辑质量随轮次复利——上轮学到的表述方式改进下轮的 self-edit 生成（编辑推演） |

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 是 | 原文（编者按）："self-adapt by generating their own finetuning data"——训练数据、更新指令、被更新者是同一模型 | — | **原理**：最简形式的自指权重 RSI——不经过任何外部教师环节（编辑推演） |

---

### 26. [MemCodex: Self-Programming Hierarchical Memory for Language Agents](https://arxiv.org/abs/2609.39765)

**场景**：自我 ｜ **领域**：通用 ｜ **Oracle**：符号

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 记忆上下文 | 原文："organizes experience into executable memory programs for summaries, relational knowledge, reusable skills, and latent memory"<br>**总结**：经验存成四层可执行记忆程序——摘要、关系知识、可复用技能、潜记忆 | 原文动机："a single-hop question may require one piece of evidence, whereas a multi-hop question must combine evidence from multiple sources. Predefined memory workflows cannot adapt to these varying needs"<br>**总结**：单跳多跳需求不同，固定流程顾此失彼 | **原理**：分层把"找什么证据"变成"在哪一层找"——单跳只碰顶层即停，多跳沿层间指针下钻；平铺式记忆每次提问都要全库扫描，分层让访问成本正比于所需证据深度而非记忆总量（编辑推演） |
| 进化搜索 | 原文："Open-ended program evolution searches the open design space of layer programs by rewriting how each layer is constructed, indexed, retrieved, and routed"<br>**总结**：设计空间本身开放——每层怎么构建/索引/检索/路由都可被进化重写 | 原文（对近邻方法的定位）："Recent adaptive methods search or learn over memory components and their compositions, but the design space itself remains predefined"<br>**总结**：别家在给定空间里调，MemCodex 把空间打开 | **原理**：预定义方法的可达上限是设计者想象力的上限——当任务需要的结构（如"时序+因果混合索引"）不在预定义集合里，调参调不出来；进化能发明集合外的新结构（编辑推演） |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 机制自进化 | 原文："a self-evolving hierarchical memory system"<br>**总结**：进化只动记忆程序层，不动模型权重（摘要全程无权重更新表述，编者按） | 原文："improves average task success by 10.1% relative to the strongest adaptive-memory baseline"<br>**总结**：vs 最强自适应记忆基线，平均任务成功率 +10.1% | **原理**：收益沉淀在外部可执行工件而非参数里——不占模型容量、不需要梯度与训练设施；代价是推理时多一层程序执行开销，换来"改进即插即用"（编辑推演） |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 只采集数据，不训练 | 原文："reads traverse the hierarchy from coarse to fine and stop once sufficient evidence is found, descending to the original history when needed"<br>**总结**：查询由粗到细走层级、证据够就停、拿不准回原文 | 原文："using 3.4x fewer context tokens and achieving 2.1x faster inference"<br>**总结**：上下文 token 省 3.4 倍、推理快 2.1 倍 | **原理**：带早停的检索树——上下文长度只随"所需证据深度"增长，不随记忆总量增长；"证据够就停"避免为 20% 的问题付 100% 的检索成本，回原文兜底保证截断不丢精度（编辑推演） |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 验证反馈 | 原文："stop once sufficient evidence is found"<br>**总结**：以证据充分为停机判据（程序可执行、可校验为编者概述） | 同上格——3.4× token 节省的直接来源<br>**总结**：停得早就花得少 | **原理**："证据充分"是可判定的停机谓词——把"何时停止检索"从开放式启发式变成可验证条件；不可判定的停止策略只有两种失败模式：过度检索（浪费）或过早停止（丢证据），谓词化同时封死两者（编辑推演） |

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 是 | 原文（编者按）：进化重写的是记忆的构建/索引/检索/路由方式本身<br>**总结**：改的对象是"记忆怎么组织"，不是某个固定任务 | 原文（反面锚点）："the design space itself remains predefined"——别家的天花板<br>**总结**：组织方式本身可进化，无预设边界 | **原理**：自指让"索引怎么建"和"查询怎么来"共同进化——非自指系统里两者必然错位（索引按 A 逻辑建、查询按 B 逻辑来），每次访问都付接口摩擦税；共同进化把这笔税消掉（编辑推演） |

**论文中的其他发现**：配套 MemArena 运行时——原文："a unified runtime that places heterogeneous data and memory systems behind a common interface"，异构数据与记忆系统统一到公共接口之后，不同记忆方案才能公平对比。

---

### 27. [Search Self-play: Pushing the Frontier of Agent Capability without Supervision](https://arxiv.org/abs/2510.18821)

**场景**：研究 ｜ **领域**：网页 ｜ **Oracle**：真实环境

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 进化搜索 | 原文："the learning LLM utilizes multi-turn search engine calling and acts simultaneously as both a task proposer and [a solver]"<br>**总结**：多轮搜索中同时当出题者与求解者 | 原文动机："RLVR highly depends on well-crafted task queries and corresponding ground-truth answers... which requires significant human effort and hinders the scaling of RL processes"<br>**总结**：RLVR 靠人工题库，阻碍规模化 | **原理**：真实搜索引擎当环境=无限免费的任务源与裁判，出题成本从人工转为推理成本（编辑推演） |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 递归自我改进 | 原文："the difficulty of the generated agentic tasks can hardly be controlled to provide effective RL training advantages"——以自博弈控制难度（机制概述）<br>**总结**：自博弈=难度控制器 | 原文：持续提升搜索 agent 能力（数字见原文）<br>**总结**：解除 agent RL 数据瓶颈 | **原理**：难度失控是合成任务的通病（过易无优势、过难无成功样本）；提出者奖励挂钩求解者进步，难度自动落在有效区（编辑推演） |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 采集数据＋训练 | 原文：多轮真实搜索引擎调用即数据采集<br>**总结**：任务分布真实 | — | **原理**：真实环境出题避免合成任务的分布窄化（编辑推演） |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 验证反馈 | 真实搜索引擎结果做裁判（机制概述）<br>**总结**：ground truth 免费无限 | — | **原理**：检索结果是客观物理反馈，不像模型裁判可被说服（编辑推演） |

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 是 | 提出者=求解者同一模型（原文设定）<br>**总结**：与 AZR 同构、oracle 换真实环境 | — | **原理**：— |

---

### 28. [Machines That Accelerate Machine-Making: A Research Agenda for Human-Demand-Guided Physical Recursive Self-Improvement](https://www.datafluxdynamics.ltd/research/machines-that-accelerate-machine-making.pdf)

**场景**：研究, 策略 ｜ **领域**：通用 ｜ **Oracle**：符号

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 单次生成 | 原文（纲领定义，编者按）：Physical Recursive Self-Improvement（PRSI）与 Physical Improvement-Production Edge（PIPE）的形式化；P1 硬件接口→P5 产生后续机器的算子五级因果位置<br>**总结**：物理 RSI 的统一坐标系 | 原文主张（定位）：让机器加速造机器、人类需求引导方向——信息端终点 DFM 的物理镜像<br>**总结**：纲领而非实现 | **原理**：把"AI 进物理世界"从连续谱切成五个可判定的档位——位置决定能力上限与风险敞口，形式化使讨论可证（编辑推演） |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 递归自我改进 | 原文（P5 定义，编者概述）：产生后续机器的算子——改进物理制造能力本身<br>**总结**：P5=物理 RSI | 原文定理（编者按）：证书链可构造性、几何收缩、选择遗憾界、劳动系数收缩<br>**总结**：四定理给可行性骨架 | **原理**：几何收缩=选择空间随证书链证据积累而收缩——递归收敛的前提是信息增益单调，证书链正是信息增益的载体（编辑推演） |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 运行时全冻结 | 纯理论框架，无运行系统（编者按）<br>**总结**：— | — | **原理**：— |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 数据飞轮 | 原文机制：证书链——每台机器制造过程可追溯可验证<br>**总结**：制造史即证据链 | — | **原理**：可追溯性把"这台机器为什么可信"变成可查证的记录，而非信任制造商（编辑推演） |

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 是 | 原文双环：需求环引导方向+物理环执行改进（编者概述）<br>**总结**：人类需求防能力陷阱 | — | **原理**：纯内生改进会陷入"只改进自己擅长改进的"——外环给改进方向一个系统外锚点（编辑推演） |

**论文中的其他发现**：引语来自论文自定义术语与结构（编者按）；本条目为 PDF 纲领文档。

---

### 29. [Absolute Zero: Reinforced Self-play Reasoning with Zero Data (AZR)](https://arxiv.org/abs/2505.03335)

**场景**：研究 ｜ **领域**：通用 ｜ **Oracle**：模型

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 进化搜索 | 原文（题目与设定）：单系统自提任务、自解题、自验证的强化自博弈<br>**总结**：出题者=解题者=同一模型 | 原文动机："still depend on manually curated collections of questions and answers for training. The scarcity of high-quality, human-produced examples raises concerns about the long-term scalability of relying on human supervision"<br>**总结**：RLVR 仍靠人工题库，长期不可扩展 | **原理**：数据瓶颈从"采集"转向"生成"——当验证器免费（代码执行/数学校验），出题能力本身成为可训练能力（编辑推演） |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 递归自我改进 | 原文：自博弈产生的任务-解-验证三元组回流训练自身（机制概述）<br>**总结**：训练数据完全自产 | 原文报告跨数学/代码推理基准持续提升（具体数字见原文）<br>**总结**：零人工数据下全面提升 | **原理**：任务难度由自身当前能力决定（能出=能解的边缘），课程自动处于最近发展区（编辑推演） |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 采集数据＋训练 | 自博弈 rollout 即采集，采集训练交替（机制概述）<br>**总结**：数据供应随能力增长 | — | **原理**：能力↔数据互为因果的正循环，无需外部数据管道（编辑推演） |

**反馈栈**：无反馈

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 是 | 提出者、求解者、验证者、被训练者四位一体（机制概述）<br>**总结**：完全自指最简形态 | — | **原理**：自验证依赖执行器客观性——代码/数学的可判定性是闭环不跑偏的锚（编辑推演） |

**论文中的其他发现**：原文未展示加速趋势证据：能力提升但改进速率未随时间增长（重要限定）。

---

### 30. [Frontis-MA1: Training an AI4AI Model towards Recursive Self-Improvement in Machine Learning Engineering](https://arxiv.org/abs/2607.28568)

**场景**：研究 ｜ **领域**：软件工程 ｜ **Oracle**：符号

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 进化搜索 | 原文："long-horizon search (OpenMLE-Evo)... four atomic program-evolution operators (Dr[aft/Improve/Debug/Crossover])"<br>**总结**：四算子长程进化搜索 | 原文（定位）："machine learning engineering (MLE) offers a concrete, executable testbed for studying this capability"——AI4AI 的可执行试验台<br>**总结**：MLE 是 RSI 的落地试验台 | **原理**：进化算子对应人类工程师的四类动作（起草/改进/调试/交叉）——把 MLE 工作流原语化，长程搜索才可组合（编辑推演） |
| 闭环调整 | 原文："spanning verifiable task environments with execution feedback (OpenMLE-Gym), operator learning (OpenMLE-RL)"<br>**总结**：可验证环境+算子学习 | — | **原理**：执行反馈让每个算子的好坏可判定——搜索的每步都有裁判（编辑推演） |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 权重训练 | 原文："we post-train Frontis-MA1 (35B) as a meta-evolution agent for MLE, aligning post-training and inference around four atomic program-evolution operators"<br>**总结**：35B 后训练为元进化 agent | 库内数字（自报）：MLE-Bench Lite 39→71%、超 GPT-5.5+Codex、接近 Kimi K3（2.8T）<br>**总结**：35B 越级对抗超大模型 | **原理**：训练与推理对齐同一组算子——学的就是推理时要执行的动作分布，无 train-inference 错位（编辑推演） |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 只采集数据，不训练 | 部署时跑进化搜索，训练离线（机制概述）<br>**总结**：— | — | **原理**：— |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 数据飞轮 | 进化搜索结果回流算子训练（机制概述）<br>**总结**：— | — | **原理**：— |

**自己改自己？**：否

**论文中的其他发现**：库内标注：RSI 近邻（未展示加速趋势）；框架与 35B 权重全开源。

---

### 31. [Scaling Self-Play with Self-Guidance in Lean4](https://arxiv.org/abs/2604.20209)

**场景**：研究 ｜ **领域**：数学 ｜ **Oracle**：符号

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 进化搜索 | 原文："a Conjecturer model creates problems for a Solver, and both improve together"<br>**总结**：自引导自博弈（SGS） | 原文（对既有自博弈的诊断）："existing LLM self-play methods do not scale well with large amounts of compute, instead hitting learning plateaus. We argue this is because over long training runs, the Conjecturer learns to hack its reward, collapsing to artificially complex problems that do not help the Solver improve"<br>**总结**：出题者学会奖励作弊——造无益的假难题 | **原理**：奖励作弊是自博弈的结构病——出题者的奖励若与解题者进步脱钩，最省力的策略是造"看着难"的题；自引导让出题者以自身能力为参照锚定难度（编辑推演） |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 权重训练 | 原文："a self-play algorithm in which the language model itself gui[des]"——自引导信号驱动训练（机制概述）<br>**总结**：— | 库内数字（自报）：渐近求解率超强 RL 基线<br>**总结**：— | **原理**：— |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 采集数据＋训练 | — | — | **原理**：— |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 数据飞轮 | 证明尝试回流训练（机制概述）<br>**总结**：— | — | **原理**：— |

**自己改自己？**：否

**论文中的其他发现**：该文对自博弈奖励作弊的诊断同样适用于其他 proposer-solver 系统（编者按）。

---

### 32. [STP: Self-play LLM Theorem Provers with Iterative Conjecturing and Proving](https://arxiv.org/abs/2502.00212)

**场景**：研究 ｜ **领域**：数学 ｜ **Oracle**：符号

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 进化搜索 | 原文："we draw inspiration from mathematicians, who continuously develop new results, partly by proposing novel conjectures or exercises (which are often variants of known results) and attempting [them]"<br>**总结**：猜想者+证明者双角色自博弈 | 原文动机："performance quickly plateaus due to the scarcity of correct proofs (sparse rewards)"<br>**总结**：证明数据稀缺导致平台期 | **原理**：解题数据受限于"会做的题"，出题数据不受限——猜想把数据源从"已会"扩到"可变体"，绕开稀疏奖励（编辑推演） |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 权重训练 | 原文机制：两个角色互为对方提供训练信号、迭代互相提升（机制概述）<br>**总结**：互喂式共训 | 原文：定理证明能力迭代提升（数字见原文）<br>**总结**：— | **原理**：— |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 采集数据＋训练 | — | — | **原理**：— |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 | 带来增益的原理（第一性解释） |
|---|---|---|---|
| 数据飞轮 | 证明器产出训猜想器、猜想产出训证明器（机制概述）<br>**总结**：— | — | **原理**：— |

**自己改自己？**：否

---


## 待迁移论文表（396 篇）

| # | 论文 | 场景 | 方向 | 更新能力 | 运行时行为 | 反馈栈 | Oracle | 领域 | 自己改自己？ |
|---|---|---|---|---|---|---|---|---|---|
| 1 | [WaypointOPD（航点在线策略蒸馏实现）](https://github.com/hhhbxloveai/WaypointOPD) | 策略 | 闭环调整 | 权重训练 | 采集数据＋训练 | 验证反馈 | 仿真 | 机器人 | 否 |
| 2 | [Player-1: Learning to Play from Synthetic Experience](https://arxiv.org/abs/2610.20584) | 策略, 技能 | 技能沉淀 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 仿真 | Minecraft | 否 |
| 3 | [Puro-2B: Poor Lab Qwen2-1.5B Trained on RTX 5090 within $5090](https://arxiv.org/abs/2608.27370) | 策略 | 单次生成 | 权重训练 | 采集数据＋训练 | 证据反馈 | 符号 | NLP | 否 |
| 4 | [CLIFT: Turning Gemini Robotics On-Device into Humanoid Specialists via Non-Invasive Closed-Loop Iterative Fine-Tuning](https://arxiv.org/abs/2607.29172) | 策略 | 闭环调整 | 权重训练 | 采集数据＋训练 | 验证反馈 | 真实环境 | 机器人 | 否 |
| 5 | [Sirius: Human-in-the-Loop Autonomy and Learning During Deployment](https://arxiv.org/abs/2211.08416) | 策略 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 真实环境, 人类 | 机器人 | 否 |
| 6 | [Learning While Deploying (LWD): Fleet-Scale Offline-to-Online RL for Generalist Robots](https://arxiv.org/abs/2605.00416) | 策略 | 闭环调整, 多智能体 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 真实环境 | 机器人 | 否 |
| 7 | [OHP-RL: Online Human Preference Reinforcement Learning for Real-World Manipulation](https://arxiv.org/abs/2605.15971) | 策略, 奖励 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 真实环境, 人类 | 机器人 | 否 |
| 8 | [LifeLong-RFT: Continual Learning VLA Models via Reinforcement Fine-Tuning](https://arxiv.org/abs/2602.10503) | 策略 | 闭环调整, 记忆上下文 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 真实环境 | 机器人 | 否 |
| 9 | [Self-Adapting Robotic Agents through Online Continual Reinforcement Learning](https://arxiv.org/abs/2603.04029) | 策略 | 闭环调整, 记忆上下文 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 真实环境 | 机器人 | 否 |
| 10 | [What Matters for Simulation-to-Online Reinforcement Learning](https://arxiv.org/abs/2602.20220) | 策略 | 单次生成 | 权重训练 | 采集数据＋训练 | 验证反馈 | 真实环境 | 机器人 | 否 |
| 11 | [RL-100: Performant Robotic Manipulation with Real-World RL](https://arxiv.org/abs/2510.14830) | 策略 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 真实环境 | 机器人 | 否 |
| 12 | [Long-Horizon Planning in World Models with Latent Planners](https://arxiv.org/abs/2606.09311) | 策略 | 世界模型 | 权重训练 | 采集数据＋训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 13 | [Sparse Imagination: Efficient Visual World Model Planning](https://arxiv.org/abs/2506.01392) | 策略 | 世界模型 | 权重训练 | 采集数据＋训练 | 验证反馈 | 仿真 | 机器人 | 否 |
| 14 | [Dream to Manipulate: Compositional World Models Empowering Robot Imitation Learning](https://dreamtomanipulate.github.io/) | 策略, 世界 | 世界模型 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 仿真, 真实环境 | 机器人 | 否 |
| 15 | [AOR: Act-Observe-Rewrite for Robot Manipulation Policy Improvement](https://arxiv.org/abs/2603.04466) | 策略 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 真实环境, 仿真 | 机器人 | 否 |
| 16 | [Dreamer 4: Training Agents Inside of Scalable World Models](https://arxiv.org/abs/2509.24527) | 策略 | 世界模型 | 权重训练 | 采集数据＋训练 | 验证反馈 | 模型 | 通用 | 否 |
| 17 | [MuZero: Mastering Atari, Go, Chess and Shogi by Planning with a Learned Model](https://arxiv.org/abs/1911.08265) | 策略 | 世界模型 | 权重训练 | 采集数据＋训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 18 | [DreamerV3: Mastering Diverse Domains through World Models](https://arxiv.org/abs/2301.04104) | 策略 | 世界模型 | 权重训练 | 采集数据＋训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 19 | [CodeDiffuser](https://www.roboticsproceedings.org/rss21/p072.pdf) | 策略 | 单次生成 | 权重训练 | 运行时全冻结 | 证据反馈 | 不适用 | 通用 | 否 |
| 20 | [RoboPro (Robotic Programmer)](https://arxiv.org/abs/2501.04268) | 策略 | 单次生成 | 权重训练 | 运行时全冻结 | 验证反馈 | 模型, 人类 | 通用 | 否 |
| 21 | [TT-VLA: On-the-Fly VLA Adaptation via Test-Time Reinforcement Learning](https://arxiv.org/abs/2601.06748) | 策略 | 闭环调整, 世界模型 | 运行时适应 | 采集数据＋训练 | 数据飞轮 | 真实环境 | 机器人 | 否 |
| 22 | [Dejavu: Post-Deployment Learning for Embodied Agents via Experience Feedback Network](https://arxiv.org/abs/2510.10181) | 策略 | 闭环调整, 记忆上下文 | 运行时适应 | 采集数据＋训练 | 数据飞轮 | 真实环境 | 机器人 | 否 |
| 23 | [AdaWorldPolicy: World-Model-Driven Diffusion Policy with Test-Time Adaptation](https://arxiv.org/abs/2602.20057) | 策略 | 世界模型 | 运行时适应 | 只训练，不采集 | 验证反馈 | 模型 | 机器人 | 否 |
| 24 | [EmbodiedEvo: Self-Evolving Coding Agent For Physical Intelligence](https://arxiv.org/abs/2610.18867) | 策略, 自我 | 闭环调整, 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 真实环境 | 机器人 | 否 |
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
| 51 | [Reinforcement World Model Learning (RWML)](https://arxiv.org/abs/2602.05842) | 动作 | 世界模型 | 权重训练 | 采集数据＋训练 | 无反馈 | 模型 | 通用 | 否 |
| 52 | [Web Agents with World Models (WMA)](https://openreview.net/forum?id=moWiYJuSGF) | 动作 | 世界模型 | 权重训练 | 采集数据＋训练 | 无反馈 | 仿真 | 前端 | 否 |
| 53 | [ToolGen: Unified Tool Retrieval and Calling via Generation（近邻）](https://openreview.net/forum?id=XLMAMmowdY) | 动作 | 单次生成 | 权重训练 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 54 | [AgentTuning: Enabling Generalized Agent Abilities for LLMs](https://arxiv.org/abs/2310.12823) | 动作 | 闭环调整 | 权重训练 | 运行时全冻结 | 验证反馈 | 符号 | 通用 | 否 |
| 55 | [OpenHands CodeAct 2.1](https://www.openhands.dev/blog/openhands-codeact-21-an-open-state-of-the-art-software-development-agent) | 动作 | 闭环调整 | 权重训练 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 56 | [TT-SI: Self-Improving LLM Agents with Test-Time Training](https://aclanthology.org/2026.findings-acl.462.pdf) | 动作 | 闭环调整 | 运行时适应 | 采集数据＋训练 | 验证反馈 | 模型 | 通用 | 否 |
| 57 | [Grounded Test-Time Adaptation for LLM Agents](https://arxiv.org/abs/2511.04847) | 动作 | 闭环调整 | 运行时适应 | 采集数据＋训练 | 验证反馈 | 符号 | 通用 | 否 |
| 58 | [aTTT: Agentic Test-Time Training for LLM Agents](https://arxiv.org/abs/2607.03441) | 动作 | 闭环调整 | 运行时适应 | 采集数据＋训练 | 验证反馈 | 符号 | 通用 | 否 |
| 59 | [Scaling Agent Productivity with Automated Tool Generation](https://arxiv.org/abs/2512.24615) | 动作 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 数学 | 否 |
| 60 | [H-EPM: Experience-Evolving Multi-Turn Tool-Use Agent with Hybrid Episodic-Procedural Memory](https://arxiv.org/abs/2512.07287) | 动作 | 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 61 | [WebXSkill: Skill Learning for Autonomous Web Agents](https://arxiv.org/abs/2604.13318) | 动作 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 网页 | 否 |
| 62 | [Runtime Harness Adaptation for Deterministic LLM Agents](https://arxiv.org/abs/2605.22166) | 动作 | 闭环调整 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 软件工程 | 否 |
| 63 | [PILOT in the Loop: Live Self-Improvement for Long-Horizon Agents](https://arxiv.org/abs/2608.26530) | 动作 | 闭环调整, 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号, 真实环境 | 通用 | 否 |
| 64 | [ExpeL: LLM Agents Are Experiential Learners](https://arxiv.org/abs/2308.10144) | 动作 | 技能沉淀, 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 65 | [SICA: A Self-Improving Coding Agent](https://arxiv.org/abs/2504.15228) | 动作 | 闭环调整 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 软件工程 | 是 |
| 66 | [Live-SWE-agent: Can Software Engineering Agents Self-Evolve on the Fly?](https://arxiv.org/abs/2511.13646) | 动作 | 闭环调整 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 软件工程 | 否 |
| 67 | [LATM (LLMs as Tool Makers)](https://openreview.net/forum?id=qV83K9d5WB) | 动作 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 68 | [CRAFT: Customizing LLMs by Creating and Retrieving Specialized Tools](https://arxiv.org/abs/2309.17428) | 动作 | 技能沉淀 | 机制自进化 | 运行时全冻结 | 数据飞轮 | 模型 | 通用 | 否 |
| 69 | [DynaSaur](https://arxiv.org/abs/2411.01747) | 动作 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 70 | [SkillWeaver: Web Agents can Self-Improve by Discovering and Honing Skills](https://arxiv.org/abs/2504.07079) | 动作 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 71 | [Agent Workflow Memory (AWM)](https://arxiv.org/abs/2409.07429) | 动作 | 技能沉淀, 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 前端 | 否 |
| 72 | [ChunkAct: Action Chunking for Agentic Robotics](https://arxiv.org/abs/2610.18874) | 动作, 策略 | 技能沉淀 | 机制冻结 | 只采集数据，不训练 | 证据反馈 | 真实环境 | 机器人 | 否 |
| 73 | [SWE-bench Science: Can Coding Agents Resolve Engineering Tasks in Science?](https://arxiv.org/abs/2608.19799) | 动作, 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 符号 | 软件工程 | 否 |
| 74 | [World-Model-Augmented Web Agents with Action Correction](https://arxiv.org/abs/2602.15384) | 动作 | 世界模型 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 网页 | 否 |
| 75 | [CREATOR: Tool Creation for Disentangling Abstraction and Reasoning](https://arxiv.org/abs/2305.14318) | 动作 | 技能沉淀 | 机制冻结 | 运行时全冻结 | 验证反馈 | 符号 | 通用 | 否 |
| 76 | [Is Your LLM Secretly a World Model of the Internet? (WebDreamer)](https://arxiv.org/abs/2411.06559) | 动作 | 世界模型 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 网页 | 否 |
| 77 | [LATS（近邻）](https://arxiv.org/abs/2310.04406) | 动作 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 78 | [CoAct-1: Computer-Using Agents with Coding as Actions](https://arxiv.org/abs/2508.03923) | 动作 | 闭环调整, 多智能体 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 图形界面 | 否 |
| 79 | [CodeAct: Executable Code Actions Elicit Better LLM Agents](https://arxiv.org/abs/2402.01030) | 动作 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 软件工程 | 否 |
| 80 | [Agent S3 / OSWorld-ACI](https://github.com/simular-ai/agent-s) | 动作 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 符号 | 前端 | 否 |
| 81 | [RARE: Reinforcement Learning with Adaptive Rubric Evolution for Open-Ended Generation](https://arxiv.org/abs/2610.25434) | 奖励 | 进化搜索, 闭环调整 | 权重训练 | 采集数据＋训练 | 验证反馈 | 模型 | NLP | 否 |
| 82 | [RM-R1: Reward Modeling as Reasoning](https://arxiv.org/abs/2505.02387) | 奖励 | 闭环调整 | 权重训练 | 采集数据＋训练 | 验证反馈 | 模型 | NLP | 否 |
| 83 | [Weaver: Shrinking the Generation-Verification Gap with Weak Verifiers](https://arxiv.org/abs/2506.18203) | 奖励 | 单次生成 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 84 | [From Curiosity to Competence: How World Models Interact with the Dynamics of Exploration](https://arxiv.org/abs/2507.08210) | 奖励, 策略 | 世界模型 | 权重训练 | 采集数据＋训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 85 | [Large Reward Models: Generalizable Online Robot Reward Models](https://arxiv.org/abs/2603.16065) | 奖励 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 真实环境, 人类 | 机器人 | 否 |
| 86 | [DERL: Differentiable Evolutionary Discovery of Optimal Reward Structures](https://arxiv.org/abs/2512.13399) | 奖励 | 进化搜索 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 仿真 | 通用 | 否 |
| 87 | [RM-Distiller（近邻）](https://arxiv.org/abs/2601.14032) | 奖励 | 单次生成 | 权重训练 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 88 | [Generating and Refining Dynamic Evaluation Rubrics for LLM-as-a-Judge](https://arxiv.org/abs/2605.30568) | 奖励 | 闭环调整 | 运行时适应 | 只采集数据，不训练 | 验证反馈 | 模型 | NLP | 否 |
| 89 | [Inference-Time Reward Hacking in Large Language Models](https://arxiv.org/abs/2508.08884) | 奖励 | 单次生成 | 运行时适应 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 90 | [TDRM: Smooth Reward Models with Temporal Difference for LLM Reasoning](https://openreview.net/forum?id=j2oWVgTFNX) | 奖励 | 世界模型, 闭环调整 | 机制自进化 | 运行时全冻结 | 验证反馈 | 模型 | 数学 | 否 |
| 91 | [ENPIRE: Agentic Robot Policy Self-Improvement in the Real World](https://arxiv.org/abs/2606.19980) | 奖励 | 多智能体, 闭环调整 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 真实环境 | 机器人 | 否 |
| 92 | [OpenRubrics: Scalable Synthetic Rubric Generation for Reward Modeling](https://arxiv.org/abs/2510.07743) | 奖励 | 进化搜索 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型, 人类 | NLP | 否 |
| 93 | [Autorubric: A Unifying Framework for Rubric-Based LLM Evaluation on Non-Verifiable Tasks](https://arxiv.org/abs/2603.00077) | 奖励 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | NLP | 否 |
| 94 | [AutoRubric: Rubric-Based Generative Rewards for Faithful Multimodal Reasoning](https://arxiv.org/abs/2510.14738) | 奖励 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 多模态 | 否 |
| 95 | [Rubrics as Rewards: Reinforcement Learning Beyond Verifiable Domains](https://arxiv.org/abs/2507.17746) | 奖励 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | NLP | 否 |
| 96 | [Reward Model Overoptimisation in Iterated RLHF](https://arxiv.org/abs/2505.18126) | 奖励 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 97 | [FORGE: A Multi-Agent LLM Framework for Reward Design](https://openreview.net/forum?id=Z6GStCfccl) | 奖励 | 多智能体, 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 98 | [LaRes: Evolutionary Reinforcement Learning with LLM-based Adaptive Reward Search](https://papers.nips.cc/paper_files/paper/2025/hash/21b5d3a17aa5525f30bfd2bc59ac3a48-Abstract-Conference.html) | 奖励 | 进化搜索 | 机制冻结 | 采集数据＋训练 | 验证反馈 | 仿真 | 机器人 | 否 |
| 99 | [Reward Modeling for Reinforcement Learning-Based LLM Reasoning: A Survey](https://arxiv.org/abs/2602.09305) | 奖励 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 通用 | 否 |
| 100 | [SENSEI: Semantic Exploration Guided by Foundation Models](https://arxiv.org/abs/2503.01584) | 奖励 | 世界模型 | 机制冻结 | 采集数据＋训练 | 数据飞轮 | 模型 | 机器人 | 否 |
| 101 | [REvolve: Reward Evolution with Large Language Models](https://arxiv.org/abs/2406.01309) | 奖励 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 102 | [PCGRLLM](https://arxiv.org/abs/2502.10906) | 奖励 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 仿真 | Minecraft | 否 |
| 103 | [MoRE](https://imt-atlantique.hal.science/hal-05450173/document) | 奖励 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 104 | [DrEureka](https://arxiv.org/abs/2406.01967) | 奖励 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 105 | [Eureka](https://arxiv.org/abs/2310.12931) | 奖励 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 机器人 | 否 |
| 106 | [CARD: A Large Language Model-Driven Reward Design Framework](https://arxiv.org/abs/2410.14660) | 奖励 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 107 | [Reward Design with Language Models (L2R)（近邻）](https://arxiv.org/abs/2303.00001) | 奖励 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 108 | [Text2Reward（初版）](https://arxiv.org/abs/2309.11489) | 奖励 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 仿真, 人类 | 通用 | 否 |
| 109 | [Emergent Tool Use From Multi-Agent Autocurricula](https://arxiv.org/abs/1909.07528) | 技能 | 多智能体, 进化搜索 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 仿真 | Minecraft | 否 |
| 110 | [SAGE: Skill Augmented GRPO for Self-Evolution](https://arxiv.org/abs/2512.17102) | 技能 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 111 | [DADS: Dynamics-Aware Unsupervised Discovery of Skills](https://arxiv.org/abs/1907.01657) | 技能 | 世界模型 | 权重训练 | 采集数据＋训练 | 验证反馈 | 模型 | 通用 | 否 |
| 112 | [LUCID: Latent-Skill Unified Control via Imagined Dynamics](https://arxiv.org/abs/2608.07746) | 技能 | 世界模型 | 权重训练 | 采集数据＋训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 113 | [Odyssey](https://openreview.net/forum?id=vtGLtSxtqv) | 技能 | 技能沉淀 | 权重训练 | 只采集数据，不训练 | 无反馈 | 模型 | 通用 | 否 |
| 114 | [JARVIS-1](https://arxiv.org/search/?searchtype=all&query=JARVIS-1+open-world+multi-task+agents+memory-augmented) | 技能 | 技能沉淀 | 权重训练 | 只采集数据，不训练 | 无反馈 | 模型 | 通用 | 否 |
| 115 | [SkillFoundry: Building Self-Evolving Agent Skill Libraries](https://arxiv.org/abs/2604.03964) | 技能 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 116 | [SkillAxe: Sharpening LLM-Authored Agent Skills Through Execution Feedback](https://arxiv.org/abs/2606.10546) | 技能 | 闭环调整 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 117 | [MineEvolve: Minecraft Skills and Guardrails from Experience](https://arxiv.org/abs/2603.13131) | 技能, 约束 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | Minecraft | 否 |
| 118 | [Self-Evolving Embodied Agents via Skill-Harness Evolution](https://arxiv.org/abs/2608.11350) | 技能 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 119 | [Super Library Agent](https://arxiv.org/abs/2608.29310) | 技能 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 无反馈 | 模型 | 通用 | 否 |
| 120 | [Voyager](https://arxiv.org/abs/2305.16291) | 技能 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | Minecraft | 否 |
| 121 | [Multi-Resolution Skill Discovery for HRL Agents](https://arxiv.org/abs/2505.21410) | 技能 | 世界模型 | 机制冻结 | 运行时全冻结 | 验证反馈 | 仿真 | 机器人 | 否 |
| 122 | [CoEvoSkills: Self-Evolving Agent Skills via Co-Evolutionary Methods](https://arxiv.org/abs/2604.01687) | 技能 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 123 | [EvoSkill](https://arxiv.org/abs/2603.02766) | 技能 | 多智能体 | 机制冻结 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 124 | [LEGO-Prover](https://scholar.google.com/scholar?q=LEGO-Prover+skill+library+theorem+proving) | 技能, 研究 | 技能沉淀 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 模型 | 数学 | 否 |
| 125 | [LILO](https://arxiv.org/abs/2310.19791) | 技能 | 技能沉淀 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 模型 | 通用 | 否 |
| 126 | [Provably Safe Policy Updates in Deep Reinforcement Learning](https://arxiv.org/abs/2604.09452) | 约束 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 127 | [SafeDreamer: Safe Reinforcement Learning with World Models](https://arxiv.org/abs/2307.07176) | 约束 | 世界模型 | 权重训练 | 采集数据＋训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 128 | [Test-Time Adaptation for Generalizable Task Progress Estimation](https://arxiv.org/abs/2506.10085) | 约束 | 闭环调整 | 运行时适应 | 只训练，不采集 | 验证反馈 | 模型 | 机器人 | 否 |
| 129 | [Where LLM Agents Fail and How They Can Learn From Failures](https://arxiv.org/abs/2509.25370) | 约束, 动作 | 记忆上下文, 闭环调整 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 130 | [AIR: Improving Agent Safety through Incident Response](https://arxiv.org/abs/2602.11749) | 约束 | 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 131 | [CAPS: Constraint-Adaptive Policy Switching for Offline Safe RL](https://ojs.aaai.org/index.php/AAAI/article/view/33726) | 约束 | 闭环调整 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 132 | [Proactive Runtime Enforcement of LLM Agent Safety](https://arxiv.org/abs/2508.00500) | 约束 | 世界模型, 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 133 | [Toward Safe LLM Agents: A Survey of Specification, Verification, and Enforcement](https://arxiv.org/abs/2608.14590) | 约束 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 符号 | 通用 | 否 |
| 134 | [ToolEmu: Identifying the Risks of LLM Agents with an LLM Emulator](https://arxiv.org/abs/2309.04786) | 约束 | 世界模型 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 135 | [SafeManip: A Property-Driven Benchmark for Temporal Safety in Robotic Manipulation](https://arxiv.org/abs/2605.12386) | 约束 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 机器人 | 否 |
| 136 | [RoboGuard: Safety Guardrails for LLM-Enabled Robots](https://arxiv.org/abs/2503.07885) | 约束 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 机器人 | 否 |
| 137 | [Learning Failure Prevention Skills for Safe Robot Manipulation](https://arxiv.org/abs/2305.02807) | 约束 | 技能沉淀 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 真实环境 | 机器人 | 否 |
| 138 | [SAHOO: Monitoring Alignment Drift during RSI](https://arxiv.org/abs/2603.06333) | 约束 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 139 | [AutoSafeCoder](https://neurips.cc/virtual/2024/99390) | 约束 | 多智能体 | 机制冻结 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 140 | [AssertMiner（近邻）](https://arxiv.org/abs/2511.10007) | 约束 | 技能沉淀 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 符号 | 通用 | 否 |
| 141 | [Lisa（近邻）](https://arxiv.org/abs/2607.18711) | 约束 | 技能沉淀 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 142 | [QD 漏洞多样性搜索（近邻）](https://arxiv.org/abs/2606.00801) | 约束 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 模型 | 通用 | 否 |
| 143 | [UnitTenX（近邻）](https://arxiv.org/abs/2510.05441) | 约束 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 符号 | 通用 | 否 |
| 144 | [Property-Generated Solver](https://arxiv.org/abs/2506.18315) | 约束 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 符号 | 通用 | 否 |
| 145 | [Code-as-Monitor (CaM)](https://arxiv.org/abs/2412.04455) | 约束 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型, 仿真 | 通用 | 否 |
| 146 | [Pre-Execution Safety Gate](https://arxiv.org/abs/2604.05427) | 约束 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 机器人 | 否 |
| 147 | [Plug in the Safety Chip](https://openreview.net/pdf?id=INvxF4iQ34) | 约束 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 148 | [JEPA-Anything: Learning Predictive Models across Different Worlds](https://arxiv.org/abs/2609.20800) | 世界 | 世界模型 | 权重训练 | 采集数据＋训练 | 证据反馈 | 仿真 | 通用 | 否 |
| 149 | [NeuMA: Neural Material Adaptor for Visual Grounding of Intrinsic Dynamics](https://arxiv.org/abs/2410.08257) | 世界 | 世界模型, 闭环调整 | 权重训练 | 采集数据＋训练 | 验证反馈 | 真实环境 | 通用 | 否 |
| 150 | [FlexiWorld: Learning and Planning via Flexible Action Chunks Across Multiple Time Scales](https://arxiv.org/abs/2609.35138) | 世界, 动作 | 世界模型 | 权重训练 | 采集数据＋训练 | 无反馈 | 仿真 | 机器人 | 否 |
| 151 | [SimWorld Studio: Open-Source UE5 Platform for Automatic Generation of Evolving Embodied Environments](https://arxiv.org/abs/2605.09423) | 世界 | 单次生成 | 权重训练 | 采集数据＋训练 | 验证反馈 | 仿真 | 机器人 | 否 |
| 152 | [PAN: A World Model for General Interactable Worlds via Generative Latent Prediction](https://arxiv.org/abs/2506.16616) | 世界, 策略 | 世界模型 | 权重训练 | 采集数据＋训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 153 | [Genie: Generative Interactive Environments](https://arxiv.org/abs/2402.15391) | 世界 | 单次生成 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 仿真 | 通用 | 否 |
| 154 | [Agent-World: Scaling Real-World Environment Synthesis](https://arxiv.org/abs/2604.18292) | 世界 | 世界模型, 进化搜索 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 仿真 | 通用 | 否 |
| 155 | [Agent World Model: Infinity Synthetic Environments](https://arxiv.org/abs/2602.10090) | 世界 | 单次生成 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 仿真 | 通用 | 否 |
| 156 | [Code2Worlds: Empowering Coding LLMs for 4D World Models](https://arxiv.org/abs/2602.11757) | 世界 | 单次生成 | 权重训练 | 运行时全冻结 | 验证反馈 | 仿真 | 通用 | 否 |
| 157 | [Cosmos（近邻，非代码）](https://arxiv.org/abs/2501.03575) | 世界 | 单次生成 | 权重训练 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 158 | [Code-as-World-VL](https://arxiv.org/abs/2608.27549) | 世界 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 仿真 | 通用 | 否 |
| 159 | [AgentGarten: Code Worlds for Evolving Agents](https://arxiv.org/abs/2610.12374) | 世界, 自我 | 进化搜索, 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 160 | [Memento 3: Model-Based Recursive Self-Improvement through Reflective Rulebooks](https://arxiv.org/abs/2610.11794) | 世界, 自我 | 世界模型, 记忆上下文, 闭环调整 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 是 |
| 161 | [Self-Evolving World Models for LLM Agent Planning](https://arxiv.org/abs/2606.30639) | 世界 | 闭环调整 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 162 | [Dual Digital Twin（近邻）](https://www.mdpi.com/2079-9292/14/24/4806) | 世界 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 无反馈 | 仿真 | 通用 | 否 |
| 163 | [WorldStream（流式 3D 世界生成）](https://krennic999.github.io/WorldStream/) | 世界, 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 符号 | 通用 | 否 |
| 164 | [Fysiverse-3D-SimReady: Agentic Physical Simulation for Pragmatic 3D World Reconstruction](https://arxiv.org/abs/2609.31715) | 世界, 设计 | 多智能体 | 机制冻结 | 运行时全冻结 | 证据反馈 | 仿真, 真实环境 | 机器人 | 否 |
| 165 | [URDFormer: A Pipeline for Constructing Articulated Simulation Environments from Real-world Images](https://www.roboticsproceedings.org/rss20/p124.pdf) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 仿真, 真实环境 | 机器人 | 否 |
| 166 | [RoboCousin: Build Your Own Simulation Playground for Robust Bimanual Robotic Manipulation](https://arxiv.org/abs/2609.08339) | 世界, 技能 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 仿真 | 机器人 | 否 |
| 167 | [PhysTwin: Physics-Informed Reconstruction and Simulation of Deformable Objects from Videos](https://arxiv.org/abs/2503.17973) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 真实环境 | 机器人 | 否 |
| 168 | [PAC-NeRF: Physics Augmented Continuum NeRF for Geometry-Agnostic System Identification](https://arxiv.org/abs/2303.05512) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 真实环境 | 机器人 | 否 |
| 169 | [PhysGaussian: Physics-Integrated 3D Gaussians for Generative Dynamics](https://arxiv.org/abs/2311.12198) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 仿真 | 通用 | 否 |
| 170 | [PhysDreamer: Physics-Based Interaction with 3D Objects via Video Generation](https://arxiv.org/abs/2404.13026) | 世界, 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 真实环境, 模型 | 通用 | 否 |
| 171 | [3D Constitutive Gaussians for General Physics-Based Simulation](https://openreview.net/forum?id=9HZtP6I5lv) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 仿真 | 通用 | 否 |
| 172 | [PhyScene: Physically Interactable 3D Scene Synthesis for Embodied AI](https://arxiv.org/abs/2404.09465) | 世界, 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 仿真 | 机器人 | 否 |
| 173 | [Scaling Laws for Pre-training Agents and World Models](https://arxiv.org/abs/2411.04434) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 仿真 | 通用 | 否 |
| 174 | [A Definition and Roadmap for World Models](https://arxiv.org/abs/2607.06401) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 模型 | 通用 | 否 |
| 175 | [NeSyS: Neuro-Symbolic Synergy for Interactive World Modeling](https://arxiv.org/abs/2602.10480) | 世界 | 世界模型 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 176 | [World Model for Robot Learning: A Comprehensive Survey](https://arxiv.org/abs/2605.00080) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 仿真 | 机器人 | 否 |
| 177 | [Foundation World Models for Agents that Learn, Verify, and Plan](https://arxiv.org/abs/2602.23997) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 模型 | 通用 | 否 |
| 178 | [From Word to World: Can Large Language Models be World Models?](https://arxiv.org/abs/2512.18832) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 通用 | 否 |
| 179 | [SR-Platform](https://arxiv.org/abs/2605.14700) | 世界 | 技能沉淀, 多智能体 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 180 | [Agent2World: Learning to Generate Symbolic World Models via Adaptive Tool-Use](https://arxiv.org/abs/2512.22336) | 世界 | 世界模型, 多智能体 | 机制冻结 | 运行时全冻结 | 数据飞轮 | 模型 | 通用 | 否 |
| 181 | [PoE-World: Compositional World Modeling with Products of Experts](https://arxiv.org/abs/2505.10819) | 世界 | 世界模型 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 182 | [Generating Code World Models with LLMs (GIF-MCTS)](https://arxiv.org/abs/2405.15383) | 世界 | 世界模型 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 183 | [Executable World Models for ARC-AGI-3](https://arxiv.org/abs/2608.27549) | 世界 | 世界模型 | 机制冻结 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 184 | [Code World Models for General Game Playing](https://arxiv.org/abs/2510.04542) | 世界 | 世界模型, 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 185 | [WorldCoder: A Model-Based LLM Agent](https://arxiv.org/abs/2402.12275) | 世界 | 世界模型 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 186 | [3DCodeBench](https://arxiv.org/abs/2606.01057) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 187 | [VoxelCodeBench](https://arxiv.org/abs/2604.02580) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 188 | [Code-as-Room](https://arxiv.org/abs/2605.18451) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 189 | [SceneCode](https://arxiv.org/abs/2605.19587) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 190 | [Scene Language](https://arxiv.org/search/?searchtype=all&query=Scene+Language+visual+numerical+scene+generation) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 191 | [Genesis](https://arxiv.org/abs/2502.02590) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 192 | [RoboGen](https://arxiv.org/abs/2311.01455) | 世界 | 单次生成 | 机制冻结 | 采集数据＋训练 | 无反馈 | 仿真 | 通用 | 否 |
| 193 | [YuE2: Unifying Symbolic and Audio Music Generation at Frontier Quality](https://arxiv.org/abs/2609.33757) | 设计 | 单次生成 | 权重训练 | 采集数据＋训练 | 证据反馈 | 模型 | 通用 | 否 |
| 194 | [Leveraging Human Revisions for Improving Text-to-Layout Generation](https://arxiv.org/abs/2405.13026) | 设计 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 人类 | 前端 | 否 |
| 195 | [BRepCLIP: Contrastive Multimodal Pretraining on BRep](https://arxiv.org/abs/2606.05515) | 设计 | 技能沉淀 | 权重训练 | 运行时全冻结 | 验证反馈 | 仿真 | CAD | 否 |
| 196 | [Generative Floor Plan Design with LLMs via Reinforcement Learning](https://arxiv.org/abs/2605.14117) | 设计 | 单次生成 | 权重训练 | 运行时全冻结 | 验证反馈 | 不适用 | 体系结构 | 否 |
| 197 | [VeriCoder: Fine-tuned RTL Generation with 125K+ Examples](https://arxiv.org/abs/2504.15659) | 设计 | 单次生成 | 权重训练 | 运行时全冻结 | 验证反馈 | 符号 | 芯片 | 否 |
| 198 | [RTLCoder: Outperforming GPT-3.5 in Design RTL Generation](https://arxiv.org/abs/2312.08617) | 设计 | 单次生成 | 权重训练 | 运行时全冻结 | 数据飞轮 | 符号 | 芯片 | 否 |
| 199 | [CAD-Recode: Reverse Engineering CAD Code from Point Clouds](https://arxiv.org/abs/2412.14042) | 设计 | 单次生成 | 权重训练 | 运行时全冻结 | 验证反馈 | 不适用 | CAD | 否 |
| 200 | [Text2CAD](https://sadilkhan.github.io/text2cad-project/) | 设计 | 单次生成 | 权重训练 | 运行时全冻结 | 证据反馈 | 不适用 | CAD | 否 |
| 201 | [Interactive Evolutionary Image Generation with Bayesian Optimization](https://research-portal.uu.nl/ws/files/235432773/Image_Generation_with_Interactive_Evolutionary_System_using_Bayesian_Optimization.pdf) | 设计 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 人类 | 通用 | 否 |
| 202 | [AssemCAD: Representative Production-Ready CAD Assemblies](https://arxiv.org/abs/2607.05123) | 设计 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 仿真 | CAD | 否 |
| 203 | [Compositional Machine Design as Program Synthesis with LLMs](https://arxiv.org/abs/2510.14980) | 设计, 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 真实环境, 符号 | 机器人 | 否 |
| 204 | [PhysX-3D: Physical-Grounded 3D Asset Generation](https://arxiv.org/abs/2507.12465) | 设计, 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 仿真 | CAD | 否 |
| 205 | [SPARK: Sim-ready Part-level Articulated Reconstruction with VLM Knowledge](https://arxiv.org/abs/2512.01629) | 设计, 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 机器人 | 否 |
| 206 | [Articulate-Anything: Automatic Modeling of Articulated Objects via a Vision-Language Foundation Model](https://arxiv.org/abs/2410.13882) | 设计 | 闭环调整 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型, 仿真 | 机器人 | 否 |
| 207 | [Atlas3D: Physically Constrained Self-Supporting Text-to-3D for Simulation and Fabrication](https://neurips.cc/virtual/2024/poster/96557) | 设计, 约束 | 闭环调整 | 机制冻结 | 运行时全冻结 | 验证反馈 | 仿真 | CAD | 否 |
| 208 | [GaussianProperty: Integrating Physical Properties to 3D Gaussians with LMMs](https://arxiv.org/abs/2412.11258) | 设计, 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 模型 | 机器人 | 否 |
| 209 | [Material Palette: Extraction of Materials from a Single Image](https://astra-vision.github.io/MaterialPalette/) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 真实环境 | CAD | 否 |
| 210 | [CADIR: A Cross-Backend Editable Intermediate Representation](https://arxiv.org/abs/2608.00891) | 设计 | 技能沉淀 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | CAD | 否 |
| 211 | [Large Language Models for Computer-Aided Design: A Survey](https://arxiv.org/abs/2505.08137) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | CAD | 否 |
| 212 | [Catala: A Programming Language for the Law](https://arxiv.org/abs/2103.03198) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 符号 | 法律 | 否 |
| 213 | [IFC-Based Building Design Using Large Language Models](https://arxiv.org/abs/2511.05533) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 体系结构 | 否 |
| 214 | [Text2MBL: Text-to-Code Generation for Modular Building Layouts](https://arxiv.org/abs/2509.23713) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 体系结构 | 否 |
| 215 | [Interaction2Code: How Far Are We From Automatic Interactive Webpage Generation?](https://arxiv.org/abs/2411.03292) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 前端 | 否 |
| 216 | [Web2Code: A Large-scale Webpage-to-Code Dataset and Benchmark](https://proceedings.neurips.cc/paper_files/paper/2024/file/cb66be286795d71f89367d596bf78ea7-Paper-Datasets_and_Benchmarks_Track.pdf) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 前端 | 否 |
| 217 | [Text2CAD-Bench: A Benchmark for LLM-based Text-to-CAD](https://arxiv.org/abs/2605.18430) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | CAD | 否 |
| 218 | [EvolVE: Evolutionary Search for LLM-based Verilog Generation](https://arxiv.org/abs/2601.18067) | 设计 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 芯片 | 否 |
| 219 | [CADEvolve: Creating Realistic CAD via Program Evolution](https://arxiv.org/abs/2602.16317) | 设计 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 数据飞轮 | 仿真 | CAD | 否 |
| 220 | [EvoCAD: Evolutionary CAD Code Generation with Vision Language Models](https://arxiv.org/abs/2510.11631) | 设计 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | CAD | 否 |
| 221 | [From Surrogate Modeling to Autonomous Design](https://arxiv.org/abs/2608.18279) | 设计 | 世界模型 | 机制冻结 | 运行时全冻结 | 证据反馈 | 仿真 | 通用 | 否 |
| 222 | [NeOn-GPT](https://2024.eswc-conferences.org/wp-content/uploads/2024/05/77770034.pdf) | 设计 | 多智能体 | 机制冻结 | 运行时全冻结 | 无反馈 | 模型 | 本体 | 否 |
| 223 | [NL2SHACL 基准（近邻）](https://arxiv.org/html/2608.07530v2) | 设计 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 证据反馈 | 符号 | 本体 | 否 |
| 224 | [xpSHACL](https://arxiv.org/abs/2507.08432) | 设计 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 符号 | 本体 | 否 |
| 225 | [Extended NeOn-GPT](https://journals.sagepub.com/doi/abs/10.1177/22104968261453138) | 设计 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 本体 | 否 |
| 226 | [Text-to-CAD + Visual Feedback](https://icml.cc/virtual/2025/poster/46007) | 设计 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | CAD | 否 |
| 227 | [SPIRES / OntoGPT: Structured Prompt Interrogation and Recursive Extraction of Semantics](https://arxiv.org/abs/2304.02711) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 本体 | 否 |
| 228 | [RIGOR: Retrieval-Augmented Generation of Ontologies from Relational Schemas](https://arxiv.org/abs/2506.01232) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 本体 | 否 |
| 229 | [Ontology Generation using LLMs](https://arxiv.org/abs/2503.05388) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 本体 | 否 |
| 230 | [Text-to-CadQuery](https://arxiv.org/abs/2505.06507) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 仿真 | CAD | 否 |
| 231 | [Design2Code](https://arxiv.org/abs/2403.03163) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 前端 | 否 |
| 232 | [Contextual Credit Policy Optimization](https://arxiv.org/abs/2610.19103) | 推理 | 闭环调整 | 权重训练 | 采集数据＋训练 | 验证反馈 | 符号 | 通用 | 否 |
| 233 | [Surprising Success, Repeated Failure: Entropy-Guided Credit Assignment for Exploration in LLM Reasoning](https://arxiv.org/abs/2609.33781) | 推理 | 闭环调整 | 权重训练 | 采集数据＋训练 | 验证反馈 | 符号 | 数学 | 否 |
| 234 | [Better Supervision Is Nearby: Neighborhood On-Policy Self-Distillation](https://arxiv.org/abs/2609.39687) | 推理 | 单次生成 | 权重训练 | 采集数据＋训练 | 验证反馈 | 符号 | 数学 | 否 |
| 235 | [Recursive Self-Improvement via On-Policy Distillation for Reasoning](https://arxiv.org/abs/2609.30652) | 推理, 自我 | 闭环调整 | 权重训练 | 采集数据＋训练 | 验证反馈 | 符号 | 数学 | 是 |
| 236 | [Rethinking Cross-Tokenizer On-Policy Distillation: From Alignment Coverage to Supervision Reliability](https://arxiv.org/abs/2610.08448) | 推理 | 单次生成 | 权重训练 | 采集数据＋训练 | 验证反馈 | 符号 | NLP | 否 |
| 237 | [HybridAgents: Hybrid Reasoning Agents](https://arxiv.org/abs/2610.18861) | 推理 | 世界模型 | 权重训练 | 采集数据＋训练 | 证据反馈 | 模型 | NLP | 否 |
| 238 | [LatentLoop: Scaling Looped MoE Models with Asymmetric Compute Allocation](https://arxiv.org/abs/2610.19975) | 推理 | 闭环调整 | 权重训练 | 只训练，不采集 | 无反馈 | 不适用 | NLP | 否 |
| 239 | [CoTranslator: Reverse to Forward Chain-of-Thought Translator for Reasoning Distillation](https://arxiv.org/abs/2610.20828) | 推理 | 单次生成 | 权重训练 | 采集数据＋训练 | 验证反馈 | 符号 | NLP | 否 |
| 240 | [Improving Test-Time Scaling with Adaptive Looped Transformers](https://arxiv.org/abs/2609.35748) | 推理 | 闭环调整 | 权重训练 | 只训练，不采集 | 无反馈 | 不适用 | NLP | 否 |
| 241 | [Knowing When Thinking Is Not Enough: Teaching Small Reasoning Models to Reason Beyond Their Parametric Knowledge](https://arxiv.org/abs/2609.34327) | 推理 | 闭环调整 | 权重训练 | 采集数据＋训练 | 验证反馈 | 符号 | NLP | 否 |
| 242 | [Beyond Repeated Sampling: Learning Search Policies for LLM Reasoning](https://arxiv.org/abs/2609.26704) | 推理 | 闭环调整 | 权重训练 | 采集数据＋训练 | 验证反馈 | 符号 | 数学 | 否 |
| 243 | [ReflectRL: Learning from Golden Negative Trajectories via Reflective-to-Direct Reasoning](https://arxiv.org/abs/2608.03972) | 推理 | 闭环调整 | 权重训练 | 采集数据＋训练 | 验证反馈 | 模型 | 数学 | 否 |
| 244 | [Self-Improvement of Language Models by Post-Training on Multi-Agent Debate](https://arxiv.org/abs/2509.15172) | 推理 | 多智能体 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 245 | [SimpleTIR: End-to-End Reinforcement Learning for Multi-Turn Tool-Integrated Reasoning](https://arxiv.org/abs/2509.02479) | 推理 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 数学 | 否 |
| 246 | [ReTool: Reinforcement Learning for Strategic Tool Use in LLMs](https://arxiv.org/abs/2504.11536) | 推理 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 数学 | 否 |
| 247 | [STaR: Bootstrapping Reasoning with Reasoning](https://arxiv.org/abs/2203.14465) | 推理 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 数学 | 否 |
| 248 | [VPD (Visual Program Distillation)](https://www.semanticscholar.org/paper/af1c871282ec122869d03f5420ef5d9143358a91) | 推理 | 单次生成 | 权重训练 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 249 | [Test-Time Curricula for Targeted Reinforcement Learning](https://openreview.net/forum?id=HoUIYpitfo) | 推理 | 进化搜索, 闭环调整 | 运行时适应 | 采集数据＋训练 | 验证反馈 | 模型 | 数学 | 否 |
| 250 | [Test-Time Policy Adaptation for Enhanced Multi-Turn Reasoning](https://arxiv.org/abs/2509.23166) | 推理 | 闭环调整 | 运行时适应 | 采集数据＋训练 | 验证反馈 | 模型 | 数学 | 否 |
| 251 | [Test-Time Tool Evolution for Scientific Reasoning](https://arxiv.org/abs/2601.07641) | 推理 | 技能沉淀 | 运行时适应 | 只采集数据，不训练 | 验证反馈 | 符号 | 数学 | 否 |
| 252 | [Tent: Fully Test-time Adaptation by Entropy Minimization](https://arxiv.org/abs/2006.10726) | 推理 | 单次生成 | 运行时适应 | 只训练，不采集 | 验证反馈 | 模型 | 通用 | 否 |
| 253 | [TTRL: Test-Time Reinforcement Learning](https://arxiv.org/abs/2504.16084) | 推理 | 闭环调整 | 运行时适应 | 采集数据＋训练 | 验证反馈 | 模型 | 数学 | 否 |
| 254 | [Titans: Learning to Memorize at Test Time（近邻）](https://arxiv.org/abs/2501.00663) | 推理 | 单次生成 | 运行时适应 | 只训练，不采集 | 无反馈 | 不适用 | 通用 | 否 |
| 255 | [The Surprising Effectiveness of Test-Time Training for Abstract Reasoning（近邻）](https://icml.cc/virtual/2025/poster/44773) | 推理 | 单次生成 | 运行时适应 | 只训练，不采集 | 无反馈 | 不适用 | 通用 | 否 |
| 256 | [Learning to (Learn at Test Time): RNNs with Expressive Hidden States (TTT)（近邻）](https://arxiv.org/abs/2407.04620) | 推理 | 单次生成 | 运行时适应 | 只训练，不采集 | 无反馈 | 不适用 | 通用 | 否 |
| 257 | [Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366) | 推理 | 闭环调整, 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 258 | [ReasoningBank（语言形态）](https://arxiv.org/abs/2509.25140) | 推理 | 技能沉淀, 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 259 | [The World Won't Wait: Evaluating and Teaching Agents Under a Live Clock](https://arxiv.org/abs/2610.20665) | 推理, 策略 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 仿真 | 通用 | 否 |
| 260 | [Thinking Before Thinking: Scaling Agentic Inference Through Meta-Reasoning](https://arxiv.org/abs/2609.38147) | 推理 | 多智能体, 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 261 | [TreeFlex: Agents Navigating Their Own Search Trees](https://arxiv.org/abs/2610.20334) | 推理, 自我 | 闭环调整, 记忆上下文 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 262 | [Can LLMs Anticipate Their Cruxes?](https://arxiv.org/abs/2610.21006) | 推理 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 模型 | NLP | 否 |
| 263 | [Improving Factuality and Reasoning in Language Models through Multiagent Debate](https://arxiv.org/abs/2305.14325) | 推理 | 多智能体 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 264 | [What Learning Algorithm is In-Context Learning? Investigations with Linear Models](https://arxiv.org/abs/2211.15661) | 推理 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 模型 | 通用 | 否 |
| 265 | [RAP: Reasoning via Planning in Language Model is Planning with World Model](https://aclanthology.org/2023.emnlp-main.507.pdf) | 推理 | 世界模型 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 266 | [MAC-Reasoner](https://aclanthology.org/2026.findings-acl.233.pdf) | 推理 | 多智能体 | 机制冻结 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 267 | [AgentGroupChat-V2](https://arxiv.org/abs/2506.15451) | 推理 | 多智能体 | 机制冻结 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 268 | [AutoQD](https://arxiv.org/abs/2506.05634) | 推理 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 模型 | 通用 | 否 |
| 269 | [Quality-Diversity through AI Feedback (QDAIF)](https://arxiv.org/abs/2310.13032) | 推理 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 模型 | 通用 | 否 |
| 270 | [Self-Debugging](https://arxiv.org/abs/2304.05128) | 推理 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 271 | [ExoViP: Step-by-Step Verification with Exoskeleton Modules](https://arxiv.org/abs/2408.02210) | 推理 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 模型 | 通用 | 否 |
| 272 | [LLM+P](https://arxiv.org/abs/2304.11477) | 推理 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 符号 | 通用 | 否 |
| 273 | [PoT (Program of Thoughts)](https://arxiv.org/abs/2211.12588) | 推理 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 274 | [PAL](https://arxiv.org/abs/2211.10435) | 推理 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 符号 | 通用 | 否 |
| 275 | [ViperGPT: Visual Inference via Python Execution for Reasoning](https://arxiv.org/abs/2303.08128) | 推理 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 符号 | 通用 | 否 |
| 276 | [VisProg: Visual Programming — Compositional Visual Reasoning without Training](https://arxiv.org/abs/2211.11559) | 推理 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 符号 | 通用 | 否 |
| 277 | [Terminal-RSI: Recursive Self-Improving Terminal Agents via Recursive Self-Rewrite and Policy-Refine](https://arxiv.org/abs/2610.22192) | 自我 | 闭环调整 | 递归自我改进 | 采集数据＋训练 | 数据飞轮 | 符号 | 软件工程 | 是 |
| 278 | [Harness^2: Recursive Agent Harnessing for an Open World](https://arxiv.org/abs/2610.14224) | 自我 | 进化搜索, 闭环调整 | 递归自我改进 | 只采集数据，不训练 | 数据飞轮 | 符号 | 通用 | 是 |
| 279 | [QwenGyre: An Elastic Reinforcement Learning Framework for Training xLong-Horizon Agents](https://arxiv.org/abs/2609.33848) | 自我 | 闭环调整 | 权重训练 | 采集数据＋训练 | 验证反馈 | 符号 | 通用 | 否 |
| 280 | [Self-Challenging Language Model Agents](https://arxiv.org/abs/2506.01716) | 自我 | 闭环调整, 技能沉淀 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 图形界面 | 是 |
| 281 | [Agent-Reflex: Teaching Language Agents to Act Reflectively](https://arxiv.org/abs/2610.17953) | 自我 | 闭环调整 | 权重训练 | 采集数据＋训练 | 验证反馈 | 模型, 人类 | 图形界面 | 否 |
| 282 | [Hy-Memory-30B-A3B: Attributed Reinforcement Learning for Long-Term Memory Writing](https://arxiv.org/abs/2610.22196) | 自我 | 记忆上下文 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | NLP | 否 |
| 283 | [rLLM: Continual Learning via Real-Time RL for Agents](https://rllm-project.com/post.html?post=realtime_rl.md) | 自我 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 284 | [Flying Serving: On-the-Fly Parallelism Switching for LLM Serving](https://arxiv.org/abs/2602.22593) | 自我 | 单次生成 | 权重训练 | 运行时全冻结 | 验证反馈 | 符号 | 通用 | 否 |
| 285 | [Rollout-Training Co-Design for Efficient LLM-Based Multi-Agent RL](https://arxiv.org/abs/2602.09578) | 自我 | 多智能体 | 权重训练 | 采集数据＋训练 | 验证反馈 | 符号 | 通用 | 否 |
| 286 | [On-Policy Replay for Continual Supervised Fine-Tuning](https://arxiv.org/abs/2605.29495) | 自我 | 闭环调整, 记忆上下文 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 287 | [CLaaS: Continual Learning as a Service for Deployed Agents](https://arxiv.org/abs/2606.05559) | 自我 | 单次生成 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 288 | [EvoHarness-RL: Learning Self-Evolving Runtime Harness](https://arxiv.org/abs/2608.05446) | 自我 | 进化搜索 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 289 | [FlowBalance: Verifier-Grounded Self-Improvement from On-Policy Reasoning Experience](https://arxiv.org/abs/2609.03241) | 自我, 推理 | 闭环调整, 记忆上下文 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 数学 | 否 |
| 290 | [SCOPE: Data-Free Self-Play for Open-Ended Task Co-Evolution](https://arxiv.org/abs/2608.19197) | 自我 | 进化搜索 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 291 | [Mem-α: Learning Memory Construction via Reinforcement Learning](https://openreview.net/forum?id=dm42omwep1) | 自我 | 记忆上下文 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 292 | [Memory-R1: Enhancing LLM Agents to Manage and Utilize External Memory via RL](https://arxiv.org/abs/2508.19828) | 自我 | 记忆上下文, 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 293 | [SDRL: Prepare Reasoning Language Models for Multi-Agent Settings](https://arxiv.org/abs/2601.22297) | 自我 | 单次生成 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 数学 | 否 |
| 294 | [RAGEN: Understanding Self-Evolution in LLM Agents via Multi-Turn RL](https://arxiv.org/abs/2504.20073) | 自我 | 闭环调整 | 权重训练 | 采集数据＋训练 | 验证反馈 | 模型 | 通用 | 否 |
| 295 | [RISE: Recursive Introspection — Teaching Language Model Agents How to Self-Improve](https://arxiv.org/abs/2407.18219) | 自我 | 闭环调整 | 权重训练 | 运行时全冻结 | 数据飞轮 | 模型 | 通用 | 否 |
| 296 | [AgentDistill](https://arxiv.org/abs/2506.14728) | 自我 | 单次生成 | 权重训练 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 297 | [Agent Distillation](https://neurips.cc/virtual/2025/poster/117657) | 自我 | 多智能体 | 权重训练 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 298 | [AgentArk](https://arxiv.org/abs/2602.03955) | 自我 | 多智能体 | 权重训练 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 299 | [Continual Learning, Not Training: Online Adaptation for Deployed Agents](https://arxiv.org/abs/2511.01093) | 自我, 动作 | 闭环调整, 记忆上下文 | 运行时适应 | 采集数据＋训练 | 验证反馈 | 模型 | 通用 | 否 |
| 300 | [MemRL: Self-Evolving Agents via Runtime Non-Parametric Reinforcement Learning on Memory](https://arxiv.org/abs/2601.03192) | 自我 | 记忆上下文, 闭环调整 | 运行时适应 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 301 | [Raven: The Harness of Harnesses for Composable Agentic Intelligence](https://arxiv.org/abs/2609.33439) | 自我 | 进化搜索, 多智能体 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型, 符号 | 通用 | 否 |
| 302 | [RSI Agent: Autonomous Exploration for Recursive Self-improvement in New Environments](https://arxiv.org/abs/2609.15364) | 自我 | 多智能体, 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 图形界面 | 否 |
| 303 | [Observability-Driven Automatic Evolution of Coding Agents](https://arxiv.org/abs/2604.25850) | 自我 | 闭环调整 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 软件工程 | 否 |
| 304 | [Retrospective Harness Optimization: Improving LLM Agents via Self-Preference over Trajectory](https://arxiv.org/abs/2606.05922) | 自我 | 闭环调整, 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 软件工程 | 否 |
| 305 | [The Last Harness You Will Ever Build: Evolution Agent Modifies Harness End-to-End](https://arxiv.org/abs/2604.21003) | 自我 | 进化搜索, 闭环调整 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 软件工程 | 否 |
| 306 | [Worth Remembering: Surprise-Gated Robot Episodic Memory via World Model Loss](https://arxiv.org/abs/2606.03787) | 自我, 世界 | 记忆上下文, 世界模型 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 机器人 | 否 |
| 307 | [Agentic Context Engineering (ACE): Evolving Contexts for Long-Horizon Agents](https://arxiv.org/abs/2510.04618) | 自我 | 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 软件工程 | 否 |
| 308 | [A-MEM: Agentic Memory for LLM Agents](https://arxiv.org/abs/2502.12110) | 自我 | 记忆上下文, 进化搜索 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 309 | [Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory](https://arxiv.org/abs/2504.19413) | 自我 | 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 310 | [EvolveMem: Self-Evolving Memory Architecture](https://arxiv.org/abs/2605.13941) | 自我 | 闭环调整, 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 311 | [MemSkill: Learning and Evolving Memory Skills for Self-Evolving LLM Agents](https://arxiv.org/abs/2602.02474) | 自我 | 技能沉淀, 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 312 | [Meta-Harness: End-to-End Optimization of Model Harnesses](https://arxiv.org/abs/2603.28052) | 自我 | 闭环调整, 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 是 |
| 313 | [MetaSkill-Evolve: Two-Timescale Skill and Meta-Skill Loops](https://arxiv.org/abs/2607.05297) | 自我 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 314 | [STOP: Recursively Self-Improving Scaffolding](https://arxiv.org/abs/2310.02304) | 自我 | 闭环调整 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 是 |
| 315 | [Promptbreeder: Self-Referential Evolution of Prompts](https://arxiv.org/abs/2309.16797) | 自我 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 是 |
| 316 | [Gödel Agent: A Self-Referential Agent Framework for Recursive Self-Improvement](https://arxiv.org/abs/2410.04444) | 自我 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 是 |
| 317 | [EvoPrompt: Connecting LLMs with Evolutionary Algorithms](https://arxiv.org/abs/2309.08532) | 自我 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 318 | [GEPA: Reflective Prompt Evolution Can Outperform Reinforcement Learning](https://arxiv.org/abs/2507.19457) | 自我 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 319 | [AgentSquare: Automatic LLM Agent Search in Modular Design Space](https://arxiv.org/abs/2410.06153) | 自我 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 320 | [EvoAgent: Towards Automatic Multi-Agent Generation](https://arxiv.org/abs/2406.14228) | 自我 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 321 | [GPTSwarm: Language Agents as Optimizable Graphs](https://arxiv.org/abs/2402.16823) | 自我 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 322 | [AFlow: Automating Agentic Workflow Generation](https://arxiv.org/abs/2410.10762) | 自我 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 323 | [Automated Design of Agentic Systems (ADAS / Meta Agent Search)](https://arxiv.org/abs/2408.08435) | 自我 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 324 | [DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines](https://arxiv.org/abs/2310.03714) | 自我 | 闭环调整 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 325 | [TextGrad: Automatic “Differentiation” via Text](https://arxiv.org/abs/2406.07496) | 自我 | 闭环调整 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 326 | [JiuwenSymbiosis（Physical AI 助手）](https://github.com/openJiuwen-ai/jiuwensymbiosis) | 自我 | 多智能体 | 机制冻结 | 运行时全冻结 | 证据反馈 | 模型, 真实环境 | 机器人 | 否 |
| 327 | [CarryOn: Building Object-Oriented Context for Long-Horizon Agents](https://arxiv.org/abs/2610.18784) | 自我 | 记忆上下文 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 328 | [Memorizing Who, Knowing How: Benchmarking Personal and Procedural Memory for Persistent Assistants](https://arxiv.org/abs/2610.20022) | 自我 | 记忆上下文 | 机制冻结 | 运行时全冻结 | 验证反馈 | 人类 | 通用 | 否 |
| 329 | [AgentVerse: Dynamic Multi-Agent Collaboration with Emergent Team Composition](https://arxiv.org/abs/2308.10848) | 自我 | 多智能体 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 330 | [Agent Lightning: Train ANY AI Agents with Reinforcement Learning](https://arxiv.org/abs/2508.03680) | 自我 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 符号 | 通用 | 否 |
| 331 | [Next-Generation Agentic Reinforcement Learning Systems](https://arxiv.org/abs/2607.01120) | 自我 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 模型 | 通用 | 否 |
| 332 | [Deployed Reinforcement Learning should be Continual](https://arxiv.org/abs/2606.04029) | 自我 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 333 | [LMAC: LLM-Guided Communication for Cooperative Multi-Agent RL](https://arxiv.org/abs/2605.18077) | 自我 | 多智能体 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 334 | [HarnessDev: Can LLMs Create and Evolve Their Own Agent Harness?](https://arxiv.org/abs/2609.01437) | 自我 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 符号 | 软件工程 | 否 |
| 335 | [SwarmSys: Decentralized Swarm-Inspired Multi-Agent Reasoning](https://arxiv.org/abs/2510.10047) | 自我 | 多智能体 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 336 | [Context Engineering: From Prompts to Corporate Multi-Agent Architecture](https://arxiv.org/abs/2603.09619) | 自我 | 记忆上下文 | 机制冻结 | 运行时全冻结 | 证据反馈 | 模型 | 通用 | 否 |
| 337 | [HIMM: Human-Inspired Long-Term Memory Modeling for Embodied Agents](https://arxiv.org/abs/2602.15513) | 自我 | 记忆上下文 | 机制冻结 | 只采集数据，不训练 | 数据飞轮 | 模型 | 机器人 | 否 |
| 338 | [MemGPT: Towards LLMs as Operating Systems](https://arxiv.org/abs/2310.08560) | 自我 | 记忆上下文 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 339 | [Scaling Self-Evolving Agents via Parametric Memory](https://arxiv.org/abs/2606.04536) | 自我 | 闭环调整, 记忆上下文 | 机制冻结 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 340 | [Sleep-time Compute: Beyond Inference Scaling at Test-time](https://arxiv.org/abs/2504.13171) | 自我 | 技能沉淀, 记忆上下文 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 341 | [Gödel Machine: Self-Referential Optimal Problem Solvers](https://arxiv.org/abs/cs/0309048) | 自我 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 数学 | 否 |
| 342 | [The Introspection Threshold for Recursive Self-Improvement](https://arxiv.org/abs/2607.04277) | 自我 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 通用 | 否 |
| 343 | [Recursive Self-Improvement in AI: From Bounded Self-Refinement to Autonomous Research Loops](https://arxiv.org/abs/2607.07663) | 自我 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 通用 | 否 |
| 344 | [A Dynamic LLM-Powered Agent Network for Task-Oriented Collaboration (DyLAN)](https://arxiv.org/abs/2310.02170) | 自我 | 多智能体 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 345 | [DiscoveryRSI: Recursively Learning to Discover Valuable Hypotheses](https://arxiv.org/abs/2610.23839) | 研究 | 闭环调整, 进化搜索 | 递归自我改进 | 采集数据＋训练 | 数据飞轮 | 符号, 模型 | 通用 | 是 |
| 346 | [AutoSFT: An Agentic System for Automated Data Research in Supervised Fine-Tuning](https://arxiv.org/abs/2610.22194) | 研究 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | NLP | 否 |
| 347 | [MLExpert: Towards a Generalist Agentic Model for Autonomous Machine Learning Engineering](https://arxiv.org/abs/2610.22344) | 研究 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 软件工程 | 否 |
| 348 | [Training Reasoning Models to Generate Diverse Scientific Ideas](https://arxiv.org/abs/2610.22324) | 研究 | 单次生成 | 权重训练 | 采集数据＋训练 | 验证反馈 | 模型, 人类 | 通用 | 否 |
| 349 | [IdeaAnchor: Teaching LLMs to Turn Literature into Research Ideas](https://arxiv.org/abs/2610.08781) | 研究 | 单次生成 | 权重训练 | 采集数据＋训练 | 验证反馈 | 符号, 模型 | 通用 | 否 |
| 350 | [IdeaScientist: Orchestrating Agents for Grounded Scientific Ideation](https://arxiv.org/abs/2610.04074) | 研究 | 多智能体 | 权重训练 | 采集数据＋训练 | 验证反馈 | 模型 | 通用 | 否 |
| 351 | [From Self-Evolving Synthetic Data to Verifiable-Reward RL for Multi-Turn Tool-Using Agents](https://arxiv.org/abs/2601.22607) | 研究, 自我 | 闭环调整, 进化搜索 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 352 | [MatBrain: Collaborative Dual-Model Agent for Autonomous Crystal Materials Research](https://arxiv.org/abs/2604.11540) | 研究, 设计 | 多智能体 | 权重训练 | 采集数据＋训练 | 验证反馈 | 符号 | 通用 | 否 |
| 353 | [SPIRAL: Self-Play on Zero-Sum Games Incentivizes Reasoning](https://arxiv.org/abs/2506.24119) | 研究, 自我 | 进化搜索, 多智能体 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 数学 | 否 |
| 354 | [RefineCoder](https://arxiv.org/abs/2502.09183) | 研究 | 闭环调整 | 权重训练 | 采集数据＋训练 | 无反馈 | 符号 | 通用 | 否 |
| 355 | [DreamProver](https://arxiv.org/abs/2604.26311) | 研究 | 技能沉淀 | 权重训练 | 只采集数据，不训练 | 无反馈 | 模型 | 通用 | 否 |
| 356 | [EvoTune](https://claire-labo.github.io/EvoTune/) | 研究 | 进化搜索 | 权重训练 | 采集数据＋训练 | 无反馈 | 仿真 | 通用 | 否 |
| 357 | [Scaling Automatic Research Agents via World Models (WMRL)](https://arxiv.org/abs/2608.12564) | 研究 | 世界模型 | 权重训练 | 采集数据＋训练 | 验证反馈 | 模型 | 软件工程 | 否 |
| 358 | [Sample Efficient Generative Molecular Optimization](https://arxiv.org/abs/2602.10984) | 研究 | 闭环调整 | 运行时适应 | 只采集数据，不训练 | 验证反馈 | 模型 | 药物研发 | 否 |
| 359 | [Hypoloom（自主研究框架）](https://github.com/EIMP-Lab/Hypoloom) | 研究 | 闭环调整, 多智能体 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 360 | [Gan Jiang: A Self-Learning Scientific Agent for X-ray Diffraction](https://arxiv.org/abs/2610.07862) | 研究 | 闭环调整, 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号, 真实环境 | 通用 | 否 |
| 361 | [DuoDiscover: Scaling Autonomous Discovery Beyond the Evaluation Bottleneck](https://arxiv.org/abs/2610.17184) | 研究 | 多智能体, 闭环调整 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 362 | [Self-Building Labs](https://arxiv.org/abs/2610.23826) | 研究, 设计 | 闭环调整 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 真实环境 | 通用 | 是 |
| 363 | [FrugalEvo: Towards Cost-Aware LLM-Guided Program Evolution](https://arxiv.org/abs/2610.03675) | 研究 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 数学 | 否 |
| 364 | [Arbor: Toward Generalist Autonomous Research via Hypothesis-Tree Refinement](https://arxiv.org/abs/2606.11926) | 研究 | 多智能体, 闭环调整, 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 365 | [Dream-RSI: Recursive Self-Improvement through Evolving Worlds](https://github.com/zhengkid/Dream-RSI) | 研究, 自我 | 世界模型, 记忆上下文, 进化搜索 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 366 | [MLEvolve: Progressive Graph Search with Retrospective Memory](https://arxiv.org/abs/2606.06473) | 研究 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 367 | [AlphaEvolve](https://arxiv.org/abs/2506.13131) | 研究 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 无反馈 | 符号 | 软件工程 | 否 |
| 368 | [Large Language Models Extend Known Research But Do Not Create New Research Directions](https://arxiv.org/abs/2610.17439) | 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 人类 | 通用 | 否 |
| 369 | [Cogentic: Multi-Agent Orchestration for Automated Proof Discovery](https://arxiv.org/abs/2609.40324) | 研究 | 多智能体 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 数学 | 否 |
| 370 | [Fork-and-Flush: Escaping Idea Basins in Autoresearch Agents](https://arxiv.org/abs/2610.07447) | 研究 | 多智能体, 记忆上下文 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 371 | [Benchmark Radar: A Living Database and Search Engine for AI Benchmarks](https://arxiv.org/abs/2609.11115) | 研究 | 单次生成 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 372 | [OmniScientist: An Omni-Modal Omni-Discipline AI Scientist](https://arxiv.org/abs/2608.13558) | 研究 | 多智能体 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 真实环境 | 通用 | 否 |
| 373 | [ExplorationBench: Measuring AI Systems Exploration in Verifiable Alien Worlds](https://arxiv.org/abs/2609.30199) | 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 符号 | 通用 | 否 |
| 374 | [ScholarCatalyst: A Benchmark for Retrieving Papers That Inspire New Research](https://arxiv.org/abs/2610.02202) | 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 人类 | 通用 | 否 |
| 375 | [awesome-rubric-rewards（论文清单库）](https://github.com/chrisliu298/awesome-rubric-rewards) | 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 符号 | 通用 | 否 |
| 376 | [RubricEval: A Rubric-Level Meta-Evaluation Benchmark for LLM Judges](https://arxiv.org/abs/2603.25133) | 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | NLP | 是 |
| 377 | [AutoBencher: Towards Declarative Benchmark Construction](https://arxiv.org/abs/2407.08351) | 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 符号, 模型 | 通用 | 否 |
| 378 | [AI for Scientific Discovery is a Social Problem](https://www.cell.com/patterns/fulltext/S2666-3899(26)00006-1) | 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 模型 | 通用 | 否 |
| 379 | [Automating the Search for Artificial Life with Foundation Models](https://arxiv.org/abs/2412.17799) | 研究, 世界 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | Minecraft | 否 |
| 380 | [Autonomous Agents for Scientific Discovery: Vision and Roadmap](https://arxiv.org/abs/2510.09901) | 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 模型 | 通用 | 否 |
| 381 | [Sparks: Multi-Agent AI Model Discovers Novel Scientific Ideas](https://arxiv.org/abs/2504.19017) | 研究 | 多智能体, 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 382 | [Foundation Models for Scientific Discovery: From Paradigm Enhancement to Paradigm Transition](https://arxiv.org/abs/2510.15280) | 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 模型 | 通用 | 否 |
| 383 | [Discovery Foundation Models: Toward Open-Ended Discovery Intelligence](https://arxiv.org/abs/2609.15973) | 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 模型 | 通用 | 否 |
| 384 | [Evolutionary Discovery of RL Algorithms via LLMs](https://arxiv.org/abs/2603.28416) | 研究 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 385 | [FT-Dojo: Fine-Tuning Pipeline as an Executable Environment](https://arxiv.org/abs/2603.01712) | 研究 | 世界模型 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 386 | [AutoResearch: Insight In, Hallucination Out](https://arxiv.org/abs/2608.17906) | 研究 | 闭环调整, 多智能体 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 387 | [CodeScientist: End-to-End Semi-Automated Scientific Discovery with Code-based Experimentation](https://arxiv.org/abs/2503.22708) | 研究 | 进化搜索, 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 388 | [Towards an AI Co-Scientist](https://arxiv.org/abs/2502.18864) | 研究 | 多智能体, 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 药物研发 | 否 |
| 389 | [AI Scientist-v2](https://arxiv.org/abs/2504.08066) | 研究 | 多智能体 | 机制冻结 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 390 | [The AI Scientist](https://arxiv.org/abs/2408.06292) | 研究 | 多智能体 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 391 | [ChatDev](https://arxiv.org/abs/2307.07924) | 研究 | 多智能体 | 机制冻结 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 392 | [MetaGPT](https://arxiv.org/abs/2308.00352) | 研究 | 多智能体 | 机制冻结 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 393 | [Self-Collaboration Code Generation](https://arxiv.org/abs/2304.07590) | 研究 | 多智能体 | 机制冻结 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 394 | [Digital Red Queen](https://pub.sakana.ai/drq/) | 研究 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 仿真 | 通用 | 否 |
| 395 | [FunSearch](https://www.nature.com/articles/s41586-023-06924-6) | 研究 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 符号 | 数学 | 否 |
| 396 | [Learning to Evaluate Before Improving (AutoSciRub)](https://arxiv.org/abs/2608.31076) | 研究 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 软件工程 | 否 |
<!-- PAPER-INDEX:END -->

## 仓库结构

```
awesome-code-as-agent/
├── README.md                       # English
├── README_CN.md                    # 中文版（当前页面）
├── code-as-policy-cube.html        # 3D 交互立方体
├── code-as-policy-spectrum.html    # 2D 矩阵（旧版）
├── data/
│   └── papers.json                 # 428 篇论文，8 维 tag
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
