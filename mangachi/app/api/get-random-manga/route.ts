import { NextResponse } from "next/server";
import { connectDB } from "@/db/index";
import { Manga } from "@/db/modules/manga.model";
export async function GET() {
  try {
    await connectDB();
    const mangasId = (await Manga.find({})).map((manga) => manga._id);
    const random = Math.floor(Math.random() * mangasId.length);
    const manga = await Manga.findById(mangasId[random]);
    console.log("random :: random manga id :: ", manga._id);
    // return NextResponse.redirect("/manga/" + manga._id);
    return NextResponse.redirect(
      "https://mangachi.vercel.app/manga/" + manga._id
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
