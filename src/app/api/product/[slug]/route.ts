import { NextResponse } from "next/server";
import {connectDB} from '../../db.js'
type Params = {
  slug: string
}
export async function GET(request: Request, context: { params: Params }) {
    const client = await connectDB;
    const id = context.params.slug;
    const db = client.db("eobuba")
    let result = await db.collection('products').findOne({'count': Number(id)})
    const resultArray = [];

    if (result) {
        resultArray.push(result);
    }
    
  return NextResponse.json({ resultArray });
}
