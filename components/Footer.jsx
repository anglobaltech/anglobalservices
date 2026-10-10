// "use client";

// import { useState } from "react";
// import { doc, runTransaction, serverTimestamp } from "firebase/firestore";
// import { db } from "@/src/lib/firebase";
// import ReCAPTCHA from "react-google-recaptcha";
// import Image from "next/image";
// import Link from "next/link";
// import { ChevronRight } from "lucide-react";

// import {
//   FaFacebookF,
//   FaLinkedinIn,
//   FaYoutube,
//   FaInstagram,
// } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

// export default function Footer() {
//   const [formData, setFormData] = useState({
//     service: "",
//     name: "",
//     email: "",
//     phone: "",
//   });

//   const [captchaToken, setCaptchaToken] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (
//       !formData.service ||
//       !formData.name ||
//       !formData.email ||
//       !formData.phone
//     ) {
//       setError("Please fill all required fields");
//       return;
//     }

//     if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       setError("Please enter a valid email address");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       const captchaRes = await fetch("/api/verify-captcha", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ token: captchaToken }),
//       });

//       let enquiryId = "";
//       const counterRef = doc(db, "counters", "enquiries");

//       await runTransaction(db, async (transaction) => {
//         const snap = await transaction.get(counterRef);
//         const current = snap.exists() ? snap.data().current || 0 : 0;
//         const next = current + 1;

//         enquiryId = `ANG${String(next).padStart(5, "0")}`;

//         transaction.set(counterRef, { current: next }, { merge: true });

//         transaction.set(doc(db, "enquiries", enquiryId), {
//           enquiryId,
//           service: formData.service,
//           name: formData.name,
//           phone: formData.phone,
//           email: formData.email,

//           source: "website",
//           status: "new",
//           createdAt: serverTimestamp(),
//         });
//       });

//       await fetch("/api/send-enquiry-email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           enquiryId,
//           ...formData,
//           source: "website",
//         }),
//       });

//       setSuccess(true);
//       setFormData({ service: "", name: "", phone: "", email: "" });
//       setCaptchaToken(null);

//       setTimeout(() => setSuccess(false), 3000);
//     } catch (err) {
//       console.error(err);
//       setError("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <footer className="bg-[#222] text-gray-300">
//       <section className="relative w-full overflow-hidden bg-gray-900">
//         {/* Subtle Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800/70 to-gray-900" />

//         {/* Soft Dark Glows */}
//         <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
//         <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />

//         <div className="relative max-w-7xl mx-auto px-6 py-8 md:py-10 text-gray-100">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//             {/* Left Content */}
//             <div>
//               <div className="flex items-center gap-3 mb-3">
//                 <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
//                   <ChevronRight className="text-cyan-400 w-5 h-5" />
//                 </div>
//                 <h2 className="text-3xl font-bold text-white">
//                   Request a Consultation Call
//                 </h2>
//               </div>

//               <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
//                 Get expert guidance on certifications, approvals, and
//                 compliance. Share your details and our consultants will connect
//                 with you shortly.
//               </p>
//             </div>

//             {/* Right Form */}
//             <div className="bg-gray-900 border border-gray-900 rounded-xl shadow-xl p-4 md:p-6 text-gray-100">
//               <p className="text-sm font-semibold text-gray-300 mb-3">
//                 Write your requirement and request a call back
//               </p>

//               <form
//                 onSubmit={handleSubmit} 
//                 className="grid grid-cols-1 md:grid-cols-2 gap-3"
//               >
//                 {/* Row 1 – Service */}
//                 <input
//                   type="text"
//                   name="service"
//                   value={formData.service}
//                   onChange={handleChange}
//                   placeholder="Required Service"
//                   required
//                   className="w-full bg-gray-900 border border-gray-700 text-gray-400 placeholder-gray-500 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
//                 />

//                 {/* Row 1 – Name */}
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Your Name"
//                   required
//                   className="w-full bg-gray-900 border border-gray-700 text-gray-400 placeholder-gray-500 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
//                 />

