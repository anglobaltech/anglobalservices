import Image from "next/image";
import Script from "next/script";

export const revalidate = 86400

export const metadata = {
  title:
    "NABL Certification & Accreditation Services | ISO 17025 & ISO 15189 Consultants | AN Global Services",
  description:
    "AN Global Services provides expert NABL certification and accreditation services for testing, calibration, and medical laboratories. Get end-to-end consultancy for ISO/IEC 17025 & ISO 15189, including documentation, audit preparation, NABL certificate assistance, and compliance support across India.",
  keywords:
    "NABL certification services, NABL accreditation services, NABL certificate services, NABL certificate consultants, NABL certificate India, NABL certification consultants India, ISO 17025 consultancy, ISO 15189 accreditation, NABL laboratory accreditation, testing laboratory NABL certificate, calibration lab NABL certification, medical laboratory NABL certificate",
  alternates: {
    canonical: "https://www.anglobalservices.com/nabl-accreditation-services",
  },
  openGraph: {
  title: "NABL Certification & Accreditation Services | AN Global Services",
  description:
    "Expert NABL certification & accreditation consultancy for ISO/IEC 17025 & ISO 15189 laboratories across India.",
  url: "https://www.anglobalservices.com/nabl-accreditation-services",
  siteName: "AN Global Services",
  type: "website",
},

};

