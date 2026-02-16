import React from "react";
import Link from "next/link";
export const metadata = {
  title: "About AN Global Services | Trusted Certification & Compliance Consultancy",
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
    { number: "10000+", label: "Clients Served" },
    { number: "8+", label: "Years Experience" },
    { number: "500+", label: "Certifications" },
    { number: "99%", label: "Success Rate" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-linear-to-r from-[#004f7c] via-[#006da8] to-[#0075B6]"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-20">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
              About AN Global Services
            </h1>
            <p className="text-md md:text-xl text-white/90 max-w-3xl mx-auto">
              Your Trusted Partner in Industrial Certification & Compliance
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#0075B6] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute   bg-[#0075B6] opacity-10 rounded-xl"></div>
              <img
                src="/about-us1.jpeg"
                alt="Professional Team"
                className="relative rounded-xl shadow-xl w-full"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block bg-[#0075B6]/10 text-[#0075B6] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              WHO WE ARE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Leading Consulting Firm
            </h2>
            <div className="space-y-4 text-gray-700 text-md leading-relaxed">
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
                Registration Scheme (CRS) for Electronics & IT Goods, 
                 BIS hallmarking of precious For
                metals/jewellery, BEE Registration Services, Trademark Registration Services,
                CE Certification Services,  EPR Authorization (for
                e-waste), Solar Panel BIS Registration Services, WPC Approval and TEC Certification, MSME & NSIC
                Certification, WMI Certification, NABL Accreditation Consultancy, WPC
                License and many more.
              </p>
              <p>
                The Government of India has established various parameters to
                ensure the safety of the customers which includes providing
                high-quality products to the customer.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <div className="flex items-center gap-2 text-[#0075B6]">
                <CheckCircle className="w-6 h-6" />
                <span className="font-semibold">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2 text-[#0075B6]">
                <CheckCircle className="w-6 h-6" />
                <span className="font-semibold">NABL Certified Trainer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#2f4f8f] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR VALUES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Core principles that drive our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-block p-4 bg-[#0075B6]/10 rounded-full text-[#0075B6] mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
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
