import { connectDB } from "@/util/database";
import { authOptions } from '@/pages/api/auth/[...nextauth].js'
import { getServerSession } from 'next-auth'

export default async function handler(요청, 응답) {
  let session = await getServerSession(요청, 응답, authOptions);
  if (요청.method == "POST") {
    const client = await connectDB;
    const db = client.db("next-check");
    if (요청.body.title == "" || 요청.body.content == "") {
      return 응답.redirect(302, "/error/space_attack!");
    }
    if(session) {
      요청.body.author = session.user.email
    }
    else return 응답.redirect(302, "/error/there's_no_user..");
    try {
      let result = await db.collection("write").insertOne(요청.body);
      return 응답.redirect(302, "/mongo");
    } catch (error) {
      return 응답.redirect(302, "/error");
    }
  }
}
