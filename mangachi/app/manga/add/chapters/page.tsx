"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Input } from "@/components/ui/input";
import { DropZone } from "@/components/DropZone";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
export default function DrawerDemo() {
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
          <DrawerHeader>
            {/* <DrawerTitle>Chapter Title</DrawerTitle> */}
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="chaptername"
            >
              Chapter Name
            </label>
            <Input placeholder="chapter title" id="chaptername" />
            {/* <DrawerDescription>Set your daily activity goal.</DrawerDescription> */}
          </DrawerHeader>
          <DropZone className="p-8 mx-4 my-2 border-dashed border border-primary" />
          {/* <ScrollAreaHorizontalDemo /> */}
          <DrawerFooter>
            <Button>Publish</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

interface Artwork {
  artist: string;
  art: string;
}

 const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Ohrnella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tohm Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vlahhdimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
];

function ScrollAreaHorizontalDemo() {
  return (
    <ScrollArea>
      <div className="flex w-max space-x-4 p-4">
        {works.map((artwork) => (
          <figure key={artwork.artist} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <Image
                src={artwork.art}
                alt={`Photo by ${artwork.artist}`}
                // className="aspect-[3/4] h-fit w-fit object-cover"
                width={80}
                height={80}
              />
            </div>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
