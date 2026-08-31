import Image from "next/image";
import Link from "next/link";
import LazySection from "@/components/LazySection";
import RequestPricingButton from "@/app/food-ingredients/components/RequestPricingButton";
import BusinessHours from "@/app/food-ingredients/components/BusinessHours";
import { CheckCircle2, ShieldCheck, Activity, Zap, Factory, MessageCircle, ChevronRight, Droplets, Leaf, Phone, Mail, MapPin, Truck, Globe } from "lucide-react";

export const metadata = {
  title: "Imported Sanitary Napkins | Bulk Supplier India | Premium Quality",
  description: "Looking for premium sanitary napkins? We import ultra-thin, rash-free, high-absorbency sanitary pads from Nepal and supply in bulk all over India. Request wholesale pricing today.",
  keywords: "Sanitary napkins bulk supplier, imported sanitary pads India, Nepal imported sanitary napkins, wholesale feminine hygiene, rash free sanitary pads, ultra thin pads wholesale",
};

export default function SanitaryNapkinsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Premium Imported Sanitary Napkins",
    image: "https://www.anglobalservices.com/logo.png",
    description: "Premium ultra-thin, rash-free sanitary napkins imported from Nepal. Available for bulk supply across India.",
    brand: {
      "@type": "Brand",
      name: "Imported from Nepal",
    },
    offers: {
      "@type": "Offer",
      url: "https://www.anglobalservices.com/import-export/sanitary-napkins",
      priceCurrency: "INR",
      price: "0",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "AN Global Services",
      },
    },
  };

  const faqs = [
    {
      question: "Are these imported sanitary napkins manufactured in Nepal?",
      answer: "Yes, our premium sanitary napkins are manufactured in state-of-the-art facilities in Nepal using advanced Japanese technology. As a leading B2B supplier, we act as the primary bulk importer and distributor across India."
    },
    {
      question: "What makes your wholesale sanitary pads 100% rash-free?",
      answer: "Our feminine hygiene products feature a dermatologically tested, ultra-soft cotton-like top sheet combined with a breathable backsheet. This prevents moisture build-up and friction, which are the primary causes of skin irritation and rashes."
    },
    {
      question: "Can I order sanitary napkins in bulk for my retail chain or distribution network?",
      answer: "Absolutely. We specialize in B2B bulk supply of imported sanitary napkins. We cater to large-scale distribution requirements for supermarket chains, pharmacies, and institutional buyers all over India with highly competitive wholesale pricing."
    },
    {
      question: "What absorbency levels do your premium sanitary pads offer?",
      answer: "Our napkins utilize a high-grade Super Absorbent Polymer (SAP) core that instantly locks in fluids. They are engineered for regular to heavy flow, providing up to 12 hours of leak-proof protection."
    },
    {
      question: "What is the Minimum Order Quantity (MOQ) for wholesale sanitary napkins?",
      answer: "As a primary bulk distributor, our MOQ is optimized for wholesale buyers, typically starting from a standard pallet or container load depending on your location in India. Contact our sales team for an exact quote tailored to your business needs."
    }
  ];

  const specs = [
    { label: "Product Type", value: "Ultra-Thin Sanitary Napkins (With Wings)" },
    { label: "Origin", value: "Imported (Nepal)" },
    { label: "Top Sheet Material", value: "Premium Soft Cotton-feel / Non-woven" },
    { label: "Absorbent Core", value: "High-grade SAP (Super Absorbent Polymer) + Airlaid Paper" },
    { label: "Backsheet", value: "Breathable PE Film" },
    { label: "Sizes Available", value: "Regular (240mm), Large (280mm), XL (320mm)" },
  ];

  const qualityStandards = [
    { label: "Dermatological Testing", value: "100% Skin-Friendly & Rash-Free" },
    { label: "Sterilization", value: "UV Sterilized Manufacturing Process" },
    { label: "ISO Compliance", value: "Manufactured in ISO 9001 Certified Facilities" },
    { label: "Odor Control", value: "Advanced Odor-Lock Technology (Fragrance-Free options available)" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gray-50 flex flex-col">
        
        {/* HERO BANNER (Full Width, Left Aligned, Beautiful Background) */}
        <section className="relative w-full bg-[#0a192f] min-h-[75vh] py-12 md:py-16 overflow-hidden flex flex-col justify-center text-left">
          {/* Beautiful overlay & pattern */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] via-[#112240] to-pink-900/40 opacity-90" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            {/* Glowing orbs for aesthetics */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-pink-500/20 blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-[100px]" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start w-full">
            <LazySection className="flex flex-col items-start w-full md:w-2/3 lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-pink-300 text-sm font-bold tracking-widest uppercase mb-6 sm:mb-8 shadow-2xl">
                ★ Imported from Nepal
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8 drop-shadow-2xl">
                Premium Sanitary Napkins
              </h1>
              <p className="text-pink-300 text-2xl md:text-3xl font-semibold mb-8">
                Bulk Wholesale Supply Across India
              </p>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl">
                Experience the ultimate standard in feminine hygiene. We are the leading distributors of ultra-thin, highly absorbent, and 100% rash-free sanitary pads imported directly from state-of-the-art manufacturing facilities in Nepal.
              </p>

              <div className="flex flex-wrap justify-start gap-6 mb-12">
                <div className="flex items-center gap-2 text-gray-200 bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                  <CheckCircle2 className="text-pink-400" size={20} />
                  <span className="font-medium">Ultra-Thin</span>
                </div>
                <div className="flex items-center gap-2 text-gray-200 bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                  <CheckCircle2 className="text-pink-400" size={20} />
                  <span className="font-medium">Rash-Free</span>
                </div>
                <div className="flex items-center gap-2 text-gray-200 bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                  <CheckCircle2 className="text-pink-400" size={20} />
                  <span className="font-medium">Bulk Supply</span>
                </div>
              </div>

              <RequestPricingButton productName="Sanitary Napkins (Imported)" category="Imported Products" theme="pink" />
            </LazySection>
          </div>
        </section>

        {/* DETAILS SECTION */}
        <section className="py-16 lg:py-24 bg-white relative flex-grow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 relative items-start">
              
              {/* Main Content Column */}
              <div className="w-full lg:w-2/3 space-y-16">
                
                {/* Product Overview */}
                <LazySection>
                  <h2 className="text-3xl font-extrabold text-[#0a192f] mb-6 border-b-4 border-pink-500 pb-2 inline-block">Product Overview</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8 whitespace-pre-line">
                    As consumer demand for superior feminine hygiene products skyrockets in India, providing a reliable, comfortable, and safe solution is paramount. Our premium sanitary napkins are imported exclusively from Nepal, manufactured using advanced Japanese machinery and high-grade raw materials to ensure maximum fluid retention without the bulk. 
                    <br/><br/>
                    Designed to cater to the modern woman, these pads feature a breathable backsheet, a soft cotton-like top layer, and unique odor-lock technology. By sourcing directly from Nepal, we bridge the gap for high-end international quality at highly competitive wholesale rates, making it highly lucrative for Indian distributors, retail chains, and institutional buyers.
                    <br/><br/>
                    Furthermore, our robust pan-India logistics network ensures consistent, on-time delivery for all bulk orders, regardless of volume. We provide rigorous quality assurance on every shipment, empowering your business to confidently meet retail demands with a product that guarantees absolute customer satisfaction and repeat sales.
                  </p>

                  <div className="mb-10 mt-12">
                    <h3 className="text-2xl font-bold text-[#0a192f] mb-6 flex items-center gap-3">
                      <Zap className="text-pink-500" size={26} /> Key Highlights
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch">
                      <div className="flex items-start gap-4 bg-white rounded-xl px-5 py-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-pink-500/20 transition-all h-full">
                        <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={24} />
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">Direct Import</h4>
                          <span className="text-gray-600 leading-relaxed text-sm">Sourced directly from top-tier facilities in Nepal.</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 bg-white rounded-xl px-5 py-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-pink-500/20 transition-all h-full">
                        <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={24} />
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">Rash-Free Guarantee</h4>
                          <span className="text-gray-600 leading-relaxed text-sm">Hypoallergenic top-sheet prevents chafing and irritation.</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 bg-white rounded-xl px-5 py-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-pink-500/20 transition-all h-full">
                        <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={24} />
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">Gel Core Tech</h4>
                          <span className="text-gray-600 leading-relaxed text-sm">Advanced SAP core instantly converts liquid to gel.</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 bg-white rounded-xl px-5 py-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-pink-500/20 transition-all h-full">
                        <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={24} />
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">Ultra-Thin Design</h4>
                          <span className="text-gray-600 leading-relaxed text-sm">Barely-there feel while providing maximum leak protection.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </LazySection>

                {/* Health & Functional Benefits */}
                <LazySection>
                  <h2 className="text-3xl font-extrabold text-[#0a192f] mb-8 border-b-4 border-pink-500 pb-2 inline-block">Health & Functional Benefits</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
                    
                    <div className="flex flex-col justify-center bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-pink-500/30 hover:-translate-y-1 transition-all duration-300 group h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-pink-50 text-pink-600 group-hover:scale-110 transition-transform duration-300 shrink-0">
                          <ShieldCheck size={28} />
                        </div>
                        <h4 className="text-xl font-bold text-[#0a192f] leading-snug">Skin Protection</h4>
                      </div>
                      <p className="text-gray-600 text-base leading-relaxed">Dermatologically tested soft top-sheet significantly reduces friction. This effectively prevents chafing, redness, and rashes even during extended periods of wear in hot and humid Indian climates.</p>
                    </div>

                    <div className="flex flex-col justify-center bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-pink-500/30 hover:-translate-y-1 transition-all duration-300 group h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-pink-50 text-pink-600 group-hover:scale-110 transition-transform duration-300 shrink-0">
                          <Droplets size={28} />
                        </div>
                        <h4 className="text-xl font-bold text-[#0a192f] leading-snug">Maximum Dryness</h4>
                      </div>
                      <p className="text-gray-600 text-base leading-relaxed">The high-grade SAP (Super Absorbent Polymer) rapidly locks in moisture and converts it into a gel. This ensures the surface remains completely dry, providing up to 12 hours of comfort.</p>
                    </div>

                    <div className="flex flex-col justify-center bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-pink-500/30 hover:-translate-y-1 transition-all duration-300 group h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-pink-50 text-pink-600 group-hover:scale-110 transition-transform duration-300 shrink-0">
                          <Activity size={28} />
                        </div>
                        <h4 className="text-xl font-bold text-[#0a192f] leading-snug">Breathable Architecture</h4>
                      </div>
                      <p className="text-gray-600 text-base leading-relaxed">Micro-pores integrated into the backsheet allow optimal air circulation. This prevents heat buildup, significantly reducing bacterial growth and unpleasant odors.</p>
                    </div>

                    <div className="flex flex-col justify-center bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-pink-500/30 hover:-translate-y-1 transition-all duration-300 group h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-pink-50 text-pink-600 group-hover:scale-110 transition-transform duration-300 shrink-0">
                          <Leaf size={28} />
                        </div>
                        <h4 className="text-xl font-bold text-[#0a192f] leading-snug">Odor Control</h4>
                      </div>
                      <p className="text-gray-600 text-base leading-relaxed">Engineered with advanced odor-neutralizing technology. Instead of masking odors with heavy perfumes, our pads safely lock away and neutralize odor molecules.</p>
                    </div>

                  </div>
                </LazySection>

                {/* Manufacturing Process */}
                <LazySection>
                  <h2 className="text-3xl font-extrabold text-[#0a192f] mb-8 border-b-4 border-pink-500 pb-2 inline-block">Our Manufacturing Process</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Our sanitary napkins are produced in cutting-edge facilities in Nepal, adhering to strict international hygiene and quality control standards. The process utilizes fully automated Japanese machinery to ensure zero human touch during assembly and packaging.
                  </p>
                  
                  <div className="bg-[#f8f9fa] rounded-2xl p-6 sm:p-8 border border-gray-100">
                    <div className="space-y-8">
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-extrabold text-xl sm:text-2xl shadow-inner">
                          1
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-[#0a192f] mb-2">Raw Material Sourcing</h4>
                          <p className="text-gray-600 leading-relaxed">Premium, hypoallergenic non-woven fabrics and high-grade Super Absorbent Polymer (SAP) are meticulously sourced and tested for purity before entering the assembly line.</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-extrabold text-xl sm:text-2xl shadow-inner">
                          2
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-[#0a192f] mb-2">Automated Core Assembly</h4>
                          <p className="text-gray-600 leading-relaxed">Advanced robotics layer the SAP core between the breathable backsheet and the soft cotton-like topsheet, ensuring uniform distribution for maximum absorbency without adding bulk.</p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-extrabold text-xl sm:text-2xl shadow-inner">
                          3
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-[#0a192f] mb-2">UV Sterilization</h4>
                          <p className="text-gray-600 leading-relaxed">Before final sealing, every single pad passes through an intensive medical-grade UV sterilization tunnel to eliminate any micro-bacterial presence, guaranteeing a 100% hygienic product.</p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-extrabold text-xl sm:text-2xl shadow-inner">
                          4
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-[#0a192f] mb-2">Quality Control & Packaging</h4>
                          <p className="text-gray-600 leading-relaxed">Optical sensors inspect each napkin for defects. Approved batches are then automatically sealed in moisture-proof individual wrappers and packed for bulk dispatch to India.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </LazySection>

                {/* Pan India Distribution */}
                <LazySection>
                  <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl p-8 sm:p-10 border border-blue-100 shadow-sm relative overflow-hidden">
                    {/* Decorative map/globe background accent */}
                    <div className="absolute -bottom-10 -right-10 opacity-5 text-blue-500">
                      <Globe size={300} />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center text-[#0075B6]">
                          <Truck size={30} />
                        </div>
                        <h2 className="text-3xl font-extrabold text-[#0a192f]">Imported from Nepal, Delivered All Over India</h2>
                      </div>
                      
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Our strategic import framework allows us to directly source from the most advanced manufacturing plants in Nepal and distribute seamlessly across all Indian states. By bypassing multiple middlemen, we offer unmatched wholesale rates.
                      </p>
                      
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                          <span className="text-gray-700 font-medium"><strong>Robust Logistics:</strong> Doorstep delivery to major distribution hubs, retail chains, and institutional buyers in any state or territory in India.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                          <span className="text-gray-700 font-medium"><strong>Seamless Customs:</strong> We handle 100% of the import paperwork, border clearances, and freight forwarding. You receive the stock hassle-free.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                          <span className="text-gray-700 font-medium"><strong>Scalable Volume:</strong> Capable of fulfilling mega-bulk orders (container loads) with strict adherence to delivery timelines.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </LazySection>

                {/* Technical Specifications */}
                <LazySection>
                  <h2 className="text-3xl font-extrabold text-[#0a192f] mb-8 border-b-4 border-pink-500 pb-2 inline-block">Product Specifications</h2>
                  
                  <div className="space-y-10">
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-[#0a192f] mb-4">General Specifications</h4>
                      <div className="overflow-x-auto rounded-xl border border-gray-200">
                        <table className="w-full text-left border-collapse bg-white">
                          <tbody>
                            {specs.map((item, i) => (
                              <tr key={i} className="hover:bg-pink-50/30 transition-colors border-b border-gray-200 last:border-b-0">
                                <th className="py-4 px-6 font-semibold text-gray-800 w-1/3 sm:w-1/4 align-top bg-gray-50/50">{item.label}</th>
                                <td className="py-4 px-6 text-gray-600 align-top">{item.value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-[#0a192f] mb-4">Quality & Safety Standards</h4>
                      <div className="overflow-x-auto rounded-xl border border-gray-200">
                        <table className="w-full text-left border-collapse bg-white">
                          <tbody>
                            {qualityStandards.map((item, i) => (
                              <tr key={i} className="hover:bg-pink-50/30 transition-colors border-b border-gray-200 last:border-b-0">
                                <th className="py-4 px-6 font-semibold text-gray-800 w-1/3 sm:w-1/4 align-top bg-gray-50/50">{item.label}</th>
                                <td className="py-4 px-6 text-gray-600 align-top">{item.value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </LazySection>

                {/* FAQs */}
                <LazySection className="max-w-4xl">
                  <div className="mb-10">
                    <h2 className="text-3xl font-extrabold text-[#0a192f] mb-4">Frequently Asked Questions</h2>
                    <div className="w-24 h-1 bg-pink-500 rounded-full"></div>
                  </div>
                  
                  <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                      <details key={idx} className="group bg-[#f8f9fa] rounded-xl border border-gray-200 [&_summary::-webkit-details-marker]:hidden open:shadow-md transition-all duration-300">
                        <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer font-bold text-[#0a192f] text-sm md:text-base">
                          <span className="pr-4">{faq.question}</span>
                          <span className="transition-transform duration-300 group-open:rotate-90 shrink-0">
                            <ChevronRight className="text-gray-400" size={20} />
                          </span>
                        </summary>
                        <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600 leading-relaxed text-sm md:text-base border-t border-gray-100 pt-4 mt-2 hidden group-open:block animate-in fade-in slide-in-from-top-2 duration-300">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </LazySection>

                {/* Call to Action Banner */}
                <LazySection>
                  <div className="bg-gradient-to-br from-[#0a192f] to-[#112340] rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl relative overflow-hidden mt-8">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-pink-600"></div>
                    <div className="relative z-10">
                      <h3 className="text-3xl font-extrabold mb-6">Ready to Stock Premium Sanitary Napkins?</h3>
                      <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Partner with AN Global Services for seamless import, massive bulk supply, and unbeatable wholesale pricing all across India.
                      </p>
                      <div className="flex justify-center">
                        <RequestPricingButton productName="Sanitary Napkins (Imported)" category="Imported Products" theme="pink" />
                      </div>
                    </div>
                  </div>
                </LazySection>
              </div>

              {/* Right Column: Premium Sticky Sidebar */}
              <div className="w-full lg:w-1/3 lg:sticky lg:top-28 relative" id="quote-form">
                <div className="w-full">
                  <LazySection className="bg-white rounded-[2rem] p-6 lg:p-8 border border-gray-100 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 to-pink-400" />
                    
                    <h3 className="text-2xl font-extrabold text-[#0a192f] mb-3">Contact Us</h3>
                    <p className="text-gray-500 mb-8 font-medium">Have questions or need a custom quote? Reach out to our experts directly.</p>
                    
                    <div className="space-y-5">
                      <a href="tel:+917782069184" className="flex items-center gap-4 group/link">
                        <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center text-pink-600 group-hover/link:bg-pink-600 group-hover/link:text-white transition-colors shadow-sm shrink-0">
                          <Phone size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">Call Us</p>
                          <span className="text-gray-900 font-extrabold group-hover/link:text-pink-600 transition-colors text-lg">+91 7782069184</span>
                        </div>
                      </a>
                      
                      <a href="mailto:info@anglobalservices.com" className="flex items-center gap-4 group/link">
                      <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center text-pink-600 group-hover/link:bg-pink-600 group-hover/link:text-white transition-colors shadow-sm shrink-0">
                        <Mail size={20} />
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">Email Us</p>
                        <span className="text-gray-900 font-extrabold group-hover/link:text-pink-600 transition-colors text-base sm:text-lg break-all">info@anglobalservices.com</span>
                      </div>
                    </a>

                    <BusinessHours theme="pink" />

                    <a href="https://maps.google.com/?q=S-63,+7th+Floor,+Urbtech+NPX,+Noida,+Sector-153,+Uttar+Pradesh,+INDIA,+201310" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group/link">
                      <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center text-pink-600 group-hover/link:bg-pink-600 group-hover/link:text-white transition-colors shadow-sm shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">Address</p>
                        <span className="text-gray-900 font-extrabold group-hover/link:text-pink-600 transition-colors text-sm sm:text-base block leading-snug break-words">
                          S-63, 7th Floor, Urbtech NPX,<br />
                          Noida, Sector-153, Uttar Pradesh<br />
                          INDIA, Pin - 201310
                        </span>
                      </div>
                    </a>

                      <div className="pt-6 mt-4 border-t border-gray-100">
                        <a href="https://wa.me/917782069184" target="_blank" rel="noopener noreferrer" className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold text-lg py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex justify-center items-center gap-3 cursor-pointer">
                          <MessageCircle size={20} className="fill-current" /> Chat with us
                        </a>
                      </div>
                    </div>
                  </LazySection>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
