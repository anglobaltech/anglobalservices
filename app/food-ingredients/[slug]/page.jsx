import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { foodIngredients } from "@/data/foodIngredients";
import LazySection from "@/components/LazySection";
import RequestPricingButton from "../components/RequestPricingButton";
import BusinessHours from "../components/BusinessHours";
import { CheckCircle2, ShieldCheck, Activity, Zap, Factory, HelpCircle, Phone, Mail, MapPin, ChevronRight, MessageCircle } from "lucide-react";

// 1. Generate Metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = foodIngredients.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.seoTitle || `${product.name} | Premium Bulk Food Ingredients`,
    description: product.seoDescription || product.intro,
    openGraph: {
      title: product.seoTitle || product.name,
      description: product.seoDescription || product.intro,
      images: [{ url: product.image }],
    },
  };
}

// 2. Generate Static Params for SSG
export function generateStaticParams() {
  return foodIngredients.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = foodIngredients.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Schema Markup (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.image,
    description: product.seoDescription || product.intro,
    brand: {
      "@type": "Brand",
      name: product.make || "AN Global Services",
    },
    offers: {
      "@type": "Offer",
      url: `https://www.anglobalservices.com/food-ingredients/${product.slug}`,
      priceCurrency: "INR",
      price: "0",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "AN Global Services",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gray-50 flex flex-col">
        
        {/* ═══════════ 1. HERO BANNER ═══════════ */}
        <section className="relative w-full bg-[#0a192f] pt-8 pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0075B6]/30 via-transparent to-transparent" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-400 mb-8 sm:mb-10 flex items-center gap-1.5 sm:gap-2 flex-wrap" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/food-ingredients" className="hover:text-white transition-colors">Food Ingredients</Link>
              <span>/</span>
              <span className="text-white font-semibold">{product.name}</span>
            </nav>

            <LazySection className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className={`w-full ${product.image ? 'md:w-1/2' : 'md:max-w-4xl'}`}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[#60B5F0] text-xs font-bold tracking-widest uppercase mb-6 shadow-xl">
                  ★ {product.badge || product.category}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg whitespace-pre-line">
                  {product.name}
                </h1>
                <p className="text-[#60B5F0] text-xl md:text-2xl font-semibold mb-6">
                  {product.tagline}
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {product.intro}
                </p>

                {product.highlights && product.highlights.length > 0 && (
                  <ul className="space-y-3 mb-8">
                    {product.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-200">
                        <CheckCircle2 className="text-[#60B5F0] shrink-0 mt-0.5" size={20} />
                        <span className="leading-snug">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-4">
                  <RequestPricingButton productName={product.name} />
                </div>
              </div>

              {product.image && (
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative p-8 group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0075B6]/20 to-transparent rounded-[3rem] -z-10 blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                    <div className="bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/10 shadow-2xl flex items-center justify-center min-h-[400px]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>
                  </div>
                </div>
              )}
            </LazySection>
          </div>
        </section>

        {/* ═══════════ 2. MAIN CONTENT & SIDEBAR ═══════════ */}
        <section className="py-16 md:py-24 flex-grow relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 relative items-start">
              
              {/* Left Column: Premium Content Blocks */}
              <div className="w-full lg:w-2/3 space-y-12 lg:space-y-16">
                
                {/* Overview */}
                <LazySection>
                  <h2 className="text-3xl font-extrabold text-[#0a192f] mb-6 border-b-4 border-[#0075B6] pb-2 inline-block">Product Overview</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-10 whitespace-pre-line">
                    {product.description}
                  </p>

                  {product.highlights && product.highlights.length > 0 && (
                    <div className="mb-10">
                      <h3 className="text-xl font-bold text-[#0a192f] mb-6 flex items-center gap-3">
                        <Zap className="text-[#0075B6]" size={24} /> Key Highlights
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
                        {(product.highlights.length > 1 && product.highlights.length % 2 !== 0 
                          ? product.highlights.slice(0, product.highlights.length - 1) 
                          : product.highlights).map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#0075B6]/20 transition-all h-full">
                            <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                            <span className="text-gray-700 font-medium leading-relaxed">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {product.applications && (
                    <div className="mt-8">
                      <h3 className="text-xl font-bold text-[#0a192f] mb-3 flex items-center gap-2">
                        <Activity className="text-[#0075B6]" size={22} /> Common Uses
                      </h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {product.applications}
                      </p>
                    </div>
                  )}
                </LazySection>

                {/* Advanced SEO Content Sections */}
                {(product.benefits || product.manufacturingProcess) && (
                  <LazySection className="space-y-12 lg:space-y-16">
                    
                    {product.benefits && product.benefits.length > 0 && (
                      <div>
                        <h2 className="text-3xl font-extrabold text-[#0a192f] mb-8 border-b-4 border-[#0075B6] pb-2 inline-block">Health & Functional Benefits</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
                          {(product.benefits.length > 1 && product.benefits.length % 2 !== 0 
                            ? product.benefits.slice(0, product.benefits.length - 1) 
                            : product.benefits).map((benefit, idx) => {
                            const splitIdx = benefit.indexOf(':');
                            const title = splitIdx !== -1 ? benefit.substring(0, splitIdx) : benefit;
                            const desc = splitIdx !== -1 ? benefit.substring(splitIdx + 1).trim() : '';
                            
                            return (
                              <div key={idx} className="flex flex-col justify-center bg-white border border-gray-100 rounded-xl px-4 py-3 hover:shadow-xl hover:border-[#0075B6]/30 hover:-translate-y-1 transition-all duration-300 group h-full">
                                <div className="flex items-center gap-3 mb-1">
                                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-50 text-[#0075B6] group-hover:scale-110 transition-transform duration-300 shrink-0">
                                    <ShieldCheck size={16} />
                                  </div>
                                  <h4 className="text-sm font-bold text-[#0a192f]">{title}</h4>
                                </div>
                                {desc && <p className="text-gray-600 text-xs leading-relaxed ml-11">{desc}</p>}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {product.manufacturingProcess && (
                      <div>
                        <h2 className="text-3xl font-extrabold text-[#0a192f] mb-6 border-b-4 border-[#0075B6] pb-2 inline-block">Manufacturing Process</h2>
                        <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                          {product.manufacturingProcess}
                        </p>
                      </div>
                    )}
                  </LazySection>
                )}

                {/* Specifications Tables */}
                {(product.specs || product.qualityStandards || product.trade || product.nutritionalProfile) && (
                  <LazySection>
                    <h2 className="text-3xl font-extrabold text-[#0a192f] mb-8 border-b-4 border-[#0075B6] pb-2 inline-block">Technical Specifications</h2>
                    
                    <div className="space-y-10">
                      {[
                        { title: "Nutritional Profile", data: product.nutritionalProfile },
                        { title: "General Specs", data: product.specs },
                        { title: "Quality Standards", data: product.qualityStandards }
                      ].map((table, idx) => table.data && table.data.length > 0 && (
                        <div key={idx} className="mb-6">
                          <h4 className="text-xl font-bold text-[#0a192f] mb-4">{table.title}</h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse border-t border-gray-200">
                              <tbody>
                                {table.data.map((item, i) => (
                                  <tr key={i} className="hover:bg-blue-50/30 transition-colors border-b border-gray-200">
                                    <th className="py-4 pr-6 font-semibold text-gray-800 w-1/3 sm:w-1/4 align-top">{item.label}</th>
                                    <td className="py-4 text-gray-600 align-top">{item.value}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      ))}
                    </div>
                  </LazySection>
                )}

                {/* FAQs */}
                {product.faqs && product.faqs.length > 0 && (
                  <LazySection className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a192f] mb-4">Frequently Asked Questions</h2>
                      <div className="w-24 h-1 bg-[#0075B6] mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="space-y-4">
                      {product.faqs.map((faq, idx) => (
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
                )}
              </div>

              {/* Right Column: Premium Sticky Sidebar */}
              <div className="w-full lg:w-1/3 lg:sticky lg:top-28 relative" id="quote-form">
                <div className="w-full">
                  <LazySection className="bg-white rounded-[2rem] p-6 lg:p-8 border border-gray-100 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#0075B6] to-[#60B5F0]" />
                    
                    <h3 className="text-2xl font-extrabold text-[#0a192f] mb-3">Contact Us</h3>
                    <p className="text-gray-500 mb-8 font-medium">Have questions or need a custom quote? Reach out to our experts directly.</p>
                    
                    <div className="space-y-5">
                      <a href="tel:+917782069184" className="flex items-center gap-4 group/link">
                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0075B6] group-hover/link:bg-[#0075B6] group-hover/link:text-white transition-colors shadow-sm shrink-0">
                          <Phone size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">Call Us</p>
                          <span className="text-gray-900 font-extrabold group-hover/link:text-[#0075B6] transition-colors text-lg">+91 7782069184</span>
                        </div>
                      </a>
                      
                      <a href="mailto:info@anglobalservices.com" className="flex items-center gap-4 group/link">
                      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0075B6] group-hover/link:bg-[#0075B6] group-hover/link:text-white transition-colors shadow-sm shrink-0">
                        <Mail size={20} />
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">Email Us</p>
                        <span className="text-gray-900 font-extrabold group-hover/link:text-[#0075B6] transition-colors text-base sm:text-lg break-all">info@anglobalservices.com</span>
                      </div>
                    </a>

                    <BusinessHours />

                    <a href="https://maps.google.com/?q=UNIT+NO.+S-63,+8th+FLOOR,+URBTECH+NPX,+PLOT+NO.+C-1,+SECTOR+153,+Gautam+Budh+Nagar,+Uttar+Pradesh,+201310" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group/link">
                      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0075B6] group-hover/link:bg-[#0075B6] group-hover/link:text-white transition-colors shadow-sm shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">Address</p>
                        <span className="text-gray-900 font-extrabold group-hover/link:text-[#0075B6] transition-colors text-sm sm:text-base block leading-snug break-words">
                          UNIT NO. S-63, 8th FLOOR, URBTECH NPX,<br />
                          PLOT NO. C-1, SECTOR 153,<br />
                          Gautam Budh Nagar, UP 201310
                        </span>
                      </div>
                    </a>

                      <div className="pt-6 mt-4 border-t border-gray-100">
                        <a href="https://wa.me/917782069184" target="_blank" rel="noopener noreferrer" className="w-full bg-[#0075B6] hover:bg-blue-700 text-white font-bold text-lg py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex justify-center items-center gap-3 cursor-pointer">
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
