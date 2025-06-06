import React, { useState, useEffect } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { API_BASE_URL } from "./azure";

function OutfitGen() {
  //hat state and fetching
  const [hatIndex, setHatIndex] = useState(0);
  const [hats, setHats] = useState([]);
  const [hatKeep, setHatKeep] = useState(false);
  const [hatNull, setHatNull] = useState(false);
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
  const toggleHatKeep = () => {
    setHatKeep((prev) => !prev);
  };
  const toggleHatNull = () => {
    setHatNull((prev) => !prev);
    if (hatKeep) setHatKeep(false);
  };

  //jacket state and fetching
  const [jacketIndex, setJacketIndex] = useState(0);
  const [jackets, setJackets] = useState([]);
  const [jacketKeep, setJacketKeep] = useState(false);
  const [jacketNull, setJacketNull] = useState(false);

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
  const toggleJacketKeep = () => {
    setJacketKeep((prev) => !prev);
  };
  const toggleJacketNull = () => {
    setJacketNull((prev) => !prev);
    if (jacketKeep) setJacketKeep(false);
  };

  // ── State & fetch for “Shirt” ──
  const [shirtIndex, setShirtIndex] = useState(0);
  const [shirts, setShirts] = useState([]);
  const [shirtKeep, setShirtKeep] = useState(false);
  const [shirtNull, setShirtNull] = useState(false);
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
  const toggleShirtKeep = () => {
    setShirtKeep((prev) => !prev);
  };
  const toggleShirtNull = () => {
    setShirtNull((prev) => !prev);
    if (shirtKeep) setShirtKeep(false);
  };

  // ── State & fetch for “Pants” ──
  const [pantsIndex, setPantsIndex] = useState(0);
  const [pants, setPants] = useState([]);
  const [pantsKeep, setPantsKeep] = useState(false);
  const [pantsNull, setPantsNull] = useState(false)

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
  const togglePantsKeep = () => {
    setPantsKeep((prev) => !prev);
  };
  const togglePantsNull = () => {
    setPantsNull((prev) => !prev);
    if (pantsKeep) setPantsKeep(false);
  };

  // ── State & fetch for “Socks” ──
  const [socksIndex, setSocksIndex] = useState(0);
  const [socks, setSocks] = useState([]);
  const [socksKeep, setSocksKeep] = useState(false);
  const [socksNull, setSocksNull] = useState(false);

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
  const toggleSocksKeep = () => {
    setSocksKeep((prev) => !prev);
  };
  const toggleSocksNull = () => {
    setSocksNull((prev) => !prev);
    if (socksKeep) setSocksKeep(false);
  };

  // ── State & fetch for “Shoes” ──
  const [shoesIndex, setShoesIndex] = useState(0);
  const [shoes, setShoes] = useState([]);
  const [shoesKeep, setShoesKeep] = useState(false);
  const [shoesNull, setShoesNull] = useState(false);

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
  const toggleShoesKeep = () => {
    setShoesKeep((prev) => !prev);
  };
  const toggleShoesNull = () => {
    setShoesNull((prev) => !prev);
    if (shoesKeep) setShoesKeep(false);
  };

  //randomizer
  const randomizeAll = () => {
    if (!hatKeep && !hatNull &&hats.length) setHatIndex(Math.floor(Math.random() * hats.length));
    if (!jacketKeep && !jacketNull &&jackets.length) setJacketIndex(Math.floor(Math.random() * jackets.length));
    if (!shirtKeep && !shirtNull &&shirts.length) setShirtIndex(Math.floor(Math.random() * shirts.length));
    if (!pantsKeep && !pantsNull & pants.length) setPantsIndex(Math.floor(Math.random() * pants.length));
    if (!socksKeep && !socksNull &&socks.length) setSocksIndex(Math.floor(Math.random() * socks.length));
    if (!shoesKeep && !shoesNull && shoes.length) setShoesIndex(Math.floor(Math.random() * shoes.length));
  };

  //function to save outfits
  const saveOutfit = async () => {
    const hatObj = hatNull
      ? { id: null, image: null }
      : hats.length > 0
      ? { id: hats[hatIndex]._id, image: hats[hatIndex].image_url }
      : { id: null, image: null };

    const jacketObj = jacketNull
      ? { id: null, image: null }
      : jackets.length > 0
      ? { id: jackets[jacketIndex]._id, image: jackets[jacketIndex].image_url }
      : { id: null, image: null };

    const shirtObj = shirtNull
      ? { id: null, image: null }
      : shirts.length > 0
      ? { id: shirts[shirtIndex]._id, image: shirts[shirtIndex].image_url }
      : { id: null, image: null };

    const pantsObj = pantsNull
      ? { id: null, image: null }
      : pants.length > 0
      ? { id: pants[pantsIndex]._id, image: pants[pantsIndex].image_url }
      : { id: null, image: null };

    const socksObj = socksNull
      ? { id: null, image: null }
      : socks.length > 0
      ? { id: socks[socksIndex]._id, image: socks[socksIndex].image_url }
      : { id: null, image: null };

    const shoesObj = shoesNull
      ? { id: null, image: null }
      : shoes.length > 0
      ? { id: shoes[shoesIndex]._id, image: shoes[shoesIndex].image_url }
      : { id: null, image: null };

    const payload = {
      hat: hatObj,
      jacket: jacketObj,
      shirt: shirtObj,
      pants: pantsObj,
      socks: socksObj,
      shoes: shoesObj,
    };

    try {
      const res = await fetch(`${API_BASE_URL}/outfits`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const err = await res.json();
        console.error("Failed to save outfit:", err);
        alert("Error saving outfit");
      } else {
        const saved = await res.json();
        console.log("Saved outfit:", saved);
        alert("Outfit saved!");
      }
    } catch (err) {
      console.error("Network error saving outfit:", err);
      alert("Network error");
    }
  };

  // const nullifyItem = ( => {
  // })

  return (
    <div className="flex flex-col justify-center py-2 space-y-1 mx-10">

      {/* ── HAT Row ── */}
      <div className="grid grid-cols-5 items-center gap-2">
        {/* Keep */}
        <button
          onClick={toggleHatKeep}
          className={`text-sm leading-none px-1 py-2 rounded-xl hover:scale-105 ${
            hatKeep ? "bg-gradient-to-br from-[#daffa0] via-[#9fe11d] to-[#daffa0] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5" : "bg-gradient-to-br from-[#9fe11d] via-gray-200 to-[#9fe11d] shadow-glass shadow-2xl backdrop-blur-sm border border-white/50"
          }`}>
          {hatKeep ? "Held" : "Keep"}
        </button>
        {/* Left arrow */}
        <button onClick={prevHat} className="flex justify-center">
          <FiArrowLeft className="text-5xl rounded-full bg-gradient-to-b from-[#C0F0E8] via-transparent to-[#C0F0E8] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 hover:scale-105" />
        </button>
        {/*Hat image container*/ }
        {hatNull ? (
          <div className="flex justify-center items-center bg-gray-100 rounded-lg shadow-md">
            <span className="text-xs text-gray-500">No Hat</span>
          </div>
        ) : hats.length > 0 ? (
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              src={hats[hatIndex].image_url}
              alt="Hat"
              className="w-full h-full object-cover"
            />
            {hatKeep && (
              <div className="absolute inset-0 bg-[#daffa0] opacity-15 rounded-lg pointer-events-none" />
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center w-50 h-50 bg-white rounded-lg shadow-md">
            <span className="text-xs text-gray-500">No hats in your closet</span>
          </div>
        )}
        {/* Right arrow */}
        <button onClick={nextHat} className="flex justify-center">
          <FiArrowRight className="text-5xl rounded-full bg-gradient-to-b from-[#C0F0E8] via-transparent to-[#C0F0E8] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 hover:scale-105" />
        </button>
        {/* Nullify */}
        <button
          onClick={toggleHatNull}
          className={`text-sm leading-none px-1 py-2 rounded-xl hover:scale-105 ${
            hatNull ? "bg-gradient-to-br from-[#F5A623] via-[#F55D23] to-[#F5A623] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5" : "bg-gradient-to-br from-[#F5A623] via-gray-200 to-[#F5A623] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5"
          }`}
        >
          {hatNull ? "Restore" : "Nullify"}
        </button>
      </div>

      {/* ── JACKET Row ── */}
      <div className="grid grid-cols-5 items-center gap-2">
        <button
          onClick={toggleJacketKeep}
          className={`text-sm leading-none px-1 py-2 rounded-xl hover:scale-105 ${
            jacketKeep ? "bg-gradient-to-br from-[#daffa0] via-[#9fe11d] to-[#daffa0] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5" : "bg-gradient-to-br from-[#9fe11d] via-gray-200 to-[#9fe11d] shadow-glass shadow-2xl backdrop-blur-sm border border-white/50"
          }`}>
          {jacketKeep ? "Held" : "Keep"}
        </button>
        <button onClick={prevJacket} className="flex justify-center">
          <FiArrowLeft className="text-5xl rounded-full bg-gradient-to-b from-[#C0F0E8] via-transparent to-[#C0F0E8] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 hover:scale-105" />
        </button>
        {jacketNull ? (
          <div className="flex justify-center items-center bg-gray-100 rounded-lg shadow-md">
            <span className="text-xs text-gray-500">No Jacket</span>
          </div>
        ) : jackets.length > 0 ? (
          <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              src={jackets[jacketIndex].image_url}
              alt="Jacket"
              className="w-full h-full object-cover"
            />
            {jacketKeep && (
              <div className="absolute inset-0 bg-yellow-100 opacity-15 rounded-lg pointer-events-none" />
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center w-50 h-50 bg-white rounded-lg shadow-md">
            <span className="text-xs text-gray-500">No Jackets in your closet</span>
          </div>
        )}
        <button onClick={nextJacket} className="flex justify-center">
          <FiArrowRight className="text-5xl rounded-full bg-gradient-to-b from-[#C0F0E8] via-transparent to-[#C0F0E8] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 hover:scale-105" />
        </button>
        <button
          onClick={toggleJacketNull}
          className={`text-sm leading-none px-1 py-2 rounded-xl hover:scale-105 ${
            jacketNull ? "bg-gradient-to-br from-[#F5A623] via-[#F55D23] to-[#F5A623] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5" : "bg-gradient-to-br from-[#F5A623] via-gray-200 to-[#F5A623] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5"
          }`}
        >
          {jacketNull ? "Restore" : "Nullify"}
        </button>
      </div>

      {/* ── SHIRT Row ── */}
      <div className="grid grid-cols-5 items-center gap-2">
        <button
          onClick={toggleShirtKeep}
          className={`text-sm leading-none px-1 py-2 rounded-xl hover:scale-105 ${
            shirtKeep ? "bg-gradient-to-br from-[#daffa0] via-[#9fe11d] to-[#daffa0] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5" : "bg-gradient-to-br from-[#9fe11d] via-gray-200 to-[#9fe11d] shadow-glass shadow-2xl backdrop-blur-sm border border-white/50"
          }`}>
          {shirtKeep ? "Held" : "Keep"}
        </button>
        <button onClick={prevShirt} className="flex justify-center">
          <FiArrowLeft className="text-5xl rounded-full bg-gradient-to-b from-[#C0F0E8] via-transparent to-[#C0F0E8] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 hover:scale-105" />
        </button>
        {/*Shirt Image Container */}
        {shirtNull ? (
          <div className="flex justify-center items-center bg-gray-100 rounded-lg shadow-md">
            <span className="text-xs text-gray-500">No Shirt</span>
          </div>
        ) : shirts.length > 0 ? (
          <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              src={shirts[shirtIndex].image_url}
              alt="Shirt"
              className="w-full h-full object-cover"
            />
            {shirtKeep && (
              <div className="absolute inset-0 bg-yellow-100 opacity-15 rounded-lg pointer-events-none" />
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center w-50 h-50 bg-white rounded-lg shadow-md">
            <span className="text-xs text-gray-500">No shirts in your closet</span>
          </div>
        )}
        <button onClick={nextShirt} className="flex justify-center">
          <FiArrowRight className="text-5xl rounded-full bg-gradient-to-b from-[#C0F0E8] via-transparent to-[#C0F0E8] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 hover:scale-105" />
        </button>
        <button
          onClick={toggleShirtNull}
          className={`text-sm leading-none px-1 py-2 rounded-xl hover:scale-105 ${
            shirtNull ? "bg-gradient-to-br from-[#F5A623] via-[#F55D23] to-[#F5A623] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5" : "bg-gradient-to-br from-[#F5A623] via-gray-200 to-[#F5A623] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5"
          }`}
        >
          {shirtNull ? "Restore" : "Nullify"}
        </button>
      </div>

      {/* ── PANTS Row ── */}
      <div className="grid grid-cols-5 items-center gap-2">
        <button
          onClick={togglePantsKeep}
          className={`text-sm leading-none px-1 py-2 rounded-xl hover:scale-105 ${
            pantsKeep ? "bg-gradient-to-br from-[#daffa0] via-[#9fe11d] to-[#daffa0] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5" : "bg-gradient-to-br from-[#9fe11d] via-gray-200 to-[#9fe11d] shadow-glass shadow-2xl backdrop-blur-sm border border-white/50"
          }`}>
          {pantsKeep ? "Held" : "Keep"}
        </button>
        <button onClick={prevPants} className="flex justify-center">
          <FiArrowLeft className="text-5xl rounded-full bg-gradient-to-b from-[#C0F0E8] via-transparent to-[#C0F0E8] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 hover:scale-105" />
        </button>
        {pantsNull ? (
          <div className="flex justify-center items-center h-50 bg-gray-100 rounded-lg shadow-md">
            <span className="text-xs text-gray-500">No Bottoms</span>
          </div>
        ) : pants.length > 0 ? (
          <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 h-75">
            <img
              src={pants[pantsIndex].image_url}
              alt="Bottoms"
              className="w-full h-full object-cover"
            />
            {pantsKeep && (
              <div className="absolute inset-0 bg-yellow-100 opacity-15 rounded-lg pointer-events-none" />
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center w-50 h-50 bg-white rounded-lg shadow-md">
            <span className="text-xs text-gray-500">No Bottoms in your closet</span>
          </div>
        )}
        <button onClick={nextPants} className="flex justify-center">
          <FiArrowRight className="text-5xl rounded-full bg-gradient-to-b from-[#C0F0E8] via-transparent to-[#C0F0E8] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 hover:scale-105" />
        </button>
        <button
          onClick={togglePantsNull}
          className={`text-sm leading-none px-1 py-2 rounded-xl hover:scale-105 ${
            pantsNull ? "bg-gradient-to-br from-[#F5A623] via-[#F55D23] to-[#F5A623] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5" : "bg-gradient-to-br from-[#F5A623] via-gray-200 to-[#F5A623] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5"
          }`}
        >
          {pantsNull ? "Restore" : "Nullify"}
        </button>
      </div>

      {/* ── SOCKS Row ── */}
      <div className="grid grid-cols-5 items-center gap-2">
        <button
          onClick={toggleSocksKeep} 
          className={`text-sm leading-none px-1 py-2 rounded-xl hover:scale-105 ${
            socksKeep ? "bg-gradient-to-br from-[#daffa0] via-[#9fe11d] to-[#daffa0] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5" : "bg-gradient-to-br from-[#9fe11d] via-gray-200 to-[#9fe11d] shadow-glass shadow-2xl backdrop-blur-sm border border-white/50"
          }`}>
          {socksKeep ? "Held" : "Keep"}
        </button>
        <button onClick={prevSocks} className="flex justify-center">
          <FiArrowLeft className="text-5xl rounded-full bg-gradient-to-b from-[#C0F0E8] via-transparent to-[#C0F0E8] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 hover:scale-105" />
        </button>
        {socksNull ? (
          <div className="flex justify-center items-center bg-gray-100 rounded-lg shadow-md">
            <span className="text-xs text-gray-500">No Socks</span>
          </div>
        ) : socks.length > 0 ? (
          <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              src={socks[socksIndex].image_url}
              alt="Socks"
              className="w-full h-full object-cover"
            />
            {socksKeep && (
              <div className="absolute inset-0 bg-yellow-100 opacity-15 rounded-lg pointer-events-none" />
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center w-50 h-50 bg-white rounded-lg shadow-md">
            <span className="text-xs text-gray-500">No socks in your closet</span>
          </div>
        )}
        <button onClick={nextSocks} className="flex justify-center">
          <FiArrowRight className="text-5xl rounded-full bg-gradient-to-b from-[#C0F0E8] via-transparent to-[#C0F0E8] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 hover:scale-105" />
        </button>
        <button
          onClick={toggleSocksNull}
          className={`text-sm leading-none px-1 py-2 rounded-xl hover:scale-105 ${
            socksNull ? "bg-gradient-to-br from-[#F5A623] via-[#F55D23] to-[#F5A623] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5" : "bg-gradient-to-br from-[#F5A623] via-gray-200 to-[#F5A623] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5"
          }`}
        >
          {socksNull ? "Restore" : "Nullify"}
        </button>
      </div>

      {/* ── SHOES Row ── */}
      <div className="grid grid-cols-5 items-center gap-2">
        <button
          onClick={toggleShoesKeep}
          className={`text-sm leading-none px-1 py-2 rounded-xl hover:scale-105 ${
            shoesKeep ? "bg-gradient-to-br from-[#daffa0] via-[#9fe11d] to-[#daffa0] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5" : "bg-gradient-to-br from-[#9fe11d] via-gray-200 to-[#9fe11d] shadow-glass shadow-2xl backdrop-blur-sm border border-white/50"
          }`}>
          {shoesKeep ? "Held" : "Keep"}
        </button>
        <button onClick={prevShoes} className="flex justify-center">
          <FiArrowLeft className="text-5xl rounded-full bg-gradient-to-b from-[#C0F0E8] via-transparent to-[#C0F0E8] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 hover:scale-105" />
        </button>
        {shoesNull ? (
          <div className="flex justify-center items-center bg-gray-100 rounded-lg shadow-md">
            <span className="text-xs text-gray-500">No Shoes</span>
          </div>
        ) : shoes.length > 0 ? (
          <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              src={shoes[shoesIndex].image_url}
              alt="Shoes"
              className="w-full h-full object-cover"
            />
            {shoesKeep && (
              <div className="absolute inset-0 bg-yellow-100 opacity-15 rounded-lg pointer-events-none" />
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center w-50 h-50 bg-white rounded-lg shadow-md">
            <span className="text-xs text-gray-500">No shoes in your closet</span>
          </div>
        )}
        <button onClick={nextShoes} className="flex justify-center">
          <FiArrowRight className="text-5xl rounded-full bg-gradient-to-b from-[#C0F0E8] via-transparent to-[#C0F0E8] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 hover:scale-105" />
        </button>
        <button
          onClick={toggleShoesNull}
          className={`text-sm leading-none px-1 py-2 rounded-xl hover:scale-105 ${
            shoesNull ? "bg-gradient-to-br from-[#F5A623] via-[#F55D23] to-[#F5A623] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5" : "bg-gradient-to-br from-[#F5A623] via-gray-200 to-[#F5A623] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5"
          }`}
        >
          {shoesNull ? "Restore" : "Nullify"}
        </button>
      </div>
      {/* ── Randomize and Save Outfit Buttons ── */}
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={randomizeAll}
          className="text-sm leading-none rounded-xl bg-gradient-to-br from-blue-300 via-blue-300 to-blue-400 shadow-glass shadow-xl backdrop-blur-sm border border-white/5 py-2 px-4 hover:scale-105"
        >
          Randomize
        </button>
        <button 
          onClick={saveOutfit}
          className="text-sm leading-none rounded-xl bg-gradient-to-br from-[#daffa0] via-[#9fe11d] to-[#daffa0] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 py-2 px-4 hover:scale-105">
          Save Outfit
        </button>
      </div>

    </div>
  );
}

export default OutfitGen;
