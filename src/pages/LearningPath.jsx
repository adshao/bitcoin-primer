import { Link } from 'react-router-dom'
import { useFormattedTranslation } from '../hooks/useFormattedTranslation'
import './LearningPath.css'

function LearningPath() {
  const { t, i18n } = useFormattedTranslation(['learningPath', 'translation'])
  
  // Build learning stages from translations
  const learningStages = [1, 2, 3].map(stageNum => ({
    stage: stageNum,
    title: t(`learningPath:stages.${stageNum}.title`),
    duration: t(`learningPath:stages.${stageNum}.duration`),
    description: t(`learningPath:stages.${stageNum}.description`),
    modules: Object.keys(t(`learningPath:stages.${stageNum}.modules`, { returnObjects: true })).map(moduleKey => {
      const modulePath = `learningPath:stages.${stageNum}.modules.${moduleKey}`
      const paths = {
        money: '/money',
        banking: '/banking',
        economics: '/economics',
        computerScience: '/computer-science',
        gameTheory: '/game-theory',
        energy: '/energy',
        politics: '/politics',
        philosophy: '/philosophy',
        law: '/law'
      }
      const icons = {
        money: '💰',
        banking: '🏦',
        economics: '📊',
        computerScience: '💻',
        gameTheory: '🎯',
        energy: '⚡',
        politics: '🏛️',
        philosophy: '🔮',
        law: '⚖️'
      }
      return {
        topic: t(`${modulePath}.topic`),
        path: paths[moduleKey],
        icon: icons[moduleKey],
        focus: t(`${modulePath}.focus`),
        keyPoints: t(`${modulePath}.keyPoints`, { returnObjects: true }),
        exercises: t(`${modulePath}.exercises`, { returnObjects: true }),
        estimatedTime: t(`${modulePath}.estimatedTime`)
      }
    })
  }))

  const milestones = t('learningPath:milestones', { returnObjects: true })

  return (
    <div className="learning-path">
      <section className="path-hero">
        <div className="path-hero-content">
          <h1 className="path-title">{t('learningPath:title')}</h1>
          <p className="path-subtitle">
            {t('learningPath:subtitle')}
          </p>
        </div>
      </section>

      <section className="path-stages">
        <div className="stages-container">
          <h2 className="stages-title">{t('learningPath:stagesTitle')}</h2>
          
          {learningStages.map((stage, index) => (
            <div key={index} className="stage-section">
              <div className="stage-header">
                <div className="stage-number">{t('learningPath:stage')} {stage.stage}</div>
                <div className="stage-info">
                  <h3 className="stage-title">{stage.title}</h3>
                  <p className="stage-duration">{t('learningPath:suggestedDuration')}: {stage.duration}</p>
                </div>
              </div>
              <p className="stage-description">{stage.description}</p>
              
              <div className="modules-grid">
                {stage.modules.map((module, idx) => (
                  <div key={idx} className="module-card">
                    <div className="module-header">
                      <span className="module-icon">{module.icon}</span>
                      <h4 className="module-title">{module.topic}</h4>
                      <span className="module-time">{module.estimatedTime}</span>
                    </div>
                    
                    <p className="module-focus">{module.focus}</p>
                    
                    <div className="module-content">
                      <h5>{t('learningPath:keyPointsLabel')}</h5>
                      <ul className="key-points">
                        {module.keyPoints.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                      
                      <h5>{t('learningPath:exercisesLabel')}</h5>
                      <ul className="exercises">
                        {module.exercises.map((exercise, i) => (
                          <li key={i}>{exercise}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link to={module.path} className="module-link">
                      {t('learningPath:startLearning')}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="path-milestones">
        <div className="milestones-container">
          <h2 className="milestones-title">{t('learningPath:milestonesTitle')}</h2>
          <div className="milestones-timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="milestone-item">
                <div className="milestone-marker">
                  <span className="marker-number">{index + 1}</span>
                </div>
                <div className="milestone-content">
                  <span className="milestone-week">{milestone.week}</span>
                  <h4 className="milestone-achievement">{milestone.achievement}</h4>
                  <p className="milestone-checkpoint">
                    <span className="checkpoint-icon">✓</span>
                    {milestone.checkpoint}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="path-tips">
        <div className="tips-container">
          <h2 className="tips-title">{t('learningPath:tipsTitle')}</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <span className="tip-icon">🎯</span>
              <h4>{t('learningPath:tips.stepByStep.title')}</h4>
              <p>{t('learningPath:tips.stepByStep.description')}</p>
            </div>
            <div className="tip-card">
              <span className="tip-icon">📝</span>
              <h4>{t('learningPath:tips.takeNotes.title')}</h4>
              <p>{t('learningPath:tips.takeNotes.description')}</p>
            </div>
            <div className="tip-card">
              <span className="tip-icon">🤝</span>
              <h4>{t('learningPath:tips.joinCommunity.title')}</h4>
              <p>{t('learningPath:tips.joinCommunity.description')}</p>
            </div>
            <div className="tip-card">
              <span className="tip-icon">🔄</span>
              <h4>{t('learningPath:tips.practiceVerify.title')}</h4>
              <p>{t('learningPath:tips.practiceVerify.description')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="path-navigation">
        <div className="nav-container">
          <Link to="/study-guide" className="nav-card">
            <span className="nav-icon">📖</span>
            <h3>{t('learningPath:navigation.studyGuide.title')}</h3>
            <p>{t('learningPath:navigation.studyGuide.description')}</p>
            <span className="nav-arrow">→</span>
          </Link>
          <Link to="/resources" className="nav-card">
            <span className="nav-icon">📚</span>
            <h3>{t('learningPath:navigation.resources.title')}</h3>
            <p>{t('learningPath:navigation.resources.description')}</p>
            <span className="nav-arrow">→</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default LearningPath