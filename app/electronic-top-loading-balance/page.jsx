import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Precision Electronic Top Loading Balance | AN Global Services",
  description:
    "High-precision Electronic Top Loading Balance for laboratory, pharmaceutical, and research applications. Features a glass draft shield, touchscreen interface, and electromagnetic force compensation.",
  keywords: [
    "Electronic Top Loading Balance",
    "Analytical Balance",
    "Precision Laboratory Scale",
    "High Accuracy Top Loading Balance",
    "Digital Lab Balance",
    "Glass Draft Shield Scale",
    "Electromagnetic Force Compensation Balance",
    "AN Global Services lab equipment",
  ],
  alternates: {
    canonical: "https://www.anglobalservices.com/electronic-top-loading-balance",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ElectronicTopLoadingBalancePage() {
  return (
    <main className="w-full bg-gray-50 min-h-screen">
      {/* Schema Markup */}
      <Script id="top-loading-balance-schema" type="application/ld+json" strategy="afterInteractive">
        {`
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              "name": "Electronic Top Loading Balance",
              "description": "High-precision analytical electronic top loading balance. Engineered with electromagnetic force compensation technology, a glass draft shield to prevent air currents from affecting readings, and a digital touchscreen interface for advanced laboratory use.",
              "image": "https://www.anglobalservices.com/equipment/lab-balances/electronic-top-loading-balance.webp",
              "brand": {
                "@type": "Brand",
                "name": "AN Global Services"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://www.anglobalservices.com/contact-us",
                "priceCurrency": "INR",
                "price": "0",
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
                "name": "What is the accuracy of the electronic top loading balance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our top loading balances offer extremely high precision, typically featuring a readability of 0.01g down to 0.001g (1 milligram), making them ideal for strict analytical chemistry and pharmaceutical applications."
                }
              },{
                "@type": "Question",
                "name": "Why does it have a glass enclosure?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The glass draft shield prevents microscopic air currents, dust, and temperature fluctuations in the laboratory from interfering with the highly sensitive electromagnetic weighing sensor, ensuring perfectly stable readings."
                }
              },{
                "@type": "Question",
                "name": "Does the balance require manual calibration?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Many of our advanced models feature internal automatic calibration. However, they also support external calibration using certified standard weights to meet GLP/GMP compliance requirements."
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
          alt="Precision Electronic Top Loading Balance Equipment"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a3d62]/40 flex items-center justify-center text-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] uppercase">
              ELECTRONIC TOP LOADING BALANCE
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
              <div className="relative w-full h-full max-w-[400px] aspect-square">
                <Image
                  src="/equipment/lab-balances/electronic-top-loading-balance.webp"
                  alt="Precision Electronic Top Loading Balance Equipment"
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
                  The <strong className="text-[#0075B6]">Electronic Top Loading Balance</strong> is a staple of the modern analytical laboratory, designed to provide lightning-fast, ultra-precise mass measurements for research, quality control, and pharmaceutical formulation.
                </p>
                <p>
                  Equipped with a highly sensitive electromagnetic force compensation cell, this balance detects micro-variations in weight instantly. It features a protective sliding glass draft shield to eliminate environmental interference and a vibrant, intuitive digital touchscreen interface that simplifies complex weighing tasks such as piece counting, percent weighing, and density determination.
                </p>
                <div className="bg-blue-50/80 border-l-4 border-[#0075B6] p-5 rounded-r-lg mt-6 shadow-sm">
                  <h3 className="text-[#0a192f] font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="text-xl">🔬</span> GLP/GMP Compliant Setup
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    Analytical precision requires perfect environmental control. Our team provides <strong className="text-[#0a192f]">professional installation and IQ/OQ/PQ validation</strong>. We ensure the balance is perfectly leveled on anti-vibration tables, calibrated to standard reference weights, and fully integrated with your laboratory informatics systems.
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
              <h2 className="text-3xl font-black text-[#0a192f] mb-4">The Analytical Weighing Process</h2>
              <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Unlike standard strain gauge scales, our top loading balance utilizes electromagnetic force restoration to achieve sub-milligram accuracy:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Environmental Isolation</h3>
                    <p className="text-gray-600 leading-relaxed">The operator opens the sliding glass draft shield, places a weigh boat on the stainless steel pan, presses 'Tare', and closes the shield to isolate the chamber from room air currents.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Electromagnetic Compensation</h3>
                    <p className="text-gray-600 leading-relaxed">As a sample is added, the pan is pushed downward. A position sensor detects this microscopic movement and instantly sends an electric current through a coil in a magnetic field to push the pan back to its exact original position.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Translation</h3>
                    <p className="text-gray-600 leading-relaxed">The amount of electrical current required to balance the load is directly proportional to the mass of the sample. The internal microprocessor translates this current into a highly precise digital weight reading on the touchscreen.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-inner">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Key Users & Facilities</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Pharmaceutical R&D</strong>
                    <span className="text-gray-600">Essential for compounding medications and formulating active pharmaceutical ingredients where a milligram difference alters efficacy.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Chemical Laboratories</strong>
                    <span className="text-gray-600">Used for titrations, preparing standard solutions, and precise mixture ratios in analytical chemistry.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Jewelry & Precious Metals</strong>
                    <span className="text-gray-600">Utilized by jewelers and assayers for the exacting measurement of gold, diamonds, and precious gems.</span>
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
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Engineered for analytical perfection, environmental stability, and intuitive operation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                  01
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Smart Interface</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Touchscreen LCD:</strong> High-resolution graphical interface for easy navigation of complex weighing modes.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Built-in Applications:</strong> Pre-programmed for parts counting, density calculation, and dynamic animal weighing.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Multi-Unit Toggle:</strong> Instantly switch between grams, milligrams, ounces, carats, and custom units.</li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                  02
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Environmental Protection</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">✔</span> <strong>Glass Draft Shield:</strong> Sliding side and top doors block air drafts while allowing easy access.</li>
                  <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">✔</span> <strong>Internal Calibration:</strong> Motorized internal weights automatically calibrate the scale if the room temperature shifts.</li>
                  <li className="flex items-start gap-2"><span className="text-indigo-500 mt-0.5">✔</span> <strong>Anti-Static Pan:</strong> The stainless steel pan neutralizes static electricity that could skew micro-measurements.</li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                  03
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">GLP/GMP Data Handling</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>RS-232 & USB Ports:</strong> Seamlessly integrate with LIMS software or laboratory printers.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Compliance Output:</strong> Automatically print time, date, user ID, and calibration status for audit trails.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Overload Protection:</strong> Guards the sensitive internal mechanisms from accidental heavy drops.</li>
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
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Max Capacity Range</div>
                    <div className="text-white font-semibold">120g to 600g (Depending on Model)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Readability (Precision)</div>
                    <div className="text-white font-semibold">0.01g / 0.001g (1mg)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Stabilization Time</div>
                    <div className="text-white font-semibold">&le; 2.5 seconds</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Calibration Type</div>
                    <div className="text-white font-semibold">Internal Motorized / External</div>
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
            <h2 className="text-3xl font-black text-[#0a192f] mb-4">Laboratory Maintenance & GLP Guidelines</h2>
            <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
              Analytical balances are extremely sensitive instruments. To maintain compliance with Good Laboratory Practice (GLP) and ensure repeatable precision, adhere to the following protocols:
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <div className="border-l-4 border-[#0075B6] pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Environmental Control</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Place the balance on a dedicated marble or granite anti-vibration table.</li>
                <li>Keep away from HVAC vents, direct sunlight, and magnetic fields.</li>
                <li>Ensure the laboratory maintains a stable temperature and humidity level.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-indigo-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Operating Procedures</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Always use forceps or gloved hands to handle weights and samples to prevent oil transfer.</li>
                <li>Keep the draft shield doors closed immediately after placing the sample.</li>
                <li>Never leave samples on the pan when the balance is not in use.</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Calibration & Audits</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Perform internal calibration daily before the first use.</li>
                <li>Validate accuracy monthly using OIML Class E2 or F1 certified standard weights.</li>
                <li>Schedule annual professional servicing to clean internal electromagnetic coils.</li>
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
            <p className="text-gray-500 text-lg">Learn more about our precision analytical weighing solutions.</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What is the accuracy of the electronic top loading balance?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Our analytical top loading balances offer extremely high precision. Depending on the specific model ordered, readability ranges from 0.01g down to 0.001g (1 milligram), making them ideal for strict analytical chemistry, compounding, and pharmaceutical applications.
              </div>
            </details>
            
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Why does it have a glass enclosure?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                The glass draft shield is critical for sub-milligram precision. It prevents microscopic air currents from HVAC systems, human breath, dust, and sudden temperature fluctuations from interfering with the highly sensitive electromagnetic weighing sensor, ensuring perfectly stable and repeatable readings.
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
                Many of our advanced models feature internal automatic calibration. A motorized internal weight drops onto the sensor periodically or when a temperature change is detected to recalibrate the machine. However, they also fully support external calibration using certified standard weights to meet GLP/GMP compliance audits.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Can I connect this balance directly to a computer or printer?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Yes, the balance is equipped with standard RS-232 and USB data ports. This allows seamless integration with Laboratory Information Management Systems (LIMS), Excel, or a GLP-compliant dot-matrix printer to automatically output time, date, and weight data for your official records.
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
