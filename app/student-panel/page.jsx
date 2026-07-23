"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Trees, Layers, Sofa, Droplets, Settings, Building2, Mountain, HardHat, Grid, X,
  CheckCircle2, FlaskConical, UserCheck, BookOpen, Factory, FileCheck2, MonitorPlay, 
  TrendingUp, Target, Users, BookMarked, Award, Activity, Smile, GraduationCap, Briefcase,
  AlertCircle, Info, Cog, Zap, Cpu
} from "lucide-react";
import EnrollmentModal from "./components/EnrollmentModal";

// --- Data Arrays ---
const testingServices = [
  { name: "Mechanical Training & Testing", slug: "mechanical-training-and-testing", icon: Cog, isInternal: true },
  { name: "Electrical Training & Testing", slug: "electrical-training-and-testing", icon: Zap, isInternal: true },
  { name: "Electronics Training & Testing", slug: "electronics-training-and-testing", icon: Cpu, isInternal: true },
  { name: "Wood Testing", slug: "wood-testing", icon: Trees },
  { name: "Plywood Testing", slug: "plywood-testing", icon: Layers },
  { name: "Furniture Testing", slug: "furniture-testing", icon: Sofa },
  { name: "Water Testing", slug: "water-testing", icon: Droplets },
  { name: "Hinges Testing", slug: "hinges-testing", icon: Settings },
  { name: "Cement Testing", slug: "cement-testing", icon: Building2 },
  { name: "Soil Testing", slug: "soil-testing", icon: Mountain },
  { name: "Aggregates Testing", slug: "aggregates-testing", icon: HardHat },
  { name: "Concrete Paver Block Testing", slug: "concrete-paver-block-testing", icon: Grid },
];

const programHighlights = [
  { title: "Hands-On Practical Sessions", icon: FlaskConical },
  { title: "Expert Trainers", icon: UserCheck },
  { title: "Comprehensive Study Material", icon: BookOpen },
  { title: "Industry-Oriented Curriculum", icon: Factory },
  { title: "Testing Standards & Procedures", icon: FileCheck2 },
  { title: "Online & Offline Support", icon: MonitorPlay },
  { title: "Skill Development Focus", icon: TrendingUp },
  { title: "Career-Oriented Training", icon: Target },
];

const stats = [
  { number: "500+", label: "Students Trained", icon: Users },
  { number: "8+", label: "Testing Programs", icon: BookMarked },
  { number: "100%", label: "Free Training", icon: Award },
  { number: "50+", label: "Practical Demonstrations", icon: Activity },
  { number: "95%", label: "Participant Satisfaction", icon: Smile },
];

