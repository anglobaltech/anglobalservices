"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2, ShieldCheck, Gauge, FileCheck2,
  Award, BookOpen, Users, Target, TrendingUp, Cog,
  Wrench, ClipboardCheck, GraduationCap, Briefcase,
  Zap, Shield, BarChart3, Settings, Cpu, CircuitBoard,
  X, AlertCircle, Info, Monitor
} from "lucide-react";
import EnrollmentModal from "../components/EnrollmentModal";

/* ──────────────────────────── Lazy Section Wrapper ──────────────────────────── */
function LazySection({ children, className = "" }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1, rootMargin: "50px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } ${className}`}
    >
      {children}
    </div>
  );
}

/* ──────────────────────────── Data ──────────────────────────── */

const importanceCards = [
  {
    title: "Product Quality",
    desc: "Electronics testing ensures that every circuit board, component, and finished product works correctly before reaching customers. It catches defects early, saving time, money, and preventing product recalls.",
    icon: ShieldCheck,
    bg: "bg-red-50",
    iconColor: "text-red-500",
    border: "border-red-100",
  },
  {
    title: "Performance Verification",
    desc: "Testing verifies that electronic circuits and devices perform within their specified parameters — correct voltage, current, frequency, and signal levels — under normal and extreme conditions.",
    icon: Gauge,
    bg: "bg-blue-50",
    iconColor: "text-blue-500",
    border: "border-blue-100",
  },
  {
    title: "Safety & Compliance",
    desc: "Electronics testing confirms that products meet BIS, IEC, IPC, and safety standards. This is mandatory for market approval, BIS certification, and consumer safety in India and globally.",
    icon: Shield,
    bg: "bg-green-50",
    iconColor: "text-green-500",
    border: "border-green-100",
  },
];

const processSteps = [
  { title: "Visual Inspection", desc: "A careful visual and microscopic inspection of PCB layout, solder joints, component placement, and wiring is performed to identify defects before powering up the circuit.", icon: ClipboardCheck },
  { title: "Component Testing", desc: "Individual electronic components like resistors, capacitors, diodes, transistors, and ICs are tested using multimeters, LCR meters, and component testers to verify their specifications.", icon: Settings },
  { title: "Circuit Testing", desc: "The complete circuit is powered up and tested using oscilloscopes, function generators, and signal analysers to verify voltage, current, frequency, and waveform outputs.", icon: BarChart3 },
  { title: "Certified Report", desc: "A detailed test report with all measurements, pass/fail results, and observations is prepared. Certified reports are issued for compliance and quality records.", icon: FileCheck2 },
];

const testingServices = [
  { title: "PCB Testing & Inspection", desc: "Tests printed circuit boards for correct layout, solder quality, short circuits, and open connections. Includes visual inspection, continuity testing, and automated optical inspection (AOI). Essential for all electronic product manufacturing." },
  { title: "SMD Soldering & Rework", desc: "Training in Surface Mount Device (SMD) soldering techniques — including reflow soldering, hot air rework, and hand soldering of tiny components. Covers IPC-A-610 acceptability standards for solder joint quality inspection." },
  { title: "IC & Microcontroller Testing", desc: "Tests integrated circuits (ICs), microcontrollers, and microprocessors for correct operation, pin-level functionality, and communication protocols (I2C, SPI, UART). Includes programming and debugging techniques." },
  { title: "Oscilloscope & Signal Analysis", desc: "Hands-on training on using digital oscilloscopes to capture, measure, and analyse electrical signals — including voltage, frequency, rise time, duty cycle, and noise. Essential skill for every electronics engineer." },
  { title: "Power Supply Testing", desc: "Tests regulated and switch-mode power supplies (SMPS) for output voltage accuracy, ripple, load regulation, line regulation, and efficiency. Covers safety testing for AC-DC adapters and chargers." },
  { title: "Electronic Component Testing", desc: "Tests individual components — resistors, capacitors, inductors, diodes, transistors, MOSFETs, relays, and sensors — using multimeters, LCR meters, and curve tracers to verify their electrical specifications." },
  { title: "Embedded Systems Testing", desc: "Tests embedded systems and IoT devices for hardware-software integration, sensor accuracy, communication reliability, and power consumption. Includes firmware debugging and protocol analysis." },
  { title: "EMC/EMI Testing Fundamentals", desc: "Introduction to Electromagnetic Compatibility (EMC) and Electromagnetic Interference (EMI) testing. Learn how electronic devices are tested for radiated and conducted emissions to meet BIS and IEC 61000 standards." },
  { title: "Functional & Burn-In Testing", desc: "Tests finished electronic products under real-world operating conditions for extended periods (burn-in) to identify early failures. Functional testing verifies all features and specifications work as designed." },
];

