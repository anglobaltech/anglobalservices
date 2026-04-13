import Image from "next/image";
import Head from "next/head";

export const revalidate = 86400;
export const metadata = {
  title:
    "BIS FMCS Certification in India for Foreign Manufacturers | FMCS Registration, Cost & Process",

  description:
    "Get BIS FMCS Certification in India for foreign manufacturers. Complete support for FMCS registration, process, documentation, cost, AIR services, and BIS approval. Fast FMCS consultancy in India.",

  keywords: [
    "BIS FMCS Certification",
    "FMCS BIS Registration",
    "ISI Mark for Foreign Manufacturers",
    "Foreign Manufacturers Certification Scheme",
    "BIS FMCS License India",
    "BIS FMCS Consultant",
    "BIS ISI Mark Import India",
    "Authorized Indian Representative BIS",
    "BIS Certification for Overseas Manufacturers",
  ],

  alternates: {
    canonical:
      "https://www.anglobalservices.com/foreign-manufacturers-certification-scheme-fmcs",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is BIS FMCS certification in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BIS FMCS certification is mandatory for foreign manufacturers exporting products to India.",
      },
    },
    {
      "@type": "Question",
      name: "How to get FMCS certification in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FMCS certification requires application submission, factory audit, testing, and BIS approval.",
      },
    },
    {
      "@type": "Question",
      name: "What is FMCS certification cost in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FMCS certification cost depends on product type, audit, testing, and BIS fees.",
      },
    },
    {
      "@type": "Question",
      name: "What documents are required for FMCS certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Documents include factory details, process flow, testing equipment, and quality control records.",
      },
    },
  ],
};

