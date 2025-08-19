import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title = 'Bitcoin Primer', 
  description = 'Understanding Bitcoin from multiple disciplinary perspectives: money, banking, economics, computer science, game theory, energy, politics, philosophy, and law. Comprehensive Bitcoin education resources.',
  keywords = 'Bitcoin,cryptocurrency,blockchain,decentralization,digital currency,Bitcoin education,Bitcoin learning,monetary economics,cryptography,distributed systems,proof of work',
  image = '/bitcoin-og-image.png',
  url = 'https://bitcoinprimer.com',
  type = 'website',
  author = 'Bitcoin Primer',
  jsonLd = null,
  publishedTime = null,
  modifiedTime = null
}) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const currentLang = i18n.language || 'zh';
  const siteTitle = title === 'Bitcoin Primer' ? title : `${title} | Bitcoin Primer`;
  
  // Generate alternate language URLs
  const baseUrl = 'https://bitcoinprimer.com';
  const currentPath = location.pathname;
  const alternateUrls = {
    'zh': `${baseUrl}/zh${currentPath}`,
    'en': `${baseUrl}/en${currentPath}`,
    'x-default': `${baseUrl}${currentPath}`
  };
  
  // Full image URL
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;
  
  return (
    <Helmet>
      <html lang={currentLang} />
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="generator" content="React + Vite" />
      
      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Bitcoin Primer" />
      <meta property="og:locale" content={currentLang === 'zh' ? 'zh_CN' : 'en_US'} />
      <meta property="og:locale:alternate" content={currentLang === 'zh' ? 'en_US' : 'zh_CN'} />
      
      {/* Article specific */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {type === 'article' && <meta property="article:author" content={author} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@bitcoinprimer" />
      
      {/* Canonical and hreflang */}
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="zh" href={alternateUrls.zh} />
      <link rel="alternate" hrefLang="en" href={alternateUrls.en} />
      <link rel="alternate" hrefLang="x-default" href={alternateUrls['x-default']} />
      
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