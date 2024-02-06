import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/db/index";
import { Manga } from "@/db/modules/manga.model";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const url = new URL(req.url);
    const id = url.pathname.split("/")[3];
    console.log("id :: ", id);
    const manga = await Manga.findById(id);
    return NextResponse.json({ status: "success", data: manga });
  } catch (err: any) {
    return NextResponse.json(
      {
        status: "unsuccess",
        message: err?.message || err.message || "internal server error",
      },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    await connectDB();
    const id = req.nextUrl.pathname.split("/")[3];
    const data = await req.json();
    console.log("data :: ", data);
    const test = {
      likes: { likedBy: ["user_2bZTECWQS9Gw98DlxoCqaSmZsg"], likeCount: 1 },
    };
    console.log(typeof data);
    console.log(typeof test);
    const manga = await Manga.findByIdAndUpdate(id, data);
    console.log("manga :: ", manga);
    return NextResponse.json(
      { status: "success", data: manga },
      { status: 201 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { err: err.message || "internal server error" },
      { status: 500 }
    );
  }
}

// export async function DELETE(req: NextRequest) {
//   try {
//     await connectDB();
//     const url = new URL(req.url);
//     const id = url.pathname.split("/")[3];
//     await Manga.findByIdAndDelete(id);
//     return NextResponse.json({ status: 204 });
//   } catch (err: any) {
//     return NextResponse.json(
//       {
//         status: "unsuccess",
//         message: err?.message || err.message || "internal server error",
//       },
//       { status: 500 }
//     );
//   }
// }
