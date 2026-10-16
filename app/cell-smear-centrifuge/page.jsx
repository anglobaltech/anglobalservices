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
  title: "Cell Smear Centrifuge | Cytocentrifuge & Cytology Centrifuge - AN Global Services",
  description:
    "High-precision Cell Smear Centrifuge (Cytocentrifuge / Cytology Centrifuge) engineered for monolayer cell smear preparation directly onto glass slides. Designed for pathology, cytopathology, CSF, pleural fluid, and hematology analysis. Request a quote today.",
  keywords: [
    // Full Product Names
    "Cell Smear Centrifuge",
    "Bench Top Cell Smear Centrifuge",
    "Benchtop Cell Smear Centrifuge",
    "Cytocentrifuge",
    "Cytology Centrifuge",
    "Cyto Centrifuge",
    "Laboratory Cell Smear Centrifuge",
    // Short & Half Names (for users searching with partial or common terminology)
    "Cell Smear Machine",
    "Smear Centrifuge",
    "Cell Centrifuge",
    "Cyto Smear Machine",
    "Cytology Slide Centrifuge",
    "Slide Smear Centrifuge",
    "Monolayer Centrifuge",
    "CSF Centrifuge",
    "Body Fluid Centrifuge",
    "Pathological Smear Centrifuge",
    "Pathological Centrifuge",
    "Cyto Rotor Centrifuge",
    "Thin Layer Cell Centrifuge",
    "Cytopathology Centrifuge",
    "Urinary Cell Smear Centrifuge",
    "AN Global Services laboratory equipment"
  ],
  alternates: {
    canonical: "https://www.anglobalservices.com/cell-smear-centrifuge",
  },
  openGraph: {
    title: "Cell Smear Centrifuge | Clinical Cytology & Cytocentrifuge Machine",
    description: "Engineered for intact cell concentration and uniform monolayer slide smears from low-cellularity fluid specimens. Discover cell smear centrifuges by AN Global Services.",
    url: "https://www.anglobalservices.com/cell-smear-centrifuge",
    siteName: "AN Global Services",
    images: [
      {
        url: "https://www.anglobalservices.com/equipment/centrifuge/cell-smear-centrifuge.webp",
        width: 1200,
        height: 800,
        alt: "Cell Smear Centrifuge Cytocentrifuge Laboratory Equipment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cell Smear Centrifuge | AN Global Services",
    description: "Explore bench top cell smear centrifuges and cytocentrifuges engineered for clinical cytology and fluid smear preparations.",
    images: ["https://www.anglobalservices.com/equipment/centrifuge/cell-smear-centrifuge.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CellSmearCentrifugePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": "https://www.anglobalservices.com/cell-smear-centrifuge#product",
        "name": "Cell Smear Centrifuge",
        "alternateName": [
          "Cytocentrifuge",
          "Cytology Centrifuge",
          "Cyto Centrifuge",
          "Cell Smear Machine",
          "Smear Centrifuge",
          "Slide Smear Centrifuge",
          "Monolayer Cell Centrifuge",
          "Pathological Smear Centrifuge"
        ],
        "description": "A high-precision bench top cell smear centrifuge (cytocentrifuge) designed to deposit intact cellular monolayers directly onto microscope slides from low-cellularity biological fluids with gentle acceleration, digital speed control, and soft deceleration.",
        "image": "https://www.anglobalservices.com/equipment/centrifuge/cell-smear-centrifuge.webp",
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
          "reviewCount": "124",
          "bestRating": "5"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.anglobalservices.com/cell-smear-centrifuge#breadcrumb",
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
            "name": "Cell Smear Centrifuge",
            "item": "https://www.anglobalservices.com/cell-smear-centrifuge"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.anglobalservices.com/cell-smear-centrifuge#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a Cell Smear Centrifuge (Cytocentrifuge) and how does it work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A Cell Smear Centrifuge (frequently termed a Cytocentrifuge, Cytology Centrifuge, or Cell Smear Machine) is a specialized pathological instrument that uses centrifugal force to deposit a uniform monolayer of cells directly onto a defined target circle on a glass microscope slide. As the rotor spins, fluid is absorbed by an absorbent filter card while cellular elements adhere gently to the slide surface, yielding pristine cell morphology for cytological examination."
            }
          },
          {
            "@type": "Question",
            "name": "Can I search or purchase this equipment using short or half names like Cyto Centrifuge or Smear Centrifuge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, absolutely. In clinical pathology and diagnostic cytology, professionals routinely refer to this unit by popular shorthand names including Cytocentrifuge, Cyto Centrifuge, Cell Smear Machine, Smear Centrifuge, Cytology Slide Centrifuge, or Monolayer Centrifuge. All of these terms denote our benchtop centrifugal smear preparation system."
            }
          },
          {
            "@type": "Question",
            "name": "Which clinical fluid specimens are routinely processed in a Cell Smear Centrifuge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The instrument is purpose-built for low-cellularity and hypocellular specimens where standard manual smear techniques result in cellular loss or dilution. Common fluids include Cerebrospinal Fluid (CSF), pleural effusions, peritoneal washings, synovial fluid, pericardial aspirates, urine sediment, bronchial alveolar lavage (BAL), and fine needle aspiration (FNA) rinses."
            }
          },
          {
            "@type": "Question",
            "name": "How does centrifugal monolayer preparation compare to traditional manual smear methods?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Manual wedge smears often suffer from uneven thickness, air-drying artifacts, cell clustering, and severe cell crushing. A cell smear centrifuge concentrates virtually 100% of cells into an organized, flat monolayer on a 6mm to 8mm viewing target. This drastically cuts screening time under the microscope and preserves diagnostic nuclear detail for Papanicolaou, Giemsa, Romanowsky, and Gram staining."
            }
          },
          {
            "@type": "Question",
            "name": "What rotational speeds and braking settings prevent cell distortion and rupture?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cytocentrifugation typically requires gentle speeds between 500 RPM and 2,000 RPM (yielding approximately 50 to 500 xg RCF) for 5 to 10 minutes depending on fluid viscosity. Our centrifuge features smooth ramp-up acceleration and microprocessor-controlled soft deceleration to eliminate vortex turbulence and prevent cell lysis."
            }
          },
          {
            "@type": "Question",
            "name": "What safety protections are integrated to safeguard operators from biohazardous aerosols?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The centrifuge features an electronic safety lid interlock that prevents opening while the rotor is spinning, a sealed aerosol containment chamber, dynamic automatic imbalance sensors that instantly abort rotation upon load asymmetry, and a manual emergency lid release mechanism."
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
        id="cell-smear-centrifuge-schema"
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
            currentTitle="Cell Smear Centrifuge"
            currentSlug="cell-smear-centrifuge"
          />

          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-semibold tracking-wide uppercase text-blue-200 mb-4 shadow-sm">
              <Sparkles size={14} className="text-yellow-400" />
              Pathological & Cytology Series
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase drop-shadow-sm text-center">
              Cell Smear Centrifuge
            </h1>

            <p className="mt-3 text-base sm:text-lg text-blue-100/90 font-normal leading-relaxed max-w-3xl text-center mx-auto">
              Precision clinical laboratory cytocentrifuge for monolayer slide smear preparation. Widely searched as <strong className="font-semibold text-white">Cytocentrifuge</strong>, <strong className="font-semibold text-white">Cytology Centrifuge</strong>, <strong className="font-semibold text-white">Cyto Centrifuge</strong>, or <strong className="font-semibold text-white">Cell Smear Machine</strong> for pathology, oncology, and diagnostic fluid analysis.
            </p>

            <div className="mt-6 flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm text-blue-100">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md border border-white/10">
                <CheckCircle2 size={15} className="text-emerald-400" /> Microscope Slide Cyto Rotor (8 / 12 Slides)
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md border border-white/10">
                <CheckCircle2 size={15} className="text-emerald-400" /> Monolayer Deposition & Soft Deceleration
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
                  src="/equipment/centrifuge/cell-smear-centrifuge.webp"
                  alt="Cell Smear Centrifuge Cytocentrifuge Equipment"
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
                  The <strong className="text-[#0075B6]">Cell Smear Centrifuge</strong> (universally recognized in diagnostic pathology as a <strong className="font-semibold text-gray-900">Cytocentrifuge</strong> or <strong className="font-semibold text-gray-900">Cytology Centrifuge</strong>) is a specialized diagnostic apparatus engineered to recover and concentrate intact cells directly onto glass microscope slides from low-cellularity fluid specimens.
                </p>
                <p>
                  In conventional test tube spins, delicate cells from dilute fluids—such as cerebrospinal fluid (CSF), pleural effusions, synovial aspirates, and urine—are easily lost during supernatant decanting or distorted during manual slide spreading. Our cell smear centrifuge utilizes <strong className="font-semibold text-gray-900">controlled centrifugal sedimentation with absorbent cyto-funnels</strong>, depositing an ultra-flat, high-density monolayer within a defined viewing target circle while preserving nuclear morphology and cellular architecture.
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
                      We deliver certified on-site installation, optical tachometer speed calibration, precision cyto-clip assembly fitting, standard cytopathology protocol configuration, and comprehensive laboratory staff training across India and international facilities.
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
              <h2 className="text-3xl font-black text-[#0a192f] mb-4">Precision Monolayer Cyto-Separation</h2>
              <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Cytopathology demands non-destructive cellular recovery from dilute fluid samples. Our cell smear cytocentrifugation process achieves pristine clarity through three coordinated steps:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sample & Cyto-Funnel Assembly</h3>
                    <p className="text-gray-600 leading-relaxed">Dilute body fluids (CSF, pleural fluid, BAL, urine) are loaded into specialized cyto-funnels clamped firmly against absorbent filter cards and microscope glass slides.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Centrifugal Deposition & Fluid Absorption</h3>
                    <p className="text-gray-600 leading-relaxed">Under calibrated low centrifugal acceleration, liquid is gently absorbed into the filter card while cells are deposited in a clean, uniform monolayer onto the slide target zone.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Soft Deceleration & Monolayer Fixation</h3>
                    <p className="text-gray-600 leading-relaxed">Microprocessor-controlled soft braking brings the rotor to an imperceptible halt without fluid wash-back, leaving dry, intact cell monolayers ready for immediate diagnostic staining.</p>
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
                    <strong className="block text-lg text-gray-900">Cytopathology & Histopathology Laboratories</strong>
                    <span className="text-gray-600">The gold standard for fine needle aspirate (FNA) rinses, Pap smear evaluations, and malignant effusion characterizations.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Neurology & Hospital Critical Care Units</strong>
                    <span className="text-gray-600">Vital for urgent CSF cytological examination to diagnose bacterial meningitis, subarachnoid hemorrhage, and leptomeningeal metastasis.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Oncology & Hematology Institutes</strong>
                    <span className="text-gray-600">Essential for identifying blast cells, atypical lymphocytes, lymphoma staging, and evaluating bone marrow aspirate suspensions.</span>
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
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Designed for cell preservation, high-throughput cytology workflows, and operator biosecurity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                  01
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Brushless DC Drive & Slide Rotor</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Carbon-Free Motor:</strong> Brushless DC drive eliminates carbon brush dust, ensuring cleanroom and clinical hygiene.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Slide Cyto Rotor:</strong> Precision-balanced rotor accepts 8 to 12 standard 75x25mm microscope glass slides with clips.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Vibration Damping:</strong> Heavy die-cast chassis and shock-absorbing rubber suction feet ensure whisper-quiet stability.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Digital Cytology Dashboard</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Microprocessor Speed Feedback:</strong> Constant RPM maintenance with ±20 RPM precision across variable fluid loads.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Dual RPM / RCF Live Display:</strong> Bright digital LED screen displays rotational speed and centrifugal force in real time.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Membrane Keypad:</strong> Fluid-resistant touch membrane keypad protects electronics from reagent and disinfectant spills.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Biosecurity & Operator Safety</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Electronic Safety Lid Lock:</strong> Interlock mechanism prevents lid opening during spinning and halts if forced.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Aerosol Containment:</strong> Sealed inner centrifuge chamber contains hazardous biological aerosols and droplets.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Imbalance Detection:</strong> Gyroscopic sensors immediately cut motor power upon uneven slide or sample weight.</li>
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
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Max Centrifugal Force</div>
                    <div className="text-white font-semibold">Up to 2,000 xg (Low-G Cyto Mode)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Rotor Capacity</div>
                    <div className="text-white font-semibold">8 to 12 Slides / Multi-tube Adaptable</div>
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
              Adhering to strict cytology lab maintenance guarantees artifact-free cell morphology, high cell yields, and maximum motor longevity:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-[#0075B6] pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Chamber & Clip Decontamination</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Because infectious body fluids are processed, sanitize the rotor bowl daily using 70% ethanol or approved non-corrosive disinfectant.</li>
                <li>Autoclave or chemically disinfect cyto-clips and reusable funnels between patient runs to eliminate cross-contamination.</li>
                <li>Ensure filter paper residues are completely wiped clear to avoid sample misalignments.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Slide & Funnel Alignment</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Always clamp glass slides firmly with the frosted label side oriented according to rotor markings.</li>
                <li>Inspect cyto-funnel silicone gaskets to ensure tight seal integrity and avoid fluid leakage during spinning.</li>
                <li>Verify symmetrical loading across opposing rotor positions with dummy balance slides if running odd sample numbers.</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Professional Calibration</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Annual optical tachometer validation to confirm digital RPM and calculated RCF match exact rotor velocity.</li>
                <li>Timer verification with calibrated reference timers to guarantee protocol repeatability.</li>
                <li>Electronic lid safety interlock and dynamic imbalance cut-off mechanism inspection for accreditation compliance.</li>
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
              href="/bench-top-urine-sedimentation-centrifuge"
              className="group p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#0075B6] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-[#0075B6] uppercase tracking-wider block mb-1">Pathological</span>
                <h3 className="font-bold text-slate-900 group-hover:text-[#0075B6] transition-colors text-base mb-2">
                  Bench Top Urine Sedimentation Centrifuge
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  Gentle conical tube centrifugation and soft braking for intact urinary cast and sediment microscopy.
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
              href="/immunity-blood-centrifuge"
              className="group p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#0075B6] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-[#0075B6] uppercase tracking-wider block mb-1">Pathological</span>
                <h3 className="font-bold text-slate-900 group-hover:text-[#0075B6] transition-colors text-base mb-2">
                  Immunity Blood Centrifuge
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  Specialized serological and blood bank centrifuge for erythrocyte washing, blood grouping, and cross-matching.
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
            <p className="text-gray-500 text-lg">Learn more about our Cell Smear Centrifuges and cytocentrifugation equipment.</p>
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
