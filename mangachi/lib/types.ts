export enum Genre {
  Shonen = "Shonen",
  Shojo = "Shojo",
  Seinen = "Seinen",
  Josei = "Josei",
  Kodomomuke = "Kodomomuke",
  Isekai = "Isekai",
  Harem = "Harem",
  Mecha = "Mecha",
  SliceOfLife = "Slice of Life",
  Fantasy = "Fantasy",
  ScienceFiction = "Science Fiction",
  Horror = "Horror",
  Mystery = "Mystery",
  Sports = "Sports",
  Historical = "Historical",
  Romance = "Romance",
  Comedy = "Comedy",
  Drama = "Drama",
  Adventure = "Adventure",
  Supernatural = "Supernatural",
  Psychological = "Psychological",
  Thriller = "Thriller",
  Ecchi = "Ecchi",
  Action = "Action",
  SchoolLife = "School Life",
  Tragedy = "Tragedy",
  Others = "Others",
}

enum Genres {
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
}

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
  genre: Genres;
  description: string;
  views: number;
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
