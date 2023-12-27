"use client";
import * as React from "react";
import { data } from "@/app/test";

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
  return (
    <Carousel className="w-9/12  xl:w-10/12 my-6 shadow-md hidden lg:block">
      <CarouselContent>
        {data.map((data) => (
          <CarouselItem key={data.id}>
            <CarouselCard
              title={data.title}
              description={data.description}
              imagesrc={data.imgsrc}
              spotlight={data.id}
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
  title,
  description,
  spotlight,
  imagesrc,
}: {
  title: string;
  description: string;
  spotlight: number;
  imagesrc: string;
}) {
  return (
    <div className="bg-white ">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex-1 ">
            <div className="text-sm font-semibold text-primary mb-1">
              #{spotlight} Spotlight
            </div>
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <div className="flex items-center space-x-2 mb-4">
              <Badge variant="secondary">En</Badge>
              <span>23 Ep</span>
              <span>Jul 4, 2023</span>
            </div>
            <p className="mb-6 max-w-xl ">{`${description}...`}</p>
            <div className="flex space-x-4">
              <Button className="bg-primary text-white ">Read Now</Button>
              <Button variant="ghost">Detail</Button>
            </div>
          </div>
          <div className="flex-1   mt-8 lg:mt-0">
            <div className="flex justify-center items-center">
              <img
                alt="The Girl I Like Forgot Her Glasses"
                className="rounded-lg shadow-lg"
                height="400"
                src={imagesrc}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
