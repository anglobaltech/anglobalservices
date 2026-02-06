"use client";

import { X, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import useEnquiryForm from "@/hooks/useEnquiryForm";

export default function ContactSlideForm({ open, onClose }) {
  const {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    isSubmitted,
    resetForm,
  } = useEnquiryForm();

  const [agreed, setAgreed] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        onClose();
        resetForm();
        setAgreed(false);
        setErrorMsg("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitted, onClose, resetForm]);

  if (!open) return null;

  const validateForm = () => {
    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim() ||
      !formData.service.trim()
    ) {
      setErrorMsg("Please fill required details");
      return false;
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      setErrorMsg("Please enter a valid 10 digit phone number");
      return false;
    }

    if (!agreed) {
      setErrorMsg("Please accept terms and conditions");
      return false;
    }

    setErrorMsg("");
    return true;
  };

  const onSubmitClick = () => {
    if (isSubmitting) return;
    if (!validateForm()) return;

    handleSubmit();
  };

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/30"
        onClick={() => {
          onClose();
          resetForm();
          setAgreed(false);
          setErrorMsg("");
        }}
      />

      <div className="absolute right-0 bottom-10 w-73 bg-white rounded-xl shadow-xl p-6 animate-slideIn">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-[#0072b1]">
            Contact Us
          </h3>
          <button
            onClick={() => {
              onClose();
              resetForm();
              setAgreed(false);
              setErrorMsg("");
            }}
          >
            <X className="text-gray-400 cursor-pointer hover:text-black" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <CheckCircle size={48} className="text-green-500 mb-4" />
            <p className="text-lg font-semibold text-gray-900">
              Your enquiry has been sent
            </p>
            <p className="text-sm text-gray-600 mt-1">
              We will contact you soon.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* NAME */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full border rounded-xl px-4 py-1 focus:outline-none focus:ring-2 focus:ring-[#7b6cf6]/40"
            />

            {/* PHONE */}
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              required
              pattern="[0-9]{10}"
              maxLength={10}
              inputMode="numeric"
              className="w-full border rounded-xl px-4 py-1 focus:outline-none focus:ring-2 focus:ring-[#7b6cf6]/40"
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full border rounded-xl px-4 py-1 focus:outline-none focus:ring-2 focus:ring-[#7b6cf6]/40"
            />

            {/* SERVICE */}
            <textarea
              name="service"
              value={formData.service}
              onChange={handleChange}
              placeholder="Write down which service you are interested in..."
              rows={3}
              required
              className="w-full border rounded-xl px-4 py-1 focus:outline-none focus:ring-2 focus:ring-[#7b6cf6]/40 resize-none"
            />

            {/* TERMS */}
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="accent-blue-900"
                required
              />
              I agree to the terms and conditions.
            </label>

            {errorMsg && (
              <p className="text-sm text-red-600 font-medium">
                {errorMsg}
              </p>
            )}

            <button
              onClick={onSubmitClick}
              disabled={isSubmitting}
              className={`
                w-full py-2.5 rounded-full font-semibold transition
                cursor-pointer
                ${
                  isSubmitting
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-[#0072b1] text-white hover:bg-[#00466b]"
                }
              `}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
