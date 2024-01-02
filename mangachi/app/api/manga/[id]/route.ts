import { NextResponse, NextRequest } from "next/server";

export function GET(req: NextRequest) {
  return NextResponse.json([
    {
      mangaName: "",
      author: "",
      backgroundImage: "",
      coverImage: "",
      tags: [],
      publication: {
        data: "",
        status: "",
      },
      likes: 0,
      review: 0,
      follow: 0,
      description: "",
      chapter: [
        {
          chapterName: "",
          chapterPublishedDate: "",
          chapterNumber: 0,
          chapterId: "",
        },
      ],
    },
  ]);
}
