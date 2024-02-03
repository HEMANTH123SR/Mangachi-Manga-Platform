import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

const TestPage = () => {
  return (
    <div className="w-full">
      <Skeleton className="h-6 lg:h-7 w-6/12 sm:w-4/12 lg:w-3/12 rounded-xl m-4" />
      <ScrollArea className="w-full whitespace-nowrap ">
        <div className="flex w-max space-x-6 lg:space-x-8 p-4 pt-1 cursor-pointer">
          <div className="flex flex-col space-y-3">
            <Skeleton className="w-28 h-40 sm:w-36 sm:h-48 lg:w-44 lg:h-56 rounded-md object-cover" />
            <Skeleton className="h-5 w-16 rounded-full " />
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="w-28 h-40 sm:w-36 sm:h-48 lg:w-44 lg:h-56 rounded-md object-cover" />
            <Skeleton className="h-5 w-16 rounded-full " />
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="w-28 h-40 sm:w-36 sm:h-48 lg:w-44 lg:h-56 rounded-md object-cover" />
            <Skeleton className="h-5 w-16 rounded-full " />
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="w-28 h-40 sm:w-36 sm:h-48 lg:w-44 lg:h-56 rounded-md object-cover" />
            <Skeleton className="h-5 w-16 rounded-full " />
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="w-28 h-40 sm:w-36 sm:h-48 lg:w-44 lg:h-56 rounded-md object-cover" />
            <Skeleton className="h-5 w-16 rounded-full " />
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="w-28 h-40 sm:w-36 sm:h-48 lg:w-44 lg:h-56 rounded-md object-cover" />
            <Skeleton className="h-5 w-16 rounded-full " />
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="w-28 h-40 sm:w-36 sm:h-48 lg:w-44 lg:h-56 rounded-md object-cover" />
            <Skeleton className="h-5 w-16 rounded-full " />
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="w-28 h-40 sm:w-36 sm:h-48 lg:w-44 lg:h-56 rounded-md object-cover" />
            <Skeleton className="h-5 w-16 rounded-full " />
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="w-28 h-40 sm:w-36 sm:h-48 lg:w-44 lg:h-56 rounded-md object-cover" />
            <Skeleton className="h-5 w-16 rounded-full " />
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="w-28 h-40 sm:w-36 sm:h-48 lg:w-44 lg:h-56 rounded-md object-cover" />
            <Skeleton className="h-5 w-16 rounded-full " />
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="w-28 h-40 sm:w-36 sm:h-48 lg:w-44 lg:h-56 rounded-md object-cover" />
            <Skeleton className="h-5 w-16 rounded-full " />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default TestPage;
