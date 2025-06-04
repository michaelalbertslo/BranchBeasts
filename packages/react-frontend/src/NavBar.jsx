import React, { useState } from "react";
import { Link} from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-gradient-to-b from-[#C0F0E8] via-transparent to-[#C0F0E8] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 p-3">
      <nav className="relative flex justify-between items-center w-[92%] mx-auto">
        <div className="rounded-xl bg-gradient-to-br from-blue-300 via-blue-300 to-blue-400 shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 py-1 px-4 hover:scale-105">
          <Link to="/" className="text-xl font-bold">
            MyCloset
          </Link>
        </div>

        <div
          className="md:hidden text-2xl p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FiAlignJustify />
        </div>

        <div className="hidden md:flex items-center gap-8">
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

          <div className="flex gap-4">
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

        </div>
      </nav>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full md:hidden z-50">
          <ul className="flex flex-col items-center gap-4 py-4">
          <li>
              <Link to="/outfit-gen" class="text-xl font-bold">
                Create Outfit
              </Link>
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
