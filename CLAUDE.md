# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bitcoin Primer is an educational website that explains Bitcoin from multiple disciplinary perspectives. It's a React + Vite application focused on providing comprehensive Bitcoin education without covering DeFi, smart contracts, or other cryptocurrency derivatives.

## Commands

```bash
# Development
npm run dev          # Start dev server (usually at http://localhost:5174 or :5173)
npm run build        # Build for production (includes SEO generation)
npm run preview      # Preview production build
npm run lint         # Run ESLint

# SEO & Utilities
npm run generate:seo # Generate sitemap.xml and robots.txt
npm run check:seo    # Validate SEO implementation
```

## Architecture

### Core Components

**TopicTemplate** (`src/components/TopicTemplate.jsx`)
- Shared template for all discipline pages
- Props: `icon`, `title`, `subtitle`, `introduction`, `sections`, `keyInsights`, `resources`, `reflectionQuestions`
- Provides consistent structure across all educational content pages

**Layout** (`src/components/Layout.jsx`)
- Global navigation with dropdown menu for 9 disciplines + additional pages
- Responsive design with mobile menu
- Auto scroll-to-top on route change
- Footer with dynamic year
- Language switcher integration

**SEO** (`src/components/SEO.jsx`)
- Dynamic SEO meta tags component
- Supports multilingual content
- Automatically generates hreflang tags
- Open Graph and Twitter Card support

### Content Structure

The site has 9 discipline pages following a specific order:
1. 货币 (Money) - /money
2. 银行 (Banking) - /banking  
3. 经济学 (Economics) - /economics
4. 计算机科学 (Computer Science) - /computer-science
5. 博弈论 (Game Theory) - /game-theory
6. 能源 (Energy) - /energy
7. 政治 (Politics) - /politics
8. 哲学 (Philosophy) - /philosophy
9. 法律 (Law) - /law

Additional pages:
- Home - Landing page with all perspectives
- LearningPath - Structured 10-week learning curriculum
- StudyGuide - Learning methods and practices
- Resources - Comprehensive resource collection
- Articles - Article listing and reader
- BuyBitcoin - Guide to purchasing Bitcoin
- About - Mission and vision

## 🌍 Multilingual Support

### Current Structure
- **Default Language**: English (`/` paths)
- **Chinese**: `/zh/` paths
- **Language Config**: `/src/config/languages.js`

### Language Path Rules
- **English (Default)**: All paths start with `/` 
  - Examples: `/`, `/money`, `/economics`, `/about`, `/learning-path`
- **Chinese**: All paths start with `/zh/`
  - Examples: `/zh/`, `/zh/money`, `/zh/economics`, `/zh/about`, `/zh/learning-path`
- **Future Languages**: Will follow the pattern `/{language-code}/`
  - Example for Korean: `/ko/`, `/ko/money`, `/ko/economics`

### Language Detection
- Uses `react-i18next` with browser detection
- Falls back to English if unsupported language
- Persists user selection in localStorage

### Adding a New Language (e.g., Korean)

1. **Update Language Config** (`/src/config/languages.js`):
```javascript
ko: {
  code: 'ko',
  name: '한국어',
  locale: 'ko_KR',
  path: '/ko',
  isDefault: false
}
```

2. **Create Translation Files**:
- Create `/src/i18n/locales/ko/` directory
- Add all translation JSON files (copy from `/en/` or `/zh/`)

3. **Update i18n Config** (`/src/i18n/index.js`):
- Import Korean translations
- Add to resources object
- Update supportedLngs array

4. **Update App Routing** (`/src/App.jsx`):
```javascript
<Route path="/ko/*" element={
  <Routes>
    {pageRoutes}
  </Routes>
} />
```

5. **Update Structured Data** (`/src/utils/structuredData.js`):
- Add Korean content to `getLocalizedContent` calls:
```javascript
description: getLocalizedContent(lang, {
  en: 'English description',
  zh: '中文描述',
  ko: '한국어 설명'  // Add Korean content
})
```

6. **Regenerate SEO Files**:
```bash
npm run generate:seo
```

## 🔍 SEO Implementation

### SEO Component Usage

Every page MUST include the SEO component with proper metadata:

```javascript
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';

const MyPage = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  
  return (
    <div>
      <SEO 
        title={currentLang === 'zh' ? "中文标题" : "English Title"}
        description={currentLang === 'zh' ? "中文描述..." : "English description..."}
        keywords={currentLang === 'zh' ? "中文,关键词" : "english,keywords"}
      />
      {/* Page content */}
    </div>
  );
};
```

### Structured Data (Schema.org)

The site implements comprehensive structured data for better SEO:

- **Organization Schema**: Main website identity
- **Course Schema**: Learning path pages
- **Article Schema**: Article pages
- **Educational Content Schema**: Discipline pages
- **BreadcrumbList Schema**: Navigation structure
- **Collection Page Schema**: Resource pages

#### Language-Scalable Implementation

**IMPORTANT**: Use language codes instead of boolean flags for better extensibility:

```javascript
// ❌ BAD - Not scalable
const isZh = i18n.language === 'zh';
const title = isZh ? '中文标题' : 'English Title';

// ✅ GOOD - Scalable for multiple languages
const currentLang = i18n.language || 'en';
const title = getLocalizedContent(currentLang, {
  en: 'English Title',
  zh: '中文标题',
  ko: '한국어 제목',  // Easy to add new languages
  ja: '日本語タイトル'
});
```

