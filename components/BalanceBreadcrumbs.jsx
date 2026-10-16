"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Check, ArrowRight, Scale, Gauge, Droplets, Layers } from "lucide-react";

export const BALANCE_PORTFOLIO = [
  {
    name: "Analytical Chemical Balance",
    slug: "chemical-balance",
    subtitle: "0.1mg sub-milligram precision with glass draft shield",
    category: "Analytical",
    icon: Scale,
  },
  {
    name: "Electronic Top Loading Balance",
    slug: "electronic-top-loading-balance",
    subtitle: "High-speed precision analytical benchtop balance",
    category: "Precision",
    icon: Layers,
  },
  {
    name: "Digital Physical Balance",
    slug: "physical-balance",
    subtitle: "Dependable multi-capacity digital benchtop weighing",
    category: "General Lab",
    icon: Scale,
  },
  {
    name: "Infrared Moisture Balance",
    slug: "infrared-moisture-balance",
    subtitle: "Rapid thermal moisture content determination",
    category: "Moisture",
    icon: Droplets,
  },
  {
    name: "Electronic Platform Balance",
    slug: "electronic-platform-balance",
    subtitle: "Heavy-duty industrial floor & bench platform weighing",
    category: "Industrial",
    icon: Gauge,
  },
];

export default function BalanceBreadcrumbs({
  currentTitle = "Analytical Chemical Balance",
  currentSlug = "chemical-balance",
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
            href="/laboratory-equipment-and-setup-services"
            className="hover:text-white transition-colors py-1 px-1 rounded"
          >
            Laboratory Equipment
          </Link>
        </li>
        <li className="text-blue-300/60 select-none">/</li>

        {/* BALANCES DROPDOWN */}
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
            <span>Laboratory Balances</span>
            <ChevronDown
              size={13}
              className={`transition-transform duration-200 ${
                openDropdown ? "rotate-180 text-white" : "text-blue-300"
              }`}
            />
          </button>

          {/* Balances Menu Popover */}
          {openDropdown && (
            <div className="absolute left-0 sm:left-auto top-full mt-2 w-[310px] sm:w-[360px] max-h-[380px] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200 p-2.5 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0075B6]">
                  Laboratory Balances
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  {BALANCE_PORTFOLIO.length} Models
                </span>
              </div>

              <div className="space-y-1 py-1.5">
                {BALANCE_PORTFOLIO.map((item) => {
                  const isCurrent = item.slug === currentSlug;
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.slug}
                      href={`/${item.slug}`}
                      onClick={() => setOpenDropdown(false)}
                      className={`flex items-start justify-between p-2.5 rounded-xl text-xs transition-colors group ${
                        isCurrent
                          ? "bg-blue-50 text-[#0075B6]"
                          : "text-slate-700 hover:bg-slate-50 hover:text-[#0075B6]"
                      }`}
                    >
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
                          <div className={`font-semibold ${isCurrent ? "font-bold text-[#0075B6]" : ""}`}>
                            {item.name}
                          </div>
                          <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                            {item.subtitle}
                          </div>
                        </div>
                      </div>
                      {isCurrent ? (
                        <Check size={14} className="text-[#0075B6] shrink-0 ml-2 mt-1" />
                      ) : (
                        <ArrowRight
                          size={13}
                          className="text-slate-300 shrink-0 ml-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      )}
                    </Link>
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
