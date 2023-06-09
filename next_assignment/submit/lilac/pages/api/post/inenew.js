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
        if(session) {
        }
        else return 응답.status(500).json("there's no user")
        try {
            let result = await db.collection("iine").findOne({parent : papa, email: session.user.email})
            if(result) {
                return 응답.status(500).json("there's already Iine exist")
            }
            else {
                let result = await db.collection("iine").insertOne({parent : papa, email: session.user.email})
                console.log(result)
                let tIine = (await db.collection("write").findOne({_id : papa})).Iine
                let result2 = await db.collection("write").updateOne({_id : papa}, 
                    { $set : {Iine: tIine+1 } } ); 
                console.log(result2)
            }
            return 응답.status(200).json(result)
        } catch (error) {
            return 응답.status(500).json("sorry")
        }
    }
}