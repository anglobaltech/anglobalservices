import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { CheckCircle2, ShieldCheck, ArrowRight, Sparkles, Activity, Gauge, Settings, Zap } from "lucide-react";
import ShakerBreadcrumbs from "@/components/ShakerBreadcrumbs";

export const metadata = {
  title: "Universal Shaking Machine Manufacturer & Supplier | Multi-Purpose Laboratory Shaker | AN Global Services",
  description: "Leading manufacturer of Universal Shaking Machines in India. Dual orbital and linear reciprocating agitation with universal adjustable platform for flasks, beakers, test tubes, and culture bottles. Variable speed 50–300 RPM.",
  keywords: [
    "Universal Shaking Machine",
    "Universal Shaker",
    "Multi Purpose Shaker",
    "Laboratory Universal Shaker",
    "Dual Motion Shaker",
    "Orbital Linear Shaker",
    "Benchtop Shaker",
    "AN Global Services"
],
  alternates: {
    canonical: "https://www.anglobalservices.com/universal-shaking-machine",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Universal Shaking Machine | AN Global Services",
    description: "Leading manufacturer of Universal Shaking Machines in India. Dual orbital and linear reciprocating agitation with universal adjustable platform for flasks, beakers, test tubes, and culture bottles. Variable speed 50–300 RPM.",
    url: "https://www.anglobalservices.com/universal-shaking-machine",
    siteName: "AN Global Services",
    images: [
      {
        url: "https://www.anglobalservices.com/equipment/laboratory-shaking-machine-manufacturer-products/universal-shaking-machine.webp",
        width: 1200,
        height: 800,
        alt: "Universal Shaking Machine - AN Global Services Laboratory Equipment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function UniversalShakingMachinePage() {
  return (
    <main className="w-full bg-gray-50 min-h-screen">
      {/* Schema Markup for Top-Notch SEO Ranking */}
      <Script id="universal-shaking-machine-schema" type="application/ld+json" strategy="afterInteractive">
        {`
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              "@id": "https://www.anglobalservices.com/universal-shaking-machine#product",
              "name": "Universal Shaking Machine - Laboratory Shaking Machine",
              "description": "Leading manufacturer of Universal Shaking Machines in India. Dual orbital and linear reciprocating agitation with universal adjustable platform for flasks, beakers, test tubes, and culture bottles. Variable speed 50–300 RPM.",
              "image": "https://www.anglobalservices.com/equipment/laboratory-shaking-machine-manufacturer-products/universal-shaking-machine.webp",
              "brand": {
                "@type": "Brand",
                "name": "AN Global Services"
              },
              "manufacturer": {
                "@type": "Organization",
                "name": "AN Global Services",
                "url": "https://www.anglobalservices.com"
              },
              "category": "Laboratory Shaking Machine / Laboratory Equipment",
              "offers": {
                "@type": "Offer",
                "url": "https://www.anglobalservices.com/contact-us",
                "priceCurrency": "INR",
                "price": "0",
                "availability": "https://schema.org/InStock",
                "itemCondition": "https://schema.org/NewCondition",
                "seller": {
                  "@type": "Organization",
                  "name": "AN Global Services"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "128",
                "bestRating": "5",
                "worstRating": "1"
              }
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.anglobalservices.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Equipments & Machinery",
                  "item": "https://www.anglobalservices.com/equipments-and-machinery"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Laboratory Shaking Machine",
                  "item": "https://www.anglobalservices.com/equipments-and-machinery"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Universal Shaking Machine",
                  "item": "https://www.anglobalservices.com/universal-shaking-machine"
                }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What makes a Universal Shaking Machine &quot;Universal&quot;?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It combines both orbital and linear reciprocating motion in a single chassis, and features an adjustable universal clamping platform that holds mixed glassware (flasks, beakers, bottles, racks) simultaneously."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do you switch between orbital and linear motion?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A mechanical selector lever or internal drive pin allows swift conversion between circular orbital swirling and linear back-and-forth reciprocating stroke."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the maximum weight capacity of the platform?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The heavy-duty platform and brushless motor comfortably handle balanced vessel loads up to 15 kg without speed deceleration."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can it accommodate different size flasks at the same time?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. The adjustable cushioned cross-bars slide along dual side tracks to clamp flasks of varying sizes (e.g., 100ml, 250ml, and 1000ml) side by side."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is it suitable for continuous multi-day fermentation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, the high-efficiency brushless DC motor runs 24/7 without overheating or carbon brush degradation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What warranty and service support does AN Global Services provide?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We supply a comprehensive warranty, on-site commissioning, NABL speed calibration, and complete replacement parts availability across India."
                  }
                }
              ]
            }
          ]
        }
        `}
      </Script>

      {/* Hero Banner Section with Expanded Width */}
      <section className="relative w-full bg-gradient-to-r from-[#001c3d] via-[#002f63] to-[#004e8c] text-white py-14 md:py-20 overflow-hidden shadow-md">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          <ShakerBreadcrumbs
            currentTitle="Universal Shaking Machine"
            currentSlug="universal-shaking-machine"
          />

          <div className="max-w-5xl lg:max-w-6xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-semibold tracking-wide uppercase text-blue-200 mb-4 shadow-sm text-center">
              <Sparkles size={14} className="text-yellow-400 shrink-0" />
              Dual Orbital & Linear Motion Multi-Vessel Standard
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase drop-shadow-sm text-center">
              Universal Shaking Machine
            </h1>

            <p className="mt-4 text-base sm:text-lg text-blue-100/90 font-normal leading-relaxed max-w-5xl text-center mx-auto">
              Heavy-duty multi-purpose laboratory shaking machine engineered for simultaneous agitation of varied glassware. Widely searched as <strong className="font-semibold text-white">Universal Shaking Machine</strong>, <strong className="font-semibold text-white">Universal Shaker</strong>, <strong className="font-semibold text-white">Multi Purpose Shaker</strong>, <strong className="font-semibold text-white">Orbital Linear Shaker</strong>, or <strong className="font-semibold text-white">Laboratory Platform Shaker</strong> for biological cultures, chemical extractions, and clinical mixing.
            </p>

            <div className="mt-7 flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm text-blue-100">
              
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/15 shadow-sm">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" /> Dual Orbital & Reciprocating Motion Options
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/15 shadow-sm">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" /> Universal Clamping Bar Tray for Mixed Glassware
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/15 shadow-sm">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" /> Digital Microprocessor Speed Control (50 – 300 RPM)
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
              <div className="relative w-full h-full max-w-[420px] aspect-[4/3] flex items-center justify-center">
                <Image
                  src="/equipment/laboratory-shaking-machine-manufacturer-products/universal-shaking-machine.webp"
                  alt="Universal Shaking Machine - AN Global Services Laboratory Equipment"
                  fill
                  className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>

            {/* Content Side with Blue Highlighted Title */}
            <div className="lg:w-[60%] p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-black text-[#0a192f] mb-4">
                About the Product
              </h2>
              <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-6"></div>
              
              <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed font-medium">
                <p>
                  The <strong className="text-[#0075B6]">Universal Shaking Machine</strong> (commonly termed a <em>multi-purpose laboratory shaker</em> or <em>universal platform agitator</em>) is the most adaptable mixing instrument for versatile scientific institutions.
                </p>
                <p>
                  Engineered with an innovative dual-motion drive, it allows operators to toggle between gentle orbital swirling and vigorous linear back-and-forth reciprocating shaking. Its universal platform features rubber-cushioned adjustable cross-bars, enabling simultaneous clamping of Erlenmeyer flasks, beakers, separatory funnels, and test tube racks on a single vibration-damped tray.
                </p>
                
                <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 my-6">
                  <div className="p-2 rounded-xl bg-[#0075B6] text-white shrink-0 mt-0.5">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0a192f] text-sm sm:text-base">
                      Complete Setup &amp; Calibration by AN Global Services
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-normal">
                      Includes multi-vessel crossbar platform, digital tachometer calibration, vibration stability certification, and complete operator guidance by AN Global Services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact-us"
                  className="bg-[#002B7F] hover:bg-[#001f5c] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2 text-center"
                >
                  Request a Quote &amp; Setup
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
              <h2 className="text-3xl font-black text-[#0a192f] mb-4">How It Operates in the Laboratory</h2>
              <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Operating this laboratory equipment is an exact, repeatable process engineered for continuous precision and certified compliance:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Mixed Glassware Configuration</h3>
                    <p className="text-gray-600 leading-relaxed">Position Erlenmeyer flasks, beakers, and bottles of different volumes across the grooved non-slip rubber mat. Slide the cushioned retaining cross-bars into place and lock with thumb screws.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Motion Selection (Orbital or Linear)</h3>
                    <p className="text-gray-600 leading-relaxed">Toggle the mechanical selector between smooth circular orbital motion for cell aeration and linear reciprocating stroke for liquid-liquid solvent extractions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Microprocessor Regulation</h3>
                    <p className="text-gray-600 leading-relaxed">Set speed (50–300 RPM) and digital run time; the PID microprocessor maintains exact speed stability under variable weight loads without stalling.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-inner">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Key Users &amp; Industrial Facilities</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Multi-Disciplinary Research Labs</strong>
                    <span className="text-gray-600">Simultaneous mixing of Erlenmeyer flasks, reagent bottles, and beakers in shared academic facilities.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Biotechnology & Fermentation</strong>
                    <span className="text-gray-600">Aerating fungal and bacterial cultures with orbital swirling without cellular shear stress.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Chemical Solvent Extractions</strong>
                    <span className="text-gray-600">Vigorous linear back-and-forth partition of organic and aqueous phases in separatory vessels.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Clinical & Diagnostic Pathology</strong>
                    <span className="text-gray-600">Reagent homogenization, agglutination tests, and dissolution of difficult clinical media.</span>
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
            <h2 className="text-3xl md:text-4xl font-black text-[#0a192f] mb-4">Equipment Features &amp; Specifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Heavy-duty construction, vibration damping, and digital precision control.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                01
              </div>
              <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Dual Agitation Motion</h3>
              <ul className="space-y-3 text-gray-600 font-medium text-sm">
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Selectable circular orbital swirling and horizontal linear reciprocating stroke.</li>
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> 20 mm orbital throw and 20 mm linear stroke optimize fluid shear.</li>
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Heavy-duty counterbalanced mechanism prevents vibration transfer to the bench.</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                02
              </div>
              <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Universal Modular Platform</h3>
              <ul className="space-y-3 text-gray-600 font-medium text-sm">
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Grooved non-slip silicone rubber platform accommodates vessels from 25ml to 2000ml.</li>
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Adjustable stainless steel cross-bars with rubber buffers hold mixed glassware.</li>
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Interchangeable flask clamp trays and separatory funnel attachments available.</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                03
              </div>
              <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Microprocessor Precision</h3>
              <ul className="space-y-3 text-gray-600 font-medium text-sm">
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Digital LCD screen shows current RPM and countdown time simultaneously.</li>
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Brushless DC motor ensures smooth acceleration and zero maintenance.</li>
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Audible end-of-run buzzer and electronic motor overload protection.</li>
              </ul>
            </div>

            {/* Full Width Specs Table */}
            <div className="bg-[#0a192f] rounded-2xl p-8 shadow-lg md:col-span-2 lg:col-span-3 mt-4 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white mb-6 border-b border-white/20 pb-4">Technical Specifications &amp; Operational Parameters</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Motion Modes</div>
                    <div className="text-white font-semibold">Orbital & Linear Reciprocating (Switchable)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Speed Range</div>
                    <div className="text-white font-semibold">50 to 300 RPM (Digital PID Control)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Orbit / Stroke Length</div>
                    <div className="text-white font-semibold">20 mm Circular Orbit / 20 mm Linear Stroke</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Platform Size</div>
                    <div className="text-white font-semibold">450 mm × 450 mm with Adjustable Cross-Bars</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Maximum Load</div>
                    <div className="text-white font-semibold">15 kg Balanced Load Capacity</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Timer Display</div>
                    <div className="text-white font-semibold">1 min to 999 min or Continuous Operation</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Motor Type</div>
                    <div className="text-white font-semibold">Brushless DC Motor (Maintenance-Free)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Power Supply</div>
                    <div className="text-white font-semibold">220/240V AC, 50/60 Hz Single Phase</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Comprehensive Maintenance & Calibration Guide Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-black text-[#0a192f] mb-4">Comprehensive Maintenance &amp; Calibration Guide</h2>
            <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
              To preserve precision calibration, prevent mechanical stress, and ensure decade-long operational accuracy, AN Global Services recommends following these standard protocols:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-[#0075B6] pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Routine Inspections</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Wipe the silicone rubber platform mat clean of chemical and biological spills after each run.</li>
                <li>Check tension screws on the universal cross-bars to ensure glassware is clamped securely.</li>
                <li>Inspect the platform drive linkage and ensure smooth motion before high-RPM runs.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Operational Protocols</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Load Distribution: Symmetrically distribute heavier flasks near the center of the platform to maintain balance.</li>
                <li>Speed Limits for Tall Glassware: When shaking tall graduated cylinders or separatory funnels, cap speed at 180 RPM to prevent tipping.</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Annual Servicing</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Digital tachometer verification of orbital and linear RPM across low and high speed ranges.</li>
                <li>Lubrication inspection of internal linear slide rails and eccentric drive ball bearings.</li>
                <li>Complete electrical grounding continuity and motor thermal overload relay testing.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other Machinery Models */}
      <section className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-gray-200">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-[#0075B6]">Laboratory Equipment Portfolio</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-1">Explore Complementary Laboratory Machinery</h2>
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
              href="/rotary-flask-shaker"
              className="group p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#0075B6] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[11px] font-bold text-[#0075B6] bg-blue-50 px-2.5 py-0.5 rounded-full mb-2">Orbital Agitation</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0075B6] transition-colors">Rotary Flask Shaker</h3>
                <p className="text-xs text-gray-500 mt-1.5 line-clamp-2">Benchtop orbital shaking machine with universal clamps for microbiology and chemical dissolution.</p>
              </div>
              <div className="mt-4 flex items-center text-xs font-semibold text-[#0075B6] group-hover:translate-x-1 transition-transform">
                View Specifications <ArrowRight size={14} className="ml-1" />
              </div>
            </Link>

            <Link
              href="/trinocular-microscope"
              className="group p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#0075B6] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[11px] font-bold text-[#0075B6] bg-blue-50 px-2.5 py-0.5 rounded-full mb-2">Research Microscopy</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0075B6] transition-colors">Trinocular Microscope</h3>
                <p className="text-xs text-gray-500 mt-1.5 line-clamp-2">Dual ocular viewing with dedicated vertical digital camera phototube for clinical and research photography.</p>
              </div>
              <div className="mt-4 flex items-center text-xs font-semibold text-[#0075B6] group-hover:translate-x-1 transition-transform">
                View Specifications <ArrowRight size={14} className="ml-1" />
              </div>
            </Link>

            <Link
              href="/rotap-sieve-shaker"
              className="group p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#0075B6] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[11px] font-bold text-[#0075B6] bg-blue-50 px-2.5 py-0.5 rounded-full mb-2">Particle Sizing</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0075B6] transition-colors">Rotap Sieve Shaker</h3>
                <p className="text-xs text-gray-500 mt-1.5 line-clamp-2">Circular horizontal motion with motorized hammer tapping conforming to ASTM E11 &amp; ISO 3310.</p>
              </div>
              <div className="mt-4 flex items-center text-xs font-semibold text-[#0075B6] group-hover:translate-x-1 transition-transform">
                View Specifications <ArrowRight size={14} className="ml-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section (Full 6 FAQs) */}
      <section className="bg-white py-16 border-t border-gray-200" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-[#0075B6] rounded-full mx-auto mb-6"></div>
            <p className="text-gray-500 text-lg">Learn more about our laboratory equipment, testing procedures, and calibration services.</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What makes a Universal Shaking Machine &quot;Universal&quot;?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                It combines both orbital and linear reciprocating motion in a single chassis, and features an adjustable universal clamping platform that holds mixed glassware (flasks, beakers, bottles, racks) simultaneously.
              </div>
            </details>
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                How do you switch between orbital and linear motion?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                A mechanical selector lever or internal drive pin allows swift conversion between circular orbital swirling and linear back-and-forth reciprocating stroke.
              </div>
            </details>
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What is the maximum weight capacity of the platform?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                The heavy-duty platform and brushless motor comfortably handle balanced vessel loads up to 15 kg without speed deceleration.
              </div>
            </details>
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Can it accommodate different size flasks at the same time?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Yes. The adjustable cushioned cross-bars slide along dual side tracks to clamp flasks of varying sizes (e.g., 100ml, 250ml, and 1000ml) side by side.
              </div>
            </details>
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Is it suitable for continuous multi-day fermentation?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Yes, the high-efficiency brushless DC motor runs 24/7 without overheating or carbon brush degradation.
              </div>
            </details>
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What warranty and service support does AN Global Services provide?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                We supply a comprehensive warranty, on-site commissioning, NABL speed calibration, and complete replacement parts availability across India.
              </div>
            </details>
          </div>
        </div>
      </section>
      
    </main>
  );
}
