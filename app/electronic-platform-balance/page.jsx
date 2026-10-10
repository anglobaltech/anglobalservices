import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Heavy-Duty Electronic Platform Balance | AN Global Services",
  description:
    "Industrial-grade Electronic Platform Balance designed for heavy-duty weighing in warehouses and labs. Features stainless steel pan, high precision load cell, and LED indicator. Setup by AN Global Services.",
  keywords: [
    "Electronic Platform Balance",
    "Industrial Platform Scale",
    "Heavy Duty Weighing Machine",
    "Digital Platform Balance",
    "Warehouse Weighing Scale",
    "Stainless Steel Platform Scale",
    "High Capacity Digital Scale",
    "AN Global Services weighing equipment",
  ],
  alternates: {
    canonical: "https://www.anglobalservices.com/electronic-platform-balance",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ElectronicPlatformBalancePage() {
  return (
    <main className="w-full bg-gray-50 min-h-screen">
      {/* Schema Markup */}
      <Script id="platform-balance-schema" type="application/ld+json" strategy="afterInteractive">
        {`
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              "name": "Electronic Platform Balance",
              "description": "Heavy-duty Electronic Platform Balance engineered for industrial and high-capacity laboratory weighing. Features a rugged stainless steel platform, high-precision strain gauge load cell, and a pole-mounted digital indicator.",
              "image": "https://www.anglobalservices.com/equipment/lab-balances/electronic-platform-balance.webp",
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
                "name": "What is the weight capacity of an electronic platform balance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Electronic platform balances are designed for heavy loads, with capacities typically ranging from 50kg up to 1000kg (1 ton) depending on the specific model and platform size."
                }
              },{
                "@type": "Question",
                "name": "Can the platform balance withstand harsh industrial environments?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our platform balances feature a rugged mild steel frame covered with an easy-to-clean, anti-corrosive stainless steel weighing pan. This makes them highly durable for warehouses, factories, and shipping docks."
                }
              },{
                "@type": "Question",
                "name": "How does the indicator connect to external systems?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The balance is equipped with a standard RS-232 serial interface, allowing it to seamlessly connect to computers, PLCs, and label printers for automated data logging and inventory management."
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
          alt="Heavy-Duty Electronic Platform Balance Equipment"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a3d62]/40 flex items-center justify-center text-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] uppercase">
              ELECTRONIC PLATFORM BALANCE
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
                  src="/equipment/lab-balances/electronic-platform-balance.webp"
                  alt="Industrial Electronic Platform Balance Equipment"
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
                  The <strong className="text-[#0075B6]">Electronic Platform Balance</strong> is a heavy-duty weighing solution designed to bridge the gap between high-capacity industrial lifting and precise laboratory measurements. 
                </p>
                <p>
                  Built with a reinforced steel structure and topped with a high-grade stainless steel pan, this balance utilizes advanced strain gauge load cells to provide highly accurate readings for bulky items, chemicals in drums, or heavy manufactured goods. The adjustable pole-mounted indicator ensures the display is always visible, even when weighing oversized packages.
                </p>
                <div className="bg-blue-50/80 border-l-4 border-[#0075B6] p-5 rounded-r-lg mt-6 shadow-sm">
                  <h3 className="text-[#0a192f] font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="text-xl">⚙️</span> Complete Setup by AN Global Services
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    Accurate high-capacity weighing requires proper floor leveling and sensor calibration. Our team provides <strong className="text-[#0a192f]">comprehensive end-to-end solutions</strong>. We install the platform, calibrate the load cells to standard test weights, and connect the data outputs directly to your inventory management system.
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
                Despite its high capacity, the platform balance uses highly sensitive micro-electronics to deliver precise readings instantly:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Load Placement & Taring</h3>
                    <p className="text-gray-600 leading-relaxed">If weighing goods inside a crate or pallet, the empty container is placed on the platform and 'Tared' to zero. The heavy goods are then loaded onto the wide stainless steel pan.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Strain Gauge Deflection</h3>
                    <p className="text-gray-600 leading-relaxed">The weight pushes down on a robust internal aluminum or steel load cell. Microscopic strain gauges bonded to the load cell deform slightly under the pressure, altering their electrical resistance.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Conversion</h3>
                    <p className="text-gray-600 leading-relaxed">An integrated analog-to-digital (A/D) converter instantly translates this resistance change into a highly accurate digital weight reading displayed on the bright LED/LCD indicator.</p>
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
                    <strong className="block text-lg text-gray-900">Manufacturing & Factories</strong>
                    <span className="text-gray-600">Used on the production floor to weigh raw materials, chemical drums, and finished heavy components.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Logistics & Shipping</strong>
                    <span className="text-gray-600">Essential for determining exact parcel or pallet weights to calculate shipping costs accurately.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Agriculture & Food Processing</strong>
                    <span className="text-gray-600">Utilized to weigh bulk grain sacks, large meat cuts, or liquid containers in wash-down environments.</span>
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
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Engineered for brute strength, high durability, and uncompromising precision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                  01
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Intelligent Display</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Pole-Mounted Indicator:</strong> Elevated display ensures it is never blocked by large boxes or pallets.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Bright LED/LCD:</strong> High-contrast red or green digits for easy reading in dark warehouse environments.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Multiple Functions:</strong> Includes auto-zero tracking, tare, parts counting, and dynamic weighing.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Rugged Construction</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Stainless Steel Pan:</strong> SS304 grade weighing plate prevents rusting and is easy to wash down.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Reinforced Framework:</strong> Heavy-duty mild steel tubular structure to withstand industrial impact.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Overload Protection:</strong> Built-in mechanical stoppers protect the load cell from shock drops up to 150% capacity.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Data & Portability</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>RS-232 Interface:</strong> Direct connection to PCs or label printers for instantaneous inventory logging.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Rechargeable Battery:</strong> Built-in battery provides up to 40 hours of continuous use during power outages.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Adjustable Feet:</strong> Four independent leveling feet ensure perfect balance on uneven warehouse floors.</li>
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
                    <div className="text-white font-semibold">50kg to 1000kg (Customizable)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Readability (Accuracy)</div>
                    <div className="text-white font-semibold">5g to 100g (Depending on Capacity)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Pan Size</div>
                    <div className="text-white font-semibold">400x400mm to 800x800mm</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Power Supply</div>
                    <div className="text-white font-semibold">AC 220V / Built-in 6V Battery</div>
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
              Industrial platform balances take significant daily abuse from heavy loads and forklifts. To maintain pinpoint accuracy and extend the equipment's lifespan, AN Global Services recommends the following protocols:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-[#0075B6] pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Routine Inspections</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Check the leveling bubble weekly to ensure the platform hasn't shifted due to floor vibration.</li>
                <li>Wipe down the stainless steel pan at the end of each shift to prevent chemical corrosion.</li>
                <li>Ensure the indicator cable is not pinched or severely bent.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Usage Best Practices</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Center Loading:</strong> Always place heavy objects in the center of the pan to ensure even force distribution on the load cell.</li>
                <li><strong>Avoid Shock Loads:</strong> Do not drop heavy boxes from a height onto the pan; lower them gently.</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Annual Servicing</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Official dead-weight calibration using certified cast iron test weights.</li>
                <li>Physical inspection of the load cell's silicone seals for moisture ingress.</li>
                <li>Battery load testing and replacement if discharge rates are high.</li>
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
            <p className="text-gray-500 text-lg">Learn more about our industrial platform weighing solutions.</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What is the weight capacity of an electronic platform balance?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Electronic platform balances are designed for heavy industrial loads. Depending on your specific requirements, our models typically range from 50kg capacities for smaller parcels up to 1000kg (1 ton) for large pallets and chemical drums.
              </div>
            </details>
            
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Can the platform balance withstand harsh industrial environments?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Yes. Our platform balances feature a highly robust mild steel tubular frame designed to take impact, covered with a thick, anti-corrosive SS304 stainless steel weighing pan. This makes them perfectly suited for dusty warehouses, factories, and humid shipping docks.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What happens if the power goes out?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Our indicators come equipped with a built-in 6V rechargeable battery backup. This allows the scale to operate continuously for up to 40 hours without mains electricity, ensuring your logistics and shipping operations never halt due to power outages.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                How does the indicator connect to external computer systems?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                The balance is equipped with a standard RS-232 serial interface. This allows it to seamlessly connect to computers, PLCs, and label printers. Weights can be directly exported into Excel or your company's inventory management system without manual data entry.
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
