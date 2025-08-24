import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslations from './locales/en/translation.json';
import zhTranslations from './locales/zh/translation.json';
import enLearningPath from './locales/en/learningPath.json';
import zhLearningPath from './locales/zh/learningPath.json';
import enStudyGuide from './locales/en/studyGuide.json';
import zhStudyGuide from './locales/zh/studyGuide.json';
import enResources from './locales/en/resources.json';
import zhResources from './locales/zh/resources.json';

// Import individual discipline files
import enMoney from './locales/en/money.json';
import zhMoney from './locales/zh/money.json';
import enBanking from './locales/en/banking.json';
import zhBanking from './locales/zh/banking.json';
import enEconomics from './locales/en/economics.json';
import zhEconomics from './locales/zh/economics.json';
import enComputerScience from './locales/en/computerScience.json';
import zhComputerScience from './locales/zh/computerScience.json';
import enGameTheory from './locales/en/gameTheory.json';
import zhGameTheory from './locales/zh/gameTheory.json';
import enEnergy from './locales/en/energy.json';
import zhEnergy from './locales/zh/energy.json';
import enPolitics from './locales/en/politics.json';
import zhPolitics from './locales/zh/politics.json';
import enPhilosophy from './locales/en/philosophy.json';
import zhPhilosophy from './locales/zh/philosophy.json';
import enLaw from './locales/en/law.json';
import zhLaw from './locales/zh/law.json';
import enBuyBitcoin from './locales/en/buyBitcoin.json';
import zhBuyBitcoin from './locales/zh/buyBitcoin.json';
import enAbout from './locales/en/about.json';
import zhAbout from './locales/zh/about.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
        learningPath: enLearningPath,
        studyGuide: enStudyGuide,
        resources: enResources,
        // Individual discipline namespaces
        money: enMoney,
        banking: enBanking,
        economics: enEconomics,
        computerScience: enComputerScience,
        gameTheory: enGameTheory,
        energy: enEnergy,
        politics: enPolitics,
        philosophy: enPhilosophy,
        law: enLaw,
        buyBitcoin: enBuyBitcoin,
        about: enAbout
      },
      zh: {
        translation: zhTranslations,
        learningPath: zhLearningPath,
        studyGuide: zhStudyGuide,
        resources: zhResources,
        // Individual discipline namespaces
        money: zhMoney,
        banking: zhBanking,
        economics: zhEconomics,
        computerScience: zhComputerScience,
        gameTheory: zhGameTheory,
        energy: zhEnergy,
        politics: zhPolitics,
        philosophy: zhPhilosophy,
        law: zhLaw,
        buyBitcoin: zhBuyBitcoin,
        about: zhAbout
      }
      // Easy to add more languages:
      // es: { translation: esTranslations },
      // fr: { translation: frTranslations },
      // de: { translation: deTranslations },
      // ja: { translation: jaTranslations },
      // ko: { translation: koTranslations }
    },
    fallbackLng: 'en', // English as default language
    // Remove forced initial language to allow detection
    debug: false,
    interpolation: {
      escapeValue: false // React already escapes values
    },
    // Add cache busting for development
    load: 'currentOnly',
    cleanCode: true,
    detection: {
      // Order of detection methods
      // First check localStorage (if user has selected), then browser language
      order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      
      // Cache user language preference
      caches: ['localStorage'],
      
      // Key name for localStorage
      lookupLocalStorage: 'i18nextLng',
      
      // Options for browser language detection
      lookupFromNavigator: true,
      
      // Check if detected language is in our supported list
      checkWhitelist: true,
      
      // Convert zh-CN, zh-TW etc to zh
      convertDetectedLanguage: (lng) => {
        if (!lng) return 'en';
        
        const primaryLang = lng.split('-')[0].toLowerCase();
        
        // Map Chinese variants to zh
        if (primaryLang === 'zh' || lng.includes('chinese')) {
          return 'zh';
        }
        
        // Only return supported languages, otherwise fallback to English
        if (['en', 'zh'].includes(primaryLang)) {
          return primaryLang;
        }
        
        return 'en'; // Default to English for unsupported languages
      }
    },
    // Support for multiple language variants
    load: 'languageOnly', // e.g., 'en-US' becomes 'en'
    supportedLngs: ['en', 'zh'], // List will grow as we add languages
    nonExplicitSupportedLngs: true
  });

export default i18n;