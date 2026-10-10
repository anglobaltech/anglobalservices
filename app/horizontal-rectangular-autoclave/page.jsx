import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Horizontal Rectangular Autoclave | High-Capacity Sterilization",
  description:
    "Top-grade Horizontal Rectangular Autoclaves for hospitals, pharmaceuticals, and large laboratories. Features maximum space utilization, advanced PLC controls, and robust SS 316L construction.",
  keywords: [
    "Horizontal Rectangular Autoclave",
    "Rectangular Autoclave",
    "Horizontal Sterilizer",
    "Hospital Autoclave",
    "Pharmaceutical Sterilizer",
    "Large Capacity Autoclave",
    "Industrial Steam Sterilizer",
    "Front Loading Autoclave",
  ],
  alternates: {
    canonical: "https://www.anglobalservices.com/horizontal-rectangular-autoclave",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HorizontalRectangularAutoclavePage() {
  return (
    <main className="w-full bg-gray-50 min-h-screen">
      {/* Schema Markup */}
      <Script id="horizontal-autoclave-schema" type="application/ld+json" strategy="afterInteractive">
        {`
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              "name": "Horizontal Rectangular Autoclave",
              "description": "High-capacity Horizontal Rectangular Autoclave designed for bulk sterilization in hospitals, pharmaceutical plants, and large research laboratories. Features robust stainless steel construction, advanced PLC controls, and maximum chamber space utilization.",
              "image": "https://www.anglobalservices.com/equipment/autoclave/horizontal-rectangular-autoclave.webp",
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
                "name": "What is a Horizontal Rectangular Autoclave used for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It is used for the bulk sterilization of surgical instruments, hospital linens, pharmaceutical products, and laboratory glassware. Its rectangular shape allows for maximum space utilization compared to cylindrical models."
                }
              },{
                "@type": "Question",
                "name": "What are the standard operating temperatures?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "These sterilizers typically operate between 121°C (at 15 PSI) and 134°C (at 30 PSI), ensuring complete destruction of all microbial life."
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
          alt="Horizontal Rectangular Autoclaves Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a3d62]/40 flex items-center justify-center text-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-5xl font-extrabold tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] uppercase">
              Horizontal Rectangular Autoclave
            </h1>
          </div>
        </div>
      </section>

      {/* Main Product Card Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12" id="product-overview">
        <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-xl">
          <div className="flex flex-col lg:flex-row h-full">

            {/* Image Side */}
            <div className="lg:w-[45%] relative flex items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-white border-b lg:border-b-0 lg:border-r border-gray-100 min-h-[400px]">
              <div className="absolute inset-0 opacity-10 mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0075B6 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
              <div className="relative w-full h-full max-w-[500px] aspect-[4/5]">
                <Image
                  src="/equipment/autoclave/horizontal-rectangular-autoclave.webp"
                  alt="Industrial Horizontal Rectangular Autoclave"
                  fill
                  className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-xl"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-[55%] p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-black text-[#0a192f] mb-4">
                Bulk Sterilization Made Easy
              </h2>
              <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-6"></div>

              <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed font-medium">
                <p>
                  The <strong className="text-[#0075B6]">Horizontal Rectangular Autoclave</strong> is the ultimate solution for large-scale sterilization. Its rectangular inner chamber provides <strong>100% usable space</strong>, making it far more efficient than traditional cylindrical models for loading large trays, surgical instrument boxes, and hospital linens.
                </p>
                <p>
                  Built with heavy-duty <strong>Stainless Steel (SS 316L / 304)</strong>, this front-loading sterilizer is designed for heavy daily use in hospitals, pharmaceutical manufacturing plants, and large research centers.
                </p>
                <div className="bg-blue-50/80 border-l-4 border-[#0075B6] p-5 rounded-r-lg mt-6 shadow-sm">
                  <h3 className="text-[#0a192f] font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="text-xl">🛠️</span> Complete Installation & Training
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    Large-scale autoclaves require professional handling. Our expert team at AN Global Services manages the <strong className="text-[#0a192f]">complete installation</strong>, rigorous safety testing, and on-site staff training to ensure your operations run smoothly and safely from day one.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact-us"
                  className="bg-[#0075B6] hover:bg-[#005a8f] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center flex-1 sm:flex-none text-lg"
                >
                  Request a Quote & Setup
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Rectangular Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#0a192f] mb-4">Why Choose a Rectangular Autoclave?</h2>
            <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              When dealing with high volumes, efficiency and space matter. Here is why major hospitals and industries prefer this design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-blue-50/50 rounded-2xl border border-blue-100 hover:bg-blue-50 transition-colors">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-[#0a192f] mb-3">Maximum Space Utilization</h3>
              <p className="text-gray-600 leading-relaxed">Unlike round chambers that waste corner space, the rectangular shape allows you to stack standard medical trays and boxes corner-to-corner, drastically increasing batch capacity.</p>
            </div>

            <div className="p-8 bg-blue-50/50 rounded-2xl border border-blue-100 hover:bg-blue-50 transition-colors">
              <div className="text-4xl mb-4">🚪</div>
              <h3 className="text-xl font-bold text-[#0a192f] mb-3">Easy Front Loading</h3>
              <p className="text-gray-600 leading-relaxed">Designed like a highly secure vault, the front-loading radial lock or sliding door makes it incredibly easy for staff to load and unload heavy trolleys without bending or lifting.</p>
            </div>

            <div className="p-8 bg-blue-50/50 rounded-2xl border border-blue-100 hover:bg-blue-50 transition-colors">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-[#0a192f] mb-3">Smart Automated Controls</h3>
              <p className="text-gray-600 leading-relaxed">Equipped with advanced PLC/HMI touch screens. Set your temperature, pressure, and time, and the machine handles the entire sterilization and drying cycle automatically.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Specifications Cards */}
      <section className="bg-gray-100 py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#0a192f] mb-4">Core Features & Specifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Industrial-grade components for unmatched safety and reliability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                  01
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Triple Walled Construction</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Inner Chamber:</strong> High-quality Stainless Steel (SS 316L/304) to resist corrosion.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Steam Jacket:</strong> Surrounds the chamber to pre-heat and ensure uniform temperature.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Outer Insulation:</strong> Glass wool insulation minimizes heat loss and protects operators.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Foolproof Safety Systems</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Pressure Switch:</strong> Automatically cuts off power if pressure exceeds safe limits.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Radial Locking Door:</strong> The door cannot be opened while the chamber is pressurized.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Low Water Cut-off:</strong> Protects heaters from burning out if water levels drop.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Efficient Steam Generation</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>In-Built Boiler:</strong> Powerful electric heaters generate saturated steam quickly.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Vacuum Pump (Optional):</strong> Removes air before the cycle and pulls moisture out for rapid drying afterward.</li>
                </ul>
              </div>
            </div>

            {/* Card 4 - Full Width Specs */}
            <div className="bg-[#0a192f] rounded-2xl p-8 shadow-lg md:col-span-2 lg:col-span-3 mt-4 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white mb-6 border-b border-white/20 pb-4">Standard Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Operating Temperature</div>
                    <div className="text-white font-semibold">121°C to 134°C</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Operating Pressure</div>
                    <div className="text-white font-semibold">1.2 to 2.1 kg/cm² (15-30 PSI)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Chamber Material</div>
                    <div className="text-white font-semibold">SS 316L / SS 304</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Automation</div>
                    <div className="text-white font-semibold">Fully Automatic PLC / Semi-Auto</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black text-[#0a192f] mb-4">Ideal Applications</h2>
            <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-4xl mb-4">🏥</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Hospitals & Clinics</h4>
              <p className="text-gray-600">Daily bulk sterilization of OT instruments, scrubs, linen, and medical waste.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-4xl mb-4">💊</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Pharmaceuticals</h4>
              <p className="text-gray-600">Sterilization of production vessels, lab equipment, and maintaining strict cleanroom standards.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center text-4xl mb-4">🔬</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Research Labs</h4>
              <p className="text-gray-600">Decontamination of large quantities of glassware, bio-hazardous waste, and culture media.</p>
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
            <p className="text-gray-500 text-lg">Everything you need to know about our Horizontal Rectangular Autoclaves.</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What is a Horizontal Rectangular Autoclave used for?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                It is used for the bulk sterilization of surgical instruments, hospital linens, pharmaceutical products, and laboratory glassware. Its rectangular shape allows for maximum space utilization compared to cylindrical models, making it ideal for large-scale operations.
              </div>
            </details>
            
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What are the standard operating temperatures?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                These industrial sterilizers typically operate between 121°C (at 15 PSI) and 134°C (at 30 PSI). This high-pressure saturated steam environment ensures the complete destruction of all microbial life within minutes.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What materials are used in its construction?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Our autoclaves feature a triple-walled construction. The inner chamber and doors are made of premium Stainless Steel (SS 316L or SS 304) for ultimate corrosion resistance, surrounded by a steam jacket and thick glass wool insulation.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Does AN Global Services provide installation?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Yes! We provide complete end-to-end support. Our expert technicians will handle the installation, perform rigorous safety validations, and provide on-site operational training for your staff.
              </div>
            </details>
          </div>
        </div>
      </section>
      
    </main>
  );
}
