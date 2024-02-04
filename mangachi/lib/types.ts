export type Chapter = {
  chapterName: string;
  chapterImages: string[];
  chapterPublishedDate: string;
  chapterNumber: number;
  _id?: string;
};

export type UserType = {
  userName: String;
  userEmail: String;
  userBio: String;
  userId: String;
  UserProfileImage: String;
};

export interface MangaType {
  likes: {
    likedBy: string[];
    likeCount: number;
  };
  dislikes: {
    dislikedBy: string[];
    dislikeCount: number;
  };
  _id: string;
  mangaName: string;
  author: string;
  backgroundImage: string;
  coverImage: string;
  tags: string;
  status: "Ongoing" | "Completed" | "Cancelled";
  description: string;
  views: {
    count: number;
    viewedBy: string[];
  };
  rating: {
    rating: number;
    ratingBy: string[];
  };
  reviews: {
    review: number;
    reviewBy: string;
  }[];
  comments: {
    comment: string;
    commentBy: string;
    createdAt: Date;
  }[];
  chapters: Chapter[];
  createdAt: string;
  updatedAt: string;
  createdBy: UserType;
  __v: number;
}
