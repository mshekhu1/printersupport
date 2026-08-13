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
      // Off-topic blogs only (not printer content) → homepage
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
