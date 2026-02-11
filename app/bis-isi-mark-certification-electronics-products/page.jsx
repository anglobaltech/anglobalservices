import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "BIS ISI Mark Certification for Electronics Products in India | AN Global Services",

  description:
    "Get BIS ISI Mark Certification for electronics products in India. Expert support for BIS testing, factory inspection, ISI license approval, and compliance with BIS Quality Control Orders for electrical and electronic items.",

  keywords: [
    "BIS ISI Mark Certification for Electronics Products",
    "BIS ISI Certification for Electrical Products",
    "ISI Mark for Electronics Products",
    "BIS Certification for Electronics India",
    "ISI License for Electrical Products",
    "BIS QCO Electronics",
    "Power Adapter ISI Certification",
    "Electrical Cable ISI Certification",
    "AN Global Services BIS ISI Certification",
  ],

  openGraph: {
    title: "BIS ISI Mark Certification for Electronics Products in India",
    description:
      "Apply for BIS ISI Mark Certification for electronics products with expert assistance for BIS testing, factory inspection, and ISI license approval.",
    url: "https://www.anglobalservices.com/bis-isi-mark-certification-electronics-products",
    siteName: "AN Global Services",
    locale: "en_IN",
    type: "website",
  },

  alternates: {
    canonical:
      "https://www.anglobalservices.com/bis-isi-mark-certification-electronics-products",
  },
};

const electronicsProducts = [
  {
    id: 1,
    name: "Power Adapters",
    standard: "IS 13252 (Part 1)",
    link: "/bis-isi-mark-certification-electronics-products",
  },
  {
    id: 2,
    name: "Switch Mode Power Supplies (SMPS)",
    standard: "IS 13252 (Part 1)",
    link: "/bis-isi-mark-certification-electronics-products",
  },
  {
    id: 3,
    name: "Electrical Cables",
    standard: "IS 694",
    link: "/bis-isi-mark-certification-electronics-products",
  },
  {
    id: 4,
    name: "Switches",
    standard: "IS 3854",
    link: "/bis-isi-mark-certification-electronics-products",
  },
  {
    id: 5,
    name: "Sockets & Plugs",
    standard: "IS 1293",
    link: "/bis-isi-mark-certification-electronics-products",
  },
  {
    id: 6,
    name: "LED Lighting Products",
    standard: "IS 10322",
    link: "/bis-isi-mark-certification-electronics-products",
  },
  {
    id: 7,
    name: "Circuit Breakers",
    standard: "IS/IEC 60898",
    link: "/bis-isi-mark-certification-electronics-products",
  },
  {
    id: 8,
    name: "UPS Systems",
    standard: "IS 16242",
    link: "/bis-isi-mark-certification-electronics-products",
  },
];

const chunkElectronicsProducts = (arr, size = 2) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const electronicsProductRows = chunkElectronicsProducts(electronicsProducts, 2);

