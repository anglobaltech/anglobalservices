"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Check,
  ArrowRight,
  Wheat,
  Droplets,
  Layers,
  Flame,
  Sprout,
  Leaf,
  TreePine,
} from "lucide-react";

export const MOISTURE_METER_PORTFOLIO = [
  {
    name: "Flour Moisture Meter",
    slug: "flour-moisture-meter",
    subtitle: "Digital powder & atta moisture analyzer with dielectric ATC cell",
    category: "Food & Milling",
    icon: Wheat,
    isAvailable: true,
  },
  {
    name: "Grain Moisture Meter",
    slug: "grain-moisture-meter",
    subtitle: "Multi-grain rapid moisture tester for wheat, paddy, corn & pulses",
    category: "Grains & Agriculture",
    icon: Wheat,
    isAvailable: true,
  },
  {
    name: "Hay Moisture Meter",
    slug: "hay-moisture-meter",
    subtitle: "Heavy-duty probe moisture tester for hay, straw, forage & silage",
    category: "Agronomy & Fodder",
    icon: Layers,
    isAvailable: true,
  },
  {
    name: "Red Pepper Moisture Meter",
    slug: "red-pepper-moisture-meter",
    subtitle: "Specialized moisture content tester for whole & ground dried chilies",
    category: "Spices & Food",
    icon: Flame,
    isAvailable: true,
  },
  {
    name: "Seed Moisture Meter",
    slug: "seed-moisture-meter",
    subtitle: "Precision non-destructive moisture analyzer for certified seeds",
    category: "Seed Technology",
    icon: Sprout,
    isAvailable: true,
  },
  {
    name: "Soil Moisture Meter",
    slug: "soil-moisture-meter",
    subtitle: "Digital soil moisture & temperature probe for agronomy research",
    category: "Soil Science",
    icon: Leaf,
    isAvailable: true,
  },
  {
    name: "Tobacco Moisture Meter",
    slug: "tobacco-moisture-meter",
    subtitle: "Rapid moisture determination for cured, raw & processed tobacco leaves",
    category: "Cash Crops",
    icon: Leaf,
    isAvailable: true,
  },
  {
    name: "Wood Moisture Meter",
    slug: "wood-moisture-meter",
    subtitle: "Precision pin-type digital moisture meter for timber, lumber & veneer",
    category: "Timber & Forest",
    icon: TreePine,
    isAvailable: true,
  },
];

export default function MoistureMeterBreadcrumbs({
  currentTitle = "Flour Moisture Meter",
  currentSlug = "flour-moisture-meter",
}) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    }
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpenDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
            href="/equipments-and-machinery"
            className="hover:text-white transition-colors py-1 px-1 rounded"
          >
            Equipments &amp; Machinery
          </Link>
        </li>
        <li className="text-blue-300/60 select-none">/</li>

        {/* MOISTURE METERS DROPDOWN */}
        <li className="relative">
          <button
            type="button"
            onClick={() => setOpenDropdown((prev) => !prev)}
            aria-expanded={openDropdown}
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-blue-100 hover:text-white transition-all cursor-pointer border ${
              openDropdown
                ? "bg-white/20 text-white border-white/40 shadow-sm"
                : "bg-white/10 hover:bg-white/15 border-white/15 text-blue-200"
            }`}
          >
            <Droplets size={13} className="text-blue-300 shrink-0" />
            <span>Moisture Meters</span>
            <ChevronDown
              size={13}
              className={`transition-transform duration-200 ${
                openDropdown ? "rotate-180 text-white" : "text-blue-300"
              }`}
            />
          </button>

          {/* Moisture Meters Menu Popover */}
          {openDropdown && (
            <div className="absolute left-0 sm:left-auto top-full mt-2 w-[310px] sm:w-[380px] max-h-[420px] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200 p-2.5 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0075B6]">
                  Digital Moisture Meters
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  {MOISTURE_METER_PORTFOLIO.length} Models
                </span>
              </div>

              <div className="space-y-1 py-1.5">
                {MOISTURE_METER_PORTFOLIO.map((item) => {
                  const isCurrent = item.slug === currentSlug;
                  const Icon = item.icon;
                  const isLinkable = item.isAvailable;

                  const content = (
                    <div className="flex items-start justify-between w-full">
                      <div className="flex items-start gap-2.5">
                        <div
                          className={`p-1.5 rounded-lg shrink-0 mt-0.5 ${
                            isCurrent
                              ? "bg-blue-100 text-[#0075B6]"
                              : "bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-[#0075B6]"
                          }`}
                        >
                          <Icon size={14} />
                        </div>
                        <div>
                          <div
                            className={`font-semibold text-xs ${
                              isCurrent ? "font-bold text-[#0075B6]" : "text-slate-800"
                            }`}
                          >
                            {item.name}
                          </div>
                          <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                            {item.subtitle}
                          </div>
                        </div>
                      </div>
                      {isCurrent ? (
                        <Check size={14} className="text-[#0075B6] shrink-0 ml-2 mt-1" />
                      ) : isLinkable ? (
                        <ArrowRight
                          size={13}
                          className="text-slate-300 shrink-0 ml-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      ) : (
                        <span className="text-[10px] bg-slate-100 text-slate-400 font-semibold px-1.5 py-0.5 rounded shrink-0 ml-2 mt-0.5">
                          Catalog
                        </span>
                      )}
                    </div>
                  );

                  if (isLinkable) {
                    return (
                      <Link
                        key={item.slug}
                        href={`/${item.slug}`}
                        onClick={() => setOpenDropdown(false)}
                        className={`flex items-start p-2.5 rounded-xl text-xs transition-colors group ${
                          isCurrent
                            ? "bg-blue-50 text-[#0075B6]"
                            : "text-slate-700 hover:bg-slate-50 hover:text-[#0075B6]"
                        }`}
                      >
                        {content}
                      </Link>
                    );
                  }

                  return (
                    <div
                      key={item.slug}
                      className="flex items-start p-2.5 rounded-xl text-xs opacity-75 cursor-default hover:bg-slate-50/60"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </li>
        <li className="text-blue-300/60 select-none">/</li>

        {/* CURRENT TITLE */}
        <li
          className="text-white font-semibold truncate max-w-[200px] sm:max-w-none"
          aria-current="page"
        >
          {currentTitle}
        </li>
      </ol>
    </nav>
  );
}

