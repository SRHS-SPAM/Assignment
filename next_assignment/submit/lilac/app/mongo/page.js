import { connectDB } from "@/util/database";
import Link from "next/link";
import ListItem from "./ListItem";
import { authOptions } from '@/pages/api/auth/[...nextauth].js'
import { getServerSession } from 'next-auth'
export default async function List() {
  const db = (await connectDB).db("next-check");
  let result = await db.collection("write").find().toArray();
  let session = await getServerSession(authOptions);
  let rules, email;
  if(session) {
    rules=session.user.rules;
    email=session.user.email;
  }
  result.map((ai, i)=>{
    result[i]._id=`${result[i]._id}`
})
  return (
    <>
      <ListItem result={result} email={email} rules={rules}/>
      {
        session?
      <div className="list-item">
        <h4>글 짓기</h4>
        <Link href={"/write"}>
          <p>{"-->"}</p>
        </Link>
      </div>
      :
      <></>
}
    </>
  );
}
