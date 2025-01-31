"use client";

import React from "react";
import Logo from "./svg/DgtlFaceLogo";

const Header = () => {
  return (
    <header className="w-[61%] right-1/2 rounded-[20px] translate-x-1/2 bg-gray-900 text-white bg-transparent mt-[42px] fixed h-[54.5px] z-[999] flex items-center justify-center gap-32  top-0 backdrop-blur-md ">
      {/* Logo Alanı */}
      <Logo className="w-auto" width={219} height={54.454} />

      {/* 
        Menü (nav) => Tek bir sabit gradient border
        "gradient-border-nav" sınıfı ile.
      */}
      <nav className="gradient-border-nav flex flex-row items-center justify-center  text-center px-4 py-2 backdrop-blur-xl whitespace-nowrap">
        <ul className="hidden md:flex gap-6 items-center justify-center font-inter28 text-[16px] font-semibold leading-[22.4px] tracking-[-0.32px] m-0">
          <li>
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              About us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Örnek Buton */}
      <button className="hidden w-[219px] py-[16px] justify-center whitespace-nowrap text-[#140F25] md:inline-block bg-[#fff] rounded-[20px] font-inter28 text-[18px] font-bold leading-[21.6px] tracking-[-0.36]">
        +90 ( 0532 ) 645 17 67
      </button>

      <style jsx>{`
        .gradient-border-nav {
          border-radius: 20px;
          position: relative;
          border-radius: 20px; /* Kenarları yuvarla */
          overflow: hidden;   /* kenarlardan taşma engellenir */
          --tw-text-opacity: 1;
          background-color: rgba(20, 15, 37, 0.1);
          backdrop-filter: blur(37.5px);
          -webkit-backdrop-filter: blur(13500px);
        }

        .gradient-border-nav::before {
          content: "";
          position: absolute;
          inset: 0; /* top:0, right:0, bottom:0, left:0 */
          border-radius: 20px;
          padding: 0.3px;

          /* Dört renkli sabit degrade */
          background: linear-gradient(
            90deg,
            #a754cf,
            #54b9cf,
            #547dcf,
            #a754cf
          );
          /* Sabit boyut, sabit konum => animasyon yok */
          background-size: 100%;
          background-position: 50% 50%;

          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}</style>
    </header>
  );
};

export default Header;
