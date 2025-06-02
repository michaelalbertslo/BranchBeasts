import React, { useState, useEffect } from "react";
import View from "./View";
import { API_BASE_URL } from "./azure";

function Closet({ addAuthHeader }) {
  const [closet, setCloset] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const openView = (item) => setSelectedItem(item);
  const closeView = () => setSelectedItem(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/items`, {
      method: "GET",
      headers: addAuthHeader()
    })
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setCloset(data.items_list))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [addAuthHeader]);

  // called by View when DELETE succeeds
  const handleDeleted = (deletedId) => {
    setCloset((prev) => prev.filter((it) => it._id !== deletedId));
  };

  if (loading)
    return <p className="text-center py-10 text-xl font-medium">Loading...</p>;
  if (error)
    return <p className="text-center py-10 text-red-500 font-medium">Error: {error}</p>;
  if (!closet.length)
    return <p className="text-center py-10 text-xl">No items found.</p>;

  return (
    <div className="container mx-auto px-4 py-8 rounded-3xl bg-gradient-to-b from-[#C0F0E8] via-transparent to-[#C0F0E8] shadow-glass shadow-2xl backdrop-blur-sm border border-white/50 min-h-screen">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {closet.map((item) => (
          <div
            key={item._id}
            className="group relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 aspect-square"
            onClick={() => openView(item)}
          >
            <img
              src={item.image_url}
              alt={item.type || "clothing item"}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {selectedItem && (
        <View
          isOpen={true}
          onClose={closeView}
          item={selectedItem}
          onDeleted={handleDeleted}    // ← pass the delete‐callback here
          addAuthHeader={addAuthHeader}
        />
      )}
    </div>
  );
}

export default Closet;
