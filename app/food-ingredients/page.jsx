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
        {products.map((product, index) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* TOP SECTION */}
            <div className="flex flex-col md:flex-row">
              {/* LEFT — IMAGE */}
              <div
                className={`md:w-[32%] relative bg-gradient-to-br ${product.gradient} flex items-center justify-center`}
                style={{ minHeight: "320px" }}
              >
                {/* glass overlay */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />

                <div className="relative w-full h-full flex items-center justify-center z-10">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={240}
                    height={180}
                    className="object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* RIGHT — DETAILS */}
              <div className="md:w-[68%] p-7 md:p-10 flex flex-col justify-center border-l border-gray-100">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">
                  {product.category}
                </p>

                <h2 className=" text-xl md:text-2xl font-bold text-gray-900 tracking-tight mb-1">
                  {product.name}
                </h2>

                <p className="text-sm font-semibold text-[#1a6fa8] mb-4">
                  {product.tagline}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-2xl">
                  {product.intro}
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

            {/* BOTTOM SECTION */}
            <div className="border-t border-gray-100 px-7 md:px-10 py-10 bg-gray-50/40">
              {/* ABOUT */}
              <div className="mb-10">
                <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                  About This Product
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-7xl">
                  {product.description}
                </p>
              </div>

              {/* GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* LEFT SIDE */}
                <div className="flex flex-col gap-8">
                  {/* HIGHLIGHTS */}
                  <div>
                    <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-4">
                      Key Highlights
                    </h3>

                    <ul className="space-y-3">
                      {product.highlights.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-gray-700 bg-white rounded-lg px-3 py-2 shadow-sm"
                        >
                          <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-[#eaf4fb] flex items-center justify-center">
                            <svg
                              className="w-3 h-3 text-[#1a6fa8]"
                              fill="none"
                              viewBox="0 0 10 10"
                            >
                              <path
                                d="M2 5l2.5 2.5L8 3"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* SPECIFICATIONS */}
                  {product.specs && (
                    <div>
                      <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                        Specifications
                      </h3>

                      <div className="bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm space-y-2 text-sm">
                        {product.specs.map((item, i) => (
                          <div key={i} className="flex justify-between">
                            <span className="text-gray-500">{item.label}</span>
                            <span className="font-medium text-gray-800">
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* RIGHT SIDE */}
                <div className="flex flex-col gap-6">
                  {/* APPLICATIONS */}
                  <div>
                    <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                      Applications
                    </h3>

                    <div className="bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {product.applications}
                      </p>
                    </div>
                  </div>

                  {/* TRADE INFO */}
                  {product.trade && (
                    <div>
                      <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                        Trade Information
                      </h3>

                      <div className="bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm space-y-2 text-sm">
                        {product.trade.map((item, i) => (
                          <div key={i} className="flex justify-between">
                            <span className="text-gray-500">{item.label}</span>
                            <span className="font-medium text-gray-800">
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAGS */}
                  <div>
                    <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                      Certifications & Grade
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1.5 bg-[#eaf4fb] text-[#1a6fa8] rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
