import { NextResponse } from "next/server";
import { connectDB } from "@/db/index";
import { Manga } from "@/db/modules/manga.model";

export async function GET() {
  try {
    await connectDB();
    const mangas = await Manga.findById("65bfadb0a870d6fe0bbbdd1a", {
      "likes.likedBy": 1,
    });
    return NextResponse.json(
      { status: "success", data: mangas },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        status: "unsucess",
        message: err?.message || err._message || "Internal server error",
      },
      { status: 500 }
    );
  }
}
