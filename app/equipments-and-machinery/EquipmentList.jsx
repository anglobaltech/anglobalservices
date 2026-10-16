"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X } from "lucide-react";

export default function EquipmentList({ equipments }) {
  const [searchQuery, setSearchQuery] = useState("");

  // Case-insensitive real-time search filtering across title, category, excerpt, and slug
  const filteredEquipments = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return equipments;
    return equipments.filter((item) => {
      const title = item.title?.toLowerCase() || "";
      const category = item.category?.toLowerCase() || "";
      const excerpt = item.excerpt?.toLowerCase() || "";
      const slug = item.slug?.toLowerCase().replace(/-/g, " ") || "";
      return (
        title.includes(q) ||
        category.includes(q) ||
        excerpt.includes(q) ||
        slug.includes(q)
      );
    });
  }, [equipments, searchQuery]);

  const handleClear = () => setSearchQuery("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full">
      {/* Search Bar - Positioned neatly with reduced top whitespace */}
      <div className="w-full flex flex-col items-center justify-center mb-8 md:mb-10">
        <form
          onSubmit={handleSearchSubmit}
          className="relative w-full max-w-2xl sm:max-w-3xl"
        >
          <div className="flex items-center w-full bg-white border border-gray-400 rounded-full shadow-[0_4px_20px_rgb(0,0,0,0.06)] hover:shadow-[0_6px_24px_rgb(0,0,0,0.1)] focus-within:shadow-[0_6px_24px_rgb(0,95,134,0.15)] focus-within:border-[#0072b1] transition-all duration-300 group p-1.5 sm:p-2">
            <div className="pl-3 sm:pl-4 pr-1 sm:pr-2 shrink-0">
              <Search className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 group-focus-within:text-[#0072b1] transition-colors" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Product By Name or IS Number..."
              className="w-full pl-2 sm:pl-2 pr-2 sm:pr-3 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base text-gray-800 placeholder-gray-500 outline-none bg-transparent min-w-0"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={handleClear}
                className="p-1 mr-1.5 sm:mr-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}
            <button
              type="submit"
              className="bg-gradient-to-r from-[#0a3d62] to-[#0072b1] hover:from-[#082f4d] hover:to-[#005f94] hover:shadow-md text-white px-6 sm:px-9 py-2.5 sm:py-3 rounded-full font-bold transition-all duration-300 text-sm sm:text-base shrink-0 cursor-pointer shadow-sm"
              aria-label="Search"
            >
              Search
            </button>
          </div>
        </form>

        {searchQuery.trim() && (
          <div className="mt-3 text-xs sm:text-sm text-gray-600 flex items-center gap-2">
            <span>
              Showing <strong>{filteredEquipments.length}</strong> result{filteredEquipments.length === 1 ? "" : "s"} for &ldquo;<span className="text-[#0075B6] font-semibold">{searchQuery}</span>&rdquo;
            </span>
            <button
              onClick={handleClear}
              className="text-[#0075B6] hover:underline font-semibold text-xs cursor-pointer ml-1"
            >
              (Clear Filter)
            </button>
          </div>
        )}
      </div>

      {/* Empty State */}
      {filteredEquipments.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-200/80 shadow-sm max-w-xl mx-auto px-6">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 text-[#0075B6] flex items-center justify-center">
            <Search size={28} />
          </div>
          <h3 className="text-xl font-bold text-[#0a192f] mb-2">
            No Equipments Found
          </h3>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            We couldn&apos;t find any equipment matching &ldquo;{searchQuery}&rdquo;. Try searching for &ldquo;centrifuge&rdquo;, &ldquo;autoclave&rdquo;, &ldquo;balance&rdquo;, or &ldquo;refrigerated&rdquo;.
          </p>
          <button
            onClick={handleClear}
            className="bg-[#0075B6] hover:bg-[#005f94] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-colors cursor-pointer shadow-sm"
          >
            Show All Equipments
          </button>
        </div>
      ) : (
        /* 4 columns on desktop with generous spacing */
        <div className="grid gap-6 md:gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredEquipments.map((item, index) => (
            <Link
              href={`/${item.slug}`}
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group border border-gray-200/80 hover:border-[#0075B6]/30 cursor-pointer block"
            >
              {/* Card Image - Compact height */}
              <div className="relative h-44 w-full shrink-0 overflow-hidden bg-gray-50/60 flex items-center justify-center border-b border-gray-100 p-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                />
                <div className="absolute top-2.5 left-2.5 bg-[#0a192f] text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full z-10 shadow-sm">
                  {item.category}
                </div>
              </div>

              {/* Card Content - Compact padding */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-[14px] font-bold text-[#0a192f] leading-snug mb-1.5 group-hover:text-[#0075B6] transition-colors line-clamp-2 min-h-[2.5rem]">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-xs leading-relaxed mb-4 flex-grow line-clamp-2">
                  {item.excerpt}
                </p>

                {/* Action Buttons - Compact side-by-side with distinct hover color on Enquire */}
                <div className="flex items-center gap-2 mt-auto pt-3 border-t border-gray-100">
                  <div className="flex-1 bg-white border border-[#0075B6] text-[#0075B6] group-hover:bg-[#0075B6] group-hover:text-white text-center py-1.5 rounded-md font-bold text-[11px] uppercase tracking-wider transition-colors duration-300">
                    View Details
                  </div>
                  <object className="flex-1">
                    <Link
                      href="/contact-us"
                      className="block w-full bg-[#0a192f] border border-[#0a192f] text-white hover:bg-[#d97706] hover:border-[#d97706] text-center py-1.5 rounded-md font-bold text-[11px] uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                    >
                      Enquire
                    </Link>
                  </object>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
