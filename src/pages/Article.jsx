import { useParams, Link, useLocation } from 'react-router-dom'
import { useFormattedTranslation } from '../hooks/useFormattedTranslation'
import './Article.css'

function Article() {
  const { articleSlug } = useParams()
  const location = useLocation()
  const { t, i18n } = useFormattedTranslation()
  
  // Extract the discipline from the path
  // Path format: /zh/money/articles/ending-monetary-politicization
  // or: /money/articles/ending-monetary-politicization
  const pathParts = location.pathname.split('/').filter(Boolean)
  const lang = pathParts[0] === 'zh' ? 'zh' : 'en'
  const disciplineSlug = pathParts[lang === 'zh' ? 1 : 0]
  
  // 根据 discipline 获取对应的文章数据
  const getArticleData = () => {
    const articleMap = {
      'money': 'money',
      'banking': 'banking',
      'economics': 'economics',
      'computer-science': 'computerScience',
      'game-theory': 'gameTheory',
      'energy': 'energy',
      'politics': 'politics',
      'philosophy': 'philosophy',
      'law': 'law'
    }
    
    const namespace = articleMap[disciplineSlug] || 'money'
    const { t: topicT } = useFormattedTranslation(namespace)
    
    try {
      const article = topicT('deepArticle', { returnObjects: true })
      const topicTitle = topicT('title')
      const topicIcon = topicT('icon')
      const topicPath = lang === 'zh' ? `/zh/${disciplineSlug}` : `/${disciplineSlug}`
      return { article, topicTitle, topicIcon, topicPath }
    } catch {
      return null
    }
  }
  
  const data = getArticleData()
  
  if (!data || !data.article) {
    return (
      <div className="article-error">
        <h1>文章未找到</h1>
        <Link to="/">返回首页</Link>
      </div>
    )
  }
  
  const { article, topicTitle, topicIcon, topicPath } = data
  
  return (
    <div className="article-page">
      {/* Hero Section */}
      <section className="article-hero">
        <div className="article-hero-background">
          <div className="article-grid-pattern"></div>
          <div className="article-gradient-orb"></div>
        </div>
        <div className="article-hero-content">
          <div className="article-breadcrumb">
            <Link to="/" className="breadcrumb-link">首页</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to={topicPath} className="breadcrumb-link">
              {topicIcon} {topicTitle}
            </Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">深度文章</span>
          </div>
          <h1 className="article-hero-title">{article.title}</h1>
          {article.readTime && (
            <div className="article-meta">
              <span className="article-read-time">{article.readTime}</span>
            </div>
          )}
        </div>
      </section>
      
      {/* Main Content */}
      <section className="article-main">
        <div className="article-container">
          {/* Article Summary */}
          <div className="article-lead">
            <p>{article.summary}</p>
          </div>
          
          {/* Article Body */}
          <div className="article-body">
            {article.fullContent ? (
              article.fullContent.map((section, index) => (
                <div key={index} className="article-section">
                  {section.heading && (
                    <h2 className="section-heading">{section.heading}</h2>
                  )}
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="article-paragraph">{paragraph}</p>
                  ))}
                  {section.quote && (
                    <blockquote className="article-quote">
                      <p>{section.quote.text}</p>
                      {section.quote.author && (
                        <cite>— {section.quote.author}</cite>
                      )}
                    </blockquote>
                  )}
                  {section.points && (
                    <ul className="article-points">
                      {section.points.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))
            ) : (
              article.content.map((paragraph, index) => (
                <p key={index} className="article-paragraph">{paragraph}</p>
              ))
            )}
          </div>
          
          {/* Key Takeaways */}
          {article.keyTakeaways && (
            <div className="article-takeaways-section">
              <h2 className="takeaways-heading">{t('template.keyTakeaways')}</h2>
              <div className="takeaways-box">
                <ul className="takeaways-list">
                  {article.keyTakeaways.map((takeaway, index) => (
                    <li key={index} className="takeaway-item">
                      <span className="takeaway-number">{index + 1}</span>
                      <span className="takeaway-text">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          
          {/* Article Footer */}
          <div className="article-footer">
            <div className="article-tags">
              <span className="tag-label">标签：</span>
              <span className="tag">比特币</span>
              <span className="tag">{topicTitle}</span>
              <span className="tag">深度分析</span>
            </div>
            <div className="article-actions">
              <Link to={topicPath} className="back-to-topic">
                ← 返回
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Article