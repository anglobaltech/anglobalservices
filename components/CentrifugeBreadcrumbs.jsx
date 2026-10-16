"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Check, ArrowRight, Layers, Snowflake, Factory, Microscope, Cpu } from "lucide-react";

const CENTRIFUGE_PORTFOLIO = [
  {
    category: "Full Programmable",
    aliases: ["full programmable", "fully programmable", "programmable"],
    icon: Cpu,
    items: [
      { name: "Programmable High Speed Refrigerated Centrifuge", slug: "programmable-high-speed-refrigerated-centrifuge" },
      { name: "Programmable Large Capacity Refrigerated Centrifuge", slug: "programmable-large-capacity-refrigerated-centrifuge" },
    ],
  },
  {
    category: "Industrial Centrifuge",
    aliases: ["industrial centrifuge", "industrial"],
    icon: Factory,
    items: [
      { name: "Table Top Oil Test Centrifuge", slug: "table-top-oil-test-centrifuge" },
      { name: "Table Top Dairy Test Centrifuge", slug: "table-top-dairy-test-centrifuge" },
    ],
  },
  {
    category: "Refrigerated",
    aliases: ["refrigerated", "cold centrifuge", "cooling centrifuge", "low speed cooling centrifuge", "low speed refrigerated", "low temperature centrifuge", "low temp centrifuge", "large capacity refrigerated", "low capacity refrigerated", "low capacity cooling centrifuge", "bench top refrigerated centrifuge"],
    icon: Snowflake,
    items: [
      { name: "Bench Top High Speed Refrigerated Centrifuge", slug: "bench-top-high-speed-refrigerated-centrifuge" },
      { name: "Bench Top High Speed Micro Refrigerated Centrifuge", slug: "bench-top-high-speed-micro-refrigerated-centrifuge" },
      { name: "Bench Top Low Speed Refrigerated Centrifuge", slug: "bench-top-low-speed-refrigerated-centrifuge" },
      { name: "Bench Top Large Capacity Refrigerated Centrifuge", slug: "bench-top-large-capacity-refrigerated-centrifuge" },
      { name: "Bench Top Low Capacity Refrigerated Centrifuge", slug: "bench-top-low-capacity-refrigerated-centrifuge" },
    ],
  },
  {
    category: "Non Refrigerated",
    icon: Layers,
    items: [
      { name: "Bench Top High Speed Centrifuge", slug: "bench-top-high-speed-centrifuge" },
      { name: "Bench Top High Speed Micro Centrifuge", slug: "bench-top-high-speed-micro-centrifuge" },
      { name: "Bench Top Low Capacity Centrifuge", slug: "bench-top-low-capacity-centrifuge" },
      { name: "Bench Top Large Capacity Centrifuge", slug: "bench-top-large-capacity-centrifuge" },
      { name: "Bench Top Low Speed Centrifuge", slug: "bench-top-low-speed-centrifuge" },
    ],
  },
  {
    category: "Pathological",
    aliases: ["pathological", "pathology"],
    icon: Microscope,
    items: [
      { name: "Bench Top Filtration Centrifuge", slug: "bench-top-filtration-centrifuge" },
      { name: "Bench Top Urine Sedimentation Centrifuge", slug: "bench-top-urine-sedimentation-centrifuge" },
      { name: "Cell Smear Centrifuge", slug: "cell-smear-centrifuge" },
      { name: "Immunity Blood Centrifuge", slug: "immunity-blood-centrifuge" },
      { name: "Micro-Haematocrit Centrifuge", slug: "micro-haemocrit-centrifuge" },
    ],
  },
];

