import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { useFormattedTranslation } from '../hooks/useFormattedTranslation'
import LocalizedLink from './LocalizedLink'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguageSync, getLocalizedPath } from '../utils/languageRouting'
import './Layout.css'

function Layout({ children }) {
  const location = useLocation()
  const navigate = useNavigate()
  const { t, i18n } = useFormattedTranslation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [disciplinesOpen, setDisciplinesOpen] = useState(false)
  const dropdownRef = useRef(null)
  
  // Sync language from URL
  useLanguageSync()
  
  // Handle language change
  const handleLanguageChange = (lang) => {
    const newPath = getLocalizedPath(location.pathname, lang)
    i18n.changeLanguage(lang)
    navigate(newPath)
  }
  
  // 学科导航项
  const disciplines = [
    { nameKey: 'disciplines.money.title', path: '/money', icon: '💰' },
    { nameKey: 'disciplines.banking.title', path: '/banking', icon: '🏦' },
    { nameKey: 'disciplines.economics.title', path: '/economics', icon: '📊' },
    { nameKey: 'disciplines.computerScience.title', path: '/computer-science', icon: '💻' },
    { nameKey: 'disciplines.gameTheory.title', path: '/game-theory', icon: '🎯' },
    { nameKey: 'disciplines.energy.title', path: '/energy', icon: '⚡' },
    { nameKey: 'disciplines.politics.title', path: '/politics', icon: '🏛️' },
    { nameKey: 'disciplines.philosophy.title', path: '/philosophy', icon: '🔮' },
    { nameKey: 'disciplines.law.title', path: '/law', icon: '⚖️' }
  ]

  // 点击外部关闭下拉菜单
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDisciplinesOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // 路径变化时关闭移动端菜单并滚动到顶部
  useEffect(() => {
    setMobileMenuOpen(false)
    setDisciplinesOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  return (
    <div className="layout">
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <LocalizedLink to="/" className="logo">
            <span className="logo-icon">₿</span>
            <span className="logo-text">{t('nav.logo')}</span>
          </LocalizedLink>
          
          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <div className="nav-items">
              {/* Disciplines Dropdown */}
              <div className="dropdown" ref={dropdownRef}>
                <button 
                  className={`nav-item dropdown-toggle ${disciplines.some(d => d.path === location.pathname) ? 'active' : ''}`}
                  onClick={() => setDisciplinesOpen(!disciplinesOpen)}
                >
                  {t('nav.disciplines')}
                  <svg className={`dropdown-arrow ${disciplinesOpen ? 'open' : ''}`} width="12" height="12" viewBox="0 0 12 12">
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </button>
                
                <div className={`dropdown-menu ${disciplinesOpen ? 'open' : ''}`}>
                  <div className="dropdown-grid">
                    {disciplines.map((item) => (
                      <LocalizedLink
                        key={item.path}
                        to={item.path}
                        className={`dropdown-item ${location.pathname.endsWith(item.path) ? 'active' : ''}`}
                        onClick={() => setDisciplinesOpen(false)}
                      >
                        <span className="item-icon">{item.icon}</span>
                        <span className="item-text">{t(item.nameKey)}</span>
                      </LocalizedLink>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Links */}
              <LocalizedLink 
                to="/learning-path" 
                className={`nav-item ${location.pathname.endsWith('/learning-path') ? 'active' : ''}`}
              >
                {t('nav.learningPath')}
              </LocalizedLink>
              <LocalizedLink 
                to="/study-guide" 
                className={`nav-item ${location.pathname.endsWith('/study-guide') ? 'active' : ''}`}
              >
                {t('nav.studyGuide')}
              </LocalizedLink>
              <LocalizedLink 
                to="/articles" 
                className={`nav-item ${location.pathname.includes('/articles') ? 'active' : ''}`}
              >
                {t('nav.deepArticles')}
              </LocalizedLink>
              <LocalizedLink 
                to="/resources" 
                className={`nav-item ${location.pathname.endsWith('/resources') ? 'active' : ''}`}
              >
                {t('nav.resources')}
              </LocalizedLink>
            </div>
          </nav>
          
          {/* Language Switcher - Right side */}
          <LanguageSwitcher />

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`burger ${mobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation - Outside header */}
      <nav className={`nav-mobile ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            <div className="mobile-section">
              <div className="mobile-section-title">{t('nav.disciplines')}</div>
              <div className="mobile-grid">
                {disciplines.map((item) => (
                  <LocalizedLink
                    key={item.path}
                    to={item.path}
                    className={`mobile-grid-item ${location.pathname.endsWith(item.path) ? 'active' : ''}`}
                  >
                    <span className="mobile-item-icon">{item.icon}</span>
                    <span className="mobile-item-text">{t(item.nameKey)}</span>
                  </LocalizedLink>
                ))}
              </div>
            </div>

            <div className="mobile-divider"></div>

            <div className="mobile-links">
              <LocalizedLink 
                to="/learning-path" 
                className={`mobile-link ${location.pathname.endsWith('/learning-path') ? 'active' : ''}`}
              >
                <span className="mobile-link-icon">📖</span>
                <span>{t('nav.learningPath')}</span>
              </LocalizedLink>
              <LocalizedLink 
                to="/study-guide" 
                className={`mobile-link ${location.pathname.endsWith('/study-guide') ? 'active' : ''}`}
              >
                <span className="mobile-link-icon">📚</span>
                <span>{t('nav.studyGuide')}</span>
              </LocalizedLink>
              <LocalizedLink 
                to="/articles" 
                className={`mobile-link ${location.pathname.includes('/articles') ? 'active' : ''}`}
              >
                <span className="mobile-link-icon">📖</span>
                <span>{t('nav.deepArticles')}</span>
              </LocalizedLink>
              <LocalizedLink 
                to="/resources" 
                className={`mobile-link ${location.pathname.endsWith('/resources') ? 'active' : ''}`}
              >
                <span className="mobile-link-icon">🔗</span>
                <span>{t('nav.resources')}</span>
              </LocalizedLink>
            </div>

            <div className="mobile-divider"></div>

            <div className="mobile-language-section">
              <div className="mobile-section-title">{t('nav.language')}</div>
              <div className="mobile-language-buttons">
                <button
                  className={`mobile-lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
                  onClick={() => handleLanguageChange('en')}
                >
                  English
                </button>
                <button
                  className={`mobile-lang-btn ${i18n.language === 'zh' ? 'active' : ''}`}
                  onClick={() => handleLanguageChange('zh')}
                >
                  中文
                </button>
              </div>
            </div>

            <div className="mobile-cta">
              <LocalizedLink to="/learning-path" className="mobile-cta-btn">
                {t('nav.startLearningJourney')}
              </LocalizedLink>
            </div>
          </div>
      </nav>
      
      <main className="main">
        {children}
      </main>
      
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>{t('footer.brand.title')}</h3>
              <p>{t('footer.brand.subtitle')}</p>
            </div>
            <div className="footer-links">
              <a href="https://bitcoin.org/bitcoin.pdf" target="_blank" rel="noopener noreferrer">{t('footer.links.whitepaper')}</a>
              <a href="https://github.com/bitcoin/bitcoin" target="_blank" rel="noopener noreferrer">{t('footer.links.source')}</a>
              <a href="https://en.bitcoin.it/wiki" target="_blank" rel="noopener noreferrer">{t('footer.links.wiki')}</a>
              <a href="https://bitcoinmagazine.com" target="_blank" rel="noopener noreferrer">{t('footer.links.magazine')}</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout