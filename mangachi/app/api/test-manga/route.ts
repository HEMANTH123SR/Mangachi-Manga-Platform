// import { connectDB } from "@/db/index";
// import { Manga } from "@/db/modules/manga.model";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     await connectDB();
//     await Manga.updateMany(
//       { "views.count": 0 },
//       { "views.count": Math.floor(Math.random() * 201) + 1 }
//     );

//     return NextResponse.json({
//       status: "success",
//       message: "Views updated successfully",
//     });
//   } catch (err: any) {
//     return NextResponse.json(
//       {
//         status: "unsuccess",
//         message: err?.message || err._message || "Internal server error",
//       },
//       { status: 500 }
//     );
//   }
// }
