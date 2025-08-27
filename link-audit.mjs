// Link Audit Toolkit for CONEST IMPEX SRL
// Purpose: Crawl your deployed site (or local dev), collect ALL <a> links, verify statuses,
// build an internal linking map, and flag orphan/underlinked new pages (services/cities).
//
// Usage (Node 18+):
// 1) npm i -D playwright node-fetch@3 csv-stringify
// 2) npx playwright install chromium
// 3) Create/adjust expected_routes.json (see bottom of this file) for your new pages.
// 4) Run: node link-audit.mjs --base https://example.ro --sitemap https://example.ro/sitemap.xml
// 5) Outputs in .link-audit/: linkMap.json, link_audit.csv, orphan_pages.json, coverage.json

import { writeFile, mkdir } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import { resolve } from 'node:path';
import { chromium } from 'playwright';
import fetch from 'node-fetch';
import { stringify } from 'csv-stringify';

const args = Object.fromEntries(process.argv.slice(2).map((x)=>{
  const [k,...rest]=x.split('=');
  return [k.replace(/^--/,''), rest.join('=')||true];
}));

const BASE = (args.base || 'http://localhost:3002').replace(/\/$/, '');
const SITEMAP = args.sitemap || '';
const OUTDIR = resolve('.link-audit');
const MAX_PAGES = Number(args.max || 1000);
const SAME_HOST = new URL(BASE).host;
const TIMEOUT = 15000;

// Helper: Normalize URLs
function norm(url){
  try{
    const u = new URL(url, BASE);
    // Force same-origin path format for internal links
    if(u.host===SAME_HOST){
      let p = u.pathname.replace(/\/$/, '');
      if(p==='') p='/';
      return p + (u.search?u.search:'');
    }
    return u.toString();
  }catch{
    return null;
  }
}

// Load expected routes (services + cities) if present
let expected = { routes: [], mustLinkFrom: { '/': ['all'] } };
try {
  const { default: importedExpected } = await import('./expected_routes.json', { assert: { type: 'json' } });
  expected = importedExpected;
} catch {
  console.warn('No expected_routes.json found, using defaults');
}

const EXPECTED_INTERNAL = new Set(expected.routes || []);
const MUST_LINK_FROM = expected.mustLinkFrom || { '/': ['all'] , '/footer': [] }; // simple rule

// Basic HTML link extraction executed inside the page
function clientExtract(){
  const data = [];
  const as = Array.from(document.querySelectorAll('a[href]'));
  for(const a of as){
    const href = a.getAttribute('href');
    const text = (a.textContent||'').trim().slice(0,160);
    // find closest section heading context
    let ctx='';
    let el=a; let depth=0;
    while(el && depth<6){
      const h = el.querySelector?.('h1,h2,h3,h4');
      if(h){ ctx = (h.textContent||'').trim().slice(0,160); break; }
      el = el.parentElement; depth++;
    }
    data.push({ href, text, ctx });
  }
  return data;
}

async function statusCheck(url){
  try{
    const res = await fetch(url, { method: 'HEAD', redirect: 'manual', timeout: TIMEOUT });
    const code = res.status;
    const location = res.headers.get('location')||'';
    return { code, redirected: code>=300 && code<400, location };
  }catch(e){
    return { code: 0, error: String(e).slice(0,200) };
  }
}

async function fetchSitemap(){
  if(!SITEMAP) return [];
  try{
    const res = await fetch(SITEMAP, { timeout: TIMEOUT });
    const xml = await res.text();
    const urls = Array.from(xml.matchAll(/<loc>(.*?)<\/loc>/g)).map(m=>m[1]);
    return urls.filter(u=>new URL(u).host===SAME_HOST).map(u=>norm(u)).filter(Boolean);
  }catch{
    return [];
  }
}

