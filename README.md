# Bitcoin Primer 🌟

An educational website that explains Bitcoin from multiple disciplinary perspectives. Built with React + Vite, this project provides comprehensive Bitcoin education through nine different lenses, helping users understand not just the technology, but its broader implications for society.

## 🎯 Overview

Bitcoin Primer is designed to be a comprehensive educational resource that approaches Bitcoin from multiple angles:
- **Economic and Monetary Theory** - Understanding money, banking, and economics
- **Technical Foundations** - Computer science, cryptography, and distributed systems
- **Strategic Thinking** - Game theory and incentive mechanisms
- **Physical Reality** - Energy and thermodynamics
- **Social Impact** - Politics, philosophy, and law

## ✨ Features

- **Nine Disciplinary Perspectives**: Each discipline provides a unique lens for understanding Bitcoin
- **Bilingual Support**: Full support for English and Chinese (中文), with extensible architecture for future languages
- **Structured Learning Path**: 10-week curriculum with progressive difficulty
- **Study Guide**: Learning methods and practical exercises
- **Resource Library**: Curated books, courses, tools, and community resources
- **Articles Section**: In-depth articles on Bitcoin topics
- **Buy Bitcoin Guide**: Comprehensive guide on how to acquire Bitcoin safely
- **SEO Optimized**: Full SEO support with meta tags, structured data, and sitemap
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Navigation**: Intuitive UI with smooth scrolling and transitions

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/adshao/bitcoinprimer.git
cd bitcoinprimer

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
# Generate SEO files and build
npm run build

# Preview the production build
npm run preview
```

## 📚 Content Structure

### Nine Disciplines

1. **Money (货币)** - The nature and evolution of money
2. **Banking (银行)** - From intermediation to disintermediation
3. **Economics (经济学)** - Scarcity, value, and economic principles
4. **Computer Science (计算机科学)** - Cryptography and distributed systems
5. **Game Theory (博弈论)** - Incentives and Nash equilibrium
6. **Energy (能源)** - From entropy to value
7. **Politics (政治)** - Power, sovereignty, and governance
8. **Philosophy (哲学)** - Existence, freedom, and value
9. **Law (法律)** - Code as law in practice

### Additional Pages

- **Learning Path**: Three-stage progression (Foundation → Core → Advanced)
- **Study Guide**: Learning principles, methods, and best practices
- **Resources**: Comprehensive collection of books, courses, tools, and communities
- **Articles**: Deep-dive articles on Bitcoin topics
- **Buy Bitcoin**: Guide to purchasing Bitcoin through ETFs and exchanges
- **About**: Mission and vision of Bitcoin Primer

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite 5
- **Routing**: React Router v6
- **Internationalization**: react-i18next
- **SEO**: react-helmet-async
- **Styling**: CSS3 with responsive design
- **Language**: JavaScript (ES6+)
- **Package Manager**: npm
- **Testing**: Puppeteer for SEO validation

## 📁 Project Structure

```
bitcoinprimer/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Layout.jsx       # Global navigation layout
│   │   ├── TopicTemplate.jsx # Template for discipline pages
│   │   ├── SEO.jsx         # SEO meta tags component
│   │   └── LanguageSwitcher.jsx # Language toggle
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Landing page
│   │   ├── Money.jsx       # Discipline pages...
│   │   ├── LearningPath.jsx # Learning curriculum
│   │   ├── StudyGuide.jsx  # Study methods
│   │   ├── Resources.jsx   # Resource library
│   │   ├── Articles.jsx    # Articles listing
│   │   ├── Article.jsx     # Article reader
│   │   ├── BuyBitcoin.jsx  # Bitcoin purchase guide
│   │   └── About.jsx       # About page
│   ├── config/             # Configuration files
│   │   └── languages.js    # Language configuration
│   ├── i18n/               # Internationalization
│   │   ├── index.js        # i18n configuration
│   │   └── locales/        # Translation files
│   │       ├── en/         # English translations
│   │       └── zh/         # Chinese translations
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   ├── App.jsx             # Main app component
│   ├── App.css             # Global styles
│   └── main.jsx            # Entry point
├── scripts/                # Build and utility scripts
│   ├── check-seo.js        # SEO validation script
│   └── generate-sitemap.js # Sitemap generator
├── public/                 # Static assets
│   ├── sitemap.xml         # SEO sitemap
│   └── robots.txt          # Search engine directives
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
├── CLAUDE.md               # AI assistant instructions
└── README.md               # This file
```

## 🌍 Internationalization

The project supports multilingual content with an extensible architecture:

### Current Languages
- **English** (default) - `/` paths
- **Chinese** - `/zh/` paths

### Features
- Automatic spacing between Chinese and English characters
- Complete translation coverage for all content
- Language persistence across sessions
- Easy language switching via navbar dropdown
- SEO-optimized hreflang tags for each language

### Adding New Languages
To add a new language (e.g., Korean):
1. Add language config in `/src/config/languages.js`
2. Create translation files in `/src/i18n/locales/ko/`
3. Update routing in `App.jsx`
4. Run `npm run generate:seo` to update sitemap

## 🔍 SEO Optimization

### Features
- **Dynamic Meta Tags**: Title, description, keywords for each page
- **Open Graph**: Full Facebook and social media integration
- **Twitter Cards**: Rich previews on Twitter
- **Structured Data**: Schema.org EducationalWebSite markup
- **Multilingual SEO**: hreflang tags for language variants
- **Sitemap**: Auto-generated XML sitemap for all pages
- **robots.txt**: Search engine crawling directives

### SEO Scripts
```bash
# Generate sitemap and robots.txt
npm run generate:seo

# Validate SEO implementation
npm run check:seo
```

## 🎨 Design Principles

- **Clean and Modern**: Minimalist design focusing on readability
- **Consistent Structure**: All discipline pages follow the same template
- **Visual Hierarchy**: Clear section divisions with alternating backgrounds
- **Responsive Grid**: 3-column layout on desktop, adapting to mobile
- **Bitcoin Orange**: Primary color scheme using Bitcoin's signature orange (#f7931a)
- **Smooth Interactions**: Smooth scrolling and hover effects
- **Accessibility**: Semantic HTML and ARIA labels

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start dev server at http://localhost:5173
npm run build        # Build for production (includes SEO generation)
npm run preview      # Preview production build
npm run lint         # Run ESLint

# SEO & Utilities
npm run generate:seo # Generate sitemap.xml and robots.txt
npm run check:seo    # Run SEO validation tests
```

## 📊 Performance

- **Optimized Build**: Code splitting and lazy loading
- **Image Optimization**: WebP format with fallbacks
- **CSS Optimization**: Minified and split CSS
- **Fast Refresh**: HMR for instant development feedback
- **Bundle Analysis**: Visualize bundle size with rollup

## 🔄 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Guidelines
- Maintain bilingual support for all new content
- Follow existing code structure and naming conventions
- Ensure responsive design for all screen sizes
- Add SEO metadata for new pages
- Test thoroughly before submitting PR
- Update translations in both `/src/i18n/locales/en` and `/src/i18n/locales/zh`
- Run `npm run check:seo` to validate SEO implementation

### Development Workflow
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Bitcoin whitepaper by Satoshi Nakamoto
- The Bitcoin community for continuous education and resources
- All contributors and educators in the Bitcoin space
- Open source libraries that make this project possible

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build command
npm run build

# Publish directory
dist
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 4173
CMD ["npm", "run", "preview"]
```

---

**Note**: This is an educational project focused on Bitcoin fundamentals. It does not cover DeFi, smart contracts, or other cryptocurrency derivatives.

Built with ❤️ for Bitcoin education