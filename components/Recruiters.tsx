"use client"

import React, { useState } from 'react';

const Recruiters: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="space-y-4 my-8 mx-16">
      {/* Dropdown 1 */}
      <div className="relative">
        <button
          onClick={() => toggleDropdown(1)}
          className="w-full p-2 text-left bg-gray-200 rounded-md hover:bg-gray-300 transition flex items-center justify-between"
        >
          <span>Dropdown 1</span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 1 ? 'transform rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <div
          className={`${openDropdown === 1 ? 'max-h-40' : 'max-h-0'} overflow-hidden transition-max-height duration-300 ease-in-out`}
        >
          <div className="mt-2 bg-white shadow-lg rounded-md p-4">
            <p>This is the content for Dropdown 1. Here you can add more information.</p>
            <p>Feel free to customize this section with any details you&apos;d like.</p>
          </div>
        </div>
      </div>

      {/* Dropdown 2 */}
      <div className="relative">
        <button
          onClick={() => toggleDropdown(2)}
          className="w-full p-2 text-left bg-gray-200 rounded-md hover:bg-gray-300 transition flex items-center justify-between"
        >
          <span>Dropdown 2</span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 2 ? 'transform rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <div
          className={`${openDropdown === 2 ? 'max-h-40' : 'max-h-0'} overflow-hidden transition-max-height duration-300 ease-in-out`}
        >
          <div className="mt-2 bg-white shadow-lg rounded-md p-4">
            <p>This is the content for Dropdown 2. You can elaborate on any topic here.</p>
            <p>Use this space for additional context or details as needed.</p>
          </div>
        </div>
      </div>

      {/* Dropdown 3 */}
      <div className="relative">
        <button
          onClick={() => toggleDropdown(3)}
          className="w-full p-2 text-left bg-gray-200 rounded-md hover:bg-gray-300 transition flex items-center justify-between"
        >
          <span>Dropdown 3</span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 3 ? 'transform rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <div
          className={`${openDropdown === 3 ? 'max-h-40' : 'max-h-0'} overflow-hidden transition-max-height duration-300 ease-in-out`}
        >
          <div className="mt-2 bg-white shadow-lg rounded-md p-4">
            <p>This is the content for Dropdown 3, providing insights on another topic.</p>
            <p>Include images or links if necessary for richer content.</p>
          </div>
        </div>
      </div>

      {/* Dropdown 4 */}
      <div className="relative">
        <button
          onClick={() => toggleDropdown(4)}
          className="w-full p-2 text-left bg-gray-200 rounded-md hover:bg-gray-300 transition flex items-center justify-between"
        >
          <span>Dropdown 4</span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 4 ? 'transform rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <div
          className={`${openDropdown === 4 ? 'max-h-40' : 'max-h-0'} overflow-hidden transition-max-height duration-300 ease-in-out`}
        >
          <div className="mt-2 bg-white shadow-lg rounded-md p-4">
            <p>This is the content for Dropdown 4. Expand for detailed information.</p>
            <p>Utilize this area for any necessary elaboration or explanations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruiters;
