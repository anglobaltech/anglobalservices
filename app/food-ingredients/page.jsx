import Link from "next/link";
import Image from "next/image";
import ExploreFoodDropdownButton from "@/components/ExploreFoodDropdownButton";

import { foodIngredients as products } from "@/data/foodIngredients";

export default function FoodIngredientsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full bg-[#051c35] overflow-hidden">
        <div className="flex w-full">
          <div className="w-full shrink-0 relative">
            <div className="grid grid-cols-1 grid-rows-1 w-full max-w-[2000px] mx-auto">

              {/* IMAGE LAYER */}
              <div className="col-start-1 row-start-1 w-full relative flex items-start">
                <img
                  src="/food-items/dash-image-food-ingredients-1.webp"
                  alt="Food Ingredients & Bulk Supply"
                  className="w-full h-full object-cover object-left sm:h-auto sm:object-contain block min-h-[450px] sm:min-h-0"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>

              {/* TEXT CONTENT LAYER */}
              <div className="col-start-1 row-start-1 relative z-10 w-full flex items-center">
                <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:py-1 md:px-4 md:py-1 xl:py-6 lg:px-8">
                  <div className="w-full sm:w-[50%] md:w-[38%] lg:w-[35%] lg:-mt-8 xl:-mt-8 2xl:mt-0 xl:w-[40%] 2xl:w-[35%] xl:max-w-[650px] 2xl:max-w-[800px]">
                    <h1 className="text-[26px] leading-tight sm:text-[14px] md:text-[18px] lg:text-[24px] xl:text-[36px] 2xl:text-[42px] font-black text-[#0a192f] md:leading-tight mb-3 sm:mb-1 md:mb-2 lg:mb-2 xl:mb-4 2xl:mb-6 tracking-tight">
                      <span className="whitespace-normal sm:whitespace-nowrap">Bulk Food Ingredients &</span> <br className="hidden sm:block" />
                      <span className="text-[#0075B6] drop-shadow-sm bg-white/95 px-2 md:px-2 xl:px-3 2xl:px-4 py-1 md:py-1 xl:py-1.5 2xl:py-2 rounded md:rounded-lg inline-block mt-2 sm:mt-0.5 md:mt-1 lg:mt-1 xl:mt-2 2xl:mt-3 text-[14px] sm:text-[9px] md:text-[11px] lg:text-[16px] xl:text-[24px] 2xl:text-[30px] whitespace-normal sm:whitespace-nowrap border border-[#0075B6]/10">
                        Nutritional Solutions
                      </span>
                    </h1>

                    <p className="text-[#112340] font-bold text-[13px] sm:text-[7.5px] md:text-[10px] lg:text-[13px] xl:text-[15px] 2xl:text-[18px] mb-5 sm:mb-1.5 md:mb-3 lg:mb-3 xl:mb-6 2xl:mb-10 leading-relaxed sm:leading-tight md:leading-snug lg:leading-relaxed bg-white/70 border border-white/50 p-3 sm:p-1.5 md:p-2 lg:p-2 xl:px-4 xl:py-3 2xl:px-6 2xl:py-5 rounded-xl md:rounded-lg backdrop-blur-md shadow-sm inline-block w-full">
                      Supplying high-quality dairy proteins, food ingredients, and natural products for <span className="font-extrabold text-[#0075B6]">manufacturers, food processors, and nutrition brands</span>. Our solutions ensure consistent quality, reliable sourcing, and performance for large-scale applications.
                    </p>

                    <div className="flex flex-row flex-nowrap items-center gap-2 sm:gap-1 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-6 mb-4 sm:mb-1.5 md:mb-3 lg:mb-3 xl:mb-6 2xl:mb-10 overflow-visible">
                      <Link
                        href="/contact-us"
                        className="bg-[#0a192f] hover:bg-[#112340] text-white px-4 py-2 sm:px-1 sm:py-0.5 md:px-3 md:py-1.5 lg:px-4 lg:py-2 xl:px-6 xl:py-3 2xl:px-8 2xl:py-4 rounded md:rounded-md font-bold transition-colors shadow-lg text-[13px] sm:text-[8px] md:text-[10px] lg:text-[13px] xl:text-[16px] 2xl:text-[18px] whitespace-nowrap"
                      >
                        Contact Us
                      </Link>
                      <ExploreFoodDropdownButton
                        className="bg-white text-[#0075B6] border-2 border-[#0075B6] hover:bg-[#0075B6] hover:text-white px-4 py-1.5 sm:px-1 sm:py-0 md:px-3 md:py-1 lg:px-4 lg:py-2 xl:px-6 xl:py-2.5 2xl:px-8 2xl:py-3.5 rounded md:rounded-md font-bold transition-all shadow-lg text-[13px] sm:text-[8px] md:text-[10px] lg:text-[13px] xl:text-[16px] 2xl:text-[18px] cursor-pointer whitespace-nowrap"
                      >
                        Explore Products
                      </ExploreFoodDropdownButton>
                    </div>

                    <div className="flex flex-col gap-2 md:gap-1 lg:gap-2 xl:gap-3 2xl:gap-4">
                      <div className="flex flex-wrap gap-2 sm:gap-1 md:gap-2 lg:gap-2 xl:gap-4 2xl:gap-5 text-[10px] sm:text-[7px] md:text-[8.5px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[#0a192f] font-extrabold">
                        <span className="flex items-center gap-0.5"><span className="text-[#0075B6] text-sm md:text-[10px] lg:text-[14px] xl:text-[18px] 2xl:text-[20px] leading-none mt-[-1px]">✔</span> Food Grade Certified</span>
                        <span className="flex items-center gap-0.5"><span className="text-[#0075B6] text-sm md:text-[10px] lg:text-[14px] xl:text-[18px] 2xl:text-[20px] leading-none mt-[-1px]">✔</span> Export Quality</span>
                        <span className="flex items-center gap-0.5"><span className="text-[#0075B6] text-sm md:text-[10px] lg:text-[14px] xl:text-[18px] 2xl:text-[20px] leading-none mt-[-1px]">✔</span> Trusted Sourcing</span>
                        <span className="flex items-center gap-0.5"><span className="text-[#0075B6] text-sm md:text-[10px] lg:text-[14px] xl:text-[18px] 2xl:text-[20px] leading-none mt-[-1px]">✔</span> Bulk Supply</span>
                      </div>

                      <div className="inline-block self-start bg-green-100/90 border border-green-300 text-green-900 px-3 py-1.5 md:px-2 md:py-1 lg:px-3 lg:py-1.5 xl:px-4 xl:py-2 2xl:px-5 2xl:py-3 rounded-lg text-[10px] sm:text-[7px] md:text-[8.5px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] font-extrabold backdrop-blur-md mt-1 sm:mt-0 lg:mt-1 xl:mt-2 2xl:mt-4 shadow-sm">
                        FSSAI License No • 12726999000019
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-8 space-y-10" id="products-section">
        {products.map((product, index) => {
          const fallback = { bg: "from-blue-50 via-sky-50 to-blue-100/50", text: "text-blue-500", border: "border-blue-200/50" };
          const hasImage = !!product.image;

          return (
            <div
              key={product.id}
              className={`rounded-3xl border border-white/40 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${hasImage ? 'bg-white' : `bg-gradient-to-r ${fallback.bg}`}`}
            >
              {/* TOP SECTION */}
              <div className="flex flex-col md:flex-row h-full relative">
                {/* Optional glass overlay for the entire card if no image */}
                {!hasImage && <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px] pointer-events-none" />}

                {/* LEFT — VISUAL (Image or Premium Fallback) */}
                <div
                  className={`md:w-[32%] relative flex items-center justify-center overflow-hidden group ${hasImage ? `bg-gradient-to-br ${product.gradient || 'from-gray-50 to-gray-100'}` : ''}`}
                  style={{ minHeight: "320px" }}
                >
                  {hasImage ? (
                    <>
                      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
                      <div className="relative w-full h-full flex items-center justify-center z-10">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={240}
                          height={180}
                          className="object-contain hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 opacity-10 mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
                      <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/60 rounded-full blur-2xl"></div>
                      <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-black/5 rounded-full blur-2xl"></div>
                      <div className="relative z-10 flex flex-col items-center justify-center text-center p-8 w-full h-full transform group-hover:scale-105 transition-transform duration-700">
                        <h3 className={`${fallback.text} text-3xl sm:text-4xl font-black tracking-tighter drop-shadow-sm leading-tight px-4`}>
                          {product.name}
                        </h3>
                        <div className={`w-12 h-1.5 mt-6 rounded-full ${fallback.text.replace('text-', 'bg-')} opacity-40 shadow-sm`}></div>
                      </div>
                    </>
                  )}
                </div>

                {/* RIGHT — DETAILS */}
                <div className={`md:w-[68%] p-7 md:p-10 flex flex-col justify-center relative z-10 border-l ${hasImage ? 'border-gray-100' : 'border-white/40'}`}>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">
                    {product.category}
                  </p>

                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight mb-1">
                    {product.name}
                  </h2>

                  <p className="text-sm font-semibold text-[#1a6fa8] mb-4">
                    {product.tagline}
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-2xl">
                    {product.intro}
                    <Link href={`/food-ingredients/${product.slug}`} className="inline-flex items-center gap-1 text-[#1a6fa8] bg-[#eaf4fb] px-2 py-0.5 rounded-md ml-1.5 font-bold hover:bg-[#d5eaf7] hover:text-[#114b73] transition-colors whitespace-nowrap">
                      Read more <span>&rarr;</span>
                    </Link>
                  </p>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
                    <Link href={`/food-ingredients/${product.slug}`}>
                      <button className="px-6 py-2.5 sm:px-8 sm:py-3 bg-[#1a6fa8] cursor-pointer hover:bg-[#155d8c] text-white text-sm sm:text-base font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 w-full sm:w-auto">
                        View Details & Enquire
                      </button>
                    </Link>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-700 font-medium">
                      {product.make && <span>Make: {product.make}</span>}
                      {product.origin && <span>Origin: {product.origin}</span>}
                    </div>
                  </div>
                </div>
              </div>


            </div>
          );
        })}
      </div>
    </div>
  );
}
