import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "BIS ISI Certification for Furniture & Plywood | AN Global Services",

  description:
    "Get BIS ISI Certification for furniture and plywood in India as per Furniture QCO 2025 & IS 303. AN Global Services provides complete support for BIS licensing, factory audit, testing, documentation, and approval for manufacturers and importers.",

  keywords: [
    "BIS ISI certification",
    "BIS certification for furniture",
    "ISI mark for furniture India",
    "BIS ISI certification for plywood",
    "IS 303 plywood certification",
    "Furniture QCO 2025 BIS",
    "BIS license for furniture manufacturers",
    "BIS certification for plywood India",
    "ISI mark consultant India",
    "BIS Manak Online application",
    "BIS factory inspection furniture",
    "BIS ISI mark for importers",
    "AN Global Services BIS certification",
  ],

  alternates: {
    canonical:
      "https://www.anglobalservices.com/bis-isi-mark-certification-furniture-plywood",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const products = [
  {
    id: 1,
    name: "Work Chairs",
    standard: "IS 17631: 2022",
    link: "isi-products/isi-certification-office-work-chair-17631",
  },
  {
    id: 2,
    name: "General Purpose Chairs & Stool",
    standard: "IS 17632: 2022",
    link: "isi-products/isi-certification-furniture-general-purpose-chairs-and-stools-17632",
  },
  {
    id: 3,
    name: "Furniture Tables and Desks",
    standard: "IS 17633:2022",
    link: "isi-products/isi-certificate-furniture-tables-and-desks",
  },
  {
    id: 4,
    name: "Furniture – Storage Units",
    standard: "IS 17634:2022",
    link: "isi-products/isi-certificate-furniture-storage-units",
  },
  {
    id: 5,
    name: "Furniture - Beds",
    standard: "IS 17635: 2022",
    link: "isi-products/isi-certificate-furniture-beds",
  },
  {
    id: 6,
    name: "Furniture - Bunk Beds",
    standard: "IS 17636: 2022",
    link: "isi-products/isi-certificate-bunk-beds-17636",
  },
  {
    id: 7,
    name: "Plywood for General Purposes",
    standard: "IS 303: 1989",
    link: "isi-products/isi-certification-plywood-for-general-purposes",
  },

];

const chunkProducts = (arr, size = 2) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const productRows = chunkProducts(products, 2);
export default function FurnitureISI() {
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
          BIS ISI Certification For Furniture & Plywood Products
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/isi-certification-furniture-plywood.png"
                alt="BIS Furniture ISI Mark Certification"
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
                BIS ISI MARK CERTIFICATION FOR FURNITURE & PLYWOOD PRODUCTS
              </h2>

              <div className="w-full h-0.5 bg-gray-200 relative mb-4">
                <span className="absolute left-0 top-0 h-0.5 w-175 bg-[#0072b1]"></span>
              </div>

              <p className="text-gray-600 text-[15px] leading-6 text-justify pb-5">
                BIS ISI Mark certification is now a mandatory requirement for
                selected furniture and plywood products sold or imported in
                India. Under the Furniture (Quality Control) Order, 2025, issued
                by the Bureau of Indian Standards (BIS), manufacturers and
                importers must ensure that their products comply with the
                prescribed Indian Standards and carry the ISI Mark before being
                offered in the Indian market.
              </p>

              <p className="text-gray-600 text-[15px] leading-6 text-justify pb-4">
                BIS ISI Mark certification for furniture focuses on ensuring
                product safety, strength, durability, stability, and overall
                performance during regular use. The certification applies to
                both Indian manufacturers and foreign manufacturers supplying
                furniture to India, helping eliminate substandard products and
                improve consumer safety.
              </p>

              <p className="text-gray-600 text-[15px] leading-6 pb-3">
                The following furniture products require mandatory BIS ISI Mark
                certification as per the applicable Indian Standards:
              </p>

              <ul className="list-disc pl-6 text-[15px] text-gray-500 space-y-1 mb-4">
                <li>Work Chairs (Office / Task Chairs) – IS 17631:2022</li>
                <li>General Purpose Chairs and Stools – IS 17632:2022</li>
                <li>Tables and Desks – IS 17633:2022</li>
                <li>
                  Storage Furniture such as Wardrobes and Cabinets – IS
                  17634:2022
                </li>
                <li>Beds – IS 17635:2022</li>
                <li>Bunk Beds – IS 17636:2022</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-8">
        <div>
          {/* Content */}
          <p className="text-gray-600 text-[15px] leading-6 text-justify pb-4">
            Along with furniture, BIS ISI Mark certification is also compulsory
            for plywood products sold or imported in India. As per the Quality
            Control Order issued in 2024, plywood manufacturers and importers
            must obtain BIS ISI certification to legally sell plywood in the
            Indian market. Non-certified plywood products are not permitted for
            sale or distribution.
          </p>

          <p className="text-gray-600 text-[15px] leading-6 text-justify pb-4">
            BIS ISI Mark certification for plywood ensures proper bonding
            strength, resistance to moisture, dimensional stability, and
            long-term performance. Certified plywood products meet defined
            quality and safety benchmarks, making them suitable for use in
            furniture manufacturing and construction applications.
          </p>

          <p className="text-gray-600 text-[15px] leading-6 pb-3">
            BIS ISI Mark certification for plywood is required under the
            following Indian Standards:
          </p>

          <ul className="list-disc pl-6 text-[15px] text-gray-500 space-y-1 mb-4">
            <li>IS 303 – Plywood for General Purposes </li>
            <li>IS 710 – Marine Grade Plywood for High Moisture Conditions</li>
          </ul>

          <p className="text-gray-600 text-[15px] leading-6 text-justify">
            BIS ISI Mark certification for plywood helps businesses meet
            mandatory legal requirements, improve product reliability, and build
            customer trust. Certified plywood is widely preferred in government
            projects, institutional procurement, and organized retail markets
            due to assured quality and compliance.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 px-4 pb-8">
        <div className="max-w-7xl mx-auto px-0 md:px-6 pb-8">
          {/* Heading */}
          <h2 className="text-xl font-bold uppercase text-gray-900">
            How to Get BIS ISI Mark Certification for Furniture
          </h2>

          {/* Underline */}
          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-80 md:w-150 bg-[#0072b1]" />
          </div>

          {/* Intro */}
          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-6">
            BIS ISI Mark certification for furniture follows a defined approval
            process to ensure products meet Indian safety, strength, and
            durability standards. Since the Furniture (Quality Control) Order,
            2025 is now in force, manufacturers and importers must complete the
            following steps to legally sell furniture products in India.
          </p>

          {/* Process Table */}
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
                    Identify Product Standard
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Select the applicable Indian Standard (IS) for your
                    furniture product such as work chairs, tables, storage
                    units, beds, or bunk beds. Each product category has a
                    specific IS code prescribed by BIS.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    2
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Documentation & Preparation
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Prepare business documents such as GST, MSME/Udyam
                    registration, and factory license. Also arrange
                    manufacturing details, raw material information, machinery
                    list, basic in-house testing facilities, and factory layout
                    plan.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    3
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Online Application
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Apply online through the BIS Manak Online portal by
                    registering your firm, filling Form-V, uploading required
                    documents, and paying the application fee.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    4
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Factory Inspection & Testing
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    A BIS officer visits the manufacturing unit to verify
                    production processes and testing facilities. Product samples
                    are sealed and sent to a BIS-recognized laboratory for
                    strength, stability, and durability testing.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    5
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Grant of License
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    If the factory inspection and test results are satisfactory,
                    BIS issues the CM/L number. The manufacturer is then
                    authorized to use the ISI Mark on approved furniture
                    products.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Note */}
          <div className="mt-5 bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-gray-600 text-[14px] leading-6">
              <strong>Important:</strong> BIS ISI Mark certification is
              mandatory under the Furniture QCO. Selling or importing
              non-certified furniture may result in penalties, product seizure,
              or market restrictions.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto  md:px-6 pb-8">
          {/* Heading */}
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Documents Required for BIS ISI Mark Certification for Furniture
          </h2>

          {/* Underline */}
          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-30 md:w-185 bg-[#0072b1]" />
          </div>

          {/* Intro */}
          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            To obtain the BIS ISI Mark for furniture products in 2026,
            manufacturers must submit a complete set of documents through the
            BIS Manak Online portal. These documents help BIS verify the legal
            status of the business, manufacturing capability, quality control
            systems, and product details.
          </p>

          {/* Category 1 */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-3">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              1. Administrative & Legal Documents
            </h3>
            <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
              <li>
                Business registration documents such as Certificate of
                Incorporation, Partnership Deed, or MSME / Udyam Registration.
              </li>
              <li>
                Address proof of the manufacturing unit such as Factory License,
                GST Certificate, or Trade License showing the factory location.
              </li>
              <li>
                Identity proof of the Authorized Signatory such as Aadhaar Card,
                Voter ID, or Passport.
              </li>
              <li>
                Location map of the factory, including a simple sketch or Google
                Maps screenshot showing nearby landmarks.
              </li>
            </ul>
          </div>

          {/* Category 2 */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-3">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              2. Technical & Manufacturing Documents
            </h3>
            <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
              <li>
                Manufacturing process flowchart showing each step from raw
                material entry to final packing.
              </li>
              <li>
                List of machinery used in production such as cutting machines,
                welding sets, edge banders, along with capacity and serial
                numbers.
              </li>
              <li>
                Plant layout drawing indicating production areas, storage
                sections, and the in-house testing laboratory.
              </li>
              <li>
                Raw material details including wood, steel, fabric, foam, or
                boards, along with their quality or material test certificates.
              </li>
            </ul>
          </div>

          {/* Category 3 */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-3">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              3. Quality Control (QC) Documents
            </h3>
            <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
              <li>
                List of in-house testing equipment such as load testers,
                stability rigs, impact testers, and durability testing machines.
              </li>
              <li>
                Valid calibration certificates of testing equipment issued by
                NABL-accredited laboratories.
              </li>
              <li>
                Details of quality control staff including names, roles, and
                basic qualifications.
              </li>
              <li>
                Scheme of Inspection and Testing (SIT) duly signed and accepted
                by the manufacturer as per BIS requirements.
              </li>
            </ul>
          </div>

          {/* Category 4 */}
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              4. Product-Specific Information
            </h3>
            <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
              <li>
                Detailed product drawings with dimensions and specifications for
                each furniture model to be certified.
              </li>
              <li>
                Brand or trademark details, if the products are sold under a
                registered brand name.
              </li>
              <li>
                BIS-recognized laboratory test reports, if any pre-testing has
                been conducted before application.
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-2 md:px-6">
          {/* Heading */}
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Estimated Fees Required for BIS ISI Mark Certification of Furniture
            Products
          </h2>

          {/* Underline */}
          <div className="w-full h-0.5 bg-gray-200 relative  ">
            <span className="absolute left-0 top-0 h-0.5 w-60 md:w-225 bg-[#0072b1]" />
          </div>

          {/* Intro */}
          <p className="text-gray-600 text-[15px] leading-6  pt-5 text-justify mb-6">
            BIS ISI Mark certification involves certain government fees payable
            to the Bureau of Indian Standards (BIS) and BIS-recognized
            laboratories. The actual cost may vary based on product type, number
            of models, and testing requirements. Below is an indicative breakup
            of the standard government charges.
          </p>

          {/* Cost Table */}
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg">
            <table className="w-full border-collapse text-[15px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Fee Component
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Estimated Amount
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Application Fee
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    ₹1,000
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Audit / Inspection Fee
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    ₹7,000
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Laboratory Testing Fee
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Depends on the product and Testing
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Marking Fee
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Depends on the specific IS Standard
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Note */}
          <div className="mt-5 bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-gray-600 text-[14px] leading-6">
              <strong>Note:</strong> The above fees are indicative government
              charges only. Actual costs may vary based on the number of product
              variants, testing scope, factory location, and applicable Indian
              Standards. Professional consultancy fees are separate.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-3 md:px-6 pb-12">
        <div className="max-w-7xl mx-auto px-2">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            FURNITURE AND PLYWOOD PRODUCTS UNDER BIS ISI CERTIFICATION SERVICE
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-4">
            <span className="absolute left-0 top-0 h-0.5 w-60 md:w-157 bg-[#0072b1]" />
          </div>

          <div className="hidden md:block mt-5 overflow-x-auto border border-[#0072b1]">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-50 border-b border-blue-400">
                  <th className="border border-blue-400 px-3 py-2 text-left">
                    Product
                  </th>
                  <th className="border border-blue-400 px-3 py-2 w-44 text-center">
                    Standard
                  </th>
                  <th className="border border-blue-400 px-3 py-2 text-left">
                    Product
                  </th>
                  <th className="border border-blue-400 px-3 py-2 w-44 text-center">
                    Standard
                  </th>
                </tr>
              </thead>

              <tbody>
                {productRows.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`${
                      rowIndex % 2 === 0 ? "bg-[#bfe4ef]" : "bg-white"
                    } hover:bg-blue-100 transition`}
                  >
                    <td className="border border-blue-400 px-3 py-2">
                      {row[0] && (
                        <Link
                          href={row[0].link}
                          className="font-medium text-gray-900 hover:text-blue-700 hover:underline"
                        >
                          {row[0].name}
                        </Link>
                      )}
                    </td>
                    <td className="border border-blue-400 px-3 py-2 text-center text-gray-700">
                      {row[0]?.standard}
                    </td>

                    <td className="border border-blue-400 px-3 py-2">
                      {row[1] && (
                        <Link
                          href={row[1].link}
                          className="font-medium text-gray-900 hover:text-blue-700 hover:underline"
                        >
                          {row[1].name}
                        </Link>
                      )}
                    </td>
                    <td className="border border-blue-400 px-3 py-2 text-center text-gray-700">
                      {row[1]?.standard || "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden mt-5 space-y-0">
            {productRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="border border-[#0072b1]  overflow-hidden"
              >
                {row[0] && (
                  <div className="bg-[#bfe4ef] px-4 py-1 border-b border-blue-400">
                    {/* <p className="text-xs text-gray-600 mb-1">
                            Sr. {rowIndex * 2 + 1}
                          </p> */}
                    <Link
                      href={row[0].link}
                      className="font-medium text-gray-900 hover:underline block"
                    >
                      {row[0].name}
                    </Link>
                    <p className="text-[14px] text-gray-600 mt-1">
                      {row[0].standard}
                    </p>
                  </div>
                )}

                {row[1] && (
                  <div className="bg-white px-4 py-1">
                    {/* <p className="text-xs text-gray-600 mb-1">
                            Sr. {rowIndex * 2 + 2}
                          </p> */}
                    <Link
                      href={row[1].link}
                      className="font-medium text-gray-900 hover:underline block"
                    >
                      {row[1].name}
                    </Link>
                    <p className="text-[14px] text-gray-600 mt-1">
                      {row[1].standard}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 pb-12">
          {/* Heading */}
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Testing Equipment Required for BIS ISI Mark Certification of
            Furniture
          </h2>

          {/* Underline */}
          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-30 md:w-205 bg-[#0072b1]" />
          </div>

          {/* Intro */}
          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-6">
            To obtain the BIS ISI Mark for furniture products, manufacturers
            must set up a basic in-house testing facility at their factory. As
            per the Furniture (Quality Control) Order in force from 2025–2026,
            BIS verifies that manufacturers have the required testing equipment
            to ensure product strength, stability, and durability during regular
            production.
          </p>

          {/* Mandatory Equipment */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Mandatory In-House Testing Equipment
            </h3>

            <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
              <li>
                <strong>Dimensional Measuring Tools:</strong> Vernier calipers,
                micrometers, and measuring tapes for checking size, height,
                width, and thickness of furniture parts.
              </li>
              <li>
                <strong>Static Load Testing Equipment:</strong> Used to apply
                heavy weight on chairs, tables, or beds to check structural
                strength and load-bearing capacity.
              </li>
              <li>
                <strong>Stability Testing Setup:</strong> Inclined platforms or
                pull force gauges to ensure furniture does not tip over during
                use.
              </li>
              <li>
                <strong>Impact Testing Equipment:</strong> Drop hammer or
                vertical impactor to simulate sudden sitting, dropping of
                objects, or impact on furniture surfaces.
              </li>
              <li>
                <strong>Durability Cycle Tester:</strong> A motorized or
                pneumatic system that repeatedly applies force to simulate
                long-term usage of chairs, tables, or beds.
              </li>
              <li>
                <strong>Surface Performance Test Kit:</strong> Tools to check
                scratch resistance, surface finish, and resistance to liquids or
                chemicals for laminated or polished furniture.
              </li>
            </ul>
          </div>

          {/* Testing Workflow Table */}
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg mb-8">
            <table className="w-full border-collapse text-[15px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                    Test Type
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                    Purpose
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                    Equipment Used
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-900">
                    Stability Test
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">
                    Ensures furniture does not tip or fall during use.
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">
                    Inclined plane, force gauge, weights
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-900">
                    Static Load Test
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">
                    Checks strength under heavy load.
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">
                    Load frame, calibrated weights
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-900">
                    Durability Test
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">
                    Simulates long-term use and wear.
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">
                    Cyclic load testing machine
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-900">
                    Impact / Drop Test
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">
                    Tests resistance to sudden impact.
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">
                    Drop hammer or impactor
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Compliance Checklist */}
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Compliance Checklist for 2026
            </h3>

            <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
              <li>
                All testing equipment must have valid calibration certificates
                from NABL-accredited laboratories (not older than 1 year).
              </li>
              <li>
                Standard Operating Procedures (SOPs) should be clearly displayed
                near each testing machine.
              </li>
              <li>
                Small and Medium Enterprises may receive limited transition time
                to complete the testing setup as per BIS guidelines.
              </li>
              <li>
                Test certificates for raw materials such as wood, metal, fabric,
                or boards should be available for verification during BIS
                inspection.
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Heading */}
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Benefits of BIS ISI Mark Certification for Furniture
          </h2>

          {/* Underline */}
          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-80 md:w-150 bg-[#0072b1]" />
          </div>

          {/* Intro */}
          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            BIS ISI Mark certification for furniture is now a mandatory legal
            requirement under the Furniture (Quality Control) Order, 2025,
            effective from February 2026. Apart from meeting regulatory rules,
            the certification offers several practical and long-term business
            benefits for furniture manufacturers and importers.
          </p>

          {/* Benefits List */}
          <div className="space-y-3">
            {/* Benefit 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                1. Access to Government Tenders & Institutional Sales
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                Government departments, public sector units, and large
                institutions prefer or require ISI-marked furniture for
                procurement. BIS ISI certification allows manufacturers to
                participate in high-volume government tenders and institutional
                supply contracts without restrictions.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                2. Improved Brand Trust and Market Credibility
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                The ISI Mark acts as a visible sign of quality and safety. It
                assures customers that furniture products are strong, stable,
                and safe for daily use. Retailers and online marketplaces also
                prefer certified products, increasing brand acceptance and
                customer confidence.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                3. Better Quality Control and Production Efficiency
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                BIS ISI certification encourages manufacturers to follow
                standard production practices and regular in-house testing. This
                results in consistent product quality, reduced defects, fewer
                customer complaints, and lower rejection or return rates.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                4. Smooth Import Clearance and Market Protection
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                For importers, BIS ISI Mark certification helps avoid shipment
                delays, penalties, or seizure at Indian ports. For domestic
                manufacturers, mandatory certification ensures fair competition
                by restricting the entry of low-quality and non-compliant
                furniture into the Indian market.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                5. Readiness for International Markets
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                Indian Standards for furniture are aligned with global quality
                benchmarks. BIS ISI Mark certification helps manufacturers
                prepare for export audits and quality checks, making it easier
                to expand into international markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 pb-12">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            How to Get BIS ISI Mark Certification for Plywood (IS 303)
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-10 md:w-165 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-6">
            BIS ISI Mark certification for plywood is mandatory in India under
            the BIS Product Certification Scheme. Plywood manufacturers must
            comply with Indian Standard IS 303 to legally manufacture and sell
            general-purpose plywood in the Indian market.
          </p>

          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg">
            <table className="w-full border-collapse text-[15px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Step
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
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Ensure compliance with IS 303 by identifying the plywood
                    grade (MR or BWP) and confirming that your factory has a
                    complete manufacturing setup such as peeling, drying,
                    gluing, and pressing.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    2
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Set up an in-house testing laboratory with required
                    equipment for moisture, bonding strength, water resistance,
                    and dimensional checks.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    3
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Apply online through the BIS Manak Online portal by
                    submitting Form-V along with business documents, factory
                    layout, machinery list, and calibration certificates.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    4
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    BIS conducts a factory inspection to verify production
                    processes, quality control staff, and in-house testing
                    facilities. Product samples are sealed for independent lab
                    testing.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    5
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    If the factory audit and test reports meet IS 303
                    requirements, BIS grants the CM/L number and allows the use
                    of the ISI Mark on plywood sheets.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-5 bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-gray-600 text-[14px] leading-6">
              <strong>Timeline:</strong> Usually 1–3 months depending on
              inspection scheduling and laboratory test results.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Testing Equipment Required for BIS ISI Mark Certification of Plywood
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-4">
            <span className="absolute left-0 top-0 h-0.5 w-23 md:w-202 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-5">
            BIS requires plywood manufacturers to maintain a fully functional
            in-house laboratory to perform routine testing as per IS 303. These
            instruments are verified during the BIS factory audit.
          </p>

          {/* Equipment Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-1.5">
                1. Dimensional & Visual Testing
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-0.5">
                <li>Micrometer / Vernier Calipers</li>
                <li>Steel Scale (1 m / 2 m)</li>
                <li>Measuring Tape</li>
                <li>Try Square</li>
                <li>Straight Edge & Feeler Gauge</li>
              </ul>
            </div>

            {/* 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-1.5">
                2. Moisture & Density Testing
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-0.5">
                <li>Hot Air Oven (103 ± 2°C)</li>
                <li>Digital Moisture Meter</li>
                <li>Weighing Balance (0.01 g)</li>
                <li>Desiccator</li>
              </ul>
            </div>

            {/* 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-1.5">
                3. Adhesive & Water Resistance
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-0.5">
                <li>Water Bath</li>
                <li>Testing Knife</li>
                <li>pH Meter</li>
                <li>Viscosity Cups</li>
              </ul>
            </div>

            {/* 4 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 lg:col-span-1">
              <h3 className="font-semibold text-gray-900 mb-1.5">
                4. Mechanical Strength Testing
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-0.5">
                <li>Universal Testing Machine (UTM)</li>
                <li>Bending & Shear Fixtures</li>
                <li>Tension / Compression Jaws</li>
              </ul>
            </div>

            {/* 5 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 lg:col-span-1">
              <h3 className="font-semibold text-gray-900 mb-1.5">
                5. Biological & Chemical Testing
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-0.5">
                <li>Mycological Tray</li>
                <li>BOD Incubator</li>
                <li>Chemical Glassware</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 bg-white border border-gray-200 rounded-lg p-3">
            <p className="text-gray-600 text-[14px] leading-5">
              <strong>Compliance Note:</strong> All testing equipment must have
              valid NABL calibration certificates. A trained quality control
              person must maintain test records and logbooks as per BIS
              requirements.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
