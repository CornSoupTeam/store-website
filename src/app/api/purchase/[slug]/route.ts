// import { authOptions } from '../../auth/[...nextauth]/route'
// import {connectDB} from '../../db.js'
// import { getServerSession } from 'next-auth'
// type Params = {
//   slug: string
// }
// export async function POST(context: { params: Params }) {

//   const id = context.params;
//   const session = await getServerSession(authOptions)

//   const ImageLink = session?.user?.image
//   const userIdMatch = ImageLink?.match(/\/avatars\/(\d+)\//) ?? [];
//   const userId = userIdMatch[1];

//   const client = await connectDB;
//   const db = client.db("eobuba")
//   let user = await db.collection('users').findOne({"id" : userId})
  
//   let product = await db.collection('products').findOne(id)
//   if (product !== null && product !== undefined && product.length !== 0 && 
//     user !== null && user !== undefined && user.length !== 0) {
//     if (user.point < product.price) {
//       user.point - product.price
//       return Response.json({'message': true})
//     }
// } return Response.json({'message': false})
// }