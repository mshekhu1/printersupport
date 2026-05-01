'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function ContactFormClient() {
    const [formData, setFormData] = useState({
        printer_issue: '',
        printer_brand: '',
        urgency: '',
        phone: '',
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
            // Map the high-intent fields into the existing contact_inquiries schema
            const { error: dbError } = await supabase
                .from('contact_inquiries')
                .insert([
                    {
                        phone: formData.phone,
                        service: formData.printer_issue,
                        message: `Brand: ${formData.printer_brand} | Urgency: ${formData.urgency}`
                    },
                ]);

            if (dbError) {
                console.error('Supabase error:', dbError);
                // Fallback to mailto if DB fails
                const subject = encodeURIComponent(`Support Request: ${formData.printer_issue} — ${formData.printer_brand}`);
                const body = encodeURIComponent(`Printer Issue: ${formData.printer_issue}\nPrinter Brand: ${formData.printer_brand}\nUrgency: ${formData.urgency}\nPhone: ${formData.phone}`);
                window.location.href = `mailto:support@zamzamprint.com?subject=${subject}&body=${body}`;
                setSending(false);
                setSubmitted(true);
                return;
            }

            setSending(false);
            setSubmitted(true);
        } catch (err) {
            console.error('Submit error:', err);
            // Fallback
            window.location.href = `mailto:support@zamzamprint.com`;
            setSending(false);
            setSubmitted(true);
        }
    };

    const issueOptions = [
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

    const urgencyOptions = [
        { value: 'now', label: 'Right Now — ASAP!', badge: '🔴' },
        { value: 'today', label: 'Today', badge: '🟡' },
        { value: 'tomorrow', label: 'Tomorrow', badge: '🟢' },
        { value: 'this-week', label: 'This Week', badge: '🔵' },
    ];

    if (submitted) {
        return (
            <div className="text-center py-12 px-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Request Sent!</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    We've received your details. A technician will call you at{' '}
                    <strong className="text-gray-900">{formData.phone}</strong> shortly.
                </p>
                <p className="text-sm text-gray-500">
                    Can't wait? Call us directly at{' '}
                    <a href="tel:+18887594448" className="text-blue-600 font-bold hover:underline">
                        +1 888 759 4448
                    </a>
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                    {error}
                </div>
            )}

            {/* Printer Issue Dropdown */}
            <div>
                <label htmlFor="printer_issue" className="block text-sm font-bold text-gray-700 mb-2">
                    What's your printer issue? <span className="text-red-500">*</span>
                </label>
                <select
                    id="printer_issue"
                    name="printer_issue"
                    value={formData.printer_issue}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-white text-gray-800 font-medium focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all appearance-none cursor-pointer"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 12px center',
                        backgroundSize: '20px',
                    }}
                >
                    <option value="">— Select your issue —</option>
                    {issueOptions.map((issue) => (
                        <option key={issue} value={issue}>{issue}</option>
                    ))}
                </select>
            </div>

            {/* Printer Brand Dropdown */}
            <div>
                <label htmlFor="printer_brand" className="block text-sm font-bold text-gray-700 mb-2">
                    Printer Brand <span className="text-red-500">*</span>
                </label>
                <select
                    id="printer_brand"
                    name="printer_brand"
                    value={formData.printer_brand}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-white text-gray-800 font-medium focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all appearance-none cursor-pointer"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 12px center',
                        backgroundSize: '20px',
                    }}
                >
                    <option value="">— Select brand —</option>
                    {brandOptions.map((brand) => (
                        <option key={brand} value={brand}>{brand}</option>
                    ))}
                </select>
            </div>

            {/* Urgency - Visual Selector */}
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                    When do you need help? <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                    {urgencyOptions.map((opt) => (
                        <label
                            key={opt.value}
                            className={`relative flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${formData.urgency === opt.value
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
                            <span className="text-xl">{opt.badge}</span>
                            <span className={`font-semibold text-sm ${formData.urgency === opt.value ? 'text-blue-700' : 'text-gray-700'
                                }`}>
                                {opt.label}
                            </span>
                            {formData.urgency === opt.value && (
                                <svg className="w-5 h-5 text-blue-600 absolute top-2 right-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                </svg>
                            )}
                        </label>
                    ))}
                </div>
            </div>

            {/* Phone Number */}
            <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                    Your Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </div>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(555) 123-4567"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 bg-white text-gray-800 font-medium focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-gray-400"
                    />
                </div>
                <p className="text-xs text-gray-500 mt-1.5 ml-1">We'll call you back at this number — usually within 3 minutes.</p>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={sending}
                className="w-full py-4 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-xl shadow-lg shadow-blue-500/25 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
                {sending ? (
                    <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        <span>Sending...</span>
                    </>
                ) : (
                    <>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                        <span>Get a Call Back</span>
                    </>
                )}
            </button>

            <p className="text-center text-xs text-gray-400 mt-2">
                By submitting, you agree to our privacy policy. We never share your info.
            </p>
        </form>
    );
}
