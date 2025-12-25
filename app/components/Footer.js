// components/Footer.jsx
import Link from 'next/link';

export default function Footer() {
  const services = [
    { name: 'Printer Support', href: '/printer-support' },
    { name: 'Printer Not Printing', href: '/printer-not-printing' },
    { name: 'Printer Offline Fix', href: '/printer-offline-fix' },
    { name: 'Install Printer Driver', href: '/install-printer-driver' },
    { name: 'Printer Not Connecting to WiFi', href: '/printer-not-connecting-wifi' },
    { name: 'Printer Setup on Windows', href: '/printer-setup-windows' },
    { name: 'Printer Error Code Fix', href: '/printer-error-code-fix' },
  ];

  const company = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Refund Policy', href: '/refund-policy' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand / About */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Printer Support</h2>
            <p className="text-sm leading-relaxed max-w-xs">
              Expert help for all your printer issues. Fast, reliable, and available 24/7.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {currentYear} Printer Support. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center space-x-6">
            <Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link>
            <a href="tel:+18887694448" className="text-white font-semibold">📞 +1-888-769-4448</a>
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/refund-policy" className="hover:text-white">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}