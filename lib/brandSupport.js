/**
 * Official U.S. manufacturer contact details for brand customer-service pages.
 * Phone numbers and sites are the public lines each brand publishes for support.
 * Hours change; the matching blog explains what to confirm before calling.
 */

export const BRAND_SUPPORT = {
  hp: {
    name: 'HP',
    phoneDisplay: '1-800-474-6836',
    phoneHref: 'tel:+18004746836',
    websiteLabel: 'support.hp.com',
    websiteUrl: 'https://support.hp.com/us-en',
    hours:
      'HP shows phone options after you identify the printer. The published U.S. consumer support line is 1-800-474-6836.',
    blogSlug: 'hp-printer-troubleshooting-guide',
    blogLabel: 'HP printer troubleshooting guide',
    lede: 'Official HP customer service for printer setup, warranty, and account help.',
    metaDescription:
      'HP customer service guidance focused on official HP support for printer phone help, drivers, warranty, and scam-safe contact.',
    fixes: [
      { href: '/services/hp-printer-offline', label: 'HP printer offline' },
      { href: '/services/hp-printer-not-printing', label: 'HP printer not printing' },
    ],
  },
  canon: {
    name: 'Canon',
    phoneDisplay: '1-800-652-2666',
    phoneHref: 'tel:+18006522666',
    phoneAlias: '1-800-OK-CANON',
    websiteLabel: 'usa.canon.com/support',
    websiteUrl: 'https://www.usa.canon.com/support',
    hours:
      'Canon Customer Care is typically Monday–Friday, 8:00 a.m.–8:00 p.m. Eastern. Confirm hours on the support site before you call.',
    blogSlug: 'canon-printer-problems-solutions-guide',
    blogLabel: 'Canon printer problems and fixes',
    lede: 'Official Canon U.S.A. customer service for printer setup, warranty, and drivers.',
    metaDescription:
      'Canon customer service guidance focused on official Canon support for printer phone help, drivers, warranty, and scam-safe contact.',
    fixes: [
      { href: '/services/canon-printer-offline', label: 'Canon printer offline' },
      { href: '/services/printer-driver-installation', label: 'Printer driver installation' },
    ],
  },
  epson: {
    name: 'Epson',
    phoneDisplay: '1-562-276-7202',
    phoneHref: 'tel:+15622767202',
    phoneAlias: 'Printer technical support',
    extraPhones: [
      {
        display: '1-800-463-7766',
        href: 'tel:+18004637766',
        alias: '1-800-GO-EPSON — sales and product questions',
      },
    ],
    websiteLabel: 'epson.com/Support',
    websiteUrl: 'https://epson.com/Support',
    hours:
      'Epson lists printer technical support Monday–Friday 6:00 a.m.–8:00 p.m. PT and Saturday 7:00 a.m.–4:00 p.m. PT. The sales line is Monday–Friday, 7:00 a.m.–4:00 p.m. PT.',
    blogSlug: 'epson-printer-error-codes-list-fixes',
    blogLabel: 'Epson printer error codes',
    lede: 'Official Epson customer service for printer technical support, drivers, and supplies.',
    metaDescription:
      'Epson customer service guidance focused on official Epson support for printer phone help, ink, warranty, and scam-safe contact.',
    fixes: [
      { href: '/services/epson-printer-not-printing', label: 'Epson printer not printing' },
      { href: '/services/printer-printing-blank-pages', label: 'Printer printing blank pages' },
    ],
  },
  brother: {
    name: 'Brother',
    phoneDisplay: '1-877-276-8437',
    phoneHref: 'tel:+18772768437',
    phoneAlias: '1-877-BROTHER',
    websiteLabel: 'brother-usa.com/support',
    websiteUrl: 'https://www.brother-usa.com/support',
    hours:
      'Brother publishes 1-877-276-8437 for U.S. printer and fax support. Weekday hours are listed on the support site and can change.',
    blogSlug: 'brother-printer-offline-fix-solutions',
    blogLabel: 'Brother printer offline fixes',
    lede: 'Official Brother customer service for printer setup, warranty, and drivers.',
    metaDescription:
      'Brother customer service guidance focused on official Brother support for printer phone help, drivers, warranty, and scam-safe contact.',
    fixes: [
      { href: '/services/brother-printer-offline', label: 'Brother printer offline' },
      { href: '/services/wireless-printer-setup', label: 'Wireless printer setup' },
    ],
  },
  samsung: {
    name: 'Samsung',
    phoneDisplay: '1-800-726-7864',
    phoneHref: 'tel:+18007267864',
    phoneAlias: '1-800-SAMSUNG',
    extraLinks: [
      {
        label: 'HP support for Samsung printers',
        url: 'https://support.hp.com/us-en/printer',
      },
    ],
    websiteLabel: 'samsung.com/us/support',
    websiteUrl: 'https://www.samsung.com/us/support/contact/',
    hours:
      'Samsung lists phone support 8:00 a.m.–9:00 p.m. ET Monday–Friday and 8:00 a.m.–6:00 p.m. ET Saturday–Sunday. Samsung printers are serviced through HP.',
    blogSlug: 'samsung-printer-troubleshooting-guide',
    blogLabel: 'Samsung printer troubleshooting guide',
    lede: 'Official Samsung customer service. Samsung printers are supported through HP.',
    metaDescription:
      'Samsung customer service guidance for official Samsung support, with printer help through HP, and scam-safe contact.',
    fixes: [
      { href: '/services/printer-offline', label: 'Printer offline' },
      { href: '/services/printer-driver-installation', label: 'Printer driver installation' },
    ],
  },
};

const SITE = 'https://www.zamzamprint.com';
const OG_IMAGE = '/side-view-employee-using-printer.jpg';

export function brandCustomerServiceMetadata(brand) {
  const info = getBrandSupport(brand);
  const title = `${info.name} Customer Service`;
  const description = info.metaDescription;
  const url = `${SITE}/brands/${brand}/customer-service`;
  return {
    title: { absolute: title },
    description,
    authors: [{ name: 'ZamZam Print Support' }],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_US',
      url,
      siteName: 'ZamZam Print Support',
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${info.name} customer service` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE],
    },
    alternates: { canonical: url },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

export function brandHubMetadata(brand) {
  const info = getBrandSupport(brand);
  const title = `${info.name} Printer Support`;
  const description = `${info.name} technical support for printer troubleshooting, a repair hub, and the official customer service phone and website.`;
  const url = `${SITE}/brands/${brand}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: 'ZamZam Print Support',
      type: 'website',
    },
  };
}

export const BRAND_KEYS = Object.keys(BRAND_SUPPORT);

export function getBrandSupport(brand) {
  const info = BRAND_SUPPORT[brand];
  if (!info) throw new Error(`Unknown brand support key: ${brand}`);
  return info;
}
