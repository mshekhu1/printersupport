import Link from 'next/link'

export const metadata = {
  title: 'Epson Printer Support — Wireless, Drivers & Troubleshooting',
  description:
    'Trusted Epson printer support for EcoTank, WorkForce and Stylus models. We handle driver installs, network setup, and print quality issues with secure remote help.',
  openGraph: {
    title: 'Epson Printer Support — Wireless, Drivers & Troubleshooting',
    description:
      'Trusted Epson printer support for EcoTank, WorkForce and Stylus models. We handle driver installs, network setup, and print quality issues with secure remote help.',
  },
}

const faqs = [
  {
    q: 'Can you help with Epson EcoTank issues?',
    a: 'Yes. We diagnose ink system problems, connectivity, driver issues, and print quality concerns for EcoTank and other Epson models.',
  },
  {
    q: 'Do you support Epson printers on macOS?',
    a: 'We support both Windows and macOS systems and can ensure your Epson printer works reliably across devices.',
  },
  {
    q: 'Can you improve print quality or color calibration?',
    a: 'We provide guidance on print head cleaning, alignment, and driver settings to improve print quality where possible.',
  },
]

export default function Epson() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Epson Printer Support</h1>
      <p className="text-gray-700 mb-6">We specialize in Epson printer troubleshooting — including EcoTank, WorkForce, and Stylus lineup. Whether your printer won’t connect, is producing poor print quality, or showing driver errors, we’ll fix it quickly and securely.</p>

      <section className="grid md:grid-cols-2 gap-8 my-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Epson problems we fix</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Network and Wi‑Fi connection problems</li>
            <li>Driver and software compatibility</li>
            <li>Ink system & print quality troubleshooting</li>
            <li>Error codes and firmware updates</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Our service promise</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Clear communication and secure remote sessions</li>
            <li>Quick diagnosis and practical fixes</li>
            <li>We test printing before closing the session</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg my-6">
        <h3 className="text-lg font-semibold">Book an Epson support session</h3>
        <p className="text-gray-700 mt-2 mb-4">Contact our team and we’ll schedule a secure remote session to diagnose and resolve your Epson printer issue—often during the first session.</p>
        <Link href="tel:+18887694448" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Contact us for Epson help</Link>
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
