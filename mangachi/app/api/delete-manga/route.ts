import { connectDB } from "@/db/index";
import { Manga } from "@/db/modules/manga.model";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
    
  try {
    await connectDB();
    const url = new URL(req.url);
    const mangaId = url.searchParams.get("q");

    console.log(mangaId);

    if (!mangaId) {
      return NextResponse.json(
        { message: "Manga ID is required" },
        { status: 400 }
      );
    }

    const deletedManga = await Manga.findByIdAndDelete(mangaId);

    console.log(deletedManga);

    if (!deletedManga) {
      return NextResponse.json({ message: "Manga not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Manga deleted successfully" },
      { status: 200 }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "Error deleting manga" },
      { status: 500 }
    );
  }
}
