"use client";
import React, { useState, useEffect, use } from "react";
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
              count: manga.views.count + 1,
              viewedBy: [...manga.views.viewedBy, currentUserId],
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
      <div className="bg-white  overflow-hidden">
        <div className="relative">
          <img
            alt={manga?.mangaName}
            className="w-full h-[300px] object-cover"
            height="300"
            src={`https://cloud.appwrite.io/v1/storage/buckets/65ab31d194c87473caab/files/${manga?.backgroundImage}/view?project=65ab3113d00c39e45407&mode=admin`}
            style={{
              aspectRatio: "1829/300",
              objectFit: "cover",
            }}
            width="1829"
          />
          <div className="absolute top-0 left-0 p-5 flex items-start space-x-4">
            <img
              alt={manga?.mangaName}
              className="w-[154px] h-[220px] object-cover"
              height="220"
              src={`https://cloud.appwrite.io/v1/storage/buckets/65ab31d194c87473caab/files/${manga?.coverImage}/view?project=65ab3113d00c39e45407&mode=admin`}
              style={{
                aspectRatio: "154/220",
                objectFit: "cover",
              }}
              width="154"
            />
            <div className="text-white">
              <h1 className="text-6xl font-bold ">{`${manga?.mangaName}`}</h1>
              <p className="text-2xl">ウォンピース</p>
              <p className="text-xl mt-1">{`${manga?.author}`}</p>
            </div>
          </div>
          <div className="hidden lg:absolute top-0 right-0 p-5 ">
            <Button
              className="bg-[#E11D48] hover:bg-[#ce193f] text-white"
              variant="secondary"
            >
              Add To Library
            </Button>
          </div>
        </div>
        <div className="p-5">
          <ScrollArea>
            <div className="flex space-x-2 mb-4">
              {mangaTags?.map((tag) => {
                return <Badge variant="outline" key={tag}>{`#${tag}`}</Badge>;
              })}
              <ScrollBar orientation="horizontal" />
            </div>
          </ScrollArea>

          <div className="flex items-center space-x-2 mb-4">
            <Badge variant="secondary">{`PUBLICATION: ${manga?.createdAt.substring(
              0,
              10
            )}, ${manga?.status.toUpperCase()}`}</Badge>

            <div className="flex items-center space-x-1">
              <UsersIcon className={"text-gray-600 w-5 h-5"} />
              <span className={"text-lg"}>{`${manga?.views.count}`}</span>
            </div>
            <div className="flex items-center space-x-1">
              <HeartIcon className={"text-[#E11D48] w-5 h-5"} />
              <span className={"text-lg"}>{`${manga?.likes.likeCount}`}</span>
            </div>
          </div>
          <p className="text-gray-700 mb-4">{manga?.description}</p>
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

export default Page;
