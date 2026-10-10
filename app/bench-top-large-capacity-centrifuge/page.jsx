import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Bench Top Large Capacity Centrifuge | High Volume Lab Centrifuge",
  description:
    "Buy a premium Bench Top Large Capacity Centrifuge. Ideal for blood banks, hospitals, and high-volume clinical labs. Built by AN Global Services for maximum reliability.",
  keywords: [
    "Bench Top Large Capacity Centrifuge",
    "Large Capacity Centrifuge",
    "High Volume Centrifuge",
    "Bench Top Centrifuge",
    "Clinical Centrifuge",
    "Blood Bank Centrifuge",
    "Tabletop Large Centrifuge",
    "AN Global Services laboratory equipment",
  ],
  alternates: {
    canonical: "https://www.anglobalservices.com/bench-top-large-capacity-centrifuge",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BenchTopLargeCapacityCentrifugePage() {
  return (
    <main className="w-full bg-gray-50 min-h-screen">
      {/* Schema Markup */}
      <Script id="large-capacity-centrifuge-schema" type="application/ld+json" strategy="afterInteractive">
        {`
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              "name": "Bench Top Large Capacity Centrifuge",
              "alternateName": ["Large Capacity Centrifuge", "High Volume Centrifuge", "Blood Bank Centrifuge"],
              "description": "A heavy-duty, large capacity bench top centrifuge engineered for high-throughput laboratories, hospitals, and blood banks requiring simultaneous processing of large sample volumes.",
              "image": "https://www.anglobalservices.com/equipment/centrifuge/bench-top-large-capacity-centrifuge.webp",
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
                "name": "What makes this a 'large capacity' centrifuge?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Unlike standard centrifuges that hold a few 15ml tubes, a large capacity centrifuge is designed with heavy-duty rotors that can hold massive volumes—such as 4 x 250ml bottles, 4 x 500ml bottles, or dozens of standard blood tubes simultaneously in swing-out bucket rotors."
                }
              },{
                "@type": "Question",
                "name": "Is it suitable for a blood bank?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. It is highly favored by hospitals and blood banks for component separation. With specialized rotor inserts, it can rapidly process multiple blood bags or hundreds of vacutainers in a single automated spin cycle."
                }
              },{
                "@type": "Question",
                "name": "How does it handle the weight and vibration?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It utilizes an advanced induction motor and heavy steel housing. It also features automatic electronic imbalance detection that continuously monitors the rotor; if the samples are improperly balanced, the machine safely aborts the run."
                }
              },{
                "@type": "Question",
                "name": "Can it fit on a standard laboratory bench?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, it is specifically designed as a 'bench top' unit. Despite its massive internal capacity, its reinforced chassis is engineered to sit securely on heavy-duty laboratory casework without requiring a standalone floor model setup."
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
          alt="Bench Top Large Capacity Centrifuge Laboratory Equipment"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a3d62]/40 flex items-center justify-center text-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] uppercase">
              BENCH TOP LARGE CAPACITY CENTRIFUGE
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
                  src="/equipment/centrifuge/bench-top-large-capacity-centrifuge.webp"
                  alt="Bench Top Large Capacity Centrifuge Equipment"
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
                  The <strong className="text-[#0075B6]">Bench Top Large Capacity Centrifuge</strong> (frequently referred to as a <strong className="font-semibold text-gray-900">high volume centrifuge</strong>) is the absolute powerhouse of the modern laboratory. It is built to maximize throughput without sacrificing valuable floor space.
                </p>
                <p>
                  Engineered for high-volume clinical diagnostics, hospital blood banks, and large-scale industrial research, this machine allows operators to process massive quantities of samples—ranging from hundreds of blood tubes to multiple liters of chemical solutions—in a single, automated spin cycle.
                </p>
                <div className="bg-blue-50/80 border-l-4 border-[#0075B6] p-5 rounded-r-lg mt-6 shadow-sm">
                  <h3 className="text-[#0a192f] font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="text-xl">⚙️</span> Complete Setup by AN Global Services
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    Installing heavy-duty equipment requires expertise. We handle the heavy lifting, ensuring the machine is perfectly leveled on your benchtop, the induction motor is calibrated, and your staff is trained on swapping multi-carrier swing-out rotors safely.
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
              <h2 className="text-3xl font-black text-[#0a192f] mb-4">High-Throughput Processing</h2>
              <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                When you need to process hundreds of samples per shift, efficiency is everything. Our large capacity centrifuges are built for massive scale:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Massive Load Capacity</h3>
                    <p className="text-gray-600 leading-relaxed">Depending on the rotor configuration, process up to 4 x 500ml bottles, multiple blood bags, or up to 100+ standard vacutainer tubes simultaneously.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-Carrier Versatility</h3>
                    <p className="text-gray-600 leading-relaxed">Utilize swing-out rotors with interchangeable buckets and adapters. Switch from spinning large culture flasks to deep-well microplates in minutes.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Heavy-Duty Stability</h3>
                    <p className="text-gray-600 leading-relaxed">Spinning heavy liquid volumes generates immense kinetic energy. The reinforced steel chassis and advanced gyroscopic sensors ensure vibration-free, perfectly balanced runs.</p>
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
                    <strong className="block text-lg text-gray-900">Hospital Central Labs</strong>
                    <span className="text-gray-600">Essential for processing massive batches of morning rounds' blood and urine samples rapidly.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Blood Banks & Donation Centers</strong>
                    <span className="text-gray-600">Used with specialized cups to separate whole blood into red cells, plasma, and buffy coats.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Bioprocessing Facilities</strong>
                    <span className="text-gray-600">Perfect for harvesting cells from large volume fermentation broths and industrial chemical separations.</span>
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
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Industrial-grade components combined with precision microprocessor control.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                  01
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Power & Performance</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Induction Drive Motor:</strong> High-torque, maintenance-free brushless motor designed to spin heavy loads for years.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Customizable Profiles:</strong> Save up to 10-99 programs to ensure consistency across different lab technicians.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Braking Rates:</strong> Adjustable acceleration and deceleration curves (0-9 profiles) to prevent delicate sample resuspension.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Advanced Safety Systems</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Electronic Imbalance Sensor:</strong> Instantly detects weight variations in the rotor and halts the machine to prevent damage.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Steel Armor Housing:</strong> Features a heavy steel casing and inner armor ring for ultimate operator protection.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Dual Lid Interlock:</strong> Mechanical and electronic locks guarantee the lid stays sealed until the rotor comes to a complete halt.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Rotor Versatility</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Automatic Rotor Recognition:</strong> The microprocessor detects which rotor is installed and limits the max speed accordingly.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Swing-Out Options:</strong> Compatible with massive 4x250ml or 4x500ml swing-out configurations.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Fixed Angle Options:</strong> High-speed fixed angle rotors available for pelleting large volumes rapidly.</li>
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
                    <div className="text-white font-semibold">5,000 - 20,000 RPM (Rotor Dependent)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Max Capacity</div>
                    <div className="text-white font-semibold">Up to 4 x 500 ml</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Motor Type</div>
                    <div className="text-white font-semibold">High-Torque Induction</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Display Interface</div>
                    <div className="text-white font-semibold">Advanced Digital LCD</div>
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
              When dealing with heavy loads and immense kinetic forces, strict adherence to maintenance is non-negotiable. AN Global Services ensures your equipment remains safe and accurate:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-[#0075B6] pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Heavy Rotor Care</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Remove and clean the heavy swing-out buckets regularly, inspecting for microscopic stress fractures.</li>
                <li>Lightly lubricate the pivot pins (trunnions) on swing-out rotors to ensure the buckets flare out perfectly horizontal during the spin.</li>
                <li>Clean out any glass shards or spilled liquids immediately to prevent imbalance and corrosion.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Strict Load Balancing</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Weight Scale Requirement:</strong> For large capacities, do not rely on visual fluid leveling. Always use a precision laboratory scale to balance opposing buckets to the gram.</li>
                <li><strong>Symmetry:</strong> Always ensure adapters and buckets placed opposite each other are identical in weight and type.</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Annual Servicing</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Professional inspection of the heavy-duty motor mounts and shock absorbers for wear and tear.</li>
                <li>Tachometer calibration to verify high-speed accuracy.</li>
                <li>Testing the emergency braking system and auto-imbalance cut-off triggers.</li>
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
            <p className="text-gray-500 text-lg">Learn more about our large capacity centrifuges.</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What makes this a "large capacity" centrifuge?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Unlike standard centrifuges that hold a few 15ml tubes, a large capacity centrifuge is designed with heavy-duty rotors that can hold massive volumes—such as 4 x 250ml bottles, 4 x 500ml bottles, or dozens of standard blood tubes simultaneously in swing-out bucket rotors.
              </div>
            </details>
            
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Is it suitable for a blood bank?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Yes. It is highly favored by hospitals and blood banks for component separation. With specialized rotor inserts, it can rapidly process multiple blood bags or hundreds of vacutainers in a single automated spin cycle.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                How does it handle the weight and vibration?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                It utilizes an advanced induction motor and heavy steel housing. It also features automatic electronic imbalance detection that continuously monitors the rotor; if the samples are improperly balanced, the machine safely aborts the run.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Can it fit on a standard laboratory bench?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Yes, it is specifically designed as a "bench top" unit. Despite its massive internal capacity, its reinforced chassis is engineered to sit securely on heavy-duty laboratory casework without requiring a standalone floor model setup.
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
