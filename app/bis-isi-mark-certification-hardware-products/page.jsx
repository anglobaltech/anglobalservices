import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "BIS ISI Certification for Hardware Products in India | AN Global Services",

  description:
    "Get BIS ISI Certification for hardware products in India. Expert support for BIS testing, factory inspection, ISI license approval, and compliance with BIS Quality Control Orders for fasteners and building hardware.",

  keywords: [
    "BIS ISI Certification for Hardware Products",
    "BIS ISI Certification for Fasteners",
    "ISI Mark for Hardware Products",
    "BIS Certification for Hardware Products India",
    "ISI License for Hardware Products",
    "BIS QCO Hardware Products",
    "Bolts and Nuts ISI Certification",
    "Fasteners ISI Certification",
    "AN Global Services BIS ISI Certification",
  ],

  openGraph: {
    title: "BIS ISI Mark Certification for Hardware Products in India",
    description:
      "Apply for BIS ISI Mark Certification for hardware products with expert assistance for BIS testing, factory inspection, and ISI license approval.",
    url: "https://www.anglobalservices.com/bis-isi-mark-certification-hardware-products",
    siteName: "AN Global Services",
    locale: "en_IN",
    type: "website",
  },

  alternates: {
    canonical:
      "https://www.anglobalservices.com/bis-isi-mark-certification-hardware-products",
  },
};

const hardwareProducts = [
  {
    id: 1,
    name: "Bolts",
    standard: "IS 1367",
    link: "/bis-isi-mark-certification-hardware-products",
  },
  {
    id: 2,
    name: "Nuts",
    standard: "IS 1367",
    link: "/bis-isi-mark-certification-hardware-products",
  },
  {
    id: 3,
    name: "Screws",
    standard: "IS 1364",
    link: "/bis-isi-mark-certification-hardware-products",
  },
  {
    id: 4,
    name: "Washers",
    standard: "IS 2016",
    link: "/bis-isi-mark-certification-hardware-products",
  },
  {
    id: 5,
    name: "Builders Hardware (Hinges & Fittings)",
    standard: "IS 362",
    link: "/bis-isi-mark-certification-hardware-products",
  },
  {
    id: 6,
    name: "Steel Anchors & Fasteners",
    standard: "As per applicable IS",
    link: "/bis-isi-mark-certification-hardware-products",
  },
  {
    id: 7,
    name: "Metal Clamps",
    standard: "As per applicable IS",
    link: "/bis-isi-mark-certification-hardware-products",
  },
  {
    id: 8,
    name: "Structural Fasteners",
    standard: "As per applicable IS",
    link: "/bis-isi-mark-certification-hardware-products",
  },
];

const chunkHardwareProducts = (arr, size = 2) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const hardwareProductRows = chunkHardwareProducts(hardwareProducts, 2);

