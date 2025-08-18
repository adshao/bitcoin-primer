import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { useFormattedTranslation } from '../hooks/useFormattedTranslation'
import LanguageSwitcher from './LanguageSwitcher'
import './Layout.css'

function Layout({ children }) {
  const location = useLocation()
  const { t, i18n } = useFormattedTranslation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [disciplinesOpen, setDisciplinesOpen] = useState(false)
  const dropdownRef = useRef(null)
  
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
          <Link to="/" className="logo">
            <span className="logo-icon">₿</span>
            <span className="logo-text">{t('nav.logo')}</span>
          </Link>
          
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
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`dropdown-item ${location.pathname === item.path ? 'active' : ''}`}
                        onClick={() => setDisciplinesOpen(false)}
                      >
                        <span className="item-icon">{item.icon}</span>
                        <span className="item-text">{t(item.nameKey)}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Links */}
              <Link 
                to="/learning-path" 
                className={`nav-item ${location.pathname === '/learning-path' ? 'active' : ''}`}
              >
                {t('nav.learningPath')}
              </Link>
              <Link 
                to="/study-guide" 
                className={`nav-item ${location.pathname === '/study-guide' ? 'active' : ''}`}
              >
                {t('nav.studyGuide')}
              </Link>
              <Link 
                to="/resources" 
                className={`nav-item ${location.pathname === '/resources' ? 'active' : ''}`}
              >
                {t('nav.resources')}
              </Link>
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
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`mobile-grid-item ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    <span className="mobile-item-icon">{item.icon}</span>
                    <span className="mobile-item-text">{t(item.nameKey)}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mobile-divider"></div>

            <div className="mobile-links">
              <Link 
                to="/learning-path" 
                className={`mobile-link ${location.pathname === '/learning-path' ? 'active' : ''}`}
              >
                <span className="mobile-link-icon">📖</span>
                <span>{t('nav.learningPath')}</span>
              </Link>
              <Link 
                to="/study-guide" 
                className={`mobile-link ${location.pathname === '/study-guide' ? 'active' : ''}`}
              >
                <span className="mobile-link-icon">📚</span>
                <span>{t('nav.studyGuide')}</span>
              </Link>
              <Link 
                to="/resources" 
                className={`mobile-link ${location.pathname === '/resources' ? 'active' : ''}`}
              >
                <span className="mobile-link-icon">🔗</span>
                <span>{t('nav.resources')}</span>
              </Link>
            </div>

            <div className="mobile-divider"></div>

            <div className="mobile-language-section">
              <div className="mobile-section-title">{t('nav.language')}</div>
              <div className="mobile-language-buttons">
                <button
                  className={`mobile-lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
                  onClick={() => i18n.changeLanguage('en')}
                >
                  English
                </button>
                <button
                  className={`mobile-lang-btn ${i18n.language === 'zh' ? 'active' : ''}`}
                  onClick={() => i18n.changeLanguage('zh')}
                >
                  中文
                </button>
              </div>
            </div>

            <div className="mobile-cta">
              <Link to="/learning-path" className="mobile-cta-btn">
                {t('nav.startLearningJourney')}
              </Link>
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