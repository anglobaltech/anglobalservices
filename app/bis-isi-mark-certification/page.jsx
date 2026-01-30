import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "BIS ISI Mark Certification Services | AN Global Services",

  description:
    "Get BIS ISI Mark Certification in India for mandatory & voluntary products. Expert support for manufacturers & importers – documentation, testing, inspection & fast approval by BIS.",

  keywords: [
    "BIS ISI certification",
    "ISI mark certification",
    "BIS ISI mark registration",
    "ISI certification in India",
    "BIS certification services",
    "mandatory ISI certification",
    "ISI mark for manufacturers",
    "ISI certification process",
    "ISI certification documents",
    "ISI mark consultant",
    "BIS ISI certification cost",
  ],

  alternates: {
    canonical: "https://www.anglobalservices.com/bis-isi-mark-certification",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ISIPage() {
  return (
    <main className="w-full">
      <section className="relative w-full h-65 md:h-68">
        <Image
          src="/service/isi/about.jpg"
          alt="BIS ISI Certification Services"
          fill
          priority
          className="object-cover "
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-bold">
              BIS ISI CERTIFICATION SERVICES
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-1">
          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src="/service/isi/isi-1.jpg"
              alt="ISI Mark Certification"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">
            INTRODUCTION
          </h2>

          <div className="space-y-5 text-gray-500 leading-7 text-[15px]">
            <p>
              The Bureau of Indian Standards (BIS) is the National Certification
              body of India that issues BIS licenses to manufacturers and
              importers for various products under voluntary or mandatory
              certification schemes. BIS certification is a third-party
              assurance of product quality, consumer safety, and reliability.
            </p>

            <p>
              BIS certification ensures that a product conforms to relevant
              Indian Standards and is safe for use in the Indian market. Certain
              products listed under the Mandatory Product Certification Scheme
              of BIS must obtain certification before being sold in India.
            </p>

            <p>
              AN Global Services is an established ISI Certification service
              provider for both Indian and international manufacturers. We
              assist in managing the complete process required to obtain ISI
              Certification for mandatory as well as optional products.
            </p>

            <p>
              ISI stands for <strong>Indian Standards Institute</strong>. ISI is
              the certification scheme under BIS that confirms a product
              complies with Indian Standards and guarantees safety and quality.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 pb-12">
          <div className="space-y-6 text-gray-500 text-[15px] leading-7">
            <p>
              The ISI certificate allows manufacturers to use the ISI Mark,
              which has been the standards compliance mark for industrial goods
              since 1955. This mark assures that products meet the standards
              laid down by BIS.
            </p>

            <p>
              Several electrical appliances require mandatory ISI marking such
              as Electric Irons, Room Heaters, Room ACs, Electric Stoves,
              Freezers, Electric Cables, UPVC Pipes, Rubber & Leather Footwears,
              Composite Cement, and various chemical products.
            </p>

            <p>
              More than{" "}
              <strong className="font-semibold text-gray-800">
                346 products
              </strong>{" "}
              fall under mandatory ISI certification. Without ISI certification,
              manufacturers are not permitted to manufacture and sell products
              in India.
            </p>

            <p>
              BIS is the authorized body to provide the ISI mark through proper
              inspection, evaluation, testing, and documentation. This process
              ensures that manufacturers strictly follow the standards and
              instructions laid down by BIS.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f5f5f5] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-900 mb-12">
            SIGNIFICANCE OF BIS/ISI MARK CERTIFICATION IN INDIA
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Market Access
              </h3>
              <div className="h-0.5 w-full bg-gray-200 mb-5">
                <span className="block h-0.5 w-35 bg-[#0075B6]"></span>
              </div>
              <p className="text-gray-500 text-[15px] leading-7">
                A certified product provides a wider market because it implies
                better quality along with conformity to safety standards and
                consumer security. A product with an ISI mark is more
                trustworthy and credible, hence, enjoys greater demand compared
                to uncertified products. This ultimately provides wider market
                access.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Provides Competitive Advantage
              </h3>
              <div className="h-0.5 w-full bg-gray-200 mb-5">
                <span className="block h-0.5 w-80 bg-[#0075B6]"></span>
              </div>
              <p className="text-gray-500 text-[15px] leading-7">
                An ISI certified product signifies exemplary quality and
                provides the manufacturer a competitive edge. Consumers prefer
                certified products over uncertified ones. ISI certification
                ensures quality, enhances trust, and helps businesses achieve
                higher revenue by standing out from competitors.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Market Advantages
              </h3>
              <div className="h-0.5 w-full bg-gray-200 mb-5">
                <span className="block h-0.5 w-45 bg-[#0075B6]"></span>
              </div>
              <p className="text-gray-500 text-[15px] leading-7">
                Having an ISI certificate provides market advantages such as
                uninterrupted production and easier market acceptance. It
                confirms that products are manufactured according to prescribed
                Indian standards, ensuring quality and safety.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Legal Benefit
              </h3>
              <div className="h-0.5 w-full bg-gray-200 mb-5">
                <span className="block h-0.5 w-32 bg-[#0075B6]"></span>
              </div>
              <p className="text-gray-500 text-[15px] leading-7">
                ISI certification offers legal benefits by allowing
                manufacturers to produce mandatory listed goods without legal
                issues. It protects businesses from penalties, fines, and legal
                actions that may arise due to non-compliance with BIS
                regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              DOCUMENTS REQUIRED TO OBTAIN BIS ISI MARK CERTIFICATE IN INDIA
            </h2>

            <div className="mt-2 h-0.5 w-full bg-gray-200 relative">
              <span className="absolute left-0 top-0 h-0.5 w-215 bg-[#0075B6]"></span>
            </div>
          </div>

          <ul className="space-y-3 text-gray-500 text-[15px] leading-6 list-disc pl-6">
            <li>
              The legal identity of the establishment (GST certificate,
              Partnership Deed, Certificate of Incorporation, etc.).
            </li>

            <li>
              Flow-chart process including all the manufacturing processes,
              information regarding in-process control of each stage, including
              outsourced stages.
            </li>

            <li>If applicable, submit the product or component drawing.</li>

            <li>In-house testing report.</li>

            <li>
              List including information of raw materials used and copies of
              test certificates of raw materials.
            </li>

            <li>
              A layout plan indicating the location of manufacturing machinery
              or laboratory.
            </li>

            <li>Details of manufacturing machinery.</li>

            <li>Documents of brand trademark.</li>

            <li>
              List of quality testing personnel & copies of certificates of
              qualification of quality control personnel.
            </li>

            <li>
              Factory location plan from nearby railway station / airport /
              landmark along with guidance on how to reach the BIS office.
            </li>

            <li>List of test equipment.</li>

            <li>Undertaking or declaration (will be provided by us).</li>
          </ul>
        </div>
      </section>

      <section className="w-full bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#4a5673] text-white p-6 md:p-8 mb-12">
            <h2 className="text-center text-xl md:text-2xl font-bold mb-4">
              PROCESS OF GRANT OF ISI CERTIFICATE
            </h2>

            <ul className="space-y-2 text-[15px] list-disc pl-6">
              <li>Step1: Organize the Lab Test Report (LTR) by BIS</li>
              <li>Step2: Filling of Application</li>
              <li>Step3: Preparation of Manual</li>
              <li>Step4: Documentations</li>
              <li>Step5: Inspections by the Department</li>
              <li>Step6: Submission of Test Report & Request for Inspection</li>
              <li>Step7: Closure of Non-Conformity (if any)</li>
              <li>Step8: Get the ISI Marking / Registration</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="bg-[#6b57a6] text-white p-6 md:p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6 text-center tracking-wide">
                NORMAL PROCESS FOR BIS ISI MARK CERTIFICATION
              </h3>

              <p className="mb-4 font-semibold">
                Normal Procedure (takes 60 – 65 days)
              </p>

              <p className="mb-4">
                The following steps will take place under normal procedure:
              </p>

              <ul className="space-y-3 text-[15px] list-disc pl-6 leading-[1.8]">
                <li>
                  First, the applicant prepares for BIS certification
                  requirements, including setting up in-house labs and preparing
                  products as per Indian Standards with required documentation.
                </li>

                <li>
                  Afterwards, the BIS official conducts an inspection of the
                  product along with the factory/industry.
                </li>

                <li>
                  After inspection, sealed samples are sent for testing at BIS
                  approved laboratories.
                </li>

                <li>
                  If the product passes all test parameters, BIS issues the ISI
                  certificate within 60–65 days from application submission.
                </li>
              </ul>
            </div>

            <div className="flex justify-center lg:justify-end pl-0 lg:pl-8">
              <Image
                src="/service/isi/isi-3.jpg"
                alt="ISI Certification Process Flow"
                width={600}
                height={460}
                className="w-full max-w-lg h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f5f7fa] py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              List of Products Covered Under BIS ISI Certification
            </h2>
            <p className="mt-3 text-gray-500 text-sm">
              Select your product category to understand ISI certification
              requirements, standards, and approval process.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {/* Footwear */}
            <Link
              href="/footwear"
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <Image
                src="/service/isi/shoes.jpg"
                alt="ISI Certification for Footwear Products"
                width={400}
                height={260}
                className="w-full h-36 object-cover group-hover:scale-105 transition"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Footwear Products
                </h3>
                <p className="text-sm text-gray-500">
                  Mandatory ISI certification for leather, rubber & safety
                  footwear.
                </p>
              </div>
            </Link>

            {/* Steel */}
            <Link
              href="/steel-products"
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <Image
                src="/service/isi/steel-products.webp"
                alt="ISI Certification for Steel Products"
                width={400}
                height={260}
                className="w-full h-36 object-cover group-hover:scale-105 transition"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Steel Products
                </h3>
                <p className="text-sm text-gray-500">
                  ISI marking for steel bars, rods, wires & structural steel.
                </p>
              </div>
            </Link>

            {/* Plywood & Furniture */}
            <Link
              href="/bis-isi-mark-certification"
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <Image
                src="/service/isi/plywood-furniture.jpg"
                alt="ISI Certification for Plywood and Furniture Products"
                width={400}
                height={260}
                className="w-full h-36 object-cover group-hover:scale-105 transition"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                   Furniture & Plywood 
                </h3>
                <p className="text-sm text-gray-500">
                  BIS ISI certification for plywood, boards & furniture items.
                </p>
              </div>
            </Link>

            {/* Plastic */}
            <Link
              href="/bis-isi-mark-certification"
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <Image
                src="/service/isi/plastic-products.jpg"
                alt="ISI Certification for Plastic Products"
                width={400}
                height={260}
                className="w-full h-36 object-cover group-hover:scale-105 transition"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Plastic Products
                </h3>
                <p className="text-sm text-gray-500">
                  Mandatory ISI marking for plastic pipes & molded products.
                </p>
              </div>
            </Link>

            {/* Home Appliances */}
            <Link
              href="/bis-isi-mark-certification"
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <Image
                src="/service/isi/home-appliences.jpg"
                alt="ISI Certification for Home Appliances"
                width={400}
                height={260}
                className="w-full h-36 object-cover group-hover:scale-105 transition"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Home Appliances
                </h3>
                <p className="text-sm text-gray-500">
                  ISI certification for household & electrical appliances.
                </p>
              </div>
            </Link>

            {/* Concrete */}
            <Link
              href="/bis-isi-mark-certification"
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <Image
                src="/service/isi/concrete-products.jpeg"
                alt="ISI Certification for Concrete Products"
                width={400}
                height={260}
                className="w-full h-36 object-cover group-hover:scale-105 transition"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Concrete Products
                </h3>
                <p className="text-sm text-gray-500">
                  BIS ISI marking for cement & concrete construction materials.
                </p>
              </div>
            </Link>

            {/* Hardware */}
            <Link
              href="/bis-isi-mark-certification"
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <Image
                src="/service/isi/hardware-products.png"
                alt="ISI Certification for Hardware Products"
                width={400}
                height={260}
                className="w-full h-36 object-cover group-hover:scale-105 transition"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Hardware Products
                </h3>
                <p className="text-sm text-gray-500">
                  ISI compliance for industrial & building hardware items.
                </p>
              </div>
            </Link>

            {/* Medical */}
            <Link
              href="/bis-isi-mark-certification"
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <Image
                src="/service/isi/medical.jpg"
                alt="ISI Certification for Medical Products"
                width={400}
                height={260}
                className="w-full h-36 object-cover group-hover:scale-105 transition"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Medical Products
                </h3>
                <p className="text-sm text-gray-500">
                  Mandatory ISI marking for medical & healthcare devices.
                </p>
              </div>
            </Link>

            {/* Chemicals */}
            <Link
              href="/chemicals-petrochemicals"
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <Image
                src="/service/isi/chemicals.jpg"
                alt="ISI Certification for Chemical Products"
                width={400}
                height={260}
                className="w-full h-36 object-cover group-hover:scale-105 transition"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Chemical Products
                </h3>
                <p className="text-sm text-gray-500">
                  BIS ISI certification for industrial & construction chemicals.
                </p>
              </div>
            </Link>

            {/* Electronics */}
            <Link
              href="/bis-isi-mark-certification"
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <Image
                src="/service/isi/electronics.jpg"
                alt="ISI Certification for Electronics Products"
                width={400}
                height={260}
                className="w-full h-36 object-cover group-hover:scale-105 transition"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Electronics Products
                </h3>
                <p className="text-sm text-gray-500">
                  Mandatory ISI marking for electronic & IT products.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* <section className="w-full bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              List Of Products Under BIS ISI MARK Certification
            </h2>

            <div className="mt-2 h-[2px] w-full bg-gray-200 relative">
              <span className="absolute left-0 top-0 h-[2px] w-48 bg-[#0075B6]"></span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-14">
            <div className="text-center">
              <Image
                src="/service/isi/shoes.jpg"
                alt="Shoes & Leather Products"
                width={220}
                height={160}
                className="mx-auto rounded-xl object-contain"
              />
              <p className="mt-3 text-sm text-gray-500">
                Shoes & Leather Products
              </p>
            </div>

            <div className="text-center">
              <Image
                src="/service/isi/electronics.jpg"
                alt="Electronic & IT Goods"
                width={220}
                height={160}
                className="mx-auto rounded-xl object-contain"
              />
              <p className="mt-3 text-sm text-gray-500">
                Electronic & IT Goods
              </p>
            </div>

            <div className="text-center">
              <Image
                src="/service/isi/bolts.jpg"
                alt="Bolts, Nuts and Fasteners"
                width={220}
                height={160}
                className="mx-auto rounded-xl object-contain"
              />
              <p className="mt-3 text-sm text-gray-500">
                Bolts, Nuts and Fasteners
              </p>
            </div>

            <div className="text-center">
              <Image
                src="/service/isi/automobile.jpg"
                alt="Automobile Accessories"
                width={220}
                height={160}
                className="mx-auto rounded-xl object-contain"
              />
              <p className="mt-3 text-sm text-gray-500">
                Automobile Accessories
              </p>
            </div>

            <div className="text-center">
              <Image
                src="/service/isi/building.jpg"
                alt="Building Materials"
                width={220}
                height={160}
                className="mx-auto rounded-xl object-contain"
              />
              <p className="mt-3 text-sm text-gray-500">Building Materials</p>
            </div>

            <div className="text-center">
              <Image
                src="/service/isi/chemicals.jpg"
                alt="Chemicals & Petrochemicals"
                width={220}
                height={160}
                className="mx-auto rounded-xl object-contain"
              />
              <p className="mt-3 text-sm text-gray-500">
                Chemicals & Petrochemicals
              </p>
            </div>

            <div className="text-center">
              <Image
                src="/service/isi/food.jpg"
                alt="Food Related Products"
                width={220}
                height={160}
                className="mx-auto rounded-xl object-contain"
              />
              <p className="mt-3 text-sm text-gray-500">
                Food Related Products
              </p>
            </div>

            <div className="text-center">
              <Image
                src="/service/isi/medical.jpg"
                alt="Medical Equipment"
                width={220}
                height={160}
                className="mx-auto rounded-xl object-contain"
              />
              <p className="mt-3 text-sm text-gray-500">Medical Equipment</p>
            </div>

            <div className="text-center">
              <Image
                src="/service/isi/kitchen.jpg"
                alt="Kitchen Appliances"
                width={220}
                height={160}
                className="mx-auto rounded-xl object-contain"
              />
              <p className="mt-3 text-sm text-gray-500">Kitchen Appliances</p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              OUR CONTRIBUTION IN OBTAINING BIS ISI MARK CERTIFICATE
            </h2>

            <div className="mt-2 h-0.5 w-full bg-gray-200 relative">
              <span className="absolute left-0 top-0 h-0.5 w-185 bg-[#0075B6]"></span>
            </div>
          </div>

          <ul className="space-y-1 text-gray-500 text-[15px] leading-7 list-disc pl-6">
            <li>
              We will train you regarding what is ISI Mark and how to obtain it.
            </li>

            <li>
              We will check whether a product complies with the BIS standards or
              not. After reciprocity, the project will move forward accordingly.
            </li>

            <li>
              Obtaining a BIS ISI Mark certificate is not an easy task; however,
              there is no better place to obtain it than AN Global Services. We
              provide complete ISI Mark certification consultancy services from
              start to end, including all documentation formalities and
              coordination with BIS offices in India.
            </li>

            <li>
              AN Global Services has an experienced team of experts who assist
              in documentation, evaluation, examination, and other related
              processes.
            </li>

            <li>
              We are equipped with the necessary resources to conduct virtual
              pre-audits and on-site pre-audits, if required.
            </li>

            <li>
              If clients lack an in-house testing facility, we also assist them
              in setting one up.
            </li>

            <li>
              We coordinate with BIS-accredited laboratories for product
              testing.
            </li>

            <li>
              As a leading compliance service provider, AN Global Services
              assists in custom clearance of sample products.
            </li>

            <li>
              We ensure reliable and punctual service delivery and also visit
              BIS offices on behalf of clients, if required.
            </li>

            <li>
              We continuously invest efforts to meet the evolving requirements
              of BIS.
            </li>

            <li>
              In case of any concern, we assure you of providing the finest
              solution.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
