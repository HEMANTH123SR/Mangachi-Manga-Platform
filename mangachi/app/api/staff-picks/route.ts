import {  NextResponse } from "next/server";
import {Mangas} from "@/app/data/staff-picks"
export function GET(){
return NextResponse.json(Mangas)
}
