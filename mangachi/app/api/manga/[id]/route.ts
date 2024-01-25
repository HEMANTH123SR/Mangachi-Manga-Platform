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

export async function PUT(req: NextRequest) {
  try {
    await connectDB();
    const id = req.nextUrl.pathname.split("/")[3];
    const data = await req.json();
    console.clear();
    console.log(data.chapters[0]);
    console.log("------");
    console.log(data.chapters[0].chapterImages);
    const manga = await Manga.findByIdAndUpdate(id, data);
    return NextResponse.json(
      { status: "success", data: manga },
      { status: 201 }
    );
  } catch (err: any) {
    return NextResponse.json({}, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await connectDB();
    const url = new URL(req.url);
    const id = url.pathname.split("/")[3];
    await Manga.findByIdAndDelete(id);
    return NextResponse.json({ status: 204 });
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
