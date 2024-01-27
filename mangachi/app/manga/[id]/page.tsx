"use client";
import React, { useState, useEffect } from "react";
import { MangaType } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import OnePiceCoverImage from "@/public/One-Piece.jpg";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  MessageCircleIcon,
  MoreVerticalIcon,
  StarIcon,
  HeartIcon,
  GlobeIcon,
  UsersIcon,
} from "@/lib/Icons";
function Page({ params }: { params: { id: string } }) {
  console.log("params", params);
  const [manga, setManga] = useState<MangaType>();
  const [somethingWentWrong, setSomethingWentFrong] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/manga/${params.id}`);
      const data = await res.json();
      if (data.status !== "success") {
        setSomethingWentFrong(true);
        return;
      }
      setManga(data.data);
    })();
  }, []);
  console.log("manga :: ", manga);
  console.log("somethingWentWrong :: ", somethingWentWrong);



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

  const mangaTags = manga?.tags.split("#").filter((tag: string) => {
    tag = tag.trim();
    if (tag.length > 1) {
      return true;
    }
    else {
      return false
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
              {
                mangaTags?.map(tag => {
                  return (
                    <Badge variant="outline" key={tag}>{`#${tag}`}</Badge>
                  )
                })
              }
              <ScrollBar orientation="horizontal" />
            </div>
          </ScrollArea>

          <div className="flex items-center space-x-2 mb-4">
            <Badge variant="secondary">{`PUBLICATION: ${manga?.createdAt.substring(0, 10)}, ${manga?.status.toUpperCase()}`}</Badge>
            <div className="flex items-center space-x-1">
              <StarIcon className={"text-[#E11D48] w-5 h-5"} />
              <span className={"text-lg font-semibold"}>9.25</span>
            </div>
            <div className="flex items-center space-x-1">
              <UsersIcon className={"text-gray-600 w-5 h-5"} />
              <span className={"text-lg"}>{`${manga?.views}`}</span>
            </div>
            <div className="flex items-center space-x-1">
              <HeartIcon className={"text-[#E11D48] w-5 h-5"} />
              <span className={"text-lg"}>{`${manga?.likes.likeCount}`}</span>
            </div>
            <div className="flex items-center space-x-1">
              <GlobeIcon className={"text-gray-600 w-5 h-5"} />
              <span className={"text-lg"}>N/A</span>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            {
              manga?.description
            }

          </p>
          <p className="text-gray-700">
            {
              manga?.description
            }
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6 p-6">
        <div className="flex items-center gap-4">
          <img
            alt="Manga cover"
            className="h-[100px] w-[100px] object-cover"
            height="100"
            src={OnePiceCoverImage.src}
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            width="100"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-[#E11D48]">#001</span>
            <h2 className="text-xl font-semibold">{`Page 1: The Boy's Vow`}</h2>
            <span className="text-sm text-gray-500">JAN 20, 2019</span>
          </div>
          <div className="ml-auto">
            <MoreVerticalIcon className="text-gray-500" />
          </div>
          <span className="text-sm font-medium">342</span>
          <MessageCircleIcon className="text-gray-500" />
        </div>
        <div className="flex items-center gap-4">
          <img
            alt="Manga cover"
            className="h-[100px] w-[100px] object-cover"
            height="100"
            src={OnePiceCoverImage.src}
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            width="100"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-[#E11D48]">#001</span>
            <h2 className="text-xl font-semibold">{`Page 1: The Boy's Vow`}</h2>
            <span className="text-sm text-gray-500">JAN 20, 2019</span>
          </div>
          <div className="ml-auto">
            <MoreVerticalIcon className="text-gray-500" />
          </div>
          <span className="text-sm font-medium">342</span>
          <MessageCircleIcon className="text-gray-500" />
        </div>
        <div className="flex items-center gap-4">
          <img
            alt="Manga cover"
            className="h-[100px] w-[100px] object-cover"
            height="100"
            src={OnePiceCoverImage.src}
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            width="100"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-[#E11D48]">#001</span>
            <h2 className="text-xl font-semibold">{`Page 1: The Boy's Vow`}</h2>
            <span className="text-sm text-gray-500">JAN 20, 2019</span>
          </div>
          <div className="ml-auto">
            <MoreVerticalIcon className="text-gray-500" />
          </div>
          <span className="text-sm font-medium">342</span>
          <MessageCircleIcon className="text-gray-500" />
        </div>
      </div>
    </div>
  );
}

export default Page;
