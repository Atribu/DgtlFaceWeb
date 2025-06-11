import React from 'react';
import Image from "next/image";
import Main from "../Image/ContactMain.png";

const Contact = () => {
  return (
    <div id='contact' className="w-full h-[375px] sm:h-[400px] md:h-[500px] lg:h-[570px] relative bg-[#080612] ">
      {/* Arkaplan Resmi */}
      <Image 
        src={Main} 
        alt="main" 
        style={{ objectFit: 'cover' }} // `objectFit` yerine `style` kullanıldı
        className="absolute z-0 top-1/2 -translate-y-1/2"
      />

      {/* Metinler */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 text-center px-4 pt-12 gap-2">
        {/* Başlık */}
        <h1 className="relative text-center">
          <span className="text-white text-[24px] lg:text-[56px] font-bold font-inter capitalize leading-[1.1] sm:leading-[61.60px]">
            Contact us
          </span>{" "}
          <span 
            className="bg-gradient-to-r from-[#54b9cf] to-[#a754cf] text-transparent bg-clip-text text-[24px] lg:text-[56px] font-bold font-inter capitalize leading-[1.1] sm:leading-[61.60px]">
            Now
          </span>
        </h1>

        {/* Alt Metin */}
        <div className='flex flex-row gap-1 items-center justify-center'>
          <div className="text-white text-xl sm:text-2xl font-bold font-inter leading-[1.2] sm:leading-[28.80px]">
            DGTLFACE
          </div>
          <div className="text-white text-base sm:text-lg font-normal font-inter leading-[1.2] sm:leading-[25.20px]">
            – Digital Technology Partner
          </div>
        </div>
      </div>
      
      {/* Call Now Button */}
      <div className="absolute bottom-12 sm:bottom-24 md:bottom-36 left-1/2 transform -translate-x-1/2">
        <button 
          className="px-6 py-3 sm:px-8 sm:py-4 text-white text-sm font-bold font-inter leading-[16.80px] relative rounded-[14px] overflow-hidden"
          style={{
            backgroundColor: 'transparent', // Arka plan rengi yok
            border: '2px solid transparent', // Border şeffaf
          }}
        >
          {/* Gradient Border için Pseudo-element */}
          <div 
            className="absolute inset-0 rounded-[14px] p-[2px]"
            style={{
              background: 'linear-gradient(to right, #54b9cf, #a754cf)',
              zIndex: -1,
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', // Mask ile iç kısmı şeffaf yap
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', // Safari desteği
              maskComposite: 'exclude', // İç kısmı şeffaf yap
              WebkitMaskComposite: 'xor', // Safari desteği
            }}
          />
          <span className="relative z-10 mt-[50px]">Call Now</span>
        </button>
      </div>
    </div>
  );
};

export default Contact;