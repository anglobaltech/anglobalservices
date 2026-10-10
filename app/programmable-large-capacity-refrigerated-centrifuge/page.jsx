import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Large Capacity Refrigerated Centrifuge | Blood Bank & Lab Centrifuge Machine",
  description:
    "Buy premium programmable large capacity refrigerated centrifuge machines for high-volume lab separations, blood banks, and clinical diagnostics. Get the best cooling centrifuge setup by AN Global Services.",
  keywords: [
    "Programmable Large Capacity Refrigerated Centrifuge",
    "Large Capacity Centrifuge",
    "Refrigerated Centrifuge",
    "Centrifuge Machine",
    "Blood Bank Centrifuge",
    "Programmable Centrifuge",
    "Cooling Centrifuge",
    "Lab Centrifuge",
    "High Volume Centrifuge",
    "Laboratory Centrifuge Machine",
    "Medical Centrifuge",
    "Floor Standing Refrigerated Centrifuge",
    "AN Global Services laboratory equipment",
  ],
  alternates: {
    canonical: "https://www.anglobalservices.com/programmable-large-capacity-refrigerated-centrifuge",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LargeCapacityRefrigeratedCentrifugePage() {
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
              "name": "Programmable Large Capacity Refrigerated Centrifuge",
              "alternateName": "Large Capacity Centrifuge Machine",
              "description": "Premium Programmable Large Capacity Refrigerated Centrifuge designed for blood banks, clinical diagnostics, and high-volume advanced research. Features high capacity loading and CFC-free precise cooling.",
              "image": "https://www.anglobalservices.com/equipment/centrifuge/programmable-large-capacity-refrigerated-centrifuge.jpg",
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
                "name": "What is a large capacity refrigerated centrifuge used for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A large capacity refrigerated centrifuge is used for processing high volumes of biological samples simultaneously. It is essential in blood banks for separating whole blood into plasma, buffy coat, and red blood cells while maintaining cold temperatures to prevent sample degradation."
                }
              },{
                "@type": "Question",
                "name": "Why is temperature control important in a large capacity centrifuge?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Spinning large volumes generates significant air friction and heat. The built-in cooling system counteracts this heat, keeping temperature-sensitive samples like enzymes, cells, and blood components stable during the centrifugation process."
                }
              },{
                "@type": "Question",
                "name": "What makes a large capacity centrifuge ideal for blood banks?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A large capacity centrifuge is designed to hold multiple large blood bags simultaneously. With specialized swing-out rotors and precise temperature control, it efficiently separates whole blood into plasma, red blood cells, and platelets on an industrial scale without damaging the cells."
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
          alt="Large Capacity Refrigerated Centrifuge Laboratory Equipment"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a3d62]/40 flex items-center justify-center text-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] uppercase">
              PROGRAMMABLE LARGE CAPACITY REFRIGERATED CENTRIFUGE
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
                  src="/equipment/centrifuge/programmable-large-capacity-refrigerated-centrifuge.webp"
                  alt="Programmable Large Capacity Refrigerated Centrifuge Equipment"
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
                  The <strong className="text-[#0075B6]">Programmable Large Capacity Refrigerated Centrifuge</strong> (often searched as a large capacity centrifuge or blood bank centrifuge) is a heavy-duty laboratory machine built to handle massive sample volumes in a single run.
                </p>
                <p>
                  When spinning multiple liters of samples, maintaining a stable temperature is critical. This advanced <strong className="font-semibold text-gray-900">cooling centrifuge machine</strong> is equipped with a high-performance, CFC-free refrigeration unit. It rapidly cools the massive chamber, ensuring that temperature-sensitive biomolecules, blood components, and cell cultures are perfectly protected from friction heat.
                </p>
                <div className="bg-blue-50/80 border-l-4 border-[#0075B6] p-5 rounded-r-lg mt-6 shadow-sm">
                  <h3 className="text-[#0a192f] font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="text-xl">⚙️</span> Complete Setup by AN Global Services
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    Installing a heavy-duty, large capacity centrifuge requires expert leveling and calibration. Our team provides <strong className="text-[#0a192f]">comprehensive end-to-end solutions</strong>. We install the lab centrifuge, precisely balance the heavy rotors, and provide extensive operational safety training for your staff.
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
              <h2 className="text-3xl font-black text-[#0a192f] mb-4">High-Volume Centrifugation</h2>
              <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Operating a large capacity centrifuge is about maximizing efficiency without compromising precision. Here is how it streamlines laboratory workflows:
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Bulk Loading & Balancing</h3>
                    <p className="text-gray-600 leading-relaxed">Large volumes (such as multiple blood bags or multi-liter flasks) are loaded into the heavy-duty swing-out rotors. Careful balancing is crucial at this scale.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Automated Cooling & Spinning</h3>
                    <p className="text-gray-600 leading-relaxed">The programmable microprocessor executes the exact cooling profile and RPM. The robust induction motor provides smooth acceleration for heavy loads while the refrigeration system chills the chamber.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Efficient Batch Extraction</h3>
                    <p className="text-gray-600 leading-relaxed">Once safely decelerated, massive batches of samples are ready for extraction simultaneously, dramatically reducing the time compared to smaller centrifuge machines.</p>
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
                    <strong className="block text-lg text-gray-900">Blood Banks & Transfusion Centers</strong>
                    <span className="text-gray-600">This blood bank centrifuge is vital for separating whole blood into red cells, platelets, and plasma at a massive scale.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Bioprocessing & Pharma</strong>
                    <span className="text-gray-600">Used for harvesting cell cultures and large-scale protein purification where high-volume capacity is mandatory.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Clinical Pathology Labs</strong>
                    <span className="text-gray-600">Enables high-throughput processing of hundreds of diagnostic tubes in a single cooling centrifuge cycle.</span>
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
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Heavy-duty construction paired with smart programmable interfaces for industrial and clinical use.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                  01
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Intelligent Programmability</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Smart Memory:</strong> Save dozens of custom protocols for different separation needs.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Intuitive Panel:</strong> Easy-to-read LED/LCD displays for live RPM, RCF, and temperature tracking.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Soft Brake System:</strong> Multiple acceleration and deceleration profiles to prevent sample re-suspension.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Heavy-Duty Safety</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Imbalance Cut-off:</strong> Highly sensitive weight sensors immediately halt operation if large loads are unbalanced.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Motorized Lid Lock:</strong> Electronic locking prevents opening while the massive rotor is in motion.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Armored Chamber:</strong> Reinforced steel shielding for ultimate operator protection.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Superior Cooling & Drive</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>High-Torque AC Motor:</strong> Brushless, maintenance-free motor designed to easily spin massive weights.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Fast Pre-Cooling:</strong> Rapidly brings the large chamber down to 4°C before loading.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>CFC-Free Gas:</strong> Environmentally friendly refrigerants ensuring stable temperatures.</li>
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
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Max Capacity</div>
                    <div className="text-white font-semibold">Up to 6 Liters (Rotor Dep.)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Temperature Range</div>
                    <div className="text-white font-semibold">-20°C to +40°C</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Motor Type</div>
                    <div className="text-white font-semibold">Brushless AC Induction</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Programmable Memory</div>
                    <div className="text-white font-semibold">Multiple User Protocols</div>
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
              Operating heavy-duty, large capacity rotational equipment requires strict maintenance protocols to ensure absolute safety and peak performance. AN Global Services provides complete guidance on the following operational requirements:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-[#0075B6] pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Routine Inspections</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Check the heavy-duty swing-out rotors and buckets for scratches or signs of metal fatigue.</li>
                <li>Ensure the chamber is free from condensation or spilled biological samples.</li>
                <li>Wipe down the stainless steel chamber using non-corrosive disinfectants.</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Safety & Cooling Checks</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Interlock Check:</strong> Verify the motorized lid lock is securely engaging before every heavy run.</li>
                <li><strong>Balance Test:</strong> Routinely test the imbalance detection sensors to prevent hazardous vibrations.</li>
                <li><strong>Condenser Check:</strong> Regularly clean cooling fins for optimal CFC-free refrigeration.</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Annual Servicing</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Official calibration of the microprocessor speed and temperature sensors.</li>
                <li>Professional inspection of the high-torque induction motor and drive shaft.</li>
                <li>Servicing of the refrigeration compressor unit to maintain 4°C stability under heavy loads.</li>
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
            <p className="text-gray-500 text-lg">Learn more about large capacity lab centrifuge machines.</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What makes a centrifuge "Large Capacity"?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                While standard lab centrifuges spin small microtubes (1.5ml - 50ml), a large capacity centrifuge is designed with a heavy-duty motor and oversized chamber to spin massive loads, often up to 4 to 6 Liters in a single run. This makes them ideal for processing blood bags and bulk bio-cultures.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Why is it called a Blood Bank Centrifuge?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Blood banks are the primary users of these machines. To separate donated whole blood into distinct usable components (red blood cells, plasma, and platelets), they need to spin heavy 500ml blood bags in specially designed swing-out rotors, all while keeping the blood perfectly chilled.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Do I need to balance the load differently than small centrifuges?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Yes. Because of the massive weight involved, balancing is extremely critical. Even a slight imbalance can cause severe vibrations. Our machines feature automatic imbalance detection that instantly cuts off the motor if an unbalanced load is detected, preventing damage.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What makes a large capacity centrifuge ideal for blood banks?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                A large capacity centrifuge is designed to hold multiple large blood bags simultaneously. With specialized swing-out rotors and precise temperature control, it efficiently separates whole blood into plasma, red blood cells, and platelets on an industrial scale without damaging the cells.
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
