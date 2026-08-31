"use client";

import { useState } from "react";
import BulkPricingModal from "./BulkPricingModal";

export default function RequestPricingButton({ productName, category, theme = "blue" }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isPink = theme === "pink";

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        type="button"
        className={`${isPink ? "bg-pink-600 hover:bg-pink-700" : "bg-[#0075B6] hover:bg-blue-700"} text-white px-8 py-3.5 rounded-md font-bold cursor-pointer hover:scale-105 transition-all shadow-lg text-center flex items-center justify-center w-max`}
      >
        Request Bulk Pricing
      </button>

      <BulkPricingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={productName}
        category={category}
      />
    </>
  );
}
