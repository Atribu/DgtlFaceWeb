"use client";
import React from "react";

const cardData = [
  {
    id: 1,
    value: "4",
    title: "Times",
    description: "International Sales Increase",
    gradientFrom: "#a754cf",
    gradientTo: "#54b9cf",
  },
  {
    id: 2,
    value: "10",
    title: "Years",
    description: "Successful Brand Projects",
    gradientFrom: "#54b9cf",
    gradientTo: "#a754cf",
  },
  {
    id: 3,
    value: "6",
    title: "Month",
    description: "for Improvement in project indicators",
    gradientFrom: "#a754cf",
    gradientTo: "#54b9cf",
  },
  {
    id: 4,
    value: "8",
    title: "Department",
    // Açıklamada "team" kelimesinden sonra satır sonu eklemek istiyoruz.
    description: "Professional team consisting of 8 departments",
    gradientFrom: "#54b9cf",
    gradientTo: "#a754cf",
  },
];

const Section2 = () => {
  return (
    <div className="flex flex-row w-11/12 items-center justify-center gap-8">
      {cardData.map((card) => (
        <div
          key={card.id}
          style={{
            background: `linear-gradient(to right, ${card.gradientFrom}, ${card.gradientTo})`,
          }}
          className="p-1 rounded-lg"
        >
          <div className="bg-white flex gap-2 flex-col rounded-md text-center p-10 w-[206px] h-[243px]">
            <h2 className="text-7xl mb-2 font-bold font-inter28 leading-[77px]">
              {card.value}
            </h2>
            <p className="text-2xl font-inter28 font-semibold leading-none">
              {card.title}
              <br />
              <span className="block mt-4 font-inter28 text-sm leading-tight">
                {card.id === 4 ? (
                  <>
                    Professional team
                    <br />
                    consisting of 8 departments
                  </>
                ) : (
                  card.description
                )}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section2;
