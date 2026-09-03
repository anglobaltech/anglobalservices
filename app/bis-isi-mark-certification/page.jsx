import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import IsiProductsTable from "../../components/IsiProductsTable"; 

export const revalidate = 86400;

export const metadata = {
  title:
    "ISI Certificate - Process, Documents, Cost, Benefits | AN Global Services",

  description:
    "Apply for ISI Certificate & BIS Certificate in India with AN Global Services. Trusted BIS ISI certificate services for manufacturers & importers. End-to-end support including documentation, product testing, factory inspection & fast BIS approval.",

  keywords: [
    "ISI certificate",
    "ISI certification",
    "BIS certification",
    "BIS certificate",
    "BIS ISI certification",
    "ISI mark certification",
    "BIS ISI mark",
    "ISI certificate in India",
    "apply for ISI certification",
    "how to get ISI mark",
    "ISI mark registration process",
    "ISI certificate apply online",
    "ISI certification consultant",
    "BIS ISI consultant India",
    "ISI mark agent",
    "ISI certificate consultancy",
    "ISI certificate for manufacturers",
    "ISI certificate for importers",
    "foreign manufacturer ISI certificate",
    "ISI mark for factory",
    "ISI certification process",
    "documents required for ISI certificate",
    "ISI certificate cost",
    "ISI certification fees",
    "time required for ISI certification",
    "mandatory ISI certification",
    "products under ISI certificate",
    "list of products under ISI mark",
    "electrical products ISI certification",
    "AN Global Services ISI certificate",
    "BIS certificate services",
    "BIS certification services India",
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
      <Script
        id="isi-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {`
{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "Organization",
      "name": "AN Global Services",
      "url": "https://www.anglobalservices.com",
      "logo": "https://www.anglobalservices.com/logo.png",
      "sameAs": [
        "https://www.linkedin.com",
        "https://www.facebook.com"
      ]
    },

    {
      "@type": "Service",
      "serviceType": "ISI Certificate Consultancy",
      "provider": {
        "@type": "Organization",
        "name": "AN Global Services"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "description": "Professional ISI certificate consultancy services for manufacturers, importers and brand owners including documentation, BIS product testing, factory inspection and license approval."
    },

    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.anglobalservices.com"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "ISI Certificate",
          "item": "https://www.anglobalservices.com/bis-isi-mark-certification"
        }
      ]
    },

    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is ISI Certificate in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ISI Certificate is a product certification issued by the Bureau of Indian Standards (BIS) confirming that a product complies with the relevant Indian Standard for safety, quality and performance."
          }
        },
        {
          "@type": "Question",
          "name": "Is ISI Certificate mandatory in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ISI certification is mandatory for products notified under BIS Quality Control Orders. Manufacturing or selling such products without ISI certification can lead to penalties under the BIS Act."
          }
        },
        {
          "@type": "Question",
          "name": "Who needs an ISI Certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Indian manufacturers, foreign manufacturers exporting to India, importers, brand owners and traders dealing in notified products must obtain ISI certification before selling products in the Indian market."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to obtain an ISI Certificate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The ISI certificate approval process usually takes between 30 to 60 days depending on the product category, BIS inspection schedule, factory readiness and product testing timelines."
          }
        },
        {
          "@type": "Question",
          "name": "What is the cost of ISI Certificate in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ISI certification cost includes BIS application fee, inspection charges, product testing fees, marking fee and license fee. The total cost varies depending on the product category and applicable Indian Standard."
          }
        },
        {
          "@type": "Question",
          "name": "How to apply for ISI Certificate in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Manufacturers can apply for ISI certification by submitting an application to BIS, arranging product testing in BIS-recognized laboratories, undergoing factory inspection and complying with the relevant Indian Standard."
          }
        }
      ]
    }

  ]
}
`}
      </Script>

      <section className="relative w-full h-65 md:h-68">
        <Image
          src="/service/isi/about.jpg"
          alt="BIS ISI Certification Service"
          fill
          priority
          className="object-cover "
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-white text-3xl  font-bold uppercase tracking-wide">
              ISI Certificate Process, Cost, Documents & Consultant Services
            </h1>
 
            <p className="text-gray-300 mt-4 text-md  max-w-3xl mx-auto leading-relaxed">
              Expert ISI Certificate & BIS Certificate Consultants in India for
              manufacturers, importers & brand owners.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div className="xl:col-span-1">
          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src="/service/isi/isi-certificate-2.webp"
              alt="ISI Mark Certificate in India"
              width={800}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="xl:col-span-1">
          <h2 className="text-2xl font-bold mb-4 border-b uppercase">
            What is BIS ISI Certificate in India?
          </h2>

          <div className="space-y-5 text-gray-500 leading-7 text-[15px]">
            <p className="font-medium text-gray-500">
              BIS ISI Certificate is a mandatory product certificate scheme in
              India that ensures products comply with Indian Standards for
              safety, quality, and performance.
            </p>
            <p>
              The Bureau of Indian Standards (BIS) is the National Certification
              body of India that issues BIS licenses to manufacturers and
              importers for various products under voluntary or mandatory
              certification schemes. BIS certificate is a third-party assurance
              of product quality, consumer safety, and reliability.
            </p>

            <p>
              BIS certificate ensures that a product conforms to relevant Indian
              Standards and is safe for use in the Indian market. Certain
              products listed under the Mandatory Product Certification Scheme
              of BIS must obtain certificate before being sold in India.
            </p>

            <p>
              AN Global Services is an established ISI Certificate service provider for both Indian and international manufacturers. We assist in managing the complete process required to obtain ISI Certificate for mandatory as well as optional products.
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
                536+ products
              </strong>{" "}
              fall under mandatory ISI certification. Without ISI License,
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

      <section className="w-full bg-[#f9fafb] pb-6">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 uppercase">
            ISI Certification Services in India
          </h2>

          <div className="h-0.5 w-full bg-gray-200 mb-3">
            <span className="block h-0.5 w-95 bg-[#0075B6]"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <p className="text-gray-500 text-[15px] leading-7">
              AN Global Services provides professional ISI Certification
              Services in India to help manufacturers, importers, and brand
              owners obtain the ISI Mark as per Bureau of Indian Standards
              requirements. Our experts manage the complete ISI certification
              process including documentation, product testing, factory
              inspection, and BIS coordination.
            </p>

            <ul className="space-y-3 text-gray-500 text-[15px] list-disc pl-6">
              <li>ISI certificate for Indian manufacturers</li>
              <li>ISI certification services for importers & brand owners</li>
              <li>Product testing with BIS-recognized laboratories</li>
              <li>Factory inspection & compliance preparation</li>
              <li>End-to-end ISI certification consultancy</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full bg-white pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 uppercase">
            BIS Certification Services in India
          </h2>

          <div className="h-0.5 w-full bg-gray-200 mb-3">
            <span className="block h-0.5 w-98 bg-[#0075B6]"></span>
          </div>

          <div className="space-y-5 text-gray-500 text-[15px] leading-7">
            <p>
              BIS Certification is mandatory for products notified under Quality
              Control Orders issued by the Government of India. Since ISI Mark
              Certification is issued under the BIS Product Certification
              Scheme, manufacturers must comply with BIS regulations to obtain
              ISI approval.
            </p>

            <p>
              Our BIS certification consultants assist businesses in obtaining
              BIS ISI Mark Certification, managing approvals, and avoiding
              regulatory penalties by ensuring timely and accurate compliance.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f5f5f5] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-900 mb-12">
            SIGNIFICANCE OF BIS/ISI MARK CERTIFICATE IN INDIA
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
                certified products over uncertified ones. BIS ISI certificate
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
                BIS ISI certificate offers legal benefits by allowing
                manufacturers to produce mandatory listed goods without legal
                issues. It protects businesses from penalties, fines, and legal
                actions that may arise due to non-compliance with BIS
                regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-xl md:text-xl font-bold text-gray-900">
              DOCUMENTS REQUIRED TO OBTAIN BIS ISI MARK CERTIFICATE IN INDIA
            </h2>

            <div className=" h-0.5 w-full bg-gray-200 relative">
              <span className="absolute left-0 top-0 h-0.5 w-180 bg-[#0075B6]"></span>
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

      <section className="w-full bg-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#4a5673] text-white p-6 md:p-8 mb-12">
            <h2 className="text-center text-xl md:text-2xl font-bold mb-4">
              PROCESS OF GRANT OF ISI CERTIFICATE
            </h2>

            <ul className="space-y-2 text-[15px] list-disc pl-6">
              <li>
                Step1: Organize the Lab Test Report (LTR) from a BIS-recognized
                laboratory
              </li>
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

      <section className="w-full bg-[#f5f7fa] py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              List of Products Covered Under BIS ISI Certificate
            </h2>
            <p className="mt-3 text-gray-500 text-sm">
              Select your product category to understand ISI certificate
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
              href="/bis-isi-certification-metal-products"
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
                  Metal Products
                </h3>
                <p className="text-sm text-gray-500">
                  ISI marking for metal bars, rods, wires & structural metal.
                </p>
              </div>
            </Link>

            {/* Plywood & Furniture */}
            <Link
              href="/bis-isi-mark-certification-furniture-plywood"
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
                  Furniture & Plywood Products
                </h3>
                <p className="text-sm text-gray-500">
                  BIS ISI certification for plywood, boards & furniture items.
                </p>
              </div>
            </Link>

            {/* Plastic */}
            <Link
              href="/bis-isi-mark-certification-plastic-products"
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
              href="/bis-isi-mark-certification-home-appliances-kitchen-products"
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
              href="/bis-isi-mark-certification-concrete-products"
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
              href="/bis-isi-mark-certification-hardware-products"
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
              href="/bis-isi-mark-certification-medical-products"
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
              href="/bis-isi-mark-certification-electrical-electronics-products"
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
                 Electrical & Electronics Products
                </h3>
                <p className="text-sm text-gray-500">
                  Mandatory ISI marking for electronic & IT products.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>


      <IsiProductsTable />
      <section className="bg-[#0f172a] py-12 ">
        <div className="max-w-6xl mx-auto px-4 text-white text-center">
          <h2 className="text-xl sm:text-3xl  font-bold mb-4">
            Need Help with ISI Certification?
          </h2>

          <p className="text-sm sm:text-base md:text-md text-gray-300 max-w-xl mx-auto mb-6 leading-relaxed">
            Talk to our BIS & ISI certification experts for fast approval and
            end-to-end compliance support.
          </p>
          <Link href="/contact-us">
            <button
              className="
            w-full sm:w-auto cursor-pointer
            bg-[#005f86]
            hover:bg-[#004766]
            text-white
            font-semibold
            px-3 sm:px-7
            py-3 sm:py-3
            rounded-lg
            text-base sm:text-lg
            shadow-lg
            transition"
            >
              Request Free Consultation
            </button>
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
          ISI Certification Cost in India
        </h2>

        <div className="w-full h-0.5 bg-gray-200 relative mb-6">
          <span className="absolute left-0 top-0 h-0.5 w-87 bg-[#0072b1]" />
        </div>

        {/* Intro */}
        <p className="mt-6 text-gray-500 text-[15px] leading-6 text-justify mb-6">
          The cost of obtaining ISI Certification in India depends on several
          factors such as the type of product, applicable Indian Standard (IS),
          number of product variants, testing requirements, and factory
          readiness. ISI Certification is issued under the BIS Product
          Certification Scheme (Scheme I), and manufacturers are required to pay
          certain statutory fees directly to the Bureau of Indian Standards
          (BIS) along with applicable testing charges.
        </p>

        {/* Cost Table */}
        <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg mb-6">
          <table className="w-full border-collapse text-[15px]">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">
                  S. No.
                </th>
                <th className="border border-gray-200 px-4 py-2 text-left">
                  Cost Component
                </th>
                <th className="border border-gray-200 px-4 py-2 text-left">
                  Amount (INR)
                </th>
                <th className="border border-gray-200 px-4 py-2 text-left">
                  Remarks
                </th>
              </tr>
            </thead>

            <tbody className="divide-y">
              <tr>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">
                  Application Fee
                </td>
                <td className="border border-gray-200 px-4 py-2">₹1,000</td>
                <td className="border border-gray-200 px-4 py-2">
                  One-time fee payable to BIS
                </td>
              </tr>

              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">2</td>
                <td className="border border-gray-200 px-4 py-2">
                  Factory Inspection / Audit Fee
                </td>
                <td className="border border-gray-200 px-4 py-2">₹7,000</td>
                <td className="border border-gray-200 px-4 py-2">
                  Payable to BIS for factory audit
                </td>
              </tr>

              <tr>
                <td className="border border-gray-200 px-4 py-2">3</td>
                <td className="border border-gray-200 px-4 py-2">
                  Sample Testing Charges
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  As applicable
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  Depends on product & BIS-recognized lab
                </td>
              </tr>

              <tr>
                <td className="border border-gray-200 px-4 py-2">4</td>
                <td className="border border-gray-200 px-4 py-2">
                  Marking Fee
                </td>
                <td className="border border-gray-200 px-4 py-2">As per IS</td>
                <td className="border border-gray-200 px-4 py-2">
                  Calculated based on production volume
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Additional Info */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-5">
          <p className="text-gray-500 text-[15px] leading-6 text-justify">
            <strong>Note:</strong> In addition to the above government fees,
            manufacturers are required to invest in setting up an in-house
            testing laboratory as per the applicable Indian Standard. The cost
            of testing equipment, calibration, and quality control personnel
            varies depending on the product category.
          </p>
        </div>

        {/* Final Note */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <p className="text-gray-500 text-[14px] leading-6">
            <strong>Important:</strong> The overall ISI Certification cost may
            vary based on product complexity, number of test parameters, factory
            preparedness, and inspection timelines. Proper documentation and
            pre-audit readiness can significantly reduce delays and additional
            expenses during the certification process.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
          Time Required to Obtain BIS ISI Mark Certification in India
        </h2>

        <div className="w-full h-0.5 bg-gray-200 relative mb-6">
          <span className="absolute left-0 top-0 h-0.5 w-172 bg-[#0072b1]" />
        </div>

        {/* Intro */}
        <p className="mt-6 text-gray-500 text-[15px] leading-6 text-justify mb-6">
          The time required to obtain BIS ISI Certificate in India varies
          depending on the type of product, applicable Indian Standard (IS),
          readiness of the manufacturing unit, and completion of testing and
          documentation requirements. ISI Certification is granted under the BIS
          Product Certification Scheme (Scheme I) and involves application
          review, factory inspection, and laboratory testing before the license
          is issued.
        </p>

        {/* Estimated Timeline Box */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
          <p className="text-gray-500 text-[15px] leading-6">
            <strong>Estimated Overall Timeline:</strong> For most domestic
            manufacturers, the ISI Certification process typically takes around{" "}
            <strong>45 to 60 days</strong>, provided the factory setup, in-house
            testing facilities, and documentation are complete at the time of
            application.
          </p>
        </div>

        {/* Factors Affecting Time */}
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Factors Affecting ISI Certification Timeline
          </h3>

          <ul className="list-disc pl-6 text-[15px] text-gray-500 space-y-2">
            <li>
              Readiness of the manufacturing unit and availability of required
              machinery and in-house testing equipment.
            </li>
            <li>
              Completeness and accuracy of documents submitted with the
              application.
            </li>
            <li>
              Number of product variants and complexity of testing requirements
              as per the applicable Indian Standard.
            </li>
            <li>
              Scheduling availability of BIS officials for factory inspection.
            </li>
            <li>
              Turnaround time of BIS-recognized laboratories for sample testing.
            </li>
          </ul>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
          Who Needs ISI Mark Certification in India?
        </h2>
        <div className="w-full h-0.5 bg-gray-200 relative mb-6">
          <span className="absolute left-0 top-0 h-0.5 w-122 bg-[#0072b1]" />
        </div>

        {/* Intro */}
        <p className="mt-6 text-gray-500 text-[15px] leading-6 text-justify mb-6">
          ISI Mark Certification is a mandatory quality certification issued by
          the Bureau of Indian Standards (BIS) for products notified under
          various Quality Control Orders (QCOs) in India. Any business involved
          in the manufacturing, import, or branding of such notified products
          must obtain ISI Certification before selling them in the Indian
          market. The requirement applies to both domestic and foreign entities
          to ensure product safety, quality, and consumer protection.
        </p>

        {/* Category Cards */}
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              1. Indian Manufacturers
            </h3>
            <p className="text-gray-500 text-[15px] leading-6 text-justify">
              Indian manufacturers producing goods that fall under mandatory BIS
              certification must obtain an ISI Mark license before manufacturing
              and selling their products. This includes industries such as
              electrical appliances, medical products, construction materials,
              toys, cement, household items, and consumer safety products.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              2. Foreign Manufacturers Exporting to India
            </h3>
            <p className="text-gray-500 text-[15px] leading-6 text-justify">
              Foreign manufacturers supplying products to India must obtain ISI
              Mark Certification through the Foreign Manufacturers Certification
              Scheme (FMCS). These manufacturers are required to appoint an
              Authorized Indian Representative (AIR) and comply with Indian
              Standards to legally export and sell notified products in India.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              3. Importers and Traders
            </h3>
            <p className="text-gray-500 text-[15px] leading-6 text-justify">
              Importers and traders dealing with ISI-notified products are
              responsible for ensuring that the imported goods carry a valid ISI
              Mark. Importing or selling uncertified products may lead to
              customs detention, penalties, seizure of goods, or cancellation of
              import permissions.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              4. Brand Owners and Private Label Businesses
            </h3>
            <p className="text-gray-500 text-[15px] leading-6 text-justify">
              Businesses selling products under their own brand name, even if
              the manufacturing is outsourced, must ensure ISI Certification is
              obtained. Brand owners are legally accountable for compliance with
              BIS requirements and product quality in the Indian market.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              5. Government Suppliers and Tender Participants
            </h3>
            <p className="text-gray-500 text-[15px] leading-6 text-justify">
              Manufacturers and suppliers participating in government tenders,
              public sector procurement, and institutional supply contracts are
              often required to provide ISI-certified products. ISI Mark
              Certification is a prerequisite for eligibility in many government
              and PSU tenders.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              6. E-commerce Sellers and Online Marketplaces
            </h3>
            <p className="text-gray-500 text-[15px] leading-6 text-justify">
              Sellers listing ISI-notified products on e-commerce platforms must
              provide valid BIS certification details. Online marketplaces are
              increasingly enforcing BIS compliance to avoid regulatory action
              and ensure consumer safety.
            </p>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-6 bg-white border border-gray-200 rounded-lg p-4">
          <p className="text-gray-500 text-[14px] leading-6">
            <strong>Important:</strong> Selling, importing, or manufacturing
            products without mandatory ISI Mark Certification is a punishable
            offense under the BIS Act, 2016. Non-compliance may result in fines,
            product seizure, cancellation of licenses, or legal action by
            regulatory authorities.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 ">
        <h2 className="text-xl uppercase font-semibold text-gray-900">
          Frequently Asked Questions (FAQs) – ISI Certification
        </h2>
        <div className="h-0.5 w-full bg-gray-200 relative">
          <span className="absolute left-0 top-0 h-0.5 w-153 bg-[#1f6ed5]"></span>
        </div>

        <div className="mt-6 space-y-4 text-[15px]">
          <div>
            <h3 className="font-semibold text-gray-800 ">
              What is ISI Mark Certification?
            </h3>
            <p className="text-gray-500 text-[15px] leading-6">
              ISI Mark Certification is a quality certificate issued by the
              Bureau of Indian Standards (BIS) that confirms a product complies
              with the applicable Indian Standard for safety, quality, and
              performance.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">
              Is ISI Mark Certification mandatory in India?
            </h3>
            <p className="text-gray-500 text-[15px] leading-6">
              Yes, ISI certification is mandatory for products notified under
              BIS Quality Control Orders. Selling or importing such products
              without ISI certification is a punishable offense.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">
              Who needs ISI Mark Certification?
            </h3>
            <p className="text-gray-500 text-[15px] leading-6">
              Indian manufacturers, foreign manufacturers exporting to India,
              importers, brand owners, and sellers of notified products are
              required to obtain ISI Mark Certification.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">
              How long does it take to get ISI Certification?
            </h3>
            <p className="text-gray-500 text-[15px] leading-6">
              The ISI Certification process generally takes 30 to 60 days,
              depending on product type, testing requirements, factory
              readiness, and BIS inspection timeline.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">
              What is the cost of ISI Certification in India?
            </h3>
            <p className="text-gray-500 text-[15px] leading-6">
              The cost includes BIS application fee, inspection fee, testing
              charges, marking fee, and license fee. The total cost varies based
              on the product and applicable Indian Standard.
            </p>
          </div>

          <div className="mt-6 bg-gray-100 border border-gray-200 rounded-lg p-4">
            <p className="text-gray-700 text-[15px]">
              Still have questions? Our in-depth{" "}
              <Link
                href="/blogs/bis-isi-mark-product-certificate-guide"
                className="text-blue-700 font-semibold "
              >
                BIS ISI Certification blog
              </Link>{" "}
              covers real-world scenarios, common mistakes, and compliance tips
              for manufacturers.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-xl  font-bold text-gray-900">
              OUR CONTRIBUTION IN OBTAINING BIS ISI MARK CERTIFICATE
            </h2>

            <div className=" h-0.5 w-full bg-gray-200 relative">
              <span className="absolute left-0 top-0 h-0.5 w-155 bg-[#0075B6]"></span>
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
              provide complete BIS ISI Mark certificate consultancy services
              from start to end, including all documentation formalities and
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
