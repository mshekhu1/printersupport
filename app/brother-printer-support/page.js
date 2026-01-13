// app/brother-printer-support/page.js
import FAQAccordionClient from '../components/FAQAccordionClient';

export const metadata = {
  title: 'Brother Printer Support | Fix Brother Printer Issues | Expert Help',
  description: 'Brother printer support for setup, offline, driver, and printing problems.',
  keywords: ['Brother printer support', 'fix Brother printer', 'Brother printer offline', 'Brother driver issues', 'Brother printer setup', 'Brother laser support'],
  authors: [{ name: 'ZamZam Print Support' }],
  openGraph: {
    title: 'Brother Printer Support | Fix Brother Printer Issues',
    description: 'Solutions for Brother printers.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zamzamprint.com/brother-printer-support',
    siteName: 'ZamZam Print Support',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brother Printer Support | Fix Brother Printer Issues',
    description: 'Troubleshoot Brother errors.',
  },
  alternates: {
    canonical: 'https://www.zamzamprint.com/brother-printer-support',
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

export default function BrotherPrinterSupport() {
  const faqs = [
    {
      q: 'Brother printer offline?',
      aShort: 'Check connections.',
      a: 'Restart, update drivers from brother.com.'
    },
    {
      q: 'Install Brother drivers?',
      aShort: 'Download and run.',
      a: 'From support.brother.com, select model.'
    },
    {
      q: 'Brother not printing?',
      aShort: 'Queue and toner.',
      a: 'Clear jobs, check supplies.'
    },
    {
      q: 'Brother paper jam?',
      aShort: 'Clear from drum.',
      a: 'Open covers, remove jam.'
    },
    {
      q: 'Brother blank prints?',
      aShort: 'Toner low.',
      a: 'Shake cartridge, replace.'
    },
    {
      q: 'Brother Wi-Fi connect?',
      aShort: 'Use control center.',
      a: 'Brother utilities for setup.'
    }
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 font-sans text-gray-800">
      <header className="mb-12 border-b pb-8">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Brother Printer Support: Fix Brother Problems Easily
        </h1>
        <p className="text-lg text-slate-600 italic">
          Brother printer issues? Get fixes.
        </p>
      </header>
      <section className="space-y-10 p-4 mb-12">
        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-3">1. Brother Offline</h2>
          <p className="leading-relaxed mb-3">
            Connection issues.
          </p>
          <p className="mt-2 bg-yellow-50 p-4 border-l-4 border-yellow-400 rounded-r">
            <strong>The Fix:</strong> Restart, drivers.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-3">2. Driver Errors</h2>
          <p className="leading-relaxed mb-3">
            Corrupted files.
          </p>
          <p className="mt-2 bg-blue-50 p-4 border-l-4 border-blue-400 rounded-r">
            <strong>The Fix:</strong> Reinstall.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-3">3. Not Printing</h2>
          <p className="leading-relaxed mb-3">
            Stuck jobs.
          </p>
          <p className="mt-2 bg-green-50 p-4 border-l-4 border-green-400 rounded-r">
            <strong>The Fix:</strong> Clear queue.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-3">4. Jams</h2>
          <p className="leading-relaxed mb-3">
            Paper stuck.
          </p>
          <p className="mt-2 bg-purple-50 p-4 border-l-4 border-purple-400 rounded-r">
            <strong>The Fix:</strong> Clear.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-3">5. Quality Issues</h2>
          <p className="leading-relaxed mb-3">
            Toner problems.
          </p>
          <p className="mt-2 bg-orange-50 p-4 border-l-4 border-orange-400 rounded-r">
            <strong>The Fix:</strong> Replace.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-3">6. Wi-Fi</h2>
          <p className="leading-relaxed mb-3">
            Setup fails.
          </p>
          <p className="mt-2 bg-red-50 p-4 border-l-4 border-red-400 rounded-r">
            <strong>The Fix:</strong> Reset.
          </p>
        </div>
      </section>
      <section className="mb-12 p-4">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">Step-by-Step Brother Guide</h2>
        <ol className="list-decimal ml-6 space-y-4">
          <li className="pl-2"><strong>Restart.</strong></li>
          <li className="pl-2"><strong>Connections.</strong></li>
          <li className="pl-2"><strong>Drivers.</strong></li>
          <li className="pl-2"><strong>Tools.</strong></li>
          <li className="pl-2"><strong>Queue.</strong></li>
          <li className="pl-2"><strong>Supplies.</strong></li>
          <li className="pl-2"><strong>Clean.</strong></li>
          <li className="pl-2"><strong>Test.</strong></li>
          <li className="pl-2"><strong>Reset.</strong></li>
          <li className="pl-2"><strong>Contact.</strong></li>
        </ol>
      </section>
      <section className="mt-16 p-4 mb-12">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">Quick Brother Diagnostic</h2>
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
                <td className="p-4 font-medium">Offline</td>
                <td className="p-4">Network</td>
                <td className="p-4">Reconnect</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Not printing</td>
                <td className="p-4">Queue</td>
                <td className="p-4">Clear</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Jam</td>
                <td className="p-4">Paper</td>
                <td className="p-4">Remove</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Blank</td>
                <td className="p-4">Toner</td>
                <td className="p-4">Replace</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="my-10 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
        <h2 className="text-2xl font-bold mb-3">Need Brother Help?</h2>
        <p className="text-gray-700 mb-4">
          Our team is ready.
        </p>
        <a href="tel:+18887694448" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Contact Support
        </a>
      </section>
      <section className="mt-16 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">Frequently Asked Questions</h2>
        <FAQAccordionClient faqs={faqs} />
      </section>
      <div className="mt-10 text-gray-700 max-w-3xl">
        <p>
          📞 Call <strong>+1-888-769-4448</strong>.
        </p>
      </div>
      <footer className="mt-20 bg-slate-900 text-white p-10 rounded-2xl text-center">
        <h3 className="text-3xl font-bold mb-4">Brother Problems?</h3>
        <p className="mb-6 text-slate-300">
          Call us.
        </p>
        <a href="tel:+18887694448" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold transition-all inline-block">
          Call for Support
        </a>
      </footer>
    </main>
  );
}