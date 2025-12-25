import Link from 'next/link'

export const metadata = {
  title: 'Canon Printer Support — Remote Troubleshooting & Setup',
  description:
    'Canon printer support for Pixma, imageCLASS, and MAXIFY models. Driver installs, Wi‑Fi setup, and error resolution with remote sessions and expert guidance.',
  openGraph: {
    title: 'Canon Printer Support — Remote Troubleshooting & Setup',
    description:
      'Canon printer support for Pixma, imageCLASS, and MAXIFY models. Driver installs, Wi‑Fi setup, and error resolution with remote sessions and expert guidance.',
  },
}

const faqs = [
  {
    q: 'Can you help with Canon printer wireless setup?',
    a: 'Yes — we can walk you through Wi‑Fi setup, network troubleshooting, and router settings to get your Canon printer connected reliably.',
  },
  {
    q: 'Do you install Canon drivers and software?',
    a: 'We install official Canon drivers and configure settings to ensure compatibility with Windows and macOS systems.',
  },
  {
    q: 'Are ink/toner and hardware problems handled?',
    a: 'We diagnose hardware issues remotely and can advise whether a technician visit or replacement parts are required. Software fixes and configuration are commonly resolved remotely.',
  },
]

export default function Canon() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Canon Printer Support</h1>
      <p className="text-gray-700 mb-6">We support Canon printers including Pixma, imageCLASS, and MAXIFY. Our team specializes in fast driver installs, wireless configuration, and resolving printing errors so you can get back to printing documents and photos.</p>

      <section className="grid md:grid-cols-2 gap-8 my-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">What we fix for Canon</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Print head alignment and calibration help</li>
            <li>Wi‑Fi and network connection problems</li>
            <li>Driver and software conflicts on Windows/macOS</li>
            <li>Error codes, paper jams, and configuration issues</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Our approach</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Secure remote session with step-by-step guidance</li>
            <li>Transparent pricing and clear next steps</li>
            <li>Fast fixes for most software and network problems</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg my-6">
        <h3 className="text-lg font-semibold">Ready to fix your Canon printer?</h3>
        <p className="text-gray-700 mt-2 mb-4">Contact us to schedule a secure remote session. We prioritize quick resolution and will test printing before ending the session.</p>
        <Link href="tel:+18887694448" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Get Canon support</Link>
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
