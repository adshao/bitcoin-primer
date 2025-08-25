import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

function LanguageRoute({ children, language }) {
  const { i18n } = useTranslation()
  const location = useLocation()
  
  // Immediately set language based on route
  useEffect(() => {
    if (language && i18n.language !== language) {
      i18n.changeLanguage(language)
    }
  }, [language, i18n, location.pathname])
  
  // Also set language synchronously on first render
  if (language && i18n.language !== language) {
    i18n.changeLanguage(language)
  }
  
  return children
}

export default LanguageRoute