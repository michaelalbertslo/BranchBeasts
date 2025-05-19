import React, { useState } from "react";
import View from "./View";

function Closet() {
  const [isViewOpen, setIsViewOpen] = useState(false);

  const openView = () => {
    setIsViewOpen(true);
  }

  const closeView = () => {
    setIsViewOpen(false);
  }

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
  ];

  return (
    <div className="flex justify-center py-5">
      <div className="grid lg:grid-cols-12 grid-cols-6 gap-4">
        {closet.map((clothing, index) => (
          <div className="flex justify-center items-center bg-gray-400 w-20 h-20" onClick={openView} key={index}>
            <strong>{clothing.box}</strong>
          </div>
        ))}
      </div>
      <View isOpen={isViewOpen} onClose={closeView} />
    </div>
  );
}

export default Closet;