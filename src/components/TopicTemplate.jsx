import { useFormattedTranslation } from '../hooks/useFormattedTranslation'
import { useLocation, Link } from 'react-router-dom'
import SEO from './SEO'
import { useSEO } from '../hooks/useSEO'
import './TopicTemplate.css'

function TopicTemplate({ 
  icon, 
  title, 
  subtitle, 
  introduction, 
  sections, 
  deepArticle,
  keyInsights, 
  resources, 
  reflectionQuestions 
}) {
  const { t, i18n } = useFormattedTranslation()
  const location = useLocation()
  const pathParts = location.pathname.split('/').filter(Boolean)
  const pageName = pathParts[pathParts.length - 1] // Get last part of path
  const seoData = useSEO(pageName)
  
  return (
    <div className="topic-template">
      <SEO {...seoData} />
      {/* Hero Section */}
      <section className="topic-hero">
        <div className="topic-hero-background">
          <div className="topic-grid-pattern"></div>
          <div className="topic-gradient-orb"></div>
        </div>
        <div className="topic-hero-content">
          <div className="topic-icon-wrapper">
            <span className="topic-icon">{icon}</span>
          </div>
          <h1 className="topic-title">{title}</h1>
          <p className="topic-subtitle">{subtitle}</p>
          <p className="topic-introduction">{introduction}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="topic-main">
        <div className="topic-container">
          <div className="topic-content-grid">
            {/* Left Column - Main Content */}
            <div className="topic-content">
              {sections.map((section, index) => (
                <div key={index} className="content-section">
                  <h2 className="section-title">
                    <span className="section-number">{String(index + 1).padStart(2, '0')}</span>
                    {section.title}
                  </h2>
                  {section.content.map((subsection, i) => (
                    <div key={i} className="subsection">
                      <h3 className="subsection-title">{subsection.subtitle}</h3>
                      <ul className="content-list">
                        {subsection.points.map((point, j) => (
                          <li key={j} className="content-item">
                            <span className="item-bullet"></span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Right Column - Sidebar */}
            <aside className="topic-sidebar">
              {/* Deep Article Card */}
              {deepArticle && (
                <div className="sidebar-card article-card">
                  <h3 className="card-title">
                    <span className="card-icon">📖</span>
                    {t('template.deepArticle')}
                  </h3>
                  <div className="article-preview">
                    <h4 className="article-title">{deepArticle.title}</h4>
                    <p>{deepArticle.summary}</p>
                    <Link 
                      to={`/${i18n.language}/${pageName}/articles/${deepArticle.urlSlug || 'article'}`} 
                      className="article-read-more"
                    >
                      {t('template.readFullArticle')} →
                    </Link>
                  </div>
                </div>
              )}
              
              {/* Key Insights Card */}
              <div className="sidebar-card insights-card">
                <h3 className="card-title">
                  <span className="card-icon">💡</span>
                  {t('template.keyInsights')}
                </h3>
                <div className="insights-content">
                  {keyInsights.map((insight, index) => (
                    <div key={index} className="insight-item">
                      <span className="insight-index">{index + 1}</span>
                      <p className="insight-text">{insight}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resources Card */}
              <div className="sidebar-card resources-card">
                <h3 className="card-title">
                  <span className="card-icon">📚</span>
                  {t('template.resources')}
                </h3>
                <div className="resources-content">
                  {resources.books && (
                    <div className="resource-section">
                      <h4 className="resource-label">{t('template.books')}</h4>
                      <ul className="resource-list">
                        {resources.books.map((book, index) => (
                          <li key={index} className="resource-item">
                            <strong>{book.title}</strong>
                            {book.author && <span className="resource-author"> - {book.author}</span>}
                            {book.description && <p className="resource-desc">{book.description}</p>}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {resources.papers && (
                    <div className="resource-section">
                      <h4 className="resource-label">{t('template.papers')}</h4>
                      <ul className="resource-list">
                        {resources.papers.map((paper, index) => (
                          <li key={index} className="resource-item">
                            <a href={paper.link} target="_blank" rel="noopener noreferrer">
                              {paper.title}
                            </a>
                            {paper.author && <span className="resource-author"> - {paper.author}</span>}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {resources.websites && (
                    <div className="resource-section">
                      <h4 className="resource-label">{t('template.websites')}</h4>
                      <ul className="resource-list">
                        {resources.websites.map((site, index) => (
                          <li key={index} className="resource-item">
                            <a href={site.link} target="_blank" rel="noopener noreferrer">
                              {site.title}
                            </a>
                            {site.description && <p className="resource-desc">{site.description}</p>}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Reflection Questions Card */}
              <div className="sidebar-card reflection-card">
                <h3 className="card-title">
                  <span className="card-icon">🤔</span>
                  {t('template.reflection')}
                </h3>
                <div className="reflection-content">
                  {reflectionQuestions.map((question, index) => (
                    <p key={index} className="reflection-question">
                      {question}
                    </p>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TopicTemplate