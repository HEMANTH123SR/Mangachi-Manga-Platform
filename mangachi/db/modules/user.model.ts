import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  userEmail: {
    type: String,
    required: true,
    unique: true,
  },
  userPassword: {
    type: String,
    required: true,
    min: 7,
  },
  userProfilePic: {
    type: String,
    default: "",
  },
  userBio: {
    type: String,
    max: 300,
  },
  followers: [
    {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  following: [
    {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  userMangas: [
    {
      ref: "Manga",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

export const User = mongoose.model("User", UserSchema);
