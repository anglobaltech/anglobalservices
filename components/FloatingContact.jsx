"use client";
import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

const FloatingContact = () => {
  return (
    <div className="fixed right-3 bottom-1/8 z-50 flex flex-col gap-4">
      {/* CALL BUTTON */}
      <a
        href="tel:7782069184"
        className="w-10 h-10 text-blue-600 rounded-full flex items-center justify-center hover:scale-120  transition-all"
        aria-label="Call Now"
      >
        <div className="relative w-9 h-9">
          <Image
            src="/call.png"
            alt="call"
            fill
            className="object-contain hover:scale-130  transition-transform"
            priority
          />
        </div>
      </a>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/917782069184"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Chat"
        className="
            w-10 h-10
            rounded-full
            flex items-center justify-center
            transition-all
            "
      >
        <div className="relative w-9 h-9">
          <Image
            src="/whatsapp-image.png"
            alt="WhatsApp"
            fill
            className="object-contain hover:scale-120  transition-transform"
            priority
          />
        </div>
      </a>
    </div>
  );
};

export default FloatingContact;
