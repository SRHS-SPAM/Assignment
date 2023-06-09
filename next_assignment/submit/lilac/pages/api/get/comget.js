import { connectDB } from "@/util/database"
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth].js'
import { ObjectId } from "mongodb"

export default async function handler(요청, 응답) {
    console.log(요청.body)
    let session = await getServerSession(요청, 응답, authOptions);
    if(요청.method=="POST") {
        const client = await connectDB
        const db = client.db("next-check")
        let papa = new ObjectId(요청.body)
        try {
            let result = await db.collection("comment").find({parent : papa}).toArray()
            return 응답.status(500).json(result)
        } catch (error) {
            return 응답.status(500).json("sorry")
        }
    }
}