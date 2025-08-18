import { useMemo } from 'react'
import { useFormattedTranslation } from './useFormattedTranslation'
import zhArticles from '../i18n/locales/zh/articles'
import enArticles from '../i18n/locales/en/articles'

export function useArticles() {
  const { i18n } = useFormattedTranslation()
  
  return useMemo(() => {
    if (i18n.language === 'zh') {
      return zhArticles
    } else if (i18n.language === 'en') {
      return enArticles
    }
    return {}
  }, [i18n.language])
}

export function useArticle(disciplineKey) {
  const articles = useArticles()
  return articles[disciplineKey] || null
}