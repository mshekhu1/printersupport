/**
 * Blog SEO controls.
 * All blogs stay self-canonical at /blog/{slug} (no service redirects).
 * Titles/descriptions match what Google still shows for site:zamzamprint.com.
 */

/** Posts that must stay out of Google index — empty: all CMS blogs are indexable */
export const NOINDEX_BLOG_SLUGS = new Set();

/** No service canonical overrides — blogs keep /blog/{slug} */
export const BLOG_CANONICAL_OVERRIDES = {};

/** Titles/descriptions Google still lists for site:zamzamprint.com */
export const BLOG_META_OVERRIDES = {
  'hp-printer-troubleshooting-guide': {
    title: 'HP Printer Troubleshooting — Offline, Not Printing, Drivers',
    description:
      'HP printer troubleshooting for offline, not printing, and driver errors. Step-by-step fixes plus remote US tech support.',
  },
  'hp-printer-offline-fix-solutions': {
    title: 'HP Printer Offline Fix: 15 Ways to Get It Online (Windows 11/10)',
    description:
      'HP printer offline on Windows 11/10? Fix HP DeskJet, OfficeJet & LaserJet in minutes. 15 step-by-step solutions — spooler reset, driver fix, SNMP tweak & HP Print and Scan Doctor. Updated 2026.',
  },
  'hp-printer-not-responding-fix': {
    title: 'HP Printer Not Responding? 15 Proven Fixes for All HP Models (2026 Guide)',
    description:
      'The complete troubleshooting guide for HP printer "not responding" errors. Get 15 proven fixes for HP DeskJet, OfficeJet, Envy, LaserJet, and Smart Tank models on Windows 10 and Windows 11.',
  },
  'printer-not-printing-fixes-solutions': {
    title: 'Printer Not Printing? 6 Proven Fixes for All Brands (HP, Canon, Epson, Brother)',
    description:
      'Your printer won\'t print anything? Discover the 14 most common reasons why printers refuse to print and get step-by-step solutions that work for Windows, Mac, and all printer brands.',
  },
  'printer-offline-fix-solutions-guide': {
    title: 'Printer Offline? 12 Proven Solutions to Get Your Printer Online (2026 Guide)',
    description:
      'Is your printer showing offline when it\'s clearly on? Discover why printers go offline and get 12 tested solutions that work for HP, Canon, Epson, Brother & all major brands.',
  },
  'printer-offline-fix-solutions-2026': {
    title: 'Printer Offline? Fix Windows 10/11 Offline Status Fast',
    description:
      'Printer shows offline but is on? Fix “Use Printer Offline”, spooler, Wi‑Fi and WSD ports — or get remote US support in about 15 minutes.',
  },
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
  'printer-error-codes-meanings-fixes': {
    title: 'Printer Error Codes: Complete Guide to All Error Messages & Fixes (2026)',
    description:
      'Mysterious printer error code? Get instant solutions for HP, Canon, Epson, Brother error messages. Decode cryptic errors like E50, 49.4C02, 0x803c010b and fix them now.',
  },
  'printer-not-responding-fixes-2026-complete-guide': {
    title: 'Printer Not Responding? 15 Fixes That Work in 2 Minutes | 2026 Guide',
    description:
      'Most printer problems can be fixed in under 5 minutes. 15 proven solutions for Windows 11, Windows 10, and HP, Canon, Epson, Brother, and Samsung.',
  },
  'printer-driver-is-unavailable-fix': {
    title: 'Printer Driver Is Unavailable? Fix It Fast on Windows 11 & 10 (12 Easy Solutions)',
    description:
      'The most complete fix guide for the "Printer Driver Is Unavailable" error on Windows 10 and 11. Get 12 step-by-step solutions for HP, Canon, Epson, and Brother.',
  },
  'router-not-working-fix-guide-usa': {
    title: 'Router Not Working? Fast Wi-Fi Fix Guide (2026)',
    description:
      'Router not working in the USA? Power-cycle, check WAN lights, reset Wi-Fi, and rejoin 2.4GHz. Printers offline too? Call ZamZam for remote help.',
  },
  'gmail-account-recovery-guide-usa': {
    title: 'Gmail Account Recovery Guide for the USA (2026)',
    description:
      'Locked out of Gmail in the USA? Use Google’s official recovery, backup codes, and 2-Step Verification. Need to print an email again? Remote US help is available.',
  },
  'speed-up-slow-computer-windows-11-10-ultimate-guide': {
    title: 'Speed Up Slow Computer on Windows 11/10 (2026)',
    description:
      'Windows 11/10 crawling? Clear startup apps, free disk space, and reset the print spooler. Still slow? Get a US tech on a remote session in minutes.',
  },
};

export function getBlogSeo(slug) {
  const noindex = NOINDEX_BLOG_SLUGS.has(slug);
  const canonicalPath = BLOG_CANONICAL_OVERRIDES[slug] || `/blog/${slug}`;
  const meta = BLOG_META_OVERRIDES[slug] || null;
  return { noindex, canonicalPath, meta };
}
