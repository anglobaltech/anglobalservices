import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "ISO Certification Services in India | ISO 9001, 14001, 45001 | AN Global Services",
  description:
    "Get ISO Certification services in India including ISO 9001, ISO 14001, ISO 45001, ISO 27001 & more. Fast, affordable & trusted ISO registration with AN Global Services.",
  keywords: [
    "ISO certification",
    "ISO certification services",
    "ISO registration",
    "ISO certification in India",
    "ISO 9001 certification",
    "ISO 14001 certification",
    "ISO 45001 certification",
    "ISO 27001 certification",
    "ISO consultant",
    "ISO certification for MSME",
    "ISO certification for startups",
    "ISO certification process",
    "ISO certification documents",
    "ISO certification cost",
    "ISO certificate online",
    "ISO compliance services",
    "quality management system ISO",
    "ISO certification agency India"
  ],
  alternates: {
    canonical: "https://www.anglobalservices.com/iso-certification-services"
  },
  robots: {
    index: true,
    follow: true
  }
};


export default function ISOPage() {
  return (
    <main className="w-full">
      <section className="relative w-full h-65 md:h-68">
        <Image
          src="/service/isi/about.jpg"
          alt="ISO Certification Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-bold">
              ISO CERTIFICATION SERVICES
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/iso-certificate-services.png"
                alt="ISO Certification Services"
                width={420}
                height={520}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <h2 className="text-xl font-bold text-gray-900">INTRODUCTION</h2>
              <div className="w-full h-0.5 bg-gray-200 relative mb-3">
                <span className="absolute left-0 top-0 h-0.5 w-40 bg-[#0072b1]" />
              </div>

              <p className="text-gray-500 text-[15px] leading-6 text-justify">
                ISO Certification is an internationally recognized standard that
                ensures an organization’s products, services, and management
                systems meet quality, safety, efficiency, and regulatory
                requirements. It helps businesses improve internal processes,
                enhance customer satisfaction, and build global credibility. ISO
                certification is applicable to organizations of all sizes and
                across all industries.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 uppercase">
                Advantages of ISO Certification
              </h2>
              <div className="w-full h-0.5 bg-gray-200 relative mb-3">
                <span className="absolute left-0 top-0 h-0.5 w-92 bg-[#0072b1]" />
              </div>
              <ul className="list-disc list-inside text-gray-500 text-[15px] leading-6">
                <li>
                  Enhances business credibility and international recognition.
                </li>
                <li>
                  Improves overall quality management and operational
                  efficiency.
                </li>
                <li>Increases customer trust and satisfaction.</li>
                <li>Helps in meeting statutory and regulatory requirements.</li>
                <li>
                  Provides a competitive edge in domestic and global markets.
                </li>
                <li>Reduces operational risks and process inefficiencies.</li>
                <li>
                  Improves chances of winning government and corporate tenders.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
            Benefits of ISO Certification
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-3">
            <span className="absolute left-0 top-0 h-0.5  w-87 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-6">
            ISO Certification provides a structured framework for organizations
            to improve quality, safety, efficiency, and compliance across
            operations. It is globally recognized and applicable to businesses
            of all sizes and industries, helping them build credibility,
            optimize processes, and enhance stakeholder confidence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[15px] text-gray-600">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                Improved Business Credibility
              </h3>
              <p className="leading-6 text-justify">
                ISO certification demonstrates an organization’s commitment to
                internationally accepted standards, enhancing trust among
                customers, suppliers, regulators, and business partners in both
                domestic and global markets.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                Enhanced Quality & Process Efficiency
              </h3>
              <p className="leading-6 text-justify">
                By implementing standardized management systems, organizations
                can reduce errors, streamline workflows, minimize waste, and
                achieve consistent quality in products and services.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                Regulatory & Legal Compliance
              </h3>
              <p className="leading-6 text-justify">
                ISO standards help organizations align with applicable legal,
                statutory, and regulatory requirements, reducing the risk of
                non-compliance, penalties, and operational disruptions.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                Competitive Advantage
              </h3>
              <p className="leading-6 text-justify">
                ISO-certified organizations are often preferred in government
                tenders, corporate contracts, and international trade, giving
                them a clear edge over non-certified competitors.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                Increased Customer Satisfaction
              </h3>
              <p className="leading-6 text-justify">
                Standardized quality controls and continual improvement
                mechanisms ensure consistent service delivery, leading to higher
                customer satisfaction and long-term client retention.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                Better Risk Management
              </h3>
              <p className="leading-6 text-justify">
                ISO frameworks promote risk-based thinking, enabling
                organizations to identify potential risks early, implement
                controls, and improve business continuity and resilience.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="text-gray-600 text-[14px] leading-6">
              <strong>Note:</strong> The benefits of ISO certification vary
              depending on the specific standard adopted (such as ISO 9001, ISO
              14001, ISO 45001, ISO 27001, etc.), but all ISO standards focus on
              continual improvement, compliance, and sustainable business
              growth.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl  font-bold text-gray-900 uppercase tracking-wide">
            Types of ISO Certifications
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-3">
            <span className="absolute left-0 top-0 h-0.5 w-80 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify max-w-5xl mb-6">
            ISO certifications are designed to help organizations improve
            quality, safety, efficiency, governance, and sustainability. Below
            are the most widely recognized ISO standards adopted by businesses
            across industries.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              {
                title: "ISO 9001:2015",
                desc: "Quality Management System (QMS) focused on consistent quality, customer satisfaction, and continual improvement.",
              },
              {
                title: "ISO 14001:2015",
                desc: "Environmental Management System (EMS) aimed at reducing environmental impact and ensuring legal compliance.",
              },
              {
                title: "ISO 45001:2018",
                desc: "Occupational Health & Safety system to minimize workplace risks and improve employee safety.",
              },
              {
                title: "ISO/IEC 27001:2022",
                desc: "Information Security Management System (ISMS) to protect data, manage cyber risks, and ensure privacy.",
              },
              {
                title: "ISO 22000:2018",
                desc: "Food Safety Management System ensuring safety across the entire food supply chain.",
              },
              {
                title: "ISO 13485:2016",
                desc: "Quality management requirements for organizations manufacturing or designing medical devices.",
              },
              {
                title: "ISO 50001:2018",
                desc: "Energy Management System focused on improving energy efficiency and reducing emissions.",
              },
              {
                title: "ISO 31000:2018",
                desc: "Risk Management framework for identifying and controlling operational and financial risks.",
              },
              {
                title: "ISO 20000-1:2018",
                desc: "IT Service Management standard for delivering reliable and efficient IT services.",
              },
              {
                title: "ISO 37001:2016",
                desc: "Anti-Bribery Management System to prevent, detect, and address bribery risks.",
              },
              {
                title: "ISO 22301:2019",
                desc: "Business Continuity Management System ensuring operational continuity during disruptions.",
              },
              {
                title: "ISO 42001:2023",
                desc: "Artificial Intelligence Management System for responsible and controlled use of AI technologies.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-[16px] font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-[14.5px] leading-6 text-justify">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
            Process for ISO Certification
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-3">
            <span className="absolute left-0 top-0 h-0.5 w-90 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-6">
            The ISO certification process follows a structured approach to
            ensure that an organization’s management systems align with
            international standards. Each stage focuses on evaluating readiness,
            compliance, and effective implementation before the final
            certification is granted.
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
                    Selection of Applicable ISO Standard
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    The organization identifies the most relevant ISO standard
                    based on its business activities, industry requirements, and
                    strategic objectives to ensure the certification aligns with
                    operational goals.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    2
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Appointment of ISO Registrar
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    A competent and accredited ISO certification body is
                    selected. The registrar’s experience should be relevant to
                    the organization’s industry and scope of operations.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    3
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Application & Contract Finalization
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    The organization submits a formal application, followed by
                    finalization of a certification agreement that clearly
                    defines responsibilities, audit scope, timelines, and
                    certification conditions.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    4
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Pre-Assessment & Document Review
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    The registrar reviews documented policies, procedures, and
                    records to assess readiness. This stage typically takes 2–4
                    weeks and may include preliminary observations for
                    improvement.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    5
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Certification Decision & Issuance
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    After successful evaluation and closure of any identified
                    gaps, the ISO certificate is issued. Ongoing surveillance
                    audits are conducted periodically to ensure continued
                    compliance.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Note */}
          <div className="mt-5 bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-gray-600 text-[14px] leading-6">
              <strong>Note:</strong> ISO certification is a continuous
              compliance process. Organizations must maintain documented
              systems, follow standard procedures, and cooperate during
              surveillance audits to retain certification validity.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12 space-y-10">
        <div>
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
            Documents Required for ISO Registration
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-40 md:w-125 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-6">
            To initiate the ISO registration process, organizations are required
            to submit basic identity, business, and operational documents. These
            documents help the certification body understand the organization’s
            structure, scope of activities, and legal existence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[15px] text-gray-600">
            <ul className="list-disc list-inside space-y-2 bg-white border border-gray-200 rounded-lg p-5">
              <li>
                Recent passport-size photograph of the applicant or authorized
                signatory
              </li>
              <li>Aadhaar card of the proprietor, partner, or director</li>
              <li>PAN card of the company or business entity</li>
              <li>Company letterhead or visiting card</li>
              <li>Registered office or business address proof</li>
            </ul>

            <ul className="list-disc list-inside space-y-2 bg-white border border-gray-200 rounded-lg p-5">
              <li>
                Business registration certificate (MSME, GST, Shop Act, etc.)
              </li>
              <li>
                Copy of sales and purchase invoices or GST registration
                certificate
              </li>
              <li>
                Defined scope of business activities for ISO certification
              </li>
              <li>Organization chart showing roles and reporting structure</li>
            </ul>
          </div>

          <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="text-gray-600 text-[14px] leading-6">
              <strong>Note:</strong> Additional documents may be required
              depending on the selected ISO standard (such as ISO 9001, ISO
              14001, ISO 45001, or ISO 27001) and the nature of the
              organization’s operations. All submitted documents must be clear,
              valid, and up to date.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl  font-bold text-gray-900 uppercase tracking-wide">
            Frequently Asked Questions (FAQs) on ISO Certification
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-3">
            <span className="absolute left-0 top-0 h-0.5 w-40 md:w-165 bg-[#0072b1]" />
          </div>

          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                What is ISO certification?
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                ISO certification is an internationally recognized validation
                that confirms an organization’s management system complies with
                the requirements of a specific ISO standard. It demonstrates
                consistency, quality, safety, and regulatory compliance in
                business operations.
              </p>
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                Is ISO certification mandatory in India?
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                ISO certification is generally voluntary; however, it is often
                required by government tenders, corporate clients, exporters,
                and international buyers. Certain industries may require ISO
                certification as part of contractual or regulatory obligations.
              </p>
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                How long does it take to get ISO certification?
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                The ISO certification process typically takes between
                <strong> 7 to 30 working days</strong>, depending on the size of
                the organization, the chosen ISO standard, and the readiness of
                existing processes and documentation.
              </p>
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                How long is ISO certification valid?
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                ISO certification is generally valid for
                <strong> three years</strong>. During this period, annual
                surveillance audits are conducted to ensure continued compliance
                with the standard.
              </p>
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                Which ISO certification is best for my business?
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                The most suitable ISO standard depends on your business
                activity. For example, ISO 9001 is ideal for quality management,
                ISO 14001 for environmental compliance, ISO 45001 for workplace
                safety, and ISO/IEC 27001 for data and information security.
              </p>
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                Do small businesses and startups need ISO certification?
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                Yes. ISO certification is suitable for organizations of all
                sizes, including startups and MSMEs. It helps small businesses
                improve credibility, streamline operations, and compete
                effectively with larger organizations.
              </p>
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                What documents are required for ISO certification?
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                Commonly required documents include business registration proof,
                identity documents, address proof, scope of business,
                organizational structure, and basic operational records.
                Additional documentation may be required depending on the
                selected ISO standard.
              </p>
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                Can multiple ISO standards be combined?
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                Yes. Organizations can implement an Integrated Management System
                (IMS) that combines multiple ISO standards, such as ISO 9001,
                ISO 14001, and ISO 45001, under a single certification
                framework.
              </p>
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                What happens after ISO certification is granted?
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                After certification, organizations must maintain compliance
                through periodic surveillance audits, continual improvement
                activities, and regular internal reviews to retain certification
                validity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