export default function NABLAccreditationPage() {
  return (
    <main className="w-full bg-white">
      <Script
        id="nabl-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "NABL Certification & Accreditation Services",
            description:
              "End-to-end NABL certification and accreditation consultancy for testing, calibration, and medical laboratories as per ISO/IEC 17025 and ISO 15189.",
            provider: {
              "@type": "Organization",
              name: "AN Global Services",
              url: "https://www.anglobalservices.com",
            },
            areaServed: {
              "@type": "Country",
              name: "India",
            },
            serviceType: "NABL Accreditation Consultancy",
            url: "https://www.anglobalservices.com/nabl-accreditation-services",
          }),
        }}
      />

      <section
        className="relative w-full h-55 md:h-70 flex items-center justify-center"
        style={{
          backgroundImage: "url('/service/isi/about.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <h1 className="relative z-10 text-white text-2xl md:text-4xl font-bold text-center uppercase px-4 leading-snug">
          NABL Certification & Accreditation Services for Laboratories
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 items-start">
          {/* Left Image + CTA */}
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/nabl/nabl-2.png"
                alt="NABL Accreditation Services"
                width={420}
                height={520}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            <a
              href="/company-profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-[#0072b1] hover:bg-[#005f94] text-white font-semibold py-3 rounded-md flex items-center justify-center gap-2 transition cursor-pointer">
                ⬇ COMPANY PROFILE
              </button>
            </a>
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-12">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-gray-900">INTRODUCTION</h2>
              <div className="w-full h-0.5 bg-gray-200 relative mb-3">
                <span className="absolute left-0 top-0 h-0.5 w-40 bg-[#0072b1]"></span>
              </div>
              <p className="text-gray-600 text-[15px] leading-7 text-justify">
                In simple terms, NABL accreditation is the gold standard for
                testing, calibration, and medical laboratories in India. It is a
                formal recognition that a laboratory is technically competent to
                produce accurate, reliable, and internationally acceptable test
                or calibration results. While the term “certification” is
                commonly used, NABL technically grants{" "}
                <strong>accreditation</strong>, which focuses on a laboratory’s
                technical capability rather than just its management processes.
              </p>

              <p className="text-gray-600 text-[15px] leading-7 text-justify pb-5">
                NABL stands for the{" "}
                <strong>
                  National Accreditation Board for Testing and Calibration
                  Laboratories
                </strong>
                . It is an autonomous body under the Quality Council of India
                (QCI) and operates with the objective of assessing laboratories
                against internationally recognized standards such as{" "}
                <strong>ISO/IEC 17025</strong> for testing and calibration
                laboratories and <strong>ISO 15189</strong> for medical
                laboratories. Unlike ISO 9001, which focuses on quality
                management systems, NABL accreditation evaluates technical
                competence, including equipment, trained personnel, validated
                methods, and result accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12">
        <div className="space-y-4">
          <p className="text-gray-600 text-[15px] leading-7 text-justify">
            NABL-accredited laboratories enjoy strong national and international
            recognition. NABL is a signatory to the{" "}
            <strong>ILAC Mutual Recognition Arrangement (MRA)</strong> and a
            partner of APLAC, enabling test reports issued by NABL-accredited
            laboratories to be accepted across multiple countries. This
            international recognition helps eliminate technical barriers to
            trade and enhances the credibility of laboratory results for
            regulatory, commercial, and legal purposes.
          </p>

          <p className="text-gray-600 text-[15px] leading-7 text-justify">
            NABL accreditation is mandatory or strongly recommended by several
            Indian regulatory authorities and government departments, including
            FSSAI, CDSCO, BIS, and other statutory bodies. It is applicable to a
            wide range of laboratories such as medical and clinical
            laboratories, product testing laboratories for food, chemicals,
            textiles, electronics, and water, as well as calibration
            laboratories handling instruments like thermometers, pressure
            gauges, weighing balances, and dimensional measuring equipment.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
            How to Get NABL Accreditation
          </h2>

          {/* Consistent Underline */}
          <div className="w-full h-0.5 bg-gray-200 relative  mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-95 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            Obtaining NABL accreditation is a structured and rigorous process
            that goes beyond simple documentation. It requires laboratories to
            implement and demonstrate an internationally accepted quality
            management system. When properly executed, NABL accreditation
            significantly enhances a laboratory’s technical credibility,
            regulatory acceptance, and global recognition.
          </p>

          {/* Phase 1 */}
          <div className="space-y-4 mb-8">
            <h3 className="font-semibold text-gray-900">
              Phase 1: Preparation (Internal Readiness)
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 text-[15px] leading-6">
              <li>
                Obtain and study the applicable standard such as ISO/IEC 17025
                for testing and calibration laboratories or ISO 15189 for
                medical laboratories.
              </li>
              <li>
                Develop mandatory documentation including the Quality Manual,
                Standard Operating Procedures (SOPs), and work instructions.
              </li>
              <li>
                Train technical and quality personnel to ensure competence in
                testing methods and understanding of the quality system.
              </li>
              <li>
                Participate in at least one Proficiency Testing (PT) or External
                Quality Assurance Scheme (EQAS) relevant to the scope.
              </li>
              <li>
                Conduct an internal audit and Management Review Meeting (MRM) to
                identify and close gaps prior to application.
              </li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div className="space-y-4 mb-8">
            <h3 className="font-semibold text-gray-900">
              Phase 2: Application Process
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 text-[15px] leading-6">
              <li>Create an account on the official NABL web portal.</li>
              <li>
                Submit the relevant NABL application form (NABL 151 / 152 / 153)
                along with the defined Scope of Accreditation.
              </li>
              <li>
                Upload required documents such as legal entity proof, Quality
                Manual, SOPs, and PT/EQAS participation records.
              </li>
              <li>
                Pay the applicable application fee based on laboratory size and
                scope.
              </li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div className="space-y-4 mb-8">
            <h3 className="font-semibold text-gray-900">
              Phase 3: Assessment Stages
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 text-[15px] leading-6">
              <li>
                <strong>Adequacy Audit:</strong> Review of submitted documents
                to verify compliance with ISO requirements.
              </li>
              <li>
                <strong>Pre-Assessment (Optional):</strong> A preliminary
                on-site audit to identify major non-conformities before final
                assessment.
              </li>
              <li>
                <strong>Final On-Site Assessment:</strong> NABL assessors
                evaluate technical competence, witness tests, verify equipment
                calibration, and review records.
              </li>
            </ul>
          </div>

          {/* Phase 4 */}
          <div className="space-y-4 mb-8">
            <h3 className="font-semibold text-gray-900">
              Phase 4: Grant of Accreditation
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 text-[15px] leading-6">
              <li>
                Closure of non-conformities (NCs) identified during assessment
                within the stipulated timeframe (typically 30–60 days).
              </li>
              <li>
                Review of compliance evidence by the NABL Accreditation
                Committee.
              </li>
              <li>
                Issuance of NABL Accreditation Certificate with QR code and
                defined scope, generally valid for two years.
              </li>
            </ul>
          </div>

          {/* Cost Table */}
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg mt-8">
            <table className="w-full border-collapse text-[15px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                    Cost Category
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                    Small Laboratory
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                    Medium / Large Laboratory
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="border border-gray-200 px-4 py-2">
                    Application Fee
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    ₹5,000 – ₹15,000
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    ₹25,000 – ₹50,000+
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">
                    Assessment Charges
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    ~₹15,000 per assessor per day
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    ~₹15,000 per assessor per day
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">
                    Annual Fee
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    ₹10,000 – ₹20,000
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    ₹30,000 – ₹1,00,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Note */}
          <div className="mt-6 bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-gray-600 text-[14px] leading-6">
              <strong>Important Note:</strong> Timelines and costs may vary
              depending on laboratory size, number of test parameters, assessor
              availability, and readiness level. Professional guidance from
              experienced consultants such as{" "}
              <strong>AN Global Services</strong> can significantly reduce
              delays and non-conformities.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
            Documents and Process Required for NABL Accreditation
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative  mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-40 md:w-175 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            To obtain NABL accreditation in 2026, laboratories must meet two
            critical requirements: establishment of a robust document management
            system and successful completion of the formal NABL accreditation
            process. These requirements ensure compliance with international
            standards such as ISO/IEC 17025 for testing and calibration
            laboratories or ISO 15189 for medical laboratories.
          </p>

          {/* Documents */}
          <div className="space-y-6">
            <h3 className="font-semibold text-gray-900">
              1. Mandatory Documents & Records
            </h3>

            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">
                A. Strategic & Quality Documents
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 text-[15px] leading-6">
                <li>
                  Legal identity documents including company registration
                  certificate, GST registration, and PAN.
                </li>
                <li>
                  Quality Manual (Level 1) defining the laboratory’s quality
                  policy and compliance with ISO clauses.
                </li>
                <li>
                  Standard Operating Procedures (SOPs) and work instructions
                  (Level 2 & 3) covering testing, calibration, sample handling,
                  and administrative processes.
                </li>
              </ul>
            </div>

            <div className="space-y-4 pb-4">
              <h4 className="font-medium text-gray-900">
                B. Technical Records (Evidence of Competence)
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 text-[15px] leading-6">
                <li>
                  Master equipment list detailing make, model, serial number,
                  and unique identification number.
                </li>
                <li>
                  Valid calibration certificates issued by NABL-accredited
                  calibration laboratories.
                </li>
                <li>
                  Staff competency records including qualifications, training
                  records, experience details, and authorization letters for
                  report signatories.
                </li>
                <li>
                  Proficiency Testing (PT) or EQAS participation reports
                  demonstrating acceptable performance.
                </li>
                <li>
                  Internal audit reports conducted within the last 12 months.
                </li>
                <li>
                  Management Review Meeting (MRM) minutes showing top management
                  involvement and review of laboratory performance.
                </li>
              </ul>
            </div>
          </div>

          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg ">
            <table className="w-full border-collapse text-[15px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                    Step
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                    Stage
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                    Description
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">
                <tr>
                  <td className="border border-gray-200 px-4 py-2">1</td>
                  <td className="border border-gray-200 px-4 py-2">
                    Registration
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    Create a user account on the NABL web portal to obtain login
                    credentials.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">2</td>
                  <td className="border border-gray-200 px-4 py-2">
                    Application Submission
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    Submit the relevant NABL application form with defined Scope
                    of Accreditation and upload all required documents.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-2">3</td>
                  <td className="border border-gray-200 px-4 py-2">
                    Adequacy Audit
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    Review of submitted documents by a NABL Lead Assessor to
                    identify gaps against ISO requirements.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">4</td>
                  <td className="border border-gray-200 px-4 py-2">
                    Pre-Assessment (Optional)
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    A preliminary assessment to evaluate readiness before the
                    final audit.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-2">5</td>
                  <td className="border border-gray-200 px-4 py-2">
                    Final Assessment
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    On-site or remote evaluation by technical assessors,
                    including witnessing of tests and verification of records.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">6</td>
                  <td className="border border-gray-200 px-4 py-2">
                    Closure of NCs
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    Submission of corrective actions and evidence to close
                    non-conformities within the stipulated timeframe.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-2">7</td>
                  <td className="border border-gray-200 px-4 py-2">
                    Grant of Accreditation
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    Final review by the Accreditation Committee and issuance of
                    NABL certificate with approved scope.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#0072b1] py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Get Expert Help for NABL Certification & Accreditation
          </h2>
          <p className="mb-6 text-[15px] max-w-3xl mx-auto">
            Avoid delays, reduce non-conformities, and achieve NABL
            accreditation faster with expert consultancy from AN Global
            Services.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-white text-[#0072b1] font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
          >
            Request Free Consultation
          </a>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase">
            NABL Certification – Frequently Asked Questions
          </h2>

          <div className="h-0.5 w-full bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-47 md:w-140 bg-[#0072b1]" />
          </div>

          <div className="space-y-6 text-gray-700 text-[15px] leading-7">
            <p>
              <strong>Is NABL certification mandatory?</strong>
              <br />
              NABL accreditation is mandatory or strongly recommended for
              laboratories regulated by authorities such as FSSAI, CDSCO, BIS,
              and other government agencies in India.
            </p>

            <p>
              <strong>
                What is the difference between NABL certification and
                accreditation?
              </strong>
              <br />
              Technically, NABL grants accreditation, not certification.
              However, the term “NABL certificate” is commonly used to refer to
              the accreditation certificate issued after successful assessment.
            </p>

            <p>
              <strong>How long does NABL accreditation take?</strong>
              <br />
              The NABL accreditation process typically takes 4 to 6 months
              depending on laboratory readiness, scope, and assessor
              availability.
            </p>

            <p>
              <strong>How long is the NABL certificate valid?</strong>
              <br />
              NABL accreditation is generally valid for two years, subject to
              surveillance and compliance requirements.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 space-y-10">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              The Following Are Some Of The Advantages Of NABL For The General
              Public:
            </h2>

            <div className="mt-2 h-0.5 w-full bg-gray-200 relative">
              <span className="absolute left-0 top-0 h-0.5 w-230 bg-[#0072b1]" />
            </div>

            <ul className="mt-6 space-y-2 text-gray-500 text-[15px] leading-7 list-disc pl-6">
              <li>
                With precise calibrated testing, authentic reports are
                guaranteed.
              </li>
              <li>
                Professionals doing tests have confidence in their abilities.
              </li>
              <li>Re-testing is no longer necessary, saving money and time.</li>
              <li>Satisfaction with the solutions that have been delivered.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              NABL Portal Information
            </h2>

            <div className="mt-2 h-0.5 w-full bg-gray-200 relative">
              <span className="absolute left-0 top-0 h-0.5 w-75 bg-[#0072b1]" />
            </div>

            <p className="mt-6 text-gray-500 text-[15px] leading-7 text-justify">
              As technology changes rapidly and innovative digital platforms
              emerge, NABL is building an online portal to provide end-to-end
              services to its users. This portal enables secure web access to
              technologies that help users obtain a one-stop solution for the
              entire certification program, including web application submission
              and payment of all assessment fees.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              The NABL&apos;s Objective To Establishment
            </h2>

            <div className="mt-2 h-0.5 w-full bg-gray-200 relative">
              <span className="absolute left-0 top-0 h-0.5 w-120 bg-[#0072b1]" />
            </div>

            <p className="mt-6 text-gray-500 text-[15px] leading-7 text-justify">
              The primary objective of NABL-ISO 17025 is to provide third-party
              analysis of testing and certification facilities to ensure high
              quality and technical competence. This allows governments and
              organizations to simplify and manage a uniform quality
              environment. NABL accredits laboratories that comply with ISO
              17025 and ISO 15189 standards in the primary areas of science and
              engineering.
            </p>

            <p className="mt-4 text-gray-500 text-[15px] leading-7 text-justify">
              Mechanical, chemical, electronics, electronic parts, biochemical,
              liquids, non-destructive, radiographic, thermal, investigative,
              and electro-technical disciplines are among the many fields where
              NABL-ISO 17025 accreditation is applicable. NABL also provides
              certification for quality assurance services and reference
              material manufacturers.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              The Advantages Of NABL-ISO 17025 Certification
            </h2>

            <div className="mt-2 h-0.5 w-full bg-gray-200 relative">
              <span className="absolute left-0 top-0 h-0.5 w-150 bg-[#0072b1]" />
            </div>

            <p className="mt-6 text-gray-500 text-[15px] leading-7 text-justify">
              NABL-ISO 17025 certification offers both internal and external
              benefits. Most of the practical advantages are reflected in daily
              laboratory operations, such as improved testing proficiency,
              streamlined organization, fewer errors or malfunctions, and more
              reliable results. Over time, NABL-ISO 17025 certification can also
              provide financial benefits and enhance an organization&apos;s
              reputation for accuracy and precision.
            </p>
          </div>
        </div>
      </section> */}
    </main>
  );
}
