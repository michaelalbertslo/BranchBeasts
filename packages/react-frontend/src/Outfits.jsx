import React, { useState, useEffect } from "react";
import View from "./View";
import { API_BASE_URL } from "./azure";

function Outfit({ addAuthHeader }) {
  const [outfits, setOutfits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const openView = (item) => setSelectedItem(item);
  const closeView = () => setSelectedItem(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/outfits`, {
      method: "GET",
      headers: addAuthHeader()
    })
      .then((res) => {
        if (!res.ok)
          throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setOutfits(data.outfits);
        console.log("Fetched outfits data:", data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <p className="text-center py-10 text-xl font-medium">
        Loading...
      </p>
    );
  if (error)
    return (
      <p className="text-center py-10 text-red-500 font-medium">
        Error: {error}
      </p>
    );

  return (
    <div className="justify-center container mx-auto px-32 py-8 rounded-3xl bg-gradient-to-b from-[#C0F0E8] via-transparent to-[#C0F0E8] shadow-glass shadow-2xl backdrop-blur-sm border border-white/50 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {outfits.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-lg shadow-md p-4 space-y-2 cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => openView(item)}>
            <div className="grid grid-cols-1 gap-2">
              {item.hat && (
                <img
                  src={item.hat.image}
                  alt="hat"
                  className="w-full h-auto object-cover rounded"
                />
              )}
              {item.top && (
                <img
                  src={item.top.image}
                  alt="shirt"
                  className="w-full h-auto object-cover rounded"
                />
              )}
              {item.bottom && (
                <img
                  src={item.bottom.image}
                  alt="pants"
                  className="w-full h-auto object-cover rounded"
                />
              )}
              {item.shoes && (
                <img
                  src={item.shoes.image}
                  alt="shoes"
                  className="w-full h-auto object-cover rounded"
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <View
          isOpen={true}
          onClose={closeView}
          item={selectedItem}
        />
      )}
    </div>
  );
}

export default Outfit;
