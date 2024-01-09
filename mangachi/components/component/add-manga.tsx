"use client";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";

export function AddManga({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  console.log(pathname);
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
              
                ${
                  pathname === "/manga/add/manga-details"
                    ? "bg-primary text-white hover:bg-primary "
                    : "bg-white hover:bg-slate-100 hover:text-black"
                } `}
              onClick={() => router.push("/manga/add/manga-details")}
            >
              Manga Details
            </Button>
            <Button
              className={`mb-4 block  py-2 px-4 text-left text-sm font-medium text-gray-700
              
                 ${
                   pathname === "/manga/add/chapters"
                     ? "bg-primary text-white hover:bg-primary "
                     : "bg-white hover:bg-slate-100 hover:text-black"
                 } `}
              onClick={() => router.push("/manga/add/chapters")}
            >
              Chapters
            </Button>
            <Button
              className={`mb-4 block  py-2 px-4 text-left text-sm font-medium text-gray-700
            
                ${
                  pathname === "/manga/add/preview"
                    ? "bg-primary text-white hover:bg-primary "
                    : "bg-white hover:bg-slate-100 hover:text-black"
                } `}
              onClick={() => router.push("/manga/add/preview")}
            >
              Preview
            </Button>

            <Button
              className={`mb-4 block  py-2 px-4 text-left text-sm font-medium text-gray-700
           
                ${
                  pathname === "/manga/add/comments"
                    ? "bg-primary text-white hover:bg-primary "
                    : "bg-white hover:bg-slate-100 hover:text-black"
                } `}
              onClick={() => router.push("/manga/add/comments")}
            >
              Comments
            </Button>
            <Button
              className={`mb-4 block  py-2 px-4 text-left text-sm font-medium text-gray-700
            
               ${
                 pathname === "/manga/add/manga-settings"
                   ? "bg-primary text-white hover:bg-primary "
                   : "bg-white hover:bg-slate-100 hover:text-black"
               } `}
              onClick={() => router.push("/manga/add/manga-settings")}
            >
              Manga Settings
            </Button>
            <Button
              className={`mb-4 block  py-2 px-4 text-left text-sm font-medium text-gray-700
            
               ${
                 pathname === "/manga/add/analytics"
                   ? "bg-primary text-white hover:bg-primary "
                   : "bg-white hover:bg-slate-100 hover:text-black"
               } `}
              onClick={() => router.push("/manga/add/analytics")}
            >
              Analytics
            </Button>
          </div>
          <div className="flex-1 bg-white px-6">{children}</div>
        </div>
      </div>
    </div>
  );
}