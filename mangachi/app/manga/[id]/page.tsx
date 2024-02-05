"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { MangaType, Chapter } from "@/lib/types";
import { useRouter } from "next/navigation";
import { MangaPageSkeleton } from "@/components/Skelton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { HeartIcon, UsersIcon } from "@/lib/Icons";
function Page({ params }: { params: { id: string } }) {
  const { user } = useUser();
  const router = useRouter();
  const [manga, setManga] = useState<MangaType>();
  const [somethingWentWrong, setSomethingWentFrong] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/manga/${params.id}`);
      const data = await res.json();
      if (data.status !== "success") {
        setSomethingWentFrong(true);

        return;
      }
      setManga(data.data);
      setIsLoading(false);
    })();
  }, [manga, params]);
  useEffect(() => {
    (async () => {
      let currentUserId = await user?.id;

      if (currentUserId && manga) {
        for (let id of manga?.views.viewedBy) {
          if (id === currentUserId) {
            return;
          }
        }
        await fetch(`/api/manga/${params.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            views: {
              count: manga?.views.count + 1,
              viewedBy: [...manga?.views.viewedBy, currentUserId],
            },
          }),
        });
      }
    })();
  }, [user, manga, params]);

  if (somethingWentWrong) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Something went wrong</h1>
        <Button className="mt-4" onClick={() => (window.location.href = "/")}>
          Go back
        </Button>
      </div>
    );
  }
  if (isLoading) {
    return <MangaPageSkeleton />;
  }

  const mangaTags = manga?.tags.split("#").filter((tag: string) => {
    tag = tag.trim();
    if (tag.length > 1) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div className="border-t-2 border-primary">
      <div className="bg-white text-[#1a1a1a]  ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="hidden sm:block my-4"></div>
          <div className="flex items-center space-x-4 my-4 sm:hidden">
            <Link className="text-gray-600 hover:text-[#1a1a1a]" href="#">
              Home
            </Link>
            <span className="text-gray-600">›</span>
            <Link className="text-gray-600 hover:text-[#1a1a1a]" href="#">
              Manga
            </Link>
            <span className="text-gray-600">›</span>
            <Link className="text-gray-600 hover:text-[#1a1a1a]" href="#">
              {capitalizeWords(manga?.mangaName as string)}
            </Link>
          </div>
          <div className="flex w-full space-x-4 ">
            <div className="w-2/5 md:w-1/4">
              <div className="flex  items-center justify-center">
                <img
                  alt={`${manga?.mangaName} cover image`}
                  className="rounded-lg"
                  height="360"
                  src={`https://cloud.appwrite.io/v1/storage/buckets/65ab31d194c87473caab/files/${manga?.coverImage}/view?project=65ab3113d00c39e45407&mode=admin`}
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
                {capitalizeWords(manga?.mangaName as string)}
              </h2>
              <div className="flex">
                <p className="text-base sm:text-xl  font-sans font-semibold">
                  {capitalizeWords(manga?.author as string)}
                </p>
              </div>
              <div className="flex flex-col space-y-3 justify-start  my-4">
                <div className="flex items-center space-x-6">
                  <Badge variant="secondary">{`CH: ${manga?.chapters.length}`}</Badge>
                  <Badge variant="secondary">
                    {getFormatedDate({ date: manga?.createdAt as string })}
                  </Badge>
                  <Badge variant="secondary" className="hidden sm:block">
                    {manga?.status}
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
                    return (
                      <Badge variant="outline" key={tag}>{`#${tag}`}</Badge>
                    );
                  })}
                  <ScrollBar orientation="horizontal" />
                </div>
              </ScrollArea>
              <p className="text-gray-600 hidden md:block">
                {manga?.description}
              </p>
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
            <div className="m-2 md:hidden text-xs">{manga?.description}</div>
          </div>
        </div>
      </div>
      <div className="my-5"></div>
      <ScrollArea>
        <div className="flex flex-col space-y-6  px-4 lg:px-8 h-96">
          {manga?.chapters.map((chapter: Chapter) => (
            <div
              className="flex items-center space-x-8 cursor-pointer"
              key={chapter._id}
              onClick={() =>
                router.push(`${manga?._id}/chapter/${chapter._id}`)
              }
            >
              <img
                alt={chapter.chapterName}
                className="h-[100px] w-[100px] object-cover"
                height="100"
                src={`https://cloud.appwrite.io/v1/storage/buckets/65ab31d194c87473caab/files/${chapter.chapterImages[0]}/view?project=65ab3113d00c39e45407&mode=admin`}
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <div className="flex flex-col justify-start items-start">
                <span className="text-lg font-mono text-[#E11D48]">{`#0${chapter.chapterNumber}`}</span>
                <h2 className=" font-semibold font-sans">{`Chapter ${chapter.chapterNumber}: ${chapter.chapterName}`}</h2>
                <span className="text-xs text-gray-500 font-mono ">{`${chapter.chapterPublishedDate}`}</span>
              </div>
            </div>
          ))}
          <ScrollBar orientation="vertical" />
        </div>
      </ScrollArea>
      <div className="my-10"></div>
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

export default Page;
