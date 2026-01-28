import Image from "next/image";
export const metadata = {
  title:
    "BIS ISI Mark for FMCS (Foreign Manufacturers Certification Scheme) | AN Global Services",

  description:
    "AN Global Services provides expert consultancy for BIS ISI Mark under the Foreign Manufacturers Certification Scheme (FMCS). We assist foreign manufacturers with BIS licensing, documentation, Authorized Indian Representative (AIR), factory inspection, product testing, and compliance under the BIS Act 2016 and Conformity Assessment Regulations.",

  keywords: [
    "BIS FMCS certification",
    "BIS ISI Mark for foreign manufacturers",
    "Foreign Manufacturers Certification Scheme",
    "FMCS BIS registration",
    "BIS ISI Mark import India",
    "BIS certification for overseas manufacturers",
    "Authorized Indian Representative BIS",
    "BIS Act 2016 certification",
    "FMCS certification process India",
    "AN Global Services BIS FMCS",
  ],

  alternates: {
    canonical: "https://www.anglobalservices.com/bis-fmcs-certification",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function GoldHallmarkingPage() {
  return (
    <main className="w-full bg-white">
      <section
        className="relative w-full h-55 md:h-65 flex items-center justify-center"
        style={{
          backgroundImage: "url('/service/isi/about.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0a3d62]/30" />

        <h1 className="relative z-10 text-white text-2xl md:text-4xl font-bold text-center px-4 leading-snug">
           FMCS CERTIFICATION FOR THE BIS ISI MARK PRODUCTS
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/bis-fmcs-certificate.png"
                alt="BIS Certification"
                width={420}
                height={520}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 ">
                BIS ISI MARK FOR FOREIGN MANUFACTURER CERTIFICATION SCHMES
                (FMCS)
              </h1>
              <div className="w-full h-0.5 bg-[#0072b1] mt-2 mb-4" />
              <p className="text-gray-500 text-[15px] leading-6 text-justify">
                FMCS (Foreign Manufacturers Certification Scheme) is a
                certification scheme regulated by the Bureau of Indian Standards
                (BIS) under Scheme-I of Schedule-II of the Conformity Assessment
                Regulations, 2018, and the BIS Act, 2016. This scheme allows
                manufacturers located outside India to obtain a BIS license for
                the use of the ISI Mark on products that conform to applicable
                Indian Standards. Through FMCS, foreign manufacturers are able
                to legally supply their products in the Indian market while
                meeting the same quality and safety requirements applicable to
                domestic manufacturers.
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-[15px] leading-6 text-justify">
                FMCS is often considered the international equivalent of the ISI
                certification system, as it ensures uniform compliance across
                both foreign and Indian-made products. For many products
                notified under Quality Control Orders (QCOs), FMCS certification
                is mandatory for import clearance in India. Under this scheme,
                foreign manufacturers are required to appoint an Authorized
                Indian Representative (AIR) who acts as a local point of contact
                for BIS and is responsible for regulatory coordination and legal
                compliance. AN Global Services provides end-to-end assistance in
                FMCS certification, including AIR support and liaison with BIS
                authorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-8 space-y-10">
        <div>
          <p className="text-gray-500 text-[15px] leading-6 text-justify">
            For products such as PVC soles and heels, compliance with Indian
            Standards involves strict adherence to prescribed material and
            physical requirements. The resins must be compounded using suitable
            plasticizers and stabilizers, and the finished surface should be
            free from defects or blemishes. The size and thickness of soles and
            heels must be mutually agreed upon between the purchaser and
            supplier, while the hardness of the material is required to be
            maintained between 65 and 75 IRHD. Meeting these specifications
            ensures durability, safety, and consistent product quality in line
            with BIS standards.
          </p>
        </div>
      </section>

      {/* How to Get BIS FMCS Certification */}
      <section className="bg-gray-50 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
            How to Get BIS FMCS Certification on Products
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-142 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-6">
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
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
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
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
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
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Submission of Form VI online along with a hard copy
                    application to the Foreign Manufacturers Certification
                    Department (FMCD), New Delhi, along with the applicable
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
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
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
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
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
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
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
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
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
            <p className="text-gray-600 text-[14px] leading-6">
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
            <span className="absolute left-0 top-0 h-0.5 w-118 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify">
            Foreign manufacturers intending to export products to India under
            the Foreign Manufacturers Certification Scheme (FMCS) must comply
            with the following mandatory requirements prescribed by the Bureau
            of Indian Standards (BIS):
          </p>

          <ol className="mt-6 list-decimal pl-6 space-y-4 text-gray-600 text-[15px] leading-5">
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
            Documents Required for BIS FMCS Certification
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-142 bg-[#0072b1]" />
          </div>

          <p className="text-gray-500 text-[15px] leading-6 text-justify">
            To support the FMCS application, foreign manufacturers are required
            to submit comprehensive technical and legal documentation for
            evaluation by BIS authorities:
          </p>

          <ol className="mt-6 list-decimal pl-6 space-y-4 text-gray-600 text-[15px] leading-5">
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

      {/* Products Covered Under BIS FMCS Certification */}
      <section className="bg-gray-50 pb-14">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
            List of Products Covered under BIS FMCS Certification
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-167 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            As of 2026, the Bureau of Indian Standards (BIS) has significantly
            expanded the scope of products requiring mandatory certification
            under the Foreign Manufacturers Certification Scheme (FMCS). More
            than 450+ products now require an ISI Mark for import into India.
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
                fall under FMCS, while consumer electronics are regulated
                separately under CRS. Mandatory FMCS products include power and
                distribution transformers, PVC insulated cables and wires,
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
                BIS FMCS certification. This category includes pressure cookers
                (mandatory), gas stoves, induction cooktops, immersion heaters,
                electric geysers, irons, food mixers, vacuum cleaners, and key
                cooling system components used in refrigerators and air
                conditioners.
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
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                Recent regulatory updates have expanded the scope of mandatory
                BIS FMCS certification to include several new product
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
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Food</td>
                  <td className="border border-gray-200 px-4 py-2">
                    Packaged Drinking Water
                  </td>
                  <td className="border border-gray-200 px-4 py-2">IS 14543</td>
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

      {/* Timeline for BIS FMCS Certification */}
      <section className="bg-gray-50 pb-14">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
            Timeline for Getting BIS FMCS Certification
          </h2>

         <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-130 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
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
            <p className="text-gray-600 text-[14px] leading-6">
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
    </main>
  );
}
