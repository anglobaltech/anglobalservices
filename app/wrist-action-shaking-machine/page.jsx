import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { CheckCircle2, ShieldCheck, ArrowRight, Sparkles, Activity, Gauge, Settings, Zap } from "lucide-react";
import ShakerBreadcrumbs from "@/components/ShakerBreadcrumbs";

export const metadata = {
  title: "Wrist Action Shaking Machine Manufacturer & Supplier | Laboratory Flask & Funnel Shaker | AN Global Services",
  description: "Leading manufacturer of Wrist Action Shaking Machines in India. Simulates natural human wrist-swirling action (380–400 oscillations/min) with dual side arms holding up to 8 separatory funnels and Erlenmeyer flasks (100ml–1000ml).",
  keywords: [
    "Wrist Action Shaking Machine",
    "Wrist Action Shaker",
    "Laboratory Flask Shaker",
    "Separatory Funnel Shaker",
    "Burrell Wrist Action Shaker",
    "Swirling Action Shaker",
    "Analytical Shaker",
    "AN Global Services"
],
  alternates: {
    canonical: "https://www.anglobalservices.com/wrist-action-shaking-machine",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Wrist Action Shaking Machine | AN Global Services",
    description: "Leading manufacturer of Wrist Action Shaking Machines in India. Simulates natural human wrist-swirling action (380–400 oscillations/min) with dual side arms holding up to 8 separatory funnels and Erlenmeyer flasks (100ml–1000ml).",
    url: "https://www.anglobalservices.com/wrist-action-shaking-machine",
    siteName: "AN Global Services",
    images: [
      {
        url: "https://www.anglobalservices.com/equipment/laboratory-shaking-machine-manufacturer-products/wrist-action-shaking-machine.webp",
        width: 1200,
        height: 800,
        alt: "Wrist Action Shaking Machine - AN Global Services Laboratory Equipment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function WristActionShakingMachinePage() {
  return (
    <main className="w-full bg-gray-50 min-h-screen">
      {/* Schema Markup for Top-Notch SEO Ranking */}
      <Script id="wrist-action-shaking-machine-schema" type="application/ld+json" strategy="afterInteractive">
        {`
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              "@id": "https://www.anglobalservices.com/wrist-action-shaking-machine#product",
              "name": "Wrist Action Shaking Machine - Laboratory Shaking Machine",
              "description": "Leading manufacturer of Wrist Action Shaking Machines in India. Simulates natural human wrist-swirling action (380–400 oscillations/min) with dual side arms holding up to 8 separatory funnels and Erlenmeyer flasks (100ml–1000ml).",
              "image": "https://www.anglobalservices.com/equipment/laboratory-shaking-machine-manufacturer-products/wrist-action-shaking-machine.webp",
              "brand": {
                "@type": "Brand",
                "name": "AN Global Services"
              },
              "manufacturer": {
                "@type": "Organization",
                "name": "AN Global Services",
                "url": "https://www.anglobalservices.com"
              },
              "category": "Laboratory Shaking Machine / Laboratory Equipment",
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
                  "name": "Laboratory Shaking Machine",
                  "item": "https://www.anglobalservices.com/equipments-and-machinery"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Wrist Action Shaking Machine",
                  "item": "https://www.anglobalservices.com/wrist-action-shaking-machine"
                }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is a Wrist Action Shaking Machine?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It is a specialized laboratory shaking machine that replicates the gentle or vigorous swirling motion of the human wrist. It is primarily used with separatory funnels and Erlenmeyer flasks for liquid-liquid solvent extractions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why is a wrist-action shaker preferred for separatory funnels?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Excessively violent shaking can form stubborn emulsions that take hours to separate. Wrist-action swirling mixes the two immiscible liquid phases vigorously enough for rapid solute transfer while preventing severe emulsion formation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How many vessels can it hold simultaneously?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Standard configurations feature dual side arms holding 4, 8, or up to 12 flasks or separatory funnels ranging in size from 100ml to 1000ml."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can the swirling angle be adjusted?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. An angle adjustment knob allows stepless control from 0° (no motion) up to 15° (maximum swirling vortex)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does it accommodate both pear-shaped and globe funnels?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, the multi-finger rubber-lined clamps conform securely to standard cylindrical, pear-shaped, and conical separatory funnels without scratching glassware."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What warranty and service support is included?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AN Global Services provides a complete institutional warranty, optical frequency calibration, and nationwide on-site technical support."
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
          
          <ShakerBreadcrumbs
            currentTitle="Wrist Action Shaking Machine"
            currentSlug="wrist-action-shaking-machine"
          />

          <div className="max-w-5xl lg:max-w-6xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-semibold tracking-wide uppercase text-blue-200 mb-4 shadow-sm text-center">
              <Sparkles size={14} className="text-yellow-400 shrink-0" />
              Standardized Hand-Swirl Liquid-Liquid Extraction Standard
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase drop-shadow-sm text-center">
              Wrist Action Shaking Machine
            </h1>

            <p className="mt-4 text-base sm:text-lg text-blue-100/90 font-normal leading-relaxed max-w-5xl text-center mx-auto">
              Specialized analytical laboratory shaker that replicates the natural swirling motion of the human wrist. Widely searched as <strong className="font-semibold text-white">Wrist Action Shaking Machine</strong>, <strong className="font-semibold text-white">Wrist Action Shaker</strong>, <strong className="font-semibold text-white">Separatory Funnel Shaker</strong>, <strong className="font-semibold text-white">Flask Swirler</strong>, or <strong className="font-semibold text-white">Liquid-Liquid Extraction Shaker</strong> for pharmaceutical partitioning and environmental extraction.
            </p>

            <div className="mt-7 flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm text-blue-100">
              
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/15 shadow-sm">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" /> Simulates Natural Human Wrist-Action Swirling Motion
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/15 shadow-sm">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" /> Dual Side Arms Holding up to 8 Separatory Funnels or Flasks
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/15 shadow-sm">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" /> Variable Swirling Oscillation Angle (0° to 15°)
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
                  src="/equipment/laboratory-shaking-machine-manufacturer-products/wrist-action-shaking-machine.webp"
                  alt="Wrist Action Shaking Machine - AN Global Services Laboratory Equipment"
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
                  The <strong className="text-[#0075B6]">Wrist Action Shaking Machine</strong> (frequently referred to as a <em>separatory funnel swirler</em> or <em>Burrell wrist action shaker</em>) is a world-renowned analytical instrument designed to mechanize and standardize the human wrist swirling motion.
                </p>
                <p>
                  Equipped with dual horizontal shafts carrying adjustable rubber-padded finger clamps, it swirls separatory funnels and Erlenmeyer flasks through a precise variable arc (0° to 15°). This creates vigorous vortexing without violent tumbling, making it the premier choice for liquid-liquid solvent extractions, accelerated reagent dissolving, and organic phase separations without emulsion formation.
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
                      Includes dual side arms, universal glassware clamps, digital timer calibration, on-site commissioning, and NABL documentation by AN Global Services.
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Glassware Clamping & Angle Setting</h3>
                    <p className="text-gray-600 leading-relaxed">Clamp up to 8 separatory funnels or conical flasks onto the dual lateral arms. Adjust the angle control knob to dial in gentle swirl or vigorous vortexing.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">High-Frequency Wrist Oscillation</h3>
                    <p className="text-gray-600 leading-relaxed">The fractional HP motor rotates an internal eccentric crank, producing 380 to 400 reciprocating angular oscillations per minute.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Effortless Phase Separation</h3>
                    <p className="text-gray-600 leading-relaxed">Continuous swirling accelerates phase partitioning between immiscible solvents, releasing entrained solutes without forming stubborn emulsion layers.</p>
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
                    <strong className="block text-lg text-gray-900">Pharmaceutical Liquid-Liquid Extractions</strong>
                    <span className="text-gray-600">Separating active drug ingredients into organic solvent phases using standard pear-shaped separatory funnels.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Pesticide & Environmental Residue Testing</strong>
                    <span className="text-gray-600">Extracting organochlorine and pesticide residues from water and soil slurries into hexane or ether.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Food & Beverage Quality Testing</strong>
                    <span className="text-gray-600">Fat determination, essential oil extraction, and flavor compound partitioning.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Petrochemical & Oil Analysis</strong>
                    <span className="text-gray-600">Washing hydrocarbons, crude oil desulfurization extractions, and additive blending.</span>
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
              <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Simulated Human Wrist Motion</h3>
              <ul className="space-y-3 text-gray-600 font-medium text-sm">
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Replicates the swirling motion of the human hand at 380–400 oscillations per minute.</li>
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Variable stroke angle control from 0° (idle) to 15° (vigorous vortexing).</li>
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Smooth continuous operation prevents emulsion formation in delicate solvent systems.</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                02
              </div>
              <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Dual Side-Arm Carrying Capacity</h3>
              <ul className="space-y-3 text-gray-600 font-medium text-sm">
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Dual lateral steel shafts hold up to 4, 8, or 12 vessels simultaneously.</li>
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Universal rubber-cushioned finger clamps firmly grip glassware from 100ml to 1000ml.</li>
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Accommodates both pear-shaped and cylindrical separatory funnels as well as Erlenmeyer flasks.</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                03
              </div>
              <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Precision Timing & Heavy-Duty Base</h3>
              <ul className="space-y-3 text-gray-600 font-medium text-sm">
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> 0–60 Minute mechanical or digital countdown timer with auto-off.</li>
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Heavy cast-iron foundation with suction feet prevents bench walking.</li>
                <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> Continuous-duty fractional horsepower motor with thermal protection.</li>
              </ul>
            </div>

            {/* Full Width Specs Table */}
            <div className="bg-[#0a192f] rounded-2xl p-8 shadow-lg md:col-span-2 lg:col-span-3 mt-4 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white mb-6 border-b border-white/20 pb-4">Technical Specifications &amp; Operational Parameters</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Motion Type</div>
                    <div className="text-white font-semibold">Simulated Human Wrist-Action Swirling Oscillation</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Oscillation Frequency</div>
                    <div className="text-white font-semibold">380 to 400 Oscillations per minute</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Swirling Angle</div>
                    <div className="text-white font-semibold">Variable 0° to 15° Arc Adjustment</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Vessel Capacity</div>
                    <div className="text-white font-semibold">4, 8, or 12 Flasks / Separatory Funnels (100ml to 1000ml)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Clamp Design</div>
                    <div className="text-white font-semibold">Adjustable Rubber-Lined Stainless Steel Finger Clamps</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Timer Control</div>
                    <div className="text-white font-semibold">0 to 60 Minutes with Automatic Motor Shut-Off</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Motor Power</div>
                    <div className="text-white font-semibold">0.25 HP Heavy-Duty Fractional Motor</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Operating Voltage</div>
                    <div className="text-white font-semibold">220/230V AC, 50Hz Single Phase</div>
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
                <li>Inspect rubber finger clamp linings for wear or chemical attack to prevent direct metal-on-glass contact.</li>
                <li>Ensure lateral arm clamp tightening screws are securely torqued prior to initiating motion.</li>
                <li>Wipe cast iron base clean of any solvent or acid drops immediately.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Operational Protocols</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Symmetrical Arm Loading: Always balance vessel quantities and liquid volumes evenly between left and right side arms.</li>
                <li>Separatory Funnel Venting: Regularly pause during volatile solvent extraction to relieve internal vapor pressure in funnels.</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Annual Servicing</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Verification of oscillation frequency (380–400 opm) using certified strobe or optical tachometer.</li>
                <li>Lubricate internal eccentric rocker arm joints and bronze bushings with high-grade synthetic grease.</li>
                <li>Inspect motor drive belt tension, electrical grounding, and auto-cutoff timer accuracy.</li>
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
                What is a Wrist Action Shaking Machine?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                It is a specialized laboratory shaking machine that replicates the gentle or vigorous swirling motion of the human wrist. It is primarily used with separatory funnels and Erlenmeyer flasks for liquid-liquid solvent extractions.
              </div>
            </details>
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Why is a wrist-action shaker preferred for separatory funnels?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Excessively violent shaking can form stubborn emulsions that take hours to separate. Wrist-action swirling mixes the two immiscible liquid phases vigorously enough for rapid solute transfer while preventing severe emulsion formation.
              </div>
            </details>
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                How many vessels can it hold simultaneously?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Standard configurations feature dual side arms holding 4, 8, or up to 12 flasks or separatory funnels ranging in size from 100ml to 1000ml.
              </div>
            </details>
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Can the swirling angle be adjusted?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Yes. An angle adjustment knob allows stepless control from 0° (no motion) up to 15° (maximum swirling vortex).
              </div>
            </details>
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Does it accommodate both pear-shaped and globe funnels?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Yes, the multi-finger rubber-lined clamps conform securely to standard cylindrical, pear-shaped, and conical separatory funnels without scratching glassware.
              </div>
            </details>
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What warranty and service support is included?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                AN Global Services provides a complete institutional warranty, optical frequency calibration, and nationwide on-site technical support.
              </div>
            </details>
          </div>
        </div>
      </section>
      
    </main>
  );
}
