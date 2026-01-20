"use client";
import Image from "next/image";
import { useRef, useState } from "react";

const images = [
  "/service/hallmarking/acetic-acid.png",
  "/service/hallmarking/beta-picoline.png",
  "/service/hallmarking/Ferronickel.png",
  "/service/hallmarking/hydrogenated-rice.png",
  "/service/hallmarking/methenol.png",
  "/service/hallmarking/potassium.png",
  "/service/hallmarking/Morpholine.png",
];

export default function GoldHallmarkingPage() {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDrag = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; 
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <main className="w-full bg-white">
      <section
        className="relative w-full h-55 md:h-65 flex items-center justify-center"
        style={{
          backgroundImage: "url('/service/isi/about.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0a3d62]/70" />

        <h1 className="relative z-10 text-white text-2xl md:text-4xl font-bold text-center px-4 leading-snug">
          BIS Certification for Chemicals & Petrochemicals
        </h1>
      </section>

      {/* Content section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/hallmarking/chemical.jpg"
                alt="BIS Certification"
                width={420}
                height={520}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-12">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                Laboratory Equipment & Setup
              </h1>
              <div className="w-full h-0.5 bg-[#0072b1] mt-2 mb-4 " />

              <p className="text-gray-500 text-[15px] leading-6 text-justify ">
                Department of Chemicals and Petrochemicals BIS certification is
                a process of certifying that a product conforms to a certain
                Indian standard and is therefore considered safe for use in the
                Indian market. BIS certification is mandatory for certain
                products listed in mandatory Product Certification Scheme of
                BIS, to be sold in India. Obtaining BIS certification requires
                passing various tests and inspections to ensure the product
                meets the relevant Indian standards.
              </p>

               <p className="text-gray-500 text-[15px] leading-6 text-justify mt-5">
                AN Global Services is an established ISI certification service
                provider for both Indian and international manufacturers. We
                help manage any process required to obtain ISI Certification for
                products included in the mandatory list or other optional
                products for which Indian Standard is eligible.
              </p>

              <p className="text-gray-500 text-[15px] leading-6 text-justify mt-5">
               ISI stands for - Indian Standards Institute, ISI is the certificate scheme under BIS (Bureau of Indian Standards) which approves that a product withstands the BIS standards which guarantees safety. ISI certificate allows manufacturers to use the standards mark, i.e., ISI Mark. Since 1955, the ISI mark is the standards compliance mark for industrial goods. This mark ensures that the product has abide by the Indian Standards which are laid by the Bureau of Indian Standards (national standards body in India which confirms that the product is secure and credible).
              </p>
            </div>
             
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-100 p-14">
        <div className="max-w-7xl mx-auto px-4">
          <div
            ref={sliderRef}
            onMouseDown={startDrag}
            onMouseLeave={stopDrag}
            onMouseUp={stopDrag}
            onMouseMove={onDrag}
            className={`flex gap-6 overflow-x-scroll select-none cursor-grab ${
              isDragging ? "cursor-grabbing" : ""
            } scrollbar-hide`}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="min-w-65 md:min-w-70 bg-white rounded-lg shadow-md overflow-hidden shrink-0"
              >
                <Image
                  src={src}
                  alt={`Hallmarking ${index + 1}`}
                  width={300}
                  height={200}
                  className="w-full h-45 object-cover pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
