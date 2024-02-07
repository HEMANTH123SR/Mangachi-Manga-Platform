"use client";
import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { FaRandom, FaBookmark } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
// import MangaChiLogo from "@/public/Screenshot 2024-02-07 173253.png";
import MangaChiLogo from "@/public/Mangachi-logos_black.png";
export const NavBar = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { user, isLoaded } = useUser();
  return (
    <header className="w-full py-3 px-2 sm:px-5 flex  border-b-2 ">
      <div className="flex w-1/2 md:w-1/3  items-center space-x-3 sm:space-x-6 justify-start">
        {children}
        <h1
          className="font-mono font-bold text-primary text-2xl cursor-pointer transition duration-300 ease-in-out transform hover:scale-105  tracking-tighter"
          onClick={() => router.push("/")}
        >
          MANGACHI
        </h1>

      </div>
      <div className="hidden  md:w-1/3 md:flex md:justify-center md:items-center md:space-x-12">
        <div className="flex flex-col  justify-center items-center space-y-1">
          <FaRandom className=" text-primary text-1xl" />
          <span className="text-text font-mono text-sm">Random</span>
        </div>
        <div className="flex flex-col  justify-center items-center space-y-1">
          <FaBookmark className=" text-primary text-1xl" />
          <span className="text-text font-mono text-sm">Bookmark</span>
        </div>
        <div className="flex flex-col  justify-center items-center space-y-1">
          <IoMdChatbubbles className=" text-primary text-1xl" />
          <span className="text-text font-mono text-sm">Community</span>
        </div>
      </div>
      <div className="flex w-1/2 md:w-1/3 justify-end items-center space-x-3 sm:space-x-6 ">
        <IoSearch className="text-2xl sm:text-3xl text-text" />

        {isLoaded && user && (
          <UserButton afterMultiSessionSingleSignOutUrl="/" />
        )}
      </div>
    </header>
  );
};
