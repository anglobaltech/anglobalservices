import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-white border-b border-gray-400 h-24">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="cursor-pointer">
          <div className="flex items-center gap-2 lg:gap-3 h-full">
            <Image
              src="/company-logo.png"
              alt="AN Global Services Logo"
              width={280}
              height={64}
              priority
              className="h-10 md:h-12 lg:h-16 w-auto object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </div>
        </Link>

        {/* Contact Info */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8 text-xs">
          {/* Call */}
          <a href="tel:+917782069184" className="flex items-center gap-1.5 lg:gap-2 group">
            <Image
              src="/call-image.png"
              alt="Call"
              width={22}
              height={22}
              className="group-hover:scale-105 transition w-5 h-5 lg:w-[22px] lg:h-[22px]"
            />
            <div className="leading-tight">
              <p className="text-gray-700 text-[10px] lg:text-[11px] text-center">Call Us</p>
              <p className="text-gray-900 font-semibold text-[11px] lg:text-sm group-hover:text-[#0072b1] whitespace-nowrap">
                +91 7782069184
              </p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:info@anglobalservices.com"
            className="flex items-center gap-1.5 lg:gap-2 group"
          >
            <Image
              src="/email.png"
              alt="Email"
              width={22}
              height={22}
              className="group-hover:scale-105 transition w-5 h-5 lg:w-[22px] lg:h-[22px]"
            />
            <div className="leading-tight">
              <p className="text-gray-700 text-[10px] lg:text-[11px] text-center">Email</p>
              <p className="text-gray-900 font-semibold text-[11px] lg:text-sm group-hover:text-[#0072b1] whitespace-nowrap">
                info@anglobalservices.com
              </p>
            </div>
          </a>

          <a
            href="/company-profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#005f86] text-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-md text-[10px] lg:text-xs font-semibold hover:bg-[#005f86] transition whitespace-nowrap"
          >
            COMPANY PROFILE
          </a>
        </div>
      </div>
    </header>
  );
}
