import Image from "next/image";
import Link from "next/link";

export const revalidate = 86400

export const metadata = {
  title: "GEM REGISTRATION Services | AN Global Services",
  description:
    "Get complete GEM Registration Services for domestic and industrial products. AN Global Services provides end-to-end GEM registration support.",
};

export default function ISIPage() {
  return (
    <main className="w-full">
      <section className="relative w-full h-65 md:h-68">
        <Image
          src="/service/isi/about.jpg"
          alt="GEM Registration Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-bold">
              GEM REGISTRATION SERVICES
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/gem-registration.png"
                alt="GeM Registration Services"
                width={420}
                height={520}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">INTRODUCTION</h2>
              <div className="w-full h-0.5 bg-gray-200 relative mb-3">
                <span className="absolute left-0 top-0 h-0.5 w-40 bg-[#0072b1]" />
              </div>

              <p className="text-gray-500 text-[15px] leading-6 text-justify">
                Government e-Marketplace (GeM) is a centralized online
                procurement platform launched by the Government of India to
                facilitate transparent and efficient purchasing of goods and
                services by government departments, public sector undertakings
                (PSUs), and autonomous bodies. The portal enables sellers and
                service providers to directly connect with government buyers,
                ensuring fair competition, transparency, and faster procurement
                cycles.
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-[15px] leading-6 text-justify">
                GeM eliminates traditional procurement complexities by offering
                features such as online bidding, reverse auctions, demand
                aggregation, and real-time order tracking. For businesses, GeM
                registration opens doors to large-scale government opportunities
                without intermediaries, making it an essential platform for
                manufacturers, traders, startups, and service providers looking
                to supply to government organizations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                GeM Advantages for Sellers
              </h2>
              <div className="w-full h-0.5 bg-gray-200 relative mb-3">
                <span className="absolute left-0 top-0 h-0.5 w-68 md:w-68 bg-[#0072b1]" />
              </div>

              <ul className="list-disc list-inside text-gray-500 text-[15px] leading-6 space-y-1">
                <li>
                  Direct access to central and state government buyers across
                  India.
                </li>
                <li>
                  A single digital platform to showcase products and services.
                </li>
                <li>
                  Participation in online bids and reverse auctions without
                  physical tendering.
                </li>
                <li>
                  Opportunity to suggest and list new products and services.
                </li>
                <li>
                  Flexible and dynamic pricing based on market demand and
                  competition.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
            Process of GeM Registration
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-3">
            <span className="absolute left-0 top-0 h-0.5 w-90 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-6">
            GeM registration follows a structured process that enables
            businesses to become eligible suppliers on the Government
            e-Marketplace portal. Each stage focuses on identity verification,
            business validation, and approval for selling goods or services to
            government buyers.
          </p>

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
                    Creation of Seller Account
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    The authorized representative of the business creates a
                    seller account on the GeM portal using Aadhaar-based
                    authentication. This is typically completed by the
                    proprietor, partner, or company director.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    2
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Organization Profile Completion
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    After account creation, the business profile is updated with
                    key details such as PAN, registered address, bank
                    information, and supporting business documents for
                    verification.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    3
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Vendor Assessment
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Certain categories require vendor assessment conducted
                    through RITES. This evaluation verifies manufacturing
                    capability and eligibility, especially for businesses
                    applying as Original Equipment Manufacturers (OEMs).
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    4
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Brand Listing Approval
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Upon successful assessment (where applicable), the seller
                    can apply for brand listing under approved product or
                    service categories to establish brand visibility on the GeM
                    portal.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    5
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Product & Service Listing
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Sellers list their approved products or services with
                    technical specifications, pricing, delivery terms, and
                    compliance details, making them visible to government
                    buyers.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    6
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Bidding & Reseller Appointment
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Once listings are active, sellers can participate in bids
                    and reverse auctions floated by government buyers and may
                    also appoint authorized resellers where permitted.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-5 bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-gray-600 text-[14px] leading-6">
              <strong>Note:</strong> The GeM registration and approval timeline
              may vary depending on the business category, requirement of vendor
              assessment, and completeness of submitted documents. Professional
              assistance can help avoid delays and rejections.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12 space-y-10">
        <div>
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
            Required Documents for GeM Registration
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-3">
            <span className="absolute left-0 top-0 h-0.5 w-40 md:w-130 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-6">
            To complete registration on the Government e-Marketplace (GeM)
            portal, businesses are required to submit essential identity, tax,
            and banking documents. These documents help verify the seller’s
            authenticity and ensure compliance with government procurement
            norms.
          </p>

          <ul className="list-disc list-inside text-gray-600 text-[15px] leading-6 space-y-2 bg-white border border-gray-200 rounded-lg p-5">
            <li>
              <strong className="text-gray-800">PAN Card:</strong> Tax
              identification proof of the business or applicant.
            </li>
            <li>
              <strong className="text-gray-800">
                Udyam / MSME Certificate:
              </strong>{" "}
              Validates MSME registration and enables access to MSME-specific
              benefits on GeM.
            </li>
            <li>
              <strong className="text-gray-800">
                GST Registration Certificate:
              </strong>{" "}
              Required for statutory tax compliance and invoicing.
            </li>
            <li>
              <strong className="text-gray-800">Cancelled Cheque:</strong> Used
              for verification of the registered bank account for payments.
            </li>
            <li>
              <strong className="text-gray-800">
                Aadhaar Card of Applicant:
              </strong>{" "}
              Identity authentication of the authorized person creating the GeM
              account.
            </li>
          </ul>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12 space-y-10">
        <div>
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
            Benefits of GeM Registration
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-90 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-6">
            Registering on the Government e-Marketplace (GeM) enables businesses
            to participate directly in government procurement through a
            transparent and technology-driven platform. GeM offers structured
            processes, wider visibility, and secure transactions that help
            sellers grow their presence in the public sector market.
          </p>

          <ul className="list-disc list-inside text-gray-600 text-[15px] leading-6 space-y-2 bg-white border border-gray-200 rounded-lg p-5">
            <li>
              <strong className="text-gray-800">Simplified Procurement Process:</strong> Direct
              interaction with government buyers eliminates middlemen, reduces
              paperwork, and speeds up order execution.
            </li>

            <li>
              <strong className="text-gray-800">Nationwide Market Reach:</strong> Access procurement
              opportunities from central and state government departments across
              India through a single digital platform.
            </li>

            <li>
              <strong className="text-gray-800">Transparent & Standardized System:</strong> Operate in a
              regulated marketplace with uniform policies, clear guidelines, and
              fair competition for all registered sellers.
            </li>

            <li>
              <strong className="text-gray-800">Secure & Timely Payments:</strong> GeM provides a reliable
              payment mechanism, reducing the risk of delays and ensuring better
              financial security for sellers.
            </li>

            <li>
              <strong className="text-gray-800">Flexible Invoicing Options:</strong> The portal allows
              generation of multiple invoices against a single order, making
              large or phased deliveries easier to manage.
            </li>

            <li>
              <strong className="text-gray-800">Dynamic Pricing Capability:</strong> Sellers can revise
              prices in line with market conditions, demand trends, and
              competition to remain profitable.
            </li>

            <li>
              <strong className="text-gray-800">Dedicated Support for MSMEs:</strong> Special provisions,
              visibility, and benefits available for MSMEs, enabling small
              businesses to compete effectively in government procurement.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