const learningOutcomes = [
  "Fundamentals of electronics and electronic components",
  "Types of electronic tests — PCB, IC, signal, power supply, EMC",
  "How to use test instruments — Multimeter, Oscilloscope, Function Generator, LCR Meter",
  "PCB inspection and solder joint quality assessment as per IPC standards",
  "SMD soldering and rework techniques for surface mount components",
  "IC and microcontroller testing — pin testing, protocol analysis, debugging",
  "Oscilloscope operation — capturing waveforms, measuring frequency, triggering",
  "Power supply testing — ripple measurement, load regulation, efficiency",
  "Understanding BIS, IEC, IPC standards for electronics testing",
  "Safety practices and ESD (Electrostatic Discharge) precautions in labs",
  "Preparing accurate electronic test reports and documentation",
  "Basics of EMC/EMI testing and compliance requirements",
];

const benefits = [
  { title: "100% Free Training", desc: "Complete electronics testing training program at no cost. Learn from experienced electronics engineers without any financial burden.", icon: Award },
  { title: "Hands-On Practical Experience", desc: "Work directly with oscilloscopes, multimeters, soldering stations, function generators, and LCR meters. Gain real laboratory skills that employers value.", icon: Wrench },
  { title: "Industry-Recognized Certificate", desc: "Receive a verified Training Completion Certificate in Electronics Testing that adds value to your resume and career profile.", icon: FileCheck2 },
  { title: "Career Growth Opportunities", desc: "Open doors to jobs in electronics manufacturing, R&D labs, quality control, product testing, IoT development, and semiconductor companies.", icon: TrendingUp },
  { title: "Expert Faculty & Mentors", desc: "Learn from experienced electronics professionals who guide you through every concept with practical demonstrations on real circuits and equipment.", icon: Users },
  { title: "Modern Equipment Training", desc: "Get trained on industry-standard instruments including digital oscilloscopes, SMD rework stations, logic analysers, component testers, and power supply units.", icon: Cog },
];

const whoCanJoin = [
  "Electronics & Communication Engineering Students",
  "Electrical Engineering Students (B.E / B.Tech / Diploma)",
  "ITI Electronics Mechanic Certificate Holders",
  "B.Sc / M.Sc Electronics & Physics Students",
  "Electronics Technicians & Repair Professionals",
  "IoT & Embedded Systems Developers",
  "Quality Control & QA Professionals",
  "Researchers & Hardware Entrepreneurs",
];

/* ──────────────────────────── Page Component ──────────────────────────── */

