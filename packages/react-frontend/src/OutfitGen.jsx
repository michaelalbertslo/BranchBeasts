import React, { useState, useEffect } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { API_BASE_URL } from "./azure";

function OutfitGen() {
  //hat state and fetching
  const [hatIndex, setHatIndex] = useState(0);
  const [hats, setHats] = useState([]);
  useEffect(() => {
    fetch(`${API_BASE_URL}/items?type=hat`)
      .then((res) => res.json())
      .then((data) => {
        setHats(data.items_list);
      })
      .catch((err) => console.error("Error fetching hats:", err));
  }, []);
  const nextHat = () => {
    if (hats.length === 0) return;
    setHatIndex((prev) => (prev + 1) % hats.length);
  };
  const prevHat = () => {
    if (hats.length === 0) return;
    setHatIndex((prev) => (prev - 1 + hats.length) % hats.length);
  };

  //jacket state and fetching
  const [jacketIndex, setJacketIndex] = useState(0);
  const [jackets, setJackets] = useState([]);
  useEffect(() => {
    fetch(`${API_BASE_URL}/items?type=jacket`)
      .then((res) => res.json())
      .then((data) => {
        setJackets(data.items_list);
      })
      .catch((err) => console.error("Error fetching hats:", err));
  }, []);
  const nextJacket = () => {
    if (jackets.length === 0) return;
    setJacketIndex((prev) => (prev + 1) % jackets.length);
  };
  const prevJacket = () => {
    if (jackets.length === 0) return;
    setJacketIndex((prev) => (prev - 1 + jackets.length) % jackets.length);
  };

  // ── State & fetch for “Shirt” ──
  const [shirtIndex, setShirtIndex] = useState(0);
  const [shirts, setShirts] = useState([]);
  useEffect(() => {
    fetch(`${API_BASE_URL}/items?type=shirt`)
      .then((res) => res.json())
      .then((data) => setShirts(data.items_list))
      .catch((err) => console.error("Error fetching shirts:", err));
  }, []);
  const nextShirt = () => {
    if (shirts.length === 0) return;
    setShirtIndex((prev) => (prev + 1) % shirts.length);
  };
  const prevShirt = () => {
    if (shirts.length === 0) return;
    setShirtIndex((prev) => (prev - 1 + shirts.length) % shirts.length);
  };

  // ── State & fetch for “Pants” ──
  const [pantsIndex, setPantsIndex] = useState(0);
  const [pants, setPants] = useState([]);
  useEffect(() => {
    fetch(`${API_BASE_URL}/items?type=pants`)
      .then((res) => res.json())
      .then((data) => setPants(data.items_list))
      .catch((err) => console.error("Error fetching pants:", err));
  }, []);
  const nextPants = () => {
    if (pants.length === 0) return;
    setPantsIndex((prev) => (prev + 1) % pants.length);
  };
  const prevPants = () => {
    if (pants.length === 0) return;
    setPantsIndex((prev) => (prev - 1 + pants.length) % pants.length);
  };

  // ── State & fetch for “Socks” ──
  const [socksIndex, setSocksIndex] = useState(0);
  const [socks, setSocks] = useState([]);
  useEffect(() => {
    fetch(`${API_BASE_URL}/items?type=socks`)
      .then((res) => res.json())
      .then((data) => setSocks(data.items_list))
      .catch((err) => console.error("Error fetching socks:", err));
  }, []);
  const nextSocks = () => {
    if (socks.length === 0) return;
    setSocksIndex((prev) => (prev + 1) % socks.length);
  };
  const prevSocks = () => {
    if (socks.length === 0) return;
    setSocksIndex((prev) => (prev - 1 + socks.length) % socks.length);
  };

  // ── State & fetch for “Shoes” ──
  const [shoesIndex, setShoesIndex] = useState(0);
  const [shoes, setShoes] = useState([]);
  useEffect(() => {
    fetch(`${API_BASE_URL}/items?type=shoes`)
      .then((res) => res.json())
      .then((data) => setShoes(data.items_list))
      .catch((err) => console.error("Error fetching shoes:", err));
  }, []);
  const nextShoes = () => {
    if (shoes.length === 0) return;
    setShoesIndex((prev) => (prev + 1) % shoes.length);
  };
  const prevShoes = () => {
    if (shoes.length === 0) return;
    setShoesIndex((prev) => (prev - 1 + shoes.length) % shoes.length);
  };


  return (
    <div className="flex flex-col justify-center py-5 space-y-5">

      {/* ── HAT Row ── */}
      <div className="grid grid-cols-5 items-center gap-2">
        {/* Keep */}
        <button className="border rounded text-sm leading-none px-1 py-0.5">
          Keep
        </button>
        {/* Left arrow */}
        <button onClick={prevHat} className="flex justify-center py-2">
          <FiArrowLeft className="text-4xl" />
        </button>
        {/* Image container */}
        {hats.length > 0 ? (
          <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 w-50 h-50">
            <img
              src={hats[hatIndex].image_url}
              alt="Hat"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="flex justify-center items-center w-50 h-50 bg-white rounded-lg shadow-md">
            <span className="text-xs text-gray-500">No hats</span>
          </div>
        )}
        {/* Right arrow */}
        <button onClick={nextHat} className="flex justify-center py-2">
          <FiArrowRight className="text-4xl" />
        </button>
        {/* Nullify */}
        <button className="border rounded text-sm leading-none px-1 py-0.5">
          Nullify
        </button>
      </div>

      {/* ── JACKET Row ── */}
      <div className="grid grid-cols-5 items-center gap-2">
        <button className="border rounded text-sm leading-none px-1 py-0.5">
          Keep
        </button>
        <button onClick={prevJacket} className="flex justify-center py-2">
          <FiArrowLeft className="text-4xl" />
        </button>
        {jackets.length > 0 ? (
          <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 w-50 h-50">
            <img
              src={jackets[jacketIndex].image_url}
              alt="Jacket"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="flex justify-center items-center w-50 h-50 bg-white rounded-lg shadow-md">
            <span className="text-xs text-gray-500">No jackets</span>
          </div>
        )}
        <button onClick={nextJacket} className="flex justify-center py-2">
          <FiArrowRight className="text-4xl" />
        </button>
        <button className="border rounded text-sm leading-none px-1 py-0.5">
          Nullify
        </button>
      </div>

      {/* ── SHIRT Row ── */}
      <div className="grid grid-cols-5 items-center gap-2">
        <button className="border rounded text-sm leading-none px-1 py-0.5">
          Keep
        </button>
        <button onClick={prevShirt} className="flex justify-center py-2">
          <FiArrowLeft className="text-4xl" />
        </button>
        {shirts.length > 0 ? (
          <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 w-50 h-50">
            <img
              src={shirts[shirtIndex].image_url}
              alt="Shirt"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="flex justify-center items-center w-50 h-50 bg-white rounded-lg shadow-md">
            <span className="text-xs text-gray-500">No shirts</span>
          </div>
        )}
        <button onClick={nextShirt} className="flex justify-center py-2">
          <FiArrowRight className="text-4xl" />
        </button>
        <button className="border rounded text-sm leading-none px-1 py-0.5">
          Nullify
        </button>
      </div>

      {/* ── PANTS Row ── */}
      <div className="grid grid-cols-5 items-center gap-2">
        <button className="border rounded text-sm leading-none px-1 py-0.5">
          Keep
        </button>
        <button onClick={prevPants} className="flex justify-center py-2">
          <FiArrowLeft className="text-4xl" />
        </button>
        {pants.length > 0 ? (
          <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 w-50 h-50">
            <img
              src={pants[pantsIndex].image_url}
              alt="Pants"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="flex justify-center items-center w-50 h-50 bg-white rounded-lg shadow-md">
            <span className="text-xs text-gray-500">No pants</span>
          </div>
        )}
        <button onClick={nextPants} className="flex justify-center py-2">
          <FiArrowRight className="text-4xl" />
        </button>
        <button className="border rounded text-sm leading-none px-1 py-0.5">
          Nullify
        </button>
      </div>

      {/* ── SOCKS Row ── */}
      <div className="grid grid-cols-5 items-center gap-2">
        <button className="border rounded text-sm leading-none px-1 py-0.5">
          Keep
        </button>
        <button onClick={prevSocks} className="flex justify-center py-2">
          <FiArrowLeft className="text-4xl" />
        </button>
        {socks.length > 0 ? (
          <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 w-50 h-50">
            <img
              src={socks[socksIndex].image_url}
              alt="Socks"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="flex justify-center items-center w-50 h-50 bg-white rounded-lg shadow-md">
            <span className="text-xs text-gray-500">No socks</span>
          </div>
        )}
        <button onClick={nextSocks} className="flex justify-center py-2">
          <FiArrowRight className="text-4xl" />
        </button>
        <button className="border rounded text-sm leading-none px-1 py-0.5">
          Nullify
        </button>
      </div>

      {/* ── SHOES Row ── */}
      <div className="grid grid-cols-5 items-center gap-2">
        <button className="border rounded text-sm leading-none px-1 py-0.5">
          Keep
        </button>
        <button onClick={prevShoes} className="flex justify-center py-2">
          <FiArrowLeft className="text-4xl" />
        </button>
        {shoes.length > 0 ? (
          <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 w-50 h-50">
            <img
              src={shoes[shoesIndex].image_url}
              alt="Shoes"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="flex justify-center items-center w-50 h-50 bg-white rounded-lg shadow-md">
            <span className="text-xs text-gray-500">No shoes</span>
          </div>
        )}
        <button onClick={nextShoes} className="flex justify-center py-2">
          <FiArrowRight className="text-4xl" />
        </button>
        <button className="border rounded text-sm leading-none px-1 py-0.5">
          Nullify
        </button>
      </div>

    </div>
  );
}

export default OutfitGen;
