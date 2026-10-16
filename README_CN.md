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

- **2026-10-16 ——论文索引改版为 GPT-3 基线增量卡片**
  - 每张卡片按五维度（方向/更新能力/运行时行为/反馈栈/自己改自己？）给出相对最简 chatbot 问答的具体设计与增益
  - 试点 30 张卡片已上线（RSI 集群+自指+数据飞轮论文）；其余 339 篇暂列待迁移表格，全部完成后自动消失

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

本索引的参照基线是**最简 chatbot 问答（GPT-3 模式）**：冻结模型、单轮提示→回答、无工具、无反馈、无记忆。每张卡片回答一个问题——这篇论文相对该基线引入了哪些具体设计，各带来什么增益。五个维度（方向/更新能力/运行时行为/反馈栈/自己改自己？）各一张子表；场景、领域、Oracle 在卡片头单行给出。维度语义见 [四维分类体系](#四维分类体系) 与 [附加-tag](#附加-tag)。

**进度**：已迁移卡片 30 篇 ｜ 待迁移 339 篇（暂列下方表格，全部迁移完成后表格自动消失）

### 1. [Robot-Powered Data Flywheel (RPDF)](https://arxiv.org/abs/2511.19647)

**场景**：策略 ｜ **领域**：机器人 ｜ **Oracle**：真实环境, 模型

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 闭环调整 | 机器人从模型消费者变数据生产者：野外收集+自动标注回流 | 数据获取成本随部署下降 |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 权重训练 | 自动标注数据回流训练模型 | — |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 采集数据＋训练 | 真实环境持续收集 | — |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 数据飞轮 | 部署越多→数据越多→模型越强→部署更多 | — |

**自己改自己？**：否

---

### 2. [DexFlyWheel](https://arxiv.org/abs/2509.23829)

**场景**：策略 ｜ **领域**：机器人 ｜ **Oracle**：真实环境, 模型

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 闭环调整 | IL 初始化+残差 RL+VLM 成功验证的自改进环 | 灵巧操纵成功率持续提升 |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 权重训练 | 残差 RL 在 IL 初始化的策略上微调 | 保留演示先验的同时超越 IL 上限 |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 采集数据＋训练 | 真机 rollout 即数据采集 | 数据分布与部署分布一致 |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 数据飞轮 | VLM 判定成功的轨迹才入库训练 | 无人工筛选的自动数据质检 |

**自己改自己？**：否

---

### 3. [VERITAS](https://arxiv.org/abs/2606.18247)

**场景**：策略 ｜ **领域**：通用 ｜ **Oracle**：模型, 真实环境

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 闭环调整 | 生成器-验证器架构：VLM 验证器对 rollout 做推理时转向+验证 | 只有验证过的轨迹才回流训练 |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 权重训练 | 验证过的轨迹回流训练生成器 | 数据飞轮教科书形态 |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 只采集数据，不训练 | 运行时只做验证式采集，训练在离线批次完成 | 部署期零训练开销 |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 数据飞轮 | 验证过的轨迹持续回流训练 | 训练数据质量随部署量增长 |

**自己改自己？**：否

---

### 4. [Socratic-SWE: Self-Evolving Coding Agents via Trace-Driven Evolution](https://arxiv.org/abs/2606.07412)

**场景**：动作 ｜ **领域**：软件工程 ｜ **Oracle**：符号

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 闭环调整 | 复用 agent 历史解题痕迹作训练数据，生成针对性修复任务持续自进化 | 训练数据来自自身实战而非外部标注 |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 权重训练 | 闭环自进化训练管线持续微调编码 agent | — |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 只采集数据，不训练 | 运行时采集痕迹，训练离线 | — |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 数据飞轮 | 痕迹→任务→训练→更强 agent→更佳痕迹 | — |

**自己改自己？**：否

---

### 5. [CodeActInstruct → CodeActAgent](https://huggingface.co/xingyaoww/CodeActAgent-Mistral-7b-v0.1)

**场景**：动作 ｜ **领域**：软件工程 ｜ **Oracle**：符号

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 闭环调整 | 把执行反馈下的自纠行为蒸馏进权重 | 推理时自动纠错无需外部机制 |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 权重训练 | 7139 条自纠轨迹指令微调 Mistral-7B | 7B 匹敌 5-10× 参数量大模型 |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 运行时全冻结 | 部署时无采集无训练，自纠能力已沉淀在权重里 | 零额外推理成本 |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 数据飞轮 | 执行反馈产生自纠轨迹数据集（一次性沉淀） | 数据集开源可复用 |

**自己改自己？**：否

---

### 6. [Self-Taught Evaluators](https://arxiv.org/abs/2408.02666)

**场景**：奖励 ｜ **领域**：NLP ｜ **Oracle**：模型

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 闭环调整 | 合成响应对→推理偏好理由→训练判官→更高质量的合成，循环迭代 | 零人类标注训练出强判官 |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 权重训练 | 判官在自己合成的偏好标签上迭代微调 | RewardBench 75.4→88.3，匹敌人类标注训练的奖励模型 |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 采集数据＋训练 | 合成数据即时用于训练 | 数据成本≈推理成本 |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 验证反馈 | 偏好推理链为每个标签提供依据 | 判官结论可追溯 |

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 是 | 判官给自己造训练数据 | 评测器随被评模型一起进化，不会过时 |

---

### 7. [Rubric-ARM: Alternating RL for Rubric-Based Reward Modeling](https://arxiv.org/abs/2602.01511)

**场景**：奖励 ｜ **领域**：NLP ｜ **Oracle**：模型

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 闭环调整 | rubric 生成器与判官交替 RL、轮流进化 | 评测标准与执行共演，不锁死在初始 rubric |
| 多智能体 | 生成器 πr 与判官 πj 职责分离 | 各自目标清晰、可独立优化 |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 权重训练 | 两者都从偏好反馈被 RL 训练 | 奖励建模基准平均 +4.7% |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 采集数据＋训练 | 偏好对在训练中采集并消费 | — |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 验证反馈 | 判官按 rubric 逐条核对评分 | 可解释、可审计的奖励信号 |

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 是 | 判官给生成器打分，两者互为训练信号 | 回答「谁来给判官打分」的自指难题 |

---

### 8. [Self-Rewarding Language Models](https://arxiv.org/abs/2401.10020)

**场景**：奖励 ｜ **领域**：通用 ｜ **Oracle**：模型

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 闭环调整 | LLM 自己当裁判给自己的指令跟随输出打分（自奖励） | 奖励信号无需外部 RM |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 权重训练 | 自奖励数据经 DPO 迭代训练自身 | 指令跟随与对话质量三轮持续提升 |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 采集数据＋训练 | — | — |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 数据飞轮 | 每轮自奖励数据训练更强的自裁判 | — |

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 是 | 裁判、数据来源、被训练者是同一个模型 | 自指的经典形态：奖励来自内部 |

---

### 9. [SER: Self-Evolved Reward Learning for LLMs](https://arxiv.org/abs/2411.00418)

**场景**：奖励 ｜ **领域**：通用 ｜ **Oracle**：模型

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 闭环调整 | 奖励模型自己生成额外训练数据迭代改进自身 | 奖励模型不再是一次性产物 |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 权重训练 | 改进的奖励再经 PPO 优化策略 | 策略与奖励同步提升 |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 采集数据＋训练 | — | — |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 数据飞轮 | RM 自我改进飞轮 | — |

**自己改自己？**：否

---

### 10. [DreamCoder](https://arxiv.org/abs/2006.08381)

**场景**：技能 ｜ **领域**：通用 ｜ **Oracle**：模型

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 技能沉淀 | wake-sleep 库学习：解出的程序被抽象进技能库 | 复杂任务变成已有技能的组合 |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 权重训练 | 环内训练识别网络（recognition model）引导库搜索 | 搜索空间指数级缩小 |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 采集数据＋训练 | 每轮解题经验训练识别网络 | 搜索越来越快 |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 数据飞轮 | 技能库与识别网络共进化 | — |

**自己改自己？**：否

**论文中的其他发现**：识别网络在环内训练——L4 形态技能沉淀的鼻祖（DreamCoder）

---

### 11. [Code as Worlds](https://arxiv.org/abs/2608.27549)

**场景**：世界 ｜ **领域**：通用 ｜ **Oracle**：仿真

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 闭环调整 | 可执行世界表示（EWR）自动生成精确标注 | 标注成本趋零 |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 权重训练 | SFT+GRPO 训练 VLM | QuantiPhy 58.6，超 Gemini-3.1-Flash |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 采集数据＋训练 | 世界代码执行产生训练数据 | — |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 数据飞轮 | 世界代码生成数据训练模型，模型再改进世界代码 | — |

**自己改自己？**：否

---

### 12. [rStar-Math: Small LLMs Master Math Reasoning with Self-Evolved Deep Thinking](https://arxiv.org/abs/2501.04519)

**场景**：推理 ｜ **领域**：数学 ｜ **Oracle**：符号

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 进化搜索 | MCTS 自博弈搜索产生高质量推理轨迹 | 小模型获得远超其规模的推理数据 |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 权重训练 | 自进化深度思考：策略模型+过程奖励模型（SSM）自举训练 | 7B 级小模型达到奥数级推理 |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 采集数据＋训练 | — | — |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 数据飞轮 | 更好的策略产生更好的轨迹，训出更好的过程奖励 | — |

**自己改自己？**：否

---

### 13. [AlphaGeometry: Solving Olympiad Geometry without Human Demonstrations](https://www.nature.com/articles/s41586-023-06747-5)

**场景**：推理 ｜ **领域**：数学 ｜ **Oracle**：符号

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 闭环调整 | LM 提议辅助构图→符号演绎引擎（DD+AR）严格证明→失败再提议 | 每一步都被数学严格检验 |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 权重训练 | 符号引擎生成的 1 亿合成证明训练 LM | 零人类示范 |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 只采集数据，不训练 | 解题时纯推理，训练离线完成 | 推理无需训练设施 |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 数据飞轮 | 符号引擎产出数据训练神经提议器，提议器反哺引擎 | — |

**自己改自己？**：否

**论文中的其他发现**：IMO 几何 25/30 金牌水准

---

### 14. [Evo^2: Evolving the Evolver through Weight-Harness Co-Evolution](https://arxiv.org/abs/2610.13025)

**场景**：自我 ｜ **领域**：软件工程 ｜ **Oracle**：符号

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 进化搜索 | harness 编辑的提出-测试-选择进化 | Polyglot 82.1%（最强基线 62.6%） |
| 闭环调整 | 单一策略双角色：Proposer 写 harness 编辑、Reflector 诊断效果引导修订 | SWE-bench Verified 48.3%（最强基线 41.0%） |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 递归自我改进 | EvoTIDE：编辑提取+前缀续写回收轨迹，SFT+双角色交错 GRPO 训练 Proposer/Reflector——进化器本身被进化 | 把此前独立的权重线与 harness 线连成一体 |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 采集数据＋训练 | harness 修改的执行结果即时成为训练数据 | 权重更新与 harness 变化不再错位 |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 数据飞轮 | 更好的 harness 产生更好轨迹、训练出更好的进化器 | 进化出的 harness 跨基准迁移第一，无需继续进化 |

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 是 | 进化器（Proposer/Reflector）被自己的产物训练 | GPT-5-mini agent 24.4%→48.3%——闭源模型同样适用 |

**论文中的其他发现**：双角色框架对闭源模型也成立：只改 harness 即可复现大半增益

---

### 15. [RSI-Anything: Unlocking Recursive Self-Improvement with World Models](https://arxiv.org/abs/2610.13912)

**场景**：自我, 世界 ｜ **领域**：通用 ｜ **Oracle**：模型

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 世界模型 | JEPA-Anything 预测性世界模型同时指导动作选择与学习数据选择 | 外部反馈昂贵时用想象预筛数据 |
| 闭环调整 | 观测反馈驱动策略/工作流改进+世界模型条件适应 | 世界模型随策略进化而不失准 |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 递归自我改进 | 组件与兼容性检查决定更新的策略-模型对是否保留 | 代码修复 26.3%→29.2%（静态验证器基线） |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 采集数据＋训练 | 经验回流同时更新策略与世界模型 | 域通用框架 |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 数据飞轮 | 世界模型选数据→更好数据→更好世界模型 | 数据效率提升 |

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 是 | 改进的保留与否由自身世界模型预判 | 有风险的更新被挡在门外 |

---

### 16. [RRSI: Regularized Recursive Self-Improvement of Agent Harnesses](https://arxiv.org/abs/2609.24972)

**场景**：自我 ｜ **领域**：通用 ｜ **Oracle**：符号

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 进化搜索 | 迭代提出并选择 harness 组件编辑 | harness 优化全自动化 |
| 闭环调整 | 以评估成绩作为选择信号 | 无需人工审阅每个编辑 |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 递归自我改进 | harness-RSI：递归修改 agent 的提示/控制流/工具/记忆组件 | 分布内性能大涨 |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 只采集数据，不训练 | 冻结骨干上做编辑搜索 | — |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 数据飞轮 | 把正则化原则引入自改进循环 | OOD 增益保持——修复 harness-RSI 过拟合 |

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 是 | harness 编辑流程改进 harness 自身 | — |

**论文中的其他发现**：首次系统诊断 harness-RSI 过拟合病：编辑会记忆训练任务，分布内大涨而 OOD 增益消失甚至为负

---

### 17. [SoL-Pi: Recursively Scaling Auto-Research Loops for Efficient Agent Harness](https://arxiv.org/abs/2609.20519)

**场景**：自我, 研究 ｜ **领域**：软件工程 ｜ **Oracle**：符号

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 进化搜索 | 自动研究循环在越来越多样环境中 rollout harness 改进，机制经选择存活 | 4 个机制胜出且可迁移到开发环境之外 |
| 闭环调整 | 研究循环发现的 harness 改进直接部署回运行它的 harness | 研究工具自己成为研究成果 |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 递归自我改进 | RSI 作用于 harness 层：让 agent 先优化 harness 本身（token 效率） | 长任务 token 成本显著下降——Action Fusion、ObservationPack、Evidence-Preserving Reducer、Online Context Compact 四机制 |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 只采集数据，不训练 | 骨干模型冻结，改进全部落在 harness 机制上 | 生产级开源（3476 星），MIT 协议 |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 数据飞轮 | 跨环境 rollout 证据筛选机制 | 可迁移性经选择压力验证 |

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 是 | 自动研究循环改进的是运行这个循环的 harness | 改进者与被改进者是同一系统 |

**论文中的其他发现**：四个存活机制全部作用于 harness 不同部位：动作执行、上下文压缩、观测处理、委派

---

### 18. [MetaRSI-v1: A Meta-Recursive Self-Improving System for Recursive Self-Improving Systems Themselves](https://arxiv.org/abs/2609.06396)

**场景**：自我, 研究 ｜ **领域**：通用 ｜ **Oracle**：符号

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 闭环调整 | Data(𝒟)/Harness(ℋ)/Model(θ) 三个可写面统一为同一循环内核的算子实例化 | 三类自我改进共用一套验证与调度 |
| 进化搜索 | RSI² 调度器在类型化契约下编排算子序列并改写提案策略 | 改进步骤本身可被搜索优化 |
| 记忆上下文 | 改进历史与信号新鲜度规则持久化（H→M 与 M→M 禁止——数据不应早于能力变化） | 防止用过时数据训新能力 |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 递归自我改进 | MetaRSI² 再改进调度器本身——RSI 应用于 RSI | 平均 +10.9、胜固定管线 +3.6；SWE-bench Pro 10.3→19.5 |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 采集数据＋训练 | 模型只做提案，确定性代码执行验证/打分/发布 | 权限边界保证每步可复核 |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 数据飞轮 | 全链路闭环追踪信号 | 普查发现闭环形成追踪验证格式而非能力（ρ=-0.75）——oracle 类型决定 RSI 上限 |

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 是 | 调度器改进调度器自身 | 改进步骤的元层也在闭环内 |

**论文中的其他发现**：定量验证 oracle 类型决定论：闭环追踪的是验证格式而非能力

---

### 19. [Agent0: Curriculum and Executor Agents Co-Evolve from Zero Data](https://arxiv.org/abs/2511.16043)

**场景**：自我 ｜ **领域**：通用 ｜ **Oracle**：模型

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 多智能体 | 课程 agent 出题、执行 agent 解题，两者协同进化 | 任务难度自动匹配执行者当前能力 |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 递归自我改进 | 零数据起步，两个 agent 互为对方的训练信号源 | 从零数据冷启动共进化 |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 采集数据＋训练 | 执行轨迹即时回流训练 | 课程与能力同步增长 |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 数据飞轮 | 课程难度随执行者进步动态调整 | 始终维持有效训练优势 |

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 是 | 课程 agent 改进执行 agent，执行表现反过来改进课程 | 双向自指闭环 |

---

### 20. [Darwin Gödel Machine: Open-Ended Evolution of Self-Improving Agents (DGM)](https://arxiv.org/abs/2505.22954)

**场景**：自我 ｜ **领域**：软件工程 ｜ **Oracle**：符号

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 进化搜索 | 维护 agent 谱系档案，Darwin 式变异自身代码并按评估选择保留 | 开放式探索替代人工设计迭代 |
| 技能沉淀 | 改进以可复用代码组件形式留在档案里 | 好改动可被后续代际继承复用 |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 递归自我改进 | agent 修改自己的 scaffold 与工具代码，修改后的自己继续做下一轮修改 | SWE-bench 编码性能翻倍（×2） |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 只采集数据，不训练 | 骨干模型冻结，全部改进发生在代码层 | 单卡可跑，无需训练基础设施 |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 数据飞轮 | 每代评估结果进入档案指导后续选择 | 搜索随代际积累越来越准 |

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 是 | 改进对象就是改进者自身的代码 | 能力上限不受初始 scaffold 约束 |

**论文中的其他发现**：谱系档案保留被淘汰分支可回溯——开放式进化的多样性来源

---

### 21. [Aspire: Can Models Self-Evolve from Vague Goals?](https://arxiv.org/abs/2608.31111)

**场景**：自我 ｜ **领域**：NLP ｜ **Oracle**：符号

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 闭环调整 | 基准设计：目标操作化→选数据→选更新方法→自评是否进步 | 测出现有自进化研究漏测的元能力 |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 权重训练 | agent 自选更新方法（含训练）作用于自身 | 「怎么学」本身成为被评测对象 |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 采集数据＋训练 | 数据选择在运行时由 agent 决定 | — |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 验证反馈 | 隐藏评测任务校验是否真有进步 | 防止自我感觉良好式进化 |

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 是 | 学与不学、学什么的决策由 agent 自己做 | 补上「任务和指标都由人类给好」的盲区 |

---

### 22. [RISE: Recursive Improvement via Self-Extrapolating Policy Distillation](https://arxiv.org/abs/2609.05295)

**场景**：自我 ｜ **领域**：通用 ｜ **Oracle**：模型

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 闭环调整 | RLVR 训练循环中嵌入合成教师蒸馏环节 | 稀疏结果奖励变密集 token 级监督 |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 权重训练 | 从自身 RLVR 轨迹外推 checkpoint 位移（参数或 logit 空间）构造合成教师，再以教师信号监督训练 | 胜 RLVR-only 与单向自蒸馏 |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 采集数据＋训练 | 训练轨迹本身被回收为蒸馏素材 | 无需外部教师模型 |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 数据飞轮 | 教师随学生每轮重新外推生成 | 递归而非一次性压缩，监督质量随学生进步水涨船高 |

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 是 | 教师从学生自己的参数位移中外推而来 | 自监督不引入外部分布失配 |

---

### 23. [FlowReasoner](https://arxiv.org/abs/2504.15257)

**场景**：自我 ｜ **领域**：通用 ｜ **Oracle**：模型

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 多智能体 | 查询级元 agent 按输入生成定制多智能体系统（MAS） | 架构随查询而变，不再一套架构打天下 |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 权重训练 | RL+执行反馈训练元 agent | 定制的 MAS 一致优于固定架构 |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 运行时全冻结 | 部署时元 agent 只做生成不做学习 | — |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 数据飞轮 | 执行反馈持续训练元 agent | — |

**自己改自己？**：否

---

### 24. [Self-Adapting Language Models (SEAL)](https://arxiv.org/abs/2506.10943)

**场景**：自我 ｜ **领域**：通用 ｜ **Oracle**：模型

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 闭环调整 | 模型对任务生成 self-edits（如重述记忆的自然语言改写），作为后续适应的数据与更新指令 | 把提示工程内化为权重变化 |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 权重训练 | 模型自己生成微调数据+更新超参指令，触发对自身权重的再训练（SEAL 循环） | 知识注入后持续适应，单次微调无法维持 |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 采集数据＋训练 | 适应会话中模型产出 self-edit 数据，随即在自身权重上执行更新 | 适应沉淀为参数而非外部提示 |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 数据飞轮 | 每轮适应产生的数据成为下一轮训练素材 | 自我编辑质量随适应轮次提升 |

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 是 | 更新指令由模型自己提出，更新对象也是同一模型 | 无需外部训练器设计适配方案 |

---

### 25. [Search Self-play: Pushing the Frontier of Agent Capability without Supervision](https://arxiv.org/abs/2510.18821)

**场景**：研究 ｜ **领域**：网页 ｜ **Oracle**：真实环境

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 进化搜索 | LLM 同时充当任务提出者与求解者自博弈 | 免人工构造任务与标准答案 |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 递归自我改进 | 自博弈控制任务难度以产生有效训练优势，RL 训练自身 | 解除 agent RL 的人工数据瓶颈 |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 采集数据＋训练 | 多轮真实搜索引擎调用即数据采集 | 任务分布真实而非合成 |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 验证反馈 | 真实搜索引擎结果充当裁判 | ground truth 免费且无限 |

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 是 | 提出者=求解者同一模型 | 与 Absolute Zero 同构，oracle 从代码执行器换成真实环境 |

---

### 26. [Machines That Accelerate Machine-Making: A Research Agenda for Human-Demand-Guided Physical Recursive Self-Improvement](https://www.datafluxdynamics.ltd/research/machines-that-accelerate-machine-making.pdf)

**场景**：研究, 策略 ｜ **领域**：通用 ｜ **Oracle**：符号

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 单次生成 | 纲领文档而非算法实现：定义 P1-P5 因果位置与 PIPE（物理改进-生产边）形式化 | 给物理 RSI 提供统一坐标系 |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 递归自我改进 | P5=产生后续机器的算子——改进物理制造能力本身 | 4 个数学定理：可构造性/几何收缩/选择遗憾界/劳动系数收缩 |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 运行时全冻结 | 纯理论框架，无运行系统 | 形式化结论不依赖具体实现 |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 数据飞轮 | 证书链：每台机器的制造过程可追溯可验证 | 几何收缩定理成立的前提——选择空间随证据收缩 |

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 是 | 机器造更好的机器，人类需求环引导改进方向 | 避免能力陷阱（系统只改进自己擅长改进的） |

**论文中的其他发现**：人类需求引导双环：需求环决定改进方向，物理环执行改进——信息端终点是 DFM，物理端终点是 PRSI

---

### 27. [Absolute Zero: Reinforced Self-play Reasoning with Zero Data (AZR)](https://arxiv.org/abs/2505.03335)

**场景**：研究 ｜ **领域**：通用 ｜ **Oracle**：模型

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 进化搜索 | 单模型自博弈：自己出题、自己解题、自我验证 | 零人工数据启动推理训练 |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 递归自我改进 | 出题-解题-验证闭环产生的数据回流训练同一模型 | 跨数学/代码推理基准持续提升 |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 采集数据＋训练 | 自博弈 rollout 即数据采集，采集与训练交替 | 数据供应随能力增长自动扩展 |

**反馈栈**：无反馈

**自己改自己？**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 是 | 提出者=求解者=被改进者是同一个模型 | 完全自指的最简形态 |

**论文中的其他发现**：未见加速趋势证据——能力提升但改进速率未随时间增长

---

### 28. [Frontis-MA1: Training an AI4AI Model towards Recursive Self-Improvement in Machine Learning Engineering](https://arxiv.org/abs/2607.28568)

**场景**：研究 ｜ **领域**：软件工程 ｜ **Oracle**：符号

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 进化搜索 | OpenMLE-Evo 长程进化搜索：Draft/Improve/Debug/Crossover 四算子 | 学习与进化耦合在单环内 |
| 闭环调整 | OpenMLE-Gym 可验证环境+OpenMLE-RL 算子学习 | 执行接地保证可验证 |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 权重训练 | 35B 模型经执行接地 SFT+RL 后训练为 MLE 元进化 agent | MLE-Bench Lite 39→71%，超 GPT-5.5+Codex，接近 Kimi K3（2.8T） |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 只采集数据，不训练 | 部署时跑进化搜索，训练离线 | — |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 数据飞轮 | 进化搜索结果回流算子训练 | — |

**自己改自己？**：否

**论文中的其他发现**：AI4AI：RSI 近邻（未展示加速趋势）；框架与 35B 权重全开源

---

### 29. [Scaling Self-Play with Self-Guidance in Lean4](https://arxiv.org/abs/2604.20209)

**场景**：研究 ｜ **领域**：数学 ｜ **Oracle**：符号

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 进化搜索 | 自引导自博弈（SGS）用于 Lean4 定理证明 | — |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 权重训练 | Lean4 验证器提供奖励训练策略 | 渐进超越强 RL 基线的渐近求解率 |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 采集数据＋训练 | — | — |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 数据飞轮 | 证明尝试回流训练 | — |

**自己改自己？**：否

---

### 30. [STP: Self-play LLM Theorem Provers with Iterative Conjecturing and Proving](https://arxiv.org/abs/2502.00212)

**场景**：研究 ｜ **领域**：数学 ｜ **Oracle**：符号

**方向**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 进化搜索 | 猜想者与证明者两个角色自博弈，互为对方提供训练信号 | 定理证明的自改进环 |

**更新能力**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 权重训练 | 两个角色迭代互相提升 | — |

**运行时行为**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 采集数据＋训练 | — | — |

**反馈栈**

| tag方向 | 文章中具体设计 | 具体设计带来增益 |
|---|---|---|
| 数据飞轮 | 证明器产出训猜想器、猜想产出训证明器 | — |

**自己改自己？**：否

---


## 待迁移论文表（339 篇）

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
| 17 | [CodeDiffuser](https://www.roboticsproceedings.org/rss21/p072.pdf) | 策略 | 单次生成 | 权重训练 | 运行时全冻结 | 证据反馈 | 不适用 | 通用 | 否 |
| 18 | [RoboPro (Robotic Programmer)](https://arxiv.org/abs/2501.04268) | 策略 | 单次生成 | 权重训练 | 运行时全冻结 | 验证反馈 | 模型, 人类 | 通用 | 否 |
| 19 | [TT-VLA: On-the-Fly VLA Adaptation via Test-Time Reinforcement Learning](https://arxiv.org/abs/2601.06748) | 策略 | 闭环调整, 世界模型 | 运行时适应 | 采集数据＋训练 | 数据飞轮 | 真实环境 | 机器人 | 否 |
| 20 | [Dejavu: Post-Deployment Learning for Embodied Agents via Experience Feedback Network](https://arxiv.org/abs/2510.10181) | 策略 | 闭环调整, 记忆上下文 | 运行时适应 | 采集数据＋训练 | 数据飞轮 | 真实环境 | 机器人 | 否 |
| 21 | [AdaWorldPolicy: World-Model-Driven Diffusion Policy with Test-Time Adaptation](https://arxiv.org/abs/2602.20057) | 策略 | 世界模型 | 运行时适应 | 只训练，不采集 | 验证反馈 | 模型 | 机器人 | 否 |
| 22 | [Episodic Memory for Long-Horizon Robotic Manipulation](https://openreview.net/pdf?id=BBgDA4y0B9) | 策略 | 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 真实环境 | 机器人 | 否 |
| 23 | [MemoAct: Memory-Augmented Robotic Policies](https://tlf-tlf.github.io/MemoActPage/) | 策略 | 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 真实环境, 模型 | 机器人 | 否 |
| 24 | [RoboPara](https://proceedings.iclr.cc/paper_files/paper/2026/file/e8aa3f5e8b5f24b830f31fd828e2a2a3-Paper-Conference.pdf) | 策略 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 25 | [ASPIRE: Agentic Skills Discovery for Robotics](https://arxiv.org/abs/2607.00272) | 策略 | 技能沉淀, 闭环调整 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 真实环境, 仿真 | 机器人 | 否 |
| 26 | [EpiMem: Episodic Memory Indexing for Pretrained Manipulation Policies](https://arxiv.org/abs/2603.24576) | 策略 | 记忆上下文 | 机制冻结 | 只采集数据，不训练 | 数据飞轮 | 真实环境 | 机器人 | 否 |
| 27 | [RISE (Embodied): Compositional World Model Imagined Rollouts for Robot Policy](https://arxiv.org/abs/2602.11075) | 策略 | 世界模型 | 机制冻结 | 采集数据＋训练 | 验证反馈 | 仿真 | 机器人 | 否 |
| 28 | [Large Language Models as Commonsense Knowledge for Large-Scale Task Planning (LLM-MCTS)](https://arxiv.org/abs/2305.14078) | 策略 | 世界模型 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 29 | [GenSwarm](https://www.nature.com/articles/s44182-025-00065-w) | 策略 | 多智能体 | 机制冻结 | 运行时全冻结 | 证据反馈 | 真实环境 | 机器人 | 否 |
| 30 | [Genesys](https://dl.acm.org/doi/10.1145/3776736) | 策略 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 仿真 | 通用 | 否 |
| 31 | [Code Evolution for Control](https://arxiv.org/abs/2601.06845) | 策略 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 32 | [Evolution through Large Models (ELM)](https://arxiv.org/abs/2206.08896) | 策略 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 机器人 | 否 |
| 33 | [OmniManip](https://arxiv.org/abs/2501.03841) | 策略 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型, 仿真 | 通用 | 否 |
| 34 | [Contact-Rich Adaptive LLM-based Control (CoRAL)](https://arxiv.org/abs/2605.02600) | 策略 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 真实环境, 仿真 | 机器人 | 否 |
| 35 | [RoboInspector](https://arxiv.org/abs/2508.21378) | 策略 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 36 | [RoboCodeX](https://arxiv.org/abs/2402.16117) | 策略 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 37 | [ChatGPT for Robotics](https://arxiv.org/abs/2306.17582) | 策略 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 机器人 | 否 |
| 38 | [Robot Policy Code for High-Precision Tasks](https://scholar.google.com/scholar?q=%22Generating+Robot+Policy+Code%22+dexterous) | 策略 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 39 | [VoxPoser](https://arxiv.org/abs/2307.05973) | 策略 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 通用 | 否 |
| 40 | [ProgPrompt](https://arxiv.org/abs/2209.11302) | 策略 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 通用 | 否 |
| 41 | [Code as Policies](https://arxiv.org/abs/2209.07753) | 策略 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 机器人 | 否 |
| 42 | [CoRe: Collaborative Reinforcement Learning for Multi-Agent Code Generation](https://arxiv.org/abs/2605.24812) | 动作 | 多智能体, 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 软件工程 | 否 |
| 43 | [RLUF: Reinforcement Learning from User Feedback](https://arxiv.org/abs/2505.14946) | 动作, 奖励 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 人类 | 通用 | 否 |
| 44 | [WebRL: Training LLM Web Agents via Self-Evolving Online Curriculum Reinforcement Learning](https://arxiv.org/abs/2411.02337) | 动作 | 闭环调整, 进化搜索 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 网页 | 否 |
| 45 | [Tool-R0: Self-Evolving LLM Agents for Tool-Learning from Zero Data](https://arxiv.org/abs/2602.21320) | 动作 | 进化搜索, 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 46 | [UI-TARS: Pioneering Automated GUI Interaction with Native Agents](https://arxiv.org/abs/2501.12326) | 动作 | 单次生成 | 权重训练 | 运行时全冻结 | 验证反馈 | 不适用 | 图形界面 | 否 |
| 47 | [SWEET-RL: Training Multi-Turn LLM Agents on Collaborative Tasks](https://arxiv.org/abs/2503.15478) | 动作 | 多智能体 | 权重训练 | 采集数据＋训练 | 验证反馈 | 模型 | 软件工程 | 否 |
| 48 | [Reinforcement World Model Learning (RWML)](https://arxiv.org/abs/2602.05842) | 动作 | 世界模型 | 权重训练 | 采集数据＋训练 | 无反馈 | 模型 | 通用 | 否 |
| 49 | [Web Agents with World Models (WMA)](https://openreview.net/forum?id=moWiYJuSGF) | 动作 | 世界模型 | 权重训练 | 采集数据＋训练 | 无反馈 | 仿真 | 前端 | 否 |
| 50 | [ToolGen: Unified Tool Retrieval and Calling via Generation（近邻）](https://openreview.net/forum?id=XLMAMmowdY) | 动作 | 单次生成 | 权重训练 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 51 | [AgentTuning: Enabling Generalized Agent Abilities for LLMs](https://arxiv.org/abs/2310.12823) | 动作 | 闭环调整 | 权重训练 | 运行时全冻结 | 验证反馈 | 符号 | 通用 | 否 |
| 52 | [OpenHands CodeAct 2.1](https://www.openhands.dev/blog/openhands-codeact-21-an-open-state-of-the-art-software-development-agent) | 动作 | 闭环调整 | 权重训练 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 53 | [TT-SI: Self-Improving LLM Agents with Test-Time Training](https://aclanthology.org/2026.findings-acl.462.pdf) | 动作 | 闭环调整 | 运行时适应 | 采集数据＋训练 | 验证反馈 | 模型 | 通用 | 否 |
| 54 | [Grounded Test-Time Adaptation for LLM Agents](https://arxiv.org/abs/2511.04847) | 动作 | 闭环调整 | 运行时适应 | 采集数据＋训练 | 验证反馈 | 符号 | 通用 | 否 |
| 55 | [aTTT: Agentic Test-Time Training for LLM Agents](https://arxiv.org/abs/2607.03441) | 动作 | 闭环调整 | 运行时适应 | 采集数据＋训练 | 验证反馈 | 符号 | 通用 | 否 |
| 56 | [Scaling Agent Productivity with Automated Tool Generation](https://arxiv.org/abs/2512.24615) | 动作 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 数学 | 否 |
| 57 | [H-EPM: Experience-Evolving Multi-Turn Tool-Use Agent with Hybrid Episodic-Procedural Memory](https://arxiv.org/abs/2512.07287) | 动作 | 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 58 | [WebXSkill: Skill Learning for Autonomous Web Agents](https://arxiv.org/abs/2604.13318) | 动作 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 网页 | 否 |
| 59 | [Runtime Harness Adaptation for Deterministic LLM Agents](https://arxiv.org/abs/2605.22166) | 动作 | 闭环调整 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 软件工程 | 否 |
| 60 | [PILOT in the Loop: Live Self-Improvement for Long-Horizon Agents](https://arxiv.org/abs/2608.26530) | 动作 | 闭环调整, 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号, 真实环境 | 通用 | 否 |
| 61 | [ExpeL: LLM Agents Are Experiential Learners](https://arxiv.org/abs/2308.10144) | 动作 | 技能沉淀, 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 62 | [SICA: A Self-Improving Coding Agent](https://arxiv.org/abs/2504.15228) | 动作 | 闭环调整 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 软件工程 | 是 |
| 63 | [Live-SWE-agent: Can Software Engineering Agents Self-Evolve on the Fly?](https://arxiv.org/abs/2511.13646) | 动作 | 闭环调整 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 软件工程 | 否 |
| 64 | [LATM (LLMs as Tool Makers)](https://openreview.net/forum?id=qV83K9d5WB) | 动作 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 65 | [CRAFT: Customizing LLMs by Creating and Retrieving Specialized Tools](https://arxiv.org/abs/2309.17428) | 动作 | 技能沉淀 | 机制自进化 | 运行时全冻结 | 数据飞轮 | 模型 | 通用 | 否 |
| 66 | [DynaSaur](https://arxiv.org/abs/2411.01747) | 动作 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 67 | [SkillWeaver: Web Agents can Self-Improve by Discovering and Honing Skills](https://arxiv.org/abs/2504.07079) | 动作 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 68 | [Agent Workflow Memory (AWM)](https://arxiv.org/abs/2409.07429) | 动作 | 技能沉淀, 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 前端 | 否 |
| 69 | [SWE-bench Science: Can Coding Agents Resolve Engineering Tasks in Science?](https://arxiv.org/abs/2608.19799) | 动作, 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 符号 | 软件工程 | 否 |
| 70 | [World-Model-Augmented Web Agents with Action Correction](https://arxiv.org/abs/2602.15384) | 动作 | 世界模型 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 网页 | 否 |
| 71 | [CREATOR: Tool Creation for Disentangling Abstraction and Reasoning](https://arxiv.org/abs/2305.14318) | 动作 | 技能沉淀 | 机制冻结 | 运行时全冻结 | 验证反馈 | 符号 | 通用 | 否 |
| 72 | [Is Your LLM Secretly a World Model of the Internet? (WebDreamer)](https://arxiv.org/abs/2411.06559) | 动作 | 世界模型 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 网页 | 否 |
| 73 | [LATS（近邻）](https://arxiv.org/abs/2310.04406) | 动作 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 74 | [CoAct-1: Computer-Using Agents with Coding as Actions](https://arxiv.org/abs/2508.03923) | 动作 | 闭环调整, 多智能体 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 图形界面 | 否 |
| 75 | [CodeAct: Executable Code Actions Elicit Better LLM Agents](https://arxiv.org/abs/2402.01030) | 动作 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 软件工程 | 否 |
| 76 | [Agent S3 / OSWorld-ACI](https://github.com/simular-ai/agent-s) | 动作 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 符号 | 前端 | 否 |
| 77 | [RM-R1: Reward Modeling as Reasoning](https://arxiv.org/abs/2505.02387) | 奖励 | 闭环调整 | 权重训练 | 采集数据＋训练 | 验证反馈 | 模型 | NLP | 否 |
| 78 | [Weaver: Shrinking the Generation-Verification Gap with Weak Verifiers](https://arxiv.org/abs/2506.18203) | 奖励 | 单次生成 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 79 | [From Curiosity to Competence: How World Models Interact with the Dynamics of Exploration](https://arxiv.org/abs/2507.08210) | 奖励, 策略 | 世界模型 | 权重训练 | 采集数据＋训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 80 | [Large Reward Models: Generalizable Online Robot Reward Models](https://arxiv.org/abs/2603.16065) | 奖励 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 真实环境, 人类 | 机器人 | 否 |
| 81 | [DERL: Differentiable Evolutionary Discovery of Optimal Reward Structures](https://arxiv.org/abs/2512.13399) | 奖励 | 进化搜索 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 仿真 | 通用 | 否 |
| 82 | [RM-Distiller（近邻）](https://arxiv.org/abs/2601.14032) | 奖励 | 单次生成 | 权重训练 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 83 | [Generating and Refining Dynamic Evaluation Rubrics for LLM-as-a-Judge](https://arxiv.org/abs/2605.30568) | 奖励 | 闭环调整 | 运行时适应 | 只采集数据，不训练 | 验证反馈 | 模型 | NLP | 否 |
| 84 | [Inference-Time Reward Hacking in Large Language Models](https://arxiv.org/abs/2508.08884) | 奖励 | 单次生成 | 运行时适应 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 85 | [TDRM: Smooth Reward Models with Temporal Difference for LLM Reasoning](https://openreview.net/forum?id=j2oWVgTFNX) | 奖励 | 世界模型, 闭环调整 | 机制自进化 | 运行时全冻结 | 验证反馈 | 模型 | 数学 | 否 |
| 86 | [ENPIRE: Agentic Robot Policy Self-Improvement in the Real World](https://arxiv.org/abs/2606.19980) | 奖励 | 多智能体, 闭环调整 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 真实环境 | 机器人 | 否 |
| 87 | [OpenRubrics: Scalable Synthetic Rubric Generation for Reward Modeling](https://arxiv.org/abs/2510.07743) | 奖励 | 进化搜索 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型, 人类 | NLP | 否 |
| 88 | [Autorubric: A Unifying Framework for Rubric-Based LLM Evaluation on Non-Verifiable Tasks](https://arxiv.org/abs/2603.00077) | 奖励 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | NLP | 否 |
| 89 | [AutoRubric: Rubric-Based Generative Rewards for Faithful Multimodal Reasoning](https://arxiv.org/abs/2510.14738) | 奖励 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 多模态 | 否 |
| 90 | [Rubrics as Rewards: Reinforcement Learning Beyond Verifiable Domains](https://arxiv.org/abs/2507.17746) | 奖励 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | NLP | 否 |
| 91 | [Reward Model Overoptimisation in Iterated RLHF](https://arxiv.org/abs/2505.18126) | 奖励 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 92 | [FORGE: A Multi-Agent LLM Framework for Reward Design](https://openreview.net/forum?id=Z6GStCfccl) | 奖励 | 多智能体, 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 93 | [LaRes: Evolutionary Reinforcement Learning with LLM-based Adaptive Reward Search](https://papers.nips.cc/paper_files/paper/2025/hash/21b5d3a17aa5525f30bfd2bc59ac3a48-Abstract-Conference.html) | 奖励 | 进化搜索 | 机制冻结 | 采集数据＋训练 | 验证反馈 | 仿真 | 机器人 | 否 |
| 94 | [Reward Modeling for Reinforcement Learning-Based LLM Reasoning: A Survey](https://arxiv.org/abs/2602.09305) | 奖励 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 通用 | 否 |
| 95 | [SENSEI: Semantic Exploration Guided by Foundation Models](https://arxiv.org/abs/2503.01584) | 奖励 | 世界模型 | 机制冻结 | 采集数据＋训练 | 数据飞轮 | 模型 | 机器人 | 否 |
| 96 | [REvolve: Reward Evolution with Large Language Models](https://arxiv.org/abs/2406.01309) | 奖励 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 97 | [PCGRLLM](https://arxiv.org/abs/2502.10906) | 奖励 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 仿真 | Minecraft | 否 |
| 98 | [MoRE](https://imt-atlantique.hal.science/hal-05450173/document) | 奖励 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 99 | [DrEureka](https://arxiv.org/abs/2406.01967) | 奖励 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 100 | [Eureka](https://arxiv.org/abs/2310.12931) | 奖励 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 机器人 | 否 |
| 101 | [CARD: A Large Language Model-Driven Reward Design Framework](https://arxiv.org/abs/2410.14660) | 奖励 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 102 | [Reward Design with Language Models (L2R)（近邻）](https://arxiv.org/abs/2303.00001) | 奖励 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 103 | [Text2Reward（初版）](https://arxiv.org/abs/2309.11489) | 奖励 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 仿真, 人类 | 通用 | 否 |
| 104 | [Emergent Tool Use From Multi-Agent Autocurricula](https://arxiv.org/abs/1909.07528) | 技能 | 多智能体, 进化搜索 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 仿真 | Minecraft | 否 |
| 105 | [SAGE: Skill Augmented GRPO for Self-Evolution](https://arxiv.org/abs/2512.17102) | 技能 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 106 | [DADS: Dynamics-Aware Unsupervised Discovery of Skills](https://arxiv.org/abs/1907.01657) | 技能 | 世界模型 | 权重训练 | 采集数据＋训练 | 验证反馈 | 模型 | 通用 | 否 |
| 107 | [LUCID: Latent-Skill Unified Control via Imagined Dynamics](https://arxiv.org/abs/2608.07746) | 技能 | 世界模型 | 权重训练 | 采集数据＋训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 108 | [Odyssey](https://openreview.net/forum?id=vtGLtSxtqv) | 技能 | 技能沉淀 | 权重训练 | 只采集数据，不训练 | 无反馈 | 模型 | 通用 | 否 |
| 109 | [JARVIS-1](https://arxiv.org/search/?searchtype=all&query=JARVIS-1+open-world+multi-task+agents+memory-augmented) | 技能 | 技能沉淀 | 权重训练 | 只采集数据，不训练 | 无反馈 | 模型 | 通用 | 否 |
| 110 | [SkillFoundry: Building Self-Evolving Agent Skill Libraries](https://arxiv.org/abs/2604.03964) | 技能 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 111 | [SkillAxe: Sharpening LLM-Authored Agent Skills Through Execution Feedback](https://arxiv.org/abs/2606.10546) | 技能 | 闭环调整 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 112 | [MineEvolve: Minecraft Skills and Guardrails from Experience](https://arxiv.org/abs/2603.13131) | 技能, 约束 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | Minecraft | 否 |
| 113 | [Self-Evolving Embodied Agents via Skill-Harness Evolution](https://arxiv.org/abs/2608.11350) | 技能 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 114 | [Super Library Agent](https://arxiv.org/abs/2608.29310) | 技能 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 无反馈 | 模型 | 通用 | 否 |
| 115 | [Voyager](https://arxiv.org/abs/2305.16291) | 技能 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | Minecraft | 否 |
| 116 | [Multi-Resolution Skill Discovery for HRL Agents](https://arxiv.org/abs/2505.21410) | 技能 | 世界模型 | 机制冻结 | 运行时全冻结 | 验证反馈 | 仿真 | 机器人 | 否 |
| 117 | [CoEvoSkills: Self-Evolving Agent Skills via Co-Evolutionary Methods](https://arxiv.org/abs/2604.01687) | 技能 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 118 | [EvoSkill](https://arxiv.org/abs/2603.02766) | 技能 | 多智能体 | 机制冻结 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 119 | [LEGO-Prover](https://scholar.google.com/scholar?q=LEGO-Prover+skill+library+theorem+proving) | 技能, 研究 | 技能沉淀 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 模型 | 数学 | 否 |
| 120 | [LILO](https://arxiv.org/abs/2310.19791) | 技能 | 技能沉淀 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 模型 | 通用 | 否 |
| 121 | [Provably Safe Policy Updates in Deep Reinforcement Learning](https://arxiv.org/abs/2604.09452) | 约束 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 122 | [SafeDreamer: Safe Reinforcement Learning with World Models](https://arxiv.org/abs/2307.07176) | 约束 | 世界模型 | 权重训练 | 采集数据＋训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 123 | [Test-Time Adaptation for Generalizable Task Progress Estimation](https://arxiv.org/abs/2506.10085) | 约束 | 闭环调整 | 运行时适应 | 只训练，不采集 | 验证反馈 | 模型 | 机器人 | 否 |
| 124 | [Where LLM Agents Fail and How They Can Learn From Failures](https://arxiv.org/abs/2509.25370) | 约束, 动作 | 记忆上下文, 闭环调整 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 125 | [AIR: Improving Agent Safety through Incident Response](https://arxiv.org/abs/2602.11749) | 约束 | 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 126 | [CAPS: Constraint-Adaptive Policy Switching for Offline Safe RL](https://ojs.aaai.org/index.php/AAAI/article/view/33726) | 约束 | 闭环调整 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 127 | [Proactive Runtime Enforcement of LLM Agent Safety](https://arxiv.org/abs/2508.00500) | 约束 | 世界模型, 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 128 | [Toward Safe LLM Agents: A Survey of Specification, Verification, and Enforcement](https://arxiv.org/abs/2608.14590) | 约束 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 符号 | 通用 | 否 |
| 129 | [ToolEmu: Identifying the Risks of LLM Agents with an LLM Emulator](https://arxiv.org/abs/2309.04786) | 约束 | 世界模型 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 130 | [SafeManip: A Property-Driven Benchmark for Temporal Safety in Robotic Manipulation](https://arxiv.org/abs/2605.12386) | 约束 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 机器人 | 否 |
| 131 | [RoboGuard: Safety Guardrails for LLM-Enabled Robots](https://arxiv.org/abs/2503.07885) | 约束 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 机器人 | 否 |
| 132 | [Learning Failure Prevention Skills for Safe Robot Manipulation](https://arxiv.org/abs/2305.02807) | 约束 | 技能沉淀 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 真实环境 | 机器人 | 否 |
| 133 | [SAHOO: Monitoring Alignment Drift during RSI](https://arxiv.org/abs/2603.06333) | 约束 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 134 | [AutoSafeCoder](https://neurips.cc/virtual/2024/99390) | 约束 | 多智能体 | 机制冻结 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 135 | [AssertMiner（近邻）](https://arxiv.org/abs/2511.10007) | 约束 | 技能沉淀 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 符号 | 通用 | 否 |
| 136 | [Lisa（近邻）](https://arxiv.org/abs/2607.18711) | 约束 | 技能沉淀 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 137 | [QD 漏洞多样性搜索（近邻）](https://arxiv.org/abs/2606.00801) | 约束 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 模型 | 通用 | 否 |
| 138 | [UnitTenX（近邻）](https://arxiv.org/abs/2510.05441) | 约束 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 符号 | 通用 | 否 |
| 139 | [Property-Generated Solver](https://arxiv.org/abs/2506.18315) | 约束 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 符号 | 通用 | 否 |
| 140 | [Code-as-Monitor (CaM)](https://arxiv.org/abs/2412.04455) | 约束 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型, 仿真 | 通用 | 否 |
| 141 | [Pre-Execution Safety Gate](https://arxiv.org/abs/2604.05427) | 约束 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 机器人 | 否 |
| 142 | [Plug in the Safety Chip](https://openreview.net/pdf?id=INvxF4iQ34) | 约束 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 143 | [FlexiWorld: Learning and Planning via Flexible Action Chunks Across Multiple Time Scales](https://arxiv.org/abs/2609.35138) | 世界, 动作 | 世界模型 | 权重训练 | 采集数据＋训练 | 无反馈 | 仿真 | 机器人 | 否 |
| 144 | [SimWorld Studio: Open-Source UE5 Platform for Automatic Generation of Evolving Embodied Environments](https://arxiv.org/abs/2605.09423) | 世界 | 单次生成 | 权重训练 | 采集数据＋训练 | 验证反馈 | 仿真 | 机器人 | 否 |
| 145 | [PAN: A World Model for General Interactable Worlds via Generative Latent Prediction](https://arxiv.org/abs/2506.16616) | 世界, 策略 | 世界模型 | 权重训练 | 采集数据＋训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 146 | [Genie: Generative Interactive Environments](https://arxiv.org/abs/2402.15391) | 世界 | 单次生成 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 仿真 | 通用 | 否 |
| 147 | [Agent-World: Scaling Real-World Environment Synthesis](https://arxiv.org/abs/2604.18292) | 世界 | 世界模型, 进化搜索 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 仿真 | 通用 | 否 |
| 148 | [Agent World Model: Infinity Synthetic Environments](https://arxiv.org/abs/2602.10090) | 世界 | 单次生成 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 仿真 | 通用 | 否 |
| 149 | [Code2Worlds: Empowering Coding LLMs for 4D World Models](https://arxiv.org/abs/2602.11757) | 世界 | 单次生成 | 权重训练 | 运行时全冻结 | 验证反馈 | 仿真 | 通用 | 否 |
| 150 | [Cosmos（近邻，非代码）](https://arxiv.org/abs/2501.03575) | 世界 | 单次生成 | 权重训练 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 151 | [Code-as-World-VL](https://arxiv.org/abs/2608.27549) | 世界 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 仿真 | 通用 | 否 |
| 152 | [Memento 3: Model-Based Recursive Self-Improvement through Reflective Rulebooks](https://arxiv.org/abs/2610.11794) | 世界, 自我 | 世界模型, 记忆上下文, 闭环调整 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 是 |
| 153 | [Self-Evolving World Models for LLM Agent Planning](https://arxiv.org/abs/2606.30639) | 世界 | 闭环调整 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 154 | [Dual Digital Twin（近邻）](https://www.mdpi.com/2079-9292/14/24/4806) | 世界 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 无反馈 | 仿真 | 通用 | 否 |
| 155 | [Scaling Laws for Pre-training Agents and World Models](https://arxiv.org/abs/2411.04434) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 仿真 | 通用 | 否 |
| 156 | [A Definition and Roadmap for World Models](https://arxiv.org/abs/2607.06401) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 模型 | 通用 | 否 |
| 157 | [NeSyS: Neuro-Symbolic Synergy for Interactive World Modeling](https://arxiv.org/abs/2602.10480) | 世界 | 世界模型 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 158 | [World Model for Robot Learning: A Comprehensive Survey](https://arxiv.org/abs/2605.00080) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 仿真 | 机器人 | 否 |
| 159 | [Foundation World Models for Agents that Learn, Verify, and Plan](https://arxiv.org/abs/2602.23997) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 模型 | 通用 | 否 |
| 160 | [From Word to World: Can Large Language Models be World Models?](https://arxiv.org/abs/2512.18832) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 通用 | 否 |
| 161 | [SR-Platform](https://arxiv.org/abs/2605.14700) | 世界 | 技能沉淀, 多智能体 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 162 | [Agent2World: Learning to Generate Symbolic World Models via Adaptive Tool-Use](https://arxiv.org/abs/2512.22336) | 世界 | 世界模型, 多智能体 | 机制冻结 | 运行时全冻结 | 数据飞轮 | 模型 | 通用 | 否 |
| 163 | [PoE-World: Compositional World Modeling with Products of Experts](https://arxiv.org/abs/2505.10819) | 世界 | 世界模型 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 164 | [Generating Code World Models with LLMs (GIF-MCTS)](https://arxiv.org/abs/2405.15383) | 世界 | 世界模型 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 165 | [Executable World Models for ARC-AGI-3](https://arxiv.org/abs/2608.27549) | 世界 | 世界模型 | 机制冻结 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 166 | [Code World Models for General Game Playing](https://arxiv.org/abs/2510.04542) | 世界 | 世界模型, 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 167 | [WorldCoder: A Model-Based LLM Agent](https://arxiv.org/abs/2402.12275) | 世界 | 世界模型 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 168 | [3DCodeBench](https://arxiv.org/abs/2606.01057) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 169 | [VoxelCodeBench](https://arxiv.org/abs/2604.02580) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 170 | [Code-as-Room](https://arxiv.org/abs/2605.18451) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 171 | [SceneCode](https://arxiv.org/abs/2605.19587) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 172 | [Scene Language](https://arxiv.org/search/?searchtype=all&query=Scene+Language+visual+numerical+scene+generation) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 173 | [Genesis](https://arxiv.org/abs/2502.02590) | 世界 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 174 | [RoboGen](https://arxiv.org/abs/2311.01455) | 世界 | 单次生成 | 机制冻结 | 采集数据＋训练 | 无反馈 | 仿真 | 通用 | 否 |
| 175 | [Leveraging Human Revisions for Improving Text-to-Layout Generation](https://arxiv.org/abs/2405.13026) | 设计 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 人类 | 前端 | 否 |
| 176 | [BRepCLIP: Contrastive Multimodal Pretraining on BRep](https://arxiv.org/abs/2606.05515) | 设计 | 技能沉淀 | 权重训练 | 运行时全冻结 | 验证反馈 | 仿真 | CAD | 否 |
| 177 | [Generative Floor Plan Design with LLMs via Reinforcement Learning](https://arxiv.org/abs/2605.14117) | 设计 | 单次生成 | 权重训练 | 运行时全冻结 | 验证反馈 | 不适用 | 体系结构 | 否 |
| 178 | [VeriCoder: Fine-tuned RTL Generation with 125K+ Examples](https://arxiv.org/abs/2504.15659) | 设计 | 单次生成 | 权重训练 | 运行时全冻结 | 验证反馈 | 符号 | 芯片 | 否 |
| 179 | [RTLCoder: Outperforming GPT-3.5 in Design RTL Generation](https://arxiv.org/abs/2312.08617) | 设计 | 单次生成 | 权重训练 | 运行时全冻结 | 数据飞轮 | 符号 | 芯片 | 否 |
| 180 | [CAD-Recode: Reverse Engineering CAD Code from Point Clouds](https://arxiv.org/abs/2412.14042) | 设计 | 单次生成 | 权重训练 | 运行时全冻结 | 验证反馈 | 不适用 | CAD | 否 |
| 181 | [Text2CAD](https://sadilkhan.github.io/text2cad-project/) | 设计 | 单次生成 | 权重训练 | 运行时全冻结 | 证据反馈 | 不适用 | CAD | 否 |
| 182 | [Interactive Evolutionary Image Generation with Bayesian Optimization](https://research-portal.uu.nl/ws/files/235432773/Image_Generation_with_Interactive_Evolutionary_System_using_Bayesian_Optimization.pdf) | 设计 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 人类 | 通用 | 否 |
| 183 | [AssemCAD: Representative Production-Ready CAD Assemblies](https://arxiv.org/abs/2607.05123) | 设计 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 仿真 | CAD | 否 |
| 184 | [CADIR: A Cross-Backend Editable Intermediate Representation](https://arxiv.org/abs/2608.00891) | 设计 | 技能沉淀 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | CAD | 否 |
| 185 | [Large Language Models for Computer-Aided Design: A Survey](https://arxiv.org/abs/2505.08137) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | CAD | 否 |
| 186 | [Catala: A Programming Language for the Law](https://arxiv.org/abs/2103.03198) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 符号 | 法律 | 否 |
| 187 | [IFC-Based Building Design Using Large Language Models](https://arxiv.org/abs/2511.05533) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 体系结构 | 否 |
| 188 | [Text2MBL: Text-to-Code Generation for Modular Building Layouts](https://arxiv.org/abs/2509.23713) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 体系结构 | 否 |
| 189 | [Interaction2Code: How Far Are We From Automatic Interactive Webpage Generation?](https://arxiv.org/abs/2411.03292) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 前端 | 否 |
| 190 | [Web2Code: A Large-scale Webpage-to-Code Dataset and Benchmark](https://proceedings.neurips.cc/paper_files/paper/2024/file/cb66be286795d71f89367d596bf78ea7-Paper-Datasets_and_Benchmarks_Track.pdf) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 前端 | 否 |
| 191 | [Text2CAD-Bench: A Benchmark for LLM-based Text-to-CAD](https://arxiv.org/abs/2605.18430) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | CAD | 否 |
| 192 | [EvolVE: Evolutionary Search for LLM-based Verilog Generation](https://arxiv.org/abs/2601.18067) | 设计 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 芯片 | 否 |
| 193 | [CADEvolve: Creating Realistic CAD via Program Evolution](https://arxiv.org/abs/2602.16317) | 设计 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 数据飞轮 | 仿真 | CAD | 否 |
| 194 | [EvoCAD: Evolutionary CAD Code Generation with Vision Language Models](https://arxiv.org/abs/2510.11631) | 设计 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | CAD | 否 |
| 195 | [From Surrogate Modeling to Autonomous Design](https://arxiv.org/abs/2608.18279) | 设计 | 世界模型 | 机制冻结 | 运行时全冻结 | 证据反馈 | 仿真 | 通用 | 否 |
| 196 | [NeOn-GPT](https://2024.eswc-conferences.org/wp-content/uploads/2024/05/77770034.pdf) | 设计 | 多智能体 | 机制冻结 | 运行时全冻结 | 无反馈 | 模型 | 本体 | 否 |
| 197 | [NL2SHACL 基准（近邻）](https://arxiv.org/html/2608.07530v2) | 设计 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 证据反馈 | 符号 | 本体 | 否 |
| 198 | [xpSHACL](https://arxiv.org/abs/2507.08432) | 设计 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 符号 | 本体 | 否 |
| 199 | [Extended NeOn-GPT](https://journals.sagepub.com/doi/abs/10.1177/22104968261453138) | 设计 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 本体 | 否 |
| 200 | [Text-to-CAD + Visual Feedback](https://icml.cc/virtual/2025/poster/46007) | 设计 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | CAD | 否 |
| 201 | [SPIRES / OntoGPT: Structured Prompt Interrogation and Recursive Extraction of Semantics](https://arxiv.org/abs/2304.02711) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 本体 | 否 |
| 202 | [RIGOR: Retrieval-Augmented Generation of Ontologies from Relational Schemas](https://arxiv.org/abs/2506.01232) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 本体 | 否 |
| 203 | [Ontology Generation using LLMs](https://arxiv.org/abs/2503.05388) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 本体 | 否 |
| 204 | [Text-to-CadQuery](https://arxiv.org/abs/2505.06507) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 仿真 | CAD | 否 |
| 205 | [Design2Code](https://arxiv.org/abs/2403.03163) | 设计 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 前端 | 否 |
| 206 | [Improving Test-Time Scaling with Adaptive Looped Transformers](https://arxiv.org/abs/2609.35748) | 推理 | 闭环调整 | 权重训练 | 只训练，不采集 | 无反馈 | 不适用 | NLP | 否 |
| 207 | [Knowing When Thinking Is Not Enough: Teaching Small Reasoning Models to Reason Beyond Their Parametric Knowledge](https://arxiv.org/abs/2609.34327) | 推理 | 闭环调整 | 权重训练 | 采集数据＋训练 | 验证反馈 | 符号 | NLP | 否 |
| 208 | [Beyond Repeated Sampling: Learning Search Policies for LLM Reasoning](https://arxiv.org/abs/2609.26704) | 推理 | 闭环调整 | 权重训练 | 采集数据＋训练 | 验证反馈 | 符号 | 数学 | 否 |
| 209 | [ReflectRL: Learning from Golden Negative Trajectories via Reflective-to-Direct Reasoning](https://arxiv.org/abs/2608.03972) | 推理 | 闭环调整 | 权重训练 | 采集数据＋训练 | 验证反馈 | 模型 | 数学 | 否 |
| 210 | [Self-Improvement of Language Models by Post-Training on Multi-Agent Debate](https://arxiv.org/abs/2509.15172) | 推理 | 多智能体 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 211 | [SimpleTIR: End-to-End Reinforcement Learning for Multi-Turn Tool-Integrated Reasoning](https://arxiv.org/abs/2509.02479) | 推理 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 数学 | 否 |
| 212 | [ReTool: Reinforcement Learning for Strategic Tool Use in LLMs](https://arxiv.org/abs/2504.11536) | 推理 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 数学 | 否 |
| 213 | [STaR: Bootstrapping Reasoning with Reasoning](https://arxiv.org/abs/2203.14465) | 推理 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 数学 | 否 |
| 214 | [VPD (Visual Program Distillation)](https://www.semanticscholar.org/paper/af1c871282ec122869d03f5420ef5d9143358a91) | 推理 | 单次生成 | 权重训练 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 215 | [Test-Time Curricula for Targeted Reinforcement Learning](https://openreview.net/forum?id=HoUIYpitfo) | 推理 | 进化搜索, 闭环调整 | 运行时适应 | 采集数据＋训练 | 验证反馈 | 模型 | 数学 | 否 |
| 216 | [Test-Time Policy Adaptation for Enhanced Multi-Turn Reasoning](https://arxiv.org/abs/2509.23166) | 推理 | 闭环调整 | 运行时适应 | 采集数据＋训练 | 验证反馈 | 模型 | 数学 | 否 |
| 217 | [Test-Time Tool Evolution for Scientific Reasoning](https://arxiv.org/abs/2601.07641) | 推理 | 技能沉淀 | 运行时适应 | 只采集数据，不训练 | 验证反馈 | 符号 | 数学 | 否 |
| 218 | [Tent: Fully Test-time Adaptation by Entropy Minimization](https://arxiv.org/abs/2006.10726) | 推理 | 单次生成 | 运行时适应 | 只训练，不采集 | 验证反馈 | 模型 | 通用 | 否 |
| 219 | [TTRL: Test-Time Reinforcement Learning](https://arxiv.org/abs/2504.16084) | 推理 | 闭环调整 | 运行时适应 | 采集数据＋训练 | 验证反馈 | 模型 | 数学 | 否 |
| 220 | [Titans: Learning to Memorize at Test Time（近邻）](https://arxiv.org/abs/2501.00663) | 推理 | 单次生成 | 运行时适应 | 只训练，不采集 | 无反馈 | 不适用 | 通用 | 否 |
| 221 | [The Surprising Effectiveness of Test-Time Training for Abstract Reasoning（近邻）](https://icml.cc/virtual/2025/poster/44773) | 推理 | 单次生成 | 运行时适应 | 只训练，不采集 | 无反馈 | 不适用 | 通用 | 否 |
| 222 | [Learning to (Learn at Test Time): RNNs with Expressive Hidden States (TTT)（近邻）](https://arxiv.org/abs/2407.04620) | 推理 | 单次生成 | 运行时适应 | 只训练，不采集 | 无反馈 | 不适用 | 通用 | 否 |
| 223 | [Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366) | 推理 | 闭环调整, 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 224 | [ReasoningBank（语言形态）](https://arxiv.org/abs/2509.25140) | 推理 | 技能沉淀, 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 225 | [Improving Factuality and Reasoning in Language Models through Multiagent Debate](https://arxiv.org/abs/2305.14325) | 推理 | 多智能体 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 226 | [What Learning Algorithm is In-Context Learning? Investigations with Linear Models](https://arxiv.org/abs/2211.15661) | 推理 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 模型 | 通用 | 否 |
| 227 | [RAP: Reasoning via Planning in Language Model is Planning with World Model](https://aclanthology.org/2023.emnlp-main.507.pdf) | 推理 | 世界模型 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 228 | [MAC-Reasoner](https://aclanthology.org/2026.findings-acl.233.pdf) | 推理 | 多智能体 | 机制冻结 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 229 | [AgentGroupChat-V2](https://arxiv.org/abs/2506.15451) | 推理 | 多智能体 | 机制冻结 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 230 | [AutoQD](https://arxiv.org/abs/2506.05634) | 推理 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 模型 | 通用 | 否 |
| 231 | [Quality-Diversity through AI Feedback (QDAIF)](https://arxiv.org/abs/2310.13032) | 推理 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 模型 | 通用 | 否 |
| 232 | [Self-Debugging](https://arxiv.org/abs/2304.05128) | 推理 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 233 | [ExoViP: Step-by-Step Verification with Exoskeleton Modules](https://arxiv.org/abs/2408.02210) | 推理 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 模型 | 通用 | 否 |
| 234 | [LLM+P](https://arxiv.org/abs/2304.11477) | 推理 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 符号 | 通用 | 否 |
| 235 | [PoT (Program of Thoughts)](https://arxiv.org/abs/2211.12588) | 推理 | 单次生成 | 机制冻结 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 236 | [PAL](https://arxiv.org/abs/2211.10435) | 推理 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 符号 | 通用 | 否 |
| 237 | [ViperGPT: Visual Inference via Python Execution for Reasoning](https://arxiv.org/abs/2303.08128) | 推理 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 符号 | 通用 | 否 |
| 238 | [VisProg: Visual Programming — Compositional Visual Reasoning without Training](https://arxiv.org/abs/2211.11559) | 推理 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 符号 | 通用 | 否 |
| 239 | [AtomMem: Learnable Dynamic Agentic Memory with Atomic Memory Operation](https://arxiv.org/abs/2601.08323) | 自我 | 记忆上下文 | 权重训练 | 采集数据＋训练 | 验证反馈 | 模型 | 通用 | 否 |
| 240 | [rLLM: Continual Learning via Real-Time RL for Agents](https://rllm-project.com/post.html?post=realtime_rl.md) | 自我 | 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 241 | [Flying Serving: On-the-Fly Parallelism Switching for LLM Serving](https://arxiv.org/abs/2602.22593) | 自我 | 单次生成 | 权重训练 | 运行时全冻结 | 验证反馈 | 符号 | 通用 | 否 |
| 242 | [Rollout-Training Co-Design for Efficient LLM-Based Multi-Agent RL](https://arxiv.org/abs/2602.09578) | 自我 | 多智能体 | 权重训练 | 采集数据＋训练 | 验证反馈 | 符号 | 通用 | 否 |
| 243 | [On-Policy Replay for Continual Supervised Fine-Tuning](https://arxiv.org/abs/2605.29495) | 自我 | 闭环调整, 记忆上下文 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 244 | [CLaaS: Continual Learning as a Service for Deployed Agents](https://arxiv.org/abs/2606.05559) | 自我 | 单次生成 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 245 | [EvoHarness-RL: Learning Self-Evolving Runtime Harness](https://arxiv.org/abs/2608.05446) | 自我 | 进化搜索 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 246 | [FlowBalance: Verifier-Grounded Self-Improvement from On-Policy Reasoning Experience](https://arxiv.org/abs/2609.03241) | 自我, 推理 | 闭环调整, 记忆上下文 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 数学 | 否 |
| 247 | [SCOPE: Data-Free Self-Play for Open-Ended Task Co-Evolution](https://arxiv.org/abs/2608.19197) | 自我 | 进化搜索 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 248 | [Mem-α: Learning Memory Construction via Reinforcement Learning](https://openreview.net/forum?id=dm42omwep1) | 自我 | 记忆上下文 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 249 | [Memory-R1: Enhancing LLM Agents to Manage and Utilize External Memory via RL](https://arxiv.org/abs/2508.19828) | 自我 | 记忆上下文, 闭环调整 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 250 | [SDRL: Prepare Reasoning Language Models for Multi-Agent Settings](https://arxiv.org/abs/2601.22297) | 自我 | 单次生成 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 模型 | 数学 | 否 |
| 251 | [RAGEN: Understanding Self-Evolution in LLM Agents via Multi-Turn RL](https://arxiv.org/abs/2504.20073) | 自我 | 闭环调整 | 权重训练 | 采集数据＋训练 | 验证反馈 | 模型 | 通用 | 否 |
| 252 | [RISE: Recursive Introspection — Teaching Language Model Agents How to Self-Improve](https://arxiv.org/abs/2407.18219) | 自我 | 闭环调整 | 权重训练 | 运行时全冻结 | 数据飞轮 | 模型 | 通用 | 否 |
| 253 | [AgentDistill](https://arxiv.org/abs/2506.14728) | 自我 | 单次生成 | 权重训练 | 运行时全冻结 | 无反馈 | 不适用 | 通用 | 否 |
| 254 | [Agent Distillation](https://neurips.cc/virtual/2025/poster/117657) | 自我 | 多智能体 | 权重训练 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 255 | [AgentArk](https://arxiv.org/abs/2602.03955) | 自我 | 多智能体 | 权重训练 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 256 | [Continual Learning, Not Training: Online Adaptation for Deployed Agents](https://arxiv.org/abs/2511.01093) | 自我, 动作 | 闭环调整, 记忆上下文 | 运行时适应 | 采集数据＋训练 | 验证反馈 | 模型 | 通用 | 否 |
| 257 | [MemRL: Self-Evolving Agents via Runtime Non-Parametric Reinforcement Learning on Memory](https://arxiv.org/abs/2601.03192) | 自我 | 记忆上下文, 闭环调整 | 运行时适应 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 258 | [RSI Agent: Autonomous Exploration for Recursive Self-improvement in New Environments](https://arxiv.org/abs/2609.15364) | 自我 | 多智能体, 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 图形界面 | 否 |
| 259 | [MemCodex: Self-Programming Hierarchical Memory for Language Agents](https://arxiv.org/abs/2609.39765) | 自我 | 记忆上下文, 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 是 |
| 260 | [Observability-Driven Automatic Evolution of Coding Agents](https://arxiv.org/abs/2604.25850) | 自我 | 闭环调整 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 软件工程 | 否 |
| 261 | [Retrospective Harness Optimization: Improving LLM Agents via Self-Preference over Trajectory](https://arxiv.org/abs/2606.05922) | 自我 | 闭环调整, 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 软件工程 | 否 |
| 262 | [The Last Harness You Will Ever Build: Evolution Agent Modifies Harness End-to-End](https://arxiv.org/abs/2604.21003) | 自我 | 进化搜索, 闭环调整 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 软件工程 | 否 |
| 263 | [Worth Remembering: Surprise-Gated Robot Episodic Memory via World Model Loss](https://arxiv.org/abs/2606.03787) | 自我, 世界 | 记忆上下文, 世界模型 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 机器人 | 否 |
| 264 | [Agentic Context Engineering (ACE): Evolving Contexts for Long-Horizon Agents](https://arxiv.org/abs/2510.04618) | 自我 | 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 软件工程 | 否 |
| 265 | [A-MEM: Agentic Memory for LLM Agents](https://arxiv.org/abs/2502.12110) | 自我 | 记忆上下文, 进化搜索 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 266 | [Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory](https://arxiv.org/abs/2504.19413) | 自我 | 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 267 | [EvolveMem: Self-Evolving Memory Architecture](https://arxiv.org/abs/2605.13941) | 自我 | 闭环调整, 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 268 | [MemSkill: Learning and Evolving Memory Skills for Self-Evolving LLM Agents](https://arxiv.org/abs/2602.02474) | 自我 | 技能沉淀, 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 269 | [Meta-Harness: End-to-End Optimization of Model Harnesses](https://arxiv.org/abs/2603.28052) | 自我 | 闭环调整, 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 是 |
| 270 | [MetaSkill-Evolve: Two-Timescale Skill and Meta-Skill Loops](https://arxiv.org/abs/2607.05297) | 自我 | 技能沉淀 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 271 | [STOP: Recursively Self-Improving Scaffolding](https://arxiv.org/abs/2310.02304) | 自我 | 闭环调整 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 是 |
| 272 | [Promptbreeder: Self-Referential Evolution of Prompts](https://arxiv.org/abs/2309.16797) | 自我 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 是 |
| 273 | [Gödel Agent: A Self-Referential Agent Framework for Recursive Self-Improvement](https://arxiv.org/abs/2410.04444) | 自我 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 是 |
| 274 | [EvoPrompt: Connecting LLMs with Evolutionary Algorithms](https://arxiv.org/abs/2309.08532) | 自我 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 275 | [GEPA: Reflective Prompt Evolution Can Outperform Reinforcement Learning](https://arxiv.org/abs/2507.19457) | 自我 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 276 | [AgentSquare: Automatic LLM Agent Search in Modular Design Space](https://arxiv.org/abs/2410.06153) | 自我 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 277 | [EvoAgent: Towards Automatic Multi-Agent Generation](https://arxiv.org/abs/2406.14228) | 自我 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 278 | [GPTSwarm: Language Agents as Optimizable Graphs](https://arxiv.org/abs/2402.16823) | 自我 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 279 | [AFlow: Automating Agentic Workflow Generation](https://arxiv.org/abs/2410.10762) | 自我 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 280 | [Automated Design of Agentic Systems (ADAS / Meta Agent Search)](https://arxiv.org/abs/2408.08435) | 自我 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 281 | [DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines](https://arxiv.org/abs/2310.03714) | 自我 | 闭环调整 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 282 | [TextGrad: Automatic “Differentiation” via Text](https://arxiv.org/abs/2406.07496) | 自我 | 闭环调整 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 283 | [AgentVerse: Dynamic Multi-Agent Collaboration with Emergent Team Composition](https://arxiv.org/abs/2308.10848) | 自我 | 多智能体 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 284 | [Agent Lightning: Train ANY AI Agents with Reinforcement Learning](https://arxiv.org/abs/2508.03680) | 自我 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 符号 | 通用 | 否 |
| 285 | [Next-Generation Agentic Reinforcement Learning Systems](https://arxiv.org/abs/2607.01120) | 自我 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 模型 | 通用 | 否 |
| 286 | [Deployed Reinforcement Learning should be Continual](https://arxiv.org/abs/2606.04029) | 自我 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 287 | [LMAC: LLM-Guided Communication for Cooperative Multi-Agent RL](https://arxiv.org/abs/2605.18077) | 自我 | 多智能体 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 288 | [HarnessDev: Can LLMs Create and Evolve Their Own Agent Harness?](https://arxiv.org/abs/2609.01437) | 自我 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 符号 | 软件工程 | 否 |
| 289 | [SwarmSys: Decentralized Swarm-Inspired Multi-Agent Reasoning](https://arxiv.org/abs/2510.10047) | 自我 | 多智能体 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 290 | [Context Engineering: From Prompts to Corporate Multi-Agent Architecture](https://arxiv.org/abs/2603.09619) | 自我 | 记忆上下文 | 机制冻结 | 运行时全冻结 | 证据反馈 | 模型 | 通用 | 否 |
| 291 | [HIMM: Human-Inspired Long-Term Memory Modeling for Embodied Agents](https://arxiv.org/abs/2602.15513) | 自我 | 记忆上下文 | 机制冻结 | 只采集数据，不训练 | 数据飞轮 | 模型 | 机器人 | 否 |
| 292 | [MemGPT: Towards LLMs as Operating Systems](https://arxiv.org/abs/2310.08560) | 自我 | 记忆上下文 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 293 | [Scaling Self-Evolving Agents via Parametric Memory](https://arxiv.org/abs/2606.04536) | 自我 | 闭环调整, 记忆上下文 | 机制冻结 | 只采集数据，不训练 | 数据飞轮 | 模型 | 通用 | 否 |
| 294 | [Sleep-time Compute: Beyond Inference Scaling at Test-time](https://arxiv.org/abs/2504.13171) | 自我 | 技能沉淀, 记忆上下文 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 295 | [Gödel Machine: Self-Referential Optimal Problem Solvers](https://arxiv.org/abs/cs/0309048) | 自我 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 数学 | 否 |
| 296 | [The Introspection Threshold for Recursive Self-Improvement](https://arxiv.org/abs/2607.04277) | 自我 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 通用 | 否 |
| 297 | [Recursive Self-Improvement in AI: From Bounded Self-Refinement to Autonomous Research Loops](https://arxiv.org/abs/2607.07663) | 自我 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 不适用 | 通用 | 否 |
| 298 | [A Dynamic LLM-Powered Agent Network for Task-Oriented Collaboration (DyLAN)](https://arxiv.org/abs/2310.02170) | 自我 | 多智能体 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 299 | [IdeaScientist: Orchestrating Agents for Grounded Scientific Ideation](https://arxiv.org/abs/2610.04074) | 研究 | 多智能体 | 权重训练 | 采集数据＋训练 | 验证反馈 | 模型 | 通用 | 否 |
| 300 | [From Self-Evolving Synthetic Data to Verifiable-Reward RL for Multi-Turn Tool-Using Agents](https://arxiv.org/abs/2601.22607) | 研究, 自我 | 闭环调整, 进化搜索 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 301 | [MatBrain: Collaborative Dual-Model Agent for Autonomous Crystal Materials Research](https://arxiv.org/abs/2604.11540) | 研究, 设计 | 多智能体 | 权重训练 | 采集数据＋训练 | 验证反馈 | 符号 | 通用 | 否 |
| 302 | [SPIRAL: Self-Play on Zero-Sum Games Incentivizes Reasoning](https://arxiv.org/abs/2506.24119) | 研究, 自我 | 进化搜索, 多智能体 | 权重训练 | 采集数据＋训练 | 数据飞轮 | 符号 | 数学 | 否 |
| 303 | [RefineCoder](https://arxiv.org/abs/2502.09183) | 研究 | 闭环调整 | 权重训练 | 采集数据＋训练 | 无反馈 | 符号 | 通用 | 否 |
| 304 | [DreamProver](https://arxiv.org/abs/2604.26311) | 研究 | 技能沉淀 | 权重训练 | 只采集数据，不训练 | 无反馈 | 模型 | 通用 | 否 |
| 305 | [EvoTune](https://claire-labo.github.io/EvoTune/) | 研究 | 进化搜索 | 权重训练 | 采集数据＋训练 | 无反馈 | 仿真 | 通用 | 否 |
| 306 | [Scaling Automatic Research Agents via World Models (WMRL)](https://arxiv.org/abs/2608.12564) | 研究 | 世界模型 | 权重训练 | 采集数据＋训练 | 验证反馈 | 模型 | 软件工程 | 否 |
| 307 | [Sample Efficient Generative Molecular Optimization](https://arxiv.org/abs/2602.10984) | 研究 | 闭环调整 | 运行时适应 | 只采集数据，不训练 | 验证反馈 | 模型 | 药物研发 | 否 |
| 308 | [FrugalEvo: Towards Cost-Aware LLM-Guided Program Evolution](https://arxiv.org/abs/2610.03675) | 研究 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 符号 | 数学 | 否 |
| 309 | [Arbor: Toward Generalist Autonomous Research via Hypothesis-Tree Refinement](https://arxiv.org/abs/2606.11926) | 研究 | 多智能体, 闭环调整, 记忆上下文 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 310 | [Dream-RSI: Recursive Self-Improvement through Evolving Worlds](https://github.com/zhengkid/Dream-RSI) | 研究, 自我 | 世界模型, 记忆上下文, 进化搜索 | 机制自进化 | 只采集数据，不训练 | 数据飞轮 | 符号 | 通用 | 否 |
| 311 | [MLEvolve: Progressive Graph Search with Retrospective Memory](https://arxiv.org/abs/2606.06473) | 研究 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 312 | [AlphaEvolve](https://arxiv.org/abs/2506.13131) | 研究 | 进化搜索 | 机制自进化 | 只采集数据，不训练 | 无反馈 | 符号 | 软件工程 | 否 |
| 313 | [Fork-and-Flush: Escaping Idea Basins in Autoresearch Agents](https://arxiv.org/abs/2610.07447) | 研究 | 多智能体, 记忆上下文 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 314 | [Benchmark Radar: A Living Database and Search Engine for AI Benchmarks](https://arxiv.org/abs/2609.11115) | 研究 | 单次生成 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 通用 | 否 |
| 315 | [OmniScientist: An Omni-Modal Omni-Discipline AI Scientist](https://arxiv.org/abs/2608.13558) | 研究 | 多智能体 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 真实环境 | 通用 | 否 |
| 316 | [ExplorationBench: Measuring AI Systems Exploration in Verifiable Alien Worlds](https://arxiv.org/abs/2609.30199) | 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 符号 | 通用 | 否 |
| 317 | [ScholarCatalyst: A Benchmark for Retrieving Papers That Inspire New Research](https://arxiv.org/abs/2610.02202) | 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 人类 | 通用 | 否 |
| 318 | [awesome-rubric-rewards（论文清单库）](https://github.com/chrisliu298/awesome-rubric-rewards) | 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 符号 | 通用 | 否 |
| 319 | [RubricEval: A Rubric-Level Meta-Evaluation Benchmark for LLM Judges](https://arxiv.org/abs/2603.25133) | 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | NLP | 是 |
| 320 | [AutoBencher: Towards Declarative Benchmark Construction](https://arxiv.org/abs/2407.08351) | 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 验证反馈 | 符号, 模型 | 通用 | 否 |
| 321 | [AI for Scientific Discovery is a Social Problem](https://www.cell.com/patterns/fulltext/S2666-3899(26)00006-1) | 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 模型 | 通用 | 否 |
| 322 | [Automating the Search for Artificial Life with Foundation Models](https://arxiv.org/abs/2412.17799) | 研究, 世界 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | Minecraft | 否 |
| 323 | [Autonomous Agents for Scientific Discovery: Vision and Roadmap](https://arxiv.org/abs/2510.09901) | 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 模型 | 通用 | 否 |
| 324 | [Sparks: Multi-Agent AI Model Discovers Novel Scientific Ideas](https://arxiv.org/abs/2504.19017) | 研究 | 多智能体, 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 325 | [Foundation Models for Scientific Discovery: From Paradigm Enhancement to Paradigm Transition](https://arxiv.org/abs/2510.15280) | 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 模型 | 通用 | 否 |
| 326 | [Discovery Foundation Models: Toward Open-Ended Discovery Intelligence](https://arxiv.org/abs/2609.15973) | 研究 | 单次生成 | 机制冻结 | 运行时全冻结 | 证据反馈 | 模型 | 通用 | 否 |
| 327 | [Evolutionary Discovery of RL Algorithms via LLMs](https://arxiv.org/abs/2603.28416) | 研究 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 328 | [FT-Dojo: Fine-Tuning Pipeline as an Executable Environment](https://arxiv.org/abs/2603.01712) | 研究 | 世界模型 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 329 | [AutoResearch: Insight In, Hallucination Out](https://arxiv.org/abs/2608.17906) | 研究 | 闭环调整, 多智能体 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 模型 | 通用 | 否 |
| 330 | [CodeScientist: End-to-End Semi-Automated Scientific Discovery with Code-based Experimentation](https://arxiv.org/abs/2503.22708) | 研究 | 进化搜索, 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 通用 | 否 |
| 331 | [Towards an AI Co-Scientist](https://arxiv.org/abs/2502.18864) | 研究 | 多智能体, 进化搜索 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 仿真 | 药物研发 | 否 |
| 332 | [AI Scientist-v2](https://arxiv.org/abs/2504.08066) | 研究 | 多智能体 | 机制冻结 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 333 | [The AI Scientist](https://arxiv.org/abs/2408.06292) | 研究 | 多智能体 | 机制冻结 | 运行时全冻结 | 验证反馈 | 模型 | 通用 | 否 |
| 334 | [ChatDev](https://arxiv.org/abs/2307.07924) | 研究 | 多智能体 | 机制冻结 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 335 | [MetaGPT](https://arxiv.org/abs/2308.00352) | 研究 | 多智能体 | 机制冻结 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 336 | [Self-Collaboration Code Generation](https://arxiv.org/abs/2304.07590) | 研究 | 多智能体 | 机制冻结 | 运行时全冻结 | 无反馈 | 模型 | 通用 | 否 |
| 337 | [Digital Red Queen](https://pub.sakana.ai/drq/) | 研究 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 仿真 | 通用 | 否 |
| 338 | [FunSearch](https://www.nature.com/articles/s41586-023-06924-6) | 研究 | 进化搜索 | 机制冻结 | 只采集数据，不训练 | 无反馈 | 符号 | 数学 | 否 |
| 339 | [Learning to Evaluate Before Improving (AutoSciRub)](https://arxiv.org/abs/2608.31076) | 研究 | 闭环调整 | 机制冻结 | 只采集数据，不训练 | 验证反馈 | 符号 | 软件工程 | 否 |
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
