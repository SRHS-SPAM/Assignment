"use client"

import { useEffect, useState } from "react"

export default function Comment({id}) {
    let [comment, setComment] = useState();
    let [comments, setComments] = useState();
    useEffect(()=>{
        fetch("/api/get/comget", {method : "POST", body : `${id}`} )
        .then((r)=>{return r.json()})
        .then((r)=>{
            setComments(r)})
    },[])
    return (
        <div>
            {
                comments==undefined?
                undefined
                :
                (
                comments.length>0?
                comments.map((ai, i)=>{
                    return (
                        <p>{ai.name} : {ai.comment}</p>
                    )
                })
                :
                <p>이곳은 조용하네요..</p>
                )
            }
            <br></br>
            <input onChange={(e)=>{setComment(e.target.value)}}/>
            <button onClick={()=>{
                console.log(comment)
                fetch("/api/post/comnew", {method : "POST", body : 
                `{\"comment\" : \"${comment}\", \"parent\" : \"${id}\"}`})
                .then((r)=>{
                    if(r.status == 200) {
                      fetch("/api/get/comget", {method : "POST", body : `${id}`} )
        .then((r)=>{return r.json()})
        .then((r)=>{
            setComments(r)})

            return r.json()
                    } else {
                    }
                  })
                  .then((result)=>{ 
                    //성공시 실행할코드
                  }).catch((error)=>{
                    //인터넷문제 등으로 실패시 실행할코드
                    console.log(error)
                  })
            }}>댓글전송</button>
            
        </div>
    )
}