export default function  HardwareISIPage() {
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
          BIS ISI MARK CERTIFICATION FOR HARDWARE PRODUCTS
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
            <Image
              src="/service/isi-certification-hardware.png"
              alt="BIS ISI Mark for Hardware Products"
              width={420}
              height={520}
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 uppercase">
              What is BIS ISI Mark Certification for Hardware Products?
            </h2>

            <div className="w-full h-0.5 bg-gray-200 relative mb-4">
              <span className="absolute left-0 top-0 h-0.5 w-70 md:w-168 bg-[#0072b1]" />
            </div>

            <p className="text-gray-600 text-[15px] leading-6 text-justify pb-4">
              BIS ISI Mark certification for hardware products is a mandatory
              quality and safety compliance requirement introduced under various
              Quality Control Orders (QCOs) issued by the Government of India.
              It ensures that hardware products conform to prescribed Indian
              Standards related to material quality, mechanical strength,
              durability, corrosion resistance, and safe usage before they are
              manufactured, sold, or supplied in the Indian market.
            </p>

            <p className="text-gray-600 text-[15px] leading-6 text-justify pb-4">
              The ISI Mark indicates that hardware products have undergone
              conformity assessment, product testing, and factory inspection as
              per Bureau of Indian Standards (BIS) guidelines. BIS-certified
              hardware products are subject to ongoing surveillance to ensure
              consistent quality and to prevent substandard fasteners, fittings,
              and building hardware from being used in residential, commercial,
              and industrial applications.
            </p>

            <p className="text-gray-600 text-[15px] leading-6 text-justify">
              Commonly regulated hardware products include nuts, bolts, screws,
              fasteners, hinges, door fittings, builders’ hardware, metal
              anchors, clamps, and other mechanical hardware components used in
              construction, infrastructure, manufacturing, and engineering
              applications. BIS ISI Mark certification applies to both Indian
              and foreign manufacturers, and non-compliance may lead to
              penalties, market restrictions, product rejection, or legal action
              under the BIS Act.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 md:px-6 py-12">
        <div className="max-w-7xl mx-auto md:px-6 pb-12">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Benefits of BIS ISI Mark Certification for Hardware Products
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-4">
            <span className="absolute left-0 top-0 h-0.5 w-30 md:w-178 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            BIS ISI Mark certification is a mandatory quality and safety
            compliance requirement for various hardware products notified under
            Quality Control Orders (QCOs) issued by the Government of India. ISI
            certification ensures product strength, durability, corrosion
            resistance, and safe performance in construction, industrial, and
            engineering applications.
          </p>

          <div className="space-y-1">
            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                1. Mandatory Compliance for Regulated Hardware Products
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                BIS ISI certification is compulsory for notified hardware
                products such as fasteners, bolts, nuts, screws, builders’
                hardware, and structural fittings. Without ISI certification,
                these products cannot be legally manufactured, supplied, or used
                in regulated projects.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                2. Assured Strength, Durability, and Performance
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                BIS-certified hardware products are tested for mechanical
                strength, dimensional accuracy, load capacity, and corrosion
                resistance. This ensures reliable performance and long service
                life in demanding applications.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                3. Acceptance in Government and Industrial Projects
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                Government departments, PSUs, infrastructure agencies, and
                industrial buyers prefer or mandate ISI-marked hardware products
                for public works, factories, and engineering projects.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                4. Competitive Advantage in Tenders and Bulk Supply
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                ISI Mark certification improves eligibility for government
                tenders and large industrial contracts, helping hardware
                manufacturers gain a competitive edge in regulated markets.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                5. Reduced Legal, Safety, and Product Liability Risk
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                Compliance with BIS standards minimizes risks related to product
                failure, rejection, penalties, and legal liability arising from
                the supply of substandard hardware products.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-2 md:px-6 pb-12">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Documents Required for BIS ISI Certification for Hardware Products
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-30 md:w-200 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            To obtain BIS ISI Mark certification for hardware products,
            manufacturers must submit technical, manufacturing, and
            quality-related documents to demonstrate conformity with applicable
            Indian Standards.
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
                2. Hardware Product Details
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
                <li>Product description, type, and dimensions.</li>
                <li>Applicable Indian Standard (IS Code).</li>
                <li>Raw material specifications.</li>
                <li>Manufacturing process flow chart.</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                3. Manufacturing & Testing Infrastructure
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
                <li>Machinery used for forging, machining, or fabrication.</li>
                <li>In-house mechanical and dimensional testing equipment.</li>
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
                <li>Product test reports from BIS-recognized laboratory.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-2 md:px-6">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Process to Get BIS ISI Mark Certification for Hardware Products
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-3">
            <span className="absolute left-0 top-0 h-0.5 w-30 md:w-188 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            The BIS ISI certification process for hardware products follows a
            structured procedure involving application submission, factory
            inspection, and product testing. The process generally takes 60 to
            90 days for domestic manufacturers, depending on compliance
            readiness.
          </p>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-3">
              <li>
                <strong>Identify Applicable IS Code:</strong> Select the
                relevant Indian Standard for the hardware product.
              </li>
              <li>
                <strong>Online Application Submission:</strong> File the
                application on the BIS Manak Online portal with required
                documents.
              </li>
              <li>
                <strong>Factory Inspection:</strong> BIS officers inspect the
                manufacturing process, machinery, and testing facilities.
              </li>
              <li>
                <strong>Sample Testing:</strong> Hardware samples are tested for
                strength, dimensions, and performance as per IS requirements.
              </li>
              <li>
                <strong>Grant of ISI License:</strong> Upon successful
                compliance, BIS issues the Certification Marks License (CM/L).
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 md:px-6 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            HARDWARE PRODUCTS UNDER BIS ISI CERTIFICATION
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-4">
            <span className="absolute left-0 top-0 h-0.5 w-40 md:w-135 bg-[#0072b1]" />
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
                {hardwareProductRows.map((row, rowIndex) => (
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
            {hardwareProductRows.map((row, rowIndex) => (
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
            BIS ISI Certification for Hardware Products – FAQs
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-5">
            <span className="absolute left-0 top-0 h-0.5 w-78 md:w-145 bg-[#0072b1]" />
          </div>

          <div className="space-y-6 text-gray-700 text-[15px] leading-6">
            <div>
              <strong>
                1. What is BIS ISI Mark certification for hardware products?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                BIS ISI Mark certification for hardware products is a mandatory
                quality and safety approval issued by the Bureau of Indian
                Standards. It confirms that hardware items comply with
                applicable Indian Standards related to material quality,
                mechanical strength, durability, and safe performance.
              </p>
            </div>

            <div>
              <strong>
                2. Is BIS ISI certification mandatory for all hardware products?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                No, BIS ISI certification is mandatory only for hardware
                products notified under Quality Control Orders (QCOs) issued by
                the Government of India. Products not covered under QCOs may not
                require ISI certification.
              </p>
            </div>

            <div>
              <strong>
                3. Which hardware products require BIS ISI certification?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                Common hardware products requiring ISI certification include
                bolts, nuts, screws, fasteners, washers, hinges, builders’
                hardware, structural fasteners, and other notified mechanical
                hardware products used in construction and industrial
                applications.
              </p>
            </div>

            <div>
              <strong>
                4. Who can apply for BIS ISI certification for hardware
                products?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                Only manufacturers are eligible to apply for BIS ISI
                certification. Traders, distributors, or suppliers cannot apply
                unless they own and operate the manufacturing unit. Foreign
                manufacturers must apply under the BIS FMCS scheme.
              </p>
            </div>

            <div>
              <strong>
                5. How long does BIS ISI certification take for hardware
                products?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                For domestic manufacturers, the BIS ISI certification process
                usually takes 60 to 90 days, depending on documentation
                readiness, factory inspection scheduling, and laboratory testing
                of hardware samples.
              </p>
            </div>

            <div>
              <strong>
                6. What is the validity of BIS ISI license for hardware
                products?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                BIS ISI licenses are generally granted for one year and can be
                renewed annually, subject to compliance with BIS surveillance
                requirements and payment of applicable renewal fees.
              </p>
            </div>

            <div>
              <strong>
                7. Can one ISI license cover multiple hardware products or
                factories?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                An ISI license is factory-specific and product-specific.
                Multiple hardware products may be covered under a single license
                only if they fall under the same Indian Standard and are
                manufactured at the same factory location.
              </p>
            </div>

            <div>
              <strong>
                8. What happens if hardware products are sold without ISI
                certification?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                Manufacturing, importing, or selling BIS-notified hardware
                products without ISI certification can result in penalties,
                seizure of goods, rejection in government projects, cancellation
                of contracts, and legal action under the BIS Act, 2016.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
