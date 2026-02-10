import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "BIS ISI Mark Certification for Concrete Products in India | AN Global Services",

  description:
    "Get BIS ISI Mark Certification for concrete products in India. Expert support for BIS testing, factory inspection, ISI license approval, and compliance with BIS Quality Control Orders for construction and infrastructure materials.",

  keywords: [
    "BIS ISI Mark Certification for Concrete Products",
    "BIS ISI Certification for Concrete Blocks",
    "ISI Mark for Concrete Products",
    "BIS Certification for Concrete Products India",
    "ISI License for Concrete Products",
    "BIS QCO Concrete Products",
    "Concrete Blocks ISI Certification",
    "Paver Blocks ISI Certification",
    "RCC Pipes ISI Certification",
    "AN Global Services BIS ISI Certification",
  ],

  openGraph: {
    title:
      "BIS ISI Mark Certification for Concrete Products in India",
    description:
      "Apply for BIS ISI Mark Certification for concrete products with expert assistance for BIS testing, factory inspection, and ISI license approval for construction materials.",
    url: "https://www.anglobalservices.com/bis-isi-mark-certification-concrete-products",
    siteName: "AN Global Services",
    locale: "en_IN",
    type: "website",
  },

  alternates: {
    canonical:
      "https://www.anglobalservices.com/bis-isi-mark-certification-concrete-products",
  },
};

const concreteProducts = [
  {
    id: 1,
    name: "Cement Concrete Blocks",
    standard: "IS 2185 (Part 1)",
    link: "/bis-isi-mark-certification-concrete-products",
  },
  {
    id: 2,
    name: "Solid Concrete Blocks",
    standard: "IS 2185 (Part 1)",
    link: "/bis-isi-mark-certification-concrete-products",
  },
  {
    id: 3,
    name: "Paver Blocks",
    standard: "IS 15658",
    link: "/bis-isi-mark-certification-concrete-products",
  },
  {
    id: 4,
    name: "Precast Concrete Pipes",
    standard: "IS 458",
    link: "/bis-isi-mark-certification-concrete-products",
  },
  {
    id: 5,
    name: "RCC Hume Pipes",
    standard: "IS 458",
    link: "/bis-isi-mark-certification-concrete-products",
  },
  {
    id: 6,
    name: "Concrete Kerb Stones",
    standard: "IS 15658",
    link: "/bis-isi-mark-certification-concrete-products",
  },
  {
    id: 7,
    name: "Precast Concrete Slabs",
    standard: "As per applicable IS",
    link: "/bis-isi-mark-certification-concrete-products",
  },
  {
    id: 8,
    name: "Concrete Railway Sleepers",
    standard: "As per RDSO / IS",
    link: "/bis-isi-mark-certification-concrete-products",
  },
];

const chunkConcreteProducts = (arr, size = 2) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const concreteProductRows = chunkConcreteProducts(concreteProducts, 2);

