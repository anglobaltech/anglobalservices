import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Bench Top High Speed Micro Centrifuge | Microcentrifuge",
  description:
    "Buy a premium Bench Top High Speed Micro Centrifuge. Ideal for DNA/RNA extraction, PCR preparation, and fast processing of micro-volumes. Advanced lab equipment by AN Global Services.",
  keywords: [
    "Bench Top High Speed Micro Centrifuge",
    "Micro Centrifuge",
    "High Speed Microcentrifuge",
    "Bench Top Centrifuge",
    "Microfuge",
    "High Speed Lab Centrifuge",
    "DNA Extraction Centrifuge",
    "AN Global Services laboratory equipment",
  ],
  alternates: {
    canonical: "https://www.anglobalservices.com/bench-top-high-speed-micro-centrifuge",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BenchTopHighSpeedMicroCentrifugePage() {
  return (
    <main className="w-full bg-gray-50 min-h-screen">
      {/* Schema Markup */}
      <Script id="micro-centrifuge-schema" type="application/ld+json" strategy="afterInteractive">
        {`
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              "name": "Bench Top High Speed Micro Centrifuge",
              "alternateName": ["Micro Centrifuge", "High Speed Microcentrifuge", "Microfuge"],
              "description": "A high speed micro centrifuge designed specifically for rapid processing of small volumes (0.2ml to 2.0ml tubes) in molecular biology, genomics, and clinical labs.",
              "image": "https://www.anglobalservices.com/equipment/centrifuge/bench-top-high-speed-micro-centrifuge.webp",
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
                "name": "What is the difference between a standard centrifuge and a micro centrifuge?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A standard centrifuge typically handles larger volumes (15ml, 50ml, or blood bags) at moderate speeds. A micro centrifuge (or microfuge) is engineered specifically for micro-tubes (0.2ml, 0.5ml, 1.5ml, 2.0ml) and operates at much higher speeds to precipitate extremely tiny particles like DNA and RNA."
                }
              },{
                "@type": "Question",
                "name": "What are the primary applications of this high speed microcentrifuge?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It is essential for life science research, molecular biology, and diagnostics. Key applications include DNA/RNA extraction, protein purification, PCR sample preparation, and separating cellular organelles."
                }
              },{
                "@type": "Question",
                "name": "Is it noisy at maximum speed?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Our micro centrifuges feature aerodynamic rotors and brushless motor technology that keep noise levels below 58 dB, ensuring a quiet working environment even when running at 15,000+ RPM."
                }
              },{
                "@type": "Question",
                "name": "Does it have a quick spin function?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our models include a dedicated 'Short Spin' or pulse button, allowing operators to rapidly spin down droplets from the sides of micro-tubes in just a few seconds before conducting PCR or assays."
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
          alt="Bench Top High Speed Micro Centrifuge Laboratory Equipment"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a3d62]/40 flex items-center justify-center text-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] uppercase">
              BENCH TOP HIGH SPEED MICRO CENTRIFUGE
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
                  src="/equipment/centrifuge/bench-top-high-speed-micro-centrifuge.webp"
                  alt="Bench Top High Speed Micro Centrifuge Equipment"
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
                  The <strong className="text-[#0075B6]">Bench Top High Speed Micro Centrifuge</strong> (often referred to simply as a <strong className="font-semibold text-gray-900">micro centrifuge</strong> or microfuge) is a cornerstone piece of equipment for any modern life sciences or molecular biology laboratory.
                </p>
                <p>
                  Specifically engineered to accommodate very small sample volumes (typically 0.2ml to 2.0ml micro-centrifuge tubes), this machine rapidly accelerates to extreme rotational speeds. This generates the massive gravitational force necessary to pellet microscopic biological matter—such as nucleic acids (DNA/RNA) and proteins—safely and efficiently.
                </p>
                <div className="bg-blue-50/80 border-l-4 border-[#0075B6] p-5 rounded-r-lg mt-6 shadow-sm">
                  <h3 className="text-[#0a192f] font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="text-xl">⚙️</span> Complete Setup by AN Global Services
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    Working with micro-volumes requires exact precision. We deliver, install, and calibrate your high-speed microcentrifuge, ensuring the microprocessor controls and digital displays are perfectly accurate, and we provide staff training on quick-spin and protocol programming.
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
              <h2 className="text-3xl font-black text-[#0a192f] mb-4">Precision Micro-Volume Processing</h2>
              <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                When dealing with PCR reagents or genetic material, every microliter counts. Our micro centrifuges are designed for flawless execution:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Micro-Tube Accommodations</h3>
                    <p className="text-gray-600 leading-relaxed">The high-strength, low-mass rotor is precisely machined to hold standard 1.5ml and 2.0ml Eppendorf-style tubes, as well as smaller 0.2ml PCR strips using adapters.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">The 'Quick Spin'</h3>
                    <p className="text-gray-600 leading-relaxed">Liquid droplets often cling to the tube walls during pipetting. The instant-pulse function immediately spins these droplets down to the bottom of the tube in seconds to ensure correct assay concentrations.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sustained High G-Force</h3>
                    <p className="text-gray-600 leading-relaxed">For extraction protocols, the brushless motor sustains high velocities, creating intense RCF to drive sub-cellular structures and DNA into a compact pellet.</p>
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
                    <strong className="block text-lg text-gray-900">Genomics & DNA Labs</strong>
                    <span className="text-gray-600">The absolute standard for ethanol precipitation and isolating DNA and RNA strands.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Virology & Immunology</strong>
                    <span className="text-gray-600">Used for clarifying samples and concentrating viral particles in microscopic volumes.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Biochemistry Departments</strong>
                    <span className="text-gray-600">Essential for enzyme reactions, protein purification, and pelleting bacteria from small broth cultures.</span>
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
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Engineered for extreme RPM, absolute stability, and digital precision in modern research facilities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                  01
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">High-Torque Performance</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Brushless AC Motor:</strong> Maintenance-free motor delivers extreme RPM without producing carbon dust.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Rapid Acceleration:</strong> Reaches maximum speed and decelerates in seconds, streamlining multi-step protocols.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Aerodynamic Rotor:</strong> Designed to minimize air friction, keeping noise levels low and preventing sample heating.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Intelligent Control</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Microprocessor Dashboard:</strong> Digital interface allows exact input of RPM, Time, and RCF (g-force).</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Memory Programs:</strong> Save multiple custom profiles for standard lab protocols like DNA extraction.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>RPM/RCF Toggle:</strong> Instantly switch the display to view actual gravitational force being applied.</li>
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
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Motorized Lid Lock:</strong> Dual electronic locking prevents the lid from opening while spinning at high speeds.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Imbalance Cut-Off:</strong> Highly sensitive gyroscopic sensors instantly shut down power if the rotor is misaligned.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Bio-Containment Lids:</strong> Clear rotor lids available to prevent aerosol escape in case of tube leakage.</li>
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
                    <div className="text-white font-semibold">15,000 - 18,000+ RPM</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Tube Capacity</div>
                    <div className="text-white font-semibold">0.2 ml to 2.0 ml (Micro)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Motor Type</div>
                    <div className="text-white font-semibold">Brushless AC Drive</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Display Interface</div>
                    <div className="text-white font-semibold">Digital LED/LCD</div>
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
              Precision equipment requires regular care to prevent cross-contamination and ensure long-term functionality. AN Global Services ensures you are prepared:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-[#0075B6] pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Routine Inspections</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Wipe out the inner chamber daily to prevent the buildup of salt buffers or spilled reagents.</li>
                <li>Check the micro-rotor wells for any cracked tube fragments before loading.</li>
                <li>Ensure the bio-containment lid seals are intact and uncracked.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Safety & Alignment Checks</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Balance Test:</strong> Routinely check that tubes are loaded symmetrically (across from each other with equal volume).</li>
                <li><strong>Interlock Check:</strong> Verify the lid correctly latches and refuses to open while the rotor is spinning.</li>
                <li><strong>Vibration Check:</strong> Ensure the rubber feet are stable on the bench to prevent walking.</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Annual Servicing</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Professional rpm/tachometer calibration to ensure the displayed speed matches the actual rotor speed.</li>
                <li>Inspection of the motor spindle for straightness and wear.</li>
                <li>Testing the emergency stop and imbalance sensor sensitivity.</li>
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
            <p className="text-gray-500 text-lg">Learn more about our high speed micro centrifuges.</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What is the difference between a standard centrifuge and a micro centrifuge?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                A standard centrifuge typically handles larger volumes (15ml, 50ml, or blood bags) at moderate speeds. A micro centrifuge (or microfuge) is engineered specifically for micro-tubes (0.2ml, 0.5ml, 1.5ml, 2.0ml) and operates at much higher speeds to precipitate extremely tiny particles like DNA and RNA.
              </div>
            </details>
            
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What are the primary applications of this high speed microcentrifuge?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                It is essential for life science research, molecular biology, and diagnostics. Key applications include DNA/RNA extraction, protein purification, PCR sample preparation, and separating cellular organelles.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Is it noisy at maximum speed?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                No. Our micro centrifuges feature aerodynamic rotors and brushless motor technology that keep noise levels below 58 dB, ensuring a quiet working environment even when running at 15,000+ RPM.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Does it have a quick spin function?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Yes, our models include a dedicated 'Short Spin' or pulse button, allowing operators to rapidly spin down droplets from the sides of micro-tubes in just a few seconds before conducting PCR or assays.
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
