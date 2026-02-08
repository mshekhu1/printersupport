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
  title: {
    default: "Remote Printer Support Services | Fast US Printer Help",
    template: "%s | ZamZam Print Support",
  },
  description:
    "Get professional remote printer support for Windows & Mac. Fix printer offline, not printing, driver issues, and Wi-Fi problems. Serving US customers with fast, affordable printer support.",
  keywords: [
    "printer support",
    "remote printer support",
    "printer repair",
    "printer troubleshooting",
    "printer not printing",
    "printer offline",
    "printer driver",
    "printer setup",
    "US printer support",
  ],
  alternates: {
    canonical: "https://www.zamzamprint.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.zamzamprint.com",
    siteName: "ZamZam Print Support",
    title: "Remote Printer Support Services | Fast US Printer Help",
    description: "Get professional remote printer support for Windows & Mac. Fix printer offline, not printing, driver issues, and Wi-Fi problems. Serving US customers with fast, affordable printer support.",
    images: [
      {
        url: "/side-view-employee-using-printer.jpg",
        width: 1200,
        height: 630,
        alt: "Professional remote printer support services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Remote Printer Support Services | Fast US Printer Help",
    description: "Get professional remote printer support for Windows & Mac. Expert help for all major printer brands.",
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

          {/* Explicit favicon and logo links for Google */}
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" type="image/jpeg" href="/logo.jpg" />
          <link rel="apple-touch-icon" href="/logo.jpg" />

          {/* Logo structured data for Google Knowledge Panel */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "ZamZam Print Support",
                "url": "https://www.zamzamprint.com",
                "logo": "https://www.zamzamprint.com/logo.jpg"
              })
            }}
          />

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
