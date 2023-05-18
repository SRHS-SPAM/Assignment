export default function Write() {
  return (
    <div className="p-20">
      <h4>회원 가입</h4>
      <form action="/api/post/signin" method="POST">
        <input name="title" placeholder="아이디" />
        <input name="content" placeholder="비번" />
        <button type="submit">가입</button>
      </form>
    </div>
  );
}
