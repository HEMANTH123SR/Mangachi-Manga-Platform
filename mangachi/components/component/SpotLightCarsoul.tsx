"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MangaType } from "@/lib/types";
import { SpotLightCarsoulSkelton } from "@/components/component/Skelton"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Badge } from "@/components/ui/badge";

export function SpotLightCarsoul() {
  const [spotlightMangas, setSpotlightMangas] = useState<
    MangaType[] | undefined
  >();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/spotlight");
      const data = await res.json();
      setSpotlightMangas(data.data);
      setIsLoading(false);
    })();
  }, []);
  if (isLoading) {
    return (
      <SpotLightCarsoulSkelton />
    );
  }
  return (
    <Carousel className="w-full">
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
              status={data.status}
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
  status,
}: {
  author: string;
  mangaName: string;
  description: string;
  coverImage: string;
  totalChapter: number;
  date: string;
  mangaId: string;
  tags: string;
  status: string;
}) {
  const router = useRouter();
  return (
    <div>
      <div className="flex w-full h-80  ">
        <div className="w-2/5 sm:w-1/4 flex justify-center pt-5">
          <img
            alt="The Girl I Like Forgot Her Glasses"
            className="h-2/3 w-11/12 rounded-lg shadow-lg "
            src={`https://cloud.appwrite.io/v1/storage/buckets/65ab31d194c87473caab/files/${coverImage}/view?project=65ab3113d00c39e45407&mode=admin`}
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="w-3/5 sm:w-3/4 flex items-center pr-4">
          <div className="h-5/6 flex flex-col space-y-4">
            <div>
              <h2 className="hidden sm:block text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {mangaName}
              </h2>

              <h2 className="sm:hidden text-4xl font-bold tracking-tighter">
                {`${mangaName.slice(0, 16)}${mangaName.length > 16 ? "..." : ""
                  } `}
              </h2>
            </div>
            <div className="hidden sm:flex space-x-2">
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
            <div>
              <p className="hidden sm:block text-sm w-11/12">
                {`${description.slice(0, 400)}...`}
              </p>
              <p className="sm:hidden text-xs">
                {`${description.slice(0, 100)}...`}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-x-4">
              <div className="flex  space-x-4 h-6 mt-2 ">
                <Badge variant="secondary">{`${author}`}</Badge>
                <Badge variant="secondary">{`CH: ${totalChapter}`}</Badge>
              </div>
              <div className=" space-x-4 h-6 mt-2 mx-4 sm:hidden md:flex">
                {/* <Badge
                  className={`hidden sm:flex justify-center items-center`}
                  variant="secondary"
                >
                  {getFormatedDate({ date })}
                </Badge> */}
                <Badge
                  className={`hidden sm:flex justify-center items-center`}
                  variant="secondary"
                >
                  {status}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const getFormatedDate = ({ date }: { date: string }) => {
  const filter = date.slice(0, 10).split("-");
  let month;
  switch (filter[1]) {
    case "01":
      month = "Jan";
      break;
    case "02":
      month = "Feb";
      break;
    case "03":
      month = "Mar";
      break;
    case "04":
      month = "Apr";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "Jun";
      break;
    case "07":
      month = "Jul";
      break;
    case "08":
      month = "Aug";
      break;
    case "09":
      month = "Sep";
      break;
    case "10":
      month = "Oct";
      break;
    case "11":
      month = "Nov";
      break;
    case "12":
      month = "Dec";
      break;
  }
  return `${month}-${filter[2]}`;
};
