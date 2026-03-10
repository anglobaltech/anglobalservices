import Image from "next/image";
import Link from "next/link";

export const revalidate = 86400

export const metadata = {
  title: "WPC Certification in India | AN Global Services",
  description:
    "Get WPC Certification in India with expert assistance. AN Global Services provides complete WPC ETA approval, RF testing, Saral Sanchar filing, and import clearance support for wireless and RF-enabled products.",
  keywords: [
    "WPC Certification",
    "WPC Certification in India",
    "WPC ETA Approval",
    "ETA Certification India",
    "WPC Approval for Wireless Products",
    "Wireless Product Certification India",
    "RF Certification India",
    "Bluetooth WPC Certification",
    "WiFi WPC ETA Approval",
    "Saral Sanchar WPC",
    "WPC Import Clearance",
    "AN Global Services"
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function ISIPage() {
  return (
    <main className="w-full">
      <section className="relative w-full h-65 md:h-68">
        <Image
          src="/service/isi/about.jpg"
          alt="WPC Certification Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-bold">
              WPC CERTIFICATE SERVICES
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/wpc-registration-services.png"
                alt=" WPC Certification Services"
                width={420}
                height={520}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div>
              <h2 className="text-xl font-bold uppercase text-gray-900">
                What is WPC Certification?
              </h2>
              <div className="w-full h-0.5 bg-gray-200 relative mb-3">
                <span className="absolute left-0 top-0 h-0.5 w-75 bg-[#0072b1]" />
              </div>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                WPC Certification is a mandatory legal approval required for all
                wireless and radio frequency (RF) based products operating in
                India. It is issued by the Wireless Planning & Coordination
                (WPC) Wing, which functions under the Ministry of
                Communications, Government of India. Any device that uses
                wireless technologies such as Wi-Fi, Bluetooth, RFID, or Radio
                signals must obtain WPC approval before it can be imported,
                sold, or used in the Indian market.
              </p>

              <p className="text-gray-600 text-[15px] leading-6 text-justify mt-3">
                WPC certification can be considered the Indian equivalent of
                international approvals such as FCC (USA) or CE (Europe).
                Without valid WPC approval, wireless products are not permitted
                for commercial distribution or operation in India.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold uppercase text-gray-900">
                Core Types of WPC Approvals
              </h2>
              <div className="w-full h-0.5 bg-gray-200 relative mb-3">
                <span className="absolute left-0 top-0 h-0.5 w-87 bg-[#0072b1]" />
              </div>

              <p className="text-gray-600 text-[15px] leading-6 text-justify pb-2">
                WPC issues different types of approvals depending on the nature
                of the wireless equipment and its intended use. The most
                commonly required approvals include:
              </p>

              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-1 pb-5">
                <li>
                  ETA (Equipment Type Approval): Mandatory for devices operating
                  in de-licensed frequency bands such as 2.4 GHz and 5 GHz
                  (Wi-Fi, Bluetooth).
                </li>
                <li>
                  Import License:Required to legally import wireless equipment
                  into India for commercial sale.
                </li>
                <li>
                  DPL / NDPL: Dealer or Non-Dealer Possession License for
                  entities selling, distributing, or using radio equipment.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12  space-y-10">
        <div>
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Benefits of WPC Certification in India
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-108 bg-[#0072b1]"></span>
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-4">
            WPC Certification is not only a regulatory requirement but also a
            key business enabler for companies dealing with wireless and
            RF-based products. Obtaining WPC approval ensures legal compliance,
            smooth market entry, and long-term business stability in India.
          </p>

          <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
            <li>
              <strong>Legal Authorization to Sell & Import:</strong> WPC
              certification allows wireless products to be legally imported,
              distributed, and sold in the Indian market without regulatory
              hurdles.
            </li>

            <li>
              <strong>Smooth Customs Clearance:</strong> Products with valid WPC
              ETA approval face fewer delays at Indian ports, ensuring faster
              customs clearance and reduced shipment holding costs.
            </li>

            <li>
              <strong>Market Access & Business Expansion:</strong> WPC approval
              enables manufacturers and importers to access organized retail,
              e-commerce platforms, and B2B procurement channels.
            </li>

            <li>
              <strong>Improved Brand Credibility:</strong> Certified products
              gain higher trust among customers, distributors, and regulators,
              reflecting compliance with Indian radio frequency norms.
            </li>

            <li>
              <strong>Risk Reduction & Compliance Assurance:</strong> WPC
              certification helps businesses avoid penalties, seizures, or bans
              related to unauthorized wireless operations.
            </li>

            <li>
              <strong>Support for Multiple Product Models:</strong> Once
              approved, similar product variants using the same RF module can be
              covered under the same ETA, reducing future compliance effort.
            </li>

            <li>
              <strong>Long-Term Regulatory Stability:</strong> With valid WPC
              approval, businesses can operate confidently without the risk of
              sudden regulatory action or product withdrawal.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
            How to Get WPC Certification in India
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-112 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-6">
            WPC (Wireless Planning & Coordination) Certification is mandatory
            for wireless and radio-enabled products imported, manufactured, or
            sold in India. The certification ensures that devices operating on
            radio frequencies comply with India’s spectrum regulations and do
            not cause interference with licensed communication networks. Most
            consumer wireless products operating in license-exempt bands are
            approved under the ETA (Equipment Type Approval) scheme.
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
                    Product & Frequency Assessment
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Identify whether the product uses license-exempt frequency
                    bands such as Wi-Fi, Bluetooth, Zigbee, or Sub-GHz ISM
                    bands. Only devices operating within permitted frequency
                    ranges are eligible for ETA approval.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    2
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    RF Testing
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Obtain a Radio Frequency (RF) Test Report from a
                    NABL-accredited laboratory in India or an ISO/IEC 17025
                    accredited laboratory abroad, confirming compliance with
                    Indian frequency and power limits.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    3
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Portal Registration
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Register on the Saral Sanchar online portal and create the
                    applicant profile using company credentials. All WPC ETA
                    applications are submitted digitally through this platform.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    4
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Appointment of Authorized Indian Representative
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Foreign manufacturers must appoint an Authorized Indian
                    Representative (AIR) who will act as the local compliance
                    contact with the WPC wing and Indian authorities.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    5
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Application Submission
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Upload the RF test report, technical datasheets,
                    authorization letters, and identity documents on the Saral
                    Sanchar portal and submit the ETA application for review.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    6
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Review & Grant of ETA
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    The WPC Wing verifies the submitted documents and RF
                    parameters. Upon successful verification, the ETA
                    certificate is issued, authorizing legal import and sale of
                    the product in India.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-5 bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-gray-600 text-[14px] leading-6">
              <strong>Compliance Note:</strong> WPC ETA certificates generally
              do not have an expiry date. The approval remains valid as long as
              the product’s hardware design, RF module, operating frequency, and
              power parameters remain unchanged. Any modification requires fresh
              approval.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-10">
        <div>
          <h2 className="text-xl font-semibold uppercase text-gray-900">
            Documents Required for WPC Certification
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-5">
            <span className="absolute left-0 top-0 h-0.5 w-125 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-5">
            WPC ETA certification requires only a few basic documents. These are
            the standard documents normally required for most wireless products.
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-600 text-[15px]">
            <li>
              <strong>RF Test Report</strong> from a NABL (India) or ISO 17025
              accredited laboratory.
            </li>
            <li>
              <strong>Product Datasheet</strong> showing model number and
              wireless frequency details.
            </li>
            <li>
              <strong>User Manual</strong> of the product.
            </li>
            <li>
              <strong>Authorization Letter</strong> from the manufacturer (if
              applicable).
            </li>
            <li>
              <strong>Company Registration Documents</strong> of the applicant.
            </li>
            <li>
              <strong>IEC Certificate</strong> for importing the product into
              India.
            </li>
            <li>
              <strong>ID & Address Proof</strong> of the authorized signatory or
              AIR.
            </li>
            <li>
              <strong>Product Images</strong> showing the product and model
              number.
            </li>
          </ul>

          {/* Note */}
          <div className="mt-5 bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-gray-600 text-[14px] leading-6">
              <strong>Note:</strong> The WPC ETA certificate remains valid as
              long as the product’s model, RF module, frequency band, and power
              specifications do not change.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 pb-14">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
            Timeline for WPC Certification
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-92 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            The WPC ETA certification process is relatively fast compared to
            other regulatory approvals in India. In most cases, the certificate
            is issued within <strong>7 to 15 working days</strong>, provided all
            documents and RF test reports are complete and accurate.
          </p>

          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg">
            <table className="w-full border-collapse text-[15px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Stage
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Typical Time
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    What Happens
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    RF Testing
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    3–7 Working Days
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Product is tested at an accredited laboratory to confirm
                    compliance with license-exempt frequency bands.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Application Filing
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    1–2 Working Days
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    ETA application is submitted on the Saral Sanchar portal
                    along with required documents.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    WPC Review
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    3–5 Working Days
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    WPC Wing reviews the RF report and technical details. Any
                    query, if raised, must be responded to promptly.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Grant of ETA Certificate
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    1–2 Working Days
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    After successful verification, the WPC ETA certificate is
                    issued and can be used for import and sales in India.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-gray-600 text-[14px] leading-6">
              <strong>Note:</strong> Timelines may vary if documents are
              incomplete, RF test reports are unclear, or additional
              clarification is requested by the WPC authority. Proper
              documentation helps ensure faster approval.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12 space-y-10">
        <div>
          <h2 className="text-xl uppercase font-semibold text-gray-900">
            Products under WPC Approval
          </h2>
          <div className="w-90 h-0.5 bg-[#0072b1] mb-3" />

          <p className="text-gray-600 text-[15px] leading-8 text-justify">
            Wireless Bluetooth watches, Bluetooth speakers, Bluetooth
            headphones, wireless music players, wireless water heaters, wireless
            home appliances, wireless car radios, Radio Frequency Identification
            (RFID) tags and readers, wireless medical products used for patient
            profiling, laptops, mobile phones, wireless mice and keyboards,
            remote entry keys, wireless remote controls, and all other radio
            frequency–based modules.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
            How AN Global Services Helps You Obtain WPC Certification
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-180 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-6">
            AN Global Services provides end-to-end assistance for obtaining WPC
            ETA certification in India. We simplify the entire process by
            handling technical evaluation, documentation, portal coordination,
            and follow-ups with the WPC Wing, ensuring fast and hassle-free
            approval.
          </p>

          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg">
            <table className="w-full border-collapse text-[15px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Stage
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    How AN Global Services Support You
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Product Evaluation
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    We review your product specifications to confirm eligibility
                    under license-exempt frequency bands and identify the
                    correct approval route.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    RF Testing Support
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Coordination with NABL or ISO 17025 accredited laboratories
                    for RF testing and verification of compliant test reports.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Documentation Assistance
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    End-to-end support in preparing and validating all required
                    documents, including authorization letters, datasheets, and
                    declarations.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Saral Sanchar Filing
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Complete handling of application filing on the Saral Sanchar
                    portal with accurate data entry and document uploads.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Query Handling
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Quick response and resolution of any technical or
                    documentation queries raised by the WPC authority.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Certificate Issuance
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Continuous follow-up with the WPC Wing until the ETA
                    certificate is issued and shared with you.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Benefit Note */}
          <div className="mt-6 bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-gray-600 text-[14px] leading-6">
              <strong>Why Choose AN Global Services?</strong> Our structured
              approach, regulatory expertise, and proactive follow-ups help
              reduce delays, avoid rejections, and ensure faster WPC ETA
              approval with minimal effort from your side.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
