import React from "react";

function View({ isOpen, onClose, item, onDeleted, addAuthHeader }) {
  if (!item) return null;


  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:8000/items/${item._id}`, {
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
      class={`w-full h-full absolute top-0 px-25 py-50 backdrop-filter backdrop-brightness-75 backdrop-blur-md ${isOpen ? "" : "hidden"}`}>
      <div class="flex box-border w-full h-full border-4 p-4 bg-gray-500">
        <strong>Item</strong>
      </div>
      <div class="flex justify-center gap-3 py-5">
        <button class="rounded-full py-2 px-10 bg-gray-400 hover:bg-gray-600">
          Edit
        </button>
        <button
          class="rounded-full py-2 px-10 bg-gray-400 hover:bg-gray-600"
          onClick={handleDelete}>
          Delete
        </button>
        <button
          class="rounded-full py-2 px-10 bg-gray-400 hover:bg-gray-600"
          onClick={onClose}>
          Save
        </button>
      </div>
    </div>
  );
}

export default View;