//                 {/* Row 2 – Email */}
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Your Email Address"
//                   required
//                   className="w-full bg-gray-900 border border-gray-700 text-gray-400 placeholder-gray-500 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
//                 />

//                 {/* Row 2 – Phone */}
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="10 Digit Mobile No."
//                   required
//                   pattern="[0-9]{10}"
//                   className="w-full bg-gray-900 border border-gray-700 text-gray-400 placeholder-gray-500 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
//                 />

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="md:col-span-2 mt-1 bg-cyan-600 hover:bg-cyan-700 text-white cursor-pointer font-semibold py-2.5 rounded-md transition-all duration-300 shadow-md disabled:opacity-60"
//                 >
//                   {loading ? "Submitting..." : "SUBMIT"}
//                 </button>

//                 {success && (
//                   <p className="md:col-span-2 text-green-400 text-xs font-semibold mt-1">
//                     Your enquiry has been sent. We will respond shortly.
//                   </p>
//                 )}

//                 {error && (
//                   <p className="md:col-span-2 text-red-400 text-xs font-semibold mt-1">
//                     {error}
//                   </p>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//           <div>
//             <Image
//               src="/company-logo.png"
//               alt="AN Global Services"
//               width={260}
//               height={80}
//               className="mb-6 bg-white object-contain"
//             />

//             <h3 className="text-white font-semibold mb-4">Contact Info</h3>

//             <div className="space-y-4 text-sm">
//               {/* Phone 1 */}
//               <a
//                 href="tel:+917782069184"
//                 className="flex items-start gap-3 group"
//               >
//                 <Image src="/call-image.png" alt="Call" width={18} height={18} />
//                 <span className="text-white group-hover:text-[#0072b1]">
//                   +91 7782069184
//                 </span>
//               </a>

//               {/* Phone 2 */}
//               <a
//                 href="tel:+919958820184"
//                 className="flex items-start gap-3 group"
//               >
//                 <Image src="/call-image.png" alt="Call" width={18} height={18} />
//                 <span className="text-white group-hover:text-[#0072b1]">
//                   +91 9958820184
//                 </span>
//               </a>

//               {/* Email */}
//               <a
//                 href="mailto:info@anglobalservices.com"
//                 className="flex items-start gap-3 group"
//               >
//                 <Image src="/email.png" alt="Email" width={18} height={18} />
//                 <span className="text-white group-hover:text-[#0072b1] break-all">
//                   info@anglobalservices.com
//                 </span>
//               </a>

//               {/* Address */}
//               <div className="flex items-start gap-3">
//                 <span>📍</span>
//                 <span className="text-white leading-5">
//                   S-63, 7th Floor, Urbtech NPX, Noida <br />
//                   Sector-153, Uttar Pradesh, INDIA <br />
//                   Pin – 201310
//                 </span>
//               </div>

//               {/* ISO Image */}
//               <div className="mt-6">
//                 <Image
//                   src="/iso.png"
//                   alt="ISO Certified"
//                   width={160}
//                   height={160}
//                 />
//               </div>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-white font-semibold mb-6">Useful Links</h3>

//             <ul className="space-y-3 text-sm">
//               <li>
//                 <Link href="/" className="hover:text-white cursor-pointer">
//                   Home
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="/aboutus"
//                   className="hover:text-white cursor-pointer"
//                 >
//                   About Us
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="/contact-us"
//                   className="hover:text-white cursor-pointer"
//                 >
//                   Contact Us
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="/term-conditions"
//                   className="hover:text-white cursor-pointer"
//                 >
//                   Terms & Condition
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-white font-semibold mb-6">Serving Countries</h3>

//             <div className="grid grid-cols-2 gap-y-3 text-sm">
//               <span>India</span>
//               <span>Mexico</span>
//               <span>South Africa</span>
//               <span>China</span>
//               <span>Nepal</span>
//               <span>Thailand</span>
//               <span>Hongkong</span>
//               <span>Japan</span>
//               <span>Singapore</span>
//               <span>Italy</span>
//               <span>Greece</span>
//               <span>South Korea</span>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-white font-semibold mb-6">Map</h3>

