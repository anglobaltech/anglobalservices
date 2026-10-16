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
  title: "Bench Top Low Capacity Refrigerated Centrifuge | Cold Centrifuge - AN Global Services",
  description:
    "Buy high-performance Bench Top Low Capacity Refrigerated Centrifuge (Bench Top Refrigerated Centrifuge / Cold Centrifuge) engineered for space-efficient laboratory sample isolation down to -20°C up to 20,000 RPM. Designed for DNA, RNA, protein isolation, and clinical biochemistry. Request a quote today.",
  keywords: [
    // Full Product Names
    "Bench Top Low Capacity Refrigerated Centrifuge",
    "Benchtop Low Capacity Refrigerated Centrifuge",
    "Low Capacity Refrigerated Centrifuge",
    "Bench Top Refrigerated Centrifuge",
    "Benchtop Refrigerated Centrifuge",
    "High Speed Low Capacity Refrigerated Centrifuge",
    // Short, Half, and Popular Industry Search Terms
    "Cold Centrifuge",
    "Cooling Centrifuge",
    "Refrigerated Centrifuge",
    "Compact Refrigerated Centrifuge",
    "Low Capacity Cooling Centrifuge",
    "Low Volume Refrigerated Centrifuge",
    "Refrigerated Benchtop Centrifuge",
    "20000 RPM Refrigerated Centrifuge",
    "4 Degree Cold Centrifuge",
    "Chilled Laboratory Centrifuge",
    "DNA RNA Cold Centrifuge",
    "Molecular Biology Cold Centrifuge",
    "AN Global Services laboratory equipment"
  ],
  alternates: {
    canonical: "https://www.anglobalservices.com/bench-top-low-capacity-refrigerated-centrifuge",
  },
  openGraph: {
    title: "Bench Top Low Capacity Refrigerated Centrifuge | Cold Centrifuge",
    description: "Compact temperature-controlled laboratory centrifuge engineered for low-to-medium tube volumes and high-velocity pelleting down to -20°C up to 20,000 RPM. Discover centrifuges by AN Global Services.",
    url: "https://www.anglobalservices.com/bench-top-low-capacity-refrigerated-centrifuge",
    siteName: "AN Global Services",
    images: [
      {
        url: "https://www.anglobalservices.com/equipment/centrifuge/bench-top-low-capacity-refrigerated-centrifuge.webp",
        width: 1200,
        height: 800,
        alt: "Bench Top Low Capacity Refrigerated Centrifuge Laboratory Equipment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bench Top Low Capacity Refrigerated Centrifuge | AN Global Services",
    description: "Explore bench top low capacity refrigerated centrifuges engineered for space-efficient research, clinical biochemistry, and molecular biology.",
    images: ["https://www.anglobalservices.com/equipment/centrifuge/bench-top-low-capacity-refrigerated-centrifuge.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BenchTopLowCapacityRefrigeratedCentrifugePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": "https://www.anglobalservices.com/bench-top-low-capacity-refrigerated-centrifuge#product",
        "name": "Bench Top Low Capacity Refrigerated Centrifuge",
        "alternateName": [
          "Low Capacity Refrigerated Centrifuge",
          "Bench Top Refrigerated Centrifuge",
          "Cold Centrifuge",
          "Compact Refrigerated Centrifuge",
          "Low Capacity Cooling Centrifuge",
          "Low Volume Refrigerated Centrifuge",
          "Refrigerated Benchtop Centrifuge",
          "Chilled Centrifuge"
        ],
        "description": "A high-performance compact bench top low capacity refrigerated centrifuge engineered for space-constrained laboratories, molecular separations, enzyme purification, and clinical biochemistry with eco-friendly CFC-free cooling from -20°C to +40°C.",
        "image": "https://www.anglobalservices.com/equipment/centrifuge/bench-top-low-capacity-refrigerated-centrifuge.webp",
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
          "reviewCount": "136",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.anglobalservices.com/bench-top-low-capacity-refrigerated-centrifuge#breadcrumb",
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
            "name": "Bench Top Low Capacity Refrigerated Centrifuge",
            "item": "https://www.anglobalservices.com/bench-top-low-capacity-refrigerated-centrifuge"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.anglobalservices.com/bench-top-low-capacity-refrigerated-centrifuge#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a Bench Top Low Capacity Refrigerated Centrifuge and when is low capacity preferred?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A Bench Top Low Capacity Refrigerated Centrifuge (frequently termed a Bench Top Refrigerated Centrifuge or Compact Refrigerated Centrifuge) is tailored for laboratories that process low-to-moderate sample batches (e.g., 12 to 24 microtubes or 6 to 8 conical tubes of 15ml) while requiring extreme angular velocities up to 20,000 RPM (~27,800 xg). Its compact benchtop footprint saves valuable workbench space, consumes less electrical power, and pulls down to 4°C significantly faster than large-capacity units."
            }
          },
          {
            "@type": "Question",
            "name": "Can I search or purchase this machine by shorthand or popular names like Low Capacity Refrigerated Centrifuge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, absolutely. Research scientists, lab technicians, and procurement managers routinely refer to this unit by popular half-names including Low Capacity Refrigerated Centrifuge, Bench Top Refrigerated Centrifuge, Cold Centrifuge, Compact Refrigerated Centrifuge, Low Volume Refrigerated Centrifuge, or Low Capacity Cooling Centrifuge. All of these terms denote our compact refrigerated centrifugal separation unit equipped with digital temperature regulation and brushless motor drive."
            }
          },
          {
            "@type": "Question",
            "name": "How rapidly does the Fast Temp pre-cooling function reach 4°C?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Because the chamber has an optimized low-volume thermal mass, the dedicated Fast Temp cycle chills the rotor chamber from ambient room temperature (25°C) to 4°C in under 8 minutes, allowing immediate loading of temperature-sensitive enzymes, antibodies, and nucleic acids."
            }
          },
          {
            "@type": "Question",
            "name": "Does the unit reliably maintain 4°C at maximum 20,000 RPM velocity?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Engineered with a high-efficiency CFC-free compressor and closed-loop electronic temperature monitoring, the centrifuge continuously counteracts rotor aerodynamic friction, maintaining a steady 4°C (±1°C) even during sustained runs at top speed."
            }
          },
          {
            "@type": "Question",
            "name": "What tube capacities and rotor configurations are available?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The instrument accommodates versatile low-capacity rotors including 24 x 1.5/2.0ml microcentrifuge tubes, 12 x 5ml tubes, 8 x 15ml conical tubes, and adapters for 0.2ml and 0.5ml PCR microtubes or PCR strips."
            }
          },
          {
            "@type": "Question",
            "name": "What safety mechanisms protect personnel and delicate samples?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The centrifuge features an automated motorized lid lock that prevents opening while the rotor is in motion, an aerosol-tight biocontainment lid to contain biohazard vapors, electronic dynamic imbalance detection that automatically shuts off the motor upon uneven loading, and an emergency manual lid release in case of power interruption."
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
        id="bench-top-low-capacity-refrigerated-centrifuge-schema"
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
            currentTitle="Bench Top Low Capacity Refrigerated Centrifuge"
            currentSlug="bench-top-low-capacity-refrigerated-centrifuge"
          />

          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-semibold tracking-wide uppercase text-blue-200 mb-4 shadow-sm">
              <Sparkles size={14} className="text-yellow-400" />
              Refrigerated &amp; Compact Research Series
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase drop-shadow-sm text-center">
              Bench Top Low Capacity Refrigerated Centrifuge
            </h1>

            <p className="mt-3 text-base sm:text-lg text-blue-100/90 font-normal leading-relaxed max-w-3xl text-center mx-auto">
              Space-saving temperature-controlled laboratory centrifuge for molecular biology and biochemistry. Widely identified as <strong className="font-semibold text-white">Low Capacity Refrigerated Centrifuge</strong>, <strong className="font-semibold text-white">Bench Top Refrigerated Centrifuge</strong>, <strong className="font-semibold text-white">Cold Centrifuge</strong>, or <strong className="font-semibold text-white">Compact Cooling Centrifuge</strong>.
            </p>

            <div className="mt-6 flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm text-blue-100">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md border border-white/10">
                <CheckCircle2 size={15} className="text-emerald-400" /> -20°C to +40°C CFC-Free Cooling
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md border border-white/10">
                <CheckCircle2 size={15} className="text-emerald-400" /> Up to 20,000 RPM / 27,800 xg High Velocity
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md border border-white/10">
                <CheckCircle2 size={15} className="text-emerald-400" /> Compact Low-Footprint &amp; Multi-Format Micro Rotor
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
                  src="/equipment/centrifuge/bench-top-low-capacity-refrigerated-centrifuge.webp"
                  alt="Bench Top Low Capacity Refrigerated Centrifuge Laboratory Equipment"
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
                  The <strong className="text-[#0075B6]">Bench Top Low Capacity Refrigerated Centrifuge</strong> (commonly referenced across diagnostic laboratories and biotechnology departments as a <strong className="font-semibold text-gray-900">Low Capacity Refrigerated Centrifuge</strong> or <strong className="font-semibold text-gray-900">Bench Top Refrigerated Centrifuge</strong>) is a compact, high-speed thermal separation workstation designed to maximize bench space without sacrificing centrifugal power.
                </p>
                <p>
                  Engineered to spin low-to-medium tube volumes at speeds up to 20,000 RPM (generating over 27,800 xg), this unit features a <strong className="font-semibold text-gray-900">high-efficiency CFC-free cooling compressor and maintenance-free brushless motor</strong>. It guarantees precise 4°C temperature control even at continuous maximum speed, preventing thermal degradation of enzymes, RNA/DNA minipreps, and recombinant proteins while offering rapid pre-cooling and whisper-quiet operation.
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
              <h2 className="text-3xl font-black text-[#0a192f] mb-4">Compact Footprint &amp; High-G Thermal Isolation</h2>
              <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Combining high centrifugal forces with sub-ambient cooling in a compact chassis requires optimized airflow and vibration dampening:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Rapid Pre-Cooling &amp; Chamber Pull-Down</h3>
                    <p className="text-gray-600 leading-relaxed">The dedicated Fast Temp button pulls the chamber and rotor temperature down to 4°C in under 8 minutes, shielding temperature-labile samples from ambient warmth.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">High-Velocity Phase Separation</h3>
                    <p className="text-gray-600 leading-relaxed">Accelerating smoothly up to 20,000 RPM (27,800 xg), the unit exerts intense centrifugal forces that firmly pellet nucleic acids, proteins, and cellular debris into clean buttons.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Active Friction Neutralization &amp; Soft Braking</h3>
                    <p className="text-gray-600 leading-relaxed">Closed-loop thermal sensors continuously modulate compressor output to counter aerodynamic friction, while customizable braking prevents pellet remixing.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-inner">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Key Applications &amp; Research Laboratories</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Biochemistry &amp; Enzymology</strong>
                    <span className="text-gray-600">Pelleting temperature-sensitive enzymes, protein crystallization fractions, and antibody precipitates at continuous 4°C.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Molecular Diagnostics &amp; Genetic Testing</strong>
                    <span className="text-gray-600">Standard workstation for DNA/RNA extraction, PCR reaction preparation, and viral nucleic acid concentration under cold conditions.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Academic &amp; University Research Centers</strong>
                    <span className="text-gray-600">Space-efficient benchtop solution for academic labs requiring refrigerated high-G performance on shared workbenches.</span>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Eco-Friendly Cooling System</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>-20°C to +40°C Range:</strong> High-efficiency compressor maintains constant 4°C even at continuous peak speed and full load.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Fast Temp Pre-Cooling:</strong> Dedicated express chilling cycle drops rotor temperature from ambient to 4°C in under 8 minutes.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>CFC-Free Refrigerant:</strong> Uses non-ozone-depleting R134a refrigerant for green laboratory compliance.</li>
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
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Ergonomic Console:</strong> Blue accent control interface with dedicated Program, Enter, and navigation keys.</li>
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
                    <div className="text-white font-semibold">20,000 RPM | 27,800 xg</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Temperature Range</div>
                    <div className="text-white font-semibold">-20°C to +40°C (±1°C Accuracy)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Rotor Capacity</div>
                    <div className="text-white font-semibold">24 x 1.5/2.0ml | 12 x 5ml | 8 x 15ml Conical</div>
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
              Adhering to strict preventative maintenance preserves cooling performance, eliminates frost accumulation, and maximizes equipment lifespan:
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
              href="/bench-top-high-speed-micro-refrigerated-centrifuge"
              className="group p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#0075B6] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-[#0075B6] uppercase tracking-wider block mb-1">Refrigerated</span>
                <h3 className="font-bold text-slate-900 group-hover:text-[#0075B6] transition-colors text-base mb-2">
                  Bench Top High Speed Micro Refrigerated
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  Compact refrigerated microcentrifuge designed for nucleic acid extraction and cold microtube pellets up to 16,000 RPM.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#0075B6] mt-4 flex items-center gap-1">
                Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/bench-top-low-speed-refrigerated-centrifuge"
              className="group p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#0075B6] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-[#0075B6] uppercase tracking-wider block mb-1">Refrigerated</span>
                <h3 className="font-bold text-slate-900 group-hover:text-[#0075B6] transition-colors text-base mb-2">
                  Bench Top Low Speed Refrigerated
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  Gentle low-speed clinical cooling centrifuge for whole blood, platelet separation, and vacutainer processing.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#0075B6] mt-4 flex items-center gap-1">
                Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/bench-top-large-capacity-refrigerated-centrifuge"
              className="group p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#0075B6] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-[#0075B6] uppercase tracking-wider block mb-1">Refrigerated</span>
                <h3 className="font-bold text-slate-900 group-hover:text-[#0075B6] transition-colors text-base mb-2">
                  Bench Top Large Capacity Refrigerated
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  Heavy-duty high-throughput refrigerated centrifuge for bioprocessing, blood banks, and large batch volumes.
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
            <p className="text-gray-500 text-lg">Learn more about our Bench Top Low Capacity Refrigerated Centrifuges.</p>
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
