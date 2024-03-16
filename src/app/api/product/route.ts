import { NextResponse } from "next/server";
import {connectDB} from './db.js'
export async function GET(request: Request) {
    const client = await connectDB;
    const db = client.db("eobuba")
    
    let result = await db.collection('products').find().toArray();
  return NextResponse.json({ result });
}
