import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { loadDisciplineContent } from '../i18n/disciplineLoader'

export function useDisciplineContent(discipline) {
  const { i18n } = useTranslation()
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    loadDisciplineContent(discipline, i18n.language)
      .then(data => {
        setContent(data)
        setLoading(false)
      })
      .catch(error => {
        console.error(`Failed to load ${discipline} content:`, error)
        setLoading(false)
      })
  }, [discipline, i18n.language])

  return { content, loading }
}