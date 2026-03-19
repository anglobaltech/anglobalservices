import Image from "next/image";
import Link from "next/link";

export const revalidate = 86400;

export const metadata = {
  title:
    "BIS Certification for Aluminium Products under QCO 2026 | AN Global Services",
  description:
    "Aluminium and Aluminium Alloy Products (Quality Control) Order, 2026 mandates BIS certification for aluminium products in India.",
};

export default function AluminiumQCONotificationPage() {
  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 py-10">
        <div className="mx-auto space-y-10">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
            {/* HEADER */}
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              MINISTRY OF COMMERCE AND INDUSTRY
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Department for Promotion of Industry and Internal Trade (DPIIT)
            </p>

            <h3 className="mt-6 font-semibold text-gray-800">
              Notification – New Delhi, 11th March 2026
            </h3>

            {/* INTRO */}
            <p className="mt-4 text-gray-700 leading-relaxed text-[15px]">
              The Government of India has introduced the Aluminium and Aluminium
              Alloy Products (Quality Control) Order, 2026 under Section 16 of
              the Bureau of Indian Standards Act, 2016. This Order makes BIS
              certification mandatory for specified aluminium and aluminium
              alloy products to ensure quality, safety, and standardisation
              across the industry.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed text-[15px]">
              Effective from 13 March 2026, the Order replaces the earlier 2025
              regulation and requires all notified products to conform to
              relevant Indian Standards and bear the BIS Standard Mark under a
              valid license.
            </p>

            {/* OBJECTIVE */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Objective of the Order
              </h3>

              <p className="text-gray-700 text-[15px] leading-relaxed">
                The primary objective of QCO 2026 is to eliminate substandard
                aluminium products from the market and establish a uniform
                quality framework. It also promotes fair trade practices and
                aligns domestic manufacturing with globally accepted standards.
              </p>
            </div>

            {/* PRODUCTS */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Products Covered under QCO 2026
              </h3>

              <ul className="list-disc ml-5 text-gray-700 text-sm space-y-2">
                <li>Aluminium rods, bars, and sections</li>
                <li>Aluminium sheets, plates, and strips</li>
                <li>Wires and rivet stock</li>
                <li>Extrusions and forgings</li>
                <li>Aluminium tubes for irrigation</li>
                <li>EC grade aluminium rods</li>
                <li>Aluminium composite panels</li>
                <li>Pharmaceutical packaging foils</li>
                <li>Corrugated aluminium sheets</li>
              </ul>
            </div>

            <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-800 mb-2">
                Implementation Timeline
              </h3>

              <p className="text-sm text-gray-700 leading-relaxed">
                As per the official schedule of the Aluminium and Aluminium
                Alloy Products (Quality Control) Order, 2026, the specified
                general engineering products must comply with BIS certification
                requirements by 1 December 2026. Implementation timelines for
                other product categories may vary, and stakeholders are advised
                to refer to the official notification for category-specific
                compliance requirements.
              </p>
            </div>

            {/* PENALTIES */}
            <div className="mt-8 bg-blue-50 border-l-4 border-[#0b5ed7] p-5 rounded-md text-sm text-gray-700">
              <p className="font-semibold mb-2">Penalties for Non-Compliance</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Monetary penalties under BIS Act</li>
                <li>Legal action against defaulters</li>
                <li>Restriction on sale of non-compliant products</li>
              </ul>
            </div>

            {/* CONCLUSION */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Conclusion
              </h3>

              <p className="text-gray-700 text-[15px] leading-relaxed">
                The Aluminium QCO 2026 represents a significant regulatory step
                towards improving product quality and ensuring consumer safety.
                By mandating BIS certification, the government aims to
                strengthen India’s manufacturing ecosystem and enhance global
                competitiveness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
