"use client";
import React, { useEffect, useState } from "react";
import VerticalBlock from "./Icons/VerticalBlock";
import clsx from "clsx";
import CallIconV from "./Icons/BlockIcons/BlockVerticalIcons/CallIconV";
import SeoV from "./Icons/BlockIcons/BlockVerticalIcons/SeoV";
import Temp1 from "./Icons/BlockIcons/BlockVerticalIcons/Temp1";
import Temp2 from "./Icons/BlockIcons/BlockVerticalIcons/Temp2";
import DgtlHeadV from "./Icons/BlockIcons/BlockVerticalIcons/DgtlHeadV";
import OtaV from "./Icons/BlockIcons/BlockVerticalIcons/OtaV";
import AnalysisV from "./Icons/BlockIcons/BlockVerticalIcons/AnalysisV";
import SoftV from "./Icons/BlockIcons/BlockVerticalIcons/SoftV";
import SocialV from "./Icons/BlockIcons/BlockVerticalIcons/SocialV";

function VBlock({ status, currentIndex, selectedC, gradient, ...props }) {
  const [selectedCube, setSelectedCube] = useState(selectedC);
  const [effectStatus, setEffectStatus] = useState(0);

  // effect status 0 is for not started
  // effect status 1 is for started
  // effect status 2 is second stage of animation
  // effect status 3 is third stage of animation
  // effect status 4 is for finished

  // ? " svgShadow  left-[15px] top-[20px] !h-[24[x]] !w-[17px]"
  // : " left-[15px] top-[20px] !h-[24[x]] !w-[17px]",
  const icons = [
  {
      icon: Temp1,
      classGradient:
        "svgShadow  lg:left-[2px] lg:top-[0px] lg:!h-[37.5px] lg:!w-[49.5px] w-[22.5px] h-[15px] top-[-23px] left-[3px]",
      class:
        "lg:left-[10px] lg:top-[2px] lg:!h-[25px] lg:!w-[33px] lg:mt-[29px] w-[15px] h-[10px] top-[7px] left-[6px]",
    },

     {
      icon: OtaV,
      classGradient:
        "svgShadow  lg:left-[-5px] lg:top-[0px] lg:!w-[60px] lg:!h-[49px] w-[22.5px] h-[15px] top-[-23px] left-[3px]",
      class:
        "lg:left-[11px] lg:top-[0px] lg:!h-[24.5px] lg:!w-[30px]  lg:mt-[29px] w-[15px] h-[12px] top-[7px] left-[5px]",
    },
  {
      icon: SocialV,
      classGradient:
        "svgShadow  lg:left-[-15px] lg:top-[-10px] lg:!w-[79px] lg:!h-[45px] w-[22.5px] h-[15px] top-[-23px] left-[3px]",
      class:
        "lg:left-[6px] lg:top-[2px] lg:!h-[22.5px] lg:!w-[39.5px]  lg:mt-[29px] w-[15px] h-[10px] top-[8px] left-[6px]",
    },
   
        {
      icon: SoftV,
      classGradient:
        "svgShadow  lg:left-[-5px] lg:top-[0px] lg:!w-[65px] lg:!h-[47px] w-[22.5px] h-[15px] top-[-23px] left-[3px]",
      class:
        "lg:left-[10px] lg:top-[1px] lg:!h-[23.5px] lg:!w-[32.5px] lg:mt-[29px] w-[15px] h-[10px] top-[7px] left-[6px]",
    },


  
        {
      icon: Temp2,
      classGradient:
        "svgShadow  lg:left-[7.5px] lg:top-[10px] lg:!h-[24px] lg:!w-[37.5px] h-[12px] w-[18px] top-[-20px] left-[5px]",
      class:
        "lg:left-[15px] lg:top-[5px] lg:!h-[16px] lg:!w-[25px] lg:mt-[29px] top-[8px] w-[12.5px] h-[8px] left-[7px]",
    },

  
     {
      icon: CallIconV,
      classGradient:
        "svgShadow  lg:left-[10px] lg:top-[10px] lg:!w-[36px] lg:!h-[25.5px] w-[18px] h-[12px] top-[-20px] left-[5px]",
      class:
        "lg:left-[15px] lg:top-[5px] lg:!h-[17px] lg:!w-[24px] lg:mt-[29px] h-[8.5px] w-[12px] top-[8px] left-[7px]",
    },
        {
      icon: SeoV,
      classGradient:
        "svgShadow  lg:left-[5px] lg:top-[0px] lg:!h-[36px] lg:!w-[42px] lg:mt-[10px] w-[15px] h-[10px] top-[-25px] left-[6px]",
      class:
        "lg:left-[17px] lg:top-[5px] lg:!h-[20px] lg:!w-[21px] lg:mt-[29px] w-[10px] h-[8px] top-[8px] left-[8px]",
    },

    {
      icon: AnalysisV,
      classGradient:
        "svgShadow  lg:left-[0px] lg:top-[0px] lg:!w-[49.5px] lg:!h-[31px] w-[22.5px] h-[15px] top-[-23px] left-[3px]",
      class:
        "lg:left-[10px] lg:top-[4px] lg:!w-[33.5px] lg:!h-[23px] lg:mt-[29px] w-[15px] h-[10px] top-[8px] left-[6px]",
    },

    {
      icon: DgtlHeadV,
      classGradient: "svgShadow  left-[15px] top-[20px] !w-[36px] !h-[25.5px]",
      class:
        "lg:left-[15px] lg:top-[5px] lg:!h-[18px] lg:!w-[26.5px]  lg:mt-[29px] h-[8.5px] w-[12px] top-[9px] left-[7px]",
    },
  ];

  const [positions, setPositions] = useState([
    "z-[100] bottom-0       left-1/2",
    "z-[90] bottom-[12.5px] left-[calc(50%-17.5px)] lg:bottom-[25px]  lg:left-[calc(50%-35px)]",
    "z-[80] bottom-[25px] lg:bottom-[50px] left-[calc(50%-35px)] lg:left-[calc(50%-70px)]",
    "z-[70] bottom-[37.5px] lg:bottom-[75px] left-[calc(50%-17.5px)] lg:left-[calc(50%-35px)]",
    "z-[60] bottom-[50px]  lg:bottom-[100px] left-1/2",
    "z-[70] bottom-[37.5px] lg:bottom-[75px] left-[calc(50%+17.5px)] lg:left-[calc(50%+35px)]",
    "z-[80] bottom-[25px]  lg:bottom-[50px] left-[calc(50%+35px)] lg:left-[calc(50%+70px)]",
    "z-[90] bottom-[12.5px] lg:bottom-[25px] left-[calc(50%+17.5px)] lg:left-[calc(50%+35px)]",
    "z-[80] bottom-[25px] lg:bottom-[50px] left-1/2",
  ]);

  function changeOrder() {
    setPositions((prev) => {
      const newOrder = [...prev];
      const lastEl = newOrder[newOrder.length - 1];

      const firstEl = newOrder[0];
      newOrder.pop();
      newOrder.shift();
      newOrder.push(firstEl);

      newOrder.push(lastEl);
      return newOrder;
    });
  }

  function secondStageOfAnimation(index) {
    setPositions((prevPositions) => {
      let newArr = [...prevPositions];

      // Ensure the index is within the array bounds
      if (index >= 0 && index < newArr.length - 1) {
        // Swap the element at the specified index with the last element
        let temp = newArr[newArr.length - 1];
        // console.log("temp", temp);
        newArr[newArr.length - 1] = newArr[index];
        newArr[index] = temp;
      }
      return newArr;
    });
    // wait 1 second then set effect status to 4
    setTimeout(() => {
      setEffectStatus(3);
    }, 300);
    setTimeout(() => {
      setEffectStatus(4);
    }, 300);
  }

  function changeOrderToBack() {
    setPositions((prev) => {
      const newOrder = [...prev];
      const center = newOrder[newOrder.length - 1];
      newOrder.pop();
      const lastEl = newOrder[newOrder.length - 1];
      newOrder.pop();
      newOrder.unshift(lastEl);
      newOrder.push(center);
      return newOrder;
    });
  }

  // reverse the animation

  async function reverseAnimation() {
    if (effectStatus !== 4) return;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const howmanyturnsweneed = selectedCube % 2 == 0 ? 1 : 2;

    // find index of z-[80] bottom-[50px] left-1/2 at postions array
    let centerPos = positions.findIndex(
      (position) =>
        position == "z-[80] bottom-[25px] lg:bottom-[50px] left-1/2",
    );

    // wait 300ms
    // just wait 300ms with async await

    // change center post to last element of the array
    setPositions((prevPositions) => {
      let newArr = [...prevPositions];
      let temp = newArr[newArr.length - 1];
      newArr[newArr.length - 1] = newArr[centerPos];
      newArr[centerPos] = temp;
      return newArr;
    });
    // wait 300ms then call changeOrderToBack function
    await new Promise((resolve) => setTimeout(resolve, 300));
    changeOrderToBack();
    if (howmanyturnsweneed === 2) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      changeOrderToBack();
    }
    setEffectStatus(0);
  }

  useEffect(() => {
    if (effectStatus == 4 && status !== true) {
      reverseAnimation();
      setEffectStatus(2);
    }
  }, [effectStatus]);

  useEffect(() => {
    if (status == true && effectStatus == 0) {
      setEffectStatus(1);
      const howmanyturnsweneed = selectedCube % 2 == 0 ? 1 : 2;

      // runn changeOrder functuon howmanyturnsweneed times
      let i = 0;
      changeOrder();
      const interval = setInterval(() => {
        if (i == howmanyturnsweneed - 1) {
          clearInterval(interval);
          setEffectStatus(2);

          let newIndex = selectedCube;

          secondStageOfAnimation(newIndex);
        } else {
          changeOrder();
          i++;
        }
      }, 300);
    } else if (status == false && effectStatus == 4) {
      reverseAnimation();
      setEffectStatus(2);
    }
  }, [status]);

  return (
    <div {...props}>
      <div
        className={clsx(
          "relative h-full w-full transition-all duration-300 ease-in-out",
        )}
      >
        {icons.map((block, index) => {
          return (
            <VerticalBlock
              key={index}
              className={clsx(
                "absolute h-full !w-[27px] transition-all duration-300 ease-in-out lg:!w-[54px]",
                positions[index],
                selectedCube == index && effectStatus >= 3
                  ? "mb-[50px] lg:!mb-[112.5px]"
                  : "",
                effectStatus == 1 && "mb-[5px]",
                effectStatus == 2 && "mb-[10px]",
                effectStatus > 2 && "mb-[15px]",
              )}
              gradient={
                selectedCube == index && effectStatus >= 3 ? "true" : "false"
              }
              middle={index == icons.length - 1 ? "true" : "false"}
            >
              <block.icon
                gradient={
                  selectedCube == index && effectStatus >= 3 ? "true" : "false"
                }
                className={clsx(
                  "absolute  z-[110] transition-all duration-300 ease-in-out",
                  selectedCube == index && effectStatus >= 3
                    ? block.classGradient
                    : block.class,
                )}
              />
            </VerticalBlock>
          );
        })}
      </div>
    </div>
  );
}

export default VBlock;
