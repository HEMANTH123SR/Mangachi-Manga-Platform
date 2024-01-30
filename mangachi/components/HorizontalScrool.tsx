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
    <div className="w-full">
      <h2 className="mx-10  lg:my-4 text-lg lg:text-2xl font-semibold text-primary">
        {title}
      </h2>
      <ScrollArea className="px-6 w-full whitespace-nowrap ">
        <div className="flex w-max space-x-4 p-4 pt-1 cursor-pointer">
          {data.map((manga: any) => (
            <figure key={manga._id} className="shrink-0" onClick={() => router.push(`/manga/${manga._id}`)}>
              <div className="overflow-hidden rounded-md">
                <Image
                  src={manga.coverImage}
                  alt={` manga ${manga.title}`}
                  className="aspect-[3/4] h-fit w-fit object-cover md:w-60 shadow-lg"
                  width={300}
                  height={400}
                />
              </div>
              <figcaption className="pt-2 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {manga.title}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
