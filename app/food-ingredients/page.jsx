import Link from "next/link";
import Image from "next/image";

import { foodIngredients as products } from "@/data/foodIngredients";

export default function FoodIngredientsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-br from-[#e6f0ff] via-[#f5f9ff] to-[#e6f0ff] overflow-hidden">
        {/* Background glow */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#1a6fa8]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>

        {/* subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#1a6fa8_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center relative z-10">
          {/* Tag */}
          <p className="inline-flex items-center gap-2 text-xs font-semibold text-[#1a6fa8] uppercase tracking-widest bg-white border border-[#1a6fa8]/20 px-5 py-1.5 rounded-full shadow-sm mb-6">
            <span className="w-1 h-1 bg-[#1a6fa8] rounded-full"></span>
            Food Ingredients & Bulk Supply
          </p>

          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            Bulk <span className="text-[#1a6fa8]">Food Ingredients</span> &
            Nutritional Solutions
          </h1>

          {/* Description */}
          <p className="text-gray-600 max-w-5xl mx-auto text-base md:text-md leading-relaxed mt-3">
            Supplying high-quality dairy proteins, food ingredients, and natural
            products for{" "}
            <span className="text-gray-800 font-medium">
              manufacturers, food processors, and nutrition brands
            </span>
            . Our solutions ensure consistent quality, reliable sourcing, and
            performance for large-scale applications.
          </p>

          {/* trust badges */}
          <div className="flex justify-center gap-6 mt-6 text-xs text-gray-500 flex-wrap">
            <span>✔ Food Grade Certified</span>
            <span>✔ Export Quality Standards</span>
            <span>✔ Trusted Global Sourcing</span>
            <span>✔ Bulk Supply Capability</span>
          </div>
          <div className="mt-5 flex justify-center">
            <span className="text-xs bg-green-50 text-green-800 border border-green-200 px-4 py-1.5 rounded-full font-medium shadow-sm">
              FSSAI License No • 12726999000019
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8 space-y-10">
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
