"use client"

export default function Error({error, reset}) {
    return (
        <>
        <h4>내 여친처럼 없는 페이지</h4>
        <button onClick={()=>{reset()}}>버튼</button>
        </>
    )
}