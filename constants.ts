
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
          title: '实战：面板达标检测',
          description: '魂土（悲鸣）副本要求茨木面板必须达标才能秒杀第一层。',
          calculation: '这相当于计算两个向量的内积。设加权向量 $w$，我们需要 $v \\cdot w > \\text{阈值}$。',
          result: '如果内积结果小于阈值，虽然你是茨木，但也只是“猜拳童子”，无法过本。'
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
          title: '实战：拉条机制',
          description: '山兔使用了“兔子舞”，拉条30%。',
          calculation: '全队的时间轴位置向量 $T$ 左乘了一个位移矩阵，使得所有人的位置 $t_{new} = t_{old} + 0.3 \\times L$。',
          result: '这就是线性位移。如果你的初速度不够（向量模长太短），拉条也救不了你（被超车）。'
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
          title: '实战：配速的重要性',
          description: '为什么丑女必须比输出快？',
          calculation: '输出向量 $v$ 必须左乘草人矩阵 $A$。如果输出先动，运算变成 $v$，下一回合才是 $A$。',
          result: '矩阵运算顺序错误（配速乱了），直接导致伤害归零或大幅降低。'
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
          title: '实战：魂土收尾',
          description: '烬天玉藻前的9段伤害随机分配。',
          calculation: '如果场上只剩大蛇一个单位（特征向量方向），所有伤害矩阵的运算都将作用在同一个目标上。',
          result: '此时伤害效率最大化（特征值最大），这就叫“对单体特攻”。'
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
          title: '实战：长线 vs 短线',
          description: '你是带“阿修罗”还是“紧那罗”？',
          calculation: '阿修罗是脉冲函数（瞬间爆发极高，随后归零）。紧那罗是线性增长函数 $k t$。',
          result: '如果是短时间战斗（求极限 $t \\to 0$），阿修罗更强。如果是3分钟战斗，紧那罗的积分值更大。'
        }
      },
      {
        title: '积分 = 总伤害量',
        characterName: 'SR 书翁',
        characterImage: 'https://placehold.co/600x800/1c1917/4338ca?text=SR+Bukkuman&font=playfair-display',
        content: '书翁的大招“万象之书”记录队友在这一回合内造成的所有伤害，然后在下回合引爆。这本质上是一个定积分运算。',
        formula: 'D_{total} = \\int_{t_0}^{t_1} d(t) \\, dt',
        explanation: '积分是函数的累积量，即曲线下的面积。',
        analogy: '书翁就是那个“积分器”。他不管你瞬时伤害（导数）怎么跳动，他只管你在一段时间内总共输出了多少面积。',
        combatScenario: {
          title: '实战：书翁炸裂',
          description: '书翁记录了茨木、丑女、普攻的所有伤害。',
          calculation: '若你的输出中间断档了（被控），曲线掉到0，积分面积就会变小。',
          result: '所以书翁队最怕断火或控制，因为积分区间内函数值为0，总输出大打折扣。'
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
          title: '实战：御魂计算器',
          description: '为什么大佬的须佐之男要控制攻击和暴伤的比例？',
          calculation: '因为伤害 $D \\approx ATK \\times CDMG$。这是一个双曲线面。',
          result: '沿着梯度方向调整御魂（比如降低溢出的暴击，换取攻击），才能达到面板分数的极值点。'
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
          title: '实战：多段攻击优势',
          description: '大天狗卷4次，至少触发一次针女的概率是多少？',
          calculation: '逆向思维：一次都不触发的概率是 $(1-0.4)^4 = 0.1296$。',
          result: '所以至少触发一次的概率是 $87.04\\%$。这解释了为什么段数越多的式神越适合带针女。'
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
          title: '实战：满暴的意义',
          description: '如果你的茨木暴击率是99%。',
          calculation: '在刷100次副本中，全部暴击的概率是 $0.99^{100} \\approx 36.6\\%$。',
          result: '这意味着你有63%的概率在100盘里至少翻车一次。所以魂土必须“满暴”，99%暴击=0暴击。'
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
          title: '实战：60抽沉船',
          description: '活动期间60抽没出SSR，概率是多少？',
          calculation: '若概率为1%，则 $0.99^{60} \\approx 0.547$。',
          result: '也就是说，60抽沉船其实是大概率事件（54.7%）。不要怪游戏，要怪数学。'
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
          title: '实战：未收录SSR',
          description: '为什么真全图鉴玩家抽卡必定出新式神？',
          calculation: '因为 $U - S$ 仅包含新式神 $\{New\}$。抽样空间被压缩到了单点集。',
          result: '集合论保证了你必定抽到那个唯一的“补集元素”。'
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
          title: '实战：控制覆盖',
          description: '如果你先冰冻了敌人，又去嘲讽他。',
          calculation: '状态集合 = \{冰冻\} $\\cup$ \{嘲讽\}。',
          result: '由于“冰冻”导致无法行动，嘲讽的效果（强制普攻）无法在交集中体现，这叫控制重叠（浪费）。'
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
          title: '实战：协战机制',
          description: '姑获鸟的协战。',
          calculation: '定义函数 $Assisted(Action)$。如果 $Action \\in \\{Normal Attack\\}$，则触发协战。',
          result: '这是对行动集合的一个特征函数映射 $\\chi_A$。'
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
          title: '实战：时间静止',
          description: '当行动条被无限拉动时。',
          calculation: '己方行动集合的测度趋向于全集 $T$，敌方行动集合的测度被挤压为 $0$（零测集）。',
          result: '这就是“双拉一波流”。虽然时间在流逝，但敌人的有效回合数为零。'
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
          title: '实战：清姬+面灵气',
          description: '清姬将所有怪防御降为0。',
          calculation: '防御函数 $f(x)$ 变成了常数。勒贝格积分计算瞬间简化为 $Damage \\times Count$。',
          result: '这就是间接伤害清场快的原因：数学结构上的计算优势。'
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
          title: '实战：收尾选择',
          description: '为什么魂土收尾不用大天狗？',
          calculation: '我们需要一致收敛，确保每一把的伤害下界 $\\inf(D)$ 都大于怪物血量。',
          result: '只有放弃实变函数中的随机测度，追求分析学的一致性，才能达成18秒稳定速刷。'
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
          title: '实战：免控机制',
          description: '为什么阿修罗发疯时会杀队友？',
          calculation: '因为攻击向量 $v$ 被乘上了一个旋转矩阵 $R(\\pi/2)$，方向完全改变。',
          result: '控制理智（虚部）是使用复数型式神的核心。'
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
          title: '实战：献祭流',
          description: '为什么变剑之后伤害更高？',
          calculation: '战场上每一个被移除的单位（极点）都贡献了一个非零的留数项。',
          result: '大招的最终伤害等于所有被献祭队友留数的总和。'
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
          title: '实战：镜佑保命',
          description: '为什么云外镜一半血是满的？',
          calculation: '因为他的生命值定义域是双层的。',
          result: '理解了这个拓扑结构，你就明白了为什么治疗对他往往是反向作用（在另一个分支上移动）。'
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
          title: '实战：回合外机制',
          description: '伪回合（如反击）是否属于态射复合？',
          calculation: '是的。反击是插入在两个主要态射 $f$ 和 $g$ 之间的中间态射 $h$。',
          result: '如果 $h$ 打断了 $f$ 的复合性（如眩晕），则整个交换图表（Commutative Diagram）无法闭合。'
        }
      },
      {
        title: '函子 = 体系变换',
        characterName: 'SSR 不知火',
        characterImage: 'https://placehold.co/600x800/1c1917/86198f?text=SSR+Shiranui&font=playfair-display',
        content: '不知火的“星火满天”是一个函子 $F$。它将“普通攻击”范畴 $\\mathcal{C}$ 映射到了“两次攻击+吸血”范畴 $\\mathcal{D}$。',
        formula: 'F(f: X \\to Y) = F(f): F(X) \\to F(Y)',
        explanation: '函子保持了结构的同构性。普攻还是普攻，但性质变了。所有依赖普攻的式神（酒吞、化鲸）都在这个函子作用下获得了升维。',
        analogy: '这也是为什么不知火体系能容纳万物。她不仅仅是一个辅助，她是改变了底层战斗逻辑（范畴结构）的函子。',
        combatScenario: {
          title: '实战：普攻队',
          description: '为什么酒吞在离吞吞体系这么强？',
          calculation: '因为酒吞的输出算子 $S$ 被函子 $F$ 作用后，变成了 $S\' = 2S + \\text{Buff}$。',
          result: '原本线性的伤害增长变成了指数级爆炸，这是结构性变革。'
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
          title: '实战：破核',
          description: '面对复杂的机制怪（如千姬、SP花）。',
          calculation: '不用管她被动多复杂。强制她普攻（建立简单态射），她的复杂结构就坍缩了。',
          result: '这就是为什么铃鹿御前是万能解：她通过控制交互（Morphsim）来定义对手。'
        }
      }
    ]
  }
];