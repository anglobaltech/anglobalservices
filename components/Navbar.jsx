// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Menu, X, ChevronDown, FileText, Search } from "lucide-react";

// import { servicesMenu } from "@/data/services";
// import { testingMenu } from "@/data/testing";
// import { equipmentMenu } from "@/data/equipment";
// import { updatesMenu } from "@/data/updates";

// export default function Navbar() {
//   const [mobileMenu, setMobileMenu] = useState(false);
//   const [activeMobile, setActiveMobile] = useState(null);

//   return (
//     <nav className="bg-[#0075B6] relative z-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex items-center justify-between py-3">
//           <ul className="hidden md:flex items-center gap-7 text-white text-sm font-semibold ">
//             <NavLink href="/" label="HOME" />
//             <NavLink href="/aboutus" label="ABOUT US" />

//             <DesktopDropdown title="SERVICES" menu={servicesMenu} />
//             <DesktopDropdown
//               title="TESTING & CALIBRATION SERVICES"
//               menu={testingMenu}
//             />
//             <DesktopDropdown
//               title="EQUIPMENTS & PRODUCTS"
//               menu={equipmentMenu}
//             />
//             <DesktopDropdown title="UPDATES" menu={updatesMenu} />

//             <NavLink href="/contact-us" label="CONTACT US" />
//             <NavLink href="/food-ingredients" label="FOOD INGREDIENTS" />
//           </ul>

//           <button
//             className="md:hidden text-white"
//             onClick={() => setMobileMenu(true)}
//           >
//             <Menu size={26} />
//           </button>
//         </div>
//       </div>

//       {mobileMenu && (
//         <div className="fixed inset-0 z-50 md:hidden">
//           <div
//             className="absolute inset-0 bg-black/40"
//             onClick={() => setMobileMenu(false)}
//           />

//           <div className="absolute left-0 top-0 h-full w-[75%] max-w-75 bg-[#1f2a33] text-white overflow-y-auto">
//             <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
//               <span className="font-semibold text-sm">MENU</span>
//               <X
//                 size={22}
//                 className="cursor-pointer"
//                 onClick={() => setMobileMenu(false)}
//               />
//             </div>

//             {/* <div className="p-4">
//               <div className="flex items-center bg-[#2b3945] rounded-md px-3">
//                 <input
//                   placeholder="Search your keyword..."
//                   className="bg-transparent w-full py-2 text-sm outline-none placeholder:text-gray-400"
//                 />
//                 <Search size={16} className="text-gray-400" />
//               </div>
//             </div> */}

//             <ul className="text-sm font-semibold">
//               <MobileLink label="HOME" href="/" close={setMobileMenu} />
//               <MobileLink
//                 label="ABOUT US"
//                 href="/aboutus"
//                 close={setMobileMenu}
//               />

//               <MobileAccordion
//                 title="SERVICES"
//                 menu={servicesMenu}
//                 active={activeMobile}
//                 setActive={setActiveMobile}
//                 close={setMobileMenu}
//               />

//               <MobileAccordion
//                 title="TESTING SERVICES"
//                 menu={testingMenu}
//                 active={activeMobile}
//                 setActive={setActiveMobile}
//                 close={setMobileMenu}
//               />

//               <MobileAccordion
//                 title="EQUIPMENTS & PRODUCTS"
//                 menu={equipmentMenu}
//                 active={activeMobile}
//                 setActive={setActiveMobile}
//                 close={setMobileMenu}
//               />

//               <MobileAccordion
//                 title="UPDATES"
//                 menu={updatesMenu}
//                 active={activeMobile}
//                 setActive={setActiveMobile}
//                 close={setMobileMenu}
//               />

//               <MobileLink
//                 label="CONTACT US"
//                 href="/contact-us"
//                 close={setMobileMenu}
//               />

//               <MobileLink
//                 label="FOOD INGREDIENTS"
//                 href="/food-ingredients"
//                 close={setMobileMenu}
//               />
//             </ul>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// function DesktopDropdown({ title, menu }) {
//   // NEW: Added state to track dropdown visibility programmatically
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <li 
//       className="relative group"
//       // NEW: Added mouse enter and leave events to control the state instead of purely using CSS
//       onMouseEnter={() => setIsOpen(true)}
//       onMouseLeave={() => setIsOpen(false)}
//     >
//       <span className="cursor-pointer flex items-center gap-1 hover:text-black transition-colors">
//         {title}
//         <ChevronDown size={14} />
//       </span>

