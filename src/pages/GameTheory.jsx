import { useFormattedTranslation } from '../hooks/useFormattedTranslation'
import { useArticle } from '../hooks/useArticles'
import TopicTemplate from '../components/TopicTemplate'

function GameTheory() {
  const { t } = useFormattedTranslation('gameTheory')
  const deepArticle = useArticle('gameTheory')
  
  const data = {
    icon: t('icon'),
    title: t('title'),
    subtitle: t('subtitle'),
    introduction: t('introduction'),
    deepArticle: deepArticle,
    sections: t('sections', { returnObjects: true }),
    keyInsights: t('keyInsights', { returnObjects: true }),
    resources: t('resources', { returnObjects: true }),
    reflectionQuestions: t('reflectionQuestions', { returnObjects: true })
  }
  
  return (
    <TopicTemplate
      icon={data.icon}
      title={data.title}
      subtitle={data.subtitle}
      introduction={data.introduction}
      deepArticle={data.deepArticle}
      sections={data.sections}
      keyInsights={data.keyInsights}
      resources={data.resources}
      reflectionQuestions={data.reflectionQuestions}
    />
  )
}

export default GameTheory