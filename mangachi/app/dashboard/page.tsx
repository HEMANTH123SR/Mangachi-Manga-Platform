"use client";
import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useRouter } from "next/navigation";
const DashBoardPage = () => {
  const router = useRouter();
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 m-7 bg-white">
      <div
        className="rounded-xl  h-40 lg:h-52 w-full bg-white px-6 shadow-lg hover:bg-[#F9F9FA] flex justify-center items-center cursor-pointer flex-col space-y-2"
        style={{ border: "1px solid #E11D48" }}
        onClick={() => router.push("/create-manga")}
      >
        <AiOutlinePlusCircle className=" text-black text-3xl  bg-white " />
        <span className="font-mono text-black text-sm">Create New Manga</span>
      </div>
      <div
        className="rounded-xl h-40 lg:h-52 w-full px-6 shadow-lg "
        style={{ border: "1px solid #E11D48" }}
      ></div>
      <div
        className="rounded-xl h-40 lg:h-52 w-full px-6 shadow-lg "
        style={{ border: "1px solid #E11D48" }}
      ></div>
      <div
        className="rounded-xl h-40 lg:h-52 w-full px-6 shadow-lg "
        style={{ border: "1px solid #E11D48" }}
      ></div>
      <div
        className="rounded-xl h-40 lg:h-52 w-full px-6 shadow-lg "
        style={{ border: "1px solid #E11D48" }}
      ></div>
      <div
        className="rounded-xl h-40 lg:h-52 w-full px-6 shadow-lg "
        style={{ border: "1px solid #E11D48" }}
      ></div>
    </div>
  );
};

export default DashBoardPage;

<div className="bg-slate-300"></div>;
