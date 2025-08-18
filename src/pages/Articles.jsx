import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormattedTranslation } from '../hooks/useFormattedTranslation'
import { useArticles } from '../hooks/useArticles'
import SEO from '../components/SEO'
import { useSEO } from '../hooks/useSEO'
import './Articles.css'

function Articles() {
  const { t, i18n } = useFormattedTranslation()
  const seoData = useSEO('articles')
  const articlesData = useArticles()
  const [currentPage, setCurrentPage] = useState(1)
  const articlesPerPage = 9
  
  // 获取所有文章数据
  const getAllArticles = () => {
    const articles = []
    const disciplines = [
      { key: 'money', icon: '💰', path: '/money' },
      { key: 'banking', icon: '🏦', path: '/banking' },
      { key: 'economics', icon: '📊', path: '/economics' },
      { key: 'computerScience', icon: '💻', path: '/computer-science' },
      { key: 'gameTheory', icon: '🎯', path: '/game-theory' },
      { key: 'energy', icon: '⚡', path: '/energy' },
      { key: 'politics', icon: '🏛️', path: '/politics' },
      { key: 'philosophy', icon: '🔮', path: '/philosophy' },
      { key: 'law', icon: '⚖️', path: '/law' }
    ]
    
    disciplines.forEach(discipline => {
      try {
        const { t: disciplineT } = useFormattedTranslation(discipline.key)
        const article = articlesData[discipline.key]
        const disciplineTitle = disciplineT('title')
        
        if (article && article.title) {
          articles.push({
            ...article,
            discipline: disciplineTitle,
            disciplineIcon: discipline.icon,
            disciplinePath: discipline.path,
            articlePath: `/articles/${article.urlSlug || 'article'}`
          })
        }
      } catch (error) {
        // 该学科暂无文章
      }
    })
    
    return articles
  }
  
  const allArticles = getAllArticles()
  
  // 计算分页
  const indexOfLastArticle = currentPage * articlesPerPage
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
  const currentArticles = allArticles.slice(indexOfFirstArticle, indexOfLastArticle)
  const totalPages = Math.ceil(allArticles.length / articlesPerPage)
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  
  return (
    <div className="articles-page">
      <SEO {...seoData} />
      
      {/* Hero Section */}
      <section className="articles-hero">
        <div className="articles-hero-background">
          <div className="articles-grid-pattern"></div>
          <div className="articles-gradient-orb"></div>
        </div>
        <div className="articles-hero-content">
          <h1 className="articles-title">{t('nav.deepArticles')}</h1>
          <p className="articles-subtitle">
            {t('articlesPage.subtitle')}
          </p>
          <div className="articles-stats">
            <span className="stat-item">
              <span className="stat-number">{allArticles.length}</span>
              <span className="stat-label">{t('articlesPage.articlesCount')}</span>
            </span>
            <span className="stat-divider">•</span>
            <span className="stat-item">
              <span className="stat-number">9</span>
              <span className="stat-label">{t('articlesPage.disciplinesCount')}</span>
            </span>
          </div>
        </div>
      </section>
      
      {/* Articles Grid */}
      <section className="articles-main">
        <div className="articles-container">
          {currentArticles.length > 0 ? (
            <>
              <div className="articles-grid">
                {currentArticles.map((article, index) => (
                  <article key={index} className="article-card">
                    <div className="article-card-header">
                      <Link 
                        to={`${i18n.language === 'en' ? '' : '/' + i18n.language}${article.disciplinePath}`}
                        className="article-discipline-link"
                      >
                        <span className="article-discipline-icon">{article.disciplineIcon}</span>
                        <span className="article-discipline-name">{article.discipline}</span>
                      </Link>
                      {article.readTime && (
                        <span className="article-read-time">{article.readTime}</span>
                      )}
                    </div>
                    
                    <div className="article-card-body">
                      <h2 className="article-card-title">{article.title}</h2>
                      <p className="article-card-summary">{article.summary}</p>
                    </div>
                    
                    <div className="article-card-footer">
                      <Link 
                        to={`${i18n.language === 'en' ? '' : '/' + i18n.language}/articles/${article.urlSlug || 'article'}`}
                        className="article-read-more"
                      >
                        {t('template.readFullArticle')} →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="pagination">
                  <button 
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="pagination-btn pagination-prev"
                  >
                    ← {t('articlesPage.pagination.previous')}
                  </button>
                  
                  <div className="pagination-numbers">
                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        className={`pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="pagination-btn pagination-next"
                  >
                    {t('articlesPage.pagination.next')} →
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="no-articles">
              <p className="no-articles-text">{t('articlesPage.noArticles')}</p>
              <Link to="/" className="no-articles-link">
                {t('articlesPage.backToHome')}
              </Link>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="articles-cta">
        <div className="cta-container">
          <h2 className="cta-title">{t('articlesPage.cta.title')}</h2>
          <p className="cta-subtitle">
            {t('articlesPage.cta.subtitle')}
          </p>
          <div className="cta-buttons">
            <Link to={`${i18n.language === 'en' ? '' : '/' + i18n.language}/learning-path`} className="cta-btn cta-primary">
              {t('articlesPage.cta.viewLearningPath')}
              <span className="btn-arrow">→</span>
            </Link>
            <Link to={`${i18n.language === 'en' ? '' : '/' + i18n.language}/resources`} className="cta-btn cta-secondary">
              {t('articlesPage.cta.browseResources')}
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Articles