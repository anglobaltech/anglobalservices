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
  title: "Bench Top Urine Sedimentation Centrifuge | Urine Centrifuge Machine - AN Global Services",
  description:
    "High-precision bench top urine sedimentation centrifuge (urine centrifuge) engineered for clinical pathology, nephrology, and diagnostic urinalysis laboratories. Compact benchtop design with soft braking, conical tube rotors, and digital speed control. Request a quote today.",
  keywords: [
    // Full Product Names
    "Bench Top Urine Sedimentation Centrifuge",
    "Benchtop Urine Sedimentation Centrifuge",
    "Bench Top Urine Centrifuge",
    "Benchtop Urine Centrifuge",
    "Bench Top Urinalysis Centrifuge",
    "Benchtop Urinalysis Centrifuge",
    // Short & Half Names (for users searching with partial or common terminology)
    "Urine Sedimentation Centrifuge",
    "Urine Centrifuge",
    "Urine Sediment Centrifuge",
    "Sedimentation Centrifuge",
    "Urinalysis Centrifuge",
    "Urine Test Centrifuge",
    "Urine Tube Centrifuge",
    "Urine Sample Centrifuge",
    "Pathological Centrifuge",
    "Pathology Urine Centrifuge",
    "Clinical Urine Centrifuge",
    "Medical Urine Centrifuge",
    "15ml Conical Centrifuge",
    "Centrifuge Machine for Urine",
    "Urinary Cast Centrifuge",
    "AN Global Services laboratory equipment"
  ],
  alternates: {
    canonical: "https://www.anglobalservices.com/bench-top-urine-sedimentation-centrifuge",
  },
  openGraph: {
    title: "Bench Top Urine Sedimentation Centrifuge | Clinical Urine Centrifuge",
    description: "Engineered for precise urinary sediment concentration, cast preservation, and microscopic urinalysis. Discover bench top urine centrifuges by AN Global Services.",
    url: "https://www.anglobalservices.com/bench-top-urine-sedimentation-centrifuge",
    siteName: "AN Global Services",
    images: [
      {
        url: "https://www.anglobalservices.com/equipment/centrifuge/bench-top-urine-sedimentation-centrifuge.webp",
        width: 1200,
        height: 800,
        alt: "Bench Top Urine Sedimentation Centrifuge Laboratory Equipment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bench Top Urine Sedimentation Centrifuge | AN Global Services",
    description: "Explore bench top urine sedimentation centrifuges engineered for clinical pathology and microscopic urinalysis.",
    images: ["https://www.anglobalservices.com/equipment/centrifuge/bench-top-urine-sedimentation-centrifuge.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BenchTopUrineSedimentationCentrifugePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": "https://www.anglobalservices.com/bench-top-urine-sedimentation-centrifuge#product",
        "name": "Bench Top Urine Sedimentation Centrifuge",
        "alternateName": [
          "Urine Sedimentation Centrifuge",
          "Urine Centrifuge",
          "Benchtop Urine Centrifuge",
          "Urine Sediment Centrifuge",
          "Urinalysis Centrifuge",
          "Pathological Urine Centrifuge",
          "Clinical Urine Centrifuge",
          "15ml Conical Tube Centrifuge"
        ],
        "description": "A high-precision bench top urine sedimentation centrifuge engineered for gentle concentration of urinary sediment, preservation of fragile casts and cellular elements, and standardized clinical microscopy with microprocessor speed control and soft deceleration braking.",
        "image": "https://www.anglobalservices.com/equipment/centrifuge/bench-top-urine-sedimentation-centrifuge.webp",
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
          "reviewCount": "132",
          "bestRating": "5"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.anglobalservices.com/bench-top-urine-sedimentation-centrifuge#breadcrumb",
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
            "item": "https://www.anglobalservices.com/bench-top-low-speed-centrifuge"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Bench Top Urine Sedimentation Centrifuge",
            "item": "https://www.anglobalservices.com/bench-top-urine-sedimentation-centrifuge"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.anglobalservices.com/bench-top-urine-sedimentation-centrifuge#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a Bench Top Urine Sedimentation Centrifuge and why is it specialized?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A Bench Top Urine Sedimentation Centrifuge (commonly searched as a urine centrifuge or urinalysis centrifuge) is a specialized clinical laboratory instrument engineered specifically for preparing urine samples for microscopic analysis. Unlike generic high-speed centrifuges that apply destructive G-forces, a urine sedimentation centrifuge operates with calibrated low-speed acceleration (400 to 450 xg RCF) and soft electronic braking. This compacts cells, crystals, and urinary casts into a discrete pellet at the tip of conical tubes without crushing fragile cellular structures."
            }
          },
          {
            "@type": "Question",
            "name": "Can I search or order this unit by its short name like Urine Centrifuge or Urinalysis Centrifuge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, absolutely. Healthcare professionals, lab managers, and procurement officers frequently refer to this equipment by popular shorthand names including Urine Centrifuge, Urine Sediment Centrifuge, Urinalysis Centrifuge, Urine Test Centrifuge, or Pathological Urine Centrifuge. All these terms designate our standardized benchtop centrifugal sedimentation system configured for clinical conical urinalysis tubes."
            }
          },
          {
            "@type": "Question",
            "name": "What is the recommended speed (RPM / RCF) for urine sediment preparation according to CLSI guidelines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "According to the Clinical and Laboratory Standards Institute (CLSI GP16-A2 guidelines for Urinalysis), urine should be centrifuged at approximately 400 to 450 xg (Relative Centrifugal Force) for 5 minutes. In standard benchtop rotor radii, this corresponds to approximately 1,500 to 2,000 RPM. Our centrifuge features digital closed-loop speed control and instant RCF toggling to satisfy CLSI compliance precisely."
            }
          },
          {
            "@type": "Question",
            "name": "Why is soft braking critical for urine sediment examination?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Standard centrifugal brakes decelerate abruptly, creating fluid turbulence inside conical tubes that resuspends delicate cell pellets and shears fragile urinary casts (such as hyaline, granular, and waxy casts). Our bench top urine sedimentation centrifuge utilizes programmable soft braking profiles that bring the rotor to a smooth, friction-free halt, keeping the concentrated pellet undisturbed."
            }
          },
          {
            "@type": "Question",
            "name": "What types and volumes of tubes can this centrifuge accommodate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The machine comes standard with interchangeable rotor configurations accommodating 8 to 12 standard 15ml conical centrifuge tubes (such as Falcon tubes or graduated urinalysis tubes), as well as adapters for 10ml and 12ml clinical test tubes."
            }
          },
          {
            "@type": "Question",
            "name": "What safety mechanisms protect operators against biohazardous aerosol exposure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The centrifuge includes an electronic automatic safety lid interlock that prevents lid opening while the rotor is spinning, an airtight inner chamber seal to contain biohazardous aerosols, real-time dynamic imbalance sensors that immediately cut motor power if tubes are unevenly balanced, and thermal motor overload protection."
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
        id="bench-top-urine-sedimentation-centrifuge-schema"
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
            currentTitle="Bench Top Urine Sedimentation Centrifuge"
            currentSlug="bench-top-urine-sedimentation-centrifuge"
          />

          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-semibold tracking-wide uppercase text-blue-200 mb-4 shadow-sm">
              <Sparkles size={14} className="text-yellow-400" />
              Clinical Pathology & Urinalysis Series
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase drop-shadow-sm text-center">
              Bench Top Urine Sedimentation Centrifuge
            </h1>

            <p className="mt-3 text-base sm:text-lg text-blue-100/90 font-normal leading-relaxed max-w-3xl text-center mx-auto">
              Precision clinical laboratory centrifuge for microscopic urinalysis. Widely identified as <strong className="font-semibold text-white">Urine Centrifuge</strong>, <strong className="font-semibold text-white">Urine Sedimentation Centrifuge</strong>, or <strong className="font-semibold text-white">Urinalysis Centrifuge</strong> for pathology and hospital diagnostics.
            </p>

            <div className="mt-6 flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm text-blue-100">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md border border-white/10">
                <CheckCircle2 size={15} className="text-emerald-400" /> Conical Tube Rotor (8x15ml / 12x15ml)
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md border border-white/10">
                <CheckCircle2 size={15} className="text-emerald-400" /> Soft Deceleration (Preserves Casts & RBCs)
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
                  src="/equipment/centrifuge/bench-top-urine-sedimentation-centrifuge.webp"
                  alt="Bench Top Urine Sedimentation Centrifuge Equipment"
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
                  The <strong className="text-[#0075B6]">Bench Top Urine Sedimentation Centrifuge</strong> (commonly known by laboratory technicians as a <strong className="font-semibold text-gray-900">urine centrifuge</strong> or <strong className="font-semibold text-gray-900">urinalysis centrifuge</strong>) is a specialized diagnostic instrument built to separate and concentrate urinary cellular elements for microscopic examination.
                </p>
                <p>
                  Standard laboratory spinning can easily crush delicate cellular components such as red blood cells (RBCs), leukocytes, epithelial cells, and fragile urinary casts. Our urine sedimentation centrifuge is engineered with <strong className="font-semibold text-gray-900">calibrated low-speed RCF regulation and non-disruptive soft braking</strong>, gathering intact diagnostic sediments into the tip of conical tubes while keeping morphology pristine.
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
                      We provide direct on-site benchtop installation, tachometer RPM/RCF verification, customized conical rotor adapter fitting, standard CLSI urinalysis protocol configuration, and technician training for hospitals and diagnostic pathology centers.
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
              <h2 className="text-3xl font-black text-[#0a192f] mb-4">Precision Urinalysis Sedimentation</h2>
              <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Microscopic urinalysis requires gentle, non-destructive sediment concentration to ensure diagnostic accuracy without cell lysis:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Controlled Low-Shear Acceleration</h3>
                    <p className="text-gray-600 leading-relaxed">The motor ramps up gently to prevent vortex shearing and fluid turbulence that could fragment fragile hyaline or granular urinary casts.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Calibrated CLSI Sedimentation Force</h3>
                    <p className="text-gray-600 leading-relaxed">The unit maintains an exact 400 to 450 xg RCF (approx. 1,500 - 2,000 RPM), driving cells and crystals down into the tip of conical tubes without crushing them.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Zero-Resuspension Soft Braking</h3>
                    <p className="text-gray-600 leading-relaxed">Programmable dynamic soft braking brings the rotor to a smooth standstill, preventing any reverse fluid swirling from stirring the concentrated pellet back into supernatant.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-inner">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Key Users & Diagnostic Facilities</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Hospital Pathology Laboratories</strong>
                    <span className="text-gray-600">The daily standard for clinical urinalysis (UA) testing, detecting hematuria, proteinuria, pyuria, and bacterial colonies.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Nephrology & Urology Centers</strong>
                    <span className="text-gray-600">Specialized identification of renal tubular casts, dysmorphic RBCs, and kidney stone crystals (calcium oxalate, uric acid).</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Veterinary Diagnostic Clinics</strong>
                    <span className="text-gray-600">Essential routine urinalysis screening for companion animals and livestock to diagnose feline urological syndrome and canine renal disorders.</span>
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
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Engineered for delicate sediment integrity, rapid diagnostic throughput, and long-term durability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                  01
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Brushless DC Drive System</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Maintenance-Free Motor:</strong> Brushless DC drive delivers quiet operation and zero carbon dust contamination.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Conical Rotor Compatibility:</strong> Heavy-duty rotor holds 8x15ml or 12x15ml conical urinalysis tubes securely.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Vibration Isolation:</strong> Balanced motor suspension and rubber suction feet prevent bench creeping.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Digital Clinical Dashboard</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Microprocessor Control:</strong> Closed-loop RPM feedback ensures constant rotational speed regardless of tube loads.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Dual RPM / RCF Readout:</strong> Digital LED displays speed (RPM) and relative centrifugal force (xg) simultaneously.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Membrane Keypad:</strong> Fluid-resistant wipe-clean front panel protects electronics from chemical splashes.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Biohazard & Operator Safety</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Electronic Lid Lock:</strong> Interlock mechanism prevents lid opening while the rotor is in rotation.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Imbalance Detector:</strong> Multi-axis sensors immediately stop rotation if tubes are unequally loaded.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Emergency Manual Override:</strong> Easy sample recovery mechanism in case of laboratory power outages.</li>
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
                    <div className="text-white font-semibold">300 - 4,000 RPM (Programmable)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Max RCF Force</div>
                    <div className="text-white font-semibold">Up to 2,200 xg (CLSI Calibrated)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Rotor Capacity</div>
                    <div className="text-white font-semibold">8 x 15ml / 12 x 15ml Conical Tubes</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Motor & Noise</div>
                    <div className="text-white font-semibold">Brushless DC Motor | &lt; 55 dBA</div>
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
              Maintain optimal clinical accuracy and prevent biohazardous contamination with these best operating practices from AN Global Services:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-[#0075B6] pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Decontamination & Hygiene</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Because biological fluids are processed daily, sanitize the stainless steel chamber bowl with a 10% bleach solution or hospital-grade disinfectant.</li>
                <li>Remove conical tube adapters weekly, wash with neutral detergent, and dry completely to avoid salt crusting.</li>
                <li>Never autoclave rubber cushions unless specified; inspect cushions for wear to avoid tube base stress.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Rotor Balance & Tube Handling</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Always pair conical tubes symmetrically across the rotor axis by filling opposing tubes to equal volume (within ±0.5 ml).</li>
                <li>Use purpose-built 15ml conical urine tubes to ensure the pellet concentrates cleanly at the narrow apex.</li>
                <li>Never run the centrifuge with damaged or cracked rotor sleeves.</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Professional Calibration</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Annual optical tachometer verification to confirm that digital display RPM corresponds accurately with physical rotor rotation.</li>
                <li>Verify timer accuracy against a calibrated reference stopwatch to ensure strict CLSI 5-minute spin cycles.</li>
                <li>Test electronic lid interlock and automatic imbalance cut-off systems for laboratory safety compliance.</li>
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
              href="/bench-top-filtration-centrifuge"
              className="group p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#0075B6] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-[#0075B6] uppercase tracking-wider block mb-1">Pathological</span>
                <h3 className="font-bold text-slate-900 group-hover:text-[#0075B6] transition-colors text-base mb-2">
                  Bench Top Filtration Centrifuge
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  Precision solid-liquid separation with perforated basket rotor for clinical and chemical labs.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#0075B6] mt-4 flex items-center gap-1">
                Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

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
            <p className="text-gray-500 text-lg">Learn more about our bench top urine sedimentation centrifuges.</p>
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
