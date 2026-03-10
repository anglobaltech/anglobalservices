import Image from "next/image";
import Link from "next/link";

export const revalidate = 86400

export const metadata = {
  title:
    "MSME & NSIC Registration Services in India | AN Global Services",

  description:
    "AN Global Services offers professional MSME (Udyam) and NSIC Registration services in India. Get expert assistance for MSME registration under the MSMED Act and NSIC SPRS certification to avail government subsidies, easy bank loans, EMD exemption, tender benefits, and priority sector support.",

  keywords: [
    "MSME registration",
    "Udyam registration",
    "NSIC registration",
    "NSIC SPRS registration",
    "MSME NSIC registration services",
    "MSME registration online India",
    "NSIC certification process",
    "government tender registration MSME",
    "EMD exemption NSIC",
    "AN Global Services MSME",
  ],

  alternates: {
    canonical: "https://www.anglobalservices.com/msme-nsic-registration",
  },

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
          alt="BIS ISI Certification Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-bold">
              MSME NSIC REGISTRATION SERVICES
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/msme-nsic-registration (1).png"
                alt="BIS Certification"
                width={420}
                height={520}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 ">
            <div className="">
              <h2 className="text-xl font-bold text-gray-900">
                MSME NSIC REGISTRATION SERVICES
              </h2>
              <div className="w-full h-0.5 bg-gray-200 relative mb-4">
                <span className="absolute left-0 top-0 h-0.5 w-95 bg-[#0072b1]" />
              </div>

              <p className="text-gray-600 text-[15px] leading-6 text-justify pb-4">
                MSME and NSIC registrations are important government initiatives
                that support the growth of small and medium enterprises in
                India. MSME registration, also known as Udyam Registration,
                provides official recognition to Micro, Small, and Medium
                Enterprises and helps them access various government benefits.
                Registered MSMEs can avail easier bank loans, lower interest
                rates, tax benefits, subsidies, and protection under the MSMED
                Act, which helps businesses grow in a stable and sustainable
                manner.
              </p>

              <p className="text-gray-600 text-[15px] leading-6 text-justify pb-4">
                NSIC registration is an additional certification designed
                specifically for Micro and Small Enterprises that want to work
                with government departments and public sector undertakings.
                Offered under the Single Point Registration Scheme (SPRS), NSIC
                registration helps businesses participate in government tenders
                by providing benefits such as exemption from Earnest Money
                Deposit (EMD), reduced tender costs, and better market
                visibility. While MSME registration acts as a basic business
                identity, NSIC registration works as an advanced support system
                for enterprises aiming to expand their government business
                opportunities.
              </p>

              <p className="text-gray-600 text-[15px] leading-7 text-justify">
                The MSME registration process is simple, quick, and completely
                online. Businesses only need to provide basic details through a
                simple registration form. Based on the information shared, the
                required documentation is prepared and carefully verified before
                submission to the MSME authority. Once the application is filed
                correctly, MSME registration is usually completed within 2
                working days, allowing businesses to start availing government
                schemes and financial benefits without delay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Register for NSIC */}
      <section className="bg-gray-50 pt-5 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
            How to Register for NSIC Certification
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-118 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-6">
            NSIC (National Small Industries Corporation) registration enables
            Micro and Small Enterprises to become government-recognized vendors
            under the Single Point Registration Scheme (SPRS). While MSME
            (Udyam) registration provides basic recognition, NSIC certification
            involves additional verification and a mandatory technical
            inspection. As of 2026, the process is largely digital, followed by
            a physical assessment of business capabilities.
          </p>

          {/* NSIC Process Table */}
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
                    Udyam & MSME Data Bank
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Obtain a valid Udyam (MSME) Registration and register the
                    business on the MSME Data Bank portal as a mandatory
                    prerequisite.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    2
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Online Application
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Submit the seven-part application form on the NSIC SPRS
                    portal and select the products or services (Stores) for
                    registration.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    3
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Payment of Fees
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Pay the applicable registration fee online, which is
                    calculated based on annual turnover and category of
                    enterprise.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    4
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Technical Inspection
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    NSIC appoints an inspecting agency to physically verify
                    plant, machinery, manpower, and production capacity to
                    determine the monetary limit.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    5
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Grant of Certificate
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    After successful verification and approval of inspection
                    reports, the NSIC registration certificate is issued
                    digitally and remains valid for two years.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Validity Note */}
          <div className="mt-5 bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-gray-600 text-[14px] leading-6">
              <strong>Validity:</strong> NSIC registration is valid for 2 years
              and must be renewed before expiry to continue availing tender
              benefits and government procurement support.
            </p>
          </div>
        </div>
      </section>

      {/* Documents Required for NSIC Registration */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12 space-y-12">
        <div>
          <h2 className="text-xl md:text-xl font-semibold uppercase text-gray-900">
            Documents Required for NSIC Registration
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-125 bg-[#0072b1]" />
          </div>

          <p className="text-gray-500 text-[15px] leading-6 text-justify">
            Applicants must keep scanned, self-attested copies of the following
            documents ready for submission during the NSIC registration process:
          </p>

          <ol className="mt-6 list-decimal pl-6 space-y-4 text-gray-600 text-[15px] leading-5">
            <li>
              Udyam (MSME) Registration Certificate and MSME Data Bank
              registration proof.
            </li>
            <li>
              PAN card of the business entity and proprietor, partners, or
              directors.
            </li>
            <li>GST registration certificate and latest GST returns.</li>
            <li>
              Proof of business premises such as rent agreement, lease deed, or
              ownership documents.
            </li>
            <li>
              Partnership Deed or MOA & AOA in case of partnership firms, LLPs,
              or companies.
            </li>
            <li>
              Audited balance sheet and profit & loss statements for the last
              three financial years, certified by a Chartered Accountant.
            </li>
            <li>
              Banker’s report and financial performance statement certified by a
              CA.
            </li>
            <li>
              List of plant and machinery with purchase value and installation
              dates.
            </li>
            <li>
              Details of quality control equipment, production capacity,
              electricity bill, and manpower employed.
            </li>
          </ol>
        </div>
      </section>

      {/* MSME & NSIC Registration Overview */}
      <section className="bg-gray-50 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
            MSME & NSIC Registration in India
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-100 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-6">
            MSME and NSIC registrations are government initiatives designed to
            support Micro, Small, and Medium Enterprises in India by providing
            official recognition, financial assistance, and access to
            growth-oriented schemes. MSME registration, also known as Udyam
            Registration, is issued under the MSMED Act, 2006 and helps
            businesses benefit from subsidies, credit facilities, and regulatory
            support. NSIC registration further strengthens MSMEs by enabling
            participation in government tenders and public procurement
            opportunities.
          </p>

          {/* MSME Eligibility Table */}
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg">
            <table className="w-full border-collapse text-[15px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Category
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Investment Limit
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Turnover Limit
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Micro Enterprise
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Up to ₹1 Crore
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Up to ₹5 Crore
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Small Enterprise
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Up to ₹10 Crore
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Up to ₹50 Crore
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Medium Enterprise
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Up to ₹50 Crore
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Up to ₹250 Crore
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Compliance Note */}
          <div className="mt-5 bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-gray-600 text-[14px] leading-6">
              <strong>Important Note:</strong> MSME registration is voluntary
              but highly recommended for businesses seeking financial support,
              government incentives, and legal protection. NSIC registration is
              optional and is mainly beneficial for Micro and Small Enterprises
              planning to participate in government tenders and procurement
              programs.
            </p>
          </div>
        </div>
      </section>

      {/* MSME & NSIC Benefits and Requirements */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12 space-y-12">
        {/* Benefits */}
        <div>
          <h2 className="text-xl uppercase font-semibold text-gray-900">
            Benefits of MSME & NSIC Registration
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-107 bg-[#0072b1]" />
          </div>

          <ol className="mt-6 list-decimal pl-6 space-y-4 text-gray-600 text-[15px] leading-5">
            <li>
              Easy access to business loans and credit facilities at lower
              interest rates from banks and financial institutions.
            </li>
            <li>
              Priority sector lending and faster loan approvals for registered
              MSMEs.
            </li>
            <li>
              Eligibility for government subsidies, tax benefits, and incentive
              schemes.
            </li>
            <li>
              Protection under the MSMED Act for timely payments and dispute
              resolution.
            </li>
            <li>
              NSIC-registered businesses get access to government tenders, EMD
              exemptions, and enhanced market visibility.
            </li>
          </ol>
        </div>

        {/* NSIC Eligibility */}
        <div>
          <h2 className="text-xl font-semibold uppercase text-gray-900">
            Eligibility Criteria for NSIC Registration
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-120 bg-[#0072b1]" />
          </div>

          <ol className="mt-6 list-decimal pl-6 space-y-4 text-gray-600 text-[15px] leading-5">
            <li>
              The business must hold a valid MSME (Udyam) registration
              certificate.
            </li>
            <li>
              The entity should be a proprietorship, partnership, private
              limited company, or limited company.
            </li>
            <li>Valid GST registration and PAN card are mandatory.</li>
            <li>
              The enterprise must operate in manufacturing or service sectors
              with proper business records.
            </li>
            <li>
              Investment in plant, machinery, or equipment must fall within
              prescribed MSME limits.
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}
