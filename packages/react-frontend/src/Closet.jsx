import React from "react";

function Closet() {
  const closet = [
    { box : "1"},
    { box : "2"},
    { box : "3"},
    { box : "4"},
    { box : "5"},
    { box : "6"},
    { box : "7"},
    { box : "8"},
    { box : "9"},
    { box : "10"},
    { box : "11"},
    { box : "12"},
    { box : "13"},
    { box : "14"},
    { box : "15"},
    { box : "16"},
    { box : "17"},
    { box : "18"},
    { box : "19"},
    { box : "20"},
  ];

  return (
    <div className="flex justify-center">
      <div className="grid lg:grid-cols-12 grid-cols-7 gap-4">
        {closet.map((clothing, index) => (
          <div className="flex justify-center items-center bg-gray-400 w-16 h-16" key={index}>
            <strong>{clothing.box}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Closet;