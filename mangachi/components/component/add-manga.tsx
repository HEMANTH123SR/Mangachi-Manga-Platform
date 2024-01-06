"use client";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";
export function AddManga({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className=" w-full">
        {/* <h2 className="text-3xl font-extrabold text-gray-900 ">Settings</h2>
        <p className="mt-2 text-sm ">
          Manage your account settings and set preferences for your manga
          collection.
        </p>
        <hr
          className="bg-primary  w-full my-8 rounded-full"
          style={{ height: "2px" }}
        /> */}
        <div className="mt-8 flex flex-col lg:flex-row ">
          <div className="flex flex-col w-full lg:w-64">
            <Button
              className="mb-4 block bg-white py-2 px-4 text-left text-sm font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => router.push("/manga/add/manga-details")}
            >
              Manga Details
            </Button>
            <Button
              className="mb-4 block bg-white py-2 px-4 text-left text-sm font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => router.push("/manga/add/chapters")}
            >
              Chapters
            </Button>
            <Button
              className="mb-4 block bg-white py-2 px-4 text-left text-sm font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => router.push("/manga/add/preview")}
            >
              Preview
            </Button>

            <Button
              className="mb-4 block bg-white py-2 px-4 text-left text-sm font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => router.push("/manga/add/comments")}
            >
              Comments
            </Button>
            <Button
              className=" block bg-white py-2 px-4 text-left text-sm font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => router.push("/manga/add/comments")}
            >
            Manga Settings
            </Button>
          </div>
          <div className="flex-1 bg-white p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
