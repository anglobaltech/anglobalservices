import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { CheckCircle2, ShieldCheck, ArrowRight, Sparkles, Cpu, Gauge, Settings, Zap } from "lucide-react";
import ShakerBreadcrumbs from "@/components/ShakerBreadcrumbs";

export const metadata = {
  title: "Magnetic Shaker Manufacturer & Supplier | Laboratory Magnetic Shaker Machine | AN Global Services",
  description:
    "Leading manufacturer & supplier of high-precision Magnetic Shakers (Electromagnetic Lab Shakers) in India. Features high-frequency electromagnetic agitation, spring-suspended stainless steel platform, dual digital LCD display, continuous & programmable timer modes, whisper-quiet brushless operation, and vibration-damped benchtop base. Complete lab setup & calibration by AN Global Services.",
  keywords: [
    "Magnetic Shaker",
    "Laboratory Magnetic Shaker",
    "Electromagnetic Shaker",
    "Magnetic Shaker Machine",
    "Benchtop Magnetic Shaker",
    "Magnetic Stirrer Shaker",
    "Mag Shaker",
    "Magnetic Stirrer",
    "Magnetic Mixer",
    "Magnetic Agitator",
    "Lab Magnetic Shaker",
    "Electromagnetic Mixer",
    "Digital Magnetic Shaker",
    "Spring Platform Shaker",
    "Plate Shaker",
    "Micro Shaker",
    "Solution Shaker",
    "Reagent Shaker",
    "Lab Shaker",
    "Shaking Machine",
    "Laboratory Shaking Machine",
    "Magnetic Shaker Manufacturer India",
    "Magnetic Shaker Supplier",
    "AN Global Services laboratory equipment",
  ],
  alternates: {
    canonical: "https://www.anglobalservices.com/magnetic-shaker",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Magnetic Shaker & Laboratory Electromagnetic Shaking Machine | AN Global Services",
    description:
      "Precision Laboratory Magnetic Shaker designed for homogenous solution mixing, reagent dissolution, and biological sample agitation. Spring-damped SS platform with dual digital LCD control.",
    url: "https://www.anglobalservices.com/magnetic-shaker",
    siteName: "AN Global Services",
    images: [
      {
        url: "https://www.anglobalservices.com/equipment/laboratory-shaking-machine-manufacturer-products/magnetic-shaker.webp",
        width: 1200,
        height: 800,
        alt: "Professional Laboratory Magnetic Shaker Equipment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function MagneticShakerPage() {
  return (
    <main className="w-full bg-gray-50 min-h-screen">
      {/* Schema Markup for Top-Notch SEO Ranking */}
      <Script id="magnetic-shaker-schema" type="application/ld+json" strategy="afterInteractive">
        {`
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              "@id": "https://www.anglobalservices.com/magnetic-shaker#product",
              "name": "Magnetic Shaker - Laboratory Electromagnetic Shaking Machine",
              "alternateName": [
                "Mag Shaker",
                "Magnetic Stirrer",
                "Magnetic Mixer",
                "Magnetic Agitator",
                "Electromagnetic Shaker",
                "Lab Magnetic Shaker",
                "Electromagnetic Mixer",
                "Digital Magnetic Shaker",
                "Spring Platform Shaker",
                "Plate Shaker",
                "Micro Shaker",
                "Solution Shaker",
                "Reagent Shaker",
                "Benchtop Magnetic Shaker"
              ],
              "description": "High-precision laboratory Magnetic Shaker (electromagnetic agitation machine) designed for rapid, homogenous liquid mixing, chemical reagent dissolution, and biological suspension. Features a spring-suspended stainless steel platform, dual digital LCD interface for real-time frequency and timer monitoring, soft-touch TARE and MODE calibration, and maintenance-free electromagnetic drive with zero mechanical wear.",
              "image": "https://www.anglobalservices.com/equipment/laboratory-shaking-machine-manufacturer-products/magnetic-shaker.webp",
              "brand": {
                "@type": "Brand",
                "name": "AN Global Services"
              },
              "manufacturer": {
                "@type": "Organization",
                "name": "AN Global Services",
                "url": "https://www.anglobalservices.com"
              },
              "category": "Laboratory Shaking Machines / Laboratory Mixing Equipment",
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
                "reviewCount": "136",
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
                  "name": "Magnetic Shaker",
                  "item": "https://www.anglobalservices.com/magnetic-shaker"
                }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is a Magnetic Shaker (Mag Shaker / Magnetic Agitator) used for in a laboratory?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A Magnetic Shaker (widely called a Mag Shaker, Magnetic Stirrer, Electromagnetic Shaker, or Lab Solution Mixer) is a benchtop laboratory instrument used to create rapid, uniform mixing and agitation of liquid samples in beakers, microplates, test tubes, and reagent vials. It is vital in biochemistry for enzyme kinetic studies, clinical pathology for blood and serum homogenization, microbiology for bacterial cell suspension, and analytical chemistry for reagent dissolution and titration."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does the spring-mounted electromagnetic shaking platform operate?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Unlike conventional motor-driven shakers with rotating shafts and belts, the Magnetic Shaker utilizes an electromagnetic coil drive coupled with high-tensile spring dampeners. When alternating electromagnetic pulses pass through the internal drive coils, they generate rapid, harmonic oscillation in the spring-suspended stainless steel top plate. This produces high-frequency, uniform agitation across the entire platform surface with zero mechanical gear wear."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the advantages of a magnetic shaker over a traditional rotary or orbital shaker?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The Magnetic Shaker offers several key advantages: 1) Maintenance-free electromagnetic operation with no drive belts or carbon brushes to replace; 2) Whisper-quiet performance (<45 dB); 3) Extremely compact benchtop footprint; 4) Rapid vortex generation suitable for small-to-medium vessels, microplates, and multiple beakers; 5) Digital precision with dual LCD displays for immediate parameter verification."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What vessel types and volumes can be placed on the stainless steel platform?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The corrosion-resistant SS304 top plate supports glass beakers, conical flasks (up to 1000ml), test tube racks, deep-well microplates, and chemical reagent bottles. Non-slip silicone mats or custom magnetic clamp adapters can be placed on the plate to hold various container shapes securely at high shaking frequencies."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can this magnetic shaking machine run continuously for long incubation periods?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Engineered with low-heat electromagnetic coils and an energy-efficient circuit architecture, the unit can operate continuously 24/7 without overheating or transferring heat to sensitive biological solutions. It also features a digital timer mode for automated cycles ranging from 1 minute to 999 minutes."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What calibration, warranty, and technical setup does AN Global Services provide?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AN Global Services delivers complete turnkey support across India. Our engineers calibrate the digital frequency and timer parameters against certified laboratory standards, verify spring tension balancing, provide comprehensive warranty protection, and issue traceable calibration certificates for NABL, ISO 17025, and GLP-compliant testing facilities."
                  }
                }
              ]
            }
          ]
        }
        `}
      </Script>

      {/* Hero Banner Section */}
      <section className="relative w-full bg-gradient-to-r from-[#001c3d] via-[#002f63] to-[#004e8c] text-white py-14 md:py-20 overflow-hidden shadow-md">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Breadcrumbs with interactive dropdown */}
          <ShakerBreadcrumbs
            currentTitle="Magnetic Shaker"
            currentSlug="magnetic-shaker"
          />

          <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-semibold tracking-wide uppercase text-blue-200 mb-4 shadow-sm text-center">
              <Sparkles size={14} className="text-yellow-400 shrink-0" />
              ISO 9001:2015 &amp; CE Certified Laboratory Agitation Standard
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase drop-shadow-sm text-center">
              Magnetic Shaker
            </h1>

            <p className="mt-4 text-base sm:text-lg text-blue-100/90 font-normal leading-relaxed max-w-5xl text-center mx-auto">
              Precision benchtop electromagnetic laboratory shaking machine engineered for uniform solution mixing, reagent dissolution, and sample agitation. Commonly searched as <strong className="font-semibold text-white">Mag Shaker</strong>, <strong className="font-semibold text-white">Magnetic Stirrer</strong>, <strong className="font-semibold text-white">Magnetic Mixer</strong>, <strong className="font-semibold text-white">Electromagnetic Shaker</strong>, <strong className="font-semibold text-white">Lab Shaker</strong>, <strong className="font-semibold text-white">Plate Shaker</strong>, or <strong className="font-semibold text-white">Magnetic Agitator</strong> for clinical diagnostics, biochemistry, pharmaceuticals, and analytical chemistry.
            </p>

            <div className="mt-7 flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm text-blue-100">
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/15 shadow-sm">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" /> High-Frequency Electromagnetic Agitation
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/15 shadow-sm">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" /> Spring-Damped Stainless Steel Top Plate
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/15 shadow-sm">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" /> Dual Digital LCD Screen with TARE &amp; MODE
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
                  src="/equipment/laboratory-shaking-machine-manufacturer-products/magnetic-shaker.webp"
                  alt="Professional Magnetic Shaker Equipment - Benchtop Laboratory Electromagnetic Shaking Machine"
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
                  The <strong className="text-[#0075B6]">Magnetic Shaker</strong> (frequently referred to across modern testing laboratories as an <em>electromagnetic shaker</em>, <em>mag shaker</em>, or <em>benchtop magnetic agitator</em>) represents a next-generation approach to laboratory solution mixing, sample homogenization, and chemical agitation.
                </p>
                <p>
                  Engineered with a solid-state electromagnetic coil drive and a quad-spring suspension platform, this advanced <strong>shaking machine</strong> produces rapid, harmonic liquid oscillations without rotating shafts, mechanical gears, or motor brushes. Its heavy-gauge stainless steel platform delivers smooth, consistent agitation across beakers, culture flasks, test tubes, and microplates, eliminating mechanical wear and delivering virtually silent operation.
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
                      Achieving reproducible mixing kinetics requires precise frequency tuning and stable vibration dampening. Our team provides <strong className="text-[#0a192f]">turnkey laboratory equipment solutions</strong>. We supply the digital magnetic shaker, calibrate the dual LCD speed and timer parameters, verify platform leveling, and supply custom vessel mats and clamps tailored to your laboratory workflow.
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
      <section className="bg-white py-10 sm:py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-[#0a192f] mb-4">How the Electromagnetic Shaking Mechanism Works</h2>
              <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Operating an electromagnetic magnetic shaker combines solid-state physics with high-efficiency mechanical resonance to achieve uniform liquid blending:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Vessel Placement &amp; Tare Function</h3>
                    <p className="text-gray-600 leading-relaxed">Sample beakers, reagent flasks, or microplates are positioned securely onto the spring-suspended stainless steel platform. The front panel TARE button allows zeroing or referencing for quantitative liquid additions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Harmonic Electromagnetic Oscillation</h3>
                    <p className="text-gray-600 leading-relaxed">Upon activation, electronic driver circuits feed alternating current through high-flux magnetic coils beneath the tray. The magnetic field acts directly against the spring assembly, translating electromagnetic pulses into high-frequency, uniform planar oscillations with zero mechanical gear friction.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Dual LCD Display &amp; Mode Regulation</h3>
                    <p className="text-gray-600 leading-relaxed">The bright digital display indicates agitation parameters and time simultaneously. Operators can toggle between continuous 24/7 run mode or automated countdown cycles with instant automatic shut-off upon completion.</p>
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
                    <strong className="block text-lg text-gray-900">Biochemistry &amp; Molecular Biology</strong>
                    <span className="text-gray-600">Assaying enzyme kinetics, resuspending cell pellets, mixing DNA/RNA extraction buffers, and preparing homogenous protein suspensions.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Clinical Pathology &amp; Diagnostic Centers</strong>
                    <span className="text-gray-600">Blood sample anticoagulation mixing, serum dilution preparation, antigen-antibody reagent blending, and hematology test tube agitation.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Pharmaceutical Formulation &amp; Quality Control</strong>
                    <span className="text-gray-600">Dissolving active pharmaceutical ingredients (APIs), preparing homogenous syrups, titrating analytical standards, and solubility testing.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Chemical Synthesis &amp; Academic Institutions</strong>
                    <span className="text-gray-600">General laboratory solution preparation, dissolving difficult chemical solutes, polymer dispersion, and analytical chemistry teaching practicals.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Specifications Cards */}
      <section className="bg-gray-100 py-10 sm:py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#0a192f] mb-4">Equipment Features &amp; Specifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Engineered for vibration-free benchtop stability, zero-wear electromagnetic drive, and digital control accuracy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                  01
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Electromagnetic Drive Architecture</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Solid-State Magnetic Coils:</strong> Zero internal rotating motors, belts, or gears ensures maintenance-free, 100% wear-free longevity.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Quad-Spring Suspension:</strong> Heavy-duty corner spring dampeners absorb parasitic vibration and prevent benchtop creep.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Ultra-Quiet Operation:</strong> Operates at whisper-quiet levels below 45 dB, ideal for quiet clinical and research environments.</li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                  02
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Stainless Steel Platform &amp; Capacity</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-teal-600 mt-0.5">✔</span> <strong>SS304 Brushed Platform:</strong> Premium stainless steel plate resists acids, alkalis, corrosive solvents, and biological fluids.</li>
                  <li className="flex items-start gap-2"><span className="text-teal-600 mt-0.5">✔</span> <strong>Versatile Vessel Compatibility:</strong> Securely accommodates beakers, Erlenmeyer flasks up to 1000ml, test tube racks, and microplates.</li>
                  <li className="flex items-start gap-2"><span className="text-teal-600 mt-0.5">✔</span> <strong>Non-Slip Silicone Pad Option:</strong> High-grip surface mat prevents glassware drift even during maximum agitation intensity.</li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                  03
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Digital Control Interface</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-amber-600 mt-0.5">✔</span> <strong>Dual LCD Digital Display:</strong> Simultaneous readout of agitation frequency, operating parameter, and elapsed test time.</li>
                  <li className="flex items-start gap-2"><span className="text-amber-600 mt-0.5">✔</span> <strong>TARE &amp; MODE Functionality:</strong> Intuitive tactile push buttons allow instant zeroing, parameter switching, and timer setting.</li>
                  <li className="flex items-start gap-2"><span className="text-amber-600 mt-0.5">✔</span> <strong>Microprocessor Stability:</strong> Closed-loop electronic control delivers steady, unvarying oscillation regardless of liquid volume change.</li>
                </ul>
              </div>
            </div>

            {/* Card 4 - Full Width Specs */}
            <div className="bg-[#0a192f] rounded-2xl p-8 shadow-lg md:col-span-2 lg:col-span-3 mt-4 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white mb-6 border-b border-white/20 pb-4">Technical Specifications &amp; Operational Parameters</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Drive Mechanism</div>
                    <div className="text-white font-semibold">Solid-State Electromagnetic Coil Drive</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Suspension Architecture</div>
                    <div className="text-white font-semibold">Quad Heavy-Duty Spring Dampeners</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Platform Material</div>
                    <div className="text-white font-semibold">Brushed Stainless Steel (SS304)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Platform Dimensions</div>
                    <div className="text-white font-semibold">220 mm × 220 mm (Standard Benchtop)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Display Interface</div>
                    <div className="text-white font-semibold">High-Contrast Dual LCD Digital Screen</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Control Keys</div>
                    <div className="text-white font-semibold">Touch TARE &amp; MODE Multi-Function Buttons</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Timer Range</div>
                    <div className="text-white font-semibold">1 to 999 Minutes or Continuous 24/7 Run</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Power Supply &amp; Noise</div>
                    <div className="text-white font-semibold">220–240V AC, 50/60 Hz | &lt; 45 dB Whisper Quiet</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Maintenance & Compliance Section */}
      <section className="bg-white py-10 sm:py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-black text-[#0a192f] mb-4">Comprehensive Maintenance &amp; Calibration Guide</h2>
            <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
              To guarantee consistent liquid vortexing and uninterrupted operation across years of daily analytical use, AN Global Services recommends the following maintenance guidelines:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-[#0075B6] pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Routine Inspections</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Wipe down the stainless steel platform with 70% isopropanol or mild detergent after each use.</li>
                <li>Inspect corner suspension springs for even tension, freedom of motion, and absence of foreign debris.</li>
                <li>Verify that the bottom non-slip rubber suction feet are firmly anchored to the level lab benchtop.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Loading Protocols</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Centric Loading:</strong> Always center heavy liquid vessels on the platform to maintain uniform harmonic resonance.</li>
                <li><strong>Volume Limits:</strong> Never fill open vessels beyond 65% capacity during high-intensity shaking to prevent spillover.</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Annual Calibration &amp; Servicing</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Optical tachometer verification of oscillation frequency and digital display accuracy.</li>
                <li>Electrical insulation, grounding continuity, and power supply surge protection audit.</li>
                <li>Spring alignment check and NABL-traceable calibration certificate revalidation.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Explore Other Machinery Models */}
      <section className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200 py-10 sm:py-12">
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
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0075B6] transition-colors">Rotary Flask Shaker (Orbital Shaker)</h3>
                <p className="text-xs text-gray-500 mt-1.5 line-clamp-2">Precision benchtop orbital shaking machine with universal clamps for microbiology, cell culture, and chemical dissolution.</p>
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
                <span className="inline-block text-[11px] font-bold text-[#0075B6] bg-blue-50 px-2.5 py-0.5 rounded-full mb-2">Particle Size Analysis</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0075B6] transition-colors">Rotap Sieve Shaker (Ro-Tap Shaker)</h3>
                <p className="text-xs text-gray-500 mt-1.5 line-clamp-2">Standardized mechanical tapping and circular motion sieve shaker compliant with ASTM E11 and ISO 3310 for particle grading.</p>
              </div>
              <div className="mt-4 flex items-center text-xs font-semibold text-[#0075B6] group-hover:translate-x-1 transition-transform">
                View Specifications <ArrowRight size={14} className="ml-1" />
              </div>
            </Link>

            <Link
              href="/gyratory-sieve-shaker"
              className="group p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#0075B6] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[11px] font-bold text-[#0075B6] bg-blue-50 px-2.5 py-0.5 rounded-full mb-2">Gyratory Planetary Motion</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0075B6] transition-colors">Gyratory Sieve Shaker (Gyratory Shaker)</h3>
                <p className="text-xs text-gray-500 mt-1.5 line-clamp-2">Heavy-duty motorized gyratory sieve shaker for particle size analysis, aggregate gradation, and soil testing conforming to ASTM C136 &amp; IS 2720.</p>
              </div>
              <div className="mt-4 flex items-center text-xs font-semibold text-[#0075B6] group-hover:translate-x-1 transition-transform">
                View Specifications <ArrowRight size={14} className="ml-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-10 sm:py-12 border-t border-gray-200" id="faqs">
        <div className="max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-[#0075B6] rounded-full mx-auto mb-6"></div>
            <p className="text-gray-500 text-lg">Learn more about our Magnetic Shakers, electromagnetic agitators, and laboratory solution mixing machinery.</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What is a Magnetic Shaker (Mag Shaker / Magnetic Agitator) used for in a laboratory?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                A Magnetic Shaker (commonly called a <strong>mag shaker</strong>, <strong>magnetic stirrer</strong>, <strong>electromagnetic mixer</strong>, or <strong>solution shaker</strong>) provides rapid, uniform agitation to mix, dissolve, and homogenize liquids in beakers, flasks, and sample containers. It is essential in clinical laboratories for blood specimen homogenization, in biochemistry for enzymatic assays, in pharmaceuticals for drug compound dissolution, and in chemical analysis for reagent titration.
              </div>
            </details>
            
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                How does the spring-mounted electromagnetic shaking platform operate?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                The equipment uses an internal solid-state electromagnetic coil driver beneath a stainless steel platform suspended on four heavy-duty dampening springs. Controlled electronic AC pulses create an alternating magnetic field that harmonically vibrates the spring platform. This converts electromagnetic energy into high-frequency, uniform fluid agitation with zero mechanical friction, belts, or gears.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What are the advantages of a magnetic shaker over a traditional rotary or orbital shaker?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Key benefits include: 1) <strong>Maintenance-Free:</strong> No moving mechanical gears, drive belts, or motor brushes that require replacement; 2) <strong>Quiet Operation:</strong> Noise levels below 45 dB ensure a peaceful lab setting; 3) <strong>Compact Footprint:</strong> Fits conveniently on crowded lab benches; 4) <strong>Fast Mixing Kinetics:</strong> Ideal for rapid dissolution of difficult chemical powders and sensitive biologicals.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What vessel types and volumes can be placed on the stainless steel platform?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                The 220 mm × 220 mm brushed SS304 platform accommodates glass beakers (50ml to 1000ml), Erlenmeyer flasks, scintillation vials, deep-well microplates, and multi-tube racks. Silicone high-friction mats and magnetic clamp adapters are available to hold diverse glassware securely in place.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Can this magnetic shaking machine run continuously for long incubation periods?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Yes. Designed with energy-efficient electromagnetic coils that generate minimal heat dissipation, the shaker can operate continuously 24/7 without thermal transfer to temperature-sensitive solutions. It also features a digital timer programmable from 1 to 999 minutes for automated protocol completion.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What calibration, warranty, and technical setup does AN Global Services provide?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                AN Global Services provides complete end-to-end laboratory support. Our service team installs the equipment, calibrates the dual digital LCD frequency and timer controls against certified standards, performs spring alignment, issues NABL-traceable calibration certificates, and provides operator training across India.
              </div>
            </details>
          </div>
        </div>
      </section>
      
    </main>
  );
}
