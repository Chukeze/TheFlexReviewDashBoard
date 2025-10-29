import { NextResponse } from "next/server";
import prisma from '@/lib/prisma'

//get a property either by id or slug and then query the listing table to get the listing
//if the table doesn't include the reviews for the property it then queries the reviews table
//to get reviews for the property then it will filter the reviews for that property based on
//if that review has been approved or not

export async function GET() {

    try{
        const property = await prisma.listing.findMany({});
    }
    catch(err:any){

    }

    return NextResponse.json({ ok: true });
}