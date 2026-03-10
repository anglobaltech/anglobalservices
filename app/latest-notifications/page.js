import Image from "next/image";
import Link from "next/link";
export const revalidate = 86400

export const metadata = {
  title: "Latest Notifications & Updates | AN Global Services",
  description:
    "Stay updated with the latest notifications, regulatory updates, certification announcements, and compliance-related information from AN Global Services.",
};

const notifications = [
  {
    slug: "import-exemption-qco-dpiit-feb-2026-so-776e",
    title:
      "Import Exemption under Quality Control Orders – DPIIT Order S.O. 776(E) dated 12 February 2026",
    description:
      "The Ministry of Commerce and Industry (Department for Promotion of Industry and Internal Trade), vide Order S.O. 776(E) dated 12 February 2026, issued under section 16 of the Bureau of Indian Standards Act, 2016, has granted an exemption from compliance with specified Quality Control Orders for certain goods. The exemption applies where the purchase order was placed prior to the implementation date of the relevant Quality Control Order and where the Bill of Lading and Bill of Entry are dated on or before 180 days from the date of implementation, subject to prescribed conditions.",
    date: "12 February 2026",
  },
  {
    slug: "import-exemption-qco-dpiit-feb-2026",
    title:
      "Import Exemption under Quality Control Orders – DPIIT Notification dated 12 February 2026",
    description:
      "Ministry of Commerce and Industry (Department for Promotion of Industry and Internal Trade) vide S.O. 775(E) dated 12 February 2026 has granted exemption for import of specified goods under various Quality Control Orders, provided the consignment was shipped before the date of implementation and the Bill of Entry is filed within 180 days from the implementation date.",
    date: "12 February 2026",
  },
];
export default function LatestNotificationsPage() {
  return (
    <div className="w-full bg-gray-50">
      {/* ===== HERO SECTION ===== */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/service/isi/about.jpg"
          alt="Latest Notifications"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-white text-4xl md:text-5xl font-bold">
              Latest Notifications
            </h1>
            <p className="text-gray-200 mt-3 max-w-2xl">
              Stay updated with the latest BIS certification and Quality Control
              Order notifications.
            </p>
          </div>
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid gap-8">
          {notifications.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm hover:shadow-lg transition duration-300"
            >
              {/* Date Badge */}
              <span className="inline-block text-xs font-semibold text-[#0072b1] bg-blue-50 px-3 py-1 rounded-full mb-4">
                {item.date}
              </span>

              <h2 className="text-lg md:text-xl font-bold text-gray-900 uppercase leading-snug">
                {item.title}
              </h2>

              <p className="text-gray-600 text-[15px] leading-relaxed mt-4">
                {item.description}
              </p>

              <div className="mt-6">
                <Link
                  href={`/notifications/${item.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#0072b1] px-6 py-3 rounded-md hover:bg-[#005b8c] transition"
                >
                  Read More
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
