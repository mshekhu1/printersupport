import Image from 'next/image';
import Link from 'next/link';
import {
    Phone, ArrowRight, Clock, Shield, Users, Monitor,
    Headset, Globe, CheckCircle2, Zap, Heart, MapPin
} from 'lucide-react';

/* ───────────────── Metadata ───────────────── */

export const metadata = {
    title: 'About Us — Meet Our Remote Printer Support Team',
    description:
        'Learn about the ZamZam Print Support team. We are a remote IT support team helping US small businesses and home users fix printer problems since 2024. Available 9AM–7PM Eastern Time.',
    alternates: { canonical: 'https://www.zamzamprint.com/about' },
    openGraph: {
        title: 'About Us — Meet Our Remote Printer Support Team',
        description:
            'We are a remote IT support team helping US small businesses and home users fix printer problems since 2024.',
        type: 'website',
        locale: 'en_US',
        url: 'https://www.zamzamprint.com/about',
        siteName: 'ZamZam Print Support',
        images: [
            {
                url: '/side-view-employee-using-printer.jpg',
                width: 1200,
                height: 630,
                alt: 'ZamZam Print Support Team',
            },
        ],
    },
};

/* ───────────────── Team Data ───────────────── */

const teamMembers = [
    {
        name: 'Michael Carter',
        role: 'Lead Support Technician',
        image: '/team-michael.png',
        bio: 'Specializes in HP, Canon, and Epson printer troubleshooting with 8+ years of IT experience.',
    },
];

const values = [
    {
        icon: Heart,
        title: 'Customer First',
        description: 'Every interaction is driven by empathy. We treat your problem like our own.',
    },
    {
        icon: Shield,
        title: 'Trust & Transparency',
        description: "No hidden fees, no upsells. You know exactly what you're paying for before we start.",
    },
    {
        icon: Zap,
        title: 'Speed Matters',
        description: "We know a broken printer stalls your day. That's why most issues are resolved same-day.",
    },
    {
        icon: Globe,
        title: 'Remote-First',
        description: 'Built for the modern world — fast, secure remote sessions so you never have to wait for a house call.',
    },
];

