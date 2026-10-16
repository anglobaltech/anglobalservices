import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import AutoclaveBreadcrumbs from "@/components/AutoclaveBreadcrumbs";

export const metadata = {
  title: "Biomedical Waste Pulsation Vacuum Sterilizer | AN Global Services",
  description:
    "Premium Biomedical Waste Pulsation Vacuum Sterilizers featuring advanced PLC controls, deep steam penetration, and SS304/316L construction. Complete setup and installation by AN Global Services.",
  keywords: [
    "Biomedical Waste Pulsation Vacuum Sterilizer",
    "Biomedical Waste Autoclave",
    "Biomedical Autoclave",
    "Bio Waste Sterilizer",
    "Medical Waste Sterilizer",
    "Pulse Vacuum Autoclave",
    "Vacuum Autoclave",
    "Hospital Waste Autoclave",
    "Hospital Sterilizer Machine",
    "Waste Autoclave",
    "Biomedical Waste Treatment",
    "Pulsation Vacuum Sterilization",
    "Pulse Vacuum Sterilizer",
    "Industrial Autoclave for Hospitals",
    "Infectious Waste Sterilizer",
    "Steam Sterilizer for Medical Waste",
    "Biomedical Waste Machine",
    "Medical Waste Management Equipment",
    "AN Global Services sterilizer setup",
    "Medical Autoclave Installation",
  ],
  alternates: {
    canonical: "https://www.anglobalservices.com/biomedical-waste-pulsation-vacuum-sterilizer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BiomedicalWasteSterilizerPage() {
  return (
    <main className="w-full bg-gray-50 min-h-screen">
      {/* Schema Markup */}
      <Script id="sterilizer-schema" type="application/ld+json" strategy="afterInteractive">
        {`
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              "name": "Biomedical Waste Pulsation Vacuum Sterilizer",
              "description": "High-grade Biomedical Waste Pulsation Vacuum Sterilizer for hospitals, laboratories, and waste management facilities. Features deep steam penetration and PLC automatic control.",
              "image": "https://www.anglobalservices.com/equipment/autoclave/biomedical-waste-pulsation-vacuum-sterilizer.webp",
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
                "name": "What is a Pulsation Vacuum Sterilizer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A pulsation vacuum sterilizer is an advanced autoclave that uses a mechanical vacuum pump to extract air from the sterilization chamber in multiple pulses, allowing saturated steam to penetrate porous materials and hollow instruments deeply."
                }
              },{
                "@type": "Question",
                "name": "What temperature does a medical waste sterilizer operate at?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most biomedical waste pulsation vacuum sterilizers operate between 121°C and 135°C (250°F - 275°F) under high pressure to effectively destroy all microbial life, including spores."
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
            category="Specialized & Portable"
            currentTitle="Biomedical Waste Pulsation Vacuum Sterilizer"
            currentSlug="biomedical-waste-pulsation-vacuum-sterilizer"
          />

          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-semibold tracking-wide uppercase text-blue-200 mb-4 shadow-sm">
              <Sparkles size={14} className="text-yellow-400" />
              Heavy-Duty Hospital & Laboratory Grade
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase drop-shadow-sm text-center">
              Biomedical Waste Pulsation Vacuum Sterilizer
            </h1>

            <p className="mt-3 text-base sm:text-lg text-blue-100/90 font-normal leading-relaxed max-w-3xl text-center mx-auto">
              Advanced pre- & post-vacuum steam sterilizer engineered for infectious hospital waste. Commonly sought as <strong className="font-semibold text-white">Biomedical Waste Autoclave</strong>, <strong className="font-semibold text-white">Pulse Vacuum Sterilizer</strong>, or <strong className="font-semibold text-white">Biohazard Steam Sterilizer</strong> for safe clinical waste decontamination.
            </p>

            <div className="mt-6 flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm text-blue-100">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md border border-white/10">
                <CheckCircle2 size={15} className="text-emerald-400" /> Multi-Pulse Dynamic Vacuum
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md border border-white/10">
                <CheckCircle2 size={15} className="text-emerald-400" /> Heavy-Gauge SS 304 / 316L
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md border border-white/10">
                <CheckCircle2 size={15} className="text-emerald-400" /> Automated PLC & Safety Interlocks
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Product Card Section (Inspired by food-ingredients) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12" id="product-overview">
        <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-xl">
          <div className="flex flex-col lg:flex-row h-full">
            
            {/* Image Side */}
            <div className="lg:w-[40%] relative flex items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-white border-b lg:border-b-0 lg:border-r border-gray-100 min-h-[400px]">
              <div className="absolute inset-0 opacity-10 mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0075B6 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
              <div className="relative w-full h-full max-w-[400px] aspect-[4/5]">
                <Image
                  src="/equipment/autoclave/biomedical-waste-pulsation-vacuum-sterilizer.webp"
                  alt="Biomedical Waste Pulsation Vacuum Sterilizer"
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
                  The <strong className="text-[#0075B6]">Biomedical Waste Pulsation Vacuum Sterilizer</strong> is a high-efficiency industrial autoclave designed specifically for the rigorous demands of medical waste management, laboratories, and pharmaceutical facilities.
                </p>
                <p>
                  Unlike standard gravity autoclaves, this system utilizes mechanical vacuum pumps to perform multiple "pulses" (alternating vacuum and steam injection). This completely eliminates cold air pockets—the primary barrier to effective sterilization—allowing high-pressure saturated steam to penetrate deep into porous materials, hollow instruments, and complex biomedical waste loads.
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
                      Our company doesn't just supply equipment; we deliver <strong className="text-[#0a192f]">comprehensive turnkey solutions</strong>. Our certified engineers manage end-to-end site preparation, rigorous calibration, IQ/OQ documentation, and operator safety training.
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

      {/* Operating Principle Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-[#0a192f] mb-4">Operating Principle: How It Works</h2>
              <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                The core advantage of the pulsation vacuum sterilizer lies in its three-phase mechanical process, guaranteeing 100% steam penetration and total microbial destruction.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Pre-Vacuum Phase</h3>
                    <p className="text-gray-600 leading-relaxed">A mechanical vacuum pump extracts the ambient air from the chamber. Steam is injected and vacuumed out repeatedly in "pulses." This dynamic action removes over 99% of trapped cold air, which is the leading cause of sterilization failure in porous loads.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sterilization Phase</h3>
                    <p className="text-gray-600 leading-relaxed">Pure, saturated steam fills the chamber, rapidly raising the temperature to the setpoint (typically 121°C or 134°C). The load is exposed to this intense heat and pressure for a precise duration, effectively destroying all bacteria, viruses, and heat-resistant spores.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Post-Vacuum Drying</h3>
                    <p className="text-gray-600 leading-relaxed">After sterilization, steam is exhausted, and a final deep vacuum is drawn. This rapid pressure drop flashes any remaining moisture into vapor, ensuring the biomedical waste or instruments are completely dry and safe to handle immediately.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-inner">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Applications & Industries Served</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="mt-1 text-2xl">🏥</div>
                  <div>
                    <strong className="block text-lg text-gray-900">Hospitals & Clinics</strong>
                    <span className="text-gray-600">Sterilization of surgical instruments, red-category infectious waste, soiled dressings, and blood bags.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 text-2xl">💊</div>
                  <div>
                    <strong className="block text-lg text-gray-900">Pharmaceutical Factories</strong>
                    <span className="text-gray-600">Sterilization of culture media, glass vials, stainless steel equipment, and cleanroom garments.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 text-2xl">🧪</div>
                  <div>
                    <strong className="block text-lg text-gray-900">Laboratories & Research Institutes</strong>
                    <span className="text-gray-600">Safe deactivation of bio-hazardous lab cultures, petri dishes, and contaminated testing equipment.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 text-2xl">♻️</div>
                  <div>
                    <strong className="block text-lg text-gray-900">Biomedical Waste Treatment Facilities</strong>
                    <span className="text-gray-600">Large-scale bulk processing of medical waste before shredding and final safe disposal.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information Cards */}
      <section className="bg-gray-100 py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#0a192f] mb-4">Comprehensive Specifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Every operational detail and feature engineered for maximum safety and efficiency.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                  01
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Key Functionalities</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Pre-Vacuum Pulses:</strong> Ensures 99% air removal before steam injection.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Vacuum Drying:</strong> Post-cycle vacuum extracts residual moisture, leaving loads dry.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Automated Cycles:</strong> One-touch preset programs for different waste types.</li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                  02
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Unmatched Safety</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Double-Door Interlock:</strong> Prevents both doors from opening simultaneously (pass-through models).</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Over-Pressure Valve:</strong> Mechanical and electronic pressure relief systems.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Low Water Protection:</strong> Automatic shutoff and alarm to prevent heater burnout.</li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                  03
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Core Advantages</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-purple-600 mt-0.5">✔</span> <strong>Faster Cycle Times:</strong> Active air removal dramatically speeds up the heating phase.</li>
                  <li className="flex items-start gap-2"><span className="text-purple-600 mt-0.5">✔</span> <strong>Regulatory Compliance:</strong> Meets strict ISO 9001, CE, and GMP medical waste standards.</li>
                  <li className="flex items-start gap-2"><span className="text-purple-600 mt-0.5">✔</span> <strong>Versatility:</strong> Ideal for porous dressings, hollow instruments, glassware, and heavy bio-loads.</li>
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
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Chamber Material</div>
                    <div className="text-white font-semibold">High-grade SS304 / SS316L Stainless Steel</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Control System</div>
                    <div className="text-white font-semibold">Microcomputer PLC with Color HMI Touch Screen</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Operating Temp</div>
                    <div className="text-white font-semibold">Standard 121°C to 134°C (Adjustable)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Data Logging</div>
                    <div className="text-white font-semibold">Integrated mini-printer / USB export for auditing</div>
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
            <h2 className="text-3xl font-black text-[#0a192f] mb-4">Comprehensive Maintenance & Compliance Guide</h2>
            <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
              To guarantee sterilization efficacy and comply with regulatory health standards, proper maintenance of your pulsation vacuum sterilizer is mandatory. AN Global Services provides full guidance on the following operational protocols:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-[#0075B6] pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Daily & Weekly Checks</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Wipe down interior chamber surfaces.</li>
                <li>Inspect and clean the chamber drain strainer to prevent blockages.</li>
                <li>Check the door gasket for wear, cracks, or steam leaks.</li>
                <li>Inspect the water reservoir for debris.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Performance Testing</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Bowie-Dick Test:</strong> Conducted daily to verify effective air removal and steam penetration.</li>
                <li><strong>Biological Indicators (BI):</strong> Used regularly to biologically validate complete microbial destruction.</li>
                <li><strong>Vacuum Leak Test:</strong> Ensures the structural integrity of the vacuum system.</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Annual Servicing</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Complete calibration of temperature and pressure sensors.</li>
                <li>Inspection of mechanical safety relief valves.</li>
                <li>Replacement of high-temperature O-rings and door gaskets.</li>
                <li>Software diagnostic checks on the PLC control unit.</li>
              </ul>
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
              href="/vertical-autoclave-deluxe"
              className="group p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#0075B6] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[11px] font-bold text-[#0075B6] bg-blue-50 px-2.5 py-0.5 rounded-full mb-2">Vertical Radial</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0075B6] transition-colors">Vertical Autoclave Deluxe</h3>
                <p className="text-xs text-gray-500 mt-1.5 line-clamp-2">Radial locking lid and foot pedal lift mechanism for hospital & laboratory sterilization.</p>
              </div>
              <div className="mt-4 flex items-center text-xs font-semibold text-[#0075B6] group-hover:translate-x-1 transition-transform">
                View Specifications <ArrowRight size={14} className="ml-1" />
              </div>
            </Link>

            <Link
              href="/horizontal-autoclave-cylindrical"
              className="group p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#0075B6] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[11px] font-bold text-[#0075B6] bg-blue-50 px-2.5 py-0.5 rounded-full mb-2">Horizontal Steam</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0075B6] transition-colors">Horizontal Autoclave Cylindrical</h3>
                <p className="text-xs text-gray-500 mt-1.5 line-clamp-2">Front-loading heavy-gauge sterilizer engineered for hospitals, bulk linen & surgical trays.</p>
              </div>
              <div className="mt-4 flex items-center text-xs font-semibold text-[#0075B6] group-hover:translate-x-1 transition-transform">
                View Specifications <ArrowRight size={14} />
              </div>
            </Link>

            <Link
              href="/portable-autoclave"
              className="group p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#0075B6] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[11px] font-bold text-[#0075B6] bg-blue-50 px-2.5 py-0.5 rounded-full mb-2">Mobile / Benchtop</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0075B6] transition-colors">Portable Autoclaves</h3>
                <p className="text-xs text-gray-500 mt-1.5 line-clamp-2">Compact aluminum & stainless steel mobile steam sterilizers for clinics, field labs, and nursing homes.</p>
              </div>
              <div className="mt-4 flex items-center text-xs font-semibold text-[#0075B6] group-hover:translate-x-1 transition-transform">
                View Specifications <ArrowRight size={14} />
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
            <p className="text-gray-500 text-lg">Key insights into our biomedical waste sterilization systems.</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What is a Pulsation Vacuum Sterilizer?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                A pulsation vacuum sterilizer is an advanced autoclave that uses a mechanical vacuum pump to extract air from the sterilization chamber in multiple pulses. This allows saturated steam to penetrate porous materials and hollow instruments deeply and rapidly.
              </div>
            </details>
            
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What temperature does it operate at?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Most biomedical waste pulsation vacuum sterilizers operate between 121°C and 135°C (250°F - 275°F) under high pressure to effectively destroy all microbial life, including highly resistant spores.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Why is the vacuum pump necessary?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                The vacuum pump removes 99% of ambient air before steam is introduced, preventing "cold spots" inside the chamber. After the cycle, the vacuum also pulls moisture out of the load, ensuring completely dry and safe waste removal.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Do you provide training for hospital staff?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Absolutely. AN Global Services handles the entire installation process, validates the machine's safety, and provides comprehensive hands-on training for operators to ensure compliant and safe waste management.
              </div>
            </details>
          </div>
        </div>
      </section>
      
    </main>
  );
}
