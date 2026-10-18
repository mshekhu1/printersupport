/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 76],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scbqouhhejtxoysmtver.supabase.co',
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
      // Legacy repair-guide + old services support URLs → /brands/{brand}/printer-support
      {
        source: '/services/hp-printer-repair-guide',
        destination: '/brands/hp/printer-support',
        permanent: true,
      },
      {
        source: '/services/canon-printer-repair-guide',
        destination: '/brands/canon/printer-support',
        permanent: true,
      },
      {
        source: '/services/epson-printer-repair-guide',
        destination: '/brands/epson/printer-support',
        permanent: true,
      },
      {
        source: '/services/brother-printer-repair-guide',
        destination: '/brands/brother/printer-support',
        permanent: true,
      },
      {
        source: '/services/samsung-printer-repair-guide',
        destination: '/brands/samsung/printer-support',
        permanent: true,
      },
      {
        source: '/services/hp-printer-support',
        destination: '/brands/hp/printer-support',
        permanent: true,
      },
      {
        source: '/services/canon-printer-support',
        destination: '/brands/canon/printer-support',
        permanent: true,
      },
      {
        source: '/services/epson-printer-support',
        destination: '/brands/epson/printer-support',
        permanent: true,
      },
      {
        source: '/services/brother-printer-support',
        destination: '/brands/brother/printer-support',
        permanent: true,
      },
      {
        source: '/services/samsung-printer-support',
        destination: '/brands/samsung/printer-support',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