export default function FMCSPage() {
  return (
    <main className="w-full bg-white">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </Head>
      <section
        className="relative w-full h-55 md:h-65 flex items-center justify-center"
        style={{
          backgroundImage: "url('/service/isi/about.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0a3d62]/30" />

        <h1 className="relative z-10 text-white text-2xl md:text-4xl font-bold text-center px-4 uppercase leading-snug">
          BIS FMCS Certification in India for Foreign Manufacturers (FMCS
          Registration & ISI Mark)
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/bis-fmcs-certificate.png"
                alt="BIS FMCS Certification in India for Foreign Manufacturers ISI Mark"
                width={420}
                height={520}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div>
              <h2 className="text-xl font-bold uppercase text-gray-900 ">
                BIS Mark under Foreign Manufacturers Certification Scheme (FMCS)
              </h2>
              <div className="w-full h-0.5 bg-[#0072b1]  mb-2" />
              <p className="text-gray-500 text-[15px] leading-6 text-justify">
                BIS FMCS Certification in India (Foreign Manufacturers
                Certification Scheme) is a mandatory compliance requirement for
                foreign manufacturers who want to export products to India. The
                FMCS registration allows overseas manufacturers to obtain BIS
                certification and use the ISI Mark under Indian standards. This
                certification is essential for market entry into India and
                ensures compliance with Indian product certification
                requirements for foreign companies. Whether you are dealing in
                electronics, steel, machinery, or industrial products, FMCS
                approval is required for customs clearance and legal sales in
                India. FMCS (Foreign Manufacturers Certification Scheme) is a
                certification scheme regulated by the Bureau of Indian Standards
                (BIS) under Scheme-I of Schedule-II of the Conformity Assessment
                Regulations, 2018, and the BIS Act, 2016. This scheme allows
                manufacturers located outside India to obtain a BIS license for
                the use of the ISI Mark on products that conform to applicable
                Indian Standards.
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-[15px] leading-6 text-justify">
                FMCS is the overseas extension of the ISI Certification Scheme
                under Scheme-I, applicable to manufacturers located outside
                India, as it ensures uniform compliance across both foreign and
                Indian-made products. For many products notified under Quality
                Control Orders (QCOs), FMCS certification is mandatory for
                import clearance in India. Under this scheme, foreign
                manufacturers are required to appoint an Authorized Indian
                Representative (AIR) who acts as a local point of contact for
                BIS and is responsible for regulatory coordination and legal
                compliance. AN Global Services provides end-to-end assistance in
                FMCS certification, including AIR support and liaison with BIS
                authorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl  font-bold text-gray-900 uppercase">
            Why BIS FMCS Certification is Mandatory for Imports into India?
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-40 md:w-182 bg-[#0072b1]" />
          </div>

          <p className="text-gray-500 text-[15px] leading-6 text-justify mb-6">
            FMCS BIS Registration is not optional for foreign manufacturers
            exporting regulated products to India. It is a statutory compliance
            requirement enforced by Indian authorities to ensure that imported
            goods meet the same safety, quality, and performance standards as
            products manufactured within India.
          </p>

          <ul className="space-y-4 text-gray-700 text-[15px] leading-6">
            <li className="flex items-start gap-3">
              <span className="text-[#0072b1] font-bold">✔</span>
              <span>
                <strong>Mandatory under Quality Control Orders (QCOs):</strong>{" "}
                ISI Mark for Foreign Manufacturers is compulsory for products
                notified under QCOs issued by the Government of India. Import of
                such products without FMCS approval is legally prohibited.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#0072b1] font-bold">✔</span>
              <span>
                <strong>
                  Customs clearance is not possible without FMCS license:
                </strong>
                Products lacking a valid BIS FMCS license are rejected or
                detained at Indian ports, leading to shipment delays, demurrage
                costs, and financial losses.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#0072b1] font-bold">✔</span>
              <span>
                <strong>
                  Mandatory for legal use of ISI Mark on imported products:
                </strong>
                Foreign manufacturers are permitted to affix the ISI Mark only
                after obtaining FMCS certification. Any unauthorized use of the
                ISI Mark is treated as a serious offense under the BIS Act,
                2016.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#0072b1] font-bold">✔</span>
              <span>
                <strong>
                  Penalties, seizure, and blacklisting for non-compliance:
                </strong>
                Importing BIS-notified products without FMCS certification can
                result in penalties, confiscation of goods, suspension of
                imports, and blacklisting of the manufacturer or importer.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#0072b1] font-bold">✔</span>
              <span>
                <strong>Same quality standards as Indian manufacturers:</strong>
                FMCS ensures that foreign manufacturers meet identical Indian
                Standard requirements as domestic manufacturers, creating a
                level playing field and protecting Indian consumers.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
            FMCS Certification Process in India | Step-by-Step BIS FMCS Approval
            Process
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-50 md:w-232 bg-[#0072b1]" />
          </div>

          <p className="text-gray-500 text-[15px] leading-6 text-justify mb-6">
            BIS FMCS (Foreign Manufacturers Certification Scheme) certification
            is a structured and audit-driven process designed to ensure that
            foreign-made products comply with applicable Indian Standards (IS).
            As of 2026, the scheme continues to mandate on-site factory
            inspections outside India, independent sample testing in
            BIS-recognized laboratories, and strict regulatory scrutiny before
            granting the ISI Mark license.
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
                    Pre-Requisites & Planning
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-500">
                    Identify the applicable Indian Standard (IS), appoint an
                    Authorized Indian Representative (AIR), and ensure
                    availability of in-house testing facilities as required
                    under the standard.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    2
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Documentation
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-500">
                    Preparation of factory layout, manufacturing flow chart,
                    machinery list, test equipment details, calibration records,
                    quality control plan, and AIR nomination documents.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    3
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Application Submission
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-500">
                    Submission of Form VI through the BIS Manak Online portal
                    along with supporting documents (physical copies only if
                    specifically requested by BIS) along with the applicable
                    application fee.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    4
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Application Scrutiny
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-500">
                    BIS reviews the submitted documents and raises queries, if
                    any. Observations must be resolved before proceeding to the
                    factory audit stage.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    5
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Factory Audit
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-500">
                    A BIS officer conducts an on-site inspection of the overseas
                    manufacturing facility, verifies the production process, and
                    witnesses product testing in the in-house laboratory.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    6
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Sample Sealing & Testing
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-500">
                    Samples are sealed by the BIS officer and sent to a
                    BIS-recognized laboratory in India for independent
                    conformity testing.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    7
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Grant of License
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-500">
                    Upon successful audit and test results, the manufacturer
                    submits the license fee, marking fee, and Performance Bank
                    Guarantee (PBG), after which the ISI Mark license is
                    granted.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Compliance Note */}
          <div className="mt-5 bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-gray-500 text-[14px] leading-6">
              <strong>Compliance Note:</strong> BIS FMCS licenses are subject to
              ongoing surveillance, periodic inspections, and sample testing.
              Manufacturers must maintain consistent product quality, valid test
              records, and active coordination through their Authorized Indian
              Representative to retain certification.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12  space-y-12">
        {/* Requirements */}
        <div>
          <h2 className="text-xl md:text-xl uppercase font-semibold text-gray-900">
            Requirements for BIS FMCS Certification
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-40 md:w-118 bg-[#0072b1]" />
          </div>

          <p className="text-gray-500 text-[15px] leading-6 text-justify">
            Foreign manufacturers intending to export products to India under
            the Foreign Manufacturers Certification Scheme (FMCS) must comply
            with the following mandatory requirements prescribed by the Bureau
            of Indian Standards (BIS):
          </p>

          <ol className="mt-6 list-decimal pl-6 space-y-4 text-gray-500 text-[15px] leading-5">
            <li>
              The manufacturing facility must be physically located outside the
              territory of India.
            </li>
            <li>
              The foreign manufacturer must formally accept all terms,
              conditions, and obligations associated with the BIS FMCS license.
            </li>
            <li>
              Adequate in-house laboratory facilities along with qualified
              quality control personnel must be available to conduct routine
              testing as per applicable Indian Standards (IS).
            </li>
            <li>
              All products covered under the application must strictly conform
              to the relevant Indian Standard specifications.
            </li>
            <li>
              The manufacturer must agree to the BIS-prescribed Scheme of
              Inspection and Testing (SIT) and pay the applicable annual marking
              fee.
            </li>
            <li>
              All essential manufacturing machinery, testing equipment, and
              quality assurance infrastructure must be installed and operational
              at the factory premises.
            </li>
          </ol>
        </div>

        {/* Documents */}
        <div>
          <h2 className="text-xl md:text-xl font-semibold uppercase text-gray-900">
            Documents Required for FMCS Certification in India | FMCS
            Documentation Support
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-90 md:w-235 bg-[#0072b1]" />
          </div>

          <p className="text-gray-500 text-[15px] leading-6 text-justify">
            To support the FMCS application, foreign manufacturers are required
            to submit comprehensive technical and legal documentation for
            evaluation by BIS authorities:
          </p>

          <ol className="mt-6 list-decimal pl-6 space-y-4 text-gray-500 text-[15px] leading-5">
            <li>
              Factory registration, business license, and company incorporation
              documents.
            </li>
            <li>
              Detailed manufacturing process flow chart from raw material intake
              to finished product dispatch.
            </li>
            <li>
              Information on in-house manufacturing capabilities, including
              details of outsourced processes, if any.
            </li>
            <li>
              List and specifications of product testing equipment available at
              the factory.
            </li>
            <li>
              Quality control procedures, inspection records, and internal test
              reports demonstrating consistent product conformity.
            </li>
            <li>
              Formal acceptance of the Scheme of Testing & Inspection (SIT),
              payment of applicable marking fees, laboratory test reports, and
              any additional documents as specified by BIS during application
              scrutiny.
            </li>
          </ol>
        </div>
      </section>

      <section className="bg-gray-50 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
            List of Products Covered under BIS FMCS Certification
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-40 md:w-167 bg-[#0072b1]" />
          </div>

          <p className="text-gray-500 text-[15px] leading-6 text-justify mb-8">
            As of 2026, the Bureau of Indian Standards (BIS) has significantly
            expanded the scope of products requiring mandatory certification
            under the Foreign Manufacturers Certification Scheme (FMCS). More
            than 400+ products now require an ISI Mark for import into India.
            These products are regulated through Quality Control Orders (QCOs),
            and non-compliance may result in rejection at Indian Customs.
          </p>

          {/* Category Sections */}
          <div className="space-y-6 text-[15px]  text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                1. Construction & Building Materials
              </h3>
              <p className="leading-6 text-justify">
                One of the most tightly regulated categories, construction and
                building materials must strictly conform to Indian Standards due
                to their impact on public safety and infrastructure durability.
                Covered products include all varieties of cement, structural and
                stainless steel products, architectural and automotive safety
                glass, and water supply pipes such as PVC, cast iron, and
                polyethylene pipes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                2. Electrical & Power Equipment
              </h3>
              <p className="leading-6 text-justify">
                Heavy electrical and power equipment manufactured outside India
                fall under FMCS, while Certain electronic and IT products are
                regulated under CRS, while non-electronic and heavy electrical
                products fall under FMCS.. Mandatory FMCS products include power
                and distribution transformers, PVC insulated cables and wires,
                induction motors, sealed lead-acid batteries, and shunt
                capacitors used in power systems.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                3. Household & Kitchen Appliances
              </h3>
              <p className="leading-6 text-justify">
                Most plug-in household appliances imported into India require
                ISI Mark for Foreign Manufacturers. This category includes
                pressure cookers (mandatory), gas stoves, induction cooktops,
                immersion heaters, electric geysers, irons, food mixers, vacuum
                cleaners, and key cooling system components used in
                refrigerators and air conditioners.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                4. Chemicals, Fertilizers & Polymers
              </h3>
              <p className="leading-6 text-justify">
                The Government of India continues to expand mandatory
                certification for chemicals and polymers through new QCOs.
                Products such as caustic soda, acetic acid, boric acid,
                methanol, and polymer materials like PVC, polyethylene (PE), and
                polypropylene (PP) used for moulding are now strictly regulated.
                Certain industrial textiles and yarns are also covered.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                5. Consumer & Safety Goods
              </h3>
              <p className="leading-6 text-justify">
                Consumer safety products are a high-priority focus area under
                FMCS. Mandatory certification applies to all toys (electric and
                non-electric), protective helmets for two-wheelers, safety
                footwear, rubber and polymeric footwear, and regulated food
                packaging products such as packaged drinking water, milk powder,
                and infant formula.
              </p>
            </div>

            {/* 6. New Mandatory Additions */}
            <div className="mt-8 bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                6. Additions in 2026
              </h3>
              <p className="text-gray-500 text-[15px] leading-6 text-justify">
                Recent regulatory updates have expanded the scope of mandatory
                FMCS Certification India to include several new product
                categories. Furniture items such as beds, chairs, tables, and
                storage units require ISI marking from February 2026 onwards.
                Additionally, under the newly introduced Scheme-X, various types
                of industrial machinery including cranes, pumps, and compressors
                will mandatorily require BIS certification effective from
                September 1, 2026. Solar PV modules and solar inverters are also
                subject to revised and stricter compliance requirements.
              </p>
            </div>
          </div>

          {/* Summary Table */}
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg mt-8">
            <table className="w-full border-collapse text-[15px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Category
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Example Product
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Applicable Indian Standard (IS)
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Metals</td>
                  <td className="border border-gray-200 px-4 py-2">
                    Structural Steel
                  </td>
                  <td className="border border-gray-200 px-4 py-2">IS 2062</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Toys</td>
                  <td className="border border-gray-200 px-4 py-2">
                    Non-Electric Toys
                  </td>
                  <td className="border border-gray-200 px-4 py-2">IS 9873</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">
                    Furniture
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    General Purpose Chairs
                  </td>
                  <td className="border border-gray-200 px-4 py-2">IS 17632</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">
                    Chemicals
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    Caustic Soda
                  </td>
                  <td className="border border-gray-200 px-4 py-">IS 252</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
            Timeline for Getting BIS FMCS Certification
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-40 md:w-130 bg-[#0072b1]" />
          </div>

          <p className="text-gray-500 text-[15px] leading-6 text-justify mb-8">
            The timeline for obtaining BIS FMCS (Foreign Manufacturers
            Certification Scheme) certification in 2026 generally ranges between{" "}
            <strong>6 to 9 months</strong>. Since the scheme involves mandatory
            overseas factory inspections by BIS officials and independent
            product testing in India, the process is significantly more
            time-intensive than domestic BIS certification. Proper planning and
            documentation can help avoid unnecessary delays.
          </p>

          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg">
            <table className="w-full border-collapse text-[15px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Phase
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Typical Timeline
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Key Activities
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Month 1 – Preparation
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    2–4 Weeks
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Appointment of Authorized Indian Representative (AIR),
                    collection of factory layouts and documents, and
                    verification that in-house laboratory facilities can perform
                    all tests as per the applicable Indian Standard (IS).
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Month 2 – Application Submission
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    ~2 Weeks
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Submission of Form VI on the BIS Manak Online portal,
                    payment of the application fee, and receipt of the official
                    application number after initial scrutiny.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Month 3 – Audit Scheduling
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    4–6 Weeks
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Coordination with BIS for scheduling the foreign factory
                    audit, including visa arrangements, travel planning, and
                    availability of BIS technical officers.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Month 4 – Factory Audit
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    3–5 Days
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    On-site inspection by BIS officials to review the
                    manufacturing process, verify testing infrastructure,
                    witness routine tests, and seal product samples for
                    laboratory testing in India.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Month 5 – Sample Testing
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    4–8 Weeks
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Testing of sealed samples at BIS-recognized laboratories in
                    India. The duration varies depending on the product type and
                    complexity, with chemicals generally tested faster than
                    steel, tires, or heavy engineering products.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Month 6 – Grant of License
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    2–3 Weeks
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Upon successful test results and audit clearance, payment of
                    license fees and marking fees is completed. BIS then issues
                    the CM/L number, authorizing the use of the ISI Mark.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Note */}
          <div className="mt-6 bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-gray-500 text-[14px] leading-6">
              <strong>Important Note:</strong> Delays may occur due to
              incomplete documentation, audit scheduling constraints, laboratory
              backlogs, or travel-related factors. Engaging an experienced BIS
              consultant such as
              <strong> AN Global Services</strong> can significantly streamline
              the process and reduce approval timelines.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl  font-bold text-gray-900 uppercase">
            FMCS Certification Cost in India | Fees, Timeline & Charges
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-87 md:w-165 bg-[#0072b1]" />
          </div>

          <p className="text-gray-500 text-[15px] leading-6 text-justify mb-6">
            The cost of BIS FMCS (Foreign Manufacturers Certification Scheme)
            certification varies depending on the product category, applicable
            Indian Standard, factory location, and scope of inspection. BIS does
            not follow a fixed or uniform pricing model, as the certification
            process involves multiple regulatory and technical components.
          </p>

          <div className="space-y-5 text-gray-700 text-[15px] leading-6">
            <div>
              <strong>1. Application Fee:</strong>
              <p className="text-gray-500 mt-1 text-justify">
                A non-refundable application fee is payable to BIS at the time
                of submitting the FMCS application. The fee depends on the
                product type and the number of Indian Standards covered under
                the license.
              </p>
            </div>

            <div>
              <strong>2. Inspection & Audit Charges:</strong>
              <p className="text-gray-500 mt-1 text-justify">
                BIS officials conduct an on-site inspection of the overseas
                manufacturing facility. Inspection charges vary based on the
                country, factory location, travel requirements, and duration of
                the audit.
              </p>
            </div>

            <div>
              <strong>3. Product Testing Charges:</strong>
              <p className="text-gray-500 mt-1 text-justify">
                Sealed product samples are tested at BIS-recognized laboratories
                in India. Testing costs depend on the product, test parameters,
                and complexity of the applicable Indian Standard.
              </p>
            </div>

            <div>
              <strong>4. Marking Fee:</strong>
              <p className="text-gray-500 mt-1 text-justify">
                After grant of the FMCS license, manufacturers are required to
                pay an annual marking fee to BIS. This fee is calculated based
                on the product category and estimated production or import
                volume.
              </p>
            </div>

            <div>
              <strong>5. Performance Bank Guarantee (PBG):</strong>
              <p className="text-gray-500 mt-1 text-justify">
                A Performance Bank Guarantee is mandatory under FMCS to ensure
                ongoing compliance with BIS requirements. The PBG amount depends
                on the product risk category and is refundable upon surrender or
                cancellation of the license.
              </p>
            </div>

            <div>
              <strong>
                6. Authorized Indian Representative (AIR) Service Charges:
              </strong>
              <p className="text-gray-500 mt-1 text-justify">
                Foreign manufacturers must appoint an Authorized Indian
                Representative (AIR) for regulatory coordination with BIS. AIR
                service charges vary based on the level of technical support,
                documentation, audit coordination, and post-certification
                compliance management.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="text-gray-500 text-[14px] leading-6">
              <strong>Cost Advisory:</strong> The overall cost of BIS FMCS
              certification depends on the product category, number of models,
              factory location, audit complexity, and testing requirements. For
              an accurate cost estimate, a product-specific assessment is
              strongly recommended before initiating the application.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-5">
          <h2 className="text-xl  font-bold text-gray-900 uppercase">
            Frequently Asked Questions (FAQs) on BIS FMCS Certification
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-50 md:w-176 bg-[#0072b1]" />
          </div>

          <div className="space-y-6 text-gray-700 text-[15px] leading-6">
            <div>
              <strong>1. What is BIS FMCS Certification?</strong>
              <p className="text-gray-500 mt-2 text-justify">
                BIS FMCS Certification refers to the Foreign Manufacturers
                Certification Scheme under which foreign manufacturers are
                granted permission to use the ISI Mark on products exported to
                India. It ensures that imported products comply with applicable
                Indian Standards and regulatory requirements.
              </p>
            </div>

            <div>
              <strong>2. Who needs FMCS Certification?</strong>
              <p className="text-gray-500 mt-2 text-justify">
                FMCS certification is required for manufacturers located outside
                India who export products to India that are notified under
                mandatory BIS Quality Control Orders (QCOs). Importers, traders,
                or distributors cannot apply in place of the manufacturer.
              </p>
            </div>

            <div>
              <strong>3. Is FMCS mandatory for all imported products?</strong>
              <p className="text-gray-500 mt-2 text-justify">
                No, FMCS certification is mandatory only for products that fall
                under BIS-notified Quality Control Orders. Products not covered
                under QCOs may not require FMCS certification, though other
                regulatory approvals may still apply.
              </p>
            </div>

            <div>
              <strong>4. How long does BIS FMCS certification take?</strong>
              <p className="text-gray-500 mt-2 text-justify">
                The FMCS certification process generally takes between 6 to 9
                months. The timeline depends on documentation readiness, factory
                audit scheduling, sample testing duration, and compliance with
                Indian Standards.
              </p>
            </div>

            <div>
              <strong>5. What is the validity of an FMCS license?</strong>
              <p className="text-gray-500 mt-2 text-justify">
                An FMCS license is typically granted for a period of one year
                and can be renewed annually, subject to satisfactory compliance,
                payment of marking fees, and successful surveillance activities
                by BIS.
              </p>
            </div>

            <div>
              <strong>6. Can one FMCS license cover multiple factories?</strong>
              <p className="text-gray-500 mt-2 text-justify">
                No, FMCS licenses are factory-specific. Each manufacturing
                location must obtain a separate FMCS license, even if the
                product and company ownership remain the same.
              </p>
            </div>

            <div>
              <strong>
                7. What is the role of an Authorized Indian Representative
                (AIR)?
              </strong>
              <p className="text-gray-500 mt-2 text-justify">
                The Authorized Indian Representative (AIR) acts as the official
                local representative of the foreign manufacturer in India. The
                AIR is responsible for coordination with BIS, handling
                compliance matters, responding to regulatory queries, and
                supporting audits and surveillance activities.
              </p>
            </div>

            <div>
              <strong>
                8. What happens if FMCS certification is not obtained?
              </strong>
              <p className="text-gray-500 mt-2 text-justify">
                Importing BIS-notified products without FMCS certification can
                lead to rejection at Indian Customs, seizure of goods, financial
                penalties, suspension of imports, and potential blacklisting of
                the manufacturer or importer under Indian law.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase">
            Why Choose AN Global Services for BIS FMCS Certification?
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-5">
            <span className="absolute left-0 top-0 h-0.5 w-40 md:w-170 bg-[#0072b1]" />
          </div>

          <p className="text-gray-500 text-[15px] leading-6 text-justify mb-8">
            BIS FMCS certification is a highly technical and audit-intensive
            process that requires precise regulatory understanding,
            international audit coordination, and continuous compliance
            management. AN Global Services provides structured, end-to-end FMCS
            support designed to minimize delays, reduce compliance risks, and
            ensure smooth approval for foreign manufacturers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[15px] text-gray-700">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                Dedicated BIS FMCS Consultants
              </h3>
              <p className="leading-6 text-justify">
                Our team consists of specialized BIS FMCS consultants who focus
                exclusively on foreign manufacturer certifications, ensuring
                accurate interpretation of Indian Standards and regulatory
                requirements.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                AIR Services Under One Roof
              </h3>
              <p className="leading-6 text-justify">
                We provide Authorized Indian Representative (AIR) services as
                part of our FMCS offering, enabling seamless communication with
                BIS and ensuring full legal and regulatory compliance in India.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                Proven Experience with Overseas Audits
              </h3>
              <p className="leading-6 text-justify">
                Our team has hands-on experience coordinating BIS audits at
                overseas manufacturing facilities, including audit preparedness,
                test witnessing support, and real-time query resolution.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                Faster Approval & Query Handling
              </h3>
              <p className="leading-6 text-justify">
                With pre-audit gap analysis and structured documentation
                workflows, we help reduce BIS observations, respond to queries
                efficiently, and accelerate the overall certification timeline.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5 md:col-span-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                Support Till License Grant & Renewal
              </h3>
              <p className="leading-6 text-justify">
                Our engagement does not end with application submission. We
                support clients through license grant, marking fee compliance,
                surveillance requirements, renewals, and ongoing BIS
                coordination to ensure long-term certification continuity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
