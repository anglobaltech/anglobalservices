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

//               <ul className="space-y-3 text-sm font-medium">
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
//         <div className="bg-[#2b3945] px-4 py-3 space-y-2">
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

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  FileText,
  ChevronRight,
  ArrowUpRight,
  ShoppingCart,
} from "lucide-react";

import { servicesMenu } from "@/data/services";
import { testingMenu } from "@/data/testing";
import { equipmentMenu } from "@/data/equipment";
import { updatesMenu } from "@/data/updates";
import { foodIngredients } from "@/data/foodIngredients";

const foodMenu = [
  {
    items: [
      { name: "Makhana", slug: "food-ingredients/makhana", root: true },
      {
        name: "Whey Proteins",
        isSubMenu: true,
        subItems: [
          {
            name: "Whey Protein Concentrate 80 Instant (ENTC)",
            slug: "food-ingredients/whey-protein-concentrate-80-instant-entc",
            root: true,
          },
          {
            name: "Whey Protein Concentrate 80 Instant (Valley Queen)",
            slug: "food-ingredients/whey-protein-concentrate-80-instant-valley-queen",
            root: true,
          },
          {
            name: "Saputo Whey Protein Concentrate 80% Instantized",
            slug: "food-ingredients/saputo-whey-protein-concentrate-80-instantized",
            root: true,
          },
          {
            name: "Sunpro Instant Protein Concentrate Instant WPC 80",
            slug: "food-ingredients/sunpro-instant-protein-concentrate-instant-wpc-80",
            root: true,
          },
        ],
      },
      {
        name: "Lactose",
        isSubMenu: true,
        subItems: [
          {
            name: "Lactose (K-LAC)",
            slug: "food-ingredients/lactose-k-lac",
            root: true,
          },
          {
            name: "Mullins Whey Lactose 200 Mesh",
            slug: "food-ingredients/mullins-whey-lactose-200-mesh",
            root: true,
          },
        ],
      },
      {
        name: "Micellar Casein 85",
        slug: "food-ingredients/micellar-casein-85",
        root: true,
      },
      {
        name: "L-Carnitine Base",
        slug: "food-ingredients/l-carnitine-base",
        root: true,
      },
      { name: "L-Glutamine", slug: "food-ingredients/l-glutamine", root: true },
      {
        name: "Potassium Sorbate",
        slug: "food-ingredients/potassium-sorbate",
        root: true,
      },
      {
        name: "Vital Wheat Gluten",
        slug: "food-ingredients/vital-wheat-gluten",
        root: true,
      },
      {
        name: "Pea Protein (80%)",
        slug: "food-ingredients/pea-protein-80",
        root: true,
      },
      {
        name: "Isolated Soy Protein",
        slug: "food-ingredients/isolated-soy-protein",
        root: true,
      },
      {
        name: "Creatine Monohydrate",
        slug: "food-ingredients/creatine-monohydrate",
        root: true,
      },
    ],
  },
];
export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeMobile, setActiveMobile] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleOpenServices = () => {
      if (window.innerWidth < 1024) {
        setMobileMenu(true);
        setActiveMobile("SERVICES");
      }
    };
    const handleOpenFood = () => {
      if (window.innerWidth < 1024) {
        setMobileMenu(true);
        setActiveMobile("FOOD INGREDIENTS");
      }
    };
    window.addEventListener("open-services-dropdown", handleOpenServices);
    window.addEventListener("open-food-dropdown", handleOpenFood);

    return () => {
      window.removeEventListener("open-services-dropdown", handleOpenServices);
      window.removeEventListener("open-food-dropdown", handleOpenFood);
    };
  }, []);

  return (
    <nav className="bg-[#0075B6] relative z-50 w-full">
      {/* Container constraints matching your primary layout rules */}
      <div className="max-w-[1450px] mx-auto px-2 sm:px-4 lg:px-2 xl:px-6">
        <div className="flex items-center justify-between py-3">
          {/* CHANGED: Switched to justify-between to anchor HOME on the far-left and STUDENT PANEL on the far-right symmetrically */}
          <ul className="hidden lg:flex items-center justify-between text-white text-[9px] xl:text-[12px] 2xl:text-sm font-semibold w-full">
            <NavLink href="/" label="HOME" pathname={pathname} />
            <NavLink href="/aboutus" label="ABOUT US" pathname={pathname} />

            <DesktopDropdown
              title="SERVICES"
              menu={servicesMenu}
              isPrimary={true}
              pathname={pathname}
            />
            <DesktopDropdown
              title="TESTINGS"
              menu={testingMenu}
              pathname={pathname}
            />
            <DesktopDropdown
              title="EQUIPMENTS & MACHINERY"
              menu={equipmentMenu}
              align="right"
              pathname={pathname}
            />

            <DesktopDropdown
              title="FOOD INGREDIENTS"
              menu={foodMenu}
              href="/food-ingredients"
              align="right"
              pathname={pathname}
              isFeatured={true}
            />
            <NavLink
              href="/it-services-and-solutions"
              label="IT SERVICES"
              pathname={pathname}
            />
            <NavLink
              href="/student-panel"
              label="STUDENT PANEL"
              pathname={pathname}
            />
            <DesktopDropdown
              title="UPDATES"
              menu={updatesMenu}
              pathname={pathname}
            />
            <NavLink
              href="/contact-us"
              label="CONTACT US"
              pathname={pathname}
            />
          </ul>

          <button
            className="lg:hidden text-white ml-auto cursor-pointer"
            onClick={() => setMobileMenu(true)}
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer configurations (Unchanged) */}
      {mobileMenu && (
        <div className="fixed inset-0 z-50 lg:hidden">
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
              <MobileLink
                label="HOME"
                href="/"
                close={setMobileMenu}
                pathname={pathname}
              />
              <MobileLink
                label="ABOUT US"
                href="/aboutus"
                close={setMobileMenu}
                pathname={pathname}
              />

              <MobileAccordion
                title="SERVICES"
                menu={servicesMenu}
                active={activeMobile}
                setActive={setActiveMobile}
                close={setMobileMenu}
                pathname={pathname}
              />

              <MobileAccordion
                title="TESTINGS"
                menu={testingMenu}
                active={activeMobile}
                setActive={setActiveMobile}
                close={setMobileMenu}
                pathname={pathname}
              />

              <MobileAccordion
                title="EQUIPMENTS & MACHINERY"
                menu={equipmentMenu}
                active={activeMobile}
                setActive={setActiveMobile}
                close={setMobileMenu}
                pathname={pathname}
              />

              <MobileAccordion
                title="FOOD INGREDIENTS"
                menu={foodMenu}
                active={activeMobile}
                setActive={setActiveMobile}
                close={setMobileMenu}
                pathname={pathname}
              />

              <MobileLink
                label="IT SERVICES"
                href="/it-services-and-solutions"
                close={setMobileMenu}
                pathname={pathname}
              />

              <MobileLink
                label="STUDENT PANEL"
                href="/student-panel"
                close={setMobileMenu}
                pathname={pathname}
              />
              <MobileAccordion
                title="UPDATES"
                menu={updatesMenu}
                active={activeMobile}
                setActive={setActiveMobile}
                close={setMobileMenu}
                pathname={pathname}
              />

              <MobileLink
                label="CONTACT US"
                href="/contact-us"
                close={setMobileMenu}
                pathname={pathname}
              />
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

function DesktopDropdown({
  title,
  menu,
  href,
  align = "left",
  isPrimary,
  isFeatured,
  pathname,
}) {
  // Check if any child page in this dropdown is currently active
  const isChildActive = menu.some((group) =>
    group.items.some((item) => {
      const itemPath = item.root ? `/${item.slug}` : `/services/${item.slug}`;
      if (pathname === itemPath) return true;
      // Check sub-menu items too
      if (item.isSubMenu && item.subItems) {
        return item.subItems.some((sub) => {
          if (sub.isSubMenu && sub.subItems) {
            return sub.subItems.some((sub2) => {
              const sub2Path = sub2.root
                ? `/${sub2.slug}`
                : `/services/${sub2.slug}`;
              return pathname === sub2Path;
            });
          }
          const subPath = sub.root ? `/${sub.slug}` : `/services/${sub.slug}`;
          return pathname === subPath;
        });
      }
      return false;
    }),
  );
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (title === "SERVICES") {
      const handleOpen = () => setIsOpen(true);
      window.addEventListener("open-services-dropdown", handleOpen);
      return () =>
        window.removeEventListener("open-services-dropdown", handleOpen);
    }
    if (title === "FOOD INGREDIENTS") {
      const handleOpen = () => setIsOpen(true);
      window.addEventListener("open-food-dropdown", handleOpen);
      return () => window.removeEventListener("open-food-dropdown", handleOpen);
    }
  }, [title]);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const timer = setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 10);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const buttonContent = (
    <>
      {isPrimary && (
        <span className="relative flex h-2.5 w-2.5 mr-1.5 mt-0.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#0075B6] opacity-100 animate-[ping_0.8s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0075B6] shadow-[0_0_6px_#0075B6]"></span>
        </span>
      )}
      {isFeatured && (
        <span className="relative flex h-2 w-2 mr-1.5 mt-0.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white shadow-[0_0_5px_#ffffff]"></span>
        </span>
      )}
      <span className="flex items-center gap-1 relative z-10">
        {title}
        <ChevronDown size={14} className="shrink-0" />
      </span>
    </>
  );

  const primaryClasses =
    "bg-white text-[#004e7a] px-4 py-1.5 rounded-full font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5";
  const featuredClasses =
    "bg-white/10 backdrop-blur-md border border-white/50 text-white px-5 py-1.5 rounded-full font-bold shadow-sm hover:bg-white/20 hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 transition-all duration-300";
  const defaultClasses = "hover:text-black";
  const activeIndicator = isChildActive
    ? "border-b-2 border-white pb-1 text-yellow-300"
    : "";

  const currentButtonClass = isPrimary
    ? primaryClasses
    : isFeatured
      ? featuredClasses
      : defaultClasses;
  const currentIndicator = !isPrimary && !isFeatured ? activeIndicator : "";

  return (
    <li
      ref={dropdownRef}
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {href ? (
        <Link
          href={href}
          className={`cursor-pointer flex items-center gap-1 transition-all duration-300 whitespace-nowrap ${currentButtonClass} ${currentIndicator}`}
        >
          {buttonContent}
        </Link>
      ) : (
        <span
          className={`cursor-pointer flex items-center gap-1 transition-all duration-300 whitespace-nowrap ${currentButtonClass} ${currentIndicator}`}
        >
          {buttonContent}
        </span>
      )}

      <div
        className={`absolute ${align === "right" ? "right-0" : "left-0"} top-full mt-3 bg-white shadow-[0_20px_40px_-15px_rgba(0,78,122,0.15)] ring-1 ring-slate-100 rounded-2xl p-7 transition-all duration-300 z-50 ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <div className="flex gap-10">
          {menu.map((group, gIndex) => (
            <div key={`${title}-group-${gIndex}`} className="min-w-60">
              {group.title ? (
                <div className="relative mb-5 bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent py-2 px-3 border-l-[3px] border-[#0075B6] rounded-r-lg">
                  <h4 className="text-[#004e7a] font-bold text-[13px] tracking-widest uppercase">
                    {group.title}
                  </h4>
                </div>
              ) : menu.some((g) => g.title) ? (
                <div className="relative mb-5 py-2 px-3 border-l-[3px] border-transparent pointer-events-none opacity-0 select-none">
                  <h4 className="font-extrabold text-[13px] tracking-widest uppercase">
                    SPACER
                  </h4>
                </div>
              ) : null}

              <ul className="space-y-2 text-sm font-medium">
                {group.items.map((item, iIndex) => (
                  <li
                    key={`${item.slug || item.name}-${iIndex}`}
                    className={item.isSubMenu ? "relative group/sub" : ""}
                  >
                    {item.isSubMenu ? (
                      <>
                        <div className="group flex items-center justify-between gap-2 text-slate-800 hover:text-[#004e7a] cursor-pointer py-1 px-2 -mx-2 rounded-xl hover:bg-slate-50 transition-all duration-300 ease-out">
                          <div className="flex items-center gap-2">
                            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-50 text-[#0075B6] group-hover:bg-[#0075B6] group-hover:text-white transition-colors duration-300 shrink-0 shadow-sm">
                              {item.icon === "ShoppingCart" ? (
                                <ShoppingCart size={14} strokeWidth={2} />
                              ) : (
                                <FileText size={14} strokeWidth={2} />
                              )}
                            </div>
                            <span className="leading-snug text-[13px] font-bold uppercase transition-colors duration-300">
                              {item.name}
                            </span>
                          </div>
                          <ChevronRight
                            size={18}
                            strokeWidth={2.5}
                            className="text-[#0075B6] transition-all duration-300 group-hover:translate-x-1 shrink-0"
                          />
                        </div>
                        <div
                          className={`absolute ${align === "right" ? "left-[50%] top-full" : `left-full ml-2 ${iIndex === group.items.length - 1 ? "bottom-0" : "top-0"}`} w-72 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible bg-white shadow-2xl border border-gray-100 rounded-lg p-4 transition-all duration-200 z-50`}
                        >
                          <ul className="space-y-2">
                            {item.subItems.map((sub, sIdx) => (
                              <li
                                key={sIdx}
                                className={
                                  sub.isSubMenu ? "relative group/sub2" : ""
                                }
                              >
                                {sub.isSubMenu ? (
                                  <>
                                    <div className="group flex items-center justify-between gap-2 text-slate-800 hover:text-[#004e7a] cursor-pointer py-1 px-2 -mx-2 rounded-xl hover:bg-slate-50 transition-all duration-300 ease-out">
                                      <div className="flex items-center gap-2.5">
                                        <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-50 text-[#0075B6] group-hover:bg-[#0075B6] group-hover:text-white transition-colors duration-300 shrink-0 shadow-sm">
                                          {sub.icon === "ShoppingCart" ? (
                                            <ShoppingCart
                                              size={14}
                                              strokeWidth={2}
                                            />
                                          ) : (
                                            <FileText
                                              size={14}
                                              strokeWidth={2}
                                            />
                                          )}
                                        </div>
                                        <span className="leading-snug text-[13px] font-bold uppercase transition-colors duration-300">
                                          {sub.name}
                                        </span>
                                      </div>
                                      <ChevronRight
                                        size={18}
                                        strokeWidth={2.5}
                                        className="text-[#0075B6] transition-all duration-300 group-hover:translate-x-1 shrink-0"
                                      />
                                    </div>
                                    <div
                                      className={`absolute ${align === "right" ? "left-[50%] top-full" : `left-full ml-2 ${sIdx === item.subItems.length - 1 ? "bottom-0" : "top-0"}`} w-72 opacity-0 invisible group-hover/sub2:opacity-100 group-hover/sub2:visible bg-white shadow-2xl border border-gray-100 rounded-lg p-4 transition-all duration-200 z-50`}
                                    >
                                      <ul className="space-y-2">
                                        {sub.subItems.map((sub2, s2Idx) => (
                                          <li key={s2Idx}>
                                            <Link
                                              href={
                                                sub2.root
                                                  ? `/${sub2.slug}`
                                                  : `/services/${sub2.slug}`
                                              }
                                              onClick={() => setIsOpen(false)}
                                              className="block w-full"
                                            >
                                              <div className="group flex items-center justify-between gap-2 text-slate-800 hover:text-[#004e7a] py-1 px-2 -mx-2 rounded-xl hover:bg-slate-50 transition-all duration-300 ease-out w-full">
                                                <div className="flex items-center gap-2.5">
                                                  <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-50 text-[#0075B6] group-hover:bg-[#0075B6] group-hover:text-white transition-colors duration-300 shrink-0 shadow-sm">
                                                    {sub2.icon ===
                                                    "ShoppingCart" ? (
                                                      <ShoppingCart
                                                        size={14}
                                                        strokeWidth={2}
                                                      />
                                                    ) : (
                                                      <FileText
                                                        size={14}
                                                        strokeWidth={2}
                                                      />
                                                    )}
                                                  </div>
                                                  <span className="leading-snug text-[13px] font-medium uppercase transition-colors duration-300">
                                                    {sub2.name}
                                                  </span>
                                                </div>
                                                <ArrowUpRight
                                                  size={18}
                                                  strokeWidth={2.5}
                                                  className="text-[#0075B6] transition-all duration-300 group-hover:translate-x-1 shrink-0"
                                                />
                                              </div>
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </>
                                ) : (
                                  <Link
                                    href={
                                      sub.root
                                        ? `/${sub.slug}`
                                        : `/services/${sub.slug}`
                                    }
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full"
                                  >
                                    <div className="group flex items-center justify-between gap-2 text-slate-800 hover:text-[#004e7a] py-1 px-2 -mx-2 rounded-xl hover:bg-slate-50 transition-all duration-300 ease-out">
                                      <div className="flex items-center gap-2.5">
                                        <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-50 text-[#0075B6] group-hover:bg-[#0075B6] group-hover:text-white transition-colors duration-300 shrink-0 shadow-sm">
                                          {sub.icon === "ShoppingCart" ? (
                                            <ShoppingCart
                                              size={14}
                                              strokeWidth={2}
                                            />
                                          ) : (
                                            <FileText
                                              size={14}
                                              strokeWidth={2}
                                            />
                                          )}
                                        </div>
                                        <span className="leading-snug text-[13px] font-medium uppercase transition-colors duration-300">
                                          {sub.name}
                                        </span>
                                      </div>
                                      <ArrowUpRight
                                        size={18}
                                        strokeWidth={2.5}
                                        className="text-[#0075B6] transition-all duration-300 group-hover:translate-x-1 shrink-0"
                                      />
                                    </div>
                                  </Link>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={
                          item.root ? `/${item.slug}` : `/services/${item.slug}`
                        }
                        onClick={() => setIsOpen(false)}
                        className="block w-full"
                      >
                        <div className="group flex items-center justify-between gap-2 text-slate-800 hover:text-[#004e7a] py-1 px-2 -mx-2 rounded-xl hover:bg-slate-50 transition-all duration-300 ease-out">
                          <div className="flex items-center gap-2.5">
                            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-50 text-[#0075B6] group-hover:bg-[#0075B6] group-hover:text-white transition-colors duration-300 shrink-0 shadow-sm">
                              {item.icon === "ShoppingCart" ? (
                                <ShoppingCart size={14} strokeWidth={2} />
                              ) : (
                                <FileText size={14} strokeWidth={2} />
                              )}
                            </div>
                            <span className="leading-snug text-[13px] font-medium uppercase transition-colors duration-300">
                              {item.name}
                            </span>
                          </div>
                          <ArrowUpRight
                            size={18}
                            strokeWidth={2.5}
                            className="text-[#0075B6] transition-all duration-300 group-hover:translate-x-1 shrink-0"
                          />
                        </div>
                      </Link>
                    )}
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

function MobileNestedAccordion({ item, close }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-3">
      <button
        className="w-full flex items-center justify-between text-xs text-gray-200 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        <div className="flex items-start gap-2">
          {item.icon === "ShoppingCart" ? (
            <ShoppingCart size={14} className="shrink-0 mt-0.5" />
          ) : (
            <FileText size={14} className="shrink-0 mt-0.5" />
          )}
          <span className="uppercase text-left leading-tight">{item.name}</span>
        </div>
        <ChevronDown
          size={14}
          className={`transition shrink-0 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <ul className="pl-5 space-y-3 mt-3 border-l border-white/10 ml-2">
          {item.subItems.map((sub, sIdx) => (
            <li key={sIdx}>
              {sub.isSubMenu ? (
                <MobileNestedAccordion item={sub} close={close} />
              ) : (
                <Link
                  href={sub.root ? `/${sub.slug}` : `/services/${sub.slug}`}
                  onClick={() => close(false)}
                  className="flex items-start gap-2 text-xs text-gray-300 hover:text-white"
                >
                  {sub.icon === "ShoppingCart" ? (
                    <ShoppingCart size={14} className="shrink-0 mt-0.5" />
                  ) : (
                    <FileText size={14} className="shrink-0 mt-0.5" />
                  )}
                  <span className="uppercase text-left leading-tight">
                    {sub.name}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function MobileAccordion({ title, menu, active, setActive, close, pathname }) {
  const isChildActive = menu.some((group) =>
    group.items.some((item) => {
      const itemPath = item.root ? `/${item.slug}` : `/services/${item.slug}`;
      if (pathname === itemPath) return true;
      if (item.isSubMenu && item.subItems) {
        return item.subItems.some((sub) => {
          if (sub.isSubMenu && sub.subItems) {
            return sub.subItems.some((sub2) => {
              const sub2Path = sub2.root
                ? `/${sub2.slug}`
                : `/services/${sub2.slug}`;
              return pathname === sub2Path;
            });
          }
          const subPath = sub.root ? `/${sub.slug}` : `/services/${sub.slug}`;
          return pathname === subPath;
        });
      }
      return false;
    }),
  );
  const open = active === title;

  return (
    <li className="border-b border-white/10">
      <button
        className={`w-full flex items-center justify-between px-4 py-3 ${isChildActive ? "bg-[#0075B6]/40 text-yellow-300 border-l-4 border-yellow-300" : ""}`}
        onClick={() => setActive(open ? null : title)}
      >
        {title}
        <ChevronDown
          size={18}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="bg-[#2b3945] px-4 py-3 space-y-2">
          {menu.map((group, gIndex) => (
            <div key={`${title}-mobile-${gIndex}`}>
              {group.title && (
                <p className="text-xs text-gray-300 mb-2">{group.title}</p>
              )}

              <ul className="space-y-3">
                {group.items.map((item, iIndex) => (
                  <li key={`${item.slug || item.name}-m-${iIndex}`}>
                    {item.isSubMenu ? (
                      <MobileNestedAccordion item={item} close={close} />
                    ) : (
                      <Link
                        href={
                          item.root ? `/${item.slug}` : `/services/${item.slug}`
                        }
                        onClick={() => close(false)}
                        className="flex items-start gap-2 text-xs text-gray-200"
                      >
                        <FileText size={14} className="shrink-0 mt-0.5" />
                        <span className="uppercase text-left leading-tight">
                          {item.name}
                        </span>
                      </Link>
                    )}
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

function NavLink({ href, label, pathname }) {
  const isActive = href === "/" ? pathname === "/" : pathname?.startsWith(href);
  return (
    <li>
      <Link
        href={href}
        className={`hover:text-black whitespace-nowrap transition-all duration-200 ${isActive ? "border-b-2 border-white pb-1 text-yellow-300" : ""}`}
      >
        {label}
      </Link>
    </li>
  );
}

function MobileLink({ href, label, close, pathname }) {
  const isActive = href === "/" ? pathname === "/" : pathname?.startsWith(href);
  return (
    <li className="border-b border-white/10">
      <Link
        href={href}
        onClick={() => close(false)}
        className={`block px-4 py-3 ${isActive ? "bg-[#0075B6]/40 text-yellow-300 border-l-4 border-yellow-300" : ""}`}
      >
        {label}
      </Link>
    </li>
  );
}
