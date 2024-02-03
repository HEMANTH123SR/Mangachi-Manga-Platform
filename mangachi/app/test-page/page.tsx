import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const TestPage = () => {
  return (
    <div className="flex flex-col mx-3 sm:mx-6">
      <Skeleton className="h-6 sm:h-7 w-56 rounded-full mt-12" />
      <div className="flex space-x-8 mt-4">
        <div className="border w-full md:w-1/2 rounded-lg p-4 space-y-3">
          <div className="flex items-center gap-4">
            <Skeleton className="h-[100px] w-[80px]
            rounded-lg
            " />
            <div className="flex flex-col justify-start items-start space-y-3 ">
              <Skeleton className="h-4  w-28 rounded-full" />
              <Skeleton className="h-4  w-16 rounded-full" />
              <Skeleton className="h-3  w-10 rounded-full" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Skeleton className="h-[100px] w-[80px]
            rounded-lg
            " />
            <div className="flex flex-col justify-start items-start space-y-3 ">
              <Skeleton className="h-4  w-28 rounded-full" />
              <Skeleton className="h-4  w-16 rounded-full" />
              <Skeleton className="h-3  w-10 rounded-full" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Skeleton className="h-[100px] w-[80px]
            rounded-lg
            " />
            <div className="flex flex-col justify-start items-start space-y-3 ">
              <Skeleton className="h-4  w-28 rounded-full" />
              <Skeleton className="h-4  w-16 rounded-full" />
              <Skeleton className="h-3  w-10 rounded-full" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Skeleton className="h-[100px] w-[80px]
            rounded-lg
            " />
            <div className="flex flex-col justify-start items-start space-y-3 ">
              <Skeleton className="h-4  w-28 rounded-full" />
              <Skeleton className="h-4  w-16 rounded-full" />
              <Skeleton className="h-3  w-10 rounded-full" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Skeleton className="h-[100px] w-[80px]
            rounded-lg
            " />
            <div className="flex flex-col justify-start items-start space-y-3 ">
              <Skeleton className="h-4  w-28 rounded-full" />
              <Skeleton className="h-4  w-16 rounded-full" />
              <Skeleton className="h-3  w-10 rounded-full" />
            </div>
          </div>

        </div>
        <div className="hidden md:block border w-1/2  rounded-lg p-4 space-y-3">
          <div className="flex items-center gap-4">
            <Skeleton className="h-[100px] w-[80px]
            rounded-lg
            " />
            <div className="flex flex-col justify-start items-start space-y-3 ">
              <Skeleton className="h-4  w-28 rounded-full" />
              <Skeleton className="h-4  w-16 rounded-full" />
              <Skeleton className="h-3  w-10 rounded-full" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Skeleton className="h-[100px] w-[80px]
            rounded-lg
            " />
            <div className="flex flex-col justify-start items-start space-y-3 ">
              <Skeleton className="h-4  w-28 rounded-full" />
              <Skeleton className="h-4  w-16 rounded-full" />
              <Skeleton className="h-3  w-10 rounded-full" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Skeleton className="h-[100px] w-[80px]
            rounded-lg
            " />
            <div className="flex flex-col justify-start items-start space-y-3 ">
              <Skeleton className="h-4  w-28 rounded-full" />
              <Skeleton className="h-4  w-16 rounded-full" />
              <Skeleton className="h-3  w-10 rounded-full" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Skeleton className="h-[100px] w-[80px]
            rounded-lg
            " />
            <div className="flex flex-col justify-start items-start space-y-3 ">
              <Skeleton className="h-4  w-28 rounded-full" />
              <Skeleton className="h-4  w-16 rounded-full" />
              <Skeleton className="h-3  w-10 rounded-full" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Skeleton className="h-[100px] w-[80px]
            rounded-lg
            " />
            <div className="flex flex-col justify-start items-start space-y-3 ">
              <Skeleton className="h-4  w-28 rounded-full" />
              <Skeleton className="h-4  w-16 rounded-full" />
              <Skeleton className="h-3  w-10 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;

