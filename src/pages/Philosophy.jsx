import { useFormattedTranslation } from '../hooks/useFormattedTranslation'
import TopicTemplate from '../components/TopicTemplate'

function Philosophy() {
  const { t } = useFormattedTranslation('philosophy')
  
  const data = {
    icon: t('icon'),
    title: t('title'),
    subtitle: t('subtitle'),
    introduction: t('introduction'),
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
      sections={data.sections}
      keyInsights={data.keyInsights}
      resources={data.resources}
      reflectionQuestions={data.reflectionQuestions}
    />
  )
}

export default Philosophy