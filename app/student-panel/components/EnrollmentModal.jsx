// "use client";

// import { useState } from "react";
// import { X, CheckCircle2, Loader2 } from "lucide-react";

// export default function EnrollmentModal({ isOpen, onClose, showNotification }) {
//   // Form State
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     dob: "",
//     organization: "",
//     qualification: "",
//     gender: "",
//     mobile: "",
//     whatsapp: "",
//     email: "",
//     address: "",
//     city: "",
//     state: "",
//     country: "",
//     postalCode: "",
//     startDate: "",
//     confirmAccurate: false,
//     agreeTerms: false,
//     consentComms: false,
//   });

//   // OTP States
//   const [emailStatus, setEmailStatus] = useState("idle");
//   const [mobileStatus, setMobileStatus] = useState("idle");
//   const [emailOtp, setEmailOtp] = useState("");
//   const [mobileOtp, setMobileOtp] = useState("");

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // If modal is not open, don't render anything
//   if (!isOpen) return null;

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSendEmailOtp = async () => {
//     if (!formData.email) {
//       return showNotification("Please enter your email address first.", "error");
//     }
//     setEmailStatus("loading");
//     setTimeout(() => {
//       setEmailStatus("sent");
//       showNotification("OTP sent successfully to your email!", "success");
//     }, 1500);
//   };

//   const handleVerifyEmailOtp = async () => {
//     if (!emailOtp) {
//       return showNotification("Please enter the email OTP.", "error");
//     }
//     setEmailStatus("verified");
//     showNotification("Email verified successfully!", "success");
//   };

//   const handleSendMobileOtp = async () => {
//     if (!formData.mobile) {
//       return showNotification("Please enter your mobile number first.", "error");
//     }
//     setMobileStatus("loading");
//     setTimeout(() => {
//       setMobileStatus("sent");
//       showNotification("OTP sent successfully via SMS!", "success");
//     }, 1500);
//   };

//   const handleVerifyMobileOtp = async () => {
//     if (!mobileOtp) {
//       return showNotification("Please enter the mobile OTP.", "error");
//     }
//     setMobileStatus("verified");
//     showNotification("Mobile number verified successfully!", "success");
//   };

//   const handleSubmitEnrollment = async (e) => {
//     e.preventDefault();
    
//     if (emailStatus !== "verified" || mobileStatus !== "verified") {
//       return showNotification("Please verify both your Email and Mobile Number before submitting.", "error");
//     }

//     setIsSubmitting(true);

//     try {
//       // Connect to backend logic here
//       setTimeout(() => {
//         showNotification("Enrollment Successful! We will contact you on WhatsApp shortly.", "success");
//         onClose(); // Close the modal on success
//         setIsSubmitting(false);
//       }, 2000);
//     } catch (error) {
//       showNotification("Something went wrong. Please try again.", "error");
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 transition-opacity">
//       <div className="bg-white p-6 md:p-8 rounded-2xl max-w-4xl w-full relative max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200">
//         <button 
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-400 hover:text-red-500 bg-gray-50 hover:bg-red-50 rounded-full p-2 transition-colors"
//         >
//           <X size={24} />
//         </button>
        
//         <div className="border-b pb-4 mb-6">
//           <h2 className="text-2xl md:text-3xl font-bold text-[#0075B6]">Training Enrollment Form</h2>
//           <p className="text-gray-600 text-sm mt-2">Please fill in your details and verify your contact information to enroll.</p>
//         </div>
        
//         <form onSubmit={handleSubmitEnrollment} className="space-y-8" autoComplete="off">
          
//           {/* --- 1. Personal & General Details --- */}
//           <div>
//             <h3 className="text-lg font-semibold bg-gray-50 border border-gray-200 px-4 py-2.5 rounded-lg mb-4 text-gray-800 shadow-sm">1. Personal Details</h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-2">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">First Name *</label>
//                 <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none transition-all" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">Second Name *</label>
//                 <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none transition-all" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">Date of Birth *</label>
//                 <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none transition-all text-gray-700" />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">Gender *</label>
//                 <select name="gender" value={formData.gender} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none transition-all bg-white">
//                   <option value="">Select Gender</option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">Organization</label>
//                 <input type="text" name="organization" value={formData.organization} onChange={handleChange} placeholder="Company or College" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none transition-all" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">Qualification *</label>
//                 <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} required placeholder="Highest Degree/Diploma" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none transition-all" />
//               </div>
//             </div>
//           </div>

//           {/* --- 2. Contact & OTP Verification --- */}
//           <div>
//             <h3 className="text-lg font-semibold bg-gray-50 border border-gray-200 px-4 py-2.5 rounded-lg mb-4 text-gray-800 shadow-sm">2. Contact Verification</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 px-2">
              
//               {/* Mobile Verification Block */}
//               <div className={`p-5 rounded-xl border transition-all ${mobileStatus === "verified" ? "bg-green-50/50 border-green-200" : "bg-gray-50 border-gray-200 shadow-sm"}`}>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">Mobile Number *</label>
//                 <div className="flex gap-2">
//                   <input 
//                     type="tel" 
//                     name="mobile" 
//                     value={formData.mobile} 
//                     onChange={handleChange} 
//                     disabled={mobileStatus === "verified"}
//                     required 
//                     placeholder="10-digit mobile number"
//                     className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none disabled:bg-gray-100 disabled:text-gray-500 transition-all" 
//                   />
//                   {mobileStatus !== "verified" && (
//                     <button 
//                       type="button" 
//                       onClick={handleSendMobileOtp}
//                       disabled={mobileStatus === "loading"}
//                       className="bg-gray-800 text-white px-5 py-2.5 text-sm rounded-lg font-medium hover:bg-black whitespace-nowrap disabled:opacity-70 transition-colors shadow-sm"
//                     >
//                       {mobileStatus === "loading" ? <Loader2 size={18} className="animate-spin mx-auto" /> : mobileStatus === "sent" ? "Resend OTP" : "Get OTP"}
//                     </button>
//                   )}
//                 </div>

//                 {mobileStatus === "sent" && (
//                   <div className="flex gap-2 mt-3 animate-in slide-in-from-top-2 fade-in duration-300">
//                     <input 
//                       type="text" 
//                       placeholder="Enter SMS OTP" 
//                       value={mobileOtp}
//                       onChange={(e) => setMobileOtp(e.target.value)}
//                       autoComplete="one-time-code"
//                       className="w-full border border-blue-300 bg-white rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none transition-all" 
//                     />
//                     <button 
//                       type="button" 
//                       onClick={handleVerifyMobileOtp}
//                       className="bg-[#0075B6] text-white px-6 py-2.5 text-sm rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm"
//                     >
//                       Verify
//                     </button>
//                   </div>
//                 )}
//                 {mobileStatus === "verified" && (
//                   <p className="text-green-700 text-sm font-semibold mt-3 flex items-center gap-1.5"><CheckCircle2 size={18} /> Mobile Verified successfully!</p>
//                 )}
//               </div>

//               {/* Email Verification Block */}
//               <div className={`p-5 rounded-xl border transition-all ${emailStatus === "verified" ? "bg-green-50/50 border-green-200" : "bg-gray-50 border-gray-200 shadow-sm"}`}>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
//                 <div className="flex gap-2">
//                   <input 
//                     type="email" 
//                     name="email" 
//                     value={formData.email} 
//                     onChange={handleChange} 
//                     disabled={emailStatus === "verified"}
//                     required 
//                     placeholder="yourname@domain.com"
//                     className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none disabled:bg-gray-100 disabled:text-gray-500 transition-all" 
//                   />
//                   {emailStatus !== "verified" && (
//                     <button 
//                       type="button" 
//                       onClick={handleSendEmailOtp}
//                       disabled={emailStatus === "loading"}
//                       className="bg-gray-800 text-white px-5 py-2.5 text-sm rounded-lg font-medium hover:bg-black whitespace-nowrap disabled:opacity-70 transition-colors shadow-sm"
//                     >
//                       {emailStatus === "loading" ? <Loader2 size={18} className="animate-spin mx-auto" /> : emailStatus === "sent" ? "Resend OTP" : "Get OTP"}
//                     </button>
//                   )}
//                 </div>

//                 {emailStatus === "sent" && (
//                   <div className="flex gap-2 mt-3 animate-in slide-in-from-top-2 fade-in duration-300">
//                     <input 
//                       type="text" 
//                       placeholder="Enter Email OTP" 
//                       value={emailOtp}
//                       onChange={(e) => setEmailOtp(e.target.value)}
//                       autoComplete="one-time-code"
//                       className="w-full border border-blue-300 bg-white rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none transition-all" 
//                     />
//                     <button 
//                       type="button" 
//                       onClick={handleVerifyEmailOtp}
//                       className="bg-[#0075B6] text-white px-6 py-2.5 text-sm rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm"
//                     >
//                       Verify
//                     </button>
//                   </div>
//                 )}
//                 {emailStatus === "verified" && (
//                   <p className="text-green-700 text-sm font-semibold mt-3 flex items-center gap-1.5"><CheckCircle2 size={18} /> Email Verified successfully!</p>
//                 )}
//               </div>

//               <div className="md:col-span-2 mt-2">
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">WhatsApp Number *</label>
//                 <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required placeholder="Include country code if outside India" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none md:max-w-md transition-all" />
//               </div>
//             </div>
//           </div>

//           {/* --- 3. Location & Availability --- */}
//           <div>
//             <h3 className="text-lg font-semibold bg-gray-50 border border-gray-200 px-4 py-2.5 rounded-lg mb-4 text-gray-800 shadow-sm">3. Address & Availability</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-2">
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Address *</label>
//                 <input type="text" name="address" value={formData.address} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none transition-all" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">City *</label>
//                 <input type="text" name="city" value={formData.city} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none transition-all" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">State *</label>
//                 <input type="text" name="state" value={formData.state} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none transition-all" />
//               </div>
//               <div className="grid grid-cols-2 gap-3">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1.5">Country *</label>
//                   <input type="text" name="country" value={formData.country} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none transition-all" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1.5">Postal Code *</label>
//                   <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none transition-all" />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">Available Date to Start Training *</label>
//                 <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none text-gray-700 transition-all" />
//               </div>
//             </div>
//           </div>

//           {/* --- 4. Declarations --- */}
//           <div className="bg-blue-50/70 p-6 rounded-xl border border-blue-100 shadow-inner">
//             <h3 className="text-md font-bold text-[#0a192f] mb-4">Declarations</h3>
//             <div className="space-y-4">
//               <label className="flex items-start gap-3 cursor-pointer group">
//                 <div className="relative flex items-start">
//                   <input type="checkbox" name="confirmAccurate" checked={formData.confirmAccurate} onChange={handleChange} required className="peer mt-1 w-5 h-5 border-2 border-gray-300 rounded text-[#0075B6] focus:ring-[#0075B6] transition-all cursor-pointer" />
//                 </div>
//                 <span className="text-sm text-gray-700 font-medium group-hover:text-black transition-colors pt-1">I confirm that the information provided is accurate.</span>
//               </label>
//               <label className="flex items-start gap-3 cursor-pointer group">
//                 <div className="relative flex items-start">
//                   <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} required className="peer mt-1 w-5 h-5 border-2 border-gray-300 rounded text-[#0075B6] focus:ring-[#0075B6] transition-all cursor-pointer" />
//                 </div>
//                 <span className="text-sm text-gray-700 font-medium group-hover:text-black transition-colors pt-1">I agree to the training terms and conditions.</span>
//               </label>
//               <label className="flex items-start gap-3 cursor-pointer group">
//                 <div className="relative flex items-start">
//                   <input type="checkbox" name="consentComms" checked={formData.consentComms} onChange={handleChange} required className="peer mt-1 w-5 h-5 border-2 border-gray-300 rounded text-[#0075B6] focus:ring-[#0075B6] transition-all cursor-pointer" />
//                 </div>
//                 <span className="text-sm text-gray-700 font-medium group-hover:text-black transition-colors pt-1">I consent to receive training-related communications.</span>
//               </label>
//             </div>
//           </div>

//           <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-6 border-t border-gray-200">
//             <button 
//               type="button"
//               onClick={onClose}
//               className="w-full sm:w-auto px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 font-medium transition-colors"
//             >
//               Cancel
//             </button>
//             <button 
//               type="submit" 
//               disabled={isSubmitting || emailStatus !== "verified" || mobileStatus !== "verified"}
//               className="w-full sm:w-auto px-8 py-3 bg-[#0075B6] hover:bg-blue-700 text-white rounded-lg font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30"
//             >
//               {isSubmitting ? <><Loader2 size={18} className="animate-spin" /> Enrolling...</> : "Submit Enrollment"}
//             </button>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// }






"use client";

import { useState, useRef, useEffect } from "react";
import { X, CheckCircle2, Loader2 } from "lucide-react";
import { auth } from "@/src/lib/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

export default function EnrollmentModal({ isOpen, onClose, showNotification }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    organization: "",
    qualification: "",
    gender: "",
    mobile: "",
    whatsapp: "",
    email: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    startDate: "",
    confirmAccurate: false,
    agreeTerms: false,
    consentComms: false,
  });

  // Email OTP
  const [emailStatus, setEmailStatus]         = useState("idle");
  const [emailOtp, setEmailOtp]               = useState("");
  const [emailHash, setEmailHash]             = useState("");
  const [emailExpiresAt, setEmailExpiresAt]   = useState(null);

  // Mobile OTP
  const [mobileStatus, setMobileStatus]       = useState("idle");
  const [mobileOtp, setMobileOtp]             = useState("");
  const confirmationResultRef                 = useRef(null);
  const recaptchaVerifierRef                  = useRef(null);
  const recaptchaContainerRef                 = useRef(null); // ref to the div element

  const [isSubmitting, setIsSubmitting]       = useState(false);

  // ── Safely destroy reCAPTCHA ──
  const destroyRecaptcha = () => {
    if (recaptchaVerifierRef.current) {
      try { recaptchaVerifierRef.current.clear(); } catch (_) {}
      recaptchaVerifierRef.current = null;
    }
  };

  // ── Initialize invisible reCAPTCHA once modal opens ──
  // We mount it into a real <div ref> so it's always in the DOM
  useEffect(() => {
    if (!isOpen) return;

    // Wait one tick for the DOM div to be available
    const t = setTimeout(() => {
      if (recaptchaContainerRef.current && !recaptchaVerifierRef.current) {
        try {
          recaptchaVerifierRef.current = new RecaptchaVerifier(
            auth,
            recaptchaContainerRef.current, // ← pass the actual DOM element, not an id string
            { size: "invisible" }
          );
          // Pre-render so it's ready instantly when user clicks Get OTP
          recaptchaVerifierRef.current.render();
        } catch (err) {
          console.error("reCAPTCHA init error:", err);
        }
      }
    }, 500);

    return () => clearTimeout(t);
  }, [isOpen]);

  // ── Cleanup on modal close ──
  useEffect(() => {
    if (!isOpen) {
      destroyRecaptcha();
      setMobileStatus("idle");
      setMobileOtp("");
      confirmationResultRef.current = null;
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ══════════════════════════════════════════
  //  MOBILE OTP — Send
  // ══════════════════════════════════════════
  const handleSendMobileOtp = async () => {
    const rawMobile = formData.mobile.trim();
    if (!rawMobile) {
      return showNotification("Please enter your mobile number first.", "error");
    }

    const phone = rawMobile.startsWith("+") ? rawMobile : `+91${rawMobile}`;
    setMobileStatus("loading");

    try {
      // If verifier was cleared or never set, create a fresh one
      if (!recaptchaVerifierRef.current) {
        recaptchaVerifierRef.current = new RecaptchaVerifier(
          auth,
          recaptchaContainerRef.current,
          { size: "invisible" }
        );
        await recaptchaVerifierRef.current.render();
      }

      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phone,
        recaptchaVerifierRef.current
      );

      confirmationResultRef.current = confirmationResult;
      setMobileStatus("sent");
      showNotification("OTP sent to your mobile number!", "success");

    } catch (err) {
      console.error("Firebase Phone Auth error:", err);
      // Reset verifier on failure so next attempt gets a fresh one
      destroyRecaptcha();
      setMobileStatus("idle");

      const msg =
        err.code === "auth/invalid-phone-number"
          ? "Invalid phone number. Please use format: +919876543210"
          : err.code === "auth/too-many-requests"
          ? "Too many attempts. Please wait a few minutes and try again."
          : err.code === "auth/invalid-app-credential"
          ? "Domain not authorized. Please contact support."
          : `Failed to send OTP: ${err.code || err.message}`;

      showNotification(msg, "error");
    }
  };

  // ══════════════════════════════════════════
  //  MOBILE OTP — Resend
  // ══════════════════════════════════════════
  const handleResendMobileOtp = () => {
    destroyRecaptcha();
    setMobileStatus("idle");
    setMobileOtp("");
    confirmationResultRef.current = null;
    // Re-init verifier then send
    setTimeout(async () => {
      try {
        recaptchaVerifierRef.current = new RecaptchaVerifier(
          auth,
          recaptchaContainerRef.current,
          { size: "invisible" }
        );
        await recaptchaVerifierRef.current.render();
        handleSendMobileOtp();
      } catch (err) {
        console.error("Resend reCAPTCHA init error:", err);
        showNotification("Failed to resend OTP. Please refresh and try again.", "error");
      }
    }, 300);
  };

  // ══════════════════════════════════════════
  //  MOBILE OTP — Verify
  // ══════════════════════════════════════════
  const handleVerifyMobileOtp = async () => {
    if (!mobileOtp.trim()) {
      return showNotification("Please enter the OTP sent to your mobile.", "error");
    }
    if (!confirmationResultRef.current) {
      return showNotification("Session expired. Please request OTP again.", "error");
    }
    setMobileStatus("verifying");
    try {
      await confirmationResultRef.current.confirm(mobileOtp.trim());
      setMobileStatus("verified");
      showNotification("Mobile number verified successfully!", "success");
    } catch (err) {
      console.error("Firebase confirm OTP error:", err);
      setMobileStatus("sent");
      const msg =
        err.code === "auth/code-expired"
          ? "OTP expired. Please request a new one."
          : err.code === "auth/invalid-verification-code"
          ? "Incorrect OTP. Please check and try again."
          : "Verification failed. Please try again.";
      showNotification(msg, "error");
    }
  };

  // ══════════════════════════════════════════
  //  EMAIL OTP — Send
  // ══════════════════════════════════════════
  const handleSendEmailOtp = async () => {
    if (!formData.email) {
      return showNotification("Please enter your email address first.", "error");
    }
    setEmailStatus("loading");
    setEmailOtp("");
    try {
      const res = await fetch("/api/auth/send-email-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        setEmailStatus("idle");
        return showNotification(data.error || "Failed to send OTP. Please try again.", "error");
      }
      setEmailHash(data.hash);
      setEmailExpiresAt(data.expiresAt);
      setEmailStatus("sent");
      showNotification("OTP sent to your email!", "success");
    } catch (err) {
      console.error("Send Email OTP error:", err);
      setEmailStatus("idle");
      showNotification("Network error. Please try again.", "error");
    }
  };

  // ══════════════════════════════════════════
  //  EMAIL OTP — Verify
  // ══════════════════════════════════════════
  const handleVerifyEmailOtp = async () => {
    if (!emailOtp.trim()) {
      return showNotification("Please enter the OTP sent to your email.", "error");
    }
    setEmailStatus("verifying");
    try {
      const res = await fetch("/api/auth/verify-email-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          otp: emailOtp.trim(),
          hash: emailHash,
          expiresAt: emailExpiresAt,
        }),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        setEmailStatus("sent");
        return showNotification(data.error || "Incorrect OTP. Please try again.", "error");
      }
      setEmailStatus("verified");
      showNotification("Email verified successfully!", "success");
    } catch (err) {
      console.error("Verify Email OTP error:", err);
      setEmailStatus("sent");
      showNotification("Network error. Please try again.", "error");
    }
  };

  // ══════════════════════════════════════════
  //  FORM SUBMIT
  // ══════════════════════════════════════════
  const handleSubmitEnrollment = async (e) => {
    e.preventDefault();
    if (emailStatus !== "verified" || mobileStatus !== "verified") {
      return showNotification(
        "Please verify both Email and Mobile Number before submitting.",
        "error"
      );
    }
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/enrollment/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        showNotification(data.error || "Submission failed. Please try again.", "error");
        return;
      }
      showNotification(
        "Enrollment Successful! We will contact you on WhatsApp shortly.",
        "success"
      );
      onClose();
    } catch (err) {
      console.error("Enrollment submit error:", err);
      showNotification("Network error. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ══════════════════════════════════════════
  //  RENDER
  // ══════════════════════════════════════════
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4">

      {/*
        ── Invisible reCAPTCHA container ──
        Must be a <div>, always in the DOM while modal is open,
        outside the scrollable area. Zero size — user never sees it.
      */}
      <div
        ref={recaptchaContainerRef}
        style={{ position: "absolute", bottom: 0, left: 0, width: 0, height: 0, overflow: "hidden" }}
      />

      <div className="bg-white p-6 md:p-8 rounded-2xl max-w-4xl w-full relative max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 bg-gray-50 hover:bg-red-50 rounded-full p-2 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="border-b pb-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0075B6]">Training Enrollment Form</h2>
          <p className="text-gray-600 text-sm mt-2">
            Please fill in your details and verify your contact information to enroll.
          </p>
        </div>

        <form onSubmit={handleSubmitEnrollment} className="space-y-8" autoComplete="off">

          {/* ─── 1. Personal Details ─── */}
          <div>
            <h3 className="text-lg font-semibold bg-gray-50 border border-gray-200 px-4 py-2.5 rounded-lg mb-4 text-gray-800 shadow-sm">
              1. Personal Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">First Name *</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Second Name *</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Date of Birth *</label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none transition-all text-gray-700" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Gender *</label>
                <select name="gender" value={formData.gender} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none transition-all bg-white">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Organization</label>
                <input type="text" name="organization" value={formData.organization} onChange={handleChange} placeholder="Company or College" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Qualification *</label>
                <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} required placeholder="Highest Degree/Diploma" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none transition-all" />
              </div>
            </div>
          </div>

          {/* ─── 2. Contact Verification ─── */}
          <div>
            <h3 className="text-lg font-semibold bg-gray-50 border border-gray-200 px-4 py-2.5 rounded-lg mb-4 text-gray-800 shadow-sm">
              2. Contact Verification
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 px-2">

              {/* ── Mobile Block ── */}
              <div className={`p-5 rounded-xl border transition-all ${
                mobileStatus === "verified" ? "bg-green-50/50 border-green-200" : "bg-gray-50 border-gray-200 shadow-sm"
              }`}>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Mobile Number *</label>
                <div className="flex gap-2">
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    disabled={mobileStatus !== "idle"}
                    required
                    placeholder="+91XXXXXXXXXX"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none disabled:bg-gray-100 disabled:text-gray-500 transition-all"
                  />
                  {mobileStatus === "idle" && (
                    <button
                      type="button"
                      onClick={handleSendMobileOtp}
                      className="bg-gray-800 text-white px-5 py-2.5 text-sm rounded-lg font-medium hover:bg-black whitespace-nowrap transition-colors shadow-sm"
                    >
                      Get OTP
                    </button>
                  )}
                  {mobileStatus === "loading" && (
                    <div className="flex items-center justify-center px-4 bg-gray-100 rounded-lg border border-gray-200">
                      <Loader2 size={22} className="animate-spin text-[#0075B6]" />
                    </div>
                  )}
                </div>

                {(mobileStatus === "sent" || mobileStatus === "verifying") && (
                  <div className="mt-3 animate-in slide-in-from-top-2 fade-in duration-300">
                    <p className="text-xs text-green-700 font-medium mb-2">✓ OTP sent. Enter it below:</p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        inputMode="numeric"
                        maxLength={6}
                        placeholder="Enter 6-digit OTP"
                        value={mobileOtp}
                        onChange={(e) => setMobileOtp(e.target.value.replace(/\D/g, ""))}
                        autoComplete="one-time-code"
                        className="w-full border border-blue-300 bg-white rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none transition-all font-mono text-lg tracking-widest"
                      />
                      <button
                        type="button"
                        onClick={handleVerifyMobileOtp}
                        disabled={mobileStatus === "verifying"}
                        className="bg-[#0075B6] text-white px-6 py-2.5 text-sm rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm disabled:opacity-70"
                      >
                        {mobileStatus === "verifying"
                          ? <Loader2 size={18} className="animate-spin mx-auto" />
                          : "Verify"}
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={handleResendMobileOtp}
                      className="text-xs text-[#0075B6] underline mt-2 hover:text-blue-800 transition-colors"
                    >
                      Resend OTP
                    </button>
                  </div>
                )}

                {mobileStatus === "verified" && (
                  <p className="text-green-700 text-sm font-semibold mt-3 flex items-center gap-1.5">
                    <CheckCircle2 size={18} /> Mobile Verified successfully!
                  </p>
                )}
              </div>

              {/* ── Email Block ── */}
              <div className={`p-5 rounded-xl border transition-all ${
                emailStatus === "verified" ? "bg-green-50/50 border-green-200" : "bg-gray-50 border-gray-200 shadow-sm"
              }`}>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={emailStatus === "verified"}
                    required
                    placeholder="yourname@domain.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none disabled:bg-gray-100 disabled:text-gray-500 transition-all"
                  />
                  {emailStatus !== "verified" && (
                    <button
                      type="button"
                      onClick={handleSendEmailOtp}
                      disabled={emailStatus === "loading"}
                      className="bg-gray-800 text-white px-5 py-2.5 text-sm rounded-lg font-medium hover:bg-black whitespace-nowrap disabled:opacity-70 transition-colors shadow-sm"
                    >
                      {emailStatus === "loading"
                        ? <Loader2 size={18} className="animate-spin mx-auto" />
                        : emailStatus === "sent" || emailStatus === "verifying"
                        ? "Resend"
                        : "Get OTP"}
                    </button>
                  )}
                </div>

                {(emailStatus === "sent" || emailStatus === "verifying") && (
                  <div className="flex gap-2 mt-3 animate-in slide-in-from-top-2 fade-in duration-300">
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={6}
                      placeholder="Enter 6-digit OTP"
                      value={emailOtp}
                      onChange={(e) => setEmailOtp(e.target.value.replace(/\D/g, ""))}
                      autoComplete="one-time-code"
                      className="w-full border border-blue-300 bg-white rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none transition-all font-mono text-lg tracking-widest"
                    />
                    <button
                      type="button"
                      onClick={handleVerifyEmailOtp}
                      disabled={emailStatus === "verifying"}
                      className="bg-[#0075B6] text-white px-6 py-2.5 text-sm rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm disabled:opacity-70"
                    >
                      {emailStatus === "verifying"
                        ? <Loader2 size={18} className="animate-spin mx-auto" />
                        : "Verify"}
                    </button>
                  </div>
                )}

                {emailStatus === "verified" && (
                  <p className="text-green-700 text-sm font-semibold mt-3 flex items-center gap-1.5">
                    <CheckCircle2 size={18} /> Email Verified successfully!
                  </p>
                )}
              </div>

              <div className="md:col-span-2 mt-2">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">WhatsApp Number *</label>
                <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required placeholder="Include country code if outside India" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none md:max-w-md transition-all" />
              </div>
            </div>
          </div>

          {/* ─── 3. Address & Availability ─── */}
          <div>
            <h3 className="text-lg font-semibold bg-gray-50 border border-gray-200 px-4 py-2.5 rounded-lg mb-4 text-gray-800 shadow-sm">
              3. Address & Availability
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-2">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Address *</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">City *</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">State *</label>
                <input type="text" name="state" value={formData.state} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none transition-all" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Country *</label>
                  <input type="text" name="country" value={formData.country} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Postal Code *</label>
                  <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Available Date to Start Training *</label>
                <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] outline-none text-gray-700 transition-all" />
              </div>
            </div>
          </div>

          {/* ─── 4. Declarations ─── */}
          <div className="bg-blue-50/70 p-6 rounded-xl border border-blue-100 shadow-inner">
            <h3 className="text-md font-bold text-[#0a192f] mb-4">Declarations</h3>
            <div className="space-y-4">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" name="confirmAccurate" checked={formData.confirmAccurate} onChange={handleChange} required className="peer mt-1 w-5 h-5 border-2 border-gray-300 rounded text-[#0075B6] focus:ring-[#0075B6] cursor-pointer" />
                <span className="text-sm text-gray-700 font-medium group-hover:text-black transition-colors pt-1">I confirm that the information provided is accurate.</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} required className="peer mt-1 w-5 h-5 border-2 border-gray-300 rounded text-[#0075B6] focus:ring-[#0075B6] cursor-pointer" />
                <span className="text-sm text-gray-700 font-medium group-hover:text-black transition-colors pt-1">I agree to the training terms and conditions.</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" name="consentComms" checked={formData.consentComms} onChange={handleChange} required className="peer mt-1 w-5 h-5 border-2 border-gray-300 rounded text-[#0075B6] focus:ring-[#0075B6] cursor-pointer" />
                <span className="text-sm text-gray-700 font-medium group-hover:text-black transition-colors pt-1">I consent to receive training-related communications.</span>
              </label>
            </div>
          </div>

          {/* ─── Submit ─── */}
          <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || emailStatus !== "verified" || mobileStatus !== "verified"}
              className="w-full sm:w-auto px-8 py-3 bg-[#0075B6] hover:bg-blue-700 text-white rounded-lg font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30"
            >
              {isSubmitting
                ? <><Loader2 size={18} className="animate-spin" /> Enrolling...</>
                : "Submit Enrollment"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
