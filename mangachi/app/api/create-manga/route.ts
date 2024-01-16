import { connectDB } from "@/db/index";
import { NextRequest, NextResponse } from "next/server";

export default async function POST(req: NextRequest) {
  try {
    await connectDB();
    const data = await req.json();
    console.log(data);
    return NextResponse.json({ message: "success" });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "error" });
  }
}
