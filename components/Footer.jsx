"use client";

import { useState } from "react";
import { doc, runTransaction, serverTimestamp } from "firebase/firestore";
import { db } from "@/src/lib/firebase";
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      const captchaRes = await fetch("/api/verify-captcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: captchaToken }),
      });

      let enquiryId = "";
      const counterRef = doc(db, "counters", "enquiries");

      await runTransaction(db, async (transaction) => {
        const snap = await transaction.get(counterRef);
        const current = snap.exists() ? snap.data().current || 0 : 0;
        const next = current + 1;

        enquiryId = `AN${String(next).padStart(5, "0")}`;

        transaction.set(counterRef, { current: next }, { merge: true });

        transaction.set(doc(db, "enquiries", enquiryId), {
          enquiryId,
          service: formData.service,
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
          ...formData,
          source: "website",
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
      <section className="relative w-full overflow-hidden bg-gray-900">
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-gray-900 via-gray-800/70 to-gray-900" />

        {/* Soft Dark Glows */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-8 md:py-10 text-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <ChevronRight className="text-cyan-400 w-5 h-5" />
                </div>
                <h2 className="text-3xl font-bold text-white">
                  Request a Consultation Call
                </h2>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                Get expert guidance on certifications, approvals, and
                compliance. Share your details and our consultants will connect
                with you shortly.
              </p>
            </div>

            {/* Right Form */}
            <div className="bg-gray-900 border border-gray-900 rounded-xl shadow-xl p-4 md:p-6 text-gray-100">
              <p className="text-sm font-semibold text-gray-300 mb-3">
                Write your requirement and request a call back
              </p>

              <form
                onSubmit={handleSubmit} 
                className="grid grid-cols-1 md:grid-cols-2 gap-3"
              >
                {/* Row 1 – Service */}
                <input
                  type="text"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  placeholder="Required Service"
                  required
                  className="w-full bg-gray-900 border border-gray-700 text-gray-400 placeholder-gray-500 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />

                {/* Row 1 – Name */}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-gray-900 border border-gray-700 text-gray-400 placeholder-gray-500 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />

                {/* Row 2 – Email */}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email Address"
                  required
                  className="w-full bg-gray-900 border border-gray-700 text-gray-400 placeholder-gray-500 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />

                {/* Row 2 – Phone */}
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10 Digit Mobile No."
                  required
                  pattern="[0-9]{10}"
                  className="w-full bg-gray-900 border border-gray-700 text-gray-400 placeholder-gray-500 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="md:col-span-2 mt-1 bg-cyan-600 hover:bg-cyan-700 text-white cursor-pointer font-semibold py-2.5 rounded-md transition-all duration-300 shadow-md disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "SUBMIT"}
                </button>

                {success && (
                  <p className="md:col-span-2 text-green-400 text-xs font-semibold mt-1">
                    Your enquiry has been sent. We will respond shortly.
                  </p>
                )}

                {error && (
                  <p className="md:col-span-2 text-red-400 text-xs font-semibold mt-1">
                    {error}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Image
              src="/company-logo.png"
              alt="AN Global Services"
              width={260}
              height={80}
              className="mb-6 bg-white object-contain"
            />

            <h3 className="text-white font-semibold mb-4">Contact Info</h3>

            <div className="space-y-4 text-sm">
              {/* Phone 1 */}
              <a
                href="tel:+917782069184"
                className="flex items-start gap-3 group"
              >
                <Image src="/call-image.png" alt="Call" width={18} height={18} />
                <span className="text-white group-hover:text-[#0072b1]">
                  +91 7782069184
                </span>
              </a>

              {/* Phone 2 */}
              <a
                href="tel:+919958820184"
                className="flex items-start gap-3 group"
              >
                <Image src="/call-image.png" alt="Call" width={18} height={18} />
                <span className="text-white group-hover:text-[#0072b1]">
                  +91 9958820184
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@anglobalservices.com"
                className="flex items-start gap-3 group"
              >
                <Image src="/email.png" alt="Email" width={18} height={18} />
                <span className="text-white group-hover:text-[#0072b1] break-all">
                  info@anglobalservices.com
                </span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3">
                <span>📍</span>
                <span className="text-white leading-5">
                  S-63, 7th Floor, Urbtech NPX, Noida <br />
                  Sector-153, Uttar Pradesh, INDIA <br />
                  Pin – 201310
                </span>
              </div>

              {/* ISO Image */}
              <div className="mt-6">
                <Image
                  src="/iso.png"
                  alt="ISO Certified"
                  width={160}
                  height={160}
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Useful Links</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-white cursor-pointer">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/aboutus"
                  className="hover:text-white cursor-pointer"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-white cursor-pointer"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href="/term-conditions"
                  className="hover:text-white cursor-pointer"
                >
                  Terms & Condition
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Serving Countries</h3>

            <div className="grid grid-cols-2 gap-y-3 text-sm">
              <span>India</span>
              <span>Mexico</span>
              <span>South Africa</span>
              <span>China</span>
              <span>Nepal</span>
              <span>Thailand</span>
              <span>Hongkong</span>
              <span>Japan</span>
              <span>Singapore</span>
              <span>Italy</span>
              <span>Greece</span>
              <span>South Korea</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Map</h3>

            <div className="w-full h-50 rounded overflow-hidden mb-6">
              <iframe
                src="https://www.google.com/maps?q=NPX%20Tower%20Noida&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              ></iframe>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/anglobalservices"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 bg-[#4267B2] hover:border-blue-600 hover:text-white transition"
              >
                <FaFacebookF size={16} />
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com/anglobalservic1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 bg-black hover:border-black hover:text-white transition"
              >
                <FaXTwitter size={16} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/an-global-services/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 bg-[#0077B5] hover:border-blue-700 hover:text-white transition"
              >
                <FaLinkedinIn size={16} />
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/anglobalservices/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:border-transparent hover:text-white transition"
              >
                <FaInstagram size={16} />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@anglobalservicespvtltd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 bg-red-600 hover:border-red-600 hover:text-white transition"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-2 text-center text-sm text-gray-400">
        © 2026. A N GLOBAL SERVICES PVT. LTD. All Rights Reserved.
      </div>
    </footer>
  );
}
