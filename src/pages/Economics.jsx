import TopicTemplate from '../components/TopicTemplate'

function Economics() {
  const sections = [
    {
      title: '货币理论：价值的本质',
      content: [
        {
          subtitle: '货币的功能',
          points: [
            '交换媒介：解决需求双重巧合问题',
            '价值储存：跨时间保存购买力',
            '记账单位：统一的价值衡量标准',
            '延期支付：债务和合约的计价基础'
          ]
        },
        {
          subtitle: '货币的演化',
          points: [
            '商品货币：贝壳、牛、盐等实物',
            '金属货币：黄金、白银的自然稀缺性',
            '法定货币：政府信用背书的纸币',
            '数字货币：算法保证的数字稀缺性'
          ]
        }
      ]
    },
    {
      title: '稀缺性经济学：供需关系',
      content: [
        {
          subtitle: '比特币的供给机制',
          points: [
            '固定总量：2100万枚上限',
            '减半周期：每4年新增供应减半',
            '存量流量比：逐步接近黄金',
            '不可增发：无法通过政策改变供应'
          ]
        },
        {
          subtitle: '需求驱动因素',
          points: [
            '价值储存需求：对冲通胀和货币贬值',
            '交易需求：跨境支付和无银行服务',
            '投机需求：价格波动带来的机会',
            '制度需求：企业和国家储备'
          ]
        }
      ]
    },
    {
      title: '通货膨胀vs通货紧缩',
      content: [
        {
          subtitle: '法币的通胀模型',
          points: [
            '货币供应增长：央行量化宽松',
            '通胀目标：2%的"健康"通胀率',
            '财富再分配：从储蓄者到借贷者',
            '凯恩斯主义：刺激消费和投资'
          ]
        },
        {
          subtitle: '比特币的通缩模型',
          points: [
            '供应递减：挖矿奖励持续减半',
            '购买力增长：长期升值预期',
            '储蓄激励：延迟消费的奖励',
            '奥地利学派：自然的市场调节'
          ]
        }
      ]
    },
    {
      title: '价值存储：数字黄金',
      content: [
        {
          subtitle: '与黄金的比较',
          points: [
            '稀缺性：比特币更可预测',
            '可分割性：比特币可分到小数点后8位',
            '可携带性：比特币跨境转移更便利',
            '可验证性：比特币真伪验证更简单'
          ]
        },
        {
          subtitle: '价值存储的特征',
          points: [
            '耐久性：不会腐烂或损坏',
            '稀缺性：供应有限且可预测',
            '可接受性：广泛认可和接受',
            '流动性：易于买卖和转换'
          ]
        }
      ]
    },
    {
      title: '市场微观结构：价格发现',
      content: [
        {
          subtitle: '交易所生态',
          points: [
            '中心化交易所：高流动性但需要信任',
            '去中心化交易所：无需信任但流动性低',
            '场外交易(OTC)：大额交易避免滑点',
            '期货和衍生品：杠杆和对冲工具'
          ]
        },
        {
          subtitle: '价格形成机制',
          points: [
            '供需均衡：买卖双方的博弈',
            '套利机制：不同市场间的价格收敛',
            '市场深度：订单簿的厚度',
            '波动性：新兴市场的特征'
          ]
        }
      ]
    },
    {
      title: '宏观经济影响',
      content: [
        {
          subtitle: '货币政策的挑战',
          points: [
            '央行控制力减弱：无法调控比特币供应',
            '资本流动自由：突破资本管制',
            '货币竞争：法币垄断被打破',
            '政策传导受阻：传统工具失效'
          ]
        },
        {
          subtitle: '金融系统变革',
          points: [
            '去中介化：直接的点对点交易',
            '金融普惠：无银行账户人群的机会',
            '系统性风险：新的金融稳定挑战',
            '监管困境：跨境性和匿名性'
          ]
        }
      ]
    }
  ]

  const keyInsights = [
    '稀缺性是价值的重要来源，但不是唯一来源',
    '货币政策的中心化控制既是优势也是风险',
    '通缩经济可能改变消费和投资行为',
    '数字稀缺性创造了新的经济学范式'
  ]

  const resources = {
    books: [
      {
        title: 'The Bitcoin Standard',
        author: 'Saifedean Ammous',
        description: '从奥地利经济学派角度分析比特币'
      },
      {
        title: 'The Price of Tomorrow',
        author: 'Jeff Booth',
        description: '通缩经济和技术进步的关系'
      },
      {
        title: 'Digital Gold',
        author: 'Nathaniel Popper',
        description: '比特币早期历史和经济影响'
      },
      {
        title: 'The Fiat Standard',
        author: 'Saifedean Ammous',
        description: '法币体系的问题和比特币的解决方案'
      },
      {
        title: 'Layered Money',
        author: 'Nik Bhatia',
        description: '货币层级理论和比特币的位置'
      }
    ],
    papers: [
      {
        title: 'The Economic Limits of Bitcoin and the Blockchain',
        author: 'Eric Budish',
        link: 'https://www.nber.org/papers/w24717'
      },
      {
        title: 'Bitcoin: An Innovative Alternative Digital Currency',
        author: 'Reuben Grinberg',
        link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1817857'
      },
      {
        title: 'Bitcoin and Beyond: A Technical Survey',
        author: 'Florian Tschorsch',
        link: 'https://eprint.iacr.org/2015/464.pdf'
      }
    ],
    websites: [
      {
        title: 'Glassnode Academy',
        link: 'https://academy.glassnode.com/',
        description: '链上数据分析和经济指标'
      },
      {
        title: 'Bitcoin Economics',
        link: 'https://www.bitcoineconomics.io/',
        description: '比特币经济学研究和分析'
      },
      {
        title: 'The Bullish Case for Bitcoin',
        link: 'https://medium.com/@vijayboyapati/the-bullish-case-for-bitcoin-6ecc8bdecc1',
        description: '比特币作为价值存储的论述'
      }
    ]
  }

  const reflectionQuestions = [
    '如果比特币成为全球储备货币，世界经济会如何变化？',
    '通缩货币体系下，企业如何激励投资和创新？',
    '央行数字货币(CBDC)与比特币的竞争会如何演化？',
    '比特币的价格最终会稳定吗？在什么水平？'
  ]

  return (
    <TopicTemplate
      icon="📊"
      title="经济学"
      subtitle="价值的本质"
      introduction="比特币挑战了传统的货币理论和经济学假设。它展示了稀缺性如何在数字世界中被创造，以及去中心化货币如何运作。这不仅是技术创新，更是经济学实验。"
      sections={sections}
      keyInsights={keyInsights}
      resources={resources}
      reflectionQuestions={reflectionQuestions}
    />
  )
}

export default Economics