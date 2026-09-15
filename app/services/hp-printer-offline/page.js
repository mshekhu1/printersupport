import Link from 'next/link';
import ServicePageShell from '@/app/components/ServicePageShell';

export const metadata = {
  title: 'HP Printer Offline Fix (2026) — HP Smart, WSD Port & Spooler',
  description:
    'HP printer offline or keeps going offline? Fix HP Smart conflicts, WSD→TCP/IP ports, sleep mode, and spooler errors on Windows 10/11 — or get live remote US help in minutes.',
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
      'Step-by-step HP offline fixes for DeskJet, OfficeJet, LaserJet, and ENVY. Live remote US tech available if you need it done now.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zamzamprint.com/services/hp-printer-offline',
    siteName: 'ZamZam Print Support',
    images: [{ url: '/side-view-employee-using-printer.jpg', width: 1200, height: 630, alt: 'HP printer offline support' }],
  },
  alternates: { canonical: 'https://www.zamzamprint.com/services/hp-printer-offline' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export const dynamic = 'force-static';
export const revalidate = 3600;

export default function HPPrinterOffline() {
  const faqs = [
    {
      q: 'Why does my HP printer keep going offline?',
      aShort: 'Usually HP Smart, WSD ports, sleep mode, or spooler issues.',
      a: 'HP printers go offline because of HP Smart reporting errors, unreliable WSD network ports, aggressive sleep/auto-off, a stuck Print Spooler, USB power saving, or a dropped Wi‑Fi link.',
    },
    {
      q: 'How do I bring my HP printer back online?',
      aShort: 'Restart, uncheck Use Printer Offline, restart spooler, fix the port.',
      a: 'Power-cycle the printer, uncheck Use Printer Offline, restart Print Spooler, set a Standard TCP/IP port for Wi‑Fi models, update or remove HP Smart, then send a test page.',
    },
    {
      q: 'Does HP Smart cause printer offline issues?',
      aShort: 'Yes — outdated or conflicting HP Smart often marks printers offline.',
      a: 'Update HP Smart from the Microsoft Store, repair/reinstall it, or remove it and add the printer through Windows Settings.',
    },
    {
      q: 'How do I fix HP printer offline on Windows 11?',
      aShort: 'Update HP Smart, restart spooler, switch WSD to TCP/IP.',
      a: 'Update HP Smart, restart Print Spooler, replace WSD with Standard TCP/IP using the printer IP, uncheck Use Printer Offline, and disable USB selective suspend for USB models.',
    },
    {
      q: 'Can I use an HP printer without HP Smart?',
      aShort: 'Yes — Windows built-in printing works for most models.',
      a: 'Add the printer in Windows Settings without HP Smart. Use the HP Universal Print Driver or your model driver from HP for full features.',
    },
  ];

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to fix an HP printer that shows offline',
    description: 'Bring an HP DeskJet, OfficeJet, LaserJet, or ENVY printer back online on Windows 10/11.',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <ServicePageShell
        breadcrumbItems={breadcrumbItems}
        title="HP Printer Offline? Fix HP Printer Keeps Going Offline (Windows 10/11)"
        intro={
          <>
            Your HP DeskJet, OfficeJet, LaserJet, or ENVY shows Offline in Windows or HP Smart — even though it is
            powered on. Below are the HP-specific causes and fixes. Full brand hub:{' '}
            <Link href="/services/hp-printer-support" className="text-blue-700 font-bold hover:underline">
              HP Printer Support
            </Link>
            .
          </>
        }
        faqs={faqs}
        relatedLinks={[
          { href: '/services/hp-printer-support', label: 'HP Printer Support' },
          { href: '/services/hp-printer-not-printing', label: 'HP Not Printing' },
          { href: '/services/printer-offline', label: 'General Printer Offline' },
        ]}
        footerHeadline="HP still showing Offline?"
        footerSubcopy="Remote US help for HP Smart, ports, and spooler conflicts."
      >
        <section className="space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-blue-800 mb-3">1. HP Smart status is wrong</h2>
            <p className="leading-relaxed mb-3">
              HP Smart often reports Offline when the printer is fine — especially after Windows updates or a corrupted install. Common on OfficeJet and DeskJet.
            </p>
            <p className="mt-2 bg-amber-50 p-4 border-l-4 border-amber-400">
              <strong>Fix:</strong> Microsoft Store → HP Smart → Update. Or uninstall HP Smart, reboot, and add the printer in Windows Settings → Printers & scanners.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-800 mb-3">2. WSD port keeps dropping (Wi‑Fi HP)</h2>
            <p className="leading-relaxed mb-3">
              Windows creates WSD ports that disconnect after sleep, VPN, or DHCP changes.
            </p>
            <p className="mt-2 bg-sky-50 p-4 border-l-4 border-sky-500">
              <strong>Fix:</strong> Print a network config page, note the IPv4 address, then Printer properties → Ports → Add Standard TCP/IP Port → enter that IP. Uncheck WSD.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-800 mb-3">3. HP sleep / auto-off</h2>
            <p className="leading-relaxed mb-3">
              ENVY and DeskJet units enter deep sleep quickly; Windows then marks them unavailable.
            </p>
            <p className="mt-2 bg-emerald-50 p-4 border-l-4 border-emerald-500">
              <strong>Fix:</strong> Settings → Power / Sleep → Never or a longer timeout. Keep printer and PC on the same SSID (not guest Wi‑Fi).
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-800 mb-3">4. Wrong driver (UPD vs model driver)</h2>
            <p className="leading-relaxed mb-3">
              HP Universal Print Driver can mis-report status. Model-specific drivers are more stable.
            </p>
            <p className="mt-2 bg-violet-50 p-4 border-l-4 border-violet-500">
              <strong>Fix:</strong> Download the model package from support.hp.com, remove the old queue, install, re-add via TCP/IP.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-800 mb-3">5. Print Spooler stuck</h2>
            <p className="leading-relaxed mb-3">
              A hung job can leave the HP queue offline until the spooler is cleared.
            </p>
            <p className="mt-2 bg-orange-50 p-4 border-l-4 border-orange-500">
              <strong>Fix:</strong> Cancel jobs → Win+R → services.msc → Print Spooler → Restart. If needed, stop service, clear C:\Windows\System32\spool\PRINTERS, start again.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-800 mb-3">6. USB selective suspend</h2>
            <p className="leading-relaxed mb-3">
              On USB DeskJets, Windows can power down the port so the next job fails as offline.
            </p>
            <p className="mt-2 bg-rose-50 p-4 border-l-4 border-rose-500">
              <strong>Fix:</strong> Device Manager → USB Root Hub → Power Management → uncheck “Allow the computer to turn off this device.” Prefer a rear motherboard USB port.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Fast checklist</h2>
          <ol className="list-decimal ml-6 space-y-3">
            <li>Power-cycle the HP printer (30 seconds off).</li>
            <li>Uncheck <strong>Use Printer Offline</strong>.</li>
            <li>Restart the <strong>Print Spooler</strong>.</li>
            <li>For Wi‑Fi: set a <strong>Standard TCP/IP</strong> port.</li>
            <li>Update or remove <strong>HP Smart</strong>.</li>
            <li>Disable deep sleep / auto-off.</li>
            <li>Install the model driver from HP Support if needed.</li>
            <li>Send a Windows test page.</li>
          </ol>
        </section>
      </ServicePageShell>
    </>
  );
}
