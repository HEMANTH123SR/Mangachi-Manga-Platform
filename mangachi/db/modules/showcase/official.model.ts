import mongoose from "mongoose";

const OfficalMangaSchema = new mongoose.Schema({
  manga: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Manga",
  },
});

export const OfficalManga = mongoose.model("OfficalManga", OfficalMangaSchema);
