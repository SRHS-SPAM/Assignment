"use client"

import { useEffect, useState } from "react"

export default function Iine({id}) {
    let [Iine, setIine] = useState();
    useEffect(()=>{
        fetch("/api/get/ineget", {method : "POST", body : `${id}`} )
        .then((r)=>{return r.json()})
        .then((r)=>{
            setIine(r)})
    },[])
    return (
        <div>
            <button onClick={()=>{
                fetch("/api/post/inenew", {method : "POST", body : id})
                .then((r)=>{
                    if(r.status == 200) {
                      fetch("/api/get/ineget", {method : "POST", body : `${id}`} )
        .then((r)=>{return r.json()})
        .then((r)=>{
            setIine(r)})

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
            }}>좋아요! ({Iine})</button>
            
        </div>
    )
}