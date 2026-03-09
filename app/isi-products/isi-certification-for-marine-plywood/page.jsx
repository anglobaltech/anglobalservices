import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-static";
export const revalidate = 86400;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is BIS ISI certification mandatory for marine plywood?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Marine plywood manufactured under IS 710:2010 can obtain BIS ISI certification to demonstrate compliance with Indian quality standards. Certification may be required for certain government projects, infrastructure works, or procurement specifications.",
      },
    },
    {
      "@type": "Question",
      name: "Which Indian Standard applies to marine plywood?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Marine plywood is governed by Indian Standard IS 710:2010, which specifies requirements related to materials, adhesive bonding strength, manufacturing process, dimensions, and performance characteristics.",
      },
    },
    {
      "@type": "Question",
      name: "Where is marine plywood commonly used?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Marine plywood is widely used in boat building, marine structures, outdoor furniture, decks, and other applications where high moisture resistance and durability are required.",
      },
    },
    {
      "@type": "Question",
      name: "What tests are conducted for marine plywood under IS 710?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Testing includes moisture content determination, adhesive bonding strength tests, water resistance tests, tensile strength evaluation, static and wet bending strength testing, and mycological resistance tests.",
      },
    },
    {
      "@type": "Question",
      name: "How long does BIS certification take for marine plywood?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The BIS ISI certification process generally takes around 30 to 45 days for Indian manufacturers after successful inspection, product testing, and documentation verification.",
      },
    },
  ],
};
export const metadata = {
  title:
    "BIS ISI Certification for Marine Plywood (IS 710:2010) | AN Global Services",

  description:
    "Get BIS ISI Certification for Marine Plywood under IS 710:2010 with expert support for product testing, documentation, factory inspection, and BIS license approval.",

  keywords: [
    "ISI Certification for Marine Plywood IS 710",
    "BIS Certification for Marine Plywood India",
    "Marine Plywood ISI Mark Certification",
    "BIS License for Marine Plywood Manufacturers",
    "IS 710:2010 Marine Plywood Certification",
    "BWR Marine Plywood BIS Certification",
    "ISI Mark for Marine Grade Plywood",
    "BIS Testing for Marine Plywood",
    "Marine Plywood Quality Control Order India",
    "BIS Factory Inspection for Marine Plywood",
    "Marine Plywood Certification India",
    "AN Global Services BIS ISI Certification",
  ],

  openGraph: {
    title: "ISI Mark Certification for Marine Plywood (IS 710:2010)",
    description:
      "Apply for BIS ISI Mark Certification for Marine Plywood under IS 710:2010 with complete assistance for testing, documentation, factory inspection, and BIS license approval.",
    url: "https://www.anglobalservices.com/isi-products/isi-certification-for-marine-plywood",
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
      "https://www.anglobalservices.com/isi-products/isi-certification-for-marine-plywood",
  },
};
export default function MarinePlywood() {
  return (
    <main className="w-full bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-12 items-start">
          <div className="relative rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200">
            <Image
              src="/isi-products/bis-isi-certification-for-marine-plywood.png"
              alt="BIS ISI Certification for Marine Plywood IS 710"
              width={420}
              height={320}
              className="w-full h-auto object-cover"
              unoptimized
            />
          </div>

          <div>
            <h1 className="inline-block bg-[#0072b1] text-white text-lg md:text-xl uppercase font-semibold px-6 py-2 rounded-md shadow-md mb-4">
              BIS ISI Certification for Marine Plywood (IS 710:2010)
            </h1>

            <p className="text-gray-600 text-[15px] leading-6 text-justify pb-4">
              Marine plywood is a high-performance plywood specifically
              manufactured for applications where resistance to moisture,
              humidity, and water exposure is essential. It is commonly used in
              marine construction, boat building, outdoor furniture, decks, and
              other environments exposed to wet conditions.
            </p>

            <p className="text-gray-600 text-[15px] leading-6 text-justify pb-4">
              BIS ISI certification for Marine Plywood is governed by Indian
              Standard IS 710:2010. The standard specifies requirements related
              to raw materials, veneer construction, adhesive bonding strength,
              dimensions, and performance characteristics to ensure durability
              and structural reliability.
            </p>

            <p className="text-gray-600 text-[15px] leading-6 text-justify pb-4">
              <Link
                href="/bis-isi-mark-certification"
                prefetch={false}
                className="text-[#0072b1] font-medium hover:underline"
              >
                BIS ISI Mark certification
              </Link>{" "}
              ensures that marine plywood products comply with national quality
              standards and can be legally manufactured, imported, or sold in
              India. Certified products demonstrate high resistance to moisture,
              strong bonding performance, and long-term durability.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12 space-y-8">
        <div>
          <h2 className="bg-[#0072b1] text-white text-lg md:text-xl font-semibold px-6 py-2 rounded-md shadow-md">
            IS 710 – Key Quality Requirements for Marine Plywood
          </h2>

          <ul className="mt-6 space-y-2 text-[15px] text-gray-700">
            <li>
              (i) Use of high-quality timber veneers suitable for marine
              environments
            </li>
            <li>
              (ii) Strong adhesive bonding capable of withstanding water
              exposure
            </li>
            <li>
              (iii) Controlled moisture content in veneers and finished panels
            </li>
            <li>(iv) Accurate dimensions and tolerances for plywood sheets</li>
            <li>(v) Resistance to fungal and biological deterioration</li>
            <li>(vi) Adequate tensile strength and structural durability</li>
            <li>(vii) Water resistance and wet bending performance</li>
            <li>
              (viii) Mandatory marking, traceability, and ISI Mark labeling
            </li>
          </ul>
        </div>

        <div>
          <h2 className="bg-[#0072b1] text-white text-lg md:text-xl font-semibold px-6 py-2 rounded-md shadow-md">
            Overview of ISI Mark Certification for Marine Plywood (IS 710:2010)
          </h2>

          <p className="mt-5 text-gray-600 text-[15px] leading-6 text-justify">
            IS 710:2010 specifies requirements for marine plywood used in
            applications exposed to high moisture and water conditions. The
            standard covers material specifications, veneer quality, adhesive
            bonding strength, and structural performance requirements.
          </p>

          <p className="mt-4 text-gray-600 text-[15px] leading-6 text-justify">
            Marine plywood manufactured under IS 710 must meet strict quality
            requirements to ensure long-term durability in marine and outdoor
            environments such as boats, pontoons, docks, decks, and other
            structural applications exposed to water.
          </p>

          <p className="mt-4 text-gray-600 text-[15px] leading-6 text-justify">
            BIS certification verifies that manufacturers maintain proper
            quality control systems, testing procedures, and production
            standards to ensure reliable performance of marine plywood products.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12">
        <h2 className="bg-[#0072b1] text-white text-lg md:text-xl font-semibold px-6 py-2 rounded-md shadow-md">
          Process Required for BIS ISI Mark Certification for Marine Plywood (IS
          710:2010)
        </h2>

        <p className="mt-6 text-gray-600 text-[15px] leading-6 text-justify mb-6">
          To obtain BIS ISI certification for Marine Plywood, manufacturers must
          comply with the BIS Product Certification Scheme (Scheme-I). The
          certification process evaluates manufacturing infrastructure, quality
          control systems, testing capabilities, and compliance with the Indian
          Standard IS 710:2010.
        </p>

        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
          <p className="text-gray-600 text-[15px] leading-6">
            <strong>Estimated Timeline:</strong> BIS ISI certification generally
            takes around <strong>30 to 45 days for Indian manufacturers</strong>{" "}
            subject to successful factory inspection, product testing, and
            documentation verification.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Step-by-Step Certification Process
          </h3>

          <ol className="list-decimal pl-6 text-[15px] text-gray-600 space-y-3">
            <li>
              <strong>Application Submission:</strong> Submit an application
              through the BIS Manak Online portal with details of the
              manufacturing unit, product specifications, and required
              documentation.
            </li>

            <li>
              <strong>Factory Inspection:</strong> BIS officials inspect the
              manufacturing facility to evaluate raw materials, production
              process, quality control practices, and testing equipment.
            </li>

            <li>
              <strong>Product Sample Testing:</strong> Product samples are
              collected and tested in BIS-recognized laboratories to verify
              compliance with IS 710 requirements.
            </li>

            <li>
              <strong>Compliance Verification:</strong> BIS evaluates inspection
              reports, laboratory test results, and manufacturing quality
              control systems.
            </li>

            <li>
              <strong>Grant of BIS License:</strong> After successful
              evaluation, BIS grants the Certification Marks License (CM/L),
              allowing manufacturers to use the ISI Mark on marine plywood
              products.
            </li>
          </ol>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12 space-y-8">
        <div>
          <h2 className="bg-[#0072b1] text-white text-lg md:text-xl font-semibold px-6 py-2 rounded-md shadow-md">
            Requirements to Obtain BIS License for Marine Plywood (IS 710:2010)
          </h2>

          <ul className="mt-6 list-disc pl-6 text-[15px] text-gray-700 space-y-2">
            <li>
              Compliance of marine plywood products with specifications related
              to materials, adhesive bonding strength, and performance
              requirements defined under IS 710:2010.
            </li>
            <li>
              Manufacturing using high-quality timber veneers and strong
              adhesive systems capable of withstanding prolonged water exposure.
            </li>
            <li>
              Availability of testing facilities for parameters such as moisture
              content, adhesive bond strength, tensile strength, and water
              resistance.
            </li>
            <li>
              Appointment of qualified quality control personnel responsible for
              monitoring inspection, testing, and compliance with Indian
              Standards.
            </li>
            <li>
              Implementation of the Scheme of Inspection and Testing (SIT) and
              adherence to BIS Product Certification Scheme-I requirements.
            </li>
          </ul>
        </div>

        <div>
          <p className="mt-5 text-gray-600 text-[15px] leading-6 text-justify">
            To obtain BIS ISI certification for Marine Plywood under Product
            Certification Scheme-I, manufacturers must submit documentation
            categorized as follows:
          </p>

          <ul className="mt-4 list-disc pl-6 text-[15px] text-gray-700 space-y-2">
            <li>
              <strong>Administrative Details:</strong> Business registration,
              factory address proof, GST registration, and statutory approvals.
            </li>

            <li>
              <strong>Technical Details:</strong> Product specifications, veneer
              construction details, adhesive type, plywood dimensions, and
              compliance declaration as per IS 710:2010.
            </li>

            <li>
              <strong>Quality Control Personnel Details:</strong> Qualification
              and responsibilities of personnel responsible for inspection and
              testing.
            </li>

            <li>
              <strong>Commercial Details:</strong> Brand name, trademark
              ownership details (if applicable), and authorization documents.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="bg-[#0072b1] text-white text-lg md:text-xl font-semibold px-6 py-2 rounded-md shadow-md">
            Cost of BIS ISI Certification for Marine Plywood (IS 710:2010)
          </h2>

          <p className="mt-5 text-gray-600 text-[15px] leading-6 text-justify mb-6">
            The following are indicative statutory charges involved in obtaining
            BIS ISI certification for Marine Plywood under Product Certification
            Scheme-I. All government fees are payable directly to BIS.
          </p>

          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg">
            <table className="w-full text-[15px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-2 text-left">
                    S. No.
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-left">
                    Particular
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-left">
                    Amount (INR)
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-left">
                    Remarks
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">Application Fee</td>
                  <td className="px-4 py-2">₹1,000</td>
                  <td className="px-4 py-2">Payable to BIS</td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">Inspection / Audit Fee</td>
                  <td className="px-4 py-2">₹7,000</td>
                  <td className="px-4 py-2">Payable to BIS</td>
                </tr>

                <tr>
                  <td className="px-4 py-2">3</td>
                  <td className="px-4 py-2">Product Testing Fee</td>
                  <td className="px-4 py-2">As applicable</td>
                  <td className="px-4 py-2">
                    Depends on laboratory testing requirements
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="px-4 py-2">4</td>
                  <td className="px-4 py-2">Marking Fee</td>
                  <td className="px-4 py-2">As per BIS norms</td>
                  <td className="px-4 py-2">Based on annual production</td>
                </tr>
              </tbody>
            </table>

            <p className="m-4 text-gray-600 text-sm">
              Note: Fees are indicative and subject to revision by BIS.
              Applicants should verify the latest fee structure from the
              official BIS portal.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12">
        <h2 className="bg-[#0072b1] text-white text-lg md:text-xl font-semibold px-6 py-2 rounded-md shadow-md">
          Benefits of Getting ISI Mark Certification for Marine Plywood (IS
          710:2010)
        </h2>

        <p className="mt-6 text-gray-600 text-[15px] leading-6 text-justify mb-8">
          BIS ISI certification for marine plywood ensures that products meet
          strict quality, durability, and water resistance requirements defined
          by Indian Standards. Certification provides assurance of reliable
          performance in marine and outdoor environments.
        </p>

        <div className="space-y-3">
          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h3 className="font-semibold mb-1">
              1. Mandatory Legal Compliance
            </h3>
            <p className="text-gray-600 text-[15px]">
              Ensures compliance with Quality Control Orders applicable to
              marine plywood products in India.
            </p>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h3 className="font-semibold mb-1">2. Superior Water Resistance</h3>
            <p className="text-gray-600 text-[15px]">
              Marine plywood undergoes rigorous testing to ensure durability in
              high-moisture and water-exposed environments.
            </p>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h3 className="font-semibold mb-1">
              3. Improved Market Acceptance
            </h3>
            <p className="text-gray-600 text-[15px]">
              ISI marked marine plywood is widely accepted in marine
              construction, infrastructure, and outdoor furniture applications.
            </p>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h3 className="font-semibold mb-1">
              4. Enhanced Consumer Confidence
            </h3>
            <p className="text-gray-600 text-[15px]">
              The ISI Mark indicates that the product complies with national
              standards for strength, durability, and safety.
            </p>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h3 className="font-semibold mb-1">
              5. Competitive Business Advantage
            </h3>
            <p className="text-gray-600 text-[15px]">
              BIS-certified marine plywood gains preference in regulated markets
              and infrastructure projects.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12">
        <h2 className="bg-[#0072b1] text-white text-lg md:text-xl font-semibold px-6 py-2 rounded-md shadow-md">
          Frequently Asked Questions (FAQs) – BIS ISI Certification for Marine
          Plywood (IS 710:2010)
        </h2>

        <div className="mt-8 space-y-4">
          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h3 className="font-semibold mb-2">
              1. Is BIS ISI certification mandatory for marine plywood?
            </h3>
            <p className="text-gray-600 text-[15px]">
              Yes. Marine plywood must comply with BIS certification
              requirements before it can be manufactured, imported, or sold in
              the Indian market.
            </p>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h3 className="font-semibold mb-2">
              2. Which Indian Standard governs marine plywood?
            </h3>
            <p className="text-gray-600 text-[15px]">
              Marine plywood is governed by Indian Standard IS 710:2010.
            </p>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h3 className="font-semibold mb-2">
              3. Where is marine plywood commonly used?
            </h3>
            <p className="text-gray-600 text-[15px]">
              Marine plywood is commonly used in boat construction, marine
              structures, outdoor furniture, docks, decks, and other
              environments exposed to water.
            </p>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h3 className="font-semibold mb-2">
              4. What tests are conducted for marine plywood under IS 710?
            </h3>
            <p className="text-gray-600 text-[15px]">
              Major tests include moisture content testing, adhesive bond
              strength, tensile strength testing, water resistance testing,
              bending strength, and mycological resistance testing.
            </p>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h3 className="font-semibold mb-2">
              5. What happens if marine plywood is sold without ISI
              certification?
            </h3>
            <p className="text-gray-600 text-[15px]">
              Selling non-certified marine plywood where certification is
              mandatory may result in penalties, product seizure, and legal
              action under the BIS Act, 2016.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
