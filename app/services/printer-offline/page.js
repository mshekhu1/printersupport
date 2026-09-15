import Link from 'next/link';
import ServicePageShell from '@/app/components/ServicePageShell';

// SEO Metadata for the page
export const metadata = {
  title: 'Printer Offline? Fix Windows 10/11 Offline Status Fast',
  description:
    'Printer shows offline but is on? Fix Use Printer Offline, Print Spooler, Wi‑Fi, and WSD ports on Windows 10/11 — or get live remote US help.',
  keywords: [
    'printer offline',
    'printer offline windows 10',
    'printer offline windows 11',
    'printer keeps going offline',
    'how to fix printer offline',
    'printer is offline',
  ],
  authors: [{ name: 'ZamZam Print Support' }],
  openGraph: {
    title: 'Printer Offline? Fix Windows 10/11 Offline Status Fast',
    description:
      'Clear steps for offline printers on Windows — spooler, ports, Wi‑Fi — plus live remote help if you need it now.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zamzamprint.com/services/printer-offline',
    siteName: 'ZamZam Print Support',
    images: [
      {
        url: '/side-view-employee-using-printer.jpg',
        width: 1200,
        height: 630,
        alt: 'Printer offline troubleshooting support',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Printer Offline? Fix Windows 10/11 Offline Status Fast',
    description: 'Spooler, ports, and Wi‑Fi fixes when your printer keeps going offline.',
    images: ['/side-view-employee-using-printer.jpg'],
  },
  alternates: {
    canonical: 'https://www.zamzamprint.com/services/printer-offline',
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

export default function PrinterOffline() {
  const faqs = [
    {
      q: 'Why does my printer keep going offline on Windows 10?',
      aShort: 'Usually caused by power settings, connection issues, or print spooler problems.',
      a: 'Windows 10 printers go offline due to power-saving settings turning off USB ports, network connection drops, print spooler service stopping, or Windows detecting the printer as unavailable. Fix by disabling USB selective suspend, ensuring stable network connection, restarting print spooler service, and checking printer is powered on and connected.'
    },
    {
      q: 'How do I fix printer offline on Windows 11?',
      aShort: 'Check connection, restart print spooler, set printer as default, and disable power saving.',
      a: 'Windows 11 printer offline fixes: Ensure printer is powered on and connected (USB or Wi-Fi). Go to Settings → Bluetooth & devices → Printers & scanners. Click your printer → Printer properties → Ports tab → verify correct port. Restart Print Spooler service (Services → Print Spooler → Restart). Set printer as default. Disable "Allow Windows to manage my default printer" if enabled. For network printers, verify IP address and connection.'
    },
    {
      q: 'What causes a printer to keep going offline?',
      aShort: 'Power saving modes, connection drops, spooler issues, or incorrect port settings.',
      a: 'Printers keep going offline due to Windows power-saving features (USB selective suspend, network adapter power saving), unstable network connections (Wi-Fi drops, router issues), print spooler service crashes, incorrect printer port settings (WSD ports are unreliable), printer sleep mode, or Windows detecting printer as unavailable after brief disconnection. Fix by disabling power saving, using stable connection, restarting spooler, and switching to TCP/IP port for network printers.'
    },
    {
      q: 'How do I bring my printer back online?',
      aShort: 'Restart printer, check connection, restart print spooler, and set as default.',
      a: 'Bring printer back online: Turn printer off and on. Check USB cable or Wi-Fi connection. Restart Print Spooler service (Windows key + R → services.msc → Print Spooler → Restart). Open Settings → Printers → right-click printer → See what\'s printing → Printer menu → check "Use Printer Offline" is unchecked. Set printer as default. For network printers, ping the printer\'s IP address to verify connectivity.'
    },
    {
      q: 'Can USB selective suspend cause printer offline?',
      aShort: 'Yes, USB selective suspend is a common cause of printer offline issues.',
      a: 'Yes, USB selective suspend (Windows power-saving feature) turns off USB ports when idle, causing Windows to detect printers as disconnected and mark them offline. Disable it: Control Panel → Power Options → Change plan settings → Change advanced power settings → USB settings → USB selective suspend setting → set to Disabled. This prevents Windows from powering down USB ports and keeps printers online.'
    },
    {
      q: 'Why is my network printer showing offline?',
      aShort: 'Network connection issues, incorrect port settings, or printer sleep mode.',
      a: 'Network printers show offline due to Wi-Fi connection drops, router issues, incorrect port type (WSD ports are unreliable), printer sleep mode, firewall blocking printer communication, or incorrect IP address. Fix by ensuring stable Wi-Fi connection, switching from WSD to Standard TCP/IP Port using printer\'s IP address, disabling printer sleep mode, checking firewall settings, and verifying printer\'s IP address matches port configuration.'
    }
  ];

  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.zamzamprint.com' },
    { name: 'Services', url: 'https://www.zamzamprint.com/services' },
    { name: 'Printer Offline', url: 'https://www.zamzamprint.com/services/printer-offline' }
  ];

  return (
    <ServicePageShell
      breadcrumbItems={breadcrumbItems}
      title="Printer Offline? Fix Windows 10/11 Offline Status Fast"
      intro={
        <>
          Your printer shows Offline even though it is powered on. Windows 10 and 11 often mark it offline because of the print queue, spooler, Wi‑Fi, or WSD ports. Use the fixes below — or jump to brand pages for{' '}
          <Link href="/services/hp-printer-offline" className="text-blue-700 font-bold hover:underline">HP</Link>,{' '}
          <Link href="/services/brother-printer-offline" className="text-blue-700 font-bold hover:underline">Brother</Link>, or{' '}
          <Link href="/services/canon-printer-offline" className="text-blue-700 font-bold hover:underline">Canon</Link>.
        </>
      }
      faqs={faqs}
      relatedLinks={[
        { href: '/services/hp-printer-offline', label: 'HP Printer Offline' },
        { href: '/services/brother-printer-offline', label: 'Brother Printer Offline' },
        { href: '/services/canon-printer-offline', label: 'Canon Printer Offline' },
        { href: '/services/printer-spooler-error', label: 'Print Spooler Error' },
      ]}
      footerHeadline="Still Showing Offline?"
      footerSubcopy="If your printer continues to show offline after trying these solutions, professional diagnosis may be needed. Our support team can help resolve persistent offline issues."
    >
      <section className="space-y-10">
        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-3">1. The &quot;USB Selective Suspend&quot; Power Saving Trap</h2>
          <p className="leading-relaxed mb-3">
            Windows has a power-saving feature called <strong>USB Selective Suspend</strong> that automatically turns off USB ports when they&apos;re idle. When Windows powers down the USB port your printer is connected to, it detects the printer as &quot;disconnected&quot; and marks it offline—even though the printer is still powered on.
          </p>
          <p className="mt-2 bg-yellow-50 p-4 border-l-4 border-yellow-400 rounded-r">
            <strong>The Fix:</strong> Disable USB Selective Suspend. Go to Control Panel → Power Options → Change plan settings → Change advanced power settings → USB settings → USB selective suspend setting → set both &quot;On battery&quot; and &quot;Plugged in&quot; to <strong>Disabled</strong>. Click Apply and restart your computer. This prevents Windows from powering down USB ports and keeps your printer online.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-3">2. The &quot;Use Printer Offline&quot; Checkbox Mistake</h2>
          <p className="leading-relaxed mb-3">
            Sometimes Windows accidentally checks a hidden &quot;Use Printer Offline&quot; option. When this is enabled, Windows won&apos;t send print jobs to the printer, even if it&apos;s connected and working.
          </p>
          <p className="mt-2 bg-blue-50 p-4 border-l-4 border-blue-400 rounded-r">
            <strong>The Fix:</strong> Open Settings → Bluetooth & devices → Printers & scanners (Windows 11) or Settings → Devices → Printers & scanners (Windows 10). Click your printer → See what&apos;s printing → Printer menu at the top → uncheck <strong>&quot;Use Printer Offline&quot;</strong> if it&apos;s checked. If the option is grayed out, restart the Print Spooler service first, then try again.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-3">3. The &quot;Print Spooler Service&quot; Crash</h2>
          <p className="leading-relaxed mb-3">
            The Print Spooler service manages print jobs in Windows. When this service crashes or stops, Windows can&apos;t communicate with printers and marks them offline. This is common after Windows updates or system errors.
          </p>
          <p className="mt-2 bg-green-50 p-4 border-l-4 border-green-400 rounded-r">
            <strong>The Fix:</strong> Restart the Print Spooler service. Press Windows key + R, type <strong>services.msc</strong>, press Enter. Find &quot;Print Spooler&quot; → right-click → Restart. If restart doesn&apos;t work, right-click → Stop, wait 10 seconds, then right-click → Start. Also clear the spooler folder: Stop the service, navigate to C:\Windows\System32\spool\PRINTERS, delete all files, then restart the service.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-3">4. The &quot;WSD Port&quot; Reliability Problem</h2>
          <p className="leading-relaxed mb-3">
            Windows automatically creates &quot;WSD&quot; (Web Services for Devices) ports for network printers. These ports are notoriously unreliable—they often drop connections, causing Windows to mark printers offline even when they&apos;re working fine.
          </p>
          <p className="mt-2 bg-purple-50 p-4 border-l-4 border-purple-400 rounded-r">
            <strong>The Fix:</strong> Switch to a Standard TCP/IP Port. Find your printer&apos;s IP address (check printer display or print network configuration page). Go to Settings → Printers → Printer Properties → Ports tab → uncheck current port → Add Port → Standard TCP/IP Port → Next → enter printer&apos;s IP address → Finish. This provides a stable connection that won&apos;t randomly go offline.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-3">5. The &quot;Network Adapter Power Saving&quot; Issue</h2>
          <p className="leading-relaxed mb-3">
            For wireless printers, Windows can power down the Wi-Fi adapter to save energy. When the adapter sleeps, Windows loses connection to the printer and marks it offline.
          </p>
          <p className="mt-2 bg-orange-50 p-4 border-l-4 border-orange-400 rounded-r">
            <strong>The Fix:</strong> Disable Wi-Fi adapter power saving. Right-click Start → Device Manager → Network adapters → right-click your Wi-Fi adapter → Properties → Power Management tab → uncheck <strong>&quot;Allow the computer to turn off this device to save power&quot;</strong>. Click OK. This keeps your Wi-Fi adapter active and maintains connection to wireless printers.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-3">6. The &quot;Printer Sleep Mode&quot; Problem</h2>
          <p className="leading-relaxed mb-3">
            Many printers enter sleep mode after periods of inactivity. When a printer is sleeping, Windows may detect it as unavailable and mark it offline, even though it will wake up when you send a print job.
          </p>
          <p className="mt-2 bg-red-50 p-4 border-l-4 border-red-400 rounded-r">
            <strong>The Fix:</strong> Disable printer sleep mode or adjust timeout. Access your printer&apos;s settings menu (usually through the printer&apos;s display panel or web interface). Look for &quot;Sleep Mode&quot; or &quot;Power Saving&quot; settings and either disable it or increase the timeout period. Alternatively, send a test print periodically to keep the printer awake. Some printers have a &quot;Keep Printer Online&quot; option in their settings.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-slate-900">Step-by-Step Troubleshooting Guide</h2>
        <ol className="list-decimal ml-6 space-y-4">
          <li className="pl-2">
            <strong>Check printer power and connection:</strong> Ensure printer is powered on, USB cable is connected (for USB printers), or Wi-Fi is connected (for wireless printers).
          </li>
          <li className="pl-2">
            <strong>Restart printer:</strong> Turn printer off, wait 30 seconds, turn back on. Wait for printer to fully initialize.
          </li>
          <li className="pl-2">
            <strong>Uncheck &quot;Use Printer Offline&quot;:</strong> Settings → Printers → See what&apos;s printing → Printer menu → uncheck &quot;Use Printer Offline&quot;.
          </li>
          <li className="pl-2">
            <strong>Restart Print Spooler service:</strong> Windows key + R → services.msc → Print Spooler → Restart.
          </li>
          <li className="pl-2">
            <strong>Set printer as default:</strong> Settings → Printers → right-click printer → Set as default printer.
          </li>
          <li className="pl-2">
            <strong>Disable USB selective suspend:</strong> Control Panel → Power Options → Advanced settings → USB settings → USB selective suspend → Disabled.
          </li>
          <li className="pl-2">
            <strong>Change printer port:</strong> For network printers, switch from WSD port to Standard TCP/IP Port using printer&apos;s IP address.
          </li>
          <li className="pl-2">
            <strong>Disable Wi-Fi power saving:</strong> Device Manager → Network adapters → Wi-Fi adapter → Properties → Power Management → uncheck power saving.
          </li>
          <li className="pl-2">
            <strong>Update printer drivers:</strong> Download latest drivers from manufacturer&apos;s website and install.
          </li>
          <li className="pl-2">
            <strong>Test print:</strong> Send a test print to verify printer is online and working.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-slate-900">Quick Diagnostic Guide</h2>
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-100">
              <tr>
                <th className="p-4 font-semibold">Issue</th>
                <th className="p-4 font-semibold">Diagnosis</th>
                <th className="p-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-4 font-medium">Printer offline after Windows update</td>
                <td className="p-4">Print Spooler service issue</td>
                <td className="p-4">Restart Print Spooler service</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Printer goes offline periodically</td>
                <td className="p-4">USB selective suspend or power saving</td>
                <td className="p-4">Disable USB/Wi-Fi power saving</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Network printer shows offline</td>
                <td className="p-4">WSD port or connection issue</td>
                <td className="p-4">Switch to TCP/IP port</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Printer offline but works from printer menu</td>
                <td className="p-4">Windows driver/port issue</td>
                <td className="p-4">Check port settings, update drivers</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Printer offline after sleep</td>
                <td className="p-4">Printer sleep mode or Windows power saving</td>
                <td className="p-4">Disable sleep mode, disable power saving</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </ServicePageShell>
  );
}
