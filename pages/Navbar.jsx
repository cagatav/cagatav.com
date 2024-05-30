import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from '../components/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const darkModeToggle = mounted ? (
    <button onClick={toggleDarkMode} className="relative focus:outline-none">
      <div className="w-10 h-10 mt rounded-full flex items-center justify-center transition-all duration-1000">
        {darkMode ? (
          <FiMoon className="text-yellow-400 h-6 w-6 transform transition-transform duration-1000" />
        ) : (
          <FiSun className="text-orange-800 h-6 w-6 transform transition-transform duration-1000" />
        )}
      </div>
    </button>
  ) : null;

  return (
    <nav className={`flex justify-between items-center p-8 px-16 transition-all duration-300 relative ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <div className={`${sidebarOpen ? 'hidden' : 'block'} flex-shrink-0`}>
        <a
          href="/"
          className="flex items-center font-bold opacity-100 hover:opacity-90 duration-300 select-none"
        >
          <Image
            src={darkMode ? "/cagatav-white.svg" : "/cagatav-colored.svg"}
            alt="logo"
            width={175}
            height={175}
          />
          <div className="grid">
            <p className="ml-1 text-xs">.xyz</p>
            <p className="ml-1 text-xs">.com</p>
          </div>
        </a>
      </div>
      <ul className="hidden md:flex space-x-10 ml-auto">
        <li className="hover:text-[#903b3b] transition-colors duration-300">
          <a href="/">HOME</a>
        </li>
        <li className="hover:text-[#903b3b] transition-colors duration-300">
          <a href="/experience">EXPERIENCE</a>
        </li>
        <li className="hover:text-[#903b3b] transition-colors duration-300">
          <a href="/projects">PROJECTS</a>
        </li>
        <li className="hover:text-[#903b3b] transition-colors duration-300">
          <a href="/cv">CV</a>
        </li>
      </ul>
      <div className="flex items-center space-x-4">
        <button
          className="block md:hidden text-gray-800 hover:text-[#903b3b] transition-colors duration-300"
          onClick={toggleSidebar}
        >
          {sidebarOpen ? (
            <IoClose className={`h-6 w-6 ${darkMode ? 'text-transparent' : 'text-transparent'}`} />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${darkMode ? 'text-white' : 'text-black'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
        <div className="fixed top-4 right-4 md:static">
          {darkModeToggle}
        </div>
      </div>
      <div className={`fixed inset-y-0 right-0 w-72 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} z-50 transition-transform transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} duration-300`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-8 relative">
          <button onClick={toggleSidebar} className="absolute top-4 right-4 focus:outline-none">
            <IoClose className={`h-8 w-8 ${darkMode ? 'text-white' : 'text-black'}`} />
          </button>
          <a
            href="/"
            className="flex items-center font-bold opacity-100 hover:opacity-90 duration-300 select-none mb-8"
          >
            <div className='flex mb-10'>
              <Image
                src={darkMode ? "/cagatav-white.svg" : "/cagatav-colored.svg"}
                alt="logo"
                width={175}
                height={175}
              />
              <div className="grid">
                <p className="ml-1 text-xs">.xyz</p>
                <p className="ml-1 text-xs">.com</p>
              </div>
            </div>
          </a>
          <div className={`grid text-center space-y-8 ${darkMode ? 'text-white' : 'text-black'}`}>
            <a href="/" className="text-2xl hover:text-[#903b3b]">HOME</a>
            <a href="/experience" className="text-2xl hover:text-[#903b3b]">EXPERIENCE</a>
            <a href="/projects" className="text-2xl hover:text-[#903b3b]">PROJECTS</a>
            <a href="/cv" className="text-2xl hover:text-[#903b3b]">CV</a>
          </div>
        </div>
      </div>
      <div className={`fixed inset-0 z-40 ${sidebarOpen ? 'block' : 'hidden'} bg-black bg-opacity-50`} onClick={toggleSidebar}></div>
    </nav>
  );
};

export default Navbar;
