import { useTranslation } from 'react-i18next'

export const useSEO = (pageName) => {
  const { t } = useTranslation()
  
  // Map page routes to SEO keys
  const seoKeyMap = {
    'money': 'money',
    'banking': 'banking',
    'economics': 'economics',
    'computer-science': 'computerScience',
    'game-theory': 'gameTheory',
    'energy': 'energy',
    'politics': 'politics',
    'philosophy': 'philosophy',
    'law': 'law',
    'learning-path': 'learningPath',
    'study-guide': 'studyGuide',
    'resources': 'resources',
    'home': 'home'
  }
  
  const seoKey = seoKeyMap[pageName]
  
  if (!seoKey) {
    return {}
  }
  
  // Get SEO data from translations
  const seoData = {
    title: t(`seo.${seoKey}.title`),
    description: t(`seo.${seoKey}.description`),
    keywords: t(`seo.${seoKey}.keywords`)
  }
  
  // Add structured data for articles (non-home pages)
  if (pageName !== 'home') {
    seoData.jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": seoData.title,
      "description": seoData.description,
      "publisher": {
        "@type": "Organization",
        "name": "Bitcoin Primer",
        "logo": {
          "@type": "ImageObject",
          "url": "https://bitcoinprimer.com/bitcoin-icon.svg"
        }
      },
      "author": {
        "@type": "Organization",
        "name": "Bitcoin Primer"
      },
      "datePublished": "2024-01-01",
      "dateModified": new Date().toISOString()
    }
  }
  
  return seoData
}