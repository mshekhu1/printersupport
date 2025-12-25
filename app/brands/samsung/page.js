import Link from 'next/link'

export const metadata = {
  title: 'Samsung Printer Support — Remote Help & Driver Fixes',
  description:
    'Samsung printer support for Xpress and other models—driver installs, connectivity fixes, and error troubleshooting with fast remote sessions.',
  openGraph: {
    title: 'Samsung Printer Support — Remote Help & Driver Fixes',
    description:
      'Samsung printer support for Xpress and other models—driver installs, connectivity fixes, and error troubleshooting with fast remote sessions.',
  },
}

const faqs = [
  {
    q: 'Do you support Samsung Xpress printers?',
    a: 'Yes — we support Samsung Xpress and other Samsung models for drivers, network setup, and error resolution.',
  },
  {
    q: 'Can you help when Samsung drivers are missing on my PC?',
    a: 'We locate and install correct drivers and resolve conflicts so the printer works with your operating system.',
  },
  {
    q: 'What if my Samsung printer shows an error code?',
    a: 'We remotely diagnose common error codes and guide through fixes. If a hardware repair is needed, we’ll advise next steps.',
  },
]

export default function Samsung() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Samsung Printer Support</h1>
      <p className="text-gray-700 mb-6">Our technicians provide Samsung printer troubleshooting and driver support for both home and small business users. We focus on getting your Samsung printer back online quickly with remote diagnostics and clear next steps.</p>

      <section className="grid md:grid-cols-2 gap-8 my-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Samsung issues we fix</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Driver and software installation</li>
            <li>Wi‑Fi and network printing problems</li>
            <li>Error codes and jam clearance guidance</li>
            <li>Compatibility with Windows & macOS</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Why our Samsung support helps</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Fast, secure remote sessions</li>
            <li>Experienced technicians with Samsung models</li>
            <li>Transparent pricing and follow-up guidance</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg my-6">
        <h3 className="text-lg font-semibold">Schedule Samsung printer help</h3>
        <p className="text-gray-700 mt-2 mb-4">Reach out to schedule a secure remote session—many Samsung issues are resolved during the first session.</p>
        <Link href="tel:+18887694448" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Contact us for Samsung help</Link>
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
