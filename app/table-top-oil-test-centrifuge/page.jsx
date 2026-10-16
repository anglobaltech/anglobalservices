import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import CentrifugeBreadcrumbs from "@/components/CentrifugeBreadcrumbs";

export const metadata = {
  title: "Table Top Oil Test Centrifuge | Petroleum Testing Centrifuge Machine",
  description:
    "Buy premium table top oil test centrifuge machines for petroleum and oil testing laboratories. Find the best oil testing centrifuge setups by AN Global Services.",
  keywords: [
    "Table Top Oil Test Centrifuge",
    "Oil Test Centrifuge",
    "Table Top Centrifuge",
    "Oil Testing Machine",
    "Petroleum Testing Centrifuge",
    "Lab Centrifuge Machine",
    "Petroleum Centrifuge",
    "Oil Centrifuge",
    "Benchtop Centrifuge",
    "AN Global Services laboratory equipment",
  ],
  alternates: {
    canonical: "https://www.anglobalservices.com/table-top-oil-test-centrifuge",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TableTopOilTestCentrifugePage() {
  return (
    <main className="w-full bg-gray-50 min-h-screen">
      {/* Schema Markup */}
      <Script id="table-top-oil-centrifuge-schema" type="application/ld+json" strategy="afterInteractive">
        {`
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              "name": "Table Top Oil Test Centrifuge",
              "alternateName": "Oil Testing Machine",
              "description": "Premium Table Top Oil Test Centrifuge designed for precise petroleum and oil testing in laboratories. Features heated chambers and specialized oil testing rotors.",
              "image": "https://www.anglobalservices.com/equipment/centrifuge/table-top-oil-test-centrifuge.webp",
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
                "name": "What is an oil test centrifuge used for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "An oil test centrifuge is used to determine the water and sediment content in crude oil and fuel oil. By spinning the samples at high speeds, usually with heat applied, it separates the heavier water and sediment particles from the lighter oil."
                }
              },{
                "@type": "Question",
                "name": "Why does a petroleum testing centrifuge have a heated chamber?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Many crude and fuel oils are highly viscous at room temperature. A heated chamber warms the sample (typically up to 60°C or higher), reducing its viscosity and allowing the water and sediment to separate accurately during centrifugation."
                }
              },{
                "@type": "Question",
                "name": "What ASTM standards are compatible with this oil test centrifuge?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "This oil test centrifuge is specifically designed to meet critical industry standards like ASTM D96, D91, D893, and D2273. The heated chamber and precise speed control ensure that basic sediment and water (BS&W) testing is conducted with absolute compliance and accuracy."
                }
              }]
            }
          ]
        }
        `}
      </Script>

      {/* Hero Banner Section */}
      <section className="relative w-full bg-gradient-to-r from-[#001c3d] via-[#002f63] to-[#004e8c] text-white py-14 md:py-20 overflow-hidden shadow-md">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Breadcrumbs with interactive dropdowns */}
          <CentrifugeBreadcrumbs
            category="Industrial Centrifuge"
            currentTitle="Table Top Oil Test Centrifuge"
            currentSlug="table-top-oil-test-centrifuge"
          />

          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-semibold tracking-wide uppercase text-blue-200 mb-4 shadow-sm">
              <Sparkles size={14} className="text-yellow-400" />
              Petroleum & Oil Testing Series
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase drop-shadow-sm text-center">
              Table Top Oil Test Centrifuge
            </h1>

            <p className="mt-3 text-base sm:text-lg text-blue-100/90 font-normal leading-relaxed max-w-3xl text-center mx-auto">
              Specialized benchtop heated centrifuge engineered for crude oil, petroleum, and fuel testing. Commonly sought as <strong className="font-semibold text-white">Oil Testing Centrifuge</strong>, <strong className="font-semibold text-white">Petroleum Centrifuge Machine</strong>, or <strong className="font-semibold text-white">ASTM Oil Test Centrifuge</strong>.
            </p>

            <div className="mt-6 flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm text-blue-100">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md border border-white/10">
                <CheckCircle2 size={15} className="text-emerald-400" /> Up to 3,000 RPM / ASTM Standards
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md border border-white/10">
                <CheckCircle2 size={15} className="text-emerald-400" /> Ambient to +80°C Heated Chamber
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md border border-white/10">
                <CheckCircle2 size={15} className="text-emerald-400" /> 4 x 100ml ASTM Glass Tubes
              </span>
            </div>
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
                  src="/equipment/centrifuge/table-top-oil-test-centrifuge.webp"
                  alt="Table Top Oil Test Centrifuge Equipment"
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
                  The <strong className="text-[#0075B6]">Table Top Oil Test Centrifuge</strong> (commonly referred to as an oil testing machine or petroleum testing centrifuge) is a specialized laboratory instrument designed strictly for the petroleum and fuel industry. 
                </p>
                <p>
                  Unlike standard bio-centrifuges, this advanced <strong className="font-semibold text-gray-900">oil centrifuge machine</strong> is built to determine the water and sediment content in crude oils according to ASTM methods. It features a uniquely heated chamber to lower the viscosity of thick oils, allowing accurate and rapid separation of heavy impurities.
                </p>
                <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 my-6">
                  <div className="p-2 rounded-xl bg-[#0075B6] text-white shrink-0 mt-0.5">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0a192f] text-sm sm:text-base">
                      Complete Setup by AN Global Services
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-normal">
                      Petroleum testing requires rigorous calibration to meet industry standards. Our team provides <strong className="text-[#0a192f]">comprehensive end-to-end solutions</strong>. We install the table top centrifuge, calibrate the heating systems, and provide operational safety training for handling combustible samples.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact-us"
                  className="bg-[#002B7F] hover:bg-[#001f5c] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2 text-center"
                >
                  Request a Quote & Setup
                  <ArrowRight size={16} />
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
              <h2 className="text-3xl font-black text-[#0a192f] mb-4">Petroleum Centrifugation Process</h2>
              <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Testing oil requires specialized handling due to its viscosity. Here is how our equipment perfectly isolates impurities:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sample Heating & Preparation</h3>
                    <p className="text-gray-600 leading-relaxed">Crude oil or fuel samples are loaded into specialized pear-shaped or cone-shaped glass tubes. The centrifuge&apos;s built-in heating mechanism warms the chamber, severely reducing the oil&apos;s viscosity.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Controlled Rotation</h3>
                    <p className="text-gray-600 leading-relaxed">The programmed microprocessor accelerates the swing-out rotor. The centrifugal force, combined with the heat, breaks the emulsions binding the oil and water together.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Impurity Sedimentation</h3>
                    <p className="text-gray-600 leading-relaxed">Heavier water and solid sediments are forced to the graduated bottom tip of the glass tubes, allowing lab technicians to easily read the exact percentage of impurities in the sample.</p>
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
                    <strong className="block text-lg text-gray-900">Petroleum Refineries</strong>
                    <span className="text-gray-600">Essential for determining the baseline quality and purity of crude oil batches before the refining process begins.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Oil & Gas Exploration Sites</strong>
                    <span className="text-gray-600">Used directly at extraction sites to test the water cut of extracted oil efficiently.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Lubricant Manufacturing Labs</strong>
                    <span className="text-gray-600">Helps in verifying the absence of moisture and particulate matter in high-grade synthetic lubricants.</span>
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
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Robustly engineered for the harsh requirements of petroleum testing environments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                  01
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Advanced Heating System</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Internal Heater:</strong> Built-in heating elements surround the chamber to keep high-viscosity oils fluid.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Thermostatic Control:</strong> Highly accurate temperature control to meet specific ASTM testing standards.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Heat Insulation:</strong> Specialized insulation to protect sensitive electronics from high chamber temperatures.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Oil-Specific Rotors</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>ASTM Tube Support:</strong> Custom swing-out rotors designed perfectly for 100ml pear-shaped and cone-shaped oil testing tubes.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Cushioned Buckets:</strong> Specialized rubber cushions prevent glass tube breakage during high-speed acceleration.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Anti-Corrosive Coat:</strong> Treated steel rotors that resist corrosive petrochemical spills.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Safety & Programmability</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Explosion-Proof Options:</strong> Available shielding for safe operation around volatile fumes.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Imbalance Sensors:</strong> Auto-shutdown to prevent damage if dense sediment causes weight differences.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Digital Interface:</strong> Microprocessor control for repeatable RPM and temperature profiles.</li>
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
                    <div className="text-white font-semibold">Up to 4,000 RPM (Typical)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Heating Range</div>
                    <div className="text-white font-semibold">Ambient to +80°C</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Tube Capacity</div>
                    <div className="text-white font-semibold">4 x 100ml ASTM Tubes</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Display</div>
                    <div className="text-white font-semibold">Backlit LCD/LED Display</div>
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
              Operating oil-testing equipment requires strict maintenance protocols to prevent corrosive damage and ensure accurate separation results. AN Global Services provides complete guidance on the following operational requirements:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-[#0075B6] pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Routine Inspections</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Check the heavy-duty swing-out rotors for any structural fatigue.</li>
                <li>Ensure the glass ASTM tubes and rubber cushions are fully intact before spinning.</li>
                <li>Wipe down the heating chamber thoroughly to remove hazardous oil spills.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Safety & Heating Checks</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Interlock Check:</strong> Verify the motorized lid lock is securely engaging to contain fumes.</li>
                <li><strong>Balance Test:</strong> Routinely test the imbalance detection sensors to prevent hazardous vibrations.</li>
                <li><strong>Thermostat Verification:</strong> Ensure the internal heaters reach and hold the set target temperature exactly.</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Annual Servicing</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Official calibration of the microprocessor speed and thermostatic sensors.</li>
                <li>Professional inspection of the brushless induction motor and drive shaft.</li>
                <li>Replacement of any degraded bucket cushions to ensure continued tube safety.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other Centrifuge Models Section */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-xs font-semibold uppercase tracking-wider text-[#0075B6] mb-3">
                Centrifuge Portfolio
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0a192f] tracking-tight">
                Explore Other Centrifuge Models
              </h2>
              <p className="text-sm text-slate-500 mt-1 max-w-xl">
                Browse our complete family of non-refrigerated, refrigerated, and specialized industrial centrifuges.
              </p>
            </div>
            <Link
              href="/equipments-and-machinery"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0075B6] hover:text-[#005a8f] transition-colors whitespace-nowrap self-start sm:self-auto"
            >
              View Full Equipment Catalog <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Link
              href="/table-top-dairy-test-centrifuge"
              className="group p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#0075B6] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-[#0075B6] uppercase tracking-wider block mb-1">Industrial</span>
                <h3 className="font-bold text-slate-900 group-hover:text-[#0075B6] transition-colors text-base mb-2">
                  Table Top Dairy Test Centrifuge
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  Specialized Gerber milk centrifuge with integrated heating for precise fat testing and dairy QA.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#0075B6] mt-4 flex items-center gap-1">
                Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/programmable-high-speed-refrigerated-centrifuge"
              className="group p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#0075B6] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-[#0075B6] uppercase tracking-wider block mb-1">Refrigerated</span>
                <h3 className="font-bold text-slate-900 group-hover:text-[#0075B6] transition-colors text-base mb-2">
                  Programmable High Speed Refrigerated
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  Precision cooling centrifuge up to 20,000 RPM for temperature-sensitive molecular biology.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#0075B6] mt-4 flex items-center gap-1">
                Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/bench-top-high-speed-centrifuge"
              className="group p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#0075B6] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-[#0075B6] uppercase tracking-wider block mb-1">High Speed</span>
                <h3 className="font-bold text-slate-900 group-hover:text-[#0075B6] transition-colors text-base mb-2">
                  Bench Top High Speed Centrifuge
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  Compact non-refrigerated microcentrifuge for rapid pelleting of DNA/RNA and proteins.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#0075B6] mt-4 flex items-center gap-1">
                Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/bench-top-large-capacity-centrifuge"
              className="group p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#0075B6] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-[#0075B6] uppercase tracking-wider block mb-1">High Volume</span>
                <h3 className="font-bold text-slate-900 group-hover:text-[#0075B6] transition-colors text-base mb-2">
                  Bench Top Large Capacity Centrifuge
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  High-volume multi-carrier swing-out rotor centrifuge for hospital and clinical labs.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#0075B6] mt-4 flex items-center gap-1">
                Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 border-t border-gray-200" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-[#0075B6] rounded-full mx-auto mb-6"></div>
            <p className="text-gray-500 text-lg">Learn more about our specialized oil testing centrifuges.</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Why is heating necessary in an oil test centrifuge?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Crude oil is often extremely thick and viscous. By heating the sample inside the centrifuge chamber (often up to 60°C - 80°C), the oil becomes much thinner. This allows the heavier water and sediment particles to break free from the oil emulsion and drop to the bottom of the tube under centrifugal force.
              </div>
            </details>
            
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What kind of tubes does this machine use?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                These centrifuges are designed to accommodate specialized ASTM glass tubes, typically 100ml in volume. They often come in &quot;pear-shaped&quot; or &quot;cone-shaped&quot; (long-tip) designs. The narrow tips are heavily graduated so technicians can accurately read the exact volume of water and sediment separated.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Is it safe to heat petroleum in a spinning machine?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Yes, our oil testing centrifuges are built with severe safety precautions. The electrical components are heavily insulated to prevent spark generation, and the heating elements are precisely thermostatically controlled to prevent overheating volatile samples.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What ASTM standards are compatible with this oil test centrifuge?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                This oil test centrifuge is specifically designed to meet critical industry standards like ASTM D96, D91, D893, and D2273. The heated chamber and precise speed control ensure that basic sediment and water (BS&W) testing is conducted with absolute compliance and accuracy.
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