//             <div className="w-full h-50 rounded overflow-hidden mb-6">
//               <iframe
//                 src="https://www.google.com/maps?q=NPX%20Tower%20Noida&output=embed"
//                 width="100%"
//                 height="100%"
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 className="border-0"
//               ></iframe>
//             </div>

//             <div className="flex gap-4">
//               <a
//                 href="https://www.facebook.com/anglobalservices"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 bg-[#4267B2] hover:border-blue-600 hover:text-white transition"
//               >
//                 <FaFacebookF size={16} />
//               </a>

//               {/* X (Twitter) */}
//               <a
//                 href="https://x.com/anglobalservic1"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 bg-black hover:border-black hover:text-white transition"
//               >
//                 <FaXTwitter size={16} />
//               </a>

//               {/* LinkedIn */}
//               <a
//                 href="https://www.linkedin.com/company/an-global-services/?originalSubdomain=in"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 bg-[#0077B5] hover:border-blue-700 hover:text-white transition"
//               >
//                 <FaLinkedinIn size={16} />
//               </a>
//               {/* Instagram */}
//               <a
//                 href="https://www.instagram.com/anglobalservices/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:border-transparent hover:text-white transition"
//               >
//                 <FaInstagram size={16} />
//               </a>

//               {/* YouTube */}
//               <a
//                 href="https://www.youtube.com/@anglobalservicespvtltd"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 bg-red-600 hover:border-red-600 hover:text-white transition"
//               >
//                 <FaYoutube size={18} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* --- NEW RESPONSIVE DISCLAIMER SECTION --- */}
//       <div className="max-w-7xl mx-auto px-6 pb-8">
//         <div className="bg-[#2a2a2a] border border-[#333] rounded-lg p-5 md:p-6 text-xs md:text-sm text-gray-400 leading-relaxed text-center md:text-left shadow-inner">
//           <span className="font-semibold text-gray-200">Disclaimer:</span> AN Global Services is a private consulting firm offering support for certifications, registrations, and compliance (BIS, ISI, WPC, BEE, MSME, Trademark, etc.), and is not affiliated with any government authority. For the latest updates and official information, please visit the Bureau of Indian Standards (BIS) official website.
//         </div>
//       </div>
//       {/* --------------------------------------- */}

//       <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
//         © 2026. A N GLOBAL SERVICES PVT. LTD. All Rights Reserved.
//       </div>
//     </footer>
//   );
// }









"use client";

