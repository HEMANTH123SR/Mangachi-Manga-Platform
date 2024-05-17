"use client";
import { useEffect, useState } from "react";
import { MangaType } from "@/lib/types";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

const Bookmarks = () => {
  const { user } = useUser();
  const [bookMarkedMangas, setBookMarkedMangas] = useState<MangaType[]>([]);
  useEffect(() => {
    console.log("use effect ran");
    console.log(user?.id);
    (async () => {
      if (!user?.id) {
        return;
      }
      const res = await fetch(`/api/book-mark?q=${user.id}`);
      const data = await res.json();
      console.log(data);
      setBookMarkedMangas(data.data.manga);
    })();
  }, [user]);

  if (user) {
    return (
      <div className="flex flex-col space-y-1 w-full justify-center items-center mt-6  ">
        <div className="w-10/12 flex justify-start items-start">
          <h1 className=" border-b-4 border-primary font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-sans ">
            BookMarkes
          </h1>
        </div>

        {/* <div className="w-10/12 h-0.5 bg-primary "></div> */}
        <div className="min-h-4"></div>

        {bookMarkedMangas.length < 1 && (
          <span className=" text-xl sm:text-2xl font-semibold w-10/12">
            you have zero bookmarks
          </span>
        )}

        <div className="w-10/12 min-h-[70vh] flex flex-col gap-4">
          {bookMarkedMangas?.map((manga) => (
            <Link key={manga._id} href={`/manga/${manga._id}`}>
              <div className="flex items-center gap-4 cursor-pointer">
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
                  <span className="text-xs text-gray-500 font-mono ">{`${manga.createdAt.slice(
                    0,
                    10
                  )}`}</span>
                </div>
              </div>{" "}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <span className="text-xl font-semibold">Loading</span>
    </div>
  );
};

export default Bookmarks;