export default function ConcreteISIPage() {
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
          BIS ISI MARK CERTIFICATION FOR CONCRETE PRODUCTS
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
            <Image
              src="/service/isi-certification-concrete.png"
              alt="BIS ISI Mark for Concrete Products"
              width={420}
              height={520}
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 uppercase">
              What is BIS ISI Mark Certification for Concrete Products?
            </h2>

            <div className="w-full h-0.5 bg-gray-200 relative mb-4">
              <span className="absolute left-0 top-0 h-0.5 w-70 md:w-168 bg-[#0072b1]" />
            </div>

            <p className="text-gray-600 text-[15px] leading-6 text-justify pb-4">
              BIS ISI Mark certification for concrete products is a mandatory
              quality compliance requirement enforced under various Quality
              Control Orders (QCOs) issued by the Government of India. It
              ensures that concrete products conform to prescribed Indian
              Standards related to strength, durability, load-bearing capacity,
              and structural safety before they are manufactured, supplied, or
              used in construction projects.
            </p>

            <p className="text-gray-600 text-[15px] leading-6 text-justify pb-4">
              The ISI Mark signifies that concrete products have undergone
              conformity assessment, product testing, and factory inspection as
              per Bureau of Indian Standards (BIS) guidelines. BIS-certified
              concrete products are subject to continuous surveillance to ensure
              consistent quality and to prevent the use of substandard
              construction materials in public and private infrastructure.
            </p>

            <p className="text-gray-600 text-[15px] leading-6 text-justify">
              Commonly regulated concrete products include cement concrete
              blocks, paver blocks, precast concrete pipes, RCC pipes, concrete
              railway sleepers, precast slabs, and other structural concrete
              components used in buildings, roads, drainage, and infrastructure
              projects. BIS ISI Mark certification applies to both Indian and
              foreign manufacturers, and non-compliance may result in rejection
              at project sites, penalties, or prohibition on use in regulated
              construction works.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 md:px-6 py-12">
        <div className="max-w-7xl mx-auto md:px-6 pb-12">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Benefits of BIS ISI Mark Certification for Concrete Products
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-4">
            <span className="absolute left-0 top-0 h-0.5 w-30 md:w-178 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            BIS ISI Mark certification is a mandatory quality and safety
            compliance requirement for various concrete products notified under
            Quality Control Orders (QCOs) issued by the Government of India. ISI
            certification ensures structural reliability, durability, and
            conformity with Indian Standards for use in construction and
            infrastructure projects.
          </p>

          <div className="space-y-1">
            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                1. Mandatory Compliance for Construction and Infrastructure Use
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                BIS ISI certification is compulsory for concrete products such
                as cement concrete blocks, paver blocks, RCC pipes, precast
                concrete pipes, and other notified items. Without ISI
                certification, such products cannot be supplied to government
                projects or regulated construction works.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                2. Assured Strength, Durability, and Load-Bearing Performance
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                BIS-certified concrete products are tested for compressive
                strength, dimensional accuracy, water absorption, and
                durability. This ensures long service life and structural safety
                in buildings, roads, and drainage systems.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                3. Acceptance in Government and Institutional Projects
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                Government departments, PSUs, urban development authorities, and
                infrastructure agencies prefer or mandate ISI-marked concrete
                products for public works, housing projects, highways, and
                utilities.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                4. Competitive Advantage in Tenders and Large Projects
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                ISI Mark certification improves eligibility for government
                tenders and large construction contracts, giving manufacturers a
                competitive edge in regulated infrastructure and real estate
                markets.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                5. Reduced Legal, Structural, and Project Risk
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                Compliance with BIS standards minimizes risks related to
                structural failure, project rejection, penalties, and legal
                liability arising from the use of substandard concrete products.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-2 md:px-6 pb-12">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Documents Required for BIS ISI Certification for Concrete Products
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-30 md:w-200 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            To obtain BIS ISI Mark certification for concrete products,
            manufacturers must submit technical, production, and quality-related
            documents to demonstrate conformity with applicable Indian
            Standards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                1. Business & Plant Documents
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
                <li>Company incorporation or registration certificate.</li>
                <li>Manufacturing unit address proof.</li>
                <li>GST registration and PAN.</li>
                <li>Trade mark certificate (if applicable).</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                2. Concrete Product Details
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
                <li>Product description and dimensions.</li>
                <li>Applicable Indian Standard (IS Code).</li>
                <li>Concrete mix design and raw material details.</li>
                <li>Manufacturing process flow chart.</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                3. Manufacturing & Testing Infrastructure
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
                <li>Batching plant and molding machinery details.</li>
                <li>In-house testing equipment for concrete testing.</li>
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
            Process to Get BIS ISI Mark Certification for Concrete Products
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-3">
            <span className="absolute left-0 top-0 h-0.5 w-30 md:w-188 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            The BIS ISI certification process for concrete products follows a
            structured procedure involving application submission, factory
            inspection, and product testing. The timeline typically ranges from
            60 to 90 days for domestic manufacturers.
          </p>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-3">
              <li>
                <strong>Identify Applicable IS Code:</strong> Select the
                relevant Indian Standard for the concrete product.
              </li>
              <li>
                <strong>Online Application Submission:</strong> File the
                application on the BIS Manak Online portal with required
                documents.
              </li>
              <li>
                <strong>Factory Inspection:</strong> BIS officers inspect the
                manufacturing process, plant setup, and testing facilities.
              </li>
              <li>
                <strong>Sample Testing:</strong> Concrete samples are tested for
                strength, durability, and conformity with IS requirements.
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
            CONCRETE PRODUCTS UNDER BIS ISI CERTIFICATION
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
                {concreteProductRows.map((row, rowIndex) => (
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
            {concreteProductRows.map((row, rowIndex) => (
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
            BIS ISI Certification for Concrete Products – FAQs
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-5">
            <span className="absolute left-0 top-0 h-0.5 w-78 md:w-145 bg-[#0072b1]" />
          </div>

          <div className="space-y-6 text-gray-700 text-[15px] leading-6">
            <div>
              <strong>
                1. What is BIS ISI Mark certification for concrete products?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                BIS ISI Mark certification for concrete products is a mandatory
                quality compliance approval issued by the Bureau of Indian
                Standards. It confirms that concrete products meet applicable
                Indian Standards related to strength, durability, dimensions,
                and structural safety.
              </p>
            </div>

            <div>
              <strong>
                2. Is BIS ISI certification mandatory for all concrete products?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                No, BIS ISI certification is mandatory only for concrete
                products notified under Quality Control Orders (QCOs) issued by
                the Government of India. Products not covered under QCOs may not
                require ISI certification.
              </p>
            </div>

            <div>
              <strong>
                3. Which concrete products require BIS ISI certification?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                Common concrete products requiring ISI certification include
                cement concrete blocks, solid concrete blocks, paver blocks,
                precast concrete pipes, RCC pipes, kerb stones, and other
                precast concrete components used in construction and
                infrastructure projects.
              </p>
            </div>

            <div>
              <strong>
                4. Who can apply for BIS ISI certification for concrete
                products?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                Only manufacturers are eligible to apply for BIS ISI
                certification. Traders, suppliers, or contractors cannot apply
                unless they own and operate the concrete manufacturing plant.
                Foreign manufacturers must apply under the BIS FMCS scheme.
              </p>
            </div>

            <div>
              <strong>
                5. How long does BIS ISI certification take for concrete
                products?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                For domestic manufacturers, the BIS ISI certification process
                generally takes 60 to 90 days, depending on document readiness,
                factory inspection scheduling, and laboratory testing of
                concrete samples.
              </p>
            </div>

            <div>
              <strong>
                6. What is the validity of BIS ISI license for concrete
                products?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                BIS ISI licenses are usually granted for one year and can be
                renewed annually, subject to ongoing compliance with BIS
                surveillance, testing requirements, and payment of applicable
                fees.
              </p>
            </div>

            <div>
              <strong>
                7. Can one ISI license cover multiple concrete products or
                plants?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                An ISI license is factory-specific and product-specific.
                Multiple concrete products may be covered under one license only
                if they fall under the same Indian Standard and are manufactured
                at the same plant location.
              </p>
            </div>

            <div>
              <strong>
                8. What happens if concrete products are supplied without ISI
                certification?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                Supplying or using BIS-notified concrete products without ISI
                certification can result in rejection at construction sites,
                penalties, project blacklisting, cancellation of government
                contracts, and legal action under the BIS Act, 2016.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
