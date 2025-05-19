import React from "react";

function View({ isOpen, onClose }) {
  return (
    <div class={`w-full h-full absolute top-0 px-25 py-50 backdrop-filter backdrop-brightness-75 backdrop-blur-md ${isOpen ? "" : "hidden"}`}>
      <div class="flex box-border w-full h-full border-4 p-4 bg-gray-500">
        <strong>Item</strong>
      </div>
      <div class="flex justify-center gap-3 py-5">
        <button class="rounded-full py-2 px-10 bg-gray-400 hover:bg-gray-600">Edit</button>
        <button class="rounded-full py-2 px-10 bg-gray-400 hover:bg-gray-600" onClick={onClose}>Delete</button>
        <button class="rounded-full py-2 px-10 bg-gray-400 hover:bg-gray-600" onClick={onClose}>Save</button>
      </div>
    </div>
  );
}

export default View;
