"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Chapter } from "@/lib/types";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";
import { toast } from "sonner";
const ChapterPage = ({
  params,
}: {
  params: { chapterid: string; id: string };
}) => {
  const router = useRouter();
  const [chapterState, setChapterState] = useState<Chapter>();
  const [somethingWentFrong, setSomethingWentFrong] = useState(false);
  const [nextChapterId, setNextChapterId] = useState<string | undefined>("");
  const [prevChapterId, setPrevChapterId] = useState<string | undefined>("");
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/manga/" + params.id);
      const data = await res.json();
      if (data.status !== "success") {
        setSomethingWentFrong(true);
        return;
      }
      for (let i = 0; i < data.data.chapters.length; i++) {
        if (params.chapterid === data.data.chapters[i]._id) {
          setChapterState(data.data.chapters[i]);
          setNextChapterId(data.data.chapters[i + 1]?._id);
          setPrevChapterId(data.data.chapters[i - 1]?._id);
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
      <div className="h-10 w-full bg-primary flex justify-between  px-6">
        <div className="flex space-x-2 items-center">
          <span className="text-white font-mono">{`#${chapterState?.chapterNumber}`}</span>
          <span className="font-sans text-white">
            {chapterState?.chapterName}
          </span>
        </div>
        <div className="flex space-x-6 items-center">
          <div
            className="flex space-x-1 items-center justify-center cursor-pointer"
            onClick={() => {
              if (prevChapterId) {
                router.push(`${prevChapterId}`);
                return;
              }
              toast("there is no previous chapter", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                  label: "Cancel",
                  onClick: () => { },
                },
              });
            }}
          >
            <GrCaretPrevious className="text-white" />
            <span className="text-sm font-sans text-white text-center pb-1">
              prev
            </span>
          </div>
          <div
            className="flex space-x-1 items-center justify-center cursor-pointer"
            onClick={() => {
              if (nextChapterId) {
                router.push(`${nextChapterId}`);
                return;
              }
              toast("there is no next chapter", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                  label: "Cancel",
                  onClick: () => { },
                },
              });
            }}
          >
            <GrCaretNext className="text-white" />
            <span className="text-sm font-sans text-white text-center pb-1">
              next
            </span>
          </div>
        </div>
      </div>
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
