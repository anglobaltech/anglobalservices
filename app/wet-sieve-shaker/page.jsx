import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { CheckCircle2, ShieldCheck, ArrowRight, Sparkles, Activity, Gauge, Settings, Zap } from "lucide-react";
import ShakerBreadcrumbs from "@/components/ShakerBreadcrumbs";

export const metadata = {
  title: "Wet Sieve Shaker Manufacturer & Supplier | Laboratory Wet Sieving Apparatus | AN Global Services",
  description: "Leading manufacturer of Wet Sieve Shakers in India. Specialized wet sieving apparatus with continuous water spray nozzles, drainage manifold, stainless steel splash protection, and ASTM C117 compliance for clay, fines, and aggregates.",
  keywords: [
    "Wet Sieve Shaker",
    "Wet Sieving Machine",
    "Wet Sieve Apparatus",
    "Aggregate Wet Sieve Shaker",
    "Soil Wet Sieve Shaker",
    "ASTM C117 Sieve Shaker",
    "Washing Sieve Shaker",
    "AN Global Services"
],
  alternates: {
    canonical: "https://www.anglobalservices.com/wet-sieve-shaker",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Wet Sieve Shaker | AN Global Services",
    description: "Leading manufacturer of Wet Sieve Shakers in India. Specialized wet sieving apparatus with continuous water spray nozzles, drainage manifold, stainless steel splash protection, and ASTM C117 compliance for clay, fines, and aggregates.",
    url: "https://www.anglobalservices.com/wet-sieve-shaker",
    siteName: "AN Global Services",
    images: [
      {
        url: "https://www.anglobalservices.com/equipment/laboratory-shaking-machine-manufacturer-products/wet-sieve-shaker.webp",
        width: 1200,
        height: 800,
        alt: "Wet Sieve Shaker - AN Global Services Laboratory Equipment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function WetSieveShakerPage() {
  return (
    <main className="w-full bg-gray-50 min-h-screen">
      {/* Schema Markup for Top-Notch SEO Ranking */}
      <Script id="wet-sieve-shaker-schema" type="application/ld+json" strategy="afterInteractive">
        {`
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              "@id": "https://www.anglobalservices.com/wet-sieve-shaker#product",
              "name": "Wet Sieve Shaker - Laboratory Shaking Machine",
              "description": "Leading manufacturer of Wet Sieve Shakers in India. Specialized wet sieving apparatus with continuous water spray nozzles, drainage manifold, stainless steel splash protection, and ASTM C117 compliance for clay, fines, and aggregates.",
              "image": "https://www.anglobalservices.com/equipment/laboratory-shaking-machine-manufacturer-products/wet-sieve-shaker.webp",
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
                  "name": "Wet Sieve Shaker",
                  "item": "https://www.anglobalservices.com/wet-sieve-shaker"
                }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "When is wet sieving necessary over dry sieving?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Wet sieving is mandatory when samples contain cohesive clays, sticky organic materials, static powders, or ultrafine silts (&lt; 75 microns) that adhere together or blind dry sieve apertures."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can this shaker also be used for dry sieving?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Simply turn off the water supply and use standard dry collection pans; the machine functions as a high-performance dry vibratory sieve shaker."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What standards mandate wet sieving?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ASTM C117 (Standard Test Method for Materials Finer than 75-µm Sieve in Mineral Aggregates by Washing) and IS 2386 (Part 1) both mandate wet washing methods."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does it prevent water leakage onto the laboratory bench?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Precision-molded silicone sealing gaskets between each sieve frame and an oversized deep-drawn stainless steel catchment pan completely contain all wash water."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are stainless steel sieves required for wet testing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, stainless steel frames and stainless steel wire mesh are strongly recommended for wet sieving to prevent corrosion and frame tarnishing."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does AN Global Services provide complete wet testing kits?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we supply the complete package including spray rings, flow valves, drainage tubing, certified sieves, and calibration documentation."
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
            currentTitle="Wet Sieve Shaker"
            currentSlug="wet-sieve-shaker"
          />

          <div className="max-w-5xl lg:max-w-6xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-semibold tracking-wide uppercase text-blue-200 mb-4 shadow-sm text-center">
              <Sparkles size={14} className="text-yellow-400 shrink-0" />
              ASTM C117 & IS 2720 Wet Sieving & Clay Washing Standard
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase drop-shadow-sm text-center">
              Wet Sieve Shaker
            </h1>

            <p className="mt-4 text-base sm:text-lg text-blue-100/90 font-normal leading-relaxed max-w-5xl text-center mx-auto">
              Specialized wet sieving laboratory apparatus engineered for separating cohesive clays, fine aggregates, and static powders under pressurized water wash. Widely searched as <strong className="font-semibold text-white">Wet Sieve Shaker</strong>, <strong className="font-semibold text-white">Wet Sieving Machine</strong>, <strong className="font-semibold text-white">Wet Sieve Apparatus</strong>, or <strong className="font-semibold text-white">Aggregate Washing Shaker</strong> complying with ASTM C117, ASTM D1140, and IS 2386 standards.
            </p>

            <div className="mt-7 flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm text-blue-100">
              
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/15 shadow-sm">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" /> Integrated Water Spray Ring & Pressure Regulator
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/15 shadow-sm">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" /> Heavy-Duty Stainless Steel Drainage Catchment Basin
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/15 shadow-sm">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" /> Eliminates Fine Particle Agglomeration & Blinding
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
                  src="/equipment/laboratory-shaking-machine-manufacturer-products/wet-sieve-shaker.webp"
                  alt="Wet Sieve Shaker - AN Global Services Laboratory Equipment"
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
                  The <strong className="text-[#0075B6]">Wet Sieve Shaker</strong> (commonly called a <em>wet sieving apparatus</em> or <em>aggregate washing sieve machine</em>) is an essential laboratory instrument for separating ultrafine particles that agglomerate when dry.
                </p>
                <p>
                  Equipped with an overhead pressurized water manifold and specialized silicone sealing gaskets between sieve tiers, continuous atomized water flushes clay, silt, and fine minerals through wire mesh apertures into an oversized stainless steel drainage basin. Combined with high-frequency vibratory and orbital agitation, it provides total extraction of fines smaller than 75 microns (&lt; No. 200 sieve) without screen blinding.
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
                      Includes brass spray manifold, needle flow valve, stainless drainage pan, discharge hoses, certified test sieves, and full on-site calibration by AN Global Services.
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sieve Stack & Watertight Gasket Attachment</h3>
                    <p className="text-gray-600 leading-relaxed">Stack 200mm (8&quot;) stainless steel test sieves fitted with watertight silicone O-ring gaskets, attach the overhead conical spray rose, and connect the water supply hose.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Pressurized Water Wash</h3>
                    <p className="text-gray-600 leading-relaxed">Turn on the needle flow valve; finely atomized water sprays across the aggregate sample while the vibratory motor agitates the stack to break agglomerates.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Silt & Clay Extraction</h3>
                    <p className="text-gray-600 leading-relaxed">Water carries clay, silt, and dust through the sieve nest into the collection pan drain, leaving clean, distinct aggregate fractions ready for drying and weighing.</p>
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
                    <strong className="block text-lg text-gray-900">Fine Aggregate Washing & Soil Testing</strong>
                    <span className="text-gray-600">Determining material finer than 75-micron (No. 200) sieve in aggregate per ASTM C117 and IS 2386.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Ceramic Slips & Clay Characterization</strong>
                    <span className="text-gray-600">Particle size evaluation of kaolin, feldspar, ball clays, and ceramic raw material slurries.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Mining, Flotation & Tailings Analysis</strong>
                    <span className="text-gray-600">Granulometric classification of pulverized ore slurries, beneficiation feeds, and mineral tailings.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Sedimentology & Oceanography</strong>
                    <span className="text-gray-600">Grading marine sands, riverbed silt, and estuarine mud samples.</span>
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
              <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Pressurized Water Manifold</h3>
              <ul className="space-y-3 text-gray-600 font-medium text-sm">
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Overhead brass/stainless spray nozzle ring provides uniform conical water wash.</li>
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Flow control valve and pressure gauge ensure gentle non-destructive aggregate rinsing.</li>
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Watertight silicone inter-sieve gaskets prevent water leakage during operation.</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                02
              </div>
              <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Corrosion-Resistant Basin & Drain</h3>
              <ul className="space-y-3 text-gray-600 font-medium text-sm">
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Deep-drawn stainless steel (SS304) base receiver pan with oversized drainage spigot.</li>
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Heavy-duty water-resistant motor housing sealed to IP55 standards.</li>
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Reinforced vertical clamping rods securely hold up to 7 full-height test sieves.</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                03
              </div>
              <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Vibratory & Orbital Action</h3>
              <ul className="space-y-3 text-gray-600 font-medium text-sm">
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> High-frequency electromagnetic or mechanical vibration frees particles from clumped matrices.</li>
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Adjustable amplitude controller tailors agitation to delicate wire mesh screens.</li>
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Built-in digital process timer with automatic water-off signal output.</li>
              </ul>
            </div>

            {/* Full Width Specs Table */}
            <div className="bg-[#0a192f] rounded-2xl p-8 shadow-lg md:col-span-2 lg:col-span-3 mt-4 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white mb-6 border-b border-white/20 pb-4">Technical Specifications &amp; Operational Parameters</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Operation Type</div>
                    <div className="text-white font-semibold">Wet Sieving with Pressurized Continuous Water Wash</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Sieve Diameter</div>
                    <div className="text-white font-semibold">200 mm (8&quot;) Standard (Stainless Steel Recommended)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Sieve Capacity</div>
                    <div className="text-white font-semibold">Up to 7 Full Height (50mm) or 10 Half Height Sieves</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Water Connections</div>
                    <div className="text-white font-semibold">Standard 1/2&quot; BSP Brass Inlet with Needle Flow Valve</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Drainage Outlet</div>
                    <div className="text-white font-semibold">1.5&quot; Stainless Steel Drainage Spigot with Flexible Hose</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Drive Mechanism</div>
                    <div className="text-white font-semibold">IP55 Sealed High-Torque Vibratory / Orbital Motor</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Standards Compliance</div>
                    <div className="text-white font-semibold">ASTM C117, ASTM D1140, IS 2386 (Part 1), IS 2720 (Part 4)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Power Supply</div>
                    <div className="text-white font-semibold">220/230V AC, 50Hz Single Phase</div>
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
                <li>Inspect silicone inter-sieve gaskets for cracks or elasticity loss to ensure complete watertight seals.</li>
                <li>Flush water spray nozzles with clean water or dilute acetic acid to remove mineral scale deposits.</li>
                <li>Rinse stainless drainage catchment pan and clear flexible drain hose of sand sediment.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Operational Protocols</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Water Pressure Regulation: Always regulate inlet pressure below 2.0 bar to prevent high-velocity water jets from stretching fine wire mesh.</li>
                <li>Post-Wash Sieve Care: Dry washed test sieves in a temperature-controlled laboratory oven at 105°C ± 5°C before final precision mass measurement.</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Annual Servicing</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Audit IP55 motor enclosure water seals, power cord gland water resistance, and grounding.</li>
                <li>Precision optical tachometer and vibration amplitude calibration.</li>
                <li>Wire mesh aperture inspection per ASTM E11 and IS 460-1 using optical profile projectors.</li>
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
                When is wet sieving necessary over dry sieving?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Wet sieving is mandatory when samples contain cohesive clays, sticky organic materials, static powders, or ultrafine silts (&lt; 75 microns) that adhere together or blind dry sieve apertures.
              </div>
            </details>
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Can this shaker also be used for dry sieving?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Yes. Simply turn off the water supply and use standard dry collection pans; the machine functions as a high-performance dry vibratory sieve shaker.
              </div>
            </details>
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What standards mandate wet sieving?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                ASTM C117 (Standard Test Method for Materials Finer than 75-µm Sieve in Mineral Aggregates by Washing) and IS 2386 (Part 1) both mandate wet washing methods.
              </div>
            </details>
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                How does it prevent water leakage onto the laboratory bench?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Precision-molded silicone sealing gaskets between each sieve frame and an oversized deep-drawn stainless steel catchment pan completely contain all wash water.
              </div>
            </details>
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Are stainless steel sieves required for wet testing?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Yes, stainless steel frames and stainless steel wire mesh are strongly recommended for wet sieving to prevent corrosion and frame tarnishing.
              </div>
            </details>
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Does AN Global Services provide complete wet testing kits?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Yes, we supply the complete package including spray rings, flow valves, drainage tubing, certified sieves, and calibration documentation.
              </div>
            </details>
          </div>
        </div>
      </section>
      
    </main>
  );
}
