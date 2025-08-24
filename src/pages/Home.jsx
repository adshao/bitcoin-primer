import LocalizedLink from '../components/LocalizedLink'
import { useFormattedTranslation } from '../hooks/useFormattedTranslation'
import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'
import { useSEO } from '../hooks/useSEO'
import './Home.css'

function Home() {
  const { t } = useFormattedTranslation()
  const { i18n } = useTranslation()
  const seoData = useSEO('home')
  
  const handleLearnMoreClick = (e) => {
    e.preventDefault()
    const perspectivesSection = document.getElementById('perspectives')
    if (perspectivesSection) {
      perspectivesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
  
  const perspectives = [
    {
      titleKey: 'disciplines.money.title',
      icon: '💰',
      path: '/money',
      color: '#059669',
      descriptionKey: 'disciplines.money.description'
    },
    {
      titleKey: 'disciplines.banking.title',
      icon: '🏦',
      path: '/banking',
      color: '#7C2D12',
      descriptionKey: 'disciplines.banking.description'
    },
    {
      titleKey: 'disciplines.economics.title',
      icon: '📊',
      path: '/economics',
      color: '#0891B2',
      descriptionKey: 'disciplines.economics.description'
    },
    {
      titleKey: 'disciplines.computerScience.title',
      icon: '💻',
      path: '/computer-science',
      color: '#4F46E5',
      descriptionKey: 'disciplines.computerScience.description'
    },
    {
      titleKey: 'disciplines.gameTheory.title',
      icon: '🎯',
      path: '/game-theory',
      color: '#7C3AED',
      descriptionKey: 'disciplines.gameTheory.description'
    },
    {
      titleKey: 'disciplines.energy.title',
      icon: '⚡',
      path: '/energy',
      color: '#2563EB',
      descriptionKey: 'disciplines.energy.description'
    },
    {
      titleKey: 'disciplines.politics.title',
      icon: '🏛️',
      path: '/politics',
      color: '#EA580C',
      descriptionKey: 'disciplines.politics.description'
    },
    {
      titleKey: 'disciplines.philosophy.title',
      icon: '🔮',
      path: '/philosophy',
      color: '#6366F1',
      descriptionKey: 'disciplines.philosophy.description'
    },
    {
      titleKey: 'disciplines.law.title',
      icon: '⚖️',
      path: '/law',
      color: '#DC2626',
      descriptionKey: 'disciplines.law.description'
    }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Bitcoin Primer",
    "description": seoData.description,
    "url": "https://bitcoinprimer.org",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://bitcoinprimer.org/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bitcoin Primer",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bitcoinprimer.org/bitcoin-icon.svg"
      }
    }
  }

  return (
    <div className="home">
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        jsonLd={structuredData}
      />
      {/* 新设计的Hero部分 */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="grid-pattern"></div>
          <div className="gradient-orb gradient-orb-1"></div>
          <div className="gradient-orb gradient-orb-2"></div>
        </div>
        
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              {t('home.hero.badge')}
            </div>
            
            <h1 className="hero-title">
              <span className="title-line">{t('home.hero.title1')}<span className="highlight-bitcoin">{t('home.hero.bitcoin')}</span></span>
              <span className="title-line">{t('home.hero.title2')}</span>
            </h1>
            
            <p className="hero-subtitle">
              {t('home.hero.subtitle')}
            </p>
            
            <div className="hero-actions">
              <a href="#perspectives" className="btn-primary" onClick={handleLearnMoreClick}>
                {t('home.hero.learnMore')}
                <span className="btn-arrow">↓</span>
              </a>
              <LocalizedLink to="/learning-path" className="btn-secondary">
                {t('nav.startLearning')}
                <span className="btn-icon">→</span>
              </LocalizedLink>
            </div>
          </div>
          
          {/* 简化的知识网络可视化 */}
          <div className="hero-visual">
            <div className="network-container">
              <div className="network-center">
                <div className="bitcoin-node">
                  <span className="bitcoin-icon">₿</span>
                </div>
              </div>
              {perspectives.map((item, index) => {
                const angle = (index * 40 - 90) * (Math.PI / 180);
                const radius = 45;
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);
                
                return (
                  <div 
                    key={item.path}
                    className="orbit-node"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      '--node-color': item.color
                    }}
                  >
                    <span className="orbit-icon">{item.icon}</span>
                    <div className="orbit-line"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 视角卡片部分 */}
      <section id="perspectives" className="perspectives-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">{t('home.perspectives.title')}</span>
            <h2 className="section-title">{t('home.perspectives.subtitle')}</h2>
            <p className="section-description">
              {t('home.perspectives.description')}
            </p>
          </div>
          
          <div className="perspectives-grid">
            {perspectives.map((item, index) => (
              <LocalizedLink 
                key={item.path} 
                to={item.path}
                className="perspective-card"
                style={{'--card-color': item.color}}
              >
                <div className="card-icon">
                  <span>{item.icon}</span>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{t(item.titleKey)}</h3>
                  <p className="card-description">{t(item.descriptionKey)}</p>
                </div>
                <div className="card-arrow">→</div>
              </LocalizedLink>
            ))}
          </div>
        </div>
      </section>

      {/* 核心洞察部分 */}
      <section className="insights-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">{t('insights.label')}</span>
            <h2 className="section-title">{t('insights.title')}</h2>
          </div>
          
          <div className="insights-grid">
            <div className="insight-card">
              <div className="insight-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3>{t('insights.trust.title')}</h3>
              <p>{t('insights.trust.description')}</p>
            </div>
            
            <div className="insight-card">
              <div className="insight-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>{t('insights.value.title')}</h3>
              <p>{t('insights.value.description')}</p>
            </div>
            
            <div className="insight-card">
              <div className="insight-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3>{t('insights.power.title')}</h3>
              <p>{t('insights.power.description')}</p>
            </div>
            
            <div className="insight-card">
              <div className="insight-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3>{t('insights.future.title')}</h3>
              <p>{t('insights.future.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 引导部分 */}
      <section className="cta-section">
        <div className="section-container">
          <div className="cta-content">
            <h2 className="cta-title">{t('home.cta.title')}</h2>
            <p className="cta-description">
              {t('home.cta.subtitle')}
            </p>
            <div className="cta-actions">
              <LocalizedLink to="/computer-science" className="btn-primary">
                {t('cta2.techStart')}
                <span className="btn-arrow">→</span>
              </LocalizedLink>
              <LocalizedLink to="/economics" className="btn-outline">
                {t('cta2.econStart')}
                <span className="btn-arrow">→</span>
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home