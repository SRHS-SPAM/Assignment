import { connectDB } from "@/util/database";
import Link from "next/link";
import ListItem from "./ListItem";
export default async function List() {
  const db = (await connectDB).db("next-check");
  let result = await db.collection("write").find().toArray();
  result.map((ai, i)=>{
    result[i]._id=`${result[i]._id}`
})
  return (
    <>
      <ListItem result={result}/>
      <div className="list-item">
        <h4>글 짓기</h4>
        <Link href={"/write"}>
          <p>{"-->"}</p>
        </Link>
      </div>
    </>
  );
}
