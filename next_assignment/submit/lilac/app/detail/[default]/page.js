import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
export default async function Detail(props) {
  const db = (await connectDB).db("next-check");
  try {
    let result = await db.collection("write");
    console.log(props).findOne({ _id: new ObjectId(props.params.default) });
    return (
      <div>
        <h4>상세페이지</h4>
        <h4>{result.title}</h4>
        <p>{result.content}</p>
      </div>
    );
  } catch (error) {
    return (
      <div>
        <h4>상세페이지</h4>
        <h4>존재하지 않는 글 제목입니다.</h4>
        <p>존재하지 않는 본문입니다.</p>
      </div>
    );
  }
}
