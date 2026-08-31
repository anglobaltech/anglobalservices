"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, CheckCircle2, Loader2, User, Mail, Smartphone, MessageSquare, Briefcase } from "lucide-react";
import { doc, runTransaction, serverTimestamp } from "firebase/firestore";
import { db } from "@/src/lib/firebase";

export default function BulkPricingModal({ isOpen, onClose, productName, category = "Food Ingredients" }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const EMPTY_FORM = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    quantity: "",
    message: `I'm interested in bulk pricing for ${productName}...`,
  };

  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setShowSuccess(false);
      setFormData(EMPTY_FORM);
      setIsSubmitting(false);
    } else {
      setFormData({
        ...EMPTY_FORM,
        message: `I'm interested in bulk pricing for ${productName}...`
      });
    }
  }, [isOpen, productName]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const counterRef = doc(db, "counters", "enquiries");
      let newDocId = "";
      const fullName = `${formData.firstName} ${formData.lastName}`.trim();

      const formattedService = `${category} - ${productName} (${formData.quantity})`;

      await runTransaction(db, async (transaction) => {
        const snap = await transaction.get(counterRef);
        const current = snap.exists() ? snap.data().current || 0 : 0;
        const next = current + 1;

        newDocId = `ANG${String(next).padStart(5, "0")}`;

        transaction.set(counterRef, { current: next }, { merge: true });
        transaction.set(doc(db, "enquiries", newDocId), {
          name: fullName,
          email: formData.email,
          phone: formData.phone,
          service: formattedService,
          projectDetails: formData.message,
          createdAt: serverTimestamp(),
          status: "new",
          source: `${category} Quote`,
        });
      });

      await fetch("/api/send-enquiry-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          enquiryId: newDocId,
          name: fullName,
          email: formData.email,
          phone: formData.phone,
          service: formattedService,
          comment: formData.message,
          source: `${category} Quote`,
        }),
      });

      setShowSuccess(true);
    } catch (err) {
      console.error(err);
      alert("Something went wrong while submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl animate-in fade-in zoom-in-95">
        {/* Header */}
        <div className="sticky top-0 z-20 bg-[#0075B6] px-6 py-5 rounded-t-2xl flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-white">Request Bulk Pricing</h3>
            <p className="text-blue-100 text-sm mt-1">{productName}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          {showSuccess ? (
            <div className="text-center py-10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 size={44} className="text-green-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Request Received!</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your bulk pricing request for {productName} has been submitted successfully. Our sales team will review your requirements and contact you within 24 hours.
              </p>
              <button
                onClick={onClose}
                className="bg-[#0075B6] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-700">
                    <User size={14} className="text-[#0075B6]" /> First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] transition-all text-sm"
                    placeholder="First name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-700">
                    <User size={14} className="text-[#0075B6]" /> Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] transition-all text-sm"
                    placeholder="Last name"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-700">
                  <Mail size={14} className="text-[#0075B6]" /> Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] transition-all text-sm"
                  placeholder="your@company.com"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-700">
                  <Smartphone size={14} className="text-[#0075B6]" /> Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] transition-all text-sm"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Quantity */}
              <div className="space-y-2">
                <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-700">
                  <Briefcase size={14} className="text-[#0075B6]" /> Quantity Required <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] transition-all text-sm"
                  placeholder="e.g. 500 kg, 1 ton"
                />
              </div>

              {/* Project Details */}
              <div className="space-y-2">
                <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-700">
                  <MessageSquare size={14} className="text-[#0075B6]" /> Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#0075B6] focus:ring-1 focus:ring-[#0075B6] transition-all resize-none text-sm"
                  placeholder={`I'm interested in bulk pricing for ${productName}...`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0075B6] hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-base py-4 rounded-lg shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> Submitting...
                  </>
                ) : (
                  "Request Quote"
                )}
              </button>

              <p className="text-xs text-gray-400 text-center leading-relaxed">
                By submitting this form, you agree to be contacted by AN Global Services regarding your inquiry.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
