import * as React from "react";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export async function ScrollAreaHorizontalDemo({
  title,
  routeSegment,
}: {
  title: string;
  routeSegment: string;
}) {
  interface Manga {
    magaCoverImage: string;
    mangaName: string;
  }
  const res = await fetch(`/api/${routeSegment}`);

  const Mangas: Manga[] = await res.json();
  return (
    <div className="w-full">
      <h2 className="mx-10  lg:my-4 text-lg lg:text-2xl font-semibold text-primary">
        {title}
      </h2>
      <ScrollArea className="px-6 w-full whitespace-nowrap ">
        <div className="flex w-max space-x-4 p-4 pt-1">
          {Mangas.map((manga) => (
            <figure key={manga.mangaName} className="shrink-0">
              <div className="overflow-hidden rounded-md">
                <Image
                  src={manga.magaCoverImage}
                  alt={` manga ${manga.mangaName}`}
                  className="aspect-[3/4] h-fit w-fit object-cover md:w-60 shadow-lg"
                  width={300}
                  height={400}
                />
              </div>
              <figcaption className="pt-2 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {manga.mangaName}
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
