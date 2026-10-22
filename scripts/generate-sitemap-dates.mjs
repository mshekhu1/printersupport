/**
 * Writes lib/sitemapPageDates.json from git last-commit dates per page file.
 * Run automatically before `next build` so sitemap lastmod stays accurate on Vercel.
 */
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const PAGE_FILES = {
  '': 'app/page.js',
  services: 'app/services/page.js',
  contact: 'app/contact/page.js',
  pricing: 'app/pricing/page.js',
  about: 'app/about/page.js',
  blog: 'app/blog/page.js',
  'privacy-policy': 'app/privacy-policy/page.js',
  'refund-policy': 'app/refund-policy/page.js',
  'terms-of-service': 'app/terms-of-service/page.js',
  brands: 'app/brands/page.js',
  'brands/hp': 'app/brands/hp/page.js',
  'brands/canon': 'app/brands/canon/page.js',
  'brands/epson': 'app/brands/epson/page.js',
  'brands/brother': 'app/brands/brother/page.js',
  'brands/samsung': 'app/brands/samsung/page.js',
  'services/printer-offline': 'app/services/printer-offline/page.js',
  'services/hp-printer-offline': 'app/services/hp-printer-offline/page.js',
  'brands/hp/printer-support': 'app/brands/hp/printer-support/page.js',
  'brands/canon/printer-support': 'app/brands/canon/printer-support/page.js',
  'brands/epson/printer-support': 'app/brands/epson/printer-support/page.js',
  'brands/brother/printer-support': 'app/brands/brother/printer-support/page.js',
  'services/brother-printer-offline': 'app/services/brother-printer-offline/page.js',
  'services/canon-printer-offline': 'app/services/canon-printer-offline/page.js',
  'services/hp-printer-not-printing': 'app/services/hp-printer-not-printing/page.js',
  'services/epson-printer-not-printing': 'app/services/epson-printer-not-printing/page.js',
  'brands/samsung/printer-support': 'app/brands/samsung/printer-support/page.js',
  'brands/hp/customer-service': 'app/brands/hp/customer-service/page.js',
  'brands/canon/customer-service': 'app/brands/canon/customer-service/page.js',
  'brands/epson/customer-service': 'app/brands/epson/customer-service/page.js',
  'brands/brother/customer-service': 'app/brands/brother/customer-service/page.js',
  'brands/samsung/customer-service': 'app/brands/samsung/customer-service/page.js',
  'services/hp-printer-repair-guide': 'app/services/hp-printer-repair-guide/page.js',
  'services/canon-printer-repair-guide': 'app/services/canon-printer-repair-guide/page.js',
  'services/epson-printer-repair-guide': 'app/services/epson-printer-repair-guide/page.js',
  'services/brother-printer-repair-guide': 'app/services/brother-printer-repair-guide/page.js',
  'services/samsung-printer-repair-guide': 'app/services/samsung-printer-repair-guide/page.js',
  'services/printer-driver-installation': 'app/services/printer-driver-installation/page.js',
  'services/wireless-printer-setup': 'app/services/wireless-printer-setup/page.js',
  'services/printer-not-connecting': 'app/services/printer-not-connecting/page.js',
  'services/printer-error-codes': 'app/services/printer-error-codes/page.js',
  'services/printer-spooler-error': 'app/services/printer-spooler-error/page.js',
  'services/printer-paper-jam': 'app/services/printer-paper-jam/page.js',
  'services/printer-printing-blank-pages': 'app/services/printer-printing-blank-pages/page.js',
};

function gitLastDate(relPath) {
  const full = path.join(root, relPath);
  if (!fs.existsSync(full)) return null;

  const dir = path.dirname(full);
  const files = fs
    .readdirSync(dir)
    .filter((n) => /\.(js|jsx|tsx)$/.test(n))
    .map((n) => path.join(dir, n));

  let latest = null;
  for (const file of files) {
    const rel = path.relative(root, file).replace(/\\/g, '/');
    try {
      const iso = execSync(`git log -1 --format=%cI -- "${rel}"`, {
        cwd: root,
        encoding: 'utf8',
      }).trim();
      if (!iso) continue;
      const d = new Date(iso);
      if (!Number.isNaN(d.getTime()) && (!latest || d > latest)) latest = d;
    } catch {
      // ignore
    }
  }

  if (latest) return latest.toISOString();

  // Fallback: filesystem mtime (local/dev without git history)
  try {
    return fs.statSync(full).mtime.toISOString();
  } catch {
    return null;
  }
}

const dates = {};
for (const [route, file] of Object.entries(PAGE_FILES)) {
  const iso = gitLastDate(file);
  if (iso) dates[route] = iso;
}

const outPath = path.join(root, 'lib', 'sitemapPageDates.json');
fs.writeFileSync(outPath, `${JSON.stringify(dates, null, 2)}\n`);
console.log(`Wrote ${Object.keys(dates).length} page dates → lib/sitemapPageDates.json`);
