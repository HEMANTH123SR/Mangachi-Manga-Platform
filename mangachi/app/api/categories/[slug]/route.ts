import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/db/index";
import { Manga } from "@/db/modules/manga.model";
import { MangaType } from "@/lib/types";
export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const url = new URL(req.url);
    const id = url.pathname.split("/")[3];
    if (id == "staff-picks") {
      const res = await Manga.find({}).limit(10);
      const mangas: MangaType[] = res;
      const filtredMangas = mangas.map((manga) => {
        let coverImage = manga.coverImage;
        if (coverImage.includes("https://")) {
          coverImage = `https://cloud.appwrite.io/v1/storage/buckets/65ab31d194c87473caab/files/65b3d2b132ccbf5ea6de/view?project=65ab3113d00c39e45407&mode=admin`;
        } else {
          coverImage = `https://cloud.appwrite.io/v1/storage/buckets/65ab31d194c87473caab/files/${manga.coverImage}/view?project=65ab3113d00c39e45407&mode=admin`;
        }

        return {
          _id: manga._id,
          title: manga.mangaName,
          coverImage,
        };
      });
      return NextResponse.json(
        {
          data: filtredMangas,
          message: "success",
        },
        { status: 200 }
      );
    } else if (id == "recently-added") {
      const res = await Manga.find({}).sort({ createdAt: -1 }).limit(10);
      const mangas: MangaType[] = res;
      const filtredMangas = mangas.map((manga) => {
        let coverImage = manga.coverImage;
        if (coverImage.includes("http")) {
          coverImage = `https://cloud.appwrite.io/v1/storage/buckets/65ab31d194c87473caab/files/65b3d2b132ccbf5ea6de/view?project=65ab3113d00c39e45407&mode=admin`;
        } else {
          coverImage = `https://cloud.appwrite.io/v1/storage/buckets/65ab31d194c87473caab/files/${manga.coverImage}/view?project=65ab3113d00c39e45407&mode=admin`;
        }

        return {
          _id: manga._id,
          title: manga.mangaName,
          coverImage,
          author: manga.author,
          time: manga.createdAt,
        };
      });
      return NextResponse.json(
        {
          data: filtredMangas,
          message: "success",
        },
        { status: 200 }
      );
    } else if (id == "most-readed") {
      const res = await Manga.find().sort({ "views.count": -1 }).limit(10);
      const mangas: MangaType[] = res;
      const filtredMangas = mangas.map((manga) => {
        let coverImage = manga.coverImage;
        if (coverImage.includes("http")) {
          coverImage = `https://cloud.appwrite.io/v1/storage/buckets/65ab31d194c87473caab/files/65b3d2b132ccbf5ea6de/view?project=65ab3113d00c39e45407&mode=admin`;
        } else {
          coverImage = `https://cloud.appwrite.io/v1/storage/buckets/65ab31d194c87473caab/files/${manga.coverImage}/view?project=65ab3113d00c39e45407&mode=admin`;
        }

        return {
          _id: manga._id,
          title: manga.mangaName,
          coverImage,
          author: manga.author,
          time: manga.createdAt,
        };
      });
      return NextResponse.json(
        {
          data: filtredMangas,
          message: "success",
        },
        { status: 200 }
      );
    } else if (id == "most-liked") {
      const res = await Manga.find({});
      const mangas: MangaType[] = res;
      const filtredMangas = mangas.map((manga) => {
        let coverImage = manga.coverImage;
        if (coverImage.includes("http")) {
          coverImage = `https://cloud.appwrite.io/v1/storage/buckets/65ab31d194c87473caab/files/65b3d2b132ccbf5ea6de/view?project=65ab3113d00c39e45407&mode=admin`;
        } else {
          coverImage = `https://cloud.appwrite.io/v1/storage/buckets/65ab31d194c87473caab/files/${manga.coverImage}/view?project=65ab3113d00c39e45407&mode=admin`;
        }

        return {
          _id: manga._id,
          title: manga.mangaName,
          coverImage,
          author: manga.author,
          time: manga.createdAt,
        };
      });
      return NextResponse.json(
        {
          data: filtredMangas,
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
