// components/Footer.jsx
import Link from 'next/link';
import { Facebook, Youtube, Instagram } from 'lucide-react';

const PHONE_HREF = 'tel:+18887594448';
const PHONE_DISPLAY = '+1 888 759 4448';

function FooterLinks({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
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
  );
}

export default function Footer() {
  const services = [
    { name: 'All Services', href: '/services' },
    { name: 'Printer Offline', href: '/services/printer-offline' },
    { name: 'Printer Driver Installation', href: '/services/printer-driver-installation' },
    { name: 'Wireless Printer Setup', href: '/services/wireless-printer-setup' },
    { name: 'Printer Not Connecting', href: '/services/printer-not-connecting' },
    { name: 'Printer Error Codes', href: '/services/printer-error-codes' },
    { name: 'Printer Spooler Error', href: '/services/printer-spooler-error' },
    { name: 'Printer Paper Jam', href: '/services/printer-paper-jam' },
    { name: 'Printer Printing Blank Pages', href: '/services/printer-printing-blank-pages' },
  ];

  const brands = [
    { name: 'Independent help for HP printers', href: '/services/hp-printer-support' },
    { name: 'HP printer offline help', href: '/services/hp-printer-offline' },
    { name: 'HP printer not printing help', href: '/services/hp-printer-not-printing' },
    { name: 'Independent help for Canon printers', href: '/services/canon-printer-support' },
    { name: 'Canon printer offline help', href: '/services/canon-printer-offline' },
    { name: 'Independent help for Epson printers', href: '/services/epson-printer-support' },
    { name: 'Epson printer not printing help', href: '/services/epson-printer-not-printing' },
    { name: 'Independent help for Brother printers', href: '/services/brother-printer-support' },
    { name: 'Brother printer offline help', href: '/services/brother-printer-offline' },
    { name: 'Independent help for Samsung printers', href: '/services/samsung-printer-support' },
  ];

  const company = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-8">
          <div className="space-y-4 sm:col-span-2 xl:col-span-1">
            <h2 className="text-2xl font-bold text-white">ZamZam Print Support</h2>
            <p className="text-sm leading-relaxed max-w-xs">
              Independent remote printer troubleshooting for US customers. We are not affiliated with any printer manufacturer.
            </p>
            <div className="pt-1">
              <a href={PHONE_HREF} className="text-blue-400 hover:text-white font-semibold text-sm transition-colors">
                {PHONE_DISPLAY}
              </a>
            </div>
            <div className="text-xs text-gray-400">
              <strong>Address:</strong><br />
              2783 Market St #599<br />
              San Francisco, CA 94114<br />
              United States
            </div>
            <div className="flex flex-wrap gap-3 text-sm">
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
                <span>Facebook</span>
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
                <span>YouTube</span>
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
                <span>Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <FooterLinks items={services} />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Brands</h3>
            <FooterLinks items={brands} />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <FooterLinks items={company} />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 space-y-4 text-sm">
          <p className="text-gray-400 text-center md:text-left max-w-4xl">
            ZamZam Print Support is an independent remote IT service and is not affiliated with, endorsed by, or a partner of HP, Canon, Brother, Epson, Samsung, or any printer manufacturer. For official warranty and hardware support, contact the manufacturer directly.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {currentYear} ZamZam Print Support. All rights reserved. Serving customers across all 50 US states.</p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              <Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
              <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link>
              <Link href="/refund-policy" className="hover:text-white">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
