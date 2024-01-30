"use client";
import React, { useState, useEffect } from "react";
import { Chapter } from "@/lib/types";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
const ChapterPage = ({
  params,
}: {
  params: { chapterid: string; id: string };
}) => {
  const [chapterState, setChapterState] = useState<Chapter>();
  const [somethingWentFrong, setSomethingWentFrong] = useState(false);
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/manga/" + params.id);
      const data = await res.json();
      if (data.status !== "success") {
        setSomethingWentFrong(true);
        return;
      }
      for (let i = 0; i < data.data.chapters.length; i++) {
        console.log(i);
        if (params.chapterid === data.data.chapters[i]._id) {
          setChapterState(data.data.chapters[i]);
          break;
        }
        if (i === data.data.chapters.length - 1) {
          setSomethingWentFrong(true);
          break;
        }
      }
    })();
  }, []);
  if (somethingWentFrong) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <h1 className="text-4xl font-mono">Something went wrong</h1>
      </div>
    );
  }
  return (
    <div className="h-full w-full">
      <ScrollArea className="h-full w-full">
        <div className="h-full w-full flex flex-col items-center justify-center my-10">
          {chapterState?.chapterImages.map((imageId: string) => {
            return (
              <img
                src={`https://cloud.appwrite.io/v1/storage/buckets/65ab31d194c87473caab/files/${imageId}/view?project=65ab3113d00c39e45407&mode=admin`}
                alt="chapter"
                key={imageId}
                className="w-11/12 h-full object-cover"
              />
            );
          })}
          <ScrollBar orientation="horizontal" />
        </div>
      </ScrollArea>
    </div>
  );
};

export default ChapterPage;
