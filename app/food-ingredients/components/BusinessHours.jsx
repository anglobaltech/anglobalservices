"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export default function BusinessHours({ theme = "blue" }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      // Using user's local time (assuming they are in India or we check their local time)
      const day = now.getDay(); // 0 is Sunday, 1-6 is Mon-Sat
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const timeInMinutes = hours * 60 + minutes;
      
      const openTime = 9 * 60 + 30; // 9:30 AM
      const closeTime = 18 * 60 + 30; // 18:30 PM
      
      if (day === 0) {
        setIsOpen(false); // Sunday Closed
      } else if (timeInMinutes >= openTime && timeInMinutes < closeTime) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    
    // Initial check
    checkOpenStatus();
    
    // Check every minute
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const isPink = theme === "pink";

  return (
    <div className="flex items-start gap-4 group/link">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-sm shrink-0 ${isPink ? "bg-pink-50 text-pink-600 group-hover/link:bg-pink-600 group-hover/link:text-white" : "bg-blue-50 text-[#0075B6] group-hover/link:bg-[#0075B6] group-hover/link:text-white"}`}>
        <Clock size={20} />
      </div>
      <div>
        <div className="flex items-center gap-2 mb-0.5">
          <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
            {isOpen ? "Open Now" : "Closed Now"}
          </p>
          <span className={`w-2.5 h-2.5 rounded-full ${isOpen ? "bg-green-500" : "bg-red-500"}`}></span>
        </div>
        <span className={`text-gray-900 font-extrabold transition-colors text-sm sm:text-base block ${isPink ? "group-hover/link:text-pink-600" : "group-hover/link:text-[#0075B6]"}`}>Mon-Sat: 09:30 AM - 06:30 PM</span>
        <span className={`text-gray-900 font-extrabold transition-colors text-sm sm:text-base block ${isPink ? "group-hover/link:text-pink-600" : "group-hover/link:text-[#0075B6]"}`}>Sun: Closed</span>
      </div>
    </div>
  );
}
