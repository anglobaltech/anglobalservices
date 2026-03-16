import Image from "next/image";
import Link from "next/link";

export const revalidate = 86400

export const metadata = {
  title: "BIS CRS Registration for Electronic Products | AN Global Services",

  description:
    "AN Global Services offers BIS CRS registration for electronic & IT products in India. End-to-end support for testing, documentation, application & BIS compliance. Serving Noida, Delhi NCR & PAN India.",

  keywords: [
    "BIS CRS registration India",
    "BIS CRS registration Noida",
    "BIS CRS registration Delhi",
    "BIS CRS consultant Delhi NCR",
    "BIS registration for electronic products",
    "CRS certification India",
    "BIS approval for electronics",
    "BIS CRS testing and certification",
    "BIS CRS consultant India",
    "Electronic product BIS registration",
    "BIS CRS compliance services",
    "CRS scheme registration India",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "AN Global Services" }],
};

const products = [
  [
    "Trimethyl Phosphite Technical Grade-IS 17412:2020",
    "Cotton Bales-IS 12171:2019",
  ],
  [
    "Ortho Phosphoric Acid-IS 798 : 2020",
    "Low - Voltage switchgear and controlgear: electrical emergency stop devices with mechanical latching function-IS/IEC 60947-5-5 : 2016",
  ],
  [
    "Low - Voltage switchgear and controlgear proximity switches-IS/IEC 60947-5-2 : 2007",
    "Low - Voltage switchgear and controlgear: electromechanical control circuit devices-IS/IEC 60947-5-1 : 2009",
  ],
  [
    "Low - Voltage switchgear and controlgear: a.c. semiconductor motor controllers and contactors for non - Motor loads-IS/IEC 60947-4-3 : 2014",
    "Low - Voltage switchgear and controlgear: a.c semiconductor motor controllers and starters-IS/IEC 60947-4-2 : 2011",
  ],
  [
    "Low - Voltage switchgear and controlgear: electromechanical contactors and motor - Starters-IS/IEC 60947-4-1 : 2012",
    "Low - Voltage switchgear and controlgear: switches, disconnectors, switch disconnectors and fuse - Combination units-IS/IEC 60947-3 : 2012",
  ],
  [
    "Low - Voltage switchgear and controlgear: Circuit - Breakers-IS/IEC 60947-2 : 2016",
    "Bluetooth Speakers-IS 616 : 2017",
  ],
  [
    "Dimmers for LED products-IS 60669-2-1: 2008",
    "Smart Speakers (with and without Display)-IS 616 : 2017",
  ],
  ["Webcam (Finished Product)-IS 616 : 2017", "Video Camera-IS 616 : 2017"],
  [
    "Digital Camera-IS 13252 (Part 1) : 2010",
    "Wireless Microphone-IS 616 : 2017",
  ],
  [
    "Rice Cooker-IS 302-2-15 : 2009",
    "Television other than Plasma/ LCD/LED TVs-IS 616 : 2017",
  ],
  [
    "Standalone SMPS with output voltage 48V (max)-IS 13252 (Part 1) : 2010",
    "Electronic Musical System below 200 Watts-IS 616 : 2017",
  ],
  [
    "USB Type External SSD (>256GB)-IS 13252 (Part 1) : 2010",
    "Wireless Headphone and Earphone-IS 616 : 2017",
  ],
  [
    "USB Type External HDD-IS 13252 (Part 1) : 2010",
    "Automatic Teller Cash Dispensing Machines-IS 13252 (Part 1) : 2010",
  ],
  ["Induction Stove-IS 302-2-6 : 2009", "Keyboard-IS 13252 (Part 1) : 2010"],
  [
    "Lighting Chain (Rope Lights)-IS 10322 (Part 5/Sec 9) : 2017",
    "Independent LED Modules for General Lighting-IS 16103 (Part 1) : 2012",
  ],
  [
    "Storage Battery-IS 16270 : 2014",
    "Utility-Interconnected Photovoltaic Inverters-IS 16221 (Part 2) : 2015 & IS 16169 : 2014",
  ],
  [
    "Power Inverters for PV system-IS 16221 (Part 2) : 2015",
    "Thin-Film Terrestrial PV Modules-IS 16077 : 2013 / IEC 61646 : 2008",
  ],
  [
    "Crystalline Silicon PV Modules-IS 14286 : 2010",
    "Smart Watches-IS 13252 (Part 1) : 2010",
  ],
  [
    "USB Barcode / Iris / Fingerprint Scanners-IS 13252 (Part 1) : 2010",
    "Adapters for Household Appliances-IS 302 (Part 1) : 2008",
  ],
  [
    "CCTV Cameras & Recorders-IS 13252 (Part 1) : 2010",
    "Visual Display Units upto 32”-IS 13252 (Part 1) : 2010",
  ],
  [
    "Plasma/LCD/LED TVs upto 32”-IS 616 : 2010",
    "UPS/Inverters ≤10kVA-IS 16242 (Part 1) : 2014",
  ],
  [
    "LED Luminaires for Emergency Lighting-IS 10322 (Part 5/Sec 8) : 2013",
    "LED Lighting Chains-IS 10322 (Part 5/Sec 7) : 2013",
  ],
  [
    "LED Hand Lamps-IS 10322 (Part 5/Sec 6) : 2013",
    "LED Flood Lights-IS 10322 (Part 5/Sec 5) : 2013",
  ],
  [
    "LED Street Lights-IS 10322 (Part 5/Sec 3) : 2012",
    "Recessed LED Luminaires-IS 10322 (Part 5/Sec 2) : 2012",
  ],
  [
    "Mobile Phones-IS 13252 (Part 1) : 2010*",
    "Power Banks-IS 13252 (Part 1) : 2010*",
  ],
  [
    "Set Top Box-IS 13252 (Part 1) : 2010*",
    "Laptops/Notebook/Tablet-IS 13252 (Part 1) : 2010*",
  ],
  ["Microwave Ovens-IS 302-2-25 : 2014*", "Electronic Games-IS 616 : 2010*"],
  [
    "Printers & Plotters-IS 13252 (Part 1) : 2010*",
    "Automatic Data Processing Machines-IS 13252 (Part 1) : 2010*",
  ],
  [" etc."],
];

