export const useSEO = (pageName) => {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "publisher": {
      "@type": "Organization",
      "name": "Bitcoin Primer",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bitcoinprimer.com/bitcoin-icon.svg"
      }
    },
    "author": {
      "@type": "Organization",
      "name": "Bitcoin Primer"
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString()
  }

  const seoData = {
    money: {
      title: 'Money Perspective - Bitcoin Primer',
      description: 'Understanding Bitcoin through the lens of money: exploring the nature of money, monetary history, and how Bitcoin redefines digital currency with revolutionary features.',
      keywords: 'Bitcoin money,digital currency,monetary history,currency evolution,decentralized money,Bitcoin value,monetary properties,scarcity,sound money',
      jsonLd: {
        ...baseStructuredData,
        "headline": "Money Perspective: Understanding Bitcoin as a New Form of Money",
        "description": "Exploring the nature of money, monetary history, and how Bitcoin redefines digital currency with revolutionary features."
      }
    },
    banking: {
      title: 'Banking Perspective - Bitcoin Primer',
      description: 'Exploring how Bitcoin challenges traditional banking systems, enables decentralized value transfer and storage, and empowers individuals to be their own bank.',
      keywords: 'Bitcoin banking,decentralized finance,self custody,private key management,Bitcoin wallets,peer-to-peer payments,financial sovereignty,be your own bank',
      jsonLd: {
        ...baseStructuredData,
        "headline": "Banking Perspective: Bitcoin and Decentralized Finance",
        "description": "How Bitcoin challenges traditional banking systems and enables decentralized value transfer and storage."
      }
    },
    economics: {
      title: 'Economics Perspective - Bitcoin Primer',
      description: 'Analyzing Bitcoin through Austrian economics: economic model, deflationary characteristics, store of value properties, and impact on global economic systems.',
      keywords: 'Bitcoin economics,Austrian school,deflation,store of value,economic incentives,Bitcoin halving,supply and demand,monetary policy',
      jsonLd: {
        ...baseStructuredData,
        "headline": "Economics Perspective: Bitcoin's Economic Model",
        "description": "Analyzing Bitcoin's economic model, deflationary characteristics, and store of value properties through Austrian economics."
      }
    },
    'computer-science': {
      title: 'Computer Science Perspective - Bitcoin Primer',
      description: 'Deep dive into Bitcoin\'s technical architecture: blockchain, cryptography, consensus mechanisms, network protocols, and core technical components.',
      keywords: 'blockchain technology,Bitcoin protocol,cryptography,hash functions,digital signatures,proof of work,P2P network,Merkle trees,distributed systems',
      jsonLd: {
        ...baseStructuredData,
        "headline": "Computer Science Perspective: Bitcoin's Technical Architecture",
        "description": "Deep dive into Bitcoin's technical architecture: blockchain, cryptography, consensus mechanisms, and network protocols."
      }
    },
    'game-theory': {
      title: 'Game Theory Perspective - Bitcoin Primer',
      description: 'Analyzing Bitcoin\'s incentive mechanisms, Nash equilibrium, Byzantine Generals Problem solutions, and mining game theory strategies.',
      keywords: 'Bitcoin game theory,incentive mechanisms,Nash equilibrium,Byzantine fault tolerance,mining incentives,game strategies,consensus games',
      jsonLd: {
        ...baseStructuredData,
        "headline": "Game Theory Perspective: Bitcoin's Incentive Mechanisms",
        "description": "Analyzing Bitcoin's incentive mechanisms, Nash equilibrium, and Byzantine Generals Problem solutions."
      }
    },
    energy: {
      title: 'Energy Perspective - Bitcoin Primer',
      description: 'Exploring Bitcoin mining energy consumption, renewable energy utilization, energy monetization, and positive impact on global energy systems.',
      keywords: 'Bitcoin mining,energy consumption,renewable energy,green mining,energy monetization,electricity markets,carbon neutral,sustainable mining',
      jsonLd: {
        ...baseStructuredData,
        "headline": "Energy Perspective: Bitcoin and Sustainable Energy",
        "description": "Exploring Bitcoin mining energy consumption, renewable energy utilization, and positive impact on global energy systems."
      }
    },
    politics: {
      title: 'Politics Perspective - Bitcoin Primer',
      description: 'Analyzing Bitcoin\'s political philosophy, decentralized governance, monetary sovereignty, regulatory challenges, and impact on international politics.',
      keywords: 'Bitcoin politics,monetary sovereignty,decentralized governance,financial freedom,regulatory policy,geopolitics,currency weaponization',
      jsonLd: {
        ...baseStructuredData,
        "headline": "Politics Perspective: Bitcoin and Monetary Sovereignty",
        "description": "Analyzing Bitcoin's political philosophy, decentralized governance, monetary sovereignty, and impact on international politics."
      }
    },
    philosophy: {
      title: 'Philosophy Perspective - Bitcoin Primer',
      description: 'Exploring philosophical foundations of Bitcoin: libertarianism, cypherpunk ethos, trust minimization, individual sovereignty, and core ideological principles.',
      keywords: 'Bitcoin philosophy,cypherpunk,individual sovereignty,libertarianism,trustless systems,digital freedom,privacy rights',
      jsonLd: {
        ...baseStructuredData,
        "headline": "Philosophy Perspective: Bitcoin's Ideological Foundations",
        "description": "Exploring philosophical foundations: libertarianism, cypherpunk ethos, trust minimization, and individual sovereignty."
      }
    },
    law: {
      title: 'Law Perspective - Bitcoin Primer',
      description: 'Examining Bitcoin\'s legal status, property rights, regulatory frameworks, compliance requirements, and challenges to traditional legal systems.',
      keywords: 'Bitcoin law,cryptocurrency regulation,digital assets,legal framework,compliance requirements,property rights,tax treatment',
      jsonLd: {
        ...baseStructuredData,
        "headline": "Law Perspective: Bitcoin's Legal Status",
        "description": "Examining Bitcoin's legal status, property rights, regulatory frameworks, and challenges to traditional legal systems."
      }
    },
    'learning-path': {
      title: 'Learning Path - Bitcoin Primer',
      description: 'Systematic Bitcoin learning path from fundamental concepts to advanced topics, helping you master comprehensive Bitcoin knowledge.',
      keywords: 'Bitcoin learning,learning path,Bitcoin tutorial,systematic learning,knowledge framework,study plan,advanced guide,Bitcoin education'
    },
    'study-guide': {
      title: 'Study Guide - Bitcoin Primer',
      description: 'Bitcoin learning methods, resource recommendations, practical advice to help you efficiently learn and deeply understand Bitcoin.',
      keywords: 'learning methods,study resources,Bitcoin books,video tutorials,podcast recommendations,learning community,practical guide'
    },
    resources: {
      title: 'Resources - Bitcoin Primer',
      description: 'Comprehensive collection of Bitcoin learning resources: books, papers, videos, podcasts, tools, communities, and educational materials.',
      keywords: 'Bitcoin resources,learning materials,technical documentation,whitepaper,development tools,community forums,data analysis'
    }
  }

  return seoData[pageName] || {}
}