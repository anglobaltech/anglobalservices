import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import MoistureMeterBreadcrumbs from "@/components/MoistureMeterBreadcrumbs";

export const metadata = {
  title: "Grain Moisture Meter Manufacturer & Supplier | Digital Multi-Grain Moisture Tester | AN Global Services",
  description:
    "Leading manufacturer, supplier & exporter of high-precision Digital Grain Moisture Meters in India. Features instant non-destructive capacitance testing, automatic temperature compensation (ATC), wide 3.0%–35.0% moisture range, ±0.5% accuracy, 0.1% readability, top funnel sample cup, and multi-grain pre-calibrations for wheat, paddy, rice, maize, barley & pulses. Certified by AN Global Services for FCI, mandi procurement, silos & seed laboratories.",
  keywords: [
    "Grain Moisture Meter",
    "Grain Meter",
    "Grain Moisture",
    "Grain Moisture Tester",
    "Grain Tester",
    "Digital Grain Moisture Meter",
    "Grain Moisture Analyzer",
    "Paddy Moisture Meter",
    "Paddy Meter",
    "Wheat Moisture Meter",
    "Wheat Meter",
    "Corn Moisture Meter",
    "Rice Grain Moisture Meter",
    "Multi Grain Moisture Meter",
    "Portable Grain Moisture Meter",
    "Handheld Grain Moisture Meter",
    "Agricultural Moisture Meter",
    "Moisture Meter for Grains",
    "Moisture Tester for Grains",
    "Moisture Meter for Paddy",
    "Moisture Meter for Wheat",
    "Grain Moisture Machine",
    "Dana Nami Meter",
    "Nami Meter",
    "Grain Moisture Meter Price",
    "Grain Moisture Meter Manufacturer India",
    "Grain Moisture Meter Supplier",
    "Mandi Grain Moisture Meter",
    "FCI Grain Moisture Meter",
    "AN Global Services laboratory equipment",
    "ISO 712 Grain Moisture"
  ],
  alternates: {
    canonical: "https://www.anglobalservices.com/grain-moisture-meter",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Digital Grain Moisture Meter & Multi-Grain Moisture Tester | AN Global Services",
    description:
      "High-precision digital dielectric grain moisture meter with automatic temperature compensation for wheat, paddy, rice, maize, barley, and agricultural seeds. Rapid non-destructive testing.",
    url: "https://www.anglobalservices.com/grain-moisture-meter",
    siteName: "AN Global Services",
    images: [
      {
        url: "https://www.anglobalservices.com/equipment/moisture-meter/grain-moisture-meters.webp",
        width: 1024,
        height: 1536,
        alt: "Digital Handheld Grain Moisture Meter with Top Funnel and LCD Display",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function GrainMoistureMeterPage() {
  return (
    <main className="w-full bg-gray-50 min-h-screen">
      {/* Schema Markup for Top-Notch SEO Ranking */}
      <Script id="grain-moisture-meter-schema" type="application/ld+json" strategy="afterInteractive">
        {`
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              "@id": "https://www.anglobalservices.com/grain-moisture-meter#product",
              "name": "Grain Moisture Meter - Digital Multi-Grain Moisture Tester",
              "alternateName": [
                "Grain Moisture Meter",
                "Grain Meter",
                "Grain Moisture",
                "Grain Tester",
                "Digital Grain Moisture Meter",
                "Multi Grain Moisture Meter",
                "Portable Grain Moisture Meter",
                "Handheld Grain Moisture Meter",
                "Paddy Moisture Meter",
                "Paddy Meter",
                "Wheat Moisture Meter",
                "Wheat Meter",
                "Corn Moisture Meter",
                "Moisture Meter for Grains",
                "Grain Moisture Analyzer",
                "Grain Moisture Machine",
                "Dana Nami Meter"
              ],
              "description": "High-precision handheld digital Grain Moisture Meter engineered for instantaneous, non-destructive moisture measurement in whole uncrushed grains including wheat, paddy, milled rice, maize, barley, soybean, and pulses. Features top funnel loading hopper, automatic temperature compensation (ATC), broad 3.0%–35.0% moisture range, and multi-grain pre-calibrations.",
              "image": "https://www.anglobalservices.com/equipment/moisture-meter/grain-moisture-meters.webp",
              "brand": {
                "@type": "Brand",
                "name": "AN Global Services"
              },
              "manufacturer": {
                "@type": "Organization",
                "name": "AN Global Services",
                "url": "https://www.anglobalservices.com"
              },
              "category": "Moisture Meters / Agricultural Testing Equipment / Grain Quality Testing Instruments",
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
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.anglobalservices.com/"
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
                  "name": "Grain Moisture Meter",
                  "item": "https://www.anglobalservices.com/grain-moisture-meter"
                }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is a Grain Moisture Meter and how does it work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A Grain Moisture Meter (commonly referred to as a Grain Meter, Grain Tester, or Dana Nami Meter) is an electronic digital instrument used to rapidly measure water content in harvested food grains and seeds such as wheat, paddy, rice, maize, barley, and pulses. It utilizes the dielectric capacitance or electrical conductivity principle: whole grain kernels loaded through the funnel hopper pass into a precision measuring cell where changes in electrical permittivity are detected and converted by a microprocessor into an instantaneous percentage moisture readout."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the acceptable safe moisture limit for food grain procurement and storage?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For safe commercial storage and procurement under Food Corporation of India (FCI) and APMC mandi standards, standard moisture limits are typically 12.0% for wheat, 14.0% for paddy, 14.0% for maize, and 12.0% for pulses. Excess moisture above these statutory limits causes mold growth, heating, mycotoxin contamination, and sprout damage, resulting in heavy price deductions or lot rejections."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does this grain moisture meter require grinding or crushing the grains?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, our digital grain moisture meter uses a non-destructive whole-grain measurement chamber. The operator simply fills the grain sample using the top funnel hopper without grinding, crushing, or damaging the seed coat. This saves significant testing time during fast-paced mandi intake, preserves seed germination viability, and eliminates messy sample cleanup."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why is Automatic Temperature Compensation (ATC) critical for field grain testing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Grain temperature fluctuates widely from cold morning harvests (10°C) to scorching midday mandi inspections (40°C+). Because grain electrical properties change with thermal expansion, an uncompensated meter yields inaccurate readings. Our grain moisture meter features built-in Automatic Temperature Compensation (ATC) that dynamically adjusts the calibration curve based on the grain's actual temperature, ensuring dependable accuracy across 0°C to 50°C."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which grain varieties and agricultural crops can be tested on this meter?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The instrument is pre-programmed with calibrated curves for a comprehensive variety of agricultural commodities including Wheat, Paddy (rough rice), Milled Rice, Maize (Corn), Barley, Soybean, Sorghum (Jowar), Pearl Millet (Bajra), Chickpeas (Gram), Lentils, Rapeseed / Mustard, and Coffee beans. Operators can quickly toggle between crop codes using the keypad navigation arrows."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What calibration, warranty, and documentation are provided by AN Global Services?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AN Global Services delivers complete turnkey equipment packages including factory calibration referenced to ISO 712 and IS 4333 standard air-oven protocols. Each unit is delivered with an inspection certificate, comprehensive user manual, alkaline battery set, sample funnel accessory, and optional NABL-traceable calibration certification. We provide nationwide technical support, warranty coverage, and annual recalibration services."
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
          <MoistureMeterBreadcrumbs
            currentTitle="Grain Moisture Meter"
            currentSlug="grain-moisture-meter"
          />

          <div className="max-w-5xl lg:max-w-6xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-semibold tracking-wide uppercase text-blue-200 mb-4 shadow-sm text-center">
              <Sparkles size={14} className="text-yellow-400 shrink-0" />
              ISO 712 &amp; FCI Mandi Standards Compliant · Rapid Digital Multi-Grain Moisture Analysis
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase drop-shadow-sm text-center">
              Grain Moisture Meter
            </h1>

            <p className="mt-4 text-base sm:text-lg text-blue-100/90 font-normal leading-relaxed max-w-5xl text-center mx-auto">
              Engineered for farmers, grain procurement centers (mandis), silos, seed producers, and flour millers, this high-precision digital grain moisture analyzer provides instantaneous, non-destructive moisture readings for wheat, paddy, rice, maize, barley, soybean, and pulses. Widely searched by agricultural professionals and traders as <strong className="font-semibold text-white">Grain Moisture Meter</strong>, <strong className="font-semibold text-white">Grain Meter</strong>, <strong className="font-semibold text-white">Paddy Moisture Meter</strong>, <strong className="font-semibold text-white">Wheat Moisture Meter</strong>, <strong className="font-semibold text-white">Grain Moisture Tester</strong>, or <strong className="font-semibold text-white">Dana Nami Meter</strong>.
            </p>

            <div className="mt-7 flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm text-blue-100">
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/15 shadow-sm">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" /> 0.1% Readability &amp; ±0.5% Repeatable Accuracy
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/15 shadow-sm">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" /> Automatic Temperature Compensation (ATC)
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/15 shadow-sm">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" /> Multi-Grain Calibrations with Funnel Sample Cell
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
            <div className="lg:w-[40%] relative flex items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-white border-b lg:border-b-0 lg:border-r border-gray-100 min-h-[420px]">
              <div className="absolute inset-0 opacity-10 mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0075B6 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
              <div className="relative w-full h-full max-w-[340px] aspect-[2/3]">
                <Image
                  src="/equipment/moisture-meter/grain-moisture-meters.webp"
                  alt="Digital Handheld Grain Moisture Meter with Top Funnel and LCD Display"
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
                  We are a Leading Manufacturer, Supplier, and Exporter of the <strong className="text-[#0075B6]">Digital Grain Moisture Meter</strong> in India. Specially engineered for fast, reliable field and laboratory operations, this portable instrument delivers instant moisture measurements across whole uncrushed grains, oilseeds, and pulses without causing any structural seed damage.
                </p>
                <p>
                  Featuring an ergonomic upright body with a top sample funnel hopper and an internal high-frequency capacitance sensor, the meter measures dielectric variations within the grain mass. The digital control console enables operators to effortlessly select specific grain commodities (such as wheat, paddy, rice, maize, barley, and soybeans), while integrated Automatic Temperature Compensation (ATC) guarantees unwavering precision in fluctuating weather conditions.
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
                      Ensuring accurate grain moisture is paramount to avoid mandi price deductions, prevent fungal and mycotoxin infestation during warehousing, and optimize milling recovery. Our team provides <strong className="text-[#0a192f]">turnkey laboratory equipment solutions</strong>, including multi-crop factory calibration verified against standard air-oven reference methods (ISO 712 / IS 4333), on-site verification, and dedicated nationwide support.
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
              <h2 className="text-3xl font-black text-[#0a192f] mb-4">How Grain Moisture Analysis Works</h2>
              <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Accurate moisture evaluation in whole cereal grains requires volumetric uniformity and non-destructive dielectric measurement. Here is how our meter delivers fast, reproducible results:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Funnel Loading &amp; Controlled Cell Filling</h3>
                    <p className="text-gray-600 leading-relaxed">Whole uncrushed grain kernels are poured into the funnel hopper. The funnel release mechanism drops the sample evenly into the measuring cup, guaranteeing uniform volumetric density without manual packing.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Dielectric Capacitance &amp; High-Frequency Sensing</h3>
                    <p className="text-gray-600 leading-relaxed">The internal sensor passes a high-frequency alternating electric field through the grain mass. Water molecules possess a significantly higher dielectric constant than dry grain matter, enabling exact moisture calculation.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Microprocessor ATC &amp; Instant Digital Readout</h3>
                    <p className="text-gray-600 leading-relaxed">The integrated temperature sensor immediately applies Automatic Temperature Compensation (ATC), eliminating thermal errors and displaying the stable percentage moisture on the digital LCD within seconds.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-inner">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Key Agricultural Sectors &amp; Commercial Uses</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Grain Mandis &amp; Procurement Hubs (FCI / APMC)</strong>
                    <span className="text-gray-600">Essential for rapid intake grading, fair farmer settlements, and verifying compliance with statutory procurement thresholds (12% wheat, 14% paddy).</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Commercial Grain Silos &amp; Warehouses (CWC / SWC)</strong>
                    <span className="text-gray-600">Prevents dangerous hotspot formation, fungal growth, grain respiration losses, and insect infestations during long-term bulk storage.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Rice Mills &amp; Paddy Processing Plants</strong>
                    <span className="text-gray-600">Monitors incoming rough paddy moisture prior to parboiling, drying, and hulling to maximize head rice yield and minimize grain breakage.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Flour Mills &amp; Dal (Pulse) Processing Units</strong>
                    <span className="text-gray-600">Optimizes grain conditioning and tempering water addition to ensure flawless bran peeling and maximum flour extraction rates.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Seed Certification Agencies &amp; Agronomy Labs</strong>
                    <span className="text-gray-600">Safeguards seed embryo health and maintains high germination percentages in certified breeder, foundation, and certified seed stocks.</span>
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
            <h2 className="text-3xl md:text-4xl font-black text-[#0a192f] mb-4">Equipment Features &amp; Specs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Engineered for instantaneous, accurate, and repeatable moisture determination across diverse agricultural grains.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                  01
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Multi-Crop Matrix</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Pre-Calibrated Curves:</strong> Instant selection for wheat, paddy, rice, maize, barley, soybean, and pulses.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Wide Measurement Range:</strong> Measures 3.0% to 35.0% moisture content depending on crop type.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>High Readability:</strong> Crisp 0.1% resolution with ±0.5% repeatable accuracy across all grains.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Non-Destructive Testing</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Whole Grain Analysis:</strong> No grinding or crushing required, keeping seed coats intact.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Top Funnel Hopper:</strong> Controlled drop loading prevents uneven sample packing and density skew.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Multi-Sample Averaging:</strong> Built-in statistical algorithm calculates mean across multiple truck loads.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">ATC &amp; Field Portability</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Automatic Temp Compensation:</strong> Eliminates thermal error across field conditions from 0°C to 50°C.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Ergonomic Handheld Grip:</strong> Molded integrated handle for fatigue-free operation during long mandi shifts.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Battery-Powered Cordless:</strong> Operates on standard 4 × AA batteries with auto-shutoff power saving.</li>
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
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Measuring Principle</div>
                    <div className="text-white font-semibold">Dielectric Capacitance / Conductivity</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Moisture Range</div>
                    <div className="text-white font-semibold">3.0% to 35.0% (Crop Dependent)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Readability &amp; Accuracy</div>
                    <div className="text-white font-semibold">0.1% Resolution | ±0.5% Accuracy</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Temperature Compensation</div>
                    <div className="text-white font-semibold">Automatic (ATC) from 0°C to 50°C</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Sample Loading</div>
                    <div className="text-white font-semibold">Top Funnel Drop Chamber (Whole Grain)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Display Screen</div>
                    <div className="text-white font-semibold">Digital Backlit LCD with Crop Code</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Power Supply</div>
                    <div className="text-white font-semibold">4 × 1.5V AA Alkaline Batteries</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Supported Commodities</div>
                    <div className="text-white font-semibold">Wheat, Paddy, Rice, Maize, Barley, Pulses</div>
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
            <h2 className="text-3xl font-black text-[#0a192f] mb-4">Maintenance &amp; Calibration Guide</h2>
            <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
              Maintaining steady accuracy during dusty grain mandi arrivals requires simple maintenance and periodic verification. AN Global Services supports your agricultural quality control operations nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-[#0075B6] pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Chamber Cleaning Protocol</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Empty and brush out leftover grains, husks, and chaff after every test sequence.</li>
                <li>Keep the internal electrode plates clean using the supplied soft-bristle brush.</li>
                <li>Never wash the interior with water or solvents; wipe the exterior with a dry cloth.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Calibration &amp; Verification</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Oven Standardization:</strong> Validate periodically against ISO 712 / IS 4333 air-oven reference tests.</li>
                <li><strong>Commodity Curve Check:</strong> Verify baseline values using certified reference grain samples.</li>
                <li><strong>Zero-Point Balance:</strong> Confirm that the sensor zeroes properly with an empty clean chamber.</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">FCI &amp; Mandi Compliance</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Guarantees procurement intake conforms to FCI, APMC, and NAFED moisture standards.</li>
                <li>Prevents price penalty disputes between buyers and agricultural commission agents.</li>
                <li>Optional NABL-traceable calibration certificate issued by AN Global Services.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Explore Other Moisture Meter & Balance Models Section */}
      <section className="bg-slate-50 py-10 sm:py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-xs font-semibold uppercase tracking-wider text-[#0075B6] mb-3">
                Moisture &amp; Laboratory Balances Portfolio
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0a192f] tracking-tight">
                Explore Related Machinery Models
              </h2>
              <p className="text-sm text-slate-500 mt-1 max-w-xl">
                Browse our comprehensive portfolio of rapid moisture balances, digital analytical balances, and industrial food testing machinery.
              </p>
            </div>
            <Link
              href="/equipments-and-machinery"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0075B6] hover:text-[#005a8f] transition-colors whitespace-nowrap self-start sm:self-auto"
            >
              View Full Equipment Catalog <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Link
              href="/flour-moisture-meter"
              className="group p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#0075B6] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-[#0075B6] uppercase tracking-wider block mb-1">Milling &amp; Powders</span>
                <h3 className="font-bold text-slate-900 group-hover:text-[#0075B6] transition-colors text-base mb-2">
                  Flour Moisture Meter
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  Digital dielectric moisture analyzer with ATC for whole wheat flour, atta, maida, semolina, and rice flour.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#0075B6] mt-4 flex items-center gap-1">
                Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/infrared-moisture-balance"
              className="group p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#0075B6] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-[#0075B6] uppercase tracking-wider block mb-1">Thermal Analysis</span>
                <h3 className="font-bold text-slate-900 group-hover:text-[#0075B6] transition-colors text-base mb-2">
                  Infrared Moisture Balance
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  Rapid halogen &amp; infrared loss-on-drying moisture analyzer with 0.01% readability for analytical food testing.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#0075B6] mt-4 flex items-center gap-1">
                Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/hay-moisture-meter"
              className="group p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#0075B6] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-[#0075B6] uppercase tracking-wider block mb-1">Forage &amp; Straw</span>
                <h3 className="font-bold text-slate-900 group-hover:text-[#0075B6] transition-colors text-base mb-2">
                  Hay Moisture Meter
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  Heavy-duty dual-pin probe moisture tester with tri-color LED for baled hay, straw, silage, and fodder.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#0075B6] mt-4 flex items-center gap-1">
                Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/equipments-and-machinery"
              className="group p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#0075B6] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-[#0075B6] uppercase tracking-wider block mb-1">Complete Portfolio</span>
                <h3 className="font-bold text-slate-900 group-hover:text-[#0075B6] transition-colors text-base mb-2">
                  Equipments &amp; Machinery Catalog
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  Explore full range of autoclaves, centrifuges, laboratory shaking machines, balances, and testing apparatus.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#0075B6] mt-4 flex items-center gap-1">
                Explore Catalog <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
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
            <p className="text-gray-500 text-lg">Common inquiries about our Digital Grain Moisture Meter equipment.</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What is a Grain Moisture Meter and how does it work?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                A Grain Moisture Meter (commonly referred to as a Grain Meter, Grain Tester, or Dana Nami Meter) is an electronic digital instrument used to rapidly measure water content in harvested food grains and seeds such as wheat, paddy, rice, maize, barley, and pulses. It utilizes the dielectric capacitance or electrical conductivity principle: whole grain kernels loaded through the funnel hopper pass into a precision measuring cell where changes in electrical permittivity are detected and converted by a microprocessor into an instantaneous percentage moisture readout.
              </div>
            </details>
            
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What is the acceptable safe moisture limit for food grain procurement and storage?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                For safe commercial storage and procurement under Food Corporation of India (FCI) and APMC mandi standards, standard moisture limits are typically 12.0% for wheat, 14.0% for paddy, 14.0% for maize, and 12.0% for pulses. Excess moisture above these statutory limits causes mold growth, heating, mycotoxin contamination, and sprout damage, resulting in heavy price deductions or lot rejections.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Does this grain moisture meter require grinding or crushing the grains?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                No, our digital grain moisture meter uses a non-destructive whole-grain measurement chamber. The operator simply fills the grain sample using the top funnel hopper without grinding, crushing, or damaging the seed coat. This saves significant testing time during fast-paced mandi intake, preserves seed germination viability, and eliminates messy sample cleanup.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Why is Automatic Temperature Compensation (ATC) critical for field grain testing?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Grain temperature fluctuates widely from cold morning harvests (10°C) to scorching midday mandi inspections (40°C+). Because grain electrical properties change with thermal expansion, an uncompensated meter yields inaccurate readings. Our grain moisture meter features built-in Automatic Temperature Compensation (ATC) that dynamically adjusts the calibration curve based on the grain&apos;s actual temperature, ensuring dependable accuracy across 0°C to 50°C.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Which grain varieties and agricultural crops can be tested on this meter?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                The instrument is pre-programmed with calibrated curves for a comprehensive variety of agricultural commodities including Wheat, Paddy (rough rice), Milled Rice, Maize (Corn), Barley, Soybean, Sorghum (Jowar), Pearl Millet (Bajra), Chickpeas (Gram), Lentils, Rapeseed / Mustard, and Coffee beans. Operators can quickly toggle between crop codes using the keypad navigation arrows.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What calibration, warranty, and documentation are provided by AN Global Services?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                AN Global Services delivers complete turnkey equipment packages including factory calibration referenced to ISO 712 and IS 4333 standard air-oven protocols. Each unit is delivered with an inspection certificate, comprehensive user manual, alkaline battery set, sample funnel accessory, and optional NABL-traceable calibration certification. We provide nationwide technical support, warranty coverage, and annual recalibration services.
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
