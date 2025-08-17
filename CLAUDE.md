# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bitcoin Primer is an educational website that explains Bitcoin from multiple disciplinary perspectives. It's a React + Vite application focused on providing comprehensive Bitcoin education without covering DeFi, smart contracts, or other cryptocurrency derivatives.

## Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:5173
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## Architecture

### Core Components

**TopicTemplate** (`src/components/TopicTemplate.jsx`)
- Shared template for all discipline pages
- Props: `icon`, `title`, `subtitle`, `introduction`, `sections`, `keyInsights`, `resources`, `reflectionQuestions`
- Provides consistent structure across all educational content pages

**Layout** (`src/components/Layout.jsx`)
- Global navigation with dropdown menu for 9 disciplines
- Responsive design with mobile menu
- Auto scroll-to-top on route change
- Footer with dynamic year

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

### Key Design Decisions

- **No Smart Contracts/DeFi**: Focus exclusively on Bitcoin fundamentals
- **Discipline Order**: Economics/monetary topics first, technical middle, social/philosophical last
- **Chinese Content**: Primary content in Chinese for educational clarity
- **Alternating Backgrounds**: Sections alternate between #f8fafc and white for visual separation
- **Consistent Titles**: All discipline pages use simple names without "视角" suffix

### Routing

All routes defined in `src/App.jsx` using React Router v6. Path naming follows kebab-case convention (e.g., `/computer-science`).

### Styling

- Component-specific CSS files alongside JSX files
- Global styles in App.css
- Color scheme: Orange/Bitcoin theme (#f7931a as primary)
- Responsive breakpoint: 768px