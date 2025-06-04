import React, { useState } from "react";
import { API_BASE_URL } from "./azure";


function Upload() {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("black");
  const [type, setType] = useState("shirt");
  const [size, setSize] = useState("M");
  const [isFavorite, setIsFavorite] = useState(false);
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const payload = {
      itemName,
      description,
      color,
      type,
      size,
      isFavorite,
      photo
    };
    try {
      const res = await fetch(`${API_BASE_URL}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const err = await res.json();
        alert(`Error: ${err.error || res.status}`);
      } else {
        const saved = await res.json();
        console.log("Saved item:", saved);
        alert("Item created successfully!");
        setItemName("");
        setDescription("");
        setColor("black");
        setType("shirt");
        setSize("M");
        setIsFavorite(false);
        setPhoto("");
      }
    } catch (err) {
      console.error(err);
      alert("Network error - please try again");
    } finally {
      setLoading(false);
    }
  }

  function uploadImage(fileInput) {
    const firstFile = fileInput.files[0];
    if (!firstFile) return;

    const reader = new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onload = () => resolve(fr.result);
      fr.onerror = (err) => reject(err);
      fr.readAsArrayBuffer(firstFile);
    });

    console.log("Uploading file:", firstFile);

    reader
      .then((buffer) => {
        const { name, size, type } = firstFile;
        const url = new URL("/images", API_BASE_URL);
        url.searchParams.set("filename", name);

        return fetch(url.toString(), {
          method: "POST",
          headers: {
            "Content-Type": type,
            "Content-Length": size.toString()
          },
          body: buffer
        });
      })
      .then((res) => {
        if (res.status === 201) return res.json();
        throw new Error(`Upload failed: ${res.status}`);
      })
      .then((json) => {
        setPhoto(json.url);
      })
      .catch((err) => {
        console.error("Error uploading image:", err);
        alert("Image upload failed");
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl bg-gradient-to-b from-[#C0F0E8] via-transparent to-[#C0F0E8] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 p-3">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Upload Closet Item
        </h2>

        <div className="mb-4">
          <label
            htmlFor="itemname"
            className="block text-gray-700 font-medium mb-1">
            Item Name
          </label>
          <input
            id="itemname"
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="w-full bg-gradient-to-br from-[#daffa0] via-transparent to-[#daffa0] shadow-glass shadow-2xl backdrop-blur-sm border border-white/50 rounded px-3 py-2 focus:outline-none focus:ring"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-medium mb-1">
            Description
          </label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-gradient-to-br from-[#daffa0] via-transparent to-[#daffa0] shadow-glass shadow-2xl backdrop-blur-sm border border-white/50 rounded px-3 py-2 focus:outline-none focus:ring"
          />
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label 
              htmlFor="color"
              className="block text-gray-700 font-medium mb-1">
              Color
            </label>
            <select
              id="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring">
              {[
                "red",
                "orange",
                "yellow",
                "green",
                "blue",
                "indigo",
                "violet",
                "black",
                "white",
                "grey"
              ].map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label 
              htmlFor="type"
              className="block text-gray-700 font-medium mb-1">
              Type
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring">
              {[
                "hat",
                "jacket",
                "shirt",
                "pants",
                "socks",
                "shoes"
              ].map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label 
              htmlFor="size"
              className="block text-gray-700 font-medium mb-1">
              Size
            </label>
            <select
              id="size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring">
              {["XS", "S", "M", "L", "XL"].map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center mt-6">
            <input
              id="favorite"
              type="checkbox"
              checked={isFavorite}
              onChange={(e) => setIsFavorite(e.target.checked)}
              className="mr-2"
            />
            <label
              htmlFor="favorite"
              className="text-gray-700 font-medium">
              Favorite
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label 
            htmlFor="upload"
            className="block text-gray-700 font-medium mb-1">
            Upload Photo
          </label>
          <input
            id="upload"
            type="file"
            accept="image/*"
            onChange={(ev) => uploadImage(ev.target)}
            className="bg-gradient-to-br from-[#daffa0] via-[#9fe11d] to-[#daffa0] shadow-glass shadow-2xl backdrop-blur-sm border border-white/50 rounded focus:outline-none focus:ring"
          />
          {photo && (
            <p className="mt-2 text-green-600 text-sm">
              Image uploaded
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-br from-blue-300 via-blue-300 to-blue-400 shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 py-1 px-4 transition">
          {loading ? "Submitting…" : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Upload;
