import React from 'react';
import Dgtlface from "../Section5/Images/dgtlfaceoffice.png";
import Image from 'next/image';

export default function WhyUsSection() {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <div className="w-[1264px] px-12 pt-7 pb-12 bg-white rounded-[22px] shadow-[0px_7px_50px_0px_rgba(20,12,41,0.05)] inline-flex flex-col justify-start items-center gap-3.5">
          <div className="relative text-center justify-start text-[#140f25] text-5xl font-bold font-['Inter'] leading-[57.60px]">
            Why Us?
          </div>
          <div className="w-[718px] relative text-center justify-start text-[#140f25] text-base font-normal font-['Inter'] leading-snug">
            We create a complex mosaic of carefully designed strategies to develop a harmonious relationship between the brand and its customer base, ensuring that a symphony of satisfaction resonates in the digital environment. A digital marketing agency targeting customer satisfaction, we offer an in-depth solution to the delicate rhythm between return on sales and increasing sales conversion.
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-12">
        <div className="flex flex-col gap-12">
          {/* Card: Innovative Solutions */}
          <div className="px-[59px] py-12 bg-white rounded-[22px] shadow-[0px_7px_50px_0px_rgba(20,12,41,0.05)] inline-flex flex-col justify-start items-start text-start gap-3">
            <div className="w-[502px] relative justify-start text-[#140f25] text-2xl font-bold font-['Inter'] leading-[28.80px]">
              Innovative Solutions
            </div>
            <div className="flex flex-col justify-start items-start gap-[18px]">
              <div className="w-[502px] relative text-justify justify-start text-[#140f25] text-base font-normal font-['Inter'] leading-snug">
                At DGTLFACE, we offer innovative and customized solutions in the ever-changing world of technology. By deeply understanding our clients' unique needs, we develop digital solutions that give them a competitive edge. Utilizing the latest technologies like artificial intelligence, machine learning, and cloud computing, we optimize business processes and boost efficiency.
              </div>
              <button
                type="button"
                className="px-8 py-4 rounded-[14px] border-2 border-[#54b9cf] inline-flex justify-center items-center gap-2.5"
              >
                <span className="relative text-[#140f25] text-sm font-bold font-['Inter'] leading-[16.80px]">
                  Explore
                </span>
              </button>
            </div>
          </div>
          {/* Card: Expert Team */}
          <div className="px-[59px] py-12 rounded-[22px] shadow-[0px_7px_50px_0px_rgba(20,12,41,0.05)] inline-flex flex-col justify-start items-start gap-3 overflow-hidden relative">
            {/* Arka plan resmi */}
            <Image 
              src={Dgtlface}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#140f25]/0 via-[#140f25]/90 to-[#140f25]"></div>
            <div className="w-[502px] h-[230px] relative justify-end text-white text-2xl font-bold font-['Inter'] leading-[28.80px]">
              Expert Team
            </div>
            <div className="flex flex-col justify-start items-start gap-[18px]">
              <div className="w-[502px] relative text-justify justify-start text-white text-base font-normal font-['Inter'] leading-snug">
                Our team, comprised of experts and experienced professionals, is the key to achieving success in your projects. The DGTLFACE team consists of individuals with profound knowledge and experience in their respective fields. We apply innovative technologies to your projects without compromising on quality and excellence.
              </div>
              <button
                type="button"
                className="px-8 py-4 rounded-[14px] border-2 border-[#54b9cf] inline-flex justify-center items-center gap-2.5 relative z-10"
              >
                <span className="relative text-white text-sm font-bold font-['Inter'] leading-[16.80px]">
                  Explore
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          {/* Card: Business Partner Oriented Approach */}
          <div className="px-[59px] py-12 rounded-[22px] shadow-[0px_7px_50px_0px_rgba(20,12,41,0.05)] inline-flex flex-col justify-start items-start gap-3 overflow-hidden relative">
            {/* Arka plan resmi */}
            <Image 
              src={Dgtlface}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#140f25]/0 via-[#140f25]/90 to-[#140f25]"></div>
            {/* İçerikler */}
            <div className="w-[502px] h-[252px] relative z-10 text-white text-2xl font-bold font-['Inter'] leading-[28.80px]">
              Business Partner Oriented Approach
            </div>
            <div className="flex flex-col justify-start items-start gap-[18px] relative z-10">
              <div className="w-[502px] relative text-justify text-white text-base font-normal font-['Inter'] leading-snug">
                DGTLFACE puts your satisfaction above all else and treats each project as unique and special. As DGTLFACE, we aim to establish long-term relationships with your customers. We listen to your needs, understand your expectations and inform you at every step. We build trust by prioritising transparency in our project processes.
              </div>
              <button
                type="button"
                className="px-8 py-4 rounded-[14px] border-2 border-[#54b9cf] inline-flex justify-center items-center gap-2.5 relative z-10"
              >
                <span className="relative text-white text-sm font-bold font-['Inter'] leading-[16.80px]">
                  Explore
                </span>
              </button>
            </div>
          </div>
          {/* Card: Continuous Support and Counselling */}
          <div className="px-[59px] py-12 bg-white rounded-[22px] shadow-[0px_7px_50px_0px_rgba(20,12,41,0.05)] inline-flex flex-col justify-start items-start gap-3">
            <div className="w-[502px] relative justify-start text-[#140f25] text-2xl font-bold font-['Inter'] leading-[28.80px]">
              Continuous Support and Counselling
            </div>
            <div className="flex flex-col justify-start items-start gap-[18px]">
              <div className="w-[502px] relative text-justify justify-start text-[#140f25] text-base font-normal font-['Inter'] leading-snug">
                As your technology partner, we are with you at every stage of the project. Even after project delivery, we ensure that your business runs smoothly by providing continuous support and consultancy services. With DGTLFACE, you can closely follow technological developments and continuously improve your business.
              </div>
              <button
                type="button"
                className="px-8 py-4 rounded-[14px] border-2 border-[#54b9cf] inline-flex justify-center items-center gap-2.5"
              >
                <span className="relative text-[#140f25] text-sm font-bold font-['Inter'] leading-[16.80px]">
                  Explore
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}
