import FAQAccordionClient from '@/app/components/FAQAccordionClient';
import FAQSchema from '@/app/components/FAQSchema';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import Link from 'next/link';

export const metadata = {
  title: 'Independent Remote Help for Canon Printers | ZamZam Print Support',
  description:
    'Independent troubleshooting for Canon printers (not Canon Inc.): offline status, drivers, B200 errors, Wi-Fi setup, and print quality. Optional remote help for US customers.',
  keywords: [
    'independent Canon printer help',
    'Canon printer offline',
    'Canon driver issues',
    'Canon B200',
    'Canon printer setup',
    'remote printer help',
  ],
  authors: [{ name: 'ZamZam Print Support' }],
  openGraph: {
    title: 'Independent Remote Help for Canon Printers',
    description:
      'Third-party guides for Canon software and connectivity issues. Not affiliated with Canon.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zamzamprint.com/services/canon-printer-support',
    siteName: 'ZamZam Print Support',
    images: [
      {
        url: '/side-view-employee-using-printer.jpg',
        width: 1200,
        height: 630,
        alt: 'Independent remote help for Canon printers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Independent Remote Help for Canon Printers',
    description: 'Third-party guides for Canon software and connectivity issues.',
    images: ['/side-view-employee-using-printer.jpg'],
  },
  alternates: {
    canonical: 'https://www.zamzamprint.com/services/canon-printer-support',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const dynamic = 'force-static';
export const revalidate = 3600;

export default function CanonPrinterSupport() {
  const faqs = [
    {
      q: 'Are you Canon or official Canon support?',
      aShort: 'No — we are an independent remote support company.',
      a: 'No. ZamZam Print Support is independent and not affiliated with Canon Inc. For warranty, hardware, and official product support, use Canon’s support site for your region.',
    },
    {
      q: 'Why is my Canon printer offline on Windows?',
      aShort: 'Often Wi-Fi drops, wrong port type, or a paused driver.',
      a: 'Confirm the printer and PC share the same network, open Settings → Bluetooth & devices → Printers & scanners, select the Canon device, and make sure Use Printer Offline is unchecked. Prefer a Standard TCP/IP port over WSD when the status flaps. Restart the Print Spooler, then print a network configuration page from the Canon panel to verify the IP.',
    },
    {
      q: 'How should I install Canon drivers safely?',
      aShort: 'Download only from Canon’s official support site for your exact model.',
      a: 'Identify the model on the printer label, then download the Full Driver & Software package from Canon’s official support pages (for many PIXMA units this is via canon.com/ijsetup or the regional support lookup). Uninstall previous Canon software first if upgrades fail, reboot, then run setup while the printer is powered on.',
    },
    {
      q: 'What does Canon support code B200 mean?',
      aShort: 'Usually a print-head / electrical fault that may need hardware service.',
      a: 'B200 on many PIXMA models often points to a print-head or related electrical fault. Power-cycle the printer, reseat cartridges carefully, and try Canon’s recommended reset steps for your model. If the code returns immediately, the unit likely needs hardware service from Canon or a qualified repair shop — remote software help cannot replace a failed print head.',
    },
    {
      q: 'Canon prints blank pages — what next?',
      aShort: 'Run nozzle check and cleaning; verify ink and protective tape.',
      a: 'Print a nozzle check from the Canon maintenance menu. If gaps appear, run cleaning (then deep cleaning sparingly — it uses ink). Confirm cartridges have ink, protective tape is removed, and the printer is not in a transport lock state. Persistent blank output after successful nozzle checks may be a hardware or ink-system issue.',
    },
  ];

  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.zamzamprint.com' },
    { name: 'Services', url: 'https://www.zamzamprint.com/services' },
    {
      name: 'Independent Canon printer help',
      url: 'https://www.zamzamprint.com/services/canon-printer-support',
    },
  ];

  return (
    <>
      <FAQSchema faqs={faqs} />
      <main className="max-w-6xl mx-auto px-6 py-12 font-sans text-gray-800">
        <Breadcrumbs items={breadcrumbItems} />
        <header className="mb-12 border-b pb-8">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
            Independent service · Not affiliated with Canon Inc.
          </p>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Independent Remote Help for Canon Printers
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Practical troubleshooting for Canon PIXMA, MAXIFY, and imageCLASS software and
            connectivity problems. ZamZam is a third-party remote help provider — for warranty
            and official hardware support, contact Canon directly.
          </p>
        </header>

        <section className="space-y-10 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">1. Canon printer shows offline</h2>
            <p className="leading-relaxed mb-3 text-slate-700">
              On Windows, “Offline” usually means the PC cannot talk to the printer over USB or
              Wi‑Fi — not that the printer is powered off. Canon’s IJ Network Tool / Canon PRINT
              Inkjet/SELPHY app can confirm whether the printer still has a valid IP.
            </p>
            <div className="bg-yellow-50 p-4 border-l-4 border-yellow-400 rounded-r space-y-2 text-slate-700">
              <p>
                <strong>Checklist:</strong> same Wi‑Fi band/SSID as the PC; disable “Use Printer
                Offline”; remove and re-add the printer with a Standard TCP/IP port; restart Print
                Spooler; temporarily turn off VPN.
              </p>
              <p>
                Deeper walkthrough:{' '}
                <Link href="/services/canon-printer-offline" className="text-blue-700 underline">
                  Canon printer offline help
                </Link>
                .
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">2. Canon drivers and IJ setup</h2>
            <p className="leading-relaxed mb-3 text-slate-700">
              Generic Windows drivers often miss scanning and maintenance tools. Install Canon’s
              package for your exact model from Canon’s site — avoid third-party driver bundles.
              After install, print a test page and open Canon’s maintenance utilities to confirm
              the device enumerates correctly.
            </p>
            <div className="bg-blue-50 p-4 border-l-4 border-blue-400 rounded-r text-slate-700">
              <strong>Tip:</strong> If setup fails mid-install, uninstall Canon software from Apps
              &amp; features, reboot, then run the installer again with the printer powered on and
              connected.
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">3. Not printing / stuck queue</h2>
            <p className="leading-relaxed mb-3 text-slate-700">
              Stuck jobs, paused printers, or low-ink stops can look identical from the user side.
              Clear the Windows queue, confirm the Canon device is set as default, and check the
              printer panel for cover-open, paper-out, or cartridge prompts.
            </p>
            <div className="bg-green-50 p-4 border-l-4 border-green-400 rounded-r text-slate-700">
              <strong>Checklist:</strong> Cancel All Documents → restart Print Spooler → verify ink
              and paper → run Canon’s status monitor → reprint a 1-page test.
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">4. Support code B200 and similar</h2>
            <p className="leading-relaxed mb-3 text-slate-700">
              Codes like B200, 5B00, and some “support code” messages often point to print-head or
              ink-system hardware faults. Software steps (power cycle, reseat cartridges) are worth
              trying once, but repeated codes usually need hardware service.
            </p>
            <div className="bg-purple-50 p-4 border-l-4 border-purple-400 rounded-r text-slate-700">
              See also:{' '}
              <Link href="/blog/canon-error-b200-fix-solution" className="text-blue-700 underline">
                Canon B200 guide
              </Link>
              . For hardware warranty work, use Canon’s official channels.
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">5. Print quality and blank pages</h2>
            <p className="leading-relaxed mb-3 text-slate-700">
              Streaks and missing colors are usually nozzles, alignment, or ink. Start with a nozzle
              check, then cleaning. Alignment fixes skewed text. Blank pages with a perfect nozzle
              check suggest a different cause (wrong paper type settings, empty tank on MegaTank
              models, or a hardware fault).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">6. Canon Wi‑Fi setup</h2>
            <p className="leading-relaxed mb-3 text-slate-700">
              Use the printer’s Wireless LAN setup wizard or the Canon PRINT app. After joining the
              network, print a network config page and confirm the IP matches what Windows sees.
              Dual-band routers: many older Canon models prefer 2.4 GHz.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Quick Canon diagnostic table</h2>
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-4 font-semibold">Issue</th>
                  <th className="p-4 font-semibold">Likely cause</th>
                  <th className="p-4 font-semibold">First action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-4 font-medium">Offline</td>
                  <td className="p-4">Network / port / paused driver</td>
                  <td className="p-4">TCP/IP port + spooler restart</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Not printing</td>
                  <td className="p-4">Stuck queue or panel alert</td>
                  <td className="p-4">Clear queue; check ink/paper</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">B200</td>
                  <td className="p-4">Print-head / electrical</td>
                  <td className="p-4">Power cycle; then hardware service</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Blank pages</td>
                  <td className="p-4">Nozzles / ink / settings</td>
                  <td className="p-4">Nozzle check + cleaning</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12 p-6 bg-slate-50 border border-slate-200 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">Related guides</h2>
          <div className="grid md:grid-cols-2 gap-3">
            <Link href="/services/canon-printer-offline" className="text-blue-700 hover:underline">
              Canon printer offline help
            </Link>
            <Link href="/services/printer-not-connecting" className="text-blue-700 hover:underline">
              Printer not connecting
            </Link>
            <Link href="/services/printer-driver-installation" className="text-blue-700 hover:underline">
              Printer driver installation
            </Link>
            <Link href="/blog/canon-error-b200-fix-solution" className="text-blue-700 hover:underline">
              Canon B200 error guide
            </Link>
          </div>
        </section>

        <section className="my-10 p-6 bg-slate-100 rounded-lg border border-slate-200">
          <h2 className="text-2xl font-bold mb-3">Want guided remote help?</h2>
          <p className="text-gray-700 mb-4">
            Request an independent remote session for Canon software and connectivity issues. For
            warranty or hardware repairs, contact Canon.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Request a remote session
          </Link>
        </section>

        <section className="mt-16 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Frequently Asked Questions</h2>
          <FAQAccordionClient faqs={faqs} />
        </section>

        <p className="mt-10 text-sm text-slate-500 max-w-3xl">
          ZamZam Print Support is independent and not affiliated with Canon Inc. Official Canon
          support resources are available on Canon’s regional support websites.
        </p>
      </main>
    </>
  );
}
