"use client";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";

const news = [
  "UPCOMING QCO ON TEXTILE GOODS BY MINISTRY OF TEXTILE",
  "COTTON BALES – NEW QCO NOTIFICATION",
  "UPCOMING QCOs ORDER FOR BIS CERTIFICATION",
  "MANDATORY BIS CERTIFICATION FOR FASTENERS",
  "NEW INDUSTRIAL COMPLIANCE GUIDELINES ISSUED",
];

export default function TopBar() {
  return (
    <div className="w-full bg-white border-b border-gray-200 text-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 gap-4">
        <div className="flex items-center gap-3 overflow-hidden flex-1">
          <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase whitespace-nowrap">
            News
          </span>

          <div className="relative overflow-hidden flex-1">
            <div className="news-marquee flex items-center text-xs whitespace-nowrap">
              {[...news, ...news].map((item, index) => (
                <span
                  key={index}
                  className="mx-6 flex items-center gap-2 font-medium text-gray-800"
                >
                  <Image
                    src="/new.gif"
                    alt="New"
                    width={26}
                    height={14}
                    unoptimized
                  />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4 whitespace-nowrap">
          {/* Contact Text */}
          <a
            href="/contact-us"
            className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition"
          >
            <MapPin className="w-4 h-4 text-black text-xs" />
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
