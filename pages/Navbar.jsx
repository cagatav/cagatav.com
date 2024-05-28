import React, { useState } from 'react';
import Image from "next/image";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="bg-gray-100 flex justify-between items-center p-8 px-16 transition-all duration-300 relative">
      <div className={`transition-all duration-300 ${sidebarOpen ? 'opacity-0' : 'opacity-100'}`}>
        <a
          href="/"
          className="flex items-center font-bold text-white opacity-100 hover:opacity-90 duration-200 select-none"
        >
          <Image src="/cagatav-colored.svg" alt="logo" width={175} height={175} />
        </a>
      </div>
      <ul className="hidden md:flex space-x-10 ml-auto">
        <li className="text-gray-800 hover:text-[#903b3b] transition-colors duration-300">
          <a href="/">HOME</a>
        </li>
        <li className="text-gray-800 hover:text-[#903b3b] transition-colors duration-300">
          <a href="/experience">EXPERIENCE</a>
        </li>
        <li className="text-gray-800 hover:text-[#903b3b] transition-colors duration-300">
          <a href="/projects">PROJECTS</a>
        </li>
        <li className="text-gray-800 hover:text-[#903b3b] transition-colors duration-300">
          <a href="/cv">CV</a>
        </li>
      </ul>
      <button 
        className="block md:hidden text-gray-800 hover:text-[#903b3b] transition-colors duration-300 absolute right-8 z-20"
        onClick={toggleSidebar}
      >
        {sidebarOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
      <div className={`fixed top-0 right-0 h-full bg-gray-100 z-40 w-64 transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        {sidebarOpen && (
          <div className="p-8">
            <div className="text-[#6c2c2c] text-2xl font-bold mb-8">
              <a
                href="/"
                className="flex items-center font-bold text-white opacity-100 hover:opacity-90 duration-200 select-none"
              >
                <Image src="/cagatav-colored.svg" alt="logo" width={140} height={140} />
              </a>
            </div>
            <button 
              className="absolute top-4 right-4 text-gray-800 hover:text-[#903b3b] transition-colors duration-300"
              onClick={toggleSidebar}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
        <ul className="flex flex-col space-y-10 p-8 mt-16">
          <li className="text-gray-800 hover:text-[#903b3b] transition-colors duration-300">
            <a href="/">HOME</a>
          </li>
          <li className="text-gray-800 hover:text-[#903b3b] transition-colors duration-300">
            <a href="/experience">EXPERIENCE</a>
          </li>
          <li className="text-gray-800 hover:text-[#903b3b] transition-colors duration-300">
            <a href="/projects">PROJECTS</a>
          </li>
          <li className="text-gray-800 hover:text-[#903b3b] transition-colors duration-300">
            <a href="/cv">CV</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
