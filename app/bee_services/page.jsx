import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "BEE Registration & Star Labelling Services | AN Global Services",
  description:
    "Get complete BEE Registration and Star Labelling services in India. AN Global Services provides end-to-end support for Bureau of Energy Efficiency compliance, product testing, documentation, and approval.",
};

export default function BEEPage() {
  return (
    <main className="w-full">
      <section className="relative w-full h-65 md:h-68">
        <Image
          src="/service/isi/about.jpg"
          alt="BEE Registration Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-bold">
              BEE REGISTRATION SERVICES
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/bee-registration-services.jpg"
                alt="BEE Registration Services"
                width={420}
                height={520}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 ">
            <div>
              <h2 className="text-xl font-bold text-gray-900">INTRODUCTION</h2>
              <div className="w-full h-0.5 bg-gray-200 relative mb-6">
                <span className="absolute left-0 top-0 h-0.5 w-40 bg-[#0072b1]"></span>
              </div>

              <p className="text-gray-500 text-[15px] leading-6 text-justify pb-5">
                On March 01, 2002, the BEE or Bureau of Energy Efficiency was
                set up by the Indian Government under the Ministry of Power
                pursuant to the provisions of the Energy Conservation Act, 2001
                with the primary purpose of saving energy & cost in India.
              </p>
              <p className="text-gray-500 text-[15px] leading-6 text-justify pb-5">
                The Government of India has made it authoritative for some
                notified products or items to have star ratings and labels which
                specify the energy-saving product's performance and help the
                consumers make the right selection before purchasing such
                product.
              </p>
              <p className="text-gray-500 text-[15px] leading-6 text-justify pb-5">
                The mission of BEE or Bureau of Energy Efficiency is to
                institutionalize energy efficiency programs, promote in-country
                delivery mechanisms and give energy efficiency leadership in all
                sectors of the country.
              </p>
              <p className="text-gray-500 text-[15px] leading-6 text-justify">
                The manufacturer is required to apply for Bureau of Energy
                Efficiency Registration in India as well as complete the product
                testing & documentation required by the BEE to get the item
                qualified with Star Rating (a higher BEE Star Rating means
                higher energy saving). Role of BEE and Star Labelling Scheme
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-6 space-y-10">
        <div>
          {/* <h2 className="text-xl md:text-xl font-semibold text-gray-900 ">
            Is It Compulsory to Obtain BIS Certification For Solar Panels?
          </h2> */}
          {/* <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-150 bg-[#0072b1]"></span>
          </div> */}

          <p className="text-gray-500 text-[15px] leading-7 text-justify pb-3">
            The Bureau of Energy Efficiency works with specified customers,
            agencies, and other businesses to carry out the assignment assigned
            to it under the Energy Conservation Act, as well as identify and
            utilize existing resources and infrastructure. This Act has both
            legislative and promotional provisions. The Hon'ble Minister of
            Power launched a star marking scheme in May 2006 in order to make
            electrical appliances more energy-efficient. A total of 29 products
            are safeguarded by this initiative in the province, of which ten are
            covered by the mandatory framework & 19 by the voluntary scheme.
            Under the Star Labelling Scheme of the BEE, only the importer,
            trader, or manufacturer can apply for the license.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-10">
        <div className="mb-5">
          <h2 className="text-xl font-semibold text-gray-900 uppercase">
            The scope of each applicant is mentioned below:
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-40 md:w-140 bg-[#0072b1]"></span>
          </div>

          <p className="text-gray-500 text-[15px] leading-7 text-justify pb-3">
            Importer: Any Indian company or entity that wants to import any
            product or item which comes under the regime of BEE obligatory
            Certification has to undergo the BEE registration process as per the
            State Labelling Scheme of BEE. But, one importer can only register
            only one product with a single brand under one login.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="text-xl font-semibold text-gray-900 uppercase">
            Manufacturer:
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-40 bg-[#0072b1]"></span>
          </div>
          <p className="text-gray-500 text-[15px] leading-7 text-justify pb-3">
            The manufacturer of the end product can register himself with the
            Star Labelling Scheme of BEE. One manufacturer can register only one
            product with a single brand under one login. Trader: Any domestic
            trader trading domestically with products that come under the regime
            of BEE Certification must undergo the BEE registration process as
            per the State Labelling Scheme of BEE.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="text-xl font-semibold text-gray-900 uppercase">
            The process of BEE Registration:
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-40 md:w-96 bg-[#0072b1]"></span>
          </div>
          <p className="text-gray-500 text-[15px] leading-7 text-justify pb-3">
            <span className="text-gray-800 font-bold">Step 1:</span> Company
            Registration:. The process or registration includes the submission
            of vital documents & information of the applicant. Documents like
            ISO 9001, Certificate of Incorporation (COI), Trademark, etc., are
            required to be uploaded during online filing.
          </p>
          <p className="text-gray-500 text-[15px] leading-7 text-justify pb-3">
            <span className="text-gray-800 font-bold">Step 2:</span> Testing:
            Once the Company Registration application is consented to by the
            Bureau, then the applicant gets login credentials for their portal
            over the registered email Id. Using the same, the applicant or
            candidate can fill out the Model Registration Application, but
            before proceeding with the process of Model Registration, the
            applicant needs to get their products tested from a NABL accredited
            lab/from an ILAC MRA lab. The test report should be as per the BEE
            defined format & must include all the testing parameters. For
            product testing, the candidate needs to share the testing documents
            and product sample as specified by the testing facility. Before
            applying for the Model Registration, it should be cross-checked that
            the lab reports issue date is not more than 90 days.
          </p>
          <p className="text-gray-500 text-[15px] leading-7 text-justify pb-3">
            <span className="text-gray-800 font-bold">Step 3:</span> Model
            Registration: Once the testing is completed,the applicant can now
            apply for Model Registration on the online BEE portal. The BEE
            Registration needs mandatory documents in a particular format along
            with the test report. Once the application is submitted, all the
            hardcopy originals with the online application & payment receipt are
            submitted to the Department. The Department examines all the
            submitted documents and provides the final license to the applicant.
          </p>
        </div>
        <div className="">
          <h2 className="text-xl font-semibold text-gray-900  uppercase">
            Validity and Renewal of BEE Registration Certificate
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-40 md:w-155 bg-[#0072b1]"></span>
          </div>
          <p className="text-gray-500 text-[15px] leading-7 text-justify pb-3">
            The validity of BEE Registration is three years from the date of
            Certificate is issued. The BEE Registration Certificate validity can
            be renewed by paying the fees along with the required documents.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 ">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Documents Required for BEE Registration Services
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-40 md:w-150 bg-[#0072b1]" />
          </div>

          <p className="text-gray-500 text-[15px] leading-6 text-justify mb-8">
            To obtain BEE Registration and Star Labelling approval, applicants
            must submit a set of mandatory documents to verify their legal
            identity, manufacturing capability, and product compliance. The
            documents may vary slightly depending on whether the applicant is a
            manufacturer, importer, or trader.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                1. Company & Legal Documents
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-500 space-y-2">
                <li>
                  Certificate of Incorporation / Partnership / Proprietorship
                  Proof
                </li>
                <li>GST Registration Certificate</li>
                <li>ISO 9001 Certificate (if applicable)</li>
                <li>Trademark Certificate / Brand Authorization</li>
                <li>Authorized Signatory ID Proof</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                2. Product & Technical Documents
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-500 space-y-2">
                <li>Product Specification Sheet & Model Details</li>
                <li>Product Catalogue / Brochure</li>
                <li>Product Label Artwork (BEE Format)</li>
                <li>Brand Declaration Form</li>
                <li>Manufacturing Process Flow Chart</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                3. Test Reports & Compliance Documents
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-500 space-y-2">
                <li>NABL / ILAC MRA Test Report (≤ 90 days old)</li>
                <li>BEE Prescribed Test Report Format</li>
                <li>Energy Performance Data</li>
                <li>Undertakings & Declarations</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                4. Importer-Specific Documents
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-500 space-y-2">
                <li>Importer Exporter Code (IEC)</li>
                <li>Authorization Letter from Manufacturer</li>
                <li>Importer–Manufacturer Agreement</li>
                <li>Foreign Factory Address Proof</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12 space-y-8">
        <div>
          <h2 className="text-lg md:text-xl font-bold text-gray-900 uppercase leading-snug md:leading-normal">
            Frequently Asked Questions on BEE Registration
          </h2>

          <div className="w-24 md:w-143 h-0.5 bg-[#0072b1] mb-3" />
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 text-[16px]">
              1. What is BEE Registration?
            </h3>
            <p className="text-gray-500 text-[15px] leading-6 text-justify mt-2">
              BEE Registration refers to the registration of manufacturers,
              importers, or traders under the Bureau of Energy Efficiency (BEE)
              for the Star Labelling Scheme. It ensures that notified products
              meet prescribed energy efficiency standards in India.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-[16px]">
              2. Is BEE Registration mandatory in India?
            </h3>
            <p className="text-gray-500 text-[15px] leading-6 text-justify mt-2">
              Yes, BEE Registration is mandatory for products notified under the
              mandatory Star Labelling Scheme. Products covered under the
              voluntary scheme may opt for registration to enhance market
              credibility and consumer trust.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-[16px]">
              3. Who can apply for BEE Registration?
            </h3>
            <p className="text-gray-500 text-[15px] leading-6 text-justify mt-2">
              Only manufacturers, importers, or domestic traders of the notified
              products can apply for BEE Registration. Each applicant can
              register one product model under one brand through a single login.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-[16px]">
              4. How long does the BEE Registration process take?
            </h3>
            <p className="text-gray-500 text-[15px] leading-6 text-justify mt-2">
              The BEE Registration process generally takes 4 to 8 weeks,
              depending on the completeness of documents, product testing
              timelines, and approval from the Bureau of Energy Efficiency.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-[16px]">
              5. Is product testing mandatory for BEE Registration?
            </h3>
            <p className="text-gray-500 text-[15px] leading-6 text-justify mt-2">
              Yes, product testing is mandatory. The product must be tested at a
              NABL-accredited laboratory or an ILAC MRA laboratory, and the test
              report must be in the format prescribed by BEE.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-[16px]">
              6. What is the validity of the BEE Registration Certificate?
            </h3>
            <p className="text-gray-500 text-[15px] leading-6 text-justify mt-2">
              The BEE Registration Certificate is valid for three years from the
              date of issuance. It can be renewed by submitting the required
              documents and paying the applicable renewal fees.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-[16px]">
              7. Can BEE Registration be renewed?
            </h3>
            <p className="text-gray-500 text-[15px] leading-6 text-justify mt-2">
              Yes, BEE Registration can be renewed before expiry. Renewal
              requires updated documents, valid test reports (if applicable),
              and payment of the prescribed renewal fee.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-[16px]">
              8. What happens if a product is sold without BEE Registration?
            </h3>
            <p className="text-gray-500 text-[15px] leading-6 text-justify mt-2">
              Selling or importing products covered under mandatory BEE norms
              without valid registration may lead to penalties, product seizure,
              legal action, and market restrictions imposed by regulatory
              authorities.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
