import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Precision Chemical Balance & Analytical Scale | AN Global Services",
  description:
    "High-accuracy Chemical Balance designed for precise laboratory weighing. Features 0.1mg readability, automatic internal calibration, and a glass draft shield for flawless accuracy. Complete setup by AN Global Services.",
  keywords: [
    "Chemical Balance",
    "Analytical Balance",
    "Laboratory Weighing Scale",
    "Precision Chemical Scale",
    "0.1mg Analytical Balance",
    "Digital Chemical Balance",
    "High Precision Lab Scale",
    "AN Global Services laboratory equipment",
  ],
  alternates: {
    canonical: "https://www.anglobalservices.com/chemical-balance",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ChemicalBalancePage() {
  return (
    <main className="w-full bg-gray-50 min-h-screen">
      {/* Schema Markup */}
      <Script id="chemical-balance-schema" type="application/ld+json" strategy="afterInteractive">
        {`
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              "name": "Precision Chemical Balance",
              "description": "Premium Analytical Chemical Balance engineered for sub-milligram precision. Features Electromagnetic Force Compensation (EMFC) technology, automatic internal calibration, and a robust glass draft shield to eliminate environmental interference.",
              "image": "https://www.anglobalservices.com/equipment/lab-balances/chemical-balance.webp",
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
                "name": "What is the accuracy of an analytical chemical balance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A standard analytical chemical balance offers a readability of 0.1 mg (0.0001 grams). This exceptional precision is necessary for exact chemical formulations, quantitative analysis, and pharmaceutical compounding."
                }
              },{
                "@type": "Question",
                "name": "Why do chemical balances have glass draft shields?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The glass draft shield prevents microscopic air currents, dust, and temperature fluctuations from affecting the highly sensitive weighing pan. Even a slight breeze can alter the reading by several milligrams on an analytical scale."
                }
              },{
                "@type": "Question",
                "name": "Does the balance require manual calibration?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our advanced chemical balances feature Automatic Internal Calibration. The scale uses an internal motorized weight to calibrate itself automatically based on time intervals or temperature changes, ensuring consistent accuracy without manual intervention."
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
          alt="Precision Chemical Balance Laboratory Equipment"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a3d62]/40 flex items-center justify-center text-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] uppercase">
              PRECISION CHEMICAL BALANCE
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
                  src="/equipment/lab-balances/chemical-balance.webp"
                  alt="Precision Analytical Chemical Balance Equipment"
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
                  The <strong className="text-[#0075B6]">Analytical Chemical Balance</strong> is the cornerstone of any modern laboratory, designed for the ultra-precise measurement of solid, liquid, or granular chemical compounds down to the sub-milligram level.
                </p>
                <p>
                  Operating at a readability of 0.1 mg (0.0001g), this balance utilizes Electromagnetic Force Compensation (EMFC) technology to deliver rapid, stable, and highly accurate readings. It is housed within a protective glass draft shield to eliminate environmental variables like air currents and dust, ensuring flawless reproducibility in quantitative analysis and pharmaceutical compounding.
                </p>
                <div className="bg-blue-50/80 border-l-4 border-[#0075B6] p-5 rounded-r-lg mt-6 shadow-sm">
                  <h3 className="text-[#0a192f] font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="text-xl">⚙️</span> Complete Setup by AN Global Services
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    Achieving 0.1mg accuracy requires perfect environmental isolation. Our team provides <strong className="text-[#0a192f]">comprehensive end-to-end solutions</strong>. We don't just deliver the scale; we install it on an anti-vibration table, perform the initial multi-point weight calibration, and integrate it with your laboratory information systems.
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
              <h2 className="text-3xl font-black text-[#0a192f] mb-4">How the Weighing Process Works</h2>
              <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Measuring mass down to the sub-milligram level is a delicate operation. Here is how our balance ensures absolute precision:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Isolation & Taring</h3>
                    <p className="text-gray-600 leading-relaxed">The empty beaker or weighing paper is placed on the stainless steel pan inside the draft shield. The doors are closed, and the operator presses 'Tare' to zero out the container's weight.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Electromagnetic Compensation</h3>
                    <p className="text-gray-600 leading-relaxed">As the sample is carefully added, the balance does not use mechanical springs. Instead, an internal electromagnet generates a counter-force perfectly equal to the mass of the sample.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Processing</h3>
                    <p className="text-gray-600 leading-relaxed">The exact electrical current required to keep the pan levitated is measured and translated instantly into a highly stable digital mass readout accurate to 0.0001 grams.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-inner">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Key Users & Facilities</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="mt-1 text-2xl">🧪</div>
                  <div>
                    <strong className="block text-lg text-gray-900">Chemistry Laboratories</strong>
                    <span className="text-gray-600">Essential for preparing exact molar solutions and performing quantitative chemical analyses.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 text-2xl">💊</div>
                  <div>
                    <strong className="block text-lg text-gray-900">Pharmaceutical R&D</strong>
                    <span className="text-gray-600">Utilized to weigh active pharmaceutical ingredients (APIs) for drug formulation and testing.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 text-2xl">💎</div>
                  <div>
                    <strong className="block text-lg text-gray-900">Metallurgy & Jewelry</strong>
                    <span className="text-gray-600">Used for density determination and precision weighing of precious metals and gems.</span>
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
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Built strictly for stability, precision, and compliance in rigorous lab environments.</p>
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
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Automatic Internal Calibration:</strong> Self-calibrates via internal weights during temp shifts.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Large LCD/OLED Display:</strong> High-contrast backlit screen for clear visibility in any lighting.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Multiple Weighing Modes:</strong> Supports piece counting, percentage weighing, and density calculation.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Environmental Protection</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Glass Draft Shield:</strong> 3-door sliding glass shield blocks air currents and dust.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Overload Protection:</strong> Mechanical stops prevent damage to the delicate internal sensor.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Anti-Static Pan:</strong> Stainless steel weighing pan resists static buildup that affects readings.</li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm">
                  🔗
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Data & Connectivity</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>GLP/GMP Compliance:</strong> Prints outputs with date, time, and scale ID for regulatory compliance.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>RS232 / USB Interfaces:</strong> Connect seamlessly to printers, PCs, and LIMS software.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Direct Excel Export:</strong> Transfer weighing data directly to spreadsheets without additional software.</li>
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
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Max Capacity</div>
                    <div className="text-white font-semibold">220g (Standard)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Readability (Accuracy)</div>
                    <div className="text-white font-semibold">0.1 mg / 0.0001 g</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Sensor Technology</div>
                    <div className="text-white font-semibold">EMFC (Electromagnetic)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Calibration</div>
                    <div className="text-white font-semibold">Internal Automatic</div>
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
              Achieving 0.1mg accuracy demands a flawless environment and regular upkeep. AN Global Services provides complete guidance on the following operational requirements for your analytical balance:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-[#0075B6] pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Routine Inspections</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Check the integrated spirit bubble level to ensure the scale is perfectly horizontal before use.</li>
                <li>Clean the stainless steel weighing pan and draft shield glass with an anti-static brush.</li>
                <li>Ensure the ambient temperature in the lab is stable.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Calibration Checks</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Internal Auto-Cal:</strong> Allow the machine to perform its self-calibration protocol upon startup.</li>
                <li><strong>External Verification:</strong> Periodically verify the scale using certified F1/E2 class test weights.</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Annual Servicing</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Official NABL-traceable calibration certificate issuance.</li>
                <li>Deep diagnostic check of the EMFC sensor board and electrical contacts.</li>
                <li>Anti-vibration table leveling and damper inspection.</li>
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
            <p className="text-gray-500 text-lg">Learn more about precision chemical balancing and calibration.</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What is the accuracy of an analytical chemical balance?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                A standard analytical chemical balance offers a readability of 0.1 mg (0.0001 grams). This exceptional precision is necessary for exact chemical formulations, quantitative analysis, and pharmaceutical compounding.
              </div>
            </details>
            
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Why do chemical balances have glass draft shields?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                The glass draft shield prevents microscopic air currents, dust, and temperature fluctuations from affecting the highly sensitive weighing pan. Even a slight breeze in a laboratory can alter the reading by several milligrams on an analytical scale.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Does the balance require manual calibration?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Our advanced chemical balances feature Automatic Internal Calibration. The scale uses an internal motorized weight to calibrate itself automatically based on set time intervals or ambient temperature changes, ensuring consistent accuracy without manual intervention.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Can I export the weighing data to a computer?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Yes, our scales are equipped with RS232 and USB interfaces. They are GLP/GMP compliant, meaning you can directly connect them to a PC or laboratory printer to log timestamps, calibration data, and exact weights automatically.
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
