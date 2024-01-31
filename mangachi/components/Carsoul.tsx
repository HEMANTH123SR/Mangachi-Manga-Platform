"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MangaType } from "@/lib/types";
import bg from "@/public/backgroundImage.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function CarouselDemo() {
  const [spotlightMangas, setSpotlightMangas] = useState<
    MangaType[] | undefined
  >();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api");
      const data = await res.json();
      setSpotlightMangas(data.data);
      setIsLoading(false);
    })();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Carousel className="w-10/12 ">
      <CarouselContent>
        {spotlightMangas?.map((data) => (
          <CarouselItem key={data._id}>
            <CarouselCard
              mangaName={data.mangaName}
              author={data.author}
              description={data.description}
              coverImage={data.coverImage}
              tags={data.tags}
              totalChapter={data.chapters.length}
              date={data.createdAt}
              mangaId={data._id}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-primary" />
      <CarouselNext className="text-primary" />
    </Carousel>
  );
}

function CarouselCard({
  author,
  mangaName,
  description,
  coverImage,
  totalChapter,
  date,
  mangaId,
  tags,
}: {
  author: string;
  mangaName: string;
  description: string;
  coverImage: string;
  totalChapter: number;
  date: string;
  mangaId: string;
  tags: string;
}) {
  const router = useRouter();
  return (
    <div className=" ">
      <div className="flex w-full h-80 max-h-80 ">
        <div className="w-1/4 flex justify-center items-center">
          <img
            alt="The Girl I Like Forgot Her Glasses"
            className="h-5/6 w-5/6 rounded-lg shadow-lg"
            src={`https://cloud.appwrite.io/v1/storage/buckets/65ab31d194c87473caab/files/${coverImage}/view?project=65ab3113d00c39e45407&mode=admin`}
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="w-3/4 flex items-center">
          <div className="h-5/6 flex flex-col space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {mangaName}
            </h2>
            <div className="flex space-x-2">
              {tags
                .split("#")
                .filter((tag) => tag.trim().length > 1)
                .map((tag) => (
                  <Badge
                    variant="outline"
                    key={tag}
                  >{`${tag.toUpperCase()}`}</Badge>
                ))}
            </div>
            <p className="text-sm"> {`${description.slice(0, 400)}...`}</p>
            <div className="flex space-x-4">
              <Badge variant="secondary">{`Author: ${author}`}</Badge>
              <Badge variant="secondary">{`CH: ${totalChapter}`}</Badge>
            </div>
            <div className="flex space-x-8 items-center justify-between">
              <Button
                className="inline-flex h-9 items-center justify-center rounded-md border  bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50  text-black"
                onClick={() => router.push(`/manga/${mangaId}`)}
              >
                Read Now
              </Button>
              <span className="text-sm text-black">{date.slice(0, 10)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="container mx-auto px-4 py-8">
  <div className="flex flex-col lg:flex-row lg:items-center">
    <div className="flex-1 ">
      <h1 className="text-4xl font-bold mb-4">{mangaName}</h1>
      <div className="flex items-center space-x-2 mb-4">
        <Badge variant="secondary">En</Badge>
        <span>{totalChapter} Ch</span>
        <span>{date}</span>
      </div>
      <p className="mb-6 max-w-xl ">{`${description}...`}</p>
      <div className="flex space-x-4">
        <Button
          className="bg-primary text-white "
          onClick={() => router.push(`/manga/${mangaId}`)}
        >
          Read Now
        </Button>
      </div>
    </div>
    <div className="flex-1   mt-8 lg:mt-0">
      <div className="flex justify-center items-center">
        <img
          alt="The Girl I Like Forgot Her Glasses"
          className="rounded-lg shadow-lg"
          height="400"
          src={`https://cloud.appwrite.io/v1/storage/buckets/65ab31d194c87473caab/files/${coverImage}/view?project=65ab3113d00c39e45407&mode=admin`}
          style={{
            aspectRatio: "600/400",
            objectFit: "cover",
          }}
          width="600"
        />
      </div>
    </div>
  </div>
</div> */
}

// linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5)),
