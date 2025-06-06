import React, { useState } from "react";
import { Link} from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-gradient-to-b from-[#C0F0E8] via-transparent to-[#C0F0E8] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 p-3">
      <nav className="relative flex items-center justify-between w-[92%] mx-auto">
        {/* Left: Logo */}
        <div className="flex-none">
          <div className="rounded-xl bg-gradient-to-br from-blue-300 via-blue-300 to-blue-400 shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 py-1 px-4 hover:scale-105">
            <Link to="/" className="text-xl font-bold">
              MyCloset
            </Link>
          </div>
        </div>

        {/* Center: Main Nav Buttons */}
        <div className="hidden lg:flex flex-1 justify-center items-center gap-8">
          <div className="rounded-xl bg-gradient-to-br from-[#daffa0] via-[#9fe11d] to-[#daffa0] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 py-1 px-4 hover:scale-105">
            <Link to="/outfit-gen" className="text-xl font-bold">
              Create Outfit
            </Link>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-[#daffa0] via-[#9fe11d] to-[#daffa0] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 py-1 px-4 hover:scale-105">
            <Link to="/outfits" className="text-xl font-bold">
              MyOutfits
            </Link>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-[#daffa0] via-[#9fe11d] to-[#daffa0] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 py-1 px-4 hover:scale-105">
            <Link to="/upload" className="text-xl font-bold">
              Upload Item
            </Link>
          </div>
        </div>

        {/* Right: Auth Buttons */}
        <div className="hidden lg:flex gap-4 flex-none">
          <div className="rounded-xl bg-gradient-to-br from-blue-300 via-blue-300 to-blue-400 shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 py-1 px-4 hover:scale-105">
            <Link to="/login" className="text-xl font-bold">
              Log In
            </Link>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-blue-300 via-blue-300 to-blue-400 shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 py-1 px-4 hover:scale-105">
            <Link to="/signup" className="text-xl font-bold">
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile menu icon */}
        <div className="lg:hidden text-2xl p-2 cursor-pointer">
          <FiAlignJustify onClick={() => setMenuOpen(!menuOpen)} />
        </div>
      </nav>

      {menuOpen && (
        <div className="absolute rounded-2xl top-full left-0 w-full lg:hidden z-50 bg-gradient-to-b from-transparent via-[#daffa0] to-transparent shadow-glass shadow-2xl backdrop-blur-sm border border-white/50">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <div className="rounded-xl bg-gradient-to-br from-[#daffa0] via-[#9fe11d] to-[#daffa0] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 py-1 px-4 hover:scale-105">
                <Link to="/outfit-gen" className="text-xl font-bold">
                  Create Outfit
                </Link>
              </div>
            </li>
            <li>
              <div className="rounded-xl bg-gradient-to-br from-[#daffa0] via-[#9fe11d] to-[#daffa0] shadow-glass shadow-xl backdrop-blur-sm border border-white/5 py-1 px-4 hover:scale-105">
                <Link to="/outfits" className="text-xl font-bold" onClick={() => setMenuOpen(false)}>
                  MyOutfits
                </Link>
              </div>
            </li>
            <li>
              <div className="rounded-xl bg-gradient-to-br from-[#daffa0] via-[#9fe11d] to-[#daffa0] shadow-glass shadow-xl backdrop-blur-sm border border-white/5 py-1 px-4 hover:scale-105">
                <Link to="/upload" className="text-xl font-bold" onClick={() => setMenuOpen(false)}>
                  Upload Item
                </Link>
              </div>
            </li>
            <li>
              <div className="rounded-xl bg-gradient-to-br from-blue-300 via-blue-300 to-blue-400 shadow-glass shadow-xl backdrop-blur-sm border border-white/5 py-1 px-4 hover:scale-105">
                <Link to="/login" className="text-xl font-bold" onClick={() => setMenuOpen(false)}>
                  Log In
                </Link>
              </div>
            </li>
            <li>
              <div className="rounded-xl bg-gradient-to-br from-blue-300 via-blue-300 to-blue-400 shadow-glass shadow-xl backdrop-blur-sm border border-white/5 py-1 px-4 hover:scale-105">
                <Link to="/signup" className="text-xl font-bold" onClick={() => setMenuOpen(false)}>
                  Sign Up
                </Link>
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default NavBar;
