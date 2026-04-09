// components/Footer.jsx
import Link from 'next/link';
import { Facebook, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  const services = [



    { name: 'Printer Offline', href: '/services/printer-offline' },

    { name: 'Printer Driver Installation', href: '/services/printer-driver-installation' },

    { name: 'Wireless Printer Setup', href: '/services/wireless-printer-setup' },
    { name: 'Printer Not Connecting', href: '/services/printer-not-connecting' },


    { name: 'Printer Error Codes', href: '/services/printer-error-codes' },
    { name: 'Printer Spooler Error', href: '/services/printer-spooler-error' },
    { name: 'Printer Paper Jam', href: '/services/printer-paper-jam' },
    { name: 'Printer Printing Blank Pages', href: '/services/printer-printing-blank-pages' },
    { name: 'HP Printer Offline', href: '/services/hp-printer-offline' },
    { name: 'HP Printer Not Printing', href: '/services/hp-printer-not-printing' },
    { name: 'Canon Printer Offline', href: '/services/canon-printer-offline' },
    { name: 'Epson Printer Not Printing', href: '/services/epson-printer-not-printing' },
    { name: 'Brother Printer Offline', href: '/services/brother-printer-offline' },
  ];

  const brands = [
    { name: 'HP Printer Support', href: '/services/hp-printer-support' },
    { name: 'Canon Printer Support', href: '/services/canon-printer-support' },
    { name: 'Epson Printer Support', href: '/services/epson-printer-support' },
    { name: 'Brother Printer Support', href: '/services/brother-printer-support' },
    { name: 'Samsung Printer Support', href: '/services/samsung-printer-support' },

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand / About */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">ZamZam Print Support</h2>
            <p className="text-sm leading-relaxed max-w-xs">
              Expert remote printer support for all your printer issues. Fast, reliable, and serving customers across all 50 US states.
            </p>
            <div className="pt-2">
              <a href="tel:+1 888 759 4448" className="text-blue-400 hover:text-white font-semibold text-sm transition-colors">
                📞 +1 888 759 4448
              </a>
            </div>
            <div className="mt-4 text-xs text-gray-400">
              <strong>Address:</strong><br />
              2783 Market St #599<br />
              San Francisco, CA 94114<br />
              United States
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a
                href="https://www.facebook.com/profile.php?id=61588289645189&sfnsn=wiwspwa&mibextid=RUbZ1f"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="group inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800/60 px-3 py-2 text-gray-300 hover:border-blue-500 hover:bg-blue-500/10 hover:text-white transition-colors"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-700 group-hover:bg-blue-500/20">
                  <Facebook size={15} />
                </span>
                <span className="hidden sm:inline">Facebook</span>
              </a>
              <a
                href="https://youtube.com/@zamzam_print"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our YouTube channel"
                className="group inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800/60 px-3 py-2 text-gray-300 hover:border-red-500 hover:bg-red-500/10 hover:text-white transition-colors"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-700 group-hover:bg-red-500/20">
                  <Youtube size={15} />
                </span>
                <span className="hidden sm:inline">YouTube</span>
              </a>
              <a
                href="https://www.instagram.com/zamzamprint_support"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram profile"
                className="group inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800/60 px-3 py-2 text-gray-300 hover:border-pink-500 hover:bg-pink-500/10 hover:text-white transition-colors"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-700 group-hover:bg-pink-500/20">
                  <Instagram size={15} />
                </span>
                <span className="hidden sm:inline">Instagram</span>
              </a>
            </div>
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

          {/* Brands & Locations */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Brands & Locations</h3>

            <div className="mt-4">
              <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Printer Brands</p>
              <ul className="space-y-2">
                {brands.map((item) => (
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
          <p>© {currentYear} ZamZam Print Support. All rights reserved. Serving customers across all 50 US states.</p>
          <div className="mt-4 md:mt-0 flex flex-wrap items-center justify-center gap-4">
            <Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link>
            <a href="tel:+1 888 759 4448" className="text-white font-semibold">📞 +1 888 759 4448</a>
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