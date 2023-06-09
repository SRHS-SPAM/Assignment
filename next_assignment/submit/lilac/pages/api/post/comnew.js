import { connectDB } from "@/util/database"
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth].js'
import { ObjectId } from "mongodb"

export default async function handler(요청, 응답) {
    요청.body=JSON.parse(요청.body)
    console.log(요청.body)
    let session = await getServerSession(요청, 응답, authOptions);
    if(요청.method=="POST") {
        const client = await connectDB
        const db = client.db("next-check")
        요청.body.parent=new ObjectId(요청.body.parent)
        if(session) {
            요청.body.author = session.user.email
            요청.body.name = session.user.name
        }
        else return 응답.status(500).json("there's no user")
        if(요청.body.content=="") return 응답.status(500).json("there's no comment")
        try {
            let result = await db.collection("comment").insertOne(요청.body)
            return 응답.status(200).json(result)
        } catch (error) {
            return 응답.status(500).json("sorry")
        }
    }
}