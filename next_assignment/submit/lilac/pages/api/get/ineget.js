import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(요청, 응답) {
    console.log(요청.body)
    if(요청.method=="POST") {
        const client = await connectDB
        const db = client.db("next-check")
        let papa = new ObjectId(요청.body)
        try {
            let result = await db.collection("write").findOne({_id : papa})
            let ret = result.Iine == undefined ?(
                await db.collection("write").updateOne({_id : papa}, 
                    { $set : {Iine : 0} } ),
            응답.status(500).json(0)
            )
            :
            응답.status(500).json(result.Iine)
            return ret
        } catch (error) {
            return 응답.status(500).json("sorry")
        }
    }
}