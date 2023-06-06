"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function ListItem(props) {
    return (
    <>
        {
        props.result.map((ai, i) => {
            return (
                <div className="list-item" key={i}>
                    <Link href={`/detail/${ai._id}`}>
                        <h4>{ai.title}</h4>
                    </Link>
                    <p>{ai.content}</p>
                    {
                        props.rules=="admin"||props.email==ai.author||ai.author==undefined?
                    <p onClick={(e)=>{
                        fetch("/api/post/del", {
                            method : "POST", 
                            body : ai._id
                        }).then(()=>{
                            e.target.parentElement.style.opacity = 0
                            setTimeout(()=>{
                                e.target.parentElement.style.display = "none"
                            }, 1000)
                        })
                    }}>remove</p>
                    :
                    <></>
                    }
                </div>
                )
            })
        }
    </>
    )
}