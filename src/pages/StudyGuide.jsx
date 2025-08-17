import './StudyGuide.css'

function StudyGuide() {
  const learningPrinciples = [
    {
      title: '理解优先于记忆',
      icon: '💡',
      description: '重点理解原理和逻辑，而非死记硬背术语',
      practices: [
        '通过类比理解抽象概念',
        '画图解释复杂系统',
        '用自己的话重新表述'
      ]
    },
    {
      title: '实践验证理论',
      icon: '🔬',
      description: '通过亲身体验加深对理论的理解',
      practices: [
        '使用测试网实验',
        '运行自己的节点',
        '分析真实交易'
      ]
    },
    {
      title: '多维度探索',
      icon: '🔍',
      description: '从不同角度理解同一概念',
      practices: [
        '技术实现层面',
        '经济激励层面',
        '社会影响层面'
      ]
    },
    {
      title: '批判性思考',
      icon: '🤔',
      description: '保持独立思考，质疑和验证',
      practices: [
        '对比不同观点',
        '寻找反对意见',
        '形成自己的判断'
      ]
    }
  ]

  const learningPaths = [
    {
      type: '技术路线',
      icon: '💻',
      suitable: '程序员、工程师',
      focus: '深入理解技术实现',
      steps: [
        { phase: '基础', content: '学习密码学基础、哈希函数、数字签名' },
        { phase: '核心', content: '理解区块链结构、共识机制、P2P网络' },
        { phase: '进阶', content: '研究源代码、BIP提案、二层协议' },
        { phase: '实践', content: '搭建节点、开发应用、参与贡献' }
      ],
      resources: ['Mastering Bitcoin', 'Programming Bitcoin', 'Bitcoin Core源码']
    },
    {
      type: '经济路线',
      icon: '📊',
      suitable: '经济学者、投资者',
      focus: '理解经济模型和价值',
      steps: [
        { phase: '基础', content: '货币理论、奥地利经济学派' },
        { phase: '核心', content: '稀缺性、通缩模型、价值存储' },
        { phase: '进阶', content: '宏观经济影响、货币政策对比' },
        { phase: '实践', content: '市场分析、风险管理、投资策略' }
      ],
      resources: ['The Bitcoin Standard', '货币的非国家化', 'Stock-to-Flow模型']
    },
    {
      type: '社会路线',
      icon: '🌍',
      suitable: '社会学者、政策制定者',
      focus: '理解社会影响和变革',
      steps: [
        { phase: '基础', content: '去中心化理念、个人主权' },
        { phase: '核心', content: '信任机制、权力结构、治理模式' },
        { phase: '进阶', content: '法律框架、监管政策、国际影响' },
        { phase: '实践', content: '案例研究、政策分析、未来展望' }
      ],
      resources: ['The Sovereign Individual', 'Digital Gold', '各国监管政策']
    }
  ]

  const studyMethods = [
    {
      name: '深度研究法',
      icon: '📚',
      description: '选择核心主题深入探索',
      process: [
        '选择一个核心概念（如"工作量证明"）',
        '收集权威资料和不同观点',
        '理解技术原理和设计哲学',
        '分析优势、局限和替代方案',
        '形成全面深入的认识'
      ],
      example: '深入研究比特币的共识机制，理解为什么选择PoW而非其他方案'
    },
    {
      name: '对比分析法',
      icon: '⚖️',
      description: '通过对比加深理解',
      process: [
        '选择对比对象（如比特币vs传统银行）',
        '列出各自特点和机制',
        '分析本质差异',
        '理解各自的适用场景',
        '得出客观结论'
      ],
      example: '对比比特币与央行数字货币（CBDC）的本质区别'
    },
    {
      name: '问题驱动法',
      icon: '❓',
      description: '带着问题去学习',
      process: [
        '提出具体问题',
        '寻找相关资料',
        '理解背后原理',
        '验证答案正确性',
        '延伸相关问题'
      ],
      example: '"比特币如何防止双花？"引导学习UTXO模型和确认机制'
    }
  ]

  const practicalExercises = [
    {
      level: '初级',
      icon: '🌱',
      exercises: [
        {
          title: '创建钱包',
          description: '下载钱包软件，生成地址，理解公私钥',
          tools: ['Electrum', 'Blue Wallet'],
          learning: '理解非对称加密和地址生成'
        },
        {
          title: '测试网交易',
          description: '在测试网获取币并发送交易',
          tools: ['Bitcoin Testnet', 'Faucet'],
          learning: '理解交易流程和手续费机制'
        },
        {
          title: '区块浏览',
          description: '使用区块浏览器分析交易和区块',
          tools: ['Mempool.space', 'Blockstream.info'],
          learning: '理解区块结构和交易确认'
        }
      ]
    },
    {
      level: '中级',
      icon: '🌿',
      exercises: [
        {
          title: '运行节点',
          description: '搭建并运行完整节点',
          tools: ['Bitcoin Core', 'Umbrel'],
          learning: '理解P2P网络和数据验证'
        },
        {
          title: '闪电网络',
          description: '开通闪电通道，进行即时支付',
          tools: ['Lightning Network', 'Phoenix'],
          learning: '理解二层扩容方案'
        },
        {
          title: '多签钱包',
          description: '创建和使用多签名钱包',
          tools: ['Sparrow Wallet', 'Specter'],
          learning: '理解多签机制和安全策略'
        }
      ]
    },
    {
      level: '高级',
      icon: '🌳',
      exercises: [
        {
          title: '脚本编程',
          description: '编写和测试比特币脚本',
          tools: ['Bitcoin Script', 'btcdeb'],
          learning: '深入理解交易验证逻辑'
        },
        {
          title: '协议开发',
          description: '研究BIP提案，参与改进',
          tools: ['Bitcoin Core', 'GitHub'],
          learning: '理解协议演进和治理'
        },
        {
          title: '应用开发',
          description: '开发基于比特币的应用',
          tools: ['BitcoinJS', 'BTCPay Server'],
          learning: '实际应用比特币技术'
        }
      ]
    }
  ]

  const communityEngagement = [
    {
      type: '学习社区',
      icon: '👥',
      platforms: [
        { name: 'Bitcoin Talk', description: '最早的比特币论坛', link: 'https://bitcointalk.org' },
        { name: 'Reddit r/Bitcoin', description: '活跃的讨论社区', link: 'https://reddit.com/r/bitcoin' },
        { name: 'Bitcoin Stack Exchange', description: '技术问答平台', link: 'https://bitcoin.stackexchange.com' }
      ]
    },
    {
      type: '开发社区',
      icon: '⚙️',
      platforms: [
        { name: 'Bitcoin Core GitHub', description: '核心开发仓库', link: 'https://github.com/bitcoin/bitcoin' },
        { name: 'Bitcoin Optech', description: '技术周报', link: 'https://bitcoinops.org' },
        { name: 'Bitcoin Dev Mailing List', description: '开发者邮件列表', link: 'https://lists.linuxfoundation.org/mailman/listinfo/bitcoin-dev' }
      ]
    },
    {
      type: '教育资源',
      icon: '🎓',
      platforms: [
        { name: 'Bitcoin.org', description: '官方教育资源', link: 'https://bitcoin.org' },
        { name: 'Lopp.net', description: 'Jameson Lopp的资源汇总', link: 'https://lopp.net/bitcoin.html' },
        { name: '21 Lessons', description: '比特币哲学思考', link: 'https://21lessons.com' }
      ]
    }
  ]

  return (
    <div className="study-guide">
      <section className="guide-hero">
        <div className="guide-hero-content">
          <h1 className="guide-title">自学指南</h1>
          <p className="guide-subtitle">
            系统化的学习方法，助你深入理解比特币
          </p>
        </div>
      </section>

      <section className="learning-principles">
        <div className="principles-container">
          <h2 className="section-title">学习原则</h2>
          <div className="principles-grid">
            {learningPrinciples.map((principle, index) => (
              <div key={index} className="principle-card">
                <div className="principle-header">
                  <span className="principle-icon">{principle.icon}</span>
                  <h3 className="principle-title">{principle.title}</h3>
                </div>
                <p className="principle-description">{principle.description}</p>
                <ul className="principle-practices">
                  {principle.practices.map((practice, i) => (
                    <li key={i}>{practice}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="learning-paths">
        <div className="paths-container">
          <h2 className="section-title">学习路径选择</h2>
          <div className="paths-grid">
            {learningPaths.map((path, index) => (
              <div key={index} className="path-card">
                <div className="path-header">
                  <span className="path-icon">{path.icon}</span>
                  <h3 className="path-type">{path.type}</h3>
                  <span className="path-suitable">适合：{path.suitable}</span>
                </div>
                <p className="path-focus">{path.focus}</p>
                
                <div className="path-steps">
                  <h4>学习步骤</h4>
                  {path.steps.map((step, i) => (
                    <div key={i} className="step-item">
                      <span className="step-phase">{step.phase}</span>
                      <span className="step-content">{step.content}</span>
                    </div>
                  ))}
                </div>
                
                <div className="path-resources">
                  <h4>推荐资源</h4>
                  <ul>
                    {path.resources.map((resource, i) => (
                      <li key={i}>{resource}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="study-methods">
        <div className="methods-container">
          <h2 className="section-title">学习方法</h2>
          <div className="methods-grid">
            {studyMethods.map((method, index) => (
              <div key={index} className="method-card">
                <div className="method-header">
                  <span className="method-icon">{method.icon}</span>
                  <h3 className="method-name">{method.name}</h3>
                </div>
                <p className="method-description">{method.description}</p>
                
                <div className="method-process">
                  <h4>实施步骤</h4>
                  <ol>
                    {method.process.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
                
                <div className="method-example">
                  <strong>案例：</strong>
                  <p>{method.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="practical-exercises">
        <div className="exercises-container">
          <h2 className="section-title">实践练习</h2>
          {practicalExercises.map((level, index) => (
            <div key={index} className="exercise-level">
              <div className="level-header">
                <span className="level-icon">{level.icon}</span>
                <h3 className="level-name">{level.level}</h3>
              </div>
              <div className="exercises-grid">
                {level.exercises.map((exercise, i) => (
                  <div key={i} className="exercise-card">
                    <h4 className="exercise-title">{exercise.title}</h4>
                    <p className="exercise-description">{exercise.description}</p>
                    <div className="exercise-tools">
                      <strong>工具：</strong>
                      <span>{exercise.tools.join(', ')}</span>
                    </div>
                    <div className="exercise-learning">
                      <strong>学习要点：</strong>
                      <span>{exercise.learning}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="community-engagement">
        <div className="engagement-container">
          <h2 className="section-title">社区参与</h2>
          <div className="community-grid">
            {communityEngagement.map((community, index) => (
              <div key={index} className="community-card">
                <div className="community-header">
                  <span className="community-icon">{community.icon}</span>
                  <h3 className="community-type">{community.type}</h3>
                </div>
                <div className="platforms-list">
                  {community.platforms.map((platform, i) => (
                    <div key={i} className="platform-item">
                      <h4>{platform.name}</h4>
                      <p>{platform.description}</p>
                      <a href={platform.link} target="_blank" rel="noopener noreferrer">
                        访问 →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="guide-summary">
        <div className="summary-container">
          <h2 className="summary-title">开始你的学习之旅</h2>
          <div className="summary-content">
            <p>比特币学习是一个持续的过程，需要耐心和坚持。选择适合自己的路径，运用正确的方法，通过实践加深理解，参与社区交流，你将逐步建立对比特币的深刻认识。</p>
            <div className="summary-actions">
              <a href="/learning-path" className="btn-primary">
                查看学习路径
                <span className="btn-arrow">→</span>
              </a>
              <a href="/resources" className="btn-secondary">
                浏览学习资源
                <span className="btn-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StudyGuide