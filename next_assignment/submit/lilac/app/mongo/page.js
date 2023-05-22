import { connectDB } from "@/util/database";
import Link from "next/link";
export default async function List() {
  const db = (await connectDB).db("next-check");
  let result = await db.collection("write").find().toArray();
  return (
    <>
      {result.map((ai, i) => {
        return (
          <div className="list-item" key={i}>
            <h4>
              <Link href={`/detail/${ai._id}`}>{ai.title}</Link>
            </h4>
            <p>{ai.content}</p>
          </div>
        );
      })}
      <div className="list-item">
        <h4>글 짓기</h4>
        <Link href={"/write"}>
          <p>{"-->"}</p>
        </Link>
      </div>
    </>
  );
}
