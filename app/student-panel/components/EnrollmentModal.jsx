"use client";

import { useState, useRef, useEffect } from "react";
import { X, CheckCircle2, Loader2, User, Phone, Mail, MapPin, Calendar, Award, MessageCircle } from "lucide-react";
import { auth } from "@/src/lib/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import Link from "next/link";

// ── Default empty form ──
const EMPTY_FORM = {
  firstName: "",
  middleName: "",
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
};

export default function EnrollmentModal({ isOpen, onClose, showNotification }) {
  const [formData, setFormData] = useState(EMPTY_FORM);

  // Email OTP
  const [emailStatus, setEmailStatus]       = useState("idle");
  const [emailOtp, setEmailOtp]             = useState("");
  const [emailHash, setEmailHash]           = useState("");
  const [emailExpiresAt, setEmailExpiresAt] = useState(null);

  // Mobile OTP
  const [mobileStatus, setMobileStatus]     = useState("idle");
  const [mobileOtp, setMobileOtp]           = useState("");
  const confirmationResultRef               = useRef(null);
  const recaptchaVerifierRef                = useRef(null);
  const recaptchaContainerRef               = useRef(null);

  // UI States
  const [isSubmitting, setIsSubmitting]     = useState(false);
  const [showSuccess, setShowSuccess]       = useState(false);
  const [successStudentId, setSuccessStudentId] = useState("");

  // ── Safely destroy reCAPTCHA ──
  const destroyRecaptcha = () => {
    if (recaptchaVerifierRef.current) {
      try { recaptchaVerifierRef.current.clear(); } catch (_) {}
      recaptchaVerifierRef.current = null;
    }
  };

  // ── Initialize invisible reCAPTCHA once modal opens ──
  useEffect(() => {
    if (!isOpen) return;
    const t = setTimeout(() => {
      if (recaptchaContainerRef.current && !recaptchaVerifierRef.current) {
        try {
          recaptchaVerifierRef.current = new RecaptchaVerifier(
            auth,
            recaptchaContainerRef.current,
            { size: "invisible" }
          );
          recaptchaVerifierRef.current.render();
        } catch (err) {
          console.error("reCAPTCHA init error:", err);
        }
      }
    }, 500);
    return () => clearTimeout(t);
  }, [isOpen]);

  // ── Full reset when modal closes ──
  useEffect(() => {
    if (!isOpen) {
      destroyRecaptcha();
      setMobileStatus("idle");
      setMobileOtp("");
      setEmailStatus("idle");
      setEmailOtp("");
      setEmailHash("");
      setEmailExpiresAt(null);
      confirmationResultRef.current = null;
      setShowSuccess(false);
      setSuccessStudentId("");
      setFormData(EMPTY_FORM); // ← reset form to empty on close
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

  // ── Mobile: max 10 digits ──
  const handleMobileChange = (e) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => ({ ...prev, mobile: digits }));
  };

  // ── Pincode: max 6 digits ──
  const handlePostalChange = (e) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 6);
    setFormData((prev) => ({ ...prev, postalCode: digits }));
  };

  // ══════════════════════════════════════════
  //  MOBILE OTP — Send
  // ══════════════════════════════════════════
  const handleSendMobileOtp = async () => {
    const rawMobile = formData.mobile.trim();
    if (!rawMobile) return showNotification("Please enter your mobile number first.", "error");
    if (rawMobile.length !== 10) return showNotification("Please enter a valid 10-digit mobile number.", "error");

    const phone = `+91${rawMobile}`;
    setMobileStatus("loading");

    try {
      if (!recaptchaVerifierRef.current) {
        recaptchaVerifierRef.current = new RecaptchaVerifier(
          auth, recaptchaContainerRef.current, { size: "invisible" }
        );
        await recaptchaVerifierRef.current.render();
      }
      const confirmationResult = await signInWithPhoneNumber(auth, phone, recaptchaVerifierRef.current);
      confirmationResultRef.current = confirmationResult;
      setMobileStatus("sent");
      showNotification("OTP sent to your mobile number!", "success");
    } catch (err) {
      console.error("Firebase Phone Auth error:", err);
      destroyRecaptcha();
      setMobileStatus("idle");
      const msg =
        err.code === "auth/invalid-phone-number" ? "Invalid phone number." :
        err.code === "auth/too-many-requests" ? "Too many attempts. Please wait and try again." :
        err.code === "auth/invalid-app-credential" ? "Domain not authorized. Please contact support." :
        `Failed to send OTP: ${err.code || err.message}`;
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
    setTimeout(async () => {
      try {
        recaptchaVerifierRef.current = new RecaptchaVerifier(
          auth, recaptchaContainerRef.current, { size: "invisible" }
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
    if (!mobileOtp.trim()) return showNotification("Please enter the OTP sent to your mobile.", "error");
    if (!confirmationResultRef.current) return showNotification("Session expired. Please request OTP again.", "error");
    setMobileStatus("verifying");
    try {
      await confirmationResultRef.current.confirm(mobileOtp.trim());
      setMobileStatus("verified");
      showNotification("Mobile number verified successfully!", "success");
    } catch (err) {
      console.error("Firebase confirm OTP error:", err);
      setMobileStatus("sent");
      const msg =
        err.code === "auth/code-expired" ? "OTP expired. Please request a new one." :
        err.code === "auth/invalid-verification-code" ? "Incorrect OTP. Please check and try again." :
        "Verification failed. Please try again.";
      showNotification(msg, "error");
    }
  };

  // ══════════════════════════════════════════
  //  EMAIL OTP — Send
  // ══════════════════════════════════════════
  const handleSendEmailOtp = async () => {
    if (!formData.email) return showNotification("Please enter your email address first.", "error");
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
    if (!emailOtp.trim()) return showNotification("Please enter the OTP sent to your email.", "error");
    setEmailStatus("verifying");
    try {
      const res = await fetch("/api/auth/verify-email-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, otp: emailOtp.trim(), hash: emailHash, expiresAt: emailExpiresAt }),
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
      return showNotification("Please verify both Email and Mobile Number before submitting.", "error");
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
        // ── Duplicate check — show special notification ──
        if (data.duplicate) {
          showNotification(data.error, "error");
        } else {
          showNotification(data.error || "Submission failed. Please try again.", "error");
        }
        return;
      }
      // ── Success — show popup ──
      setSuccessStudentId(data.studentId);
      setShowSuccess(true);
    } catch (err) {
      console.error("Enrollment submit error:", err);
      showNotification("Network error. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Handle success popup close ──
  const handleSuccessClose = () => {
    setShowSuccess(false);
    onClose(); // closes modal and resets form via useEffect
  };

  // ── Input classes ──
  const inputCls = "w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-[#0075B6] focus:ring-2 focus:ring-[#0075B6]/20 outline-none transition-all bg-white text-gray-800 placeholder:text-gray-400 text-sm";
  const labelCls = "block text-sm font-semibold text-gray-700 mb-1.5";
  const sectionHeadCls = "flex items-center gap-3 mb-5";

  // ══════════════════════════════════════════
  //  RENDER
  // ══════════════════════════════════════════
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-4"
      // ── Prevent background page scroll when touching overlay ──
      onWheel={(e) => e.stopPropagation()}
    >
      {/* Invisible reCAPTCHA anchor — zero size, always in DOM */}
      <div
        ref={recaptchaContainerRef}
        style={{ position: "fixed", bottom: 0, left: 0, width: 0, height: 0, overflow: "hidden", zIndex: -1 }}
      />

      {/* ════════════════════════════════════
          SUCCESS POPUP
      ════════════════════════════════════ */}
      {showSuccess && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center animate-in zoom-in-95 duration-300">
            {/* Green circle with checkmark */}
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={52} className="text-green-500" strokeWidth={1.5} />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">Enrollment Successful!</h2>
            <p className="text-gray-500 text-sm mb-4">Your enrollment has been submitted successfully.</p>

            {/* Student ID badge */}
            <div className="bg-[#0075B6]/10 border border-[#0075B6]/20 rounded-2xl px-6 py-4 mb-6 inline-block w-full">
              <p className="text-xs text-[#0075B6] font-semibold uppercase tracking-wider mb-1">Your Student ID</p>
              <p className="text-3xl font-extrabold text-[#0075B6]">{successStudentId}</p>
              <p className="text-xs text-gray-500 mt-1">Please save this for future reference</p>
            </div>

            <p className="text-gray-600 text-sm mb-8 leading-relaxed">
              Our team will contact you shortly on your WhatsApp number to confirm your training schedule.
            </p>

            {/* Two buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact-us"
                onClick={handleSuccessClose}
                className="flex-1 flex items-center justify-center gap-2 bg-[#0075B6] hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all cursor-pointer shadow-md shadow-blue-500/20"
              >
                <MessageCircle size={18} />
                Contact Us
              </Link>
              <button
                type="button"
                onClick={handleSuccessClose}
                className="flex-1 flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all cursor-pointer"
              >
                <X size={18} />
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ════════════════════════════════════
          MAIN MODAL
      ════════════════════════════════════ */}
      <div className="bg-white rounded-3xl w-full max-w-4xl relative shadow-2xl flex flex-col"
        style={{ maxHeight: "92vh" }}
      >
        {/* ── Sticky Header ── */}
        <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-gray-100 shrink-0 bg-gradient-to-r from-[#0075B6] to-blue-700 rounded-t-3xl">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white">Training Enrollment Form</h2>
            <p className="text-blue-100 text-xs mt-0.5">Fill in your details to enroll in our free training program</p>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white hover:bg-white/20 rounded-full p-2 transition-all cursor-pointer shrink-0"
          >
            <X size={22} />
          </button>
        </div>

        {/* Progress indicator */}
        <div className="flex px-6 md:px-8 py-3 gap-2 bg-blue-50/50 border-b border-gray-100 shrink-0">
          {["Personal Details", "Contact Verification", "Address", "Declarations"].map((step, i) => (
            <div key={i} className="flex items-center gap-1.5 flex-1">
              <div className="w-5 h-5 rounded-full bg-[#0075B6] flex items-center justify-center shrink-0">
                <span className="text-white text-[10px] font-bold">{i + 1}</span>
              </div>
              <span className="text-[10px] font-medium text-gray-500 hidden sm:block truncate">{step}</span>
              {i < 3 && <div className="h-px bg-gray-200 flex-1 hidden sm:block" />}
            </div>
          ))}
        </div>

        {/* ── Scrollable Form Body — ONLY this div scrolls ── */}
        <div
          className="overflow-y-auto flex-1 px-6 md:px-8 py-6"
          style={{ overscrollBehavior: "contain" }}
        >
          <form onSubmit={handleSubmitEnrollment} className="space-y-8" autoComplete="off">

            {/* ══════════════ 1. PERSONAL DETAILS ══════════════ */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 md:p-6">
              <div className={sectionHeadCls}>
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <User size={18} className="text-[#0075B6]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">Personal Details</h3>
                  <p className="text-xs text-gray-400">Fields marked * are required</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className={labelCls}>First Name *</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="Enter first name" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Middle Name <span className="text-gray-400 font-normal text-xs">(optional)</span></label>
                  <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} placeholder="Enter middle name" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Last Name *</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Enter last name" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Date of Birth *</label>
                  <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className={inputCls + " text-gray-700"} />
                </div>
                <div>
                  <label className={labelCls}>Gender *</label>
                  <select name="gender" value={formData.gender} onChange={handleChange} required className={inputCls}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Qualification *</label>
                  <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} required placeholder="Highest Degree/Diploma" className={inputCls} />
                </div>
                <div className="md:col-span-3">
                  <label className={labelCls}>Organization <span className="text-gray-400 font-normal text-xs">(optional)</span></label>
                  <input type="text" name="organization" value={formData.organization} onChange={handleChange} placeholder="Company or College name" className={inputCls} />
                </div>
              </div>
            </div>

            {/* ══════════════ 2. CONTACT VERIFICATION ══════════════ */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 md:p-6">
              <div className={sectionHeadCls}>
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-[#0075B6]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">Contact Verification</h3>
                  <p className="text-xs text-gray-400">Verify your mobile and email via OTP</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Mobile */}
                <div className={`rounded-2xl border p-4 transition-all ${
                  mobileStatus === "verified" ? "border-green-300 bg-green-50/40" : "border-gray-200 bg-gray-50/50"
                }`}>
                  <label className={labelCls}>Mobile Number * <span className="text-gray-400 font-normal text-xs">(10 digits)</span></label>
                  <div className="flex gap-2">
                    <div className="flex items-center bg-gray-100 border border-gray-200 rounded-xl px-3 text-gray-600 text-sm font-medium shrink-0">
                      +91
                    </div>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleMobileChange}
                      disabled={mobileStatus !== "idle"}
                      required
                      placeholder="XXXXXXXXXX"
                      maxLength={10}
                      inputMode="numeric"
                      className={inputCls + " disabled:bg-gray-100 disabled:text-gray-400"}
                    />
                    {mobileStatus === "idle" && (
                      <button type="button" onClick={handleSendMobileOtp}
                        className="bg-gray-900 hover:bg-black text-white px-4 py-2.5 text-sm rounded-xl font-semibold whitespace-nowrap transition-all cursor-pointer shadow-sm shrink-0">
                        Get OTP
                      </button>
                    )}
                    {mobileStatus === "loading" && (
                      <div className="flex items-center justify-center px-4 bg-gray-100 rounded-xl border border-gray-200 shrink-0">
                        <Loader2 size={20} className="animate-spin text-[#0075B6]" />
                      </div>
                    )}
                  </div>

                  {(mobileStatus === "sent" || mobileStatus === "verifying") && (
                    <div className="mt-3 animate-in slide-in-from-top-2 fade-in duration-300">
                      <p className="text-xs text-green-700 font-semibold mb-2 flex items-center gap-1">
                        <CheckCircle2 size={13} /> OTP sent successfully. Enter below:
                      </p>
                      <div className="flex gap-2">
                        <input
                          type="text" inputMode="numeric" maxLength={6}
                          placeholder="• • • • • •"
                          value={mobileOtp}
                          onChange={(e) => setMobileOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                          autoComplete="one-time-code"
                          className={inputCls + " font-mono text-xl tracking-[0.5em] text-center"}
                        />
                        <button type="button" onClick={handleVerifyMobileOtp}
                          disabled={mobileStatus === "verifying"}
                          className="bg-[#0075B6] hover:bg-blue-700 text-white px-5 py-2.5 text-sm rounded-xl font-semibold transition-all cursor-pointer shadow-sm disabled:opacity-60 shrink-0">
                          {mobileStatus === "verifying" ? <Loader2 size={16} className="animate-spin" /> : "Verify"}
                        </button>
                      </div>
                      <button type="button" onClick={handleResendMobileOtp}
                        className="text-xs text-[#0075B6] hover:text-blue-800 underline mt-2 cursor-pointer transition-colors">
                        Resend OTP
                      </button>
                    </div>
                  )}
                  {mobileStatus === "verified" && (
                    <div className="mt-3 flex items-center gap-2 text-green-700 text-sm font-semibold">
                      <CheckCircle2 size={17} /> Mobile Verified!
                    </div>
                  )}
                </div>

                {/* Email */}
                <div className={`rounded-2xl border p-4 transition-all ${
                  emailStatus === "verified" ? "border-green-300 bg-green-50/40" : "border-gray-200 bg-gray-50/50"
                }`}>
                  <label className={labelCls}>Email Address *</label>
                  <div className="flex gap-2">
                    <input
                      type="email" name="email" value={formData.email}
                      onChange={handleChange} disabled={emailStatus === "verified"}
                      required placeholder="yourname@domain.com"
                      className={inputCls + " disabled:bg-gray-100 disabled:text-gray-400"}
                    />
                    {emailStatus !== "verified" && (
                      <button type="button" onClick={handleSendEmailOtp}
                        disabled={emailStatus === "loading"}
                        className="bg-gray-900 hover:bg-black text-white px-4 py-2.5 text-sm rounded-xl font-semibold whitespace-nowrap disabled:opacity-60 transition-all cursor-pointer shadow-sm shrink-0">
                        {emailStatus === "loading" ? <Loader2 size={16} className="animate-spin" /> :
                         emailStatus === "sent" || emailStatus === "verifying" ? "Resend" : "Get OTP"}
                      </button>
                    )}
                  </div>

                  {(emailStatus === "sent" || emailStatus === "verifying") && (
                    <div className="mt-3 animate-in slide-in-from-top-2 fade-in duration-300">
                      <p className="text-xs text-green-700 font-semibold mb-2 flex items-center gap-1">
                        <CheckCircle2 size={13} /> OTP sent to your email. Enter below:
                      </p>
                      <div className="flex gap-2">
                        <input
                          type="text" inputMode="numeric" maxLength={6}
                          placeholder="• • • • • •"
                          value={emailOtp}
                          onChange={(e) => setEmailOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                          autoComplete="one-time-code"
                          className={inputCls + " font-mono text-xl tracking-[0.5em] text-center"}
                        />
                        <button type="button" onClick={handleVerifyEmailOtp}
                          disabled={emailStatus === "verifying"}
                          className="bg-[#0075B6] hover:bg-blue-700 text-white px-5 py-2.5 text-sm rounded-xl font-semibold transition-all cursor-pointer shadow-sm disabled:opacity-60 shrink-0">
                          {emailStatus === "verifying" ? <Loader2 size={16} className="animate-spin" /> : "Verify"}
                        </button>
                      </div>
                    </div>
                  )}
                  {emailStatus === "verified" && (
                    <div className="mt-3 flex items-center gap-2 text-green-700 text-sm font-semibold">
                      <CheckCircle2 size={17} /> Email Verified!
                    </div>
                  )}
                </div>

                {/* WhatsApp */}
                <div className="md:col-span-2">
                  <label className={labelCls}>WhatsApp Number *</label>
                  <div className="flex gap-2 md:max-w-sm">
                    <div className="flex items-center bg-gray-100 border border-gray-200 rounded-xl px-3 text-gray-600 text-sm font-medium shrink-0">
                      +91
                    </div>
                    <input type="tel" name="whatsapp" value={formData.whatsapp}
                      onChange={(e) => setFormData(p => ({ ...p, whatsapp: e.target.value.replace(/\D/g,"").slice(0,10) }))}
                      required placeholder="WhatsApp number"
                      maxLength={10} inputMode="numeric"
                      className={inputCls} />
                  </div>
                </div>
              </div>
            </div>

            {/* ══════════════ 3. ADDRESS & AVAILABILITY ══════════════ */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 md:p-6">
              <div className={sectionHeadCls}>
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[#0075B6]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">Address & Availability</h3>
                  <p className="text-xs text-gray-400">Your location and preferred start date</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className={labelCls}>Full Address *</label>
                  <input type="text" name="address" value={formData.address} onChange={handleChange} required placeholder="House No., Street, Area" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>City *</label>
                  <input type="text" name="city" value={formData.city} onChange={handleChange} required placeholder="Your city" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>State *</label>
                  <input type="text" name="state" value={formData.state} onChange={handleChange} required placeholder="Your state" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Country *</label>
                  <input type="text" name="country" value={formData.country} onChange={handleChange} required placeholder="Your country" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Postal Code * <span className="text-gray-400 font-normal text-xs">(6 digits)</span></label>
                  <input type="text" name="postalCode" value={formData.postalCode}
                    onChange={handlePostalChange}
                    required placeholder="6-digit PIN code"
                    maxLength={6} inputMode="numeric"
                    className={inputCls} />
                </div>
                <div className="md:col-span-2">
                  <label className={labelCls}>Available Date to Start Training *</label>
                  <div className="flex items-center gap-2 md:max-w-xs">
                    <Calendar size={16} className="text-gray-400 shrink-0" />
                    <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required className={inputCls + " text-gray-700"} />
                  </div>
                </div>
              </div>
            </div>

            {/* ══════════════ 4. DECLARATIONS ══════════════ */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-2xl border border-blue-100 p-5 md:p-6">
              <div className={sectionHeadCls}>
                <div className="w-9 h-9 rounded-xl bg-[#0075B6]/10 flex items-center justify-center shrink-0">
                  <Award size={18} className="text-[#0075B6]" />
                </div>
                <h3 className="text-base font-bold text-gray-900">Declarations</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: "confirmAccurate", text: "I confirm that the information provided above is accurate and complete." },
                  { name: "agreeTerms",      text: "I agree to the training terms and conditions of AN Global Services." },
                  { name: "consentComms",    text: "I consent to receive training-related communications via email and WhatsApp." },
                ].map(({ name, text }) => (
                  <label key={name} className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative mt-0.5 shrink-0">
                      <input type="checkbox" name={name}
                        checked={formData[name]} onChange={handleChange} required
                        className="w-5 h-5 rounded border-2 border-gray-300 text-[#0075B6] focus:ring-[#0075B6] cursor-pointer accent-[#0075B6]" />
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors leading-relaxed">{text}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* ══════════════ SUBMIT ROW ══════════════ */}
            <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-2 pb-2">
              <button type="button" onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 border-2 border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 hover:border-gray-300 font-semibold transition-all cursor-pointer">
                Cancel
              </button>
              <button type="submit"
                disabled={isSubmitting || emailStatus !== "verified" || mobileStatus !== "verified"}
                className="w-full sm:w-auto px-8 py-3 bg-[#0075B6] hover:bg-blue-700 text-white rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 cursor-pointer">
                {isSubmitting
                  ? <><Loader2 size={18} className="animate-spin" /> Submitting...</>
                  : <><Award size={18} /> Submit Enrollment</>}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
