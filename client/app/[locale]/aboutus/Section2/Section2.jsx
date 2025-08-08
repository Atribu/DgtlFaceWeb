import React from 'react';
import Office2 from "./Image/Office2.png";
import Office3 from "./Image/Ofiice3.png";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const Section2 = () => {
    const t = useTranslations("AboutPage");
    
  return (
    <div className='flex flex-col items-center justify-center w-screen gap-[40px] lg:gap-[75px]'>
        {/* İlk Bölüm */}
        <div className="w-[90%] lg:w-[1200px] h-[403px] lg:h-[350px] rounded-[22px] bg-[#140F25]">
            <div
                className="w-full lg:w-[1200px] h-full lg:h-[350px] rounded-[22px] bg-cover bg-center bg-no-repeat items-end pb-8 justify-center lg:items-center lg:justify-start flex relative"
                style={{ backgroundImage: `url(${Office2.src})` }}
            >
                <div className="absolute inset-0 bg-darkBlue/50 z-[1] rounded-[22px]"></div>
                {/* İçerik buraya gelebilir */}
                <div className="text-white text-center lg:pt-32 flex flex-col items-center lg:items-start justify-end lg:justify-center w-[90%] z-[20]"> {/* pt-20 -> pt-32 yapıldı */}
                    <h1 className="text-[#FFF] text-justify font-inter text-[20px] lg:text-[32px] font-bold leading-[120%] ml-0 lg:ml-16 tracking-[-0.64px]">
                        Our Original <span className="bg-gradient-to-r from-[#54B9CF] via-[#547CCF] to-[#A754CF] bg-clip-text text-transparent">Story</span>
                    </h1>
                    <p className="lg:w-[365px] text-[#FFF] text-start font-inter text-[14px] font-normal leading-[130%] lg:leading-[140%] tracking-[-0.28px] ml-0 lg:ml-16 mt-4"> {/* mt-2 -> mt-4 yapıldı */}
                        DGTLFACE, a digital marketing agency established in 2019, provides online marketing services to a wide range of companies, from local brands and startups to large corporations. Our company is headquartered in Antalya, and with our creative and collaborative professional team, we operate not only in Turkey but also in many countries across Europe.
                    </p>
                    <button className="mt-6 inline-flex ml-0 lg:ml-16  px-[32px] py-[16px] justify-center items-center gap-[10px] rounded-[22px] bg-[#FFF] shadow-[0px_0px_50px_0px_rgba(221,254,254,0.5),0px_0px_4px_0px_#FFF] h-[45px] w-[171px]"> {/* -mt-16 -> mt-6 yapıldı */}
                        <p className="text-black font-inter text-[18px] font-bold leading-[120%] tracking-[-0.36px] leading-trim">Get in Touch</p>
                    </button>
                </div>
            </div>
        </div>

        {/* İkinci Bölüm */}
        <div className='flex flex-row items-center justify-center gap-10 w-[90%]'>
            <div className="inline-flex text-center lg:text-start flex-col items-center lg:gap-[75px]">
                <div className="w-full md:w-[440px] h-[290px] lg:h-auto flex flex-col gap-3 lg:gap-5 lg:mt-20 items-center justify-center lg:items-start lg:justify-start"> {/* mt-12 -> mt-20 yapıldı */}
                    <div className="text-main-dark-blue lg:text-justify font-inter text-[20px] lg:text-[32px] font-bold leading-[120%] tracking-[-0.4px] lg:tracking-[-0.64px]">
                        Your Project <span className="bg-gradient-to-r from-[#54B9CF] via-[#547DCF] to-[#A754CF] bg-clip-text text-transparent">Begins</span> Here
                    </div>
                    <div className="text-main-dark-blue font-inter text-[14px] lg:text-[16px] font-normal leading-[130%] lg:leading-[140%] tracking-[-0.28px] lg:tracking-[-0.32px]">
                        We play a pivotal role in elevating businesses to unprecedented heights by meticulously crafting and implementing sophisticated marketing strategies in the ever-expansive realm of the online landscape. <br /><p className='mt-6'>At DGTLFACE, we master the digital space by strategically using our products and services to attract the attention of a large online audience.</p> {/* mt-3 -> mt-6 yapıldı */}
                    </div>
                    <button className="flex px-8 w-[158px] whitespace-nowrap lg:w-2/5 py-4 justify-center items-center gap-[10px] rounded-[10px] border-2 mt-[6px] h-[42px] gradient-border-button " style={{ borderColor: "var(--1, #54B9CF)" }}>
                        <p className="text-main-dark-blue font-inter text-[14px] lg:text-[18px] font-bold leading-[120%] tracking-[-0.28px] lg:tracking-[-0.36px] leading-trim !text-darkBlue">Start a Project</p>
                    </button>
                </div>
            </div>
            <div className='hidden lg:flex items-start justify-start'> {/* Resmi yukarı taşımak için -mt-16 eklendi */}
                <Image src={Office3} alt='office3' className="rounded-lg" />
            </div>
        </div>
    </div>
  );
};

export default Section2;