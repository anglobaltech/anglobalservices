import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "BIS CRS CERTIFICATION | AN Global Services",
  description:
    "Get complete ISI Certification services for domestic and industrial products. AN Global Services provides end-to-end ISI certification support.",
};

 const products = [
    ["Trimethyl Phosphite Technical Grade-IS 17412:2020", "Cotton Bales-IS 12171:2019"],
    ["Ortho Phosphoric Acid-IS 798 : 2020", "Low - Voltage switchgear and controlgear: electrical emergency stop devices with mechanical latching function-IS/IEC 60947-5-5 : 2016"],
    ["Low - Voltage switchgear and controlgear proximity switches-IS/IEC 60947-5-2 : 2007", "Low - Voltage switchgear and controlgear: electromechanical control circuit devices-IS/IEC 60947-5-1 : 2009"],
    ["Low - Voltage switchgear and controlgear: a.c. semiconductor motor controllers and contactors for non - Motor loads-IS/IEC 60947-4-3 : 2014", "Low - Voltage switchgear and controlgear: a.c semiconductor motor controllers and starters-IS/IEC 60947-4-2 : 2011"],
    ["Low - Voltage switchgear and controlgear: electromechanical contactors and motor - Starters-IS/IEC 60947-4-1 : 2012", "Low - Voltage switchgear and controlgear: switches, disconnectors, switch disconnectors and fuse - Combination units-IS/IEC 60947-3 : 2012"],
    ["Low - Voltage switchgear and controlgear: Circuit - Breakers-IS/IEC 60947-2 : 2016", "Bluetooth Speakers-IS 616 : 2017"],
    ["Dimmers for LED products-IS 60669-2-1: 2008", "Smart Speakers (with and without Display)-IS 616 : 2017"],
    ["Webcam (Finished Product)-IS 616 : 2017", "Video Camera-IS 616 : 2017"],
    ["Digital Camera-IS 13252 (Part 1) : 2010", "Wireless Microphone-IS 616 : 2017"],
    ["Rice Cooker-IS 302-2-15 : 2009", "Television other than Plasma/ LCD/LED TVs-IS 616 : 2017"],
    ["Standalone SMPS with output voltage 48V (max)-IS 13252 (Part 1) : 2010", "Electronic Musical System below 200 Watts-IS 616 : 2017"],
    ["USB Type External SSD (>256GB)-IS 13252 (Part 1) : 2010", "Wireless Headphone and Earphone-IS 616 : 2017"],
    ["USB Type External HDD-IS 13252 (Part 1) : 2010", "Automatic Teller Cash Dispensing Machines-IS 13252 (Part 1) : 2010"],
    ["Induction Stove-IS 302-2-6 : 2009", "Keyboard-IS 13252 (Part 1) : 2010"],
    ["Lighting Chain (Rope Lights)-IS 10322 (Part 5/Sec 9) : 2017", "Independent LED Modules for General Lighting-IS 16103 (Part 1) : 2012"],
    ["Storage Battery-IS 16270 : 2014", "Utility-Interconnected Photovoltaic Inverters-IS 16221 (Part 2) : 2015 & IS 16169 : 2014"],
    ["Power Inverters for PV system-IS 16221 (Part 2) : 2015", "Thin-Film Terrestrial PV Modules-IS 16077 : 2013 / IEC 61646 : 2008"],
    ["Crystalline Silicon PV Modules-IS 14286 : 2010", "Smart Watches-IS 13252 (Part 1) : 2010"],
    ["USB Barcode / Iris / Fingerprint Scanners-IS 13252 (Part 1) : 2010", "Adapters for Household Appliances-IS 302 (Part 1) : 2008"],
    ["CCTV Cameras & Recorders-IS 13252 (Part 1) : 2010", "Visual Display Units upto 32”-IS 13252 (Part 1) : 2010"],
    ["Plasma/LCD/LED TVs upto 32”-IS 616 : 2010", "UPS/Inverters ≤10kVA-IS 16242 (Part 1) : 2014"],
    ["LED Luminaires for Emergency Lighting-IS 10322 (Part 5/Sec 8) : 2013", "LED Lighting Chains-IS 10322 (Part 5/Sec 7) : 2013"],
    ["LED Hand Lamps-IS 10322 (Part 5/Sec 6) : 2013", "LED Flood Lights-IS 10322 (Part 5/Sec 5) : 2013"],
    ["LED Street Lights-IS 10322 (Part 5/Sec 3) : 2012", "Recessed LED Luminaires-IS 10322 (Part 5/Sec 2) : 2012"],
    ["Mobile Phones-IS 13252 (Part 1) : 2010*", "Power Banks-IS 13252 (Part 1) : 2010*"],
    ["Set Top Box-IS 13252 (Part 1) : 2010*", "Laptops/Notebook/Tablet-IS 13252 (Part 1) : 2010*"],
    ["Microwave Ovens-IS 302-2-25 : 2014*", "Electronic Games-IS 616 : 2010*"],
    ["Printers & Plotters-IS 13252 (Part 1) : 2010*", "Automatic Data Processing Machines-IS 13252 (Part 1) : 2010*"],
  ];

