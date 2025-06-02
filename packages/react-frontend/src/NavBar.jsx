import React, { useState } from "react";
import { Link} from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header class="bg-white shadow-2xl p-3">
      <nav class="flex justify-between items-center w-[92%] mx-auto">
        <Link to="/" class="text-xl font-bold">
          MyCloset
        </Link>
        <div
          class="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}>
          <FiAlignJustify />
        </div>
        <div
          class={`nav-links md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${menuOpen ? "top-16" : "top-[-100%]"} md:w-auto w-full flex items-center transition-all duration-300 ease-in`}>
          <ul class="flex md:flex-row flex-col md:items-center md:gap-24 gap-6 w-full md:w-auto text-center">
            <li>
              <Link to="/outfits" class="text-xl font-bold">
                MyOutfits
              </Link>
            </li>
            <li>
              <Link to="/upload" class="text-xl font-bold">
                Upload Item
              </Link>
            </li>
            <li>
              <Link to="/outfit-gen" class="text-xl font-bold">
                Create Outfit
              </Link>
            </li>
          </ul>
        </div>
        <div class="hidden md:flex items-center gap-8">
          <Link to="/login" class="text-xl font-bold">
            Log In / Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
