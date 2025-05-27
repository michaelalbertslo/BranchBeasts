import mongoose from "mongoose";

const ClosetItemSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
      trim: true
    },
    item_name: {
      type: String,
      required: true,
      trim: true,
      unique: false
    },
    item_id: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    type: {
      type: String,
      required: true,
      trim: true
    },
    color: {
      type: String,
      required: true,
      trim: true
    },
    size: {
      type: String,
      required: true,
      trim: true,
      enum: ["XS", "S", "M", "L", "XL", "XXL"]
    },
    favorited: {
      type: Boolean,
      default: false
    },
    image_url: {
      type: String,
      required: false,
      trim: true,
      validate: {
        validator: function (v) {
          return /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/.test(
            v
          );
        },
        message: "Invalid image URL format."
      }
    },
    description: {
      type: String,
      trim: true,
      required: false
    }
  },
  { collection: "closet_items" }
);

const ClosetItem = mongoose.model(
  "ClosetItem",
  ClosetItemSchema
);

export default ClosetItem;
