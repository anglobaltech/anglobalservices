import Image from "next/image";
import Link from "next/link";
export const revalidate = 86400

export const metadata = {
  title:
    "Import Exemption under Quality Control Orders (S.O. 776(E)) | AN Global Services",
  description:
    "DPIIT Order S.O. 776(E) dated 12 February 2026 granting exemption from Quality Control Orders where purchase orders were placed before implementation and import documents are filed within 180 days.",
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
              <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                Order No.: S.O. 776(E)
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
              ORDER – New Delhi, the 12th February, 2026
            </h3>

            {/* MAIN DESCRIPTION */}
            <p className="mt-4 text-gray-700 leading-relaxed text-[15px]">
              In exercise of the powers conferred by section 16 of the Bureau of
              Indian Standards Act, 2016 (11 of 2016), the Central Government,
              after consulting the Bureau, is of the opinion that it is
              necessary or expedient in the public interest, and hereby exempts
              the goods or articles covered under the Quality Control Orders
              specified in the Table below.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed text-[15px]">
              This exemption applies where the purchase order for such goods or
              articles was placed prior to the date of implementation of the
              relevant Quality Control Order, and the Bill of Lading and the
              Bill of Entry in respect of such goods or articles are dated on or
              before one hundred and eighty days from the date on which such
              Quality Control Order came into force.
            </p>

            {/* AFFECTED QCO SUMMARY */}
            <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h4 className="font-semibold text-gray-800 mb-3">
                Quality Control Orders Covered under this Exemption
              </h4>

              <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-700 list-disc ml-5">
                <li>Aluminium and Aluminium Alloy Products (QCO), 2025</li>
                <li>Electrical Appliances for Commercial Dispensing and Vending (QCO), 2025</li>
                <li>Flashlight (QCO), 2025</li>
                <li>Hinges (QCO), 2025</li>
                <li>Electric Fence Energizers (QCO), 2024</li>
                <li>Air Cooler and Air Filters (QCO), 2025</li>
                <li>Electrical Appliances for Domestic Clothes Washing (QCO), 2024</li>
                <li>Electrical Appliances for Skin or Hair Care (QCO), 2023</li>
                <li>Electrical Appliances for Domestic Water Heating (QCO), 2023</li>
                <li>Plywood and Wooden Flush Door Shutters (QCO), 2024</li>
                <li>Wood Based Boards (QCO), 2024</li>
                <li>Resin Treated Compressed Wood Laminates (QCO), 2024</li>
                <li>Telescopic Ball Bearing Drawer Slide (QCO), 2024</li>
                <li>Copper Products (QCO), 2024</li>
                <li>Self-Contained Drinking Water Cooler (QCO), 2023</li>
                <li>V-Belt (QCO), 2024</li>
                <li>Water Meters and Accessories (QCO), 2023</li>
                <li>Electrical Appliances for Kitchen (QCO), 2023</li>
                <li>Electrical Appliances Fans (QCO), 2023</li>
                <li>Gypsum Based Building Materials (QCO), 2024</li>
                <li>Asbestos or Fibre Cement Based Products (QCO), 2024</li>
                <li>Footwear made from Leather and other Materials (QCO), 2024</li>
                <li>Footwear made from All Rubber and Polymeric Materials (QCO), 2024</li>
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
                  Importer shall submit a copy of the Purchase Order, Bill of
                  Lading and Bill of Entry, along with supporting documents, to
                  the Bureau within seven days of clearance.
                </li>
                <li>
                  Documents must be submitted on the importer’s official
                  letterhead, duly signed by the authorised signatory.
                </li>
                <li>
                  This Order shall come into force on the date of its
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
                  src="/pdf/import-exemption-qco-dpiit-feb-2026-so-776e.pdf#toolbar=1&navpanes=1&scrollbar=1"
                  className="w-full h-[600px]"
                  title="Import Exemption QCO PDF"
                />
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              Official Gazette Notification – F. No. P-29014/188/2025-LEI
            </p>

            <Link
              href="/pdf/import-exemption-qco-dpiit-feb-2026-so-776e.pdf"
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