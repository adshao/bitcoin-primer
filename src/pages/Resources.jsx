import { useFormattedTranslation } from '../hooks/useFormattedTranslation'
import './Resources.css'

function Resources() {
  const { t, i18n } = useFormattedTranslation('resources')
  const isZh = i18n.language === 'zh'
  
  const books = [
    {
      category: t('books.categories.essential'),
      items: [
        {
          title: 'The Bitcoin Standard',
          author: 'Saifedean Ammous',
          year: '2018',
          description: t('books.items.bitcoinStandard.description'),
          level: t('books.level.beginner'),
          language: t('books.language.chinese')
        },
        {
          title: 'Bitcoin: A Peer-to-Peer Electronic Cash System',
          author: 'Satoshi Nakamoto',
          year: '2008',
          description: t('books.items.whitepaper.description'),
          level: t('books.level.beginner'),
          language: t('books.language.chinese')
        },
        {
          title: 'The Little Bitcoin Book',
          author: 'Bitcoin Collective',
          year: '2019',
          description: t('books.items.littleBitcoin.description'),
          level: t('books.level.beginner'),
          language: t('books.language.english')
        }
      ]
    },
    {
      category: t('books.categories.technical'),
      items: [
        {
          title: 'Mastering Bitcoin',
          author: 'Andreas M. Antonopoulos',
          year: '2017',
          description: t('books.items.masteringBitcoin.description'),
          level: t('books.level.advanced'),
          language: t('books.language.chinese')
        },
        {
          title: 'Programming Bitcoin',
          author: 'Jimmy Song',
          year: '2019',
          description: t('books.items.programmingBitcoin.description'),
          level: t('books.level.advanced'),
          language: t('books.language.english')
        },
        {
          title: 'Bitcoin and Cryptocurrency Technologies',
          author: 'Narayanan et al.',
          year: '2016',
          description: t('books.items.cryptoTechnologies.description'),
          level: t('books.level.advanced'),
          language: t('books.language.english')
        }
      ]
    },
    {
      category: t('books.categories.economics'),
      items: [
        {
          title: 'The Fiat Standard',
          author: 'Saifedean Ammous',
          year: '2021',
          description: t('books.items.fiatStandard.description'),
          level: t('books.level.advanced'),
          language: t('books.language.english')
        },
        {
          title: 'The Price of Tomorrow',
          author: 'Jeff Booth',
          year: '2020',
          description: t('books.items.priceTomorrow.description'),
          level: t('books.level.intermediate'),
          language: t('books.language.chinese')
        },
        {
          title: 'Digital Gold',
          author: 'Nathaniel Popper',
          year: '2015',
          description: t('books.items.digitalGold.description'),
          level: t('books.level.beginner'),
          language: t('books.language.chinese')
        }
      ]
    }
  ]

  const courses = t('courses.items', { returnObjects: true }).map((item, index) => ({
    ...item,
    link: [
      'https://www.coursera.org/learn/cryptocurrency',
      'https://www.unic.ac.cy/blockchain/free-mooc/',
      'https://learn.saylor.org/course/PRDV151',
      'https://www.youtube.com/user/aantonop',
      'https://pdos.csail.mit.edu/6.824/',
      'https://www.khanacademy.org/economics-finance-domain/finance-and-capital-markets'
    ][index]
  }))

  const tools = [
    {
      category: t('tools.categories.wallets'),
      items: [
        {
          name: 'Bitcoin Core',
          type: t('tools.items.bitcoinCore.type'),
          description: t('tools.items.bitcoinCore.description'),
          link: 'https://bitcoin.org/en/bitcoin-core/'
        },
        {
          name: 'Electrum',
          type: t('tools.items.electrum.type'),
          description: t('tools.items.electrum.description'),
          link: 'https://electrum.org/'
        },
        {
          name: 'Blue Wallet',
          type: t('tools.items.blueWallet.type'),
          description: t('tools.items.blueWallet.description'),
          link: 'https://bluewallet.io/'
        }
      ]
    },
    {
      category: t('tools.categories.explorers'),
      items: [
        {
          name: 'Blockstream Explorer',
          type: t('tools.items.blockstream.type'),
          description: t('tools.items.blockstream.description'),
          link: 'https://blockstream.info/'
        },
        {
          name: 'Mempool.space',
          type: t('tools.items.mempool.type'),
          description: t('tools.items.mempool.description'),
          link: 'https://mempool.space/'
        },
        {
          name: 'Blockchain.com Explorer',
          type: t('tools.items.blockchain.type'),
          description: t('tools.items.blockchain.description'),
          link: 'https://www.blockchain.com/explorer'
        }
      ]
    },
    {
      category: t('tools.categories.development'),
      items: [
        {
          name: 'Bitcoin Testnet',
          type: t('tools.items.testnet.type'),
          description: t('tools.items.testnet.description'),
          link: 'https://testnet.blockchain.info/'
        },
        {
          name: 'BitcoinJS',
          type: t('tools.items.bitcoinjs.type'),
          description: t('tools.items.bitcoinjs.description'),
          link: 'https://github.com/bitcoinjs/bitcoinjs-lib'
        },
        {
          name: 'BTCPay Server',
          type: t('tools.items.btcpay.type'),
          description: t('tools.items.btcpay.description'),
          link: 'https://btcpayserver.org/'
        }
      ]
    }
  ]

  const communities = t('community.items', { returnObjects: true }).map((item, index) => ({
    ...item,
    link: [
      'https://bitcointalk.org/',
      'https://www.reddit.com/r/Bitcoin/',
      'https://twitter.com/search?q=%23Bitcoin',
      'https://bitcoinops.org/',
      'https://www.8btc.com/'
    ][index]
  }))

  const podcasts = t('podcasts.items', { returnObjects: true })

  const disciplines = [
    'money', 'banking', 'economics', 'computerScience', 
    'gameTheory', 'energy', 'politics', 'philosophy', 'law'
  ]

  const disciplineIcons = {
    money: '💰',
    banking: '🏦',
    economics: '📊',
    computerScience: '💻',
    gameTheory: '🎯',
    energy: '⚡',
    politics: '🏛️',
    philosophy: '🔮',
    law: '⚖️'
  }

  return (
    <div className="resources">
      <section className="resources-hero">
        <div className="resources-hero-content">
          <h1 className="resources-title">{t('title')}</h1>
          <p className="resources-subtitle">
            {t('subtitle')}
          </p>
        </div>
      </section>

      <section className="discipline-resources">
        <div className="section-container">
          <h2 className="section-title">📚 {t('sections.books')}</h2>
          
          {disciplines.map(discipline => (
            <div key={discipline} className="discipline-section">
              <h3 className="discipline-title">
                <span className="discipline-icon">{disciplineIcons[discipline]}</span>
                {t(`disciplines.${discipline}.title`)}
              </h3>
              <div className="discipline-content">
                <div className="resource-list">
                  <h4>{t(`disciplines.${discipline}.books`)}</h4>
                  <ul>
                    {t(`disciplines.${discipline}.booksList`, { returnObjects: true }).map((book, i) => (
                      <li key={i}>{book}</li>
                    ))}
                  </ul>
                </div>
                <div className="resource-list">
                  <h4>{t(`disciplines.${discipline}.${discipline === 'banking' ? 'research' : 'papers'}`)}</h4>
                  <ul>
                    {t(`disciplines.${discipline}.${discipline === 'banking' ? 'researchList' : 'papersList'}`, { returnObjects: true }).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="courses-section">
        <div className="section-container">
          <h2 className="section-title">🎓 {t('sections.courses')}</h2>
          <div className="resource-category">
            <h3 className="category-title">{t('courses.categories.free')}</h3>
            <div className="courses-grid">
              {courses.slice(0, 3).map((course, i) => (
                <div key={i} className="course-card">
                  <h4 className="course-title">{course.title}</h4>
                  <p className="course-provider">{course.provider}</p>
                  <p className="course-duration">{t('courses.duration')} {course.duration}</p>
                  <p className="course-description">{course.description}</p>
                  <a href={course.link} target="_blank" rel="noopener noreferrer" className="course-link">
                    {t('courses.visitCourse')}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="resource-category">
            <h3 className="category-title">{t('courses.categories.video')}</h3>
            <div className="courses-grid">
              {courses.slice(3).map((course, i) => (
                <div key={i} className="course-card">
                  <h4 className="course-title">{course.title}</h4>
                  <p className="course-provider">{course.provider}</p>
                  <p className="course-duration">{t('courses.duration')} {course.duration}</p>
                  <p className="course-description">{course.description}</p>
                  <a href={course.link} target="_blank" rel="noopener noreferrer" className="course-link">
                    {t('courses.visitCourse')}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="tools-section">
        <div className="section-container">
          <h2 className="section-title">🛠️ {t('sections.tools')}</h2>
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
                      {t('tools.useTool')}
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
          <h2 className="section-title">👥 {t('sections.community')}</h2>
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
                    {t('community.visit')}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="podcasts-section">
        <div className="section-container">
          <h2 className="section-title">🎧 {t('sections.podcasts')}</h2>
          <div className="podcasts-grid">
            {podcasts.map((podcast, index) => (
              <div key={index} className="podcast-card">
                <h4 className="podcast-name">{podcast.name}</h4>
                <p className="podcast-host">{t('podcasts.host')} {podcast.host}</p>
                <p className="podcast-description">{podcast.description}</p>
                <span className="podcast-frequency">{podcast.frequency}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="resources-tips">
        <div className="tips-container">
          <h2 className="tips-title">{t('tips.title')}</h2>
          <div className="tips-content">
            {t('tips.items', { returnObjects: true }).map((tip, index) => (
              <div key={index} className="tip-box">
                <span className="tip-icon">{['💡', '🔄', '🌍', '📈'][index]}</span>
                <p>{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resources