import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "BIS ISI Certification for Medical Products & Devices in India | AN Global Services",

  description:
    "BIS ISI Certification for medical products and devices in India. Get expert support for documentation, BIS testing, factory inspection, ISI license approval, and compliance with BIS Quality Control Orders. Trusted consultants for fast and hassle-free certification.",

  keywords: [
    "BIS ISI  Certification for Medical Products",
    "BIS ISI Certification for Medical Devices",
    "ISI Mark Certification Medical Products",
    "BIS Certification for Medical Products India",
    "ISI Mark for Medical Devices",
    "BIS QCO Medical Products",
    "BIS Scheme I Medical Products",
    "BIS Factory Audit Medical Products",
    "BIS Testing for Medical Devices",
    "ISI License for Medical Products",
    "BIS Certification Consultant for Medical Products",
    "AN Global Services BIS ISI Certification",
  ],

  openGraph: {
    title: "BIS ISI Mark Certification for Medical Products & Devices in India",
    description:
      "Apply for BIS ISI Mark Certification for medical products and medical devices with expert assistance for BIS testing, documentation, factory audit, and ISI license approval under BIS Quality Control Orders.",
    url: "https://www.anglobalservices.com/bis-isi-mark-certification-medical-products",
    siteName: "AN Global Services",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical:
      "https://www.anglobalservices.com/bis-isi-mark-certification-medical-products",
  },
};

const plasticProducts = [
  {
    id: 1,
    name: "UPVC Pipes for Potable Water",
    standard: "IS 4985",
    link: "/isi-products/isi-certification-for-upvc-pipes-for-water-supplies-4985",
  },
  {
    id: 2,
    name: "HDPE Pipes for Potable Water Supplies",
    standard: "IS 4984:1995",
    link: "/isi-products/isi-certification-high-density-polyethylene-pipes-4984",
  },

  {
    id: 3,
    name: "Non-Pressure UPVC Pipes for Drainage and Sewerage Systems",
    standard: "IS 15328",
    link: "/isi-products/isi-certification-for-non-pressure-upvc-pipes-15328",
  },
  {
    id: 5,
    name: "UPVC Pipes for Soil & Waste Discharge",
    standard: "IS 13592",
    link: "/isi-products/isi-certification-for-upvc-pipes-for-soil-and-waste-discharge-13592",
  },
 {
  id: 5,
  name: "Injection Moulded PVC Socket Fittings",
  standard: "IS 7834 (Parts 1 to 8):1987",
  link: "/isi-products/isi-certification-for-injection-moulded-pvc-socket-fittings-7834"
},
  {
  id: 6,
  name: "CPVC Pipes for Potable Hot and Cold Water Distribution",
  standard: "IS 15778",
  link: "/isi-products/isi-certification-for-cpvc-pipes-for-potable-hot-and-cold-water-distribution-supplies-15778"
},
 {
  id: 7,
  name: "High Density Polyethylene (HDPE) Pipes for Sewerage",
  standard: "IS 14333",
  link: "/isi-products/isi-certification-for-high-density-polyethylene-pipes-for-sewerage-14333"
},

];

const chunkPlasticProducts = (arr, size = 2) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const plasticProductRows = chunkPlasticProducts(plasticProducts, 2);

