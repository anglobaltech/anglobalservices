import Image from "next/image";

export default function BISBoltsNutsFastenersPage() {
  return (
    <div className="w-full bg-white">
      <div className="relative w-full h-80">
        <Image
          src="/service/isi/about.jpg" 
          alt="BIS Certification of Bolts, Nuts and Fasteners"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#83959d] flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-white text-3xl md:text-4xl font-bold uppercase">
              BIS Certification of Bolts, Nuts and Fasteners
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <p className="text-gray-500 leading-relaxed text-base">
          <strong className="text-black">
            BIS CERTIFICATION OF BOLTS, NUTS AND FASTENERS
          </strong>{" "}
          The ISI label is by far the most known recognition mark for the quality
          of the product in the Indian subcontinent. The ISI tag shall be
          published by the Bureau of Indian Standards (BIS). There are more than
          150 compulsory goods that require ISI certification before being sold
          in India.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-14">
        <h2 className="text-2xl font-bold text-gray-900">
          How To Get BIS Registration?
        </h2>

        <div className="relative mt-2 mb-6">
          <div className="h-0.5 w-full bg-gray-200"></div>
          <div className="absolute top-0 left-0 h-0.5 w-85 bg-[#0072b1]"></div>
        </div>

        <p className="text-gray-500 leading-relaxed">
          The manufacturer(s) must complete the testing and documentation
          required by BIS in order to approve the product under ISI
          Certification. The factory will also need to be physically audited by
          the BIS officer. Our team assists both Indian and international
          manufacturers in managing the complete BIS certification process,
          including documentation, testing coordination, factory audit support
          and licence issuance.
        </p>
      </div>

      <div className="bg-gray-50 pb-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900">
            List Of Bolts, Nuts & Fasteners Products
          </h2>

          <div className="relative mt-2 mb-6">
            <div className="h-0.5 w-full bg-gray-200"></div>
            <div className="absolute top-0 left-0 h-0.5 w-115 bg-[#0072b1]"></div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border border-[#0072b1] text-sm">
              <thead>
                <tr className="bg-white text-gray-900 font-semibold">
                  <th className="border border-[#0072b1] px-4 py-3 text-left">
                    Indian Standard
                  </th>
                  <th className="border border-[#0072b1] px-4 py-3 text-left">
                    Title of Indian Standard
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["IS 1363 (Part 1):2019", "Hexagon Head Bolts, Screws and Nuts of product Grade C (Size Range M5 to M64)"],
                  ["IS 1363 (Part 2):2018", "Hexagon Head Screws (Size Range M5 to M64)"],
                  ["IS 1363 (Part 3):2018", "Hexagon Nuts Product Grade C (Size Range M5 to M64)"],
                  ["IS 1364 (Part 1):2018", "Hexagon Head Bolts Grades A and B (Size Range M1.6 to M64)"],
                  ["IS 1364 (Part 2):2018", "Hexagon Head Screws Grades A and B (Size Range M1.6 to M64)"],
                  ["IS 4621:1975", "Indicating Bolts for use in public baths and lavatories"],
                  ["IS 5187:1972", "Flush Bolts"],
                  ["IS 10238:2001", "Threaded Steel Fasteners – Transmission Tower Bolts"],
                  ["IS 3757:1985", "High Strength Structural Bolts"],
                  ["IS 204 (Part 1):1991", "Tower Bolts – Ferrous Metals"],
                  ["IS 204 (Part 2):1992", "Tower Bolts – Non-Ferrous Metals"],
                  ["IS 2681:1993", "Non-ferrous metal sliding door bolts (aldrops)"],
                  ["IS 281:2009", "Mild Steel Sliding Door Bolts"],
                  ["IS 7534:1985", "Sliding Locking Bolts"],
                  ["IS 1284:1975", "Wrought Aluminium Alloy Bolt and Screw Stock"],
                  ["IS 15833:2009", "Stainless Steel Tower Bolts"],
                  ["IS 6623:2004", "High Strength Structural Nuts"],
                ].map(([code, title], index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-[#bfe3f1]" : "bg-white"}
                  >
                    <td className="border border-[#0072b1] px-4 py-1">
                      {code}
                    </td>
                    <td className="border border-[#0072b1] px-4 py-1">
                      {title}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
