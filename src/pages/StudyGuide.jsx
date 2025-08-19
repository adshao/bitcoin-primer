import LocalizedLink from '../components/LocalizedLink'
import { useFormattedTranslation } from '../hooks/useFormattedTranslation'
import SEO from '../components/SEO'
import { useSEO } from '../hooks/useSEO'
import './StudyGuide.css'

function StudyGuide() {
  const { t } = useFormattedTranslation(['studyGuide', 'translation'])
  const seoData = useSEO('study-guide')
  
  const learningPrinciples = t('studyGuide:principles', { returnObjects: true })
  const learningPaths = t('studyGuide:paths', { returnObjects: true })
  const studyMethods = t('studyGuide:methods', { returnObjects: true })
  const exerciseLevels = t('studyGuide:exercises.levels', { returnObjects: true })
  const communityEngagement = t('studyGuide:community', { returnObjects: true })
  const resourcesData = t('studyGuide:resources', { returnObjects: true })

  // Icons for each section (not translated)
  const principleIcons = ['💡', '🔬', '🔍', '🤔']
  const pathIcons = ['💻', '📊', '🌍']
  const methodIcons = ['📚', '⚖️', '❓']
  const levelIcons = ['🌱', '🌿', '🌳']
  const communityIcons = ['👥', '⚙️', '🎓']
  
  // Platform links (constant across languages)
  const platformLinks = {
    'Bitcoin Talk': 'https://bitcointalk.org',
    'Reddit r/Bitcoin': 'https://reddit.com/r/bitcoin',
    'Bitcoin Stack Exchange': 'https://bitcoin.stackexchange.com',
    'Bitcoin Core GitHub': 'https://github.com/bitcoin/bitcoin',
    'Bitcoin Optech': 'https://bitcoinops.org',
    'Bitcoin Dev Mailing List': 'https://lists.linuxfoundation.org/mailman/listinfo/bitcoin-dev',
    'Bitcoin.org': 'https://bitcoin.org',
    'Lopp.net': 'https://lopp.net/bitcoin.html',
    '21 Lessons': 'https://21lessons.com'
  }

  // Define path mappings for each learning path and step
  const pathMappings = {
    0: { // Technical route
      0: '/computer-science', // Basics - cryptography
      1: '/computer-science', // Core - blockchain structure
      2: '/computer-science', // Advanced - source code
      3: null // Practice - no specific page
    },
    1: { // Economic route
      0: '/economics', // Basics - monetary theory
      1: '/money', // Core - scarcity, store of value
      2: '/banking', // Advanced - macroeconomic impacts
      3: null // Practice - no specific page
    },
    2: { // Social route
      0: '/philosophy', // Basics - decentralization ideology
      1: '/politics', // Core - trust mechanisms, power structures
      2: '/law', // Advanced - legal frameworks
      3: null // Practice - no specific page
    }
  }

  return (
    <div className="study-guide">
      <SEO {...seoData} />
      <section className="guide-hero">
        <div className="guide-hero-background">
          <div className="guide-grid-pattern"></div>
          <div className="guide-gradient-orb"></div>
        </div>
        <div className="guide-hero-content">
          <h1 className="guide-title">{t('studyGuide:title')}</h1>
          <p className="guide-subtitle">
            {t('studyGuide:subtitle')}
          </p>
        </div>
      </section>

      <section className="learning-principles">
        <div className="principles-container">
          <h2 className="section-title">{t('studyGuide:sections.principles')}</h2>
          <div className="principles-grid">
            {learningPrinciples.map((principle, index) => (
              <div key={index} className="principle-card">
                <div className="principle-header">
                  <span className="principle-icon">{principleIcons[index]}</span>
                  <h3 className="principle-title">{principle.title}</h3>
                </div>
                <p className="principle-description">{principle.description}</p>
                <ul className="principle-practices">
                  {principle.practices.map((practice, i) => (
                    <li key={i}>{practice}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="learning-paths">
        <div className="paths-container">
          <h2 className="section-title">{t('studyGuide:sections.paths')}</h2>
          <div className="paths-grid">
            {learningPaths.map((path, index) => (
              <div key={index} className="path-card">
                <div className="path-header">
                  <span className="path-icon">{pathIcons[index]}</span>
                  <h3 className="path-type">{path.type}</h3>
                </div>
                <p className="path-suitable">{t('studyGuide:pathSuitable')} {path.suitable}</p>
                <p className="path-focus">{path.focus}</p>
                
                <div className="path-steps">
                  <h4>{path.stepsLabel}</h4>
                  <div className="steps-list">
                    {path.steps.map((step, stepIndex) => {
                      const stepPath = pathMappings[index]?.[stepIndex]
                      return (
                        <div key={stepIndex} className="step-item">
                          <span className="step-phase">{step.phase}</span>
                          {stepPath ? (
                            <LocalizedLink to={stepPath} className="step-content-link">
                              {step.content}
                            </LocalizedLink>
                          ) : (
                            <span className="step-content">{step.content}</span>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
                
                <div className="path-resources">
                  <h4>{path.resourcesLabel}</h4>
                  <ul>
                    {path.resourceKeys?.map((resourceKey, i) => {
                      const resource = resourcesData[resourceKey]
                      if (!resource) return null
                      return (
                        <li key={i}>
                          {resource.url ? (
                            <a href={resource.url} target="_blank" rel="noopener noreferrer" className="resource-link">
                              {resource.name}
                            </a>
                          ) : (
                            resource.name
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="study-methods">
        <div className="methods-container">
          <h2 className="section-title">{t('studyGuide:sections.methods')}</h2>
          <div className="methods-grid">
            {studyMethods.map((method, index) => (
              <div key={index} className="method-card">
                <div className="method-header">
                  <span className="method-icon">{methodIcons[index]}</span>
                  <h3 className="method-name">{method.name}</h3>
                </div>
                <p className="method-description">{method.description}</p>
                
                <div className="method-process">
                  <h4>{method.processLabel}</h4>
                  <ol>
                    {method.process.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
                
                <div className="method-example">
                  <strong>{method.exampleLabel}</strong>
                  <p>{method.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="practical-exercises">
        <div className="exercises-container">
          <h2 className="section-title">{t('studyGuide:sections.exercises')}</h2>
          {exerciseLevels.map((level, index) => (
            <div key={index} className="exercise-level">
              <div className="level-header">
                <span className="level-icon">{levelIcons[index]}</span>
                <h3 className="level-name">{level.level}</h3>
              </div>
              <div className="exercises-grid">
                {level.exercises.map((exercise, i) => (
                  <div key={i} className="exercise-card">
                    <h4 className="exercise-title">{exercise.title}</h4>
                    <p className="exercise-description">{exercise.description}</p>
                    <div className="exercise-tools">
                      <strong>{exercise.toolsLabel}</strong>
                      <span>{exercise.tools.join(', ')}</span>
                    </div>
                    <div className="exercise-learning">
                      <strong>{exercise.learningLabel}</strong>
                      <span>{exercise.learning}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="community-engagement">
        <div className="engagement-container">
          <h2 className="section-title">{t('studyGuide:sections.community')}</h2>
          <div className="community-grid">
            {communityEngagement.map((community, index) => (
              <div key={index} className="community-card">
                <div className="community-header">
                  <span className="community-icon">{communityIcons[index]}</span>
                  <h3 className="community-type">{community.type}</h3>
                </div>
                <div className="platforms-list">
                  {community.platforms.map((platform, i) => (
                    <div key={i} className="platform-item">
                      <h4>{platform.name}</h4>
                      <p>{platform.description}</p>
                      <a href={platformLinks[platform.name]} target="_blank" rel="noopener noreferrer">
                        {t('studyGuide:visitLink')}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="guide-summary">
        <div className="summary-container">
          <h2 className="summary-title">{t('studyGuide:sections.summary')}</h2>
          <div className="summary-content">
            <p>{t('studyGuide:summary.content')}</p>
            <div className="summary-actions">
              <a href="/learning-path" className="btn-primary">
                {t('studyGuide:summary.viewPath')}
                <span className="btn-arrow">→</span>
              </a>
              <a href="/resources" className="btn-secondary">
                {t('studyGuide:summary.browseResources')}
                <span className="btn-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StudyGuide