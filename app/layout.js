import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";
import GlobalScrollRevealClient from "./components/GlobalScrollRevealClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
  verification: {
    google: "a1Vyc9eMx7EhUgghV22G_qtt7_YZAuo2_S8IZT2WlNo",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />

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

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
