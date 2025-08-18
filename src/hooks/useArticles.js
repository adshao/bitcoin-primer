import { useMemo } from 'react'
import { useFormattedTranslation } from './useFormattedTranslation'
import zhArticles from '../i18n/locales/zh/articles'

export function useArticles() {
  const { i18n } = useFormattedTranslation()
  
  return useMemo(() => {
    // 目前只支持中文文章
    if (i18n.language === 'zh') {
      return zhArticles
    }
    return {}
  }, [i18n.language])
}

export function useArticle(disciplineKey) {
  const articles = useArticles()
  return articles[disciplineKey] || null
}