export default function PlasticProductsISIPage() {
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
          BIS ISI MARK CERTIFICATION FOR PLASTIC PRODUCTS
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
            <Image
              src="/service/isi-certificate-plastics-products.png"
              alt="BIS ISI Mark for Plastic Products"
              width={420}
              height={520}
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 uppercase">
              What is BIS ISI Mark Certification for Plastic Products?
            </h2>

            <div className="w-full h-0.5 bg-gray-200 relative mb-4">
              <span className="absolute left-0 top-0 h-0.5 w-60 md:w-161 bg-[#0072b1]" />
            </div>

            <p className="text-gray-600 text-[15px] leading-6 text-justify pb-4">
              BIS ISI Mark certification for plastic products is a mandatory
              quality compliance requirement enforced under various Quality
              Control Orders (QCOs) issued by the Government of India. It
              ensures that plastic products meet prescribed Indian Standards
              related to material composition, mechanical strength, durability,
              and safety before they are manufactured, sold, or imported into
              the Indian market.
            </p>

            <p className="text-gray-600 text-[15px] leading-6 text-justify pb-4">
              The ISI Mark confirms that plastic products have undergone
              conformity assessment, product testing, and factory inspection as
              per Bureau of Indian Standards (BIS) regulations. BIS-certified
              plastic products are subject to continuous surveillance to ensure
              consistent quality and prevent the circulation of substandard or
              unsafe plastic materials.
            </p>

            <p className="text-gray-600 text-[15px] leading-6 text-justify">
              Commonly regulated plastic products include PVC pipes and
              fittings, plastic water storage tanks, plastic packaging
              materials, molded plastic components, plastic footwear, household
              plastic items, and industrial plastic products. BIS ISI Mark
              certification applies to both Indian and foreign manufacturers,
              and non-compliance may result in customs rejection, penalties, or
              prohibition on sale in India.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 md:px-6 py-12">
        <div className="max-w-7xl mx-auto  md:px-6 pb-12">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Benefits of BIS ISI Mark Certification for Plastic Products
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-4">
            <span className="absolute left-0 top-0 h-0.5 w-30  md:w-170 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            BIS ISI Mark certification is a mandatory quality compliance
            requirement for many plastic products notified under Quality Control
            Orders (QCOs) issued by the Government of India. Apart from legal
            compliance, ISI certification offers significant quality,
            commercial, and regulatory advantages to manufacturers and importers
            of plastic products.
          </p>

          <div className="space-y-1">
            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                1. Mandatory Legal Compliance and Market Access
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                BIS ISI certification is compulsory for plastic products such as
                PVC pipes, water storage tanks, plastic footwear, and packaging
                materials covered under QCOs. Without a valid ISI license, such
                products cannot be manufactured, imported, sold, or distributed
                in India.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                2. Assured Quality, Strength, and Durability
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                BIS-certified plastic products undergo testing for material
                composition, mechanical strength, dimensional accuracy, and
                performance. This ensures durability, safety, and suitability
                for household, industrial, and infrastructure use.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                3. Increased Trust Among Buyers and Institutions
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                Government departments, infrastructure projects, contractors,
                and large buyers prefer ISI-marked plastic products due to
                guaranteed compliance with Indian Standards, reducing the risk
                of failures and substandard materials.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                4. Eligibility for Government Tenders and Bulk Orders
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                ISI Mark certification is often a mandatory eligibility
                requirement for government tenders, public infrastructure
                projects, and large institutional procurements involving plastic
                products.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                5. Reduced Legal, Financial, and Reputational Risk
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                Compliance with BIS standards helps manufacturers and importers
                avoid penalties, product seizure, customs rejection, and brand
                damage arising from non-compliant plastic products.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-2 md:px-6 pb-12">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Documents Required for BIS ISI Certification for Plastic Products
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-30 md:w-193 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            To obtain BIS ISI Mark certification for plastic products,
            manufacturers must submit technical, business, and factory-related
            documents that allow BIS to verify production capability, quality
            systems, and product conformity with Indian Standards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                1. Business & Factory Documents
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
                <li>Company incorporation or registration certificate.</li>
                <li>Factory license or valid address proof.</li>
                <li>GST registration and PAN.</li>
                <li>Trademark certificate, if applicable.</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                2. Plastic Product Details
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
                <li>Product description, grade, size, and specification.</li>
                <li>Applicable Indian Standard (IS Code).</li>
                <li>Raw material formulation and composition details.</li>
                <li>Manufacturing process flow chart.</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                3. Manufacturing & Testing Infrastructure
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
                <li>List of extrusion / molding machinery.</li>
                <li>In-house testing equipment details.</li>
                <li>Calibration certificates.</li>
                <li>Quality control personnel details.</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                4. Application & Test Reports
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
                <li>Online BIS application (Form V).</li>
                <li>Authorization letter (if applicable).</li>
                <li>Product test reports from BIS-recognized lab.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-2 md:px-6">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Process to Get BIS ISI Mark Certification for Plastic Products
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-3">
            <span className="absolute left-0 top-0 h-0.5 w-30 md:w-182 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            The BIS ISI certification process for plastic products follows a
            defined procedure involving application submission, factory
            inspection, and product testing. For domestic manufacturers, the
            process generally takes 60 to 90 days, subject to compliance
            readiness.
          </p>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-3">
              <li>
                <strong>Identify Applicable IS Code:</strong> Select the correct
                Indian Standard relevant to the plastic product.
              </li>
              <li>
                <strong>Online Application Filing:</strong> Submit the
                application on the BIS Manak Online portal with required
                documents.
              </li>
              <li>
                <strong>Factory Inspection:</strong> BIS officials inspect
                machinery, production processes, and testing facilities.
              </li>
              <li>
                <strong>Sample Testing:</strong> Product samples are tested as
                per applicable Indian Standards.
              </li>
              <li>
                <strong>Grant of ISI License:</strong> Upon successful
                inspection and test results, BIS grants the Certification Marks
                License (CM/L).
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 md:px-6 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            PLASTIC PRODUCTS UNDER BIS ISI CERTIFICATION
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-4">
            <span className="absolute left-0 top-0 h-0.5 w-40 md:w-127 bg-[#0072b1]" />
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
                {plasticProductRows.map((row, rowIndex) => (
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

          <div className="md:hidden mt-5 space-y-0">
            {plasticProductRows.map((row, rowIndex) => (
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
            Frequently Asked Questions (FAQs) on BIS ISI Certification for
            Plastic Products
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-5">
            <span className="absolute left-0 top-0 h-0.5 w-30 md:w-232 bg-[#0072b1]" />
          </div>

          <div className="space-y-6 text-gray-700 text-[15px] leading-6">
            <div>
              <strong>
                1. What is BIS ISI Mark certification for plastic products?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                BIS ISI Mark certification for plastic products is a mandatory
                quality approval issued by the Bureau of Indian Standards. It
                confirms that plastic products comply with applicable Indian
                Standards related to material quality, strength, safety, and
                performance.
              </p>
            </div>

            <div>
              <strong>
                2. Is BIS ISI certification mandatory for all plastic products?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                No, BIS ISI certification is mandatory only for plastic products
                notified under Quality Control Orders (QCOs) issued by the
                Government of India. Products not covered under QCOs may not
                require ISI certification.
              </p>
            </div>

            <div>
              <strong>
                3. Which plastic products require BIS ISI certification?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                Common plastic products requiring ISI certification include PVC
                pipes and fittings, plastic water storage tanks, plastic
                footwear, plastic packaging materials, molded plastic
                components, and other regulated plastic goods as notified under
                BIS standards.
              </p>
            </div>

            <div>
              <strong>
                4. Who can apply for BIS ISI certification for plastic products?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                Only manufacturers can apply for BIS ISI certification. Traders,
                distributors, or retailers cannot apply unless they own and
                operate the manufacturing facility. Foreign manufacturers must
                apply under the BIS FMCS scheme.
              </p>
            </div>

            <div>
              <strong>
                5. How long does BIS ISI certification take for plastic
                products?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                For domestic manufacturers, the certification process usually
                takes 60 to 90 days, depending on document readiness, factory
                inspection scheduling, and laboratory testing timelines.
              </p>
            </div>

            <div>
              <strong>
                6. What is the validity of BIS ISI license for plastic products?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                BIS ISI licenses are generally granted for one year and can be
                renewed annually, subject to compliance with BIS surveillance
                requirements and payment of applicable fees.
              </p>
            </div>

            <div>
              <strong>
                7. Can one ISI license cover multiple plastic products or
                factories?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                An ISI license is factory-specific and product-specific.
                Multiple products may be covered under one license only if they
                fall under the same Indian Standard and are manufactured at the
                same location.
              </p>
            </div>

            <div>
              <strong>
                8. What happens if plastic products are sold without ISI
                certification?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                Selling or importing BIS-notified plastic products without ISI
                certification can result in penalties, product seizure, customs
                rejection, suspension of business operations, and legal action
                under the BIS Act.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
