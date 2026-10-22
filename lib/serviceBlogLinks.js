/**
 * Service → blog interlinking (final destinations only).
 * Redirect sources stay isolated in next.config.mjs — never use them as hrefs.
 */

export const REDIRECT_SOURCES = new Set([
  '/install-printer-driver',
  '/printer-setup-windows',
  '/printer-offline',
  '/services/hp-printer-support',
  '/services/canon-printer-support',
  '/services/epson-printer-support',
  '/services/brother-printer-support',
  '/services/samsung-printer-support',
]);

export const REDIRECT_DESTINATIONS = {
  '/install-printer-driver': '/services/printer-driver-installation',
  '/printer-setup-windows': '/services/wireless-printer-setup',
  '/printer-offline': '/services/printer-offline',
  '/services/hp-printer-support': '/brands/hp/printer-support',
  '/services/canon-printer-support': '/brands/canon/printer-support',
  '/services/epson-printer-support': '/brands/epson/printer-support',
  '/services/brother-printer-support': '/brands/brother/printer-support',
  '/services/samsung-printer-support': '/brands/samsung/printer-support',
};

export function toCanonicalHref(href) {
  if (!href) return href;
  const path = href.split(/[?#]/)[0];
  const dest = REDIRECT_DESTINATIONS[path];
  if (!dest) return href;
  return `${dest}${href.slice(path.length)}`;
}

export function isRedirectSource(href) {
  if (!href) return false;
  return REDIRECT_SOURCES.has(href.split(/[?#]/)[0]);
}

/** @typedef {{ slug: string, label: string }} BlogLink */

/** Related blogs per service folder name under app/services/ */
export const SERVICE_RELATED_BLOGS = {
  'services-hub': [
    { slug: 'printer-offline-fix-solutions-guide', label: 'Printer offline guide' },
    { slug: 'printer-not-printing-fixes-solutions', label: 'Printer not printing fixes' },
    { slug: 'printer-driver-is-unavailable-fix', label: 'Driver unavailable fix' },
    { slug: 'printer-error-codes-meanings-fixes', label: 'Error codes explained' },
  ],
  // Brand support hubs → overview troubleshooting posts
  'hp-printer-support': [
    { slug: 'hp-printer-troubleshooting-guide', label: 'HP printer troubleshooting guide' },
  ],
  'canon-printer-support': [
    { slug: 'canon-printer-problems-solutions-guide', label: 'Canon printer problems and fixes' },
  ],
  'epson-printer-support': [
    { slug: 'epson-printer-error-codes-list-fixes', label: 'Epson printer error codes' },
  ],
  'brother-printer-support': [
    { slug: 'brother-printer-offline-fix-solutions', label: 'Brother printer offline fixes' },
  ],
  'samsung-printer-support': [
    { slug: 'samsung-printer-troubleshooting-guide', label: 'Samsung printer troubleshooting guide' },
  ],
  // Customer service pages: no blog strip (OEM contact intent only)
  'hp-customer-service': [],
  'canon-customer-service': [],
  'epson-customer-service': [],
  'brother-customer-service': [],
  'samsung-customer-service': [],
  // Repair guides → symptom-level posts (distinct from support hubs)
  'hp-printer-repair-guide': [
    { slug: 'hp-printer-offline-fix-solutions', label: 'HP offline: 15 fixes' },
    { slug: 'hp-printer-not-responding-fix', label: 'HP not responding' },
    { slug: 'printer-driver-is-unavailable-fix', label: 'Driver unavailable fix' },
  ],
  'canon-printer-repair-guide': [
    { slug: 'canon-error-b200-fix-solution', label: 'Canon B200 fix' },
    { slug: 'how-to-install-canon-printer-setup-guide', label: 'Canon install guide' },
    { slug: 'printer-offline-fix-solutions-guide', label: 'Printer offline guide' },
  ],
  'epson-printer-repair-guide': [
    { slug: 'printer-not-printing-fixes-solutions', label: 'Not printing fixes' },
    { slug: 'poor-print-quality-fixes-solutions', label: 'Print quality fixes' },
    { slug: 'printer-wont-connect-to-wifi-fix', label: 'Wi-Fi connect fixes' },
  ],
  'brother-printer-repair-guide': [
    { slug: 'brother-printer-not-printing-fix', label: 'Brother not printing' },
    { slug: 'printer-offline-fix-solutions-guide', label: 'Printer offline guide' },
    { slug: 'printer-driver-is-unavailable-fix', label: 'Driver unavailable fix' },
  ],
  'samsung-printer-repair-guide': [
    { slug: 'printer-offline-fix-solutions-guide', label: 'Printer offline guide' },
    { slug: 'printer-not-printing-fixes-solutions', label: 'Not printing fixes' },
    { slug: 'printer-driver-is-unavailable-fix', label: 'Driver unavailable fix' },
  ],
  'hp-printer-offline': [
    { slug: 'hp-printer-offline-fix-solutions', label: 'HP offline: 15 fixes' },
    { slug: 'printer-offline-fix-solutions-guide', label: 'Generic offline guide' },
    { slug: 'hp-printer-troubleshooting-guide', label: 'HP troubleshooting' },
  ],
  'canon-printer-offline': [
    { slug: 'canon-printer-problems-solutions-guide', label: 'Canon problems guide' },
    { slug: 'printer-offline-fix-solutions-guide', label: 'Printer offline guide' },
    { slug: 'printer-wont-connect-to-wifi-fix', label: 'Wi-Fi connect fixes' },
  ],
  'brother-printer-offline': [
    { slug: 'brother-printer-offline-fix-solutions', label: 'Brother offline: 14 fixes' },
    { slug: 'brother-printer-not-printing-fix', label: 'Brother not printing' },
    { slug: 'printer-offline-fix-solutions-guide', label: 'Printer offline guide' },
  ],
  'hp-printer-not-printing': [
    { slug: 'hp-printer-not-responding-fix', label: 'HP not responding' },
    { slug: 'printer-not-printing-fixes-solutions', label: 'Not printing fixes' },
    { slug: 'hp-printer-troubleshooting-guide', label: 'HP troubleshooting' },
  ],
  'epson-printer-not-printing': [
    { slug: 'printer-not-printing-fixes-solutions', label: 'Not printing fixes' },
    { slug: 'epson-printer-error-codes-list-fixes', label: 'Epson error codes' },
    { slug: 'poor-print-quality-fixes-solutions', label: 'Print quality fixes' },
  ],
  'printer-offline': [
    { slug: 'printer-offline-fix-solutions-guide', label: 'Offline without reinstalling' },
    { slug: 'printer-offline-fix-solutions-2026', label: '11 proven offline fixes' },
    { slug: 'router-not-working-fix-guide-usa', label: 'Router / Wi-Fi drops' },
  ],
  'printer-not-connecting': [
    { slug: 'printer-wont-connect-to-wifi-fix', label: "Won't connect to Wi-Fi" },
    { slug: 'how-to-connect-printer-to-laptop', label: 'Connect printer to laptop' },
    { slug: 'usb-printer-not-detected-windows-11', label: 'USB not detected (Win 11)' },
  ],
  'printer-driver-installation': [
    { slug: 'printer-driver-is-unavailable-fix', label: 'Driver unavailable fix' },
    { slug: 'how-to-install-printer-windows-11-setup-guide', label: 'Install printer on Windows 11' },
    { slug: 'how-to-install-canon-printer-setup-guide', label: 'Canon install guide' },
  ],
  'wireless-printer-setup': [
    { slug: 'printer-wont-connect-to-wifi-fix', label: 'Wi-Fi connect fixes' },
    { slug: 'wireless-printer-keeps-disconnecting-wifi', label: 'Keeps disconnecting' },
    { slug: 'how-to-share-printer-on-network-windows-11', label: 'Share printer on network' },
  ],
  'printer-error-codes': [
    { slug: 'printer-error-codes-meanings-fixes', label: 'Error codes explained' },
    { slug: 'canon-error-b200-fix-solution', label: 'Canon B200 fix' },
    { slug: 'epson-printer-error-codes-list-fixes', label: 'Epson error codes' },
  ],
  'printer-spooler-error': [
    { slug: 'printer-not-printing-fixes-solutions', label: 'Not printing / stuck queue' },
    { slug: 'printer-not-responding-fixes-2026-complete-guide', label: 'Not responding fixes' },
    { slug: 'printer-offline-fix-solutions-guide', label: 'Offline guide' },
  ],
  'printer-paper-jam': [
    { slug: 'paper-jam-fix-prevent-solutionsv', label: 'Clear & prevent paper jams' },
    { slug: 'printer-error-codes-meanings-fixes', label: 'Error codes guide' },
    { slug: 'printer-says-out-of-paper-but-tray-is-full', label: 'Out of paper (tray full)' },
  ],
  'printer-printing-blank-pages': [
    { slug: 'printer-printing-blank-pages-fix', label: 'Blank pages step-by-step' },
    { slug: 'poor-print-quality-fixes-solutions', label: 'Faded / streaky prints' },
    { slug: 'how-to-clean-printer-heads-printhead-cleaning', label: 'Clean printheads' },
    { slug: 'black-ink-not-printing-color-works', label: 'Black ink not printing' },
  ],
};

export function serviceKeyFromPath(servicePathOrKey) {
  if (!servicePathOrKey) return '';
  let key = String(servicePathOrKey)
    .split(/[?#]/)[0]
    .replace(/^\/+|\/+$/g, '');
  if (key.startsWith('services/')) key = key.slice('services/'.length);
  // /brands/hp/printer-support → hp-printer-support
  if (key.startsWith('brands/')) {
    key = key.slice('brands/'.length).replace(/\//g, '-');
  }
  return key;
}

/**
 * @param {string} servicePathOrKey
 * @returns {{ href: string, label: string, slug: string }[]}
 */
export function getRelatedBlogsForService(servicePathOrKey) {
  const key = serviceKeyFromPath(servicePathOrKey);
  const rows = SERVICE_RELATED_BLOGS[key] || [];
  return rows.map(({ slug, label }) => {
    const href = `/blog/${slug}`;
    if (isRedirectSource(href)) {
      throw new Error(`Blog href must not be a redirect source: ${href}`);
    }
    return { href, label, slug };
  });
}
