"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { MangaType } from "@/lib/types";
const Recents = () => {
    const [mangas, setMangas] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/categories/recently-added`);
            const { data } = await res.json();
            setMangas(data);
        })();
    }, []);
    if (!isLoading) {
        <div className="flex w-full h-screen justify-center items-center">
            <span className="text-xl font-semibold">Loading</span>
        </div>
    }
    return (
        <div className="flex flex-col space-y-1 w-full justify-center items-center mt-6  ">
            <div className="w-10/12 flex justify-start items-start">
                <h1 className=" border-b-4 border-primary font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-sans ">
                    Recent Mangas
                </h1>
            </div>

            {/* <div className="w-10/12 h-0.5 bg-primary "></div> */}
            <div className="min-h-4"></div>



            <div className="w-10/12 min-h-[70vh] flex flex-col gap-4">
                {mangas?.map((manga) => (
                    <Link key={manga?._id} href={`/manga/${manga?._id}`}>
                        <div className="flex items-center gap-4 cursor-pointer">
                            <img
                                alt={`${manga.title} manga image`}
                                className="h-[100px] w-[80px] object-cover rounded-lg"
                                src={manga?.coverImage}
                                style={{
                                    aspectRatio: "100/100",
                                    objectFit: "cover",
                                }}
                            />
                            <div className="flex flex-col justify-start items-start">
                                <span className="text-base font-sans font-bold line-clamp-1 break-all">{`${manga?.title}`}</span>
                                <span className="font-sans text-sm">{`${manga?.author}`}</span>
                                <span className="text-xs text-gray-500 font-mono ">{`${manga?.time.slice(
                                    0,
                                    10
                                )}`}</span>
                            </div>
                        </div>{" "}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Recents