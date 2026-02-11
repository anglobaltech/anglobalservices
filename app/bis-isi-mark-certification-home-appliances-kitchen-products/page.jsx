import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "BIS ISI Mark Certification for Home Appliances & Kitchen Products in India | AN Global Services",

  description:
    "Get BIS ISI Mark Certification for home appliances and kitchen products in India. Expert support for BIS testing, factory inspection, ISI license approval, and compliance with BIS Quality Control Orders.",

  keywords: [
    "BIS ISI Mark Certification for Home Appliances",
    "BIS ISI Certification for Kitchen Products",
    "ISI Mark for Home Appliances",
    "BIS Certification for Kitchen Products India",
    "ISI License for Home Appliances",
    "BIS QCO Home Appliances",
    "Pressure Cooker ISI Certification",
    "Gas Stove ISI Certification",
    "AN Global Services BIS ISI Certification",
  ],

  openGraph: {
    title:
      "BIS ISI Mark Certification for Home Appliances & Kitchen Products in India",
    description:
      "Apply for BIS ISI Mark Certification for home appliances and kitchen products with expert assistance for BIS testing, factory audit, and ISI license approval.",
    url: "https://www.anglobalservices.com/bis-isi-mark-certification-home-appliances-kitchen-products",
    siteName: "AN Global Services",
    locale: "en_IN",
    type: "website",
  },

  alternates: {
    canonical:
      "https://www.anglobalservices.com/bis-isi-mark-certification-home-appliances-kitchen-products",
  },
};

const homeApplianceProducts = [
  {
    id: 1,
    name: "Air Coolers",
    standard: "IS 3315",
    link: "/isi-products/isi-certification-for-evaporative-air-coolers-desert-coolers-3315",
  },
  {
    id: 2,
    name: "Ceiling Fans",
    standard: "IS 374",
    link: "/bis-isi-mark-certification-home-appliances-kitchen-products",
  },
  {
    id: 3,
    name: "Mixer Grinders",
    standard: "IS 4250",
    link: "/bis-isi-mark-certification-home-appliances-kitchen-products",
  },
  {
    id: 4,
    name: "Pressure Cookers",
    standard: "IS 2347",
    link: "/bis-isi-mark-certification-home-appliances-kitchen-products",
  },
  {
    id: 5,
    name: "Gas Stoves",
    standard: "IS 4246",
    link: "/bis-isi-mark-certification-home-appliances-kitchen-products",
  },
  {
    id: 6,
    name: "LPG Regulators",
    standard: "IS 9798",
    link: "/bis-isi-mark-certification-home-appliances-kitchen-products",
  },
  {
    id: 7,
    name: "Electric Irons",
    standard: "IS 366",
    link: "/bis-isi-mark-certification-home-appliances-kitchen-products",
  },
  {
    id: 8,
    name: "Immersion Heaters",
    standard: "IS 368",
    link: "/bis-isi-mark-certification-home-appliances-kitchen-products",
  },
  {
    id: 9,
    name: "Room Heaters",
    standard: "IS 302 (Part 2)",
    link: "/bis-isi-mark-certification-home-appliances-kitchen-products",
  },
  {
    id: 10,
    name: "Electric Kettles",
    standard: "IS 302 (Part 2)",
    link: "/bis-isi-mark-certification-home-appliances-kitchen-products",
  },
];

const chunkHomeApplianceProducts = (arr, size = 2) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const homeApplianceRows = chunkHomeApplianceProducts(homeApplianceProducts, 2);

