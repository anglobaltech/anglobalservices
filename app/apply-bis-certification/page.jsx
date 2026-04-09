"use client";
import { useState, useEffect } from "react";
import { useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import ReCAPTCHA from "react-google-recaptcha";

const faqs = [
  {
    question: "What is BIS ISI Certification?",
    answer:
      "BIS ISI Certification is a quality and safety certification issued by the Bureau of Indian Standards (BIS). It ensures that a product meets Indian safety, performance, and quality standards. The ISI mark is mandatory for many products like electrical appliances, cement, steel, and kitchen items. Without ISI certification, these products cannot be legally sold in the Indian market.",
  },
  {
    question: "What is BIS CRS Registration?",
    answer:
      "BIS CRS (Compulsory Registration Scheme) is required for electronic and IT products to ensure they meet safety standards. Products such as mobile phones, LED lights, laptops, and power banks must be registered under CRS before selling in India. The process includes product testing in BIS-approved labs and online registration on the BIS portal.",
  },
  {
    question: "What is FMCS in BIS Certification?",
    answer:
      "FMCS (Foreign Manufacturers Certification Scheme) is a BIS certification scheme designed for foreign manufacturers. It allows companies outside India to certify their products as per Indian standards and sell them in India. Under FMCS, the manufacturer must appoint an Authorized Indian Representative (AIR) who handles compliance and communication with BIS authorities.",
  },
  {
    question: "Which products require BIS certification?",
    answer:
      "Many products require BIS certification depending on government regulations. These include electronics (like mobile phones and LED lights), electrical appliances (like irons and heaters), construction materials (like cement and steel), toys, and various consumer goods. The requirement depends on whether the product falls under mandatory BIS schemes like ISI or CRS.",
  },
  {
    question: "How long does BIS certification take?",
    answer:
      "The time required for BIS certification depends on the type of certification and product category. CRS registration usually takes around 20–45 days, while ISI certification may take 2–4 months due to factory inspection and testing. FMCS certification for foreign manufacturers can take 3–6 months depending on documentation and audit processes.",
  },
  {
    question: "Is BIS certification mandatory in India?",
    answer:
      "Yes, BIS certification is mandatory for many products as per Indian government regulations. If a product falls under a mandatory BIS scheme, it cannot be manufactured, imported, or sold in India without certification. Non-compliance can lead to penalties, product seizure, or legal action.",
  },
  {
    question: "Can foreign companies apply for BIS certification?",
    answer:
      "Yes, foreign manufacturers can apply for BIS certification under the FMCS scheme. They must appoint an Authorized Indian Representative (AIR) who will act on their behalf in India. The process includes product testing, documentation, and factory inspection by BIS officials.",
  },
  {
    question: "What is the difference between ISI and CRS?",
    answer:
      "ISI and CRS are two different BIS certification schemes. ISI certification is mainly for products like cement, steel, and household appliances, and it involves factory inspection and ongoing compliance. CRS certification is for electronics and IT products and is based on product testing in BIS-approved labs without factory inspection. Both ensure product safety but follow different processes.",
  },
];

export default function BISLandingPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const contactRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    comment: "",
  });

  useEffect(() => {
    document.body.classList.add("ads-page");

    return () => {
      document.body.classList.remove("ads-page");
    };
  }, []);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || form.name.trim().length < 3) {
      setError("Please enter a valid name (min 3 characters)");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }

    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!form.service) {
      setError("Please select a service");
      return;
    }

    if (!captchaValue) {
      setError("Please verify captcha");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const { db } = await import("@/src/lib/firebase");
      const { doc, runTransaction, serverTimestamp } =
        await import("firebase/firestore");

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
          name: form.name,
          phone: form.phone,
          email: form.email,
          service: form.service,
          comment: form.comment,
          source: "google-ads",
          status: "new",
          createdAt: serverTimestamp(),
        });
      });

      await fetch("/api/save-to-sheet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          enquiryId,
          name: form.name,
          phone: form.phone,
          email: form.email,
          service: form.service,
          comment: form.comment,
          token: captchaValue,
          hiddenField: "",
        }),
      });

      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "conversion", {
          send_to: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION,
        });
      }

      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);

        setForm({
          name: "",
          phone: "",
          email: "",
          service: "",
          comment: "",
        });
      }, 5000);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSimpleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || form.name.trim().length < 3) {
      setError("Valid name required");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      setError("Valid phone required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const { db } = await import("@/src/lib/firebase");
      const { doc, runTransaction, serverTimestamp } =
        await import("firebase/firestore");

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
          name: form.name,
          phone: form.phone,
          comment: form.comment,
          source: "simple-form",
          status: "new",
          createdAt: serverTimestamp(),
        });
      });

      await fetch("/api/save-to-sheet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          enquiryId,
          name: form.name,
          phone: form.phone,
          email: "",
          service: "",
          comment: form.comment,
          token: "no-captcha",
          hiddenField: "",
        }),
      });
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);

        setForm({
          name: "",
          phone: "",
          comment: "",
        });
      }, 5000);
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <style jsx global>{`
        .layout-item {
          display: none !important;
        }
      `}</style>

      <main style={{ fontFamily: "Arial, sans-serif" }}>
        <div className="bg-[#003B7E] text-white text-[11px] md:text-sm">
          <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col items-center md:flex-row md:items-center md:justify-between gap-1">
            <p className="hidden md:block">
              Get BIS Certification (ISI, CRS, FMCS) Without Delay ✔ Approval
              Support ✔ Fast Process ✔ Expert Guidance
            </p>

            <div className="flex flex-col items-center md:flex-row md:items-center gap-1 md:gap-4 text-center">
              <div className="flex items-center gap-2 justify-center flex-wrap">
                <span>📞</span>
                <a
                  href="tel:+917782069184"
                  className="hover:text-yellow-300 transition"
                >
                  +91-7782069184
                </a>
                <span className="opacity-60">|</span>
                <a
                  href="tel:+919958820184"
                  className="hover:text-yellow-300 transition"
                >
                  +91-9958820184
                </a>
              </div>

              <a
                href="mailto:info@anglobalservices.com"
                className="hover:text-yellow-300 transition break-all"
              >
                ✉️ info@anglobalservices.com
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white py-2 px-5 border-b border-gray-200">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/company-logo.png"
                alt="AN Global Services"
                className="h-14 w-auto"
              />
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/917782069184"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-11 h-11 flex items-center justify-center  rounded-full shadow-md group-hover:scale-110 transition overflow-hidden">
                  <img
                    src="/whatsapp-image.png"
                    alt="WhatsApp"
                    className="w-6 h-6 object-contain"
                  />
                </div>

                <div className="hidden md:block leading-tight">
                  <p className="text-xs text-gray-500">WhatsApp Us</p>
                  <p className="font-semibold text-gray-800 text-sm">
                    +91- 7782069184
                  </p>
                </div>
              </a>
              <a
                href="mailto:info@anglobalservices.com"
                className="flex items-center gap-3 group"
              >
                <div className="w-11 h-11 flex items-center justify-center bg-[#0072b1] text-white rounded-full shadow-md group-hover:scale-110 transition">
                  ✉️
                </div>

                <div className="hidden md:block leading-tight">
                  <p className="text-xs text-gray-500">Email Us</p>
                  <p className="font-semibold text-gray-800 text-sm">
                    info@anglobalservices.com
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <section className="bg-[#0072b1] py-10 px-4">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2 text-white">
              <p className="text-sm font-semibold tracking-widest uppercase text-yellow-300 mb-4">
                #BIS Certification Consultant
              </p>

              <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-6">
                India's Trusted{" "}
                <span className="text-yellow-400">
                  BIS Certification Consultant
                </span>{" "}
                for All Products & Industries
              </h1>

              <ul className="space-y-3 mb-8 text-lg">
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400 font-bold">✓</span> BIS ISI
                  Certification
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400 font-bold">✓</span> BIS FMCS
                  Certification
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400 font-bold">✓</span> BIS CRS
                  Certification
                </li>
              </ul>

              <p className="text-yellow-300 font-semibold text-lg mb-8">
                Trusted by manufacturers & global brands for reliable and
                efficient certification support
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/917782069184?text=Hi%2C%20I%20want%20help%20with%20BIS%20Certification"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (typeof window !== "undefined" && window.gtag) {
                      window.gtag("event", "whatsapp_click", {
                        event_category: "engagement",
                        event_label: "hero_whatsapp",
                      });
                    }
                  }}
                  className="bg-yellow-400 text-[#003B7E] font-bold px-8 py-2 rounded-lg hover:bg-[#003B7E] hover:text-white transition-colors"
                >
                  WhatsApp Us
                </a>

                <a
                  href="tel:+917782069184"
                  onClick={() => {
                    if (typeof window !== "undefined" && window.gtag) {
                      window.gtag("event", "click_call", {
                        event_category: "engagement",
                        event_label: "hero_call",
                      });
                    }
                  }}
                  className="border-2 border-white text-white font-bold px-8 py-2 rounded-lg hover:bg-white hover:text-[#003B7E] transition-colors"
                >
                  Talk to an Expert
                </a>
              </div>
              <div className="mt-5 space-y-4">
                <h3 className="text-xl font-bold text-white">
                  Complete Product Testing & Compliance Support
                </h3>

                <ul className="space-y-2 text-base text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-400 font-bold">✓</span>
                    Product Testing in BIS Approved Labs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-400 font-bold">✓</span>
                    Technical Documentation & Application Filing
                  </li>
                </ul>
              </div>
            </div>

            <div
              ref={contactRef}
              className="bg-white rounded-2xl shadow-2xl p-5 lg:p-6"
            >
              <h2 className="text-xl font-bold text-[#003B7E] text-center mb-5">
                Request a Callback
              </h2>

              {submitted ? (
                <div className="text-center py-8 px-6 bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg border border-green-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Thank You!
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    Your enquiry has been submitted successfully.
                  </p>

                  <div className="bg-green-50 border border-green-200 text-green-700 text-sm font-medium px-4 py-2 rounded-lg inline-block mb-4">
                    Our expert will call you shortly
                  </div>

                  <p className="text-gray-700 text-sm mb-2">
                    Need immediate assistance?
                  </p>

                  <a
                    href="tel:+917782069184"
                    className="inline-block font-bold text-[#003B7E] hover:text-yellow-500 transition"
                  >
                    📞 Call +91-7782069184
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-gray-700 focus:outline-none focus:border-[#003B7E]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    maxLength={10}
                    pattern="[0-9]{10}"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        phone: e.target.value.replace(/\D/g, ""),
                      })
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-gray-700 focus:outline-none focus:border-[#003B7E]"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-gray-700 focus:outline-none focus:border-[#003B7E]"
                  />
                  <select
                    value={form.service}
                    required
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-600 focus:outline-none focus:border-[#003B7E]"
                  >
                    <option value="">Select Service</option>
                    <option>BIS CRS Certification</option>
                    <option>BIS ISI Certification</option>
                    <option>BIS FMCS Certification</option>
                  </select>
                  <textarea
                    placeholder="Write your requirement....."
                    rows={2}
                    value={form.comment}
                    onChange={(e) =>
                      setForm({ ...form, comment: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:border-[#003B7E]"
                  />
                  <ReCAPTCHA
                    sitekey="6LdAsEwsAAAAAFklpMAqvko7_E5sfwvqzmcYPmPV"
                    onChange={(value) => setCaptchaValue(value)}
                  />
                  <button
                    disabled={loading}
                    className="w-full bg-[#003B7E] text-white cursor-pointer font-bold py-3 rounded-lg hover:bg-yellow-400 hover:text-[#003B7E] transition"
                  >
                    {loading ? "Submitting..." : "Submit Your Enquiry →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold text-[#003B7E] text-center mb-3">
              Get BIS Certification Fast & Hassle-Free with Expert Support
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              End-to-end assistance for BIS ISI, CRS & FMCS Certification — from
              documentation to final approval. Trusted by 10000+ manufacturers
              across India & globally.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-15">
              {[
                {
                  label: "YOUR MARK OF QUALITY & TRUST",
                  labelColor: "text-orange-500",
                  border: "border-t-4 border-orange-400",
                  title: "BIS ISI Certification",
                  desc: "End-to-end expert support for obtaining ISI Mark License - from documentation to factory inspection, compliance handling, and final BIS approval process.",
                },
                {
                  label: "SIMPLIFIED COMPLIANCE",
                  labelColor: "text-blue-600",
                  border: "border-t-4 border-blue-600",
                  title: "BIS CRS Certification",
                  desc: "Complete assistance for CRS certification of electronic products including testing in BIS-recognized labs and portal submission as per BIS guidelines.",
                },
                {
                  label: "GLOBAL MARKET ACCESS",
                  labelColor: "text-orange-500",
                  border: "border-t-4 border-orange-400",
                  title: "BIS FMCS Certification",
                  desc: "Expert support for foreign manufacturers including BIS application filing, factory inspection coordination, and Authorized Indian Representative (AIR) compliance.",
                },
              ].map((s) => (
                <div
                  key={s.title}
                  className={`bg-white rounded-xl shadow ${s.border} p-8 text-center hover:shadow-lg transition-shadow`}
                >
                  <h3 className="text-lg font-bold text-[#003B7E] mb-1">
                    {s.title}
                  </h3>
                  <p
                    className={`text-xs font-bold uppercase tracking-wide mb-3 ${s.labelColor}`}
                  >
                    {s.label}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {s.desc}
                  </p>
                  <button
                    onClick={scrollToContact}
                    className="text-sm font-semibold cursor-pointer bg-[#003B7E] text-white  px-4 py-2 rounded-lg  hover:bg-yellow-400 hover:text-[#003B7E] transition-all  transition-colors"
                  >
                    Book Free BIS Consultation →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-12 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-[#003B7E] mb-3">
              Our Partners
            </h2>

            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              We have worked with leading brands and organizations across
              industries, building trust through quality certification services.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              {[
                "hero-eco2.png",
                "gabion-india.png",
                "msme-agra.jpg",
                "safe-guard-logo.png",
                "yamanaka.png",
                "cognii.png",
                "10.jpg",
                "birat.jpg",
                "fire-guard.jpg",
                "force.jpg",
                "health.jpg",
                "jasmine.jpg",
                "kowa.jpg",
                "kse.jpg",
                "mtras.jpg",
                "nhf.jpg",
                "sga.jpg",
                "spago.jpg",
              ].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <Image
                    src={`/clients/${logo}`}
                    alt={`client-${index}`}
                    width={130}
                    height={66}
                    className="object-contain transition duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#003B7E] rounded-2xl p-8 mb-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { num: "1000+", label: "Products Certified" },
                { num: "8+", label: "Years Experience" },
                { num: "10000+", label: "Happy Clients" },
                { num: "99%", label: "Success Rate" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-4xl font-extrabold text-yellow-400">
                    {s.num}
                  </p>
                  <p className="text-white text-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-extrabold text-[#003B7E] text-center mb-3">
              Why Choose AN Global Services?
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
              A complete industrial solution provider trusted by leading
              manufacturers across India and abroad.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🏛️",
                  title: "Experienced BIS Certification Consultant",
                  desc: "Recognized BIS registration consultant with deep expertise in Indian standards and regulatory frameworks.",
                },
                {
                  icon: "⚡",
                  title: "Faster Turnaround Time",
                  desc: "Our streamlined process ensures your certification is completed in the shortest possible timeline.",
                },
                {
                  icon: "📋",
                  title: "End-to-End Documentation",
                  desc: "From application to lab coordination, factory audit prep, and portal submission — we handle everything.",
                },
                {
                  icon: "🌍",
                  title: "Foreign Manufacturer Support",
                  desc: "Specialized FMCS and CRS support for international brands entering the Indian market.",
                },
                {
                  icon: "💰",
                  title: "Transparent Pricing",
                  desc: "No hidden charges. Clear fee structure with milestone-based billing for complete peace of mind.",
                },
                {
                  icon: "📞",
                  title: "Dedicated Expert Support",
                  desc: "Assigned relationship manager for every client with direct access to BIS experts.",
                },
              ].map((r) => (
                <div
                  key={r.title}
                  className="flex gap-4 p-5 rounded-xl border border-gray-100 hover:border-[#003B7E]/30 hover:shadow-md transition-all"
                >
                  <span className="text-3xl">{r.icon}</span>
                  <div>
                    <h3 className="font-bold text-[#003B7E] text-base mb-1">
                      {r.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {r.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 px-4 bg-blue-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold text-[#003B7E] text-center mb-3">
              Our Simple 6-Step BIS Certification Process
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
              We make BIS certification hassle-free with our proven process that
              helpes clients across India and Globally.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Free Consultation Call",
                  desc: "Share your product details with our BIS expert. We assess requirements and suggest the right BIS scheme.",
                },
                {
                  step: "02",
                  title: "Document Preparation",
                  desc: "Our team prepares all technical documentation, test reports, and application forms for BIS submission.",
                },
                {
                  step: "03",
                  title: "Lab Testing Coordination",
                  desc: "We coordinate with BIS-recognized labs for product testing as per relevant Indian Standards.",
                },
                {
                  step: "04",
                  title: "BIS Application Filing",
                  desc: "We assist in filing the application on the BIS portal and help manage communication with BIS officials",
                },
                {
                  step: "05",
                  title: "Factory Audit Support",
                  desc: "For ISI/FMCS schemes, we help you prepare for BIS factory audits and ensure full compliance.",
                },
                {
                  step: "06",
                  title: " BIS Certificate Grant",
                  desc: "Upon approval you receive your BIS certificate. We also provide post-certification renewal support.",
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  <span className="absolute top-3 right-4 text-6xl font-extrabold text-[#003B7E]/5 select-none leading-none">
                    {s.step}
                  </span>
                  <div className="w-10 h-10 bg-[#003B7E] text-white rounded-lg flex items-center justify-center font-bold text-sm mb-4">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-[#003B7E] text-base mb-2">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <button
                onClick={scrollToContact}
                className="bg-[#003B7E] text-white font-bold px-6 py-2.5 cursor-pointer rounded-lg shadow-md hover:bg-yellow-400 hover:text-[#003B7E] transition-all duration-300"
              >
                Get Your BIS Certification Now →
              </button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-br from-[#003B7E] to-[#0059b3]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
            {/* LEFT CONTENT */}
            <div className="text-white">
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-5 leading-tight">
                Get Your BIS Certification Without Hassle
              </h2>

              <p className="text-gray-200 mb-6 text-lg">
                Avoid delays, rejections & compliance issues. Our BIS experts
                provide complete support from documentation to final approval.
              </p>

              <ul className="space-y-4 text-base">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 text-xl">✔</span>
                  1000+ BIS Certifications Successfully Completed
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 text-xl">✔</span>
                  Expert Support for ISI, CRS & FMCS Certification
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 text-xl">✔</span>
                  Fast-Track Process with Dedicated Consultant
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 text-xl">✔</span>
                  Trusted by Manufacturers Across India & Globally
                </li>
              </ul>

              <div className="mt-6 bg-yellow-400 text-[#003B7E] inline-block px-5 py-2 rounded-lg font-semibold">
                Limited Slots Available – Talk to BIS Expert Now
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="bg-white rounded-2xl shadow-2xl p-6">
              <h3 className="text-xl font-bold text-[#003B7E] text-center mb-4">
                Get Free BIS Expert Advice
              </h3>

              {submitted ? (
                <div className="text-center py-8 px-6 bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg border border-green-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Thank You!
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    Your enquiry has been submitted successfully.
                  </p>

                  <div className="bg-green-50 border border-green-200 text-green-700 text-sm font-medium px-4 py-2 rounded-lg inline-block mb-4">
                    Our expert will call you shortly
                  </div>

                  <p className="text-gray-700 text-sm mb-2">
                    Need immediate assistance?
                  </p>

                  <a
                    href="tel:+917782069184"
                    className="inline-block font-bold text-[#003B7E] hover:text-yellow-500 transition"
                  >
                    📞 Call +91-7782069184
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSimpleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[#003B7E]"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    maxLength={10}
                    value={form.phone}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        phone: e.target.value.replace(/\D/g, ""),
                      })
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[#003B7E]"
                  />

                  <textarea
                    placeholder="Write your requirement..."
                    rows={3}
                    value={form.comment}
                    onChange={(e) =>
                      setForm({ ...form, comment: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[#003B7E]"
                  />

                  <button
                    disabled={loading}
                    className="w-full bg-[#003B7E] text-white font-bold cursor-pointer py-3 rounded-lg hover:bg-yellow-400 hover:text-[#003B7E] transition"
                  >
                    {loading ? "Submitting..." : "Get Free Consultation Call →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="py-14 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold text-[#003B7E] text-center mb-3">
              What Our Clients Say
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Trusted by manufacturers across India and international markets
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Mr. Prathan Thunyacharoen",
                  role: "Sales & Marketing Manager, Nikkei Siam Aluminium Limited, Thailand",
                  text: "We received complete professional support for BIS certification of wrought aluminium and aluminium alloy sheets and strips. The entire process from documentation to approval was handled efficiently, making our India market entry smooth and hassle-free.",
                },
                {
                  name: "M/s Health & Hygiene Products Pvt. Ltd.",
                  role: "Morang, Province-1, Nepal",
                  text: "AN Global Services assisted us in BIS certification for baby diapers and sanitary napkins. Their team managed documentation, compliance, and coordination seamlessly, helping us achieve certification without delays.",
                },
                {
                  name: "Naotoshi Kashima",
                  role: "President, Yamanaka Advanced Materials, INC, Japan",
                  text: "We obtained BIS certification for Phosphorus Oxychloride with expert guidance from the team. Their knowledge of FMCS procedures and support in handling regulatory requirements ensured a smooth and successful certification process.",
                },
              ].map((t) => (
                <div
                  key={t.name}
                  className="bg-blue-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <p className="text-yellow-400 text-xl mb-3">★★★★★</p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#003B7E] rounded-full flex items-center justify-center text-white font-bold">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-[#003B7E] text-sm">
                        {t.name}
                      </p>
                      <p className="text-gray-500 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-extrabold text-[#003B7E] text-center mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex justify-between cursor-pointer items-center px-5 py-3 text-left font-semibold text-[#003B7E]"
                  >
                    {faq.question}
                    <span className="text-xl">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  {openIndex === index && (
                    <div className="px-5 pb-4 text-gray-600 text-sm">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="bg-[#00244E] text-white py-12 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Image
                src="/company-logo.png"
                alt="AN Global Services"
                width={260}
                height={80}
                className="mb-6 bg-white object-contain"
              />
              <p className="text-white/70 text-sm leading-relaxed">
                Trusted BIS Certification Consultant for ISI Mark, CRS
                Registration, and FMCS Certification approvals.
              </p>
              <p></p>
            </div>
            <div>
              <h4 className="font-bold text-yellow-400 mb-4">Our Services</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                {[
                  "BIS CRS Certification",
                  "BIS ISI Certification",
                  "BIS FMCS Certification",
                  "Testing & Calibration Services",
                ].map((s) => (
                  <li key={s}>→ {s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-yellow-400 mb-4">Contact Us</h4>
              <ul className="space-y-3 text-white/70 text-sm">
                <li>
                  <a href="tel:+917782069184" className="hover:text-white">
                    📞 +91 7782069184
                  </a>
                </li>
                <li>
                  <a href="tel:+919958820184" className="hover:text-white">
                    📞 +91 9958820184
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@anglobalservices.com"
                    className="hover:text-white"
                  >
                    ✉️ info@anglobalservices.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.anglobalservices.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    🌐 www.anglobalservices.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center text-white/40 text-xs max-w-6xl mx-auto">
            © {new Date().getFullYear()} A N Global Services Pvt. Ltd. All
            rights reserved. | BIS Registration Consultant India
          </div>
        </footer>

        <div className="fixed bottom-0 left-0 right-0 z-50 flex lg:hidden shadow-2xl">
          <a
            href="tel:+917782069184"
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#003B7E] text-white font-bold text-sm border-r border-white/20 hover:bg-[#002960] transition-colors"
          >
            📞 Call Now
          </a>
          <a
            href="https://wa.me/917782069184"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-green-600 text-white font-bold text-sm hover:bg-green-700 transition-colors"
          >
            WhatsApp Us
          </a>
        </div>
      </main>
    </>
  );
}
