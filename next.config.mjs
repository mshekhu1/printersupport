/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fqtwfnlujnjtikqtpydd.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/install-printer-driver',
        destination: '/services/printer-driver-installation',
        permanent: true,
      },
      {
        source: '/printer-setup-windows',
        destination: '/services/wireless-printer-setup',
        permanent: true,
      },
      {
        source: '/printer-offline',
        destination: '/services/printer-offline',
        permanent: true,
      },
      // Cannibalized / weak blog URLs → money pages or stronger URLs
      {
        source: '/blog/printer-offline-fix-solutions-guide',
        destination: '/services/printer-offline',
        permanent: true,
      },
      {
        source: '/blog/printer-offline-fix-solutions-2026',
        destination: '/services/printer-offline',
        permanent: true,
      },
      {
        source: '/blog/hp-printer-offline-fix-solutions',
        destination: '/services/hp-printer-offline',
        permanent: true,
      },
      {
        source: '/blog/hp-printer-troubleshooting-guide',
        destination: '/services/hp-printer-support',
        permanent: true,
      },
      {
        source: '/blog/brother-printer-not-printing-fix',
        destination: '/services/brother-printer-offline',
        permanent: true,
      },
      {
        source: '/blog/printer-not-responding-fixes-2026-complete-guide',
        destination: '/blog/printer-not-responding-fix',
        permanent: true,
      },
      {
        source: '/blog/printer-problems-solutions-guide',
        destination: '/services/printer-offline',
        permanent: true,
      },
      {
        source: '/blog/printer-not-printing-fixes-solutions',
        destination: '/services/printer-offline',
        permanent: true,
      },
      {
        source: '/blog/paper-jam-fix-prevent-solutionsv',
        destination: '/services/printer-paper-jam',
        permanent: true,
      },
      {
        source: '/blog/printer-error-codes-meanings-fixes',
        destination: '/services/printer-error-codes',
        permanent: true,
      },
      {
        source: '/blog/how-to-install-canon-printer-setup-guide',
        destination: '/services/canon-printer-support',
        permanent: true,
      },
      {
        source: '/blog/canon-printer-problems-solutions-guide',
        destination: '/services/canon-printer-support',
        permanent: true,
      },
      {
        source: '/blog/canon-error-b200-fix-solution',
        destination: '/services/canon-printer-support',
        permanent: true,
      },
      {
        source: '/blog/epson-printer-error-codes-list-fixes',
        destination: '/services/epson-printer-support',
        permanent: true,
      },
      {
        source: '/blog/printer-driver-is-unavailable-fix',
        destination: '/services/printer-driver-installation',
        permanent: true,
      },
      {
        source: '/blog/printer-printing-blank-pages-fix',
        destination: '/services/printer-printing-blank-pages',
        permanent: true,
      },
      {
        source: '/blog/gmail-account-recovery-guide-usa',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/router-not-working-fix-guide-usa',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/speed-up-slow-computer-windows-11-10-ultimate-guide',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
