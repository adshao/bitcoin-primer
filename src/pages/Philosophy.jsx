import TopicTemplate from '../components/TopicTemplate'

function Philosophy() {
  const sections = [
    {
      title: '核心问题：什么是真实？什么是价值？什么是自由？',
      content: [
        {
          subtitle: '本体论：存在的本质',
          points: [
            '物理实在：原子、分子构成的物质世界',
            '数字实在：比特、信息构成的数字世界',
            '比特币的存在：既非物质也非纯信息，而是共识',
            '真实性问题：数字稀缺性是否等同于物理稀缺性'
          ]
        },
        {
          subtitle: '认识论：真理的本质',
          points: [
            '客观真理：不依赖观察者的事实',
            '主观共识：集体认同创造的"真相"',
            '数学真理：比特币依赖的密码学基础',
            '社会建构：价值是被创造还是被发现？'
          ]
        }
      ]
    },
    {
      title: '价值哲学：意义从何而来',
      content: [
        {
          subtitle: '内在价值vs工具价值',
          points: [
            '黄金：美观稀有，但价值主要来自共识',
            '法币：无内在价值，纯粹的社会契约',
            '比特币：能源转化为数字稀缺性',
            '价值悖论：无用之用，方为大用'
          ]
        },
        {
          subtitle: '劳动价值vs主观价值',
          points: [
            '马克思：价值来自社会必要劳动时间',
            '奥地利学派：价值来自主观效用',
            '工作量证明：将劳动（计算）转化为价值',
            '信念的力量：相信即存在，共识即价值'
          ]
        }
      ]
    },
    {
      title: '自由意志：个人主权的哲学基础',
      content: [
        {
          subtitle: '决定论vs自由意志',
          points: [
            '物理决定论：一切都是因果链条',
            '自由意志：人有真正的选择能力',
            '密码学主权：私钥给予绝对控制权',
            '代码即规则：算法治理的哲学基础'
          ]
        },
        {
          subtitle: '个人vs集体',
          points: [
            '个人主义：个体权利优先',
            '集体主义：集体利益至上',
            '比特币的平衡：个人控制，集体共识',
            '去中心化悖论：所有人的系统，无人的系统'
          ]
        }
      ]
    },
    {
      title: '时间哲学：现在与未来',
      content: [
        {
          subtitle: '时间偏好',
          points: [
            '即时满足：活在当下的哲学',
            '延迟满足：为未来储蓄的智慧',
            '通胀心理：花钱要趁早',
            '通缩心理：储蓄即增值'
          ]
        },
        {
          subtitle: '时间的不可逆性',
          points: [
            '熵增定律：时间箭头的物理基础',
            '区块链：时间的链式记录',
            '不可篡改：过去的永恒性',
            '概率终局：未来的不确定性'
          ]
        }
      ]
    },
    {
      title: '技术哲学：工具理性vs价值理性',
      content: [
        {
          subtitle: '技术中立论',
          points: [
            '工具无善恶：技术本身是中性的',
            '使用决定价值：人的选择决定影响',
            '密码学的双刃：隐私保护vs犯罪工具',
            '去中心化的代价：效率vs自由的权衡'
          ]
        },
        {
          subtitle: '技术决定论',
          points: [
            '技术塑造社会：印刷术、互联网、区块链',
            '不可避免性：技术发展有其内在逻辑',
            '比特币的必然：数字时代的必然产物',
            '未来已来：只是分布不均'
          ]
        }
      ]
    },
    {
      title: '存在主义视角：意义的创造',
      content: [
        {
          subtitle: '存在先于本质',
          points: [
            '比特币无预设目的：用途由使用者定义',
            '价值的赋予：人类赋予其意义',
            '自我创造：每个人定义自己的财富观',
            '责任与自由：掌握私钥即承担责任'
          ]
        },
        {
          subtitle: '荒谬与反抗',
          points: [
            '法币的荒谬：无限印刷的纸',
            '比特币的反抗：对现有体系说不',
            '西西弗斯：永恒的挖矿',
            '意义的创造：在荒谬中创造价值'
          ]
        }
      ]
    }
  ]

  const keyInsights = [
    '价值不是被发现的，而是被创造的——通过共识',
    '真实性不再依赖物理存在，数学真理成为新的基础',
    '自由的代价是责任，绝对的控制权意味着绝对的责任',
    '技术不仅是工具，更是重塑人类存在方式的力量'
  ]

  const resources = {
    books: [
      {
        title: 'Being and Time',
        author: 'Martin Heidegger',
        description: '存在主义哲学的经典，探讨存在的本质'
      },
      {
        title: 'The Sovereign Individual',
        author: 'James Dale Davidson & William Rees-Mogg',
        description: '预言数字时代个人主权的兴起'
      },
      {
        title: 'The Construction of Social Reality',
        author: 'John Searle',
        description: '社会现实如何通过集体意识构建'
      },
      {
        title: 'Sapiens: A Brief History of Humankind',
        author: 'Yuval Noah Harari',
        description: '人类如何通过共同想象构建文明'
      },
      {
        title: 'The Technology Trap',
        author: 'Carl Benedikt Frey',
        description: '技术进步对人类社会的深远影响'
      }
    ],
    papers: [
      {
        title: 'The Philosophy of Money',
        author: 'Georg Simmel',
        link: 'https://archive.org/details/philosophyofmone00simm'
      },
      {
        title: 'Can Digital Physics Save the Republic?',
        author: 'Mark Miller',
        link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3273102'
      },
      {
        title: 'Bitcoin as a Social Movement',
        author: 'Sarah Jamie Lewis',
        link: 'https://www.benthamsgaze.org/2017/11/21/bitcoin-as-a-social-movement/'
      }
    ],
    websites: [
      {
        title: 'Internet Encyclopedia of Philosophy',
        link: 'https://iep.utm.edu/',
        description: '哲学概念的全面介绍'
      },
      {
        title: 'Stanford Encyclopedia of Philosophy',
        link: 'https://plato.stanford.edu/',
        description: '权威的哲学学术资源'
      },
      {
        title: 'The Unenumerated Blog - Nick Szabo',
        link: 'https://unenumerated.blogspot.com/',
        description: '密码学和社会制度的哲学思考'
      },
      {
        title: 'Ribbonfarm',
        link: 'https://www.ribbonfarm.com/',
        description: '技术哲学和复杂系统思考'
      }
    ]
  }

  const reflectionQuestions = [
    '如果意识可以上传，比特币的所有权如何定义？',
    '在虚拟世界完全真实的未来，物理稀缺还有意义吗？',
    '如果AI可以拥有比特币，它们是否拥有经济人格？',
    '永恒的区块链记录，是人类不朽的一种形式吗？'
  ]

  return (
    <TopicTemplate
      icon="🔮"
      title="哲学"
      subtitle="存在与意义"
      introduction="比特币不仅是技术和经济现象，更是哲学实验。它挑战了我们对真实、价值、自由的基本理解。在一个数字构建的世界里，什么是真实的？当价值可以被算法创造，意义何在？这些问题的答案，将定义人类文明的未来方向。"
      sections={sections}
      keyInsights={keyInsights}
      resources={resources}
      reflectionQuestions={reflectionQuestions}
    />
  )
}

export default Philosophy