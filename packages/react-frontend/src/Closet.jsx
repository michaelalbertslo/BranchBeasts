import React, { useState, useEffect } from "react";

function Closet() {
  const [closet, setCloset] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/items")
      .then(res => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(data => setCloset(data.items_list))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center py-5">Loading...</p>;
  if (error)   return <p className="text-center py-5 text-red-500">Error: {error}</p>;
  if (!closet.length) return <p className="text-center py-5">No items found.</p>;

  return (
    <div className="flex justify-center py-5">
      {/* 5 columns grid */}
      <div className="grid grid-cols-5 gap-4">
        {closet.map(item => (
          <div
            key={item._id}
            className="flex flex-col bg-gray-200 rounded-lg shadow overflow-hidden w-50 h-50"
          >
            {/* Image area */}
            <img
              src={item.image_url}
              alt={item.type || "clothing item"}
              className="w-full h-full object-cover"
            />
            {/* ID area */}
            <div className="flex-1 flex items-center justify-center bg-gray-100">
              <strong className="text-sm">{item.item_id || item._id}</strong>
              <strong className="text-sm">{item.item_color}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Closet;
