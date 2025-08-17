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
- **Bilingual Support**: Full support for English and Chinese (中文)
- **Structured Learning Path**: 10-week curriculum with progressive difficulty
- **Study Guide**: Learning methods and practical exercises
- **Resource Library**: Curated books, courses, tools, and community resources
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
# Build the application
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

### Learning Resources

- **Learning Path**: Three-stage progression (Foundation → Core → Advanced)
- **Study Guide**: Learning principles, methods, and best practices
- **Resources**: Comprehensive collection of books, courses, tools, and communities

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite 4
- **Routing**: React Router v6
- **Internationalization**: react-i18next
- **Styling**: CSS3 with responsive design
- **Language**: JavaScript (ES6+)
- **Package Manager**: npm

## 📁 Project Structure

```
bitcoinprimer/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Layout.jsx       # Global navigation layout
│   │   ├── TopicTemplate.jsx # Template for discipline pages
│   │   └── LanguageSwitcher.jsx # Language toggle
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Landing page
│   │   ├── Money.jsx       # Discipline pages...
│   │   ├── LearningPath.jsx # Learning curriculum
│   │   ├── StudyGuide.jsx  # Study methods
│   │   └── Resources.jsx   # Resource library
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
├── public/                 # Static assets
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
├── CLAUDE.md               # AI assistant instructions
└── README.md               # This file
```

## 🌍 Internationalization

The project supports bilingual content (English/Chinese) with automatic text formatting:
- Automatic spacing between Chinese and English characters
- Complete translation coverage for all content
- Language persistence across sessions
- Easy language switching via navbar dropdown

## 🎨 Design Principles

- **Clean and Modern**: Minimalist design focusing on readability
- **Consistent Structure**: All discipline pages follow the same template
- **Visual Hierarchy**: Clear section divisions with alternating backgrounds
- **Responsive Grid**: 3-column layout on desktop, adapting to mobile
- **Bitcoin Orange**: Primary color scheme using Bitcoin's signature orange (#f7931a)
- **Smooth Interactions**: Smooth scrolling and hover effects

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start dev server at http://localhost:5173
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🔄 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Guidelines
- Maintain bilingual support for all new content
- Follow existing code structure and naming conventions
- Ensure responsive design for all screen sizes
- Test thoroughly before submitting PR
- Update translations in both `/src/i18n/locales/en` and `/src/i18n/locales/zh`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Bitcoin whitepaper by Satoshi Nakamoto
- The Bitcoin community for continuous education and resources
- All contributors and educators in the Bitcoin space

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

**Note**: This is an educational project focused on Bitcoin fundamentals. It does not cover DeFi, smart contracts, or other cryptocurrency derivatives.

Built with ❤️ for Bitcoin education