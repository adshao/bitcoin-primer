import puppeteer from 'puppeteer';

const URL = 'http://localhost:5173';

async function checkSEO() {
  console.log('🔍 Starting SEO Check...\n');
  
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  try {
    // Visit home page
    await page.goto(URL, { waitUntil: 'networkidle0' });
    
    // Extract all meta tags
    const metaTags = await page.evaluate(() => {
      const tags = {};
      
      // Get basic meta tags
      document.querySelectorAll('meta').forEach(meta => {
        const name = meta.getAttribute('name');
        const property = meta.getAttribute('property');
        const content = meta.getAttribute('content');
        
        if (name) {
          tags[`meta[name="${name}"]`] = content;
        }
        if (property) {
          tags[`meta[property="${property}"]`] = content;
        }
      });
      
      // Get link tags
      document.querySelectorAll('link[rel="canonical"], link[rel="alternate"]').forEach(link => {
        const rel = link.getAttribute('rel');
        const href = link.getAttribute('href');
        const hreflang = link.getAttribute('hreflang');
        
        if (rel === 'canonical') {
          tags['canonical'] = href;
        }
        if (rel === 'alternate' && hreflang) {
          tags[`hreflang[${hreflang}]`] = href;
        }
      });
      
      // Get title
      tags['title'] = document.title;
      
      // Get html lang
      tags['html[lang]'] = document.documentElement.lang;
      
      // Get structured data
      const ldJson = document.querySelector('script[type="application/ld+json"]');
      if (ldJson) {
        try {
          tags['structured_data'] = JSON.parse(ldJson.textContent);
        } catch (e) {
          tags['structured_data'] = 'Invalid JSON';
        }
      }
      
      return tags;
    });
    
    console.log('✅ SEO Tags Found:\n');
    console.log('=====================================\n');
    
    // Display results
    console.log('📄 Basic Info:');
    console.log(`  Title: ${metaTags['title']}`);
    console.log(`  HTML Lang: ${metaTags['html[lang]']}`);
    console.log(`  Description: ${metaTags['meta[name="description"]']}`);
    console.log(`  Keywords: ${metaTags['meta[name="keywords"]']?.substring(0, 50)}...`);
    console.log(`  Generator: ${metaTags['meta[name="generator"]']}`);
    
    console.log('\n🖼️ Open Graph:');
    console.log(`  og:title: ${metaTags['meta[property="og:title"]']}`);
    console.log(`  og:image: ${metaTags['meta[property="og:image"]']}`);
    console.log(`  og:locale: ${metaTags['meta[property="og:locale"]']}`);
    console.log(`  og:locale:alternate: ${metaTags['meta[property="og:locale:alternate"]']}`);
    
    console.log('\n🐦 Twitter Card:');
    console.log(`  twitter:card: ${metaTags['meta[name="twitter:card"]']}`);
    console.log(`  twitter:image: ${metaTags['meta[name="twitter:image"]']}`);
    console.log(`  twitter:site: ${metaTags['meta[name="twitter:site"]']}`);
    
    console.log('\n🌐 Multi-language:');
    console.log(`  Canonical: ${metaTags['canonical']}`);
    console.log(`  hreflang[zh]: ${metaTags['hreflang[zh]']}`);
    console.log(`  hreflang[en]: ${metaTags['hreflang[en]']}`);
    console.log(`  hreflang[x-default]: ${metaTags['hreflang[x-default]']}`);
    
    if (metaTags['structured_data']) {
      console.log('\n📊 Structured Data:');
      console.log(`  Type: ${metaTags['structured_data']['@type']}`);
      console.log(`  Name: ${metaTags['structured_data']['name']}`);
    }
    
    // Check a content page
    console.log('\n\n📖 Checking Money Page...\n');
    await page.goto(`${URL}/money`, { waitUntil: 'networkidle0' });
    
    const moneyPageTitle = await page.title();
    const moneyPageLang = await page.evaluate(() => document.documentElement.lang);
    const articleMeta = await page.evaluate(() => {
      const published = document.querySelector('meta[property="article:published_time"]');
      const modified = document.querySelector('meta[property="article:modified_time"]');
      return {
        published: published?.getAttribute('content'),
        modified: modified?.getAttribute('content')
      };
    });
    
    console.log('  Title:', moneyPageTitle);
    console.log('  HTML Lang:', moneyPageLang);
    console.log('  Article Published:', articleMeta.published);
    console.log('  Article Modified:', articleMeta.modified);
    
    console.log('\n✅ SEO Check Complete!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
}

checkSEO();