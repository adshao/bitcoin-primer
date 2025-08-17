# Multi-Language Support Guide

## Current Languages
- English (en) - Default
- Chinese (zh) - 中文

## Adding a New Language

### 1. Create Translation Files
```bash
# Create directories
mkdir -p src/i18n/locales/[LANG_CODE]
mkdir -p src/i18n/translations/disciplines/[LANG_CODE]

# Create main translation file
cp src/i18n/locales/en/translation.json src/i18n/locales/[LANG_CODE]/translation.json
# Then translate the content
```

### 2. Update Configuration

#### In `src/i18n/translations/index.js`:
```javascript
// Add to supportedLanguages array
{ code: '[LANG_CODE]', name: '[LANGUAGE_NAME]', nativeName: '[NATIVE_NAME]' }
```

#### In `src/i18n/index.js`:
```javascript
// Import translations
import [lang]Translations from './locales/[LANG_CODE]/translation.json';

// Add to resources
[LANG_CODE]: {
  translation: [lang]Translations
}

// Add to supportedLngs
supportedLngs: ['en', 'zh', '[LANG_CODE]']
```

### 3. Create Discipline Translations
For each discipline page, create a translation file:
```javascript
// src/i18n/translations/disciplines/[LANG_CODE]/[discipline].js
export default {
  title: "Translated Title",
  subtitle: "Translated Subtitle",
  introduction: "Translated Introduction"
}
```

## Translation Keys Structure

### Common UI Elements
- `nav.*` - Navigation items
- `footer.*` - Footer content
- `home.*` - Homepage content
- `template.*` - Reusable template labels

### Discipline-Specific Content
Each discipline has its own translation file with:
- `title` - Page title
- `subtitle` - Page subtitle
- `introduction` - Introduction paragraph
- Additional content as needed

## Using Translations in Components

### Basic Usage
```javascript
import { useMultiLanguage } from '../hooks/useMultiLanguage'

function MyComponent() {
  const { t, getText, currentLanguage } = useMultiLanguage()
  
  // Use t() for common translations
  const navTitle = t('nav.learningPath')
  
  // Use getText() for inline translations
  const content = getText(
    '中文内容',
    'English content',
    'Contenido español', // Future Spanish
    'Contenu français'   // Future French
  )
}
```

### Discipline Pages
```javascript
const { getDiscipline } = useMultiLanguage()
const content = getDiscipline('money')
// Use content.title, content.subtitle, etc.
```

## Language Detection
The system automatically detects the user's language preference from:
1. localStorage (if previously set)
2. Browser navigator language
3. HTML lang attribute

## Best Practices
1. Always provide English as fallback
2. Keep translation keys consistent across languages
3. Use meaningful key names that describe the content
4. Test UI with different language lengths (German/French are longer, Chinese is shorter)
5. Consider RTL languages (Arabic, Hebrew) for future support