export default function ElectronicsISIPage() {
  return (
    <main className="w-full bg-white">
      <section
        className="relative w-full h-60 md:h-72 flex items-center justify-center"
        style={{
          backgroundImage: "url('/service/isi/about.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 text-white text-2xl md:text-4xl font-bold text-center px-4">
          BIS ISI MARK CERTIFICATION FOR ELECTRONICS PRODUCTS
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
            <Image
              src="/service/isi-certification-electronics.png"
              alt="BIS ISI Mark for Electronics Products"
              width={420}
              height={520}
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 uppercase">
              What is BIS ISI Mark Certification for Electronics Products?
            </h2>

            <div className="w-full h-0.5 bg-gray-200 relative mb-4">
              <span className="absolute left-0 top-0 h-0.5 w-78 md:w-174 bg-[#0072b1]" />
            </div>

            <p className="text-gray-600 text-[15px] leading-6 text-justify pb-4">
              BIS ISI Mark certification for electronics products is a mandatory
              safety and quality compliance requirement prescribed under various
              Quality Control Orders (QCOs) issued by the Government of India.
              The certification ensures that electronic and electrical products
              conform to the applicable Indian Standards (IS) relating to
              electrical safety, performance, insulation, durability, and
              protection against electrical, mechanical, and fire hazards before
              they are manufactured, imported, distributed, or sold in the
              Indian market.
            </p>

            <p className="text-gray-600 text-[15px] leading-6 text-justify pb-4">
              The ISI Mark indicates that the electronics product has
              successfully undergone conformity assessment, including sample
              testing in BIS-recognized laboratories and inspection of the
              manufacturing facility, as per the guidelines of the Bureau of
              Indian Standards (BIS). After the grant of the ISI license,
              BIS-certified electronics products are subject to regular
              surveillance, periodic testing, and factory audits to ensure
              continuous compliance with the prescribed Indian safety and
              quality standards.
            </p>

            <p className="text-gray-600 text-[15px] leading-6 text-justify">
              Electronics and electrical products commonly regulated under BIS
              ISI certification include power adapters, chargers, switch mode
              power supplies, electrical cables, switches, plugs, sockets, LED
              lighting products, circuit breakers, and other notified items. The
              BIS ISI Mark certification is applicable to both Indian and
              foreign manufacturers. 
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 md:px-6 py-12">
        <div className="max-w-7xl mx-auto md:px-6 pb-12">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Benefits of BIS ISI Mark Certification for Electronics Products
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-4">
            <span className="absolute left-0 top-0 h-0.5 w-30 md:w-186 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            BIS ISI Mark certification is a mandatory safety and quality
            compliance requirement for various electronics products notified
            under Quality Control Orders (QCOs) issued by the Government of
            India. ISI certification ensures electrical safety, product
            reliability, and compliance with Indian Standards before electronics
            products are manufactured, sold, or imported into the Indian market.
          </p>

          <div className="space-y-1">
            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                1. Mandatory Legal Compliance for Electronics Market Entry
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                BIS ISI certification is compulsory for notified electronics
                products such as power supplies, adapters, electrical cables,
                switches, sockets, lighting equipment, and other regulated
                items. Without ISI certification, these products cannot be
                legally manufactured, imported, or sold in India.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                2. Enhanced Electrical Safety and User Protection
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                BIS-certified electronics products are tested for electrical
                safety, insulation resistance, overheating, short-circuit
                protection, and fire hazards. This reduces the risk of electric
                shock, device failure, and accidents during consumer or
                industrial use.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                3. Increased Trust Among Consumers and Businesses
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                Consumers, distributors, and institutional buyers prefer
                ISI-marked electronics products due to assured compliance with
                Indian safety standards, leading to higher brand credibility and
                reduced product complaints.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                4. Eligibility for Government and Institutional Procurement
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                Many government departments, PSUs, and public institutions
                mandate BIS ISI certification for electronics products used in
                infrastructure, utilities, offices, and public facilities.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                5. Reduced Legal, Recall, and Compliance Risk
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                Compliance with BIS standards helps manufacturers and importers
                avoid penalties, customs rejection, product recalls, liability
                claims, and enforcement action arising from non-compliant
                electronics products.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-2 md:px-6 pb-12">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Documents Required for BIS ISI Certification for Electronics
            Products
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-30 md:w-208 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            To obtain BIS ISI Mark certification for electronics products,
            manufacturers must submit business, technical, and factory-related
            documents to demonstrate compliance with applicable Indian
            Standards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                1. Business & Factory Documents
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
                <li>Company incorporation or registration certificate.</li>
                <li>Manufacturing unit address proof.</li>
                <li>GST registration and PAN.</li>
                <li>Trademark certificate (if applicable).</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                2. Electronics Product Details
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
                <li>Product description, model number, and ratings.</li>
                <li>Applicable Indian Standard (IS Code).</li>
                <li>Bill of materials and component list.</li>
                <li>Manufacturing process flow chart.</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                3. Manufacturing & Testing Infrastructure
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
                <li>Assembly and testing machinery details.</li>
                <li>In-house electrical safety testing equipment.</li>
                <li>Calibration certificates.</li>
                <li>Qualified quality control personnel details.</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                4. Application & Test Reports
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
                <li>Online BIS application (Form V).</li>
                <li>Authorization letter (if applicable).</li>
                <li>Product test reports from BIS-recognized laboratories.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-2 md:px-6">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Process to Get BIS ISI Mark Certification for Electronics Products
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-3">
            <span className="absolute left-0 top-0 h-0.5 w-30 md:w-197 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            The BIS ISI certification process for electronics products follows a
            structured procedure involving application submission, factory
            inspection, and product testing. The process typically takes 60 to
            90 days for domestic manufacturers, subject to compliance readiness.
          </p>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-3">
              <li>
                <strong>Identify Applicable IS Code:</strong> Select the
                relevant Indian Standard applicable to the electronics product.
              </li>
              <li>
                <strong>Online Application Submission:</strong> File the
                application through the BIS Manak Online portal with required
                documents.
              </li>
              <li>
                <strong>Factory Inspection:</strong> BIS officers inspect the
                manufacturing facility, testing setup, and quality systems.
              </li>
              <li>
                <strong>Sample Testing:</strong> Electronics samples are tested
                for electrical safety and performance in BIS-recognized
                laboratories.
              </li>
              <li>
                <strong>Grant of ISI License:</strong> Upon successful
                compliance, BIS grants the Certification Marks License (CM/L).
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 md:px-6 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            ELECTRONICS PRODUCTS UNDER BIS ISI CERTIFICATION
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-4">
            <span className="absolute left-0 top-0 h-0.5 w-55 md:w-142 bg-[#0072b1]" />
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block mt-5 overflow-x-auto border border-[#0072b1]">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-50 border-b border-blue-400">
                  <th className="border border-blue-400 px-3 py-2 text-left">
                    Product
                  </th>
                  <th className="border border-blue-400 px-3 py-2 w-44 text-center">
                    Indian Standard
                  </th>
                  <th className="border border-blue-400 px-3 py-2 text-left">
                    Product
                  </th>
                  <th className="border border-blue-400 px-3 py-2 w-44 text-center">
                    Indian Standard
                  </th>
                </tr>
              </thead>

              <tbody>
                {electronicsProductRows.map((row, rowIndex) => (
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
                    <td className="border border-blue-400 px-3 py-2 text-center">
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
                    <td className="border border-blue-400 px-3 py-2 text-center">
                      {row[1]?.standard || "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View */}
          <div className="md:hidden mt-5 space-y-0">
            {electronicsProductRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="border border-[#0072b1] overflow-hidden"
              >
                {row[0] && (
                  <div className="bg-[#bfe4ef] px-4 py-1 border-b border-blue-400">
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

      <section className="bg-white pb-12">
        <div className="max-w-7xl mx-auto px-7 md:px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase">
            BIS ISI Certification for Electronics Products – FAQs
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-5">
            <span className="absolute left-0 top-0 h-0.5 w-85 md:w-153 bg-[#0072b1]" />
          </div>

          <div className="space-y-6 text-gray-700 text-[15px] leading-6">
            <div>
              <strong>
                1. What is BIS ISI Mark certification for electronics products?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                BIS ISI Mark certification for electronics products is a
                mandatory safety and quality compliance approval issued by the
                Bureau of Indian Standards. It confirms that electronics
                products comply with applicable Indian Standards related to
                electrical safety, performance, insulation, and protection
                against electrical hazards.
              </p>
            </div>

            <div>
              <strong>
                2. Is BIS ISI certification mandatory for all electronics
                products?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                No, BIS ISI certification is mandatory only for electronics
                products notified under Quality Control Orders (QCOs) issued by
                the Government of India. Electronics products not covered under
                QCOs may not require ISI certification.
              </p>
            </div>

            <div>
              <strong>
                3. Which electronics products require BIS ISI certification?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                Common electronics products requiring ISI certification include
                power adapters, chargers, power supplies, electrical cables,
                switches, sockets, lighting equipment, and other notified
                electrical and electronic items regulated by BIS.
              </p>
            </div>

            <div>
              <strong>
                4. Who can apply for BIS ISI certification for electronics
                products?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                Only manufacturers are eligible to apply for BIS ISI
                certification. Traders, importers, or distributors cannot apply
                unless they own and operate the manufacturing facility. Foreign
                manufacturers must apply under the BIS FMCS scheme.
              </p>
            </div>

            <div>
              <strong>
                5. How long does BIS ISI certification take for electronics
                products?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                For domestic manufacturers, the BIS ISI certification process
                typically takes 60 to 90 days, depending on document readiness,
                factory inspection scheduling, and laboratory testing of
                electronics samples.
              </p>
            </div>

            <div>
              <strong>
                6. What is the validity of BIS ISI license for electronics
                products?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                BIS ISI licenses are generally granted for a period of one year
                and can be renewed annually, subject to continued compliance
                with BIS surveillance requirements and payment of applicable
                renewal fees.
              </p>
            </div>

            <div>
              <strong>
                7. Can one ISI license cover multiple electronics products or
                factories?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                An ISI license is factory-specific and product-specific.
                Multiple electronics products may be covered under a single
                license only if they fall under the same Indian Standard and are
                manufactured at the same factory location.
              </p>
            </div>

            <div>
              <strong>
                8. What happens if electronics products are sold without ISI
                certification?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                Manufacturing, importing, or selling BIS-notified electronics
                products without ISI certification can result in penalties,
                customs rejection, product seizure, recalls, cancellation of
                approvals, and legal action under the BIS Act, 2016.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );N
}
