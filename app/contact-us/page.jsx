"use client";
import {
  collection,
  doc,
  runTransaction,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

import { Phone, Mail, MapPin, Send, CheckCircle2, MessageCircle } from "lucide-react";
import BusinessHours from "@/app/food-ingredients/components/BusinessHours";
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

        newDocId = `ANG${String(next).padStart(5, "0")}`;

        transaction.set(counterRef, { current: next }, { merge: true });

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
      <div className="relative h-50 sm:h-55 md:h-65 bg-linear-to-r from-[#0072b1] to-[#004e7a]">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          <div className="bg-white rounded-[2rem] p-6 lg:p-8 border border-gray-100 shadow-2xl relative overflow-hidden group h-fit">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#0072b1]" />
            
            <h3 className="text-2xl font-extrabold text-[#0a192f] mb-3">Contact Us</h3>
            <p className="text-gray-500 mb-8 font-medium">Have questions or need a custom quote? Reach out to our experts directly.</p>
            
            <div className="space-y-5">
              <a href="tel:+917782069184" className="flex items-center gap-4 group/link">
                <div className="w-12 h-12 rounded-full bg-[#0072b1]/10 flex items-center justify-center text-[#0072b1] group-hover/link:bg-[#0072b1] group-hover/link:text-white transition-colors shadow-sm shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">Call Us</p>
                  <span className="text-gray-900 font-extrabold group-hover/link:text-[#0072b1] transition-colors text-lg">+91 7782069184</span>
                </div>
              </a>
              
              <a href="mailto:info@anglobalservices.com" className="flex items-center gap-4 group/link">
                <div className="w-12 h-12 rounded-full bg-[#0072b1]/10 flex items-center justify-center text-[#0072b1] group-hover/link:bg-[#0072b1] group-hover/link:text-white transition-colors shadow-sm shrink-0">
                  <Mail size={20} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">Email Us</p>
                  <span className="text-gray-900 font-extrabold group-hover/link:text-[#0072b1] transition-colors text-base sm:text-lg break-all">info@anglobalservices.com</span>
                </div>
              </a>

              <BusinessHours theme="blue" />

              <a href="https://maps.google.com/?q=S-63,+7th+Floor,+Urbtech+NPX,+Noida,+Sector-153,+Uttar+Pradesh,+INDIA,+201310" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group/link">
                <div className="w-12 h-12 rounded-full bg-[#0072b1]/10 flex items-center justify-center text-[#0072b1] group-hover/link:bg-[#0072b1] group-hover/link:text-white transition-colors shadow-sm shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">Address</p>
                  <span className="text-gray-900 font-extrabold group-hover/link:text-[#0072b1] transition-colors text-sm sm:text-base block leading-snug break-words">
                    S-63, 7th Floor, Urbtech NPX,<br />
                    Noida, Sector-153, Uttar Pradesh<br />
                    INDIA, Pin - 201310
                  </span>
                </div>
              </a>

              <div className="pt-6 mt-4 border-t border-gray-100">
                <a href="https://wa.me/917782069184" target="_blank" rel="noopener noreferrer" className="w-full bg-[#0072b1] hover:bg-[#005a8d] text-white font-bold text-lg py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex justify-center items-center gap-3 cursor-pointer">
                  <MessageCircle size={20} className="fill-current" /> Chat with us
                </a>
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