/* ───────────────── Page ───────────────── */

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .float-animation { animation: float 6s ease-in-out infinite; }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #2563eb 0%, #818cf8 50%, #2563eb 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
      `}} />

            {/* ───────── HERO ───────── */}
            <section className="relative pt-12 sm:pt-20 lg:pt-32 pb-12 sm:pb-20 lg:pb-24 overflow-hidden bg-white">
                {/* Background gradients aligned with homepage light mode */}
                <div className="absolute top-0 inset-x-0 h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.12),rgba(255,255,255,0))] -z-10" />

                {/* Decorative blobs */}
                <div className="absolute top-20 left-10 w-40 sm:w-72 h-40 sm:h-72 bg-blue-200/40 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-10 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-200/40 rounded-full blur-3xl -z-10" />

                <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mt-4 sm:mt-0">
                        <div className="inline-flex items-center gap-2 bg-blue-50/80 backdrop-blur-sm px-4 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-blue-700 text-[11px] sm:text-sm font-bold sm:font-medium mb-6 sm:mb-8 border border-blue-200 shadow-sm">
                            <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            <span className="uppercase sm:normal-case tracking-wide sm:tracking-normal">Meet the Team Behind ZamZam Print</span>
                        </div>

                        <h1 className="text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 sm:mb-8 tracking-tight">
                            Real People,{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Real Support</span>
                        </h1>

                        <p className="text-base sm:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium px-2 sm:px-0">
                            We're a dedicated remote IT support team helping US small businesses and home users
                            keep their printers running smoothly — no jargon, no runaround, just solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* ───────── OUR STORY ───────── */}
            <section className="py-16 sm:py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-5 sm:px-6">
                    <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
                        {/* Text side */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-blue-50 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-blue-600 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-blue-100">
                                <Headset className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                <span className="uppercase sm:normal-case tracking-wide">Our Story</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5 sm:mb-8 leading-tight tracking-tight">
                                Fixing Printers,{' '}
                                <span className="text-blue-600">One Call at a Time</span>
                            </h2>

                            <div className="space-y-4 sm:space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                                <p>
                                    We started ZamZam Print Support in <strong className="text-slate-900">2024</strong> with a simple
                                    idea: printer problems shouldn't ruin your day. Too many people were paying
                                    overpriced technician visits for issues that could be fixed in 15 minutes
                                    over a secure remote session.
                                </p>
                                <p className="hidden sm:block">
                                    Today, we're a growing remote IT support team serving small businesses,
                                    home offices, and individuals across the <strong className="text-slate-900">United States</strong>.
                                    Whether it's an HP that won't connect to Wi-Fi or a Canon showing
                                    mysterious error codes, we've seen it — and fixed it.
                                </p>
                                <p>
                                    Our approach is simple: pick up the phone, connect securely, and solve
                                    the problem fast. No scheduling hassles, no waiting for a technician. Just real, human support.
                                </p>
                            </div>

                            {/* Working Hours Card */}
                            <div className="mt-8 sm:mt-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 sm:p-6 border border-blue-100/50">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-0.5 sm:mb-1">Working Hours</h3>
                                        <p className="text-blue-700 font-bold text-sm sm:text-lg">
                                            Available 9:00 AM – 7:00 PM EST
                                        </p>
                                        <p className="text-slate-500 text-xs sm:text-sm mt-1 sm:mt-1 font-medium">Mon-Sat • Same-day support available</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats side */}
                        <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-0">
                            {[
                                { number: '500+', label: 'Printers Fixed', icon: Monitor },
                                { number: 'Same-Day', label: 'Support Available', icon: Zap },
                                { number: '100%', label: 'Secure Sessions', icon: Shield },
                                { number: 'US-Based', label: 'Support Team', icon: MapPin },
                            ].map((stat, idx) => {
                                const Icon = stat.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="group bg-white p-5 sm:p-8 rounded-2xl border border-slate-100 shadow-md hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 text-center"
                                    >
                                        <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-[10px] sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                                            <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-blue-600 group-hover:text-white transition-colors" />
                                        </div>
                                        <div className="text-xl sm:text-3xl font-black text-slate-900 mb-0.5 sm:mb-1">{stat.number}</div>
                                        <div className="text-xs sm:text-sm text-slate-500 font-semibold">{stat.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ───────── MEET THE TEAM ───────── */}
            <section className="py-16 sm:py-20 lg:py-28 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-5 sm:px-6">
                    <div className="text-center mb-10 sm:mb-16">
                        <div className="inline-flex items-center gap-2 bg-blue-50 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-blue-600 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-blue-100">
                            <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            <span className="uppercase sm:normal-case tracking-wide">Our Team</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                            Meet the <span className="text-blue-600">Experts</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                            Real people, not bots. Our skilled technicians are ready to help you get back to printing.
                        </p>
                    </div>

                    <div className="flex justify-center px-4 sm:px-0">
                        {teamMembers.map((member, idx) => (
                            <div
                                key={idx}
                                className="group max-w-sm w-full"
                            >
                                <div className="bg-white rounded-[1.5rem] sm:rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                    {/* Photo */}
                                    <div className="relative h-72 sm:h-80 overflow-hidden">
                                        <Image
                                            src={member.image}
                                            alt={`${member.name} - ${member.role}`}
                                            fill
                                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-0.5 sm:mb-0">{member.name}</h3>
                                            <p className="text-blue-300 font-bold text-xs sm:text-sm">{member.role}</p>
                                        </div>
                                    </div>

                                    {/* Bio */}
                                    <div className="p-5 sm:p-6">
                                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-medium">{member.bio}</p>
                                        <div className="mt-4 flex items-center gap-2 text-emerald-600 text-xs sm:text-sm font-bold">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                            <span>Available for Support</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ───────── OUR VALUES ───────── */}
            <section className="py-16 sm:py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-5 sm:px-6">
                    <div className="text-center mb-10 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 sm:mb-4 tracking-tight">
                            What We <span className="text-blue-600">Stand For</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                            The principles that guide every support session.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                        {values.map((value, idx) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={idx}
                                    className="group bg-slate-50 sm:bg-gradient-to-b from-white to-slate-50/50 p-6 sm:p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 sm:hover:-translate-y-1"
                                >
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300 shadow-sm">
                                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">{value.title}</h3>
                                    <p className="text-slate-500 leading-relaxed text-sm font-medium">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ───────── CTA ───────── */}
            <section className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]" />
                <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-blue-50 text-[11px] sm:text-sm font-bold mb-6 sm:mb-8 border border-white/20 shadow-sm">
                        <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse text-amber-300" />
                        <span className="uppercase tracking-widest text-[#fff]">Talk to a Real Person</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-8 text-white tracking-tight leading-[1.05]">
                        Need Help With <br />
                        <span className="text-blue-200">Your Printer?</span>
                    </h2>
                    <p className="text-base sm:text-xl text-blue-100 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto font-medium px-2 sm:px-0">
                        Our team is just a phone call away. No scripts, no hold music — just real technicians ready to fix your printer.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                        <Link
                            href="tel:+18887594448"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 sm:gap-4 px-8 sm:px-10 py-4 sm:py-6 bg-white text-blue-700 font-black rounded-2xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.2)] hover:bg-slate-50 transition-all sm:hover:scale-105"
                        >
                            <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                            <span className="text-xl sm:text-2xl">+1 888 759 4448</span>
                        </Link>
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 sm:gap-4 px-8 sm:px-10 py-4 sm:py-6 bg-blue-700/50 backdrop-blur-md text-white font-bold rounded-2xl border border-blue-400/50 hover:bg-blue-800/50 transition-all shadow-sm"
                        >
                            <span>Contact Us Online</span>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
