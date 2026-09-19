import Image from "next/image";
import Link from "next/link";

export const revalidate = 86400

export const metadata = {
  title:
    "BIS Jewellery Registration for Gold & Silver Jewellery in India | AN Global Services",

  description:
    "AN Global Services provides BIS Jewellery Registration for gold & silver jewellery in India. Complete support for HUID compliance, online application, documentation & BIS approval. Serving jewellers in Noida, Delhi NCR & PAN India.",

  keywords: [
    "BIS Jewellery Registration India",
    "BIS Jewellery Registration Noida",
    "BIS Jewellery Registration Delhi",
    "Gold Jewellery BIS Registration",
    "Silver Jeweller BIS Registration",
    "BIS HUID compliance for jewellery",
    "BIS hallmarking registration jewellery",
    "BIS jewellery registration consultant",
    "Jewellery hallmarking registration India",
    "BIS jewellery registration online",
    "AN Global Services BIS Jewellery Registration"
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "AN Global Services" }],
};

export default function JewelleryRegistrationPage() {
  return (
    <main className="w-full">
      <section className="relative w-full h-65 md:h-68">
        <Image
          src="/service/pages-of-services-dash-1.webp"
          alt="Gold Hallmarking BIS"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a3d62]/40 flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)]">
              BIS JEWELLERY REGISTRATION SERVICES
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-12 md:pt-16 pb-6 md:pb-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-14 items-start">
          <div className="w-full max-w-[550px] mx-auto xl:max-w-none xl:col-span-1">
            <div className="relative rounded-xl overflow-hidden shadow-md bg-white">
              <Image
                src="/service/bis-jewellery-registration-services-2.webp"
                alt="Gold Hallmarking Services"
                width={800}
                height={800}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">INTRODUCTION</h2>
              <div className="w-full h-0.5 bg-gray-200 relative mb-3">
                <span className="absolute left-0 top-0 h-0.5 w-40 bg-[#0072b1]"></span>
              </div>
              <p className="text-gray-600 text-[15px] leading-6 text-justify pb-2">
                BIS Jewellery Registration is a mandatory requirement for
                jewellers dealing in gold and silver jewellery in India. This
                registration authorizes jewellers to sell hallmarked jewellery
                in compliance with the Bureau of Indian Standards (BIS)
                regulations, ensuring purity, authenticity, and consumer
                protection.
              </p>

              <p className="text-gray-600 text-[15px] leading-6 text-justify pb-2">
                With the compulsory implementation of the 6-digit HUID (Hallmark
                Unique Identification) system, BIS Jewellery Registration has
                become essential for legal operation in the jewellery sector.
                The HUID-based framework brings transparency and traceability by
                linking every hallmarked jewellery article to a registered
                jeweller and a BIS-authorized hallmarking centre.
              </p>

              <p className="text-gray-600 text-[15px] leading-6 text-justify pb-2">
                We provide end-to-end consultancy for BIS Jewellery Registration
                for both gold and silver, including application filing,
                documentation preparation, portal coordination, and support
                during verification and approval stages, ensuring smooth
                compliance with the latest BIS guidelines.
              </p>

              <p className="text-gray-600 text-[15px] leading-6 text-justify pb-2">
                Our structured approach helps jewellers obtain and maintain BIS
                registration efficiently, reduce compliance risks, and build
                long-term trust with customers by legally offering certified and
                hallmarked jewellery. Partnering with <strong className="text-[#0072b1]">AN Global Services</strong> ensures your registration is handled efficiently and flawlessly, from initial application to final BIS approval.
              </p>

              <p className="text-gray-600 text-[15px] leading-6 text-justify pb-2">
                Whether you are a local artisan, a large-scale manufacturer, or a retail chain, our dedicated team of regulatory experts will guide you through every step of the compliance journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 ">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold text-gray-900">
            BIS JEWELLER REGISTRATION
          </h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-4">
            <span className="absolute left-0 top-0 h-0.5 w-76 bg-[#0072b1]"></span>
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-6">
            BIS Jeweller Registration is the official authorization issued by
            the Bureau of Indian Standards (BIS) that permits jewellers to sell
            hallmarked gold and silver jewellery in India. This registration
            certifies that the jeweller complies with national quality standards
            and deals only in precious metal articles that have been tested and
            certified at BIS-recognized Assaying and Hallmarking Centres.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Mandatory Registration */}
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-[#0072b1] text-xl">•</span>
                <span>Mandatory Registration Requirement</span>
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 mb-3">
                As per government notifications, hallmarking of gold jewellery
                is mandatory across notified districts in India. Jewellers
                dealing in commonly traded gold purities such as 9K, 14K, 18K, 20K,
                22K, 23K, and 24K must obtain BIS Jeweller Registration before
                selling hallmarked jewellery.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="font-semibold text-gray-900 text-sm mb-2">
                  Permitted Exemptions:
                </p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Jewellers with annual turnover below ₹40 Lakhs</li>
                  <li>
                    • Traditional jewellery such as Kundan, Polki, and Jadau
                  </li>
                  <li>• Articles weighing less than 2 grams</li>
                </ul>
              </div>
            </div>

            {/* How the System Works */}
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-start gap-3">
                <span className="text-[#0072b1] text-xl">•</span>
                <span>How the BIS Hallmarking System Operates</span>
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 mb-3">
                Registered jewellers submit their jewellery articles to
                BIS-recognized Assaying and Hallmarking Centres for scientific
                purity verification. After successful testing, each article is
                permanently marked with the following three identifiers:
              </p>
              <div className="space-y-2 mt-4">
                <div className="flex gap-2">
                  <span className="text-[#0072b1] font-semibold">1.</span>
                  <p className="text-gray-600 text-sm">
                    <strong>BIS Logo:</strong> Official triangular mark
                    indicating BIS certification
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#0072b1] font-semibold">2.</span>
                  <p className="text-gray-600 text-sm">
                    <strong>Purity/Fineness Mark:</strong> For example, 22K916
                    for 22-karat gold
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#0072b1] font-semibold">3.</span>
                  <p className="text-gray-600 text-sm">
                    <strong>HUID:</strong> A unique 6-digit alphanumeric
                    Hallmark Unique Identification code
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Key Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                  For Jewellers
                </h4>
                <p className="text-gray-600 text-sm leading-6">
                  Enhances business credibility and builds customer trust. BIS
                  hallmarking positions the jeweller as a compliant and
                  quality-driven enterprise.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                  For Customers
                </h4>
                <p className="text-gray-600 text-sm leading-6">
                  Ensures complete transparency by guaranteeing the declared
                  purity of jewellery. For example, 22K gold is certified as
                  91.6% pure.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                  Legal & Regulatory Security
                </h4>
                <p className="text-gray-600 text-sm leading-6">
                  Protects jewellers from penalties, seizures, and prosecution.
                  Non-compliance may attract fines up to ₹5 lakh or imprisonment
                  as per applicable laws.
                </p>
              </div>
            </div>
          </div>

          {/* Registration Process */}
          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-4">
              Registration Process & Documentation
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                    Application Submission
                  </h4>
                  <p className="text-gray-600 text-sm leading-6">
                    Applications are submitted online through the official BIS
                    Manakonline portal or the National Single Window System
                    (NSWS), ensuring a transparent and paperless process.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                    Registration Fee & Validity
                  </h4>
                  <p className="text-gray-600 text-sm leading-6">
                    BIS has waived the registration fee for jewellers to promote
                    compliance. Upon approval, the registration certificate is
                    issued instantly and remains valid for the lifetime of the
                    business, subject to continued adherence to BIS norms.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">
                  Mandatory Documents
                </h4>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-gray-50 border border-gray-200 px-4 py-2 rounded text-sm text-gray-700">
                    Valid GST Registration Certificate
                  </span>
                  <span className="bg-gray-50 border border-gray-200 px-4 py-2 rounded text-sm text-gray-700">
                    Proof of Business Premises (Ownership / Lease)
                  </span>
                  <span className="bg-gray-50 border border-gray-200 px-4 py-2 rounded text-sm text-gray-700">
                    Identity Proof of Proprietor / Authorized Signatory
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SEO CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-14">
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 uppercase">
            Eligible Purity Grades for Hallmarking (Gold & Silver)
          </h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-60 md:w-96 bg-[#0072b1]"></span>
          </div>
          <p className="text-gray-600 text-[15px] leading-7 text-justify pb-6">
            To maintain uniformity and protect consumer interests, the Bureau of Indian Standards has strictly categorized the permissible purity grades (Fineness) for both gold and silver jewellery. Registered jewellers must ensure their articles fall exclusively within these designated caratage categories to be eligible for official BIS hallmarking.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                Gold Jewellery Fineness (IS 1417)
              </h3>
              <ul className="space-y-2 text-[14px] text-gray-600">
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>14 Karat</span> <span className="font-semibold">14K585</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>18 Karat</span> <span className="font-semibold">18K750</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>20 Karat</span> <span className="font-semibold">20K833</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>22 Karat</span> <span className="font-semibold">22K916</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>23 Karat</span> <span className="font-semibold">23K958</span></li>
                <li className="flex justify-between pt-1"><span>24 Karat (Fine Gold)</span> <span className="font-semibold">24K995 / 999</span></li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg flex items-center gap-2">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                Silver Jewellery Fineness (IS 2112)
              </h3>
              <ul className="space-y-2 text-[14px] text-gray-600">
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Fineness 800</span> <span className="font-semibold">80% Pure</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Fineness 835</span> <span className="font-semibold">83.5% Pure</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Fineness 900</span> <span className="font-semibold">90% Pure</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Fineness 925 (Sterling)</span> <span className="font-semibold">92.5% Pure</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Fineness 970</span> <span className="font-semibold">97% Pure</span></li>
                <li className="flex justify-between pt-1"><span>Fineness 990 / 999</span> <span className="font-semibold">Fine Silver</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 uppercase">
            Penalties for Non-Compliance
          </h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-40 md:w-64 bg-[#e74c3c]"></span>
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <p className="text-gray-700 text-[15px] leading-7 text-justify mb-3">
              Operating a jewellery retail or manufacturing business without a valid BIS Registration in notified districts is a severe legal offense under the BIS Act, 2016. Selling non-hallmarked gold or misrepresenting purity grades can lead to immediate administrative action.
            </p>
            <p className="text-gray-700 text-[15px] leading-7 text-justify font-semibold">
              Consequences include heavy monetary fines (ranging from a minimum of ₹1 Lakh up to 5 times the value of the seized goods), cancellation of business licenses, confiscation of the unhallmarked inventory, and in severe cases, imprisonment of up to 1 year for the proprietors.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 uppercase">
            Why Choose AN Global Services?
          </h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-40 md:w-72 bg-[#0072b1]"></span>
          </div>
          <p className="text-gray-600 text-[15px] leading-7 text-justify pb-3">
            <span className="text-gray-800 font-bold">1. End-to-End Registration Handling:</span> From gathering the initial GST and property documents to submitting the exact technical details required on the Manakonline portal, we handle the entire application process to ensure zero rejections.
          </p>
          <p className="text-gray-600 text-[15px] leading-7 text-justify pb-3">
            <span className="text-gray-800 font-bold">2. Corporate & Multi-Outlet Support:</span> For large retail chains, we manage corporate registrations and coordinate multi-outlet branch additions under a single unified corporate CPAN (Corporate Permanent Account Number).
          </p>
          <p className="text-gray-600 text-[15px] leading-7 text-justify pb-3">
            <span className="text-gray-800 font-bold">3. Assaying Centre Liaisoning:</span> Navigating the HUID system can be technically complex. We provide detailed guidance on how to integrate with local BIS-recognized Assaying and Hallmarking Centres (AHCs) to establish a smooth workflow for hallmarking your daily inventory.
          </p>
          <p className="text-gray-600 text-[15px] leading-7 text-justify">
            <span className="text-gray-800 font-bold">4. Lifetime Compliance Strategy:</span> Registration is just the beginning. We provide ongoing consultancy to ensure you remain compliant with frequently changing BIS guidelines, preventing sudden notices or penalties.
          </p>
        </div>
      </section>
    </main>
  );
}
