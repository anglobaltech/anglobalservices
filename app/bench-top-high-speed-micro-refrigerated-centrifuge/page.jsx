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
  title: "Bench Top High Speed Micro Refrigerated Centrifuge | Cold Microcentrifuge - AN Global Services",
  description:
    "Buy high-performance Bench Top High Speed Micro Refrigerated Centrifuge (Cold Microcentrifuge / Low Temperature Micro Centrifuge) engineered for temperature-sensitive sample isolation down to -20°C up to 16,000 RPM. Designed for DNA, RNA, protein purification, and clinical micro-pelleting. Request a quote today.",
  keywords: [
    // Full Product Names
    "Bench Top High Speed Micro Refrigerated Centrifuge",
    "Benchtop High Speed Micro Refrigerated Centrifuge",
    "High Speed Micro Refrigerated Centrifuge",
    "Bench Top Micro Refrigerated Centrifuge",
    "Benchtop Micro Refrigerated Centrifuge",
    "High-Speed Micro Refrigerated Centrifuge",
    // Short, Half, and Popular Industry Search Terms
    "Micro Refrigerated Centrifuge",
    "Cold Microcentrifuge",
    "Cooling Microcentrifuge",
    "Low Temperature Micro Centrifuge",
    "Low Temp Micro Centrifuge",
    "Refrigerated Microcentrifuge",
    "High Speed Cold Microcentrifuge",
    "Microcentrifuge Refrigerated",
    "Cold Lab Microcentrifuge",
    "4 Degree Microcentrifuge",
    "Chilled Microcentrifuge",
    "DNA RNA Microcentrifuge",
    "Molecular Biology Microcentrifuge",
    "PCR Refrigerated Microcentrifuge",
    "Eppendorf Tube Refrigerated Centrifuge",
    "Compact Refrigerated Centrifuge",
    "AN Global Services laboratory equipment"
  ],
  alternates: {
    canonical: "https://www.anglobalservices.com/bench-top-high-speed-micro-refrigerated-centrifuge",
  },
  openGraph: {
    title: "Bench Top High Speed Micro Refrigerated Centrifuge | Cold Microcentrifuge",
    description: "Precision temperature-controlled microcentrifuge for DNA/RNA isolation and protein purification down to -20°C up to 16,000 RPM. Discover refrigerated microcentrifuges by AN Global Services.",
    url: "https://www.anglobalservices.com/bench-top-high-speed-micro-refrigerated-centrifuge",
    siteName: "AN Global Services",
    images: [
      {
        url: "https://www.anglobalservices.com/equipment/centrifuge/bench-top-high-speed-micro-refrigerated-centrifuge.webp",
        width: 1200,
        height: 800,
        alt: "Bench Top High Speed Micro Refrigerated Centrifuge Laboratory Equipment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bench Top High Speed Micro Refrigerated Centrifuge | AN Global Services",
    description: "Explore bench top high-speed micro refrigerated centrifuges engineered for genomics, proteomics, and temperature-critical biochemistry.",
    images: ["https://www.anglobalservices.com/equipment/centrifuge/bench-top-high-speed-micro-refrigerated-centrifuge.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BenchTopHighSpeedMicroRefrigeratedCentrifugePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": "https://www.anglobalservices.com/bench-top-high-speed-micro-refrigerated-centrifuge#product",
        "name": "Bench Top High Speed Micro Refrigerated Centrifuge",
        "alternateName": [
          "Micro Refrigerated Centrifuge",
          "Cold Microcentrifuge",
          "Cooling Microcentrifuge",
          "Low Temperature Micro Centrifuge",
          "Low Temp Micro Centrifuge",
          "Refrigerated Microcentrifuge",
          "High Speed Cold Microcentrifuge",
          "Microcentrifuge Refrigerated",
          "Molecular Biology Microcentrifuge",
          "Chilled Microcentrifuge"
        ],
        "description": "A high-performance compact bench top high-speed micro refrigerated centrifuge engineered for temperature-critical biochemical separation, DNA/RNA extraction, PCR pelleting, and enzyme purification with eco-friendly CFC-free cooling from -20°C to +40°C.",
        "image": "https://www.anglobalservices.com/equipment/centrifuge/bench-top-high-speed-micro-refrigerated-centrifuge.webp",
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
          "reviewCount": "138",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.anglobalservices.com/bench-top-high-speed-micro-refrigerated-centrifuge#breadcrumb",
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
            "item": "https://www.anglobalservices.com/bench-top-high-speed-refrigerated-centrifuge"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Bench Top High Speed Micro Refrigerated Centrifuge",
            "item": "https://www.anglobalservices.com/bench-top-high-speed-micro-refrigerated-centrifuge"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.anglobalservices.com/bench-top-high-speed-micro-refrigerated-centrifuge#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a Bench Top High Speed Micro Refrigerated Centrifuge and why is refrigeration necessary for microcentrifugation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A Bench Top High Speed Micro Refrigerated Centrifuge (widely searched as a Micro Refrigerated Centrifuge, Cold Microcentrifuge, or Low Temperature Micro Centrifuge) combines extreme rotational velocity (up to 16,000 RPM / ~21,500 xg) in a compact benchtop format with active compressor cooling down to -20°C. Spinning micro-volume microtubes (1.5ml / 2.0ml) at high speeds generates intense aerodynamic friction that can rapidly heat samples above 40°C in unchilled units. Active refrigeration continuously guarantees a stable 4°C environment, preventing thermal denaturation of enzymes, heat-induced degradation of genomic DNA/RNA, and loss of antibody activity."
            }
          },
          {
            "@type": "Question",
            "name": "Can I search or purchase this machine by shorthand or half names like Micro Refrigerated Centrifuge or Cold Microcentrifuge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, absolutely. Research scientists, lab technicians, and procurement managers routinely refer to this unit by popular half-names including Micro Refrigerated Centrifuge, Cold Microcentrifuge, Cooling Microcentrifuge, Low Temperature Micro Centrifuge, Low Temp Microcentrifuge, or High Speed Cold Microcentrifuge. All of these terms denote our compact benchtop refrigerated microcentrifuge designed for microtube pellets and temperature-sensitive biological isolation."
            }
          },
          {
            "@type": "Question",
            "name": "What is the operational temperature range and how fast can it pre-cool?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The instrument provides continuous microprocessor-regulated cooling from -20°C to +40°C with an accuracy of ±1°C. It features a dedicated Fast Temp (Pre-Cooling) function that rapidly chills the rotor chamber from ambient laboratory temperature (25°C) to 4°C in under 8 minutes before loading delicate biological specimens."
            }
          },
          {
            "@type": "Question",
            "name": "Does the microcentrifuge reliably maintain 4°C at maximum rotational speed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Engineered with a high-capacity, CFC-free refrigeration compressor, aerodynamically contoured rotor shroud, and dual thermal sensors, our microcentrifuge guarantees that sensitive microtube samples remain at a steady 4°C even during prolonged continuous runs at top velocity of 16,000 RPM."
            }
          },
          {
            "@type": "Question",
            "name": "What rotor types and tube capacities are supported?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The standard configuration accommodates a 24-place fixed-angle aluminum rotor for 1.5ml and 2.0ml microtubes. Compatible adapter sleeves are available for 0.2ml and 0.5ml PCR micro-tubes, as well as an optional 4 x 8-strip PCR rotor for high-throughput molecular diagnostics."
            }
          },
          {
            "@type": "Question",
            "name": "What operator and biocontainment safety features are integrated?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The instrument includes a motorized dual-lid interlock that stays locked while the rotor is in motion, an aerosol-tight biocontainment lid certified for biohazard protection, an electronic dynamic imbalance detection system that halts the drive within milliseconds if unevenly loaded, and an emergency manual lid release in case of power interruption."
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
        id="bench-top-high-speed-micro-refrigerated-centrifuge-schema"
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
            currentTitle="Bench Top High Speed Micro Refrigerated Centrifuge"
            currentSlug="bench-top-high-speed-micro-refrigerated-centrifuge"
          />

          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-semibold tracking-wide uppercase text-blue-200 mb-4 shadow-sm">
              <Sparkles size={14} className="text-yellow-400" />
              Refrigerated &amp; Molecular Biology Series
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase drop-shadow-sm text-center">
              Bench Top High Speed Micro Refrigerated Centrifuge
            </h1>

            <p className="mt-3 text-base sm:text-lg text-blue-100/90 font-normal leading-relaxed max-w-3xl text-center mx-auto">
              Precision temperature-controlled microcentrifuge for molecular biology and biochemistry. Widely identified as <strong className="font-semibold text-white">Micro Refrigerated Centrifuge</strong>, <strong className="font-semibold text-white">Cold Microcentrifuge</strong>, <strong className="font-semibold text-white">Cooling Microcentrifuge</strong>, or <strong className="font-semibold text-white">Low Temperature Micro Centrifuge</strong> for nucleic acid extraction and cold micro-pelleting.
            </p>

            <div className="mt-6 flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm text-blue-100">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md border border-white/10">
                <CheckCircle2 size={15} className="text-emerald-400" /> -20°C to +40°C CFC-Free Cooling
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md border border-white/10">
                <CheckCircle2 size={15} className="text-emerald-400" /> 16,000 RPM / 21,500 xg High Velocity
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md border border-white/10">
                <CheckCircle2 size={15} className="text-emerald-400" /> 24 x 1.5/2.0ml Tube &amp; PCR Strip Capacity
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
                  src="/equipment/centrifuge/bench-top-high-speed-micro-refrigerated-centrifuge.webp"
                  alt="Bench Top High Speed Micro Refrigerated Centrifuge Laboratory Equipment"
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
                  The <strong className="text-[#0075B6]">Bench Top High Speed Micro Refrigerated Centrifuge</strong> (universally recognized across research, clinical diagnostics, and biotechnology as a <strong className="font-semibold text-gray-900">Micro Refrigerated Centrifuge</strong>, <strong className="font-semibold text-gray-900">Cold Microcentrifuge</strong>, or <strong className="font-semibold text-gray-900">Low Temperature Micro Centrifuge</strong>) is a specialized benchtop instrument engineered for the rapid micro-separation of temperature-labile biomolecules.
                </p>
                <p>
                  When spinning micro-centrifuge tubes at extreme velocities exceeding 15,000 RPM, air resistance and rotor turbulence generate significant heat within seconds. Our compact refrigerated microcentrifuge features an <strong className="font-semibold text-gray-900">advanced CFC-free refrigeration unit coupled with an ultra-quiet brushless induction motor</strong>. It guarantees precise 4°C temperature control even at continuous maximum speed (16,000 RPM / 21,500 xg), ensuring pristine integrity for PCR templates, viral RNA, enzymes, and antibody preparations.
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
              <h2 className="text-3xl font-black text-[#0a192f] mb-4">Precision Sub-Zero Micro-Separation &amp; Aerodynamic Cooling</h2>
              <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Protecting micro-volume biological samples under extreme centrifugal forces requires synchronized cooling loops and vibration-free torque:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Rapid Pre-Cooling &amp; Chamber Pull-Down</h3>
                    <p className="text-gray-600 leading-relaxed">The dedicated Fast Temp button engages maximum compressor power, chilling the rotor chamber from ambient 25°C to 4°C in under 8 minutes before inserting temperature-sensitive micro-samples.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">High-G Micro-Pelleting &amp; Phase Partitioning</h3>
                    <p className="text-gray-600 leading-relaxed">Reaching speeds up to 16,000 RPM (21,500 xg), the microcentrifuge tightly sediments nucleic acid precipitates, protein crystals, membrane fractions, and bacterial pellets into firm buttons.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Closed-Loop Active Thermal Compensation</h3>
                    <p className="text-gray-600 leading-relaxed">Continuous digital thermal feedback modulates the compressor cycle in real-time, actively neutralizing rotor friction heat and preserving set temperatures within ±1°C.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-inner">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Key Applications &amp; Research Centers</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Genomics &amp; Molecular Biology</strong>
                    <span className="text-gray-600">Standard workstation for plasmid DNA minipreps, RNA extraction, ethanol precipitation, and PCR template cleanup under cold conditions.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Proteomics &amp; Enzyme Crystallization</strong>
                    <span className="text-gray-600">Essential for recombinant protein isolation, immunoprecipitation, cell lysis clearing, and enzyme assays that denature above 4°C.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Clinical Pathology &amp; Viral Diagnostics</strong>
                    <span className="text-gray-600">Vital for handling blood serum micro-aliquots, viral RNA concentration, hormone testing, and high-risk pathogen centrifugation with biocontainment lids.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Features & Specs Section */}
      <section className="bg-gray-100 py-16 border-t border-gray-200" id="equipment-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#0a192f] mb-4">Equipment Features &amp; Specs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Engineered for cold chain preservation, maximum micro-separation velocity, and laboratory biosecurity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                  01
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Eco-Friendly Micro-Cooling</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>-20°C to +40°C Range:</strong> Continuous temperature control maintains steady 4°C even at continuous 16,000 RPM.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Fast Temp Pre-Cooling:</strong> Dedicated express chilling cycle drops rotor temperature from ambient to 4°C in under 8 minutes.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>CFC-Free Refrigerant:</strong> Uses non-ozone-depleting R134a refrigerant for green lab compliance.</li>
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
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Tri-Display LED Screen:</strong> Simultaneous live readout of Speed (RPM/RCF), Time (min/sec), and Temperature (°C).</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Brushless Induction Motor:</strong> Delivers quiet, frictionless torque with zero carbon dust and maintenance-free longevity.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Splash-Proof Membrane Keypad:</strong> Smooth touch panel resistant to lab aerosols, chemical spills, and disinfectant wiping.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Operator &amp; Biocontainment Safety</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Motorized Dual-Lid Lock:</strong> Electromagnetic interlock keeps lid securely locked until complete rotor standstill.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Aerosol-Tight Bio-Lid:</strong> Certified bio-containment lid seals toxic or infectious sample aerosols inside the rotor.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Electronic Imbalance Cut-Off:</strong> Instantly detects asymmetric tube loading and halts acceleration within milliseconds.</li>
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
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Max Speed &amp; RCF</div>
                    <div className="text-white font-semibold">16,000 RPM | 21,500 xg</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Temperature Range</div>
                    <div className="text-white font-semibold">-20°C to +40°C (±1°C Accuracy)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Rotor Capacity</div>
                    <div className="text-white font-semibold">24 x 1.5/2.0ml | 0.2/0.5ml Adapters | PCR Strips</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Motor &amp; Noise Level</div>
                    <div className="text-white font-semibold">Brushless Induction DC | &lt; 56 dBA Whisper-Quiet</div>
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
            <h2 className="text-3xl font-black text-[#0a192f] mb-4">Comprehensive Maintenance &amp; Calibration Guide</h2>
            <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
              Adhering to strict refrigeration and micro-centrifuge maintenance preserves cooling efficiency, eliminates frost buildup, and maximizes compressor life:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-[#0075B6] pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Condenser Cleaning &amp; Defrost Protocol</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Leave the lid open at the end of each workday to permit moisture evaporation; wipe the stainless steel rotor bowl dry with a lint-free cloth.</li>
                <li>Vacuum dust and lint from the refrigeration condenser ventilation slots once a month to ensure optimal airflow and heat exchange.</li>
                <li>Never use metal scrapers to remove ice; utilize the automatic chamber defrost cycle or allow ambient thawing.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Rotor Pre-Cooling &amp; Aerosol Sealing</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Always engage the Fast Temp cycle to chill the rotor before loading cold microtubes to avoid ambient thermal shock.</li>
                <li>Inspect aerosol-tight rotor lid rubber O-rings regularly; lubricate lightly with laboratory-grade silicone grease to guarantee vacuum seal.</li>
                <li>Always load tubes in diametrically opposed, balanced pairs by weight (within ±0.05 g accuracy).</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Professional Calibration</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Annual optical tachometer verification to confirm that digital LED RPM corresponds accurately to rotor angular velocity.</li>
                <li>Multi-point thermal probe calibration to verify chamber temperature accuracy at -20°C, 4°C, and 20°C under load.</li>
                <li>Regular inspection of electronic lid lock solenoids, motor brake deceleration, and emergency imbalance cut-off sensors.</li>
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
              href="/bench-top-high-speed-refrigerated-centrifuge"
              className="group p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#0075B6] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-[#0075B6] uppercase tracking-wider block mb-1">Refrigerated</span>
                <h3 className="font-bold text-slate-900 group-hover:text-[#0075B6] transition-colors text-base mb-2">
                  Bench Top High Speed Refrigerated
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  Standard benchtop cooling centrifuge with multi-format tube adaptability up to 16,500 RPM for biochemists.
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
                <span className="text-[11px] font-bold text-[#0075B6] uppercase tracking-wider block mb-1">Full Programmable</span>
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
              href="/bench-top-high-speed-micro-centrifuge"
              className="group p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#0075B6] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-[#0075B6] uppercase tracking-wider block mb-1">Non Refrigerated</span>
                <h3 className="font-bold text-slate-900 group-hover:text-[#0075B6] transition-colors text-base mb-2">
                  Bench Top High Speed Micro Centrifuge
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  Compact non-refrigerated microcentrifuge for rapid pelleting of room-temperature biological precipitates.
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
            <p className="text-gray-500 text-lg">Learn more about our Bench Top High Speed Micro Refrigerated Centrifuges.</p>
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
