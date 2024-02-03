import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

const TestPage = () => {
  return (
    <div className="border-t-2 border-primary">
      <div className="overflow-hidden">
        <div className="relative">
          <Skeleton className="w-full h-[300px] object-cover border" />
          <div className="absolute top-0 left-0 p-5 flex items-start space-x-4">
            <Skeleton className="w-[154px] h-[220px] object-cover border" />
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-10 w-40 lg:w-64  border " />
              <Skeleton className="h-5 w-4/6 border " />
              <Skeleton className="h-4 w-3/6 border" />
            </div>
          </div>
        </div>
      </div>
      <div className="my-5"></div>
      <ScrollArea>
        <div className="flex flex-col space-y-6 px-4 lg:px-8 h-96">
          <div className="flex items-center gap-4 ">
            <Skeleton className="h-[100px] w-[100px] object-cover rounded-lg border" />
            <div className="flex flex-col justify-start items-start space-y-3">
              <Skeleton className="h-6 w-7 rounded-lg border" />
              <Skeleton className="h-6 w-40 rounded-lg border" />
              <Skeleton className="h-4 w-28 rounded-lg border" />
            </div>
          </div>
          <div className="flex items-center gap-4 ">
            <Skeleton className="h-[100px] w-[100px] object-cover rounded-lg border" />
            <div className="flex flex-col justify-start items-start space-y-3">
              <Skeleton className="h-6 w-7 rounded-lg border" />
              <Skeleton className="h-6 w-40 rounded-lg border" />
              <Skeleton className="h-4 w-28 rounded-lg border" />
            </div>
          </div>
          <div className="flex items-center gap-4 ">
            <Skeleton className="h-[100px] w-[100px] object-cover rounded-lg border" />
            <div className="flex flex-col justify-start items-start space-y-3">
              <Skeleton className="h-6 w-7 rounded-lg border" />
              <Skeleton className="h-6 w-40 rounded-lg border" />
              <Skeleton className="h-4 w-28 rounded-lg border" />
            </div>
          </div>
          <div className="flex items-center gap-4 ">
            <Skeleton className="h-[100px] w-[100px] object-cover rounded-lg border" />
            <div className="flex flex-col justify-start items-start space-y-3">
              <Skeleton className="h-6 w-7 rounded-lg border" />
              <Skeleton className="h-6 w-40 rounded-lg border" />
              <Skeleton className="h-4 w-28 rounded-lg border" />
            </div>
          </div>
          <div className="flex items-center gap-4 ">
            <Skeleton className="h-[100px] w-[100px] object-cover rounded-lg border" />
            <div className="flex flex-col justify-start items-start space-y-3">
              <Skeleton className="h-6 w-7 rounded-lg border" />
              <Skeleton className="h-6 w-40 rounded-lg border" />
              <Skeleton className="h-4 w-28 rounded-lg border" />
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default TestPage;
