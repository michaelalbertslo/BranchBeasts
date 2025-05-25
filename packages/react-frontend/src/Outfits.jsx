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
    <div className="flex justify-center py-5">
      <div className="grid lg:grid-cols-12 grid-cols-6 gap-4">
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
