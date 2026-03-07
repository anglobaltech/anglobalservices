import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "BIS ISI Certification for Steel Products | AN Global Services",

  description:
    "Get BIS ISI Certification for steel products in India. Expert assistance for documentation, product testing, factory inspection, ISI license approval, and compliance with BIS Quality Control Orders for steel materials. Trusted, fast, and hassle-free BIS certification services.",

  keywords: [
    "BIS ISI Certification for Steel Products",
    "BIS Certification for Steel",
    "ISI Mark for Steel Products",
    "BIS ISI Mark India",
    "Steel Products BIS Certification",
    "ISI Certification for Steel",
    "BIS QCO Steel Products",
    "BIS ISI Scheme I Steel",
    "ISI License for Steel Products",
    "BIS Factory Audit for Steel",
    "BIS Testing for Steel Products",
    "ISI Mark Registration for Steel",
    "BIS Certification Consultant India",
    "AN Global Services BIS Certification",
  ],

  openGraph: {
    title: "BIS ISI Certification for Steel Products in India",
    description:
      "Apply for BIS ISI Mark Certification for steel products with expert support for testing, documentation, factory inspection, and ISI license approval under BIS Quality Control Orders.",
    url: "https://www.anglobalservices.com/bis-isi-certification-steel-products",
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
      "https://www.anglobalservices.com/bis-isi-certification-steel-products",
  },
};

