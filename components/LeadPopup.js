// "use client";

// import { useEffect, useState } from "react";
// import { doc, runTransaction, serverTimestamp } from "firebase/firestore";
// import { db } from "@/src/lib/firebase";

// export default function LeadPopup() {
//   const [show, setShow] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//   });

//   useEffect(() => {
//     const firstTimer = setTimeout(() => {
//       setShow(true);
//     }, 10000);

//     return () => clearTimeout(firstTimer);
//   }, []);

//   const closePopup = () => {
//     setShow(false);
//     setTimeout(() => setShow(true), 70000);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((p) => ({ ...p, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (loading) return;

//     setLoading(true);

//     try {
//       const counterRef = doc(db, "counters", "enquiries");
//       let enquiryId = "";

//       await runTransaction(db, async (transaction) => {
//         const snap = await transaction.get(counterRef);
//         const current = snap.exists() ? snap.data().current || 0 : 0;
//         const next = current + 1;

//         enquiryId = `ANG${String(next).padStart(5, "0")}`;

//         transaction.set(counterRef, { current: next }, { merge: true });

//         transaction.set(doc(db, "enquiries", enquiryId), {
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,
//           industry: formData.service,
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
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,
//           service: formData.service,
//           source: "website",
//         }),
//       });

//       setSuccess(true);

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         service: "",
//       });

//       setTimeout(() => {
//         setSuccess(false);
//         setShow(false);
//       }, 3000);
//     } catch (err) {
//       console.error("Popup enquiry error:", err);
//       alert("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/10 pointer-events-none">
//       <div className="relative h-[390px] w-[850px] max-w-[97%] bg-white rounded-lg overflow-hidden flex pointer-events-auto">
//         <button
//           onClick={closePopup}
//           className="absolute top-1 right-3 text-3xl  text-gray-600 cursor-pointer hover:text-red-600"
//         >
//           ×
//         </button>

//         <div className="hidden md:block p-5 w-[62%] bg-gray-100">
//           <img
//             src="/popup-image-2.webp"
//             alt="Popup Image "
//             className="h-full w-full object-cover"
//           />
//         </div>

//         <div className="w-full md:w-[38%] p-6 flex items-center justify-center">
//           {success ? (
//             <div className="text-center">
//               <h3 className="text-xl font-semibold text-green-600 mb-2">
//                 Thank You!
//               </h3>
//               <p className="text-gray-700">
//                 Your enquiry has been sent successfully.
//                 <br />
//                 We will respond shortly.
//               </p>
//             </div>
//           ) : (
//             <div className="w-full">
//               <h2 className="text-2xl text-[#0072b1] font-extrabold mb-5 text-center">
//                 AN Global Services!
//               </h2>

//               <form onSubmit={handleSubmit} className="space-y-3">
//                 <input
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   placeholder="Your name"
//                   className="w-full border border-gray-500 rounded-md px-3 py-1"
//                 />

//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   placeholder="Email address"
//                   className="w-full border border-gray-500 rounded-md px-3 py-1"
//                 />

//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                   pattern="[0-9]{10}"
//                   placeholder="10 digit phone number"
//                   className="w-full border border-gray-500 rounded-md px-3 py-1"
//                 />

//                 <textarea
//                   name="service"
//                   value={formData.service}
//                   onChange={handleChange}
//                   required
//                   placeholder="Tell us which service you’re interested in…"
//                   className="w-full border border-gray-500 rounded-md px-3 py-2 h-20"
//                 />

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-blue-900 text-white py-2 rounded-full cursor-pointer font-semibold hover:bg-blue-800 disabled:opacity-60"
//                 >
//                   {loading ? "Submitting..." : "SUBMIT ENQUIRY"}
//                 </button>
//               </form>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }






"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // 1. Added this import
import { doc, runTransaction, serverTimestamp } from "firebase/firestore";
import { db } from "@/src/lib/firebase";

import { FaUser, FaEnvelope, FaPhoneAlt, FaCommentDots, FaArrowRight } from "react-icons/fa";

