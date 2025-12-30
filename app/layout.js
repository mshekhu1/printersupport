import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";
import GlobalScrollRevealClient from './components/GlobalScrollRevealClient'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://www.zamzamprint.com'),
  title: {
    default: 'Remote Printer Support Services | Fast US Printer Help',
    template: '%s | ZamZam Print Support'
  },
  description: 'Get professional remote printer support for Windows & Mac. Fix printer offline, not printing, driver issues, and Wi-Fi problems. Serving US customers with fast, affordable printer support.',
  keywords: ['printer support', 'remote printer support', 'printer repair', 'printer troubleshooting', 'printer not printing', 'printer offline', 'printer driver', 'printer setup', 'US printer support'],
  authors: [{ name: 'ZamZam Print Support' }],
  creator: 'ZamZam Print Support',
  publisher: 'ZamZam Print Support',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.zamzamprint.com',
    siteName: 'ZamZam Print Support',
    title: 'Remote Printer Support Services | Fast US Printer Help',
    description: 'Professional remote printer support for Windows & Mac. Fix printer issues quickly without leaving your home or office.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remote Printer Support Services | Fast US Printer Help',
    description: 'Professional remote printer support for Windows & Mac. Fix printer issues quickly.',
  },
  alternates: {
    canonical: 'https://www.zamzamprint.com',
  },
  verification: {
    google: 'a1Vyc9eMx7EhUgghV22G_qtt7_YZAuo2_S8IZT2WlNo',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="a1Vyc9eMx7EhUgghV22G_qtt7_YZAuo2_S8IZT2WlNo" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <GlobalScrollRevealClient />
        {children}
        <Footer/>
         {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W0VVPEVWXS"
          strategy="afterInteractive"
        />

        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W0VVPEVWXS');
          `}
        </Script>
      </body>
    </html>
  );
}
