import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/db/index";
import { Manga } from "@/db/modules/manga.model";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const url = new URL(req.url);
    const id = url.pathname.split("/")[3];
    const manga = await Manga.findById(id);
    return NextResponse.json({ status: "success", data: manga });
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
