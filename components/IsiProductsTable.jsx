"use client";

import { useState } from "react";
import Link from "next/link";
import { isiProductsList } from "../datatable/isiProducts"; // Ensure this path is correct

// Backup function just in case a 'slug' is missing in the data file
const generateSlug = (text) => {
  if (!text) return "";
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

export default function IsiProductsTable() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = isiProductsList.filter((product) => {
    const query = searchQuery.toLowerCase();
    return (
      product.isNo.toLowerCase().includes(query) ||
      product.name.toLowerCase().includes(query)
    );
  });

  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 uppercase mb-4">
            Products Covered Under BIS ISI Mark
          </h2>
          <div className="w-24 h-1 bg-[#0072b1] mx-auto rounded-full"></div>
        </div>

        {/* Search Bar */}
        <div className="mb-6 flex justify-center">
          <div className="w-full max-w-lg relative">
            <input
              type="text"
              placeholder="Search by Product Name or IS Number..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0072b1] focus:border-transparent transition-all"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Scrollable Table */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-y-auto overflow-x-auto max-h-[600px] custom-scrollbar">
            <table className="w-full min-w-[700px] text-left border-collapse">
              <thead className="bg-[#0072b1] text-white sticky top-0 z-10 shadow-md">
                <tr>
                  <th className="p-4 font-semibold text-sm w-20 text-center">
                    S.No.
                  </th>
                  <th className="p-4 font-semibold text-sm w-48">
                    IS Standard No.
                  </th>
                  <th className="p-4 font-semibold text-sm">Product Name</th>
                  <th className="p-4 font-semibold text-sm w-32 text-center">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product, index) => {
                    // Uses exact folder name from datatable/isiProducts.js if provided
                    const finalSlug = product.slug
                      ? product.slug
                      : generateSlug(product.name);

                    return (
                      <tr
                        key={index}
                        className="hover:bg-blue-50 transition-colors duration-200"
                      >
                        <td className="p-4 text-sm text-gray-700 text-center font-medium">
                          {product.sNo}
                        </td>
                        <td className="p-4 text-sm font-bold text-gray-900">
                          {product.isNo}
                        </td>
                        <td className="p-4 text-sm text-gray-700">
                          {product.name}
                        </td>
                        <td className="p-4 text-sm text-center">
                          {/* The Path is exactly /isi-products/[folder-name] */}
                          <Link
                            href={`/isi-products/${finalSlug}`}
                            prefetch={false}
                            className="inline-block bg-[#0072b1] text-white px-4 py-2 rounded-md text-xs font-semibold hover:bg-blue-800 transition-colors shadow-sm whitespace-nowrap"
                          >
                            View Details
                          </Link>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      className="p-8 text-center text-gray-500 font-medium"
                    >
                      No products found matching &quot;{searchQuery}&quot;
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
