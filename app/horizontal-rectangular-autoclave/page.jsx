import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import AutoclaveBreadcrumbs from "@/components/AutoclaveBreadcrumbs";

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

      {/* Hero Banner Section */}
      <section className="relative w-full bg-gradient-to-r from-[#001c3d] via-[#002f63] to-[#004e8c] text-white py-14 md:py-20 overflow-hidden shadow-md">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Breadcrumbs with interactive dropdowns */}
          <AutoclaveBreadcrumbs
            category="Horizontal Autoclaves"
            currentTitle="Horizontal Rectangular Autoclave"
            currentSlug="horizontal-rectangular-autoclave"
          />

          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-semibold tracking-wide uppercase text-blue-200 mb-4 shadow-sm">
              <Sparkles size={14} className="text-yellow-400" />
              Heavy-Duty Hospital &amp; Pharmaceutical Grade
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase drop-shadow-sm text-center">
              Horizontal Rectangular Autoclave
            </h1>

            <p className="mt-3 text-base sm:text-lg text-blue-100/90 font-normal leading-relaxed max-w-3xl text-center mx-auto">
              Maximum usable chamber volume for bulk sterilization of hospital packs, surgical trays, and laboratory media. Commonly sought as <strong className="font-semibold text-white">Rectangular Steam Sterilizer</strong>, <strong className="font-semibold text-white">Bulk Hospital Autoclave</strong>, or <strong className="font-semibold text-white">CSSD Front-Loading Sterilizer</strong>.
            </p>

            <div className="mt-6 flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm text-blue-100">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md border border-white/10">
                <CheckCircle2 size={15} className="text-emerald-400" /> 100% Usable Rectangular Chamber
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md border border-white/10">
                <CheckCircle2 size={15} className="text-emerald-400" /> Heavy-Gauge SS 316L / 304
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md border border-white/10">
                <CheckCircle2 size={15} className="text-emerald-400" /> Microprocessor PLC &amp; Touch HMI
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
              <h2 className="text-2xl md:text-3xl font-black text-[#0a192f] mb-4">
                About the Product
              </h2>
              <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-6"></div>

              <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed font-medium">
                <p>
                  The <strong className="text-[#0075B6]">Horizontal Rectangular Autoclave</strong> is the ultimate solution for large-scale sterilization. Its rectangular inner chamber provides <strong>100% usable space</strong>, making it far more efficient than traditional cylindrical models for loading large trays, surgical instrument boxes, and hospital linens.
                </p>
                <p>
                  Built with heavy-duty <strong>Stainless Steel (SS 316L / 304)</strong>, this front-loading sterilizer is designed for heavy daily use in hospitals, pharmaceutical manufacturing plants, and large research centers.
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
                      Large-scale autoclaves require professional handling. Our expert team at AN Global Services manages the <strong className="text-[#0a192f]">complete installation</strong>, rigorous safety testing, and on-site staff training to ensure your operations run smoothly and safely from day one.
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

      {/* Explore Other Autoclaves Models */}
      <section className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-gray-200">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-[#0075B6]">Sterilization Systems</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-1">Explore Other Autoclave Models</h2>
            </div>
            <Link
              href="/equipments-and-machinery"
              className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0075B6] hover:text-[#005a8e] transition-colors"
            >
              View Full Equipment Catalog <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/horizontal-autoclave-cylindrical"
              className="group p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#0075B6] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[11px] font-bold text-[#0075B6] bg-blue-50 px-2.5 py-0.5 rounded-full mb-2">Horizontal Steam</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0075B6] transition-colors">Horizontal Autoclave Cylindrical</h3>
                <p className="text-xs text-gray-500 mt-1.5 line-clamp-2">Front-loading heavy-gauge sterilizer engineered for hospitals, bulk linen &amp; surgical trays.</p>
              </div>
              <div className="mt-4 flex items-center text-xs font-semibold text-[#0075B6] group-hover:translate-x-1 transition-transform">
                View Specifications <ArrowRight size={14} className="ml-1" />
              </div>
            </Link>

            <Link
              href="/vertical-autoclave-deluxe"
              className="group p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#0075B6] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[11px] font-bold text-[#0075B6] bg-blue-50 px-2.5 py-0.5 rounded-full mb-2">Vertical Radial</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0075B6] transition-colors">Vertical Autoclave Deluxe</h3>
                <p className="text-xs text-gray-500 mt-1.5 line-clamp-2">Radial locking lid and foot pedal lift mechanism for hospital &amp; laboratory sterilization.</p>
              </div>
              <div className="mt-4 flex items-center text-xs font-semibold text-[#0075B6] group-hover:translate-x-1 transition-transform">
                View Specifications <ArrowRight size={14} className="ml-1" />
              </div>
            </Link>

            <Link
              href="/biomedical-waste-pulsation-vacuum-sterilizer"
              className="group p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#0075B6] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[11px] font-bold text-[#0075B6] bg-blue-50 px-2.5 py-0.5 rounded-full mb-2">Pulsation Vacuum</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0075B6] transition-colors">Biomedical Waste Sterilizer</h3>
                <p className="text-xs text-gray-500 mt-1.5 line-clamp-2">Multi-pulse vacuum steam sterilizer engineered for hospital bio-waste decontamination.</p>
              </div>
              <div className="mt-4 flex items-center text-xs font-semibold text-[#0075B6] group-hover:translate-x-1 transition-transform">
                View Specifications <ArrowRight size={14} className="ml-1" />
              </div>
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
