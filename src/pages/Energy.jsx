import TopicTemplate from '../components/TopicTemplate'

function Energy() {
  const sections = [
    {
      title: '核心问题：价值如何锚定物理世界？',
      content: [
        {
          subtitle: '能量与信息的关系',
          points: [
            '兰道尔原理：信息处理需要能量',
            '麦克斯韦妖：信息可以转化为功',
            '熵与信息：负熵即信息，信息即有序',
            '比特币实现：将能量转化为不可伪造的信息'
          ]
        },
        {
          subtitle: '工作量证明的物理意义',
          points: [
            '能量消耗：真实的物理功',
            '时间箭头：熵增过程不可逆',
            '热力学成本：创造有序需要能量',
            '数字稀缺：能量创造的真实稀缺性'
          ]
        }
      ]
    },
    {
      title: '能源经济学：从焦耳到比特币',
      content: [
        {
          subtitle: '能源作为通用货币',
          points: [
            '能量守恒：不能创造只能转换',
            '焦耳本位：能源作为价值尺度',
            '能源套利：寻找最便宜的能源',
            '全球市场：能源价格趋向均衡'
          ]
        },
        {
          subtitle: '挖矿的能源动力学',
          points: [
            '边际成本：电价决定挖矿盈亏',
            '地理套利：追逐廉价能源迁移',
            '需求响应：消纳过剩产能',
            '可再生能源：间歇性能源的完美搭档'
          ]
        }
      ]
    },
    {
      title: '文明等级：能源利用与社会发展',
      content: [
        {
          subtitle: '卡尔达肖夫文明分级',
          points: [
            'I型文明：掌控行星能源（10^16瓦）',
            'II型文明：掌控恒星能源（10^26瓦）',
            'III型文明：掌控星系能源（10^36瓦）',
            '比特币位置：人类向I型文明过渡的工具'
          ]
        },
        {
          subtitle: '能源密度与文明进步',
          points: [
            '木材时代：低密度，限制发展',
            '煤炭时代：工业革命的能源基础',
            '石油时代：高密度，全球化动力',
            '核能/可再生：下一代文明的能源'
          ]
        }
      ]
    },
    {
      title: '环境影响：能源消耗的两面性',
      content: [
        {
          subtitle: '能源消耗批评',
          points: [
            '碳排放：当前主要使用化石能源',
            '能源竞争：与其他用途争夺能源',
            '电子废物：硬件更新换代',
            '热污染：大量废热排放'
          ]
        },
        {
          subtitle: '积极作用',
          points: [
            '可再生能源驱动：促进绿色能源投资',
            '搁浅能源利用：原本浪费的能源',
            '电网稳定：作为可调节负载',
            '能源民主化：个人可参与能源市场'
          ]
        }
      ]
    },
    {
      title: '物理安全：热力学的保护',
      content: [
        {
          subtitle: '攻击的物理成本',
          points: [
            '51%攻击：需要巨大能源投入',
            '持续成本：攻击需要持续消耗',
            '物理限制：地球能源总量有限',
            '经济理性：攻击成本超过收益'
          ]
        },
        {
          subtitle: '防御的物理基础',
          points: [
            '累积工作量：历史能量的积累',
            '实时验证：少量能量即可验证',
            '去中心化：能源分布全球',
            '抗量子：基于物理而非纯数学'
          ]
        }
      ]
    },
    {
      title: '未来展望：能源与数字文明',
      content: [
        {
          subtitle: '能源互联网',
          points: [
            '点对点能源交易：去中心化电网',
            '智能电网：供需自动平衡',
            '能源代币化：能量的数字化表示',
            '跨境能源贸易：比特币作为结算层'
          ]
        },
        {
          subtitle: '太空时代的货币',
          points: [
            '星际贸易：需要非主权货币',
            '能源本位：太空中的通用价值',
            '时间延迟：去中心化的必要性',
            '文明备份：区块链作为知识保存'
          ]
        }
      ]
    }
  ]

  const keyInsights = [
    '能量是连接数字世界和物理世界的桥梁',
    '工作量证明将能源转化为不可伪造的数字稀缺性',
    '比特币可能推动可再生能源的发展和利用',
    '能源消耗不是bug而是feature，是安全性的来源'
  ]

  const resources = {
    books: [
      {
        title: 'The Bitcoin Mining Council Survey',
        author: 'Michael Saylor',
        description: '比特币挖矿能源使用情况的权威报告'
      },
      {
        title: 'The Energy Revolution',
        author: 'Menyah Heymann',
        description: '能源转型与社会变革的历史'
      },
      {
        title: 'Energy and Human Ambitions on a Finite Planet',
        author: 'Tom Murphy',
        description: '从物理学角度看能源与文明的关系'
      },
      {
        title: 'Sustainable Energy - Without the Hot Air',
        author: 'David MacKay',
        description: '可持续能源的现实分析'
      },
      {
        title: 'The Kardashev Scale',
        author: 'Nikolai Kardashev',
        description: '文明发展等级的能源标准'
      }
    ],
    papers: [
      {
        title: 'On Bitcoin\'s Energy Consumption: A Quantitative Approach',
        author: 'Alex de Vries',
        link: 'https://www.cell.com/joule/fulltext/S2542-4351(18)30177-6'
      },
      {
        title: 'The Carbon Footprint of Bitcoin',
        author: 'Christian Stoll et al.',
        link: 'https://www.nature.com/articles/s41558-019-0458-1'
      },
      {
        title: 'Bitcoin Mining and Renewable Energy',
        author: 'Susanne Köhler & Massimo Pizzol',
        link: 'https://www.nature.com/articles/s41893-021-00821-8'
      }
    ],
    websites: [
      {
        title: 'Bitcoin Mining Council',
        link: 'https://bitcoinminingcouncil.com/',
        description: '比特币挖矿行业的能源数据'
      },
      {
        title: 'Cambridge Bitcoin Electricity Consumption Index',
        link: 'https://ccaf.io/cbeci/',
        description: '剑桥大学的比特币能耗指数'
      },
      {
        title: 'Bitcoin Energy Consumption Index',
        link: 'https://digiconomist.net/bitcoin-energy-consumption/',
        description: 'Digiconomist的比特币能耗分析'
      },
      {
        title: 'Sustainable Bitcoin Protocol',
        link: 'https://www.sustainablebitcoin.org/',
        description: '可持续比特币倡议'
      }
    ]
  }

  const reflectionQuestions = [
    '如果可控核聚变实现，能源近乎免费，比特币会如何演化？',
    '在戴森球文明中，恒星能源如何定价和分配？',
    '量子计算会打破热力学保护吗？还是创造新的平衡？',
    '比特币是否可能成为衡量文明发展水平的标准？'
  ]

  return (
    <TopicTemplate
      icon="⚡"
      title="能源"
      subtitle="物理与文明"
      introduction="比特币首次实现了能量到信息的直接转换，创造了热力学保护的数字稀缺性。这不仅是技术创新，更揭示了价值的物理本质。在宇宙尺度上，能量是唯一的通用货币，比特币可能是人类文明迈向星际时代的金融基础设施。"
      sections={sections}
      keyInsights={keyInsights}
      resources={resources}
      reflectionQuestions={reflectionQuestions}
    />
  )
}

export default Energy