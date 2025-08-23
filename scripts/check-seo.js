import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const URL = 'http://localhost:5174';

// Import route configuration (same as sitemap generator)
const routes = [
  { path: '/', name: 'Homepage' },
  { path: '/money', name: 'Money' },
  { path: '/banking', name: 'Banking' },
  { path: '/economics', name: 'Economics' },
  { path: '/computer-science', name: 'Computer Science' },
  { path: '/game-theory', name: 'Game Theory' },
  { path: '/energy', name: 'Energy' },
  { path: '/politics', name: 'Politics' },
  { path: '/philosophy', name: 'Philosophy' },
  { path: '/law', name: 'Law' },
  { path: '/learning-path', name: 'Learning Path' },
  { path: '/study-guide', name: 'Study Guide' },
  { path: '/resources', name: 'Resources' },
  { path: '/articles', name: 'Articles' },
  { path: '/buy-bitcoin', name: 'Buy Bitcoin' },
  { path: '/about', name: 'About' }
];

const languages = [
  { code: 'en', path: '', name: 'English' },
  { code: 'zh', path: '/zh', name: 'Chinese' }
];

async function checkPageSEO(page, url, pageName = 'Page') {
  await page.goto(url, { waitUntil: 'networkidle0' });
  
  const seoData = await page.evaluate(() => {
    const data = {};
    
    // Basic meta tags
    data.title = document.title;
    data.lang = document.documentElement.lang;
    
    // Meta tags
    const metaTags = {};
    document.querySelectorAll('meta').forEach(meta => {
      const name = meta.getAttribute('name');
      const property = meta.getAttribute('property');
      const content = meta.getAttribute('content');
      
      if (name) metaTags[name] = content;
      if (property) metaTags[property] = content;
    });
    data.meta = metaTags;
    
    // Hreflang links
    const hreflangs = {};
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(link => {
      const hreflang = link.getAttribute('hreflang');
      const href = link.getAttribute('href');
      hreflangs[hreflang] = href;
    });
    data.hreflangs = hreflangs;
    
    // Canonical
    const canonical = document.querySelector('link[rel="canonical"]');
    data.canonical = canonical ? canonical.getAttribute('href') : null;
    
    // Structured data
    const ldJson = document.querySelector('script[type="application/ld+json"]');
    if (ldJson) {
      try {
        data.structuredData = JSON.parse(ldJson.textContent);
      } catch (e) {
        data.structuredData = null;
      }
    }
    
    return data;
  });
  
  return { pageName, url, ...seoData };
}

async function validateSEO(seoData) {
  const issues = [];
  const warnings = [];
  const success = [];
  
  // Check title
  if (!seoData.title) {
    issues.push('❌ Missing page title');
  } else if (seoData.title.length > 60) {
    warnings.push(`⚠️  Title too long (${seoData.title.length} chars, recommended < 60)`);
  } else {
    success.push('✅ Title present and optimal length');
  }
  
  // Check description
  if (!seoData.meta?.description) {
    issues.push('❌ Missing meta description');
  } else if (seoData.meta.description.length > 160) {
    warnings.push(`⚠️  Description too long (${seoData.meta.description.length} chars, recommended < 160)`);
  } else {
    success.push('✅ Meta description present and optimal length');
  }
  
  // Check language
  if (!seoData.lang) {
    issues.push('❌ Missing HTML lang attribute');
  } else {
    success.push(`✅ Language set to: ${seoData.lang}`);
  }
  
  // Check canonical
  if (!seoData.canonical) {
    warnings.push('⚠️  Missing canonical URL');
  } else {
    success.push('✅ Canonical URL present');
  }
  
  // Check hreflang
  const expectedLangs = ['en', 'zh', 'x-default'];
  const missingHreflangs = expectedLangs.filter(lang => !seoData.hreflangs[lang]);
  if (missingHreflangs.length > 0) {
    warnings.push(`⚠️  Missing hreflang for: ${missingHreflangs.join(', ')}`);
  } else {
    success.push('✅ All hreflang tags present');
  }
  
  // Check Open Graph
  const ogRequired = ['og:title', 'og:description', 'og:image', 'og:url'];
  const missingOg = ogRequired.filter(tag => !seoData.meta[tag]);
  if (missingOg.length > 0) {
    warnings.push(`⚠️  Missing Open Graph tags: ${missingOg.join(', ')}`);
  } else {
    success.push('✅ All required Open Graph tags present');
  }
  
  // Check Twitter Card
  const twitterRequired = ['twitter:card', 'twitter:title', 'twitter:description'];
  const missingTwitter = twitterRequired.filter(tag => !seoData.meta[tag]);
  if (missingTwitter.length > 0) {
    warnings.push(`⚠️  Missing Twitter Card tags: ${missingTwitter.join(', ')}`);
  } else {
    success.push('✅ All required Twitter Card tags present');
  }
  
  return { issues, warnings, success };
}

