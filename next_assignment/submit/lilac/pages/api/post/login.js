import { connectDB } from "@/util/database";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    const client = await connectDB;
    const db = client.db("next-check");
    if (요청.body.id == "" || 요청.body.password == "")
      return 응답.redirect(302, "/error/space_attacked!");
    try {
      let result = await db
        .collection("information")
        .findOne({ id: 요청.body.id, password: 요청.body.password });
      if (result == null) {
        return 응답.redirect(302, "/error/dexist_user!&&incorrectpass!");
      } else {
        return 응답.redirect(302, "/welcome");
      }
    } catch (error) {
      return 응답.redirect(302, "/error");
    }
  }
}
