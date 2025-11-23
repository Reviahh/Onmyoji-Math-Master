
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
        title: '向量 = 式神的属性面板',
        characterName: 'SSR 茨木童子',
        characterImage: 'https://placehold.co/600x800/1c1917/b45309?text=SSR+Ibaraki+Doji&font=playfair-display', 
        content: '打开你的茨木童子面板，你会看到：攻击 3216、暴击 10%、暴伤 150%、速度 112。这组有序的数字，就是一个 4维列向量。',
        formula: 'v = \\begin{bmatrix} 3216 \\\\ 112 \\\\ 0.10 \\\\ 1.50 \\end{bmatrix} \\begin{matrix} (ATK) \\\\ (SPD) \\\\ (CRIT) \\\\ (CDMG) \\end{matrix}',
        explanation: '向量是“有多个数构成的一个整体”。在线性代数中，我们不关心“攻击”意味着什么，我们只关心它在空间中的位置和变换。',
        analogy: '你的式神面板就是一个列向量 $v$。所有式神的集合构成了一个“式神向量空间”。',
        combatScenario: {
          title: '实战：面板达标检测',
          description: '假设魂土（悲鸣）副本要求茨木面板必须达到“攻击×暴伤 > 21000”才能秒杀第一层。',
          calculation: '内积计算：Let w = [CDMG, 0, 0, ATK]^T。我们需要 v·w > 21000？(不完全准确，但在特定模型下可视为加权求和)',
          result: '如果 3216 × 2.5 < 21000，虽然你是茨木，但你只是“猜拳童子”，无法过本。'
        }
      },
      {
        title: '矩阵变换 = 御魂套装效果',
        characterName: 'SSR 玉藻前',
        characterImage: 'https://placehold.co/600x800/1c1917/b45309?text=SSR+Tamamo+no+Mae&font=playfair-display', 
        content: '当你给玉藻前装上“破势”四件套时，本质上是对他的基础向量进行了线性变换。破势效果：对生命值高于70%的单位造成额外40%伤害。',
        formula: 'D_{final} = \\begin{bmatrix} 1.4 & 0 \\\\ 0 & 1 \\end{bmatrix} \\cdot \\begin{bmatrix} D_{base} \\\\ H_{enemy} \\end{bmatrix}',
        explanation: '矩阵 $A$ 作为一个算子（Operator），作用在向量 $v$ 上，将其映射为一个新的向量 $v\'$。',
        analogy: '御魂就是矩阵 $A$。御魂强化+15，就是增大了矩阵对角线上的元素值（Scaling）。',
        combatScenario: {
          title: '实战：拉条队伍',
          description: '山兔使用了“兔子舞”，拉条30%。',
          calculation: '这相当于全队的时间轴位置向量 $T$ 左乘了一个变换矩阵，使得所有人的行动条位置 $t_{new} = t_{old} + 0.3 \\times \\text{bar\_length}$。',
          result: '这就是线性位移。如果你的速度不够（向量模长太短），拉条也救不了你（被超车）。'
        }
      },
      {
        title: '矩阵乘法 = 技能连招 (Combo)',
        characterName: 'SSR 妖刀姬',
        characterImage: 'https://placehold.co/600x800/1c1917/b45309?text=SSR+Yotohime&font=playfair-display',
        content: '单一的矩阵是对一次变换。而技能连招（先破甲，再输出，再斩杀）则是多个矩阵的连续相乘。注意：矩阵乘法不满足交换律！',
        formula: 'v_{final} = (C \\cdot (B \\cdot (A \\cdot v)))',
        explanation: '矩阵乘法的顺序至关重要。$AB \\neq BA$。先穿衣服再洗澡，和先洗澡再穿衣服，结果截然不同。',
        analogy: '先放“丑时之女”的草人（矩阵A：传递伤害），再放“晴明”的星（矩阵B：增伤30%）。如果你顺序反了，可能导致增伤无法正确作用于草人传递后的数值。',
        combatScenario: {
          title: '实战：配速的重要性',
          description: '为什么丑女必须比输出快？',
          calculation: '输出向量 $v$ 必须左乘草人矩阵 $A$，即 $A v$。如果输出先动，运算变成 $v$，下一回合才是 $A$。',
          result: '矩阵运算顺序错误（配速乱了），直接导致伤害归零或大幅降低。'
        }
      },
      {
        title: '特征值 = 纯粹的增伤倍率',
        characterName: 'SP 烬天玉藻前',
        characterImage: 'https://placehold.co/600x800/1c1917/b45309?text=SP+Tamamo+no+Mae&font=playfair-display',
        content: '在某些特定的方向上（特征向量），御魂的增益纯粹是数值的放大（特征值），而不会改变属性的比例结构。',
        formula: 'A v = \\lambda v',
        explanation: '如果一个向量变换后方向不变，只长度变了，它就是特征向量。缩放倍数 $\\lambda$ 就是特征值。',
        analogy: '对于“纯输出”式神（特征向量），堆攻击加成（矩阵变换）是极其高效的，因为方向一致，$\\lambda$ 很大。',
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
    title: '战斗过程的变化',
    description: '高等数学核心概念：导数、积分与梯度',
    icon: 'curve',
    sections: [
      {
        title: '导数 = 瞬时DPS',
        characterName: 'SSR 泷夜叉姬',
        characterImage: 'https://placehold.co/600x800/1c1917/4338ca?text=SSR+Takiyashihime&font=playfair-display',
        content: '有些式神需要暖机（如叠“新月”buff）。伤害函数 $D(t)$ 不是常数。导数 $D\'(t)$ 描述了伤害随时间的增长速度。',
        formula: "DPS(t) = \\lim_{\\Delta t \\to 0} \\frac{D(t+\\Delta t) - D(t)}{\\Delta t}",
        explanation: '导数是变化率。如果 $D\'(t) > 0$，说明你的式神正在变强（叠Buff中）。',
        analogy: '泷夜叉姬前几回合伤害低，随着回合数 $t$ 增加，Buff层数增加，导数 $D\'(t)$ 保持正值，直到叠满。',
        combatScenario: {
          title: '实战：活动副本长线作战',
          description: '你是带“紧那罗”还是“阿修罗”？',
          calculation: '阿修罗是 $D(t) = \\delta(t)$ (狄拉克函数，瞬间爆发，随后归零)。紧那罗是 $D(t) = kt$ (线性增长)。',
          result: '如果是短时间战斗（求极限 $t \\to 0$），阿修罗更强。如果是3分钟战斗，紧那罗的积分值更大。'
        }
      },
      {
        title: '积分 = 结算界面的总伤害',
        characterName: 'SR 书翁',
        characterImage: 'https://placehold.co/600x800/1c1917/4338ca?text=SR+Bukkuman&font=playfair-display',
        content: '书翁的大招“万象之书”记录队友在这一回合内造成的所有伤害，然后在下回合引爆。这本质上是一个定积分运算。',
        formula: 'Damage_{record} = \\int_{t_{start}}^{t_{end}} D_{team}(t) \\, dt',
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
        title: '梯度 = 御魂强化的最优方向',
        characterName: 'SSR 须佐之男',
        characterImage: 'https://placehold.co/600x800/1c1917/4338ca?text=SSR+Susanoo&font=playfair-display',
        content: '你的伤害是多元函数 $f(ATK, CRIT, CDMG)$。当你只有有限的御魂副属性点数时，给谁加点收益最高？',
        formula: '\\nabla f = \\left( \\frac{\\partial f}{\\partial ATK}, \\frac{\\partial f}{\\partial CDMG} \\right)',
        explanation: '梯度向量指向函数增长最快的方向。',
        analogy: '当你的暴伤已经达到300%时，继续堆暴伤的偏导数可能不如堆攻击的偏导数大。',
        combatScenario: {
          title: '实战：御魂计算器原理',
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
    title: '玄学与概率论',
    description: '概率论核心概念：贝叶斯、期望与大数定律',
    icon: 'dice',
    sections: [
      {
        title: '条件概率与针女触发',
        characterName: 'SSR 大天狗',
        characterImage: 'https://placehold.co/600x800/1c1917/b45309?text=SSR+Ootengu&font=playfair-display',
        content: '大天狗带针女御魂（40%概率造成最大生命值10%伤害，前提是必须先暴击）。这是一个典型的条件概率模型。',
        formula: 'P(\\text{Trigger}) = P(\\text{Crit}) \\times P(\\text{Seductress} | \\text{Crit})',
        explanation: '事件B（针女）发生的概率，依赖于事件A（暴击）是否先发生。',
        analogy: '如果你满暴（$P(Crit)=1$），针女触发率就是实打实的40%。如果你只有50%暴击，针女真实触发率只有 $0.5 \\times 0.4 = 20\\%$。',
        combatScenario: {
          title: '实战：4段攻击的大天狗',
          description: '大天狗卷4次，至少触发一次针女的概率是多少？',
          calculation: '逆向思维：一次都不触发的概率是 $(1-0.4)^4 = 0.1296$。',
          result: '所以至少触发一次的概率是 $1 - 0.1296 = 87.04\\%$。这解释了为什么段数越多的式神越适合带针女。'
        }
      },
      {
        title: '数学期望 = 魂土平均通关时间',
        characterName: 'SP 因幡辉夜姬',
        characterImage: 'https://placehold.co/600x800/1c1917/b45309?text=SP+Kaguya&font=playfair-display',
        content: '为了计算刷1000体力的平均耗时，我们需要算期望。假设不翻车耗时30s，翻车耗时60s。',
        formula: 'E(T) = 30 \\times P(\\text{Win}) + 60 \\times P(\\text{Lose})',
        explanation: '期望是随机变量加权平均后的中心值。',
        analogy: '只要你的翻车率（$P(Lose)$）存在，你的长期平均通关时间就一定大于30s。',
        combatScenario: {
          title: '实战：只要暴击够高就行？',
          description: '如果你的茨木暴击率是99%。',
          calculation: '在刷100次副本中，$0.99^{100} \\approx 0.366$。',
          result: '意味着你有63%的概率在100盘里至少翻车一次。所以魂土必须“满暴”，99%暴击=0暴击。'
        }
      },
      {
        title: '贝叶斯公式 = 抽卡血统鉴定',
        characterName: '阴阳师 晴明',
        characterImage: 'https://placehold.co/600x800/1c1917/b45309?text=Seimei&font=playfair-display',
        content: '当你抽到SSR时，你想知道这是因为“全图鉴UP”生效了，还是仅仅是你运气好（0.01裸抽）？',
        formula: 'P(\\text{UP} | \\text{SSR}) = \\frac{P(\\text{SSR} | \\text{UP}) P(\\text{UP})}{P(\\text{SSR})}',
        explanation: '贝叶斯公式用于根据观察到的结果（抽到SSR），反推原因（是不是UP机制导致的）。',
        analogy: '这能算出你究竟是“伪欧皇”（靠保底机制出的）还是“真欧皇”（靠阳寿出的）。',
        combatScenario: {
          title: '实战：60抽必出SSR',
          description: '活动期间60抽没出SSR，概率是多少？',
          calculation: '若概率为1%，则 $0.99^{60} \\approx 0.547$。',
          result: '也就是说，60抽沉船其实是大概率事件（54.7%）。不要怪游戏，要怪数学。'
        }
      }
    ]
  }
];
