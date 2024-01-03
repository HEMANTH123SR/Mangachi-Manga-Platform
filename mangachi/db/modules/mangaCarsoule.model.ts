import mongoose from "mongoose";

const MangaCarsouleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

export const MangaCarsoule = mongoose.model(
  "MangaCarsoule",
  MangaCarsouleSchema
);
