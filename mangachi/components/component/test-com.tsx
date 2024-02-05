import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { MangaType } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { HeartIcon, UsersIcon } from "@/lib/Icons";
import { FaRegBookmark } from "react-icons/fa6";

export function TestComponent() {
  const manga: MangaType = {
    likes: {
      likedBy: [],
      likeCount: 0,
    },
    dislikes: {
      dislikedBy: [],
      dislikeCount: 0,
    },
    createdBy: {
      userName: "Computer Application",
      userEmail: "applicationcomputer257@gmail.com",
      userBio: "",
      UserProfileImage:
        "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yYlpURUFFZkdKa2lrUlVaVHZxOFl2UVl2R2wifQ",
      userId: "user_2bZTECWQS9Gw98DlxoCqaSmZURg",
    },
    _id: "65b336f0d31e6a11e98f059a",
    mangaName: "One punch man",
    author: "Eiichiro Oda",
    backgroundImage: "65b336ec1a460b924cff",
    coverImage: "65b4d8c0dfb282175da5",
    tags: "#pirate #zoro #luffy #pirateking #sogeking #fishman #luffy",
    status: "Ongoing",
    description:
      "One-Punch Man (Japanese: ワンパンマン, Hepburn: Wanpanman) is a Japanese superhero manga series created by One. It tells the story of Saitama, a superhero who, because he can defeat any opponent with a single punch, grows bored from a lack of challenge. One wrote the original webcomic manga version in early 2009.\nOne-Punch Man (Japanese: ワンパンマン, Hepburn: Wanpanman) is a lenge. One wrote the original webcomic manga version in early 2009.",
    views: { count: 0, viewedBy: [] },
    reviews: [],
    comments: [],
    chapters: [],
    createdAt: "2024-01-26T04:37:04.718Z",
    updatedAt: "2024-02-02T06:02:01.374Z",
    __v: 0,
  };
  const mangaTags = manga?.tags.split("#").filter((tag: string) => {
    tag = tag.trim();
    if (tag.length > 1) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div className="bg-white text-[#1a1a1a]  ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center space-x-4 my-4">
          <Link className="text-gray-600 hover:text-[#1a1a1a]" href="#">
            Home
          </Link>
          <span className="text-gray-600">›</span>
          <Link className="text-gray-600 hover:text-[#1a1a1a]" href="#">
            Manga
          </Link>
          <span className="text-gray-600">›</span>
          <Link className="text-gray-600 hover:text-[#1a1a1a]" href="#">
            {capitalizeWords(manga.mangaName)}
          </Link>
        </div>
        <div className="flex w-full space-x-4 ">
          <div className="w-2/5 md:w-1/4">
            <div className="flex  items-center justify-center">
              <img
                alt={`${manga.mangaName} cover image`}
                className="rounded-lg"
                height="360"
                src={`https://cloud.appwrite.io/v1/storage/buckets/65ab31d194c87473caab/files/${manga.coverImage}/view?project=65ab3113d00c39e45407&mode=admin`}
                style={{
                  aspectRatio: "240/360",
                  objectFit: "cover",
                }}
                width="240"
              />
            </div>
          </div>
          <div className="w-3/5 md:w-3/4 flex flex-col space-y-2 sm:space-y-3">
            <h2 className="text-3xl sm:text-6xl font-bold">
              {capitalizeWords(manga.mangaName)}
            </h2>
            <div className="flex">
              <p className="text-base sm:text-xl  font-sans font-semibold">
                {capitalizeWords(manga.author)}
              </p>
            </div>
            <div className="flex flex-col space-y-3 justify-start  my-4">
              <div className="flex items-center space-x-6">
                <Badge variant="secondary">{`CH: ${manga.chapters.length}`}</Badge>
                <Badge variant="secondary">
                  {getFormatedDate({ date: manga.createdAt })}
                </Badge>
                <Badge variant="secondary" className="hidden sm:block">
                  {manga.status}
                </Badge>
              </div>
              <div className="flex items-center space-x-10 sm:space-x-12 mx-5">
                <div className="flex items-center space-x-1">
                  <UsersIcon className={"text-gray-600 w-5 h-5"} />
                  <span className={"text-lg"}>{`${manga?.views.count}`}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <HeartIcon className={"text-[#E11D48] w-5 h-5"} />
                  <span
                    className={"text-lg"}
                  >{`${manga?.likes.likeCount}`}</span>
                </div>
              </div>
            </div>
            <ScrollArea className="hidden sm:block">
              <div className="flex space-x-2 mb-4">
                {mangaTags?.map((tag) => {
                  return <Badge variant="outline" key={tag}>{`#${tag}`}</Badge>;
                })}
                <ScrollBar orientation="horizontal" />
              </div>
            </ScrollArea>
            <p className="text-gray-600 hidden md:block">{manga.description}</p>
          </div>
        </div>
        <div className="flex flex-col mt-4 space-y-4">
          <ScrollArea className="sm:hidden">
            <div className="flex space-x-2">
              {mangaTags?.map((tag) => {
                return <Badge variant="outline" key={tag}>{`#${tag}`}</Badge>;
              })}
              <ScrollBar orientation="horizontal" />
            </div>
          </ScrollArea>
          <div className="m-2 md:hidden text-xs">{manga.description}</div>
        </div>
      </div>
    </div>
  );
}

const getFormatedDate = ({ date }: { date: string }) => {
  const filter = date.slice(0, 10).split("-");
  let month;
  switch (filter[1]) {
    case "01":
      month = "Jan";
      break;
    case "02":
      month = "Feb";
      break;
    case "03":
      month = "Mar";
      break;
    case "04":
      month = "Apr";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "Jun";
      break;
    case "07":
      month = "Jul";
      break;
    case "08":
      month = "Aug";
      break;
    case "09":
      month = "Sep";
      break;
    case "10":
      month = "Oct";
      break;
    case "11":
      month = "Nov";
      break;
    case "12":
      month = "Dec";
      break;
  }
  return `${month}-${filter[2]}`;
};

function capitalizeWords(inputString: string) {
  return inputString.replace(/\b\w/g, function (match) {
    return match.toUpperCase();
  });
}

//sm:bg-green-500 md:bg-gray-100 lg:bg-blue-500 xl:bg-red-600
