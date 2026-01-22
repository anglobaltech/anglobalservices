import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Latest Notifications & Updates | AN Global Services",
  description:
    "Stay updated with the latest notifications, regulatory updates, certification announcements, and compliance-related information from AN Global Services.",
};

const notifications = [
  {
    title:
      'QCO NOTIFICATION FOR MANDATORY BIS CERTIFICATION OF "SOLAR PV MODULES AND PANELS"',
    description:
      "Important update regarding Indian Standard applicable to manufacturers and importers of Solar Photovoltaic Modules and Panels. BIS certification is mandatory as per MNRE and Quality Control Order requirements before sale or installation in India.",
    date: "05th January 2026",
  },
  {
    title:
      'QCO NOTIFICATION FOR MANDATORY BIS CERTIFICATION OF "HOUSEHOLD ELECTRICAL APPLIANCES"',
    description:
      "Important update regarding Indian Standard applicable to household electrical appliances including fans, heaters, irons and similar products. Manufacturers and importers must ensure BIS compliance under Quality Control Order.",
    date: "03rd January 2026",
  },
  {
    title:
      'QCO NOTIFICATION FOR MANDATORY BIS CERTIFICATION OF "MEDICAL DEVICES AND EQUIPMENT"',
    description:
      "Important update regarding Indian Standard applicable to notified medical devices and equipment. Mandatory BIS certification is required as per Quality Control Order issued by the Ministry of Health and Family Welfare.",
    date: "02nd January 2026",
  },
  {
    title:
      'QCO NOTIFICATION FOR MANDATORY BIS CERTIFICATION OF "STEEL AND STEEL PRODUCTS"',
    description:
      "Important update regarding Indian Standard applicable to steel and steel products. Manufacturers and importers must comply with BIS standards and testing requirements under Quality Control Order.",
    date: "30th December 2025",
  },
  {
    title:
      'QCO NOTIFICATION FOR MANDATORY BIS CERTIFICATION OF "PLASTIC PRODUCTS AND MATERIALS"',
    description:
      "Important update regarding Indian Standard applicable to plastic products and materials. Compliance with BIS certification is mandatory for manufacturers, importers and sellers as per Quality Control Order.",
    date: "28th December 2025",
  },
  {
    title:
      'QCO NOTIFICATION FOR MANDATORY BIS CERTIFICATION OF "ALUMINIUM FOIL AND PACKAGING MATERIALS"',
    description:
      "Important update regarding Indian Standard applicable to aluminium foil and packaging materials. BIS certification is required before manufacturing or importing such products into India.",
    date: "26th December 2025",
  },
  {
    title:
      'QCO NOTIFICATION FOR MANDATORY BIS CERTIFICATION OF "ELECTRICAL WIRES AND CABLES"',
    description:
      "Important update regarding Indian Standard applicable to electrical wires and cables. Products must comply with BIS safety and performance standards under Quality Control Order.",
    date: "24th December 2025",
  },
  {
    title:
      'QCO NOTIFICATION FOR MANDATORY BIS CERTIFICATION OF "INSULATED FLASK, BOTTLES AND CONTAINERS"',
    description:
      "Important update regarding Indian Standard applicable to insulated flasks, bottles and containers for domestic use. BIS certification is mandatory for manufacturers and importers under Quality Control Order.",
    date: "19th August 2023",
  },
  {
    title:
      'QCO NOTIFICATION FOR MANDATORY BIS CERTIFICATION OF "BOTTLED WATER DISPENSERS"',
    description:
      "Important update regarding Indian Standard applicable to bottled water dispensers under Quality Control Order. Products must comply with applicable safety and hygiene standards prescribed by BIS.",
    date: "20th August 2023",
  },
  {
    title:
      'QCO NOTIFICATION FOR MANDATORY BIS CERTIFICATION OF "ALUMINIUM & ALUMINIUM ALLOY PRODUCTS"',
    description:
      "Important update regarding Indian Standard applicable to aluminium and aluminium alloy products. Mandatory BIS certification is required before manufacturing, importing or selling such products in India.",
    date: "20th August 2023",
  },
  {
    title:
      'QCO NOTIFICATION FOR MANDATORY BIS CERTIFICATION OF "WOOD BASED BOARDS"',
    description:
      "Important update regarding Indian Standard applicable to wood based boards including MDF, particle boards and plywood. Manufacturers and importers must comply with BIS certification norms under Quality Control Order.",
    date: "22nd August 2023",
  },
  {
    title:
      'QCO NOTIFICATION FOR MANDATORY BIS CERTIFICATION OF "MEDICAL TEXTILES PRODUCTS"',
    description:
      "Important update regarding Indian Standard applicable to medical textile products including PPE kits, masks and gowns under Quality Control Order issued by the Ministry of Textiles.",
    date: "22nd August 2023",
  },
  {
    title:
      'QCO NOTIFICATION FOR MANDATORY BIS CERTIFICATION OF "FIRE EXTINGUISHERS"',
    description:
      "Important update regarding Indian Standard applicable to manufacturers and importers of fire extinguishers. Compliance with revised BIS safety and performance standards is mandatory prior to sale in India.",
    date: "23rd August 2023",
  },
  {
    title:
      'QCO NOTIFICATION FOR MANDATORY BIS CERTIFICATION OF "DRAFT PRECISION ROLLER AND BUSH CHAINS"',
    description:
      "Important update regarding Indian Standard applicable to Roller and Bush Chains, Attachments and Associated Chain Sprockets under the Quality Control Order framework.",
    date: "24th August 2023",
  },
  {
    title:
      'QCO NOTIFICATION FOR MANDATORY BIS CERTIFICATION OF "RUBBER GASKETS FOR PRESSURE COOKER"',
    description:
      "Important update regarding Indian Standard applicable to Rubber Gaskets for Pressure Cooker. Products must conform to specified safety, material and performance standards under Quality Control Order.",
    date: "25th August 2023",
  },
  {
    title:
      'QCO NOTIFICATION FOR MANDATORY BIS CERTIFICATION OF "RESIN TREATED COMPRESSED WOOD LAMINATES"',
    description:
      "Important update regarding Indian Standard applicable to Resin Treated Compressed Wood Laminates. Compliance with BIS standards, testing and certification requirements is mandatory under Quality Control Order.",
    date: "26th August 2023",
  },
];


export default function LatestNotificationsPage() {
  return (
    <div className="w-full">
      {/* ===== HERO SECTION ===== */}
      <div className="relative w-full h-75">
        <Image
          src="/service/isi/about.jpg"
          alt="Latest Notifications"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-white text-4xl font-bold">
              LATEST NOTIFICATIONS
            </h1>
          </div>
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {notifications.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-10 mb-10"
          >
            <h2 className="text-xl md:text-xl font-bold text-gray-900">
              {item.title}
            </h2>

            {/* underline */}
            <div className="w-full h-0.5 bg-gray-200 mt-2 mb-4 relative">
              <div className="absolute left-0 top-0 h-0.5 w-full bg-[#0072b1]"></div>
            </div>

            <p className="text-gray-500 max-w-7xl text-[15px] leading-relaxed">
              {item.description}
            </p>

            <div className="mt-6">
              <Link
                href="#"
                className="inline-block bg-[#0072b1] text-white px-5 py-3 text-sm font-semibold hover:opacity-90 transition"
              >
                Read More
              </Link>
            </div>

            <div className="mt-6">
              <p className="font-semibold text-gray-900">
                Published Date
              </p>
              <p className="text-gray-500">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
