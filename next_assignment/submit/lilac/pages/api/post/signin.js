import { connectDB } from "@/util/database";
import bcrypt from "bcrypt"

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    const client = await connectDB;
    const db = client.db("next-check");
    if (요청.body.tel == "" || 요청.body.email == "" || 요청.body.id == "" || 요청.body.password == "")
      return 응답.redirect(302, "/error/space_attack!");
    try {
      let hash = await bcrypt.hash(요청.body.password, 10);
      요청.body.password = hash;
      let result = await db
        .collection("information")
        .findOne({ email: 요청.body.email });
      if (result != null) {
        return 응답.redirect(302, "/error/exist_user!");
      } else {
        let result = await db.collection("information").insertOne(요청.body);
        console.log(요청.body)
        return 응답.redirect(302, "/welcome");
      }
    } catch (error) {
      return 응답.redirect(302, "/error");
    }
  }
}
