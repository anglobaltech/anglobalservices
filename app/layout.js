import "./globals.css";

import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import LeadPopup from "@/components/LeadPopup";
export const revalidate = 86400

export const metadata = {
  title:
    "BIS Certification Consultants | ISI Mark, FMCS, CRS & Calibration",
  description:
    "AN Global Services offers BIS (ISI Mark) certification, CRS registration for electronics, FMCS certification, NABL certification, WPC approval, EPR registration, GEM registration, and calibration services with complete compliance support across India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <TopBar />
        <div className="sticky top-0 z-50 bg-white">
          <Header />
        </div>
        <Navbar />
        <main>{children}</main>
          <LeadPopup />
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}
