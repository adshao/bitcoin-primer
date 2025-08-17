import { useTranslation } from 'react-i18next';
import { addSpaceBetweenChineseAndEnglish, formatTextInObject } from '../utils/textFormatter';

/**
 * Custom hook that wraps useTranslation and automatically formats text
 * Adds spaces between Chinese and English characters
 */
export function useFormattedTranslation(namespace) {
  const { t: originalT, i18n } = useTranslation(namespace);
  
  // Wrapped translation function that formats the result
  const t = (key, options) => {
    const result = originalT(key, options);
    
    // If returnObjects is true, format the entire object
    if (options?.returnObjects) {
      return formatTextInObject(result);
    }
    
    // Otherwise, format as string
    if (typeof result === 'string') {
      return addSpaceBetweenChineseAndEnglish(result);
    }
    
    return result;
  };
  
  return { t, i18n };
}