import { useState } from "react";
import { usePathname } from "next/navigation"; // <-- 1. Added this import
import { doc, runTransaction, serverTimestamp } from "firebase/firestore";
import { db } from "@/src/lib/firebase";
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Phone, Mail } from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  // 2. Read the current URL path
  const pathname = usePathname();
  const isStudentPanel = pathname?.startsWith("/student-panel");
  const isFoodIngredients = pathname?.startsWith("/food-ingredients");
  const isContactUs = pathname?.startsWith("/contact-us");

  const [formData, setFormData] = useState({
    service: "",
    name: "",
    email: "",
    phone: "",
  });

  const [captchaToken, setCaptchaToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Allow only digits and limit to 10 characters
      const formattedValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData({ ...formData, [name]: formattedValue });
    } else if (name === "name") {
      // Allow only alphabets and spaces
      const formattedValue = value.replace(/[^a-zA-Z\s]/g, '');
      setFormData({ ...formData, [name]: formattedValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.service ||
      !formData.name ||
      !formData.email ||
      !formData.phone
    ) {
      setError("Please fill all required fields");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);
    setError("");

    try {
      let enquiryId = "";
      const counterRef = doc(db, "counters", "enquiries");

      await runTransaction(db, async (transaction) => {
        const snap = await transaction.get(counterRef);
        const current = snap.exists() ? snap.data().current || 0 : 0;
        const next = current + 1;

        enquiryId = `ANG${String(next).padStart(5, "0")}`;

        transaction.set(counterRef, { current: next }, { merge: true });

        transaction.set(doc(db, "enquiries", enquiryId), {
          enquiryId,
          industry: formData.service,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          source: "website",
          status: "new",
          createdAt: serverTimestamp(),
        });
      });

      await fetch("/api/send-enquiry-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          enquiryId,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          industry: formData.service,
          source: "website",
          token: captchaToken,
        }),
      });

      setSuccess(true);
      setFormData({ service: "", name: "", phone: "", email: "" });
      setCaptchaToken(null);

      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[#222] text-gray-300">

      {/* 3. Conditionally render the Consultation Call section */}
      {/* 3. Conditionally render the Consultation Call section */}
      {/* 3. Conditionally render the Consultation Call section */}
      {!isStudentPanel && !isFoodIngredients && !isContactUs && (
        <section className="relative w-full overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/request-consultation-call-2.webp')" }}>
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#04122d]/80 via-[#04122d]/50 to-[#04122d]/10 md:to-transparent"></div>

          <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="text-white lg:col-span-4 xl:col-span-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-0.5 bg-[#d4af37]"></div>
                  <span className="text-sm font-bold tracking-widest text-gray-200 uppercase drop-shadow-md">Get expert guidance</span>
                </div>
                <h2 className="text-4xl md:text-[44px] font-extrabold mb-4 leading-tight tracking-tight text-white drop-shadow-lg">
                  Request a <br className="hidden md:block" />
                  <span className="text-[#d4af37]">Consultation</span> Call
                </h2>
                <p className="text-gray-100 text-base md:text-lg leading-relaxed max-w-md font-medium mb-6 drop-shadow-md">
                  Get expert guidance on certifications, approvals, and
                  compliance. Share your details and our consultants will connect
                  with you shortly.
                </p>
                <div className="w-20 h-1 bg-[#d4af37] rounded-full"></div>
              </div>

              {/* Right Form */}
              <div className="bg-[#04122d]/80 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 border border-[#1e3a8a] lg:col-span-8 lg:col-start-5 xl:col-span-7 xl:col-start-6">
                <div className="flex items-center mb-6">
                  <div className="w-1 h-5 bg-[#d4af37] mr-3 rounded-full"></div>
                  <p className="text-lg font-bold text-white">
                    Write your requirement and request a call back
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {/* Row 1 – Name */}
                  <div className="relative col-span-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full bg-transparent border border-[#1e3a8a] text-white placeholder-gray-400 rounded-lg pl-10 pr-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6]"
                    />
                  </div>

                  {/* Row 1 – Phone */}
                  <div className="relative col-span-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10 Digit Mobile No."
                      required
                      pattern="[0-9]{10}"
                      className="w-full bg-transparent border border-[#1e3a8a] text-white placeholder-gray-400 rounded-lg pl-10 pr-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6]"
                    />
                  </div>

                  {/* Row 2 – Email */}
                  <div className="relative col-span-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email Address"
                      required
                      className="w-full bg-transparent border border-[#1e3a8a] text-white placeholder-gray-400 rounded-lg pl-10 pr-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6]"
                    />
                  </div>

                  {/* Row 2 – Service */}
                  <div className="relative col-span-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      placeholder="Required Service"
                      required
                      className="w-full bg-transparent border border-[#1e3a8a] text-white placeholder-gray-400 rounded-lg pl-10 pr-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="md:col-span-2 mt-2 bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] hover:from-[#0284c7] hover:to-[#0891b2] text-white cursor-pointer font-bold py-3.5 rounded-lg transition-all duration-300 shadow-md disabled:opacity-60 flex items-center justify-center gap-3 text-base"
                  >
                    {loading ? "SUBMITTING..." : "SUBMIT"}
                    {!loading && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-white text-[#0ea5e9] rounded-full p-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>

                  {success && (
                    <p className="md:col-span-2 text-green-400 text-sm font-semibold mt-1 text-center">
                      Your enquiry has been sent. We will respond shortly.
                    </p>
                  )}

                  {error && (
                    <p className="md:col-span-2 text-red-400 text-sm font-semibold mt-1 text-center">
                      {error}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --- NEW FOOTER DESIGN --- */}
      <div
        className="relative overflow-hidden pt-8 pb-6 text-[#0f172a]"
        style={{
          backgroundImage: "url('/footer-1.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="max-w-[90rem] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 md:gap-14">

            {/* Column 1: Contact Info */}
            <div className="flex flex-col h-full">
              <Image
                src="/company-logo.png"
                alt="AN Global Services"
                width={260}
                height={80}
                className="mb-2 object-contain mix-blend-multiply"
              />
              <p className="text-[13px] font-bold text-[#032b4d] mb-8 tracking-wide mt-2 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">
                Global Compliance | Trusted Expertise | Safer Industries
              </p>

              <h3 className="text-[#032b4d] text-xl font-extrabold mb-6 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">Contact Us</h3>

              <div className="space-y-4 text-[14px] font-bold text-gray-950 bg-white/40 p-4 rounded-xl shadow-sm border border-white/40">
                {/* Phone 1 */}
                <a href="tel:+917782069184" className="flex items-center gap-4 hover:text-[#0072b1] transition-colors">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-[#0075B6] flex items-center justify-center shadow-md">
                    <Phone size={14} className="text-white" />
                  </div>
                  <span>+91 7782069184</span>
                </a>

                {/* Phone 2 */}
                <a href="tel:+919958820184" className="flex items-center gap-4 hover:text-[#0072b1] transition-colors">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-[#0075B6] flex items-center justify-center shadow-md">
                    <Phone size={14} className="text-white" />
                  </div>
                  <span>+91 9958820184</span>
                </a>

                {/* Email */}
                <a href="mailto:info@anglobalservices.com" className="flex items-center gap-4 hover:text-[#0072b1] transition-colors break-all">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-[#0075B6] flex items-center justify-center shadow-md">
                    <Mail size={14} className="text-white" />
                  </div>
                  <span>info@anglobalservices.com</span>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-[#0075B6] flex items-center justify-center mt-1 shadow-md">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <span className="leading-snug">
                    S-63, 7th Floor, Urbtech NPX, Noida, Sector-153 <br />
                    Uttar Pradesh, INDIA <br />
                    Pin – 201310
                  </span>
                </div>
              </div>

              {/* ISO Image & Text */}
              <div className="mt-2 flex items-center gap-4">
                <Image src="/iso.png" alt="ISO Certified" width={160} height={160} className="drop-shadow-xl" />
                <div className="text-[14.5px] font-extrabold text-[#032b4d] leading-tight border-l-[2px] border-[#032b4d] pl-4 py-1 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] tracking-wide">
                  Quality <br /> Compliance <br /> Global Trust
                </div>
              </div>
            </div>

            {/* Column 2: Useful Links */}
            <div>
              <h3 className="text-[#032b4d] text-xl font-extrabold mb-6 flex flex-col gap-2 drop-shadow-sm">
                Useful Links
                <div className="h-[2px] w-10 bg-[#0075B6]"></div>
              </h3>
              <ul className="space-y-4 text-[15px] font-bold text-gray-950">
                <li>
                  <Link href="/" className="flex items-center gap-2 hover:text-[#0075B6] transition-colors group">
                    <ChevronRight className="w-4 h-4 text-[#0075B6] group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/aboutus" className="flex items-center gap-2 hover:text-[#0075B6] transition-colors group">
                    <ChevronRight className="w-4 h-4 text-[#0075B6] group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/bis-certification" className="flex items-center gap-2 hover:text-[#0075B6] transition-colors group">
                    <ChevronRight className="w-4 h-4 text-[#0075B6] group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                    BIS Certification
                  </Link>
                </li>
                <li>
                  <Link href="/laboratory-equipment-and-setup-services" className="flex items-center gap-2 hover:text-[#0075B6] transition-colors group">
                    <ChevronRight className="w-4 h-4 text-[#0075B6] group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                    Laboratory Setup
                  </Link>
                </li>
                <li>
                  <Link href="/food-ingredients" className="flex items-center gap-2 hover:text-[#0075B6] transition-colors group">
                    <ChevronRight className="w-4 h-4 text-[#0075B6] group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                    Food Ingredients
                  </Link>
                </li>
                <li>
                  <Link href="/it-services-and-solutions" className="flex items-center gap-2 hover:text-[#0075B6] transition-colors group">
                    <ChevronRight className="w-4 h-4 text-[#0075B6] group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                    IT Services
                  </Link>
                </li>
                <li>
                  <Link href="/student-panel" className="flex items-center gap-2 hover:text-[#0075B6] transition-colors group">
                    <ChevronRight className="w-4 h-4 text-[#0075B6] group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                    Student Panel
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="flex items-center gap-2 hover:text-[#0075B6] transition-colors group">
                    <ChevronRight className="w-4 h-4 text-[#0075B6] group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/term-conditions" className="flex items-center gap-2 hover:text-[#0075B6] transition-colors group">
                    <ChevronRight className="w-4 h-4 text-[#0075B6] group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                    Terms & Condition
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Serving Countries */}
            <div>
              <h3 className="text-[#032b4d] text-xl font-extrabold mb-6 flex flex-col gap-2 drop-shadow-sm">
                Serving Countries
                <div className="h-[2px] w-10 bg-[#0075B6]"></div>
              </h3>
              <div className="grid grid-cols-2 gap-x-2 gap-y-4 text-[14.5px] font-bold text-gray-950">
                <span className="flex items-center gap-2"><img src="https://flagcdn.com/w20/in.png" width="16" alt="India" className="rounded-sm shadow-sm" /> India</span>
                <span className="flex items-center gap-2"><img src="https://flagcdn.com/w20/us.png" width="16" alt="USA" className="rounded-sm shadow-sm" /> USA</span>
                <span className="flex items-center gap-2"><img src="https://flagcdn.com/w20/za.png" width="16" alt="South Africa" className="rounded-sm shadow-sm" /> South Africa</span>
                <span className="flex items-center gap-2"><img src="https://flagcdn.com/w20/gb.png" width="16" alt="UK" className="rounded-sm shadow-sm" /> United Kingdom</span>
                <span className="flex items-center gap-2"><img src="https://flagcdn.com/w20/np.png" width="16" alt="Nepal" className="rounded-sm shadow-sm" /> Nepal</span>
                <span className="flex items-center gap-2"><img src="https://flagcdn.com/w20/de.png" width="16" alt="Germany" className="rounded-sm shadow-sm" /> Germany</span>
                <span className="flex items-center gap-2"><img src="https://flagcdn.com/w20/hk.png" width="16" alt="Hongkong" className="rounded-sm shadow-sm" /> Hongkong</span>
                <span className="flex items-center gap-2"><img src="https://flagcdn.com/w20/ca.png" width="16" alt="Canada" className="rounded-sm shadow-sm" /> Canada</span>
                <span className="flex items-center gap-2"><img src="https://flagcdn.com/w20/sg.png" width="16" alt="Singapore" className="rounded-sm shadow-sm" /> Singapore</span>
                <span className="flex items-center gap-2"><img src="https://flagcdn.com/w20/au.png" width="16" alt="Australia" className="rounded-sm shadow-sm" /> Australia</span>
                <span className="flex items-center gap-2"><img src="https://flagcdn.com/w20/gr.png" width="16" alt="Greece" className="rounded-sm shadow-sm" /> Greece</span>
                <span className="flex items-center gap-2"><img src="https://flagcdn.com/w20/ae.png" width="16" alt="UAE" className="rounded-sm shadow-sm" /> UAE</span>
                <span className="flex items-center gap-2"><img src="https://flagcdn.com/w20/cn.png" width="16" alt="China" className="rounded-sm shadow-sm" /> China</span>
                <span className="flex items-center gap-2"><img src="https://flagcdn.com/w20/fr.png" width="16" alt="France" className="rounded-sm shadow-sm" /> France</span>
                <span className="flex items-center gap-2"><img src="https://flagcdn.com/w20/jp.png" width="16" alt="Japan" className="rounded-sm shadow-sm" /> Japan</span>
                <span className="flex items-center gap-2"><img src="https://flagcdn.com/w20/br.png" width="16" alt="Brazil" className="rounded-sm shadow-sm" /> Brazil</span>
                <span className="flex items-center gap-2"><img src="https://flagcdn.com/w20/kr.png" width="16" alt="South Korea" className="rounded-sm shadow-sm" /> South Korea</span>
                <span className="flex items-center gap-2"><img src="https://flagcdn.com/w20/mx.png" width="16" alt="Mexico" className="rounded-sm shadow-sm" /> Mexico</span>
                <span className="flex items-center gap-2"><img src="https://flagcdn.com/w20/th.png" width="16" alt="Thailand" className="rounded-sm shadow-sm" /> Thailand</span>
                <span className="flex items-center gap-2"><img src="https://flagcdn.com/w20/it.png" width="16" alt="Italy" className="rounded-sm shadow-sm" /> Italy</span>
              </div>
              <p className="mt-6 text-[12px] text-[#032b4d] italic font-bold">
                * And delivering to clients globally all over the world.
              </p>
            </div>

            {/* Column 4: Location & Social */}
            <div className="flex flex-col h-full">
              <h3 className="text-[#032b4d] text-xl font-extrabold mb-6 flex flex-col gap-2 drop-shadow-sm">
                Our Location
                <div className="h-[2px] w-10 bg-[#0075B6]"></div>
              </h3>
              <div className="w-full h-48 rounded-xl overflow-hidden mb-6 shadow-xl border-[3px] border-white">
                <iframe
                  src="https://www.google.com/maps?q=NPX%20Tower%20Noida&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0"
                ></iframe>
              </div>

              <h3 className="text-[#032b4d] text-lg font-extrabold mb-4 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">Follow Us</h3>

              <div className="flex items-center flex-wrap gap-y-4">
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.facebook.com/anglobalservices" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center text-white bg-[#1877F2] hover:-translate-y-1 transition-transform shadow-sm">
                    <FaFacebookF size={16} />
                  </a>
                  <a href="https://x.com/anglobalservic1" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center text-white bg-black hover:-translate-y-1 transition-transform shadow-sm">
                    <FaXTwitter size={16} />
                  </a>
                  <a href="https://www.linkedin.com/company/an-global-services/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center text-white bg-[#0A66C2] hover:-translate-y-1 transition-transform shadow-sm">
                    <FaLinkedinIn size={16} />
                  </a>
                  <a href="https://www.instagram.com/anglobalservices/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center text-white bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:-translate-y-1 transition-transform shadow-sm">
                    <FaInstagram size={16} />
                  </a>
                  <a href="https://www.youtube.com/@anglobalservicespvtltd" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center text-white bg-[#FF0000] hover:-translate-y-1 transition-transform shadow-sm">
                    <FaYoutube size={16} />
                  </a>
                </div>

                <div className="hidden sm:block w-[1.5px] h-10 bg-white/70 mx-4"></div>

                <div className="text-left text-[#0075B6] font-extrabold text-[11px] leading-tight flex flex-col gap-1 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-md border border-white/50">
                  <span>CONNECTING INDUSTRIES <br /> FOR A SAFER TOMORROW</span>
                  <div className="h-[2px] w-full bg-[#0075B6] mt-0.5"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* --- BOTTOM BAR --- */}
      <div className="bg-[#091b35] text-gray-300 py-6">
        <div className="max-w-[90rem] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4 lg:w-2/3">
            <div className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center shrink-0 mt-0.5">
              <span className="font-serif italic text-sm text-gray-300">i</span>
            </div>
            <p className="text-[12px] md:text-[13px] leading-relaxed text-gray-400">
              <span className="font-semibold text-gray-200">Disclaimer:</span> AN Global Services is a private consulting firm offering support for certifications, registrations, and compliance (BIS, ISI, WPC, BEE, MSME, Trademark, etc.), and is not affiliated with any government authority. For the latest updates and official information, please visit the Bureau of Indian Standards (BIS) official website.
            </p>
          </div>

          <div className="lg:w-1/3 text-center lg:text-right border-t lg:border-t-0 lg:border-l border-gray-700 pt-4 lg:pt-0 lg:pl-6 text-[13px] font-medium text-gray-400">
            © 2026 A N Global Services Private Limited. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}