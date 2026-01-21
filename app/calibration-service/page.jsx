import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Calibration Certificate Services | AN Global Services",
  description:
    "Calibration Certificate services with NABL / ISO 17025 traceability. Single-window support for audits, compliance & quality assurance.",
};

export default function CalibrationCertificatePage() {
  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <section
        className="relative h-70 md:h-70 flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url('/service/isi/about.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="relative z-10 text-white text-3xl md:text-4xl font-bold tracking-wide text-center px-4">
          CALIBRATION CERTIFICATE SERVICES
        </h1>
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          {/* Left Image */}
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/calibration-certificate.png"
                alt="Calibration Certificate Services"
                width={420}
                height={520}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-8 mt-5">
            {/* Heading */}
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                What is a Calibration Certificate?
              </h2>

              {/* Underline bar */}
              <div className="w-full h-0.5 bg-gray-200 relative mb-6">
                <span className="absolute left-0 top-0 h-0.5 w-78 bg-[#0072b1]"></span>
              </div>

              {/* Content (UNCHANGED) */}
              <p className="text-gray-600 text-[15px] leading-6 text-justify pb-5">
                A <strong>Calibration Certificate</strong> is an official
                document that confirms a measuring instrument has been tested,
                adjusted (if required), and found accurate against a traceable
                national or international standard.
              </p>

              <p className="text-gray-600 text-[15px] leading-6 pb-3">
                It is commonly required for:
              </p>

              <ul className="list-disc pl-6 text-[15px] text-gray-500 space-y-1">
                <li>ISO 9001, ISO 14001, ISO 45001</li>
                <li>ISO/IEC 17025</li>
                <li>Internal & External Audits</li>
                <li>Regulatory Compliance</li>
                <li>Quality Assurance & Manufacturing Control</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-linear-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-xl font-bold text-gray-900 mb-2">
              Calibration Certificate Process
            </h2>
            <div className="w-20 h-1 rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600">Step-by-Step Guide</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-t-4 border-[#0072b1]">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#0072b1] text-white rounded-full flex items-center justify-center font-bold mr-3">
                  1
                </div>
                <h3 className="font-bold text-lg text-gray-900">
                  Identify Instruments
                </h3>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                {[
                  "Vernier calipers",
                  "Micrometers",
                  "Pressure gauges",
                  "Thermometers",
                  "Weighing balances",
                  "Multimeters",
                  "Torque wrenches",
                  "Dial indicators, etc.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#0072b1] mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-t-4 border-[#0072b1]">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#0072b1] text-white rounded-full flex items-center justify-center font-bold mr-3">
                  2
                </div>
                <h3 className="font-bold text-lg text-gray-900">
                  Select Calibration Type
                </h3>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                {[
                  "In-house calibration (on-site)",
                  "Laboratory calibration",
                  "Traceable calibration",
                  "NABL / ISO 17025 accredited calibration (preferred)",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#0072b1] mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-t-4 border-[#0072b1]">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#0072b1] text-white rounded-full flex items-center justify-center font-bold mr-3">
                  3
                </div>
                <h3 className="font-bold text-lg text-gray-900">
                  Calibration Testing
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Instruments are tested against master instruments traceable to
                national (NPL, NABL) and international standards (ISO, ASTM).
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-t-4 border-[#0072b1]">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#0072b1] text-white rounded-full flex items-center justify-center font-bold mr-3">
                  4
                </div>
                <h3 className="font-bold text-lg text-gray-900">
                  Issue of Certificate
                </h3>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                {[
                  "Instrument details",
                  "Calibration date & due date",
                  "Measurement results",
                  "Uncertainty values",
                  "Traceability statement",
                  "Authorized signatory & lab accreditation",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#0072b1] mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-t-4 border-[#0072b1] md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#0072b1] text-white rounded-full flex items-center justify-center font-bold mr-3">
                  5
                </div>
                <h3 className="font-bold text-lg text-gray-900">
                  Record Maintenance
                </h3>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                {[
                  "Maintain calibration records",
                  "Periodic recalibration (6 months / 1 year)",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#0072b1] mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Documents Required
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-linear-to-br from-[#0072b1]/5 to-[#004e7a]/5 rounded-xl p-8 border border-[#0072b1]/20">
              <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-[#0072b1] rounded-full mr-3"></span>
                Basic Documents
              </h3>
              <ul className="space-y-3 text-gray-600 text-[15px]">
                {[
                  "Instrument details (model, make, serial no.)",
                  "Calibration range & least count",
                  "Company name & address",
                  "Contact person details",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#0072b1] mr-3 mt-1">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-linear-to-br from-[#0072b1]/5 to-[#004e7a]/5 rounded-xl p-8 border border-[#0072b1]/20">
              <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-[#0072b1] rounded-full mr-3"></span>
                Additional (NABL / ISO)
              </h3>
              <ul className="space-y-3 text-gray-600 text-[15px]">
                {[
                  "Quality manual or scope (if applicable)",
                  "Previous calibration certificate",
                  "Purchase invoice (if required)",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#0072b1] mr-3 mt-1">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="bg-linear-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-xl font-bold text-gray-900 mb-2">
              How AN Global Services Can Help You
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 text-[15px] gap-6">
            {[
              "Instrument assessment & calibration frequency planning",
              "Tie-ups with NABL accredited laboratories",
              "Pickup & on-site calibration coordination",
              "Audit-ready documentation & records",
              "Reduced downtime & cost optimization",
              "ISO audit & certification support",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition border-l-4 border-[#0072b1]"
              >
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#0072b1] text-white rounded-lg flex items-center justify-center font-bold mr-4 shrink-0">
                    ✓
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeframe Section */}
      <section className="bg-linear-to-r from-[#0072b1] to-[#004e7a] text-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-xl font-bold tracking-wide mb-3">
              Typical Timeframe
            </h2>
            <p className="text-white/90 text-md">
              Estimated turnaround time for calibration services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center shadow-2xl border border-white/20 hover:bg-white/15 transition transform hover:scale-105">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl">🏢</span>
              </div>
              <p className="text-sm uppercase tracking-widest text-white/80 mb-3">
                On-site Calibration
              </p>
              <p className="text-lg font-bold">1 Day</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center shadow-2xl border border-white/20 hover:bg-white/15 transition transform hover:scale-105">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl">🔬</span>
              </div>
              <p className="text-sm uppercase tracking-widest text-white/80 mb-3">
                Lab Calibration
              </p>
              <p className="text-lg font-bold">2–7 Days</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center shadow-2xl border border-white/20 hover:bg-white/15 transition transform hover:scale-105">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl">📜</span>
              </div>
              <p className="text-sm uppercase tracking-widest text-white/80 mb-3">
                Certificate Issue
              </p>
              <p className="text-lg font-bold">Same Day – 2 Days</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
