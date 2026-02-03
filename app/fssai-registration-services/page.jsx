import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "FSSAI Registration & License Services in India | AN Global Services",

  description:
    "AN Global Services provides professional FSSAI Registration and License services in India. Get expert assistance for Basic FSSAI Registration, State FSSAI License, and Central FSSAI License to legally start and operate food businesses, ensure compliance with food safety standards, and avoid penalties under the Food Safety and Standards Act.",

  keywords: [
    "FSSAI registration",
    "FSSAI license",
    "food license registration",
    "FSSAI registration online India",
    "basic FSSAI registration",
    "state FSSAI license",
    "central FSSAI license",
    "food business operator registration",
    "FSSAI compliance services",
    "AN Global Services FSSAI",
  ],

  alternates: {
    canonical: "https://www.anglobalservices.com/fssai-registration-services",
  },
  openGraph: {
    title: "FSSAI Registration & License Services in India",
    description:
      "Get expert help for FSSAI Registration, State & Central FSSAI License in India.",
    url: "https://www.anglobalservices.com/fssai-registration-services",
    siteName: "AN Global Services",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function FSSAIPage() {
  return (
    <main className="w-full">
      <section className="relative w-full h-65 md:h-68">
        <Image
          src="/service/isi/about.jpg"
          alt="FSSAI Registration Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-bold">
              FSSAI REGISTRATION SERVICES
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/fssai-registration-services.png"
                alt="FSSAI Registration Services"
                width={420}
                height={520}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900 uppercase leading-snug md:leading-normal">
                FSSAI REGISTRATION SERVICES
              </h2>

              <div className="w-full h-0.5 bg-gray-200 relative mb-4">
                <span className="absolute left-0 top-0 h-0.5 w-80 bg-[#0072b1]" />
              </div>

              <p className="text-gray-600 text-[15px] leading-6 text-justify pb-4">
                FSSAI Registration is a mandatory compliance for all food
                business operators in India, including manufacturers, traders,
                restaurants, caterers, distributors, and online food sellers.
                Issued by the Food Safety and Standards Authority of India
                (FSSAI), this registration ensures that food products are safe,
                hygienic, and meet prescribed quality standards.
              </p>

              <p className="text-gray-600 text-[15px] leading-6 text-justify pb-4">
                Obtaining an FSSAI license helps build consumer trust and
                enhances the credibility of a food business. It is legally
                required to manufacture, store, distribute, or sell food
                products in India and is often checked during inspections,
                audits, and partnerships with food aggregators or retail chains.
                Displaying the FSSAI license number on food packaging and
                premises further boosts customer confidence and transparency.
              </p>

              <p className="text-gray-600 text-[15px] leading-7 text-justify">
                The FSSAI registration process is simple and mostly online.
                Based on the size and turnover of the food business, applicants
                may require Basic Registration, State License, or Central
                License. With proper document verification and accurate
                application filing, FSSAI registration can be completed quickly,
                allowing businesses to operate legally and expand without
                compliance risks.Timely registration and renewal also help avoid
                penalties, business disruptions, and legal complications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 uppercase leading-snug md:leading-normal">
            FSSAI Registration in India
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-75 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-6">
            FSSAI registration is a mandatory compliance for all Food Business
            Operators (FBOs) in India, including manufacturers, processors,
            distributors, traders, restaurants, caterers, and online food
            sellers. Issued by the Food Safety and Standards Authority of India
            under the Food Safety and Standards Act, this registration ensures
            that food products meet prescribed safety, quality, and hygiene
            standards.
          </p>

          {/* FSSAI Eligibility Table */}
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg">
            <table className="w-full border-collapse text-[15px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    License Type
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Annual Turnover
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Applicable Businesses
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Basic FSSAI Registration
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Up to ₹12 Lakh
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Small food businesses, petty retailers, home-based food
                    operators, hawkers, and small manufacturers.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    State FSSAI License
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    ₹12 Lakh – ₹20 Crore
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Medium-sized manufacturers, distributors, restaurants,
                    hotels, storage units, and food processors operating within
                    one state.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Central FSSAI License
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Above ₹20 Crore
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Large food manufacturers, importers, exporters, e-commerce
                    food operators, and businesses operating in multiple states.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Compliance Note */}
          <div className="mt-5 bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-gray-600 text-[14px] leading-6">
              <strong>Important Note:</strong> Operating a food business without
              valid FSSAI registration or license is a legal offence and may
              attract heavy penalties, fines, or closure of the business. The
              correct license type must be obtained before starting or expanding
              food-related operations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50  pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
            How to Register for FSSAI Registration
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-120 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-6">
            FSSAI (Food Safety and Standards Authority of India) registration is
            a mandatory requirement for all food business operators in India.
            The registration process ensures that food businesses comply with
            food safety and hygiene standards prescribed under the Food Safety
            and Standards Act. Depending on the nature, size, and turnover of
            the business, applicants may require Basic Registration, State
            License, or Central License.
          </p>

          {/* FSSAI Process Table */}
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg">
            <table className="w-full border-collapse text-[15px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Step
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Stage
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Description
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    1
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Determine License Type
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Identify whether the business requires Basic FSSAI
                    Registration, State License, or Central License based on
                    turnover, location, and nature of operations.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    2
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Online Application
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Submit the FSSAI application online through the FoSCoS
                    portal with required business and food-related details.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    3
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Document Submission
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Upload mandatory documents such as identity proof, business
                    registration proof, address proof, and food safety
                    declarations.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    4
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Scrutiny & Inspection
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    The FSSAI authority reviews the application and may conduct
                    an inspection of the food premises, if required, before
                    approval.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    5
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Grant of FSSAI Certificate
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Upon successful verification, the FSSAI Registration or
                    License is issued digitally along with a unique 14-digit
                    FSSAI number.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Validity Note */}
          <div className="mt-5 bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-gray-600 text-[14px] leading-6">
              <strong>Validity:</strong> FSSAI registration or license is
              generally issued with a validity of 1 to 5 years, as selected by
              the applicant, and must be renewed before expiry to continue legal
              food operations.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12 space-y-12">
        <div>
          <h2 className="text-xl md:text-xl font-semibold uppercase text-gray-900">
            Documents Required for FSSAI Registration
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-128 bg-[#0072b1]" />
          </div>

          <p className="text-gray-500 text-[15px] leading-6 text-justify">
            Food Business Operators are required to keep clear, scanned copies
            of the following documents ready while applying for FSSAI
            Registration or License. The document requirements may vary slightly
            based on the type of food business and the category of license.
          </p>

          <ol className="mt-6 list-decimal pl-6 space-y-4 text-gray-600 text-[15px] leading-5">
            <li>
              <strong>Applicant Identity Proof:</strong> PAN card, Aadhaar card,
              or passport of the proprietor, partner, or authorized signatory.
            </li>

            <li>
              <strong>Business Registration Proof:</strong> Certificate of
              Incorporation, Partnership Deed, LLP Agreement, or proprietorship
              proof, as applicable.
            </li>

            <li>
              <strong>Address Proof of Food Premises:</strong> Rent agreement,
              lease deed, ownership documents, or utility bill of the business
              location.
            </li>

            <li>
              <strong>Food Business Details:</strong> List of food products to
              be manufactured, processed, stored, or sold along with the nature
              of business.
            </li>

            <li>
              <strong>Passport Size Photograph:</strong> Recent photograph of
              the applicant or authorized signatory.
            </li>

            <li>
              <strong>Form IX / Authorization Letter:</strong> Nomination of
              authorized signatory for FSSAI compliance, if applicable.
            </li>

            <li>
              <strong>Layout Plan (for Manufacturing Units):</strong> Blueprint
              or layout of the food processing or manufacturing facility, if
              required.
            </li>

            <li>
              <strong>Food Safety Management Declaration:</strong>{" "}
              Self-declaration confirming compliance with FSSAI food safety and
              hygiene norms.
            </li>
          </ol>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12 space-y-12">
        {/* Benefits */}
        <div>
          <h2 className="text-lg md:text-xl uppercase font-semibold text-gray-900 leading-snug md:leading-normal">
            Benefits of FSSAI Registration
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-88 bg-[#0072b1]" />
          </div>

          <ol className="mt-6 list-decimal pl-6 space-y-4 text-gray-600 text-[15px] leading-5">
            <li>
              Legal authorization to manufacture, store, distribute, or sell
              food products anywhere in India.
            </li>
            <li>
              Enhanced consumer trust and brand credibility through compliance
              with food safety standards.
            </li>
            <li>
              Mandatory requirement for listing on food delivery platforms,
              supermarkets, and e-commerce portals.
            </li>
            <li>
              Reduced risk of penalties, fines, or business closure due to
              regulatory non-compliance.
            </li>
            <li>
              Facilitates business expansion, import-export activities, and
              partnerships with large food chains and institutions.
            </li>
          </ol>
        </div>

        {/* FSSAI Eligibility */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold uppercase text-gray-900 leading-snug md:leading-normal">
            Eligibility Criteria for FSSAI Registration
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-120 bg-[#0072b1]" />
          </div>

          <ol className="mt-6 list-decimal pl-6 space-y-4 text-gray-600 text-[15px] leading-5">
            <li>
              Any individual or entity involved in the manufacturing,
              processing, storage, distribution, or sale of food products must
              obtain FSSAI registration or license.
            </li>
            <li>
              Applicable to food manufacturers, traders, restaurants, hotels,
              caterers, cloud kitchens, retailers, and online food sellers.
            </li>
            <li>
              The type of FSSAI registration or license depends on annual
              turnover, production capacity, and the nature of food business
              operations.
            </li>
            <li>
              The food business must comply with FSSAI-prescribed food safety
              and hygiene standards.
            </li>
            <li>
              Separate licenses may be required for multiple locations or
              states, depending on the scale of operations.
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}
