"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Check, ArrowRight, Orbit, Disc, RefreshCw, Activity, Cpu } from "lucide-react";

export const SHAKER_PORTFOLIO = [
  {
    name: "Rotary Flask Shaker",
    slug: "rotary-flask-shaker",
    subtitle: "Benchtop orbital motion flask shaker with universal platform",
    category: "Orbital Shakers",
    icon: Orbit,
    isAvailable: true,
  },
  {
    name: "Gyratory Sieve Shaker",
    slug: "gyratory-sieve-shaker",
    subtitle: "High-precision particle sizing & aggregate sieve analysis",
    category: "Sieve Shakers",
    icon: Disc,
    isAvailable: false,
  },
  {
    name: "Rotap Sieve Shaker",
    slug: "rotap-sieve-shaker",
    subtitle: "Mechanical tapping and circular motion sieve shaker",
    category: "Sieve Shakers",
    icon: RefreshCw,
    isAvailable: false,
  },
  {
    name: "Kahn Reciprocating Shaking Machine",
    slug: "kahn-reciprocating-shaking-machine",
    subtitle: "Back-and-forth reciprocating linear motion shaking",
    category: "Linear Shakers",
    icon: Activity,
    isAvailable: false,
  },
  {
    name: "Magnetic Shaker",
    slug: "magnetic-shaker",
    subtitle: "Compact electromagnetic solution mixing & agitation",
    category: "Magnetic Stirrers",
    icon: Cpu,
    isAvailable: false,
  },
];

export default function ShakerBreadcrumbs({
  currentTitle = "Rotary Flask Shaker",
  currentSlug = "rotary-flask-shaker",
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

        {/* LABORATORY SHAKING MACHINE DROPDOWN */}
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
            <span>Laboratory Shaking Machines</span>
            <ChevronDown
              size={13}
              className={`transition-transform duration-200 ${
                openDropdown ? "rotate-180 text-white" : "text-blue-300"
              }`}
            />
          </button>

          {/* Shaker Menu Popover */}
          {openDropdown && (
            <div className="absolute left-0 sm:left-auto top-full mt-2 w-[310px] sm:w-[370px] max-h-[400px] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200 p-2.5 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0075B6]">
                  Laboratory Shaking Equipment
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  {SHAKER_PORTFOLIO.length} Models
                </span>
              </div>

              <div className="space-y-1 py-1.5">
                {SHAKER_PORTFOLIO.map((item) => {
                  const isCurrent = item.slug === currentSlug;
                  const Icon = item.icon;
                  const targetHref = item.isAvailable
                    ? `/${item.slug}`
                    : `/contact-us?product=${item.slug}`;

                  return (
                    <Link
                      key={item.slug}
                      href={targetHref}
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
                          <div className={`font-semibold flex items-center gap-1.5 ${isCurrent ? "font-bold text-[#0075B6]" : ""}`}>
                            <span>{item.name}</span>
                            {!item.isAvailable && (
                              <span className="text-[9px] font-medium px-1.5 py-0.2 bg-slate-100 text-slate-500 rounded border border-slate-200">
                                Enquire
                              </span>
                            )}
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
