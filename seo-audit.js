#!/usr/bin/env node

const https = require('https');
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.conest-gaze-centrale.ro';
const outputDir = './seo-exports';

// List of pages to audit
const pages = [
  '/',
  '/instalatii-gaze-naturale',
  '/centrale-termice',
  '/urgente',
  '/revizii-anre',
  '/sisteme-siguranta',
  '/modernizare-smart-home',
  '/montaj-senzori-electrovalve',
  '/pregatire-centrala-iarna',
  '/instalatii-gaze-mamaia',
  '/constanta-mamaia',
  '/navodari-medgidia',
  '/mangalia-eforie',
  '/lucrari-nationale',
  '/intrebari-frecvente',
  '/politica-confidentialitate',
  '/termeni-conditii',
  '/certificari-anre-iscir'
];

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve({
        url,
        statusCode: res.statusCode,
        headers: res.headers,
        html: data
      }));
    }).on('error', reject);
  });
}

async function analyzePage(pageData) {
  const { url, statusCode, headers, html } = pageData;
  
  // Extract SEO elements
  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1] : 'No title found';
  
  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"[^>]*>/i);
  const description = descMatch ? descMatch[1] : 'No description found';
  
  // Count headings
  const h1Count = (html.match(/<h1[^>]*>/gi) || []).length;
  const h2Count = (html.match(/<h2[^>]*>/gi) || []).length;
  const h3Count = (html.match(/<h3[^>]*>/gi) || []).length;
  
  // Count links
  const internalLinks = (html.match(/href="\/[^"]*"/gi) || []).length;
  const externalLinks = (html.match(/href="https?:\/\/(?!conest-gaze-centrale\.ro)[^"]*"/gi) || []).length;
  
  // Check for schema markup
  const hasSchema = html.includes('application/ld+json');
  
  // Check for images without alt
  const imgMatches = html.match(/<img[^>]*>/gi) || [];
  const imagesWithoutAlt = imgMatches.filter(img => !img.includes('alt=')).length;
  
  // Page size
  const pageSize = Buffer.byteLength(html, 'utf8');
  
  return {
    url,
    statusCode,
    title,
    titleLength: title.length,
    description,
    descriptionLength: description.length,
    h1Count,
    h2Count,
    h3Count,
    internalLinks,
    externalLinks,
    hasSchema,
    imagesWithoutAlt,
    pageSize: Math.round(pageSize / 1024) + 'KB',
    contentType: headers['content-type'],
    lastModified: headers['last-modified'] || 'Not specified'
  };
}

async function runAudit() {
  console.log('🔍 Starting SEO Audit for', baseUrl);
  console.log('=' .repeat(50));
  
  const results = [];
  const errors = [];
  
  for (const page of pages) {
    const url = baseUrl + page;
    console.log(`\nCrawling: ${url}`);
    
    try {
      const pageData = await fetchPage(url);
      const analysis = await analyzePage(pageData);
      results.push(analysis);
      
      // Print summary
      console.log(`  ✅ Status: ${analysis.statusCode}`);
      console.log(`  📝 Title: ${analysis.title.substring(0, 60)}... (${analysis.titleLength} chars)`);
      console.log(`  📊 H1: ${analysis.h1Count}, H2: ${analysis.h2Count}, H3: ${analysis.h3Count}`);
      console.log(`  🔗 Internal: ${analysis.internalLinks}, External: ${analysis.externalLinks}`);
      
      // Warnings
      if (analysis.titleLength > 60) {
        console.log(`  ⚠️  Title too long (${analysis.titleLength} > 60)`);
      }
      if (analysis.titleLength < 30) {
        console.log(`  ⚠️  Title too short (${analysis.titleLength} < 30)`);
      }
      if (analysis.descriptionLength > 160) {
        console.log(`  ⚠️  Description too long (${analysis.descriptionLength} > 160)`);
      }
      if (analysis.descriptionLength < 120) {
        console.log(`  ⚠️  Description too short (${analysis.descriptionLength} < 120)`);
      }
      if (analysis.h1Count === 0) {
        console.log(`  ⚠️  No H1 found`);
      }
      if (analysis.h1Count > 1) {
        console.log(`  ⚠️  Multiple H1s found (${analysis.h1Count})`);
      }
      if (analysis.imagesWithoutAlt > 0) {
        console.log(`  ⚠️  ${analysis.imagesWithoutAlt} images without alt text`);
      }
      
    } catch (error) {
      console.log(`  ❌ Error: ${error.message}`);
      errors.push({ url, error: error.message });
    }
  }
  
  // Generate CSV report
  const csvHeaders = [
    'URL',
    'Status Code',
    'Title',
    'Title Length',
    'Description',
    'Description Length',
    'H1 Count',
    'H2 Count',
    'H3 Count',
    'Internal Links',
    'External Links',
    'Has Schema',
    'Images Without Alt',
    'Page Size',
    'Content Type'
  ].join(',');
  
  const csvRows = results.map(r => [
    r.url,
    r.statusCode,
    `"${r.title.replace(/"/g, '""')}"`,
    r.titleLength,
    `"${r.description.replace(/"/g, '""')}"`,
    r.descriptionLength,
    r.h1Count,
    r.h2Count,
    r.h3Count,
    r.internalLinks,
    r.externalLinks,
    r.hasSchema ? 'Yes' : 'No',
    r.imagesWithoutAlt,
    r.pageSize,
    r.contentType
  ].join(','));
  
  const csvContent = [csvHeaders, ...csvRows].join('\n');
  const csvPath = path.join(outputDir, 'seo-audit-report.csv');
  fs.writeFileSync(csvPath, csvContent);
  
  // Generate summary report
  const summaryPath = path.join(outputDir, 'seo-audit-summary.txt');
  const summary = `
SEO AUDIT SUMMARY - ${baseUrl}
Generated: ${new Date().toISOString()}
${'='.repeat(70)}

PAGES CRAWLED: ${results.length}
ERRORS: ${errors.length}

KEY FINDINGS:
-------------
✅ Pages with proper status (200): ${results.filter(r => r.statusCode === 200).length}
⚠️  Pages with issues: ${results.filter(r => r.statusCode !== 200).length}

TITLE TAGS:
-----------
✅ Optimal length (30-60 chars): ${results.filter(r => r.titleLength >= 30 && r.titleLength <= 60).length}
⚠️  Too long (>60 chars): ${results.filter(r => r.titleLength > 60).length}
⚠️  Too short (<30 chars): ${results.filter(r => r.titleLength < 30).length}

META DESCRIPTIONS:
------------------
✅ Optimal length (120-160 chars): ${results.filter(r => r.descriptionLength >= 120 && r.descriptionLength <= 160).length}
⚠️  Too long (>160 chars): ${results.filter(r => r.descriptionLength > 160).length}
⚠️  Too short (<120 chars): ${results.filter(r => r.descriptionLength < 120).length}

HEADINGS:
---------
✅ Pages with exactly 1 H1: ${results.filter(r => r.h1Count === 1).length}
⚠️  Pages with no H1: ${results.filter(r => r.h1Count === 0).length}
⚠️  Pages with multiple H1s: ${results.filter(r => r.h1Count > 1).length}

STRUCTURED DATA:
----------------
✅ Pages with schema markup: ${results.filter(r => r.hasSchema).length}
⚠️  Pages without schema: ${results.filter(r => !r.hasSchema).length}

IMAGES:
-------
⚠️  Total images without alt text: ${results.reduce((sum, r) => sum + r.imagesWithoutAlt, 0)}

INTERNAL LINKING:
-----------------
📊 Average internal links per page: ${Math.round(results.reduce((sum, r) => sum + r.internalLinks, 0) / results.length)}
📊 Total internal links: ${results.reduce((sum, r) => sum + r.internalLinks, 0)}

${errors.length > 0 ? `
ERRORS:
-------
${errors.map(e => `❌ ${e.url}: ${e.error}`).join('\n')}
` : ''}

RECOMMENDATIONS:
----------------
1. Fix any title tags that are too long or too short
2. Optimize meta descriptions to be 120-160 characters
3. Ensure each page has exactly one H1 tag
4. Add alt text to all images for accessibility and SEO
5. Implement schema markup on pages that don't have it
6. Review internal linking structure for optimal SEO juice distribution

Report saved to: ${outputDir}/
- CSV Report: seo-audit-report.csv
- Summary: seo-audit-summary.txt
`;
  
  fs.writeFileSync(summaryPath, summary);
  
  console.log('\n' + '='.repeat(50));
  console.log('✅ SEO Audit Complete!');
  console.log(`📊 Results saved to ${outputDir}/`);
  console.log(`   - CSV Report: seo-audit-report.csv`);
  console.log(`   - Summary: seo-audit-summary.txt`);
  
  // Print quick summary
  console.log('\n📈 Quick Summary:');
  console.log(`   - Pages crawled: ${results.length}`);
  console.log(`   - Pages with optimal titles: ${results.filter(r => r.titleLength >= 30 && r.titleLength <= 60).length}/${results.length}`);
  console.log(`   - Pages with schema markup: ${results.filter(r => r.hasSchema).length}/${results.length}`);
  console.log(`   - Total internal links: ${results.reduce((sum, r) => sum + r.internalLinks, 0)}`);
}

// Run the audit
runAudit().catch(console.error);