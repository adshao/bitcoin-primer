import TopicTemplate from '../components/TopicTemplate'

function ComputerScience() {
  const sections = [
    {
      title: '密码学基础：从加密到签名',
      content: [
        {
          subtitle: '哈希函数',
          points: [
            'SHA-256：单向函数，任何输入产生固定256位输出',
            '抗碰撞性：找到两个相同哈希值的输入在计算上不可行',
            'Merkle Tree：用哈希树高效验证大量数据',
            '工作量证明：通过哈希难题创造计算成本'
          ]
        },
        {
          subtitle: '非对称加密',
          points: [
            '公钥/私钥对：公钥公开，私钥保密',
            '椭圆曲线密码学(ECDSA)：相比RSA更高效',
            '数字签名：证明消息来自私钥持有者',
            '密钥派生：从种子生成确定性密钥序列'
          ]
        }
      ]
    },
    {
      title: '分布式系统：去中心化的挑战',
      content: [
        {
          subtitle: '拜占庭将军问题',
          points: [
            '分布式共识：在不可靠网络中达成一致',
            'FLP不可能定理：异步网络中无法保证共识',
            'CAP定理：一致性、可用性、分区容错性不可兼得',
            '比特币的选择：最终一致性，牺牲部分可用性'
          ]
        },
        {
          subtitle: 'P2P网络',
          points: [
            '节点发现：通过DNS种子和节点交换建立连接',
            '消息传播：洪泛协议确保信息扩散',
            '网络分区：处理网络分裂和愈合',
            'Eclipse攻击：隔离节点的网络攻击'
          ]
        }
      ]
    },
    {
      title: '数据结构：区块链的构建',
      content: [
        {
          subtitle: '区块结构',
          points: [
            '区块头：包含版本、前块哈希、Merkle根等元数据',
            '交易列表：使用Merkle Tree组织交易',
            '区块大小：平衡吞吐量和去中心化',
            '隔离见证：将签名数据分离，提高容量'
          ]
        },
        {
          subtitle: 'UTXO模型',
          points: [
            '未花费输出：每笔交易消费旧UTXO，创建新UTXO',
            '无状态验证：只需检查UTXO是否存在',
            '并行处理：UTXO相互独立，可并行验证',
            '隐私特性：使用新地址增加匿名性'
          ]
        }
      ]
    },
    {
      title: '共识机制：中本聪共识',
      content: [
        {
          subtitle: '工作量证明(PoW)',
          points: [
            '挖矿：寻找满足难度目标的区块哈希',
            '难度调整：每2016个区块调整一次，维持10分钟出块',
            '最长链原则：累积工作量最多的链为主链',
            '51%攻击：控制多数算力可能重组区块链'
          ]
        },
        {
          subtitle: '激励机制',
          points: [
            '区块奖励：新币发行+交易手续费',
            '减半机制：每210,000个区块奖励减半',
            '自私挖矿：隐藏区块以获得不公平优势',
            '手续费市场：有限区块空间的竞价机制'
          ]
        }
      ]
    },
    {
      title: '网络安全：攻击与防御',
      content: [
        {
          subtitle: '常见攻击',
          points: [
            '双花攻击：同一笔钱花费两次',
            'Sybil攻击：创建大量虚假身份',
            '时间戳攻击：操纵区块时间戳',
            '分区攻击：分割网络造成分叉'
          ]
        },
        {
          subtitle: '防御机制',
          points: [
            '6个确认：等待足够深度防止重组',
            '检查点：硬编码历史区块防止深度重组',
            '警报系统：通知网络异常情况',
            'BIP规范：标准化改进流程'
          ]
        }
      ]
    },
    {
      title: '扩展性解决方案',
      content: [
        {
          subtitle: '链上扩容',
          points: [
            '区块大小增加：简单但中心化风险',
            'SegWit：分离见证数据，有效增加容量',
            'Schnorr签名：签名聚合减少数据量',
            'MAST：默克尔化脚本，隐藏未执行路径'
          ]
        },
        {
          subtitle: '链下扩容',
          points: [
            '闪电网络：支付通道实现即时微支付',
            '侧链：独立区块链与主链双向锚定',
            'Rollups：链下计算，链上验证',
            '状态通道：链下交互，链上结算'
          ]
        }
      ]
    }
  ]

  const keyInsights = [
    '密码学提供了无需信任的数学保证',
    '分布式系统通过冗余实现容错',
    '经济激励与技术机制相结合创造安全性',
    '去中心化与效率之间需要权衡'
  ]

  const resources = {
    books: [
      {
        title: 'Mastering Bitcoin',
        author: 'Andreas M. Antonopoulos',
        description: '比特币技术圣经，深入讲解技术细节'
      },
      {
        title: 'Bitcoin and Cryptocurrency Technologies',
        author: 'Narayanan et al.',
        description: '普林斯顿大学教材，系统性介绍加密货币技术'
      },
      {
        title: 'Programming Bitcoin',
        author: 'Jimmy Song',
        description: '通过编程学习比特币，Python实现'
      },
      {
        title: 'The Bitcoin Standard',
        author: 'Saifedean Ammous',
        description: '从经济学角度理解比特币的技术选择'
      }
    ],
    papers: [
      {
        title: 'Bitcoin: A Peer-to-Peer Electronic Cash System',
        author: 'Satoshi Nakamoto',
        link: 'https://bitcoin.org/bitcoin.pdf'
      },
      {
        title: 'Hashcash - A Denial of Service Counter-Measure',
        author: 'Adam Back',
        link: 'http://www.hashcash.org/papers/hashcash.pdf'
      },
      {
        title: 'The Byzantine Generals Problem',
        author: 'Lamport, Shostak, Pease',
        link: 'https://lamport.azurewebsites.net/pubs/byz.pdf'
      }
    ],
    websites: [
      {
        title: 'Bitcoin Developer Documentation',
        link: 'https://developer.bitcoin.org/',
        description: '官方开发者文档'
      },
      {
        title: 'Bitcoin Wiki',
        link: 'https://en.bitcoin.it/wiki/',
        description: '社区维护的技术知识库'
      },
      {
        title: 'Bitcoin Optech',
        link: 'https://bitcoinops.org/',
        description: '技术改进和最佳实践'
      },
      {
        title: 'Learn Me a Bitcoin',
        link: 'https://learnmeabitcoin.com/',
        description: '可视化学习比特币技术'
      }
    ]
  }

  const reflectionQuestions = [
    '如果量子计算机破解了椭圆曲线密码学，比特币如何应对？',
    '完全的去中心化是否值得牺牲效率？',
    '工作量证明的能源消耗是必要的安全成本还是浪费？',
    '比特币的技术架构中，哪些是偶然的，哪些是必然的？'
  ]

  return (
    <TopicTemplate
      icon="💻"
      title="计算机科学"
      subtitle="信任的技术化"
      introduction="比特币是密码学、分布式系统、博弈论的完美结合。它不仅解决了双花问题，更重要的是展示了如何在无需信任的环境中建立可信系统。每一行代码都体现着去中心化的哲学。"
      sections={sections}
      keyInsights={keyInsights}
      resources={resources}
      reflectionQuestions={reflectionQuestions}
    />
  )
}

export default ComputerScience