import { NextResponse,NextRequest } from "next/server";
import { books } from "@/data";

export async function GET(request:NextRequest,{params}:{params:{id:string}}) {

    const bookid=parseInt(params.id);

    const book= books.find((book)=>book.id===bookid);

    return NextResponse.json({
        book,
    })
    
}