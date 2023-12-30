import { NextResponse } from "next/server";
import { Mangas } from "@/app/data/most-liked";
export function GET() {
  return NextResponse.json(Mangas);
}
