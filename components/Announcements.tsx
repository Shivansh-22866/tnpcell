"use client"

import React, { useState } from 'react';

const Dropdowns: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const dropdownLinks = [
    { title: 'Dropdown 1', links: ['Link 1.1', 'Link 1.2', 'Link 1.3'] },
    { title: 'Dropdown 2', links: ['Link 2.1', 'Link 2.2', 'Link 2.3'] },
    { title: 'Dropdown 3', links: ['Link 3.1', 'Link 3.2', 'Link 3.3'] },
  ];

  return (
    <div className="space-y-4 my-8 mx-16">
      {dropdownLinks.map((dropdown, index) => (
        <div key={index} className="relative">
          <button
            onClick={() => toggleDropdown(index)}
            className="w-full p-2 text-left bg-gray-200 rounded-md hover:bg-gray-300 transition flex items-center justify-between"
          >
            <span>{dropdown.title}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${openDropdown === index ? 'transform rotate-180' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div
            className={`${
              openDropdown === index ? 'max-h-40' : 'max-h-0'
            } overflow-hidden transition-max-height duration-300 ease-in-out`}
          >
            <ul className="mt-2 bg-white shadow-lg rounded-md">
              {dropdown.links.map((link, linkIndex) => (
                <li key={linkIndex} className="p-2 hover:bg-gray-100">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dropdowns;
