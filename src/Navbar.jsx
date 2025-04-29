import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src="https://communionhub.org/static/media/Logocommunion.0485ada0760e4748313f.png"
            alt="Communion Logo"
            className="h-8"
          />
        </Link>

        {/* Menu Button (Visible on Small Screens) */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX className="text-black" /> : <FiMenu  className="text-black"/>}
        </button>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex space-x-6 items-center justify-center mx-auto font-bold text-[20px]">
          <Link to="/" classNamse="text-gray-700 hover:text-blue-500">Home</Link>
          <Link to="/events" className="text-gray-700 hover:text-blue-500">Events</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500">About</Link>
          
         
        </div>
      </div>

      {/* Mobile Menu (Visible when menuOpen is true) */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-start mt-4 border-t">
          <Link to="/" className="block p-3 w-full text-gray-700 hover:bg-gray-100">Home</Link>
         
          <Link to="/events" className="block p-3 w-full text-gray-700 hover:bg-gray-100">Events</Link>
          <Link to="/About" className="block p-3 w-full text-gray-700 hover:bg-gray-100">About</Link>
         
          {/* Sign In Button */}
          <button className="w-full bg-gray-900 text-white p-3 mt-2">
            Sign in
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
