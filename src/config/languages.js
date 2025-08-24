// Language configuration for the site
// This will be used by SEO, routing, and i18n

export const languages = {
  en: {
    code: 'en',
    name: 'English',
    locale: 'en_US',
    path: '', // Empty for default language
    isDefault: true
  },
  zh: {
    code: 'zh',
    name: '中文',
    locale: 'zh_CN',
    path: '/zh',
    isDefault: false
  },
  // Future languages can be added here
  // ko: {
  //   code: 'ko',
  //   name: '한국어',
  //   locale: 'ko_KR',
  //   path: '/ko',
  //   isDefault: false
  // },
  // ja: {
  //   code: 'ja',
  //   name: '日本語',
  //   locale: 'ja_JP',
  //   path: '/ja',
  //   isDefault: false
  // },
  // es: {
  //   code: 'es',
  //   name: 'Español',
  //   locale: 'es_ES',
  //   path: '/es',
  //   isDefault: false
  // }
};

// Get all supported language codes
export const supportedLanguages = Object.keys(languages);

// Get the default language
export const defaultLanguage = Object.values(languages).find(lang => lang.isDefault)?.code || 'en';

// Get language config by code
export const getLanguageConfig = (code) => languages[code];

// Get all language paths for routing
export const getLanguagePaths = () => {
  return Object.values(languages)
    .filter(lang => !lang.isDefault)
    .map(lang => lang.path);
};

// Generate alternate URLs for a given path
export const generateAlternateUrls = (currentPath, baseUrl = 'https://bitcoinprimer.org') => {
  const alternateUrls = {};
  
  // Remove any language prefix from the current path
  let basePath = currentPath;
  for (const lang of Object.values(languages)) {
    if (!lang.isDefault && lang.path && currentPath.startsWith(lang.path)) {
      basePath = currentPath.substring(lang.path.length) || '/';
      break;
    }
  }
  
  // Generate URLs for each language
  for (const [code, config] of Object.entries(languages)) {
    if (config.isDefault) {
      alternateUrls[code] = `${baseUrl}${basePath}`;
    } else {
      alternateUrls[code] = `${baseUrl}${config.path}${basePath}`;
    }
  }
  
  // x-default should be the default language URL
  alternateUrls['x-default'] = alternateUrls[defaultLanguage];
  
  return alternateUrls;
};

// Get the current language from path
export const getLanguageFromPath = (pathname) => {
  for (const [code, config] of Object.entries(languages)) {
    if (!config.isDefault && config.path && pathname.startsWith(config.path)) {
      return code;
    }
  }
  return defaultLanguage;
};