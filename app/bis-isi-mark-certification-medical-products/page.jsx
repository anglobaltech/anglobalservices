import Image from "next/image";
import Link from "next/link";

export const revalidate = 86400

export const metadata = {
  title:
    "BIS ISI Certification for Medical Products & Devices | AN Global Services",

  description:
    "Get BIS ISI Certification for medical products and medical devices in India. Expert assistance for documentation, testing, factory audit, ISI license approval, and compliance under BIS Quality Control Orders. Trusted, fast, and hassle-free certification services.",

  keywords: [
    "BIS ISI Certification",
    "BIS ISI Certification for Medical Products",
    "BIS Certification for Medical Devices",
    "ISI Mark for Medical Products",
    "BIS ISI Mark India",
    "Medical Products BIS Certification",
    "Medical Devices ISI Mark",
    "BIS QCO Medical Products",
    "ISI Certification Scheme I",
    "BIS Certification Consultant India",
    "ISI Mark Registration for Medical Products",
    "BIS License for Medical Devices",
    "BIS Factory Audit Medical Products",
    "BIS Testing for Medical Devices",
    "AN Global Services BIS Certification",
  ],

  openGraph: {
    title: "BIS ISI Mark Certification for Medical Products & Devices in India",
    description:
      "Apply for BIS ISI Mark Certification for medical products and medical devices with expert support for testing, documentation, factory inspection, and ISI license approval under BIS Quality Control Orders.",
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

const products = [
  {
    id: 1,
    name: "Disposable baby diapers",
    standard: "IS 17509: 2021",
    link: "isi-products/isi-mark-certification-for-disposable-baby-diaper-17509",
  },
  {
    id: 2,
    name: "Disposable adult diapers",
    standard: "IS 17508: 2020",
    link: "isi-products/isi-mark-certification-for-disposable-adult-diaper-17508",
  },
  {
    id: 3,
    name: "Sanitary napkins",
    standard: "IS 5405: 2019",
    link: "isi-products/isi-mark-certification-for-sanitary-napkin-5405",
  },
  {
    id: 4,
    name: "Surgical Face Masks",
    standard: "IS 16289: 2014",
    link: "isi-products/isi-certification-for-surgical-face-masks-16289",
  },
  {
    id: 5,
    name: "Respiratory Protective Devices – Filtering Half Masks",
    standard: "IS 9473: 2002",
    link: "isi-products/isi-certification-for-respiratory-protective-devices-filtering-half-masks-9473",
  },
  {
    id: 6,
    name: "Disposable Surgical Rubber Gloves",
    standard: "IS 13422: 1992",
    link: "isi-products/isi-certification-for-disposable-surgical-rubber-gloves-13422",
  },
  {
    id: 7,
    name: "Medical Textile Bedsheets and Pillow Covers",
    standard: "IS 17630: 2021",
    link: "isi-products/isi-certificate-medical-textile-bedsheet-and-pillow-cover"
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

export default function MedicalProductsISIPage() {
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
          BIS ISI MARK CERTIFICATION FOR MEDICAL PRODUCTS
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 items-start">
          <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
            <Image
              src="/service/isi-certification-medical-products.png"
              alt="BIS ISI Mark Certification for Medical Products"
              width={420}
              height={520}
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 uppercase">
              What is BIS ISI Mark Certification for Medical Products?
            </h2>

            <div className="w-full h-0.5 bg-gray-200 relative mb-4">
              <span className="absolute left-0 top-0 h-0.5 md:w-163 w-68 bg-[#0072b1]" />
            </div>

            <p className="text-gray-600 text-[15px] leading-6 text-justify pb-4">
              BIS ISI Mark Certification for medical products is a mandatory
              product certification scheme governed by the Bureau of Indian
              Standards (BIS) under Scheme-I of the BIS Conformity Assessment
              Regulations. It ensures that medical products conform to the
              applicable Indian Standards (IS) specified under notified Quality
              Control Orders (QCOs).
            </p>

            <p className="text-gray-600 text-[15px] leading-6 text-justify pb-4">
              Under the ISI Mark scheme, manufacturers are required to
              demonstrate compliance through product testing, implementation of
              an effective quality control system, and successful factory
              inspection conducted by BIS officials. Only after meeting these
              requirements is a Certification Marks License (CM/L) granted,
              allowing the use of the ISI Mark on the product.
            </p>

            <p className="text-gray-600 text-[15px] leading-6 text-justify">
              BIS ISI certification applies to a wide range of medical products
              such as surgical gloves, face masks, sanitary products, disposable
              medical items, and other notified healthcare products. The
              certification is mandatory for both Indian and foreign
              manufacturers supplying medical products to the Indian market and
              helps ensure patient safety, regulatory compliance, and consistent
              product quality.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-1 md:px-6 py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 pb-12">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Benefits of BIS ISI Certification for Medical Products
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 md:w-160 w-65 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            BIS ISI Certification is a mandatory quality conformity scheme for
            notified medical products in India. It ensures that medical devices
            conform to applicable Indian Standards for safety, performance, and
            reliability. Apart from statutory compliance, ISI certification
            offers significant commercial, operational, and credibility benefits
            for manufacturers.
          </p>

          <div className="space-y-1">
            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                1. Mandatory Regulatory Compliance
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                BIS ISI Certification is legally required for specified medical
                products before manufacturing or sale in India. Non-certified
                products are subject to penalties, seizure, and regulatory
                action by authorities.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                2. Assured Quality and Patient Safety
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                ISI-certified medical products undergo rigorous testing as per
                Indian Standards to ensure quality, safety, and consistent
                performance, reducing risks of malfunction and clinical hazards.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                3. Increased Trust and Market Acceptance
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                Hospitals, healthcare institutions, and procurement agencies
                prefer ISI-certified products due to assured compliance with
                national quality standards, improving brand credibility.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                4. Eligibility for Government Tenders
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                BIS ISI Certification is mandatory for participation in most
                government tenders, PSU procurements, and public healthcare
                projects, enabling access to large institutional buyers.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                5. Reduced Legal and Business Risk
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                Compliance with ISI standards minimizes risks related to product
                recalls, legal liability, and reputational damage, ensuring
                long-term business sustainability.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 pb-12">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Documents Required for BIS ISI Certification for Medical Products
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 md:w-195 w-30 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            To obtain BIS ISI Certification under Scheme I, manufacturers must
            submit documents related to business registration, product details,
            manufacturing infrastructure, and quality control systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                1. Business & Company Documents
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
                <li>Certificate of Incorporation / Partnership Deed</li>
                <li>Factory address proof (License / Lease Agreement)</li>
                <li>GST registration and PAN card</li>
                <li>MSME / Udyam registration (if applicable)</li>
                <li>Trademark certificate (if applicable)</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                2. Product Details
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
                <li>Product description with model and variants</li>
                <li>Technical drawings or specifications</li>
                <li>List of raw materials and components</li>
                <li>Manufacturing process flow chart</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                3. Factory & Quality Control Details
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
                <li>Manufacturing machinery list</li>
                <li>In-house testing equipment details</li>
                <li>Calibration certificates from NABL labs</li>
                <li>Quality control staff details</li>
                <li>Factory layout plan</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                4. Application & Authorization Documents
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
                <li>Online BIS application (Form V)</li>
                <li>Authorization letter (if applicable)</li>
                <li>AIR details for foreign manufacturers</li>
                <li>Product test reports from BIS-recognized labs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Process to Get BIS ISI Mark Certification on Medical Products
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 md:w-180 w-30 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            The BIS ISI Mark certification process includes application
            submission, factory inspection, and product testing. The process
            generally takes 60 to 90 days for domestic manufacturers.
          </p>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-3">
              <li>
                <strong>Selection of Applicable Indian Standard:</strong>{" "}
                Identify the correct IS Code applicable to the medical product.
              </li>
              <li>
                <strong>Online Application Submission:</strong> Apply through
                the BIS Manak Online Portal with required documents.
              </li>
              <li>
                <strong>Nomination of Quality Control Personnel:</strong>{" "}
                Appoint a qualified technical person for quality monitoring.
              </li>
              <li>
                <strong>Factory Inspection by BIS:</strong> BIS officials
                inspect the manufacturing unit and testing facilities.
              </li>
              <li>
                <strong>Sample Testing:</strong> Samples are tested in
                BIS-recognized laboratories for conformity.
              </li>
              <li>
                <strong>Grant of ISI License:</strong> Upon compliance, BIS
                issues the ISI Certification Marks License (CM/L).
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 md:px-6 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            MEDICAL PRODUCTS UNDER BIS ISI CERTIFICATION SERVICE
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-4">
            <span className="absolute left-0 top-0 h-0.5 md:w-157 w-70 bg-[#0072b1]" />
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
