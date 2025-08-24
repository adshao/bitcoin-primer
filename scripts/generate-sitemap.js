import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import language configuration
// Note: Since this is a Node script, we'll duplicate the config here
// In production, you might want to share this config differently
const languages = {
  en: {
    code: 'en',
    name: 'English',
    locale: 'en_US',
    path: '', // Empty for default language
    isDefault: true
  },
  zh: {
    code: 'zh',
    name: '中文',
    locale: 'zh_CN',
    path: '/zh',
    isDefault: false
  },
  // Future languages can be added here
  // ko: {
  //   code: 'ko',
  //   name: '한국어',
  //   locale: 'ko_KR',
  //   path: '/ko',
  //   isDefault: false
  // }
};

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
  { path: '/articles', priority: 0.8, changefreq: 'weekly' },
  { path: '/buy-bitcoin', priority: 0.7, changefreq: 'monthly' },
  { path: '/about', priority: 0.6, changefreq: 'monthly' }
];

const baseUrl = 'https://bitcoinprimer.org';

// Get supported language codes
const supportedLanguages = Object.keys(languages);
const defaultLanguage = Object.values(languages).find(lang => lang.isDefault)?.code || 'en';

// Generate alternate URLs for a given path
function generateAlternateUrls(routePath) {
  const urls = [];
  
  for (const [code, config] of Object.entries(languages)) {
    let url;
    if (config.isDefault) {
      url = `${baseUrl}${routePath}`;
    } else {
      url = `${baseUrl}${config.path}${routePath}`;
    }
    urls.push({ lang: code, url });
  }
  
  // Add x-default
  urls.push({ 
    lang: 'x-default', 
    url: `${baseUrl}${routePath}` 
  });
  
  return urls;
}

// Generate sitemap XML
function generateSitemap() {
  const lastmod = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';
  
  routes.forEach(route => {
    // Generate URL entries for each language
    for (const [code, config] of Object.entries(languages)) {
      xml += '  <url>\n';
      
      // Generate the URL for this language
      let url;
      if (config.isDefault) {
        url = `${baseUrl}${route.path}`;
      } else {
        url = `${baseUrl}${config.path}${route.path === '/' ? '' : route.path}`;
      }
      
      xml += `    <loc>${url}</loc>\n`;
      xml += `    <lastmod>${lastmod}</lastmod>\n`;
      xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
      xml += `    <priority>${route.priority}</priority>\n`;
      
      // Add hreflang links for all language versions
      const alternateUrls = generateAlternateUrls(route.path);
      alternateUrls.forEach(({ lang, url }) => {
        xml += `    <xhtml:link rel="alternate" hreflang="${lang}" href="${url}"/>\n`;
      });
      
      xml += '  </url>\n';
    }
  });
  
  xml += '</urlset>';
  
  // Write sitemap
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(sitemapPath, xml);
  
  const totalUrls = routes.length * supportedLanguages.length;
  console.log('✅ Sitemap generated successfully');
  console.log(`📍 Location: ${sitemapPath}`);
  console.log(`🌐 Languages: ${supportedLanguages.join(', ')}`);
  console.log(`📄 Total URLs: ${totalUrls} (${routes.length} routes × ${supportedLanguages.length} languages)`);
}

// Generate robots.txt with dynamic language paths
function generateRobotsTxt() {
  // Build Allow directives for language paths
  const languagePaths = Object.values(languages)
    .filter(lang => !lang.isDefault)
    .map(lang => `Allow: ${lang.path}/`)
    .join('\n');
  
  const robotsTxt = `# Bitcoin Primer Robots.txt
# https://bitcoinprimer.org

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
Allow: /buy-bitcoin
Allow: /about
${languagePaths}

# Sitemap location
Sitemap: https://bitcoinprimer.org/sitemap.xml

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
  console.log('✅ robots.txt updated successfully');
}

// Run generators
console.log('🚀 Starting sitemap and robots.txt generation...\n');
generateSitemap();
generateRobotsTxt();
console.log('\n✨ Generation complete!');