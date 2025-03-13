import React from "react";
import noiseImage from "@/public/noise.png";
import noiseFull from "@/public/noisefull.png";
import Block8 from "@/components/icons/Blocks/Block8";
import Block7 from "@/components/icons/Blocks/Block7";
import Block1 from "@/components/icons/Blocks/Block1";
import Block6 from "@/components/icons/Blocks/Block6";
import Block2 from "@/components/icons/Blocks/Block2";
import Orta from "@/components/icons/Blocks/Orta";
import Block3 from "@/components/icons/Blocks/Block3";
import Block5 from "@/components/icons/Blocks/Block5";
import Block4 from "@/components/icons/Blocks/Block4";
import clsx from "clsx";
import Image from "next/image";

function BlogsVertical({ blocksOrder, blockPositions, mobile }) {
  return (
    <div
      className={clsx(
        "w-full opacity-100 lg:col-span-1 lg:flex",
        mobile && mobile == true
          ? " col-span-2 -rotate-90 flex h-[500px]  w-full overflow-hidden lg:rotate-0 "
          : "hidden",
      )}
    >
      <Image
        src={noiseImage}
        width={noiseImage.width}
        height={noiseImage.height}
        alt="Noise Image"
        className="absolute inset-0 z-[110] h-full mix-blend-multiply"
      />
      <div className="relative h-full w-full lg:min-h-[515px] lg:overflow-hidden ">
        <div className=" h-full w-full ml-[-350px] lg:ml-[-300px] xl:ml-[-225px]  2xl:ml-[-100px] 3xl:ml-0 ">
          <Block3
            gradient={blocksOrder[0] == "1" ? "true" : "false"}
            // className="absolute top-1/2 z-[20] -translate-y-[calc(50%+80px)] transition-all duration-500"
            className={clsx(
              "absolute top-1/2  transition-all duration-500",
              blockPositions[blocksOrder[7]],
            )}
          />
          <Block2
            gradient={blocksOrder[0] == "2" ? "true" : "false"}
            // className="absolute top-1/2 z-[40]  -translate-y-[calc(50%+160px)] transition-all duration-500"
            className={clsx(
              "absolute top-1/2 transition-all duration-500",
              blockPositions[blocksOrder[6]],
            )}
          />
          <Block1
            gradient={blocksOrder[0] == "3" ? "true" : "false"}
            // className="absolute top-1/2 z-[60] -translate-x-[146px] -translate-y-[calc(50%+80px)] transition-all duration-500"
            className={clsx(
              "absolute top-1/2 transition-all duration-500",
              blockPositions[blocksOrder[5]],
            )}
          />
          <Orta className="absolute top-1/2 z-[30] -translate-x-[82px] -translate-y-1/2 transition-all duration-500" />
          <Block8
            gradient={blocksOrder[0] == "4" ? "true" : "false"}
            // className="absolute top-1/2 z-[80] -translate-x-[210px] -translate-y-1/2 transition-all duration-500"
            className={clsx(
              "absolute top-1/2 transition-all duration-500",
              blockPositions[blocksOrder[4]],
            )}
          />
          <Block7
            gradient={blocksOrder[0] == "5" ? "true" : "false"}
            // className="absolute top-1/2 z-[70] -translate-x-[146px] -translate-y-[calc(50%-80px)] transition-all duration-500"
            className={clsx(
              "absolute top-1/2 transition-all duration-500",
              blockPositions[blocksOrder[3]],
            )}
          />
          <Block6
            gradient={blocksOrder[0] == "6" ? "true" : "false"}
            // className="absolute top-1/2 z-[50] -translate-x-[82px] -translate-y-[calc(50%-160px)] transition-all duration-500"
            className={clsx(
              "absolute top-1/2 transition-all duration-500",
              blockPositions[blocksOrder[2]],
            )}
          />
          <Block5
            gradient={blocksOrder[0] == "7" ? "true" : "false"}
            // className="absolute top-1/2 z-[10] -translate-x-[18px] -translate-y-[calc(50%-80px)] transition-all duration-500"
            className={clsx(
              "absolute top-1/2 transition-all duration-500",
              blockPositions[blocksOrder[1]],
            )}
          />
          <Block4
            gradient={blocksOrder[0] == "0" ? "true" : "false"}
            className={clsx(
              "absolute top-1/2 transition-all duration-500",
              blockPositions[blocksOrder[0]],
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default BlogsVertical;
