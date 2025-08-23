import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { generateAlternateUrls, languages } from '../config/languages';

const SEO = ({ 
  title = '', 
  description = '',
  keywords = '',
  image = '/bitcoin-og-image.png',
  url = '',
  type = 'website',
  author = 'Bitcoin Primer',
  jsonLd = null,
  publishedTime = null,
  modifiedTime = null
}) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const currentLang = i18n.language || 'en';
  
  // 默认中文内容
  const defaultTitleZh = 'Bitcoin Primer - 从多学科视角理解比特币';
  const defaultDescriptionZh = 'Bitcoin Primer 是一个全面的比特币教育网站，从货币、银行、经济学、计算机科学、博弈论、能源、政治、哲学和法律等9个学科视角深入解析比特币。提供结构化的10周学习路径。';
  const defaultKeywordsZh = '比特币,Bitcoin,加密货币,区块链,货币理论,经济学,计算机科学,博弈论,能源,政治,哲学,法律,比特币教育,Bitcoin教程,数字货币,去中心化,工作量证明';
  
  // 默认英文内容
  const defaultTitleEn = 'Bitcoin Primer - Understanding Bitcoin from Multiple Perspectives';
  const defaultDescriptionEn = 'Comprehensive Bitcoin education platform exploring Bitcoin through 9 disciplinary perspectives: money, banking, economics, computer science, game theory, energy, politics, philosophy, and law.';
  const defaultKeywordsEn = 'Bitcoin,cryptocurrency,blockchain,decentralization,digital currency,Bitcoin education,monetary economics,cryptography,distributed systems,proof of work';
  
  // 根据语言选择默认值
  const isZh = currentLang === 'zh';
  const defaultTitle = isZh ? defaultTitleZh : defaultTitleEn;
  const defaultDescription = isZh ? defaultDescriptionZh : defaultDescriptionEn;
  const defaultKeywords = isZh ? defaultKeywordsZh : defaultKeywordsEn;
  
  // 使用传入的值或默认值
  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const siteTitle = title ? `${title} | Bitcoin Primer` : defaultTitle;
  
  // Generate URLs
  const baseUrl = 'https://bitcoinprimer.com';
  const currentPath = location.pathname;
  const finalUrl = url || `${baseUrl}${currentPath}`;
  
  // Generate alternate language URLs using the centralized config
  const alternateUrls = generateAlternateUrls(currentPath, baseUrl);
  
  // Full image URL
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;
  
  return (
    <Helmet>
      <html lang={currentLang} />
      <title>{siteTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content={author} />
      <meta name="generator" content="React + Vite" />
      
      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Bitcoin Primer" />
      <meta property="og:locale" content={languages[currentLang]?.locale || 'en_US'} />
      {Object.entries(languages)
        .filter(([code]) => code !== currentLang)
        .map(([code, config]) => (
          <meta key={code} property="og:locale:alternate" content={config.locale} />
        ))}
      
      {/* Article specific */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {type === 'article' && <meta property="article:author" content={author} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@bitcoinprimer" />
      
      {/* Canonical and hreflang */}
      <link rel="canonical" href={finalUrl} />
      {Object.entries(alternateUrls).map(([lang, url]) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}
      
      {/* Performance optimizations */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;