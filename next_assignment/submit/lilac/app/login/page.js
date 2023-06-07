export default function Login() {
  return (
    <div className="p-20">
      <h4>로그인</h4>
      <form action="/api/post/login" method="POST">
        <input name="id" placeholder="아이디" required />
        <input name="password" type="password" placeholder="비번" required />
        <button type="submit">접속!</button>
      </form>
    </div>
  );
}
