import { NextResponse } from "next/server";
import {Mangas} from "@/app/data/recently-added"
export function GET(){
    return NextResponse.json(Mangas)
}