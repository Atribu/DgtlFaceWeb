import React from 'react'
import { useTranslations } from 'next-intl';

const Section1 = () => {
  const t = useTranslations("AboutPage");

  return (
    <div className="flex flex-col justify-center items-start text-start lg:text-center lg:items-center">
      {/* İlk Bölüm */}
      <div className="w-full h-[375px] md:h-[400px] lg:h-[470px] relative bg-[#140f25] flex justify-center items-center text-center">
        <div className="text-center px-4">
          <div className="text-white font-inter text-[24px] md:text-[32px] lg:text-[44px] font-bold leading-[110%] tracking-[-1.12px] capitalize">
            {t("aboutpage_s1_header1")}{' '}
            <span className="bg-gradient-to-r from-[#54B9CF] via-[#547DCF] to-[#A754CF] bg-clip-text text-transparent">
              {t("aboutpage_s1_span1")}
            </span>
          </div>
        </div>
      </div>

      {/* İkinci Bölüm */}
      <div className="w-full py-6 mb-1 sm:py-8 md:py-10 bg-white mt-8 sm:mt-7 md:mt-10 sm:-mb-8 ">
        <p className="text-[#140F25] text-start lg:text-center font-inter text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] font-semibold leading-[110%] tracking-[-1.12px] ml-4">
           {t("aboutpage_s1_header2")}
        </p>
        <p className="text-[#140F25] text-start lg:text-center font-inter text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] font-semibold leading-[110%] tracking-[-1.12px]  ml-4">
             {t("aboutpage_s1_header3")}{' '}
          <span className="bg-gradient-to-r from-[#A754CF] via-[#547CCF] to-[#54B9CF] bg-clip-text text-transparent">
             {t("aboutpage_s1_span2")}
          </span>
        </p>
      </div>

      {/* Açıklama Metni */}
      <div className="text-[#140F25] mb-8 sm:mb-10 md:mb-12 text-start lg:text-center font-inter text-[12px] sm:text-[14px] font-normal leading-[140%] tracking-[-0.28px] w-[90%] sm:w-[490px] lg:w-[58%] px-4">
          {t("aboutpage_s1_text1")}
      </div>

      {/* Buton */}
      <button className="flex h-[42px] sm:h-[45px] px-6 sm:px-8 py-3 sm:py-4 justify-center items-center gap-2 rounded-[22px] border-2 border-[#54B9CF] -mt-4 w-[90%] lg:w-[257px] ml-4 whitespace-nowrap">
        <p className="text-[14px] sm:text-[16px] md:text-[18px] font-inter font-bold leading-[120%] tracking-[-0.36px] text-[var(--Main-Dark-Blue,#140F25)] ">
          {t("aboutpage_s1_button1")}
        </p>
      </button>
    </div>
  );
};

export default Section1;