const products = [
  {
    id: 1,
    name: "Steel Tubes, Tubulars and Other Wrought Steel Fittings – Part 1",
    standard: "IS 1239 (Part 1): 2014",
    link: "/isi-products/isi-certification-for-steel-tubes-tubulars-part-1-1239",
  },

  {
    id: 2,
    name: "Hot Rolled Steel Plates",
    standard: "IS 2062: 2011",
    link: "/bis-isi-certification-steel-products",
  },
  {
    id: 3,
    name: "Steel Pipes for Water Supply",
    standard: "IS 3589: 2001",
    link: "/isi-products/isi-certification-for-steel-pipes-for-water-sewage-3589",
  },
  {
    id: 4,
    name: "Steel Wire Ropes for General Engineering Purposes",
    standard: "IS 2266: 2019",
    link: "/isi-products/isi-certificate-steel-wire-ropes-for-general-engineering-purposes",
  },
 {
  id: 5,
  name: "Adjustable Steel Shelving Cabinets",
  standard: "IS 3312",
  link: "/isi-products/isi-certificate-adjustable-steel-shelving-cabinets",
},
  {
  id: 6,
  name: "Stainless Steel Butt Hinges",
  standard: "IS 12817",
  link: "/isi-products/isi-certificate-stainless-steel-butt-hinges"
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

export default function ISISteelProductsPage() {
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
              BIS ISI Certification For Steel Products
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-1">
          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src="/service/isi-certification-steelproducts.png"
              alt="ISI Mark Certification"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-xl font-bold">BIS CERTIFICATION FOR STEEL</h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-4">
            <span className="absolute left-0 top-0 h-0.5 w-78 bg-[#0072b1]" />
          </div>
          <div>
            <p className="text-gray-500 text-[15px] pb-5">
              BIS (ISI) Certification for Steel Products is a mandatory quality
              certification issued by the Bureau of Indian Standards (BIS). This
              certification ensures that steel products manufactured or imported
              into India conform to the applicable Indian Standards (IS) related
              to quality, safety, strength, and performance.
            </p>

            <p className="text-gray-500 text-[15px] pb-5">
              Steel products play a critical role in infrastructure,
              construction, manufacturing, and engineering sectors. Therefore,
              BIS mandates ISI Certification for selected steel products to
              safeguard public safety, improve product reliability, and prevent
              the circulation of sub-standard materials in the Indian market.
              Manufacturers must obtain BIS ISI Certification before selling or
              distributing notified steel products in India.
            </p>

            <p className="text-gray-500 text-[15px] pb-5">
              BIS (ISI) Certification for steel products is not only a legal
              requirement but also a mark of quality, safety, and trust. It
              helps manufacturers gain credibility, expand market access, and
              comply with Indian regulatory standards. With proper
              documentation, testing facilities, and expert guidance, the
              certification process can be completed smoothly and efficiently.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Benefits of BIS Certification for Steel Products
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 md:w-140 w-40 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            BIS certification for steel products under the ISI Mark Scheme is a
            mandatory regulatory requirement in India for several iron and steel
            materials notified by the Bureau of Indian Standards. Steel products
            used in construction, infrastructure, engineering, and manufacturing
            must comply with applicable Indian Standards to ensure safety,
            strength, and durability. Beyond regulatory compliance, BIS
            certification provides significant commercial, quality, and market
            advantages to manufacturers and importers.
          </p>

          <div className="space-y-1">
            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                1. Mandatory Legal Compliance and Market Authorization
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                BIS certification authorizes manufacturers and importers to
                legally manufacture, sell, and distribute notified steel
                products in India. Steel items such as TMT bars, structural
                steel, pipes, and sheets cannot be marketed without a valid ISI
                Mark. Compliance helps avoid penalties, product bans, seizure,
                and rejection at customs or project sites.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                2. Assured Strength, Safety, and Quality
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                BIS-certified steel products are tested in BIS-recognized
                laboratories for chemical composition, mechanical strength,
                ductility, and performance parameters as per Indian Standards.
                Certification ensures consistent quality, structural safety, and
                long-term durability in construction, industrial, and
                infrastructure applications.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                3. Increased Trust Among Builders and Engineers
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                Builders, contractors, engineers, and government authorities
                strongly prefer BIS-certified steel due to guaranteed compliance
                with national safety norms. The ISI Mark acts as proof of
                authenticity and quality, helping eliminate substandard or
                counterfeit steel products from critical construction and
                infrastructure projects.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                4. Competitive Advantage in Government and Infrastructure
                Projects
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                Many government tenders, public sector projects, and large
                infrastructure developments mandate BIS certification for steel
                products. ISI-marked steel gains preference in public
                procurement, real estate development, EPC contracts, and
                large-scale industrial projects.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                5. Reduced Legal, Financial, and Reputational Risk
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                BIS certification minimizes the risk of structural failures,
                disputes, recalls, and legal liabilities arising from
                poor-quality steel. Compliance with Indian Standards
                demonstrates due diligence and strengthens brand credibility
                during inspections, audits, and quality assessments by
                regulatory authorities.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="mb-6">
            <h1 className="text-xl font-semibold text-gray-900 uppercase">
              Documents Required for BIS (ISI) Certification for Steel Products
            </h1>
            <div className=" h-0.5 w-full bg-gray-200 relative">
              <span className="absolute left-0 top-0 h-0.5 md:w-190 w-30 bg-[#1f6ed5]"></span>
            </div>
          </div>

          <p className="text-gray-600 text-[15px] md:text-[16px] leading-8 max-w-5xl mb-8">
            To obtain BIS (ISI) Certification for steel products, manufacturers
            must submit the following documents to demonstrate compliance with
            applicable Indian Standards and quality requirements:
          </p>

          <ol className="list-decimal pl-6 space-y-4 text-gray-500 text-[15px] md:text-[15px] leading-4 max-w-5xl">
            <li>
              <span className="font-medium text-gray-800">
                Company Incorporation Documents:
              </span>{" "}
              Certificate of Incorporation or Business Registration proof.
            </li>

            <li>
              <span className="font-medium text-gray-800">
                Factory Address Proof & Layout Plan:
              </span>{" "}
              Details of manufacturing area, testing laboratory, and storage
              facilities.
            </li>

            <li>
              <span className="font-medium text-gray-800">
                Manufacturing Process Flow Chart:
              </span>{" "}
              Step-by-step process from raw material procurement to finished
              product.
            </li>

            <li>
              <span className="font-medium text-gray-800">
                List of Manufacturing Machinery & Equipment:
              </span>{" "}
              Details of machines used for steel production and processing.
            </li>

            <li>
              <span className="font-medium text-gray-800">
                In-house Laboratory Details:
              </span>{" "}
              List of testing equipment as prescribed in the relevant Indian
              Standard.
            </li>

            <li>
              <span className="font-medium text-gray-800">
                Quality Control Manual & Test Records:
              </span>{" "}
              Procedures followed for routine quality checks and inspections.
            </li>

            <li>
              <span className="font-medium text-gray-800">
                Raw Material Test Certificates:
              </span>{" "}
              Chemical and mechanical test reports of raw materials.
            </li>

            <li>
              <span className="font-medium text-gray-800">
                Product Test Report:
              </span>{" "}
              Issued by a BIS-recognized or BIS-approved laboratory.
            </li>

            <li>
              <span className="font-medium text-gray-800">
                Authorization Letter from Manufacturer:
              </span>{" "}
              Required if the application is filed through a consultant or
              representative.
            </li>

            <li>
              <span className="font-medium text-gray-800">
                Trademark Registration Certificate:
              </span>{" "}
              Or authorization letter to use the brand name, if applicable.
            </li>
          </ol>
        </div>
      </section>

      <section className="w-full bg-[#e6ebef] py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900 uppercase">
              Process Of BIS Certification For Steel Products
            </h2>

            <div className=" h-0.5 w-full bg-gray-200 relative">
              <span className="absolute left-0 top-0 h-0.5 md:w-140 w-45 bg-[#1f6ed5]"></span>
            </div>

            <p className="mt-6 text-gray-500 text-[15px] leading-7">
              As per the Quality Control Orders (QCOs) issued by the Government
              of India and implemented by the Bureau of Indian Standards (BIS),
              several steel products have been brought under mandatory BIS (ISI)
              certification. Manufacturers must first identify the applicable
              Indian Standard (IS) relevant to their specific steel product
              category. Once the applicable Indian Standard is identified, the
              manufacturer must carefully study the standard and ensure that the
              steel product fully complies with the prescribed quality, safety,
              chemical, and mechanical requirements. Additionally, the
              manufacturing unit must be equipped with the required production
              machinery and in-house testing facilities as specified in the
              relevant Indian Standard.
            </p>

            <ul className="mt-6 space-y-1 text-gray-700 text-[15px] list-disc pl-6">
              <li>
                <strong>Step 1:</strong> Preparation of documentation prior to
                submission of the application for BIS (ISI) Certification for
                steel products.
              </li>

              <li>
                <strong>Step 2:</strong> Submission of the BIS application along
                with the requisite documents through the BIS Manakonline portal.
              </li>

              <li>
                <strong>Step 3:</strong> Scrutiny of the application and
                documents by BIS officials for compliance with applicable Indian
                Standards.
              </li>

              <li>
                <strong>Step 4:</strong> Nomination of BIS auditor for
                inspection of the manufacturing unit.
              </li>

              <li>
                <strong>Step 5:</strong> Inspection and audit of the steel
                manufacturing premises, machinery, and in-house testing
                facilities by the BIS auditor.
              </li>

              <li>
                <strong>Step 6:</strong> Drawing of product samples during
                factory inspection for independent testing.
              </li>

              <li>
                <strong>Step 7:</strong> Testing of drawn samples in a
                BIS-recognized or BIS-approved laboratory as per the relevant
                Indian Standard.
              </li>

              <li>
                <strong>Step 8:</strong> Grant of BIS (ISI) Certification
                license to the steel product manufacturer upon successful
                compliance.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 md:px-6 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            STEEL PRODUCTS UNDER BIS CRS / ISI CERTIFICATION SERVICE
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-4">
            <span className="absolute left-0 top-0 h-0.5 md:w-157 w-75 bg-[#0072b1]" />
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
    </main>
  );
}
