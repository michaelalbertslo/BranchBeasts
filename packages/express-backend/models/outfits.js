import mongoose from "mongoose";

const outfitSchema = new mongoose.Schema(
  {
    hat: {
        id: 
            {
                type: String,
                required: true,
                trim: true,
                default: null
            },
        image:
            {
                type: String,
                required: true,
                trim: true,
                default: null
            }

        },
    top: {
        id: 
            {
                type: String,
                required: true,
                trim: true,
                default: null
            },
        image:
            {
                type: String,
                required: true,
                trim: true,
                default: null
            }

    },
    bottom: {
        id: 
            {
                type: String,
                required: true,
                trim: true,
                default: null
            },
        image:
            {
                type: String,
                required: true,
                trim: true,
                default: null
            }

    },
    shoes: {
        id: 
            {
                type: String,
                required: true,
                trim: true,
                default: null
            },
        image:
            {
                type: String,
                required: true,
                trim: true,
                default: null
            }
    }
  },
  { collection: "outfits" }
);

const outfit = mongoose.model(
  "outfit",
  outfitSchema
)

export default outfit;