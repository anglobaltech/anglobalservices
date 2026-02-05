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
      !formData.comment.trim()
    ) {
      setErrorMsg("Please fill required details");
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

      <div className="absolute right-0 bottom-10 w-75 bg-white rounded-xl shadow-xl p-6 animate-slideIn">

        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-[#7b6cf6]">
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
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border rounded-xl px-4 py-1 focus:outline-none focus:ring-2 focus:ring-[#7b6cf6]/40"
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full border rounded-xl px-4 py-1 focus:outline-none focus:ring-2 focus:ring-[#7b6cf6]/40"
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border rounded-xl px-4 py-1 focus:outline-none focus:ring-2 focus:ring-[#7b6cf6]/40"
            />

            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Your Message"
              rows={4}
              className="w-full border rounded-xl px-4 py-1 focus:outline-none focus:ring-2 focus:ring-[#7b6cf6]/40 resize-none"
            />

            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="accent-[#7b6cf6]"
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
                    : "bg-[#7b6cf6] text-white hover:bg-[#6a5be2]"
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
