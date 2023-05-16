import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
export default async function Detail(props) {
    const db = (await connectDB).db("next-check")
    let result = await db.collection("write").findOne({ _id : new ObjectId(props.params.default)})
    console.log(props)
    return (
        <div>
            <h4>상세페이지</h4>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
        </div>
    )
}