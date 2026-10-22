"use client";

import Link from "next/link";
import { 
  Globe, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2
} from "lucide-react";

export default function GlobalFootprint() {
  const regionalCorridors = [
    { name: "Central Hub", region: "Delhi, India", flag: "🇮🇳" },
    { name: "Americas", region: "USA • Canada • Mexico • Brazil", flag: "🌎" },
    { name: "Europe & UK", region: "Germany • UK • France • Italy", flag: "🇪🇺" },
    { name: "Middle East & Africa", region: "UAE • Saudi Arabia • Egypt • South Africa", flag: "🌍" },
    { name: "Asia-Pacific", region: "China • Japan • Singapore • Australia", flag: "🌏" },
  ];

  return (
    <section 
      id="global-footprint" 
      className="relative w-full pt-8 sm:pt-10 lg:pt-12 pb-14 sm:pb-16 overflow-hidden bg-gradient-to-b from-[#030919] via-[#061433] to-[#030919] text-white"
    >
      {/* Background Decorative Grid and Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle high-tech grid */}
        <div 
          className="absolute inset-0 opacity-[0.07]" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)`,
            backgroundSize: '36px 36px'
          }}
        />

        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] lg:w-[1400px] h-[280px] bg-gradient-to-b from-sky-500/20 via-blue-600/10 to-transparent blur-3xl opacity-60" />
        
        {/* Ambient Floating Flares */}
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Top Transition Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

      <div className="max-w-7xl lg:max-w-[96%] xl:max-w-[98%] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-5 relative z-10">
        
        {/* Section Header */}
        <div className="text-center w-full max-w-4xl lg:max-w-full mx-auto mb-6 sm:mb-8">
          
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-blue-950/80 border border-sky-400/30 text-sky-300 text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-3.5 shadow-[0_0_15px_rgba(56,189,248,0.2)] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span>Worldwide Network & Global Footprint</span>
          </div>

          {/* Heading - Strictly 2 Lines */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] font-black text-white tracking-tight leading-[1.2] mb-3.5">
            <span>Connecting Continents.</span>
            <span className="block mt-1 sm:mt-1.5 text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#fbbf24] whitespace-normal sm:whitespace-nowrap">
              Delivering Excellence Worldwide.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-300 text-xs sm:text-sm md:text-[15px] lg:text-base leading-relaxed max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto font-normal">
            Headquartered in <strong className="text-white font-semibold">Delhi, India</strong>, AN Global Services bridges international manufacturers with certified Indian compliance, turnkey laboratory machinery, and premium commodities across <span className="text-sky-300 font-semibold">50+ countries and 5 continents</span>.
          </p>

          {/* Corridor Quick Pills */}
          <div className="w-full max-w-full flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 lg:gap-1.5 xl:gap-2 mt-5 sm:mt-6">
            {regionalCorridors.map((item, idx) => (
              <div 
                key={idx}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 lg:px-2 xl:px-2.5 py-1 sm:py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-[11px] sm:text-xs lg:text-[10.5px] xl:text-[11px] 2xl:text-xs text-slate-300 shadow-sm hover:border-sky-400/50 hover:text-white transition-all duration-200 whitespace-nowrap"
              >
                <span className="text-xs sm:text-sm">{item.flag}</span>
                <span className="font-semibold text-white">{item.name}:</span>
                <span className="text-slate-400 hidden md:inline">{item.region}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Centerpiece Showcase: Interactive Command Card with the World Map GIF */}
        <div className="relative group">
          {/* Ambient Glow behind the Card */}
          <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-sky-500/20 via-blue-600/30 to-amber-500/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* The Main Container */}
          <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-sky-400/25 bg-[#020817] shadow-[0_20px_80px_-15px_rgba(2,132,199,0.35)]">
            
            {/* Top Command Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 px-5 sm:px-8 py-3 bg-slate-950/90 border-b border-slate-800/80 text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-white tracking-wide text-[11px] sm:text-xs">
                  GLOBAL OPERATIONS COMMAND
                </span>
                <span className="hidden sm:inline text-slate-500">|</span>
                <span className="hidden sm:inline text-slate-400 text-[11px] sm:text-xs">
                  Central Hub: New Delhi, India (28.6139° N, 77.2090° E)
                </span>
              </div>

              <div className="flex items-center gap-4 text-slate-400 text-[11px] sm:text-xs">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  Real-Time Trade & Certification Corridors
                </span>
                <span className="hidden md:flex items-center gap-1.5 text-amber-300/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Active across 24 Timezones
                </span>
              </div>
            </div>

            {/* The World Map GIF Container */}
            <div className="relative w-full bg-[#020817] overflow-hidden">
              {/* The GIF Asset */}
              <img 
                src="/world-map-footprints.gif" 
                alt="AN Global Services - Worldwide Footprint and Global Network from Delhi, India"
                className="w-full h-[185px] sm:h-auto object-cover object-center select-none block"
                loading="eager"
              />

              {/* Top & Bottom Subtle Vignette to Blend Seamlessly */}
              <div className="absolute inset-x-0 top-0 h-10 sm:h-16 bg-gradient-to-b from-[#020817] to-transparent pointer-events-none opacity-60" />
              <div className="absolute inset-x-0 bottom-0 h-12 sm:h-20 bg-gradient-to-t from-[#020817] to-transparent pointer-events-none opacity-80" />

              {/* Floating Delhi Central Hub Badge (Top-left on mobile, bottom-left on desktop) */}
              <div className="absolute top-2 left-2 sm:top-auto sm:bottom-3 sm:left-3 z-20 pointer-events-none">
                <div className="flex items-center gap-1.5 sm:gap-2 bg-slate-950/50 backdrop-blur-sm px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-full border border-amber-400/25 shadow-md">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  </div>
                  <span className="text-[10px] sm:text-xs md:text-sm text-slate-200 font-medium tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                    <span className="text-amber-400 font-bold text-[9px] sm:text-[11px] uppercase mr-1">Hub:</span>
                    <span className="text-white font-semibold">Delhi NCR, India</span>
                  </span>
                </div>
              </div>

              {/* Bespoke "We Serve Worldwide" Callout (Bottom Right) */}
              <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 z-20 pointer-events-none">
                <div className="flex items-center gap-1.5 sm:gap-2 bg-slate-950/50 backdrop-blur-sm px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-full border border-sky-400/20 shadow-md">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400 shrink-0">
                    <Globe className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  </div>
                  <span className="font-serif italic text-[11px] sm:text-xs md:text-sm text-sky-100/90 font-normal tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                    We serve worldwide
                  </span>
                </div>
              </div>

            </div>

            {/* Bottom Strip inside Card */}
            <div className="bg-slate-950/95 border-t border-slate-800/80 px-6 py-3.5 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-sky-400" />
                <span className="text-slate-300 font-medium text-[11px] sm:text-xs">
                  Direct Bilateral Support for Foreign Manufacturers (FMCS) & Export Houses
                </span>
              </div>
              <div className="flex items-center gap-6 text-[11px] sm:text-xs">
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 99% Guaranteed Approvals
                </span>
                <span className="text-sky-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> NABL & BIS Synchronized
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Interactive Global Expansion Banner */}
        <div className="mt-6 sm:mt-8 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-900/35 via-sky-900/25 to-indigo-900/35 border border-sky-400/25 px-5 sm:px-6 py-3.5 sm:py-4 backdrop-blur-md shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-0.5">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>International Trade & Compliance Advisory</span>
            </div>
            <h4 className="text-sm sm:text-base md:text-lg font-bold text-white leading-snug">
              Expanding your enterprise into India or overseas markets?
            </h4>
            <p className="text-slate-300 text-[11px] sm:text-xs mt-0.5 max-w-xl lg:max-w-2xl leading-relaxed">
              Connect directly with our international desk in Delhi for tailored FMCS foreign licensing, BIS certification, and laboratory setups.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
            <Link href="/contact-us">
              <button className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-[#0075B6] to-[#0099CC] hover:from-[#005f86] hover:to-[#0077A8] text-white font-bold text-[11px] sm:text-xs shadow-[0_0_15px_rgba(0,117,182,0.35)] hover:shadow-[0_0_25px_rgba(0,117,182,0.5)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-1.5 cursor-pointer">
                <span>Connect With Global Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Link>

            <Link href="/apply-bis-certification">
              <button className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-[11px] sm:text-xs border border-white/20 hover:border-white/35 transition-all duration-300 cursor-pointer">
                Foreign Manufacturer Scheme (FMCS)
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
