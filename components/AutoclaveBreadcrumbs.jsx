"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Check, ArrowRight, Flame, Shield, Sparkles, Building2 } from "lucide-react";

export const AUTOCLAVE_PORTFOLIO = [
  {
    category: "Vertical Autoclaves",
    icon: Flame,
    items: [
      { name: "Vertical Autoclave Deluxe", slug: "vertical-autoclave-deluxe", subtitle: "Radial lock & pedal lift sterilizer" },
      { name: "Vertical Autoclave Triple Walled", slug: "vertical-autoclave-triple-walled", subtitle: "Dry-exhaust jacketed high-efficiency steam" },
      { name: "Vertical Autoclave Economy", slug: "vertical-autoclave-economy", subtitle: "Budget-friendly durable vertical design" },
    ],
  },
  {
    category: "Horizontal Autoclaves",
    icon: Shield,
    items: [
      { name: "Horizontal Autoclave Cylindrical", slug: "horizontal-autoclave-cylindrical", subtitle: "Front-loading high-volume cylindrical chamber" },
      { name: "Horizontal Rectangular Autoclave", slug: "horizontal-rectangular-autoclave", subtitle: "100% usable chamber for bulky packs & trays" },
    ],
  },
  {
    category: "Specialized & Portable",
    icon: Sparkles,
    items: [
      { name: "Portable Autoclaves", slug: "portable-autoclave", subtitle: "Compact mobile benchtop sterilization" },
      { name: "Cement Autoclave", slug: "cement-autoclave", subtitle: "ASTM / IS soundness test high-pressure vessel" },
      { name: "Biomedical Waste Pulsation Vacuum Sterilizer", slug: "biomedical-waste-pulsation-vacuum-sterilizer", subtitle: "Multi-pulse vacuum penetration for bio-waste" },
    ],
  },
];

