const urls = [
  'https://www.zamzamprint.com',
  'https://www.zamzamprint.com/services',
  'https://www.zamzamprint.com/contact',
  'https://www.zamzamprint.com/pricing',
  'https://www.zamzamprint.com/about',
  'https://www.zamzamprint.com/blog',
  'https://www.zamzamprint.com/privacy-policy',
  'https://www.zamzamprint.com/refund-policy',
  'https://www.zamzamprint.com/terms-of-service',
  'https://www.zamzamprint.com/services/printer-offline',
  'https://www.zamzamprint.com/services/hp-printer-offline',
  'https://www.zamzamprint.com/services/hp-printer-repair-guide',
  'https://www.zamzamprint.com/services/canon-printer-repair-guide',
  'https://www.zamzamprint.com/services/epson-printer-repair-guide',
  'https://www.zamzamprint.com/services/brother-printer-repair-guide',
  'https://www.zamzamprint.com/services/brother-printer-offline',
  'https://www.zamzamprint.com/services/canon-printer-offline',
  'https://www.zamzamprint.com/services/hp-printer-not-printing',
  'https://www.zamzamprint.com/services/epson-printer-not-printing',
  'https://www.zamzamprint.com/services/samsung-printer-repair-guide',
  'https://www.zamzamprint.com/services/printer-driver-installation',
  'https://www.zamzamprint.com/services/wireless-printer-setup',
  'https://www.zamzamprint.com/services/printer-not-connecting',
  'https://www.zamzamprint.com/services/printer-error-codes',
  'https://www.zamzamprint.com/services/printer-spooler-error',
  'https://www.zamzamprint.com/services/printer-paper-jam',
  'https://www.zamzamprint.com/services/printer-printing-blank-pages',
];

function pick(html, re) {
  return [...html.matchAll(re)].map((m) => m[1]);
}

const counts = {};
for (const u of urls) {
  const path = u.replace('https://www.zamzamprint.com', '') || '/';
  try {
    const res = await fetch(u, { redirect: 'follow' });
    const html = await res.text();
    const pubs = pick(html, /datePublished"\s*:\s*"([^"]+)"/g);
    const mods = pick(html, /dateModified"\s*:\s*"([^"]+)"/g);
    const ogp = html.match(/property="article:published_time"\s+content="([^"]+)"/)?.[1] || '-';
    const ogm = html.match(/property="article:modified_time"\s+content="([^"]+)"/)?.[1] || '-';
    const last = html.match(/Last Updated:\s*([^<\n]+)/)?.[1]?.trim() || '-';
    let issue = 'OK';
    if (res.status !== 200) issue = 'BAD_STATUS';
    else if (pubs.some((p) => p.startsWith('2024-01-01'))) issue = 'PLACEHOLDER_PUB';
    else if (mods.some((m) => !/^\d{4}-\d{2}-\d{2}/.test(m))) issue = 'NON_ISO_MOD';
    else if (!pubs.length && !mods.length) issue = 'NO_DATES';
    else if (pubs[0] && mods[0] && mods[0] < pubs[0]) issue = 'MOD_BEFORE_PUB';

    counts[issue] = (counts[issue] || 0) + 1;
    console.log(
      [
        path,
        res.status,
        pubs.join('|') || '-',
        mods.join('|') || '-',
        ogp,
        ogm,
        last,
        issue,
      ].join('\t')
    );
  } catch (e) {
    counts.ERR = (counts.ERR || 0) + 1;
    console.log([path, 'ERR', e.message].join('\t'));
  }
}
console.log('---SUMMARY---');
console.log(counts);
