import mongoose from "mongoose";

const MostLikedSchema = new mongoose.Schema({
  manga: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Manga",
  },
});

export const MostLiked = mongoose.model("MostLiked", MostLikedSchema);
