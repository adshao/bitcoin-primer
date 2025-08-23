import { useFormattedTranslation } from '../hooks/useFormattedTranslation'
import SEO from '../components/SEO'
import { useSEO } from '../hooks/useSEO'
import { useState, useEffect } from 'react'
import { disciplineResources } from '../data/disciplineResources'
import './Resources.css'

function Resources() {
  const { t, i18n } = useFormattedTranslation('resources')
  const isZh = i18n.language === 'zh'
  const seoData = useSEO('resources')
  const [activeSection, setActiveSection] = useState('discipline-resources')
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'discipline-resources',
        'courses-section', 
        'podcasts-section',
        'tools-section',
        'community-section'
      ]
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  
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
      'https://www.unic.ac.cy/iff/education-and-training/free-courses-moocs/mooc-in-digital-currency/',
      'https://learn.saylor.org/course/view.php?id=468',
      'https://www.youtube.com/user/aantonop',
      'https://pdos.csail.mit.edu/6.824/',
      'https://www.khanacademy.org/economics-finance-domain/core-finance/money-and-banking/bitcoin/v/bitcoin-overview'
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
          link: 'https://blockstream.info/testnet/'
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
      'https://x.com/search?q=%23Bitcoin',
      'https://bitcoinops.org/'
    ][index]
  }))

  const podcasts = t('podcasts.items', { returnObjects: true }).map((item, index) => ({
    ...item,
    link: [
      'https://www.whatbitcoindid.com/',
      'https://pomp.substack.com/',
      'https://stephanlivera.com/',
      'https://www.tftc.io/'
    ][index]
  }))

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

  const navigationItems = [
    { id: 'discipline-resources', icon: '📚', label: t('sections.books') },
    { id: 'courses-section', icon: '🎓', label: t('sections.courses') },
    { id: 'podcasts-section', icon: '🎧', label: t('sections.podcasts') },
    { id: 'tools-section', icon: '🛠️', label: t('sections.tools') },
    { id: 'community-section', icon: '👥', label: t('sections.community') }
  ]

  return (
    <div className="resources">
      <nav className="resources-nav">
        <div className="resources-nav-content">
          <h3 className="resources-nav-title">{t('navigation.quickNav')}</h3>
          <ul className="resources-nav-list">
            {navigationItems.map(item => (
              <li key={item.id} className={`resources-nav-item ${activeSection === item.id ? 'active' : ''}`}>
                <button 
                  onClick={() => scrollToSection(item.id)}
                  className="resources-nav-link"
                >
                  <span className="resources-nav-icon">{item.icon}</span>
                  <span className="resources-nav-text">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <SEO {...seoData} />
      <section className="resources-hero">
        <div className="resources-hero-background">
          <div className="resources-grid-pattern"></div>
          <div className="resources-gradient-orb"></div>
        </div>
        <div className="resources-hero-content">
          <h1 className="resources-title">{t('title')}</h1>
          <p className="resources-subtitle">
            {t('subtitle')}
          </p>
        </div>
      </section>

      <section id="discipline-resources" className="discipline-resources">
        <div className="section-container">
          <h2 className="section-title">📚 {t('sections.books')}</h2>
          
          {disciplines.map(discipline => {
            const resources = disciplineResources[discipline]
            const disciplineKey = discipline === 'computerScience' ? 'computerScience' : discipline
            
            return (
              <div key={discipline} className="discipline-section">
                <h3 className="discipline-title">
                  <span className="discipline-icon">{disciplineIcons[discipline]}</span>
                  {t(`disciplines.${discipline}.title`)}
                </h3>
                <div className="discipline-content">
                  <div className="resource-list">
                    <h4>{t(`disciplines.${discipline}.books`)}</h4>
                    <ul>
                      {resources.books.map((book, i) => (
                        <li key={i}>
                          <a href={book.link} target="_blank" rel="noopener noreferrer" className="resource-link">
                            《{book.title}》 - {book.author}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="resource-list">
                    <h4>{t(`disciplines.${discipline}.${discipline === 'banking' ? 'research' : 'papers'}`)}</h4>
                    <ul>
                      {(resources[discipline === 'banking' ? 'research' : 'papers'] || []).map((paper, i) => (
                        <li key={i}>
                          <a href={paper.link} target="_blank" rel="noopener noreferrer" className="resource-link">
                            {paper.title} {paper.author && `- ${paper.author}`}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section id="courses-section" className="courses-section">
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

      <section id="podcasts-section" className="podcasts-section">
        <div className="section-container">
          <h2 className="section-title">🎧 {t('sections.podcasts')}</h2>
          <div className="podcasts-grid">
            {podcasts.map((podcast, index) => (
              <div key={index} className="podcast-card">
                <h4 className="podcast-name">{podcast.name}</h4>
                <p className="podcast-host">{t('podcasts.host')} {podcast.host}</p>
                <p className="podcast-description">{podcast.description}</p>
                <div className="podcast-footer">
                  <span className="podcast-frequency">{podcast.frequency}</span>
                  <a href={podcast.link} target="_blank" rel="noopener noreferrer" className="podcast-link">
                    {t('podcasts.listen')}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tools-section" className="tools-section">
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

      <section id="community-section" className="community-section">
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

      <section id="resources-tips" className="resources-tips">
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