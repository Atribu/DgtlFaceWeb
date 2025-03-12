const Section1 = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* İlk Bölüm */}
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[570px] relative bg-[#140f25] flex items-center justify-center">
        <div className="text-center">
          <div className="text-white font-inter text-[56px] font-bold leading-[61.6px] tracking-[-1.12px] capitalize">
            A Comprehensive <br /> Insight into{' '}
            <span className="bg-gradient-to-r from-[#54B9CF] via-[#547DCF] to-[#A754CF] bg-clip-text text-transparent">
              DGTLFACE
            </span>
          </div>
        </div>
      </div>

      {/* İkinci Bölüm */}
      <div className="w-full py-10 bg-white mt-24 -mb-8">
        <p className="text-[#140F25] text-center font-inter text-[56px] font-semibold leading-[110%] tracking-[-1.12px]">
          Be The Best in
        </p>
        <p className="text-[#140F25] text-center font-inter text-[56px] font-semibold leading-[110%] tracking-[-1.12px]">
          The{' '}
          <span className="bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF] bg-clip-text text-transparent">
            Digital World
          </span>
        </p>
      </div>
      <div className="text-[#140F25] mb-12 text-center font-inter text-[14px] font-normal leading-[140%] tracking-[-0.28px] w-[490px]">
        Clearly define your digital goals. Whether it's increasing online visibility, expanding market reach, or improving customer engagement, having well-defined objectives is crucial. Prioritize user experience in all your digital endeavors. A user-friendly website or application, intuitive interfaces, and personalized content contribute to a positive user experience.
      </div>
      <div className="flex h-[45px] px-8 py-4 justify-center items-center gap-2 rounded-[22px] border-2 border-[#54B9CF] -mt-4">
        <button className="text-[18px] font-inter font-bold leading-[120%] tracking-[-0.36px] text-[var(--Main-Dark-Blue,#140F25)]">
          Explore Services
        </button>
      </div>
    </div>
  );
};

export default Section1;