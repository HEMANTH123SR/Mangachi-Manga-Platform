"use client";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

import { Textarea } from "@/components/ui/textarea";

const Page = () => {
  return (
    <div>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">
        Add all the manga details required to the manga reader
      </p>
      <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-6">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="manganame"
          >
            Manga Name
          </label>
          <div className="mt-1">
            <Input id="manganame" placeholder="Your manga name" />
          </div>
        </div>
        <div className="sm:col-span-6">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="authorname"
          >
            Author Name
          </label>
          <div className="mt-1">
            <Input id="authorname" placeholder="Add the author name" />
          </div>
        </div>
        <div className="sm:col-span-6">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="status"
          >
            Status
          </label>
          <div className="mt-1">
            <Select>
              <SelectTrigger id="status">
                <SelectValue placeholder="Select the current status of manga " />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="Ongoing">Ongoing</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
                <SelectItem value="Cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Choose the current status of your manga: ongoing, completed, or
            cancelled. The default will be Ongoing.
          </p>
        </div>
        <div className="sm:col-span-6">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="description"
          >
            Description
          </label>
          <div className="mt-1">
            <Textarea
              id="description"
              placeholder="Tell us about your favorite mangas."
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Min 200 words and Maximum 300 words
          </p>
        </div>
        <div className="sm:col-span-6">
          <div className="p-6 rounded-md bg-slate-50 text-primary my-3">
            Upload Cover Image
          </div>
          <div className="p-6 rounded-md bg-slate-50 text-primary">
            Upload Background Image
          </div>
        </div>
        <div className="sm:col-span-6">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="tags"
          >
            Tags
          </label>
          <div className="mt-1">
            <Textarea id="tags" placeholder="#shonen #sword #demon" />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Use # to add tags example #pirate #superhero
          </p>
        </div>
        <div className="sm:col-span-6">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="urls"
          >
            URLs
          </label>
          <div className="mt-1">
            <Input id="urls" placeholder="Link to your manga collection" />
          </div>
          <div className="flex justify-center items-center w-full">
            <Button className="mt-10 w-1/4">Save It</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
