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
    'home': 'home',
    'buy-bitcoin': 'buyBitcoin',
    'about': 'about',
    'articles': 'articles'
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
  const publishedDate = "2024-01-01T00:00:00Z";
  const modifiedDate = new Date().toISOString();
  
  if (pageName !== 'home') {
    seoData.type = 'article';
    seoData.publishedTime = publishedDate;
    seoData.modifiedTime = modifiedDate;
    seoData.jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": seoData.title,
      "description": seoData.description,
      "image": "https://bitcoinprimer.org/bitcoin-og-image.png",
      "publisher": {
        "@type": "Organization",
        "name": "Bitcoin Primer",
        "logo": {
          "@type": "ImageObject",
          "url": "https://bitcoinprimer.org/bitcoin-icon.svg"
        }
      },
      "author": {
        "@type": "Organization",
        "name": "Bitcoin Primer",
        "url": "https://bitcoinprimer.org"
      },
      "datePublished": publishedDate,
      "dateModified": modifiedDate,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://bitcoinprimer.org/${pageName}`
      }
    }
  }
  
  return seoData
}