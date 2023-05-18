import { connectDB } from "@/util/database";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    const client = await connectDB;
    const db = client.db("next-check");
    if (요청.body.title == "" || 요청.body.content == "")
      return 응답.redirect(302, "/error");
    try {
      try {
        let result = await db
          .collection("next-check")
          .findOne({ title: 요청.body.title });
        return 응답.redirect(302, "/error");
      } catch (error) {
        let result = await db.collection("write").insertOne(요청.body);
        return 응답.redirect(302, "/welcome");
      }
    } catch (error) {
      return 응답.redirect(302, "/error");
    }
  }
}
