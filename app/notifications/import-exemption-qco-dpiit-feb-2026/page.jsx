import Image from "next/image";
import Link from "next/link";

export const revalidate = 86400

export const metadata = {
  title:
    "Exemption for Import of Goods under Quality Control Orders | AN Global Services",
  description:
    "DPIIT notification granting exemption for import of goods shipped before implementation of Quality Control Orders as per BIS Act, 2016.",
};

export default function NotificationDetailPage() {
  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 py-10">
        <div className="mx-auto space-y-10">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
            {/* META INFO */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-blue-50 text-[#0b5ed7] text-xs font-semibold px-3 py-1 rounded-full">
                Published on: 12 February 2026
              </span>
            </div>

            {/* HEADING */}
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              MINISTRY OF COMMERCE AND INDUSTRY
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Department for Promotion of Industry and Internal Trade (DPIIT)
            </p>

            <h3 className="mt-6 font-semibold text-gray-800">
              ORDER – New Delhi, 12th February 2026
            </h3>

            {/* MAIN DESCRIPTION */}
            <p className="mt-4 text-gray-700 leading-relaxed text-[15px]">
              In exercise of the powers conferred by Section 16 of the Bureau of
              Indian Standards Act, 2016 (11 of 2016), the Central Government,
              after consulting the Bureau of Indian Standards, and being
              satisfied that it is necessary in the public interest, hereby
              grants exemption for import of goods covered under specified
              Quality Control Orders.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed text-[15px]">
              The exemption applies to consignments where the Bill of Lading
              indicates shipment prior to the date of implementation of the
              respective Quality Control Orders and the Bill of Entry is filed
              on or before 180 days from the date of implementation of such
              Orders.
            </p>

            {/* AFFECTED QCO SUMMARY */}
            <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h4 className="font-semibold text-gray-800 mb-3">
                Quality Control Orders Covered under this Exemption
              </h4>

              <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-700 list-disc ml-5">
                <li>Aluminium and Aluminium Alloy Products (QCO), 2025</li>
                <li>
                  Electrical Appliances for Commercial Dispensing and Vending
                  (QCO), 2025
                </li>
                <li>Flashlight (QCO), 2025</li>
                <li>Hinges (QCO), 2025</li>
                <li>Electric Fence Energizers (QCO), 2024</li>
                <li>Air Coolers and Air Filters (QCO), 2025</li>
                <li>
                  Electrical Appliances for Domestic Clothes Washing (QCO), 2024
                </li>
                <li>Electrical Appliances for Skin or Hair Care (QCO), 2023</li>
                <li>
                  Electrical Appliances for Domestic Water Heating (QCO), 2023
                </li>
                <li>Plywood and Wooden Flush Door Shutters (QCO), 2024</li>
                <li>Wood Based Boards (QCO), 2024</li>
                <li>Resin Treated Compressed Wood Laminates (QCO), 2024</li>
                <li>Copper Products (QCO), 2024</li>
                <li>Self-Contained Drinking Water Cooler (QCO), 2023</li>
                <li>V-Belt (QCO), 2024</li>
                <li>Water Meters and Accessories (QCO), 2023</li>
                <li>Electrical Appliances for Kitchen (QCO), 2023</li>
                <li>Electrical Appliances Fans (QCO), 2023</li>
                <li>Gypsum Based Building Materials (QCO), 2024</li>
                <li>Asbestos or Fibre Cement Based Products (QCO), 2024</li>
                <li>
                  Footwear made from Leather and other Materials (QCO), 2024
                </li>
                <li>
                  Footwear made from All Rubber and Polymeric Materials (QCO),
                  2024
                </li>
                <li>Electrical Accessories (QCO), 2023</li>
                <li>Laboratory Glassware (QCO), 2023</li>
                <li>Bottled Water Dispenser (QCO), 2024</li>
              </ul>
            </div>

            {/* CONDITIONS */}
            <div className="mt-8 bg-blue-50 border-l-4 border-[#0b5ed7] p-5 rounded-md text-sm text-gray-700">
              <p className="font-semibold mb-2">Conditions of Exemption</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>
                  Importer shall submit a copy of Bill of Lading and Bill of
                  Entry along with supporting documents to the Bureau within
                  seven days of clearance.
                </li>
                <li>
                  Documents must be submitted on the importer’s official
                  letterhead, duly signed by the authorised signatory.
                </li>
                <li>
                  This notification comes into force from the date of
                  publication in the Official Gazette.
                </li>
              </ul>
            </div>

            {/* PDF SECTION */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Official Gazette Document
              </h3>

              <div className="border border-gray-300 rounded-xl overflow-hidden shadow-sm">
                <iframe
                  src="/pdf/import-exemption-qco-dpiit-feb-2026.pdf#toolbar=1&navpanes=1&scrollbar=1"
                  className="w-full h-[600px]"
                  title="Import Exemption QCO PDF"
                />
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              Official Gazette Notification issued by DPIIT
            </p>

            <Link
              href="/pdf/import-exemption-qco-dpiit-feb-2026.pdf"
              target="_blank"
              className="inline-flex items-center justify-center bg-[#0b5ed7] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#094bb5] transition"
            >
              View / Download PDF
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
