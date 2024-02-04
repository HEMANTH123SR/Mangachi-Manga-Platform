import { connectDB } from "@/db/index";

import { NextRequest, NextResponse } from "next/server";
import { Manga } from "@/db/modules/manga.model";

// post the manga
export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const manga = await Manga.create(body);
    return NextResponse.json(
      { status: "success", data: manga },
      { status: 201 }
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        status: "unsuccess",
        message: err?.message || err._message || "Internal server error",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    console.log(body);
     await Manga.deleteMany({});
    return NextResponse.json({ status: 203 });
  } catch (err: any) {
    return NextResponse.json(
      {
        status: "unsuccess",
        message: err?.message || err._message || "Internal server error",
      },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    console.log(body);
    const manga = await Manga.updateMany({}, { $set: body });
    return NextResponse.json(
      { status: "success", data: manga },
      { status: 202 }
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        status: "unsuccess",
        message: err?.message || err._message || "Internal server error",
      },
      { status: 500 }
    );
  }
}

// get all the mangas
export async function GET() {
  try {
    await connectDB();
    const mangas = await Manga.find({});
    return NextResponse.json(
      { status: "success", data: mangas },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        status: "unsuccess",
        message: err?.message || err._message || "Internal server error",
      },
      { status: 500 }
    );
  }
}
