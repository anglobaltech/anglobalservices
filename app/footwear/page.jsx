"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const metadata = {
  title: "ISI Certification Services | AN Global Services",
  description:
    "Get complete ISI Certification services for domestic and industrial products. AN Global Services provides end-to-end ISI certification support.",
};

const images = [
  "/service/isi/footwear/1.png",
  "/service/isi/footwear/2.png",
  "/service/isi/footwear/3.png",
  "/service/isi/footwear/4.png",
  "/service/isi/footwear/5.png",
  "/service/isi/footwear/6.png",
  "/service/isi/footwear/7.png",
  "/service/isi/footwear/8.png",
  "/service/isi/footwear/9.png",
  "/service/isi/footwear/10.png",
  "/service/isi/footwear/11.png",
];

const products = [
  {
    id: 1,
    name: "Industrial and protective rubber knee and ankle boots",
    standard: "IS 5557: 2004",
  },
  {
    id: 2,
    name: "All rubber gum boots and ankle boots",
    standard: "IS 5557 (Part 2): 2018",
  },
  {
    id: 3,
    name: "Moulded solid rubber soles and heels",
    standard: "IS 5676: 1995",
  },
  {
    id: 4,
    name: "Rubber microcellular sheets for soles and heels",
    standard: "IS 6664: 1992",
  },
  { id: 5, name: "Solid PVC soles and heels", standard: "IS 6719: 1972" },

  { id: 6, name: "PVC sandal", standard: "IS 6721: 1972" },
  { id: 7, name: "Rubber Hawai Chappal", standard: "IS 10702: 2023" },
  { id: 8, name: "Slipper, rubber", standard: "IS 11544: 1986" },
  {
    id: 9,
    name: "Polyvinyl chloride (PVC) industrial boots",
    standard: "IS 12254: 1993",
  },
  { id: 10, name: "Polyurethane sole, semirigid", standard: "IS 13893: 1994" },

  { id: 11, name: "Unlined moulded rubber boots", standard: "IS 13995: 1995" },
  {
    id: 12,
    name: "Moulded plastics footwear (PU boots)",
    standard: "IS 16645: 2018",
  },
  {
    id: 13,
    name: "Footwear for municipal scavenging work",
    standard: "IS 16994: 2018",
  },
  {
    id: 14,
    name: "Leather safety boots and shoes for miners",
    standard: "IS 1989 (Part 1): 1986",
  },
  {
    id: 15,
    name: "Leather safety boots for heavy metal industries",
    standard: "IS 1989 (Part 2): 1986",
  },

  { id: 16, name: "Canvas shoes rubber sole", standard: "IS 3735: 1996" },
  { id: 17, name: "Canvas boots rubber sole", standard: "IS 3736: 1995" },
  {
    id: 18,
    name: "Safety rubber canvas boots for miners",
    standard: "IS 3976: 2018",
  },
  {
    id: 19,
    name: "Leather safety footwear with rubber sole",
    standard: "IS 11226: 1993",
  },
  {
    id: 20,
    name: "Leather safety footwear with PVC sole",
    standard: "IS 14544: 1998",
  },

  { id: 21, name: "Sports footwear", standard: "IS 15844: 2010" },
  { id: 22, name: "High ankle tactical boots", standard: "IS 17012: 2018" },
  { id: 23, name: "Antiriot shoes", standard: "IS 17037: 2018" },
  { id: 24, name: "Derby shoes", standard: "IS 17043: 2018" },
];

const getGroupLink = (id) => {
  if (id <= 5) return "/footwear";
  if (id <= 10) return "/footwear";
  if (id <= 15) return "/footwear";
  if (id <= 20) return "/footwear";
  return "/footwear";
};

