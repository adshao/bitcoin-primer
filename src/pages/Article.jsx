import { useParams, Link, useLocation, useNavigate } from 'react-router-dom'
import { useFormattedTranslation } from '../hooks/useFormattedTranslation'
import { useArticle } from '../hooks/useArticles'
import SEO from '../components/SEO'
import './Article.css'

function Article() {
  const { articleSlug } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const { t, i18n } = useFormattedTranslation()
  
  // Extract the discipline from the article slug
  // Path format: /zh/articles/ending-monetary-politicization
  // or: /articles/ending-monetary-politicization
  const pathParts = location.pathname.split('/').filter(Boolean)
  const lang = pathParts[0] === 'zh' ? 'zh' : 'en'
  
  // Map article slugs to disciplines
  const articleToDiscipline = {
    'ending-monetary-politicization': 'money',
    'banking-disintermediation-bitcoin-challenge': 'banking',
    'bitcoin-economics-paradigm-shift': 'economics',
    'byzantine-fault-tolerance-breakthrough': 'computer-science',
    'bitcoin-game-theory-design': 'game-theory',
    'bitcoin-energy-paradigm': 'energy',
    'sovereign-individual-in-digital-age': 'politics',
    'digital-gold-philosophical-revolution': 'philosophy',
    'code-is-law-paradigm-shift': 'law',
    'social-security-ponzi-bitcoin-retirement': 'social'
  }
  
  const disciplineSlug = articleToDiscipline[articleSlug] || 'money'
  
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
      'law': 'law',
      'social': 'social'
    }
    
    const namespace = articleMap[disciplineSlug] || 'money'
    const article = useArticle(namespace)
    
    // Special handling for social security article
    if (disciplineSlug === 'social') {
      const topicTitle = lang === 'zh' ? '社会' : 'Social'
      const topicIcon = '🏛️'
      const topicPath = lang === 'zh' ? '/zh/economics' : '/economics'
      return { article, topicTitle, topicIcon, topicPath }
    }
    
    // Regular discipline articles
    const { t: topicT } = useFormattedTranslation(namespace)
    
    try {
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
        <h1>{t('articlePage.notFound')}</h1>
        <Link to="/">{t('articlePage.backToHome')}</Link>
      </div>
    )
  }
  
  const { article, topicTitle, topicIcon, topicPath } = data
  
  return (
    <div className="article-page">
      <SEO 
        title={article.title}
        description={article.summary}
        keywords={`${topicTitle},Bitcoin,${lang === 'zh' ? '比特币,区块链,加密货币' : 'cryptocurrency,blockchain,crypto'}`}
      />
      {/* Hero Section */}
      <section className="article-hero">
        <div className="article-hero-background">
          <div className="article-grid-pattern"></div>
          <div className="article-gradient-orb"></div>
        </div>
        <div className="article-hero-content">
          <div className="article-breadcrumb">
            <Link to="/" className="breadcrumb-link">{t('articlePage.home')}</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to={topicPath} className="breadcrumb-link">
              {topicIcon} {topicTitle}
            </Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{t('articlePage.deepArticle')}</span>
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
              <span className="tag-label">{t('articlePage.tags')}：</span>
              <span className="tag">{t('articlePage.bitcoin')}</span>
              <span className="tag">{topicTitle}</span>
              <span className="tag">{t('articlePage.deepAnalysis')}</span>
            </div>
            <div className="article-actions">
              <button onClick={() => navigate(-1)} className="back-to-topic">
                ← {t('articlePage.back')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Article