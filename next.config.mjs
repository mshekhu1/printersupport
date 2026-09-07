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
    ];
  },
};

export default nextConfig;
