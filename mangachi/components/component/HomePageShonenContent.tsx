"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MangaType } from "@/lib/types";
import { HomePageShonenContentSkelton } from "@/components/component/Skelton";
export const HomePageShonenContent = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [shonenMangasFirst, setShonenMangasFirst] = useState<MangaType[]>();
  const [shonenMangasSecond, setShonenMangasSecond] = useState<MangaType[]>();
  useEffect(() => {
    (async () => {
      const res = await fetch(`/api`);
      const { data } = await res.json();
      setShonenMangasFirst([data[0], data[1], data[2], data[3], data[4]]);
      setShonenMangasSecond([data[5], data[6], data[7], data[8], data[9], ,]);
      setIsLoading(false);
    })();
  }, []);
  if (isLoading) return <HomePageShonenContentSkelton />;

  return (
    <section className="flex flex-col mx-3 sm:mx-6">
      <h2 className="font-header sm:text-3xl text-xl font-semibold font-sans">
        Latest Shonen Manga
      </h2>
      <div className="flex space-x-8 mt-4">
        <div className="bg-[#F0F1F2] w-full md:w-1/2  rounded-lg p-4 space-y-3">
          {shonenMangasFirst?.map((manga: MangaType) => (
            <div
              key={manga._id}
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => router.push(`/manga/${manga._id}`)}
            >
              <img
                alt={`${manga.mangaName} manga image`}
                className="h-[100px] w-[80px] object-cover rounded-lg"
                src={`https://cloud.appwrite.io/v1/storage/buckets/65ab31d194c87473caab/files/${manga.coverImage}/view?project=65ab3113d00c39e45407&mode=admin`}
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
              />
              <div className="flex flex-col justify-start items-start">
                <span className="text-base font-sans font-bold line-clamp-1 break-all">{`${manga.mangaName}`}</span>
                <span className="font-sans text-sm">{`${manga.author}`}</span>
                {/* <span className="text-xs text-gray-500 font-mono ">{`${manga.createdAt.slice(
                  0,
                  10
                )}`}</span> */}
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:block bg-[#F0F1F2] w-1/2  rounded-lg p-4 space-y-3">
          {shonenMangasSecond?.map((manga: MangaType) => (
            <div
              key={manga._id}
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => router.push(`/manga/${manga._id}`)}
            >
              <img
                alt={`${manga.mangaName} manga image`}
                className="h-[100px] w-[80px] object-cover rounded-lg"
                src={`https://cloud.appwrite.io/v1/storage/buckets/65ab31d194c87473caab/files/${manga.coverImage}/view?project=65ab3113d00c39e45407&mode=admin`}
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
              />
              <div className="flex flex-col justify-start items-start">
                <span className="text-base font-sans  font-bold line-clamp-1 break-all">{`${manga.mangaName}`}</span>
                <span className="font-sans text-sm">{`${manga.author}`}</span>
                {/* <span className="text-xs text-gray-500 font-mono ">{`${manga.createdAt.slice(
                  0,
                  10
                )}`}</span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
