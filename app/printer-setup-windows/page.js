export const dynamic = 'force-static';

import Link from 'next/link';
import { ArrowRight, CheckCircle, Wifi, Usb, Cpu } from 'lucide-react';


export const metadata = {
  title: 'Printer Setup on Windows 10 & 11 | Remote US Support',
  description: 'Need help setting up a printer on Windows? We provide remote printer setup for Windows 10 & 11. US support available.',
  openGraph: {
    title: 'Printer Setup on Windows 10 & 11 | Remote US Support',
    description: 'Need help setting up a printer on Windows? We provide remote printer setup for Windows 10 & 11. US support available.',
  },
};

export default function PrinterSetupWindows() {
  const helps = [
    'New printer installation',
    'Printer setup on new computer',
    'Wireless & USB printer setup',
    'Default printer configuration',
  ];

  const failures = [
    'Missing drivers',
    'Windows compatibility issues',
    'Incorrect network settings',
    'Partial installations',
  ];

  const steps = [
    'Driver installation',
    'Printer configuration',
    'Test print verification',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Printer Setup for Windows 10 & Windows 11
            </h1>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Setting up a printer on Windows can be confusing, especially with wireless printers or new systems. Our experts handle full printer setup remotely.
            </p>
            <div className="flex gap-4">
              <a href="#setup-form" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition shadow">
                Set Up Printer on Windows Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a href="tel:+18887694448" className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition">
                Call Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* We Help With */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">We Help With</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {helps.map((h, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3 border border-gray-100">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <p className="text-gray-700 font-medium">{h}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Setup Often Fails</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {failures.map((f, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <p className="text-gray-700">{f}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Complete Windows Printer Setup</h3>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <ul className="space-y-3 text-gray-700">
              {steps.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✔</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a href="#setup-form" className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-500 transition">
                👉 Set Up Printer on Windows Now
              </a>
            </div>
          </div>
        </div>
      </section>

      

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">Need immediate help? Call our US support line at <strong>+1-888-769-4448</strong>.</p>
        </div>
      </section>
    </div>
  );
}
