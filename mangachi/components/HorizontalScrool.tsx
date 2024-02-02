"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function ScrollAreaHorizontalDemo({
  title,
  routeSegment,
}: {
  title: string;
  routeSegment: string;
}) {
  const router = useRouter();
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/categories/${routeSegment}`);
      const { data } = await res.json();
      console.log(`${routeSegment} :: `, data);
      setData(data);
    })();
  }, []);

  return (
    <div className="w-full  ">
      <h2 className="font-header  text-lg sm:text-xl lg:text-1xl font-semibold font-sans m-4 text-foreground ">
        {title}
      </h2>
      <ScrollArea className=" w-full whitespace-nowrap ">
        <div className="flex w-max space-x-6 lg:space-x-8 p-4 pt-1 cursor-pointer">
          {data.map((manga: any) => (
            <figure
              key={manga._id}
              className="shrink-0"
              onClick={() => router.push(`/manga/${manga._id}`)}
            >
              <img
                src={manga.coverImage}
                alt={`manga ${manga.title}`}
                className="w-28 h-40 sm:w-36 sm:h-48 lg:w-44 lg:h-56 rounded-md object-cover"
              />
              <figcaption className="pt-2 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {manga.title.length > 14
                    ? `${manga.title.slice(0, 14)}...`
                    : manga.title}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
    </div>
  );
}

//w-36 h-48