export default function ElectronicsTrainingTestingPage() {
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => setToast((prev) => ({ ...prev, show: false })), 3500);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  const showNotification = (message, type = "info") => {
    setToast({ show: true, message, type });
  };

  return (
    <main className="w-full min-h-screen bg-white relative">

      {/* ═══════════ TOAST ═══════════ */}
      <div
        className={`fixed top-6 right-4 sm:right-6 z-[200] max-w-sm w-full transition-all duration-500 ease-in-out transform ${toast.show ? "translate-y-0 opacity-100 scale-100" : "-translate-y-10 opacity-0 scale-95 pointer-events-none"
          }`}
      >
        <div className={`p-4 rounded-xl shadow-2xl border flex items-start gap-3 backdrop-blur-md ${toast.type === "success" ? "bg-green-50/95 border-green-200 text-green-800" :
            toast.type === "error" ? "bg-red-50/95 border-red-200 text-red-800" :
              "bg-blue-50/95 border-blue-200 text-blue-800"
          }`}>
          <div className="shrink-0 mt-0.5">
            {toast.type === "success" && <CheckCircle2 size={20} className="text-green-600" />}
            {toast.type === "error" && <AlertCircle size={20} className="text-red-600" />}
            {toast.type === "info" && <Info size={20} className="text-[#0075B6]" />}
          </div>
          <p className="text-sm font-medium leading-tight">{toast.message}</p>
          <button onClick={() => setToast({ ...toast, show: false })} className="ml-auto shrink-0 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
            <X size={18} />
          </button>
        </div>
      </div>

      {/* ═══════════ 1. HERO BANNER ═══════════ */}
      <section className="relative w-full h-[calc(100vh-30px)] overflow-hidden">
        <Image
          src="/student-panel/electronics-training-testing-page/Electronics-Training-Testing-1.webp"
          alt="Electronics Training and Testing Services — Free Laboratory Course by AN Global Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/75" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 pb-16">
          <LazySection>
            <p className="text-[#60B5F0] font-bold text-sm sm:text-base md:text-lg tracking-widest uppercase mb-4 drop-shadow-lg">
              ★ Free Student Training Program ★
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5 max-w-6xl">
              Electronics Training & Testing
            </h1>
            <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-5xl mx-auto leading-relaxed mb-6">
              Free hands-on laboratory training for electronics testing — learn PCB testing, SMD soldering (IPC standards), IC & microcontroller testing, oscilloscope operation, signal analysis, power supply testing, embedded systems testing, and EMC/EMI fundamentals as per IPC, IEC & BIS standards.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-white/80 mb-8 max-w-3xl mx-auto">
              {["PCB Testing", "SMD Soldering", "IC Testing", "Oscilloscope", "Power Supply", "Signal Analysis", "Embedded Systems", "EMC Testing"].map((tag, i) => (
                <span key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <button
                onClick={() => setShowEnrollModal(true)}
                className="bg-[#0075B6] hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold transition-colors shadow-lg cursor-pointer"
              >
                Enroll for Free
              </button>
              <Link
                href="/contact-us"
                className="border border-white/60 text-white hover:bg-white hover:text-black px-8 py-3 rounded-md font-medium transition-all cursor-pointer"
              >
                Contact Us
              </Link>
            </div>

            <div className="border border-white/20 bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-xl max-w-2xl mx-auto">
              <h3 className="text-[#60B5F0] text-lg sm:text-xl font-bold mb-2">
                A N Global Services Private Limited
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Delivering professional electronics testing training with oscilloscopes, SMD rework stations, component testers, and signal analysers. Industry-recognized certification upon completion — 100% free for all students and professionals.
              </p>
            </div>
          </LazySection>
        </div>
      </section>

      {/* ═══════════ 2. INTRO — IMAGE LEFT + CONTENT RIGHT ═══════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LazySection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
              <div className="relative rounded-2xl overflow-hidden shadow-xl group min-h-[300px] lg:min-h-0">
                <Image
                  src="/student-panel/electronics-training-testing-page/Electronics-Training-Testing-2.webp"
                  alt="Electronics Training and Testing Laboratory — PCB Testing and Oscilloscope Equipment"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-6">
                  Professional <span className="text-[#0075B6]">Electronics Training & Testing</span> Laboratory
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                  Our laboratory provides comprehensive electronics testing services to evaluate the functionality, performance, and safety of electronic circuits, components, and finished products. We test PCBs, integrated circuits, power supplies, sensors, embedded systems, and consumer electronics used across industries.
                </p>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                  We perform PCB inspection and testing, SMD soldering quality checks, IC functional testing, oscilloscope-based signal analysis, power supply load testing, and EMC pre-compliance measurements to ensure electronic products meet design specifications and quality standards.
                </p>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  These tests help electronics manufacturers, R&D teams, and quality engineers ensure that products are reliable, safe, and compliant with BIS (Bureau of Indian Standards), IEC (International Electrotechnical Commission), and IPC (Association Connecting Electronics Industries) standards.
                </p>
              </div>
            </div>
          </LazySection>
        </div>
      </section>

      {/* ═══════════ 3. WHAT IS ELECTRONICS TRAINING & TESTING ═══════════ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LazySection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">
                What is Electronics Training & Testing?
              </h2>
              <div className="w-20 h-1 bg-[#0075B6] mx-auto mb-6" />
            </div>
            <div className="max-w-6xl mx-auto space-y-5">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                <strong>Electronics testing</strong> is the process of verifying that electronic circuits, components, and products work correctly and meet their design specifications. It involves measuring voltage, current, resistance, frequency, signal waveforms, and other parameters to ensure proper functioning.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Electronics testing is crucial in every industry that uses electronic devices — from mobile phones and computers to medical equipment, automotive systems, and industrial automation. Without proper testing, electronic products can fail unexpectedly, causing safety hazards, financial losses, and customer dissatisfaction.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Common electronics tests include <strong>PCB testing</strong> (checking circuit board connections and solder quality), <strong>IC testing</strong> (verifying chip functionality), <strong>oscilloscope analysis</strong> (capturing and measuring signals), <strong>power supply testing</strong> (checking voltage accuracy and stability), <strong>EMC testing</strong> (measuring electromagnetic emissions), and <strong>functional testing</strong> (verifying all product features work correctly).
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                These tests follow standards like <strong>IPC-A-610</strong> (Acceptability of Electronic Assemblies), <strong>IEC 61000</strong> (EMC Standards), <strong>BIS Standards</strong> for electronic products, and <strong>IPC J-STD-001</strong> (Soldering Standards). Our training teaches all these standards in simple language with hands-on practice on real equipment.
              </p>
            </div>
          </LazySection>
        </div>
      </section>

      {/* ═══════════ 4. WHY ELECTRONICS TRAINING & TESTING IS IMPORTANT ═══════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LazySection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">
                Why Electronics Training & Testing is Important
              </h2>
              <div className="w-20 h-1 bg-[#0075B6] mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {importanceCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className={`${card.bg} border ${card.border} rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300 group`}
                  >
                    <div className={`w-16 h-16 mx-auto mb-5 rounded-full flex items-center justify-center ${card.bg} ${card.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
                  </div>
                );
              })}
            </div>
          </LazySection>
        </div>
      </section>

      {/* ═══════════ 5. OUR ELECTRONICS TESTING PROCESS ═══════════ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LazySection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">
                Our Electronics Testing Process
              </h2>
              <div className="w-20 h-1 bg-[#0075B6] mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-white border-2 border-[#0075B6]/20 flex items-center justify-center text-[#0075B6] group-hover:bg-[#0075B6] group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </LazySection>
        </div>
      </section>

      {/* ═══════════ 6. OUR ELECTRONICS TESTING SERVICES ═══════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LazySection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">
                Our Electronics Testing Services
              </h2>
              <div className="w-20 h-1 bg-[#0075B6] mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testingServices.map((test, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 mb-4 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-[#0075B6] group-hover:text-white transition-colors duration-300">
                    <Cpu size={24} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{test.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{test.desc}</p>
                </div>
              ))}
            </div>
          </LazySection>
        </div>
      </section>

      {/* ═══════════ 7. WHAT YOU WILL LEARN ═══════════ */}
      <section className="py-16 md:py-20 bg-[#0a192f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LazySection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What You Will Learn
              </h2>
              <div className="w-20 h-1 bg-[#0075B6] mx-auto mb-6" />
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Our training covers every essential topic to make you a confident electronics testing professional.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {learningOutcomes.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="w-8 h-8 shrink-0 rounded-full bg-[#0075B6]/20 flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="text-[#0075B6]" size={18} />
                  </div>
                  <span className="text-gray-200 text-sm md:text-base leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </LazySection>
        </div>
      </section>

      {/* ═══════════ 8. BENEFITS ═══════════ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LazySection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">
                Benefits of This Training
              </h2>
              <div className="w-20 h-1 bg-[#0075B6] mx-auto mb-6" />
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Why students and professionals choose our Electronics Training & Testing program.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div
                    key={i}
                    className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-blue-50 text-[#0075B6] flex items-center justify-center group-hover:bg-[#0075B6] group-hover:text-white transition-colors duration-300">
                      <Icon size={30} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">{b.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                );
              })}
            </div>
          </LazySection>
        </div>
      </section>

      {/* ═══════════ 9. FREE TRAINING & CERTIFICATION CTA ═══════════ */}
      <section className="py-16 md:py-20 bg-[#0075B6] relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <LazySection>
            <Award size={64} className="mx-auto mb-6 text-yellow-300" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Free Training & Certification
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-4 leading-relaxed">
              Join our comprehensive Electronics Training & Testing program completely free of cost. Learn from industry experts, get hands-on experience with real electronic testing equipment, and earn a verified Training Completion Certificate.
            </p>
            <p className="text-base text-blue-200 max-w-2xl mx-auto mb-8">
              No fees. No hidden charges. Just quality education and real-world electronics testing skills that will boost your career in electronics manufacturing, R&D, and quality assurance.
            </p>
            <button
              onClick={() => setShowEnrollModal(true)}
              className="bg-white text-[#0075B6] hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-colors shadow-xl hover:shadow-2xl cursor-pointer hover:scale-105"
            >
              Enroll for Free Now
            </button>
          </LazySection>
        </div>
      </section>

      {/* ═══════════ 10. WHO CAN JOIN & WHY CHOOSE US ═══════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LazySection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Who Can Join */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0a192f] mb-6 flex items-center gap-3">
                  <GraduationCap className="text-[#0075B6]" size={36} />
                  Who Can Join?
                </h3>
                <p className="text-gray-600 mb-6">
                  This training program is open to anyone who wants to learn electronics testing. No prior testing experience is required — basic electronics knowledge is helpful but not mandatory.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {whoCanJoin.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100 hover:border-[#0075B6]/30 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-[#0075B6] shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0a192f] mb-6 flex items-center gap-3">
                  <Briefcase className="text-[#0075B6]" size={36} />
                  Why Choose Our Program?
                </h3>
                <p className="text-gray-600 mb-6">
                  AN Global Services is a trusted name in testing, calibration, and certification training across India.
                </p>
                <ul className="space-y-4">
                  {[
                    "Experienced Electronics Engineers as Trainers",
                    "Real Laboratory Practical Sessions",
                    "Modern Testing Instruments & Equipment",
                    "IPC, IEC & BIS Standards Covered",
                    "Free Certification upon Completion",
                    "Career Guidance & Placement Support",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <div className="p-1 bg-green-100 rounded-full text-green-600 shrink-0">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </LazySection>
        </div>
      </section>

      {/* ═══════════ 11. KEY TOPICS COVERED ═══════════ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LazySection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">
                Key Topics Covered in Training
              </h2>
              <div className="w-20 h-1 bg-[#0075B6] mx-auto mb-6" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                { topic: "Electronic Components & Circuits", detail: "Learn about resistors, capacitors, inductors, diodes, transistors, MOSFETs, ICs, and how they work together in electronic circuits. Understand schematic reading and basic circuit design." },
                { topic: "PCB Inspection & Solder Quality (IPC-A-610)", detail: "Hands-on training on inspecting PCB assemblies for solder defects, component placement errors, and manufacturing issues. Learn IPC-A-610 acceptability standards used worldwide." },
                { topic: "Oscilloscope Operation & Signal Measurement", detail: "Learn to capture, measure, and analyse electrical signals using digital oscilloscopes. Understand voltage, frequency, rise time, duty cycle, triggering, and FFT analysis." },
                { topic: "SMD Soldering & Rework Techniques", detail: "Practice hand soldering and hot air rework for SMD components. Learn proper soldering temperatures, flux usage, desoldering techniques, and solder joint inspection." },
                { topic: "Power Supply Testing & Measurement", detail: "Test linear and switch-mode power supplies for output accuracy, ripple voltage, load regulation, efficiency, and safety. Use electronic loads and oscilloscopes for measurements." },
                { topic: "Testing Standards & Report Writing", detail: "Learn IPC, IEC, and BIS standards for electronics testing. Prepare accurate, professional test reports with proper measurements, observations, and compliance documentation." },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-bold text-[#0a192f] mb-2 flex items-start gap-3">
                    <BookOpen className="text-[#0075B6] shrink-0 mt-1" size={20} />
                    {item.topic}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed ml-8">{item.detail}</p>
                </div>
              ))}
            </div>
          </LazySection>
        </div>
      </section>

      {/* ═══════════ 12. FINAL CTA ═══════════ */}
      <section className="py-16 md:py-20 bg-[#0a192f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <LazySection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey in <span className="text-[#0075B6]">Electronics Training & Testing</span>?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Enroll today in our free electronics training and testing program. Build practical skills, earn a certificate, and open new career opportunities in electronics manufacturing, R&D, and quality assurance.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setShowEnrollModal(true)}
                className="bg-[#0075B6] hover:bg-blue-700 text-white px-10 py-4 rounded-md font-bold text-lg transition-all shadow-lg cursor-pointer hover:scale-105"
              >
                Enroll for Free Now
              </button>
              <Link
                href="/student-panel"
                className="border border-white/40 text-white hover:bg-white hover:text-[#0a192f] px-8 py-4 rounded-md font-medium transition-all cursor-pointer"
              >
                ← Back to Student Panel
              </Link>
            </div>
          </LazySection>
        </div>
      </section>

      {/* ═══════════ ENROLLMENT MODAL ═══════════ */}
      <EnrollmentModal
        isOpen={showEnrollModal}
        onClose={() => setShowEnrollModal(false)}
        showNotification={showNotification}
      />

    </main>
  );
}
