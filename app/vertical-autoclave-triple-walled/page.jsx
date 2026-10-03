import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Vertical Triple Walled Autoclaves | AN Global Services",
  description:
    "Compact and efficient vertical triple walled autoclaves for medical, clinical, and laboratory sterilization. Features robust stainless steel build, easy top-loading, and advanced pressure safety.",
  keywords: [
    "Vertical Autoclave Triple Walled",
    "Portable Steam Sterilizer",
    "Clinical Autoclave",
    "Medical Sterilizer Equipment",
    "Top-loading Autoclave",
    "High Pressure Sterilizer",
    "AN Global Services laboratory equipment",
  ],
  alternates: {
    canonical: "https://www.anglobalservices.com/vertical-autoclave-triple-walled",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PortableAutoclavePage() {
  return (
    <main className="w-full bg-gray-50 min-h-screen">
      {/* Schema Markup */}
      <Script id="vertical-autoclave-triple-walled-schema" type="application/ld+json" strategy="afterInteractive">
        {`
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              "name": "Vertical Triple Walled Autoclaves",
              "description": "High-grade Vertical Autoclave Triple Walled designed for efficient sterilization in clinics, small laboratories, and mobile medical setups. Features top-loading access, electric heating, and advanced safety locks.",
              "image": "https://www.anglobalservices.com/equipment/autoclave/vertical-autoclave-triple-walled.webp",
              "brand": {
                "@type": "Brand",
                "name": "AN Global Services"
              },
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "seller": {
                  "@type": "Organization",
                  "name": "AN Global Services"
                }
              }
            },
            {
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "What is a Vertical Autoclave Triple Walled used for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A vertical triple walled autoclave is a heavy-duty steam sterilizer with a radial locking mechanism and three-chamber design used to eliminate microorganisms from surgical instruments, dental tools, and laboratory glassware in clinics, small hospitals, and research setups."
                }
              },{
                "@type": "Question",
                "name": "What are the typical operating temperatures?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Standard sterilization cycles run at 121°C (for 15-20 minutes) up to 134°C, utilizing saturated steam under pressure."
                }
              }]
            }
          ]
        }
        `}
      </Script>

      {/* Hero Section */}
      <section className="relative w-full h-64 md:h-72">
        <Image
          src="/service/pages-of-services-dash-1.webp"
          alt="Vertical Triple Walled Autoclaves"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a3d62]/40 flex items-center justify-center text-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] uppercase">
              vertical triple walled autoclaves
            </h1>
          </div>
        </div>
      </section>

      {/* Main Product Card Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12" id="product-overview">
        <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-xl">
          <div className="flex flex-col lg:flex-row h-full">
            
            {/* Image Side */}
            <div className="lg:w-[40%] relative flex items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-white border-b lg:border-b-0 lg:border-r border-gray-100 min-h-[400px]">
              <div className="absolute inset-0 opacity-10 mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0075B6 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
              <div className="relative w-full h-full max-w-[400px] aspect-[4/5]">
                <Image
                  src="/equipment/autoclave/vertical-autoclave-triple-walled.webp"
                  alt="Professional Vertical Autoclave Triple Walled Equipment"
                  fill
                  className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-[60%] p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-black text-[#0a192f] mb-4">
                About the Product
              </h2>
              <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-6"></div>
              
              <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed font-medium">
                <p>
                  The <strong className="text-[#0075B6]">Vertical Autoclave Triple Walled</strong> is a compact and highly efficient sterilization unit built for demanding environments such as clinics, dental offices, small laboratories, and mobile medical setups.
                </p>
                <p>
                  Designed for mobility and ease of use, its <strong>vertical, top-loading design</strong> makes it convenient to load small to medium batches of surgical instruments, dressings, and glassware. Using electrically heated high-pressure saturated steam, it effectively penetrates materials to eliminate all forms of microbial life.
                </p>
                <div className="bg-blue-50/80 border-l-4 border-[#0075B6] p-5 rounded-r-lg mt-6 shadow-sm">
                  <h3 className="text-[#0a192f] font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="text-xl">⚙️</span> Complete Setup by AN Global Services
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    Even Triple Walled Sterilizers require careful installation and safety checks. Our team provides <strong className="text-[#0a192f]">comprehensive support</strong>. We help setup the equipment, test the pressure valves, and train your staff on safe operation and routine maintenance.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact-us"
                  className="bg-[#0075B6] hover:bg-[#005a8f] text-white px-8 py-3.5 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center flex-1 sm:flex-none"
                >
                  Request a Quote & Setup
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Operating Principle Section (How It Works) */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-[#0a192f] mb-4">How Sterilization Works</h2>
              <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                vertical triple walled autoclaves utilize electrically generated high-pressure saturated steam to achieve sterilization. The process is straightforward and closely monitored by pressure gauges for maximum safety:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Water Filling & Loading</h3>
                    <p className="text-gray-600 leading-relaxed">Water is added to the base covering the heating elements. Materials are placed in the stainless steel basket, and the heavy-duty lid is securely fastened using wing nuts or a radial lock.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Heating & Pressurization</h3>
                    <p className="text-gray-600 leading-relaxed">The electric heaters generate steam, purging cold air through the vent valve. Once sealed, pressure rises to the desired level (typically 15 PSI at 121°C), ensuring deep steam penetration.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Holding & Exhaust</h3>
                    <p className="text-gray-600 leading-relaxed">The peak temperature is held for 15-20 minutes. Afterward, the unit is turned off, and steam is carefully exhausted using the release valve, leaving the load perfectly sterile.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-inner">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Key Users & Facilities</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="mt-1 text-2xl">🦷</div>
                  <div>
                    <strong className="block text-lg text-gray-900">Dental & Medical Clinics</strong>
                    <span className="text-gray-600">Perfect for the daily sterilization of dental tools, surgical instruments, and dressings in small spaces.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 text-2xl">🔬</div>
                  <div>
                    <strong className="block text-lg text-gray-900">Small Laboratories</strong>
                    <span className="text-gray-600">Used to sterilize glassware, pipettes, and prepare biological media batches quickly.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 text-2xl">🚑</div>
                  <div>
                    <strong className="block text-lg text-gray-900">Mobile Hospitals & Camps</strong>
                    <span className="text-gray-600">Easily transportable, making it essential for remote medical camps and field hospitals.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Specifications Cards */}
      <section className="bg-gray-100 py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#0a192f] mb-4">Equipment Features & Specs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Engineered for portability, consistent reliability, and operator safety.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm">
                  🎛️
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Easy Operation & Monitoring</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Electric Heating:</strong> Efficient immersion heaters ensure rapid steam generation.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Pressure Gauge:</strong> Clear analog dial pressure gauge for easy monitoring of chamber conditions.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Steam Release Valve:</strong> Allows for safe, controlled exhaust of steam post-cycle.</li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm">
                  🛡️
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Advanced Safety Mechanisms</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Safety Valve:</strong> Spring-loaded valve automatically releases excess pressure to prevent bursting.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Secure Lid Locking:</strong> Heavy-duty wing nuts or radial locks guarantee an airtight, high-pressure seal.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Sturdy Gasket:</strong> High-grade neoprene or silicone jointless gasket prevents steam leakage.</li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm">
                  🏗️
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Compact & Durable Build</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>SS 304/Aluminium:</strong> Available in high-grade stainless steel or thick-walled aluminum construction.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Top-Loading Design:</strong> Vertical orientation saves floor space and makes loading simple.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Portable:</strong> Lightweight enough to be easily moved across different clinic rooms or labs.</li>
                </ul>
              </div>
            </div>

            {/* Card 4 - Full Width Specs */}
            <div className="bg-[#0a192f] rounded-2xl p-8 shadow-lg md:col-span-2 lg:col-span-3 mt-4 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white mb-6 border-b border-white/20 pb-4">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Sterilizing Temperature</div>
                    <div className="text-white font-semibold">121°C</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Operating Pressure</div>
                    <div className="text-white font-semibold">15 PSI (1.2 kg/cm²)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Construction Material</div>
                    <div className="text-white font-semibold">Stainless Steel 304 / Aluminum</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Loading Type</div>
                    <div className="text-white font-semibold">Top-loading (Vertical Cylindrical)</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Maintenance & Compliance Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-black text-[#0a192f] mb-4">Maintenance & Operation Guidelines</h2>
            <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
              To ensure longevity and consistent sterilization efficacy from your vertical triple walled autoclave, AN Global Services recommends following these operational guidelines:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-[#0075B6] pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Daily Checks</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Inspect the rubber lid gasket for any signs of wear, cracks, or hardening before use.</li>
                <li>Ensure sufficient distilled water covers the heating element before starting a cycle.</li>
                <li>Verify the vent and safety valves are clean and unobstructed.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Weekly Maintenance</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Validation:</strong> Use indicator tapes or biological indicators to confirm sterilization efficacy.</li>
                <li>Drain the water and clean the inner chamber to prevent mineral scaling.</li>
                <li>Gently clean the heating element with a soft brush if scaling appears.</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Annual Servicing</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Professional calibration of the pressure gauge.</li>
                <li>Replacement of the lid gasket and safety release valve springs if necessary.</li>
                <li>Comprehensive electrical safety check of the immersion heaters and plug cables.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="bg-white py-16 border-t border-gray-200" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-[#0075B6] rounded-full mx-auto mb-6"></div>
            <p className="text-gray-500 text-lg">Common questions about our portable sterilization equipment.</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What is a Vertical Autoclave Triple Walled used for?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                A vertical triple walled autoclave is a heavy-duty steam sterilizer with a radial locking mechanism and three-chamber design used to eliminate microorganisms from surgical instruments, dental tools, and laboratory glassware in clinics, small hospitals, and research setups.
              </div>
            </details>
            
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What are the typical operating temperatures?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Standard sterilization cycles run at 121°C (for 15-20 minutes) up to 134°C, utilizing saturated steam under 15 PSI pressure for effective sterilization.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Is it easy to transport and install?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Yes, it is designed for high-pressure sterilization in research labs, pharmaceuticals, and hospitals. Its vertical, top-loading design means it features a triple-walled construction ensuring maximum thermal efficiency and safety, making it perfect for moving between clinic rooms or using in mobile hospitals.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What maintenance is required?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Daily maintenance involves checking the lid gasket and ensuring sufficient distilled water covers the heating elements. Weekly draining and cleaning of the inner chamber prevents mineral scaling.
              </div>
            </details>
          </div>
        </div>
      </section>
      
    </main>
  );
}
