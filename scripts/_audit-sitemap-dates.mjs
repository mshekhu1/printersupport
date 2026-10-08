const paths = [
  '',
  'services',
  'contact',
  'pricing',
  'about',
  'blog',
  'privacy-policy',
  'refund-policy',
  'terms-of-service',
  'services/printer-offline',
  'services/hp-printer-offline',
  'services/hp-printer-repair-guide',
  'services/canon-printer-repair-guide',
  'services/epson-printer-repair-guide',
  'services/brother-printer-repair-guide',
  'services/brother-printer-offline',
  'services/canon-printer-offline',
  'services/hp-printer-not-printing',
  'services/epson-printer-not-printing',
  'services/samsung-printer-repair-guide',
  'services/printer-driver-installation',
  'services/wireless-printer-setup',
  'services/printer-not-connecting',
  'services/printer-error-codes',
  'services/printer-spooler-error',
  'services/printer-paper-jam',
  'services/printer-printing-blank-pages',
];

const res = await fetch('https://www.zamzamprint.com/sitemap.xml');
const xml = await res.text();

for (const p of paths) {
  const loc = 'https://www.zamzamprint.com' + (p ? `/${p}` : '');
  const idx = xml.indexOf(`<loc>${loc}</loc>`);
  if (idx === -1) {
    console.log(`${p || '/'}\tMISSING`);
    continue;
  }
  const slice = xml.slice(idx, idx + 400);
  const lm = slice.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1] || '-';
  console.log(`${p || '/'}\t${lm}`);
}
