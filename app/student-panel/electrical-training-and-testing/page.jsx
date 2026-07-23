"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2, ShieldCheck, Gauge, FlaskConical, FileCheck2,
  Award, BookOpen, Users, Target, TrendingUp, Cog,
  Wrench, ClipboardCheck, GraduationCap, Briefcase,
  Zap, Shield, BarChart3, Settings,
  X, AlertCircle, Info
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
    title: "Electrical Safety",
    desc: "Electrical testing ensures that all wiring, equipment, and installations are safe for use. It helps prevent electric shocks, short circuits, and fire hazards in homes, offices, and factories.",
    icon: Shield,
    bg: "bg-red-50",
    iconColor: "text-red-500",
    border: "border-red-100",
  },
  {
    title: "Performance Verification",
    desc: "Testing verifies that electrical systems and equipment are working at their rated capacity. It ensures motors, transformers, cables, and switchgear deliver the expected performance under load.",
    icon: Gauge,
    bg: "bg-blue-50",
    iconColor: "text-blue-500",
    border: "border-blue-100",
  },
  {
    title: "Standards Compliance",
    desc: "Electrical testing confirms that installations and products meet IS, IEC, and IEEE safety standards. This is required for government approvals, BIS certification, and insurance compliance.",
    icon: ShieldCheck,
    bg: "bg-green-50",
    iconColor: "text-green-500",
    border: "border-green-100",
  },
];

const processSteps = [
  { title: "Visual Inspection", desc: "A thorough visual check of all electrical connections, wiring, panels, and equipment is done to identify obvious defects or safety hazards.", icon: ClipboardCheck },
  { title: "Instrument Testing", desc: "Calibrated testing instruments like meggers, multimeters, and high voltage testers are used to measure insulation, resistance, voltage, and current values.", icon: Settings },
  { title: "Data Recording", desc: "All test readings are carefully recorded and compared against standard values to identify any deviations or potential failures.", icon: BarChart3 },
  { title: "Certified Report", desc: "A detailed test report with all measurements, observations, and pass/fail results is prepared and issued with official certification.", icon: FileCheck2 },
];

const testingServices = [
  { title: "Insulation Resistance Test", desc: "Measures the resistance of insulation in cables, motors, transformers, and switchgear using a megger. Low insulation resistance indicates potential breakdown risk. This test is essential for all electrical installations as per IS 732 and IEC 60364 standards." },
  { title: "High Voltage (HV) Test", desc: "Also called a hipot test, it applies high voltage to electrical equipment to check if insulation can withstand voltage surges without breaking down. Used for transformers, cables, switchgear, and electrical panels as per IS 2705 and IEC 60060 standards." },
  { title: "Earth Resistance Test", desc: "Measures the resistance of the earthing system to ensure proper grounding. Good earthing protects people from electric shock and equipment from damage during faults. Tested using earth tester as per IS 3043 standards." },
  { title: "Relay Testing", desc: "Checks the operation of protection relays that automatically disconnect faulty circuits. Tests include pickup value, timing, and trip accuracy of overcurrent, earth fault, and differential relays used in power systems." },
  { title: "Transformer Testing", desc: "Includes turns ratio test, winding resistance test, insulation resistance test, and oil breakdown voltage test. These tests ensure transformers operate safely and efficiently at their rated capacity." },
  { title: "Cable Testing", desc: "Tests the insulation strength, continuity, and current carrying capacity of power cables. Includes VLF (Very Low Frequency) testing and partial discharge measurement to detect cable faults before they cause failures." },
  { title: "Circuit Breaker Testing", desc: "Tests the operating time, contact resistance, and insulation resistance of circuit breakers. This ensures they can safely interrupt fault currents and protect electrical systems from damage." },
  { title: "Power Quality Analysis", desc: "Measures voltage, current, frequency, harmonics, power factor, and transients in electrical systems. Poor power quality can damage equipment and increase energy costs. Analysed using power quality analysers." },
  { title: "Motor Testing", desc: "Includes insulation resistance test, winding resistance test, no-load test, and locked rotor test for electric motors. These tests verify that motors are running efficiently and safely within their design parameters." },
];

const learningOutcomes = [
  "Fundamentals of electrical engineering and power systems",
  "Types of electrical tests — Insulation, HV, Earth Resistance, Relay, Motor",
  "How to use testing instruments — Megger, Multimeter, Earth Tester, HV Tester",
  "Understanding IS, IEC, and IEEE standards for electrical testing",
  "Reading and interpreting electrical test data and measurements",
  "Transformer testing procedures — turns ratio, winding resistance, oil BDV",
  "Relay testing — overcurrent, earth fault, differential protection relays",
  "Cable testing — insulation resistance, VLF testing, partial discharge",
  "Safety practices and precautions in electrical testing laboratories",
  "Preparing accurate test reports and professional documentation",
  "Power quality analysis — harmonics, power factor, voltage sag/swell",
  "Earthing system design and testing as per IS 3043",
];

