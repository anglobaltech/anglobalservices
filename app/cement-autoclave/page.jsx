import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Cement Autoclave for Soundness Testing | AN Global Services",
  description:
    "High-pressure Cement Autoclave designed to measure the soundness and delayed expansion of cement. Features ASTM C151 compliance and premium safety controls. Setup by AN Global Services.",
  keywords: [
    "Cement Autoclave",
    "Cement Soundness Testing Equipment",
    "ASTM C151 Cement Autoclave",
    "Portland Cement Expansion Test",
    "Laboratory Autoclave for Cement",
    "High Pressure Cement Tester",
    "Cement Mortar Bar Testing",
    "AN Global Services laboratory equipment",
  ],
  alternates: {
    canonical: "https://www.anglobalservices.com/cement-autoclave",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CementAutoclavePage() {
  return (
    <main className="w-full bg-gray-50 min-h-screen">
      {/* Schema Markup */}
      <Script id="cement-autoclave-schema" type="application/ld+json" strategy="afterInteractive">
        {`
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              "name": "Cement Autoclave",
              "description": "High-grade Cement Autoclave designed to determine the soundness (expansion potential) of Portland cement under high pressure and temperature. Ensures compliance with ASTM C151.",
              "image": "https://www.anglobalservices.com/equipment/autoclave/cement-autoclave.webp",
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
                "name": "What is a Cement Autoclave used for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A cement autoclave is a specialized testing machine used to measure the 'soundness' or potential delayed expansion of Portland cement. It simulates years of aging in just a few hours to ensure the cement won't crack or fail after construction."
                }
              },{
                "@type": "Question",
                "name": "What pressure does a cement autoclave reach?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "During a standard soundness test (like ASTM C151), the autoclave is designed to reach and maintain a high steam pressure of approximately 295 to 350 psi (around 2.1 MPa) for a duration of 3 hours."
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
          alt="Cement Autoclave Laboratory Testing"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a3d62]/40 flex items-center justify-center text-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] uppercase">
              CEMENT AUTOCLAVE
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
                  src="/equipment/autoclave/cement-autoclave.webp"
                  alt="Professional Cement Autoclave Equipment"
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
                  The <strong className="text-[#0075B6]">Cement Autoclave</strong> is a highly specialized piece of laboratory testing equipment used by construction companies, cement manufacturers, and civil engineering labs.
                </p>
                <p>
                  Its primary purpose is to test the <strong>soundness</strong> of cement. "Soundness" simply means ensuring the cement will not dangerously expand, crack, or fail after it has been poured and set. By subjecting small cement bars to extreme high-pressure steam, the autoclave accelerates the aging process, simulating years of wear and tear in just a few hours.
                </p>
                <div className="bg-blue-50/80 border-l-4 border-[#0075B6] p-5 rounded-r-lg mt-6 shadow-sm">
                  <h3 className="text-[#0a192f] font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="text-xl">⚙️</span> Complete Setup by AN Global Services
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    Testing cement under high pressure requires precision and extreme safety. Our team provides <strong className="text-[#0a192f]">comprehensive end-to-end solutions</strong>. We don't just deliver the equipment; we fully install it, calibrate the pressure sensors, and train your staff on how to safely conduct the tests.
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
              <h2 className="text-3xl font-black text-[#0a192f] mb-4">How the Test Works</h2>
              <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Conducting a cement soundness test is a straightforward but highly controlled process. Here is how the equipment accelerates time to test the durability of your cement:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Preparation & Measurement</h3>
                    <p className="text-gray-600 leading-relaxed">Small rectangular bars of cement (called mortar bars) are created and allowed to cure for 24 hours. Their exact starting length is carefully measured and recorded before testing begins.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">High-Pressure Heating</h3>
                    <p className="text-gray-600 leading-relaxed">The cement bars are placed inside the autoclave chamber. The machine rapidly heats the water inside, creating intense steam that reaches a pressure of around 300 psi (2.1 MPa) within an hour.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The 3-Hour Hold & Cooling</h3>
                    <p className="text-gray-600 leading-relaxed">The intense pressure is maintained precisely for 3 hours. Afterward, the machine is safely cooled down. The bars are removed and measured again. If they expanded too much, the cement batch is deemed unsafe for construction.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-inner">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Key Users & Facilities</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="mt-1 text-2xl">🏗️</div>
                  <div>
                    <strong className="block text-lg text-gray-900">Cement Manufacturers</strong>
                    <span className="text-gray-600">Used daily to quality-check batches before they are bagged and sold to the public.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 text-2xl">👷</div>
                  <div>
                    <strong className="block text-lg text-gray-900">Large Construction Firms</strong>
                    <span className="text-gray-600">Utilized to verify the safety and durability of raw materials before pouring foundations for buildings or bridges.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 text-2xl">🔬</div>
                  <div>
                    <strong className="block text-lg text-gray-900">Civil Engineering Laboratories</strong>
                    <span className="text-gray-600">Essential for conducting official ASTM and ISO standardized tests for certification purposes.</span>
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
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Built strictly for safety, precision, and ease of use in heavy-duty lab environments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm">
                  🎛️
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Precision Control</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>PID Controller:</strong> Microprocessor-based temperature control for exact heat maintenance.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Analog & Digital Displays:</strong> Easy-to-read pressure gauges alongside digital temperature readouts.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Automated Timer:</strong> Built-in alarms to notify staff exactly when the 3-hour hold is complete.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Redundant Safety</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Safety Pop Valves:</strong> Two independent mechanical valves that auto-release if pressure exceeds safe limits (approx. 350 psi).</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Heavy-Duty Locks:</strong> Secure fastening mechanisms prevent the chamber from opening while pressurized.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Rugged Build Quality</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Stainless Steel Chamber:</strong> Designed to withstand years of intense pressure without corroding.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Thermal Insulation:</strong> Thick insulated walls protect laboratory staff from external burns.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Specimen Racks:</strong> Included vertical racks perfectly size for standardized cement mortar bars.</li>
                </ul>
              </div>
            </div>

            {/* Card 4 - Full Width Specs */}
            <div className="bg-[#0a192f] rounded-2xl p-8 shadow-lg md:col-span-2 lg:col-span-3 mt-4 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white mb-6 border-b border-white/20 pb-4">Technical Specifications & Build</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Working Pressure</div>
                    <div className="text-white font-semibold">21 ± 1 kg/cm² (approx 300 PSI)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Working Temperature</div>
                    <div className="text-white font-semibold">215°C (Simulated High Heat)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Test Standards</div>
                    <div className="text-white font-semibold">ASTM C 151, IS: 4031</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Specimen Capacity</div>
                    <div className="text-white font-semibold">Includes rack for multiple mortar bars</div>
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
            <h2 className="text-3xl font-black text-[#0a192f] mb-4">Comprehensive Maintenance & Calibration Guide</h2>
            <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
              Operating at high pressures of 300 psi requires strict maintenance protocols to ensure absolute safety and precise test results. AN Global Services provides complete guidance on the following operational requirements:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-[#0075B6] pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Routine Inspections</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Check the heavy-duty lid gasket for wear or heat degradation before every test.</li>
                <li>Ensure the water level is correct to prevent heating element burnout.</li>
                <li>Wipe down the stainless steel chamber to remove cement dust.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Safety Testing</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Pop Valve Check:</strong> Manually trigger the safety release valves weekly to ensure they are not seized.</li>
                <li><strong>Pressure Gauge:</strong> Monitor the analog gauge against the digital readout to ensure they match perfectly during heat up.</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Annual Servicing</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Official calibration of the PID temperature controller and pressure gauges.</li>
                <li>Professional replacement of the high-temperature sealing O-rings.</li>
                <li>Deep inspection of the heating elements and internal wiring for heat fatigue.</li>
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
            <p className="text-gray-500 text-lg">Learn more about our specialized cement testing autoclaves.</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What is a Cement Autoclave used for?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                A cement autoclave is a specialized testing machine used to measure the 'soundness' or potential delayed expansion of Portland cement. It simulates years of aging in just a few hours to ensure the cement won't crack or fail after construction.
              </div>
            </details>
            
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What pressure does a cement autoclave reach?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                During a standard soundness test (like ASTM C151), the autoclave is designed to reach and maintain a high steam pressure of approximately 295 to 350 psi (around 2.1 MPa) for a duration of 3 hours.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Does this meet ASTM testing standards?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Yes, our cement autoclaves are engineered strictly according to ASTM C151 standards, making them fully compliant for international construction and civil engineering testing.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What safety features are included?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Given the extremely high testing pressures, our units come with a spring-loaded safety valve, an automatic pressure switch that cuts off power if limits are exceeded, and a heavy-duty locking mechanism.
              </div>
            </details>
          </div>
        </div>
      </section>
      
    </main>
  );
}
