import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Bench Top Low Capacity Centrifuge | Small Lab Centrifuge",
  description:
    "Buy premium bench top low capacity centrifuge machines. Perfect for small clinical labs, universities, and point-of-care testing by AN Global Services.",
  keywords: [
    "Bench Top Low Capacity Centrifuge",
    "Low Capacity Centrifuge",
    "Bench Top Centrifuge",
    "Small Lab Centrifuge",
    "Mini Centrifuge",
    "Clinical Centrifuge",
    "Tabletop Centrifuge",
    "AN Global Services laboratory equipment",
  ],
  alternates: {
    canonical: "https://www.anglobalservices.com/bench-top-low-capacity-centrifuge",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BenchTopLowCapacityCentrifugePage() {
  return (
    <main className="w-full bg-gray-50 min-h-screen">
      {/* Schema Markup */}
      <Script id="low-capacity-centrifuge-schema" type="application/ld+json" strategy="afterInteractive">
        {`
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              "name": "Bench Top Low Capacity Centrifuge",
              "alternateName": ["Low Capacity Centrifuge", "Small Lab Centrifuge", "Mini Centrifuge"],
              "description": "Compact and highly efficient low capacity bench top centrifuge. Designed for small-scale clinical diagnostics, educational labs, and point-of-care environments.",
              "image": "https://www.anglobalservices.com/equipment/centrifuge/bench-top-low-capacity-centrifuge.webp",
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
                "name": "What is a bench top low capacity centrifuge used for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A low capacity centrifuge is used for processing small batches of biological samples, such as blood or urine. It is widely used in small clinical clinics, point-of-care testing facilities, and educational laboratories where large-scale processing is unnecessary."
                }
              },{
                "@type": "Question",
                "name": "What tube sizes can a low capacity centrifuge accommodate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Despite being 'low capacity', these models typically hold standard clinical tubes ranging from 5ml up to 15ml, usually with a maximum rotor capacity of 6 to 12 tubes per spin."
                }
              },{
                "@type": "Question",
                "name": "Does this machine require special installation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Due to its compact footprint and lower operating speeds, it simply requires a flat, stable laboratory bench and a standard electrical outlet. It does not require the heavy-duty balancing setups of large industrial centrifuges."
                }
              },{
                "@type": "Question",
                "name": "Is it safe to use in a small clinic?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. It comes equipped with standard safety features including a motorized lid lock that prevents opening during operation and imbalance detection sensors to prevent excessive vibration."
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
          alt="Bench Top Low Capacity Centrifuge Laboratory Equipment"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a3d62]/40 flex items-center justify-center text-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] uppercase">
              BENCH TOP LOW CAPACITY CENTRIFUGE
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
                  src="/equipment/centrifuge/bench-top-low-capacity-centrifuge.webp"
                  alt="Bench Top Low Capacity Centrifuge Equipment"
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
                  The <strong className="text-[#0075B6]">Bench Top Low Capacity Centrifuge</strong> (often searched as a <strong className="font-semibold text-gray-900">small lab centrifuge</strong> or mini centrifuge) is the ideal solution for environments that require reliable separation but process smaller volumes of samples.
                </p>
                <p>
                  Despite its compact, space-saving design, this machine delivers robust performance. It is tailored for routine clinical applications—such as separating serum or plasma from whole blood, and urine sedimentation—making it an indispensable asset for private clinics, educational institutions, and point-of-care testing.
                </p>
                <div className="bg-blue-50/80 border-l-4 border-[#0075B6] p-5 rounded-r-lg mt-6 shadow-sm">
                  <h3 className="text-[#0a192f] font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="text-xl">⚙️</span> Complete Setup by AN Global Services
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    Simplicity does not mean skipping protocol. We deliver the unit directly to your clinic or lab, ensuring the digital interfaces are correctly calibrated and your staff understands the straightforward, one-touch operation for daily diagnostic spins.
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
              <h2 className="text-3xl font-black text-[#0a192f] mb-4">Efficient Routine Processing</h2>
              <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Streamline your daily diagnostic workflow with a machine built for quick, low-volume, repeatable spins:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Space-Saving Footprint</h3>
                    <p className="text-gray-600 leading-relaxed">Designed to fit comfortably on any standard clinic bench or biological safety cabinet without taking up valuable workspace.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Standard Clinical Tubes</h3>
                    <p className="text-gray-600 leading-relaxed">The built-in rotor accommodates standard 5ml, 10ml, and 15ml vacuum blood collection tubes, allowing immediate processing right after patient sampling.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Clear Separation</h3>
                    <p className="text-gray-600 leading-relaxed">Smooth acceleration and deceleration profiles ensure that blood fractions (serum/plasma and red blood cells) separate cleanly without remixing upon braking.</p>
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
                    <strong className="block text-lg text-gray-900">Private Clinics & GP Offices</strong>
                    <span className="text-gray-600">Perfect for point-of-care processing of blood and urine samples before sending them to a central lab.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Educational Laboratories</strong>
                    <span className="text-gray-600">A safe, user-friendly entry-level machine for university biology and chemistry student labs.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Veterinary Clinics</strong>
                    <span className="text-gray-600">Utilized daily for animal blood diagnostics and fecal flotation tests.</span>
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
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Engineered for user-friendly operation, quiet performance, and daily reliability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                  01
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Quiet & Efficient Motor</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Brushless Motor:</strong> Ensures a long lifespan with zero carbon brush maintenance required.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Low Noise Emission:</strong> Operates quietly (typically &lt;60 dB) to avoid disturbing clinic environments.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Low Heat Transfer:</strong> Passive cooling ensures samples are not damaged by motor heat during short spins.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Simplified Interface</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Digital Display:</strong> Bright LED/LCD screen for easy readability of speed and time.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Intuitive Controls:</strong> Soft-touch membrane keypad that is easy to wipe down and disinfect.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Quick Presets:</strong> Easy to adjust RPM or RCF without navigating complex menus.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Essential Safety</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Auto Lid Lock:</strong> The machine cannot run while open, and the lid cannot open while spinning.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Manual Override:</strong> Emergency lid release mechanism in the event of a clinic power failure.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Imbalance Detection:</strong> Automatically stops if tubes are loaded asymmetrically.</li>
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
                    <div className="text-white font-semibold">4,000 - 6,000 RPM</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Tube Capacity</div>
                    <div className="text-white font-semibold">6x15ml or 12x5ml</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Motor Type</div>
                    <div className="text-white font-semibold">Brushless DC/AC</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Control System</div>
                    <div className="text-white font-semibold">Microprocessor Digital</div>
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
              To ensure longevity and diagnostic accuracy in busy clinic environments, AN Global Services recommends the following easy-to-follow maintenance routines:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-[#0075B6] pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Daily Cleaning</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Wipe the rotor and inner chamber with a mild disinfectant after daily use.</li>
                <li>Check for any spilled blood or urine inside the tube shields and clean immediately to prevent corrosion.</li>
                <li>Ensure the lid gasket is clean and dry.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Operational Checks</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Balancing:</strong> Always ensure opposite tubes have equal fluid volume to prevent wear on the motor bearings.</li>
                <li><strong>Lid Lock:</strong> Test that the lid cannot be forced open while the machine is engaged.</li>
                <li><strong>Noise Check:</strong> Listen for any unusual grinding or rattling, which could indicate improper seating.</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Annual Servicing</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Although highly durable, annual verification of RPM accuracy using a tachometer is recommended for clinical compliance.</li>
                <li>Visual inspection of the rotor for any hairline cracks caused by repeated stress.</li>
                <li>Calibration of the timer circuit.</li>
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
            <p className="text-gray-500 text-lg">Learn more about our small lab centrifuges.</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What is a bench top low capacity centrifuge used for?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                A low capacity centrifuge is used for processing small batches of biological samples, such as blood or urine. It is widely used in small clinical clinics, point-of-care testing facilities, and educational laboratories where large-scale processing is unnecessary.
              </div>
            </details>
            
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What tube sizes can a low capacity centrifuge accommodate?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Despite being "low capacity", these models typically hold standard clinical tubes ranging from 5ml up to 15ml, usually with a maximum rotor capacity of 6 to 12 tubes per spin.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Does this machine require special installation?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                No. Due to its compact footprint and lower operating speeds, it simply requires a flat, stable laboratory bench and a standard electrical outlet. It does not require the heavy-duty balancing setups of large industrial centrifuges.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Is it safe to use in a small clinic?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Absolutely. It comes equipped with standard safety features including a motorized lid lock that prevents opening during operation and imbalance detection sensors to prevent excessive vibration.
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