const benefits = [
  { title: "100% Free Training", desc: "Complete electrical testing training program at no cost. Learn from experienced electrical engineers without any financial burden.", icon: Award },
  { title: "Hands-On Practical Experience", desc: "Work directly with meggers, HV testers, relay test kits, and power quality analysers. Gain real laboratory skills that employers value.", icon: Wrench },
  { title: "Industry-Recognized Certificate", desc: "Receive a verified Training Completion Certificate in Electrical Testing that adds value to your resume and career profile.", icon: FileCheck2 },
  { title: "Career Growth Opportunities", desc: "Open doors to jobs in electrical testing labs, power plants, substations, manufacturing units, and electrical contracting companies.", icon: TrendingUp },
  { title: "Expert Faculty & Mentors", desc: "Learn from experienced electrical testing professionals who guide you through every concept with practical demonstrations and real examples.", icon: Users },
  { title: "Modern Equipment Training", desc: "Get trained on industry-standard instruments including digital meggers, micro-ohm meters, relay test sets, transformer test kits, and HV testers.", icon: Cog },
];

const whoCanJoin = [
  "Electrical Engineering Students (B.E / B.Tech / Diploma)",
  "ITI Electrician & Wireman Certificate Holders",
  "B.Sc / M.Sc Physics & Electronics Students",
  "Electrical Technicians & Maintenance Staff",
  "Power Plant & Substation Operators",
  "Quality Control & QA Professionals",
  "Electrical Contractors & Site Engineers",
  "Researchers & Entrepreneurs",
];

/* ──────────────────────────── Page Component ──────────────────────────── */

