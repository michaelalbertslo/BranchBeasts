import mongoose from "mongoose";

const ClosetUserSchema = new mongoose.Schema(
  {
    // name: {
    //   firstName: { type: String, required: true, trim: true },
    //   lastName: { type: String, required: true, trim: true },
    // },
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    passwordToken: {
      type: String,
      required: true,
    }
  },
  { collection: "users" }
);

const User = mongoose.model(
  "User",
  ClosetUserSchema
)

export default User;