export default function CentrifugeBreadcrumbs({
  category = "Non Refrigerated",
  currentTitle = "Bench Top High Speed Centrifuge",
  currentSlug = "bench-top-high-speed-centrifuge",
}) {
  const [openDropdown, setOpenDropdown] = useState(null); // 'centrifuge' | 'category' | null
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
    CENTRIFUGE_PORTFOLIO.find(
      (c) =>
        c.category.toLowerCase() === category.toLowerCase() ||
        c.aliases?.some((a) => a.toLowerCase() === category.toLowerCase())
    ) || CENTRIFUGE_PORTFOLIO[0];

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

        {/* 1. CENTRIFUGE DROPDOWN */}
        <li className="relative">
          <button
            type="button"
            onClick={() =>
              setOpenDropdown((prev) =>
                prev === "centrifuge" ? null : "centrifuge"
              )
            }
            aria-expanded={openDropdown === "centrifuge"}
            className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-blue-100 hover:text-white transition-all cursor-pointer border ${
              openDropdown === "centrifuge"
                ? "bg-white/20 text-white border-white/40 shadow-sm"
                : "bg-white/10 hover:bg-white/15 border-white/15 text-blue-200"
            }`}
          >
            <span>Centrifuge</span>
            <ChevronDown
              size={13}
              className={`transition-transform duration-200 ${
                openDropdown === "centrifuge"
                  ? "rotate-180 text-white"
                  : "text-blue-300"
              }`}
            />
          </button>

          {/* Centrifuge Menu Popover */}
          {openDropdown === "centrifuge" && (
            <div className="absolute left-0 sm:left-auto top-full mt-2 w-[310px] sm:w-[350px] max-h-[380px] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200 p-2.5 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0075B6]">
                  All Centrifuge Categories
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  Select model
                </span>
              </div>

              <div className="py-1 divide-y divide-slate-100">
                {CENTRIFUGE_PORTFOLIO.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <div key={cat.category} className="py-2 first:pt-1 last:pb-1">
                      <div className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <Icon size={12} className="text-[#0075B6]" />
                        {cat.category}
                      </div>
                      <div className="space-y-0.5 mt-1">
                        {cat.items.map((item) => {
                          const isCurrent = item.slug === currentSlug;
                          return (
                            <Link
                              key={item.slug}
                              href={`/${item.slug}`}
                              onClick={() => setOpenDropdown(null)}
                              className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                                isCurrent
                                  ? "bg-blue-50 text-[#0075B6] font-bold"
                                  : "text-slate-700 hover:bg-slate-50 hover:text-[#0075B6]"
                              }`}
                            >
                              <span className="truncate pr-2">{item.name}</span>
                              {isCurrent ? (
                                <Check size={13} className="text-[#0075B6] shrink-0" />
                              ) : (
                                <ArrowRight
                                  size={12}
                                  className="text-slate-300 shrink-0 opacity-0 group-hover:opacity-100"
                                />
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </li>
        <li className="text-blue-300/60 select-none">/</li>

        {/* 2. SUBCATEGORY (Non Refrigerated / Refrigerated / Pathological) DROPDOWN */}
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

          {/* Subcategory Menu Popover */}
          {openDropdown === "category" && (
            <div className="absolute left-0 sm:left-auto top-full mt-2 w-[290px] sm:w-[320px] max-h-[360px] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200 p-2.5 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0075B6]">
                  {category} Series
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  {currentCategoryData.items.length} Models
                </span>
              </div>

              <div className="space-y-1 py-1.5">
                {currentCategoryData.items.map((item) => {
                  const isCurrent = item.slug === currentSlug;
                  return (
                    <Link
                      key={item.slug}
                      href={`/${item.slug}`}
                      onClick={() => setOpenDropdown(null)}
                      className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                        isCurrent
                          ? "bg-blue-50 text-[#0075B6] font-bold"
                          : "text-slate-700 hover:bg-slate-50 hover:text-[#0075B6]"
                      }`}
                    >
                      <span className="truncate pr-2">{item.name}</span>
                      {isCurrent ? (
                        <Check size={14} className="text-[#0075B6] shrink-0" />
                      ) : (
                        <ArrowRight size={13} className="text-slate-400 shrink-0" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </li>
        <li className="text-blue-300/60 select-none">/</li>

        {/* 3. CURRENT PAGE TITLE */}
        <li className="text-white font-semibold truncate max-w-[200px] sm:max-w-none" aria-current="page">
          {currentTitle}
        </li>
      </ol>
    </nav>
  );
}
