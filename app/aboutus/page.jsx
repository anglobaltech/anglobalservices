import React from "react";
import Link from "next/link";
import AboutServicesTabs from "@/components/AboutServicesTabs";
export const metadata = {
  title:
    "About AN Global Services | Trusted Certification & Compliance Consultancy",
  description:
    "Learn about AN Global Services, a trusted certification and compliance consultancy helping businesses with BIS, WPC, NABL, CRS, FMCS, ISI Mark, Hallmarking, EPR Authorization, MSME, NSIC, and regulatory approvals in India.",
};

import {
  CheckCircle,
  Award,
  Shield,
  Users,
  Target,
  TrendingUp,
  Briefcase,
  FileCheck,
  Globe,
  Calendar,
  Handshake,
  ShieldCheck,
  Medal,
  UserCheck,
} from "lucide-react";

export default function AboutPage() {
  const services = [
    {
      title: "ISI Mark Certification",
      desc: "Complete product certification consultancy from start to end with full documentation support.",
    },
    {
      title: "BIS & CRS Registration",
      desc: "Expert assistance for Electronics & IT Goods registration and compliance with Indian standards.",
    },
    {
      title: "Hallmarking Services",
      desc: "Precious metals and jewellery hallmarking certification to ensure quality and authenticity.",
    },
    {
      title: "EPR Authorization",
      desc: "E-waste management authorization and compliance with environmental regulations.",
    },
    {
      title: "WPC & TEC Approval",
      desc: "Wireless planning and telecommunications equipment certification services.",
    },
    {
      title: "NABL Accreditation",
      desc: "Complete consultancy for laboratory accreditation and quality management systems.",
    },
    {
      title: "FMCS Certification",
      desc: "Foreign Manufacturers Certification Scheme for international compliance standards.",
    },
    {
      title: "BEE Registration",
      desc: "Bureau of Energy Efficiency registration for energy-efficient products and systems.",
    },
  ];

  const values = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Quality Assurance",
      desc: "Ensuring the highest standards in all certifications",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Expert Team",
      desc: "Experienced professionals dedicated to your success",
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Client-Focused",
      desc: "Your compliance and growth are our priorities",
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Continuous Support",
      desc: "End-to-end assistance throughout the process",
    },
  ];

  const stats = [
    { number: "10000+", label: "Clients Served", icon: <Users size={34} strokeWidth={1.5} /> },
    { number: "8+", label: "Years Experience", icon: <Calendar size={34} strokeWidth={1.5} /> },
    { number: "500+", label: "Certifications", icon: <Award size={34} strokeWidth={1.5} /> },
    { number: "99%", label: "Success Rate", icon: <TrendingUp size={34} strokeWidth={1.5} /> },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero & Stats Section */}
      <div
        className="relative overflow-hidden text-white"
        style={{
          backgroundImage: "url('/about-us-dash-2.webp')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-[#020617]/30"></div>
        
        <div className="relative z-10">
          {/* Header Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-28 md:pb-20 flex flex-col items-center">
            
            {/* Top decorative line */}
            <div className="flex items-center justify-center gap-1 mb-6">
              <div className="h-[1px] w-8 bg-cyan-400/50"></div>
              <div className="h-[2px] w-12 bg-cyan-400"></div>
              <div className="h-[1px] w-8 bg-cyan-400/50"></div>
            </div>

            <div className="text-center">
              <h1 className="text-3xl md:text-[50px] font-bold mb-4 tracking-tight text-white">
                About <span className="text-[#38bdf8]">AN Global Services</span>
              </h1>
              <p className="text-md md:text-[18px] text-gray-300 max-w-3xl mx-auto font-normal tracking-wide">
                Your Trusted Partner in Industrial Certification & Compliance
              </p>
            </div>

            {/* Bottom decorative line */}
            <div className="flex items-center justify-center gap-1 mt-6">
              <div className="h-[1px] w-8 bg-cyan-400/50"></div>
              <div className="h-[2px] w-12 bg-cyan-400"></div>
              <div className="h-[1px] w-8 bg-cyan-400/50"></div>
            </div>

          </div>

          {/* Stats Section */}
          <div className="pb-20 md:pb-28">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center justify-center bg-[#072445]/60 backdrop-blur-md rounded-xl py-8 px-4 border border-[#1e466b] shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden group hover:bg-[#0c3158]/80 transition-all duration-300"
                  >
                    {/* Glowing bottom edge */}
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#38bdf8] shadow-[0_-5px_20px_rgba(56,189,248,0.7)] opacity-90"></div>
                    
                    {/* Glowing top corners effect (optional subtlety) */}
                    <div className="absolute top-0 left-0 w-24 h-24 bg-[#38bdf8]/10 blur-3xl rounded-full"></div>

                    {/* Icon */}
                    <div className="text-[#38bdf8] mb-4 drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]">
                      {stat.icon}
                    </div>

                    {/* Number */}
                    <div className="text-3xl md:text-[34px] font-bold text-white mb-2 leading-none">
                      {stat.number}
                    </div>

                    {/* Label */}
                    <div className="text-[#94a3b8] font-semibold uppercase tracking-[0.15em] text-[9px] md:text-[10px]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Who We Are Section */}
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-24 overflow-hidden bg-white">
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/60 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-50/60 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Image Container */}
          <div className="order-2 lg:order-1 relative mt-10 lg:mt-0 px-4 md:px-0">
            
            {/* Dot Grid Pattern */}
            <div className="absolute -top-12 -left-4 w-40 h-40 bg-[radial-gradient(#93c5fd_2px,transparent_2px)] [background-size:16px_16px] opacity-60 -z-20"></div>

            {/* Main Image Container */}
            <div className="relative rounded-xl shadow-xl w-full overflow-hidden">
              <img
                src="/about-us1.jpeg"
                alt="Professional Team"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="order-1 lg:order-2 z-10 pt-8 lg:pt-0">
            
            {/* Header Badge */}
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-block bg-blue-50 text-[#0075B6] px-4 py-1.5 rounded-full text-sm font-bold tracking-widest">
                WHO WE ARE
              </div>
              <div className="h-[2px] w-12 bg-gray-200"></div>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#0a192f] leading-[1.1]">
              Leading <span className="text-[#0075B6]">Consulting Firm</span>
            </h2>
            
            {/* Paragraphs */}
            <div className="space-y-6 text-gray-600 text-[15px] leading-relaxed">
              <p>
                <span className="font-bold text-[#0075B6]">
                  AN Global Services
                </span>{" "}
                is a well-established and leading consulting firm, a reliable
                service provider. We have placed ourselves amongst the assured
                names in the corporate world.
              </p>
              <p>
                We provide Product Certification (ISI mark), Foreign
                Manufactures Certification Scheme (FMCS), Compulsory
                Registration Scheme (CRS) for Electronics & IT Goods, BIS
                hallmarking of precious For metals/jewellery, BEE Registration
                Services, Trademark Registration Services, CE Certification
                Services, EPR Authorization (for e-waste), Solar Panel BIS
                Registration Services, WPC Approval and TEC Certification, MSME
                & NSIC Certification, WMI Certification, NABL Accreditation
                Consultancy, WPC License and many more.
              </p>
              <p>
                The Government of India has established various parameters to
                ensure the safety of the customers which includes providing
                high-quality products to the customer.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Bottom Features (Full Width) */}
        <div className="max-w-7xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 pt-10 border-t border-gray-100 relative px-4 md:px-0">
          
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center relative px-2">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-[#0075B6] mb-4">
              <ShieldCheck className="w-7 h-7 stroke-[1.5]" />
            </div>
            <h4 className="font-bold text-gray-900 text-[14px]">ISO Certified</h4>
            <p className="text-[12px] text-gray-500 font-medium mt-1">Quality & Trust</p>
            {/* Vertical Divider */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gray-200"></div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center relative px-2">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-[#0075B6] mb-4">
              <UserCheck className="w-7 h-7 stroke-[1.5]" />
            </div>
            <h4 className="font-bold text-gray-900 text-[14px]">NABL Certified</h4>
            <p className="text-[12px] text-gray-500 font-medium mt-1">Accredited Support</p>
            {/* Vertical Divider */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gray-200"></div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center relative px-2">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-[#0075B6] mb-4">
              <Award className="w-7 h-7 stroke-[1.5]" />
            </div>
            <h4 className="font-bold text-gray-900 text-[14px]">Experienced Team</h4>
            <p className="text-[12px] text-gray-500 font-medium mt-1">Industry Experts</p>
            {/* Vertical Divider */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gray-200"></div>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center px-2">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-[#0075B6] mb-4">
              <Handshake className="w-7 h-7 stroke-[1.5]" />
            </div>
            <h4 className="font-bold text-gray-900 text-[14px]">Client Focused</h4>
            <p className="text-[12px] text-gray-500 font-medium mt-1">Long Term Partnership</p>
          </div>

        </div>
      </div>

      <div 
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: "url('/about-us-3.webp')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            
            {/* Header Badge */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-[#0075B6]/30"></div>
              <div className="inline-block bg-[#0075B6] text-white px-5 py-2 rounded-full text-sm font-bold tracking-widest shadow-md">
                OUR VALUES
              </div>
              <div className="h-[2px] w-12 bg-[#0075B6]/30"></div>
            </div>

            <h2 className="text-4xl md:text-[44px] font-extrabold text-[#0f172a] mb-4">
              What Makes Us <span className="text-[#0075B6]">Different</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-medium">
              Core principles that drive our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 pt-12 text-center hover:shadow-[0_20px_40px_-15px_rgba(0,117,182,0.2)] transition-all duration-300 hover:-translate-y-2 relative overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group"
              >
                {/* Corner Number */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#f0f7ff] flex justify-center items-center text-[#0075B6] font-bold text-lg transition-colors duration-300 group-hover:bg-[#0075B6] group-hover:text-white"
                     style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}>
                  <span className="translate-x-3 -translate-y-3">0{index + 1}</span>
                </div>

                {/* Concentric Icon */}
                <div className="flex justify-center mb-8 relative">
                  <div className="w-28 h-28 rounded-full bg-[#f0f7ff] flex items-center justify-center relative">
                    <div className="w-24 h-24 rounded-full border border-[#dbeafe] flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-linear-to-b from-[#008ce6] to-[#005ea3] flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        {React.cloneElement(value.icon, { className: "w-8 h-8 text-white", strokeWidth: 2 })}
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Our Services Interactive Tabs */}
      <AboutServicesTabs />

      <div className="relative py-20 bg-white">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>

          <p className="text-md md:text-md text-gray-500 mb-12">
            Partner with us to achieve certification, compliance, and long-term
            business excellence.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/contact-us"
              className="inline-block bg-[#0075B6] text-white font-bold py-3 px-10 rounded-xl
                hover:bg-[#005a8f] transition-all duration-300
                shadow-lg hover:scale-105"
            >
              Contact Us Today
            </Link>

            <Link
              href="/bis-isi-mark-certification"
              className="border-2 border-[#0075B6] text-[#0075B6] font-bold py-3 px-10 rounded-xl
        hover:bg-[#0075B6] hover:text-white transition-all duration-300 cursor-pointer"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