#### Structured Data Functions

All structured data functions in `/src/utils/structuredData.js` accept a `lang` parameter:

```javascript
import { getOrganizationSchema, getCourseSchema } from '../utils/structuredData';

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    getOrganizationSchema(currentLang),
    getCourseSchema(currentLang),
    getBreadcrumbSchema(breadcrumbs, currentLang)
  ]
};
```

### When Adding a New Page

**REQUIRED STEPS:**

1. **Add SEO Component to the Page**:
   - Import SEO component
   - Add multilingual title (< 60 chars)
   - Add multilingual description (< 160 chars)
   - Add relevant keywords

2. **Update Sitemap Generator** (`/scripts/generate-sitemap.js`):
   ```javascript
   const routes = [
     // ... existing routes
     { path: '/new-page', priority: 0.7, changefreq: 'monthly' }
   ];
   ```

3. **Update SEO Checker** (`/scripts/check-seo.js`):
   ```javascript
   const routes = [
     // ... existing routes
     { path: '/new-page', name: 'New Page' }
   ];
   ```

4. **Update robots.txt Generator** (if needed):
   - Add Allow directive if it's a content page

5. **Create Translation Files**:
   - `/src/i18n/locales/en/newPage.json`
   - `/src/i18n/locales/zh/newPage.json`

6. **Register Translations** (`/src/i18n/index.js`):
   ```javascript
   import enNewPage from './locales/en/newPage.json';
   import zhNewPage from './locales/zh/newPage.json';
   
   // Add to resources
   en: { newPage: enNewPage }
   zh: { newPage: zhNewPage }
   ```

7. **Add Route** (`/src/App.jsx`):
   - Add to pageRoutes
   - Will automatically work for all language paths

8. **Update Navigation** (if needed):
   - Add to Layout.jsx dropdown or footer

9. **Regenerate and Validate**:
   ```bash
   npm run generate:seo
   npm run check:seo
   ```

### SEO Checklist for New Pages

- [ ] SEO component added with title, description, keywords
- [ ] Title length < 60 characters
- [ ] Description length < 160 characters
- [ ] Multilingual content for all supported languages
- [ ] Route added to sitemap generator
- [ ] Route added to SEO checker
- [ ] Translation files created and registered
- [ ] SEO validation passes

## Key Design Decisions

- **No Smart Contracts/DeFi**: Focus exclusively on Bitcoin fundamentals
- **Discipline Order**: Economics/monetary topics first, technical middle, social/philosophical last
- **Default Language**: English (not Chinese as might be assumed)
- **Alternating Backgrounds**: Sections alternate between #f8fafc and white for visual separation
- **Consistent Titles**: All discipline pages use simple names without "视角" suffix
- **Mobile First**: Responsive design with 768px breakpoint
- **Language Scalability**: Use language codes (`lang`) instead of boolean flags (`isZh`) for extensibility

## Routing

- All routes defined in `src/App.jsx` using React Router v6
- Path naming follows kebab-case convention (e.g., `/computer-science`)
- **Language URL Structure**:
  - English (default): No prefix - `/`, `/money`, `/articles`
  - Chinese: `/zh/` prefix - `/zh/`, `/zh/money`, `/zh/articles`
  - Future languages: `/{lang}/` prefix - `/ko/`, `/ko/money`, `/ko/articles`
- **Important**: English is the default language with clean URLs (no language prefix)

## Styling

- Component-specific CSS files alongside JSX files
- Global styles in App.css
- Color scheme: Orange/Bitcoin theme (#f7931a as primary)
- Responsive breakpoint: 768px
- CSS naming: BEM-like convention (`.component-name__element`)

## Performance Considerations

- Code splitting by route
- Lazy loading for images
- Translation files loaded on demand
- SEO meta tags generated dynamically
- Sitemap pre-generated at build time

## Testing SEO

After making changes:
1. Run `npm run dev` to start dev server
2. Run `npm run check:seo` to validate all pages
3. Check for:
   - No missing titles or descriptions
   - Proper hreflang tags
   - Canonical URLs
   - Open Graph tags
   - Structured data

## Common Issues & Solutions

### Port Conflicts
- Dev server may run on port 5174 instead of 5173
- Update `/scripts/check-seo.js` URL if needed

### SEO Validation Fails
- Ensure all pages import and use SEO component
- Check that translations exist for all languages
- Verify hreflang URLs match actual routes

### Adding New Language Not Working
- Clear localStorage (language preference cached)
- Ensure all translation files imported
- Check browser console for missing translations

## Deployment Notes

- Always run `npm run build` (includes SEO generation)
- Sitemap.xml and robots.txt are in `/public/`
- These files are regenerated on build
- Verify production URLs in sitemap after deployment

## Important Rules for Claude Code

### Getting Current Date
- **NEVER assume the current date** - Always run a command to get it
- Use `date` command in Bash to get the current date/time
- Example: `date +"%Y-%m-%d"` for YYYY-MM-DD format
- Example: `date +"%Y年%m月"` for Chinese date format
- This ensures accuracy when updating dates in code or content