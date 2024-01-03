import mongoose from "mongoose";

const RecentlyAddedMangaSchema = new mongoose.Schema({
  manga: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Manga",
  },
});

export const RecentlyAddedManga = mongoose.model(
  "RecentlyAddedManga",
  RecentlyAddedMangaSchema
);
