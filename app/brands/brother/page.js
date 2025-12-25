import Link from 'next/link'

export const metadata = {
  title: 'Brother Printer Support — Remote Fixes & Setup',
  description:
    'Brother printer troubleshooting for HL, MFC and DCP series. Driver installs, network setup, and error resolution with friendly remote technicians.',
  openGraph: {
    title: 'Brother Printer Support — Remote Fixes & Setup',
    description:
      'Brother printer troubleshooting for HL, MFC and DCP series. Driver installs, network setup, and error resolution with friendly remote technicians.',
  },
}

const faqs = [
  {
    q: 'Do you support Brother multifunction printers?',
    a: 'Yes — we support printing, scanning, and fax issues on Brother MFC and DCP series and help configure multi-function features.',
  },
  {
    q: 'Can you help with driver conflicts on Windows?',
    a: 'We resolve driver conflicts and ensure the correct Brother drivers are installed and configured for network or USB setups.',
  },
  {
    q: 'What if my Brother printer needs service?',
    a: 'We will diagnose remotely and advise if a repair visit or parts replacement is required. Many software and network issues are resolved without hardware service.',
  },
]

export default function Brother() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Brother Printer Support</h1>
      <p className="text-gray-700 mb-6">We provide friendly, practical support for Brother printers — from office-class MFCs to compact HL models. Our technicians troubleshoot driver problems, network printing, and multi-function features remotely and efficiently.</p>

      <section className="grid md:grid-cols-2 gap-8 my-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Brother issues we fix</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Scanning and multi-function configuration</li>
            <li>Network and shared printing issues</li>
            <li>Driver and compatibility problems</li>
            <li>Error codes, paper jams, and firmware updates</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Service highlights</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Secure remote sessions with customer control</li>
            <li>Fast diagnosis and transparent pricing</li>
            <li>We test printing and scanning before closing the session</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg my-6">
        <h3 className="text-lg font-semibold">Need Brother printer help?</h3>
        <p className="text-gray-700 mt-2 mb-4">Contact us and we’ll schedule a secure remote session to fix your Brother printer — usually during the first session.</p>
        <Link href="tel:+18887694448" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Get Brother support</Link>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border rounded p-4">
              <h4 className="font-semibold">{f.q}</h4>
              <p className="mt-2 text-gray-700">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(f => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a }
        }))
      }) }} />
    </main>
  )
}
