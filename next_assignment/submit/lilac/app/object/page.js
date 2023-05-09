"use client";
import { useState } from "react";
export default function Object() {
  let ob = ["first", "second", "third"]
  let [cnt, tocnt] = useState([0, 0, 0])
  return (
    <>
      {
      ob.map((ai, i)=> {
          return( 
              <div className="list-item">
                <h4>{ai}</h4>
                <p>{cnt[i]}</p>
                <button onClick={()=> {
                  let sorry = [...cnt]
                  sorry[i]++;
                  tocnt(sorry)
                }}>+</button>
              </div>
          )
        })
      }
    </>
  )
}
