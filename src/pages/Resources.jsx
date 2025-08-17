import './Resources.css'

function Resources() {
  const books = [
    {
      category: '入门必读',
      items: [
        {
          title: 'The Bitcoin Standard',
          author: 'Saifedean Ammous',
          year: '2018',
          description: '从经济学和货币史角度理解比特币',
          level: '入门',
          language: '有中文版'
        },
        {
          title: 'Bitcoin: A Peer-to-Peer Electronic Cash System',
          author: 'Satoshi Nakamoto',
          year: '2008',
          description: '比特币白皮书，一切的起点',
          level: '入门',
          language: '有中文版'
        },
        {
          title: 'The Little Bitcoin Book',
          author: 'Bitcoin Collective',
          year: '2019',
          description: '简明扼要的比特币入门书',
          level: '入门',
          language: '英文'
        }
      ]
    },
    {
      category: '技术深入',
      items: [
        {
          title: 'Mastering Bitcoin',
          author: 'Andreas M. Antonopoulos',
          year: '2017',
          description: '比特币技术圣经，程序员必读',
          level: '进阶',
          language: '有中文版'
        },
        {
          title: 'Programming Bitcoin',
          author: 'Jimmy Song',
          year: '2019',
          description: '通过编程学习比特币原理',
          level: '进阶',
          language: '英文'
        },
        {
          title: 'Bitcoin and Cryptocurrency Technologies',
          author: 'Narayanan et al.',
          year: '2016',
          description: '普林斯顿大学加密货币教材',
          level: '进阶',
          language: '英文'
        }
      ]
    },
    {
      category: '经济与社会',
      items: [
        {
          title: 'The Fiat Standard',
          author: 'Saifedean Ammous',
          year: '2021',
          description: '法币体系的分析与批判',
          level: '进阶',
          language: '英文'
        },
        {
          title: 'The Price of Tomorrow',
          author: 'Jeff Booth',
          year: '2020',
          description: '通缩时代的经济学思考',
          level: '中级',
          language: '有中文版'
        },
        {
          title: 'Digital Gold',
          author: 'Nathaniel Popper',
          year: '2015',
          description: '比特币的历史故事',
          level: '入门',
          language: '有中文版'
        }
      ]
    }
  ]

  const courses = [
    {
      category: '免费课程',
      items: [
        {
          title: 'Bitcoin and Cryptocurrency Technologies',
          provider: 'Coursera (Princeton)',
          duration: '11 周',
          link: 'https://www.coursera.org/learn/cryptocurrency',
          description: '普林斯顿大学的系统性课程'
        },
        {
          title: 'Introduction to Digital Currencies',
          provider: 'University of Nicosia',
          duration: '12 周',
          link: 'https://www.unic.ac.cy/blockchain/free-mooc/',
          description: '第一个大学级别的数字货币课程'
        },
        {
          title: 'Bitcoin for Everybody',
          provider: 'Saylor Academy',
          duration: '自定进度',
          link: 'https://learn.saylor.org/course/PRDV151',
          description: 'MicroStrategy创始人的比特币课程'
        }
      ]
    },
    {
      category: '视频资源',
      items: [
        {
          title: 'Andreas Antonopoulos YouTube',
          provider: 'YouTube',
          duration: '持续更新',
          link: 'https://www.youtube.com/user/aantonop',
          description: '最好的比特币教育视频'
        },
        {
          title: 'MIT 6.824 Distributed Systems',
          provider: 'MIT OpenCourseWare',
          duration: '一学期',
          link: 'https://pdos.csail.mit.edu/6.824/',
          description: 'MIT分布式系统课程'
        },
        {
          title: 'Bitcoin Fundamentals',
          provider: 'Khan Academy',
          duration: '2 小时',
          link: 'https://www.khanacademy.org/economics-finance-domain/finance-and-capital-markets',
          description: '可汗学院的基础教程'
        }
      ]
    }
  ]

  const tools = [
    {
      category: '钱包工具',
      items: [
        {
          name: 'Bitcoin Core',
          type: '全节点钱包',
          description: '官方客户端，最安全但需要下载全部区块链',
          link: 'https://bitcoin.org/en/bitcoin-core/'
        },
        {
          name: 'Electrum',
          type: '轻钱包',
          description: '功能强大的轻量级钱包',
          link: 'https://electrum.org/'
        },
        {
          name: 'Blue Wallet',
          type: '移动钱包',
          description: '用户友好的移动端钱包，支持闪电网络',
          link: 'https://bluewallet.io/'
        }
      ]
    },
    {
      category: '区块浏览器',
      items: [
        {
          name: 'Blockstream Explorer',
          type: '区块浏览器',
          description: '开源、注重隐私的区块浏览器',
          link: 'https://blockstream.info/'
        },
        {
          name: 'Mempool.space',
          type: '内存池可视化',
          description: '实时查看内存池和手续费',
          link: 'https://mempool.space/'
        },
        {
          name: 'Blockchain.com Explorer',
          type: '区块浏览器',
          description: '最老牌的区块浏览器',
          link: 'https://www.blockchain.com/explorer'
        }
      ]
    },
    {
      category: '开发工具',
      items: [
        {
          name: 'Bitcoin Testnet',
          type: '测试网络',
          description: '用于开发和测试的比特币测试网',
          link: 'https://testnet.blockchain.info/'
        },
        {
          name: 'BitcoinJS',
          type: 'JavaScript库',
          description: '用于比特币开发的JavaScript库',
          link: 'https://github.com/bitcoinjs/bitcoinjs-lib'
        },
        {
          name: 'BTCPay Server',
          type: '支付处理',
          description: '自托管的比特币支付处理器',
          link: 'https://btcpayserver.org/'
        }
      ]
    }
  ]

  const communities = [
    {
      name: 'Bitcoin Talk',
      type: '论坛',
      description: '最早的比特币论坛，中本聪曾在此活跃',
      link: 'https://bitcointalk.org/',
      language: '英文'
    },
    {
      name: 'r/Bitcoin',
      type: 'Reddit',
      description: 'Reddit上最大的比特币社区',
      link: 'https://www.reddit.com/r/Bitcoin/',
      language: '英文'
    },
    {
      name: 'Bitcoin Twitter',
      type: 'Twitter',
      description: '关注#Bitcoin标签和知名人士',
      link: 'https://twitter.com/search?q=%23Bitcoin',
      language: '多语言'
    },
    {
      name: 'Bitcoin Optech',
      type: '技术社区',
      description: '面向开发者的技术资源',
      link: 'https://bitcoinops.org/',
      language: '英文'
    },
    {
      name: '巴比特',
      type: '中文社区',
      description: '中文区块链资讯和社区',
      link: 'https://www.8btc.com/',
      language: '中文'
    }
  ]

  const podcasts = [
    {
      name: 'What Bitcoin Did',
      host: 'Peter McCormack',
      description: '深度访谈比特币领域的重要人物',
      frequency: '每周更新'
    },
    {
      name: 'The Pomp Podcast',
      host: 'Anthony Pompliano',
      description: '比特币和加密货币投资视角',
      frequency: '每日更新'
    },
    {
      name: 'Stephan Livera Podcast',
      host: 'Stephan Livera',
      description: '技术和经济学深度讨论',
      frequency: '每周更新'
    },
    {
      name: 'Tales from the Crypt',
      host: 'Marty Bent',
      description: '比特币文化和哲学探讨',
      frequency: '每周更新'
    }
  ]

  return (
    <div className="resources">
      <section className="resources-hero">
        <div className="resources-hero-content">
          <h1 className="resources-title">学习资源汇总</h1>
          <p className="resources-subtitle">
            精心挑选的书籍、课程、工具和社区资源
          </p>
        </div>
      </section>

      <section className="discipline-resources">
        <div className="section-container">
          <h2 className="section-title">📚 推荐书籍</h2>
          
          <div className="discipline-section">
            <h3 className="discipline-title">
              <span className="discipline-icon">💰</span>
              货币学
            </h3>
            <div className="discipline-content">
              <div className="resource-list">
                <h4>推荐书籍</h4>
                <ul>
                  <li>《The History of Money》 - Jack Weatherford</li>
                  <li>《What Has Government Done to Our Money?》 - Murray Rothbard</li>
                  <li>《The Denationalization of Money》 - F.A. Hayek</li>
                  <li>《The Ethics of Money Production》 - Jörg Guido Hülsmann</li>
                  <li>《Money, Bank Credit, and Economic Cycles》 - Jesús Huerta de Soto</li>
                </ul>
              </div>
              <div className="resource-list">
                <h4>重要论文</h4>
                <ul>
                  <li>Shelling Out: The Origins of Money - Nick Szabo</li>
                  <li>The Island of Stone Money - Milton Friedman</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="discipline-section">
            <h3 className="discipline-title">
              <span className="discipline-icon">🏦</span>
              银行学
            </h3>
            <div className="discipline-content">
              <div className="resource-list">
                <h4>推荐书籍</h4>
                <ul>
                  <li>《The End of Banking》 - Jonathan McMillan</li>
                  <li>《The Mystery of Banking》 - Murray Rothbard</li>
                  <li>《Central Banking 101》 - Joseph Wang</li>
                  <li>《The Banker's New Clothes》 - Anat Admati & Martin Hellwig</li>
                  <li>《Other People's Money》 - John Kay</li>
                </ul>
              </div>
              <div className="resource-list">
                <h4>研究方向</h4>
                <ul>
                  <li>The Role of Banks in the Monetary System - BIS</li>
                  <li>比特币对传统银行体系的影响</li>
                  <li>央行数字货币(CBDC)发展趋势</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="discipline-section">
            <h3 className="discipline-title">
              <span className="discipline-icon">📊</span>
              经济学
            </h3>
            <div className="discipline-content">
              <div className="resource-list">
                <h4>推荐书籍</h4>
                <ul>
                  <li>《The Bitcoin Standard》 - Saifedean Ammous</li>
                  <li>《The Price of Tomorrow》 - Jeff Booth</li>
                  <li>《Digital Gold》 - Nathaniel Popper</li>
                  <li>《The Fiat Standard》 - Saifedean Ammous</li>
                  <li>《Layered Money》 - Nik Bhatia</li>
                </ul>
              </div>
              <div className="resource-list">
                <h4>研究论文</h4>
                <ul>
                  <li>The Economic Limits of Bitcoin and the Blockchain</li>
                  <li>比特币作为数字黄金的经济学分析</li>
                  <li>加密货币的货币属性研究</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="discipline-section">
            <h3 className="discipline-title">
              <span className="discipline-icon">💻</span>
              计算机科学
            </h3>
            <div className="discipline-content">
              <div className="resource-list">
                <h4>推荐书籍</h4>
                <ul>
                  <li>《Mastering Bitcoin》 - Andreas M. Antonopoulos</li>
                  <li>《Bitcoin and Cryptocurrency Technologies》 - Narayanan et al.</li>
                  <li>《Programming Bitcoin》 - Jimmy Song</li>
                  <li>《The Bitcoin Standard》 - Saifedean Ammous</li>
                </ul>
              </div>
              <div className="resource-list">
                <h4>重要论文</h4>
                <ul>
                  <li>Bitcoin: A Peer-to-Peer Electronic Cash System - Satoshi Nakamoto</li>
                  <li>Hashcash - A Denial of Service Counter-Measure - Adam Back</li>
                  <li>The Byzantine Generals Problem - Lamport, Shostak, Pease</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="discipline-section">
            <h3 className="discipline-title">
              <span className="discipline-icon">🎯</span>
              博弈论
            </h3>
            <div className="discipline-content">
              <div className="resource-list">
                <h4>推荐书籍</h4>
                <ul>
                  <li>《The Theory of Games and Economic Behavior》 - von Neumann & Morgenstern</li>
                  <li>《The Evolution of Cooperation》 - Robert Axelrod</li>
                  <li>《Mechanism Design Theory》 - Eric Maskin</li>
                  <li>《Cryptoeconomics》 - Eric Voskuil</li>
                </ul>
              </div>
              <div className="resource-list">
                <h4>研究论文</h4>
                <ul>
                  <li>Bitcoin's Security Model Revisited - Yonatan Sompolinsky</li>
                  <li>The Economics of Bitcoin Mining</li>
                  <li>自私挖矿策略研究</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="discipline-section">
            <h3 className="discipline-title">
              <span className="discipline-icon">⚡</span>
              能源
            </h3>
            <div className="discipline-content">
              <div className="resource-list">
                <h4>推荐书籍</h4>
                <ul>
                  <li>《The Bitcoin Mining Council Survey》 - Michael Saylor</li>
                  <li>《The Energy Revolution》 - Menyah Heymann</li>
                  <li>《Energy and Human Ambitions on a Finite Planet》 - Tom Murphy</li>
                  <li>《Sustainable Energy - Without the Hot Air》 - David MacKay</li>
                  <li>《The Kardashev Scale》 - Nikolai Kardashev</li>
                </ul>
              </div>
              <div className="resource-list">
                <h4>研究论文</h4>
                <ul>
                  <li>On Bitcoin's Energy Consumption: A Quantitative Approach</li>
                  <li>比特币挖矿能源报告 - Cambridge Centre</li>
                  <li>比特币与可再生能源 - ARK Invest</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="discipline-section">
            <h3 className="discipline-title">
              <span className="discipline-icon">🏛️</span>
              政治学
            </h3>
            <div className="discipline-content">
              <div className="resource-list">
                <h4>推荐书籍</h4>
                <ul>
                  <li>《The Politics of Bitcoin》 - David Golumbia</li>
                  <li>《Digital Gold》 - Nathaniel Popper</li>
                  <li>《The Sovereign Individual》 - James Dale Davidson</li>
                  <li>《Bitcoin and Human Rights》 - Alex Gladstein</li>
                </ul>
              </div>
              <div className="resource-list">
                <h4>研究论文</h4>
                <ul>
                  <li>Cryptocurrency and the Problem of Intermediation - Jonathan Zittrain</li>
                  <li>Virtual Currencies and Beyond: Initial Considerations</li>
                  <li>比特币与国家主权的关系</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="discipline-section">
            <h3 className="discipline-title">
              <span className="discipline-icon">🔮</span>
              哲学
            </h3>
            <div className="discipline-content">
              <div className="resource-list">
                <h4>推荐书籍</h4>
                <ul>
                  <li>《Being and Time》 - Martin Heidegger</li>
                  <li>《The Sovereign Individual》 - Davidson & Rees-Mogg</li>
                  <li>《The Construction of Social Reality》 - John Searle</li>
                  <li>《Sapiens: A Brief History of Humankind》 - Yuval Noah Harari</li>
                  <li>《The Technology Trap》 - Carl Benedikt Frey</li>
                </ul>
              </div>
              <div className="resource-list">
                <h4>研究论文</h4>
                <ul>
                  <li>The Philosophy of Money</li>
                  <li>数字时代的信任本质</li>
                  <li>去中心化的哲学含义</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="discipline-section">
            <h3 className="discipline-title">
              <span className="discipline-icon">⚖️</span>
              法律
            </h3>
            <div className="discipline-content">
              <div className="resource-list">
                <h4>推荐书籍</h4>
                <ul>
                  <li>《Code and Other Laws of Cyberspace》 - Lawrence Lessig</li>
                  <li>《Cryptoeconomics: Economic Mechanisms for Digital Information》 - Nick Szabo</li>
                  <li>《The Rule of Law》 - Tom Bingham</li>
                  <li>《Blockchain and the Law》 - De Filippi & Wright</li>
                  <li>《The Ethics of Influence》 - Cass Sunstein</li>
                </ul>
              </div>
              <div className="resource-list">
                <h4>研究论文</h4>
                <ul>
                  <li>The Nature of the Agreement in the Blockchain</li>
                  <li>代码化规则的法律地位</li>
                  <li>加密资产的产权定义</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="courses-section">
        <div className="section-container">
          <h2 className="section-title">🎓 在线课程</h2>
          {courses.map((category, index) => (
            <div key={index} className="resource-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="courses-grid">
                {category.items.map((course, i) => (
                  <div key={i} className="course-card">
                    <h4 className="course-title">{course.title}</h4>
                    <p className="course-provider">{course.provider}</p>
                    <p className="course-duration">时长：{course.duration}</p>
                    <p className="course-description">{course.description}</p>
                    <a href={course.link} target="_blank" rel="noopener noreferrer" className="course-link">
                      访问课程 →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="tools-section">
        <div className="section-container">
          <h2 className="section-title">🛠️ 实用工具</h2>
          {tools.map((category, index) => (
            <div key={index} className="resource-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="tools-grid">
                {category.items.map((tool, i) => (
                  <div key={i} className="tool-card">
                    <h4 className="tool-name">{tool.name}</h4>
                    <span className="tool-type">{tool.type}</span>
                    <p className="tool-description">{tool.description}</p>
                    <a href={tool.link} target="_blank" rel="noopener noreferrer" className="tool-link">
                      使用工具 →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="community-section">
        <div className="section-container">
          <h2 className="section-title">👥 社区资源</h2>
          <div className="community-grid">
            {communities.map((community, index) => (
              <div key={index} className="community-card">
                <div className="community-header">
                  <h4 className="community-name">{community.name}</h4>
                  <span className="community-type">{community.type}</span>
                </div>
                <p className="community-description">{community.description}</p>
                <div className="community-footer">
                  <span className="community-language">{community.language}</span>
                  <a href={community.link} target="_blank" rel="noopener noreferrer" className="community-link">
                    访问 →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="podcasts-section">
        <div className="section-container">
          <h2 className="section-title">🎧 播客推荐</h2>
          <div className="podcasts-grid">
            {podcasts.map((podcast, index) => (
              <div key={index} className="podcast-card">
                <h4 className="podcast-name">{podcast.name}</h4>
                <p className="podcast-host">主持人：{podcast.host}</p>
                <p className="podcast-description">{podcast.description}</p>
                <span className="podcast-frequency">{podcast.frequency}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="resources-tips">
        <div className="tips-container">
          <h2 className="tips-title">学习建议</h2>
          <div className="tips-content">
            <div className="tip-box">
              <span className="tip-icon">💡</span>
              <p>从自己最感兴趣的角度入手，不必按照固定顺序</p>
            </div>
            <div className="tip-box">
              <span className="tip-icon">🔄</span>
              <p>理论与实践结合，使用工具加深理解</p>
            </div>
            <div className="tip-box">
              <span className="tip-icon">🌍</span>
              <p>加入社区，与他人交流可以获得不同视角</p>
            </div>
            <div className="tip-box">
              <span className="tip-icon">📈</span>
              <p>保持学习，比特币生态在快速发展</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resources