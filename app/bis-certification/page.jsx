import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const revalidate = 86400;

export const metadata = {
  title:
    "BIS Certification in India – Schemes, Process, Documents & Validity | AN Global Services",

  description:
    "Get BIS Certification in India with AN Global Services. We assist manufacturers and importers with ISI Mark, FMCS, CRS Registration, and BIS Hallmarking – complete end-to-end support including documentation, testing, and BIS coordination.",

  keywords: [
    "BIS certification",
    "BIS certificate",
    "BIS certification in India",
    "Bureau of Indian Standards certification",
    "ISI mark certification",
    "BIS ISI mark",
    "BIS certificate apply online",
    "BIS certification consultant India",
    "BIS consultant",
    "BIS certificate for manufacturers",
    "BIS certificate for importers",
    "foreign manufacturer BIS certificate",
    "FMCS certification India",
    "Foreign Manufacturer Certification Scheme",
    "BIS CRS registration",
    "Compulsory Registration Scheme electronics",
    "BIS hallmarking",
    "BIS hallmark certificate gold jewellery",
    "BIS mandatory products list",
    "BIS certification process",
    "documents required for BIS certification",
    "BIS certification cost India",
    "AN Global Services BIS certificate",
    "BIS certification services India",
  ],

  alternates: {
    canonical: "https://www.anglobalservices.com//bis-certification",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function BISPage() {
  return (
    <main className="w-full">
      <Script id="bis-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.anglobalservices.com/bis-certification",
              url: "https://www.anglobalservices.com/bis-certification",
              name: "BIS Certification in India – ISI Mark, FMCS, CRS & Hallmarking",
              description:
                "Complete guide to BIS certification in India including ISI mark, FMCS, CRS registration, process, documents, cost and consultancy support.",
              inLanguage: "en",
            },
            {
              "@type": "Service",
              name: "BIS Certification Services in India",
              provider: {
                "@type": "Organization",
                name: "AN Global Services",
                url: "https://www.anglobalservices.com",
              },
              areaServed: {
                "@type": "Country",
                name: "India",
              },
              description:
                "Professional BIS certification consultancy for ISI mark, FMCS, CRS registration and hallmarking. End-to-end support including documentation, testing and BIS approval.",
              serviceType: [
                "BIS ISI Certification",
                "FMCS Certification",
                "BIS CRS Registration",
                "BIS Hallmarking",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is BIS ISI Certification?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "BIS ISI Certification is a quality certification issued by the Bureau of Indian Standards that ensures products comply with Indian safety and quality standards.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is BIS certification mandatory in India?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "BIS certification is mandatory for products notified under Quality Control Orders (QCOs) issued by the Government of India.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Who needs BIS certification?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Manufacturers, importers, and brand owners dealing in products notified under BIS schemes must obtain certification before selling in India.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does BIS certification take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The BIS certification process typically takes around 60 to 65 days depending on testing and inspection.",
                  },
                },
              ],
            },
          ],
        })}
      </Script>

      {/* Hero Banner */}
      <section className="relative w-full h-65 md:h-68">
        <Image
          src="/service/isi/about.jpg"
          alt="BIS Certification Service India"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-white text-3xl font-bold uppercase tracking-wide">
              BIS Certification in India – Schemes, Process, Cost & Documents
            </h1>
            <p className="text-gray-300 mt-4 text-md max-w-3xl mx-auto leading-relaxed">
              Trusted BIS Certification Consultants in India for ISI Mark, FMCS,
              CRS Registration & Hallmarking – for manufacturers, importers &
              brand owners.
            </p>
          </div>
        </div>
      </section>

      {/* What is BIS Certification */}
      <section className="max-w-7xl mx-auto px-4 pt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-1">
          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src="/service/bis-certification.jpeg"
              alt="BIS Certificate in India"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-xl font-bold mb-4 border-b uppercase">
            What is BIS Certification in India?
          </h2>

          <div className="space-y-3 text-gray-500 leading-7 text-[15px]">
            <p className="font-medium text-gray-500">
              BIS Certification is the process of obtaining a quality standard
              licence from the Bureau of Indian Standards (BIS) for
              manufacturing and selling products in the Indian market.
            </p>
            <p>
              The Bureau of Indian Standards (BIS) is a national standards
              organisation functioning under the Ministry of Consumer Affairs,
              Food, and Public Distribution, Government of India. BIS is
              responsible for ensuring the quality, consistency, and reliability
              of products available to end users. It achieves this through
              issuing quality certifications, formulating Indian Standards,
              grading products, and conducting product testing.
            </p>
            <p>
              BIS certification schemes are primarily voluntary in nature.
              However, the Central Government has made BIS certification
              mandatory for specific product categories through Quality Control
              Orders. These mandatory schemes serve important goals: protecting
              public health and safety, ensuring the safety of people, animals
              and plants, promoting environmental protection, preventing unfair
              trade practices, and safeguarding national security.
            </p>
          </div>
        </div>
      </section>

      {/* BIS Background */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 pb-10">
          <div className="space-y-6 text-gray-500 text-[15px] leading-7">
            <p className="pt-4">
              BIS was empowered by law in 1986 to offer a voluntary product
              certification scheme to manufacturers. Under this scheme,
              manufacturers who are confident that their product meets Indian
              Standards may apply for a BIS licence to use the Standard Mark on
              their product as a recognised symbol of quality compliance.
            </p>
            <p>
              For products covered under mandatory certification, manufacturers
              and importers are not permitted to manufacture, import, store, or
              sell such products in India without obtaining the applicable BIS
              certification and affixing the Standard Mark on the product.
            </p>
            <p>
              BIS runs several certification schemes to address the needs of
              different product categories and types of manufacturers. These
              include the ISI Mark Scheme for domestic manufacturers, the
              Foreign Manufacturer Certification Scheme (FMCS) for overseas
              manufacturers, the Compulsory Registration Scheme (CRS) for
              electronics and IT products, and the Hallmarking Scheme for gold
              and silver jewellery.
            </p>
          </div>
        </div>
      </section>

      {/* BIS Certification Services */}
      <section className="w-full bg-white ">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 uppercase">
            BIS Certification Services in India
          </h2>
          <div className="h-0.5 w-full bg-gray-200 mb-3">
            <span className="block h-0.5 w-15 md:w-95 bg-[#0075B6]"></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <p className="text-gray-500 text-[15px] leading-7">
              AN Global Services provides professional BIS Certification
              Services in India to help manufacturers, importers, and brand
              owners obtain the required BIS licence under the applicable
              scheme. Our team manages the complete process including product
              assessment, documentation, laboratory coordination, factory
              readiness support, and end-to-end BIS liaison.
            </p>
            <ul className="space-y-3 text-gray-500 text-[15px] list-disc pl-6">
              <li>BIS ISI Mark licence for Indian manufacturers</li>
              <li>
                FMCS certification for foreign manufacturers exporting to India
              </li>
              <li>BIS CRS registration for electronics and IT products</li>
              <li>
                BIS Hallmarking registration for gold and silver jewellery
              </li>
              <li>
                End-to-end BIS certification consultancy and documentation
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Activities of BIS */}
      <section className="w-full bg-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 uppercase">
            Key Activities of the Bureau of Indian Standards
          </h2>
          <div className="h-0.5 w-full bg-gray-200 mb-5">
            <span className="block h-0.5 w-50 md:w-140 bg-[#0075B6]"></span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              {
                title: "Standard Formulation",
                desc: "Developing and publishing Indian Standards across product categories and industries.",
              },
              {
                title: "Product Certification & Marking",
                desc: "Issuing BIS licences and authorising manufacturers to use the Standard Mark on products.",
              },
              {
                title: "Testing Services",
                desc: "Conducting product testing through BIS-recognised laboratories across India.",
              },
              {
                title: "Training Services",
                desc: "Providing training to manufacturers and organisations on BIS standards and compliance.",
              },
              {
                title: "System Certification",
                desc: "Certifying management systems such as quality and environmental management systems.",
              },
              {
                title: "Industrial Awareness",
                desc: "Creating awareness among businesses and consumers about Indian Standards and BIS schemes.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#f5f7fa] border border-gray-200 rounded-lg p-4"
              >
                <h3 className="font-semibold text-gray-800 text-[14px] mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-[13px] leading-5">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Significance */}
      <section className="w-full bg-[#f5f5f5] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-900 mb-12">
            SIGNIFICANCE OF BIS CERTIFICATION FOR MANUFACTURERS IN INDIA
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Wider Market Access
              </h3>
              <div className="h-0.5 w-full bg-gray-200 mb-5">
                <span className="block h-0.5 w-50 bg-[#0075B6]"></span>
              </div>
              <p className="text-gray-500 text-[15px] leading-7">
                A BIS-certified product is recognised as safe, reliable, and
                compliant with Indian Standards. This builds consumer confidence
                and gives certified products stronger acceptance in retail,
                institutional, and government markets compared to uncertified
                products.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 ">
                Competitive Advantage
              </h3>
              <div className="h-0.5 w-full bg-gray-200 mb-5">
                <span className="block h-0.5 w-55 bg-[#0075B6]"></span>
              </div>
              <p className="text-gray-500 text-[15px] leading-7">
                BIS certification signals quality and responsible manufacturing.
                Consumers and procurement teams prefer BIS-certified products,
                giving certified manufacturers a distinct edge over competitors
                and supporting business growth.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 ">
                Uninterrupted Business Operations
              </h3>
              <div className="h-0.5 w-full bg-gray-200 mb-5">
                <span className="block h-0.5 w-85 bg-[#0075B6]"></span>
              </div>
              <p className="text-gray-500 text-[15px] leading-7">
                Holding a valid BIS licence allows manufacturers to produce and
                sell notified products without regulatory disruption. It ensures
                smooth market acceptance and prevents production stoppages due
                to non-compliance with mandatory certification requirements.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 ">
                Legal Compliance & Protection
              </h3>
              <div className="h-0.5 w-full bg-gray-200 mb-5">
                <span className="block h-0.5 w-74 bg-[#0075B6]"></span>
              </div>
              <p className="text-gray-500 text-[15px] leading-7">
                BIS certification ensures that manufacturers of mandatory
                products operate within the legal framework of the BIS Act,
                2016. It protects businesses from penalties, fines, product
                seizure, and legal proceedings that arise from non-compliance
                with Indian Standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BIS Certification Schemes Cards */}
      <section className="w-full bg-[#f5f7fa] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 uppercase">
              Types of BIS Certification Schemes in India
            </h2>
            <p className="mt-3 text-gray-500 text-sm max-w-2xl mx-auto">
              BIS operates distinct certification schemes depending on the
              product category and type of manufacturer. Select the scheme
              applicable to your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* BIS ISI Certificate */}
            <Link
              href="https://www.anglobalservices.com/bis-isi-mark-certification"
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <Image
                src="/isi-mark-certification.jpeg"
                alt="BIS ISI Mark Certification for Indian Manufacturers"
                width={400}
                height={280}
                className="w-full h-50 object-cover group-hover:scale-102 transition"
              />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block bg-[#0075B6] text-white text-xs font-semibold px-2 py-0.5 rounded">
                    ISI Mark
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-[15px]">
                  BIS ISI Mark Certification
                </h3>
                <p className="text-sm text-gray-500 leading-6">
                  BIS ISI certification ensures products meet Indian Standards.
                  It allows manufacturers to use the ISI mark for quality and
                  safety.
                </p>
              </div>
            </Link>

            {/* FMCS */}
            <Link
              href="https://www.anglobalservices.com/foreign-manufacturers-certification-scheme-fmcs"
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <Image
                src="/fmcs-certification.jpeg"
                alt="Foreign Manufacturers Certification Scheme FMCS India"
                width={400}
                height={260}
                className="w-full h-50 object-cover group-hover:scale-105 transition"
              />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block bg-[#4a5673] text-white text-xs font-semibold px-2 py-0.5 rounded">
                    FMCS
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-[15px]">
                  Foreign Manufacturer Certification Scheme (FMCS)
                </h3>
                <p className="text-sm text-gray-500 leading-6">
                  FMCS certification enables foreign manufacturers to use the
                  ISI mark for products exported to India through BIS approval.
                </p>
              </div>
            </Link>

            {/* CRS */}
            <Link
              href="https://www.anglobalservices.com/bis-crs-registration-electronic-products"
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <Image
                src="/bis-crs-registration.jpeg"
                alt="BIS CRS Registration for Electronics and IT Products India"
                width={400}
                height={260}
                className="w-full h-50 object-cover group-hover:scale-105 transition"
              />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block bg-[#6b57a6] text-white text-xs font-semibold px-2 py-0.5 rounded">
                    CRS
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-[15px]">
                  BIS CRS Registration
                </h3>
                <p className="text-sm text-gray-500 leading-6">
                  BIS CRS registration is required for electronics and IT
                  products. It ensures compliance with Indian safety standards.
                </p>
              </div>
            </Link>

            {/* Hallmarking */}
            <Link
              href="https://www.anglobalservices.com/hallmarking"
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <Image
                src="/bis-hallmarking.jpeg"
                alt="BIS Hallmarking Registration for Gold and Silver Jewellery India"
                width={400}
                height={260}
                className="w-full h-50 object-cover group-hover:scale-105 transition"
              />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block bg-[#b87333] text-white text-xs font-semibold px-2 py-0.5 rounded">
                    Hallmark
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-[15px]">
                  BIS Hallmarking
                </h3>
                <p className="text-sm text-gray-500 leading-6">
                  BIS Hallmarking ensures the purity of gold and silver
                  jewellery. It protects consumers and guarantees authenticity.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

       {/* Documents Required */}
      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-xl md:text-xl font-bold text-gray-900">
              DOCUMENTS REQUIRED FOR BIS CERTIFICATION IN INDIA
            </h2>
            <div className="h-0.5 w-full bg-gray-200 relative">
              <span className="absolute left-0 top-0 h-0.5 w-60 md:w-143 bg-[#0075B6]"></span>
            </div>
          </div>

          <ul className="space-y-3 text-gray-500 text-[15px] leading-6 list-disc pl-6">
            <li>
              Business registration document – GST certificate, Partnership
              Deed, Certificate of Incorporation, or equivalent legal identity
              proof.
            </li>
            <li>
              Manufacturing process flow chart covering all production stages,
              including in-process quality controls and any outsourced
              operations.
            </li>
            <li>Product or component drawings, wherever applicable.</li>
            <li>
              In-house testing report for the product as per the applicable
              Indian Standard.
            </li>
            <li>
              List of raw materials used along with test certificates of raw
              materials.
            </li>
            <li>
              Layout plan of the manufacturing premises indicating the location
              of production machinery and the in-house laboratory.
            </li>
            <li>
              Details of manufacturing machinery available at the factory.
            </li>
            <li>
              Trademark registration documents for the brand to be applied on
              the product.
            </li>
            <li>
              List of quality control personnel along with copies of their
              qualification certificates.
            </li>
            <li>
              Factory location map showing directions from the nearest railway
              station, airport, or landmark.
            </li>
            <li>
              List of testing equipment available in the in-house laboratory.
            </li>
            <li>
              Undertaking or declaration as required by BIS (format provided by
              our team).
            </li>
            <li>
              For foreign manufacturers – details of the Authorized Indian
              Representative (AIR) along with an authorization letter.
            </li>
          </ul>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-10">
        <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
          Time Required to Obtain BIS license India
        </h2>
        <div className="w-full h-0.5 bg-gray-200 relative mb-6">
          <span className="absolute left-0 top-0 h-0.5 w-62 md:w-145 bg-[#0072b1]" />
        </div>

        <p className="mt-6 text-gray-500 text-[15px] leading-6 text-justify mb-6">
          The time required to obtain BIS Certification depends on the
          applicable scheme, the product category, the readiness of the
          manufacturing unit, and how quickly documentation and product testing
          can be completed.
        </p>

        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
          <p className="text-gray-500 text-[15px] leading-6">
            <strong>Estimated Timeline:</strong> For Indian manufacturers under
            the ISI Mark scheme, the process typically takes around{" "}
            <strong>30 to 45 days</strong> from the date of application
            submission, provided the factory, in-house testing facilities, and
            documentation are in order. For electronics and IT products under
            the BIS CRS scheme, the certification process generally takes{" "}
            <strong>1 to 2 months</strong>, depending on product testing and
            documentation. In the case of foreign manufacturers applying under
            the FMCS scheme, the certification timeline is longer and usually
            takes around <strong>6 to 9 months</strong>, as it involves factory
            inspection outside India and detailed compliance evaluation.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Factors That Affect the BIS Certification Timeline
          </h3>
          <ul className="list-disc pl-6 text-[15px] text-gray-500 space-y-2">
            <li>
              Readiness of the manufacturing unit – availability of required
              machinery and in-house testing equipment as per the Indian
              Standard.
            </li>
            <li>
              Completeness and accuracy of documents submitted at the time of
              application.
            </li>
            <li>
              Number of product variants and the complexity of testing
              parameters under the applicable Indian Standard.
            </li>
            <li>
              Availability of BIS officers for scheduling the factory
              inspection.
            </li>
            <li>
              Turnaround time of the BIS-recognised laboratory for sample
              testing and report submission.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f172a] py-12">
        <div className="max-w-6xl mx-auto px-4 text-white text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Need Help with BIS Certification?
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto mb-6 leading-relaxed">
            Talk to our BIS certification experts for complete guidance on the
            applicable scheme, documentation, testing, and fast BIS approval.
          </p>
          <Link href="/contact-us">
            <button className="w-full sm:w-auto cursor-pointer bg-[#005f86] hover:bg-[#004766] text-white font-semibold px-3 sm:px-7 py-2 rounded-lg text-base sm:text-lg shadow-lg transition">
              Request Free Consultation
            </button>
          </Link>
        </div>
      </section>

      {/* Who Needs BIS Certification */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
          Who Needs BIS license in India?
        </h2>
        <div className="w-full h-0.5 bg-gray-200 relative mb-6">
          <span className="absolute left-0 top-0 h-0.5 w-15 md:w-108 bg-[#0072b1]" />
        </div>

        <p className="mt-6 text-gray-500 text-[15px] leading-6 text-justify mb-6">
          BIS certification is required for any business involved in
          manufacturing, importing, or selling products notified under mandatory
          BIS certification schemes in India. The requirement applies to Indian
          entities as well as foreign manufacturers exporting to India, covering
          a wide range of product categories.
        </p>

        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              1. Indian Manufacturers
            </h3>
            <p className="text-gray-500 text-[15px] leading-6 text-justify">
              Indian manufacturers of products under mandatory BIS certification
              must obtain a BIS ISI Mark licence before manufacturing and
              selling those products. This covers industries such as electrical
              appliances, construction materials, medical devices, toys, cement,
              helmets, pressure cookers, water heaters, cables, and many more.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              2. Foreign Manufacturers Exporting to India
            </h3>
            <p className="text-gray-500 text-[15px] leading-6 text-justify">
              Foreign manufacturers exporting notified products to India must
              obtain BIS certification through the Foreign Manufacturer
              Certification Scheme (FMCS). They must appoint an Authorized
              Indian Representative (AIR) and comply with the applicable Indian
              Standards. FMCS applies to all product categories except
              electronics and IT goods, which fall under the CRS scheme.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              3. Electronics and IT Product Manufacturers
            </h3>
            <p className="text-gray-500 text-[15px] leading-6 text-justify">
              Manufacturers and importers of electronics and IT products
              notified under the Compulsory Registration Order (CRO) must obtain
              BIS CRS registration before releasing their products in India. No
              product covered under the CRS may be manufactured, imported,
              stored, or sold without the Standard Mark and a unique
              registration R-number issued by BIS.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              4. Jewellers Selling Gold or Silver Jewellery
            </h3>
            <p className="text-gray-500 text-[15px] leading-6 text-justify">
              Jewellers manufacturing or selling gold or silver jewellery in
              India are required to hold valid BIS Hallmarking registration. BIS
              issues registration to jewellers for specific locations. Jewellery
              must be hallmarked at a BIS-recognised Assaying and Hallmarking
              Centre to confirm the purity of the precious metal as declared.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              5. Importers and Traders
            </h3>
            <p className="text-gray-500 text-[15px] leading-6 text-justify">
              Importers and traders dealing in BIS-notified products must ensure
              that all imported goods carry the valid BIS certification mark
              before entering the Indian market. Importing or trading products
              without the required BIS certification can result in customs
              detention, seizure of goods, financial penalties, or cancellation
              of import permissions.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              6. Brand Owners and Private Label Businesses
            </h3>
            <p className="text-gray-500 text-[15px] leading-6 text-justify">
              Brand owners who sell products under their own label, even when
              production is outsourced, are legally responsible for ensuring BIS
              compliance. Brand owners must verify that products carrying their
              label hold a valid BIS certification under the applicable scheme.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              7. Government Suppliers and Tender Participants
            </h3>
            <p className="text-gray-500 text-[15px] leading-6 text-justify">
              Manufacturers and suppliers participating in government
              procurement and public sector tenders are frequently required to
              supply BIS-certified products. A valid BIS licence is a common
              eligibility requirement in government and PSU tender documents.
            </p>
          </div>
        </div>

        <div className="mt-6 bg-white border border-gray-200 rounded-lg p-4">
          <p className="text-gray-500 text-[14px] leading-6">
            <strong>Important:</strong> Manufacturing, importing, or selling
            products without the required BIS certification is a punishable
            offence under the BIS Act, 2016. Non-compliance can lead to
            financial penalties, product seizure, cancellation of licences, or
            legal action by regulatory authorities.
          </p>
        </div>
      </section>

      {/* Our Contribution */}
      <section className="w-full bg-white pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900">
              HOW AN GLOBAL SERVICES HELPS YOU OBTAIN BIS CERTIFICATION
            </h2>
            <div className="h-0.5 w-full bg-gray-200 relative">
              <span className="absolute left-0 top-0 h-0.5 md:w-170 w-80 bg-[#0075B6]"></span>
            </div>
          </div>

          <ul className="space-y-1 text-gray-500 text-[15px] leading-7 list-disc pl-6">
            <li>
              We assess your product and identify the applicable BIS
              certification scheme and Indian Standard before beginning the
              process.
            </li>
            <li>
              We review your existing product and factory setup to determine
              compliance readiness and advise on any necessary improvements.
            </li>
            <li>
              We manage all documentation required for the BIS application,
              including the quality manual, test reports, process flow charts,
              and required declarations.
            </li>
            <li>
              Our experienced team coordinates the complete BIS certification
              process – from documentation and laboratory testing to factory
              audit support and BIS office coordination.
            </li>
            <li>
              We conduct virtual and on-site pre-audits to prepare your factory
              for the BIS inspection and reduce the risk of non-conformities.
            </li>
            <li>
              If you do not have an in-house testing laboratory, we assist you
              in setting one up as per the requirements of the applicable Indian
              Standard.
            </li>
            <li>
              We coordinate with BIS-recognised laboratories for product sample
              testing and follow up for timely submission of test reports to
              BIS.
            </li>
            <li>
              For foreign manufacturers, we assist in appointing or acting as
              the Authorized Indian Representative (AIR) and managing all
              compliance obligations under the FMCS or CRS scheme.
            </li>
            <li>
              We assist with customs clearance of product samples imported for
              BIS testing purposes.
            </li>
            <li>
              We represent clients at BIS offices when required and ensure
              timely responses to any queries or inspection observations raised
              by BIS.
            </li>
            <li>
              We keep our clients informed of changes in BIS regulations, Indian
              Standards, and mandatory certification requirements to ensure
              compliance is maintained on an ongoing basis.
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-white pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 uppercase">
            Frequently Asked Questions (FAQs) on BIS Certification
          </h2>
          <div className="h-0.5 w-full bg-gray-200 relative">
            <span className="absolute left-0 top-0 h-0.5 w-75 md:w-160 bg-[#0075B6]"></span>
          </div>

          <div className="space-y-5 pt-4">
            <div>
              <h3 className="font-semibold text-gray-900">
                1. What is BIS ISI Certification?
              </h3>
              <p className="text-gray-500 text-[15px] leading-6 mt-1">
                BIS ISI Certification is a quality certification issued by the
                Bureau of Indian Standards (BIS) that ensures products comply
                with Indian safety, quality, and performance standards.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                2. Is BIS certification mandatory in India?
              </h3>
              <p className="text-gray-500 text-[15px] leading-6 mt-1">
                BIS certification is mandatory for products notified under
                Quality Control Orders (QCOs) issued by the Government of India.
                Such products cannot be manufactured, imported, or sold without
                BIS approval.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                3. Who needs BIS certification?
              </h3>
              <p className="text-gray-500 text-[15px] leading-6 mt-1">
                BIS certification is required for manufacturers, importers,
                brand owners, and traders dealing in products covered under
                mandatory BIS schemes in India.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                4. What is the cost of BIS certification?
              </h3>
              <p className="text-gray-500 text-[15px] leading-6 mt-1">
                The cost of BIS certification depends on the product type,
                testing requirements, factory inspection, and applicable
                government fees. It typically includes application fees, testing
                charges, and annual licence fees.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                5. How long does it take to get BIS certification?
              </h3>
              <p className="text-gray-500 text-[15px] leading-6 mt-1">
                The BIS certification process usually takes around 60 to 65 days
                for ISI certification, depending on documentation, product
                testing, and factory inspection timelines.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                6. What are the different types of BIS certification schemes?
              </h3>
              <p className="text-gray-500 text-[15px] leading-6 mt-1">
                BIS offers various certification schemes including ISI Mark
                Certification for domestic manufacturers, FMCS for foreign
                manufacturers, CRS for electronics and IT products, and
                Hallmarking for gold and silver jewellery.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                7. Can foreign manufacturers apply for BIS certification?
              </h3>
              <p className="text-gray-500 text-[15px] leading-6 mt-1">
                Yes, foreign manufacturers can obtain BIS certification under
                the Foreign Manufacturer Certification Scheme (FMCS) and must
                appoint an Authorized Indian Representative (AIR).
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