export default function ElectricalTrainingTestingPage() {
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
      <section className="relative w-full min-h-[calc(100vh-30px)] flex items-center justify-center py-28 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/student-panel/electrical-training-testing-page/Electrical-Training-Testing-1.webp"
            alt="Electrical Training and Testing Services — Free Laboratory Course by AN Global Services"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/75" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 w-full">
          <LazySection>
            <p className="text-[#60B5F0] font-bold text-sm sm:text-base md:text-lg tracking-widest uppercase mb-4 drop-shadow-lg">
              ★ Free Student Training Program ★
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5 max-w-6xl">
              Electrical Training & Testing
            </h1>
            <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-5xl mx-auto leading-relaxed mb-6">
              Free hands-on laboratory training for electrical testing of power systems and equipment — learn insulation resistance testing, high voltage (hipot) testing, earth resistance testing, relay testing, transformer testing, cable testing, and power quality analysis as per IS, IEC & IEEE standards.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-white/80 mb-8 max-w-3xl mx-auto">
              {["Insulation Test", "HV Test", "Earth Resistance", "Relay Test", "Transformer Test", "Cable Test", "Motor Test", "Power Quality"].map((tag, i) => (
                <span key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <button
                onClick={() => setShowEnrollModal(true)}
                className="bg-[#0075B6] hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold cursor-pointer hover:scale-105 transition-all shadow-lg"
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
                Delivering professional electrical testing training with meggers, HV testers, relay test kits, and power quality analysers. Industry-recognized certification upon completion — 100% free for all students and professionals.
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
                  src="/student-panel/electrical-training-testing-page/Electrical-Training-Testing-2.webp"
                  alt="Electrical Training and Testing Laboratory — Insulation and High Voltage Testing Equipment"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-6">
                  Professional <span className="text-[#0075B6]">Electrical Training & Testing</span> Laboratory
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                  Our laboratory provides comprehensive electrical testing services to evaluate the safety, performance, and reliability of electrical systems, equipment, and installations. We test cables, transformers, motors, switchgear, relays, and complete power distribution systems used in industrial, commercial, and residential applications.
                </p>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                  We conduct insulation resistance testing using meggers, high voltage testing using hipot testers, earth resistance measurement, relay protection testing, transformer ratio and winding resistance tests, and power quality analysis to ensure electrical systems are safe and efficient.
                </p>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  These tests help electricians, engineers, and manufacturers ensure that electrical installations meet IS 732, IS 3043, IEC 60364, and IEEE standards — preventing electrical accidents, equipment failures, and costly downtime.
                </p>
              </div>
            </div>
          </LazySection>
        </div>
      </section>

      {/* ═══════════ 3. WHAT IS ELECTRICAL TRAINING & TESTING ═══════════ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LazySection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">
                What is Electrical Training & Testing?
              </h2>
              <div className="w-20 h-1 bg-[#0075B6] mx-auto mb-6" />
            </div>
            <div className="max-w-6xl mx-auto space-y-5">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                <strong>Electrical testing</strong> is a set of procedures used to check the safety, insulation quality, performance, and reliability of electrical systems and equipment. It tells us whether electrical wiring, cables, motors, transformers, switchgear, and protection devices are working correctly and safely.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Electrical testing is essential in every sector — from power generation and distribution to manufacturing, construction, and building maintenance. Electricians, engineers, and safety inspectors use these tests to prevent electric shocks, fires, and equipment damage. Without proper testing, electrical faults can cause serious injuries and financial losses.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Common electrical tests include <strong>insulation resistance testing</strong> (checking insulation quality with a megger), <strong>high voltage testing</strong> (applying extra-high voltage to check insulation strength), <strong>earth resistance testing</strong> (measuring grounding effectiveness), <strong>relay testing</strong> (verifying protection system response), and <strong>power quality analysis</strong> (measuring harmonics, power factor, and voltage stability).
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                These tests follow standards like <strong>IS 732</strong> (Wiring of Electrical Installations), <strong>IS 3043</strong> (Earthing), <strong>IEC 60364</strong> (Low Voltage Installations), <strong>IEC 60060</strong> (High Voltage Test Techniques), and <strong>IEEE</strong> guidelines for power systems testing. Our training covers all these standards in simple, easy-to-understand language with hands-on practice.
              </p>
            </div>
          </LazySection>
        </div>
      </section>

      {/* ═══════════ 4. WHY ELECTRICAL TRAINING & TESTING IS IMPORTANT ═══════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LazySection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">
                Why Electrical Training & Testing is Important
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

      {/* ═══════════ 5. OUR ELECTRICAL TESTING PROCESS ═══════════ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LazySection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">
                Our Electrical Testing Process
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

      {/* ═══════════ 6. OUR ELECTRICAL TESTING SERVICES ═══════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LazySection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">
                Our Electrical Testing Services
              </h2>
              <div className="w-20 h-1 bg-[#0075B6] mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testingServices.map((test, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 mb-4 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center group-hover:bg-[#0075B6] group-hover:text-white transition-colors duration-300">
                    <Zap size={24} strokeWidth={1.5} />
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
                Our training covers every essential topic to make you a confident electrical testing professional.
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
                Why students and professionals choose our Electrical Training & Testing program.
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
              Join our comprehensive Electrical Training & Testing program completely free of cost. Learn from industry experts, get hands-on experience with testing instruments, and earn a verified Training Completion Certificate.
            </p>
            <p className="text-base text-blue-200 max-w-2xl mx-auto mb-8">
              No fees. No hidden charges. Just quality education and real-world electrical testing skills that will boost your career in power systems, maintenance, and quality assurance.
            </p>
            <button
              onClick={() => setShowEnrollModal(true)}
              className="bg-white text-[#0075B6] hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl cursor-pointer hover:scale-105 transition-all"
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
                  This training program is open to anyone who wants to learn electrical testing. No prior testing experience is required — basic electrical knowledge is helpful.
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
                    "Experienced Electrical Engineers as Trainers",
                    "Real Laboratory Practical Sessions",
                    "Modern Testing Instruments & Equipment",
                    "IS, IEC & IEEE Standards Covered",
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
                { topic: "Basics of Electrical Systems", detail: "Learn about AC and DC power systems, single-phase and three-phase supply, voltage levels, current flow, and basic electrical circuits used in homes and industries." },
                { topic: "Insulation Resistance Testing (Megger Test)", detail: "Hands-on training on using megger instruments to test insulation quality of cables, motors, transformers, and switchgear. Learn to read IR values and identify weak insulation." },
                { topic: "High Voltage (Hipot) Testing", detail: "Understand the principles of dielectric strength testing, how to safely apply high voltage to equipment, and interpret pass/fail results as per IEC 60060 standards." },
                { topic: "Earthing System Testing", detail: "Learn how to measure earth resistance using fall-of-potential method, test earth pit connections, and verify earthing compliance as per IS 3043 standards." },
                { topic: "Protection Relay Testing", detail: "Understand overcurrent, earth fault, and differential relay operation. Learn to test relay pickup values, operating times, and coordination using relay test sets." },
                { topic: "Testing Standards & Report Writing", detail: "Learn IS 732, IS 3043, IEC 60364, and IEEE standards for electrical testing. Prepare accurate, professional laboratory test reports with proper documentation." },
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
              Ready to Start Your Journey in <span className="text-[#0075B6]">Electrical Training & Testing</span>?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Enroll today in our free electrical training and testing program. Build practical skills, earn a certificate, and open new career opportunities in electrical testing, power systems, and quality assurance.
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
