'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import PhoneLink, { PHONE_DISPLAY } from './PhoneLink';

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
    { href: '/services/hp-printer-support', label: 'HP Support' },
    { href: '/services/canon-printer-support', label: 'Canon Support' },
    { href: '/services/epson-printer-support', label: 'Epson Support' },
    { href: '/services/brother-printer-support', label: 'Brother Support' },
    { href: '/services/samsung-printer-support', label: 'Samsung Support' },
  ];

  const mobileLinks = [...mainLinks, ...serviceLinks];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-3">
          <Link href="/" className="flex items-center gap-2 min-w-0">
            <Image src="/logo.jpg" alt="ZamZam Print" width={48} height={48} priority />
            <span className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight truncate">
              ZamZam Print
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-blue-700 font-medium transition"
              >
                {link.label}
              </Link>
            ))}

            <div className="relative">
              <button
                onClick={() => setIsServicesOpen((prev) => !prev)}
                className="flex items-center text-slate-700 hover:text-blue-700 font-medium"
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
                <div className="absolute left-0 mt-2 w-72 bg-white border border-slate-200 z-50 max-h-96 overflow-y-auto">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsServicesOpen(false)}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <PhoneLink
              location="navbar_desktop"
              className="inline-flex items-center gap-2 bg-blue-700 px-4 py-2 text-sm font-bold text-white hover:bg-blue-800"
              showIcon
            >
              Call {PHONE_DISPLAY}
            </PhoneLink>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <PhoneLink
              location="navbar_mobile"
              className="inline-flex items-center gap-1.5 bg-blue-700 px-3 py-2 text-xs font-bold text-white"
              showIcon
            >
              Call
            </PhoneLink>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="text-slate-700"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-3 space-y-1 max-h-[80vh] overflow-y-auto pb-24">
            <PhoneLink
              location="navbar_mobile_menu"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 bg-blue-700 text-white font-bold px-4 py-3 mb-2"
              showIcon
            >
              Call {PHONE_DISPLAY}
            </PhoneLink>
            {mobileLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50"
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