export default function HomeApplianceISIPage() {
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
          BIS ISI MARK CERTIFICATION FOR HOME APPLIANCES & KITCHEN PRODUCTS
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
            <Image
              src="/service/isi-certificate-home-appliances.png"
              alt="BIS ISI Mark for Home Appliances and Kitchen Products"
              width={420}
              height={520}
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 uppercase">
              What is BIS ISI Mark Certification for Home Appliances & Kitchen
            </h2>

            <div className="w-full h-0.5 bg-gray-200 relative mb-4">
              <span className="absolute left-0 top-0 h-0.5 w-90 md:w-184 bg-[#0072b1]" />
            </div>

            <p className="text-gray-600 text-[15px] leading-6 text-justify pb-4">
              BIS ISI Mark certification for home appliances and kitchen
              products is a mandatory safety and quality compliance requirement
              introduced under various Quality Control Orders (QCOs) issued by
              the Government of India. It ensures that appliances meet
              prescribed Indian Standards related to electrical safety,
              performance, energy efficiency, and user protection before being
              manufactured, sold, or imported into the Indian market.
            </p>

            <p className="text-gray-600 text-[15px] leading-6 text-justify pb-4">
              The ISI Mark indicates that home and kitchen appliances have
              undergone product testing, factory inspection, and conformity
              assessment as per Bureau of Indian Standards (BIS) guidelines.
              BIS-certified appliances are subject to ongoing surveillance to
              maintain consistent quality and to prevent unsafe or substandard
              products from reaching consumers.
            </p>

            <p className="text-gray-600 text-[15px] leading-6 text-justify">
              Commonly regulated home appliances and kitchen products include
              pressure cookers, gas stoves, LPG regulators, electric irons,
              immersion heaters, electric kettles, mixer grinders, induction
              cooktops, room heaters, and other household electrical appliances.
              BIS ISI Mark certification applies to both Indian and foreign
              manufacturers, and non-compliance may lead to customs rejection,
              penalties, product recalls, or a ban on sale in India.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 md:px-6 py-12">
        <div className="max-w-7xl mx-auto md:px-6 pb-12">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Benefits of BIS ISI Mark Certification for Home Appliances & Kitchen
            Products
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-4">
            <span className="absolute left-0 top-0 h-0.5 w-90 md:w-226 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            BIS ISI Mark certification is a mandatory safety and quality
            compliance requirement for several home appliances and kitchen
            products notified under Quality Control Orders (QCOs) issued by the
            Government of India. Beyond legal compliance, ISI certification
            ensures consumer safety, product reliability, and long-term market
            acceptance.
          </p>

          <div className="space-y-1">
            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                1. Mandatory Compliance and Legal Market Entry
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                BIS ISI certification is compulsory for home appliances such as
                pressure cookers, gas stoves, LPG regulators, electric irons,
                room heaters, immersion heaters, and other notified products.
                Without a valid ISI license, these products cannot be legally
                manufactured, imported, or sold in India.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                2. Enhanced Electrical and Consumer Safety
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                BIS-certified home appliances are tested for electrical safety,
                thermal performance, mechanical strength, and fire risk. This
                helps prevent accidents such as electric shocks, overheating,
                gas leakage, and appliance failure during household use.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                3. Increased Consumer and Retailer Trust
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                Consumers, distributors, and retail chains prefer ISI-marked
                home appliances due to assured compliance with Indian safety
                standards, resulting in higher brand credibility and reduced
                after-sales issues.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                4. Eligibility for Government and Institutional Procurement
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                Many government departments, PSUs, and institutional buyers
                mandate BIS ISI certification for home and kitchen appliances
                used in public facilities, hostels, hospitals, and housing
                projects.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2">
              <h3 className="font-semibold text-gray-900 mb-2">
                5. Reduced Legal, Recall, and Liability Risk
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                ISI certification helps manufacturers and importers minimize
                risks related to product recalls, legal penalties, consumer
                complaints, and enforcement actions arising from non-compliant
                home appliances.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-2 md:px-6 pb-12">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Documents Required for BIS ISI Certification for Home Appliances
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-30 md:w-192 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            To obtain BIS ISI Mark certification for home appliances and kitchen
            products, manufacturers must submit business, technical, and
            factory-related documents to demonstrate compliance with applicable
            Indian Standards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                1. Business & Factory Documents
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
                <li>Company incorporation or registration certificate.</li>
                <li>Factory license or address proof.</li>
                <li>GST registration and PAN.</li>
                <li>Trademark certificate (if applicable).</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                2. Home Appliance Product Details
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
                <li>Product description, model number, and rating.</li>
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
                <li>List of assembly and testing machinery.</li>
                <li>In-house electrical and safety testing equipment.</li>
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
                <li>Product test reports from BIS-recognized laboratories.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-2 md:px-6">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Process to Get BIS ISI Mark Certification for Home Appliances
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-3">
            <span className="absolute left-0 top-0 h-0.5 w-30 md:w-179 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            The BIS ISI certification process for home appliances follows a
            defined sequence involving application filing, factory inspection,
            and product testing. For domestic manufacturers, the process
            typically takes 60 to 90 days, depending on inspection schedules and
            test results.
          </p>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-3">
              <li>
                <strong>Identify Applicable IS Code:</strong> Select the
                relevant Indian Standard for the home appliance.
              </li>
              <li>
                <strong>Online Application Submission:</strong> File the
                application through the BIS Manak Online portal with required
                documents.
              </li>
              <li>
                <strong>Factory Inspection:</strong> BIS officers inspect the
                manufacturing unit, testing facilities, and quality systems.
              </li>
              <li>
                <strong>Sample Testing:</strong> Appliance samples are tested
                for safety and performance as per the applicable IS.
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
            HOME APPLIANCES & KITCHEN PRODUCTS UNDER BIS ISI CERTIFICATION
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-4">
            <span className="absolute left-0 top-0 h-0.5 w-40 md:w-182 bg-[#0072b1]" />
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
                {homeApplianceRows.map((row, rowIndex) => (
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
            {homeApplianceRows.map((row, rowIndex) => (
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
            BIS ISI Certification for Home Appliances & Kitchen Products – FAQs
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-5">
            <span className="absolute left-0 top-0 h-0.5 w-30 md:w-195 bg-[#0072b1]" />
          </div>

          <div className="space-y-6 text-gray-700 text-[15px] leading-6">
            <div>
              <strong>
                1. What is BIS ISI Mark certification for home appliances and
                kitchen products?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                BIS ISI Mark certification for home appliances and kitchen
                products is a mandatory safety and quality approval issued by
                the Bureau of Indian Standards. It confirms that appliances
                comply with applicable Indian Standards related to electrical
                safety, performance, and consumer protection.
              </p>
            </div>

            <div>
              <strong>
                2. Is BIS ISI certification mandatory for all home appliances?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                No, BIS ISI certification is mandatory only for home appliances
                and kitchen products notified under Quality Control Orders
                (QCOs) issued by the Government of India. Products not covered
                under QCOs may not require ISI certification.
              </p>
            </div>

            <div>
              <strong>
                3. Which home appliances and kitchen products require BIS ISI
                certification?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                Common products requiring ISI certification include pressure
                cookers, gas stoves, LPG regulators, electric irons, immersion
                heaters, room heaters, electric kettles, mixer grinders, and
                other household appliances notified by BIS.
              </p>
            </div>

            <div>
              <strong>
                4. Who can apply for BIS ISI certification for home appliances?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                Only manufacturers are eligible to apply for BIS ISI
                certification. Traders, distributors, or retailers cannot apply
                unless they own and operate the manufacturing facility. Foreign
                manufacturers must apply under the BIS FMCS scheme.
              </p>
            </div>

            <div>
              <strong>
                5. How long does BIS ISI certification take for home appliances?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                For domestic manufacturers, the BIS ISI certification process
                usually takes 60 to 90 days, depending on document readiness,
                factory inspection schedules, and product testing timelines.
              </p>
            </div>

            <div>
              <strong>
                6. What is the validity of BIS ISI license for home appliances?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                BIS ISI licenses are generally granted for a period of one year
                and can be renewed annually, subject to compliance with BIS
                surveillance requirements and payment of applicable fees.
              </p>
            </div>

            <div>
              <strong>
                7. Can one ISI license cover multiple home appliances or
                factories?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                An ISI license is factory-specific and product-specific.
                Multiple appliance models may be covered under one license only
                if they fall under the same Indian Standard and are manufactured
                at the same location.
              </p>
            </div>

            <div>
              <strong>
                8. What happens if home appliances are sold without ISI
                certification?
              </strong>
              <p className="text-gray-600 mt-2 text-justify">
                Manufacturing, importing, or selling BIS-notified home
                appliances without ISI certification can lead to penalties,
                product seizure, customs rejection, product recalls, and legal
                action under the BIS Act, 2016.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
