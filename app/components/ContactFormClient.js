'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/phone';

/**
 * @param {{ variant?: 'consumer' | 'business'; source?: string }} props
 */
export default function ContactFormClient({
  variant = 'consumer',
  source = 'contact',
}) {
  const isBusiness = variant === 'business';

  const [formData, setFormData] = useState({
    printer_issue: '',
    printer_brand: '',
    urgency: '',
    phone: '',
    company: '',
    work_email: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      const bizBits = isBusiness
        ? ` | Company: ${formData.company} | Work email: ${formData.work_email || 'n/a'} | Lead: B2B`
        : ` | Lead: consumer`;

      const { error: dbError } = await supabase.from('contact_inquiries').insert([
        {
          phone: formData.phone,
          service: formData.printer_issue,
          message: `Source: ${source} | Brand: ${formData.printer_brand} | Urgency: ${formData.urgency}${bizBits}`,
        },
      ]);

      if (dbError) {
        console.error('Supabase error:', dbError);
        setSending(false);
        setError(
          `We could not save your request. Please call ${PHONE_DISPLAY}, or try again in a moment.`
        );
        return;
      }

      setSending(false);
      setSubmitted(true);
    } catch (err) {
      console.error('Submit error:', err);
      setSending(false);
      setError(`Something went wrong. Please call ${PHONE_DISPLAY}.`);
    }
  };

  const issueOptions = isBusiness
    ? [
        'Office printer offline',
        'Cannot print from workstations',
        'Driver / shared printer setup',
        'Wi-Fi / LAN printer issue',
        'New office printer deployment',
        'Print queue / spooler errors',
        'Scan-to-email / network scan',
        'Other business printer issue',
      ]
    : [
        'Printer Offline',
        'Not Printing',
        'Wi-Fi / Network Issue',
        'Driver Installation',
        'Paper Jam',
        'Error Code on Display',
        'Slow Printing',
        'Print Quality Issue',
        'New Printer Setup',
        'Other',
      ];

  const brandOptions = [
    'HP',
    'Canon',
    'Epson',
    'Brother',
    'Samsung',
    'Lexmark',
    'Xerox',
    'Other',
  ];

  const urgencyOptions = isBusiness
    ? [
        { value: 'now', label: 'Business hours — ASAP' },
        { value: 'today', label: 'Today' },
        { value: 'tomorrow', label: 'Tomorrow' },
        { value: 'this-week', label: 'This week' },
      ]
    : [
        { value: 'now', label: 'As soon as possible' },
        { value: 'today', label: 'Today' },
        { value: 'tomorrow', label: 'Tomorrow' },
        { value: 'this-week', label: 'This week' },
      ];

  if (submitted) {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Request received</h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          We&apos;ll call{' '}
          <strong className="text-gray-900">{formData.phone}</strong> during business
          hours
          {isBusiness ? ' about your office printer issue' : ''}.
        </p>
        <p className="text-sm text-gray-500">
          Prefer to call now?{' '}
          <a href={PHONE_HREF} className="text-blue-600 font-bold hover:underline">
            {PHONE_DISPLAY}
          </a>
        </p>
      </div>
    );
  }

  const selectClass =
    'w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-white text-gray-800 font-medium focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all appearance-none cursor-pointer';
  const selectStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
    backgroundSize: '20px',
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm space-y-2">
          <p className="m-0">{error}</p>
          <a href={PHONE_HREF} className="inline-flex font-bold text-blue-700 hover:underline">
            Call {PHONE_DISPLAY}
          </a>
        </div>
      )}

      {isBusiness && (
        <>
          <div>
            <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-2">
              Company / organization <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              placeholder="Acme Office LLC"
              className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-white text-gray-800 font-medium focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-gray-400"
            />
          </div>
          <div>
            <label htmlFor="work_email" className="block text-sm font-bold text-gray-700 mb-2">
              Work email
            </label>
            <input
              type="email"
              id="work_email"
              name="work_email"
              value={formData.work_email}
              onChange={handleChange}
              placeholder="you@company.com"
              className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-white text-gray-800 font-medium focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-gray-400"
            />
          </div>
        </>
      )}

      <div>
        <label htmlFor="printer_issue" className="block text-sm font-bold text-gray-700 mb-2">
          {isBusiness ? 'Business printer issue' : "What's your printer issue?"}{' '}
          <span className="text-red-500">*</span>
        </label>
        <select
          id="printer_issue"
          name="printer_issue"
          value={formData.printer_issue}
          onChange={handleChange}
          required
          className={selectClass}
          style={selectStyle}
        >
          <option value="">— Select your issue —</option>
          {issueOptions.map((issue) => (
            <option key={issue} value={issue}>
              {issue}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="printer_brand" className="block text-sm font-bold text-gray-700 mb-2">
          Printer brand <span className="text-red-500">*</span>
        </label>
        <select
          id="printer_brand"
          name="printer_brand"
          value={formData.printer_brand}
          onChange={handleChange}
          required
          className={selectClass}
          style={selectStyle}
        >
          <option value="">— Select brand —</option>
          {brandOptions.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-3">
          When do you need help? <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {urgencyOptions.map((opt) => (
            <label
              key={opt.value}
              className={`relative flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                formData.urgency === opt.value
                  ? 'border-blue-500 bg-blue-50 shadow-md shadow-blue-500/10'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <input
                type="radio"
                name="urgency"
                value={opt.value}
                checked={formData.urgency === opt.value}
                onChange={handleChange}
                required
                className="sr-only"
              />
              <span
                className={`font-semibold text-sm ${
                  formData.urgency === opt.value ? 'text-blue-700' : 'text-gray-700'
                }`}
              >
                {opt.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
          {isBusiness ? 'Business phone' : 'Phone number'}{' '}
          <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="(555) 123-4567"
          className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-white text-gray-800 font-medium focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-gray-400"
        />
        <p className="text-xs text-gray-500 mt-1.5 ml-1">
          We call back during business hours (Mon–Fri 9AM–7PM ET, Sat 10AM–4PM ET).
        </p>
      </div>

      <button
        type="submit"
        disabled={sending}
        className="w-full py-4 px-8 bg-blue-600 text-white font-bold text-lg rounded-xl hover:bg-blue-700 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
      >
        {sending ? 'Sending…' : isBusiness ? 'Request business support' : 'Request a call back'}
      </button>

      <p className="text-center text-xs text-gray-400 mt-2">
        By submitting, you agree to our{' '}
        <a href="/privacy-policy" className="underline">
          privacy policy
        </a>
        . Independent service — not affiliated with any printer manufacturer.
      </p>
    </form>
  );
}
