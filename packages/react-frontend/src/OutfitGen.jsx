import React, { useState } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

function OutfitGen() {
  const colors = [
    "bg-red-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-gray-400",
    "bg-yellow-400",
  ];

  const [hatColorIndex, setHatColorIndex] = useState(0);
  const [jacketColorIndex, setJacketColorIndex] = useState(0);
  const [shirtColorIndex, setShirtColorIndex] = useState(0);
  const [pantsColorIndex, setPantsColorIndex] = useState(0);
  const [socksColorIndex, setSocksColorIndex] = useState(0);
  const [shoesColorIndex, setShoesColorIndex] = useState(0);

  const nextColor = (type) => {
    if (type === "hat") {
      setHatColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    } else if (type === "jacket") {
      setJacketColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    } else if (type === "shirt") {
      setShirtColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    } else if (type === "pants") {
      setPantsColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    } else if (type === "socks") {
      setSocksColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    } else if (type === "shoes") {
      setShoesColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }
  };

  const prevColor = (type) => {
    if (type === "hat") {
      setHatColorIndex((prevIndex) =>
        (prevIndex - 1 + colors.length) % colors.length
      );
    } else if (type === "jacket") {
      setJacketColorIndex((prevIndex) =>
        (prevIndex - 1 + colors.length) % colors.length
      );
    } else if (type === "shirt") {
      setShirtColorIndex((prevIndex) =>
        (prevIndex - 1 + colors.length) % colors.length
      );
    } else if (type === "pants") {
      setPantsColorIndex((prevIndex) =>
        (prevIndex - 1 + colors.length) % colors.length
      );
    } else if (type === "socks") {
      setSocksColorIndex((prevIndex) =>
        (prevIndex - 1 + colors.length) % colors.length
      );
    } else if (type === "shoes") {
      setShoesColorIndex((prevIndex) =>
        (prevIndex - 1 + colors.length) % colors.length
      );
    }
  };
  return (
    <div class="flex justify-center py-5">
      <div class="grid grid-rows-6 gap-5">
        <div class="grid grid-cols-3">
          <button onClick={() => prevColor("hat")} class="flex justify-center py-4">
            <FiArrowLeft class="text-5xl" />
          </button>
          <div class={`flex justify-center items-center w-20 h-20 ${colors[hatColorIndex]}`}>
            <strong>Hat</strong>
          </div>
          <button onClick={() => nextColor("hat")} class="flex justify-center py-4">
            <FiArrowRight class="text-5xl" />
          </button>
        </div>
        <div class="grid grid-cols-3">
          <button onClick={() => prevColor("jacket")} class="flex justify-center py-4">
            <FiArrowLeft class="text-5xl" />
          </button>
          <div class={`flex justify-center items-center w-20 h-20 ${colors[jacketColorIndex]}`}>
            <strong>Jacket</strong>
          </div>
          <button onClick={() => nextColor("jacket")} class="flex justify-center py-4">
            <FiArrowRight class="text-5xl" />
          </button>
        </div>
        <div class="grid grid-cols-3">
          <button onClick={() => prevColor("shirt")} class="flex justify-center py-4">
            <FiArrowLeft class="text-5xl" />
          </button>
          <div class={`flex justify-center items-center w-20 h-20 ${colors[shirtColorIndex]}`}>
            <strong>Shirt</strong>
          </div>
          <button onClick={() => nextColor("shirt")} class="flex justify-center py-4">
            <FiArrowRight class="text-5xl" />
          </button>
        </div>
        <div class="grid grid-cols-3">
          <button onClick={() => prevColor("pants")} class="flex justify-center py-4">
            <FiArrowLeft class="text-5xl" />
          </button>
          <div class={`flex justify-center items-center w-20 h-20 ${colors[pantsColorIndex]}`}>
            <strong>Pants</strong>
          </div>
          <button onClick={() => nextColor("pants")} class="flex justify-center py-4">
            <FiArrowRight class="text-5xl" />
          </button>
        </div>
        <div class="grid grid-cols-3">
          <button onClick={() => prevColor("socks")} class="flex justify-center py-4">
            <FiArrowLeft class="text-5xl" />
          </button>
          <div class={`flex justify-center items-center w-20 h-20 ${colors[socksColorIndex]}`}>
            <strong>Socks</strong>
          </div>
          <button onClick={() => nextColor("socks")} class="flex justify-center py-4">
            <FiArrowRight class="text-5xl" />
          </button>
        </div>
        <div class="grid grid-cols-3">
          <button onClick={() => prevColor("shoes")} class="flex justify-center py-4">
            <FiArrowLeft class="text-5xl" />
          </button>
          <div class={`flex justify-center items-center w-20 h-20 ${colors[shoesColorIndex]}`}>
            <strong>Shoes</strong>
          </div>
          <button onClick={() => nextColor("shoes")} class="flex justify-center py-4">
            <FiArrowRight class="text-5xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default OutfitGen;