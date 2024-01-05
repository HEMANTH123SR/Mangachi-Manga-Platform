import { connectDB } from "@/db";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    let url = new URL(req.url);
    const id = url.pathname.split("/")[3];
  } catch (err: any) {
    return NextResponse.json(
      {
        status: "unscucess",
        message: err.message || "Internal server error",
      },
      { status: 500 }
    );
  }
}
