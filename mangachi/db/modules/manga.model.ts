import mongoose from "mongoose";
const MangaSchema = new mongoose.Schema(
  {
    mangaName: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: String,
      required: true,
    },
    backgroundImage: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    tags: [
      {
        tag: {
          type: String,
          enum: [
            "Action",
            "Adventure",
            "Fantasy",
            "Romance",
            "Slice of Life",
            "Comedy",
            "Drama",
            "Mystery",
            "Horror",
            "Supernatural",
            "Science Fiction",
            "School Life",
            "Historical",
            "Isekai",
            "Shounen",
            "Shoujo",
            "Seinen",
            "Josei",
            "Psychological",
            "Thriller",
            "Sports",
            "Martial Arts",
            "Superpower",
            "Space",
            "Cyberpunk",
            "Harem",
            "Ecchi",
            "Gender Bender",
            "Mecha",
            "Post-Apocalyptic",
            "Music",
            "Magic",
            "Vampire",
            "Demons",
            "Monsters",
            "Detective",
            "Historical",
            "Military",
            "Game",
            "Illuminati",
          ],
        },
      },
    ],
    status: {
      type: String,
      enum: ["Ongoing", "Completed", "Cancelled"],
      default: "Ongoing",
    },

    likes: {
      likedBy: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      likeCount: {
        type: Number,
        default: 0,
      },
    },
    dislikes: {
      dislikedBy: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      dislikeCount: {
        type: Number,
        default: 0,
      },
    },
    reviews: [
      {
        review: {
          type: Number,
          enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        },
        reviewBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
    comments: [
      {
        comment: {
          type: String,
        },
        commentBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    description: {
      type: String,
      required: true,
    },
    chapters: [
      {
        chapterName: { type: String, required: true, unique: true },
        chapterPublishedDate: { type: Date, required: true },
        chapterImage: { type: String, required: true },
        chapterNumber: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);

export const Manga = mongoose.model("Manga", MangaSchema);
