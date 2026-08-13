import FAQAccordionClient from '@/app/components/FAQAccordionClient';
import FAQSchema from '@/app/components/FAQSchema';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import Link from 'next/link';

export const metadata = {
  title: 'Canon Printer Support (2026) — Setup, Offline, B200 & Drivers',
  description:
    'Canon printer support for Pixma setup, offline errors, B200, drivers, and not printing on Windows. Step-by-step fixes plus remote US tech help.',
  keywords: [
    'Canon printer support',
    'Canon printer setup',
    'Canon printer offline',
    'Canon B200 error',
    'Canon printer not working',
    'Canon printer installation',
    'ij.start.canon',
  ],
  authors: [{ name: 'ZamZam Print Support' }],
  openGraph: {
    title: 'Canon Printer Support — Setup, Offline, B200 & Drivers',
    description:
      'Fix Canon Pixma offline, setup, and B200 errors. Remote US support if you need it done now.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zamzamprint.com/services/canon-printer-support',
    siteName: 'ZamZam Print Support',
    images: [
      {
        url: '/side-view-employee-using-printer.jpg',
        width: 1200,
        height: 630,
        alt: 'Canon printer support services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Canon Printer Support — Setup, Offline & B200',
    description: 'Canon Pixma setup and error fixes for Windows.',
    images: ['/side-view-employee-using-printer.jpg'],
  },
  alternates: {
    canonical: 'https://www.zamzamprint.com/services/canon-printer-support',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const dynamic = 'force-static';
export const revalidate = 3600;

export default function CanonPrinterSupport() {
  const faqs = [
    {
      q: 'How do I set up a Canon printer on Windows?',
      aShort: 'Use Canon drivers / IJ setup, then add via Wi‑Fi or USB.',
      a: 'Power on the Canon, connect USB temporarily or put the printer in wireless setup mode. Download the full driver package for your exact Pixma/Maxify model from Canon Support (or use the disc / IJ Network Tool). Run the installer, join the same Wi‑Fi as the PC, then print a Windows test page. Avoid relying only on “driverless” discovery if status keeps flipping offline.',
    },
    {
      q: 'Why is my Canon printer offline?',
      aShort: 'Wi‑Fi drop, WSD port, or Canon software conflict.',
      a: 'Canon printers show offline when Wi‑Fi drops, Windows uses an unstable WSD port, sleep mode is aggressive, or My Image Garden / Canon PRINT conflicts. Rejoin Wi‑Fi, switch the Windows port to Standard TCP/IP with the printer IP, disable deep sleep, and update or remove conflicting Canon utilities. See also our Canon offline guide.',
    },
    {
      q: 'What is Canon error B200 and how do I fix it?',
      aShort: 'Usually a printhead / electrical fault — try reset steps first.',
      a: 'B200 on Pixma models often means a printhead temperature or electrical fault. Power off, unplug 10+ minutes, reseat cartridges carefully, and try a soft reset (model-specific button holds). If B200 returns immediately, the printhead may need service or replacement — remote support can confirm whether it is software-recoverable vs hardware.',
    },
    {
      q: 'Canon printer installed but will not print?',
      aShort: 'Clear queue, check ink/nozzles, restart spooler.',
      a: 'Cancel stuck jobs, restart Print Spooler, run a nozzle check and cleaning from the Canon menu, confirm ink is recognized, and set the Canon as the default printer. Reinstall the model driver if jobs vanish into a black hole.',
    },
    {
      q: 'How do I connect Canon to Wi‑Fi?',
      aShort: 'Wireless LAN setup on the panel or Canon PRINT app.',
      a: 'On the printer: Settings → Wireless LAN / Wi‑Fi setup → follow the wizard (WPS or manual SSID). Or use Canon PRINT Inkjet/SELPHY on a phone on the same network. After joining, print a network info page and use that IP for a TCP/IP port in Windows.',
    },
    {
      q: 'Do you support older Canon Pixma models?',
      aShort: 'Yes — drivers and remote troubleshooting for most Pixma/Maxify.',
      a: 'We help with current and older Pixma models when official wizards fail on new Windows builds. Call for remote driver install, offline repair, or error-code diagnosis.',
    },
  ];

  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.zamzamprint.com' },
    { name: 'Services', url: 'https://www.zamzamprint.com/services' },
    { name: 'Canon Printer Support', url: 'https://www.zamzamprint.com/services/canon-printer-support' },
  ];

  return (
    <>
      <FAQSchema faqs={faqs} />
      <main className="max-w-6xl mx-auto px-6 py-12 font-sans text-gray-800">
        <Breadcrumbs items={breadcrumbItems} />
        <header className="mb-8 border-b pb-8">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Canon Printer Support: Setup, Offline, B200 & Driver Fixes
          </h1>
          <p className="text-lg text-slate-600">
            Expert help for Canon Pixma and Maxify — wireless setup, offline status, driver installs,
            blank pages, and error B200. Prefer brand-specific offline steps? See{' '}
            <Link href="/services/canon-printer-offline" className="text-blue-600 font-bold hover:underline">
              Canon Printer Offline
            </Link>
            .
          </p>
        </header>

        <section className="mb-10 p-5 rounded-2xl border border-blue-200 bg-blue-50">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <strong className="block text-slate-900 text-lg mb-1">Canon still failing after DIY?</strong>
              <p className="text-sm text-slate-700 m-0">
                Remote US Canon support for setup, offline, and B200 — usually fixed while you watch.
              </p>
            </div>
            <a
              href="tel:+18887594448"
              className="inline-flex flex-col items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 w-full sm:w-auto"
            >
              <span>Call +1 888 759 4448</span>
              <span className="text-[10px] uppercase tracking-wider text-blue-100 mt-0.5">Free diagnosis</span>
            </a>
          </div>
        </section>

        <section className="space-y-10 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">1. Canon printer setup on Windows</h2>
            <p className="leading-relaxed mb-3">
              Generic Windows discovery often leaves Canon Pixma models half-installed (print works once,
              then offline). Use Canon’s full package for your exact model number (on the front label).
            </p>
            <p className="mt-2 bg-yellow-50 p-4 border-l-4 border-yellow-400 rounded-r">
              <strong>Fix:</strong> Download drivers from Canon Support → run setup → choose wireless or
              USB → finish. Then Printer properties → Ports → prefer Standard TCP/IP with the IP from the
              Canon network info page. Avoid leaving only a WSD port selected.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">2. Canon printer offline</h2>
            <p className="leading-relaxed mb-3">
              Offline usually means the PC lost the path to the printer — not that the hardware is dead.
              Guest Wi‑Fi, router IP changes, and deep sleep are common on Pixma TS/TR series.
            </p>
            <p className="mt-2 bg-blue-50 p-4 border-l-4 border-blue-400 rounded-r">
              <strong>Fix:</strong> Rejoin the printer to Wi‑Fi, uncheck Use Printer Offline, restart
              Print Spooler, switch to TCP/IP, and disable sleep on the Canon panel. Full walkthrough:{' '}
              <Link href="/services/canon-printer-offline" className="font-bold text-blue-700 underline">
                Canon Printer Offline
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">3. Canon error B200 (printhead)</h2>
            <p className="leading-relaxed mb-3">
              B200 is one of the most searched Canon faults. It often points to printhead overheating or
              a short after a messy cartridge change — but a soft reset still recovers some units.
            </p>
            <p className="mt-2 bg-green-50 p-4 border-l-4 border-green-400 rounded-r">
              <strong>Fix:</strong> Power off, unplug for at least 10 minutes, reseat both ink tanks firmly,
              wipe contacts dry, power on. If B200 returns instantly with grinding/heat symptoms, treat it
              as hardware — stop power-cycling repeatedly. Call us to confirm whether remote software steps
              apply to your model before you buy a printhead.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">4. Drivers & “driver is unavailable”</h2>
            <p className="leading-relaxed mb-3">
              Windows Update drivers for Canon are often incomplete. “A driver is unavailable” during Add
              Printer almost always means you need the full Canon package, not the inbox driver.
            </p>
            <p className="mt-2 bg-purple-50 p-4 border-l-4 border-purple-400 rounded-r">
              <strong>Fix:</strong> Remove the half-added printer, install Canon’s package as Administrator,
              reboot, then add by IP. Related:{' '}
              <Link href="/services/printer-driver-installation" className="font-bold text-blue-700 underline">
                Printer Driver Installation
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">5. Not printing / blank pages</h2>
            <p className="leading-relaxed mb-3">
              Jobs disappear, or pages come out blank, when nozzles are clogged or ink is not recognized
              after third-party cartridges.
            </p>
            <p className="mt-2 bg-orange-50 p-4 border-l-4 border-orange-400 rounded-r">
              <strong>Fix:</strong> Run nozzle check → cleaning → deep cleaning from the Canon menu. Align
              printhead if lines are skewed. Replace empty tanks. Clear the Windows queue between attempts.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">6. Wireless vs USB reliability</h2>
            <p className="leading-relaxed mb-3">
              For troubleshooting, USB proves whether the printer hardware works. Once confirmed, move back
              to Wi‑Fi with a static/reserved DHCP lease so the TCP/IP port does not go stale.
            </p>
            <p className="mt-2 bg-red-50 p-4 border-l-4 border-red-400 rounded-r">
              <strong>Fix:</strong> Reserve the Canon’s IP in your router, update the Windows TCP/IP port to
              match, and keep printer + PC on the same SSID band when possible.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Canon support checklist</h2>
          <ol className="list-decimal ml-6 space-y-3">
            <li>Confirm exact model (Pixma TS/TR/MG, Maxify, etc.).</li>
            <li>Install Canon’s full Windows driver package.</li>
            <li>Print a network info page; set a TCP/IP port.</li>
            <li>Clear offline checkbox + restart Print Spooler.</li>
            <li>For B200: power drain + reseat tanks before assuming hardware failure.</li>
            <li>Run nozzle check if pages are blank or streaked.</li>
          </ol>
        </section>

        <section className="my-10 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold mb-3">Need Canon help now?</h2>
          <p className="text-gray-700 mb-4">
            Setup wizards and B200 loops waste hours. A remote session can install drivers, fix offline
            status, and tell you honestly if the printhead is done.
          </p>
          <a
            href="tel:+18887594448"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Call +1 888 759 4448
          </a>
        </section>

        <section className="mt-16 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Frequently Asked Questions</h2>
          <FAQAccordionClient faqs={faqs} />
        </section>

        <footer className="mt-12 bg-slate-900 text-white p-10 rounded-2xl text-center">
          <h3 className="text-3xl font-bold mb-4">Canon still not working?</h3>
          <p className="mb-6 text-slate-300">
            <Link href="/services/canon-printer-offline" className="text-blue-300 underline">
              Canon Offline
            </Link>{' '}
            ·{' '}
            <Link href="/services/printer-driver-installation" className="text-blue-300 underline">
              Drivers
            </Link>{' '}
            ·{' '}
            <Link href="/services/wireless-printer-setup" className="text-blue-300 underline">
              Wireless Setup
            </Link>
          </p>
          <a
            href="tel:+18887594448"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold inline-block"
          >
            Call for Remote Support
          </a>
        </footer>
      </main>
    </>
  );
}
