
import { Chapter, SubjectType } from './types';

export const CHAPTERS: Chapter[] = [
  {
    id: 'la-01',
    subject: SubjectType.LINEAR_ALGEBRA,
    title: '式神属性系统',
    description: '线性代数核心概念：向量、矩阵与秩',
    icon: 'vector',
    sections: [
      {
        title: '向量 = 属性面板',
        characterName: 'SSR 茨木童子',
        characterImage: 'https://placehold.co/600x800/1c1917/b45309?text=SSR+Ibaraki&font=playfair-display', 
        content: '打开你的茨木童子面板，你会看到：攻击 3216、暴击 10%、暴伤 150%、速度 112。这组有序的数字，本质上就是一个 4维列向量 $v$。',
        formula: 'v = \\begin{bmatrix} 3216 \\\\ 112 \\\\ 0.10 \\\\ 1.50 \\end{bmatrix}',
        explanation: '向量是“由多个数构成的一个整体”。在线性代数中，我们不关心“攻击”具体的物理意义，我们只关心这个向量在属性空间中的位置和它能进行的变换。',
        analogy: '你的式神面板就是一个列向量 $v$。阴阳师里所有式神的集合，就构成了一个庞大的“式神向量空间”。',
        combatScenario: {
          intro: '魂土副本第一层，要求茨木一拳清场。这是对向量模长（强度）的严格检测。',
          correct: {
            label: '✅ 面板达标',
            description: '攻击=10000, 暴伤=280%, 速度>158',
            result: '向量内积 > 怪物血量。小怪全清，效率极高。'
          },
          incorrect: {
            label: '❌ 速度维缺失',
            description: '攻击=12000, 暴伤=300%, 速度=112',
            result: '虽然攻击分量很大，但速度分量 < 怪物速度向量。茨木还未出手，怪物先行动浪费时间，通关失败。'
          },
          mathAnalysis: '向量的有效性取决于所有维度的综合表现。仅仅在一个维度（攻击）拉长向量，若忽略了另一维度（速度）的阈值约束，结果为零。'
        }
      },
      {
        title: '矩阵变换 = 御魂效果',
        characterName: 'SSR 玉藻前',
        characterImage: 'https://placehold.co/600x800/1c1917/b45309?text=SSR+Tamamo&font=playfair-display', 
        content: '当你给玉藻前装上“破势”四件套时，本质上是对他的基础伤害向量进行了线性变换。破势矩阵 $A$ 会拉伸特定条件下的伤害分量。',
        formula: 'v_{final} = \\begin{bmatrix} 1.4 & 0 \\\\ 0 & 1 \\end{bmatrix} \\cdot v_{base}',
        explanation: '矩阵 $A$ 作为一个算子（Operator），作用在向量 $v$ 上，将其映射为一个新的向量 $v\'$。',
        analogy: '御魂就是矩阵。御魂强化+15，就是增大了矩阵对角线上的元素值（Scaling），让输出向量变得更长。',
        combatScenario: {
          intro: '面对满血的石距BOSS，选择哪种御魂矩阵进行变换？',
          correct: {
            label: '✅ 破势矩阵',
            description: '敌方血量 > 70%，破势矩阵倍率为 1.4',
            result: '伤害 = 基础伤害 × 1.4。开局爆发极高，快速压血线。'
          },
          incorrect: {
            label: '❌ 心眼矩阵',
            description: '敌方血量 > 70%，心眼矩阵倍率为 1.0 (单位矩阵)',
            result: '伤害 = 基础伤害 × 1.0。心眼在低血量区才生效，此时它相当于一个没有效果的单位矩阵 $I$。'
          },
          mathAnalysis: '线性算子（御魂）通常是分段定义的。在定义域（血量区间）错误的地方使用算子，等同于乘以单位矩阵，毫无增益。'
        }
      },
      {
        title: '矩阵乘法 = 技能连招',
        characterName: 'SSR 妖刀姬',
        characterImage: 'https://placehold.co/600x800/1c1917/b45309?text=SSR+Yotohime&font=playfair-display',
        content: '单一的技能是一次变换。而连招（先破甲 $A$，再增伤 $B$，再斩杀 $C$）则是多个矩阵的连续相乘。注意：矩阵乘法不满足交换律！',
        formula: 'v_{final} = C(B(A v))',
        explanation: '运算顺序至关重要。$AB \\neq BA$。先穿衣服再洗澡，和先洗澡再穿衣服，结果截然不同。',
        analogy: '先放“丑时之女”的草人（矩阵 $A$），再放“晴明”的星（矩阵 $B$）。如果你顺序反了，可能导致增伤无法正确作用于传递后的伤害数值。',
        combatScenario: {
          intro: '丑时之女（草人）与晴明（星/灭）的释放顺序。',
          correct: {
            label: '✅ 先草人 后贴灭',
            description: '草人继承防御 $D$，贴灭后防御变为 $D \\times 0.7$。',
            result: '防御降低，我方输出经过矩阵运算后伤害最大化。'
          },
          incorrect: {
            label: '❌ 先贴灭 后草人',
            description: '先给BOSS贴灭，BOSS防御降低。草人再插出来，草人继承的是BOSS的原始防御（非负面状态）。',
            result: '草人防御依然很高。运算顺序错误，导致减防矩阵 $M_{def}$ 未能作用于草人向量。'
          },
          mathAnalysis: '矩阵乘法的非交换性 ($AB \\neq BA$) 在这里体现为状态继承的快照机制。操作顺序直接决定最终数值。'
        }
      },
      {
        title: '特征值 = 纯粹倍率',
        characterName: 'SP 烬天玉藻前',
        characterImage: 'https://placehold.co/600x800/1c1917/b45309?text=SP+Tamamo&font=playfair-display',
        content: '在某些特定的方向上（特征向量），御魂的增益纯粹是数值的放大，而不会改变属性的比例结构。这个放大的倍数就是特征值 $\\lambda$。',
        formula: 'A v = \\lambda v',
        explanation: '如果一个向量变换后方向不变，只长度变了，它就是特征向量。',
        analogy: '对于“纯输出”式神（特征向量），堆攻击加成是极其高效的，因为方向一致，$\\lambda$ 很大。',
        combatScenario: {
          intro: '御魂副属性强化：攻击加成 vs 防御加成。',
          correct: {
            label: '✅ 强化攻击 (特征方向)',
            description: '烬天玉藻前是纯输出模型。强化攻击+3%',
            result: '向量在主特征方向（输出）上伸长。$\\lambda > 1$，收益最大化。'
          },
          incorrect: {
            label: '❌ 强化防御 (正交方向)',
            description: '强化防御+3%',
            result: '向量在与输出正交的方向上有了分量。这对伤害函数 $f(v)$ 毫无贡献（投影为0）。歪了，废了。'
          },
          mathAnalysis: '在特征向量方向上的投影决定了系统的效能。向无效维度（防御）投入资源，是线性空间中最大的浪费。'
        }
      }
    ]
  },
  {
    id: 'cal-01',
    subject: SubjectType.CALCULUS,
    title: '战斗的变化率',
    description: '高等数学核心概念：导数、积分与梯度',
    icon: 'curve',
    sections: [
      {
        title: '导数 = 瞬时爆发',
        characterName: 'SSR 泷夜叉姬',
        characterImage: 'https://placehold.co/600x800/1c1917/4338ca?text=SSR+Takiyashihime&font=playfair-display',
        content: '有些式神需要暖机。伤害函数 $D(t)$ 不是常数。导数 $D\'(t)$ 描述了伤害随时间的增长速度（加速度）。',
        formula: "DPS(t) = \\frac{d}{dt} D(t)",
        explanation: '导数是变化率。如果 $D\'(t) > 0$，说明你的式神正在变强（叠Buff中）。',
        analogy: '泷夜叉姬前几回合伤害低，随着回合数 $t$ 增加，Buff层数增加，导数保持正值，直到叠满。',
        combatScenario: {
          intro: '你需要打一个只有10秒的道馆结界（短线战斗）。',
          correct: {
            label: '✅ 阿修罗 (脉冲函数)',
            description: '开局即巅峰，导数 $f\'(0) = \\infty$。',
            result: '瞬间释放巨大能量，战斗在 $t=2s$ 结束。'
          },
          incorrect: {
            label: '❌ 紧那罗 (线性增长)',
            description: '需要5个回合暖机，导数 $f\'(t) = k$ (常数增长)。',
            result: '前10秒伤害极低。还没等 $D(t)$ 增长起来，战斗时间已耗尽。'
          },
          mathAnalysis: '选择式神通过判断其伤害函数的导数特性。短线看初值和一阶导，长线看积分面积。'
        }
      },
      {
        title: '积分 = 总伤害量',
        characterName: 'SR 书翁',
        characterImage: 'https://placehold.co/600x800/1c1917/4338ca?text=SR+Bukkuman&font=playfair-display',
        content: '书翁的大招“万象之书”记录队友在这一回合内造成的所有伤害，然后在下回合引爆。这本质上就是一个定积分运算。',
        formula: 'D_{total} = \\int_{t_0}^{t_1} d(t) \\, dt',
        explanation: '积分是函数的累积量，即曲线下的面积。',
        analogy: '书翁就是那个“积分器”。他不管你瞬时伤害（导数）怎么跳动，他只管你在一段时间内总共输出了多少面积。',
        combatScenario: {
          intro: '书翁记录期间（积分区间 $[t_0, t_1]$），输出式神的行动模式。',
          correct: {
            label: '✅ 连续高频输出',
            description: '大天狗/弈 持续多段攻击，函数 $f(t)$ 始终保持高位。',
            result: '积分面积 $S$ 极大，书翁爆炸伤害达到上限。'
          },
          incorrect: {
            label: '❌ 被控/断火',
            description: '输出式神被眩晕。函数 $f(t)$ 在区间内跌落为 0。',
            result: '对 0 函数积分结果为 0。书翁记录了个寂寞，炸了个空气。'
          },
          mathAnalysis: '积分的数值高度依赖于区间内函数的连续性。任何间断点（控制、断火）都会导致面积的直接损失。'
        }
      },
      {
        title: '梯度 = 最优强化方向',
        characterName: 'SSR 须佐之男',
        characterImage: 'https://placehold.co/600x800/1c1917/4338ca?text=SSR+Susanoo&font=playfair-display',
        content: '你的伤害是多元函数 $f(ATK, CDMG)$。当你只有有限的御魂副属性点数时，给谁加点收益最高？',
        formula: '\\nabla f = ( \\frac{\\partial f}{\\partial ATK}, \\frac{\\partial f}{\\partial CDMG} )',
        explanation: '梯度向量指向函数增长最快的方向。',
        analogy: '当你的暴伤已经达到300%时，继续堆暴伤的偏导数可能不如堆攻击的偏导数大。',
        combatScenario: {
          intro: '海月火玉御魂配置，已有面板：攻击8000，暴伤300%。还有2次强化机会。',
          correct: {
            label: '✅ 强化攻击 (沿梯度)',
            description: '此时 $\\partial f/\\partial ATK$ 很大。强化攻击至 9000。',
            result: '总伤害提升显著，达到函数极值点附近。'
          },
          incorrect: {
            label: '❌ 强堆暴伤 (逆梯度)',
            description: '强行堆暴伤至 320%，但攻击只有 8000。',
            result: '边际效应递减。虽然暴伤数字好看，但实际伤害期望 $E = A \\times C$ 并没有最优方案高。'
          },
          mathAnalysis: '多变量优化问题中，盲目堆单一属性往往陷入局部最优。沿着梯度方向（缺啥补啥）才能爬上全局最高峰。'
        }
      }
    ]
  },
  {
    id: 'prob-01',
    subject: SubjectType.PROBABILITY,
    title: '玄学与概率',
    description: '概率论核心概念：贝叶斯、期望与大数定律',
    icon: 'dice',
    sections: [
      {
        title: '条件概率',
        characterName: 'SSR 大天狗',
        characterImage: 'https://placehold.co/600x800/1c1917/b45309?text=SSR+Ootengu&font=playfair-display',
        content: '大天狗带针女御魂（40%概率造成额外伤害，前提是必须先暴击）。这是一个典型的条件概率模型。',
        formula: 'P(A|B) = \\frac{P(AB)}{P(B)}',
        explanation: '事件（针女）发生的概率，依赖于事件（暴击）是否先发生。',
        analogy: '如果你满暴（$P=1$），针女触发率就是实打实的40%。如果你只有50%暴击，针女真实触发率只有 $0.5 \\times 0.4 = 20\\%$。',
        combatScenario: {
          intro: '为什么大佬的针女式神一定要满暴击？',
          correct: {
            label: '✅ 100% 暴击',
            description: '条件概率 $P(Hit|Crit) = 40\\%$. 前置条件 $P(Crit)=1$.',
            result: '每次攻击都有稳定40%期望触发针女。输出平稳。'
          },
          incorrect: {
            label: '❌ 50% 暴击 300% 暴伤',
            description: '虽然暴伤高，但前置条件 $P(Crit)=0.5$.',
            result: '针女真实触发率降至 20%。大部分时间既没暴击也没针女，只有白字。'
          },
          mathAnalysis: '链式法则 $P(A \\cap B) = P(A|B)P(B)$。当 $P(B)$（暴击率）低时，整个链条断裂，后续的高收益事件根本无法启动。'
        }
      },
      {
        title: '期望值',
        characterName: 'SP 因幡辉夜姬',
        characterImage: 'https://placehold.co/600x800/1c1917/b45309?text=SP+Kaguya&font=playfair-display',
        content: '为了计算刷1000体力的平均耗时，我们需要算期望。假设不翻车耗时30s，翻车耗时60s。',
        formula: 'E(X) = \\sum x_i p_i',
        explanation: '期望是随机变量加权平均后的中心值。',
        analogy: '只要你的翻车率（$P_{lose}$）存在，你的长期平均通关时间就一定大于30s。',
        combatScenario: {
          intro: '魂土收尾式神暴击率的选择：99% vs 101%。',
          correct: {
            label: '✅ 101% 暴击 (溢出)',
            description: '翻车率 $p=0$。耗时固定 18s。',
            result: '期望耗时 $E(T) = 18s$。稳定如山。'
          },
          incorrect: {
            label: '❌ 99% 暴击 (猜拳)',
            description: '翻车率 $p=0.01$。翻车一次耗时 60s。',
            result: '虽然只差1点暴击，但在大数定律下，每刷100把必有一次心态爆炸。长期期望效率下降。'
          },
          mathAnalysis: '在重复博弈中，小概率的灾难性事件（翻车）会显著拉低整体期望。只有 $P=1$ 才能消除方差风险。'
        }
      },
      {
        title: '贝叶斯定理',
        characterName: '阴阳师 晴明',
        characterImage: 'https://placehold.co/600x800/1c1917/b45309?text=Seimei&font=playfair-display',
        content: '当你抽到SSR时，你想知道这是因为“全图鉴UP”生效了，还是仅仅是你运气好（0.01裸抽）？',
        formula: 'P(A|B) \\propto P(B|A)P(A)',
        explanation: '贝叶斯公式用于根据观察到的结果（抽到SSR），反推原因（是不是UP机制导致的）。',
        analogy: '这能算出你究竟是“伪欧皇”（靠保底机制出的）还是“真欧皇”（靠阳寿出的）。',
        combatScenario: {
          intro: '活动卡池：定向UP概率提升至 25%。你一发十连出了UP式神。',
          correct: {
            label: '✅ 大概率是UP生效',
            description: '先验概率 $P(UP)$ 被官方调高了。',
            result: '贝叶斯更新后，这属于“正常预期”内的事件。'
          },
          incorrect: {
            label: '❌ 认为自己运气变好了',
            description: '误以为基础出货率变高，继续头铁强抽无UP的卡池。',
            result: '基础概率 $P(Base)$ 依然是 1%。迅速把勾玉亏光。'
          },
          mathAnalysis: '混淆“后验概率”与“先验分布”是赌徒破产的主要原因。要分清是环境（UP）变了，还是你变了。'
        }
      }
    ]
  },
  {
    id: 'set-01',
    subject: SubjectType.SET_THEORY,
    title: '百鬼夜行',
    description: '集合论：全集、子集与映射',
    icon: 'scroll',
    sections: [
      {
        title: '全集与空集',
        characterName: 'SSR 青行灯',
        characterImage: 'https://placehold.co/600x800/1c1917/0e7490?text=SSR+Aoandon&font=playfair-display',
        content: '“收集一百个鬼故事”。所有的怪谈构成了一个全集 $U$。当你的鬼火槽为0时，这就构成了一个“空集” $\\emptyset$。',
        formula: '\\forall x (x \\in U), \\emptyset \\subset U',
        explanation: '全集是当前讨论的所有对象的总和。空集是不包含任何元素的集合。青行灯的被动“明灯”就是在空集（无火）时创造元素（鬼火）的奇迹。',
        analogy: '你的图鉴就是一个集合 $S$。未收录活动本质上是在全集 $U$ 和你的集合 $S$ 的差集 $U - S$ 中随机抽取一个元素。',
        combatScenario: {
          intro: '未收录SSR活动，你的图鉴差集 $U-S$ 的状态。',
          correct: {
            label: '✅ 真全图鉴',
            description: '你的集合 $S$ 包含了除新式神外的所有元素。差集 $|U-S|=1$。',
            result: '抽卡必定命中新式神。集合论的确定性胜利。'
          },
          incorrect: {
            label: '❌ 断头全图鉴',
            description: '你缺了5个旧SSR。差集 $|U-S|=6$（含新式神）。',
            result: '抽到了万年竹（旧卡）。虽然也是未收录，但不是你想要的新元素。'
          },
          mathAnalysis: '控制集合的基数（Cardinality）是利用规则获利的前提。差集越小，确定性越高。'
        }
      },
      {
        title: '交集与并集',
        characterName: 'SSR 帝释天',
        characterImage: 'https://placehold.co/600x800/1c1917/0e7490?text=SSR+Taishakuten&font=playfair-display',
        content: '“金莲”控制下的敌方回合，本质上是敌方行动集合 $A$ 与我方意志集合 $B$ 的交集。',
        formula: 'A \\cap B = \\{ x | x \\in A \\text{ and } x \\in B \\}',
        explanation: '交集是两个集合共有的部分。在帝释天的控制下，式神既属于对面（占用对面回合），又属于我（听我指挥）。',
        analogy: 'PVP中的“BAN选”环节。你BAN掉的和我BAN掉的式神组成了“禁用集合”的并集 $Ban_A \\cup Ban_B$。',
        combatScenario: {
          intro: '控制效果的叠加与覆盖。',
          correct: {
            label: '✅ 帝释天 + 小松丸',
            description: '帝释天操控回合(A)，小松丸变形(B)。$A$ 与 $B$ 作用于不同维度。',
            result: '形成互补并集。无论能不能动，对面都很难受。'
          },
          incorrect: {
            label: '❌ 雪女 + 兵俑',
            description: '雪女冰冻(A)，兵俑嘲讽(B)。$A \\subset B$ (无法行动包含于无法普攻)。',
            result: '冰冻了就不能普攻了，嘲讽没意义。交集冗余，浪费控制位。'
          },
          mathAnalysis: '构建阵容时要追求技能集合的“并集最大化”，避免“子集覆盖”导致的效能浪费。'
        }
      },
      {
        title: '映射与双射',
        characterName: 'SSR 缘结神',
        characterImage: 'https://placehold.co/600x800/1c1917/0e7490?text=SSR+Enmusubi&font=playfair-display',
        content: '缘结神的“红线”将两个单位连接起来。这是一个从集合 $X$ 到集合 $Y$ 的映射 $f: X \\to Y$。',
        formula: 'y = f(x)',
        explanation: '如果每个 $x$ 对应唯一的 $y$，且每个 $y$ 都有对应的 $x$，这就是双射（一一对应）。',
        analogy: '如果你给式神穿御魂，这是一对一映射。但如果用“御魂Hub”共享方案，那就是多对一映射（非单射）。',
        combatScenario: {
          intro: '御魂套装的分配策略（映射问题）。',
          correct: {
            label: '✅ 独立御魂 (双射)',
            description: '每个式神 $x_i$ 都有专属御魂 $y_i$。$f(x_i) = y_i$。',
            result: '随时可以上场，无需临时换装。映射稳定。'
          },
          incorrect: {
            label: '❌ 共享御魂 (多对一)',
            description: '大舅和茨木共用一套爆伤破势 $Y$。',
            result: '当需要两人同时上场时，映射冲突。必须拆东墙补西墙，导致战力崩塌。'
          },
          mathAnalysis: '理想的资源分配应当是双射（Bijection）。一旦出现多对一，系统的灵活性（Flexibility）就会受到拓扑结构的限制。'
        }
      }
    ]
  },
  {
    id: 'real-01',
    subject: SubjectType.REAL_ANALYSIS,
    title: '实变函数',
    description: '测度论与勒贝格积分',
    icon: 'infinity',
    sections: [
      {
        title: '测度论 = 行动条',
        characterName: 'SSR 镰鼬',
        characterImage: 'https://placehold.co/600x800/1c1917/047857?text=SSR+Kamaitachi&font=playfair-display',
        content: '普通式神在时间轴上是离散的点。镰鼬通过被动（30%概率再动），使得他在有限时间区间内的行动集合“测度”大于标准值。',
        formula: 'm(A) > \\sum \\Delta t',
        explanation: '在实变函数中，我们关注集合的“大小”（测度）。镰鼬的多次行动使得他的行动集测度发生了跃变。',
        analogy: '这就是为什么270速的镰鼬（有被动）比270速的阎魔（无被动）跑得快。他的“有效行动测度”更大。',
        combatScenario: {
          intro: '抢一速：双拉条体系 vs 单拉条体系。',
          correct: {
            label: '✅ 双拉 (镰鼬+山兔)',
            description: '连续两次推条/拉条。将敌方行动测度压缩至接近 0。',
            result: '敌方全程静止，我方行动测度覆盖全集。'
          },
          incorrect: {
            label: '❌ 单拉被插队',
            description: '只用一个镰鼬拉条。敌方超高速阎魔插入中间。',
            result: '虽然拉了30%，但剩余的 70% 测度区间内存在敌方测度非零点。被控，G。'
          },
          mathAnalysis: '控制战局的本质是让敌方的有效行动集合成为“零测集”（Measure Zero Set）。'
        }
      },
      {
        title: '勒贝格积分',
        characterName: 'SSR 面灵气',
        characterImage: 'https://placehold.co/600x800/1c1917/047857?text=SSR+Menreiki&font=playfair-display',
        content: '黎曼积分是按顺序一个个打（X轴切分）。勒贝格积分是按数值大小打（Y轴切分）。面灵气的伤害只取决于敌人的防御值分布。',
        formula: '\\int f d\\mu = \\sum v_k \\mu(E_k)',
        explanation: '将定义域划分改为值域划分。计算时：防御为0的怪有几个？防御为500的有几个？然后分别求和。',
        analogy: '这种算法对于“清姬”这种能将敌人防御统一（使函数值域退化）的辅助极其友好。',
        combatScenario: {
          intro: '超鬼王群体AOE伤害计算。',
          correct: {
            label: '✅ 清姬 + 面灵气',
            description: '清姬将所有怪防御降为 0。值域集合 $V=\{0\}$。',
            result: '面灵气伤害计算简化，针对防御为0的集合测度最大化。伤害爆炸。'
          },
          incorrect: {
            label: '❌ 只有面灵气',
            description: '怪的防御参差不齐 $V=\{200, 500, 1000\}$。',
            result: '勒贝格积分被分割成多个小块，无法形成统一的高额爆发。效率低下。'
          },
          mathAnalysis: '通过预处理（清姬）简化被积函数的值域结构，可以极大地优化积分结果（伤害）。'
        }
      },
      {
        title: '几乎处处收敛',
        characterName: 'SSR 须佐之男',
        characterImage: 'https://placehold.co/600x800/1c1917/047857?text=SSR+Susanoo&font=playfair-display',
        content: '针女伤害是随机变量序列，它只在概率意义上收敛（几乎处处收敛）。而须佐之男的伤害是确定性函数（一致收敛）。',
        formula: 'P(\\lim X_n = X) = 1',
        explanation: '“几乎处处”允许存在一个概率为0的失败集。但魂土竞速不能容忍这个失败集。',
        analogy: '针女打100把，平均99把过，1把翻车。这在竞速中是不可接受的。',
        combatScenario: {
          intro: '魂土18秒速刷阵容的稳定性要求。',
          correct: {
            label: '✅ 须佐/阿修罗 (一致收敛)',
            description: '伤害是固定的常数函数。',
            result: '每一把都是18秒。方差为0。完全可控。'
          },
          incorrect: {
            label: '❌ 弈/二口女 (随机收敛)',
            description: '依赖9段随机目标 + 针女概率。',
            result: '运气好15秒，运气差30秒甚至翻车。无法作为工业化刷图的标准。'
          },
          mathAnalysis: '工业级应用（速刷）需要的是“一致收敛”（Uniform Convergence），而不仅仅是概率上的“几乎处处收敛”。'
        }
      }
    ]
  },
  {
    id: 'complex-01',
    subject: SubjectType.COMPLEX_ANALYSIS,
    title: '虚数之海',
    description: '复数域、奇点与黎曼曲面',
    icon: 'globe',
    sections: [
      {
        title: '复平面 = 理智与疯狂',
        characterName: 'SSR 阿修罗',
        characterImage: 'https://placehold.co/600x800/1c1917/5b21b6?text=SSR+Asura&font=playfair-display',
        content: '式神的状态可以视为复数 $z = x + iy$。实部 $x$ 代表“战斗力”，虚部 $y$ 代表“理智值”。当理智归零，复数发生相位旋转。',
        formula: 'z = r e^{i\\theta}',
        explanation: '阿修罗的强大源于他的模长 $|z|$ 极大，但他的弱点在于幅角 $\\theta$ 不稳定。当 $\\theta$ 旋转到虚轴时，攻击目标变得随机（混乱）。',
        analogy: '帝释天的控制技能本质上是一个“实轴投影算子”，强行将阿修罗的 $z$ 投影回实轴，消除虚部 $iy$ 的混乱影响。',
        combatScenario: {
          intro: '阿修罗击杀单位后理智归零，进入无差别攻击模式。',
          correct: {
            label: '✅ 搭配帝释天/缚骨清姬',
            description: '使用技能强制拉回。投影算子 $P(z) = Re(z)$。',
            result: '阿修罗恢复理智，不再痛击队友。相位复位。'
          },
          incorrect: {
            label: '❌ 放任自流',
            description: '没有队友能拉回。$z$ 保持在虚轴 $iy$ 上。',
            result: '阿修罗一巴掌拍死自己的座敷童子。全队翻车。'
          },
          mathAnalysis: '复数系统的稳定性取决于幅角 $\\theta$ 的控制。缺乏相位控制的高模量系统是极度危险的。'
        }
      },
      {
        title: '奇点与留数定理',
        characterName: 'SP 八岐大蛇',
        characterImage: 'https://placehold.co/600x800/1c1917/5b21b6?text=SP+Orochi&font=playfair-display',
        content: '队友不仅仅是单位，他们是战场复平面上的“奇点”。SP大蛇通过“篡位”将这些奇点移除，并获取其“留数”。',
        formula: '\\oint_{\\gamma} f(z) dz = 2\\pi i \\sum \\text{Res}(f, a_k)',
        explanation: '当你献祭一个队友（制造奇点），你在该点原本的函数解析性被破坏了，但积分回路（大招）从中提取出了巨大的能量（天羽羽斩）。',
        analogy: '留数定理告诉我们，有时候为了计算一个庞大的能量（全屏伤害），我们需要关注那些不可解析的点（死掉的队友）。',
        combatScenario: {
          intro: 'SP大蛇攒篡位层数，准备释放终极奥义。',
          correct: {
            label: '✅ 快速献祭 (制造奇点)',
            description: '队友迅速阵亡变为蛇魔。复平面上出现多个 Singularity。',
            result: '回路积分包围所有奇点，留数总和最大，大招毁天灭地。'
          },
          incorrect: {
            label: '❌ 队友太肉不死',
            description: '队友一直活着。函数处处解析（Holomorphic），没有奇点。',
            result: '根据柯西积分定理，闭回路积分结果为 0。大蛇刮痧，毫无伤害。'
          },
          mathAnalysis: '解析函数（活着的队友）没有能量贡献。只有破坏解析性（献祭），利用奇点的留数，才能提取出物理意义上的“能量”。'
        }
      },
      {
        title: '黎曼曲面 = 阴阳翻转',
        characterName: 'SSR 云外镜',
        characterImage: 'https://placehold.co/600x800/1c1917/5b21b6?text=SSR+Ungaikyo&font=playfair-display',
        content: '普通的血条是定义在单层平面上的。云外镜的血条定义在“黎曼曲面”上，包含“阴”和“阳”两个分支（Branch）。',
        formula: 'w = \\sqrt{z}',
        explanation: '多值函数 $\\sqrt{z}$ 需要两张复平面粘贴在一起才能构成单值解析域。云外镜的“翻转”就是在跨越分支切割（Branch Cut）。',
        analogy: '当你使用技能“苦海浮生”时，你并不是在加血，而是在黎曼曲面上从“阴叶”滑到了“阳叶”。血条看似满了，实际上是进入了另一个函数分支。',
        combatScenario: {
          intro: '云外镜面对治疗和恢复的效果。',
          correct: {
            label: '✅ 翻转技能 (跨越割线)',
            description: '主动使用技能，从阴面跳跃到阳面。',
            result: '瞬间改变状态，获得护盾/治疗。利用拓扑结构规避伤害。'
          },
          incorrect: {
            label: '❌ 传统奶妈加血',
            description: '桃花妖对着阴面状态的云外镜加血。',
            result: '治疗被定义为“扣血上限”或无效。因为在阴分支上，Metric（度量）是反的。'
          },
          mathAnalysis: '在多叶黎曼曲面上，常规的线性操作（加血）可能因为所在分支（Sheet）的不同而产生完全相反的物理效果。'
        }
      }
    ]
  },
  {
    id: 'cat-01',
    subject: SubjectType.CATEGORY_THEORY,
    title: '森罗万象',
    description: '范畴论：态射、函子与米田引理',
    icon: 'galaxy',
    sections: [
      {
        title: '范畴与态射',
        characterName: 'SP 荒',
        characterImage: 'https://placehold.co/600x800/1c1917/86198f?text=SP+Susabi&font=playfair-display',
        content: '战场是一个范畴。每个游戏状态（State）是对象，每个技能使用（Action）是态射。态射的复合构成了整场战斗的流程。',
        formula: 'f: A \\to B, g: B \\to C \\implies g \\circ f: A \\to C',
        explanation: '范畴论不关心对象的内部结构（属性），只关心对象之间的关系（态射）。SP荒的“星爆”不看你具体是谁，只看你触发了什么事件（态射）。',
        analogy: '“预言”系统本质上是对未来态射的一种约束。你必须按照规定的路径（Morphsim）走，否则受到惩罚。',
        combatScenario: {
          intro: 'SP荒针对不消耗鬼火的行动进行惩罚。',
          correct: {
            label: '✅ 普攻/0火技能',
            description: '敌方触发了 $Action_{0-orb}$ 态射。',
            result: '满足范畴约束条件，触发星爆反击。无论你是谁，只要路径匹配就得死。'
          },
          incorrect: {
            label: '❌ 消耗鬼火技能',
            description: '敌方使用了耗火技能。态射类型不匹配。',
            result: '交换图表（Commutative Diagram）不闭合，反击无法触发。'
          },
          mathAnalysis: '基于范畴的机制（如反击）只关注态射的类型（Type），而完全忽略对象的内部属性（血量/防御）。'
        }
      },
      {
        title: '函子 = 体系变换',
        characterName: 'SSR 不知火',
        characterImage: 'https://placehold.co/600x800/1c1917/86198f?text=SSR+Shiranui&font=playfair-display',
        content: '不知火的“星火满天”是一个函子 $F$。它将“普通攻击”范畴 $\\mathcal{C}$ 映射到了“两次攻击+吸血”范畴 $\\mathcal{D}$。',
        formula: 'F(f: X \\to Y) = F(f): F(X) \\to F(Y)',
        explanation: '函子保持了结构的同构性。普攻还是普攻，但性质变了。所有依赖普攻的式神（酒吞、化鲸）都在这个函子作用下获得了升维。',
        analogy: '也是为什么不知火体系能容纳万物。她不仅仅是一个辅助，她是改变了底层战斗逻辑（范畴结构）的函子。',
        combatScenario: {
          intro: '不知火结界下的普攻系式神。',
          correct: {
            label: '✅ 酒吞童子 (适配函子)',
            description: '酒吞的普攻 $f$ 被映射为 $F(f) = 2f$ (连击)。',
            result: '原本的单次攻击变成了双倍快乐。函子 $F$ 完美保持并增强了 $f$ 的结构。'
          },
          incorrect: {
            label: '❌ 妖刀姬 (不适配)',
            description: '妖刀姬主要靠大招 $g$ (技能)。$F$ 只作用于普攻范畴。',
            result: '函子 $F$ 对大招 $g$ 是恒等映射或无效。体系不兼容，效果平平。'
          },
          mathAnalysis: '函子（Functor）的威力在于将一个范畴内的所有对象批量升维。如果对象本身不在该范畴（不用普攻），则无法享受升维红利。'
        }
      },
      {
        title: '米田引理',
        characterName: 'SSR 铃鹿御前',
        characterImage: 'https://placehold.co/600x800/1c1917/86198f?text=SSR+Suzuka&font=playfair-display',
        content: '“了解一个对象的唯一方式，是观察它如何与其他对象互动。” 铃鹿御前强制敌人普攻自己，就是通过建立态射来定义战局。',
        formula: 'Nat(Hom(A, -), F) \\cong F(A)',
        explanation: '米田引理告诉我们：你不需要知道式神的内部代码。你只要知道它打谁、谁打它（Hom-set），你就完全掌握了这个式神的性质。',
        analogy: '强制嘲讽（义理之心）强迫敌方建立一个指向我的态射。通过控制所有的态射（互动），我就控制了对象本身。',
        combatScenario: {
          intro: '处理拥有复杂无敌/躲避机制的式神（如SP荒川、千姬）。',
          correct: {
            label: '✅ 强制普攻 (建立态射)',
            description: '铃鹿御前强迫目标对她发起攻击 $f: Enemy \\to Suzuka$。',
            result: '无论目标原本处于什么无敌状态，为了完成态射 $f$，它必须“显形”并行动。机制被破解。'
          },
          incorrect: {
            label: '❌ 试图直接击杀',
            description: '使用高伤害技能直接打。目标处于“不可选中”状态。',
            result: '没有建立有效的态射（Interaction），攻击落空。你无法观测或影响一个切断了所有外部联系的对象。'
          },
          mathAnalysis: '米田引理的实战应用：不要试图去解析黑箱（无敌机制）的内部，而是通过强迫它建立外部联系（态射）来坍缩它的状态。'
        }
      }
    ]
  }
];
