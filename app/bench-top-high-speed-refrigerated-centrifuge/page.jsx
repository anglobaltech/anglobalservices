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
  title: "Bench Top High Speed Refrigerated Centrifuge | Cold Centrifuge - AN Global Services",
  description:
    "High-performance Bench Top High Speed Refrigerated Centrifuge (Cold Centrifuge / Cooling Centrifuge) engineered for temperature-sensitive sample separation down to -20°C up to 16,500 RPM. Designed for DNA, RNA, protein isolation, and clinical biochemistry. Request a quote today.",
  keywords: [
    // Full Product Names
    "Bench Top High Speed Refrigerated Centrifuge",
    "Benchtop High Speed Refrigerated Centrifuge",
    "High Speed Refrigerated Centrifuge",
    "Bench Top Refrigerated Centrifuge",
    "Benchtop Refrigerated Centrifuge",
    "High-Speed Refrigerated Centrifuge",
    // Short & Half Names (for users searching with partial or common terminology)
    "Refrigerated Centrifuge",
    "Cold Centrifuge",
    "Cooling Centrifuge",
    "High Speed Cold Centrifuge",
    "Chilled Centrifuge",
    "Refrigerated Benchtop Centrifuge",
    "Refrigerated Lab Centrifuge",
    "Molecular Biology Centrifuge",
    "4 Degree Centrifuge",
    "Centrifuge with Cooling",
    "Microcentrifuge Refrigerated",
    "DNA RNA Centrifuge",
    "Protein Isolation Centrifuge",
    "AN Global Services laboratory equipment"
  ],
  alternates: {
    canonical: "https://www.anglobalservices.com/bench-top-high-speed-refrigerated-centrifuge",
  },
  openGraph: {
    title: "Bench Top High Speed Refrigerated Centrifuge | Cold Laboratory Centrifuge",
    description: "Engineered for rapid chilling, sub-ambient sample protection, and high-velocity micro-separations. Discover refrigerated centrifuges by AN Global Services.",
    url: "https://www.anglobalservices.com/bench-top-high-speed-refrigerated-centrifuge",
    siteName: "AN Global Services",
    images: [
      {
        url: "https://www.anglobalservices.com/equipment/centrifuge/bench-top-high-speed-refrigerated-centrifuge.webp",
        width: 1200,
        height: 800,
        alt: "Bench Top High Speed Refrigerated Centrifuge Laboratory Equipment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bench Top High Speed Refrigerated Centrifuge | AN Global Services",
    description: "Explore bench top high-speed refrigerated centrifuges engineered for molecular biology and temperature-critical biochemistry.",
    images: ["https://www.anglobalservices.com/equipment/centrifuge/bench-top-high-speed-refrigerated-centrifuge.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BenchTopHighScoreRefrigeratedCentrifugePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": "https://www.anglobalservices.com/bench-top-high-speed-refrigerated-centrifuge#product",
        "name": "Bench Top High Speed Refrigerated Centrifuge",
        "alternateName": [
          "Refrigerated Centrifuge",
          "Cold Centrifuge",
          "Cooling Centrifuge",
          "High Speed Refrigerated Centrifuge",
          "Benchtop Cold Centrifuge",
          "Molecular Biology Refrigerated Centrifuge",
          "Chilled Laboratory Centrifuge"
        ],
        "description": "A high-performance bench top high-speed refrigerated centrifuge engineered for temperature-critical biochemical separation, DNA/RNA extraction, protein purification, and subcellular fractionation with eco-friendly CFC-free cooling from -20°C to +40°C.",
        "image": "https://www.anglobalservices.com/equipment/centrifuge/bench-top-high-speed-refrigerated-centrifuge.webp",
        "brand": {
          "@type": "Brand",
          "name": "AN Global Services"
        },
        "category": "Laboratory Equipment > Centrifuges > Refrigerated",
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
          "reviewCount": "146",
          "bestRating": "5"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.anglobalservices.com/bench-top-high-speed-refrigerated-centrifuge#breadcrumb",
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
            "name": "Centrifuges",
            "item": "https://www.anglobalservices.com/programmable-high-speed-refrigerated-centrifuge"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Bench Top High Speed Refrigerated Centrifuge",
            "item": "https://www.anglobalservices.com/bench-top-high-speed-refrigerated-centrifuge"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.anglobalservices.com/bench-top-high-speed-refrigerated-centrifuge#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a Bench Top High Speed Refrigerated Centrifuge and why is refrigeration necessary?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A Bench Top High Speed Refrigerated Centrifuge (widely searched as a Refrigerated Centrifuge, Cold Centrifuge, or Cooling Centrifuge) combines high-velocity centrifugal acceleration (up to 16,500 RPM / ~21,000 xg) with active compressor cooling down to -20°C. High-speed spinning generates significant aerodynamic frictional heat inside the rotor chamber. Active refrigeration maintains temperatures strictly at 4°C or below, preventing thermal denaturation of enzymes, degradation of heat-labile proteins, and fragmentation of genomic DNA/RNA."
            }
          },
          {
            "@type": "Question",
            "name": "Can I search or purchase this machine by shorthand or half names like Refrigerated Centrifuge or Cold Centrifuge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, absolutely. Research scientists, lab technicians, and procurement managers routinely refer to this unit by popular half-names including Refrigerated Centrifuge, Cold Centrifuge, Cooling Centrifuge, Chilled Centrifuge, or High Speed Cold Centrifuge. All of these terms denote our benchtop refrigerated centrifugal separation workstation equipped with digital temperature control."
            }
          },
          {
            "@type": "Question",
            "name": "What is the operational temperature range and how fast can it pre-cool?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The instrument offers a continuous temperature regulation span from -20°C to +40°C with an accuracy of ±1°C. It features a dedicated 'Fast Temp' (Pre-Cooling) function that rapidly chills the rotor chamber from ambient room temperature (25°C) to 4°C in under 10 minutes prior to loading temperature-sensitive specimens."
            }
          },
          {
            "@type": "Question",
            "name": "Does the centrifuge reliably maintain 4°C at maximum rotational speed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Engineered with a heavy-duty, CFC-free refrigeration compressor and optimized chamber airflow dynamics, our centrifuge guarantees that sensitive biological samples remain at a stable 4°C even during sustained continuous runs at top velocity."
            }
          },
          {
            "@type": "Question",
            "name": "What rotor types and tube volumes can be operated in this unit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The centrifuge supports interchangeable fixed-angle and swing-out rotor configurations, including 24x1.5/2.0ml aerosol-tight microtubes, 4x8 PCR tube strips, 12x5ml snap-cap tubes, and adapters for 15ml and 50ml conical falcon tubes."
            }
          },
          {
            "@type": "Question",
            "name": "What safety and biosecurity features protect laboratory operators?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The instrument features an electronic dual-latch motorized lid interlock, an aerosol-tight biocontainment rotor lid with certified O-ring seal, dynamic gyroscopic imbalance detection that immediately aborts rotation upon load asymmetry, and over-temperature safety cut-offs."
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
        id="bench-top-high-speed-refrigerated-centrifuge-schema"
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
            category="Refrigerated"
            currentTitle="Bench Top High Speed Refrigerated Centrifuge"
            currentSlug="bench-top-high-speed-refrigerated-centrifuge"
          />

          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-semibold tracking-wide uppercase text-blue-200 mb-4 shadow-sm">
              <Sparkles size={14} className="text-yellow-400" />
              Refrigerated & Molecular Biology Series
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase drop-shadow-sm text-center">
              Bench Top High Speed Refrigerated Centrifuge
            </h1>

            <p className="mt-3 text-base sm:text-lg text-blue-100/90 font-normal leading-relaxed max-w-3xl text-center mx-auto">
              Precision temperature-controlled laboratory centrifuge for molecular biology and biochemistry. Widely identified as <strong className="font-semibold text-white">Refrigerated Centrifuge</strong>, <strong className="font-semibold text-white">Cold Centrifuge</strong>, <strong className="font-semibold text-white">Cooling Centrifuge</strong>, or <strong className="font-semibold text-white">High Speed Refrigerated Centrifuge</strong> for DNA/RNA purification and protein isolation.
            </p>

            <div className="mt-6 flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm text-blue-100">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md border border-white/10">
                <CheckCircle2 size={15} className="text-emerald-400" /> -20°C to +40°C CFC-Free Cooling
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md border border-white/10">
                <CheckCircle2 size={15} className="text-emerald-400" /> 16,500 RPM / 21,300 xg High Velocity
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
              <div className="absolute inset-0 opacity-10 mix-blend-multiply" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #0075B6 1px, transparent 0)", backgroundSize: "16px 16px" }}></div>
              <div className="relative w-full h-full max-w-[400px] aspect-[4/5]">
                <Image
                  src="/equipment/centrifuge/bench-top-high-speed-refrigerated-centrifuge.webp"
                  alt="Bench Top High Speed Refrigerated Centrifuge Equipment"
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
                  The <strong className="text-[#0075B6]">Bench Top High Speed Refrigerated Centrifuge</strong> (commonly known across research and biotechnology as a <strong className="font-semibold text-gray-900">Refrigerated Centrifuge</strong> or <strong className="font-semibold text-gray-900">Cold Centrifuge</strong>) is an indispensable workstation designed to isolate labile biological materials without thermal stress.
                </p>
                <p>
                  At high centrifugal speeds exceeding 15,000 RPM, air friction rapidly drives chamber temperatures upward, threatening the integrity of sensitive proteins, nucleic acids, and cell organelles. Our benchtop refrigerated system incorporates a <strong className="font-semibold text-gray-900">high-efficiency CFC-free compressor and smart thermal sensor regulation</strong>, continuously maintaining a stable 4°C environment at maximum velocity while delivering rapid pre-cooling and whisper-quiet performance.
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
                      We provide direct on-site benchtop installation, optical tachometer speed validation, thermal probe temperature calibration down to -20°C, custom rotor aerosol lid fitting, and hands-on laboratory staff training across India and international facilities.
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
              <h2 className="text-3xl font-black text-[#0a192f] mb-4">Precision Sub-Zero Refrigeration & High-G Dynamics</h2>
              <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Preserving biological viability at extreme angular velocities requires synchronized refrigeration and aerodynamic thermal management:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Pre-Cooling & Chamber Stabilization</h3>
                    <p className="text-gray-600 leading-relaxed">The &apos;Fast Temp&apos; function initiates rapid compressor chilling, pulling down bowl and rotor temperatures to 4°C within minutes before sample introduction.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">High-G Pellet Fractionation</h3>
                    <p className="text-gray-600 leading-relaxed">Operating up to 16,500 RPM (over 21,000 xg), the unit accelerates rapidly to sediment cellular membranes, genomic DNA, RNA pellets, or viral particles into clean buttons.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Active Thermal Safeguard</h3>
                    <p className="text-gray-600 leading-relaxed">Closed-loop temperature sensors continuously counteract aerodynamic friction, holding the set temperature within ±1°C throughout high-speed spins and soft braking.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-inner">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Key Users & Research Facilities</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Molecular Biology & Genomics Laboratories</strong>
                    <span className="text-gray-600">The daily operational standard for PCR template preparation, plasmid DNA minipreps, and RNA extraction without enzyme breakdown.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Biochemistry & Proteomics Centers</strong>
                    <span className="text-gray-600">Essential for recombinant protein precipitation, enzyme kinetics harvesting, and antibody purification at sub-ambient temperatures.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Clinical Pathology & Diagnostic Centers</strong>
                    <span className="text-gray-600">Crucial for handling thermolabile blood markers, hormone assays, coagulation proteins, and viral transport media.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Specifications Cards */}
      <section className="bg-gray-100 py-16 border-t border-gray-200" id="equipment-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#0a192f] mb-4">Equipment Features & Specs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Engineered for cold chain preservation, maximum separation velocity, and biosecurity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                  01
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Eco-Friendly Cooling System</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>-20°C to +40°C Range:</strong> Powerful compressor delivers wide temperature control with continuous cooling even at peak speed.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Fast Pre-Cooling:</strong> Dedicated rapid-chill button drops rotor chamber temperature from ambient to 4°C in minutes.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>CFC-Free Refrigerant:</strong> Uses eco-friendly non-ozone-depleting refrigerant for green laboratory compliance.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Digital Microprocessor Dashboard</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Tri-Display LED Screen:</strong> Simultaneous real-time readout of Speed (RPM/RCF), Time (min/sec), and Temperature (°C).</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Brushless Induction Motor:</strong> Delivers quiet, frictionless torque up to 16,500 RPM with zero carbon brush maintenance.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Wipe-Clean Membrane Keypad:</strong> Fluid-resistant panel protects internal circuits from splashes and condensation.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Operator & Biocontainment Safety</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Motorized Lid Interlock:</strong> Electronic lock prevents lid opening while the rotor is spinning and halts if forced.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Aerosol-Tight Rotor Lid:</strong> Certified biocontainment lid contains hazardous pathogen aerosols and chemical vapors.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Dynamic Imbalance Sensor:</strong> Automatically aborts spin cycle within milliseconds upon uneven tube loading.</li>
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
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Max Speed & RCF</div>
                    <div className="text-white font-semibold">16,500 RPM | 21,300 xg</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Temperature Range</div>
                    <div className="text-white font-semibold">-20°C to +40°C (±1°C Accuracy)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Rotor Capacity</div>
                    <div className="text-white font-semibold">24 x 1.5/2.0ml | Falcon & PCR Strips</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Motor & Refrigerant</div>
                    <div className="text-white font-semibold">Brushless DC | CFC-Free R134a</div>
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
              Adhering to strict refrigeration and high-speed maintenance preserves cooling efficiency, eliminates frost buildup, and maximizes compressor life:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-[#0075B6] pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Condenser Cleaning & Defrost Protocol</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Leave the lid open at the end of each day to allow condensation to evaporate; wipe the stainless steel chamber dry with a soft cloth.</li>
                <li>Vacuum dust from the refrigeration condenser ventilation grills every month to maintain optimum heat dissipation.</li>
                <li>Never use sharp metal scrapers to chip away frost; always use the automatic defrost cycle.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Rotor Pre-Cooling & Aerosol Sealing</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Pre-cool the rotor using the &apos;Fast Temp&apos; function before loading chilled samples to prevent ambient warmth transfer.</li>
                <li>Inspect aerosol-tight rotor lid O-rings regularly; apply a thin film of silicone grease to maintain vacuum integrity.</li>
                <li>Always balance tubes symmetrically across the rotor axis by weight (within ±0.1 g).</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Professional Calibration</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Annual optical tachometer verification to confirm that digital display RPM corresponds accurately with physical rotor rotation.</li>
                <li>Multi-point thermal probe calibration to verify chamber temperature accuracy at -20°C, 4°C, and 20°C.</li>
                <li>Test electronic lid interlock, motor brake electronics, and automatic imbalance cut-off systems for laboratory safety compliance.</li>
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
              href="/programmable-high-speed-refrigerated-centrifuge"
              className="group p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#0075B6] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-[#0075B6] uppercase tracking-wider block mb-1">Refrigerated</span>
                <h3 className="font-bold text-slate-900 group-hover:text-[#0075B6] transition-colors text-base mb-2">
                  Programmable High Speed Refrigerated
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  Microprocessor programmable cooling centrifuge with customizable speed and acceleration profiles up to 20,000 RPM.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#0075B6] mt-4 flex items-center gap-1">
                Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/programmable-large-capacity-refrigerated-centrifuge"
              className="group p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#0075B6] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-[#0075B6] uppercase tracking-wider block mb-1">Refrigerated</span>
                <h3 className="font-bold text-slate-900 group-hover:text-[#0075B6] transition-colors text-base mb-2">
                  Programmable Large Capacity Refrigerated
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  Heavy-duty refrigerated floor/benchtop system with massive multi-tube swing-out carriers for clinical blood banks.
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
                  High-velocity microcentrifuge designed for non-refrigerated rapid pelleting of biological suspensions.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#0075B6] mt-4 flex items-center gap-1">
                Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/bench-top-filtration-centrifuge"
              className="group p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#0075B6] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-[#0075B6] uppercase tracking-wider block mb-1">Pathological</span>
                <h3 className="font-bold text-slate-900 group-hover:text-[#0075B6] transition-colors text-base mb-2">
                  Bench Top Filtration Centrifuge
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  Precision solid-liquid separation with perforated basket rotor for clinical, chemical, and pharmaceutical labs.
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
            <p className="text-gray-500 text-lg">Learn more about our Bench Top High Speed Refrigerated Centrifuges.</p>
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
