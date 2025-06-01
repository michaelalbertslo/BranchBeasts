import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-gradient-to-b from-[#C0F0E8] via-transparent to-[#C0F0E8] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 p-3">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div className="rounded-xl bg-gradient-to-br from-blue-300 via-blue-300 to-blue-400 shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 py-1 px-4 hover:scale-105">
          <Link to="/" className="text-xl font-bold">
            MyCloset
          </Link>
        </div>
        <div
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}>
          <FiAlignJustify />
        </div>
        <div
          className={`nav-links z-50 md:static absolute md:min-h-fit min-h-[60vh] left-0 ${menuOpen ? "top-16" : "-top-full"} md:w-auto w-full flex items-center transition-all duration-300 ease-in`}>
          <ul className="flex md:flex-row flex-col md:items-center md:gap-24 gap-6 w-full md:w-auto text-center">
            <li>
              <div className="rounded-xl bg-gradient-to-br from-[#daffa0] via-[#9fe11d] to-[#daffa0] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 py-1 px-4 hover:scale-105">
                <Link to="/outfits" className="text-xl font-bold">
                  MyOutfits
                </Link>
              </div>
            </li>
            <li>
              <div className="rounded-xl bg-gradient-to-br from-[#daffa0] via-[#9fe11d] to-[#daffa0] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 py-1 px-4 hover:scale-105">
                <Link to="/upload" className="text-xl font-bold">
                  Upload Item
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <div className="rounded-xl bg-gradient-to-br from-blue-300 via-blue-300 to-blue-400 shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 py-1 px-4 hover:scale-105">
            <Link to="/login" className="text-xl font-bold">
              Log In / Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
