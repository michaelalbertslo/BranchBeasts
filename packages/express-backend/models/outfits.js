import mongoose from "mongoose";

const outfitSchema = new mongoose.Schema(
  {
    hat: {
      id: {
        type: String,
        trim: true,
        default: null
      },
      image: {
        type: String,
        trim: true,
        default: null
      }
    },
    jacket: {
      id: {
        type: String,
        trim: true,
        default: null
      },
      image: {
        type: String,
        trim: true,
        default: null
      }
    },
    shirt: {
      id: {
        type: String,
        trim: true,
        default: null
      },
      image: {
        type: String,
        trim: true,
        default: null
      }
    },
    pants: {
      id: {
        type: String,
        trim: true,
        default: null
      },
      image: {
        type: String,
        trim: true,
        default: null
      }
    },
    socks: {
      id: {
        type: String,
        trim: true,
        default: null
      },
      image: {
        type: String,
        trim: true,
        default: null
      }
    },
    shoes: {
      id: {
        type: String,
        trim: true,
        default: null
      },
      image: {
        type: String,
        trim: true,
        default: null
      }
    }
  },
  { collection: "outfits" }
);

const outfit = mongoose.model("outfit", outfitSchema);

export default outfit;