export default function BISCRSRegistrationElectronicProducts() {
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
              BIS (CRS) REGISTRATION FOR ELECTRONIC PRODUCTS
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/bis-crs-registration-services.png"
                alt="BIS Certification"
                width={420}
                height={520}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 ">
            <div>
              <h2 className="text-xl font-bold text-gray-900">INTRODUCTION</h2>
              <div className="w-full h-0.5 bg-gray-200 relative mb-3">
                <span className="absolute left-0 top-0 h-0.5 w-40 bg-[#0072b1]"></span>
              </div>
              <p className="text-gray-500 text-[15px] leading-6 text-justify">
                BIS (Bureau of Indian Standards) is the National Standards Body
                of India, responsible for developing and implementing standards
                to ensure the quality, safety, and reliability of consumer
                products. Under the Compulsory Registration Scheme (CRS),
                specific electronic and information technology products must
                comply with prescribed Indian Standards before they can be
                manufactured, imported, or sold in the Indian market. BIS CRS
                Registration is a mandatory safety certification for electronic
                products notified by the Government of India. Only products that
                have been successfully tested in BIS-recognized laboratories and
                approved by BIS are permitted to bear the BIS Standard Mark with
                a unique Registration Number (R-number), making them legally
                eligible for sale in India.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                HOW TO GET BIS CRS REGISTRATION?
              </h2>
              <div className="w-full h-0.5 bg-gray-200 relative mb-4">
                <span className="absolute left-0 top-0 h-0.5 w-95 bg-[#0072b1]"></span>
              </div>
              <p className="text-gray-500 text-[15px] leading-6 text-justify">
                BIS CRS Registration is granted by the Bureau of Indian
                Standards after successful safety testing of the electronic
                product in accordance with the applicable Indian Standard and
                submission of all required documents through the BIS online
                portal. The CRS scheme is based on a self-declaration of
                conformity, where the manufacturer declares compliance after
                testing. The registration, once granted, is valid for two years
                and can be renewed thereafter, subject to continued with BIS
                requirements.
              </p>
              <p className="text-gray-500 text-[15px] leading-6 mb-4">
                We have also explained the CRS registration process, documents,
                and timelines in detail in our blog:
                <Link
                  href="/blogs/how-to-get-bis-crs-certification-for-electronic-products"
                  className="text-[#0072b1] font-medium ml-1"
                >
                  Complete Guide to BIS CRS Registration
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 pb-14">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
            Benefits of BIS CRS Registration on Products
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-4">
            <span className="absolute left-0 top-0 h-0.5 w-140 bg-[#0072b1]"></span>
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            Obtaining BIS Registration under the Compulsory Registration Scheme
            (CRS) is more than a statutory requirement. It plays a vital role in
            ensuring product safety, improving market acceptance, and
            strengthening business credibility across the Indian electronics
            ecosystem.
          </p>

          {/* Benefit Blocks */}
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-gray-900">
                1. Legal Compliance & Market Entry
              </h3>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600 text-[15px] leading-6">
                <li>
                  Mandatory compliance for notified electronic and IT products
                  before manufacturing, importing, or selling in India.
                </li>
                <li>
                  Prevents Customs detention, shipment rejection, and regulatory
                  penalties.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                2. Enhanced Brand Trust & Credibility
              </h3>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600 text-[15px] leading-6">
                <li>
                  BIS Standard Mark with R-number serves as visible proof of
                  safety and quality compliance.
                </li>
                <li>
                  Builds consumer confidence and distinguishes products from
                  unregulated alternatives.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                3. Reduced Risk & Legal Liability
              </h3>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600 text-[15px] leading-6">
                <li>
                  Mandatory testing minimizes risks such as overheating,
                  electrical failure, and safety hazards.
                </li>
                <li>
                  Reduces exposure to product recalls, legal disputes, and
                  financial losses.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                4. Competitive Advantage
              </h3>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600 text-[15px] leading-6">
                <li>
                  Required for listing products on major e-commerce platforms
                  and organized retail channels.
                </li>
                <li>
                  Essential eligibility criterion for government tenders and
                  public sector procurement.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                5. International Recognition
              </h3>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600 text-[15px] leading-6">
                <li>
                  Indian Standards align with global safety benchmarks,
                  supporting easier international expansion.
                </li>
                <li>
                  Enhances acceptance in markets following similar conformity
                  frameworks.
                </li>
              </ul>
            </div>
          </div>

          {/* Impact Table */}
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg mt-5">
            <table className="w-full border-collapse text-[15px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Benefit Area
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Business Impact
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="border border-gray-200 px-4 py-2">
                    Market Access
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    Enables legal sale and distribution of electronic products
                    in India
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">
                    Cost Savings
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    Avoids penalties, shipment losses, and non-compliance risks
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">
                    Sustainability
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    Encourages safer materials, quality control, and responsible
                    manufacturing
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Section Heading */}
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
            How to Get BIS CRS Registration for Electronic Products
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-4">
            <span className="absolute left-0 top-0 h-0.5 w-175 bg-[#0072b1]"></span>
          </div>

          {/* Intro */}
          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-10">
            BIS CRS (Compulsory Registration Scheme) is a mandatory conformity
            assessment mechanism for notified electronic and IT products. The
            scheme is based on product safety testing and self-declaration of
            conformity, ensuring that electronic goods meet prescribed Indian
            Standards before entering the Indian market.
          </p>

          {/* PROCESS */}
          <h3 className="font-semibold text-gray-900 mb-4">
            Step-by-Step Registration Process
          </h3>

          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg mb-12">
            <table className="w-full border-collapse text-[15px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                    Step
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                    Stage
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                    Description
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">
                <tr>
                  <td className="border border-gray-200 px-4 py-2">1</td>
                  <td className="border border-gray-200 px-4 py-2 font-medium text-gray-900">
                    Product Identification
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">
                    Confirm CRS applicability and identify the relevant Indian
                    Standard for the electronic product.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">2</td>
                  <td className="border border-gray-200 px-4 py-2 font-medium text-gray-900">
                    Sample Testing
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">
                    Product samples are tested in a BIS-recognized laboratory
                    for safety and performance compliance.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-2">3</td>
                  <td className="border border-gray-200 px-4 py-2 font-medium text-gray-900">
                    Documentation
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">
                    Preparation of test reports, product details, manufacturing
                    information, and compliance declarations.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">4</td>
                  <td className="border border-gray-200 px-4 py-2 font-medium text-gray-900">
                    Online Application
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">
                    Filing of the CRS application on the BIS portal along with
                    fees and supporting documents.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-2">5</td>
                  <td className="border border-gray-200 px-4 py-2 font-medium text-gray-900">
                    Grant of Registration
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">
                    After successful scrutiny, BIS issues the registration along
                    with a unique R-number.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* TIMELINE */}
          <h1 className="font-semibold text-xl uppercase text-gray-900">
            Timeline for BIS CRS Registration
          </h1>
          <div className="w-full h-0.5 bg-gray-200 relative mb-4">
            <span className="absolute left-0 top-0 h-0.5 w-95 bg-[#0072b1]"></span>
          </div>
          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-6">
            The end-to-end BIS CRS registration process typically takes
            <strong> 4 to 8 weeks</strong>. Timelines may vary depending on
            product complexity, laboratory workload, and the speed of regulatory
            review.
          </p>

          <div className="grid gap-6 ">
            <div>
              <h4 className="font-semibold text-gray-900">
                Phase 1: Preparation & Testing (2–4 Weeks)
              </h4>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600 text-[15px]">
                <li>
                  Selection of BIS-recognized laboratory and sample submission
                </li>
                <li>Safety and performance testing as per Indian Standards</li>
                <li>Issuance of official laboratory test report</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900">
                Phase 2: Application Filing (Around 1 Week)
              </h4>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600 text-[15px]">
                <li>Online CRS application submission</li>
                <li>Uploading of test reports and compliance documents</li>
                <li>Submission of declarations and affidavits</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900">
                Phase 3: BIS Review & Approval (2–4 Weeks)
              </h4>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600 text-[15px]">
                <li>Technical scrutiny by BIS officials</li>
                <li>Resolution of queries, if raised</li>
                <li>Grant of BIS CRS Registration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12 space-y-12">
        <div>
          <h2 className="text-xl uppercase font-semibold text-gray-900">
            Best Way to Obtain BIS CRS Registration Efficiently
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-150 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify">
            The most effective approach to BIS CRS registration is proactive
            preparation. Synchronizing testing activities with documentation and
            ensuring accuracy at every stage significantly reduces delays and
            rejection risks.
          </p>

          <ol className="mt-6 list-decimal pl-6 space-y-4 text-gray-600 text-[15px] leading-6">
            <li>
              Review the applicable Indian Standard in advance and conduct
              internal checks before submitting samples for testing.
            </li>
            <li>
              Select a BIS-recognized laboratory early and confirm testing
              timelines to avoid scheduling delays.
            </li>
            <li>
              Prepare all legal and technical documents in parallel with
              laboratory testing to ensure timely application submission.
            </li>
            <li>
              Maintain complete consistency across all documents, including
              product name, model number, and manufacturer details.
            </li>
            <li>
              Monitor regulatory updates and product notifications to stay
              compliant with newly introduced requirements.
            </li>
          </ol>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12 space-y-12">
        <div>
          <h2 className="text-xl uppercase font-semibold text-gray-900">
            Requirements for BIS CRS Registration
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-115 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify">
            Manufacturers and importers of electronic products must meet the
            following essential requirements to obtain BIS CRS registration:
          </p>

          <ol className="mt-6 list-decimal pl-6 space-y-4 text-gray-600 text-[15px] leading-5">
            <li>The product must fall under a notified CRS category.</li>
            <li>Testing must be conducted in a BIS-recognized laboratory.</li>
            <li>
              All product components must comply with the applicable standard.
            </li>
            <li>
              Accurate product labeling and marking provisions must be followed.
            </li>
            <li>
              Complete technical and compliance documentation must be submitted.
            </li>
          </ol>
        </div>

        {/* Documents */}
        <div>
          <h2 className="text-xl font-semibold uppercase text-gray-900">
            Documents Required for BIS CRS Registration
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-133 bg-[#0072b1]" />
          </div>

          <p className="text-gray-500 text-[15px] leading-6 text-justify">
            The following documents are typically required during the CRS
            registration process:
          </p>

          <ol className="mt-6 list-decimal pl-6 space-y-4 text-gray-600 text-[15px] leading-5">
            <li>Product test report from a BIS-recognized laboratory.</li>
            <li>Technical product specification and model details.</li>
            <li>Manufacturing and assembly process information.</li>
            <li>Trademark or brand authorization documents.</li>
            <li>Declaration of conformity and compliance undertakings.</li>
          </ol>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-12">
        <h2 className="text-xl font-semibold ">
          PRODUCTS UNDER BIS CRS CERTIFICATION SERVICE
        </h2>

        <div className="w-full h-0.5 bg-gray-200 relative mb-6">
          <span className="absolute left-0 top-0 h-0.5 w-135 bg-[#0072b1]"></span>
        </div>

        <div className="overflow-x-auto border border-blue-500">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {products.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-[#bfe4ef]"}
                >
                  <td className="border border-blue-500 px-4 py-1 align-top">
                    {row[0]}
                  </td>
                  <td className="border border-blue-500 px-4 py-1 align-top">
                    {row[1]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-[15px] leading-6 mb-6">
          Still have questions? Our detailed article on{" "}
          <Link
            href="/blogs/how-to-get-bis-crs-certification-for-electronic-products"
            className="text-[#0072b1] font-medium hover:underline"
          >
            BIS CRS Registration FAQs
          </Link>{" "}
          covers common doubts faced by manufacturers and importers.
        </p>
      </section>

      <section className="bg-white pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="border border-gray-200 rounded-lg bg-gray-50 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Text */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
                Need Help with BIS CRS Registration?
              </h2>

              <div className="w-24 h-0.5 bg-[#0072b1] mt-3 mb-4" />

              <p className="text-gray-600 text-[15px] leading-6 max-w-2xl">
                If you are planning to register an electronic product under BIS
                CRS or need clarity on eligibility, testing requirements, or
                timelines, our experts can guide you through the complete
                process.
              </p>
            </div>

            {/* Button */}
            <div className="shrink-0">
              <a
                href="/contact-us"
                className="
            inline-flex items-center justify-center
            bg-[#0072b1] hover:bg-[#005f94]
            text-white font-semibold
            px-8 py-3
            rounded-md
            transition
          "
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