export default function StudentPanelPage() {
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  // Auto-hide toast after 3.5 seconds
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast((prev) => ({ ...prev, show: false }));
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  const showNotification = (message, type = "info") => {
    setToast({ show: true, message, type });
  };

  return (
    <main className="w-full min-h-screen bg-white relative">
      
      {/* ================= TOAST NOTIFICATION UI ================= */}
      <div 
        className={`fixed top-6 right-4 sm:right-6 z-[200] max-w-sm w-full transition-all duration-500 ease-in-out transform ${
          toast.show ? "translate-y-0 opacity-100 scale-100" : "-translate-y-10 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className={`p-4 rounded-xl shadow-2xl border flex items-start gap-3 backdrop-blur-md ${
          toast.type === "success" ? "bg-green-50/95 border-green-200 text-green-800" :
          toast.type === "error" ? "bg-red-50/95 border-red-200 text-red-800" :
          "bg-blue-50/95 border-blue-200 text-blue-800"
        }`}>
          <div className="shrink-0 mt-0.5">
            {toast.type === "success" && <CheckCircle2 size={20} className="text-green-600" />}
            {toast.type === "error" && <AlertCircle size={20} className="text-red-600" />}
            {toast.type === "info" && <Info size={20} className="text-[#0075B6]" />}
          </div>
          <p className="text-sm font-medium leading-tight">{toast.message}</p>
          <button 
            onClick={() => setToast({ ...toast, show: false })}
            className="ml-auto shrink-0 opacity-50 hover:opacity-100 transition-opacity"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section 
        className="relative w-full min-h-[calc(100vh-70px)] py-28 md:py-20 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/student-panel/student-panel-1.webp')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Precision Testing for <br />
              <span className="text-[#0075B6]">Construction Materials</span>
            </h1>
            
            <p className="text-gray-300 text-sm md:text-base lg:text-lg mb-8 leading-relaxed">
              Trusted laboratory for comprehensive quality testing of <span className="font-semibold text-white">Wood, Plywood, Water, Furniture, Hinges, Cement, Aggregates, Soil & Concrete Paver Blocks.</span> Ensuring safety, durability, and compliance with national and international standards.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link 
                href="/contact-us"
                className="bg-[#0075B6] hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors"
              >
                Contact Us
              </Link>
              <button 
                onClick={() => setShowEnrollModal(true)}
                className="bg-transparent border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-md font-medium cursor-pointer hover:scale-105 transition-all"
              >
                Enroll Now
              </button>
            </div>

            <div className="border border-white/20 bg-white/10 backdrop-blur-md p-6 rounded-xl max-w-2xl">
              <h3 className="text-[#0075B6] text-xl font-bold mb-2">
                A N Global Services Private Limited
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Delivering reliable and accurate testing services for wood, plywood, water, furniture, cement, and construction materials. We help manufacturers and builders meet quality, safety, and compliance standards with complete confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 1. INTRO TO TESTING & TRAINING ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">
            Building Skilled Professionals Through <span className="text-[#0075B6]">Scientific Testing Training</span>
          </h2>
          <div className="w-24 h-1 bg-[#0075B6] mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed mb-6">
            Testing plays a critical role in ensuring the quality, durability, safety, and performance of materials used in construction, manufacturing, furniture production, water management, and various industrial applications.
          </p>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            Our organization is committed to developing skilled professionals by providing comprehensive training programs in laboratory testing methods and quality assessment techniques.
          </p>
        </div>
      </section>

      {/* ================= 2 & 3. IMPORTANCE & BENEFITS ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Importance */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0a192f] mb-6 flex items-center gap-3">
                <Target className="text-[#0075B6]" size={28} />
                Why Testing is Important
              </h3>
              <ul className="space-y-4">
                {[
                  "Ensure product quality and consistency",
                  "Improve safety and reliability",
                  "Detect manufacturing defects",
                  "Verify compliance with industry standards",
                  "Reduce failures and maintenance costs",
                  "Enhance customer trust and satisfaction"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0a192f] mb-6 flex items-center gap-3">
                <TrendingUp className="text-[#0075B6]" size={28} />
                Benefits of Learning Testing
              </h3>
              <ul className="space-y-4">
                {[
                  "Learn industry-standard testing procedures",
                  "Gain practical laboratory knowledge",
                  "Understand testing equipment and instruments",
                  "Improve technical and analytical skills",
                  "Enhance employability and career growth",
                  "Build confidence in quality assurance practices"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="text-[#0075B6] shrink-0 mt-0.5" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 4. WHAT WE OFFER ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0a192f] mb-4">About Our Training Program</h2>
            <div className="w-16 h-1 bg-[#0075B6] mx-auto mb-6"></div>
          </div>

          <div className="bg-[#0a192f] text-white rounded-2xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl font-bold mb-8 text-center text-[#0075B6]">Participants Will Learn:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Testing principles & fundamentals",
                "Sample preparation techniques",
                "Testing standards & procedures",
                "Equipment handling & calibration",
                "Data recording & interpretation",
                "Quality control requirements",
                "Safety practices in laboratories",
                "Report preparation & documentation"
              ].map((skill, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#0075B6]/20 flex items-center justify-center mb-3">
                    <CheckCircle2 className="text-[#0075B6]" size={20} />
                  </div>
                  <span className="text-sm font-medium text-gray-200">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. PROGRAM HIGHLIGHTS ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0a192f] mb-4">Training Highlights</h2>
            <div className="w-16 h-1 bg-[#0075B6] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programHighlights.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center group">
                  <div className="mx-auto w-16 h-16 bg-blue-50 text-[#0075B6] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#0075B6] group-hover:text-white transition-all duration-300">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================= 6. FREE CERTIFICATION BANNER ================= */}
      <section className="py-16 bg-[#0075B6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Award size={64} className="mx-auto mb-6 text-yellow-300" strokeWidth={1.5} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Free Training & Certification</h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
            Complete our hands-on program and receive a verified Training Completion Certificate.
          </p>
          <button 
            onClick={() => setShowEnrollModal(true)}
            className="bg-white text-[#0075B6] hover:bg-gray-100 px-8 py-3 rounded-full font-bold text-lg shadow-lg cursor-pointer hover:scale-105 transition-all"
          >
            Enroll for Free Now
          </button>
        </div>
      </section>

      {/* ================= 7 & 8. WHO CAN JOIN & WHY CHOOSE US ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-[#0a192f] mb-6 flex items-center gap-3">
                <GraduationCap className="text-[#0075B6]" size={36} />
                Who Can Join?
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Students & Graduates", "Diploma Holders", "Engineering Students", 
                  "Laboratory Technicians", "Quality Control Personnel", "Furniture Professionals", 
                  "Construction Experts", "Researchers & Entrepreneurs"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700 bg-gray-50 p-3 rounded-md border border-gray-100">
                    <div className="w-2 h-2 rounded-full bg-[#0075B6]"></div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#0a192f] mb-6 flex items-center gap-3">
                <Briefcase className="text-[#0075B6]" size={36} />
                Why Choose Us?
              </h3>
              <ul className="space-y-4">
                {[
                  "Experienced Trainers & Mentors",
                  "Practical Learning Approach",
                  "Modern Testing Methodologies",
                  "Free Certification upon Completion",
                  "Career Skill Enhancement & Support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="p-1 bg-green-100 rounded-full text-green-600">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 9. STATISTICS ================= */}
      <section className="py-16 bg-[#0a192f] border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="flex flex-col items-center justify-center p-4">
                  <Icon className="text-[#0075B6] mb-4" size={40} strokeWidth={1.5} />
                  <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2">{stat.number}</h3>
                  <p className="text-blue-200 text-sm md:text-base font-medium">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================= TESTING SERVICES GRID ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">
              Explore Our Testing Programs
            </h2>
            <div className="w-16 h-1 bg-[#0075B6] mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testingServices.map((test, index) => {
              const IconComponent = test.icon;
              const href = test.isInternal 
                ? `/student-panel/${test.slug}` 
                : `/laboratory-testing/${test.slug}`;
              return (
                <Link 
                  key={index} 
                  href={href}
                  {...(!test.isInternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="relative overflow-hidden bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-sm transition-all duration-500 group hover:-translate-y-2 hover:shadow-2xl hover:border-[#0075B6]/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 w-20 h-20 mb-6 rounded-full bg-blue-50 flex items-center justify-center text-[#0075B6] group-hover:bg-[#0075B6] group-hover:text-white transition-colors duration-500 shadow-sm border border-blue-100 group-hover:border-transparent">
                    <IconComponent size={36} strokeWidth={1.5} className="group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="relative z-10 text-gray-900 font-extrabold text-lg md:text-xl mb-3 group-hover:text-[#0075B6] transition-colors duration-300">
                    {test.name}
                  </h3>
                  <div className="relative z-10 flex items-center gap-2 text-[#0075B6] font-semibold text-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <span>Explore Program</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= COMPONENT IMPORT: ENROLLMENT MODAL ================= */}
      <EnrollmentModal 
        isOpen={showEnrollModal} 
        onClose={() => setShowEnrollModal(false)} 
        showNotification={showNotification} 
      />

    </main>
  );
}


