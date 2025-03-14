import React from 'react';
import Office2 from "./Image/Office2.png";
import Office3 from "./Image/Ofiice3.png";
import Image from "next/image";

const Section2 = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        {/* İlk Bölüm */}
        <div className="w-[1200px] h-[350px] rounded-[22px] bg-[#140F25] my-12">
            <div
                className="w-[1200px] h-[350px] rounded-[22px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${Office2.src})` }}
            >
                {/* İçerik buraya gelebilir */}
                <div className="text-white text-center pt-32"> {/* pt-20 -> pt-32 yapıldı */}
                    <h1 className="text-[#FFF] text-justify font-inter text-[32px] font-bold leading-[120%] ml-16 tracking-[-0.64px]">
                        Our Original <span className="bg-gradient-to-r from-[#54B9CF] via-[#547CCF] to-[#A754CF] bg-clip-text text-transparent">Story</span>
                    </h1>
                    <p className="w-[365px] text-[#FFF] text-start font-inter text-[14px] font-normal leading-[140%] tracking-[-0.28px] ml-16 mt-4"> {/* mt-2 -> mt-4 yapıldı */}
                        DGTLFACE, a digital marketing agency established in 2019, provides online marketing services to a wide range of companies, from local brands and startups to large corporations. Our company is headquartered in Antalya, and with our creative and collaborative professional team, we operate not only in Turkey but also in many countries across Europe.
                    </p>
                    <button className="mt-6 inline-flex px-[32px] py-[16px] justify-center items-center gap-[10px] rounded-[22px] bg-[#FFF] shadow-[0px_0px_50px_0px_rgba(221,254,254,0.5),0px_0px_4px_0px_#FFF]"> {/* -mt-16 -> mt-6 yapıldı */}
                        <p className="text-black font-inter text-[18px] font-bold leading-[120%] tracking-[-0.36px] leading-trim">Get in Touch</p>
                    </button>
                </div>
            </div>
        </div>

        {/* İkinci Bölüm */}
        <div className='flex flex-row items-center justify-center gap-10 mt-32'>
            <div className="inline-flex text-start flex-col items-center gap-[75px]">
                <div className="w-[440px] h-[777.31px] flex flex-col gap-5 mt-20"> {/* mt-12 -> mt-20 yapıldı */}
                    <div className="text-main-dark-blue text-justify font-inter text-[32px] font-bold leading-[120%] tracking-[-0.64px]">
                        Your Project <span className="bg-gradient-to-r from-[#54B9CF] via-[#547DCF] to-[#A754CF] bg-clip-text text-transparent">Begins</span> Here
                    </div>
                    <div className="text-main-dark-blue font-inter text-[16px] font-normal leading-[140%] tracking-[-0.32px]">
                        We play a pivotal role in elevating businesses to unprecedented heights by meticulously crafting and implementing sophisticated marketing strategies in the ever-expansive realm of the online landscape. <br /> <p className='mt-6'>At DGTLFACE, we master the digital space by strategically using our products and services to attract the attention of a large online audience.</p> {/* mt-3 -> mt-6 yapıldı */}
                    </div>
                    <button className="flex px-4 w-2/5 py-4 justify-center items-center gap-[10px] rounded-[22px] border-2" style={{ borderColor: "var(--1, #54B9CF)" }}>
                        <p className="text-main-dark-blue font-inter text-[18px] font-bold leading-[120%] tracking-[-0.36px] leading-trim">Start a Project</p>
                    </button>
                </div>
            </div>
            <div className='items-center justify-center -mt-96'> {/* Resmi yukarı taşımak için -mt-16 eklendi */}
                <Image src={Office3} alt='office3' className="rounded-lg" />
            </div>
        </div>
    </div>
  );
};

export default Section2;