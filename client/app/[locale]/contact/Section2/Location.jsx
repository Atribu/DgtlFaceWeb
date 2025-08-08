import React from 'react';
import Image from 'next/image';
import iletisim from './Image/Iletisim.png';
import { useTranslations } from 'next-intl';

const Location = () => {
   const t = useTranslations("ContactPage");

  return (
    <div className='flex flex-col gap-5 items-center justify-center mt-10 lg:mt-24 w-full bg-white mb-[50px] lg:mb-[100px]'>
      {/* Resim Container */}
      <div className="md:w-[602.15px] md:h-[435px] w-[330px] h-[238px] relative">
        {/* Resim */}
        <Image
          src={iletisim}
          alt="İletişim Resmi"
          fill // `layout="fill"` yerine `fill` kullanıldı
          style={{ objectFit: 'cover' }} 
          className="rounded-lg z-50"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.1143036103326!2d30.713262341760377!3d36.89938608500031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c38f03f1c11e23%3A0x3b0ad4ecebca0c2c!2sDGTLFACE%20%7C%20Technology%20Partner!5e0!3m2!1str!2str!4v1741621468917!5m2!1str!2str"
            width="330"
            height="238"
            style={{ border: 0 }}
            allowFullScreen 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" 
            className="rounded-lg shadow-lg z-1 lg:w-[600px] lg:h-[400px]"
          />
        </div>
      </div>
      <div className="relative text-center justify-start text-[#140f25] text-base font-normal font-inter leading-snugv mt-[16px]">{t("contactpage_s3_text1")}</div>
      <div className="px-8 py-4 rounded-[22px] border-2 border-[#54b9cf] inline-flex justify-center items-center h-[42px]">
            <button className="relative justify-start text-[#140f25] text-lg font-bold font-inter leading-snug">{t("contactpage_s3_button")}</button>
      </div>
    </div>
  );
};

export default Location;