import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define all routes
const routes = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/money', priority: 0.9, changefreq: 'monthly' },
  { path: '/banking', priority: 0.9, changefreq: 'monthly' },
  { path: '/economics', priority: 0.9, changefreq: 'monthly' },
  { path: '/computer-science', priority: 0.9, changefreq: 'monthly' },
  { path: '/game-theory', priority: 0.9, changefreq: 'monthly' },
  { path: '/energy', priority: 0.9, changefreq: 'monthly' },
  { path: '/politics', priority: 0.9, changefreq: 'monthly' },
  { path: '/philosophy', priority: 0.9, changefreq: 'monthly' },
  { path: '/law', priority: 0.9, changefreq: 'monthly' },
  { path: '/learning-path', priority: 0.8, changefreq: 'monthly' },
  { path: '/study-guide', priority: 0.8, changefreq: 'monthly' },
  { path: '/resources', priority: 0.8, changefreq: 'weekly' },
  { path: '/articles', priority: 0.8, changefreq: 'weekly' }
];

// Supported languages
const languages = ['zh', 'en'];
const defaultLang = 'zh';
const baseUrl = 'https://bitcoinprimer.com';

// Generate sitemap XML
function generateSitemap() {
  const lastmod = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';
  
  routes.forEach(route => {
    // Add default URL (without language prefix, defaults to Chinese)
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${route.path}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    
    // Add hreflang links
    languages.forEach(lang => {
      const langPath = lang === defaultLang ? route.path : `/${lang}${route.path}`;
      xml += `    <xhtml:link rel="alternate" hreflang="${lang}" href="${baseUrl}${langPath}"/>\n`;
    });
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${route.path}"/>\n`;
    
    xml += '  </url>\n';
    
    // Add language-specific URLs (for /en paths)
    if (route.path !== '/') {
      xml += '  <url>\n';
      xml += `    <loc>${baseUrl}/en${route.path}</loc>\n`;
      xml += `    <lastmod>${lastmod}</lastmod>\n`;
      xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
      xml += `    <priority>${route.priority}</priority>\n`;
      
      // Add hreflang links for English version
      languages.forEach(lang => {
        const langPath = lang === 'en' ? `/en${route.path}` : route.path;
        xml += `    <xhtml:link rel="alternate" hreflang="${lang}" href="${baseUrl}${langPath}"/>\n`;
      });
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${route.path}"/>\n`;
      
      xml += '  </url>\n';
    }
  });
  
  xml += '</urlset>';
  
  // Write sitemap
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(sitemapPath, xml);
  console.log('Sitemap generated successfully at:', sitemapPath);
  console.log(`Total URLs: ${routes.length * 2} (including language variants)`);
}

// Generate robots.txt with updated sitemap reference
function generateRobotsTxt() {
  const robotsTxt = `# Bitcoin Primer Robots.txt
# https://bitcoinprimer.com

User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /*.json$
Disallow: /*.xml$

# Allow search engines to crawl all content pages
Allow: /money
Allow: /banking
Allow: /economics
Allow: /computer-science
Allow: /game-theory
Allow: /energy
Allow: /politics
Allow: /philosophy
Allow: /law
Allow: /learning-path
Allow: /study-guide
Allow: /resources
Allow: /articles
Allow: /en/

# Sitemap location
Sitemap: https://bitcoinprimer.com/sitemap.xml

# Crawl-delay for responsible crawling
Crawl-delay: 1

# Google
User-agent: Googlebot
Allow: /
Crawl-delay: 0

# Bing
User-agent: Bingbot
Allow: /
Crawl-delay: 0

# Baidu
User-agent: Baiduspider
Allow: /
Crawl-delay: 1
`;
  
  const robotsPath = path.join(__dirname, '../public/robots.txt');
  fs.writeFileSync(robotsPath, robotsTxt);
  console.log('robots.txt updated successfully');
}

// Run generators
generateSitemap();
generateRobotsTxt();