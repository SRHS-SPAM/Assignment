import { authOptions } from '@/pages/api/auth/[...nextauth].js'
import { getServerSession } from 'next-auth'

export default async function Write() {
  let session = await getServerSession(authOptions);
  if(session) {
    return (
      <div className="p-20">
        <h4>글 작성</h4>
        <form action="/api/post/up" method="POST">
          <input name="title" placeholder="글 제목" />
          <input name="content" placeholder="글 내용" />
          <button type="submit">제출</button>
        </form>
      </div>
    );
  }
else {
  return (
    <div className="p-20">
      <h4>글 작성</h4>
        <input name="title" placeholder="권한이 없습니다!" />
        <input name="content" placeholder="로그인이 필요합니다!" />
    </div>
  );
}
}
