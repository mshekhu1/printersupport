'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/printer-support', label: 'Printer Support' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
    { href: '/refund-policy', label: 'Refund Policy' },
    { href: '/printer-not-printing', label: 'Printer Not Printing' },
    { href: '/printer-offline-fix', label: 'Printer Offline Fix' },
    { href: '/install-printer-driver', label: 'Install Printer Driver' },
    { href: '/printer-not-connecting-wifi', label: 'WiFi Connection Issues' },
    { href: '/printer-setup-windows', label: 'Windows Setup' },
    { href: '/printer-error-code-fix', label: 'Error Code Fix' },
    { href: '/printer-error-codes', label: 'Printer Error Codes' },
    { href: '/printer-paper-jam', label: 'Printer Paper Jam' },
    { href: '/printer-printing-blank-pages', label: 'Printer Printing Blank Pages' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 hidden md:block">
            <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition">
              ZamZam Print
            </Link>
          </div>
          <div className="flex-shrink-0 md:hidden">
            <a href="tel:+18887694448" className="block mt-2 px-3 py-2 rounded-md text-base font-semibold text-white bg-blue-600 hover:bg-blue-700">Call +1-888-769-4448</a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Home
            </Link>
            <Link href="/printer-support" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Printer Support
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Pricing
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Blog
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium transition flex items-center">
                Services
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Dropdown */}
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {navLinks.slice(6).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="border-t border-gray-200 my-1"></div>
                  <Link
                    href="/printer-support"
                    className="block px-4 py-2 text-sm text-blue-600 font-semibold hover:bg-blue-50"
                  >
                    View All States →
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600 text-sm transition">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="text-gray-600 hover:text-blue-600 text-sm transition">
              Terms
            </Link>
            <a href="tel:+18887694448" className="ml-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition">
              Call: +1-888-769-4448
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition"
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
