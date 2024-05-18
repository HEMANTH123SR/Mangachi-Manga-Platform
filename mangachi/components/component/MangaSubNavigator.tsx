"use client";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { MangaType } from "@/lib/types";

export function MangaSubNavigator({ children }: { children: React.ReactNode }) {
    const { user } = useUser();
    const pathname = usePathname();
    const router = useRouter();
    const id = pathname?.split("/")[1];
    const [manga, setManga] = useState<MangaType>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/manga/${id}`);
            const data = await res.json();
            setManga(data.data);
            setIsLoading(false)
            console.log(`user id ${user?.id} manga user id ${manga?._id}`)
        })()
    })

    if (isLoading) {
        return <div className="flex w-full h-screen justify-center items-center">
            <span className="text-xl font-semibold">Loading</span>
        </div>
    }



    if (user?.id === manga?.createdBy.userId) {
        return (
            <div className="min-h-screen bg-white pt-6 pb-12 px-4 sm:px-6 lg:px-8">
                <div className=" w-full">
                    <h2 className="text-3xl font-extrabold text-gray-900">Upload Manga</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Share your manga with the world! Upload and manage your manga
                        collection easily.
                    </p>
                    <hr className="bg-primary h-[2px] my-6" />
                    <div className="mt-12 flex flex-col lg:flex-row ">
                        <div className="flex flex-col w-full lg:w-64">
                            <Button
                                className={`mb-4 block  py-2 px-4 text-left text-sm font-medium text-gray-700
              
                ${pathname === `/${id}/dashboard/manga-details`
                                        ? "bg-primary text-white hover:bg-primary "
                                        : "bg-white hover:bg-slate-100 hover:text-black"
                                    } `}
                                onClick={() => router.push(`/${id}/dashboard/manga-details`)}
                            >
                                Manga Details
                            </Button>
                            <Button
                                className={`mb-4 block  py-2 px-4 text-left text-sm font-medium text-gray-700
              
                 ${pathname === `/${id}/dashboard/chapters`
                                        ? "bg-primary text-white hover:bg-primary "
                                        : "bg-white hover:bg-slate-100 hover:text-black"
                                    } `}
                                onClick={() => router.push(`/${id}/dashboard/chapters`)}
                            >
                                Chapters
                            </Button>


                            <Button
                                className={`mb-4 block  py-2 px-4 text-left text-sm font-medium text-gray-700
            
               ${pathname === `/${id}/dashboard/manga-settings`
                                        ? "bg-primary text-white hover:bg-primary "
                                        : "bg-white hover:bg-slate-100 hover:text-black"
                                    } `}
                                onClick={() => router.push(`/${id}/dashboard/manga-settings`)}
                            >
                                Manga Settings
                            </Button>
                           
                        </div>
                        <div className="flex-1 bg-white px-6">{children}</div>
                    </div>
                </div>
            </div>
        )

    }


    

}