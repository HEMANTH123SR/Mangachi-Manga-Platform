import { NextResponse } from "next/server";
import { connectDB } from "@/db/index";
import { Manga } from "@/db/modules/manga.model";

export async function GET() {
    try {
        await connectDB();
        const mangas = await Manga.find({
            _id: {
                $in: [
                    "65b32ac41aa77225bfe83f4d",
                    "65b334736f6a35af1a8e604c",
                    "65b3355e6f6a35af1a8e6065",
                    "65b336f0d31e6a11e98f059a",
                    "65b337b55a97bb129c922205",
                    "65b338b55a97bb129c922213",
                    "65b339c35a97bb129c922220",
                    "65b612d1b26ebb98ec1f947c",
                ],
            },
        });
        return NextResponse.json(
            { status: "success", data: mangas },
            { status: 200 }
        );
    } catch (err: any) {
        return NextResponse.json(
            {
                status: "unsucess",
                message: err?.message || err._message || "Internal server error",
            },
            { status: 500 }
        );
    }
}
