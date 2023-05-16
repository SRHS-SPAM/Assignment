export default function Write() {
    return (
        <div className="p-20">
            <h4>글 작성</h4>
            <form action="/api/post/up" method="POST">
                <input name="title" placeholder="글 제목"/>
                <input name="content" placeholder="글 내용"/>
                <button type="submit">제출</button>
            </form>
        </div>
    )
}