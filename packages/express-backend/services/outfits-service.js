import mongoose from "mongoose";
import outfitModel from "../models/outfits.js";

mongoose.set("debug", true);

// Future DB connection (if needed directly in service)
// mongoose.connect("mongodb://localhost:27017/closet", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).catch((error) => console.log(error));

export function getOutfitItems(filter = {}) {
  // filtering: e.g., by user_id, type
  return outfitModel.find(filter);
}

function getOutfitItemById(_id) {
  return outfitModel.findById(_id);
}

function addOutfitItem(outfitObj) {
  return outfitModel.create(outfitObj);
}

function deleteOutfitItemById(_id) {
  return outfitModel.findByIdAndDelete(_id);
}

function updateOutfitItem(_id, updatedOutfit) {
    return outfitModel.findByIdAndUpdate(_id, updatedOutfit, { new : true })
}

// function toggleFavoriteStatus(_id, favorited) {
//   return clothingItemModel.findByIdAndUpdate(
//     _id,
//     { favorited: favorited },
//     { new: true }
//   );
// }



export default {
  getOutfitItems,
  getOutfitItemById,
  addOutfitItem,
  deleteOutfitItemById,
  updateOutfitItem,
};