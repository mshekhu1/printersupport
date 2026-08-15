import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";
import GlobalScrollRevealClient from "./components/GlobalScrollRevealClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.zamzamprint.com"),
  // No forced "%s | Brand" template — page titles already include brand for CTR.
  title: {
    default: "Remote Printer Support USA | Fast Remote Help",
  },
  description:
    "Remote printer support for HP, Canon, Brother & Epson. Fix offline, not printing, and drivers over a secure US session — usually in about 15 minutes. Call +1 888 759 4448.",
  keywords: [
    "remote printer support",
    "printer support USA",
    "printer offline fix",
    "printer not printing",
    "HP printer support",
    "Canon printer support",
    "printer driver installation",
    "wireless printer setup",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.zamzamprint.com",
    siteName: "ZamZam Print Support",
    title: "Remote Printer Support USA | Fast Remote Help",
    description:
      "Fix printer offline and not printing remotely. US techs for HP, Canon, Brother, Epson. No home visit.",
    images: [
      {
        url: "/side-view-employee-using-printer.jpg",
        width: 1200,
        height: 630,
        alt: "ZamZam remote printer support",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Remote Printer Support USA | Fast Remote Help",
    description: "Remote US printer help for offline, drivers, and Wi‑Fi. Call +1 888 759 4448.",
    images: ["/side-view-employee-using-printer.jpg"],
  },
  verification: {
    google: "a1Vyc9eMx7EhUgghV22G_qtt7_YZAuo2_S8IZT2WlNo",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        {/* Explicit favicon and logo links for Google and devices */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/jpeg" href="/logo.jpg" sizes="120x120" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
        <link rel="image_src" href="https://www.zamzamprint.com/logo.jpg" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="me" href="https://www.facebook.com/profile.php?id=61588289645189&sfnsn=wiwspwa&mibextid=RUbZ1f" />
        <link rel="me" href="https://youtube.com/@zamzam_print" />
        <link rel="me" href="https://www.instagram.com/zamzamprint_support" />

        {/* Sitewide Organization + WebSite schema (homepage adds LocalBusiness/FAQ) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ZamZam Print Support",
              "url": "https://www.zamzamprint.com",
              "logo": "https://www.zamzamprint.com/logo.jpg",
              "telephone": "+18887594448",
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61588289645189",
                "https://youtube.com/@zamzam_print",
                "https://www.instagram.com/zamzamprint_support"
              ],
              "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": "+18887594448",
                "contactType": "customer service",
                "areaServed": "US",
                "availableLanguage": "English"
              }],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2783 Market St #599",
                "addressLocality": "San Francisco",
                "addressRegion": "CA",
                "postalCode": "94114",
                "addressCountry": "US"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "ZamZam Print Support",
              "url": "https://www.zamzamprint.com",
              "description": "Remote printer support for the United States — HP, Canon, Brother, Epson.",
              "publisher": {
                "@type": "Organization",
                "name": "ZamZam Print Support",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.zamzamprint.com/logo.jpg"
                }
              },
              "potentialAction": {
                "@type": "CommunicateAction",
                "name": "Call for remote printer support",
                "target": "tel:+18887594448"
              }
            })
          }}
        />

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MSNCV28Q');
            `,
          }}
        />
      </head>

      <body className={`${geistSans.variable} antialiased`}>
        {/* GTM NoScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MSNCV28Q"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />
        <GlobalScrollRevealClient />
        {children}
        <Footer />
      </body>
    </html>
  );
}
