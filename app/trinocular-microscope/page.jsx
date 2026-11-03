import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { CheckCircle2, ShieldCheck, ArrowRight, Sparkles, Activity, Gauge, Settings, Zap } from "lucide-react";
import MicroscopeBreadcrumbs from "@/components/MicroscopeBreadcrumbs";

export const metadata = {
  title: "Trinocular Microscope Manufacturer & Supplier | Laboratory Digital Trinocular Compound Microscope | AN Global Services",
  description: "Leading manufacturer & supplier of professional Trinocular Compound Microscopes in India. Features 30° inclined 360° rotatable trinocular head with dedicated vertical camera phototube, infinite plan achromatic objectives (4x, 10x, 40x, 100x Oil), coaxial coarse/fine focus, and high-intensity LED Koehler illumination.",
  keywords: [
    "Trinocular Microscope",
    "Trinocular Compound Microscope",
    "Digital Trinocular Microscope",
    "Laboratory Microscope",
    "Research Microscope",
    "Medical Microscope",
    "Pathology Microscope",
    "Microscope with Camera Port",
    "Koehler Illumination Microscope",
    "AN Global Services microscopes"
],
  alternates: {
    canonical: "https://www.anglobalservices.com/trinocular-microscope",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Trinocular Microscope | AN Global Services",
    description: "Leading manufacturer & supplier of professional Trinocular Compound Microscopes in India. Features 30° inclined 360° rotatable trinocular head with dedicated vertical camera phototube, infinite plan achromatic objectives (4x, 10x, 40x, 100x Oil), coaxial coarse/fine focus, and high-intensity LED Koehler illumination.",
    url: "https://www.anglobalservices.com/trinocular-microscope",
    siteName: "AN Global Services",
    images: [
      {
        url: "https://www.anglobalservices.com/microscopes/trinocular-microscope.webp",
        width: 1200,
        height: 800,
        alt: "Trinocular Microscope - AN Global Services Laboratory Equipment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function TrinocularMicroscopePage() {
  return (
    <main className="w-full bg-gray-50 min-h-screen">
      {/* Schema Markup for Top-Notch SEO Ranking */}
      <Script id="trinocular-microscope-schema" type="application/ld+json" strategy="afterInteractive">
        {`
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              "@id": "https://www.anglobalservices.com/trinocular-microscope#product",
              "name": "Trinocular Microscope - Microscopes",
              "description": "Leading manufacturer & supplier of professional Trinocular Compound Microscopes in India. Features 30° inclined 360° rotatable trinocular head with dedicated vertical camera phototube, infinite plan achromatic objectives (4x, 10x, 40x, 100x Oil), coaxial coarse/fine focus, and high-intensity LED Koehler illumination.",
              "image": "https://www.anglobalservices.com/microscopes/trinocular-microscope.webp",
              "brand": {
                "@type": "Brand",
                "name": "AN Global Services"
              },
              "manufacturer": {
                "@type": "Organization",
                "name": "AN Global Services",
                "url": "https://www.anglobalservices.com"
              },
              "category": "Microscopes / Laboratory Equipment",
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
                  "name": "Microscopes",
                  "item": "https://www.anglobalservices.com/equipments-and-machinery"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Trinocular Microscope",
                  "item": "https://www.anglobalservices.com/trinocular-microscope"
                }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is a Trinocular Microscope (Trinocular Scope) used for?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A Trinocular Microscope is a high-precision laboratory optical instrument equipped with dual eyepieces for binocular observation and a third vertical phototube for mounting digital cameras, tablets, or monitors. It is used in clinical diagnostics, medical pathology, university research, and quality control to examine histological sections, bacterial smears, and cell cultures while simultaneously capturing digital micrographs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the difference between a Binocular and a Trinocular microscope?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While both feature dual ocular eyepieces for comfortable two-eyed viewing, a Trinocular microscope adds a dedicated third vertical optical port. With an internal prism beam-splitter, light is routed simultaneously or selectively to a digital CMOS camera. This eliminates the need to remove an eyepiece to take photos, making it ideal for documentation and teaching."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What magnification range does this Trinocular Compound Microscope offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It provides standard optical magnification from 40X to 1000X using paired Widefield WF10X eyepieces and four DIN Achromatic objectives: 4X (scanning), 10X (low power), 40X spring-loaded (high dry), and 100X spring-loaded oil immersion. Optional WF16X or WF20X eyepieces can extend magnification up to 1600X or 2000X."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I connect a digital camera, smartphone, or USB imaging sensor to the phototube?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. The vertical phototube features a standard C-mount adapter compatible with USB 3.0 CMOS microscopy cameras, HDMI live-streaming cameras, DSLR T-mount adapters, and smartphone optical clamps for instant digital documentation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why are the optical elements treated with anti-fungal coatings?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tropical climates and laboratory humidity can promote fungal hyphae growth between internal lens elements, degrading clarity and resolution permanently. All our microscope prisms, eyepieces, and objectives are vacuum-treated with specialized anti-fungal and anti-reflective coatings to ensure decade-long optical brilliance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What turnkey calibration, warranty, and installation support does AN Global Services provide?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AN Global Services delivers complete turnkey support. Our optical engineers install, align the beam-splitter, verify condenser collimation, calibrate digital micrometer scales, and supply certified NABL-traceable calibration certificates along with an institutional warranty and spare parts availability."
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
          
          <MicroscopeBreadcrumbs
            currentTitle="Trinocular Microscope"
            currentSlug="trinocular-microscope"
          />

          <div className="max-w-5xl lg:max-w-6xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-semibold tracking-wide uppercase text-blue-200 mb-4 shadow-sm text-center">
              <Sparkles size={14} className="text-yellow-400 shrink-0" />
              DIN ACHROMATIC OPTICS, 40X-1000X MAGNIFICATION & C-MOUNT DIGITAL PHOTOTUBE
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase drop-shadow-sm text-center">
              Trinocular Microscope
            </h1>

            <p className="mt-4 text-base sm:text-lg text-blue-100/90 font-normal leading-relaxed max-w-5xl text-center mx-auto">
              High-precision laboratory compound optical microscope engineered for clinical diagnostics, biomedical research, and real-time digital photomicrography. Widely searched as <strong className="font-semibold text-white">Trinocular Scope</strong>, <strong className="font-semibold text-white">Trinocular Compound Microscope</strong>, <strong className="font-semibold text-white">Trinocular Research Microscope</strong>, <strong className="font-semibold text-white">Trinocular Digital Microscope</strong>, <strong className="font-semibold text-white">Biological Microscope</strong>, <strong className="font-semibold text-white">Lab Microscope</strong>, <strong className="font-semibold text-white">Compound Microscope</strong>, <strong className="font-semibold text-white">Camera Microscope</strong>, <strong className="font-semibold text-white">Photomicroscope</strong>, or <strong className="font-semibold text-white">Pathology Microscope</strong> for histopathology diagnostics, microbiological cell examination, university research, pharmaceutical quality inspection, and materials analysis.
            </p>

            <div className="mt-7 flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm text-blue-100">
              
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/15 shadow-sm">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" /> Dedicated C-Mount Phototube for HD Digital Imaging
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/15 shadow-sm">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" /> Quadruple Nosepiece with 4X, 10X, 40X, 100X (Oil) Objectives
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/15 shadow-sm">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" /> Coaxial Coarse & Fine Focus with Abbe NA 1.25 Condenser
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
                  src="/microscopes/trinocular-microscope.webp"
                  alt="Trinocular Microscope - AN Global Services Laboratory Equipment"
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
                  The <strong className="text-[#0075B6]">Trinocular Microscope</strong> (commonly referred to across scientific laboratories as a <em>trinocular compound microscope</em>, <em>digital photomicroscope</em>, or <em>trinocular research scope</em>) is a state-of-the-art optical instrument engineered to provide simultaneous direct binocular specimen viewing alongside high-definition digital image capture and live monitor projection.
                </p>
                <p>
                  Constructed around a rigid, die-cast aluminum alloy stand with anti-vibration rubber footing, this <strong>laboratory microscope</strong> features an ergonomic 30° inclined, 360° rotatable viewing head equipped with paired Widefield WF10x eyepieces and dioptric correction collars. A third vertical phototube with beam-splitting optics allows effortless coupling of USB 3.0 digital cameras, CMOS image sensors, or HD monitors without interrupting binocular examination. The inward-facing quadruple revolving nosepiece houses premium DIN Achromatic objectives (4X, 10X, 40X spring-loaded, and 100X spring-loaded oil immersion), providing razor-sharp optical clarity from 40X to 1000X magnification. Featuring a double-layer mechanical stage with low-position coaxial X-Y controls, Abbe NA 1.25 condenser with iris diaphragm, and sub-stage variable LED illumination, it delivers crystal-clear cellular resolution for demanding pathological and analytical research workflows.
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
                      Accurate cell morphological analysis and microscopic measurement require precise optical collimation and zero chromatic aberration. AN Global Services delivers <strong className="text-[#0a192f]">turnkey laboratory equipment solutions</strong> across India. We align optical beam splitters, calibrate stage micrometer scales, inspect coaxial coarse/fine focus tensions, verify Abbe condenser centration, and provide NABL-traceable calibration documentation.
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Specimen Slide Mounting & Coaxial Stage Positioning</h3>
                    <p className="text-gray-600 leading-relaxed">The prepared specimen glass slide is secured onto the double-layer mechanical stage with the spring-loaded clip. Low-position coaxial X-Y drive knobs allow smooth millimeter-precise slide translation with fine vernier scale readouts.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-Objective Magnification & Coaxial Focusing</h3>
                    <p className="text-gray-600 leading-relaxed">Rotating the quadruple nosepiece engages the desired DIN Achromatic objective (4X, 10X, 40X, or 100X oil). Coaxial coarse focusing brings the specimen plane into rapid focus, while the 0.002 mm micro-fine focus knob sharpens cellular details without slide collision.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Dual-Viewing & Digital Image Capture via Phototube</h3>
                    <p className="text-gray-600 leading-relaxed">Sub-stage variable LED light passes through the Abbe NA 1.25 condenser and iris diaphragm. The internal optical prism beam-splitter directs light to both binocular eyepieces and the vertical C-mount phototube for live digital imaging, HD video recording, and real-time screen projection.</p>
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
                    <strong className="block text-lg text-gray-900">Clinical Pathology & Diagnostic Laboratories</strong>
                    <span className="text-gray-600">Routine examination of peripheral blood smears, bone marrow aspirates, urine sediment, cytology, histopathology biopsies, and parasitology.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Biomedical, Cytology & Cell Culture Research</strong>
                    <span className="text-gray-600">Microbial morphology studies, tissue staining evaluation, fluorescence/brightfield cell analysis, and live-cell documentation via camera connection.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Academic University, Pharmacy & Medical Colleges</strong>
                    <span className="text-gray-600">Interactive group teaching and student demonstration by streaming live microscopic specimen views directly to lecture hall projectors and monitors.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Pharmaceutical QA, Botany & Materials Testing</strong>
                    <span className="text-gray-600">Particle size verification, plant pharmacognosy tissue inspection, synthetic polymer fiber evaluation, and metallurgical micro-defect analysis.</span>
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
              <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Trinocular Optical Head & Imaging</h3>
              <ul className="space-y-3 text-gray-600 font-medium text-sm">
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> 30° inclined, 360° rotatable Siedentopf trinocular head.</li>
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Beam splitter toggle (100:0 / 20:80) for high-efficiency digital camera light transmission.</li>
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Interpupillary distance adjustment from 48 mm to 75 mm with bilateral diopter compensation.</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                02
              </div>
              <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">DIN Achromatic Optics & Stage</h3>
              <ul className="space-y-3 text-gray-600 font-medium text-sm">
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> DIN Achromatic 4X, 10X, 40X (Spring), and 100X (Spring, Oil) objectives.</li>
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Anti-fungal and multi-coated anti-reflection optical glass surfaces.</li>
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Double-layer mechanical stage (140 x 135 mm) with low-position coaxial drop knobs.</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                03
              </div>
              <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Koehler Illumination & Precision Focus</h3>
              <ul className="space-y-3 text-gray-600 font-medium text-sm">
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> High-brightness 3W variable LED sub-stage illumination (50,000 hrs life).</li>
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Abbe N.A. 1.25 condenser with iris diaphragm and blue filter holder.</li>
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Coaxial coarse and fine focusing mechanism with 0.002 mm precision division.</li>
              </ul>
            </div>

            {/* Full Width Specs Table */}
            <div className="bg-[#0a192f] rounded-2xl p-8 shadow-lg md:col-span-2 lg:col-span-3 mt-4 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white mb-6 border-b border-white/20 pb-4">Technical Specifications &amp; Operational Parameters</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Optical System</div>
                    <div className="text-white font-semibold">DIN Standard Finite Color-Corrected Optical System</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Viewing Head</div>
                    <div className="text-white font-semibold">Trinocular 30° Inclined, 360° Rotatable with Vertical C-Mount Port</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Eyepieces</div>
                    <div className="text-white font-semibold">Widefield WF10X/20 mm with Diopter Collars</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Objectives</div>
                    <div className="text-white font-semibold">DIN Achromatic 4X, 10X, 40X (S), 100X (S, Oil Immersion)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Total Magnification</div>
                    <div className="text-white font-semibold">40X to 1000X (Expandable to 1600X with WF16X eyepieces)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Condenser</div>
                    <div className="text-white font-semibold">Abbe Condenser N.A. 1.25 with Iris Diaphragm & Filter Holder</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Focusing Mechanism</div>
                    <div className="text-white font-semibold">Coaxial Coarse & Fine Focus (0.002 mm Precision Graduation)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Sub-Stage Illumination</div>
                    <div className="text-white font-semibold">Variable 3W LED with Continuous Rotary Dimmer</div>
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
                <li>Always cover the microscope with the provided anti-static dust cover when not in active use.</li>
                <li>Clean eyepiece and objective front lenses exclusively using lint-free optical lens tissue and specialized lens cleaning fluid.</li>
                <li>Inspect mechanical stage guide rails and remove dust or dried mounting medium to ensure frictionless X-Y motion.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Operational Protocols</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Immediate Oil Cleaning: Wipe residual immersion oil off the 100X objective tip immediately after testing using lens paper.</li>
                <li>Prevent Oil Migration: Never allow immersion oil to dry on front lens surfaces or migrate to lower-magnification (40X) dry objectives.</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Annual Servicing</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Verify optical collimation and alignment between binocular viewing channels and the vertical camera phototube.</li>
                <li>Calibrate digital camera image sensor scaling against an NABL-certified stage micrometer glass slide.</li>
                <li>Inspect electrical wiring, dimmer potentiometer linearity, and lubricate stage and focus rack mechanisms.</li>
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
                What is a Trinocular Microscope (Trinocular Scope) used for?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                A Trinocular Microscope is a high-precision laboratory optical instrument equipped with dual eyepieces for binocular observation and a third vertical phototube for mounting digital cameras, tablets, or monitors. It is used in clinical diagnostics, medical pathology, university research, and quality control to examine histological sections, bacterial smears, and cell cultures while simultaneously capturing digital micrographs.
              </div>
            </details>
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What is the difference between a Binocular and a Trinocular microscope?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                While both feature dual ocular eyepieces for comfortable two-eyed viewing, a Trinocular microscope adds a dedicated third vertical optical port. With an internal prism beam-splitter, light is routed simultaneously or selectively to a digital CMOS camera. This eliminates the need to remove an eyepiece to take photos, making it ideal for documentation and teaching.
              </div>
            </details>
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What magnification range does this Trinocular Compound Microscope offer?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                It provides standard optical magnification from 40X to 1000X using paired Widefield WF10X eyepieces and four DIN Achromatic objectives: 4X (scanning), 10X (low power), 40X spring-loaded (high dry), and 100X spring-loaded oil immersion. Optional WF16X or WF20X eyepieces can extend magnification up to 1600X or 2000X.
              </div>
            </details>
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Can I connect a digital camera, smartphone, or USB imaging sensor to the phototube?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Yes. The vertical phototube features a standard C-mount adapter compatible with USB 3.0 CMOS microscopy cameras, HDMI live-streaming cameras, DSLR T-mount adapters, and smartphone optical clamps for instant digital documentation.
              </div>
            </details>
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Why are the optical elements treated with anti-fungal coatings?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Tropical climates and laboratory humidity can promote fungal hyphae growth between internal lens elements, degrading clarity and resolution permanently. All our microscope prisms, eyepieces, and objectives are vacuum-treated with specialized anti-fungal and anti-reflective coatings to ensure decade-long optical brilliance.
              </div>
            </details>
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What turnkey calibration, warranty, and installation support does AN Global Services provide?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                AN Global Services delivers complete turnkey support. Our optical engineers install, align the beam-splitter, verify condenser collimation, calibrate digital micrometer scales, and supply certified NABL-traceable calibration certificates along with an institutional warranty and spare parts availability.
              </div>
            </details>
          </div>
        </div>
      </section>
      
    </main>
  );
}
