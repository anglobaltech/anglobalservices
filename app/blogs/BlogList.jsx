"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

export default function BlogList({ initialBlogs }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  // Filter blogs based on search query
  const filteredBlogs = useMemo(() => {
    if (!searchQuery.trim()) return initialBlogs;
    const lowerQuery = searchQuery.toLowerCase();
    return initialBlogs.filter((blog) => {
      const titleMatch = blog.title?.toLowerCase().includes(lowerQuery);
      const excerptMatch = blog.excerpt?.toLowerCase().includes(lowerQuery);
      const categoryMatch = blog.category?.toLowerCase().includes(lowerQuery);
      return titleMatch || excerptMatch || categoryMatch;
    });
  }, [initialBlogs, searchQuery]);

  // Reset to page 1 when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Pagination logic
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 pb-12">
      {/* Search Bar - Highlighted & Professional */}
      <div className="mb-12 flex justify-center transform -translate-y-1/2">
        <div className="relative w-full max-w-3xl">
          <div className="bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-1.5 sm:p-2 flex items-center border border-gray-400 focus-within:shadow-[0_8px_30px_rgb(10,61,98,0.2)] focus-within:border-[#0072b1] transition-all duration-300 group">
            <div className="pl-3 sm:pl-4 pr-1 sm:pr-2 hidden sm:block shrink-0">
              <Search className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500 group-focus-within:text-[#0a3d62] transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search for expert insights, topics, or keywords..."
              className="w-full pl-4 sm:pl-2 pr-2 sm:pr-4 py-2.5 sm:py-3 md:py-4 bg-transparent text-gray-800 placeholder-gray-500 text-sm sm:text-base md:text-lg focus:outline-none min-w-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-gradient-to-r from-[#0a3d62] to-[#0072b1] hover:shadow-lg text-white px-5 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-full font-bold transition-all duration-300 hidden sm:block whitespace-nowrap cursor-pointer shrink-0 text-sm sm:text-base">
              Search
            </button>
            <button
              className="bg-gradient-to-r from-[#0a3d62] to-[#0072b1] text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 sm:hidden shadow-md"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      {paginatedBlogs.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {paginatedBlogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.slug}`}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col group cursor-pointer block border border-gray-100"
            >
              <div className="relative h-48 w-full shrink-0 overflow-hidden bg-white flex items-center justify-center border-b border-gray-100">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-contain group-hover:scale-[1.02] transition-transform duration-500"
                  unoptimized // Crucial for Firebase images
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <span className="text-xs text-[#0a3d62] font-bold uppercase tracking-wide">
                  {blog.category}
                </span>

                <h2 className="mt-2 text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-[#0072b1] transition-colors">
                  {blog.title}
                </h2>

                <p className="mt-3 text-gray-600 text-sm line-clamp-3 flex-grow">
                  {blog.excerpt}
                </p>

                <div className="mt-5 flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500 font-medium">{blog.date}</span>

                  <span className="text-[#0072b1] font-semibold text-sm group-hover:underline">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No blogs found matching "{searchQuery}"</p>
          <button 
            onClick={() => setSearchQuery("")}
            className="mt-4 text-[#0072b1] font-semibold hover:underline cursor-pointer"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center items-center space-x-2">
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
              // Simple pagination logic to show limited pages if too many
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
    </section>
  );
}
