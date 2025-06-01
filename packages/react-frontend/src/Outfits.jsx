import React from "react";
import { Link } from "react-router-dom";

function Outfits() {
  const closet = [
    { box: "1" },
    { box: "2" },
    { box: "3" },
    { box: "4" },
    { box: "5" },
    { box: "6" },
    { box: "7" },
    { box: "8" },
    { box: "9" },
    { box: "10" },
    { box: "11" },
    { box: "12" },
    { box: "13" },
    { box: "14" },
    { box: "15" },
    { box: "16" },
    { box: "17" },
    { box: "18" },
    { box: "19" },
    { box: "20" }
  ];

  return (
    <div className="justify-center container mx-auto px-32 py-8 rounded-3xl bg-gradient-to-b from-[#C0F0E8] via-transparent to-[#C0F0E8] shadow-glass shadow-2xl backdrop-blur-sm border border-white/50 min-h-screen">
      <div className="grid lg:grid-cols-8 grid-cols-4 gap-4">
        {closet.map((clothing, index) => (
          <Link
            to="/outfit-gen"
            className="flex justify-center items-center bg-gray-400 w-20 h-20"
            key={index}>
            <strong>{clothing.box}</strong>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Outfits;
