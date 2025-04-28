"use client";
import { useState, useEffect, useRef } from 'react';

const StableHoverDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div 
      className="relative max-w-xs mx-auto mt-20"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      ref={dropdownRef}
    >
      {/* Ana Trigger Element */}
      <div className="text-blue-600 font-semibold cursor-pointer py-2">
        Üzerime Gel (Stable Hover)
      </div>

      {/* Gap için görünmez padding */}
      <div className="absolute top-full left-0 w-full h-2" /> 

      {/* Dropdown Content (Gap dahil) */}
      {isMounted && isOpen && (
        <div 
          className="absolute top-[calc(100%+8px)] left-0 w-48 bg-white shadow-lg rounded-lg p-4 border border-gray-200"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <p className="text-gray-700">Sorunsuz geçiş!</p>
          <ul className="mt-2">
            <li className="hover:bg-gray-100 p-2">Seçenek 1</li>
            <li className="hover:bg-gray-100 p-2">Seçenek 2</li>
            <li className="hover:bg-gray-100 p-2">Seçenek 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default StableHoverDropdown;