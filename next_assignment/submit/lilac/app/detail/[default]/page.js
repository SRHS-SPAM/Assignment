import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment"
import Iine from "./Iine" 
export default async function Detail(props) {
  const db = (await connectDB).db("next-check");
  /*try {*/
    let result = await db
      .collection("write")
      .findOne({ _id: new ObjectId(props.params.default) });
    console.log(props);
    return (
      <div>
        <h4>상세페이지</h4>
        <h4>{result.title}</h4>
        <p>{result.content}</p>
        <Comment id={props.params.default}/>
        <br></br>
        <Iine id={props.params.default}/>
      </div>
    );
  /*} catch (error) {
    return (
      <div>
        <h4>상세페이지</h4>
        <h4>존재하지 않는 글 제목입니다.</h4>
        <p>존재하지 않는 본문입니다.</p>
      </div>
    );
  }*/
}
