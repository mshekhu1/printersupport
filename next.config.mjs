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
      // Old services support URLs → /brands/{brand}/printer-support
      // Repair guides stay live at /services/{brand}-printer-repair-guide
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
