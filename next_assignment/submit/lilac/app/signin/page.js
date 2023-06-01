import Link from "next/link";
export default function Signin() {
    return (
        <>
            <form method="post" name="signup" action="/api/post/signin">
                <div className="signup_main">
                    <div className="signup_stroke">
                        <div className="signup_box">
                            <div className="signup_h1">회원가입</div>
                            <div className="signup_id_box">
                                <input
                                    id="signup_email"
                                    type="email"
                                    placeholder="이메일"
                                    name="email"
                                />
                                <input
                                    id="signup_pwd"
                                    type="password"
                                    placeholder="비밀번호"
                                    name="password"
                                />
                                <input
                                    id="signup_id"
                                    type="text"
                                    placeholder="아이디"
                                    name="id"
                                    required
                                />
                                <input
                                    id="signup_name"
                                    type="text"
                                    placeholder="이름"
                                    name="name"
                                />
                                <input
                                    id="signup_tel"
                                    type="tel"
                                    placeholder="전화번호"
                                    name="tel"
                                />
                                <div className="certification">
                                    <input
                                        id="signup_cer"
                                        type="text"
                                        placeholder="인증번호 입력"
                                    />
                                    <div className="cer_btn">인증번호</div>
                                </div>
                                <div className="student_info">
                                    <input
                                        id="ab"
                                        type="text"
                                        placeholder="학년"
                                        name="grade"
                                    />
                                    <input
                                        id="ab"
                                        type="text"
                                        placeholder="반"
                                        name="classs"
                                    />
                                    <input
                                        id="ab"
                                        type="text"
                                        placeholder="번호"
                                        name="num"
                                    />
                                </div>
                                <div className="signup_login">
                                    <span>계정이 있으신가요?</span>
                                    <Link href="/login">
                                        <span className="sdl">로그인</span>
                                    </Link>
                                </div>
                                <button className="signup_button" type="submit">
                                    가입
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
