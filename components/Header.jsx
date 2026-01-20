import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-white border-b border-gray-400 h-24">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="cursor-pointer">
          <div className="flex items-center gap-3 h-full">
            <Image
              src="/logo.png"
              alt="AN Global Services Logo"
              width={280}
              height={64}
              priority
              className="h-16 w-auto object-contain  cursor-pointer transition-transform duration-300 hover:scale-105 "
            />
          </div>
        </Link>

        {/* Contact Info */}
        <div className="hidden md:flex items-center gap-8 text-xs">
          {/* Call */}
          <div className="flex items-center gap-2">
            <Image src="/call.png" alt="Call" width={22} height={22} />
            <div className="leading-tight">
              <p className="text-gray-700 text-[11px] text-center">Call Us</p>
              <p className="text-gray-900 font-semibold text-sm">
                +91 7782069184
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <Image src="/email.png" alt="Email" width={22} height={22} />
            <div className="leading-tight">
              <p className="text-gray-700 text-[11px] text-center">Email</p>
              <p className="text-gray-900 font-semibold text-sm">
                info@anglobalservices.com
              </p>
            </div>
          </div>

          <a
            href="/company-profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#005f86] text-white px-4 py-2 rounded-md text-xs font-semibold hover:bg-[#005f86] transition"
          >
            COMPANY PROFILE
          </a>
        </div>
      </div>
    </header>
  );
}
