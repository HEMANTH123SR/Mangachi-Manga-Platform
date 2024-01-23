"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation"
import { getFormattedDate } from "@/lib/index"
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

export default function DrawerDemo() {
  type Chapter = {
    chapterName: string;
    chapterImages: string[];
    chapterPublishedDate: string;
    chapterNumber: number;
  }
  const pathname = usePathname();
  const id = pathname?.split("/")[1];
  const date = getFormattedDate();
  const [chapters, setChapters] = useState<Chapter[]>([

  ]);

  useEffect(() => {
    const asynchFunc = async () => {
      const res = await fetch(`/api/manga/${id}`);
      const { data } = await res.json();
      setChapters(data.chapters);
    }
    asynchFunc();

  }, [id])

  const addChapter = async () => {

    console.log("addchapters :: ", chapters)
    console.log("chapters length :: ", chapters.length)
    const res = await fetch(`/api/manga/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chapters: [{
          chapterName: "finding nemo",
          chapterImages: ["89998829", "990097", "999908", "899009"],
          chapterPublishedDate: date.fullyFormatedTime,
          chapterNumber: 0
        }]
      }
      )
    })
    const data = await res.json();
    console.log("addchapters response :: ", data);
  }

  return (
    <Drawer>
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
            <Input placeholder="chapter title" id="chaptername" />
            <DrawerDescription>
              Only images are accepted and it should be less than 1mb .
            </DrawerDescription>
          </DrawerHeader>
          <DropZone multipleImage={true} setImage={null} setMultipleImage={null} />

          <DrawerFooter>
            <Button onClick={() => addChapter()}>Publish</Button >
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
