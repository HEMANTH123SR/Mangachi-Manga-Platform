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
    tags: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Ongoing", "Completed", "Cancelled"],
      default: "Ongoing",
    },
    genre: {
      type: String,
      enum: [
        "Shonen",
        "Shojo",
        "Seinen",
        "Josei",
        "Kodomomuke",
        "Isekai",
        "Harem",
        "Mecha",
        "Slice of Life",
        "Fantasy",
        "Science Fiction",
        "Horror",
        "Mystery",
        "Sports",
        "Historical",
        "Romance",
        "Comedy",
        "Drama",
        "Adventure",
        "Supernatural",
        "Psychological",
        "Thriller",
        "Ecchi",
        "Action",
        "School Life",
        "Tragedy",
        "Others",
      ],

      default: "Others",
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
        chapterName: { type: String, required: true },
        chapterPublishedDate: { type: String, required: true },
        chapterImages: [{ type: String }],
        chapterNumber: { type: Number, required: true },
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    views: {
      type: Number,
      default: 0,
    },
  },

  { timestamps: true }
);

export const Manga =
  mongoose.models.Manga || mongoose.model("Manga", MangaSchema);
