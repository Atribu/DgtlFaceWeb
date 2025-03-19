const Section1 = () => {
  return (
    <div className="flex flex-col justify-center items-start text-start lg:text-center lg:items-center">
      {/* İlk Bölüm */}
      <div className="w-full h-[375px] md:h-[400px] lg:h-[570px] relative bg-[#140f25] flex justify-center items-center text-center">
        <div className="text-center px-4">
          <div className="text-white font-inter text-[24px] md:text-[32px] lg:text-[56px] font-bold leading-[110%] tracking-[-1.12px] capitalize">
            A Comprehensive <br /> Insight into{' '}
            <span className="bg-gradient-to-r from-[#54B9CF] via-[#547DCF] to-[#A754CF] bg-clip-text text-transparent">
              DGTLFACE
            </span>
          </div>
        </div>
      </div>

      {/* İkinci Bölüm */}
      <div className="w-full py-6 mb-1 sm:py-8 md:py-10 bg-white mt-12 sm:mt-16 md:mt-24 sm:-mb-8 ">
        <p className="text-[#140F25] text-start lg:text-center font-inter text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-semibold leading-[110%] tracking-[-1.12px] ml-4">
          Be The Best in
        </p>
        <p className="text-[#140F25] text-start lg:text-center font-inter text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-semibold leading-[110%] tracking-[-1.12px]  ml-4">
          The{' '}
          <span className="bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF] bg-clip-text text-transparent">
            Digital World
          </span>
        </p>
      </div>

      {/* Açıklama Metni */}
      <div className="text-[#140F25] mb-8 sm:mb-10 md:mb-12 text-start lg:text-center font-inter text-[12px] sm:text-[14px] font-normal leading-[140%] tracking-[-0.28px] w-[90%] sm:w-[490px] lg:w-[28%] px-4">
        Clearly define your digital goals. Whether it's increasing online visibility, expanding market reach, or improving customer engagement, having well-defined objectives is crucial. Prioritize user experience in all your digital endeavors. A user-friendly website or application, intuitive interfaces, and personalized content contribute to a positive user experience.
      </div>

      {/* Buton */}
      <button className="flex h-[42px] sm:h-[45px] px-6 sm:px-8 py-3 sm:py-4 justify-center items-center gap-2 rounded-[22px] border-2 border-[#54B9CF] -mt-4 w-[90%] lg:w-[207px] ml-4 whitespace-nowrap">
        <p className="text-[14px] sm:text-[16px] md:text-[18px] font-inter font-bold leading-[120%] tracking-[-0.36px] text-[var(--Main-Dark-Blue,#140F25)] ">
          Explore Services
        </p>
      </button>
    </div>
  );
};

export default Section1;