import { Test } from "@/models/test.model";
import connectMongo from "@/utils/connectMongo";

import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { name } = await req.json();
  try {
    await connectMongo();
    await Test.create({ name });
  } catch (err) {
    console.log(err);
  }
  return NextResponse.json({ msg: "" });
}
