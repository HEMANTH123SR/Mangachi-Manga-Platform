import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userBio: {
    type: String,
    max: 300,
  },
  userId: {
    type: String,
    required: true,
    unique: true,
  },
});

export const User = mongoose.model("User", UserSchema);
