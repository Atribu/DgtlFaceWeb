import React from "react";
import Image from "next/image";
import Link from "next/link";
import Facebook from "./Icons/fc.jsx"
import Instagram from "./Icons/instagram.jsx"
import Linkedin from "./Icons/linkedin.jsx"
import WhatsApp from "./Icons/whatsapp.jsx"
import Youtube from "./Icons/youtube.jsx"
import Logo from "../header/svg/DgtlFaceLogo.jsx"
import sutunlar from "./images/sutunlar.png"
import { PiYoutubeLogo } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="bg-[#140f25] text-white py-12 relative overflow-y-hidden">
      <div className="absolute z-[1] inset-0 bg-[#140F25]/40 flex md:hidden"></div>
      <div className="container mx-auto px-4">
        {/* Üst bölüm: Logo ve Navigasyon */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-6 md:mb-0 z-[20]">
          <Logo className="w-52 flex md:absolute md:left-1/2 md:-translate-x-1/2 md:top-12" />
          </div>
          <Image src={sutunlar} width={sutunlar.width} height={sutunlar.height} alt="sutunlar" className="absolute top-32  md:bottom-0 md:left-1/2 md:-translate-x-1/2"/>
          {/* Navigasyon Linkleri */}
          <div className="flex flex-col md:flex-row gap-8 z-[20] mt-10">
            <div className="flex flex-col gap-2">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/aboutus" className="hover:underline">
                About
              </Link>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Orta bölüm: Sosyal Medya İkonları */}
        <div className="mt-16 flex justify-center md:justify-start gap-6 z-50">
          <Link href="https://www.instagram.com/dgtlface/" target="_blank" rel="noopener noreferrer" className="flex z-[20]">
                <Instagram className="w-9 h-9 z-[20]"/>
          </Link>
          <Link href="https://tr.linkedin.com/company/dgtlface" target="_blank" rel="noopener noreferrer" className="flex z-[20]">
                <Linkedin className="w-9 h-9 z-[20]"/>
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex z-[20]">
                <WhatsApp className="w-9 h-9 z-[20]"/>
          </Link>
          <Link href="https://www.facebook.com/dgtlface" target="_blank" rel="noopener noreferrer" className="flex z-[20]">
                <Facebook className="w-9 h-9 z-[20]"/>
          </Link>
          <Link href="https://www.youtube.com/@dgtlface" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center border-[2px] border-white rounded-full bg-transparent w-9 h-9 z-[20]">
                <PiYoutubeLogo size={21} />
          </Link>
        </div>

        {/* Alt bölüm: Telif Hakkı */}
        <div className="mt-8 text-center text-sm text-gray-400 md:mt-40 z-[20]">
          © {new Date().getFullYear()} DGTLFACE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
