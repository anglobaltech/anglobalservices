"use client";
import {
  collection,
  doc,
  runTransaction,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { db } from "@/src/lib/firebase";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    industry: "",
    email: "",
    phone: "",
    comment: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.industry.trim()) {
      newErrors.industry = "Service Details is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-\+\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.comment.trim()) {
      newErrors.comment = "Message is required";
    } else if (formData.comment.trim().length < 10) {
      newErrors.comment = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const counterRef = doc(db, "counters", "enquiries");
      let newDocId = "";

      await runTransaction(db, async (transaction) => {
        const counterSnap = await transaction.get(counterRef);

        let current = 0;
        if (counterSnap.exists()) {
          current = counterSnap.data().current || 0;
        }

        const next = current + 1;

        // Generate ID like AN00001
        newDocId = `AN${String(next).padStart(5, "0")}`;

        // Update counter
        transaction.set(counterRef, { current: next }, { merge: true });

        // Create enquiry with custom ID
        const enquiryRef = doc(db, "enquiries", newDocId);
        transaction.set(enquiryRef, {
          name: formData.name,
          industry: formData.industry,
          email: formData.email,
          phone: formData.phone,
          comment: formData.comment,
          createdAt: serverTimestamp(),
          source: "website",
          status: "new",
        });
      });

      await fetch("/api/send-enquiry-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          enquiryId: newDocId,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          industry: formData.industry,
          comment: formData.comment,
        }),
      });

      setIsSubmitted(true);

      setTimeout(() => {
        setFormData({
          name: "",
          industry: "",
          email: "",
          phone: "",
          comment: "",
        });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Firestore Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#f7f9fc] min-h-screen">
      <div className="relative h-55 sm:h-65 md:h-75 bg-linear-to-r from-[#0072b1] to-[#004e7a]">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-white text-2xl items sm:text-3xl md:text-4xl font-bold tracking-tight mb-3">
            CONTACT US
          </h1>
          <p className="text-white/90 text-base sm:text-lg max-w-2xl">
            We're here to help. Reach out to our compliance experts today.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          <div className="bg-white rounded-lg p-6 sm:p-8 md:p-10 shadow-md border border-gray-100 h-fit">
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              Get In Touch
            </h3>
            <p className="text-gray-500 text-sm mb-8">
              We'd love to hear from you
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-[#0072b1]/10 rounded-lg group-hover:bg-[#0072b1] transition-colors">
                  <a
                    href="tel:+917782069184"
                    className="group inline-flex"
                    aria-label="Call us"
                  >
                    <Phone
                      className="text-[#0072b1] group-hover:text-white transition-colors"
                      size={20}
                    />
                  </a>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+917782069184"
                    className="text-gray-900 font-medium hover:text-[#0072b1] transition-colors"
                  >
                    +91 77820 69184
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-[#0072b1]/10 rounded-lg group-hover:bg-[#0072b1] transition-colors">
                  <a
                    href="mailto:info@anglobalservices.com"
                    className="group inline-flex"
                    aria-label="Email us"
                  >
                    <Mail
                      className="text-[#0072b1] group-hover:text-white transition-colors"
                      size={20}
                    />
                  </a>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:info@anglobalservices.com"
                    className="text-gray-900 font-medium hover:text-[#0072b1] transition-colors break-all"
                  >
                    info@anglobalservices.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-[#0072b1]/10 rounded-lg group-hover:bg-[#0072b1] transition-colors mt-1">
                  <MapPin
                    className="text-[#0072b1] group-hover:text-white transition-colors"
                    size={20}
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    Address
                  </p>
                  <p className="text-gray-900 font-medium leading-relaxed">
                    S-63, 7th Floor, Urbtech NPX,
                    <br />
                    Sector 153, Noida,
                    <br />
                    Uttar Pradesh, INDIA – 201310
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-lg p-6 sm:p-8 md:p-12 shadow-md border border-gray-100">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-16 sm:py-20">
                <div className="bg-green-50 rounded-full p-4 mb-6">
                  <CheckCircle2 className="text-green-600" size={48} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600 text-center max-w-md">
                  Your message has been successfully sent. Our team will get
                  back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-8 sm:mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Let's Connect
                  </h2>
                  <p className="text-gray-600">
                    Share your details and our compliance experts will get back
                    to you shortly.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-1.5 border rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.name
                            ? "border-red-300 focus:ring-red-200"
                            : "border-gray-300 focus:border-[#0072b1] focus:ring-[#0072b1]/20"
                        }`}
                        placeholder="Enter Your Full Name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Industry */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Service <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className={`w-full px-4 py-1.5 border rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.industry
                            ? "border-red-300 focus:ring-red-200"
                            : "border-gray-300 focus:border-[#0072b1] focus:ring-[#0072b1]/20"
                        }`}
                        placeholder="Enter Service of Interest"
                      />
                      {errors.industry && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.industry}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-1.5 border rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? "border-red-300 focus:ring-red-200"
                            : "border-gray-300 focus:border-[#0072b1] focus:ring-[#0072b1]/20"
                        }`}
                        placeholder="Enter Your Email Address"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-1.5 border rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.phone
                            ? "border-red-300 focus:ring-red-200"
                            : "border-gray-300 focus:border-[#0072b1] focus:ring-[#0072b1]/20"
                        }`}
                        placeholder="Enter Your Phone Number"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Comment */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows="5"
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}
                      className={`w-full h-30 px-4 py-3 border rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 transition-all resize-none ${
                        errors.comment
                          ? "border-red-300 focus:ring-red-200"
                          : "border-gray-300 focus:border-[#0072b1] focus:ring-[#0072b1]/20"
                      }`}
                      placeholder="Enter Your Message Here"
                    ></textarea>
                    {errors.comment && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.comment}
                      </p>
                    )}
                  </div>

                  {/* Button */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4">
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="bg-[#0072b1] text-white px-8 py-4 rounded-lg font-semibold tracking-wide hover:bg-[#005a8d] cursor-pointer transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} />
                        </>
                      )}
                    </button>
                    <p className="text-sm text-gray-500">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
