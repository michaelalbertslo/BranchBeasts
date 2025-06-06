// backend.js
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import clothingItemService from "./services/clothingItem-service.js";
import {
  registerUser,
  loginUser,
  authenticateUser
} from "./auth.js";
import UserService from "./services/User-service.js";
import { uploadImage } from "./services/azure-blob.js";
import outfitService from "./services/outfits-service.js";
import User from "./models/UserInfo.js";

const {
  getClothingItems,
  getClothingItemById,
  addClothingItem,
  deleteClothingItemById,
  toggleFavoriteStatus
} = clothingItemService;

const {
  getUsers,
  getUserById,
  getUserByName,
  getUserByUserName,
  getUserByNameAndUserName,
  addUser,
  delUser
} = UserService;

const {
  getOutfitItems,
  getOutfitItemById,
  addOutfitItem,
  deleteOutfitItemById
  // updateOutfitItem,
} = outfitService;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, "mongo.env") });

const { MONGO_CONNECTION_STRING } = process.env;

mongoose.set("debug", true);
mongoose
  .connect(MONGO_CONNECTION_STRING + "clothes") // connect to Db "clothes"
  .catch((error) => console.log(error));

const app = express();
const port = 8000;
app.use(cors());

app.use(express.json());
app.post("/signup", registerUser);
app.post("/login", loginUser);

//image uploading to Azure endpoint
app.post(
  "/images",
  express.raw({ type: "*/*", limit: "10mb" }),
  async (req, res) => {
    try {
      const filename = req.query.filename;
      if (!filename) {
        return res
          .status(400)
          .json({ error: "Missing ?filename query param" });
      }
      const mimeType = req.headers["content-type"];
      const buffer = req.body; // Buffer of file bytes

      const url = await uploadImage(buffer, filename, mimeType);
      res.status(201).json({ url });
    } catch (err) {
      console.error("Upload failed:", err);
      res.status(500).json({ error: err.message });
    }
  }
);

// fetch one item by ID
app.get("/items/:id", (req, res) => {
  getClothingItemById(req.params.id)
    .then((item) => {
      if (!item) {
        return res.status(404).send("Resource not found.");
      }
      res.json(item);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    });
});

/** List items (optionally filter by user_id) */
app.get("/items", (req, res) => {
  // /items shows clothing_items, and additional endpoint for item type
  const filter = {};
  if (req.query.user_id) filter.user_id = req.query.user_id;
  if (req.query.type) filter.type = req.query.type;

  getClothingItems(filter)
    .then((itemsList) => {
      res.json({ items_list: itemsList });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    });
});

/** Create a new clothing item */
app.post("/items", authenticateUser, async (req, res) => {
  try {
    //new user tracking part
    const username = req.user.username;
    const users = await getUserByUserName(username);
    if (!Array.isArray(users) || users.length === 0) {
      return res.status(401).send("User not found");
    }
    const user = users[0];
    const userId = user._id.toString();

    const {
      itemName,
      description,
      color,
      type,
      size,
      isFavorite,
      photo
    } = req.body;

    const newItem = {
      user_id: userId,
      item_name: itemName,
      item_id: uuidv4(), //randomly generate with some params
      color,
      type,
      size,
      favorited: isFavorite,
      image_url: photo,
      description
    };
    const saved = await addClothingItem(newItem);
    res.status(201).json(saved);
  } catch (err) {
    console.error("Error creating item:", err);
    res.status(400).json({ error: err.message });
  }
});

/** Delete an item by its Mongo _id */
app.delete("/items/:id", authenticateUser, async (req, res) => {
  try {
    const itemId = req.params.id;
    const item = await getClothingItemById(itemId);
    if (!item) {
      // No item with that _id
      return res.status(404).send("Item not found");
    }
    const username = req.user.username;
    const userDoc = await User.findOne({ username });
    if (!userDoc) {
      return res
        .status(401)
        .send("Unauthorized: user not found");
    }
    if (item.user_id.toString() !== userDoc._id.toString()) {
      return res
        .status(403)
        .send("Forbidden: you do not own this item");
    }
    const deleted = await deleteClothingItemById(itemId);
    if (!deleted) {
      return res.status(404).send("Item not found");
    }
    return res.status(204).end();
  } catch {
    console.error("Error deleting item:", err);
    return res.status(500).json({ error: "Server error" });
  }
});

app.get("/users", (req, res) => {
  const name = req.query.name;
  const username = req.query.username;
  let query;
  if (name != undefined && username === undefined) {
    query = getUserByName(name);
  } else if (username != undefined && name === undefined) {
    query = getUserByUserName(username);
  } else if (username != undefined && name != undefined) {
    query = getUserByNameAndUserName(name, username);
  } else {
    query = getUsers();
  }
  query
    .then((users) => res.send({ users_list: users }))
    .catch((err) => res.status(500).send(err.message));
});

app.post("/users", (req, res) => {
  const userToAdd = req.body;
  addUser(userToAdd)
    .then((savedUser) => res.status(201).send(savedUser))
    .catch((err) => res.status(400).send(err.message));
});

app.delete("/users/:id", (req, res) => {
  const id = req.params["id"];
  delUser(id)
    .then((deleteUser) => {
      if (deleteUser === undefined)
        return res.status(404).send();
      else return res.status(204).send();
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err.message);
    });
});

app.get("/outfits", (req, res) => {
  getOutfitItems()
    .then((outfitItems) => res.send({ outfits: outfitItems }))
    .catch((err) => res.status(500).send(err.message));
});

app.get("/outfits/:id", (req, res) => {
  const id = req.params["id"];
  getOutfitItemById(id)
    .then((result) => {
      if (result === undefined) {
        res.status(404).send("Resource not found.");
      } else {
        res.send(result);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err.message);
    });
});

app.post("/outfits", (req, res) => {
  const outfitToAdd = req.body;
  addOutfitItem(outfitToAdd)
    .then((savedFit) => res.status(201).send(savedFit))
    .catch((err) => res.status(400).send(err.message));
});

app.delete("/outfits/:id", (req, res) => {
  const id = req.params["id"];
  deleteOutfitItemById(id)
    .then((deleteOutfit) => {
      if (deleteOutfit === undefined)
        return res.status(404).send();
      else return res.status(204).send();
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err.message);
    });
});

app.listen(process.env.PORT || port, () => {
  console.log("REST API is listening.");
});
