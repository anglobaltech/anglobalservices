import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles 
} from "lucide-react";
import CentrifugeBreadcrumbs from "@/components/CentrifugeBreadcrumbs";

export const metadata = {
  title: "Bench Top Filtration Centrifuge | Filter Centrifuge Machine - AN Global Services",
  description:
    "High-efficiency bench top filtration centrifuge (filter centrifuge) engineered for pathological, clinical, pharmaceutical & chemical laboratories. Discover compact benchtop filtration centrifuges with precision digital speed control, micro-mesh basket rotors, and solid-liquid separation. Request a quote today.",
  keywords: [
    // Full Product Names
    "Bench Top Filtration Centrifuge",
    "Benchtop Filtration Centrifuge",
    "Bench Top Filter Centrifuge",
    "Benchtop Filter Centrifuge",
    // Short & Half Names (for users searching with partial or common terminology)
    "Filtration Centrifuge",
    "Filter Centrifuge",
    "Pathological Centrifuge",
    "Pathology Centrifuge",
    "Benchtop Centrifuge",
    "Bench Top Centrifuge",
    "Lab Filtration Centrifuge",
    "Bench Filter Centrifuge",
    "Centrifuge Filter",
    "Filtration Machine",
    "Lab Centrifuge Machine",
    "Centrifuge Machine",
    "Tabletop Centrifuge",
    "Basket Centrifuge Benchtop",
    "Centrifugal Filter",
    "Solid Liquid Separation Centrifuge",
    "Clinical Filtration Centrifuge",
    "Pharmaceutical Filter Centrifuge",
    "Pathological Lab Equipment",
    "AN Global Services laboratory equipment"
  ],
  alternates: {
    canonical: "https://www.anglobalservices.com/bench-top-filtration-centrifuge",
  },
  openGraph: {
    title: "Bench Top Filtration Centrifuge | High-Performance Lab Filter Centrifuge",
    description: "Engineered for precision solid-liquid separation and pathological analysis. Discover bench top filtration centrifuges by AN Global Services.",
    url: "https://www.anglobalservices.com/bench-top-filtration-centrifuge",
    siteName: "AN Global Services",
    images: [
      {
        url: "https://www.anglobalservices.com/equipment/centrifuge/bench-top-filtration-centrifuge.webp",
        width: 1200,
        height: 800,
        alt: "Bench Top Filtration Centrifuge Laboratory Equipment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bench Top Filtration Centrifuge | AN Global Services",
    description: "Explore bench top filtration centrifuges engineered for pathological, chemical, and clinical laboratory separations.",
    images: ["https://www.anglobalservices.com/equipment/centrifuge/bench-top-filtration-centrifuge.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BenchTopFiltrationCentrifugePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": "https://www.anglobalservices.com/bench-top-filtration-centrifuge#product",
        "name": "Bench Top Filtration Centrifuge",
        "alternateName": [
          "Filtration Centrifuge",
          "Filter Centrifuge",
          "Benchtop Filtration Centrifuge",
          "Pathological Centrifuge",
          "Pathology Centrifuge",
          "Benchtop Centrifuge",
          "Lab Filter Centrifuge",
          "Centrifugal Filtration Unit",
          "Basket Centrifuge Benchtop"
        ],
        "description": "A high-precision bench top filtration centrifuge engineered for rapid solid-liquid separation, pathological sample filtration, chemical clarification, and clinical diagnostics with microprocessor control and stainless steel basket rotor.",
        "image": "https://www.anglobalservices.com/equipment/centrifuge/bench-top-filtration-centrifuge.webp",
        "brand": {
          "@type": "Brand",
          "name": "AN Global Services"
        },
        "category": "Laboratory Equipment > Centrifuges > Pathological",
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
          "reviewCount": "148",
          "bestRating": "5"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.anglobalservices.com/bench-top-filtration-centrifuge#breadcrumb",
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
            "name": "Laboratory Equipment",
            "item": "https://www.anglobalservices.com/laboratory-equipment-and-setup-services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Centrifuge",
            "item": "https://www.anglobalservices.com/bench-top-low-speed-centrifuge"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Bench Top Filtration Centrifuge",
            "item": "https://www.anglobalservices.com/bench-top-filtration-centrifuge"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.anglobalservices.com/bench-top-filtration-centrifuge#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a Bench Top Filtration Centrifuge and how does it work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A Bench Top Filtration Centrifuge (also frequently termed a filtration centrifuge or filter centrifuge) is a specialized compact laboratory instrument designed for rapid solid-liquid separation. Unlike traditional sedimentation centrifuges that separate materials based strictly on specific gravities within sealed tubes, a filtration centrifuge utilizes a perforated basket rotor lined with a filter medium. Centrifugal force pushes the liquid phase through the filter membrane, retaining solid cakes within the basket while collecting pure filtrate in the outer casing."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between a Filtration Centrifuge and a standard sedimentation centrifuge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Standard laboratory centrifuges rely purely on centrifugal sedimentation, where denser particles settle to the bottom of closed tubes to form a pellet. A filtration centrifuge combines centrifugal force with mechanical filtration: fluid is actively expelled through a porous barrier under high G-force. This provides significantly drier solid cakes, complete liquid recovery, and drastically reduced cycle times for crystalline slurries, cell suspensions, and pathological precipitates."
            }
          },
          {
            "@type": "Question",
            "name": "Why is this unit categorized under Pathological Centrifuges?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In clinical and pathological laboratories, doctors and technicians routinely need to extract clear supernatant or isolate micro-solids from biological specimens (such as urine sediment, proteinaceous precipitates, microbiological cultures, and cellular lysates). The bench top filtration centrifuge delivers reproducible, residue-free separation without disturbing delicate suspended matter, making it ideal for pathological diagnostic protocols."
            }
          },
          {
            "@type": "Question",
            "name": "Can I search or order this machine by its short name like Filter Centrifuge or Benchtop Filter?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Industry professionals commonly refer to this equipment by various half-names and abbreviations, including Filter Centrifuge, Filtration Centrifuge, Benchtop Filter, Centrifugal Filter Machine, Basket Centrifuge, or Pathological Centrifuge. All of these terms denote the same benchtop centrifugal filtration system engineered for solid-liquid extraction."
            }
          },
          {
            "@type": "Question",
            "name": "What sample volumes and basket capacities are available?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our bench top filtration centrifuges accommodate a range of interchangeable stainless steel perforated baskets and filter carriers, with operational capacities ranging from micro-sample batches (50 ml to 250 ml) up to batch capacities of 500 ml to 1000 ml depending on the rotor configuration."
            }
          },
          {
            "@type": "Question",
            "name": "What safety mechanisms are built into the bench top filtration centrifuge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The instrument is equipped with an electronic safety lid interlock that prevents operation while the lid is open, automatic dynamic imbalance detection that immediately shuts down the motor upon uneven loading, over-speed protection, thermal motor overload protection, and an emergency manual stop button."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="w-full bg-gray-50 min-h-screen text-slate-800 antialiased selection:bg-[#0075B6] selection:text-white">
      {/* Schema Markup */}
      <Script
        id="bench-top-filtration-centrifuge-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Banner Section */}
      <section className="relative w-full bg-gradient-to-r from-[#001c3d] via-[#002f63] to-[#004e8c] text-white py-14 md:py-20 overflow-hidden shadow-md">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Breadcrumbs with interactive dropdowns */}
          <CentrifugeBreadcrumbs
            category="Pathological"
            currentTitle="Bench Top Filtration Centrifuge"
            currentSlug="bench-top-filtration-centrifuge"
          />

          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-semibold tracking-wide uppercase text-blue-200 mb-4 shadow-sm">
              <Sparkles size={14} className="text-yellow-400" />
              Pathological & Separation Series
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase drop-shadow-sm text-center">
              Bench Top Filtration Centrifuge
            </h1>

            <p className="mt-3 text-base sm:text-lg text-blue-100/90 font-normal leading-relaxed max-w-3xl text-center mx-auto">
              High-efficiency laboratory solid-liquid filtration centrifuge. Commonly sought as <strong className="font-semibold text-white">Filtration Centrifuge</strong>, <strong className="font-semibold text-white">Filter Centrifuge</strong>, or <strong className="font-semibold text-white">Pathological Centrifuge</strong> for clinical and industrial applications.
            </p>

            <div className="mt-6 flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm text-blue-100">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md border border-white/10">
                <CheckCircle2 size={15} className="text-emerald-400" /> Precision Basket Filtration
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md border border-white/10">
                <CheckCircle2 size={15} className="text-emerald-400" /> Brushless Induction Motor
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md border border-white/10">
                <CheckCircle2 size={15} className="text-emerald-400" /> ISO & CE Certified Engineering
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
                  src="/equipment/centrifuge/bench-top-filtration-centrifuge.webp"
                  alt="Bench Top Filtration Centrifuge Equipment"
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
                  The <strong className="text-[#0075B6]">Bench Top Filtration Centrifuge</strong> (commonly referred to as a filtration centrifuge or filter centrifuge) is a specialized class of centrifugal equipment engineered specifically for high-efficiency solid-liquid separation.
                </p>
                <p>
                  Unlike conventional centrifuges that rely strictly on gravitational sedimentation in closed test tubes, this system utilizes a <strong className="font-semibold text-gray-900">perforated basket rotor lined with filter media</strong>. Under substantial centrifugal acceleration, liquid phases readily pass through the filtration boundary, leaving clear cakes of concentrated solids within the basket.
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
                      We provide comprehensive delivery, on-site benchtop leveling, tachometer speed calibration, custom basket filter liner selection, and staff training across India and global destinations.
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
              <h2 className="text-3xl font-black text-[#0a192f] mb-4">Precision Basket Separation</h2>
              <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Unlike conventional sedimentation, centrifugal filtration actively drives liquids through a permeable barrier under high G-force:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sample Introduction</h3>
                    <p className="text-gray-600 leading-relaxed">The slurry, biological fluid, or chemical crystal suspension is introduced into the rotating stainless steel basket lined with custom-selected filter media.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Centrifugal Permeation</h3>
                    <p className="text-gray-600 leading-relaxed">Centrifugal acceleration forces the liquid phase outwards through the porous filtration boundary into the outer containment chamber, leaving solids behind.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Cake Consolidation & Recovery</h3>
                    <p className="text-gray-600 leading-relaxed">Solids form an evenly packed, de-watered cake on the basket perimeter, while pure, crystal-clear filtrate is completely discharged through the drainage spout.</p>
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
                    <strong className="block text-lg text-gray-900">Pathological & Clinical Laboratories</strong>
                    <span className="text-gray-600">Essential for residue-free clarification of cellular lysates, urine sediments, and proteinaceous biological samples.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Pharmaceutical & Chemical Units</strong>
                    <span className="text-gray-600">Widely utilized for de-watering crystalline active ingredients, recovering synthetic catalysts, and mother liquor separation.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Biotechnology & Research Institutes</strong>
                    <span className="text-gray-600">Ideal for gentle harvesting of intact yeast, microalgae, and suspended cell cultures without shearing delicate cell envelopes.</span>
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
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Designed for rapid solid-liquid separation, sample integrity, and long motor life.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                  01
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Dependable Drive & Basket</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Brushless Induction Motor:</strong> Delivers quiet, maintenance-free, and consistent torque without carbon brush contamination.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>SS 304/316 Basket:</strong> Perforated stainless steel basket and inner bowl resist acids, alkalis, ethanol, and disinfectants.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Stable Benchtop Footing:</strong> Heavy base and vibration-absorbing rubber suction feet prevent walking during separation runs.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Precision Control Dashboard</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Microprocessor Regulation:</strong> Closed-loop feedback keeps rotational speed accurate to ±20 RPM regardless of load density.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Dual RPM / RCF Live Display:</strong> High-contrast digital screen allows seamless monitoring of speed and centrifugal force.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Digital Timer:</strong> Programmable run times from 1 to 99 minutes with continuous hold option.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Operator Safety & Protection</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Electronic Lid Interlock:</strong> Ensures the lid cannot be opened while the filtration basket is rotating.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Imbalance Detector:</strong> Multi-axis sensors automatically shut down the motor upon uneven sample distribution.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Emergency Manual Release:</strong> Convenient override feature to retrieve samples safely during power outages.</li>
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
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Operating Speed</div>
                    <div className="text-white font-semibold">Up to 4,000 – 6,000 RPM</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Max Centrifugal Force</div>
                    <div className="text-white font-semibold">Up to 3,500 – 5,200 xg</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Motor Type</div>
                    <div className="text-white font-semibold">Brushless Induction Drive</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Basket & Chamber</div>
                    <div className="text-white font-semibold">Stainless Steel SS 304 / SS 316</div>
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
              Proper operational care and routine servicing ensure peak separation efficiency, dry cake consistency, and decades of motor life for your bench top filtration centrifuge:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-[#0075B6] pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Filter Liner Placement & Cleaning</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Ensure filter cloth or mesh liner fits flush against the basket perimeter without wrinkles or overlapping gaps.</li>
                <li>Rinse the perforated basket and drainage outlet with warm water or neutral detergent after every batch to prevent cake residue clogging.</li>
                <li>Inspect mesh integrity regularly to prevent sample bypassing.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Chamber & Drainage Care</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Keep the liquid discharge manifold and outlet tubing free from sediment accumulation or crystalline precipitates.</li>
                <li>Decontaminate the stainless steel bowl with approved laboratory sanitizers or 70% isopropanol.</li>
                <li>Check spindle seals periodically to guarantee fluid remains completely isolated from the drive motor.</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Professional Calibration</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Annual optical tachometer verification to confirm digital RPM readings match physical rotational speed.</li>
                <li>Dynamic imbalance sensor and electronic lid safety interlock functional checks.</li>
                <li>Electrical insulation and motor drive bearing inspection by certified technicians.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Centrifuges (Explore Other Centrifuges) */}
      <section className="bg-slate-50 py-14 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <span className="text-[#0075B6] font-bold text-xs uppercase tracking-widest block mb-1">
                Centrifuge Portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a192f]">
                Explore Other Centrifuges
              </h2>
            </div>
            <Link
              href="/equipments-and-machinery"
              className="text-[#0075B6] hover:text-[#002B7F] font-bold text-sm flex items-center gap-1.5 transition-colors"
            >
              View Full Equipment Catalog <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Link
              href="/bench-top-low-speed-centrifuge"
              className="group p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#0075B6] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-[#0075B6] uppercase tracking-wider block mb-1">Clinical</span>
                <h3 className="font-bold text-slate-900 group-hover:text-[#0075B6] transition-colors text-base mb-2">
                  Bench Top Low Speed Centrifuge
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  Gentle, dependable clinical centrifuge for routine blood component separation and PRP.
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
                  High-velocity microcentrifuge designed for subcellular organelles and genomics research.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#0075B6] mt-4 flex items-center gap-1">
                Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/bench-top-urine-sedimentation-centrifuge"
              className="group p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#0075B6] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-[#0075B6] uppercase tracking-wider block mb-1">Pathological</span>
                <h3 className="font-bold text-slate-900 group-hover:text-[#0075B6] transition-colors text-base mb-2">
                  Bench Top Urine Sedimentation Centrifuge
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  Optimized gentle centrifugal acceleration and soft braking for microscopic urine sediment analysis.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#0075B6] mt-4 flex items-center gap-1">
                Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/cell-smear-centrifuge"
              className="group p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#0075B6] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-[#0075B6] uppercase tracking-wider block mb-1">Pathological</span>
                <h3 className="font-bold text-slate-900 group-hover:text-[#0075B6] transition-colors text-base mb-2">
                  Cell Smear Centrifuge
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  Precision monolayer cell smear preparation directly onto glass slides for cytopathology and hematology.
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
            <p className="text-gray-500 text-lg">Learn more about our bench top filtration centrifuges.</p>
          </div>

          <div className="space-y-4">
            {schemaData["@graph"][2].mainEntity.map((faq, index) => (
              <details
                key={index}
                className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300"
              >
                <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                  {faq.name}
                  <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                  {faq.acceptedAnswer.text}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
