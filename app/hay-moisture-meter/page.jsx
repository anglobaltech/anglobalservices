import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import MoistureMeterBreadcrumbs from "@/components/MoistureMeterBreadcrumbs";

export const metadata = {
  title: "Hay Moisture Meter Manufacturer & Supplier | Digital Straw & Forage Moisture Tester | AN Global Services",
  description:
    "Leading manufacturer, supplier & exporter of high-precision Digital Hay Moisture Meters in India. Features dual-pin stainless steel probe with flexible coiled cable, automatic temperature compensation (ATC), wide 0.0%–80.0% moisture range, ±0.5% accuracy, 0.1% resolution, tri-color LED alert (Low/Medium/High), and data hold. Essential for baled hay, straw, alfalfa, silage, and animal fodder. Certified by AN Global Services.",
  keywords: [
    "Hay Moisture Meter",
    "Hay Meter",
    "Hay Moisture",
    "Hay Moisture Tester",
    "Hay Tester",
    "Digital Hay Moisture Meter",
    "Straw Moisture Meter",
    "Straw Meter",
    "Straw Moisture",
    "Forage Moisture Meter",
    "Alfalfa Moisture Meter",
    "Silage Moisture Meter",
    "Fodder Moisture Meter",
    "Hay Bale Moisture Meter",
    "Bale Moisture Meter",
    "Moisture Meter for Hay",
    "Moisture Meter for Straw",
    "Moisture Tester for Hay",
    "Hay Moisture Probe",
    "Straw Moisture Probe",
    "Parali Moisture Meter",
    "Paddy Straw Moisture Meter",
    "Hay Moisture Meter Price",
    "Hay Moisture Meter Manufacturer India",
    "Hay Moisture Meter Supplier",
    "Buy Hay Moisture Meter",
    "Agricultural Moisture Tester",
    "AN Global Services laboratory equipment"
  ],
  alternates: {
    canonical: "https://www.anglobalservices.com/hay-moisture-meter",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Digital Hay Moisture Meter & Straw Bale Moisture Tester | AN Global Services",
    description:
      "High-precision digital hay moisture meter with dual penetration probe for baled hay, straw, alfalfa, silage, and livestock fodder. Prevents mold and spontaneous combustion.",
    url: "https://www.anglobalservices.com/hay-moisture-meter",
    siteName: "AN Global Services",
    images: [
      {
        url: "https://www.anglobalservices.com/equipment/moisture-meter/hay-moisture-meter.webp",
        width: 1254,
        height: 1254,
        alt: "Digital Handheld Hay Moisture Meter with External Dual Probe and LCD Display",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function HayMoistureMeterPage() {
  return (
    <main className="w-full bg-gray-50 min-h-screen">
      {/* Schema Markup for Top-Notch SEO Ranking */}
      <Script id="hay-moisture-meter-schema" type="application/ld+json" strategy="afterInteractive">
        {`
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              "@id": "https://www.anglobalservices.com/hay-moisture-meter#product",
              "name": "Hay Moisture Meter - Digital Straw & Forage Bale Moisture Tester",
              "alternateName": [
                "Hay Moisture Meter",
                "Hay Meter",
                "Hay Moisture",
                "Hay Tester",
                "Digital Hay Moisture Meter",
                "Straw Moisture Meter",
                "Straw Meter",
                "Straw Moisture",
                "Forage Moisture Meter",
                "Alfalfa Moisture Meter",
                "Silage Moisture Meter",
                "Fodder Moisture Meter",
                "Hay Bale Moisture Meter",
                "Moisture Meter for Hay",
                "Hay Moisture Probe",
                "Parali Moisture Meter"
              ],
              "description": "High-precision digital handheld Hay Moisture Meter equipped with a dual stainless steel penetration probe and heavy-duty coiled cable. Designed for rapid, accurate moisture testing in baled hay, straw, alfalfa, silage, grass, and animal fodder to prevent mold formation, nutritional loss, and spontaneous combustion.",
              "image": "https://www.anglobalservices.com/equipment/moisture-meter/hay-moisture-meter.webp",
              "brand": {
                "@type": "Brand",
                "name": "AN Global Services"
              },
              "manufacturer": {
                "@type": "Organization",
                "name": "AN Global Services",
                "url": "https://www.anglobalservices.com"
              },
              "category": "Moisture Meters / Agricultural Testing Equipment / Forage & Feed Testing Instruments",
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
                  "name": "Hay Moisture Meter",
                  "item": "https://www.anglobalservices.com/hay-moisture-meter"
                }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is a Hay Moisture Meter and how does it work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A Hay Moisture Meter (also called a Hay Meter, Straw Moisture Meter, or Hay Probe) is an electronic testing instrument designed to measure the water percentage in harvested forage, baled hay, straw, alfalfa, and silage. It operates on electrical conductivity and resistance principles: dual stainless steel electrode pins on the probe penetrate deep into the bale, transmitting an electrical current through the compressed plant stems. Because water conducts electricity far better than dry fiber, the microprocessor accurately converts the measured resistance into a precise digital moisture percentage on the LCD screen."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the recommended safe moisture content for baling and storing hay?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The ideal safe moisture level depends on bale geometry: small rectangular bales should be baled at 15% to 18% moisture, large round bales at 13% to 15%, and high-density square bales below 14% to 15%. If hay is baled below 12%, dry leaves shatter, drastically reducing protein content and digestibility. If hay exceeds 18% to 20% without preservative treatment, internal bacterial fermentation accelerates, generating high internal heat that ruins feed value and can trigger spontaneous combustion fires."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does the tri-color LED traffic light indicator help during field testing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our digital hay moisture meter features an intuitive tri-color LED alert system right on the front console: Green indicates Low / Safe moisture (ready for baling and long-term storage), Yellow signifies Medium / Caution moisture (acceptable for immediate feeding or requires ventilation), and Red warns of High moisture (unsafe for storage, high risk of internal rotting, mold, and haystack fire). This enables operators to evaluate hundreds of bales at a rapid glance without squinting at numerical digits."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do you obtain an accurate reading inside dense or large hay bales?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To achieve maximum accuracy, insert the dual probe pins directly into the flat end or curved side of the bale, penetrating across the grain of the stems rather than parallel to them. Avoid loose outer layers and push the probe deep toward the core. Taking 4 to 5 readings at different depths and angles across each batch provides a representative moisture average. The built-in Data HOLD button freezes the reading on the display for easy viewing after withdrawing the probe."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can this moisture meter test paddy straw (parali), wheat straw, and silage?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our meter is engineered for broad agricultural flexibility, covering wheat straw, paddy straw (parali), barley straw, alfalfa, clover, mixed meadow grass, corn stalks, sugarcane bagasse, and high-moisture wrapped silage up to 80% moisture. It is widely used by biomass pellet manufacturers, biofuel plants, and paper mills to assess paddy straw moisture prior to industrial processing."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What calibration, warranty, and support does AN Global Services supply?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AN Global Services delivers complete turnkey equipment packages, including multi-crop factory calibration curves, dual pin probe with heavy-duty coiled cable, protective sensor caps, alkaline battery pack, and an illustrated instruction manual. Each unit includes optional NABL-traceable calibration certification, comprehensive warranty coverage, and nationwide after-sales service and technical support."
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
            currentTitle="Hay Moisture Meter"
            currentSlug="hay-moisture-meter"
          />

          <div className="max-w-5xl lg:max-w-6xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-semibold tracking-wide uppercase text-blue-200 mb-4 shadow-sm text-center">
              <Sparkles size={14} className="text-yellow-400 shrink-0" />
              Agricultural Safety &amp; Fodder Quality Standards · Rapid Digital Hay &amp; Straw Moisture Analysis
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase drop-shadow-sm text-center">
              Hay Moisture Meter
            </h1>

            <p className="mt-4 text-base sm:text-lg text-blue-100/90 font-normal leading-relaxed max-w-5xl text-center mx-auto">
              Engineered for livestock farmers, commercial fodder producers, equestrian facilities, dairy farms, and agricultural baling contractors, this high-precision digital hay moisture analyzer provides instantaneous, dependable moisture readings across baled hay, straw, alfalfa, silage, and forage. Widely searched by farmers and agri-traders as <strong className="font-semibold text-white">Hay Moisture Meter</strong>, <strong className="font-semibold text-white">Hay Meter</strong>, <strong className="font-semibold text-white">Straw Moisture Meter</strong>, <strong className="font-semibold text-white">Forage Moisture Meter</strong>, <strong className="font-semibold text-white">Hay Moisture Probe</strong>, or <strong className="font-semibold text-white">Parali Moisture Meter</strong>.
            </p>

            <div className="mt-7 flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm text-blue-100">
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/15 shadow-sm">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" /> 0.1% Resolution &amp; ±0.5% Repeatable Accuracy
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/15 shadow-sm">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" /> Tri-Color LED Traffic Light (Low / Medium / High Alert)
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/15 shadow-sm">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" /> Dual Stainless Steel Probe with Flexible Coiled Cable
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
              <div className="relative w-full h-full max-w-[360px] aspect-square">
                <Image
                  src="/equipment/moisture-meter/hay-moisture-meter.webp"
                  alt="Digital Handheld Hay Moisture Meter with External Dual Probe and LCD Display"
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
                  We are a Leading Manufacturer, Supplier, and Exporter of the <strong className="text-[#0075B6]">Digital Hay Moisture Meter</strong> in India. Specially designed for rigorous agricultural field demands, this portable instrument delivers fast, reliable moisture content measurements across baled hay, straw, alfalfa, silage, grass fodder, and compressed crop residue.
                </p>
                <p>
                  Featuring an ergonomic handheld body paired with a heavy-duty dual-pin stainless steel probe connected via a flexible coiled cable, the device gauges electrical conductivity through compressed forage stems. The digital LCD screen provides instant numerical feedback while 3 integrated LED indicator lights immediately categorize the moisture level as <span className="text-emerald-600 font-bold">Low (Safe)</span>, <span className="text-amber-600 font-bold">Medium (Caution)</span>, or <span className="text-red-600 font-bold">High (Danger)</span>.
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
                      Testing hay and straw moisture is vital to avoid devastating haystack barn fires from spontaneous combustion, prevent dangerous mycotoxin mold in dairy and equine feed, and maintain peak protein nutritional value. Our team delivers <strong className="text-[#0a192f]">turnkey agricultural testing solutions</strong>, including factory calibration verified against standard air-oven reference methods (ISO 712 / IS 4333), on-site support, and complete warranty protection.
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
              <h2 className="text-3xl font-black text-[#0a192f] mb-4">How Hay Moisture Analysis Works</h2>
              <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Evaluating moisture in dense agricultural bales demands deep pin penetration and reliable electrical conductivity sensing. Here is how our digital meter operates in the field:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Probe Insertion &amp; Deep Bale Penetration</h3>
                    <p className="text-gray-600 leading-relaxed">The operator presses the dual stainless steel electrode pins firmly into the center of the hay bale or windrow, penetrating across the grain of compressed stems to reach core moisture zones.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Electrical Resistance &amp; Conductivity Sensing</h3>
                    <p className="text-gray-600 leading-relaxed">A calibrated electrical current flows between the dual probe tips. Plant moisture acts as an electrical conductor; dry fiber acts as an insulator. The sensor records conductivity shifts directly proportional to free moisture.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Microprocessor ATC, LED Alert &amp; Data Hold</h3>
                    <p className="text-gray-600 leading-relaxed">The internal microprocessor applies Automatic Temperature Compensation (ATC), calculates the moisture %, activates the color-coded LED traffic light, and freezes the reading on the display with one tap of the HOLD key.</p>
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
                    <strong className="block text-lg text-gray-900">Commercial Hay Baling &amp; Forage Producers</strong>
                    <span className="text-gray-600">Prevents baling forage when too wet (risk of mold and silo fire) or too dry (loss of nutrient-rich leaves and protein disintegration).</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Dairy Farms &amp; Equine Stables</strong>
                    <span className="text-gray-600">Shields high-value dairy cattle and sport horses from respiratory diseases and toxic mycotoxins caused by fungal mold in damp feed.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Paddy Straw (Parali) &amp; Biomass Energy Plants</strong>
                    <span className="text-gray-600">Monitors paddy straw and wheat straw moisture before pelletizing, briquette pressing, paper manufacturing, or biomass power generation.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Silage, Haylage &amp; Fermented Forage Bales</strong>
                    <span className="text-gray-600">Enables farmers to confirm optimal dry-matter ratios before sealing silage bunkers or wrapping green bales in plastic films.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Hay Warehousing, Silos &amp; Export Trading</strong>
                    <span className="text-gray-600">Guarantees compliance with international maritime shipping standards, preventing container overheating and biological degradation.</span>
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
            <h2 className="text-3xl md:text-4xl font-black text-[#0a192f] mb-4">Equipment Features &amp; Specs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Engineered for instantaneous, accurate, and repeatable moisture determination across diverse agricultural forages.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                  01
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Dual-Pin Probe</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Hardened Stainless Steel:</strong> Sharp penetration pins easily pierce compressed bales without bending.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Flexible Coiled Cable:</strong> Allows testing at awkward bale angles while holding the meter comfortably.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Protective Pin Covers:</strong> Includes custom protective caps for secure storage and operator safety.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Tri-Color Alert &amp; Hold</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>3-LED Traffic Light:</strong> Instant Green (Low), Yellow (Medium), and Red (High) moisture classification.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Data HOLD Function:</strong> Freezes stable readings on the screen when working in dark barn corners.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>High-Contrast LCD:</strong> Easy-to-read digital screen with battery icon and moisture percentage display.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Wide Range &amp; ATC</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>0.0% to 80.0% Wide Range:</strong> Accommodates everything from crisp dry straw to wet fermented silage.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Automatic Temp Compensation:</strong> Eliminates thermal expansion errors across field shifts.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Rugged Ergonomic Shell:</strong> Molded ABS enclosure built to withstand dusty barn and field drops.</li>
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
                    <div className="text-white font-semibold">Electrical Resistance / Conductivity</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Moisture Range</div>
                    <div className="text-white font-semibold">0.0% to 80.0% (Wide Range)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Resolution &amp; Accuracy</div>
                    <div className="text-white font-semibold">0.1% Resolution | ±0.5% Accuracy</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Temperature Compensation</div>
                    <div className="text-white font-semibold">Automatic (ATC) across 0°C to 50°C</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Probe Sensor</div>
                    <div className="text-white font-semibold">Dual Stainless Steel Pins with Cable</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Visual Alerts</div>
                    <div className="text-white font-semibold">3-LED Traffic Light (Low/Med/High)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Power Source</div>
                    <div className="text-white font-semibold">Standard Alkaline Batteries (Cordless)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Tested Materials</div>
                    <div className="text-white font-semibold">Hay, Straw, Alfalfa, Silage, Parali</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Maintenance & Compliance Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-black text-[#0a192f] mb-4">Maintenance &amp; Calibration Guide</h2>
            <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
              Sustaining accuracy across demanding agricultural harvesting seasons requires simple probe care and regular calibration checks. AN Global Services supports your forage operations nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-[#0075B6] pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Probe Cleaning Protocol</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Wipe stainless steel probe pins clean with a dry towel after testing wet silage or acidic forage.</li>
                <li>Store with protective caps attached to shield probe tips from blunt impact and debris.</li>
                <li>Do not immerse the main meter housing in water; wipe exterior with a damp microfiber cloth.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Calibration &amp; Verification</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Air-Oven Benchmark:</strong> Periodically cross-verify readings against laboratory oven drying (ISO 712).</li>
                <li><strong>Zero Balance Check:</strong> Verify that the device reads 0.0% in dry ambient air before sampling.</li>
                <li><strong>Cable Inspection:</strong> Check the coiled cable for stress or wear to maintain reliable electrical conductivity.</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Fire &amp; Spoilage Prevention</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Strictly enforce baling thresholds under 18% moisture to prevent internal bacterial heat buildup.</li>
                <li>Eliminates catastrophic haystack and barn spontaneous combustion events.</li>
                <li>Optional NABL-traceable calibration certificate issued by AN Global Services.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Explore Other Moisture Meter & Balance Models Section */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
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
                Browse our comprehensive portfolio of rapid moisture balances, digital analytical balances, and industrial agricultural testing machinery.
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
              href="/grain-moisture-meter"
              className="group p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#0075B6] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-[#0075B6] uppercase tracking-wider block mb-1">Grains &amp; Agriculture</span>
                <h3 className="font-bold text-slate-900 group-hover:text-[#0075B6] transition-colors text-base mb-2">
                  Grain Moisture Meter
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  Digital multi-grain moisture tester with funnel hopper and ATC for whole wheat, paddy, rice, maize, and pulses.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#0075B6] mt-4 flex items-center gap-1">
                Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

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
              href="/red-pepper-moisture-meter"
              className="group p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#0075B6] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-[#0075B6] uppercase tracking-wider block mb-1">Spices &amp; Peppers</span>
                <h3 className="font-bold text-slate-900 group-hover:text-[#0075B6] transition-colors text-base mb-2">
                  Red Pepper Moisture Meter
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  Digital compression moisture tester with ATC for whole dried red chilies, flakes, paprika, and spices.
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
      <section className="bg-white py-16 border-t border-gray-200" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-[#0075B6] rounded-full mx-auto mb-6"></div>
            <p className="text-gray-500 text-lg">Common inquiries about our Digital Hay Moisture Meter equipment.</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What is a Hay Moisture Meter and how does it work?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                A Hay Moisture Meter (also called a Hay Meter, Straw Moisture Meter, or Hay Probe) is an electronic testing instrument designed to measure the water percentage in harvested forage, baled hay, straw, alfalfa, and silage. It operates on electrical conductivity and resistance principles: dual stainless steel electrode pins on the probe penetrate deep into the bale, transmitting an electrical current through the compressed plant stems. Because water conducts electricity far better than dry fiber, the microprocessor accurately converts the measured resistance into a precise digital moisture percentage on the LCD screen.
              </div>
            </details>
            
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What is the recommended safe moisture content for baling and storing hay?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                The ideal safe moisture level depends on bale geometry: small rectangular bales should be baled at 15% to 18% moisture, large round bales at 13% to 15%, and high-density square bales below 14% to 15%. If hay is baled below 12%, dry leaves shatter, drastically reducing protein content and digestibility. If hay exceeds 18% to 20% without preservative treatment, internal bacterial fermentation accelerates, generating high internal heat that ruins feed value and can trigger spontaneous combustion fires.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                How does the tri-color LED traffic light indicator help during field testing?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Our digital hay moisture meter features an intuitive tri-color LED alert system right on the front console: Green indicates Low / Safe moisture (ready for baling and long-term storage), Yellow signifies Medium / Caution moisture (acceptable for immediate feeding or requires ventilation), and Red warns of High moisture (unsafe for storage, high risk of internal rotting, mold, and haystack fire). This enables operators to evaluate hundreds of bales at a rapid glance without squinting at numerical digits.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                How do you obtain an accurate reading inside dense or large hay bales?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                To achieve maximum accuracy, insert the dual probe pins directly into the flat end or curved side of the bale, penetrating across the grain of the stems rather than parallel to them. Avoid loose outer layers and push the probe deep toward the core. Taking 4 to 5 readings at different depths and angles across each batch provides a representative moisture average. The built-in Data HOLD button freezes the reading on the display for easy viewing after withdrawing the probe.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Can this moisture meter test paddy straw (parali), wheat straw, and silage?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Yes, our meter is engineered for broad agricultural flexibility, covering wheat straw, paddy straw (parali), barley straw, alfalfa, clover, mixed meadow grass, corn stalks, sugarcane bagasse, and high-moisture wrapped silage up to 80% moisture. It is widely used by biomass pellet manufacturers, biofuel plants, and paper mills to assess paddy straw moisture prior to industrial processing.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What calibration, warranty, and support does AN Global Services supply?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                AN Global Services delivers complete turnkey equipment packages, including multi-crop factory calibration curves, dual pin probe with heavy-duty coiled cable, protective sensor caps, alkaline battery pack, and an illustrated instruction manual. Each unit includes optional NABL-traceable calibration certification, comprehensive warranty coverage, and nationwide after-sales service and technical support.
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}

