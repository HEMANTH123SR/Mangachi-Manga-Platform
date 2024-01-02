import { NextResponse } from "next/server";
export function GET() {
  return NextResponse.json([
    {
      mangaName: "One Piece",
      author: "Eiichiro Oda",
      backgroundImage: "one_piece_background.jpg",
      coverImage: "one_piece_cover.jpg",
      tags: ["Adventure", "Action", "Fantasy"],
      publication: {
        date: "July 22, 1997",
        status: "Ongoing",
      },
      likes: 0,
      review: 0,
      follow: 0,
      description:
        "Follow the adventures of Monkey D. Luffy and his pirate crew as they search for the legendary treasure known as One Piece.",
      chapter: [
        {
          chapterName: "Chapter 1: Romance Dawn",
          chapterPublishedDate: "July 22, 1997",
          chapterNumber: 1,
          chapterId: "one_piece_chapter_1",
        },
        {
          chapterName: "Chapter 2: Pirate King's Legacy",
          chapterPublishedDate: "July 29, 1997",
          chapterNumber: 2,
          chapterId: "one_piece_chapter_2",
        },
        {
          chapterName: "Chapter 3: The Great Sea Voyage",
          chapterPublishedDate: "August 5, 1997",
          chapterNumber: 3,
          chapterId: "one_piece_chapter_3",
        },
        {
          chapterName: "Chapter 4: Mysterious Island Encounter",
          chapterPublishedDate: "August 12, 1997",
          chapterNumber: 4,
          chapterId: "one_piece_chapter_4",
        },
        {
          chapterName: "Chapter 5: The Crew Assembles",
          chapterPublishedDate: "August 19, 1997",
          chapterNumber: 5,
          chapterId: "one_piece_chapter_5",
        },
        {
          chapterName: "Chapter 6: Grand Line Adventures",
          chapterPublishedDate: "August 26, 1997",
          chapterNumber: 6,
          chapterId: "one_piece_chapter_6",
        },
        {
          chapterName: "Chapter 7: Clash with the Marines",
          chapterPublishedDate: "September 2, 1997",
          chapterNumber: 7,
          chapterId: "one_piece_chapter_7",
        },
        {
          chapterName: "Chapter 8: Skypiea's Secrets",
          chapterPublishedDate: "September 9, 1997",
          chapterNumber: 8,
          chapterId: "one_piece_chapter_8",
        },
        {
          chapterName: "Chapter 9: Ancient Weapons",
          chapterPublishedDate: "September 16, 1997",
          chapterNumber: 9,
          chapterId: "one_piece_chapter_9",
        },
        {
          chapterName: "Chapter 10: The Red Line Revelation",
          chapterPublishedDate: "September 23, 1997",
          chapterNumber: 10,
          chapterId: "one_piece_chapter_10",
        },
      ],
    },
    {
      mangaName: "Naruto",
      author: "Masashi Kishimoto",
      backgroundImage: "naruto_background.jpg",
      coverImage: "naruto_cover.jpg",
      tags: ["Action", "Adventure", "Ninja"],
      publication: {
        date: "September 21, 1999",
        status: "Completed",
      },
      likes: 0,
      review: 0,
      follow: 0,
      description:
        "Follow Naruto Uzumaki, a young ninja with dreams of becoming the strongest ninja and leader of his village, as he embarks on a journey of self-discovery and growth.",
      chapter: [
        {
          chapterName: "Chapter 1: Uzumaki Naruto",
          chapterPublishedDate: "September 21, 1999",
          chapterNumber: 1,
          chapterId: "naruto_chapter_1",
        },
        {
          chapterName: "Chapter 2: The Hidden Leaf Village",
          chapterPublishedDate: "September 28, 1999",
          chapterNumber: 2,
          chapterId: "naruto_chapter_2",
        },
        {
          chapterName: "Chapter 3: Team 7 Assembles",
          chapterPublishedDate: "October 5, 1999",
          chapterNumber: 3,
          chapterId: "naruto_chapter_3",
        },
        {
          chapterName: "Chapter 4: The Land of Waves",
          chapterPublishedDate: "October 12, 1999",
          chapterNumber: 4,
          chapterId: "naruto_chapter_4",
        },
        {
          chapterName: "Chapter 5: Kakashi's Test",
          chapterPublishedDate: "October 19, 1999",
          chapterNumber: 5,
          chapterId: "naruto_chapter_5",
        },
        {
          chapterName: "Chapter 6: The Forest of Death",
          chapterPublishedDate: "October 26, 1999",
          chapterNumber: 6,
          chapterId: "naruto_chapter_6",
        },
        {
          chapterName: "Chapter 7: The Chunin Exam Begins",
          chapterPublishedDate: "November 2, 1999",
          chapterNumber: 7,
          chapterId: "naruto_chapter_7",
        },
        {
          chapterName: "Chapter 8: The Snake and the Toad",
          chapterPublishedDate: "November 9, 1999",
          chapterNumber: 8,
          chapterId: "naruto_chapter_8",
        },
        {
          chapterName: "Chapter 9: Neji vs. Hinata",
          chapterPublishedDate: "November 16, 1999",
          chapterNumber: 9,
          chapterId: "naruto_chapter_9",
        },
        {
          chapterName: "Chapter 10: The Tailed Beast Unleashed",
          chapterPublishedDate: "November 23, 1999",
          chapterNumber: 10,
          chapterId: "naruto_chapter_10",
        },
      ],
    },
    {
      mangaName: "Vinland Saga",
      author: "Makoto Yukimura",
      backgroundImage: "vinland_saga_background.jpg",
      coverImage: "vinland_saga_cover.jpg",
      tags: ["Historical", "Drama", "Action"],
      publication: {
        date: "April 13, 2005",
        status: "Ongoing",
      },
      likes: 0,
      review: 0,
      follow: 0,
      description:
        "Set in historical Viking times, Vinland Saga follows the journey of Thorfinn, a young warrior seeking revenge and discovering the true meaning of honor and purpose.",
      chapter: [
        {
          chapterName: "Chapter 1: Prologue",
          chapterPublishedDate: "April 13, 2005",
          chapterNumber: 1,
          chapterId: "vinland_saga_chapter_1",
        },
        {
          chapterName: "Chapter 2: The Warrior's Path",
          chapterPublishedDate: "April 20, 2005",
          chapterNumber: 2,
          chapterId: "vinland_saga_chapter_2",
        },
        {
          chapterName: "Chapter 3: Jomsviking Brotherhood",
          chapterPublishedDate: "April 27, 2005",
          chapterNumber: 3,
          chapterId: "vinland_saga_chapter_3",
        },
        {
          chapterName: "Chapter 4: The Merciless",
          chapterPublishedDate: "May 4, 2005",
          chapterNumber: 4,
          chapterId: "vinland_saga_chapter_4",
        },
        {
          chapterName: "Chapter 5: Thorkell the Tall",
          chapterPublishedDate: "May 11, 2005",
          chapterNumber: 5,
          chapterId: "vinland_saga_chapter_5",
        },
        {
          chapterName: "Chapter 6: Battle of London Bridge",
          chapterPublishedDate: "May 18, 2005",
          chapterNumber: 6,
          chapterId: "vinland_saga_chapter_6",
        },
        {
          chapterName: "Chapter 7: King Sweyn's Vision",
          chapterPublishedDate: "May 25, 2005",
          chapterNumber: 7,
          chapterId: "vinland_saga_chapter_7",
        },
        {
          chapterName: "Chapter 8: The Sea King's Fleet",
          chapterPublishedDate: "June 1, 2005",
          chapterNumber: 8,
          chapterId: "vinland_saga_chapter_8",
        },
        {
          chapterName: "Chapter 9: The Mercian Army",
          chapterPublishedDate: "June 8, 2005",
          chapterNumber: 9,
          chapterId: "vinland_saga_chapter_9",
        },
        {
          chapterName: "Chapter 10: Beyond the Sea",
          chapterPublishedDate: "June 15, 2005",
          chapterNumber: 10,
          chapterId: "vinland_saga_chapter_10",
        },
      ],
    },
  ]);
}