//       {/* CHANGED: Replaced "group-hover:opacity-100 group-hover:visible" with dynamic classes based on `isOpen` state */}
//       <div 
//         className={`absolute left-0 top-full mt-3 bg-white shadow-xl rounded-lg p-6 transition-all duration-200 ${
//           isOpen ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//       >
//         <div className="flex gap-10">
//           {menu.map((group, gIndex) => (
//             <div key={`${title}-group-${gIndex}`} className="min-w-60">
//               {group.title && (
//                 <h4 className="mb-3 text-gray-800 font-semibold text-sm border-b pb-2">
//                   {group.title}
//                 </h4>
//               )}

//               <ul className="space-y-3 text-sm font-normal">
//                 {group.items.map((item, iIndex) => (
//                   <li key={`${item.slug}-${iIndex}`}>
//                     <Link
//                       href={
//                         item.root ? `/${item.slug}` : `/services/${item.slug}`
//                       }
//                       className="flex items-start gap-3 text-gray-700 hover:text-[#0075B6]"
//                       // NEW: Added onClick handler to force the dropdown to close immediately after clicking a link
//                       onClick={() => setIsOpen(false)}
//                     >
//                       <FileText
//                         size={16}
//                         strokeWidth={1.75}
//                         className="mt-0.5 text-[#0075B6] shrink-0"
//                       />
//                       <span className="leading-6">{item.name}</span>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </li>
//   );
// }

// function MobileAccordion({ title, menu, active, setActive, close }) {
//   const open = active === title;

//   return (
//     <li className="border-b border-white/10">
//       <button
//         className="w-full flex items-center justify-between px-4 py-3"
//         onClick={() => setActive(open ? null : title)}
//       >
//         {title}
//         <ChevronDown
//           size={18}
//           className={`transition ${open ? "rotate-180" : ""}`}
//         />
//       </button>

//       {open && (
//         <div className="bg-[#2b3945] px-4 py-3 space-y-4">
//           {menu.map((group, gIndex) => (
//             <div key={`${title}-mobile-${gIndex}`}>
//               {group.title && (
//                 <p className="text-xs text-gray-300 mb-2">{group.title}</p>
//               )}

//               <ul className="space-y-2">
//                 {group.items.map((item, iIndex) => (
//                   <li key={`${item.slug}-m-${iIndex}`}>
//                     <Link
//                       href={
//                         item.root ? `/${item.slug}` : `/services/${item.slug}`
//                       }
//                       onClick={() => close(false)}
//                       className="flex items-start gap-2 text-xs text-gray-200"
//                     >
//                       <FileText size={14} />
//                       <span>{item.name}</span>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       )}
//     </li>
//   );
// }

// function NavLink({ href, label }) {
//   return (
//     <li>
//       <Link href={href} className="hover:text-black">
//         {label}
//       </Link>
//     </li>
//   );
// }

// function MobileLink({ href, label, close }) {
//   return (
//     <li className="border-b border-white/10">
//       <Link
//         href={href}
//         onClick={() => close(false)}
//         className="block px-4 py-3"
//       >
//         {label}
//       </Link>
//     </li>
//   );
// }





"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, FileText } from "lucide-react";

