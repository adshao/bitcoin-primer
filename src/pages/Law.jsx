import TopicTemplate from '../components/TopicTemplate'

function Law() {
  const sections = [
    {
      title: '核心问题：谁有权制定规则？如何确保执行？',
      content: [
        {
          subtitle: '传统法律体系',
          points: [
            '立法权：议会或人大制定法律',
            '司法权：法院解释和裁决',
            '执法权：警察和政府部门执行',
            '制衡机制：三权分立，相互监督'
          ]
        },
        {
          subtitle: '代码即法律',
          points: [
            '自动执行：协议规则的确定性保证',
            '不可篡改：部署后规则固定',
            '透明公开：所有人可查看验证',
            '去信任化：数学保证而非人的承诺'
          ]
        }
      ]
    },
    {
      title: '合约与执行：从纸质到代码',
      content: [
        {
          subtitle: '传统合约的困境',
          points: [
            '执行成本：需要法院和执法系统',
            '时间延迟：诉讼程序漫长',
            '地域限制：跨国执行困难',
            '解释空间：文字歧义导致争议'
          ]
        },
        {
          subtitle: '可编程规则的创新',
          points: [
            '即时执行：条件满足自动触发',
            '成本极低：无需中介和执法',
            '全球有效：不受司法管辖限制',
            '确定性：代码逻辑明确无歧义'
          ]
        }
      ]
    },
    {
      title: '产权定义：占有vs控制',
      content: [
        {
          subtitle: '传统产权体系',
          points: [
            '登记制度：政府机构确认所有权',
            '法律保护：侵权可寻求法律救济',
            '转让程序：需要公证和登记',
            '国家背书：依赖政府信用'
          ]
        },
        {
          subtitle: '密码学产权',
          points: [
            '私钥即所有权：掌握私钥即拥有资产',
            '自我主权：无需第三方确认',
            '即时转移：签名即完成转让',
            '防伪造：密码学保证唯一性'
          ]
        }
      ]
    },
    {
      title: '争议解决：仲裁vs共识',
      content: [
        {
          subtitle: '传统争议解决',
          points: [
            '法院诉讼：耗时费力成本高',
            '仲裁机制：相对快速但仍需信任',
            '调解协商：依赖双方善意',
            '执行保障：需要强制力支持'
          ]
        },
        {
          subtitle: '链上治理机制',
          points: [
            '预设规则：争议情况提前编码',
            '多签机制：多方共同决策',
            '时间锁定：给予反悔和申诉期',
            '分叉选择：社区投票决定方向'
          ]
        }
      ]
    },
    {
      title: '监管挑战：代码vs法律',
      content: [
        {
          subtitle: '监管困境',
          points: [
            '管辖权问题：去中心化系统归谁管',
            '执法难题：如何制裁匿名参与者',
            '技术壁垒：监管者理解滞后',
            '创新与监管：平衡发展与风险'
          ]
        },
        {
          subtitle: '合规探索',
          points: [
            'KYC/AML：身份验证和反洗钱',
            '沙盒监管：创新试验区',
            '行业自律：制定行业标准',
            '技术监管：用技术手段监管技术'
          ]
        }
      ]
    },
    {
      title: '社会启示：法律的未来形态',
      content: [
        {
          subtitle: '法律的代码化趋势',
          points: [
            '规则明确化：减少解释空间',
            '执行自动化：降低执法成本',
            '透明化：所有人可监督',
            '全球化：跨越司法管辖'
          ]
        },
        {
          subtitle: '人治与法治的新平衡',
          points: [
            '代码的局限：无法处理所有情况',
            '人的价值：道德判断和灵活性',
            '混合模式：代码执行+人工仲裁',
            '演化路径：从强制到自愿遵守'
          ]
        }
      ]
    }
  ]

  const keyInsights = [
    '执行比制定更重要，自动执行优于人工执行',
    '产权的本质是控制权，技术可以直接实现控制',
    '透明和可预测的规则比灵活但不确定的规则更有价值',
    '法律的未来可能是人类语言和计算机代码的结合'
  ]

  const resources = {
    books: [
      {
        title: 'Code and Other Laws of Cyberspace',
        author: 'Lawrence Lessig',
        description: '代码如何成为网络空间的法律'
      },
      {
        title: 'Cryptoeconomics: Economic Mechanisms for Digital Information',
        author: 'Nick Szabo',
        description: '密码经济学的原创性阐述'
      },
      {
        title: 'The Rule of Law',
        author: 'Tom Bingham',
        description: '法治概念的经典阐述'
      },
      {
        title: 'Blockchain and the Law',
        author: 'Primavera De Filippi & Aaron Wright',
        description: '区块链技术对法律制度的影响'
      },
      {
        title: 'The Ethics of Influence',
        author: 'Cass Sunstein',
        description: '政府影响与个人选择的伦理考量'
      }
    ],
    papers: [
      {
        title: 'The Nature of the Agreement in the Blockchain',
        author: 'Nick Szabo',
        link: 'https://nakamotoinstitute.org/the-idea-of-smart-contracts/'
      },
      {
        title: 'Code is Law: On Liberty in Cyberspace',
        author: 'Lawrence Lessig',
        link: 'https://lessig.org/content/articles/works/code.pdf'
      },
      {
        title: 'Blockchain Technology and Decentralized Governance',
        author: 'Marcella Atzori',
        link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2709713'
      }
    ],
    websites: [
      {
        title: 'Stanford CodeX',
        link: 'https://law.stanford.edu/codex-the-stanford-center-for-legal-informatics/',
        description: '斯坦福大学法律信息学中心'
      },
      {
        title: 'MIT Computational Law',
        link: 'https://law.mit.edu/',
        description: 'MIT计算法学项目'
      },
      {
        title: 'Kleros - Decentralized Justice',
        link: 'https://kleros.io/',
        description: '去中心化争议解决平台'
      },
      {
        title: 'OpenLaw',
        link: 'https://www.openlaw.io/',
        description: '区块链法律协议和工具'
      }
    ]
  }

  const reflectionQuestions = [
    '如果所有协议都由代码执行，法律的角色会如何转变？',
    '代码的bug是否等同于法律的漏洞？谁该负责？',
    '完全透明的规则体系是否会导致新的不公平？',
    '在代码即法律的世界，如何保护弱势群体？'
  ]

  return (
    <TopicTemplate
      icon="⚖️"
      title="法律"
      subtitle="规则与执行"
      introduction="比特币展示了一种全新的规则体系：不依赖暴力威慑，而是通过密码学和经济激励确保规则执行。'代码即法律'不仅是技术创新，更是对传统法律体系的深刻反思。当规则可以自动执行时，我们还需要法院和警察吗？"
      sections={sections}
      keyInsights={keyInsights}
      resources={resources}
      reflectionQuestions={reflectionQuestions}
    />
  )
}

export default Law