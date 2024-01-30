"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { MangaType } from "@/lib/types";
import { Button } from "@/components/ui/button";

const DashBoardPage = () => {
    const { user, isLoaded } = useUser();
    const router = useRouter();
    const [mangas, setMangas] = useState<MangaType[]>([]);
    const [somethingWentWrong, setSomethingWentWrong] = useState(false);
    useEffect(() => {
        (async () => {
            const res = await fetch("/api");
            const data = await res.json();
            if (data.status !== "success") {
                setSomethingWentWrong(true);
                return;
            }
            console.log("ohhhh ");
            console.log(data.data);
            //   setMangas(
            //     data.data.filter((manga: MangaType) => {
            //       if (manga.createdBy.userId === user?.id) {
            //         return true;
            //       } else {
            //         return false;
            //       }
            //     })
            //   );
            setMangas(data.data);
        })();
    }, [user?.id]);
    return (
        <div>
            <div className="flex justify-center items-center  my-14">
                <Button variant="outline" className="bg-primary text-white ">
                    Create New Manga
                </Button>
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 mx-12 bg-white">
                {mangas.map((manga: MangaType) => (
                    <div key={manga._id} className="flex items-center gap-4 ">
                        <img
                            alt={`${manga.mangaName} manga image`}
                            className="h-[100px] w-[100px] object-cover"
                            height="100"
                            src={`https://cloud.appwrite.io/v1/storage/buckets/65ab31d194c87473caab/files/${manga.coverImage}/view?project=65ab3113d00c39e45407&mode=admin`}
                            style={{
                                aspectRatio: "100/100",
                                objectFit: "cover",
                            }}
                            width="100"
                        />
                        <div className="flex flex-col justify-start items-start">
                            <span className="text-lg font-mono text-[#E11D48]">{`${manga.mangaName}`}</span>
                            <h2 className=" font-semibold font-sans">{`${manga.author}`}</h2>
                            <span className="text-xs text-gray-500 font-mono ">{`${manga.createdAt.slice(
                                0,
                                10
                            )}`}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashBoardPage;
