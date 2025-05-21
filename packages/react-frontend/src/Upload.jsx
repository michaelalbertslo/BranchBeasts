import React, { useState } from "react";

const SERVER_ORIGIN = "http://localhost:3000";

function Upload() {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("black");
  const [type, setType] = useState("shirt");
  const [size, setSize] = useState("M");
  const [isFavorite, setIsFavorite] = useState(false);
  const [photo, setPhoto] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      itemName,
      description,
      color,
      type,
      size,
      isFavorite,
      photo
    };
    console.log("Submitting:", data);
    //send to backend here
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
        const query = new URLSearchParams({ filename: name });
        const url = new URL("/images", SERVER_ORIGIN);
        url.search = query.toString();

        return fetch(url, {
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
        else throw res.status;
      })
      .then((json) => {
        if (json) setPhoto(json.url);
        else throw "No JSON response";
      })
      .catch((err) => console.log("Error:", err));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="itemname">Item Name:</label>
        <input
          type="text"
          name="itemname"
          id="itemname"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />

        <label htmlFor="description">Item Description:</label>
        <input
          type="text"
          name="itemdescription"
          id="itemdescription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>
          Color:
          <select
            value={color}
            onChange={(e) => setColor(e.target.value)}>
            <option value="red">red</option>
            <option value="orange">orange</option>
            <option value="yellow">yellow</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
            <option value="indigo">indigo</option>
            <option value="violet">violet</option>
            <option value="black">black</option>
            <option value="white">white</option>
            <option value="grey">grey</option>
          </select>
        </label>

        <label>
          Type:
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}>
            <option value="hat">hat</option>
            <option value="jacket">jacket</option>
            <option value="shirt">shirt</option>
            <option value="pants">pants</option>
            <option value="socks">socks</option>
            <option value="shoes">shoes</option>
          </select>
        </label>

        <label>
          Size:
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </label>

        <label>
          <h3>File to Upload</h3>
          <input
            type="file"
            name="photo"
            onChange={(ev) => uploadImage(ev.target)}
          />
        </label>

        <label htmlFor="favorite">
          <input
            type="checkbox"
            id="favorite"
            name="favorite"
            checked={isFavorite}
            onChange={(e) => setIsFavorite(e.target.checked)}
          />
          Favorite
        </label>

        <br />
        <input
          type="button"
          value="Submit"
          onClick={handleSubmit}
        />
      </form>
    </>
  );
}

export default Upload;
