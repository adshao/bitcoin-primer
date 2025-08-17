import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import './Layout.css'

function Layout({ children }) {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [disciplinesOpen, setDisciplinesOpen] = useState(false)
  const dropdownRef = useRef(null)
  
  // 学科导航项
  const disciplines = [
    { name: '货币', path: '/money', icon: '💰' },
    { name: '银行', path: '/banking', icon: '🏦' },
    { name: '经济学', path: '/economics', icon: '📊' },
    { name: '计算机科学', path: '/computer-science', icon: '💻' },
    { name: '博弈论', path: '/game-theory', icon: '🎯' },
    { name: '能源', path: '/energy', icon: '⚡' },
    { name: '政治', path: '/politics', icon: '🏛️' },
    { name: '哲学', path: '/philosophy', icon: '🔮' },
    { name: '法律', path: '/law', icon: '⚖️' }
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
    window.scrollTo(0, 0)
  }, [location])

  return (
    <div className="layout">
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <Link to="/" className="logo">
            <span className="logo-icon">₿</span>
            <span className="logo-text">Bitcoin Primer</span>
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
                  学科视角
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
                        <span className="item-text">{item.name}</span>
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
                学习路径
              </Link>
              <Link 
                to="/study-guide" 
                className={`nav-item ${location.pathname === '/study-guide' ? 'active' : ''}`}
              >
                自学指南
              </Link>
              <Link 
                to="/resources" 
                className={`nav-item ${location.pathname === '/resources' ? 'active' : ''}`}
              >
                资源汇总
              </Link>
            </div>

            {/* CTA Button */}
            <Link to="/learning-path" className="nav-cta">
              <span>开始学习</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </Link>
          </nav>

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

        {/* Mobile Navigation */}
        <nav className={`nav-mobile ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            <div className="mobile-section">
              <div className="mobile-section-title">学科视角</div>
              <div className="mobile-grid">
                {disciplines.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`mobile-grid-item ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    <span className="mobile-item-icon">{item.icon}</span>
                    <span className="mobile-item-text">{item.name}</span>
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
                <span>学习路径</span>
              </Link>
              <Link 
                to="/study-guide" 
                className={`mobile-link ${location.pathname === '/study-guide' ? 'active' : ''}`}
              >
                <span className="mobile-link-icon">📚</span>
                <span>自学指南</span>
              </Link>
              <Link 
                to="/resources" 
                className={`mobile-link ${location.pathname === '/resources' ? 'active' : ''}`}
              >
                <span className="mobile-link-icon">🔗</span>
                <span>资源汇总</span>
              </Link>
            </div>

            <div className="mobile-cta">
              <Link to="/learning-path" className="mobile-cta-btn">
                开始学习之旅
              </Link>
            </div>
          </div>
        </nav>
      </header>
      
      <main className="main">
        {children}
      </main>
      
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Bitcoin Primer</h3>
              <p>通过比特币理解社会运行机制</p>
            </div>
            <div className="footer-links">
              <a href="https://bitcoin.org/bitcoin.pdf" target="_blank" rel="noopener noreferrer">白皮书</a>
              <a href="https://github.com/bitcoin/bitcoin" target="_blank" rel="noopener noreferrer">源码</a>
              <a href="https://en.bitcoin.it/wiki" target="_blank" rel="noopener noreferrer">Wiki</a>
              <a href="https://bitcoinmagazine.com" target="_blank" rel="noopener noreferrer">Magazine</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Bitcoin Primer - 开源教育项目</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout