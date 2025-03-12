"use client";
import React from 'react';

const Section4 = () => {
  // Kartlar için veri dizisi
  const valuesData = [
    { id: 1, title: "Quality", number: "01" },
    { id: 2, title: "Reliability", number: "02" },
    { id: 3, title: "Creativity", number: "03" },
    { id: 4, title: "Ambition", number: "04" },
  ];

  return (
    <div className='mb-12 mt-36'>
      <div className="text-black text-3xl font-bold text-center my-8">
        Dgtlface Values
      </div>
      <div className="flex flex-row justify-center gap-8">
        {valuesData.map((value) => (
          <div
            key={value.id}
            className="p-6 bg-[#140f25] rounded-[22px] shadow-[-15px_30px_150px_0px_rgba(20,12,41,0.05)] inline-flex flex-col justify-start items-center gap-4"
          >
            <div className="inline-flex justify-start items-center gap-[22px]">
              <div className="w-[111px] text-center justify-center text-white text-2xl font-bold font-['Inter'] leading-[28.80px]">
                {value.title}
              </div>
              <div className="w-0 h-[27px] outline-2 outline-offset-[-1px] outline-white/20" />
              <div className="text-center justify-start text-[#a754cf] text-2xl font-bold font-['Inter'] leading-[28.80px]">
                {value.number}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tuşu Kartların Altına Yerleştir */}
      <div className="flex justify-center mt-8">
        <button
          className="gradient-border-button w-[114px] h-[42px] justify-center font-inter leading-[16.8px] tracking-[-0.28px]"
        >
          Explore
        </button>
      </div>

      {/* Pricing Section */}
      <div className='flex flex-col items-center justify-center gap-5 mt-32'>
        <div className="text-center justify-center text-[#140f25] text-[56px] font-bold font-['Inter'] capitalize leading-[61.60px]">Pricing</div>
        <div className="w-[448px] text-center justify-start text-[#140f25] text-sm font-normal font-['Inter'] leading-tight">Don't be intimidated by the costs, call us and let us explain everything in detail. Get a single price and do not pay additional fees during its validity.</div>
      </div>

      {/* Tuşu En Alta Yerleştir */}
      <div className="flex justify-center mt-8">
        <button
          className="gradient-border-button w-[114px] h-[42px] justify-center font-inter leading-[16.8px] tracking-[-0.28px]"
        >
          Call Now
        </button>
      </div>

      {/* Stil */}
      <style jsx>{`
        .gradient-border-button {
          position: relative;
          padding: 3px 0px;
          font-size: 14px;
          font-weight: 700;
          background: transparent;
          color: black;
          border: none;
          border-radius: 14px;
          cursor: pointer;
          z-index: 1;
          overflow: hidden;
        }
        .gradient-border-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: inherit;
          padding: 3px;
          background: linear-gradient(
            90deg,
            #a754cf,
            #54b9cf,
            #547dcf,
            #a754cf
          );
          background-size: 300%;
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          transition: background-position 0.1s;
        }

        .gradient-border-button:hover::before {
          animation: moveBorder 3s linear infinite;
        }

        @keyframes moveBorder {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default Section4;