import Link from 'next/link'

export const metadata = {
  title: 'HP Printer Repair & Support — Remote & On-site | Printer Support',
  description:
    'Fast, reliable HP printer support—driver installation, offline & connectivity fixes, and remote troubleshooting. Get same-day help from certified technicians.',
  openGraph: {
    title: 'HP Printer Repair & Support — Remote & On-site',
    description:
      'Fast, reliable HP printer support—driver installation, offline & connectivity fixes, and remote troubleshooting. Get same-day help from certified technicians.',
  },
}

const faqs = [
  {
    q: 'Do you provide remote HP printer support?',
    a: 'Yes. Most HP issues like driver errors, offline printers, and network connectivity can be resolved remotely during a secure session. We guide you through every step so you stay in control.',
  },
  {
    q: 'Can you help with HP printer drivers and firmware?',
    a: 'Absolutely. We install the correct drivers and update firmware where necessary to ensure your HP printer operates reliably with your computer and network.',
  },
  {
    q: 'What if my HP printer is still under warranty?',
    a: 'We can advise on warranty options and, when appropriate, help you prepare information for HP support. For most software and connectivity issues, we can fix the problem without vendor intervention.',
  },
]

export default function HP() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">HP Printer Support & Repair</h1>
      <p className="text-gray-700 mb-6">
        Our certified technicians specialize in HP printers — from OfficeJet and LaserJet to DeskJet models. Whether your HP printer is showing offline,
        not printing, or failing to connect to Wi‑Fi, we offer fast remote troubleshooting and clear, affordable pricing to get you back to work.
      </p>

      <section className="grid md:grid-cols-2 gap-8 my-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Common HP issues we fix</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Offline or "printer not responding" errors</li>
            <li>Driver and software installation problems</li>
            <li>Wi‑Fi and network connectivity issues</li>
            <li>Paper feed, error codes, and configuration problems</li>
            <li>Firmware updates and compatibility checks</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Why customers choose us</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Secure remote sessions — no hardware shipping</li>
            <li>Fast response and same‑day availability</li>
            <li>Clear pricing and step-by-step guidance</li>
            <li>Support for home users and small businesses</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg my-6">
        <h3 className="text-lg font-semibold">Get HP support now</h3>
        <p className="text-gray-700 mt-2 mb-4">Click below to contact us and schedule a secure remote session. We often fix issues during the first session.</p>
        <Link href="tel:+18887694448" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Contact us for HP help</Link>
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
