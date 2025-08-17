import { useTranslation } from 'react-i18next'

/**
 * Custom hook for multi-language support
 * Provides easy access to translations and language utilities
 */
export function useMultiLanguage() {
  const { t, i18n } = useTranslation()
  
  // Current language
  const currentLanguage = i18n.language
  
  // Check if current language is Chinese (for backward compatibility)
  const isZh = currentLanguage === 'zh'
  
  // Change language function
  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode)
  }
  
  // Get discipline-specific content (simplified for now)
  const getDiscipline = (disciplineName) => {
    // This will be implemented per page
    return {}
  }
  
  // Helper to get translated text with fallback
  const getText = (zhText, enText) => {
    // This structure makes it easy to add more languages
    const languageMap = {
      zh: zhText,
      en: enText
      // Future languages can be added here with additional parameters
    }
    
    return languageMap[currentLanguage] || enText // Default to English
  }
  
  return {
    t,
    currentLanguage,
    isZh,
    changeLanguage,
    getDiscipline,
    getText
  }
}