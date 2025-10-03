import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      minlength: 8,
      select: false, // don't return by default
    },
    googleId: {
      type: String, // for Google users
    },
    picture: {
      type: String, // profile picture from Google
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;