export default function LeadPopup() {
  const pathname = usePathname();
  const isStudentPanel = pathname?.startsWith("/student-panel");
  const isItServicesPage = pathname?.startsWith("/it-services-and-solutions");
  const isFoodIngredientsPage = pathname?.startsWith("/food-ingredients");

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [scale, setScale] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  useEffect(() => {
    if (isStudentPanel || isItServicesPage || isFoodIngredientsPage) return;

    const firstTimer = setTimeout(() => {
      // Do not interrupt the user if they are currently chatting with the bot
      if (document.getElementById('chatbot-window')) return;
      setShow(true);
    }, 10000); 

    return () => clearTimeout(firstTimer);
  }, [pathname, isStudentPanel, isItServicesPage, isFoodIngredientsPage]);

  useEffect(() => {
    const updateScale = () => {
      if (typeof window !== "undefined") {
        const winWidth = window.innerWidth;
        if (winWidth < 1000) {
          setScale(Math.min(1, (winWidth - 32) / 980));
        } else {
          setScale(1);
        }
      }
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const closePopup = () => {
    setShow(false);
    setTimeout(() => {
      // Do not interrupt the user if they are currently chatting with the bot
      if (document.getElementById('chatbot-window')) return;
      setShow(true);
    }, 60000); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      const counterRef = doc(db, "counters", "enquiries");
      let enquiryId = "";

      await runTransaction(db, async (transaction) => {
        const snap = await transaction.get(counterRef);
        const current = snap.exists() ? snap.data().current || 0 : 0;
        const next = current + 1;

        enquiryId = `ANG${String(next).padStart(5, "0")}`;

        transaction.set(counterRef, { current: next }, { merge: true });

        transaction.set(doc(db, "enquiries", enquiryId), {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          industry: formData.service,
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
          email: formData.email,
          phone: formData.phone,
          industry: formData.service,
          source: "website",
        }),
      });

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
      });

      setTimeout(() => {
        setSuccess(false);
        setShow(false);
      }, 3000);
    } catch (err) {
      console.error("Popup enquiry error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (isStudentPanel || isItServicesPage || isFoodIngredientsPage || !show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 pointer-events-none overflow-hidden p-4 md:p-0">
      
      {/* ---------------- MOBILE LAYOUT (< md) ---------------- */}
      {/* Clean white form, no image, no weird scaled offsets */}
      <div className="md:hidden relative w-full max-w-[400px] bg-white rounded-2xl shadow-2xl p-6 pointer-events-auto flex flex-col z-50">
        <button
          onClick={closePopup}
          className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-gray-700 transition-colors z-20 cursor-pointer"
        >
          ×
        </button>

        {success ? (
          <div className="text-center py-6">
            <h3 className="text-xl font-semibold text-green-600 mb-2">Thank You!</h3>
            <p className="text-gray-700 text-sm">Your enquiry has been sent successfully.<br />We will respond shortly.</p>
          </div>
        ) : (
          <div className="w-full mt-2">
            <div className="text-center mb-6">
              <h2 className="text-[22px] text-[#051c3d] font-black leading-tight tracking-tight">
                AN Global Services!
              </h2>
              <p className="text-[#555] text-[13px] mt-1 font-medium">
                Get in touch with our experts
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#555]">
                  <FaUser size={15} />
                </div>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full border border-[#cbd5e1] rounded-[8px] pl-10 pr-3 py-2.5 text-[14px] text-gray-800 focus:outline-none focus:border-[#002B7F] focus:ring-1 focus:ring-[#002B7F] transition-all bg-white shadow-sm"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#555]">
                  <FaEnvelope size={15} />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email address"
                  className="w-full border border-[#cbd5e1] rounded-[8px] pl-10 pr-3 py-2.5 text-[14px] text-gray-800 focus:outline-none focus:border-[#002B7F] focus:ring-1 focus:ring-[#002B7F] transition-all bg-white shadow-sm"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#555]">
                  <FaPhoneAlt size={15} />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  placeholder="10 digit phone number"
                  className="w-full border border-[#cbd5e1] rounded-[8px] pl-10 pr-3 py-2.5 text-[14px] text-gray-800 focus:outline-none focus:border-[#002B7F] focus:ring-1 focus:ring-[#002B7F] transition-all bg-white shadow-sm"
                />
              </div>

              <div className="relative">
                <div className="absolute top-3 left-0 pl-3.5 flex pointer-events-none text-[#555]">
                  <FaCommentDots size={15} />
                </div>
                <textarea
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  placeholder="Tell us which service you're interested in..."
                  className="w-full border border-[#cbd5e1] rounded-[8px] pl-10 pr-3 py-2.5 h-[76px] text-[14px] text-gray-800 focus:outline-none focus:border-[#002B7F] focus:ring-1 focus:ring-[#002B7F] transition-all resize-none bg-white shadow-sm"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#002B7F] text-white py-3 rounded-full cursor-pointer font-bold text-[14px] tracking-wider hover:bg-[#001c54] disabled:opacity-60 transition-colors flex items-center justify-center gap-2 mt-1 shadow-lg"
              >
                {loading ? "SUBMITTING..." : "SUBMIT ENQUIRY"}
                {!loading && <FaArrowRight size={13} />}
              </button>
            </form>
          </div>
        )}
      </div>

      {/* ---------------- TABLET/DESKTOP LAYOUT (md and up) ---------------- */}
      <div 
        className="hidden md:flex relative h-[450px] w-[980px] min-w-[980px] shrink-0 bg-transparent rounded-2xl overflow-hidden pointer-events-auto shadow-2xl"
        style={{ 
          transform: `scale(${scale})`,
          transformOrigin: 'center'
        }}
      >
        
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/popup-image-3.webp"
            alt="Popup Background"
            className="w-full h-full object-fill"
          />
        </div>

        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-5 text-2xl text-gray-500 hover:text-gray-900 transition-colors z-20 font-bold cursor-pointer"
        >
          ×
        </button>

        {/* Form strictly constrained to the right white area */}
        <div className="absolute right-0 top-0 h-full w-full md:w-[350px] pl-2 pr-8 py-6 flex flex-col justify-center z-10">
          {success ? (
            <div className="text-center">
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-700 text-sm">
                Your enquiry has been sent successfully.
                <br />
                We will respond shortly.
              </p>
            </div>
          ) : (
            <div className="w-full mt-2">
              <div className="text-center mb-6 ml-12">
                  <h2 className="text-[26px] text-[#051c3d] font-black leading-tight tracking-tight">
                    AN Global Services!
                  </h2>
                  <p className="text-[#555] text-[14px] mt-1 font-medium">
                    Get in touch with our experts
                  </p>
                </div>

                {/* ml-12 moves all inputs and the button slightly more to the right */}
                <form onSubmit={handleSubmit} className="space-y-3.5 ml-12">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#555]">
                      <FaUser size={15} />
                    </div>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full border border-[#cbd5e1] rounded-[8px] pl-10 pr-3 py-2.5 text-[14px] text-gray-800 focus:outline-none focus:border-[#002B7F] focus:ring-1 focus:ring-[#002B7F] transition-all bg-white shadow-sm"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#555]">
                      <FaEnvelope size={15} />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email address"
                      className="w-full border border-[#cbd5e1] rounded-[8px] pl-10 pr-3 py-2.5 text-[14px] text-gray-800 focus:outline-none focus:border-[#002B7F] focus:ring-1 focus:ring-[#002B7F] transition-all bg-white shadow-sm"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#555]">
                      <FaPhoneAlt size={15} />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      placeholder="10 digit phone number"
                      className="w-full border border-[#cbd5e1] rounded-[8px] pl-10 pr-3 py-2.5 text-[14px] text-gray-800 focus:outline-none focus:border-[#002B7F] focus:ring-1 focus:ring-[#002B7F] transition-all bg-white shadow-sm"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute top-3 left-0 pl-3.5 flex pointer-events-none text-[#555]">
                      <FaCommentDots size={15} />
                    </div>
                    <textarea
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      placeholder="Tell us which service you're interested in..."
                      className="w-full border border-[#cbd5e1] rounded-[8px] pl-10 pr-3 py-2.5 h-[76px] text-[14px] text-gray-800 focus:outline-none focus:border-[#002B7F] focus:ring-1 focus:ring-[#002B7F] transition-all resize-none bg-white shadow-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#002B7F] text-white py-3 rounded-full cursor-pointer font-bold text-[14px] tracking-wider hover:bg-[#001c54] disabled:opacity-60 transition-colors flex items-center justify-center gap-2 mt-1 shadow-lg"
                  >
                    {loading ? "SUBMITTING..." : "SUBMIT ENQUIRY"}
                    {!loading && <FaArrowRight size={13} />}
                  </button>
                </form>
              </div>
            )}
          </div>
      </div>
    </div>
  );
}