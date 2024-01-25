"use client";
import React from "react";
import { deleteAllTheImagesInTheBucket } from "@/lib/appwrite";
const TestPage = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <button
        className="bg-primary text-white px-8 py-4 font-sans"
        onClick={() => deleteAllTheImagesInTheBucket()}
      >
        delte all the images
      </button>
    </div>
  );
};

export default TestPage;
