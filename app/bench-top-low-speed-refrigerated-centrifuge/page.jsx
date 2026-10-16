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
  title: "Bench Top Low Speed Refrigerated Centrifuge | Cooling Centrifuge - AN Global Services",
  description:
    "Buy high-performance Bench Top Low Speed Refrigerated Centrifuge (Cooling Centrifuge / Low Speed Cooling Centrifuge) engineered for blood component separation, cell culture harvesting, and clinical diagnostics down to -20°C up to 6,000 RPM. Request a quote today.",
  keywords: [
    // Full Product Names
    "Bench Top Low Speed Refrigerated Centrifuge",
    "Benchtop Low Speed Refrigerated Centrifuge",
    "Low Speed Refrigerated Centrifuge",
    "Bench Top Low Speed Cooling Centrifuge",
    "Benchtop Low Speed Cooling Centrifuge",
    // Short, Half, and Popular Industry Search Terms
    "Cooling Centrifuge",
    "Low Speed Cooling Centrifuge",
    "Cold Centrifuge",
    "Refrigerated Centrifuge",
    "Refrigerated Benchtop Centrifuge",
    "Benchtop Cooling Centrifuge",
    "Blood Bank Cooling Centrifuge",
    "Clinical Cooling Centrifuge",
    "Refrigerated Swing-Out Centrifuge",
    "Low Temp Centrifuge",
    "Low Speed Cold Centrifuge",
    "4 Degree Cooling Centrifuge",
    "Vacutainer Cooling Centrifuge",
    "Platelet Separation Cooling Centrifuge",
    "PRP Cooling Centrifuge",
    "AN Global Services laboratory equipment"
  ],
  alternates: {
    canonical: "https://www.anglobalservices.com/bench-top-low-speed-refrigerated-centrifuge",
  },
  openGraph: {
    title: "Bench Top Low Speed Refrigerated Centrifuge | Cooling Centrifuge",
    description: "Precision temperature-controlled low speed cooling centrifuge for blood component separation and cell culture harvesting down to -20°C. Discover refrigerated centrifuges by AN Global Services.",
    url: "https://www.anglobalservices.com/bench-top-low-speed-refrigerated-centrifuge",
    siteName: "AN Global Services",
    images: [
      {
        url: "https://www.anglobalservices.com/equipment/centrifuge/bench-top-low-speed-refrigerated-centrifuge.webp",
        width: 1200,
        height: 800,
        alt: "Bench Top Low Speed Refrigerated Centrifuge Laboratory Equipment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bench Top Low Speed Refrigerated Centrifuge | Cooling Centrifuge",
    description: "Explore bench top low speed refrigerated centrifuges engineered for blood banking, clinical diagnostics, and cell separation.",
    images: ["https://www.anglobalservices.com/equipment/centrifuge/bench-top-low-speed-refrigerated-centrifuge.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BenchTopLowSpeedRefrigeratedCentrifugePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": "https://www.anglobalservices.com/bench-top-low-speed-refrigerated-centrifuge#product",
        "name": "Bench Top Low Speed Refrigerated Centrifuge",
        "alternateName": [
          "Cooling Centrifuge",
          "Low Speed Cooling Centrifuge",
          "Cold Centrifuge",
          "Low Speed Refrigerated Centrifuge",
          "Refrigerated Benchtop Centrifuge",
          "Benchtop Cooling Centrifuge",
          "Blood Bank Cooling Centrifuge",
          "Clinical Cooling Centrifuge",
          "Chilled Centrifuge"
        ],
        "description": "A high-performance bench top low speed refrigerated centrifuge (cooling centrifuge) engineered for blood component separation, cell culture pelleting, clinical pathology, and pharmaceutical preparation with eco-friendly CFC-free cooling from -20°C to +40°C.",
        "image": "https://www.anglobalservices.com/equipment/centrifuge/bench-top-low-speed-refrigerated-centrifuge.webp",
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
          "reviewCount": "142",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.anglobalservices.com/bench-top-low-speed-refrigerated-centrifuge#breadcrumb",
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
            "name": "Bench Top Low Speed Refrigerated Centrifuge",
            "item": "https://www.anglobalservices.com/bench-top-low-speed-refrigerated-centrifuge"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.anglobalservices.com/bench-top-low-speed-refrigerated-centrifuge#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a Bench Top Low Speed Refrigerated Centrifuge and when is it preferred over high-speed models?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A Bench Top Low Speed Refrigerated Centrifuge (frequently termed a Cooling Centrifuge or Low Speed Cooling Centrifuge) operates at speeds up to 4,000–6,000 RPM (~3,500–5,500 xg). Unlike high-velocity microcentrifuges that can shear intact cells or lyse delicate membranes, low-speed centrifuges provide gentle hydrodynamic sedimentation. Combined with sub-zero refrigeration (-20°C to +40°C), this instrument is the gold standard for separating whole blood into plasma, buffy coat, and red cells without hemolysis, as well as harvesting living cell cultures and density-gradient media at strictly controlled 4°C."
            }
          },
          {
            "@type": "Question",
            "name": "Can this equipment be searched or purchased using popular half names like Cooling Centrifuge or Low Speed Cooling Centrifuge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, absolutely. Across clinical pathology laboratories, blood banks, and hospital research centers, this instrument is widely known and searched under shorthand names such as Cooling Centrifuge, Low Speed Cooling Centrifuge, Cold Centrifuge, Refrigerated Benchtop Centrifuge, or Low Speed Refrigerated Centrifuge. All of these designations describe our benchtop refrigerated system equipped with digital temperature management and high-capacity swing-out or fixed-angle rotors."
            }
          },
          {
            "@type": "Question",
            "name": "How does active cooling protect blood components and cellular viability?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Centrifugal spinning generates mechanical air friction, which causes chamber temperatures to rise rapidly. Temperature spikes above 10°C degrade clotting factors, cause platelet activation, and alter biochemical markers in serum samples. Our active CFC-free refrigeration continuously maintains temperatures at 4°C (±1°C), locking cellular metabolism in stasis, preserving enzymatic stability, and preventing hemolysis."
            }
          },
          {
            "@type": "Question",
            "name": "What rotor configurations and tube capacities are supported?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The instrument supports versatile rotor formats including 4 x 250ml or 4 x 500ml swing-out buckets, adapters for 15ml and 50ml conical Falcon tubes, multiple vacutainer racks (up to 48 blood collection tubes per run), and microplate carriers for ELISA / PCR 96-well plates."
            }
          },
          {
            "@type": "Question",
            "name": "Why are multi-step acceleration and deceleration profiles critical?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Abrupt braking creates turbulence inside sample tubes, disturbing fragile boundary layers between separated liquid phases (e.g., resuspending white blood cell buffy coats into red cells). Our unit provides 9 distinct acceleration and 10 deceleration curves, including gentle coast-to-stop braking for pristine layer separation."
            }
          },
          {
            "@type": "Question",
            "name": "What safety and biocontainment features are included?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The centrifuge features an automated motorized lid lock that prevents lid opening until rotor standstill, a stainless steel inner chamber with armored steel containment walls, dynamic electronic imbalance detection that aborts the cycle within milliseconds of asymmetric loading, and an emergency manual lid release mechanism."
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
        id="bench-top-low-speed-refrigerated-centrifuge-schema"
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
            currentTitle="Bench Top Low Speed Refrigerated Centrifuge"
            currentSlug="bench-top-low-speed-refrigerated-centrifuge"
          />

          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-semibold tracking-wide uppercase text-blue-200 mb-4 shadow-sm">
              <Sparkles size={14} className="text-yellow-400" />
              Refrigerated &amp; Clinical Separation Series
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase drop-shadow-sm text-center">
              Bench Top Low Speed Refrigerated Centrifuge
            </h1>

            <p className="mt-3 text-base sm:text-lg text-blue-100/90 font-normal leading-relaxed max-w-3xl text-center mx-auto">
              Precision temperature-regulated clinical laboratory centrifuge for blood component separation, cell cultures, and diagnostic assays. Widely identified as <strong className="font-semibold text-white">Cooling Centrifuge</strong>, <strong className="font-semibold text-white">Low Speed Cooling Centrifuge</strong>, <strong className="font-semibold text-white">Cold Centrifuge</strong>, or <strong className="font-semibold text-white">Low Speed Refrigerated Centrifuge</strong>.
            </p>

            <div className="mt-6 flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm text-blue-100">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md border border-white/10">
                <CheckCircle2 size={15} className="text-emerald-400" /> -20°C to +40°C CFC-Free Cooling
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md border border-white/10">
                <CheckCircle2 size={15} className="text-emerald-400" /> 4,000 – 6,000 RPM Gentle Separation
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md border border-white/10">
                <CheckCircle2 size={15} className="text-emerald-400" /> Large Capacity Swing-Out &amp; Fixed Rotors
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
                  src="/equipment/centrifuge/bench-top-low-speed-refrigerated-centrifuge.webp"
                  alt="Bench Top Low Speed Refrigerated Centrifuge Laboratory Equipment"
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
                  The <strong className="text-[#0075B6]">Bench Top Low Speed Refrigerated Centrifuge</strong> (universally recognized across hospital blood banks, pathology laboratories, and pharmaceutical facilities as a <strong className="font-semibold text-gray-900">Cooling Centrifuge</strong> or <strong className="font-semibold text-gray-900">Low Speed Cooling Centrifuge</strong>) is a high-capacity thermal separation instrument engineered for gentle sample sedimentation.
                </p>
                <p>
                  Unlike aggressive micro-centrifuges that can damage delicate mammalian cells or lyse red blood cells, this instrument delivers controlled, low-shear centrifugal acceleration up to 4,000–6,000 RPM. Integrated with an <strong className="font-semibold text-gray-900">advanced CFC-free refrigeration unit and intelligent microprocessor speed regulation</strong>, it reliably maintains samples at a continuous 4°C, preventing thermal degradation of coagulation factors, enzymes, hormones, and density-gradient cell fractions.
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
              <h2 className="text-3xl font-black text-[#0a192f] mb-4">Gentle Hydrodynamic Separation &amp; Controlled Sub-Zero Environment</h2>
              <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Achieving clean liquid-liquid and cellular phase separation without disturbing delicate boundary layers requires synchronized thermal management and low-shear kinematics:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Chamber Pre-Cooling &amp; Thermal Pull-Down</h3>
                    <p className="text-gray-600 leading-relaxed">The dedicated Fast Temp button rapidly engages the compressor, pulling down the stainless steel bowl and swing-out rotor buckets to 4°C prior to sample loading, preventing thermal shock to refrigerated blood products.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Low-Shear Centrifugal Sedimentation</h3>
                    <p className="text-gray-600 leading-relaxed">Operating at smooth, controlled velocities up to 4,000–6,000 RPM (up to 5,500 xg), the unit stratifies cells, platelets, and plasma into distinct density layers without mechanical hemolysis or membrane rupture.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Soft Braking &amp; Continuous Temperature Stasis</h3>
                    <p className="text-gray-600 leading-relaxed">Customizable deceleration profiles bring the rotor to a smooth, vibrationless halt, preventing resuspension of fragile buffy coat bands while active cooling holds set temperatures during standstill.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-inner">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Key Applications &amp; Clinical Facilities</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Blood Banks &amp; Transfusion Medicine</strong>
                    <span className="text-gray-600">The industry standard for preparing platelet-rich plasma (PRP), concentrated erythrocytes, cryoprecipitate, and cell-free plasma fractions.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Clinical Pathology &amp; Diagnostic Laboratories</strong>
                    <span className="text-gray-600">High-throughput processing of multi-format vacutainer blood collection tubes, urine sediment analysis, and hormone assay sample stabilization.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Cell Culture &amp; Biotechnology Centers</strong>
                    <span className="text-gray-600">Gentle pelleting of primary mammalian cells, stem cell suspensions, hybridomas, and density-gradient Ficoll separations.</span>
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
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Engineered for temperature preservation, multi-rotor flexibility, and clinical safety.</p>
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
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Fast Temp Pre-Cooling:</strong> Dedicated express chilling cycle drops rotor temperature from ambient to 4°C in under 10 minutes.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Numeric Keypad &amp; LED Display</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Direct Numeric Input:</strong> Full numeric keypad allows instant parameter programming for speed, run time, and temperature.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Tri-Display Digital Screen:</strong> Simultaneous real-time readout of Speed (RPM/RCF), Time (min/sec), and Temperature (°C).</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Brushless Induction Motor:</strong> Delivers smooth, quiet, vibration-free torque with zero carbon brush maintenance.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Clinical Multi-Tier Safety</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Motorized Dual-Lid Lock:</strong> Electromagnetic interlock keeps lid securely locked until complete rotor standstill.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Stainless Steel Chamber:</strong> Seamless corrosion-resistant bowl with heavy armored steel exterior containment.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Electronic Imbalance Shut-Off:</strong> Automatically cuts power and triggers smooth braking if tubes are loaded unevenly.</li>
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
                    <div className="text-white font-semibold">4,000 – 6,000 RPM | Up to 5,500 xg</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Temperature Range</div>
                    <div className="text-white font-semibold">-20°C to +40°C (±1°C Accuracy)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Rotor Capacity</div>
                    <div className="text-white font-semibold">4 x 250ml / 500ml | 48 x 5/7ml Vacutainer | Microplates</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Motor &amp; Noise Level</div>
                    <div className="text-white font-semibold">Brushless Induction DC | &lt; 58 dBA Low Noise</div>
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
              Adhering to regular clinical refrigeration maintenance ensures sample viability, avoids compressor overheating, and guarantees rotor safety:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-[#0075B6] pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Condenser Cleaning &amp; Defrost Protocol</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Leave the lid open at the end of each day to allow condensation to evaporate; wipe the stainless steel chamber dry with a lint-free cloth.</li>
                <li>Vacuum dust and lint from the refrigeration condenser ventilation grills monthly to ensure optimal heat dissipation.</li>
                <li>Never use metal scrapers to chip away frost; always utilize the automatic defrost cycle or allow ambient thawing.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Swing-Out Bucket Care &amp; Pin Lubrication</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Regularly clean and apply a thin film of lubricant to rotor trunnion pins and bucket pivot grooves to ensure free horizontal swinging.</li>
                <li>Pre-cool the rotor using the Fast Temp function before loading chilled vacutainer tubes to prevent ambient temperature shock.</li>
                <li>Always balance tubes and bucket carriers symmetrically across the rotor axis by weight (within ±0.5 g).</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Professional Calibration</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Annual optical tachometer verification to confirm that digital display RPM corresponds accurately with physical rotor rotation.</li>
                <li>Multi-point thermal probe calibration to verify chamber temperature accuracy at -20°C, 4°C, and 20°C under load.</li>
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
              href="/bench-top-high-speed-refrigerated-centrifuge"
              className="group p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#0075B6] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-[#0075B6] uppercase tracking-wider block mb-1">Refrigerated</span>
                <h3 className="font-bold text-slate-900 group-hover:text-[#0075B6] transition-colors text-base mb-2">
                  Bench Top High Speed Refrigerated
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  High-velocity benchtop cooling centrifuge with multi-format tube adaptability up to 16,500 RPM for biochemists.
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
              href="/bench-top-low-speed-centrifuge"
              className="group p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#0075B6] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-[#0075B6] uppercase tracking-wider block mb-1">Non Refrigerated</span>
                <h3 className="font-bold text-slate-900 group-hover:text-[#0075B6] transition-colors text-base mb-2">
                  Bench Top Low Speed Centrifuge
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  Standard non-refrigerated benchtop centrifuge for routine clinical urine, blood, and cell separations.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#0075B6] mt-4 flex items-center gap-1">
                Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/table-top-oil-test-centrifuge"
              className="group p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#0075B6] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-[#0075B6] uppercase tracking-wider block mb-1">Industrial</span>
                <h3 className="font-bold text-slate-900 group-hover:text-[#0075B6] transition-colors text-base mb-2">
                  Table Top Oil Test Centrifuge
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  Specialized heated petroleum testing centrifuge for determining water and sediment content according to ASTM standards.
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
            <p className="text-gray-500 text-lg">Learn more about our Bench Top Low Speed Refrigerated Centrifuges.</p>
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
