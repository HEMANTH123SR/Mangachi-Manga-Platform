import { connectDB } from "@/db/index";
import { Manga } from "@/db/modules/manga.model";
import { NextResponse, NextRequest } from "next/server";
export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const url = new URL(req.url);
    const id = url.pathname.split("/")[3];
    if (id == "staff-picks") {
      const res:any = await Manga.find({});
      const data = res.data.filter((item:any) => item.staffPicks == true);
      return NextResponse.json(
        {
          data,
          message: "success",
        },
        { status: 200 }
      );
    } else if (id == "recently-added") {
      const data = await Manga.find({});

      return NextResponse.json(
        {
          data,
          message: "success",
        },
        { status: 200 }
      );
    } else if (id == "most-readed") {
      const data = await Manga.find({});
      return NextResponse.json(
        {
          data,
          message: "success",
        },
        { status: 200 }
      );
    } else if (id == "most-liked") {
      const data = await Manga.find({});
      return NextResponse.json(
        {
          data,
          message: "success",
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ status: 404 });
    }
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
