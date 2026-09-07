import Image from "next/image";
import Link from "next/link";
import LazySection from "@/components/LazySection";
import RequestPricingButton from "@/app/food-ingredients/components/RequestPricingButton";
import BusinessHours from "@/app/food-ingredients/components/BusinessHours";
import { CheckCircle2, ShieldCheck, Activity, Zap, Factory, MessageCircle, ChevronRight, Droplets, Leaf, Phone, Mail, MapPin, Truck, Globe } from "lucide-react";

export const metadata = {
  title: "genuine sanitary Napkins | Bulk Supplier India | Premium Quality",
  description: "Looking for premium sanitary napkins? We import ultra-thin, rash-free, high-absorbency sanitary pads from trusted manufacturers and supply in bulk all over India. Request wholesale pricing today.",
  keywords: "Sanitary napkins bulk supplier, genuine sanitary pads India, Genuine premium sanitary napkins, wholesale feminine hygiene, rash free sanitary pads, ultra thin pads wholesale",
};

export default function SanitaryNapkinsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Premium genuine sanitary Napkins",
    image: "https://www.anglobalservices.com/logo.png",
    description: "Premium ultra-thin, rash-free sanitary napkins Sourced from Trusted ISI Manufacturers. Available for bulk supply across India.",
    brand: {
      "@type": "Brand",
      name: "Sourced from Trusted ISI Manufacturers",
    },
    offers: {
      "@type": "Offer",
      url: "https://www.anglobalservices.com/sanitary-napkins",
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
      question: "Are these genuine sanitary napkins manufactured of trusted manufacturers?",
      answer: "Yes, our premium sanitary napkins are manufactured in state-of-the-art facilities of trusted manufacturers using advanced Japanese technology. As a leading B2B supplier, we act as the primary bulk importer and distributor across India."
    },
    {
      question: "What makes your wholesale sanitary pads 100% rash-free?",
      answer: "Our feminine hygiene products feature a dermatologically tested, ultra-soft cotton-like top sheet combined with a breathable backsheet. This prevents moisture build-up and friction, which are the primary causes of skin irritation and rashes."
    },
    {
      question: "Can I order sanitary napkins in bulk for my retail chain or distribution network?",
      answer: "Absolutely. We specialize in B2B bulk supply of genuine sanitary napkins. We cater to large-scale distribution requirements for supermarket chains, pharmacies, and institutional buyers all over India with highly competitive wholesale pricing."
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
    { label: "Origin", value: "Trusted Global Sourcing" },
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
        <section className="relative w-full bg-[#051c35] overflow-hidden">
        <div className="grid grid-cols-1 grid-rows-1 w-full max-w-[2000px] mx-auto min-h-[550px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] xl:h-[calc(100vh-170px)] xl:min-h-[600px] 2xl:min-h-[700px]">
          
          {/* IMAGE LAYER */}
          <div className="col-start-1 row-start-1 w-full h-full relative flex items-start bg-[#051c35]">
            <img 
              src="/service/trading-products/dash-image-for-trading-products-sanitary-napkins.png"
              alt="Premium Sanitary Napkins"
              className="w-full h-full object-cover object-left sm:object-right-bottom block"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#051c35]/95 via-[#051c35]/60 to-transparent lg:via-[#051c35]/30"></div>
          </div>

          {/* TEXT CONTENT LAYER */}
          <div className="col-start-1 row-start-1 relative z-10 w-full h-full flex items-center">
            <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-6 lg:py-10 xl:py-12 2xl:py-16">
              <div className="w-full sm:w-[45%] md:w-[45%] lg:w-[42%] xl:w-[48%] 2xl:w-[45%]">
                <LazySection className="flex flex-col items-start w-full">
                  
                  <div className="inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 px-3 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-1.5 xl:px-6 xl:py-2.5 2xl:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-pink-300 text-[10px] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-xs 2xl:text-sm font-bold tracking-widest uppercase mb-4 sm:mb-2 md:mb-3 lg:mb-3 xl:mb-6 shadow-2xl">
                    ★ Sourced from Trusted ISI Manufacturers
                  </div>
                  
                  <h1 className="text-3xl sm:text-[22px] md:text-3xl lg:text-[28px] xl:text-[3.5rem] 2xl:text-6xl font-extrabold text-white leading-tight mb-2 sm:mb-1 md:mb-2 lg:mb-2 xl:mb-5 drop-shadow-lg tracking-tight">
                    Premium Sanitary Napkins
                  </h1>
                  
                  <p className="text-pink-300 text-sm sm:text-[11px] md:text-sm lg:text-[13px] xl:text-xl 2xl:text-2xl font-semibold mb-4 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-8">
                    Bulk Wholesale Supply Across India
                  </p>
                  
                  <p className="text-gray-100 text-xs sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-base 2xl:text-lg font-medium leading-relaxed sm:leading-snug md:leading-relaxed drop-shadow-md bg-black/30 p-4 sm:p-2 md:p-3 lg:p-3 xl:p-6 rounded-lg backdrop-blur-sm inline-block w-full mb-6 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-10 border border-white/10">
                    Experience the ultimate standard in feminine hygiene with our <strong>genuine premium sanitary napkins</strong>. As a top <strong>bulk supplier in India</strong>, we distribute ultra-thin, highly absorbent, and 100% <strong>rash-free sanitary pads</strong> sourced directly from state-of-the-art facilities of trusted manufacturers.
                  </p>

                  <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-1 md:gap-2 lg:gap-2 xl:gap-4 mb-6 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-10">
                    <div className="flex items-center gap-1 sm:gap-2 text-gray-200 bg-white/10 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-3 lg:py-1.5 xl:px-5 xl:py-3 rounded-md sm:rounded-lg backdrop-blur-sm border border-white/10 shadow-lg">
                      <CheckCircle2 className="w-4 h-4 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-pink-400" />
                      <span className="font-medium text-[10px] sm:text-[9px] md:text-xs lg:text-[10px] xl:text-sm 2xl:text-base">Ultra-Thin</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 text-gray-200 bg-white/10 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-3 lg:py-1.5 xl:px-5 xl:py-3 rounded-md sm:rounded-lg backdrop-blur-sm border border-white/10 shadow-lg">
                      <CheckCircle2 className="w-4 h-4 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-pink-400" />
                      <span className="font-medium text-[10px] sm:text-[9px] md:text-xs lg:text-[10px] xl:text-sm 2xl:text-base">Rash-Free</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 text-gray-200 bg-white/10 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-3 lg:py-1.5 xl:px-5 xl:py-3 rounded-md sm:rounded-lg backdrop-blur-sm border border-white/10 shadow-lg">
                      <CheckCircle2 className="w-4 h-4 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-pink-400" />
                      <span className="font-medium text-[10px] sm:text-[9px] md:text-xs lg:text-[10px] xl:text-sm 2xl:text-base">Bulk Supply</span>
                    </div>
                  </div>

                  <div className="scale-90 origin-left sm:scale-75 md:scale-90 lg:scale-90 xl:scale-110 2xl:scale-125 transition-transform">
                    <RequestPricingButton productName="Sanitary Napkins (Imported)" category="Imported Products" theme="pink" />
                  </div>
                  
                </LazySection>
              </div>
            </div>
          </div>
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
                    As consumer demand for superior feminine hygiene products skyrockets in India, providing a reliable, comfortable, and safe solution is paramount. Our premium sanitary napkins are sourced exclusively from trusted manufacturers, manufactured using advanced Japanese machinery and high-grade raw materials to ensure maximum fluid retention without the bulk. 
                    <br/><br/>
                    Designed to cater to the modern woman, these pads feature a breathable backsheet, a soft cotton-like top layer, and unique odor-lock technology. By sourcing directly from trusted manufacturers, we bridge the gap for high-end international quality at highly competitive wholesale rates, making it highly lucrative for Indian distributors, retail chains, and institutional buyers.
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
                          <span className="text-gray-600 leading-relaxed text-sm">Sourced directly from top-tier facilities of trusted manufacturers.</span>
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
                    Our sanitary napkins are produced in cutting-edge facilities of trusted manufacturers, adhering to strict international hygiene and quality control standards. The process utilizes fully automated Japanese machinery to ensure zero human touch during assembly and packaging.
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
                        <h2 className="text-3xl font-extrabold text-[#0a192f]">Sourced from Trusted ISI Manufacturers, Delivered All Over India</h2>
                      </div>
                      
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Our strategic import framework allows us to directly source from the most advanced manufacturing plants of trusted manufacturers and distribute seamlessly across all Indian states. By bypassing multiple middlemen, we offer unmatched wholesale rates.
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
