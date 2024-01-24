"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { getFormattedDate } from "@/lib/index";
import { createImage } from "@/lib/appwrite";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Input } from "@/components/ui/input";
import { DropZone } from "@/components/DropZone";

export default function ChapterPage() {
  type Chapter = {
    chapterName: string;
    chapterImages: string[];
    chapterPublishedDate: string;
    chapterNumber: number;
    _id?: string | undefined;
  };
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const id = pathname?.split("/")[1];
  const date = getFormattedDate();
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [chapterName, setChapterName] = useState<string>("");
  const [chapterImages, setChapterImages] = useState<File[]>([]);

  useEffect(() => {
    const asynchFunc = async () => {
      const res = await fetch(`/api/manga/${id}`);
      const { data } = await res.json();
      setChapters(data.chapters);
      console.log(data.chapters);
    };
    asynchFunc();
  }, []);


  const addChapter = async () => {
    if (chapterName && chapterImages.length > 0) {
      for (let i of chapters) {
        if (chapterName == i.chapterName) {
          toast("Chapter already exists", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Cancel",
              onClick: () => { },
            },
          });
          return;
        }
      }

      if (chapterName.length < 4 && chapterName.length > 60) {
        toast("Chapter name must be between 4 and 60 characters", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Cancel",
            onClick: () => { },
          },
        });
        return;
      }

      if (chapterImages.length > 14 || chapterImages.length < 1) {
        toast("Chapter images must be between 1 and 14 images", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Cancel",
            onClick: () => { },
          },
        });
        return;
      }
      // chapter type
      const chapter: Chapter = {
        chapterName,
        chapterImages: await getImages(),
        chapterPublishedDate: date.fullyFormatedTime,
        chapterNumber: chapters.length + 1,
      };

      setChapters([]);
      console.log("chapters ", chapters)
      const res = await fetch(`/api/manga/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chapters: [...chapters, chapter] }),
      });
      const data = await res.json();
      console.log(data.status);
      if (data.status === "success") {
        toast("Chapter added successfully", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Cancel",
            onClick: () => { },
          },
        });
        setIsDrawerOpen(false);
      } else {
        toast("Failed to add chapter", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Cancel",
            onClick: () => { },
          },
        });
      }
    } else {
      toast(
        `${chapterName.length > 0
          ? "Images are required"
          : "Chapter Name is required"
        }`,
        {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Cancel",
            onClick: () => { },
          },
        }
      );
    }
  };

  const getImages = async () => {
    const ids = [];
    for (let file of chapterImages) {
      const res = await createImage(file);
      if (res.status === "success") {
        console.log("wait wait");
        ids.push(res.id);
      } else {
        toast(`Failed to upload image ${file.name}`, {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Cancel",
            onClick: () => { },
          },
        });
      }
    }
    return ids as string[];
  };

  return (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen} >
      <div className="flex w-full justify-center">
        <DrawerTrigger asChild>
          <Button variant="outline" className="bg-primary text-white lg:mr-10">
            Add Chapter
          </Button>
        </DrawerTrigger>
      </div>
      <DrawerContent>
        <div className="px-4 mx-auto w-full max-w-md ">
          <DrawerHeader className="py-0">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="chaptername"
            >
              Chapter Name
            </label>
            <Input
              placeholder="chapter title"
              id="chaptername"
              value={chapterName}
              onChange={(e) => setChapterName(e.target.value)}
            />
            <DrawerDescription>
              Only images are accepted and it should be less than 1mb .
            </DrawerDescription>
          </DrawerHeader>
          <DropZone
            multipleImage={true}
            setImage={null}
            setMultipleImage={setChapterImages}
          />

          <DrawerFooter>
            <Button onClick={() => addChapter()}>Publish</Button>
            <DrawerClose asChild>
              <Button variant="outline" >Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
