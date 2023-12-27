import * as React from "react";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Mangas } from "@/app/data";

export function ScrollAreaHorizontalDemo() {
  return (
    <ScrollArea className="mx-6 w-full whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
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
  );
}
