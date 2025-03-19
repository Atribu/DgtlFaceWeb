import React from 'react';
import Image from "next/image";
import Block from "../Image/services.png";
import Gradyan from "../Image/gradyan.png";

const Section1 = () => {
  return (
    <div className="w-full h-[55vh] lg:min-h-screen bg-[#140f25] flex flex-col md:flex-row items-center justify-center p-5 relative overflow-hidden">
      {/* Gradyan Resmi Eklendi */}
      <div className="absolute inset-x-0 bottom-0 z-20 overflow-hidden">
        <Image 
          src={Gradyan} 
          alt="Gradyan" 
          className="w-full"
          layout="responsive"
          width={1920} // Resmin orijinal genişliği
          height={200} // Resmin orijinal yüksekliği
        />
      </div>

      {/* Image Section */}
      <div className='flex w-[50%] h-auto md:w-1/2 items-center justify-center mt-[-20px] md:mt-[-80px] ml-8 md:ml-28 z-10'>
        <Image 
          src={Block} 
          alt="Background" 
          className="w-full max-w-md md:max-w-lg lg:max-w-xl"
        />
      </div>
      
      {/* Text Section */}
      <div className='flex flex-col w-full md:w-1/2 items-center justify-center md:items-start text-center md:text-start gap-5 mt-[-30px] md:mt-[-50px] pl-8 md:pl-12 z-10'>
        <div className="relative">
          <span className="text-white text-[24px] lg:text-3xl md:text-5xl lg:text-[56px] font-bold font-['Inter'] capitalize leading-tight">Our<br/></span>
          <span className="text-[#a754cf] text-[24px] lg:text-3xl md:text-5xl lg:text-[56px] font-bold font-['Inter'] capitalize leading-tight">Services</span>
        </div>
        <div className="hidden lg:flex w-full max-w-md md:max-w-lg text-white text-base md:text-lg font-normal font-['Inter'] leading-6 md:leading-[25.20px]">
          We know the best way to open up to a new world. You can find everything that is important for you to take the right steps in branding and growth here, and you can learn the whole process by calling us.
        </div>
        <button className="px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-[14px] border-2 border-[#54b9cf] inline-flex justify-center items-center gap-2.5 text-white text-sm md:text-base font-bold font-['Inter'] leading-[16.80px] hover:bg-[#54b9cf] transition duration-300">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Section1;