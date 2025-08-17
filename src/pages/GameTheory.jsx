import TopicTemplate from '../components/TopicTemplate'

function GameTheory() {
  const sections = [
    {
      title: '囚徒困境：合作的难题',
      content: [
        {
          subtitle: '经典囚徒困境',
          points: [
            '个体理性vs集体理性：背叛是优势策略',
            '纳什均衡：双方背叛的稳定状态',
            '社会困境：个人最优不等于集体最优',
            '信任的价值：合作创造更大收益'
          ]
        },
        {
          subtitle: '比特币的解决方案',
          points: [
            '改变收益矩阵：诚实挖矿收益大于攻击',
            '重复博弈：长期收益大于短期欺骗',
            '可验证性：作弊立即被发现',
            '沉没成本：攻击需要巨大前期投入'
          ]
        }
      ]
    },
    {
      title: '激励机制设计：让自私产生合作',
      content: [
        {
          subtitle: '挖矿激励',
          points: [
            '区块奖励：诚实工作的直接回报',
            '交易费用：优先打包高价值交易',
            '孤块惩罚：不诚实行为导致损失',
            '难度调整：维持均衡的自动机制'
          ]
        },
        {
          subtitle: '经济安全',
          points: [
            '攻击成本：51%攻击的经济不可行',
            '激励相容：个人利益与系统利益一致',
            '纳什均衡：诚实是最优策略',
            '自我强化：参与者越多系统越安全'
          ]
        }
      ]
    },
    {
      title: '协调博弈：共识的形成',
      content: [
        {
          subtitle: '谢林点',
          points: [
            '焦点效应：最长链作为自然焦点',
            '协调成本：分叉导致价值分裂',
            '网络效应：跟随多数的理性',
            '路径依赖：历史选择影响未来'
          ]
        },
        {
          subtitle: '分叉博弈',
          points: [
            '硬分叉：不兼容的规则变更',
            '软分叉：向后兼容的升级',
            '经济投票：市场决定胜负',
            'UASF：用户激活的软分叉'
          ]
        }
      ]
    },
    {
      title: '拜占庭将军问题：分布式共识',
      content: [
        {
          subtitle: '问题本质',
          points: [
            '通信不可靠：消息可能丢失或篡改',
            '叛徒存在：部分节点可能恶意',
            '共识要求：诚实节点达成一致',
            '传统解决：需要可信第三方'
          ]
        },
        {
          subtitle: '工作量证明解决方案',
          points: [
            '概率共识：最长链概率收敛',
            '经济成本：背叛需要付出代价',
            '异步网络：不需要同步时钟',
            '开放参与：无需身份认证'
          ]
        }
      ]
    },
    {
      title: '零和vs正和博弈',
      content: [
        {
          subtitle: '传统金融的零和特征',
          points: [
            '交易成本：中介抽取价值',
            '信息不对称：内幕交易优势',
            '系统性风险：大而不倒的道德风险',
            '财富集中：马太效应加剧'
          ]
        },
        {
          subtitle: '比特币的正和潜力',
          points: [
            '降低交易成本：去除中介费用',
            '信息透明：区块链公开可查',
            '金融包容：无需许可的参与',
            '价值创造：网络效应带来增值'
          ]
        }
      ]
    },
    {
      title: '演化博弈：策略的进化',
      content: [
        {
          subtitle: '挖矿策略演化',
          points: [
            '个人挖矿→矿池：规模经济',
            'CPU→GPU→ASIC：军备竞赛',
            '地理迁移：追逐廉价能源',
            '策略分化：大矿工vs小矿工'
          ]
        },
        {
          subtitle: '生态系统演化',
          points: [
            '协议升级：SegWit、Taproot等',
            '二层网络：闪电网络等扩展',
            '闪电网络：二层扩容的博弈设计',
            '制度演化：从无政府到自治'
          ]
        }
      ]
    }
  ]

  const keyInsights = [
    '自私的个体通过正确的激励可以产生合作行为',
    '去中心化系统需要精心设计的博弈机制',
    '经济激励比技术保障更能确保系统安全',
    '长期博弈改变了参与者的行为模式'
  ]

  const resources = {
    books: [
      {
        title: 'The Theory of Games and Economic Behavior',
        author: 'von Neumann & Morgenstern',
        description: '博弈论奠基之作'
      },
      {
        title: 'The Evolution of Cooperation',
        author: 'Robert Axelrod',
        description: '合作如何在自私个体间演化'
      },
      {
        title: 'Mechanism Design Theory',
        author: 'Eric Maskin',
        description: '激励机制设计的诺贝尔奖理论'
      },
      {
        title: 'Cryptoeconomics',
        author: 'Eric Voskuil',
        description: '密码经济学原理'
      }
    ],
    papers: [
      {
        title: 'Bitcoin\'s Security Model Revisited',
        author: 'Yonatan Sompolinsky',
        link: 'https://arxiv.org/abs/1605.09193'
      },
      {
        title: 'The Economics of Bitcoin Mining',
        author: 'Joshua Kroll et al.',
        link: 'https://www.cs.princeton.edu/~jkroll/papers/weis13_bitcoin.pdf'
      },
      {
        title: 'Majority is not Enough',
        author: 'Ittay Eyal & Emin Gün Sirer',
        link: 'https://arxiv.org/abs/1311.0243'
      }
    ],
    websites: [
      {
        title: 'Bitcoin Game Theory',
        link: 'https://nakamotoinstitute.org/mempool/',
        description: '中本聪研究所的博弈论文集'
      },
      {
        title: 'Cryptoeconomics.study',
        link: 'https://cryptoeconomics.study/',
        description: '密码经济学学习资源'
      },
      {
        title: 'Token Engineering',
        link: 'https://tokenengineering.org/',
        description: '代币工程和激励设计'
      }
    ]
  }

  const reflectionQuestions = [
    '如果挖矿奖励归零，仅靠交易费能否维持网络安全？',
    '社会共识和算法共识，哪个更重要？',
    '去中心化系统中的"看不见的手"是什么？',
    '比特币是否真正解决了拜占庭将军问题？'
  ]

  return (
    <TopicTemplate
      icon="🎯"
      title="博弈论"
      subtitle="合作的演化"
      introduction="比特币是博弈论的杰作，它展示了如何通过精心设计的激励机制，让自私的个体自发产生合作行为。每个参与者追求个人利益的同时，维护了整个系统的安全和稳定。"
      sections={sections}
      keyInsights={keyInsights}
      resources={resources}
      reflectionQuestions={reflectionQuestions}
    />
  )
}

export default GameTheory