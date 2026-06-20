import "./globals.css";

import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import LeadPopup from "@/components/LeadPopup";
import Script from "next/script";
import Analytics from "@/components/Analytics";
import { Suspense } from "react";

export const revalidate = 86400;

export const metadata = {
  metadataBase: new URL("https://www.anglobalservices.com"),

  title: {
    default:
      "BIS Certification Consultants | ISI Mark, FMCS, CRS & Calibration",
    template: "%s | AN Global Services",
  },

  description:
    "AN Global Services offers BIS (ISI Mark) certification, CRS registration for electronics, FMCS certification, NABL certification, WPC approval, EPR registration, GEM registration, and calibration services with complete compliance support across India.",

  applicationName: "AN Global Services",

  alternates: {
    canonical: "https://www.anglobalservices.com",
  },

  openGraph: {
    title: "BIS Certification Consultants | ISI Mark, FMCS, CRS & Calibration",
    description:
      "AN Global Services offers BIS (ISI Mark) certification, CRS registration for electronics, FMCS certification, NABL certification, WPC approval, EPR registration, GEM registration, and calibration services.",
    url: "https://www.anglobalservices.com",
    siteName: "AN Global Services",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "BIS Certification Consultants | ISI Mark, FMCS, CRS & Calibration",
    description:
      "AN Global Services offers BIS, CRS, FMCS, NABL, WPC, EPR and calibration services across India.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag (GA4 + Ads) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
    `}
        </Script>

        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AN Global Services",
            url: "https://www.anglobalservices.com",
            alternateName: "AN Global Services",
          })}
        </Script>

        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "AN Global Services",
            alternateName: "AN Global Services",
            url: "https://www.anglobalservices.com",
          })}
        </Script>
      </head>
      <body className="antialiased">
        <div className="layout-item">
          <TopBar />
        </div>

        <div className="layout-item sticky top-0 z-50 bg-white">
          <Header />
        </div>

        <div className="layout-item">
          <Navbar />
        </div>

        <main>{children}</main>

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        <div className="layout-item">
          <LeadPopup />
        </div>

        <FloatingContact />

        <div className="layout-item">
          <Footer />
        </div>
      </body>
    </html>
  );
}
