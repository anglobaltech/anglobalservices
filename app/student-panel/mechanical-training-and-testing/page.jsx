"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2, ShieldCheck, Gauge, Hammer, FlaskConical, FileCheck2,
  Award, ArrowRight, BookOpen, Users, Target, TrendingUp, Cog,
  AlertTriangle, Wrench, ClipboardCheck, GraduationCap, Briefcase,
  ChevronRight, Zap, Shield, BarChart3, Settings, Layers,
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
    title: "Material Strength",
    desc: "Mechanical testing determines how strong a material is under different forces like pulling, pushing, and bending. This helps engineers choose the right material for safe and reliable products.",
    icon: ShieldCheck,
    bg: "bg-red-50",
    iconColor: "text-red-500",
    border: "border-red-100",
  },
  {
    title: "Quality Assurance",
    desc: "Testing ensures that manufactured products meet required quality standards. It helps detect defects early so that only safe and reliable products reach the market.",
    icon: Gauge,
    bg: "bg-blue-50",
    iconColor: "text-blue-500",
    border: "border-blue-100",
  },
  {
    title: "Safety & Reliability",
    desc: "Mechanical testing prevents product failures by verifying that materials can handle real-world conditions. This protects people and equipment from dangerous breakdowns.",
    icon: Shield,
    bg: "bg-green-50",
    iconColor: "text-green-500",
    border: "border-green-100",
  },
];

const processSteps = [
  { title: "Sample Preparation", desc: "Test specimens are carefully prepared from raw materials following standard dimensions and requirements.", icon: ClipboardCheck },
  { title: "Testing Procedure", desc: "Specimens are tested using calibrated machines that apply controlled forces to measure material properties.", icon: Settings },
  { title: "Data Analysis", desc: "Test results are recorded, analyzed, and compared with standard values to evaluate material performance.", icon: BarChart3 },
  { title: "Certified Report", desc: "A detailed test report with all findings and conclusions is prepared and provided with official certification.", icon: FileCheck2 },
];

const testingServices = [
  { title: "Tensile Strength Test", desc: "Measures how much pulling force a material can handle before it breaks. This test is important for metals, plastics, rubber, and textiles used in construction and manufacturing." },
  { title: "Compressive Strength Test", desc: "Determines how much pushing or crushing force a material can withstand. Commonly used for testing concrete, bricks, cement blocks, and other building materials." },
  { title: "Bending / Flexural Test", desc: "Evaluates how a material behaves when a bending force is applied. This test is essential for beams, rods, pipes, and flat materials used in structural applications." },
  { title: "Hardness Test", desc: "Measures the resistance of a material surface against indentation or scratching. Common methods include Brinell, Rockwell, and Vickers hardness tests for metals and alloys." },
  { title: "Impact Strength Test", desc: "Determines how much sudden force or shock a material can absorb before breaking. This test uses methods like Charpy and Izod to evaluate toughness of metals and plastics." },
  { title: "Shear Strength Test", desc: "Measures the resistance of a material to forces that try to slide one part over another. Important for bolts, rivets, adhesives, and welded joints." },
  { title: "Fatigue Test", desc: "Evaluates how a material performs under repeated loading and unloading cycles over time. This helps predict the lifespan of parts used in machines, vehicles, and structures." },
  { title: "Torsion Test", desc: "Measures a material's resistance to twisting forces. This is critical for shafts, axles, springs, and other rotating components in mechanical systems." },
  { title: "Creep Test", desc: "Determines how a material deforms slowly under constant stress at high temperatures over long periods. Important for materials used in engines, turbines, and power plants." },
];

const learningOutcomes = [
  "Fundamentals of mechanical testing and material science",
  "Types of mechanical tests — Tensile, Compression, Bending, Hardness, Impact",
  "How to prepare test specimens according to IS and ASTM standards",
  "Operating Universal Testing Machines (UTM) and hardness testers",
  "Reading and interpreting stress-strain curves and test data",
  "Understanding material properties — elasticity, plasticity, toughness, ductility",
  "Safety practices and precautions in testing laboratories",
  "Preparing accurate test reports and documentation",
  "Quality control procedures for manufacturing industries",
  "Indian Standards (IS) and International Standards (ASTM, ISO) for testing",
];

