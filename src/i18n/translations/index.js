// Centralized translation management for easy multi-language support

// Supported languages list for future expansion
export const supportedLanguages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' }
  // Easy to add more languages here:
  // { code: 'es', name: 'Spanish', nativeName: 'Español' },
  // { code: 'fr', name: 'French', nativeName: 'Français' },
  // { code: 'de', name: 'German', nativeName: 'Deutsch' },
  // { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  // { code: 'ko', name: 'Korean', nativeName: '한국어' }
]

// Helper function to get discipline content
// This will be dynamically loaded to avoid import issues
export const getDisciplineContent = () => {
  // For now, return empty object - will be populated from actual page data
  return {}
}