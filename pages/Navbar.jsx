import React from 'react';
import Image from "next/image";
<style></style>
const Navbar = () => {
  return (

    <nav className="bg-gray-100 flex justify-between items-center p-8 px-16">
      <div className="text-[#6c2c2c] text-2xl font-bold">
        <a
          href="/"
          className="flex items-center font-bold text-white opacity-100 hover:opacity-90 duration-200 select-none ml-8"
        >
          <Image src="/cagatav-colored.svg" alt="logo" width={175} height={175}/>
        </a>
      </div>
      <ul className="flex space-x-10">
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
    </nav>
  );
}

export default Navbar;