const benefits = [
  { title: "100% Free Training", desc: "Complete training program at no cost. Learn from experienced professionals without any financial burden.", icon: Award },
  { title: "Hands-On Practical Experience", desc: "Work directly with testing machines and equipment. Gain real laboratory skills that employers value.", icon: Wrench },
  { title: "Industry-Recognized Certificate", desc: "Receive a verified Training Completion Certificate that adds value to your resume and career profile.", icon: FileCheck2 },
  { title: "Career Growth Opportunities", desc: "Open doors to jobs in quality control, testing laboratories, manufacturing, and construction industries.", icon: TrendingUp },
  { title: "Expert Faculty & Mentors", desc: "Learn from experienced testing professionals who guide you through every concept with practical examples.", icon: Users },
  { title: "Modern Equipment Training", desc: "Get trained on industry-standard equipment including UTM machines, hardness testers, and impact testing machines.", icon: Cog },
];

const whoCanJoin = [
  "Engineering Students (Mechanical, Civil, Material Science)",
  "Diploma & ITI Holders",
  "B.Sc / M.Sc Science Students",
  "Laboratory Technicians & Assistants",
  "Quality Control & QA Professionals",
  "Manufacturing Industry Workers",
  "Construction Site Engineers",
  "Researchers & Entrepreneurs",
];

/* ──────────────────────────── Page Component ──────────────────────────── */

