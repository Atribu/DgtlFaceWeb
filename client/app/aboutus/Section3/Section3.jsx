
"use client";
import Partners from "../../components/Section4/SliderImage/Partner.jsx";
import React from 'react';

const Section3 = () => {
    const cardsData = [
        {
            id: 1,
            title: "Quality",
            number: "01",
            description: "In the world of digital marketing, DGTLFACE's quality principle is to carry out comprehensive & careful tasks with the highest quality teams & highest quality equipment. Quality is the most important the digital improvement.",
        },
        {
            id: 2,
            title: "Reliability",
            number: "02",
            description: "The avant garde initiatives adopted by DGTLFACE work to provide a reliable background. Trust and quality are two principles that support each other. Its principles and prepares a reliable digital world for our partners.",
        },
        {
            id: 3,
            title: "Creativity",
            number: "03",
            description: "Every member of the DGTLFACE has built their creative career on the principle that their work matters only if it is original and exciting; we are not interested in creating anything that is subpar, derivative, or dull.",
        },
        {
            id: 4,
            title: "Ambition",
            number: "04",
            description: "We are in the creative industry to push boundaries, discover new ways of and innovate at every stage of our process. If we are not constantly striving to surpass our previous work and motivating each other to improve.",
        },
    ];

    return (
        <div className='flex flex-col items-center justify-center -mt-64'>
            <div className="text-center justify-center">
                <span className="text-gray-900 text-5xl font-bold 54B9CF font-['Inter'] leading-[57.60px]">Dgtlface</span>
                <span className="bg-gradient-to-r from-[#547CCF] via-[#54B9CF] to-[#A754CF] bg-clip-text text-transparent font-inter text-[48px] font-bold leading-[120%] tracking-[-0.96px]"> Values</span>
            </div>
            <div className='flex w-8/12 flex-wrap justify-center gap-8 p-8'> {/* flex-wrap ve justify-center eklendi */}
                {cardsData.map((card) => (
                    <div key={card.id} className="p-12 bg-white rounded-3xl shadow-[-15px_30px_150px_0px_rgba(20,12,41,0.05)] inline-flex flex-col justify-start items-center gap-4 w-[calc(50%-16px)]"> {/* w-[calc(50%-16px)] eklendi */}
                        <div className="w-96 h-9 relative">
                            <div className="left-0 top-0 absolute justify-center text-gray-900 text-3xl font-bold font-['Inter'] leading-10">
                                {card.title}
                            </div>
                            <div className="w-0 h-7 left-[215px] top-[5.50px] absolute outline outline-2 outline-offset-[-1px] outline-black/20" />
                            <div className="left-[350px] top-0 absolute text-center justify-start text-3xl font-bold font-['Inter'] leading-10 bg-gradient-to-r from-[#A754CF] to-[#54B9CF] bg-clip-text text-transparent">
                                {card.number}
                            </div>
                        </div>
                        <div className="w-96 text-justify justify-start text-gray-900 text-base font-normal font-['Inter'] leading-snug">
                            {card.description}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-col w-[1076px] h-[500px] items-center rounded-3xl bg-[#140f25]  p-8 mb-12">
                <div className="text-center max-w-2xl">
                <div className="text-center justify-center whitespace-nowrap text-white mt-7"><span className="text-Main-White text-5xl font-bold font-['Inter'] leading-[57.60px]">Let's Forge Success </span><span className="text-blue-400 text-5xl font-bold font-['Inter'] leading-[57.60px]">Together</span></div>
                <div className="w-[597px] text-center justify-center text-Main-White text-sm font-normal font-['Inter'] leading-tight mt-5 ml-12 text-white">We are ready to take the first steps in the next creative endeavour. All that separates this moment from the beginning of our collaborative journey is just a tap of the button below.</div>
                  <div className="px-8 py-4 bg-Main-White rounded-3xl bg-white  shadow-[0px_0px_50px_0px_rgba(221,254,254,0.50)] inline-flex justify-center items-center mt-44 gap-2.5">
                      <div className="justify-start text-Main-Dark-Blue text-lg font-bold font-['Inter'] leading-snug">Get in Touch</div>
                  </div>
                </div>
            </div>
              <div className="w-full h-[250px] mt-24"> {/* Burada width ve height değerlerini istediğin gibi ayarla */}
                <div className="text-center justify-center text-Main-Dark-Blue text-5xl font-bold font-['Inter'] leading-[57.60px]">Our Collaborators</div>
                <div className="text-center justify-center text-Main-Dark-Blue text-lg font-normal font-['Inter'] leading-relaxed mb-8">How can we help you?</div>
                <Partners />
              </div>
        </div>
    );
};

export default Section3;