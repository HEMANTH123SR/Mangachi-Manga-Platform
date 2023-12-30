import { NextResponse } from "next/server";
import {Mangas} from "@/app/data/most-readed"
export function GET(){
    return NextResponse.json(Mangas)
}