import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";
import { authOptions } from '@/pages/api/auth/[...nextauth].js'
import { getServerSession } from 'next-auth'

export default async function handler(요청, 응답) {
    let session = await getServerSession(요청, 응답, authOptions);
    if(요청.method=="POST") {
        console.log(요청.body)
        const client = await connectDB
        const db = client.db("next-check")
        try {
            let fetchh = await db.collection("write").findOne({ _id : new ObjectId(요청.body)}) 
            console.log(fetchh);
            if(session.user.rules=="admin"||fetchh.author==undefined||fetchh.author==session.user.email) { //글 찾아서 본인이라면 
            let result = await db.collection("write").deleteOne({_id : new ObjectId(요청.body)})
            console.log(result)
            return 응답.redirect(500, "/list")
            }
            else {
                return 응답.redirect(302, "/error/no_parms!")
            }
        } catch (error) {
            return 응답.redirect(302, "/error/???");
        }
    }
}