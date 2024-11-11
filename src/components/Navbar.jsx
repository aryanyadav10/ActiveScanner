import React from 'react';
import { AiOutlineSecurityScan } from "react-icons/ai";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white/80 shadow-lg backdrop-blur-md sticky top-0 z-50">
      {/* Left side: Logo and Name */}
      <div className="flex items-center">
        <div className="p-2 rounded">
          <AiOutlineSecurityScan className=" text-gray-800 text-4xl"/>
        </div>
        <span className="text-xl font-semibold text-gray-900">ActiveScanner</span>
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex space-x-6 text-gray-600">
        <a href="#use-cases" className="hover:text-gray-800">Use Cases</a>
        <a href="#scanners" className="hover:text-gray-800">Scanners</a>
        <a href="#pricing" className="hover:text-gray-800">Pricing</a>
        <a href="#resources" className="hover:text-gray-800">Resources</a>
        <a href="#blog" className="hover:text-gray-800">Blog</a>
      </div>

      {/* Right side: Login and Signup buttons */}
      <div className="flex space-x-3">
        <button className="px-4 py-2 text-gray-600 hover:text-gray-900 bg-white border border-gray-300 rounded-md hover:bg-gray-100">
          Log in
        </button>
        <button className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600">
          Sign up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
