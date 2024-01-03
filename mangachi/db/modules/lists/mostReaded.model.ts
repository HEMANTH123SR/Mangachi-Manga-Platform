import mongoose from "mongoose";

const MostReadedMangaSchema = new mongoose.Schema({
  manga: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Manga",
  },
});

export const MostReadedManga = mongoose.model("MostReadedManga", MostReadedMangaSchema);