export default function MechanicalTestingPage() {
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
          <button onClick={() => setToast({ ...toast, show: false })} className="ml-auto shrink-0 opacity-50 hover:opacity-100 transition-opacity">
            <X size={18} />
          </button>
        </div>
      </div>

      {/* ═══════════ 1. HERO BANNER ═══════════ */}
      <section className="relative w-full h-[calc(100vh-30px)] overflow-hidden">
        <Image
          src="/student-panel/mechanical-testing-page/mechanical-testing-1.webp"
          alt="Mechanical Training and Testing Services — Free Laboratory Course by AN Global Services"
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
              Mechanical Training & Testing
            </h1>
            <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-5xl mx-auto leading-relaxed mb-6">
              Free hands-on laboratory training for mechanical testing of materials — learn tensile testing, compression testing, hardness testing (Brinell, Rockwell, Vickers), impact testing (Charpy & Izod), bending test, fatigue test, and torsion test as per IS, ASTM & ISO standards.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-white/80 mb-8 max-w-3xl mx-auto">
              {["Tensile Test", "Compression Test", "Hardness Test", "Impact Test", "Bending Test", "Fatigue Test", "Torsion Test", "Creep Test"].map((tag, i) => (
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
                Delivering professional mechanical testing training with UTM machines, hardness testers, and impact testing equipment. Industry-recognized certification upon completion — 100% free for all students and professionals.
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
                  src="/student-panel/mechanical-testing-page/mechanical-testing-2.webp"
                  alt="Mechanical Training and Testing Laboratory — Material Testing Equipment"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-6">
                  Professional <span className="text-[#0075B6]">Mechanical Training & Testing</span> Laboratory
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                  Our laboratory provides reliable mechanical testing services to evaluate the physical and mechanical properties of metals, alloys, polymers, composites, and construction materials used in manufacturing, automotive, aerospace, and infrastructure industries.
                </p>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                  We conduct various tests including tensile strength analysis, compression testing, hardness measurement, impact testing, bending tests, and fatigue analysis to determine the quality and performance of materials.
                </p>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  These tests help manufacturers and engineers ensure that materials meet required safety standards and provide long-term strength, reliability, and durability in structural and industrial applications.
                </p>
              </div>
            </div>
          </LazySection>
        </div>
      </section>

      {/* ═══════════ 3. WHAT IS MECHANICAL TESTING ═══════════ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LazySection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">
                What is Mechanical Training & Testing?
              </h2>
              <div className="w-20 h-1 bg-[#0075B6] mx-auto mb-6" />
            </div>
            <div className="max-w-6xl mx-auto space-y-5">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                <strong>Mechanical testing</strong> is a set of laboratory procedures used to measure the physical and mechanical properties of materials. It tells us how a material behaves when forces like pulling, pushing, bending, twisting, or sudden impact are applied to it.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                These tests are essential in every industry — from construction and manufacturing to automotive and aerospace. Engineers and quality control teams rely on mechanical testing to select the right materials, design safe products, and ensure compliance with national and international quality standards.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Common mechanical properties measured include <strong>tensile strength</strong> (resistance to pulling), <strong>compressive strength</strong> (resistance to crushing), <strong>hardness</strong> (resistance to surface indentation), <strong>impact toughness</strong> (ability to absorb sudden shock), and <strong>fatigue life</strong> (performance under repeated stress cycles).
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Standards like <strong>IS (Indian Standards)</strong>, <strong>ASTM (American Society for Testing and Materials)</strong>, and <strong>ISO (International Organization for Standardization)</strong> provide guidelines for conducting these tests accurately and consistently.
              </p>
            </div>
          </LazySection>
        </div>
      </section>

      {/* ═══════════ 4. WHY MECHANICAL TESTING IS IMPORTANT ═══════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LazySection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">
                Why Mechanical Training & Testing is Important
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

      {/* ═══════════ 5. OUR MECHANICAL TESTING PROCESS ═══════════ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LazySection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">
                Our Mechanical Testing Process
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

      {/* ═══════════ 6. OUR MECHANICAL TESTING SERVICES ═══════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LazySection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">
                Our Mechanical Testing Services
              </h2>
              <div className="w-20 h-1 bg-[#0075B6] mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testingServices.map((test, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 mb-4 rounded-xl bg-red-50 text-red-500 flex items-center justify-center group-hover:bg-[#0075B6] group-hover:text-white transition-colors duration-300">
                    <ShieldCheck size={24} strokeWidth={1.5} />
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
                Our training covers every essential topic to make you a confident mechanical testing professional.
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
                Why students and professionals choose our Mechanical Testing training program.
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
              Join our comprehensive Mechanical Testing training program completely free of cost. Learn from industry experts, get hands-on laboratory experience, and earn a verified Training Completion Certificate.
            </p>
            <p className="text-base text-blue-200 max-w-2xl mx-auto mb-8">
              No fees. No hidden charges. Just quality education and real-world skills that will boost your career in quality control and material testing.
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
                  This training program is open to anyone who wants to learn mechanical testing. No prior experience is required.
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
                    "Experienced Industry Trainers & Mentors",
                    "Real Laboratory Practical Sessions",
                    "Modern Testing Equipment & Machines",
                    "IS, ASTM & ISO Standards Covered",
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

      {/* ═══════════ 11. KEY TOPICS COVERED (DETAILED) ═══════════ */}
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
                { topic: "Introduction to Material Science", detail: "Learn about different types of materials — metals, alloys, polymers, ceramics, and composites and their basic properties." },
                { topic: "Stress, Strain & Elastic Behavior", detail: "Understand how materials respond to applied forces, the concept of stress-strain curves, and elastic vs plastic deformation." },
                { topic: "Universal Testing Machine (UTM) Operation", detail: "Hands-on training on operating UTM for tensile, compression, and bending tests with proper specimen loading and data recording." },
                { topic: "Hardness Testing Methods", detail: "Learn Brinell, Rockwell, and Vickers hardness testing methods, their applications, and how to interpret hardness numbers." },
                { topic: "Impact Testing (Charpy & Izod)", detail: "Understand impact testing procedures, notch preparation, energy absorption measurement, and material toughness evaluation." },
                { topic: "Testing Standards & Report Writing", detail: "Learn IS, ASTM, and ISO standards for mechanical tests and how to prepare accurate, professional laboratory test reports." },
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
              Ready to Start Your Journey in <span className="text-[#0075B6]">Mechanical Training & Testing</span>?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Enroll today in our free mechanical training and testing program. Build practical skills, earn a certificate, and open new career opportunities in quality control and material testing.
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
