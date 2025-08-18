import { useEffect } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// 支持的语言列表
export const SUPPORTED_LANGUAGES = ['en', 'zh']
export const DEFAULT_LANGUAGE = 'en'

// 从路径中提取语言代码
export function extractLanguageFromPath(pathname) {
  const segments = pathname.split('/').filter(Boolean)
  if (segments.length > 0 && SUPPORTED_LANGUAGES.includes(segments[0])) {
    return segments[0]
  }
  return null
}

// 从路径中移除语言前缀
export function removeLanguageFromPath(pathname) {
  const lang = extractLanguageFromPath(pathname)
  if (lang) {
    const regex = new RegExp(`^/${lang}`)
    return pathname.replace(regex, '') || '/'
  }
  return pathname
}

// 添加语言前缀到路径
export function addLanguageToPath(pathname, language) {
  // 先移除可能存在的语言前缀
  const cleanPath = removeLanguageFromPath(pathname)
  
  // 英语不添加前缀
  if (language === DEFAULT_LANGUAGE) {
    return cleanPath
  }
  
  // 其他语言添加前缀
  return `/${language}${cleanPath}`
}

// 获取当前语言的路径
export function getLocalizedPath(path, language) {
  // 确保路径以 / 开头
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  
  // 移除现有的语言前缀
  const cleanPath = removeLanguageFromPath(normalizedPath)
  
  // 添加新的语言前缀
  return addLanguageToPath(cleanPath, language)
}

// Hook: 从URL同步语言设置
export function useLanguageSync() {
  const location = useLocation()
  const navigate = useNavigate()
  const { i18n } = useTranslation()
  
  useEffect(() => {
    const langFromPath = extractLanguageFromPath(location.pathname)
    
    // 如果URL中有语言代码且与当前语言不同，更新i18n
    if (langFromPath && langFromPath !== i18n.language) {
      i18n.changeLanguage(langFromPath)
    }
    // 如果URL中没有语言代码且当前语言不是英语，重定向到带语言前缀的URL
    else if (!langFromPath && i18n.language !== DEFAULT_LANGUAGE) {
      const newPath = addLanguageToPath(location.pathname, i18n.language)
      navigate(newPath + location.search + location.hash, { replace: true })
    }
  }, [location.pathname])
  
  return { currentLanguage: i18n.language }
}

// Hook: 获取语言感知的导航函数
export function useLocalizedNavigate() {
  const navigate = useNavigate()
  const { i18n } = useTranslation()
  
  return (path, options) => {
    const localizedPath = getLocalizedPath(path, i18n.language)
    navigate(localizedPath, options)
  }
}

// Hook: 获取语言感知的Link组件props
export function useLocalizedLink(to) {
  const { i18n } = useTranslation()
  
  if (typeof to === 'string') {
    return getLocalizedPath(to, i18n.language)
  }
  
  if (typeof to === 'object' && to.pathname) {
    return {
      ...to,
      pathname: getLocalizedPath(to.pathname, i18n.language)
    }
  }
  
  return to
}