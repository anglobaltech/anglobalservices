import sys

with open('/Users/rishabh/anglobalservices/components/Hero.jsx', 'r') as f:
    lines = f.readlines()

new_content = """      {/* Trusted by Businesses Section */}
      <section className="w-full relative overflow-hidden flex items-center min-h-[550px] lg:min-h-[600px] xl:min-h-[650px] py-12 lg:py-16">
        
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-no-repeat bg-cover bg-[position:10%_center] md:bg-[position:5%_center] lg:bg-[position:20%_center] xl:bg-center contrast-[1.05] saturate-[1.1]" 
          style={{ backgroundImage: "url('/trusted-by-business.webp')", imageRendering: "-webkit-optimize-contrast" }}
        ></div>

        <div className="relative w-full max-w-[1400px] mx-auto px-6 z-10 flex flex-col h-full justify-center">
          
          {/* Main Text Content */}
          <div className="flex flex-col max-w-md md:max-w-xl lg:max-w-2xl text-left">
            {/* Heading */}
            <h2 className="text-[36px] md:text-[42px] lg:text-[48px] font-black tracking-tight text-[#0a1b35] leading-[1.1] mb-1">
              Trusted by Businesses.
            </h2>
            <h2 className="text-[36px] md:text-[42px] lg:text-[48px] font-black tracking-tight text-[#0a1b35] leading-[1.1] mb-3">
              Proven by <span className="text-[#0066ff]">Results.</span>
            </h2>

            {/* Blue underline */}
            <div className="w-16 lg:w-[72px] h-[5px] bg-[#0066ff] mb-4 lg:mb-6 rounded-full"></div>

            {/* Description */}
            <div className="max-w-[550px]">
              <p className="text-[#0a1b35] text-[16px] md:text-[18px] lg:text-[22px] font-black leading-snug mb-3 lg:mb-4">
                Your Strategic Partner for Global Compliance, Quality Standards, and Business Growth.
              </p>
              <p className="text-[#1a365d] text-[14px] md:text-[15px] lg:text-[17px] font-bold leading-relaxed">
                We empower enterprises worldwide with seamless <strong className="font-black text-[#0047b3]">ISO Certification, BIS Registration, Trademark, and EPR Compliance</strong> services. Our expert consultants ensure zero-hassle paperwork, lightning-fast approvals, and 100% regulatory adherence.
              </p>
            </div>
          </div>

          {/* Stats Bar (Pill Card) */}
          <div className="mt-10 md:mt-12 lg:mt-16 self-start w-full md:w-auto">
            <div className="bg-[#041029]/90 rounded-3xl lg:rounded-full p-6 lg:py-4 lg:px-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-[#23589b] inline-block backdrop-blur-md w-full lg:w-auto">
              <div className="grid grid-cols-2 gap-y-8 gap-x-6 lg:flex lg:items-center divide-x-0 lg:divide-x lg:divide-[#4d86c4]">
                
                {/* Stat 1 */}
                <div className="flex items-center gap-3 lg:gap-4 lg:px-7">
                  <div className="bg-gradient-to-br from-[#0055ff] to-[#0099ff] rounded-full p-2.5 shrink-0 flex items-center justify-center w-12 h-12 lg:w-[54px] lg:h-[54px] shadow-[0_0_15px_rgba(0,153,255,0.8)] border border-[#66b3ff]">
                    <svg className="w-6 h-6 lg:w-[28px] lg:h-[28px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl lg:text-[24px] font-black text-[#8ad1ff] leading-none mb-[2px] tracking-wide">10,000+</h3>
                    <p className="text-white text-xs lg:text-[13px] font-medium leading-[1.25]">Certifications<br className="hidden lg:block"/>Facilitated</p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-center gap-3 lg:gap-4 lg:px-7">
                  <div className="bg-gradient-to-br from-[#0055ff] to-[#0099ff] rounded-full p-2.5 shrink-0 flex items-center justify-center w-12 h-12 lg:w-[54px] lg:h-[54px] shadow-[0_0_15px_rgba(0,153,255,0.8)] border border-[#66b3ff]">
                    <svg className="w-6 h-6 lg:w-[28px] lg:h-[28px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z M21 12c0 3-3 6-9 6s-9-3-9-6 3-6 9-6 9 3 9 6 M3.5 9h17 M3.5 15h17"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl lg:text-[24px] font-black text-[#8ad1ff] leading-none mb-[2px] tracking-wide">30+</h3>
                    <p className="text-white text-xs lg:text-[13px] font-medium leading-[1.25]">Countries<br className="hidden lg:block"/>Served</p>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-center gap-3 lg:gap-4 lg:px-7">
                  <div className="bg-gradient-to-br from-[#0055ff] to-[#0099ff] rounded-full p-2.5 shrink-0 flex items-center justify-center w-12 h-12 lg:w-[54px] lg:h-[54px] shadow-[0_0_15px_rgba(0,153,255,0.8)] border border-[#66b3ff]">
                    <svg className="w-6 h-6 lg:w-[28px] lg:h-[28px] text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z M17 11.5c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5c-.24 0-.46.04-.68.11C16.92 7.37 17.5 8.6 17.5 10c0 1.4-.58 2.63-1.18 3.39.22.07.44.11.68.11zm1.75 3c-.34-.14-.72-.25-1.11-.33.91.73 1.36 1.63 1.36 2.83v2h4v-2c0-1.84-2.82-2.33-4.25-2.5z M7 11.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5c.24 0 .46.04.68.11C7.08 7.37 6.5 8.6 6.5 10c0 1.4.58 2.63 1.18 3.39-.22.07-.44.11-.68.11zm-1.75 3C3.82 14.67 1 15.16 1 17v2h4v-2c0-1.2.45-2.1 1.36-2.83-.39.08-.77.19-1.11.33z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl lg:text-[24px] font-black text-[#8ad1ff] leading-none mb-[2px] tracking-wide">8,000+</h3>
                    <p className="text-white text-xs lg:text-[13px] font-medium leading-[1.25]">Satisfied<br className="hidden lg:block"/>Clients</p>
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="flex items-center gap-3 lg:gap-4 lg:px-7">
                  <div className="bg-gradient-to-br from-[#0055ff] to-[#0099ff] rounded-full p-2.5 shrink-0 flex items-center justify-center w-12 h-12 lg:w-[54px] lg:h-[54px] shadow-[0_0_15px_rgba(0,153,255,0.8)] border border-[#66b3ff]">
                    <svg className="w-6 h-6 lg:w-[28px] lg:h-[28px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 19V5 M8 19v-6 M12 19v-8 M16 19v-11 M20 19v-4 M4 5l6 6 4-3 6 5 M16 5h4v4"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl lg:text-[24px] font-black text-[#8ad1ff] leading-none mb-[2px] tracking-wide">20+</h3>
                    <p className="text-white text-xs lg:text-[13px] font-medium leading-[1.25]">Years of<br className="hidden lg:block"/>Expertise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>\n"""

lines = lines[:772] + [new_content] + lines[958:]

with open('/Users/rishabh/anglobalservices/components/Hero.jsx', 'w') as f:
    f.writelines(lines)