export default function ISIPage() {
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

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/bis-crs-registration (1).png"
                alt="BIS Certification"
                width={420}
                height={520}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 mt-5">
            <div>
              <h2 className="text-xl font-bold text-gray-900">INTRODUCTION</h2>
              <div className="w-40 h-0.5 bg-[#0072b1] mt-2 mb-4" />

              <p className="text-gray-500 text-[15px] leading-6 text-justify">
                BIS (Bureau of Indian Standards) is the National Standard Body
                of India for the harmonious establishment of standardization,
                labelling and performance assurance activities of consumer
                products. There are fifty digital and IT services approved by
                the Government. Of India, which allow a BIS standard safety mark
                to be labelled before it can be manufactured / imported and sold
                on the Indian market.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                How to get BIS Registration?
              </h2>
              <div className="w-70 h-0.5 bg-[#0072b1] mt-2 mb-4" />

              <p className="text-gray-500 text-[15px] leading-6 text-justify">
                The BIS Registration shall be granted by the BIS Office after
                satisfactory safety testing of the material in compliance with
                the approved Indian Standard and the furnishing of the necessary
                documents.
              </p>
              <p className="text-gray-500 text-[15px] leading-6 text-justify">
                AN Global Services is an established BIS Registration service
                provider for both Indian and international manufacturers who are
                willing to sell their electronic products in India. We assist
                manufacturers in completing all formalities related to the
                registration of BIS.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 space-y-10">
        <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900 ">
            BIS (CRS) Registration For Electronic & It Products
          </h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-125 bg-[#0072b1]"></span>
          </div>

          <p className="text-gray-500 text-[15px] leading-7 text-justify pb-3">
            In 2012, the Department of Electronics and Information Technology
            (DEITY) and the Bureau of Indian Standards (BIS) together introduced
            the Compulsory Registration Scheme (CRS) to safeguard Indian
            customers against fake and substandard goods. BIS Registration for
            Electronics and IT products comes under the compulsory registration
            scheme (CRS). As per this scheme, procurement BIS registration
            certification for electronics and IT products is required before
            introducing them into the marketplace.
          </p>
          <p className="text-gray-500 text-[15px] leading-7 text-justify">
            CRS is applicable for electronic and IT products. It is basically a
            scheme under Scheme II or Schedule II of BIS (Conformity Assessment)
            Regulations, 2018. Under this scheme, several guidelines have been
            prescribed by BIS that ensure product quality. CRS is applicable for
            electronic products, either produced domestically or in a foreign
            country, which need to be tested to enter the Indian market. CRS was
            implemented with the purpose to manufacture secure electronic and
            electric products in the Indian market for customers constantly, and
            various products are being added to this list, till date it includes
            a total of 81 products.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-10">
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Significance Of Obtaining CRS Certification
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-110 bg-[#0072b1]"></span>
          </div>

          <p className="font-semibold text-gray-800 mb-4">
            CRS certification offers various benefits, not only to customers but
            also to manufacturers/ sellers too :-
          </p>

          <ul className="list-disc pl-6 space-y-1 text-[15px] text-gray-600 leading-7">
            <li>
              Provides tested and certified products to check whether a product
              meets the prescribed guidelines.
            </li>
            <li>
              Easily accessible to the Indian market, a tested and certified
              product allows a manufacturer to easily cross the threshold of
              consumer acceptance of a product.
            </li>
            <li>Prevent from the imposition of penalty.</li>
            <li>
              A tested and certified product builds credibility and
              trustworthiness among the customers.
            </li>
          </ul>
        </div>

        {/* Procedure Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Procedure To Get A BIS CRS Certificate For Computer/ Laptop And IT
            Products.
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-190 bg-[#0072b1]"></span>
          </div>

          <ul className="list-disc pl-6 space-y-1 text-[15px] text-gray-600 leading-7">
            <li>
              <span className="font-medium text-gray-800">
                Online application submission:
              </span>{" "}
              First, the Applicant shall apply on the BIS online CRS portal by
              filling out the BIS registration form in order to get login
              credentials.
            </li>

            <li>
              <span className="font-medium text-gray-800">
                Testing of product in BIS approved lab:
              </span>{" "}
              Applicants need to generate test requests by logging in with their
              credentials and getting their product tested from a BIS-approved
              lab.
            </li>

            <li>
              <span className="font-medium text-gray-800">
                Offline/online submission of Application:
              </span>{" "}
              After that, the Applicant must apply on the portal using the
              verified Test Report within 90 days of its issue and submit all
              required documents in accordance with the checklist.
            </li>

            <li>
              <span className="font-medium text-gray-800">
                Scrutiny of application:
              </span>{" "}
              BIS officials will review the test report and all documents
              submitted with the application.
            </li>

            <li>
              <span className="font-medium text-gray-800">
                Grant of BIS license:
              </span>{" "}
              Bureau will grant a BIS license to the manufacturers to use or
              apply Standard Mark with a unique R-number on their electronics
              and IT products.
            </li>
          </ul>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-12">
      <h2 className="text-xl font-semibold mb-4">
        PRODUCTS UNDER BIS CRS CERTIFICATION SERVICE
      </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-140 bg-[#0072b1]"></span>
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
      </section>

    </main>
  );
}