export default function ISIPage() {
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
    <main className="w-full">
      <section className="relative w-full h-65 md:h-68">
        <Image
          src="/service/isi/about.jpg"
          alt="BIS ISI Certification Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-bold">
              BIS Certification For Footwear Products
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-1">
          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src="/service/isi/footwear/isi-footwear-product.png"
              alt="ISI Mark Certification"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">
            BIS CERTIFICATION FOR FOOTWEAR
          </h2>

          <div className="space-y-5 text-gray-500 leading-7 text-[15px]">
            <p>
              The Department for Promotion of Industry and Internal Trade
              (DPIIT) officially unveiled that all shoemakers will need to
              obtain a BIS certificate, and all footwear must adhere to the
              relevant Indian Standard and exhibit the Standard Mark (ISI Mark)
              under a license from the Department. Without an ISI Mark, selling
              leather or other material-made footwear would be forbidden. Under
              this order, no manufacturer will be legally permitted to produce
              footwear without BIS certification. Failure to do so will result
              in criminal charges, including prison time and hefty fines.
            </p>

            <p>
              If a foreign manufacturer wants to sell their shoes in India, they
              must first obtain a BIS certificate for import in India through an
              Authorized Indian Representative appointment. All the
              distributors/sellers are guided to import or sell only ISI mark
              footwear to ensure consumers safety and trust.
            </p>

            <p>
              As per (Quality Control) Order, of DPIIT, Ministry of Commerce and
              Industry, BIS certification is mandatory for Footwear made from
              Leather and other materials. These quality control norms for
              leather shoes and other compound footwear are going to be
              implemented to contain imports and the production of sub-standard
              products in India. This notice covers different leather footwear,
              counting anti-riot shoes and safety boots too.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 pt-8">
          {/* Intro Paragraph */}
          <div className="space-y-4 text-gray-900 text-[15px] leading-6 pb-4">
            <p>
              The department has issued three Quality Control Orders (QCOs)
              which cover footwear made from rubber/polymeric materials,
              leather, other materials, and PPE footwear, making BIS
              certification mandatory.
            </p>
          </div>

          {/* QCO List */}
          <div className="space-y-4 text-gray-600 text-[15px] leading-6">
            <p>
              The following three QCOs have been issued covering footwear made
              from rubber/polymeric material, leather and other materials, and
              PPE footwear:
            </p>

            <p>
              <strong>i.</strong> Footwear made from all-rubber and all
              polymeric materials and its components (Quality Control) Order,
              2020
            </p>

            <p>
              <strong>ii.</strong> Footwear made from leather and other
              materials (Quality Control) Order, 2020
            </p>

            <p>
              <strong>iii.</strong> Personal Protective Equipment – Footwear
              (Quality Control) Order, 2020
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 uppercase">
              List of Testing Equipments:-
            </h2>

            <div className="mt-2 h-0.5 w-full bg-gray-200 relative">
              <span className="absolute left-0 top-0 h-0.5 w-64 bg-[#1f6ed5]"></span>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#4c5775] text-white rounded-lg p-6">
                <ul className="space-y-2 text-sm leading-7">
                  <li>› Footwear Testing Machine</li>
                  <li>› Find Rubber Sole Non-marking Testing Machine</li>
                  <li>› Sports Shoes Sole Marking Machine</li>
                  <li>› DIN Abrasion Tester</li>
                  <li>› Source Finished Sole Shoes Flexing Testing Machine</li>
                  <li>› Rubber Testing Machine</li>
                </ul>
              </div>

              <div className="bg-[#6d57a6] text-white rounded-lg p-6">
                <ul className="space-y-3 text-sm leading-6">
                  <li>› Sole Puncture Resistant Tester</li>
                  <li>› Tensile Testing Machine</li>
                  <li>› Conditioning Chamber</li>
                  <li>› Surface Resistivity</li>
                  <li>› Dial Thickness Gauge</li>
                  <li>› Tachometer</li>
                </ul>
              </div>

              <div className="bg-[#2b5797] text-white rounded-lg p-6">
                <ul className="space-y-3 text-sm leading-6">
                  <li>› Hot Air Oven</li>
                  <li>› Type A Shore Durometer</li>
                  <li>› Analytical Balance</li>
                  <li>› Compression Set Machine</li>
                  <li>› Digital Vernier Calliper</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Process Of BIS Certification For Footwear
            </h2>

            <div className="mt-2 h-0.5 w-full bg-gray-200 relative">
              <span className="absolute left-0 top-0 h-0.5 w-80 bg-[#1f6ed5]"></span>
            </div>

            <p className="mt-6 text-gray-500 text-[15px] leading-7">
              As per DPIIT’s Quality Control Orders on Footwear Products, 27
              footwear products have been brought under mandatory BIS
              certification. First of all, you must identify the Indian Standard
              for your product. Read the Indian Standard and ensure that your
              product meets the requirements specified in the Indian Standard
              and that your unit has the necessary manufacturing and testing
              facilities. After that, you need to create login credentials on
              the BIS Manakonline portal to apply for BIS License for your
              footwear. There are two modes of application for BIS license:
              Normal procedure and Simplified procedure.
            </p>

            <ul className="mt-6 space-y-1 text-gray-700 text-[15px] list-disc pl-6">
              <li>
                <strong>Step 1:</strong> Documentation before submission of
                application
              </li>
              <li>
                <strong>Step 2:</strong> Submission of application with
                requisite documents to BIS
              </li>
              <li>
                <strong>Step 3:</strong> Scrutiny of application by BIS
                officials
              </li>
              <li>
                <strong>Step 4:</strong> Nomination of auditor for Audit by BIS
              </li>
              <li>
                <strong>Step 5:</strong> Audit of manufacturing premises by BIS
                auditor
              </li>
              <li>
                <strong>Step 6:</strong> Sample draw for independent testing
              </li>
              <li>
                <strong>Step 7:</strong> Sample testing in BIS approved
                laboratory
              </li>
              <li>
                <strong>Step 8:</strong> Grant of BIS license to footwear
                manufacturer
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full bg-white pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold uppercase">
            List of Products
          </h2>
          <div className="mt-2 h-0.5 bg-gray-200 relative">
            <span className="absolute left-0 top-0 h-0.5 w-40 bg-blue-600"></span>
          </div>

          <div className="mt-10 overflow-x-auto border border-blue-500">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-blue-500">
                  <th className="border border-blue-500 px-3 py-2 text-left w-20">
                    Sr. No
                  </th>
                  <th className="border border-blue-500 px-3 py-2 text-center">
                    Products
                  </th>
                  <th className="border border-blue-500 px-3 py-2 text-center w-56">
                    Indian Standard
                  </th>
                </tr>
              </thead>

              <tbody>
                {products.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`${
                      index % 2 === 0 ? "bg-[#bfe4ef]" : "bg-white"
                    } hover:bg-blue-100 transition`}
                  >
                    <td className="border border-blue-500 px-3 py-1">
                      {item.id}.
                    </td>

                    <td className="border border-blue-500 px-3 py-1">
                      <Link
                        href={getGroupLink(item.id)}
                        className="text-black hover:underline font-medium"
                      >
                        {item.name}
                      </Link>
                    </td>

                    <td className="border border-blue-500 px-3 py-1 text-center">
                      {item.standard}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-100 p-14">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            TESTING EQUIPMENTS FOR FOOTWEAR:-
          </h2>

          <div className="mt-2 h-0.5 w-full relative pb-5">
            <span className="absolute left-0 top-0 h-0.5 w-80 bg-[#1f6ed5]"></span>
          </div>

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
                  className="w-full h-52.5 object-cover pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
