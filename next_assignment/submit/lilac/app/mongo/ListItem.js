"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function ListItem({result}) {
    return (
    <>
        {
        result.map((ai, i) => {
            return (
                <div className="list-item" key={i}>
                    <Link href={`/detail/${ai._id}`}>
                        <h4>{ai.title}</h4>
                    </Link>
                    <p>{ai.content}</p>
                    <p onClick={()=>{
                        fetch("/api/post/del", {
                            method : "POST", 
                            body : ai._id
                        })
                    }}>remove</p>
                </div>
                )
            })
        }
    </>
    )
}