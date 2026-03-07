import React from "react";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-blue-100 flex items-center justify-between h-10">
      <div className="flex justify-between items-center">
        <img
          className="h-20 w-20 mt-2"
          src="/ChatGPT Image Mar 8, 2026, 12_43_32 AM.png"
          alt="logo"
        />
        <h1 className="">Echonix</h1>
      </div>
      <div className="flex justify-between gap-3">
        <h1>Home</h1>
        <h1>Products</h1>
        <h1>About</h1>
        <h1>Find us</h1>
        <h1>Pages</h1>
      </div>
      <div>
        <button className="bg-blue-600 px-1 py-1 mr-3 rounded-full w-20 flex gap-1 justify-center items-center">
          Cart
          <ShoppingCart size={17} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
