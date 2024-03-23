import { getServerSession } from "next-auth";
import {connectDB} from '../../db.js'
type Params = {
  slug: string
}
import {authOptions} from "../auth/[...nextauth]/route";


export async function POST(context: { params: Params }) {
  console.log('d')

    const session = await getServerSession(authOptions);
    console.log(session)

    if (session != null) {
        console.log(session.user?.image)
        console.log('gd')
    }
    // const client = await connectDB;
    // const id = context.params.slug;
    // const db = client.db("eobuba")
    // let result = await db.collection('products').findOne({'count': Number(id)})
    // const resultArray = [];

    // if (result) {
    //     resultArray.push(result);
    // }
    
  return 'g';
}
