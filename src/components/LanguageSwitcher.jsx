import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { getLocalizedPath } from '../utils/languageRouting'
import './LanguageSwitcher.css'

function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  
  const languages = [
    { code: 'en', name: 'EN', displayName: 'English' },
    { code: 'zh', name: '中文', displayName: '中文' }
  ]
  
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0]

  const changeLanguage = (lng) => {
    const newPath = getLocalizedPath(location.pathname, lng)
    i18n.changeLanguage(lng)
    navigate(newPath)
    setIsOpen(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="language-switcher-dropdown" ref={dropdownRef}>
      <button 
        className="language-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
      >
        <svg className="globe-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        <span className="lang-name">{currentLanguage.name}</span>
        <svg 
          className={`dropdown-arrow ${isOpen ? 'open' : ''}`} 
          width="12" 
          height="12" 
          viewBox="0 0 12 12"
        >
          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      </button>
      
      <div className={`language-dropdown-menu ${isOpen ? 'open' : ''}`}>
        {languages.map(lang => (
          <button
            key={lang.code}
            className={`language-option ${i18n.language === lang.code ? 'active' : ''}`}
            onClick={() => changeLanguage(lang.code)}
          >
            <span className="option-name">{lang.displayName}</span>
            {i18n.language === lang.code && (
              <svg className="check-icon" width="12" height="12" viewBox="0 0 12 12">
                <path 
                  d="M10 3L4.5 8.5L2 6" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default LanguageSwitcher