"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  Shield, 
  Target, 
  Briefcase, 
  Globe, 
  FlaskConical, 
  Monitor, 
  GraduationCap, 
  ArrowRight,
  Leaf
} from "lucide-react";

export default function AboutServicesTabs() {
  const [activeTab, setActiveTab] = useState("Certifications");
  const [visibleCount, setVisibleCount] = useState(8);
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  // Reset visible count when switching tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setVisibleCount(8);
    setExpandedCardIndex(null);
  };

  const tabs = [
    "Certifications",
    "Testings",
    "Equipments",
    "Food Ingredients",
    "IT Services",
    "Student Panel",
  ];

  const servicesData = {
    "Certifications": [
      { title: "BIS (ISI Mark)", desc: "Certification for domestic products.", link: "/bis-isi-mark-certification", icon: <Shield className="w-6 h-6" /> },
      { title: "BIS ISI Mark for FMCS", desc: "Foreign Manufacturers compliance.", link: "/foreign-manufacturers-certification-scheme-fmcs", icon: <Globe className="w-6 h-6" /> },
      { title: "BIS Hallmarking HUID", desc: "Gold & Silver setup services.", link: "/hallmarking", icon: <Briefcase className="w-6 h-6" /> },
      { title: "NABL Certification", desc: "Laboratory accreditation services.", link: "/nabl-accreditation-services", icon: <FlaskConical className="w-6 h-6" /> },
      { title: "WPC Certification", desc: "Wireless & telecom equipment approval.", link: "/wpc-certification-services", icon: <Target className="w-6 h-6" /> },
      { title: "ISO Certification", desc: "International standard certification.", link: "/iso-certification-services", icon: <Globe className="w-6 h-6" /> },
      { title: "BIS (CRS) Registration", desc: "For Electronics & IT Products.", link: "/bis-crs-registration-electronic-products", icon: <Monitor className="w-6 h-6" /> },
      { title: "Solar Panel BIS", desc: "Solar panel registration services.", link: "/bis-registration-for-solar-panels", icon: <Leaf className="w-6 h-6" /> },
      { title: "Solar Panel Plant Setup", desc: "Complete plant setup & testing.", link: "/solar-panel-plant-setup", icon: <Target className="w-6 h-6" /> },
      { title: "BIS Jewellery", desc: "Jewellery registration services.", link: "/jewellery-registration", icon: <Briefcase className="w-6 h-6" /> },
      { title: "BEE Registration", desc: "Bureau of Energy Efficiency registration.", link: "/bee_services", icon: <Leaf className="w-6 h-6" /> },
      { title: "GEM Registration", desc: "Government e-Marketplace registration.", link: "/gem_services", icon: <Globe className="w-6 h-6" /> },
      { title: "Laboratory Setup", desc: "Lab equipment & complete setup.", link: "/lab_servces", icon: <FlaskConical className="w-6 h-6" /> },
      { title: "Training Services", desc: "National & International training.", link: "/training-services-national-international", icon: <GraduationCap className="w-6 h-6" /> },
      { title: "EPR Registration", desc: "Extended Producer Responsibility.", link: "/epr-registration-services", icon: <Leaf className="w-6 h-6" /> },
      { title: "Trademark Registration", desc: "Protect your brand identity.", link: "/trademark-registration-services", icon: <Shield className="w-6 h-6" /> },
      { title: "MSME NSIC", desc: "MSME & NSIC registration services.", link: "/msme-nsic-registration", icon: <Briefcase className="w-6 h-6" /> },
      { title: "FSSAI Registration", desc: "Food safety & standard registration.", link: "/fssai-registration-services", icon: <FlaskConical className="w-6 h-6" /> },
      { title: "Calibration Service", desc: "Precision calibration for equipment.", link: "/calibration-certificate", icon: <Target className="w-6 h-6" /> },
      { title: "CCTV & IP Camera Setup", desc: "Manufacturing plant setup.", link: "/cctv-and-ip-camera-manufacturing-plant-setup", icon: <Monitor className="w-6 h-6" /> },
      { 
        title: "Trading Product", 
        desc: "Sanitary napkins, baby diapers, etc.", 
        icon: <Briefcase className="w-6 h-6" />,
        subItems: [
          { title: "Sanitary Napkins", link: "/sanitary-napkins" },
          { title: "Baby Diaper", link: "/baby-diaper" },
          { title: "Adult Diaper", link: "/adult-diaper" }
        ]
      },
    ],
    "Testings": [
      { title: "Solar Panel Testing", desc: "Complete testing for solar panels.", link: "/solar-panel-testing-services", icon: <Target className="w-6 h-6" /> },
      { title: "Footwear Testing", desc: "Rigorous testing to national standards.", link: "/footwear-testing-services", icon: <Briefcase className="w-6 h-6" /> },
      { title: "Gold Testing", desc: "Purity verification and hallmarking.", link: "/gold-testing-services", icon: <FlaskConical className="w-6 h-6" /> },
      { title: "Toys Testing", desc: "Safety testing for children's toys.", link: "/toys-testing-services", icon: <Shield className="w-6 h-6" /> },
    ],
    "Equipments": [
      { 
        title: "Autoclave", 
        desc: "High-grade sterilization equipment.", 
        icon: <FlaskConical className="w-6 h-6" />,
        subItems: [
          { title: "Biomedical Waste Sterilizer", link: "/biomedical-waste-pulsation-vacuum-sterilizer" },
          { title: "Cement Autoclave", link: "/cement-autoclave" }
        ]
      },
      { title: "Solar Testing Equipment", desc: "Machinery to validate solar panels.", link: "/eqipmentforsolar", icon: <Target className="w-6 h-6" /> },
      { title: "Footwear Testing", desc: "Equipment for footwear safety.", link: "/equipmentforfootwear", icon: <Briefcase className="w-6 h-6" /> },
      { title: "Gold Testing Equipment", desc: "Precision machines for verification.", link: "/equipmentforgold", icon: <FlaskConical className="w-6 h-6" /> },
      { title: "Toys Testing Equipment", desc: "Safety testing equipment for toys.", link: "/equipmentfortoy", icon: <Shield className="w-6 h-6" /> },
      { title: "Laser Soldering Machine", desc: "Advanced laser soldering testing.", link: "/eqipmentsforleaser", icon: <Target className="w-6 h-6" /> },
    ],
    "Food Ingredients": [
      { title: "Natural Preservatives", desc: "Extend product shelf life.", link: "/food-ingredients", icon: <Leaf className="w-6 h-6" /> },
      { title: "Flavor Enhancers", desc: "Premium additives to improve taste.", link: "/food-ingredients", icon: <FlaskConical className="w-6 h-6" /> },
    ],
    "IT Services": [
      { title: "Web Development", desc: "Corporate website development.", link: "/it-services", icon: <Monitor className="w-6 h-6" /> },
      { title: "App Development", desc: "Mobile applications for business.", link: "/it-services", icon: <Monitor className="w-6 h-6" /> },
    ],
    "Student Panel": [
      { title: "Training Programs", desc: "Compliance and technical training.", link: "/student-panel", icon: <GraduationCap className="w-6 h-6" /> },
      { title: "Certification Courses", desc: "Skill enhancement certifications.", link: "/student-panel", icon: <Briefcase className="w-6 h-6" /> },
    ]
  };

  const currentCards = servicesData[activeTab] || [];
  const displayedCards = currentCards.slice(0, visibleCount);
  const hasMore = visibleCount < currentCards.length;

  return (
    <div className="py-16 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-[#0075B6]/30"></div>
            <div className="inline-block bg-[#0075B6] text-white px-5 py-2 rounded-full text-sm font-bold tracking-widest shadow-md">
              OUR SERVICES
            </div>
            <div className="h-[2px] w-12 bg-[#0075B6]/30"></div>
          </div>
          <h2 className="text-4xl md:text-[44px] font-extrabold text-[#0f172a] mb-4">
            Comprehensive <span className="text-[#0075B6]">Solutions</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
            Explore our wide range of services designed to ensure quality, compliance, and growth for your business.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-6 py-2.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 shadow-sm cursor-pointer
                ${
                  activeTab === tab
                    ? "bg-[#0075B6] text-white shadow-md shadow-[#0075B6]/30 -translate-y-1"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:-translate-y-0.5"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Premium Card Grid (More Compact & Fully Clickable) */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 transition-opacity duration-500 ease-in-out items-start"
        >
          {displayedCards.map((card, index) => {
            
            // For cards with sub-items (Trading Product), make the card act as a toggle
            if (card.subItems) {
              return (
                <div
                  key={index}
                  onClick={() => setExpandedCardIndex(expandedCardIndex === index ? null : index)}
                  className={`bg-white rounded-2xl p-6 transition-all duration-300 border border-gray-100 group flex flex-col animate-fade-in-up h-auto cursor-pointer
                    ${expandedCardIndex === index 
                      ? 'shadow-[0_20px_40px_-15px_rgba(0,117,182,0.2)] -translate-y-1 ring-1 ring-[#0075B6]/20' 
                      : 'hover:-translate-y-1 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(0,117,182,0.2)]'
                    }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#f0f7ff] flex items-center justify-center text-[#0075B6] mb-4 group-hover:bg-[#0075B6] group-hover:text-white transition-colors duration-300 shadow-sm">
                    {card.icon}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0075B6] transition-colors duration-300 leading-tight">
                    {card.title}
                  </h3>
                  
                  <p className="text-gray-500 leading-relaxed text-[13px] mb-5 flex-grow">
                    {card.desc}
                  </p>

                  <div className="mt-auto">
                    <div className="inline-flex items-center gap-1.5 text-[#0075B6] font-bold text-[13px] hover:text-[#005a8f] transition-colors group/link w-full text-left">
                      {expandedCardIndex === index ? "CLOSE PRODUCTS" : "VIEW PRODUCTS"}
                      <ArrowRight className={`w-3.5 h-3.5 transform transition-transform ${expandedCardIndex === index ? 'rotate-90' : 'group-hover/link:translate-x-1'}`} />
                    </div>

                    {/* Expanded Sub-items List */}
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedCardIndex === index ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                      <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
                        {card.subItems.map((sub, idx) => (
                          <Link 
                            key={idx} 
                            href={sub.link}
                            onClick={(e) => e.stopPropagation()} // Prevent closing the card when clicking the link
                            className="text-[14px] text-gray-700 hover:text-[#0075B6] hover:bg-[#f0f7ff] p-3 rounded-xl transition-all duration-300 flex items-center justify-between group/item border border-transparent hover:border-[#0075B6]/20"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#0075B6]/40 group-hover/item:bg-[#0075B6] group-hover/item:scale-125 transition-all"></div>
                              <span className="font-bold">{sub.title}</span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover/item:text-[#0075B6] group-hover/item:translate-x-1 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // For standard cards, wrap the entire card in a Link to make it fully clickable
            return (
              <Link
                key={index}
                href={card.link}
                className="bg-white rounded-2xl p-6 transition-all duration-300 border border-gray-100 group flex flex-col animate-fade-in-up h-auto hover:-translate-y-1 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(0,117,182,0.2)] block cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f0f7ff] flex items-center justify-center text-[#0075B6] mb-4 group-hover:bg-[#0075B6] group-hover:text-white transition-colors duration-300 shadow-sm">
                  {card.icon}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0075B6] transition-colors duration-300 leading-tight">
                  {card.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed text-[13px] mb-5 flex-grow">
                  {card.desc}
                </p>

                <div className="inline-flex items-center gap-1.5 text-[#0075B6] font-bold text-[13px] group-hover:text-[#005a8f] transition-colors mt-auto">
                  KNOW MORE
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:-translate-y-0.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setVisibleCount(currentCards.length)}
              className="border-2 border-[#0075B6] text-[#0075B6] font-bold py-2.5 px-8 rounded-xl hover:bg-[#0075B6] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
            >
              View All Services
            </button>
          </div>
        )}
        
      </div>
    </div>
  );
}
