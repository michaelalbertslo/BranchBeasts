import mongoose from "mongoose";
import clothingItemModel from "../models/clothingItem.js";

mongoose.set("debug", true);

// Future DB connection (if needed directly in service)
// mongoose.connect("mongodb://localhost:27017/closet", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).catch((error) => console.log(error));

export function getClothingItems(filter = {}) {
  // filtering: e.g., by user_id, type
  return clothingItemModel.find(filter);
}

function getClothingItemById(_id) {
  return clothingItemModel.findById(_id);
}

function addClothingItem(item) {
  const newItem = new clothingItemModel(item);
  return newItem.save();
}

function deleteClothingItemById(_id) {
  return clothingItemModel.findByIdAndDelete(_id);
}

function toggleFavoriteStatus(_id, favorited) {
  return clothingItemModel.findByIdAndUpdate(
    _id,
    { favorited: favorited },
    { new: true }
  );
}

export default {
  getClothingItems,
  getClothingItemById,
  addClothingItem,
  deleteClothingItemById,
  toggleFavoriteStatus
};
