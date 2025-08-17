import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'Bitcoin Primer', 
  description = 'Understanding Bitcoin from multiple disciplinary perspectives: money, banking, economics, computer science, game theory, energy, politics, philosophy, and law. Comprehensive Bitcoin education resources.',
  keywords = 'Bitcoin,cryptocurrency,blockchain,decentralization,digital currency,Bitcoin education,Bitcoin learning,monetary economics,cryptography,distributed systems,proof of work',
  image = '/bitcoin-og-image.png',
  url = 'https://bitcoinprimer.com',
  type = 'website',
  author = 'Bitcoin Primer',
  jsonLd = null
}) => {
  const siteTitle = title === 'Bitcoin Primer' ? title : `${title} | Bitcoin Primer`;
  
  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Bitcoin Primer" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      <link rel="canonical" href={url} />
      
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;