export default function AutoclaveBreadcrumbs({
  category = "Vertical Autoclaves",
  currentTitle = "Vertical Autoclave Deluxe",
  currentSlug = "vertical-autoclave-deluxe",
  hasSubDropdown = false,
}) {
  const [openDropdown, setOpenDropdown] = useState(null); // 'autoclave' | 'category' | null
  const containerRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const currentCategoryData =
    AUTOCLAVE_PORTFOLIO.find(
      (c) => c.category.toLowerCase() === category.toLowerCase()
    ) || AUTOCLAVE_PORTFOLIO[0];

  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-4 relative z-40"
      ref={containerRef}
    >
      <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs md:text-sm text-blue-200 font-medium">
        <li>
          <Link
            href="/"
            className="hover:text-white transition-colors py-1 px-1 rounded"
          >
            Home
          </Link>
        </li>
        <li className="text-blue-300/60 select-none">/</li>

        <li>
          <Link
            href="/laboratory-equipment-and-setup-services"
            className="hover:text-white transition-colors py-1 px-1 rounded"
          >
            Laboratory Equipment
          </Link>
        </li>
        <li className="text-blue-300/60 select-none">/</li>

        {/* 1. AUTOCLAVE DROPDOWN - Shows all autoclaves */}
        <li className="relative">
          <button
            type="button"
            onClick={() =>
              setOpenDropdown((prev) =>
                prev === "autoclave" ? null : "autoclave"
              )
            }
            aria-expanded={openDropdown === "autoclave"}
            className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-blue-100 hover:text-white transition-all cursor-pointer border ${
              openDropdown === "autoclave"
                ? "bg-white/20 text-white border-white/40 shadow-sm"
                : "bg-white/10 hover:bg-white/15 border-white/15 text-blue-200"
            }`}
          >
            <span>Autoclaves</span>
            <ChevronDown
              size={13}
              className={`transition-transform duration-200 ${
                openDropdown === "autoclave"
                  ? "rotate-180 text-white"
                  : "text-blue-300"
              }`}
            />
          </button>

          {/* Autoclave Menu Popover */}
          {openDropdown === "autoclave" && (
            <div className="absolute left-0 sm:left-auto top-full mt-2 w-[310px] sm:w-[350px] max-h-[380px] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200 p-2.5 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0075B6]">
                  All Autoclaves
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  8 Models
                </span>
              </div>

              <div className="py-1 divide-y divide-slate-100">
                {AUTOCLAVE_PORTFOLIO.map((cat) => {
                  const IconComponent = cat.icon;
                  return (
                    <div key={cat.category} className="py-2 first:pt-1 last:pb-1">
                      <div className="px-3 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                        <IconComponent size={12} className="text-[#0075B6]" />
                        {cat.category}
                      </div>
                      <div className="mt-1 space-y-0.5">
                        {cat.items.map((item) => {
                          const isCurrent = item.slug === currentSlug;
                          return (
                            <Link
                              key={item.slug}
                              href={`/${item.slug}`}
                              onClick={() => setOpenDropdown(null)}
                              className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all ${
                                isCurrent
                                  ? "bg-blue-50 text-[#0075B6] font-semibold"
                                  : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                              }`}
                            >
                              <div>
                                <div className="leading-snug">{item.name}</div>
                                {item.subtitle && (
                                  <div className="text-[10px] text-slate-400 font-normal leading-tight mt-0.5">
                                    {item.subtitle}
                                  </div>
                                )}
                              </div>
                              {isCurrent && (
                                <Check size={14} className="text-[#0075B6] shrink-0 ml-2" />
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-slate-100 px-1">
                <Link
                  href="/laboratory-equipment-and-setup-services"
                  onClick={() => setOpenDropdown(null)}
                  className="flex items-center justify-center gap-1.5 w-full py-2 px-3 text-xs font-semibold text-[#0075B6] hover:bg-blue-50 rounded-xl transition-colors"
                >
                  <span>View All Lab Equipment</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          )}
        </li>
        <li className="text-blue-300/60 select-none">/</li>

        {/* 2. SUB-CATEGORY DROPDOWN (Only displayed if hasSubDropdown is true) */}
        {hasSubDropdown && (
          <>
            <li className="relative">
              <button
                type="button"
                onClick={() =>
                  setOpenDropdown((prev) =>
                    prev === "category" ? null : "category"
                  )
                }
                aria-expanded={openDropdown === "category"}
                className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-blue-100 hover:text-white transition-all cursor-pointer border ${
                  openDropdown === "category"
                    ? "bg-white/20 text-white border-white/40 shadow-sm"
                    : "bg-white/10 hover:bg-white/15 border-white/15 text-blue-200"
                }`}
              >
                <span>{category}</span>
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${
                    openDropdown === "category"
                      ? "rotate-180 text-white"
                      : "text-blue-300"
                  }`}
                />
              </button>

              {/* Category Models Popover */}
              {openDropdown === "category" && (
                <div className="absolute left-0 sm:left-auto top-full mt-2 w-[280px] sm:w-[320px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-2 border-b border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0075B6]">
                      {category} Series
                    </span>
                  </div>
                  <div className="py-1 space-y-0.5">
                    {currentCategoryData.items.map((item) => {
                      const isCurrent = item.slug === currentSlug;
                      return (
                        <Link
                          key={item.slug}
                          href={`/${item.slug}`}
                          onClick={() => setOpenDropdown(null)}
                          className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all ${
                            isCurrent
                              ? "bg-blue-50 text-[#0075B6] font-semibold"
                              : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                          }`}
                        >
                          <span>{item.name}</span>
                          {isCurrent && (
                            <Check size={14} className="text-[#0075B6] shrink-0" />
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </li>
            <li className="text-blue-300/60 select-none">/</li>
          </>
        )}

        {/* 3. CURRENT PRODUCT TITLE */}
        <li className="text-white font-semibold truncate max-w-[200px] sm:max-w-none">
          {currentTitle}
        </li>
      </ol>
    </nav>
  );
}
