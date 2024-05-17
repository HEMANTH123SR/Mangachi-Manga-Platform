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

    likes: {
      likedBy: [String],
      likeCount: {
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
    thanksReceives: [
      {
        userId: { type: String },
        amount: { type: Number },
      },
    ],
    savedBy: [{ type: String }],
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
        default: "",
      },
      UserProfileImage: {
        type: String,
        required: true,
      },
      userId: {
        type: String,
        required: true,
      },
    },
    views: {
      count: {
        type: Number,
        default: 0,
      },
      viewedBy: [
        {
          type: String,
          unique: true,
        },
      ],
    },
    isAdmin: { type: Boolean, required: true, default: false },
  },

  { timestamps: true }
);

export const Manga =
  mongoose.models.Manga || mongoose.model("Manga", MangaSchema);
//
