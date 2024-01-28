import { connectDB } from "@/db/index";
import { Manga } from "@/db/modules/manga.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const data = await req.json();
    const dbResponse = await Manga.create(data);
    console.log("data posted to db ", data);
    console.log("db response", dbResponse);

    return NextResponse.json(
      { message: "success", data: dbResponse },
      { status: 201 }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
