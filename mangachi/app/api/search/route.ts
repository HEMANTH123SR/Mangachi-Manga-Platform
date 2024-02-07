import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/db/index";
import { Manga } from "@/db/modules/manga.model";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const url = new URL(req.url);
    const query = url.searchParams.get("q");
    if (query !== null) {
      const manga = await Manga.find({
        mangaName: { $regex: new RegExp(query, "i") },
      });
      return NextResponse.json({ status: "success", data: { manga } });
    }
    return NextResponse.json(
      { status: "unsuccess", message: "not a right query" },
      { status: 404 }
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        status: "unsuccess",
        message: err?.message || err.message || "internal server error",
      },
      { status: 500 }
    );
  }
}
