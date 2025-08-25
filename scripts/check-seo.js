import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const URL = 'http://localhost:5173';

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

async function validateSEO(seoData, expectedUrl, expectedLang) {
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
  } else if (expectedLang && seoData.lang !== expectedLang) {
    warnings.push(`⚠️  Language mismatch: expected '${expectedLang}', got '${seoData.lang}'`);
  } else {
    success.push(`✅ Language correctly set to: ${seoData.lang}`);
  }
  
  // Check canonical
  if (!seoData.canonical) {
    issues.push('❌ Missing canonical URL');
  } else if (expectedUrl && !seoData.canonical.includes(expectedUrl)) {
    issues.push(`❌ Incorrect canonical URL: expected to contain '${expectedUrl}', got '${seoData.canonical}'`);
  } else {
    success.push(`✅ Canonical URL correctly set: ${seoData.canonical}`);
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
  const twitterRequired = ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image'];
  const missingTwitter = twitterRequired.filter(tag => !seoData.meta[tag]);
  if (missingTwitter.length > 0) {
    warnings.push(`⚠️  Missing Twitter Card tags: ${missingTwitter.join(', ')}`);
  } else {
    success.push('✅ All required Twitter Card tags present');
  }
  
  // Check OG image file existence
  if (seoData.meta['og:image']) {
    const imagePath = seoData.meta['og:image'].replace('https://bitcoinprimer.org/', '');
    if (imagePath && !imagePath.startsWith('http')) {
      success.push(`✅ OG image URL configured: ${imagePath}`);
    }
  }
  
  // Check if OG URL matches expected URL
  if (seoData.meta['og:url'] && expectedUrl) {
    const expectedFullUrl = `https://bitcoinprimer.org${expectedUrl}`;
    if (seoData.meta['og:url'] !== expectedFullUrl) {
      issues.push(`❌ OG URL mismatch: expected '${expectedFullUrl}', got '${seoData.meta['og:url']}'`);
    }
  }
  
  // Verify keywords are present
  if (!seoData.meta?.keywords) {
    warnings.push('⚠️  Missing meta keywords');
  } else if (seoData.meta.keywords.length < 30) {
    warnings.push('⚠️  Keywords too short (consider adding more relevant keywords)');
  } else {
    success.push('✅ Keywords present');
  }
  
  return { issues, warnings, success };
}

async function checkSEO(options = {}) {
  const { quick = false, verbose = true } = options;
  
  console.log('🔍 Starting Comprehensive SEO Check...\n');
  console.log('=====================================\n');
  
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Set timeout for page loads
  page.setDefaultTimeout(10000);
  
  try {
    const results = [];
    let totalIssues = 0;
    let totalWarnings = 0;
    let skippedPages = 0;
    
    // Check sample pages from each language
    for (const lang of languages) {
      console.log(`\n🌐 Checking ${lang.name} version...`);
      console.log('-----------------------------------');
      
      // In quick mode, only check a few pages; otherwise check all
      const pagesToCheck = quick ? [
        { path: '/', name: 'Homepage' },
        { path: '/money', name: 'Money Page' },
        { path: '/buy-bitcoin', name: 'Buy Bitcoin Page' }
      ] : routes.filter(r => r.path !== '/articles/:articleSlug').map(r => ({ path: r.path, name: r.name }));
      
      for (const pageInfo of pagesToCheck) {
        const fullUrl = `${URL}${lang.path}${pageInfo.path}`;
        const pageName = `${lang.name} - ${pageInfo.name}`;
        
        console.log(`\n📄 Checking: ${pageName}`);
        console.log(`   URL: ${fullUrl}`);
        
        let retries = 2;
        let success = false;
        
        while (retries > 0 && !success) {
          try {
            const seoData = await checkPageSEO(page, fullUrl, pageName);
            const expectedPath = `${lang.path}${pageInfo.path}`.replace('//', '/');
            const expectedLang = lang.code;
            const validation = await validateSEO(seoData, expectedPath, expectedLang);
            
            results.push({ ...seoData, validation });
            success = true;
            
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
            
            if (validation.success.length > 0 && verbose) {
              console.log('\n   Success:');
              validation.success.forEach(item => console.log(`   ${item}`));
            }
            
          } catch (error) {
            retries--;
            if (retries === 0) {
              console.log(`   ❌ Error checking page: ${error.message}`);
              skippedPages++;
            } else {
              console.log(`   ⚠️  Retrying... (${retries} attempts left)`);
              await new Promise(resolve => setTimeout(resolve, 1000));
            }
          }
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
    
    // Check if referenced images exist
    console.log('\n🖼️  Checking Image Files...');
    const imagesToCheck = [
      '/bitcoin-icon.svg',
      '/bitcoin-icon-192.png',
      '/bitcoin-icon-512.png',
      '/bitcoin-og-image.png'
    ];
    
    let missingImages = [];
    for (const image of imagesToCheck) {
      const imagePath = path.join(__dirname, '../public', image);
      if (!fs.existsSync(imagePath)) {
        missingImages.push(image);
      }
    }
    
    if (missingImages.length > 0) {
      console.log(`❌ Missing image files: ${missingImages.join(', ')}`);
      totalIssues += missingImages.length;
    } else {
      console.log('✅ All referenced images exist');
    }
    
    // Overall score
    const score = totalIssues === 0 && totalWarnings <= 3 ? '🌟 EXCELLENT' : 
                  totalIssues === 0 && totalWarnings <= 6 ? '✅ GOOD' : 
                  totalIssues === 0 ? '⚠️  MINOR ISSUES' :
                  '❌ NEEDS IMPROVEMENT';
    
    console.log(`\n📈 Overall SEO Score: ${score}`);
    
    // Save detailed report
    const reportPath = path.join(__dirname, '../seo-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
    console.log(`\n📝 Detailed report saved to: ${reportPath}`);
    
    // Generate summary report
    const summary = {
      timestamp: new Date().toISOString(),
      pagesChecked: results.length,
      totalIssues,
      totalWarnings,
      score,
      commonIssues: {},
      pageScores: results.map(r => ({
        page: r.pageName,
        issues: r.validation?.issues?.length || 0,
        warnings: r.validation?.warnings?.length || 0
      }))
    };
    
    // Identify common issues
    results.forEach(r => {
      r.validation?.issues?.forEach(issue => {
        const key = issue.replace(/[^a-zA-Z]/g, '');
        summary.commonIssues[key] = (summary.commonIssues[key] || 0) + 1;
      });
    });
    
    const summaryPath = path.join(__dirname, '../seo-summary.json');
    fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
    
    if (verbose) {
      console.log(`📊 Summary report saved to: ${summaryPath}`);
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
}

// Parse command line arguments
const args = process.argv.slice(2);
const options = {
  quick: args.includes('--quick') || args.includes('-q'),
  verbose: !args.includes('--quiet')
};

if (args.includes('--help') || args.includes('-h')) {
  console.log(`
SEO Checker for Bitcoin Primer

Usage: npm run check:seo [options]

Options:
  --quick, -q     Quick mode - only check sample pages
  --quiet         Less verbose output
  --help, -h      Show this help message

Examples:
  npm run check:seo           # Full check of all pages
  npm run check:seo --quick   # Quick check of sample pages
`);
  process.exit(0);
}

// Run the check
checkSEO(options);