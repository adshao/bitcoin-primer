import { Link } from 'react-router-dom'
import { useLocalizedLink } from '../utils/languageRouting'

function LocalizedLink({ to, children, ...props }) {
  const localizedTo = useLocalizedLink(to)
  
  return (
    <Link to={localizedTo} {...props}>
      {children}
    </Link>
  )
}

export default LocalizedLink