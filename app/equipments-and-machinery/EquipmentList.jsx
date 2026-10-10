"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function EquipmentList({ equipments }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  // Pagination logic
  const totalPages = Math.ceil(equipments.length / itemsPerPage);
  const paginatedEquipments = equipments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      const element = document.getElementById("equipment-list");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="w-full">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {paginatedEquipments.map((item, index) => (
          <Link
            href={`/${item.slug}`}
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col group border border-gray-100 cursor-pointer block"
          >
            {/* Card Image */}
            <div className="relative h-56 w-full shrink-0 overflow-hidden bg-gray-50 flex items-center justify-center border-b border-gray-100 p-4">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain group-hover:scale-[1.02] transition-transform duration-500 p-4"
              />
              <div className="absolute top-4 left-4 bg-[#0a192f] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10 shadow-sm">
                {item.category}
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-[#0a192f] leading-tight mb-3 group-hover:text-[#0075B6] transition-colors line-clamp-2">
                {item.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                {item.excerpt}
              </p>
              
              {/* Buttons matching request */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                <div 
                  className="flex-1 bg-white border border-[#0075B6] text-[#0075B6] group-hover:bg-[#0075B6] group-hover:text-white text-center py-2.5 rounded-lg font-bold text-[13px] uppercase tracking-wide transition-colors duration-300"
                >
                  View Details
                </div>
                {/* Prevent Link nesting by making Enquire an object that navigates separately, or just visually styled button since the whole card is a link */}
                <object className="flex-1">
                  <Link 
                    href="/contact-us" 
                    className="block w-full bg-[#0a192f] border border-[#0a192f] text-white hover:bg-gray-800 text-center py-2.5 rounded-lg font-bold text-[13px] uppercase tracking-wide transition-colors duration-300 shadow-md cursor-pointer"
                  >
                    Enquire
                  </Link>
                </object>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-16 flex justify-center items-center space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex space-x-1">
            {[...Array(totalPages)].map((_, idx) => {
              const pageNum = idx + 1;
              if (
                pageNum === 1 || 
                pageNum === totalPages || 
                (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
              ) {
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors cursor-pointer ${
                      currentPage === pageNum
                        ? "bg-[#0a3d62] text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              } else if (
                pageNum === currentPage - 2 || 
                pageNum === currentPage + 2
              ) {
                return <span key={pageNum} className="px-2 py-2 text-gray-500">...</span>;
              }
              return null;
            })}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
