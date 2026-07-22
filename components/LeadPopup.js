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

export default function LeadPopup() {
  // 2. Read the current URL path
  const pathname = usePathname();
  const isStudentPanel = pathname?.startsWith("/student-panel");

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  useEffect(() => {
    // 3. Stop the 10-second timer from even running if on the student panel
    if (isStudentPanel) return;

    const firstTimer = setTimeout(() => {
      setShow(true);
    }, 10000);

    return () => clearTimeout(firstTimer);
  }, [isStudentPanel]);

  const closePopup = () => {
    setShow(false);
    setTimeout(() => setShow(true), 70000);
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
          service: formData.service,
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

  // 4. Return null (hide completely) if on the student panel or if show is false
  if (isStudentPanel || !show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/10 pointer-events-none">
      <div className="relative h-[390px] w-[850px] max-w-[97%] bg-white rounded-lg overflow-hidden flex pointer-events-auto">
        <button
          onClick={closePopup}
          className="absolute top-1 right-3 text-3xl  text-gray-600 cursor-pointer hover:text-red-600"
        >
          ×
        </button>

        <div className="hidden md:block p-5 w-[62%] bg-gray-100">
          <img
            src="/popup-image-2.webp"
            alt="Popup Image "
            className="h-full w-full object-cover"
          />
        </div>

        <div className="w-full md:w-[38%] p-6 flex items-center justify-center">
          {success ? (
            <div className="text-center">
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-700">
                Your enquiry has been sent successfully.
                <br />
                We will respond shortly.
              </p>
            </div>
          ) : (
            <div className="w-full">
              <h2 className="text-2xl text-[#0072b1] font-extrabold mb-5 text-center">
                AN Global Services!
              </h2>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full border border-gray-500 rounded-md px-3 py-1"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email address"
                  className="w-full border border-gray-500 rounded-md px-3 py-1"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  placeholder="10 digit phone number"
                  className="w-full border border-gray-500 rounded-md px-3 py-1"
                />

                <textarea
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  placeholder="Tell us which service you’re interested in…"
                  className="w-full border border-gray-500 rounded-md px-3 py-2 h-20"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-900 text-white py-2 rounded-full cursor-pointer font-semibold hover:bg-blue-800 disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "SUBMIT ENQUIRY"}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}