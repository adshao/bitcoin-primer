// Discipline content loader
export const getDisciplineContent = async (discipline, language) => {
  try {
    const module = await import(`./locales/${language}/disciplines/${discipline}.json`)
    return module.default
  } catch (error) {
    console.error(`Failed to load ${discipline} content for ${language}:`, error)
    // Fallback to Chinese if English not available
    if (language === 'en') {
      try {
        const fallback = await import(`./locales/zh/disciplines/${discipline}.json`)
        return fallback.default
      } catch (fallbackError) {
        console.error(`Failed to load fallback content:`, fallbackError)
        return null
      }
    }
    return null
  }
}

// Pre-load discipline content
export const loadDisciplineContent = (discipline, language) => {
  const contentMap = {
    'zh': {
      'money': () => import('./locales/zh/disciplines/money.json'),
      'banking': () => import('./locales/zh/disciplines/banking.json'),
      'economics': () => import('./locales/zh/disciplines/economics.json'),
      'computer-science': () => import('./locales/zh/disciplines/computer-science.json'),
      'game-theory': () => import('./locales/zh/disciplines/game-theory.json'),
      'energy': () => import('./locales/zh/disciplines/energy.json'),
      'politics': () => import('./locales/zh/disciplines/politics.json'),
      'philosophy': () => import('./locales/zh/disciplines/philosophy.json'),
      'law': () => import('./locales/zh/disciplines/law.json')
    },
    'en': {
      'money': () => import('./locales/en/disciplines/money.json'),
      'banking': () => import('./locales/en/disciplines/banking.json'),
      'economics': () => import('./locales/en/disciplines/economics.json'),
      'computer-science': () => import('./locales/en/disciplines/computer-science.json'),
      'game-theory': () => import('./locales/en/disciplines/game-theory.json'),
      'energy': () => import('./locales/en/disciplines/energy.json'),
      'politics': () => import('./locales/en/disciplines/politics.json'),
      'philosophy': () => import('./locales/en/disciplines/philosophy.json'),
      'law': () => import('./locales/en/disciplines/law.json')
    }
  }

  const loader = contentMap[language]?.[discipline]
  if (loader) {
    return loader().then(module => module.default)
  }
  
  // Fallback to Chinese if English not available
  if (language === 'en' && contentMap['zh']?.[discipline]) {
    return contentMap['zh'][discipline]().then(module => module.default)
  }
  
  return Promise.resolve(null)
}