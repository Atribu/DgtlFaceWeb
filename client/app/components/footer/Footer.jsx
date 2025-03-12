import React from "react";
import Image from "next/image";
import Link from "next/link";
import Facebook from "./Icons/fc.jsx"
import Instagram from "./Icons/instagram.jsx"
import Linkedin from "./Icons/linkedin.jsx"
import WhatsApp from "./Icons/whatsapp.jsx"
import Youtube from "./Icons/youtube.jsx"
import Logo from "../header/svg/DgtlFaceLogo.jsx"



export default function Footer() {
  return (
    <footer className="bg-[#140f25] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Üst bölüm: Logo ve Navigasyon */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
          <Logo className="w-52" />
          </div>
          {/* Navigasyon Linkleri */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col gap-2">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/about" className="hover:underline">
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
        <div className="mt-8 flex justify-center gap-6">
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-9 h-9"/>
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-9 h-9"/>
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <WhatsApp className="w-9 h-9"/>
          </Link>
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-9 h-9"/>
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Youtube className="w-9 h-9"/>
          </Link>
        </div>

        {/* Alt bölüm: Telif Hakkı */}
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} DGTLFACE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
