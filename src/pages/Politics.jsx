import TopicTemplate from '../components/TopicTemplate'

function Politics() {
  const sections = [
    {
      title: '去中心化治理：权力的重新分配',
      content: [
        {
          subtitle: '无需信任的系统',
          points: [
            '消除单点故障：去中心化消除了传统系统的脆弱性',
            '代码即法律：通过算法而非政治决策执行规则',
            'BIP流程：比特币改进提案的民主化决策过程',
            '分叉机制：社区可以选择不同的发展方向'
          ]
        },
        {
          subtitle: '政治权力的挑战',
          points: [
            '货币主权：挑战国家对货币发行的垄断权',
            '资本管制：跨境支付不受传统金融管制限制',
            '货币竞争：与法定货币形成竞争关系',
            '政策独立：不受政治周期影响的货币政策'
          ]
        }
      ]
    },
    {
      title: '监管与合规：政府的应对策略',
      content: [
        {
          subtitle: '监管框架发展',
          points: [
            'KYC/AML要求：交易所的身份验证和反洗钱要求',
            '税收政策：各国对加密货币征税的不同立场',
            '法律地位：从禁止到法定货币的认定变化',
            '沙盒监管：允许创新的试验性监管环境'
          ]
        },
        {
          subtitle: '合规成本与创新',
          points: [
            '监管套利：不同司法管辖区的竞争',
            '技术合规：使用技术手段满足监管要求',
            '行业自律：建立行业标准和最佳实践',
            '监管科技：运用技术提高监管效率'
          ]
        }
      ]
    },
    {
      title: '地缘政治影响：新的全球秩序',
      content: [
        {
          subtitle: '国际货币体系',
          points: [
            '美元霸权挑战：比特币作为替代储备资产的可能性',
            '货币武器化：制裁和金融封锁的应对',
            '跨境支付主权：不依赖SWIFT系统的选择',
            '央行数字货币：各国的数字化应对'
          ]
        },
        {
          subtitle: '能源与挖矿政治',
          points: [
            '能源外交：挖矿产业对能源分配的影响',
            '算力分布：挖矿中心化的地缘政治风险',
            '环保政治：能源消耗的政治化讨论',
            '基础设施竞争：吸引挖矿产业的国家竞争'
          ]
        }
      ]
    },
    {
      title: '金融包容性：重新定义经济参与',
      content: [
        {
          subtitle: '普惠金融革命',
          points: [
            '无银行服务：为全球17亿无银行账户人口提供金融服务',
            '跨境汇款：大幅降低国际汇款成本',
            '金融基础设施：绕过传统银行体系',
            '移动优先：通过智能手机接入金融系统'
          ]
        },
        {
          subtitle: '经济自由与人权',
          points: [
            '财产权保护：不可没收的数字财产',
            '抗通胀工具：在高通胀国家的价值保护',
            '经济难民：资本外逃的新途径',
            '言论自由：抗审查的价值传递'
          ]
        }
      ]
    },
    {
      title: '权力去中心化：个人主权的崛起',
      content: [
        {
          subtitle: '个人经济主权',
          points: [
            '私钥即主权：个人对财产的绝对控制权',
            '抗审查交易：无法被任意冻结或撤销的支付',
            '隐私保护：交易隐私与个人自由',
            '自我银行：成为自己的银行'
          ]
        },
        {
          subtitle: '透明度与问责',
          points: [
            '公开账本：所有交易公开可查',
            '腐败预防：减少隐性交易的空间',
            '政府问责：公共资金使用的透明度',
            '选择退出：用脚投票的经济选择'
          ]
        }
      ]
    }
  ]

  const keyInsights = [
    '去中心化技术从根本上改变了权力分配',
    '监管应该促进创新而不是阻碍发展',
    '比特币为个人经济主权提供了技术工具',
    '金融包容性可以通过技术而非传统机构实现'
  ]

  const resources = {
    books: [
      {
        title: 'The Politics of Bitcoin',
        author: 'David Golumbia',
        description: '批判性分析比特币的政治理念和社会影响'
      },
      {
        title: 'Digital Gold',
        author: 'Nathaniel Popper',
        description: '比特币早期发展史和政治背景'
      },
      {
        title: 'The Sovereign Individual',
        author: 'James Dale Davidson',
        description: '预见数字时代的个人主权概念'
      },
      {
        title: 'Bitcoin and Human Rights',
        author: 'Alex Gladstein',
        description: '比特币在人权保护中的作用'
      }
    ],
    papers: [
      {
        title: 'Cryptocurrency and the Problem of Intermediation',
        author: 'Jonathan Zittrain',
        link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2523771'
      },
      {
        title: 'Virtual Currencies and Beyond: Initial Considerations',
        author: 'European Central Bank',
        link: 'https://www.ecb.europa.eu/pub/pdf/other/virtualcurrencyschemes201210en.pdf'
      },
      {
        title: 'The Regulation of Cryptocurrencies',
        author: 'Hossein Nabilou',
        link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3119021'
      }
    ],
    websites: [
      {
        title: 'Human Rights Foundation Bitcoin Development Fund',
        link: 'https://hrf.org/programs_posts/devfund/',
        description: '比特币在人权保护中的应用'
      },
      {
        title: 'Coin Center Policy Research',
        link: 'https://www.coincenter.org/',
        description: '加密货币政策研究和倡导'
      },
      {
        title: 'Global Legal Research Center - Cryptocurrency',
        link: 'https://www.loc.gov/law/help/cryptocurrency/',
        description: '各国加密货币法律法规汇总'
      },
      {
        title: 'Bitcoin Policy Institute',
        link: 'https://www.btcpolicy.org/',
        description: '比特币政策研究和教育'
      }
    ]
  }

  const reflectionQuestions = [
    '如果比特币成为主流，传统政府的征税能力会如何变化？',
    '去中心化货币与民主制度是互补还是冲突？',
    '比特币会加剧还是减少全球不平等？',
    '在专制政权下，比特币是解放工具还是监控风险？'
  ]

  return (
    <TopicTemplate
      icon="🏛️"
      title="政治"
      subtitle="权力与去中心化"
      introduction="比特币不仅是技术创新，更是政治实验。它挑战了传统的权力结构，重新定义了个人与国家的关系。从货币主权到金融包容性，比特币正在重塑全球政治格局。"
      sections={sections}
      keyInsights={keyInsights}
      resources={resources}
      reflectionQuestions={reflectionQuestions}
    />
  )
}

export default Politics