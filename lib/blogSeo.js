/**
 * Blog SEO controls for GSC issues: off-topic dilution, cannibalization, weak CTR.
 */

/** Off-topic / thin posts — keep live but keep out of Google index */
export const NOINDEX_BLOG_SLUGS = new Set([
  'gmail-account-recovery-guide-usa',
  'router-not-working-fix-guide-usa',
  'speed-up-slow-computer-windows-11-10-ultimate-guide',
  // Weaker duplicates of stronger posts (also redirected where possible)
  'printer-offline-fix-solutions-guide',
  'printer-not-responding-fixes-2026-complete-guide',
  'paper-jam-fix-prevent-solutionsv',
]);

/**
 * Prefer service (money) URLs for overlapping DIY posts.
 * Google consolidates signals to these canonicals.
 */
export const BLOG_CANONICAL_OVERRIDES = {
  'hp-printer-offline-fix-solutions': '/services/hp-printer-offline',
  'printer-offline-fix-solutions-2026': '/services/printer-offline',
  'printer-offline-fix-solutions-guide': '/services/printer-offline',
  'brother-printer-not-printing-fix': '/services/brother-printer-offline',
  'printer-not-printing-fixes-solutions': '/services/printer-offline',
  'printer-driver-is-unavailable-fix': '/services/printer-driver-installation',
  'how-to-install-canon-printer-setup-guide': '/services/canon-printer-support',
  'canon-printer-problems-solutions-guide': '/services/canon-printer-support',
  'canon-error-b200-fix-solution': '/services/canon-printer-support',
  'epson-printer-error-codes-list-fixes': '/services/epson-printer-support',
  'printer-error-codes-meanings-fixes': '/services/printer-error-codes',
  'printer-printing-blank-pages-fix': '/services/printer-printing-blank-pages',
  'hp-printer-troubleshooting-guide': '/services/hp-printer-support',
};

/** CTR-focused title/description overrides (GSC high-imp / low-CTR pages) */
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
