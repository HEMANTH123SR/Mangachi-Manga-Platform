import {connectDB} from "@/db/index"


import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { name } = await req.json();
  try {
    await connectDB();
    // await Test.create({ name });
  } catch (err) {
    console.log(err);
  }
  return NextResponse.json({ msg: "" });
}
