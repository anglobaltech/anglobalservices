import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Table Top Dairy Test Centrifuge | Milk Testing Centrifuge Machine",
  description:
    "Buy premium table top dairy test centrifuge machines for milk testing laboratories and dairies. Find the best Gerber centrifuge setups by AN Global Services.",
  keywords: [
    "Table Top Dairy Test Centrifuge",
    "Dairy Test Centrifuge",
    "Table Top Centrifuge",
    "Milk Testing Machine",
    "Gerber Centrifuge",
    "Lab Centrifuge Machine",
    "Milk Centrifuge",
    "Dairy Centrifuge",
    "Benchtop Centrifuge",
    "Fat Testing Centrifuge",
    "AN Global Services laboratory equipment",
  ],
  alternates: {
    canonical: "https://www.anglobalservices.com/table-top-dairy-test-centrifuge",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TableTopDairyTestCentrifugePage() {
  return (
    <main className="w-full bg-gray-50 min-h-screen">
      {/* Schema Markup */}
      <Script id="table-top-dairy-centrifuge-schema" type="application/ld+json" strategy="afterInteractive">
        {`
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              "name": "Table Top Dairy Test Centrifuge",
              "alternateName": "Milk Testing Machine",
              "description": "Premium Table Top Dairy Test Centrifuge designed for accurate milk fat testing in dairies and quality control labs. Specifically engineered for Gerber butyrometers.",
              "image": "https://www.anglobalservices.com/equipment/centrifuge/table-top-dairy-test-centrifuge.webp",
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
                "name": "What is a dairy test centrifuge used for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A dairy test centrifuge, often referred to as a Gerber centrifuge, is used in the dairy industry to accurately determine the fat content of milk and other dairy products by separating the fat from the aqueous phase."
                }
              },{
                "@type": "Question",
                "name": "Does this centrifuge heat the milk samples?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our advanced dairy centrifuges are equipped with built-in heating elements. Maintaining a precise temperature (often around 65°C) is crucial in the Gerber method to keep the milk fat liquid and clearly separated."
                }
              },{
                "@type": "Question",
                "name": "What kind of tubes are used in a milk testing centrifuge?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The machine uses specialized glass tubes called butyrometers. Our custom rotors are specifically designed to hold these butyrometers securely during high-speed rotation, preventing breakage."
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
          alt="Table Top Dairy Test Centrifuge Laboratory Equipment"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a3d62]/40 flex items-center justify-center text-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] uppercase">
              TABLE TOP DAIRY TEST CENTRIFUGE
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
                  src="/equipment/centrifuge/table-top-dairy-test-centrifuge.webp"
                  alt="Table Top Dairy Test Centrifuge Equipment"
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
                  The <strong className="text-[#0075B6]">Table Top Dairy Test Centrifuge</strong> (widely known as a Gerber centrifuge or milk testing machine) is an indispensable laboratory instrument designed specifically for the dairy processing industry.
                </p>
                <p>
                  Built to execute the internationally recognized Gerber method, this highly specialized <strong className="font-semibold text-gray-900">milk centrifuge</strong> accurately determines the exact fat content in milk, cream, and other dairy products. It features an integrated heating chamber to ensure the fat column remains perfectly liquid for precise measurement.
                </p>
                <div className="bg-blue-50/80 border-l-4 border-[#0075B6] p-5 rounded-r-lg mt-6 shadow-sm">
                  <h3 className="text-[#0a192f] font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="text-xl">⚙️</span> Complete Setup by AN Global Services
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    Dairy quality control demands absolute precision. Our team delivers <strong className="text-[#0a192f]">comprehensive end-to-end solutions</strong>. We don't just ship the product; we install the machine, calibrate the heating and speed controls, and ensure your lab technicians are fully trained to operate it safely.
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
              <h2 className="text-3xl font-black text-[#0a192f] mb-4">The Milk Fat Testing Process</h2>
              <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Determining fat percentage requires specialized glassware and precise thermal control. Here is how our equipment delivers perfect results:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Butyrometer Preparation</h3>
                    <p className="text-gray-600 leading-relaxed">Milk samples are carefully mixed with sulfuric acid and amyl alcohol inside specialized glass butyrometers. These chemicals digest the proteins and break the emulsion holding the fat.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Heated Centrifugation</h3>
                    <p className="text-gray-600 leading-relaxed">The butyrometers are loaded into the centrifuge. The internal heater warms the chamber (typically to 65°C), while centrifugal force rapidly drives the lighter liquid fat into the narrow neck of the tube.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Direct Reading</h3>
                    <p className="text-gray-600 leading-relaxed">Because the fat remains warm and fluid, technicians can immediately and accurately read the exact fat percentage directly off the graduated scale on the butyrometer's neck.</p>
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
                    <strong className="block text-lg text-gray-900">Commercial Dairies</strong>
                    <span className="text-gray-600">Essential for determining the fat content of incoming raw milk to calculate fair payment to farmers.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Food Quality Labs</strong>
                    <span className="text-gray-600">Used strictly to ensure consumer dairy products (like cheese, cream, and butter) meet exact regulatory standards.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Agricultural Research Centers</strong>
                    <span className="text-gray-600">Helps researchers study the impact of livestock feed on milk fat production and overall herd health.</span>
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
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Engineered for extreme accuracy, reliability, and safety in high-volume dairy processing environments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                  01
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Precision Thermal Control</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Built-In Heater:</strong> Wraparound heating elements ensure the entire chamber maintains a steady temperature.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Digital Thermostat:</strong> Microprocessor-controlled heat ensures fat remains perfectly fluid at 65°C without boiling.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Quick Pre-Heating:</strong> Reaches operational temperatures rapidly for high-throughput labs.</li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                  02
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Specialized Rotors</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Butyrometer Buckets:</strong> Custom-machined swing-out buckets designed perfectly for standard Gerber glass tubes.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Acid-Resistant Coating:</strong> Rotors and chambers are treated to withstand highly corrosive sulfuric acid spills.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Vibration Dampening:</strong> Superior motor suspension guarantees fragile glass butyrometers won't shatter.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Operator Safety</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Lid Interlock System:</strong> Electromechanical lock prevents the lid from opening until the rotor has fully stopped.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Imbalance Sensors:</strong> Instantly detects unaligned loads and shuts off power to prevent critical failure.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Sealed Construction:</strong> Prevents corrosive acid fumes from reaching sensitive internal electronics.</li>
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
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Max Speed</div>
                    <div className="text-white font-semibold">1,200 - 1,400 RPM (Typical)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Heating Range</div>
                    <div className="text-white font-semibold">Ambient to 65°C+</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Tube Capacity</div>
                    <div className="text-white font-semibold">8 to 24 Butyrometers</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Control Panel</div>
                    <div className="text-white font-semibold">Digital Timer & Temp Control</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Comprehensive Maintenance & Calibration Guide */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-black text-[#0a192f] mb-4">Comprehensive Maintenance & Calibration Guide</h2>
            <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
              Operating dairy testing equipment involves handling harsh chemicals like sulfuric acid. Strict maintenance protocols are mandatory to prevent corrosive damage and ensure absolute safety. AN Global Services provides complete guidance:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-[#0075B6] pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Routine Inspections</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Check the butyrometer buckets for any signs of structural fatigue or acid corrosion.</li>
                <li>Inspect glass tubes for micro-fractures prior to every high-speed spin.</li>
                <li>Immediately neutralize and thoroughly wipe down any acid or milk spills within the chamber.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Safety & Heating Checks</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Interlock Check:</strong> Verify the motorized lid lock engages to prevent exposure to spinning acid tubes.</li>
                <li><strong>Balance Test:</strong> Routinely test the imbalance detection sensors to prevent shattered glassware.</li>
                <li><strong>Thermostat Verification:</strong> Ensure the chamber perfectly holds the 65°C target temperature.</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Annual Servicing</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Official calibration of the thermostatic sensors to meet strict food quality guidelines.</li>
                <li>Professional inspection and deep-cleaning of the brushless induction motor.</li>
                <li>Replacement of any degraded bucket cushions or acid-damaged components.</li>
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
            <p className="text-gray-500 text-lg">Learn more about our specialized dairy testing centrifuges.</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What is a dairy test centrifuge used for?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                A dairy test centrifuge, often referred to as a Gerber centrifuge, is used in the dairy industry to accurately determine the fat content of milk and other dairy products by separating the fat from the aqueous phase.
              </div>
            </details>
            
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Does this centrifuge heat the milk samples?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Yes, our advanced dairy centrifuges are equipped with built-in heating elements. Maintaining a precise temperature (often around 65°C) is crucial in the Gerber method to keep the milk fat liquid and clearly separated.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What kind of tubes are used in a milk testing centrifuge?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                The machine uses specialized glass tubes called butyrometers. Our custom rotors are specifically designed to hold these butyrometers securely during high-speed rotation, preventing breakage.
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
