import Image from "next/image";
import Link from "next/link";

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
    id: 5,
    name: "Surgical Face Masks",
    standard: "IS 16289: 2014",
    link: "isi-products/isi-certification-for-surgical-face-masks-16289",
},
  {
    id: 5,
    name: "Disposable underpads (bed protectors)",
    standard: "IS 17379: 2020",
    link: "/bis-isi-mark-certification-medical-products",
  },
  {
    id: 6,
    name: "Feminine hygiene pants",
    standard: "IS 17509 (Part 2): 2021",
    link: "/bis-isi-mark-certification-medical-products",
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

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
            <Image
              src="/service/isi-certification-medical-products.png"
              alt="BIS ISI Mark for Medical Products"
              width={420}
              height={520}
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 uppercase ">
              What is BIS ISI Mark Certification for Medical Products?
            </h2>
            <div className="w-full h-0.5 bg-gray-200 relative mb-4">
              <span className="absolute left-0 top-0 h-0.5 w-163 bg-[#0072b1]" />
            </div>

            <p className="text-gray-600 text-[15px] leading-6 text-justify pb-4">
              BIS ISI Mark certification for medical products is a mandatory
              quality compliance requirement introduced under various Quality
              Control Orders issued by the Government of India. It ensures that
              medical products comply with applicable Indian Standards for
              safety, performance, hygiene, and reliability before they are
              manufactured, sold, or imported into the Indian market.
            </p>

            <p className="text-gray-600 text-[15px] leading-6 text-justify pb-4">
              The ISI Mark signifies that a medical product has undergone
              testing, factory inspection, and conformity assessment as per
              Bureau of Indian Standards (BIS) guidelines. Certified products
              are subject to ongoing surveillance to maintain consistent
              quality, helping prevent substandard medical supplies from
              reaching hospitals, clinics, and patients.
            </p>

            <p className="text-gray-600 text-[15px] leading-6 text-justify">
              Commonly regulated medical products include surgical instruments,
              gloves, syringes, needles, hospital furniture, disposable medical
              items, and select medical devices used in routine healthcare
              settings. BIS ISI Mark certification applies to both Indian and
              foreign manufacturers supplying medical products to India, and
              compliance is essential to avoid legal penalties and market
              restrictions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 md:px-6 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 pb-12">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Benefits of BIS CRS Registration for Medical Products
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-160 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            BIS CRS (Compulsory Registration Scheme) registration is a mandatory
            regulatory requirement in India for medical products that contain
            electronic or electrical components. While the ISI Mark scheme
            applies to conventional medical items, CRS registration specifically
            covers electronic medical devices and components regulated under the
            Electronics and IT Goods (Requirement for Compulsory Registration)
            Order. Apart from legal compliance, CRS registration offers multiple
            operational and commercial benefits for manufacturers and importers.
          </p>

          <div className="space-y-1">
            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                1. Mandatory Legal Compliance and Market Access
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                BIS CRS registration provides the legal authority to
                manufacture, import, and sell notified electronic medical
                products in India. Products covered under CRS cannot be marketed
                without a valid registration number. Compliance helps avoid
                penalties, product seizure, customs detention, and regulatory
                action by Indian authorities.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                2. Enhanced Safety and Quality Assurance
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                Medical products registered under BIS CRS are tested in
                BIS-recognized laboratories for electrical safety, performance,
                and reliability. Compliance with Indian Standards reduces the
                risk of electrical hazards, malfunction, and inconsistent
                performance, ensuring patient safety and reliable clinical
                outcomes.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                3. Increased Trust Among Healthcare Professionals
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                Doctors, hospitals, diagnostic labs, and procurement teams
                prefer CRS-registered medical products due to assured compliance
                with Indian safety norms. The BIS Standard Mark serves as proof
                of authenticity, helping eliminate low-quality or non-compliant
                electronic medical equipment from healthcare environments.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                4. Competitive Advantage in Tenders and Procurement
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                Many government tenders, public healthcare institutions, and
                large private hospitals mandate BIS CRS registration as an
                eligibility requirement. Certified products gain priority in
                institutional procurement, organized retail channels, and
                e-commerce platforms that restrict listings to compliant
                electronic medical devices.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                5. Reduced Legal and Business Risk
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                CRS registration helps manufacturers and importers minimize
                legal, financial, and reputational risks. Adherence to BIS
                standards lowers the chances of product failure, recalls, and
                liability claims. In case of inspections or investigations, a
                valid CRS registration demonstrates due diligence and regulatory
                compliance.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 pb-12">
          {/* Heading */}
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Documents Required for BIS ISI Certification for Medical Products
          </h2>

          {/* Underline */}
          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-195 bg-[#0072b1]" />
          </div>

          {/* Intro */}
          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            For obtaining BIS ISI Certification (Scheme I) for medical products,
            manufacturers must submit basic business, product, and
            factory-related documents. These documents help BIS verify the
            company’s legal status, production capability, and product quality.
          </p>

          {/* Grid: 2 per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                1. Business & Company Documents
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
                <li>
                  Company registration proof (Incorporation / Partnership).
                </li>
                <li>
                  Factory address proof (Factory License / Rent Agreement).
                </li>
                <li>GST registration and PAN card.</li>
                <li>MSME / Udyam certificate (if available).</li>
                <li>Trademark certificate, if applicable.</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                2. Product Details
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
                <li>Product description with model, size, or type.</li>
                <li>Product drawings or design layout (if required).</li>
                <li>List of raw materials and components.</li>
                <li>Manufacturing process flow chart.</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                3. Factory & Quality Control Details
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
                <li>List of manufacturing machinery.</li>
                <li>List of in-house testing equipment.</li>
                <li>Calibration certificates from NABL labs.</li>
                <li>Details of quality control staff.</li>
                <li>Factory layout plan.</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                4. Application & Authorization Documents
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
                <li>Online BIS application (Form V).</li>
                <li>Authorization letter, if applicable.</li>
                <li>AIR details for foreign manufacturers.</li>
                <li>Product test reports from BIS-recognized lab.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Heading */}
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Process to get BIS ISI Mark Certification on Medical Products
          </h2>

          {/* Underline */}
          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-180 bg-[#0072b1]" />
          </div>

          {/* Intro */}
          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            The BIS ISI Mark certification process for medical products follows
            a structured procedure that includes application filing, factory
            inspection, and product testing. For domestic manufacturers, the
            entire process generally takes 60 to 90 days, depending on
            inspection schedules and laboratory test results.
          </p>

          {/* Process Steps */}
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-3">
              <li>
                <strong>Selection of Applicable Indian Standard:</strong>{" "}
                Identify the correct IS Code relevant to the medical product,
                such as IS 3055 for clinical thermometers or IS 7620 for
                diagnostic X-ray equipment.
              </li>
              <li>
                <strong>Online Application Submission:</strong> File the
                application through the BIS Manak Online portal along with
                required documents, product details, and factory layout.
              </li>
              <li>
                <strong>Appointment of Quality Control Personnel:</strong>{" "}
                Nominate a qualified technical person responsible for in-house
                testing and quality monitoring.
              </li>
              <li>
                <strong>Factory Inspection by BIS:</strong> A BIS officer visits
                the manufacturing unit to verify production processes,
                machinery, testing facilities, and quality control systems.
              </li>
              <li>
                <strong>Sample Drawing and Testing:</strong> Product samples are
                sealed during inspection. One set is tested in-house and another
                is sent to a BIS-recognized laboratory for independent testing.
              </li>
              <li>
                <strong>Grant of ISI License:</strong> If test results conform
                to the applicable IS and the inspection is satisfactory, BIS
                grants the Certification Marks License (CM/L).
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 md:px-6 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            MEDICAL PRODUCTS UNDER BIS CRS CERTIFICATION SERVICE
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-4">
            <span className="absolute left-0 top-0 h-0.5 w-157 bg-[#0072b1]" />
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
