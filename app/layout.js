import "./globals.css";

import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        <Footer />
      </body>
    </html>
  );
}
