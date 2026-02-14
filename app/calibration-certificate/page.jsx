import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Calibration Certificate Services | AN Global Services",

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
        <h1 className="relative z-10 text-white text-3xl md:text-4xl font-bold tracking-wide text-center px-4">
          CALIBRATION CERTIFICATE SERVICES
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

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col gap-6 pb-12">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              CALIBRATION CERTIFICATE IS MANDATORY FOR
            </h2>

            <div className="w-full h-0.5 bg-gray-200 relative mb-4">
              <span className="absolute left-0 top-0 h-0.5 w-120 bg-[#0072b1]"></span>
            </div>

            <p className="text-gray-600 text-[15px] leading-6 text-justify pb-4">
              Calibration certificates are essential compliance documents
              required across multiple quality management systems, regulatory
              frameworks, and industrial operations. They ensure measurement
              accuracy, audit readiness, and traceability to recognized
              standards.
            </p>

            <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
              <li>
                <strong>ISO 9001</strong> – Quality Management System (QMS)
              </li>
              <li>
                <strong>ISO 14001</strong> – Environmental Management System
                (EMS)
              </li>
              <li>
                <strong>ISO 45001</strong> – Occupational Health & Safety
                Management System (OH&S)
              </li>
              <li>
                <strong>ISO/IEC 17025</strong> – Testing & Calibration
                Laboratories
              </li>
              <li>Internal and External Audits</li>
              <li>Regulatory and statutory inspections</li>
              <li>Manufacturing quality control and process validation</li>
              <li>
                Supplier qualification and customer compliance requirements
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
            Calibration Certificate Process
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-100 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-6">
            The calibration certificate process follows a structured and
            documented methodology to ensure measurement accuracy, traceability,
            and compliance with ISO and regulatory requirements. Each step is
            designed to meet audit expectations and quality management system
            standards.
          </p>

          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg">
            <table className="w-full border-collapse text-[15px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Step
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Stage
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Description
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    1
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Instrument Identification
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Identification of the instrument including name, category,
                    make, model, serial number, measurement range, least count,
                    and usage criticality. This step helps determine the
                    appropriate calibration method and frequency.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    2
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Selection of Calibration Method
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Calibration planning based on compliance needs, including
                    on-site or laboratory calibration and accredited or
                    non-accredited calibration. For ISO audits and regulatory
                    compliance, NABL- accredited calibration is strongly
                    recommended.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    3
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Calibration Testing
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    The instrument is tested against master reference
                    instruments traceable to National Physical Laboratory (NPL),
                    NABL-approved standards, or international standards such as
                    ISO, ASTM, and OIML. All readings are recorded and evaluated
                    against permissible limits.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    4
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Issuance of Calibration Certificate
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    After successful calibration, a detailed calibration
                    certificate is issued containing instrument identification
                    details, calibration date and next due date, observed
                    results, measurement uncertainty, traceability statement,
                    environmental conditions, laboratory accreditation details,
                    and authorized signatory.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    5
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Record Maintenance & Recalibration
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Organizations must maintain calibration certificates as
                    quality records, monitor calibration due dates, and schedule
                    periodic recalibration at defined intervals (typically 6
                    months or 1 year). These records are mandatory during ISO
                    audits and inspections.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-5 bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-gray-600 text-[14px] leading-6">
              <strong>Compliance Note:</strong> Proper calibration planning,
              timely recalibration, and documented traceability are essential
              for maintaining compliance with ISO standards, regulatory
              inspections, and internal quality control systems.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12">
        <div>
          <h2 className="text-xl font-semibold uppercase text-gray-900">
            Documents Required for Calibration Certificate
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-145 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-6">
            To issue a valid calibration certificate, calibration laboratories
            require specific technical and organizational details related to the
            instrument and the applicant. The documentation requirements may
            vary depending on whether the calibration is standard or
            NABL-accredited.
          </p>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Basic Documents
            </h3>

            <ul className="list-disc pl-6 text-[15px] text-gray-500 space-y-2">
              <li>
                Instrument details including make, model, and serial number
              </li>
              <li>Measurement range and least count of the instrument</li>
              <li>Company name and registered business address</li>
              <li>Contact person name, phone number, and email address</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Additional Documents (For NABL / ISO/IEC 17025 Calibration)
            </h3>

            <ul className="list-disc pl-6 text-[15px] text-gray-500 space-y-2">
              <li>Previous calibration certificate, if available</li>
              <li>
                Purchase invoice or equipment procurement record, if required
              </li>
              <li>
                Quality manual, scope of calibration, or relevant quality
                documents (where applicable)
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Timeline for Calibration certificate
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-105 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-6">
            The turnaround time for calibration services depends on the type of
            calibration, instrument complexity, and service location. Below is a
            general timeline to help organizations plan calibration activities
            and maintain audit readiness.
          </p>

          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg">
            <table className="w-full border-collapse text-[15px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                    Service Type
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                    Estimated Time
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-900">
                    On-Site Calibration
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">
                    1 Working Day
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-900">
                    Laboratory Calibration
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">
                    2 – 7 Working Days
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-900">
                    Certificate Issuance
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">
                    Same Day – 2 Working Days
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-5 bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-gray-600 text-[14px] leading-6">
              <strong>Note:</strong> Actual timelines may vary depending on the
              type of instrument, quantity of equipment, calibration scope, and
              whether NABL-accredited calibration is required.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 pb-12 ">
        <div className="max-w-7xl mx-auto px-4 md:px-6 pb-12">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Types of Calibration Services
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-90 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            Calibration services can be performed using different approaches
            depending on the type of instrument, accuracy requirements, and
            compliance needs. Below are the commonly offered types of
            calibration services to support quality, audit, and regulatory
            requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                1. On-Site (In-House) Calibration
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                Calibration is performed directly at the customer’s premises,
                reducing equipment downtime and eliminating transportation
                risks. This method is ideal for large, fixed, or critical
                instruments that cannot be easily moved.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                2. Laboratory Calibration
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                Instruments are calibrated in a controlled laboratory
                environment using high-accuracy master instruments. Laboratory
                calibration offers higher precision and is suitable for
                sensitive or high-accuracy measurement devices.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                3. Traceable Calibration
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                Calibration results are traceable to recognized national or
                international reference standards, ensuring measurement
                consistency and reliability across different locations and
                applications.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                4. NABL / ISO/IEC 17025 Accredited Calibration (Recommended)
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                NABL-accredited calibration under ISO/IEC 17025 is the most
                preferred and audit-accepted form of calibration. It is
                mandatory for regulated industries and ISO-certified
                organizations, ensuring full compliance, traceability, and audit
                acceptance.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Benefits of Calibration Certificate
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-105 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-6">
            A calibration certificate is more than a compliance document—it is a
            critical quality assurance tool that ensures measurement accuracy,
            process reliability, and regulatory compliance. Regular calibration
            helps organizations maintain consistent product quality, avoid
            operational risks, and demonstrate technical competence during
            audits and inspections.
          </p>

          <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-3">
            <li>
              <strong className="text-gray-700">
                Ensures accurate and reliable measurements:
              </strong>{" "}
              Calibration verifies that measuring instruments provide precise
              results, reducing uncertainty and ensuring consistent performance
              across operations.
            </li>

            <li>
              <strong className="text-gray-700">
                Improves product quality and process efficiency:
              </strong>
              Accurate measurements help maintain process control, resulting in
              better-quality products and optimized manufacturing workflows.
            </li>

            <li>
              <strong className="text-gray-700">
                Reduces manufacturing errors and rework:
              </strong>{" "}
              Properly calibrated instruments minimize deviations, reducing
              scrap, rework, and material wastage.
            </li>

            <li>
              <strong className="text-gray-700">
                Meets ISO, NABL, and regulatory requirements:
              </strong>
              Calibration certificates are mandatory for ISO 9001, ISO 14001,
              ISO 45001, ISO/IEC 17025, and regulatory inspections.
            </li>

            <li>
              <strong className="text-gray-700">
                Enhances audit readiness and compliance confidence:
              </strong>
              Up-to-date calibration records demonstrate control over monitoring
              and measuring equipment during internal and external audits.
            </li>

            <li>
              <strong className="text-gray-700">
                Builds customer trust and business credibility:
              </strong>
              Certified calibration assures customers and stakeholders of
              product reliability and adherence to recognized quality standards.
            </li>

            <li>
              <strong className="text-gray-700">
                Prevents non-conformities and penalties:
              </strong>
              Regular calibration helps avoid audit non-conformities, legal
              issues, and penalties arising from inaccurate measurements or
              compliance gaps.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Help with Calibration Certification?
          </h2>

          <p className="text-gray-300 text-[15px] leading-6 max-w-3xl mx-auto mb-8">
            Get expert support from AN Global Services for calibration
            certification, NABL-accredited calibration, audit-ready
            documentation, and ISO compliance. Our team ensures accuracy,
            compliance, and minimal operational disruption.
          </p>

          <div className="flex justify-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-lg bg-[#0072b1] px-8 py-3 text-white text-[15px] font-semibold hover:bg-[#005a8c] transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 ">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            How AN Global Services Supports Calibration Certification
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-175 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-6">
            AN Global Services offers end-to-end calibration management
            solutions designed to ensure measurement accuracy, regulatory
            compliance, and minimal disruption to business operations. Our
            structured approach helps organizations meet ISO, NABL, and audit
            requirements with confidence.
          </p>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Our Key Advantages
            </h3>

            <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
              <li>
                Instrument evaluation and calibration planning based on usage
                criticality and compliance needs
              </li>
              <li>
                Strong tie-ups with NABL-accredited calibration laboratories
                across multiple disciplines
              </li>
              <li>
                Coordination of on-site calibration and pickup-based laboratory
                calibration services
              </li>
              <li>
                Complete audit-ready documentation support for ISO and
                regulatory inspections
              </li>
              <li>
                Reduced equipment downtime with cost-effective and scheduled
                calibration solutions
              </li>
              <li>
                Professional assistance during ISO audits, surveillance audits,
                and certification assessments
              </li>
            </ul>
          </div>

          <div className="mt-6 bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-gray-600 text-[14px] leading-6">
              <strong>Our Commitment:</strong> With deep compliance expertise
              and a client-focused approach, AN Global Services helps
              organizations maintain accurate measurements, achieve audit
              success, and meet regulatory expectations without operational
              stress.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
