import React from "react";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between h-20 px-8 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="flex gap-2 cursor-pointer items-center group">
        <div className="overflow-hidden rounded-lg h-26 w-26 mt-3">
          <img
            className="h-full w-full object-contain transition-transform group-hover:scale-110"
            src="/ChatGPT Image Mar 8, 2026, 12_43_32 AM.png"
            alt="logo"
          />
        </div>
        <span className="text-2xl font-bold tracking-tight font-brand text-[#2563EB]">
          Echonix
        </span>
      </div>
      <div className="flex items-center gap-8 text-sm font-medium text-gray-600">
        <a className="hover:text-[#2563EB] transition-colors duration-200">
          Home
        </a>
        <a className="hover:text-[#2563EB] transition-colors duration-200">
          Products
        </a>
        <a className="hover:text-[#2563EB] transition-colors duration-200">
          About
        </a>
        <a className="hover:text-[#2563EB] transition-colors duration-200">
          Find us
        </a>
        <a className="hover:text-[#2563EB] transition-colors duration-200">
          Pages
        </a>
      </div>
      <div className="flex gap-4  items-center">
        <button className="relative group bg-[#2563EB] px-5 py-2.5 text-white rounded-xl hover:bg-[#1d4ed8] transition-all duration-300 flex gap-2 justify-center items-center shadow-lg shadow-blue-200">
          My Cart
          <ShoppingCart size={17} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
