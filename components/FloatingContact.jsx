"use client";

import Image from "next/image";
import { useState } from "react";
import ContactSlideForm from "./ContactSlideForm";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed right-0 top-[65%] -translate-y-1/2 z-50 flex flex-col gap-3 items-center pr-1">
        <button
          onClick={() => setOpen(true)}
          className="bg-[#0072b1] text-white px-2 py-1 rounded-lg rotate-180 font-medium tracking-wide cursor-pointer shadow-sm hover:shadow-md transition-shadow"
          style={{ writingMode: "vertical-rl" }}
        >
          Contact Us
        </button>

        <a href="tel:+917782069184">
          <Image src="/call-image.png" alt="Call" width={34} height={34} />
        </a>

        <a
          href="https://wa.me/917782069184"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/whatsapp-image.png"
            alt="WhatsApp"
            width={34}
            height={34}
          />
        </a>
      </div>

      <ContactSlideForm open={open} onClose={() => setOpen(false)} />
    </>
  );
}