async function crawl(){
  await mkdir(OUTDIR, { recursive: true });
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const queue = new Set(['/']);
  for(const s of await fetchSitemap()) if(s) queue.add(s);
  const visited = new Set();
  const links = []; // {source, hrefRaw, hrefNorm, anchor, context}

  while(queue.size && visited.size < MAX_PAGES){
    const path = queue.values().next().value; queue.delete(path);
    if(!path || visited.has(path)) continue;
    visited.add(path);

    const url = path.startsWith('http')? path : `${BASE}${path==='/'?'':path}`;
    try{
      const resp = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: TIMEOUT });
      const status = resp?.status();
      if(status && status>=400) {
        console.warn('Page error', status, path);
      }
      // extract anchors in page context
      const found = await page.evaluate(clientExtract);
      for(const f of found){
        const hrefNorm = norm(f.href);
        if(!hrefNorm) continue;
        links.push({ source: path, hrefRaw: f.href, hrefNorm, anchor: f.text, context: f.ctx });
        // queue internal links
        if(!hrefNorm.startsWith('http')){
          if(!visited.has(hrefNorm)) queue.add(hrefNorm);
        }
      }
    }catch(e){
      console.warn('Nav fail', path, e);
    }
  }

  // Status-check external links and internal absolute URLs only
  const external = links.filter(l=> l.hrefNorm.startsWith('http'));
  const statusResults = {};
  await Promise.all(external.map(async (l)=>{
    statusResults[l.hrefNorm] = statusResults[l.hrefNorm] || await statusCheck(l.hrefNorm);
  }));

  // Build structures
  const internalLinks = links.filter(l=> !l.hrefNorm.startsWith('http'));
  const pages = Array.from(new Set(internalLinks.map(l=>l.source)));
  const destinations = Array.from(new Set(internalLinks.map(l=>l.hrefNorm)));
  const allInternal = Array.from(new Set([...pages, ...destinations]));

  // Orphans = EXPECTED_INTERNAL minus pages that have at least one inbound link
  const inbound = new Map();
  for(const d of destinations){ inbound.set(d, 0); }
  for(const l of internalLinks){ inbound.set(l.hrefNorm, (inbound.get(l.hrefNorm)||0)+1); }
  const orphanExpected = Array.from(EXPECTED_INTERNAL).filter(p=> (inbound.get(p)||0)===0);

  // Coverage metrics
  const coverage = {
    pagesDiscovered: allInternal.length,
    expectedPages: EXPECTED_INTERNAL.size,
    expectedCovered: Array.from(EXPECTED_INTERNAL).filter(p=> (inbound.get(p)||0)>0).length,
    expectedOrphans: orphanExpected.length,
    percentExpectedCovered: EXPECTED_INTERNAL.size? Math.round(100*Array.from(EXPECTED_INTERNAL).filter(p=> (inbound.get(p)||0)>0).length/EXPECTED_INTERNAL.size) : 0,
    avgInboundPerExpected: EXPECTED_INTERNAL.size? (Array.from(EXPECTED_INTERNAL).reduce((a,p)=>a+(inbound.get(p)||0),0)/EXPECTED_INTERNAL.size).toFixed(2): '0.00',
  };

  // CSV export
  await new Promise((res, rej)=>{
    const csv = stringify({ header: true, columns: ['source','anchor','destination','context','status','redirected','location'] });
    csv.on('error', rej);
    csv.pipe(createWriteStream(resolve(OUTDIR,'link_audit.csv'))).on('finish', res);
    for(const l of links){
      const stat = l.hrefNorm.startsWith('http') ? statusResults[l.hrefNorm] : {};
      csv.write({ source: l.source, anchor: l.anchor, destination: l.hrefNorm, context: l.context, status: stat.code||'', redirected: stat.redirected||'', location: stat.location||'' });
    }
    csv.end();
  });

  // JSON outputs
  await writeFile(resolve(OUTDIR,'linkMap.json'), JSON.stringify({ base: BASE, links, internalLinks, externalStatus: statusResults }, null, 2));
  await writeFile(resolve(OUTDIR,'orphan_pages.json'), JSON.stringify({ expectedOrphans: orphanExpected, inboundCounts: Object.fromEntries(inbound) }, null, 2));
  await writeFile(resolve(OUTDIR,'coverage.json'), JSON.stringify(coverage, null, 2));

  // Minimal rule check: ensure each EXPECTED_INTERNAL is linked from homepage if policy says so
  const fromHome = internalLinks.filter(l=> l.source==='/' ).map(l=>l.hrefNorm);
  const mustFromHome = Array.from(EXPECTED_INTERNAL).filter(p=> expected.mustLinkFrom?.['/']?.includes('all'));
  const missingFromHome = mustFromHome.filter(p=> !fromHome.includes(p));
  await writeFile(resolve(OUTDIR,'missing_from_home.json'), JSON.stringify({ missingFromHome }, null, 2));

  await browser.close();

  console.log('\n✅ Link audit complete. See .link-audit/');
  console.table(coverage);
}

crawl();