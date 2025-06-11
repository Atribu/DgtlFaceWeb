"use client";
import React, { useState } from 'react';

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-[600px] bg-white rounded-[20px] p-4 mt-4 shadow-md">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-gray-900 text-lg font-medium">{question}</div>
        <div className="w-6 h-6 flex items-center justify-center bg-gray-900 rounded-full">
          <div className={`w-3 h-3 bg-white rounded-full transform transition-transform ${isOpen ? 'rotate-180' : ''}`}></div>
        </div>
      </div>
      {isOpen && (
        <div className="mt-2 text-gray-700">
          {answer}
        </div>
      )}
    </div>
  );
};

const Section4 = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-24 w-full bg-gray-50"> {/* Ekranın ortasına yerleştirmek için min-h-screen ve flex özellikleri eklendi */}
      <div className='flex flex-col justify-center items-center w-11/12'>
        {/* Başlık */}
        <div className="text-center">
          <span className="text-Main-Dark-Blue text-3xl font-bold font-['Inter'] leading-10">
            Frequently Asked{' '}
          </span>
          <span className="text-purple-500 text-3xl font-bold font-['Inter'] leading-10">
            Questions
          </span>
        </div>

        {/* Sorular */}
        <Question
          question="What do DGTLFACE services cover?"
          answer="DGTLFACE offers a wide range of digital marketing services, including SEO, social media management, and content creation."
        />
        <Question
          question="How can I contact DGTLFACE?"
          answer="You can contact us through our website's contact form or by emailing us directly at info@dgtlface.com."
        />
      </div>
    </div>
  );
};

export default Section4;