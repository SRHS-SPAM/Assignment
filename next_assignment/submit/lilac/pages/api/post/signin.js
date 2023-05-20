import { connectDB } from "@/util/database";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    const client = await connectDB;
    const db = client.db("next-check");
    if (요청.body.id == "" || 요청.body.password == "")
      return 응답.redirect(302, "/error");
    try {
      let result = await db
        .collection("information")
        .findOne({ id: 요청.body.id });
      if (result != null) {
        return 응답.redirect(302, "/error");
      } else {
        let result = await db.collection("information").insertOne(요청.body);
        return 응답.redirect(302, "/welcome");
      }
    } catch (error) {
      return 응답.redirect(302, "/error");
    }
  }
}
