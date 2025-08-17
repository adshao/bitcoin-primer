/**
 * Add space between Chinese and English characters
 * @param {string} text - The text to format
 * @returns {string} - Formatted text with spaces between Chinese and English
 */
export function addSpaceBetweenChineseAndEnglish(text) {
  if (!text || typeof text !== 'string') return text;
  
  // Add space between Chinese and English characters
  return text
    // Add space between Chinese and English letters/numbers
    .replace(/([\u4e00-\u9fa5])([a-zA-Z0-9])/g, '$1 $2')
    // Add space between English letters/numbers and Chinese
    .replace(/([a-zA-Z0-9])([\u4e00-\u9fa5])/g, '$1 $2')
    // Replace multiple spaces with single space (but preserve leading/trailing spaces)
    .replace(/(\S)\s+(\S)/g, '$1 $2');
}

/**
 * Format text in an object recursively
 * @param {any} obj - The object to format
 * @returns {any} - Formatted object
 */
export function formatTextInObject(obj) {
  if (typeof obj === 'string') {
    return addSpaceBetweenChineseAndEnglish(obj);
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => formatTextInObject(item));
  }
  
  if (obj && typeof obj === 'object') {
    const formatted = {};
    for (const key in obj) {
      formatted[key] = formatTextInObject(obj[key]);
    }
    return formatted;
  }
  
  return obj;
}

/**
 * React component wrapper to automatically format text
 */
export function FormatText({ children }) {
  if (typeof children === 'string') {
    return addSpaceBetweenChineseAndEnglish(children);
  }
  return children;
}