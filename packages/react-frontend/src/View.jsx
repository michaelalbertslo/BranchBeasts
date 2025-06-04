import React from "react";
import { API_BASE_URL } from "./azure";

function View({ isOpen, onClose, item, onDeleted, addAuthHeader }) {
  if (!item) return null;


  const handleDelete = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/items/${item._id}`, {
        method: "DELETE",
        header: addAuthHeader(),
      });

      if (res.status === 204) {
        // tell parent that deletion succeeded
        onDeleted(item._id);
        onClose();
      } else if (res.status === 404) {
        console.warn("Item not found");
      } else {
        const text = await res.text();
        console.error("Delete failed:", text);
      }
    } catch (err) {
      console.error("Server error on delete:", err);
    }
  };

  return (
    <div
      class={`absolute top-0 left-0 container rounded-3xl bg-gradient-to-b from-transparent via-[#daffa0] to-transparent shadow-glass shadow-2xl backdrop-blur-sm border border-white/50 min-h-screen flex flex-col justify-center items-center ${isOpen ? "" : "hidden"}`}>
      <div className="w-full max-w-md aspect-square mb-6">
        <img
          src={item.image_url}
          alt={item.type || "clothing item"}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="flex justify-center gap-3">
        <button className="rounded-xl py-2 px-10 bg-gradient-to-br from-blue-300 via-blue-300 to-blue-400 shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 hover:scale-105">
          Edit
        </button>
        <button
          className="rounded-xl py-2 px-10 bg-gradient-to-br from-[#F5A623] via-[#F55D23] to-[#F5A623] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 hover:scale-105"
          onClick={handleDelete}>
          Delete
        </button>
        <button
          className="rounded-xl py-2 px-10 bg-gradient-to-br from-[#daffa0] via-[#9fe11d] to-[#daffa0] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 hover:scale-105"
          onClick={onClose}>
          Save
        </button>
      </div>
    </div>
  );
}

export default View;
