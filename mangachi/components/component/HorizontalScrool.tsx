"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { HorizontalScrollComponentSkelton } from "@/components/component/Skelton";
export function ScrollAreaHorizontalDemo({
  title,
  routeSegment,
}: {
  title: string;
  routeSegment: string;
}) {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/categories/${routeSegment}`);
      const { data } = await res.json();
      console.log(`${routeSegment} :: `, data);
      setData(data);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <HorizontalScrollComponentSkelton />;
  }
  return (
    <div className="w-full  ">
      <h2 className="font-header  text-lg sm:text-xl lg:text-1xl font-semibold font-sans m-4 text-foreground ">
        {title}
      </h2>
      <ScrollArea className=" w-full whitespace-nowrap ">
        <div className="flex w-max space-x-6 lg:space-x-8 p-4 pt-1 cursor-pointer">
          {data.map((manga: any) => (
            <Link key={manga._id} href={`/manga/${manga._id}`}>
              <figure className="shrink-0">
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
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
    </div>
  );
}
