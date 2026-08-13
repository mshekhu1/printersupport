import FAQAccordionClient from '@/app/components/FAQAccordionClient';
import FAQSchema from '@/app/components/FAQSchema';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import Link from 'next/link';

export const metadata = {
  title: 'HP Printer Offline Fix (2026) — HP Smart, WSD Port & Spooler',
  description:
    'HP printer offline or keeps going offline? Fix HP Smart conflicts, WSD→TCP/IP ports, sleep mode, and spooler errors on Windows 10/11 — or get remote US help in minutes.',
  keywords: [
    'HP printer offline',
    'HP printer keeps going offline',
    'fix HP printer offline',
    'HP Smart offline',
    'HP printer troubleshooting',
    'HP printer offline Windows 11',
  ],
  authors: [{ name: 'ZamZam Print Support' }],
  openGraph: {
    title: 'HP Printer Offline Fix — Get HP Back Online Fast',
    description:
      'Step-by-step HP offline fixes for DeskJet, OfficeJet, LaserJet, and ENVY. Remote US tech available if you need it done now.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zamzamprint.com/services/hp-printer-offline',
    siteName: 'ZamZam Print Support',
    images: [
      {
        url: '/side-view-employee-using-printer.jpg',
        width: 1200,
        height: 630,
        alt: 'HP printer offline troubleshooting support',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HP Printer Offline Fix — HP Smart, Ports & Spooler',
    description: 'Clear fixes when your HP printer shows offline on Windows 10/11.',
    images: ['/side-view-employee-using-printer.jpg'],
  },
  alternates: {
    canonical: 'https://www.zamzamprint.com/services/hp-printer-offline',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const dynamic = 'force-static';
export const revalidate = 3600;

export default function HPPrinterOffline() {
  const faqs = [
    {
      q: 'Why does my HP printer keep going offline?',
      aShort: 'Usually HP Smart, WSD ports, sleep mode, or spooler issues.',
      a: 'HP printers go offline because of HP Smart reporting errors, unreliable WSD network ports, aggressive sleep/auto-off, a stuck Print Spooler, USB power saving, or a dropped Wi‑Fi link. Fix by updating or removing HP Smart, switching to a Standard TCP/IP port, disabling sleep, restarting the spooler, and confirming the printer IP matches the Windows port.',
    },
    {
      q: 'How do I bring my HP printer back online?',
      aShort: 'Restart, uncheck Use Printer Offline, restart spooler, fix the port.',
      a: 'Power-cycle the printer. In Windows: Settings → Bluetooth & devices → Printers & scanners → your HP → Open print queue → Printer → uncheck Use Printer Offline. Restart Print Spooler (services.msc). For Wi‑Fi models, print a network config page, then set a Standard TCP/IP port to that IP. Update HP Smart or add the printer without it. Send a test page.',
    },
    {
      q: 'Does HP Smart cause printer offline issues?',
      aShort: 'Yes — outdated or conflicting HP Smart often marks printers offline.',
      a: 'HP Smart manages status and can show Offline even when the device prints. Update it from the Microsoft Store, repair/reinstall it, or remove it and add the printer through Windows Settings. Many DeskJet and OfficeJet users are more stable without HP Smart for day-to-day printing.',
    },
    {
      q: 'How do I fix HP printer offline on Windows 11?',
      aShort: 'Update HP Smart, restart spooler, switch WSD to TCP/IP.',
      a: 'On Windows 11: update HP Smart, confirm Wi‑Fi/USB, restart Print Spooler, open Printer properties → Ports and replace any WSD port with Standard TCP/IP using the printer IP, uncheck Use Printer Offline, and disable USB selective suspend if you use USB. Install the model driver from support.hp.com if needed.',
    },
    {
      q: 'Why is my HP network printer showing offline?',
      aShort: 'Wi‑Fi drop, WSD port, or HP Smart status mismatch.',
      a: 'Network HPs go offline when they leave Wi‑Fi, when Windows uses a WSD port, or when HP Smart cannot reach the device. Rejoin Wi‑Fi, move closer to the router, switch to TCP/IP, disable deep sleep, and verify PC and printer are on the same SSID (not guest Wi‑Fi).',
    },
    {
      q: 'Can I use an HP printer without HP Smart?',
      aShort: 'Yes — Windows built-in printing works for most models.',
      a: 'Add the printer in Windows Settings without HP Smart. Use the HP Universal Print Driver or your model driver from HP for full features. Ink gauges and some scan shortcuts may need HP software, but print jobs usually stay more reliable without it when HP Smart was the offline culprit.',
    },
  ];

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to fix an HP printer that shows offline',
    description:
      'Step-by-step process to bring an HP DeskJet, OfficeJet, LaserJet, or ENVY printer back online on Windows 10/11.',
    totalTime: 'PT15M',
    step: [
      { '@type': 'HowToStep', name: 'Restart the HP printer', text: 'Power off 30 seconds, power on, wait for ready lights.' },
      { '@type': 'HowToStep', name: 'Clear Use Printer Offline', text: 'Open the print queue and uncheck Use Printer Offline.' },
      { '@type': 'HowToStep', name: 'Restart Print Spooler', text: 'In services.msc, restart the Print Spooler service.' },
      { '@type': 'HowToStep', name: 'Switch to TCP/IP port', text: 'Replace WSD with a Standard TCP/IP port using the printer IP.' },
      { '@type': 'HowToStep', name: 'Update or remove HP Smart', text: 'Update HP Smart, or remove it and re-add the printer in Windows.' },
    ],
  };

  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.zamzamprint.com' },
    { name: 'Services', url: 'https://www.zamzamprint.com/services' },
    { name: 'HP Printer Offline', url: 'https://www.zamzamprint.com/services/hp-printer-offline' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <FAQSchema faqs={faqs} />
      <main className="max-w-6xl mx-auto px-6 py-12 font-sans text-gray-800">
        <Breadcrumbs items={breadcrumbItems} />
        <header className="mb-8 border-b pb-8">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            HP Printer Offline? Fix HP Printer Keeps Going Offline (Windows 10/11)
          </h1>
          <p className="text-lg text-slate-600">
            Your HP DeskJet, OfficeJet, LaserJet, or ENVY shows Offline in Windows or HP Smart —
            even though it is powered on. Below are the HP-specific causes and the exact fixes.
            Full brand hub:{' '}
            <Link href="/services/hp-printer-support" className="text-blue-600 font-bold hover:underline">
              HP Printer Support
            </Link>
            .
          </p>
        </header>

        <section className="mb-10 p-5 rounded-2xl border border-blue-200 bg-blue-50">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <strong className="block text-slate-900 text-lg mb-1">Need it online in ~15 minutes?</strong>
              <p className="text-sm text-slate-700 m-0">
                A US tech can remote in, fix HP Smart / ports / spooler, and confirm a test print.
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
            <h2 className="text-2xl font-bold text-blue-700 mb-3">1. HP Smart status is wrong</h2>
            <p className="leading-relaxed mb-3">
              HP Smart often reports Offline when the printer is fine — especially after Windows updates,
              cartridge chip errors, or a corrupted HP Smart install. This is the #1 complaint on
              OfficeJet and DeskJet models.
            </p>
            <p className="mt-2 bg-yellow-50 p-4 border-l-4 border-yellow-400 rounded-r">
              <strong>Fix:</strong> Microsoft Store → HP Smart → Update. If status stays wrong: uninstall
              HP Smart, reboot, reinstall — or skip HP Smart and add the printer in Windows Settings →
              Printers & scanners → Add device. Many users print more reliably without HP Smart.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">2. WSD port keeps dropping (Wi‑Fi HP)</h2>
            <p className="leading-relaxed mb-3">
              Windows loves creating WSD ports for HP network printers. They disconnect after sleep,
              VPN use, or router DHCP changes — so the queue flips to Offline.
            </p>
            <p className="mt-2 bg-blue-50 p-4 border-l-4 border-blue-400 rounded-r">
              <strong>Fix:</strong> Print a Wireless Network Test / config page from the HP menu and note
              the IPv4 address. Printer properties → Ports → Add Port → Standard TCP/IP Port → enter that
              IP → finish. Uncheck the WSD port. HP stays online far more consistently on TCP/IP.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">3. HP sleep / auto-off</h2>
            <p className="leading-relaxed mb-3">
              ENVY and DeskJet units often enter deep sleep quickly. Windows then marks them unavailable
              until you wake the panel or send a job that times out.
            </p>
            <p className="mt-2 bg-green-50 p-4 border-l-4 border-green-400 rounded-r">
              <strong>Fix:</strong> On the printer: Settings → Power / Sleep → Never or a longer timeout.
              In HP Smart, look for energy settings and disable aggressive auto-off if present. Keep the
              printer on the same SSID as the PC (avoid guest networks).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">4. Wrong driver (UPD vs model driver)</h2>
            <p className="leading-relaxed mb-3">
              The HP Universal Print Driver is convenient but can mis-report status on some LaserJet and
              OfficeJet Pros. Model-specific full feature software is more stable for offline flaps.
            </p>
            <p className="mt-2 bg-purple-50 p-4 border-l-4 border-purple-400 rounded-r">
              <strong>Fix:</strong> Note the exact model on the front badge. Download the Windows driver
              package from support.hp.com. Remove the old printer queue, install the model driver, then
              re-add via TCP/IP IP address.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">5. Print Spooler stuck after a failed job</h2>
            <p className="leading-relaxed mb-3">
              A hung job (paper out, door open, cartridge prompt) can leave the HP queue offline until
              the spooler is cleared.
            </p>
            <p className="mt-2 bg-orange-50 p-4 border-l-4 border-orange-400 rounded-r">
              <strong>Fix:</strong> Cancel all jobs in the queue. Win+R → <code>services.msc</code> →
              Print Spooler → Restart. If it fails: stop the service, delete files in
              C:\Windows\System32\spool\PRINTERS (admin), start the service again, then reprint.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">6. USB selective suspend (USB HP)</h2>
            <p className="leading-relaxed mb-3">
              On USB DeskJets, Windows can power down the port. The next print job fails and the device
              shows offline until you unplug/replug.
            </p>
            <p className="mt-2 bg-red-50 p-4 border-l-4 border-red-400 rounded-r">
              <strong>Fix:</strong> Device Manager → Universal Serial Bus controllers → USB Root Hub
              properties → Power Management → uncheck “Allow the computer to turn off this device.”
              Use a rear motherboard USB port, not an unpowered hub.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Fast checklist — HP offline in under 15 minutes</h2>
          <ol className="list-decimal ml-6 space-y-3">
            <li>Power-cycle the HP printer (30 seconds off).</li>
            <li>Uncheck <strong>Use Printer Offline</strong> in the print queue.</li>
            <li>Restart the <strong>Print Spooler</strong> service.</li>
            <li>For Wi‑Fi: set a <strong>Standard TCP/IP</strong> port (not WSD).</li>
            <li>Update or remove <strong>HP Smart</strong>.</li>
            <li>Disable deep sleep / auto-off on the printer.</li>
            <li>Install the model driver from HP Support if needed.</li>
            <li>Send a Windows test page.</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">HP model notes</h2>
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-4 font-semibold">Series</th>
                  <th className="p-4 font-semibold">Typical offline cause</th>
                  <th className="p-4 font-semibold">Best first fix</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-4 font-medium">DeskJet / ENVY</td>
                  <td className="p-4">HP Smart + sleep</td>
                  <td className="p-4">Update/remove HP Smart; lengthen sleep</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">OfficeJet / Pro</td>
                  <td className="p-4">WSD port after router change</td>
                  <td className="p-4">TCP/IP port with current IP</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">LaserJet</td>
                  <td className="p-4">UPD / firmware mismatch</td>
                  <td className="p-4">Model driver + firmware from HP</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">USB-only models</td>
                  <td className="p-4">USB selective suspend</td>
                  <td className="p-4">Disable USB power saving</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-10 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold mb-3">Still offline after these steps?</h2>
          <p className="text-gray-700 mb-4">
            Persistent HP offline issues are usually a port profile, driver stack, or HP Smart conflict
            that is faster to clear over a secure remote session than to hunt alone.
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
          <h3 className="text-3xl font-bold mb-4">HP still showing Offline?</h3>
          <p className="mb-6 text-slate-300">
            Related help:{' '}
            <Link href="/services/hp-printer-support" className="text-blue-300 underline">
              HP Printer Support
            </Link>{' '}
            ·{' '}
            <Link href="/services/hp-printer-not-printing" className="text-blue-300 underline">
              HP Not Printing
            </Link>{' '}
            ·{' '}
            <Link href="/services/printer-offline" className="text-blue-300 underline">
              General Printer Offline
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
