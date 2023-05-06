"use client";
import { useState } from "react";
export default function Button() {
  let [cnt, tocnt] = useState(0)
  return (
    <div style={{float: "left"}}>
      <div>
        <button onClick={()=> tocnt(0)}>reset</button>
      </div>
      <div>
        <button onClick={()=> tocnt(cnt-1)}>-</button>{cnt} <button onClick={()=> tocnt(cnt+1)}>+</button>
      </div>
    </div>
  )
}
