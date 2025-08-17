import TopicTemplate from '../components/TopicTemplate'

function Money() {
  const sections = [
    {
      title: '货币的本质：交换媒介的演化',
      content: [
        {
          subtitle: '货币的核心功能',
          points: [
            '交换媒介：促进商品和服务的交换，解决双重巧合问题',
            '价值尺度：提供统一的计价单位，便于比较商品价值',
            '价值储存：跨时间保存购买力，抵御通货膨胀',
            '延期支付：债务和合约的计价标准'
          ]
        },
        {
          subtitle: '良好货币的特征',
          points: [
            '稀缺性：供应有限且可预测',
            '耐久性：不易腐蚀或损坏',
            '可分割性：可分成小单位',
            '便携性：易于运输和转移',
            '可验证性：真伪容易验证',
            '可互换性：单位之间完全相同'
          ]
        }
      ]
    },
    {
      title: '货币演化史：从物理到数字',
      content: [
        {
          subtitle: '历史发展阶段',
          points: [
            '商品货币：贝壳、盐、牲畜等具有内在价值的物品',
            '金属货币：金银因稀缺性、可分割性成为主要货币',
            '代表货币：纸币代表一定数量的贵金属',
            '法定货币：政府发行的无内在价值货币',
            '数字货币：比特币开创的去中心化数字货币'
          ]
        },
        {
          subtitle: '每次变革的驱动力',
          points: [
            '技术进步：改善货币的物理特性',
            '交易需求：降低交易成本和复杂性',
            '政治需要：政府对货币供应的控制',
            '全球化：跨境贸易的便利性需求'
          ]
        }
      ]
    },
    {
      title: '比特币的货币属性分析',
      content: [
        {
          subtitle: '技术赋予的优势',
          points: [
            '绝对稀缺：2100万枚的固定上限，比黄金更可预测',
            '极致可分：可分割至小数点后8位（1聪=0.00000001 BTC）',
            '无界携带：数字形式，跨境转移无物理限制',
            '永恒耐久：只要网络存在，比特币永不磨损',
            '密码验证：通过密码学快速验证真伪',
            '协议统一：每个比特币在协议层面完全相同'
          ]
        },
        {
          subtitle: '与传统货币比较',
          points: [
            '黄金vs比特币：数字黄金的稀缺性更可验证',
            '法币vs比特币：去中心化vs中心化控制',
            '银行系统vs区块链：中介化vs去中介化',
            '物理vs数字：存储和转移的根本差异'
          ]
        }
      ]
    },
    {
      title: '格雷欣法则与货币竞争',
      content: [
        {
          subtitle: '劣币驱逐良币现象',
          points: [
            '经典理论：人们倾向于花费贬值货币，储存升值货币',
            '比特币现象：作为"良币"更多被储存而非流通',
            '双重角色：既是价值储存工具，也是支付手段',
            '时间偏好：低时间偏好者倾向于持有比特币'
          ]
        },
        {
          subtitle: '货币竞争的新格局',
          points: [
            '多元选择：法币、黄金、比特币的共存',
            '市场选择：用户根据需求选择不同货币',
            '网络效应：使用者越多，价值越大',
            '制度竞争：不同货币制度的优胜劣汰'
          ]
        }
      ]
    },
    {
      title: '货币政策革命：算法vs人治',
      content: [
        {
          subtitle: '传统货币政策',
          points: [
            '央行控制：通过利率和货币供应量调控经济',
            '主观决策：基于经济学理论和政治考量',
            '灵活性：可根据情况调整政策',
            '道德风险：可能被政治利益绑架'
          ]
        },
        {
          subtitle: '比特币的算法治理',
          points: [
            '代码即法律：算法化的货币政策，不受人为干预',
            '可预测性：供应计划完全透明和确定',
            '通缩设计：长期通缩vs法币的通胀倾向',
            '去政治化：货币政策不受政治周期影响'
          ]
        }
      ]
    },
    {
      title: '货币网络效应：从接受到普及',
      content: [
        {
          subtitle: '采用过程',
          points: [
            '早期采用者：技术专家和投机者',
            '商家接受：支付选项的增加',
            '用户增长：网络价值的提升',
            '制度采用：企业和政府的参与'
          ]
        },
        {
          subtitle: '基础设施建设',
          points: [
            '支付系统：钱包、支付处理器',
            '交易所：法币与比特币的兑换',
            '金融服务：借贷、衍生品市场',
            '监管框架：法律地位的明确化'
          ]
        }
      ]
    }
  ]

  const keyInsights = [
    '货币的价值来自于社会共识，而非内在价值',
    '技术进步推动货币形态的演进',
    '比特币首次实现了数字稀缺性',
    '去中心化货币政策可能比中央管制更稳定'
  ]

  const resources = {
    books: [
      {
        title: 'The History of Money',
        author: 'Jack Weatherford',
        description: '从古代到现代的货币发展史'
      },
      {
        title: 'What Has Government Done to Our Money?',
        author: 'Murray Rothbard',
        description: '奥地利学派对货币理论的经典阐述'
      },
      {
        title: 'The Denationalization of Money',
        author: 'F.A. Hayek',
        description: '私有货币竞争的理论基础'
      },
      {
        title: 'The Ethics of Money Production',
        author: 'Jörg Guido Hülsmann',
        description: '货币生产的道德哲学分析'
      },
      {
        title: 'Money, Bank Credit, and Economic Cycles',
        author: 'Jesús Huerta de Soto',
        description: '货币、银行信贷与经济周期的关系'
      }
    ],
    papers: [
      {
        title: 'The Origins of Political Order',
        author: 'Francis Fukuyama',
        link: 'https://www.foreignaffairs.com/articles/2011-04-14/origins-political-order'
      },
      {
        title: 'Shelling Out: The Origins of Money',
        author: 'Nick Szabo',
        link: 'https://nakamotoinstitute.org/shelling-out/'
      },
      {
        title: 'The Island of Stone Money',
        author: 'Milton Friedman',
        link: 'https://www.hoover.org/research/island-stone-money'
      }
    ],
    websites: [
      {
        title: 'Mises Institute - Money & Banking',
        link: 'https://mises.org/topics/money-and-banks',
        description: '奥地利经济学派的货币理论资源'
      },
      {
        title: 'Nakamoto Institute',
        link: 'https://nakamotoinstitute.org/',
        description: '比特币和货币理论的深度文章'
      },
      {
        title: 'The Sound Money Project',
        link: 'https://www.soundmoneyproject.org/',
        description: '健全货币倡导和研究'
      },
      {
        title: 'Federal Reserve History',
        link: 'https://www.federalreservehistory.org/',
        description: '美联储和现代货币体系历史'
      }
    ]
  }

  const reflectionQuestions = [
    '如果比特币成为全球主要货币，经济周期会如何变化？',
    '数字稀缺性与物理稀缺性在价值创造上有何不同？',
    '货币的未来是统一还是多元化？',
    '算法治理能否完全替代人类的货币政策决策？'
  ]

  return (
    <TopicTemplate
      icon="💰"
      title="货币"
      subtitle="价值载体的进化"
      introduction="从贝壳到黄金，从纸币到比特币，货币的形态在不断演进。比特币代表了货币史上的重要转折点——首次实现了真正的数字稀缺性，挑战了传统的货币理论和实践。"
      sections={sections}
      keyInsights={keyInsights}
      resources={resources}
      reflectionQuestions={reflectionQuestions}
    />
  )
}

export default Money