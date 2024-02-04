import { NextResponse } from "next/server";
import { connectDB } from "@/db/index";
import { Manga } from "@/db/modules/manga.model";

export async function GET() {
  try {
    await connectDB();
    const mangas = await Manga.find({
      _id: {
        $in: [
          "65bfadb0a870d6fe0bbbdd26",
          "65bfadb0a870d6fe0bbbdd1d",
          "65bfafdaa870d6fe0bbdd660",
          "65bfadb0a870d6fe0bbbdd1f",
          "65bfadb0a870d6fe0bbbdd20",
          "65b336f0d31e6a11e98f059a",
          "65bfadb0a870d6fe0bbbdd22",
          "65bfadb0a870d6fe0bbbdd23",
          "65bfadb0a870d6fe0bbbdd24",
        ],
      },
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