import { servicesMenu } from "@/data/services";
import { testingMenu } from "@/data/testing";
import { equipmentMenu } from "@/data/equipment";
import { updatesMenu } from "@/data/updates";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeMobile, setActiveMobile] = useState(null);

  return (
    <nav className="bg-[#0075B6] relative z-50 w-full">
      {/* Container constraints matching your primary layout rules */}
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-3">
          
          {/* CHANGED: Switched to justify-between to anchor HOME on the far-left and STUDENT PANEL on the far-right symmetrically */}
          <ul className="hidden md:flex items-center justify-between text-white text-[11px] lg:text-xs xl:text-sm font-semibold w-full">
            <NavLink href="/" label="HOME" />
            <NavLink href="/aboutus" label="ABOUT US" />

            <DesktopDropdown title="SERVICES" menu={servicesMenu} />
            <DesktopDropdown
              title="TESTING & CALIBRATION SERVICES"
              menu={testingMenu}
            />
            <DesktopDropdown
              title="EQUIPMENTS & PRODUCTS"
              menu={equipmentMenu}
            />
            <DesktopDropdown title="UPDATES" menu={updatesMenu} />

            <NavLink href="/contact-us" label="CONTACT US" />
            <NavLink href="/food-ingredients" label="FOOD INGREDIENTS" />
            <NavLink href="/student-panel" label="STUDENT PANEL" />
          </ul>

          <button
            className="md:hidden text-white ml-auto"
            onClick={() => setMobileMenu(true)}
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer configurations (Unchanged) */}
      {mobileMenu && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileMenu(false)}
          />

          <div className="absolute left-0 top-0 h-full w-[75%] max-w-75 bg-[#1f2a33] text-white overflow-y-auto">
            <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
              <span className="font-semibold text-sm">MENU</span>
              <X
                size={22}
                className="cursor-pointer"
                onClick={() => setMobileMenu(false)}
              />
            </div>

            <ul className="text-sm font-semibold">
              <MobileLink label="HOME" href="/" close={setMobileMenu} />
              <MobileLink
                label="ABOUT US"
                href="/aboutus"
                close={setMobileMenu}
              />

              <MobileAccordion
                title="SERVICES"
                menu={servicesMenu}
                active={activeMobile}
                setActive={setActiveMobile}
                close={setMobileMenu}
              />

              <MobileAccordion
                title="TESTING SERVICES"
                menu={testingMenu}
                active={activeMobile}
                setActive={setActiveMobile}
                close={setMobileMenu}
              />

              <MobileAccordion
                title="EQUIPMENTS & PRODUCTS"
                menu={equipmentMenu}
                active={activeMobile}
                setActive={setActiveMobile}
                close={setMobileMenu}
              />

              <MobileAccordion
                title="UPDATES"
                menu={updatesMenu}
                active={activeMobile}
                setActive={setActiveMobile}
                close={setMobileMenu}
              />

              <MobileLink
                label="CONTACT US"
                href="/contact-us"
                close={setMobileMenu}
              />

              <MobileLink
                label="FOOD INGREDIENTS"
                href="/food-ingredients"
                close={setMobileMenu}
              />

              <MobileLink
                label="STUDENT PANEL"
                href="/student-panel"
                close={setMobileMenu}
              />
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

function DesktopDropdown({ title, menu }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span className="cursor-pointer flex items-center gap-1 hover:text-black transition-colors whitespace-nowrap">
        {title}
        <ChevronDown size={14} className="shrink-0" />
      </span>

      <div 
        className={`absolute left-0 top-full mt-3 bg-white shadow-xl rounded-lg p-6 transition-all duration-200 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex gap-10">
          {menu.map((group, gIndex) => (
            <div key={`${title}-group-${gIndex}`} className="min-w-60">
              {group.title && (
                <h4 className="mb-3 text-gray-800 font-semibold text-sm border-b pb-2 whitespace-nowrap">
                  {group.title}
                </h4>
              )}

              <ul className="space-y-3 text-sm font-normal">
                {group.items.map((item, iIndex) => (
                  <li key={`${item.slug}-${iIndex}`}>
                    <Link
                      href={
                        item.root ? `/${item.slug}` : `/services/${item.slug}`
                      }
                      className="flex items-start gap-3 text-gray-700 hover:text-[#0075B6]"
                      onClick={() => setIsOpen(false)}
                    >
                      <FileText
                        size={16}
                        strokeWidth={1.75}
                        className="mt-0.5 text-[#0075B6] shrink-0"
                      />
                      <span className="leading-6">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </li>
  );
}

function MobileAccordion({ title, menu, active, setActive, close }) {
  const open = active === title;

  return (
    <li className="border-b border-white/10">
      <button
        className="w-full flex items-center justify-between px-4 py-3"
        onClick={() => setActive(open ? null : title)}
      >
        {title}
        <ChevronDown
          size={18}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="bg-[#2b3945] px-4 py-3 space-y-4">
          {menu.map((group, gIndex) => (
            <div key={`${title}-mobile-${gIndex}`}>
              {group.title && (
                <p className="text-xs text-gray-300 mb-2">{group.title}</p>
              )}

              <ul className="space-y-2">
                {group.items.map((item, iIndex) => (
                  <li key={`${item.slug}-m-${iIndex}`}>
                    <Link
                      href={
                        item.root ? `/${item.slug}` : `/services/${item.slug}`
                      }
                      onClick={() => close(false)}
                      className="flex items-start gap-2 text-xs text-gray-200"
                    >
                      <FileText size={14} />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </li>
  );
}

function NavLink({ href, label }) {
  return (
    <li>
      <Link href={href} className="hover:text-black whitespace-nowrap">
        {label}
      </Link>
    </li>
  );
}

function MobileLink({ href, label, close }) {
  return (
    <li className="border-b border-white/10">
      <Link
        href={href}
        onClick={() => close(false)}
        className="block px-4 py-3"
      >
        {label}
      </Link>
    </li>
  );
}