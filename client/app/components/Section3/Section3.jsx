"use client";

import React from "react";

const Section3 = () => {
  return (
    <div
      className="flex flex-row w-full h-[400px] justify-center items-center mt-32"
      style={{
        background:
          "linear-gradient(to right, #140C29 0%, #140C29 25%, #547CCF 32%, #547CCF 38%, #140C29 45%, #140C29 100%)",
      }}
    >
      <div className="flex w-11/12 p-12">
        <div className="flex w-1/2">Burada Animasyon olacak</div>
        <div className="flex flex-col w-1/2 text-start">
          <h3 className=" flex flex-col text-5xl font-inter28 font-bold leading-[57.60px] pb-1">
            <span className="text-white">Our</span>
            <span className="bg-gradient-to-r from-[#54b9cf] to-[#a754cf] bg-clip-text text-transparent">
              Services
            </span>
          </h3>

          <div className="flex flex-col gap-2">
            <p className="font-inter28 text-sm text-white font-normal leading-tight">
              Dive into the world of digital excellence with DGTLFACE. We are
              not just an <br /> agency; we are the architects of online
              success. Transform your brand with our <br /> innovative
              strategies, captivating visuals and resonant digital presence.
              Unleash <br /> excellence; Choose us as your digital partner.
            </p>
            <p className="font-inter28 text-sm text-white font-normal leading-tight">
              Clicks are just the beginning; conversions are our destination. At
              DGTLFACE, we <br /> navigate the digital landscape with precision,
              turning every interaction into a <br /> conversion. Join us on the
              journey where your brand not only gets noticed but <br />{" "}
              remembered.
            </p>
          </div>

          <button className="mt-3 gradient-border-button w-[114px] h-[42px] justify-center font-inter leading-[16.8px] tracking-[-0.28px]">
            Explore
          </button>
          <style jsx>{`
            .gradient-border-button {
              position: relative;
              padding: 3px 0px;
              font-size: 14px;
              font-weight: 700;
              background: transparent;
              color: #fff;
              border: none;
              border-radius: 14px;
              cursor: pointer;
              z-index: 1;
              overflow: hidden;
            }
            .gradient-border-button::before {
              content: "";
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
      </div>
    </div>
  );
};

export default Section3;
