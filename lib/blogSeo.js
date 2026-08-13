/**
 * Blog SEO controls.
 * Printer blogs open normally (no service redirects / no service canonical overrides).
 * Off-topic posts stay noindex (and redirect to / in next.config).
 */

/** Off-topic posts — keep out of Google index */
export const NOINDEX_BLOG_SLUGS = new Set([
  'gmail-account-recovery-guide-usa',
  'router-not-working-fix-guide-usa',
  'speed-up-slow-computer-windows-11-10-ultimate-guide',
]);

/** No service canonical overrides — blogs keep /blog/{slug} */
export const BLOG_CANONICAL_OVERRIDES = {};

/** CTR-focused title/description overrides for high-imp posts */
export const BLOG_META_OVERRIDES = {
  'canon-error-b200-fix-solution': {
    title: 'Canon B200 Error Fix (2026) — Clear Steps + Remote Help',
    description:
      'Seeing Canon error B200? Follow the reset and printhead checks that fix most cases — or get a US tech on a remote session in minutes.',
  },
  'canon-printer-problems-solutions-guide': {
    title: 'Canon Printer Not Working? Fixes for Offline, Errors & Setup',
    description:
      'Canon printer problems: offline, won’t print, setup fails. Clear Windows fixes for Pixma and more — call for remote help if still stuck.',
  },
  'printer-offline-fix-solutions-2026': {
    title: 'Printer Offline? Fix Windows 10/11 Offline Status Fast',
    description:
      'Printer shows offline but is on? Fix “Use Printer Offline”, spooler, Wi‑Fi and WSD ports — or get remote US support in about 15 minutes.',
  },
  'hp-printer-offline-fix-solutions': {
    title: 'HP Printer Offline Fix — HP Smart, WSD Port & Spooler',
    description:
      'HP printer keeps going offline? Fix HP Smart conflicts, TCP/IP ports, and sleep mode — or call for remote HP printer support.',
  },
  'hp-printer-troubleshooting-guide': {
    title: 'HP Printer Troubleshooting — Offline, Not Printing, Drivers',
    description:
      'HP printer troubleshooting for offline, not printing, and driver errors. Step-by-step fixes plus remote US tech support.',
  },
  'how-to-install-canon-printer-setup-guide': {
    title: 'Canon Printer Setup Guide (Windows) — Install & Connect',
    description:
      'Install a Canon printer on Windows: drivers, Wi‑Fi, and USB. Stuck on setup? Get remote Canon printer support the same day.',
  },
  'brother-printer-not-printing-fix': {
    title: 'Brother Printer Not Printing / Offline — Fixes That Work',
    description:
      'Brother printer not printing or offline? Fix iPrint&Scan, spooler, and ports — or get remote Brother support fast.',
  },
  'printer-not-printing-fixes-solutions': {
    title: 'Printer Not Printing? Fixes for Windows 10/11 (2026)',
    description:
      'Printer won’t print? Clear the queue, restart spooler, reinstall drivers, and check offline status — or call for remote help.',
  },
};

export function getBlogSeo(slug) {
  const noindex = NOINDEX_BLOG_SLUGS.has(slug);
  const canonicalPath = BLOG_CANONICAL_OVERRIDES[slug] || `/blog/${slug}`;
  const meta = BLOG_META_OVERRIDES[slug] || null;
  return { noindex, canonicalPath, meta };
}
