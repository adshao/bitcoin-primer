// Structured Data (Schema.org) utilities for SEO

// Helper function to get localized content
const getLocalizedContent = (lang, content) => {
  // Default to English if content for the language is not available
  return content[lang] || content['en'] || '';
};

// Helper function to generate language-specific URL
const getLocalizedUrl = (path, lang = 'en') => {
  const baseUrl = 'https://bitcoinprimer.org';
  if (lang === 'en') {
    return `${baseUrl}${path}`;
  }
  return `${baseUrl}/${lang}${path}`;
};

// Organization Schema - for the main website
export const getOrganizationSchema = (lang = 'en') => ({
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Bitcoin Primer',
  url: 'https://bitcoinprimer.org',
  logo: 'https://bitcoinprimer.org/bitcoin-logo.png',
  description: getLocalizedContent(lang, {
    en: 'Comprehensive Bitcoin education platform exploring Bitcoin through 9 disciplinary perspectives',
    zh: '全面的比特币教育平台，从9个学科视角深入解析比特币'
  }),
  sameAs: [
    'https://github.com/adshao/bitcoinprimer',
    'https://twitter.com/bitcoinprimer'
  ],
  foundingDate: '2024',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    availableLanguage: ['English', 'Chinese']
  }
});

// Course Schema - for learning path
export const getCourseSchema = (lang = 'en') => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: getLocalizedContent(lang, {
    en: 'Bitcoin 10-Week Learning Path',
    zh: '比特币10周学习路径'
  }),
  description: getLocalizedContent(lang, {
    en: 'Systematic Bitcoin learning course covering all aspects of Bitcoin in 10 weeks',
    zh: '系统化的比特币学习课程，通过10周时间深入理解比特币的各个方面'
  }),
  provider: {
    '@type': 'EducationalOrganization',
    name: 'Bitcoin Primer',
    url: 'https://bitcoinprimer.org'
  },
  url: getLocalizedUrl('/learning-path', lang),
  courseMode: 'online',
  isFree: true,
  timeRequired: 'P10W', // 10 weeks in ISO 8601 duration format
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'online',
    courseWorkload: 'P10W'
  },
  educationalLevel: getLocalizedContent(lang, {
    en: 'Beginner to Intermediate',
    zh: '初学者到中级'
  }),
  teaches: [
    getLocalizedContent(lang, { en: 'Bitcoin Fundamentals', zh: '比特币基础' }),
    getLocalizedContent(lang, { en: 'Blockchain Technology', zh: '区块链技术' }),
    getLocalizedContent(lang, { en: 'Cryptocurrency Economics', zh: '加密货币经济学' })
  ]
});

// Article Schema - for article pages
export const getArticleSchema = ({ title, description, publishedDate, modifiedDate, topic, lang = 'en' }) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description: description,
  datePublished: publishedDate || new Date().toISOString(),
  dateModified: modifiedDate || new Date().toISOString(),
  author: {
    '@type': 'Organization',
    name: 'Bitcoin Primer',
    url: 'https://bitcoinprimer.org'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Bitcoin Primer',
    logo: {
      '@type': 'ImageObject',
      url: 'https://bitcoinprimer.org/bitcoin-logo.png'
    }
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': getLocalizedUrl(`/articles/${topic}`, lang)
  },
  image: 'https://bitcoinprimer.org/bitcoin-og-image.png',
  inLanguage: getLocalizedContent(lang, {
    en: 'en-US',
    zh: 'zh-CN'
  })
});

// Educational Content Schema - for discipline pages
export const getEducationalContentSchema = ({ 
  title, 
  description, 
  url, 
  discipline,
  lang = 'en' 
}) => ({
  '@context': 'https://schema.org',
  '@type': 'LearningResource',
  name: title,
  description: description,
  url: url,
  learningResourceType: 'Educational Article',
  educationalLevel: getLocalizedContent(lang, {
    en: 'Beginner',
    zh: '初学者'
  }),
  isAccessibleForFree: true,
  inLanguage: getLocalizedContent(lang, {
    en: 'en-US',
    zh: 'zh-CN'
  }),
  provider: {
    '@type': 'EducationalOrganization',
    name: 'Bitcoin Primer',
    url: 'https://bitcoinprimer.org'
  },
  about: {
    '@type': 'Thing',
    name: 'Bitcoin',
    description: getLocalizedContent(lang, {
      en: `Understanding Bitcoin from ${discipline} perspective`,
      zh: `从${discipline}视角理解比特币`
    })
  },
  teaches: [
    'Bitcoin',
    discipline,
    getLocalizedContent(lang, { en: 'Cryptocurrency', zh: '加密货币' })
  ]
});

// BreadcrumbList Schema - for navigation
export const getBreadcrumbSchema = (breadcrumbs, lang = 'en') => {
  const baseUrl = 'https://bitcoinprimer.org';
  const items = breadcrumbs.map((crumb, index) => {
    let itemUrl;
    if (crumb.url) {
      // Handle home page URL based on language
      if (crumb.url === '/' || crumb.url === '/zh') {
        itemUrl = lang === 'en' ? baseUrl : `${baseUrl}/${lang}`;
      } else {
        // For other URLs, check if they already have language prefix
        const urlHasLangPrefix = crumb.url.startsWith('/zh/') || crumb.url.startsWith(`/${lang}/`);
        if (urlHasLangPrefix || lang === 'en') {
          itemUrl = `${baseUrl}${crumb.url}`;
        } else {
          itemUrl = `${baseUrl}/${lang}${crumb.url}`;
        }
      }
    }
    
    return {
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: itemUrl
    };
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items
  };
};

// FAQ Schema - for frequently asked questions
export const getFAQSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});

// WebSite Schema with search action
export const getWebSiteSchema = (lang = 'en') => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Bitcoin Primer',
  url: 'https://bitcoinprimer.org',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://bitcoinprimer.org/search?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  },
  description: getLocalizedContent(lang, {
    en: 'Comprehensive Bitcoin education platform',
    zh: '全面的比特币教育平台'
  }),
  inLanguage: getLocalizedContent(lang, {
    en: 'en-US',
    zh: 'zh-CN'
  })
});

// Collection Page Schema - for resource pages
export const getCollectionPageSchema = ({ title, description, url, lang = 'en' }) => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: title,
  description: description,
  url: url,
  isPartOf: {
    '@type': 'WebSite',
    name: 'Bitcoin Primer',
    url: 'https://bitcoinprimer.org'
  },
  inLanguage: getLocalizedContent(lang, {
    en: 'en-US',
    zh: 'zh-CN'
  }),
  provider: {
    '@type': 'Organization',
    name: 'Bitcoin Primer'
  }
});