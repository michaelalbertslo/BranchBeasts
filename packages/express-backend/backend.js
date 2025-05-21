// backend.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import clothingItemService from "./services/clothingItem-service.js";
import UserService from "./services/User-service.js";


// dotenv.config()

const {
  getClothingItems,
  getClothingItemById,
  addClothingItem,
  deleteClothingItemById,
  toggleFavoriteStatus
} = clothingItemService;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, "mongo.env") });
// dotenv.config( { path: path.join(__dirname, ".env" )})


const { MONGO_CONNECTION_STRING } = process.env;

mongoose.set("debug", true);
mongoose
  .connect(MONGO_CONNECTION_STRING + "clothes") // connect to Db "closet"
  .catch((error) => console.log(error));

const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());

/** Get one item by its Mongo _id */
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
  const filter = {};
  if (req.query.user_id) filter.user_id = req.query.user_id;

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
app.post("/items", (req, res) => {
  addClothingItem(req.body)
    .then((saved) => {
      res.status(201).json(saved);
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({ error: err.message });
    });
});

/** Delete an item by its Mongo _id */
app.delete("/items/:id", (req, res) => {
  deleteClothingItemById(req.params.id)
    .then((deleted) => {
      if (!deleted)
        return res.status(404).send("Item not found");
      res.status(204).end();
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    });
});



app.get("/users", (req, res) => {
  const name = req.query.name;
  const username = req.query.username;
  let query;
  if (name != undefined && username === undefined) {
    query = UserService.getUserByName(name);
  } 
  else if (username != undefined && name === undefined) {
    query = UserService.getUserByUserName(username);
  }
  else if (username != undefined && name != undefined) {
    query = UserService.getUserByNameAndUserName(name, username);
  }
  else {
    query = UserService.getUsers();
  }
  query.then(users => res.send({ users_list: users }))
  .catch(err => res.status(500).send(err.message));
});



app.post("/users", (req, res) => {
  const userToAdd = req.body;
  UserService.addUser(userToAdd)
  .then(savedUser => res.status(201).send(savedUser))
  .catch(err => res.status(400).send(err.message))
});


app.listen(port, () => {
  console.log(
    `Clothing API listening at http://localhost:${port}`
  );
});
