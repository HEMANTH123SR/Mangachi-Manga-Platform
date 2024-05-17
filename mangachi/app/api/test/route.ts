import { connectDB } from "@/db/index";
import { Manga } from "@/db/modules/manga.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const result = await Manga.updateMany(
      {},
      {
        $set: {
          thanksReceives: [],
          savedBy: [],
        },
      }
    );
    console.log(`${result} documents updated successfully`);
    return NextResponse.json({ status: "success" }, { status: 200 });
  } catch (err: any) {
    console.error("Error updating documents:", err);
    return NextResponse.json({ status: "unsuccess" }, { status: 500 });
  }
}
