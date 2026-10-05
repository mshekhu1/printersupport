/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 76],
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
      // Legacy non-blog paths
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
      {
        source: '/services/hp-printer-support',
        destination: '/services/hp-printer-repair-guide',
        permanent: true,
      },
      {
        source: '/services/canon-printer-support',
        destination: '/services/canon-printer-repair-guide',
        permanent: true,
      },
      {
        source: '/services/epson-printer-support',
        destination: '/services/epson-printer-repair-guide',
        permanent: true,
      },
      {
        source: '/services/brother-printer-support',
        destination: '/services/brother-printer-repair-guide',
        permanent: true,
      },
      {
        source: '/services/samsung-printer-support',
        destination: '/services/samsung-printer-repair-guide',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
