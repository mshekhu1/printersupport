'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Phone, X } from 'lucide-react';

const PHONE_HREF = 'tel:+18887594448';
const PHONE_DISPLAY = '+1 888 759 4448';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const mainLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const serviceLinks = [
    { href: '/services/printer-offline', label: 'Printer Offline' },
    { href: '/services/printer-driver-installation', label: 'Printer Driver Installation' },
    { href: '/services/wireless-printer-setup', label: 'Wireless Printer Setup' },
    { href: '/services/printer-not-connecting', label: 'Printer Not Connecting' },
    { href: '/services/printer-error-codes', label: 'Printer Error Codes' },
    { href: '/services/printer-spooler-error', label: 'Printer Spooler Error' },
    { href: '/services/printer-paper-jam', label: 'Printer Paper Jam' },
    { href: '/services/printer-printing-blank-pages', label: 'Printer Printing Blank Pages' },
    { href: '/services/hp-printer-offline', label: 'HP Printer Offline' },
    { href: '/services/hp-printer-not-printing', label: 'HP Printer Not Printing' },
    { href: '/services/canon-printer-offline', label: 'Canon Printer Offline' },
    { href: '/services/epson-printer-not-printing', label: 'Epson Printer Not Printing' },
    { href: '/services/brother-printer-offline', label: 'Brother Printer Offline' },
    { href: '/services/hp-printer-support', label: 'HP printer help (independent)' },
    { href: '/services/canon-printer-support', label: 'Canon printer help (independent)' },
    { href: '/services/epson-printer-support', label: 'Epson printer help (independent)' },
    { href: '/services/brother-printer-support', label: 'Brother printer help (independent)' },
    { href: '/services/samsung-printer-support', label: 'Samsung printer help (independent)' },
  ];

  const mobileLinks = [...mainLinks, ...serviceLinks];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <Link href="/" className="flex items-center gap-2 min-w-0">
              <Image
                src="/logo.jpg"
                alt="ZamZam Print Logo"
                width={60}
                height={60}
                priority
              />
              <span className="text-xl sm:text-2xl font-bold text-blue-600 hover:text-blue-800 transition truncate">
                ZamZam Print
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                {link.label}
              </Link>
            ))}

            <div className="relative">
              <button
                onClick={() => setIsServicesOpen((prev) => !prev)}
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition"
                aria-expanded={isServicesOpen}
              >
                Services
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg z-50 max-h-96 overflow-y-auto">
                  <div className="py-2">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsServicesOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-full border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-1.5 rounded-full border border-blue-600 px-3 py-2 text-xs font-semibold text-blue-700"
              aria-label={`Call ${PHONE_DISPLAY}`}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-1 max-h-[80vh] overflow-y-auto pb-24">
            <a
              href={PHONE_HREF}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl border border-blue-600 text-blue-700 font-semibold px-4 py-3 mb-2"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            {mobileLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
