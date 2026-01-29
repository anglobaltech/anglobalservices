import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "Calibration Certificate Services in India | AN Global Services",

  description:
    "AN Global Services provides professional Calibration Certificate services in India with NABL and ISO/IEC 17025 traceability. We support on-site and laboratory calibration, audit-ready documentation, ISO compliance, regulatory inspections, and manufacturing quality assurance for all types of measuring instruments.",

  keywords: [
    "calibration certificate",
    "calibration services India",
    "NABL calibration",
    "ISO 17025 calibration",
    "instrument calibration services",
    "calibration certificate for ISO audit",
    "on-site calibration services",
    "laboratory calibration India",
    "traceable calibration certificate",
    "calibration for manufacturing",
    "calibration for ISO 9001",
    "calibration for ISO 14001",
    "calibration for ISO 45001",
    "calibration audit support",
    "AN Global Services calibration",
  ],

  alternates: {
    canonical: "https://www.anglobalservices.com/calibration-certificate",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function CalibrationCertificatePage() {
  return (
    <main className="w-full bg-white">
      <section
        className="relative h-70 md:h-70 flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url('/service/isi/about.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="relative z-10 text-white text-3xl md:text-4xl font-bold uppercase tracking-wide text-center px-4">
         BIS Certification For Furniture & Plywood Products
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/calibration-certificate-services.png"
                alt="Calibration Certificate Services"
                width={420}
                height={520}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                WHAT IS A CALIBRATION CERTIFICATE ?
              </h2>

              <div className="w-full h-0.5 bg-gray-200 relative mb-4">
                <span className="absolute left-0 top-0 h-0.5 w-100 bg-[#0072b1]"></span>
              </div>

              <p className="text-gray-600 text-[15px] leading-6 text-justify pb-5">
                A <strong>Calibration Certificate</strong> is an official,
                traceable document issued by a competent calibration laboratory
                confirming that a specific measuring instrument has been
                calibrated in accordance with defined national or international
                standards. The certificate provides documented assurance that
                the instrument produces accurate and reliable measurement
                results.
              </p>

              <p className="text-gray-600 text-[15px] leading-6 text-justify pb-4">
                The calibration certificate serves as verifiable evidence that
                the instrument was tested under controlled conditions, meets
                specified accuracy requirements, and maintains traceability to
                recognized standards such as NABL, ISO, or international
                metrology references. It is a critical document for quality
                management, compliance, and audit readiness.
              </p>

              <p className="text-gray-600 text-[15px] leading-6 pb-3">
                A calibration certificate typically confirms that the
                instrument:
              </p>

              <ul className="list-disc pl-6 text-[15px] text-gray-500 space-y-1 mb-4">
                <li>
                  Was calibrated under controlled environmental conditions
                </li>
                <li>Meets defined accuracy and tolerance limits</li>
                <li>
                  Is traceable to national or international measurement
                  standards
                </li>
                <li>Is suitable for its intended measurement application</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
     
    </main>
  );
}