async function checkSEO() {
  console.log('🔍 Starting Comprehensive SEO Check...\n');
  console.log('=====================================\n');
  
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  try {
    const results = [];
    let totalIssues = 0;
    let totalWarnings = 0;
    
    // Check sample pages from each language
    for (const lang of languages) {
      console.log(`\n🌐 Checking ${lang.name} version...`);
      console.log('-----------------------------------');
      
      // Check homepage and a few content pages
      const pagesToCheck = [
        { path: '/', name: 'Homepage' },
        { path: '/money', name: 'Money Page' },
        { path: '/buy-bitcoin', name: 'Buy Bitcoin Page' }
      ];
      
      for (const pageInfo of pagesToCheck) {
        const fullUrl = `${URL}${lang.path}${pageInfo.path}`;
        const pageName = `${lang.name} - ${pageInfo.name}`;
        
        console.log(`\n📄 Checking: ${pageName}`);
        console.log(`   URL: ${fullUrl}`);
        
        try {
          const seoData = await checkPageSEO(page, fullUrl, pageName);
          const validation = await validateSEO(seoData);
          
          results.push({ ...seoData, validation });
          
          // Display results
          if (validation.issues.length > 0) {
            console.log('\n   Issues:');
            validation.issues.forEach(issue => console.log(`   ${issue}`));
            totalIssues += validation.issues.length;
          }
          
          if (validation.warnings.length > 0) {
            console.log('\n   Warnings:');
            validation.warnings.forEach(warning => console.log(`   ${warning}`));
            totalWarnings += validation.warnings.length;
          }
          
          if (validation.success.length > 0) {
            console.log('\n   Success:');
            validation.success.forEach(item => console.log(`   ${item}`));
          }
          
        } catch (error) {
          console.log(`   ❌ Error checking page: ${error.message}`);
        }
      }
    }
    
    // Summary
    console.log('\n\n=====================================');
    console.log('📊 SEO CHECK SUMMARY');
    console.log('=====================================\n');
    
    console.log(`Pages checked: ${results.length}`);
    console.log(`Total issues: ${totalIssues} ${totalIssues === 0 ? '✅' : '❌'}`);
    console.log(`Total warnings: ${totalWarnings} ${totalWarnings === 0 ? '✅' : '⚠️'}`);
    
    // Check sitemap existence
    const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
    if (fs.existsSync(sitemapPath)) {
      console.log('\n✅ sitemap.xml exists');
      const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
      const urlCount = (sitemapContent.match(/<loc>/g) || []).length;
      console.log(`   Contains ${urlCount} URLs`);
    } else {
      console.log('\n❌ sitemap.xml not found');
    }
    
    // Check robots.txt
    const robotsPath = path.join(__dirname, '../public/robots.txt');
    if (fs.existsSync(robotsPath)) {
      console.log('✅ robots.txt exists');
    } else {
      console.log('❌ robots.txt not found');
    }
    
    // Overall score
    const score = totalIssues === 0 && totalWarnings <= 3 ? '🌟 EXCELLENT' : 
                  totalIssues === 0 ? '✅ GOOD' : 
                  '⚠️  NEEDS IMPROVEMENT';
    
    console.log(`\n📈 Overall SEO Score: ${score}`);
    
    // Save detailed report
    const reportPath = path.join(__dirname, '../seo-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
    console.log(`\n📝 Detailed report saved to: ${reportPath}`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
}

// Run the check
checkSEO();