import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Bench Top High Speed Centrifuge | High Speed Lab Centrifuge",
  description:
    "Buy premium bench top high speed centrifuge machines for clinical and research laboratories. Find the best high speed centrifuge setups by AN Global Services.",
  keywords: [
    "Bench Top High Speed Centrifuge",
    "High Speed Centrifuge",
    "Bench Top Centrifuge",
    "High Speed Machine",
    "Lab Centrifuge",
    "Table Top High Speed Centrifuge",
    "Microcentrifuge",
    "High Speed Spin",
    "Laboratory Equipment",
    "AN Global Services laboratory equipment",
  ],
  alternates: {
    canonical: "https://www.anglobalservices.com/bench-top-high-speed-centrifuge",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BenchTopHighSpeedCentrifugePage() {
  return (
    <main className="w-full bg-gray-50 min-h-screen">
      {/* Schema Markup */}
      <Script id="bench-top-high-speed-centrifuge-schema" type="application/ld+json" strategy="afterInteractive">
        {`
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              "name": "Bench Top High Speed Centrifuge",
              "alternateName": "High Speed Centrifuge",
              "description": "Premium Bench Top High Speed Centrifuge designed for rapid separation of biological samples, DNA/RNA extraction, and clinical research.",
              "image": "https://www.anglobalservices.com/equipment/centrifuge/top-high-speed-centrifuge.webp",
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
                "name": "What is a bench top high speed centrifuge used for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A bench top high speed centrifuge is used for rapidly separating liquids and particles of varying densities. It is widely used in molecular biology, clinical diagnostics, and biochemistry for extracting DNA, RNA, proteins, and cellular components."
                }
              },{
                "@type": "Question",
                "name": "What makes a centrifuge 'high speed'?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Unlike standard centrifuges that spin around 4,000 RPM, a high speed centrifuge is equipped with a high-torque motor capable of reaching extremely high speeds (often 15,000 to 20,000+ RPM). This generates the immense gravitational force (g-force) needed to precipitate microscopic particles like DNA."
                }
              },{
                "@type": "Question",
                "name": "Can this machine handle different tube sizes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our bench top centrifuges come with interchangeable fixed-angle and swing-out rotors, allowing you to seamlessly switch between standard 1.5/2.0ml micro-tubes, 15ml, and 50ml conical tubes depending on your research needs."
                }
              },{
                "@type": "Question",
                "name": "Is it safe to operate this machine at such high speeds on a standard lab bench?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Our bench top high speed centrifuges are equipped with heavy-duty shock absorbers and advanced vibration dampening technology. As long as the rotor is properly balanced, the machine runs extremely quietly without 'walking' or vibrating across your bench."
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
          alt="Bench Top High Speed Centrifuge Laboratory Equipment"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a3d62]/40 flex items-center justify-center text-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] uppercase">
              BENCH TOP HIGH SPEED CENTRIFUGE
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
                  src="/equipment/centrifuge/top-high-speed-centrifuge.webp"
                  alt="Bench Top High Speed Centrifuge Equipment"
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
                  The <strong className="text-[#0075B6]">Bench Top High Speed Centrifuge</strong> (commonly referred to as a high speed lab centrifuge or microcentrifuge) is a powerful, compact machine designed for molecular biology, genomics, and advanced clinical laboratories.
                </p>
                <p>
                  Built to deliver immense relative centrifugal force (RCF) while minimizing its footprint, this <strong className="font-semibold text-gray-900">high speed machine</strong> ensures rapid, distinct separation of subcellular organelles, DNA, RNA, and protein precipitations. Despite its immense speed, the aerodynamic rotor design ensures incredibly quiet operation and minimal heat generation.
                </p>
                <div className="bg-blue-50/80 border-l-4 border-[#0075B6] p-5 rounded-r-lg mt-6 shadow-sm">
                  <h3 className="text-[#0a192f] font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="text-xl">⚙️</span> Complete Setup by AN Global Services
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    Operating high-speed rotational equipment demands precise benchtop balancing and rotor configuration. Our team provides <strong className="text-[#0a192f]">comprehensive end-to-end solutions</strong>. We install the unit, verify rotor speed limits, and train your staff on safe balancing procedures to prevent equipment failure.
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
              <h2 className="text-3xl font-black text-[#0a192f] mb-4">High-Speed Separation</h2>
              <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                When extracting microscopic cellular components, massive G-forces are required. Here is how our equipment delivers rapid precipitation:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Micro-Volume Loading</h3>
                    <p className="text-gray-600 leading-relaxed">Biological samples are loaded into specialized snap-cap or screw-cap micro-tubes. These are placed into fixed-angle aerodynamic rotors designed to withstand massive stress.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Extreme Acceleration</h3>
                    <p className="text-gray-600 leading-relaxed">The high-torque brushless induction motor rapidly accelerates the rotor to speeds exceeding 15,000 RPM in seconds, drastically cutting down processing time.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Rapid Pellet Formation</h3>
                    <p className="text-gray-600 leading-relaxed">The extreme G-force forces dense cellular materials, nucleic acids, or proteins to form a tight, distinct pellet at the bottom of the tube, leaving the pure supernatant fluid above.</p>
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
                    <strong className="block text-lg text-gray-900">Molecular Biology Labs</strong>
                    <span className="text-gray-600">Essential for DNA and RNA extraction, plasmid purification, and preparing PCR samples.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Clinical Pathology & Diagnostics</strong>
                    <span className="text-gray-600">Used for rapid spin-downs of patient samples, separating serum, and isolating microscopic infectious agents.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">University Research Centers</strong>
                    <span className="text-gray-600">A foundational tool in biochemistry for protein precipitation and cellular fractioning.</span>
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
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Motorized Lid Lock:</strong> Dual electronic locking prevents the lid from opening while spinning at 15,000+ RPM.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Imbalance Cut-Off:</strong> Highly sensitive gyroscopic sensors instantly shut down power if the rotor is misaligned.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Armored Steel Chamber:</strong> Designed to contain internal forces in the rare event of glass breakage.</li>
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
                    <div className="text-white font-semibold">15,000 - 20,000+ RPM</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Max RCF</div>
                    <div className="text-white font-semibold">Up to ~21,000 x g</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Rotor Options</div>
                    <div className="text-white font-semibold">Fixed Angle (Micro to 50ml)</div>
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
              Operating high speed centrifuges requires strict adherence to maintenance protocols to ensure the extreme kinetic energy remains safely contained. AN Global Services provides complete guidance:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-[#0075B6] pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Routine Inspections</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Inspect fixed-angle rotors for any micro-cracks or metal fatigue before high-G spins.</li>
                <li>Ensure the armored steel chamber is completely clean and dry to prevent aerosol generation.</li>
                <li>Wipe down all rotor threads and lids to ensure airtight sealing.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Safety & Alignment Checks</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Interlock Check:</strong> Verify the motorized lid lock securely fastens before the motor engages.</li>
                <li><strong>Balance Test:</strong> Routinely test the imbalance detection sensors to prevent catastrophic vibration.</li>
                <li><strong>Rotor Seating:</strong> Confirm that the central rotor nut is tightened to the manufacturer's specification.</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Annual Servicing</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Official calibration of the microprocessor speed sensors using external tachometers.</li>
                <li>Professional inspection and re-greasing of the brushless induction motor drive shaft.</li>
                <li>Replacement of any degraded rotor O-rings to maintain biocontainment safety.</li>
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
            <p className="text-gray-500 text-lg">Learn more about our specialized high speed lab centrifuges.</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What is a bench top high speed centrifuge used for?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                A bench top high speed centrifuge is used for rapidly separating liquids and particles of varying densities. It is widely used in molecular biology, clinical diagnostics, and biochemistry for extracting DNA, RNA, proteins, and cellular components.
              </div>
            </details>
            
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What makes a centrifuge 'high speed'?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Unlike standard centrifuges that spin around 4,000 RPM, a high speed centrifuge is equipped with a high-torque motor capable of reaching extremely high speeds (often 15,000 to 20,000+ RPM). This generates the immense gravitational force (g-force) needed to precipitate microscopic particles like DNA.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Can this machine handle different tube sizes?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Yes, our bench top centrifuges come with interchangeable fixed-angle and swing-out rotors, allowing you to seamlessly switch between standard 1.5/2.0ml micro-tubes, 15ml, and 50ml conical tubes depending on your research needs.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Is it safe to operate this machine at such high speeds on a standard lab bench?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Yes. Our bench top high speed centrifuges are equipped with heavy-duty shock absorbers and advanced vibration dampening technology. As long as the rotor is properly balanced, the machine runs extremely quietly without "walking" or vibrating across your bench.
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
