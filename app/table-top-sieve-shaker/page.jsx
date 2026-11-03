import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { CheckCircle2, ShieldCheck, ArrowRight, Sparkles, Activity, Gauge, Settings, Zap } from "lucide-react";
import ShakerBreadcrumbs from "@/components/ShakerBreadcrumbs";

export const metadata = {
  title: "Table Top Sieve Shaker Manufacturer & Supplier | Compact Benchtop Sieve Shaker | AN Global Services",
  description: "Precision Table Top Sieve Shaker manufacturer in India. Electromagnetic 3D vibratory motion for 100mm & 200mm (8-inch) test sieves. Features digital amplitude control (0–3mm), silent maintenance-free operation, and digital timer.",
  keywords: [
    "Table Top Sieve Shaker",
    "Benchtop Sieve Shaker",
    "Electromagnetic Sieve Shaker",
    "Mini Sieve Shaker",
    "Laboratory Sieve Shaker",
    "Vibratory Sieve Shaker",
    "Compact Sieve Shaker",
    "Dry Wet Sieve Shaker",
    "AN Global Services laboratory equipment"
],
  alternates: {
    canonical: "https://www.anglobalservices.com/table-top-sieve-shaker",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Table Top Sieve Shaker | AN Global Services",
    description: "Precision Table Top Sieve Shaker manufacturer in India. Electromagnetic 3D vibratory motion for 100mm & 200mm (8-inch) test sieves. Features digital amplitude control (0–3mm), silent maintenance-free operation, and digital timer.",
    url: "https://www.anglobalservices.com/table-top-sieve-shaker",
    siteName: "AN Global Services",
    images: [
      {
        url: "https://www.anglobalservices.com/equipment/laboratory-shaking-machine-manufacturer-products/table-top-sieve-shaker.webp",
        width: 1200,
        height: 800,
        alt: "Table Top Sieve Shaker - AN Global Services Laboratory Equipment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function TableTopSieveShakerPage() {
  return (
    <main className="w-full bg-gray-50 min-h-screen">
      {/* Schema Markup for Top-Notch SEO Ranking */}
      <Script id="table-top-sieve-shaker-schema" type="application/ld+json" strategy="afterInteractive">
        {`
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              "@id": "https://www.anglobalservices.com/table-top-sieve-shaker#product",
              "name": "Table Top Sieve Shaker - Laboratory Shaking Machine",
              "description": "Precision Table Top Sieve Shaker manufacturer in India. Electromagnetic 3D vibratory motion for 100mm & 200mm (8-inch) test sieves. Features digital amplitude control (0–3mm), silent maintenance-free operation, and digital timer.",
              "image": "https://www.anglobalservices.com/equipment/laboratory-shaking-machine-manufacturer-products/table-top-sieve-shaker.webp",
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
                  "name": "Table Top Sieve Shaker",
                  "item": "https://www.anglobalservices.com/table-top-sieve-shaker"
                }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is a Table Top Sieve Shaker best used for?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It is ideal for high-precision analytical particle size analysis of fine dry powders, pharmaceuticals, food ingredients, and cosmetic chemicals requiring quiet benchtop operation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does electromagnetic drive differ from motor-driven shakers?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Electromagnetic shakers have no rotating motors, belts, or gears. Instead, an electromagnetic coil produces a controlled 3D throwing motion. This provides silent, maintenance-free operation and precise digital amplitude control."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What sieve diameters can be mounted on this benchtop shaker?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It supports both 100 mm (4-inch) and 200 mm (8-inch) diameter test sieves, accommodating up to 6 full-height or 8 half-height sieves."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the advantage of interval pulsing mode?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Interval pulsing periodically interrupts the vibration to collapse powder agglomerations and release static charges, accelerating the passage of stubborn fine powders through micro-apertures."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is this unit compliant with pharmaceutical USP standards?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, it complies with USP &lt;786&gt; particle size distribution estimation by analytical sieving, as well as ISO 3310 and ASTM E11."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does AN Global Services offer calibration for this unit?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide full amplitude and timer calibration services backed by ISO and NABL-traceable documentation."
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
            currentTitle="Table Top Sieve Shaker"
            currentSlug="table-top-sieve-shaker"
          />

          <div className="max-w-5xl lg:max-w-6xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-semibold tracking-wide uppercase text-blue-200 mb-4 shadow-sm text-center">
              <Sparkles size={14} className="text-yellow-400 shrink-0" />
              ISO 3310 & ASTM E11 High-Precision Benchtop Standard
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase drop-shadow-sm text-center">
              Table Top Sieve Shaker
            </h1>

            <p className="mt-4 text-base sm:text-lg text-blue-100/90 font-normal leading-relaxed max-w-5xl text-center mx-auto">
              Ultra-quiet electromagnetic 3D vibratory sieve shaker engineered for pharmaceutical powders, cosmetics, and fine analytical chemistry. Widely searched as <strong className="font-semibold text-white">Table Top Sieve Shaker</strong>, <strong className="font-semibold text-white">Benchtop Sieve Shaker</strong>, <strong className="font-semibold text-white">Electromagnetic Sieve Shaker</strong>, or <strong className="font-semibold text-white">Vibratory Sieve Shaker</strong> conforming to ISO 3310-1 and ASTM E11 precision testing standards.
            </p>

            <div className="mt-7 flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm text-blue-100">
              
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/15 shadow-sm">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" /> Electromagnetic 3D Vibratory Action
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/15 shadow-sm">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" /> Stepless Digital Amplitude Adjustment (0 – 3 mm)
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/15 shadow-sm">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" /> Compact Footprint for Benchtop Laboratories
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
                  src="/equipment/laboratory-shaking-machine-manufacturer-products/table-top-sieve-shaker.webp"
                  alt="Table Top Sieve Shaker - AN Global Services Laboratory Equipment"
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
                  The <strong className="text-[#0075B6]">Table Top Sieve Shaker</strong> (often referred to as a <em>benchtop vibratory sieve shaker</em> or <em>electromagnetic mini shaker</em>) is an advanced, ultra-quiet particle analyzer engineered for space-conscious analytical laboratories.
                </p>
                <p>
                  Driven by an electromagnetic coil with a tuned spring-mass system, it produces a 3D throwing motion with an angular momentum. This fluidizes powders across the mesh for fast, repeatable separation with zero mechanical motor wear. Featuring stepless digital amplitude adjustment from 0 to 3 mm and interval pulse modes, it achieves rapid classification down to 20 microns without screen blinding.
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
                      AN Global Services installs and verifies benchtop isolation, calibrates vibrational amplitude sensors, provides NABL-traceable verification, and delivers certified ASTM E11 brass or stainless steel test sieves.
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Benchtop Mounting & Sieve Stacking</h3>
                    <p className="text-gray-600 leading-relaxed">Place 100mm (4&quot;) or 200mm (8&quot;) test sieves onto the vibration plate. The non-slip rubber pad and quick-clamp columns firmly secure the stack in seconds.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">3D Electromagnetic Fluidization</h3>
                    <p className="text-gray-600 leading-relaxed">The electromagnetic drive generates synchronized vertical and rotational micro-pulses, propelling particles upward and spiraling them evenly across the mesh apertures.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Timer Countdown & Auto-Stop</h3>
                    <p className="text-gray-600 leading-relaxed">The digital controller executes the programmed cycle with auto-stop and interval pulsing options to break electrostatic powder agglomerates effectively.</p>
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
                    <strong className="block text-lg text-gray-900">Pharmaceutical Powders & Granules</strong>
                    <span className="text-gray-600">Fineness verification of active pharmaceutical ingredients (APIs), excipients, and micro-pellets per IP/USP.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Chemical & Polymer Laboratories</strong>
                    <span className="text-gray-600">Sizing synthetic resins, catalyst beads, pigment powders, and industrial dry chemicals.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Food & Dairy Science</strong>
                    <span className="text-gray-600">Granulometric analysis of milk powder, flours, starches, cocoa, and spice blends.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Cosmetics & Personal Care</strong>
                    <span className="text-gray-600">Quality control of talc powders, mica pigments, and cosmetic mineral dusts.</span>
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
              <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Electromagnetic Drive</h3>
              <ul className="space-y-3 text-gray-600 font-medium text-sm">
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Non-wearing electromagnetic coil with tuned spring-mass system.</li>
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Silent operation (&lt; 65 dBA) suitable for analytical benchtop environments.</li>
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Zero mechanical gears, belts, or shafts requiring grease or replacement.</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                02
              </div>
              <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Digital Amplitude Control</h3>
              <ul className="space-y-3 text-gray-600 font-medium text-sm">
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Stepless amplitude regulation from 0 to 3.0 mm for fine powders.</li>
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Continuous and interval pulsing agitation modes prevent mesh pegging.</li>
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Digital LED display shows exact vibration intensity and cycle time.</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                03
              </div>
              <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Compact Ergonomics</h3>
              <ul className="space-y-3 text-gray-600 font-medium text-sm">
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Lightweight compact footprint saves valuable laboratory benchtop space.</li>
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Quick-lock clamping system allows rapid sieve exchange.</li>
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Compatible with both 100mm and 200mm diameter test sieves.</li>
              </ul>
            </div>

            {/* Full Width Specs Table */}
            <div className="bg-[#0a192f] rounded-2xl p-8 shadow-lg md:col-span-2 lg:col-span-3 mt-4 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white mb-6 border-b border-white/20 pb-4">Technical Specifications &amp; Operational Parameters</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Drive Mechanism</div>
                    <div className="text-white font-semibold">Electromagnetic 3D Vibratory Drive</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Amplitude Range</div>
                    <div className="text-white font-semibold">0 to 3.0 mm Stepless Digital Control</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Sieve Diameter</div>
                    <div className="text-white font-semibold">100 mm (4&quot;) or 200 mm (8&quot;)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Sieve Nest Height</div>
                    <div className="text-white font-semibold">Up to 6 Full Height / 8 Half Height Sieves</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Timer Display</div>
                    <div className="text-white font-semibold">0 to 99 min Digital LED Timer</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Acoustic Noise</div>
                    <div className="text-white font-semibold">&lt; 65 dBA at maximum amplitude</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Operating Voltage</div>
                    <div className="text-white font-semibold">220V AC, 50Hz Single Phase</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Standards Compliance</div>
                    <div className="text-white font-semibold">ISO 3310-1, ASTM E11, USP &lt;786&gt;</div>
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
                <li>Wipe electromagnetic top plate clean of spilled powders using an anti-static microfiber cloth.</li>
                <li>Verify clamping rod wing nuts are hand-tightened symmetrically before activating vibration.</li>
                <li>Inspect rubber damping feet to ensure complete acoustic decoupling from the laboratory bench.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Operational Protocols</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Fine Powder Protocols: For powders smaller than 75 microns, utilize the interval pulsing mode to overcome electrostatic cling.</li>
                <li>Dry Sample Condition: Ensure powder samples are properly desiccated; moisture causes particle agglomeration on fine screens.</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Annual Servicing</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Sensor verification of vibration amplitude using an optical displacement micrometer.</li>
                <li>Inspect internal leaf spring tension and electromagnetic coil winding resistance.</li>
                <li>Electrical continuity, earth grounding audit, and digital timer calibration per ISO/IEC 17025.</li>
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
                What is a Table Top Sieve Shaker best used for?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                It is ideal for high-precision analytical particle size analysis of fine dry powders, pharmaceuticals, food ingredients, and cosmetic chemicals requiring quiet benchtop operation.
              </div>
            </details>
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                How does electromagnetic drive differ from motor-driven shakers?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Electromagnetic shakers have no rotating motors, belts, or gears. Instead, an electromagnetic coil produces a controlled 3D throwing motion. This provides silent, maintenance-free operation and precise digital amplitude control.
              </div>
            </details>
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What sieve diameters can be mounted on this benchtop shaker?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                It supports both 100 mm (4-inch) and 200 mm (8-inch) diameter test sieves, accommodating up to 6 full-height or 8 half-height sieves.
              </div>
            </details>
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What is the advantage of interval pulsing mode?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Interval pulsing periodically interrupts the vibration to collapse powder agglomerations and release static charges, accelerating the passage of stubborn fine powders through micro-apertures.
              </div>
            </details>
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Is this unit compliant with pharmaceutical USP standards?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Yes, it complies with USP &lt;786&gt; particle size distribution estimation by analytical sieving, as well as ISO 3310 and ASTM E11.
              </div>
            </details>
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Does AN Global Services offer calibration for this unit?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Yes, we provide full amplitude and timer calibration services backed by ISO and NABL-traceable documentation.
              </div>
            </details>
          </div>
        </div>
      </section>
      
    </main>
  );
}
