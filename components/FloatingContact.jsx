"use client";

import Image from "next/image";
import { useState } from "react";
import ContactSlideForm from "./ContactSlideForm";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed right-0 bottom-1/9 z-40 flex flex-col gap-3 items-center">
        <button
          onClick={() => setOpen(true)}
          className="fixed top-4/6 -translate-y-1/2 z-40
         bg-[#7b6cf6] text-white px-2 py-1 rounded-lg
          rotate-180  font-medium tracking-wide cursor-pointer"
          style={{ writingMode: "vertical-rl" }}
        >
          Contact Us
        </button>

        {/* CALL */}
        <a href="tel:+917782069184">
          <Image src="/call.png" alt="Call" width={32} height={30} />
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/917782069184"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/whatsapp-image.png"
            alt="WhatsApp"
            width={30}
            height={30}
          />
        </a>
      </div>

      <ContactSlideForm open={open} onClose={() => setOpen(false)} />
    </>
  );
}
