import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
    if(요청.method=="POST") {
        console.log(요청.body)
        const client = await connectDB
        const db = client.db("next-check")
        try {
            let result = await db.collection("write").deleteOne({_id : new ObjectId(요청.body)})
            console.log(result)
            return 응답.redirect(500, "/list")
        } catch (error) {
            return 응답.redirect(302, "/error/???");
        }
    }
}