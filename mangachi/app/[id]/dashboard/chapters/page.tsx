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
