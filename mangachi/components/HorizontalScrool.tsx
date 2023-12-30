import * as React from "react";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Mangas } from "@/app/data/staff-picks";

export function ScrollAreaHorizontalDemo({ title }: { title: string }) {
  return (
    <div className="w-full">
      <h2 className="mx-10  lg:my-4 text-lg lg:text-2xl font-semibold text-primary">
        {title}
      </h2>
      <ScrollArea className="px-6 w-full whitespace-nowrap ">
        <div className="flex w-max space-x-4 p-4 pt-1">
          {Mangas.map((artwork) => (
            <figure key={artwork.mangaName} className="shrink-0">
              <div className="overflow-hidden rounded-md">
                <Image
                  src={artwork.magaCoverImage}
                  alt={` manga ${artwork.mangaName}`}
                  className="aspect-[3/4] h-fit w-fit object-cover md:w-60 shadow-lg"
                  width={300}
                  height={400}
                />
              </div>
              <figcaption className="pt-2 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {artwork.mangaName}
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
