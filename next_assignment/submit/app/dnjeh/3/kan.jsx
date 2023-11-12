"use client";
import { useState } from "react";
import styles from "./page.module.css";
export default function Kan(props) {
  const [isClick, setClick] = useState(false);
  const ind = parseInt(props.ind);
  const colcolor = isClick
    ? styles.clicked
    : (parseInt(ind / 10) + ind) % 2 == 0
    ? styles.even
    : styles.odd;
  console.log(typeof((ind / 10 + ind) % 2))
  const func = () => {
    fetch("/api/dnjeh/chess", {
      method: "POST",
      body: JSON.stringify({
        ind: ind,
      }),
    })
      .then((r) => r.json())
      .then((r) => {
        const result = JSON.parse(r);
        if (ind == result.ind) {
          setClick(!isClick);
        }
      });
  };
  return (
    <div className={`${styles.col} ${colcolor}`} onClick={func}>
      {props.kan}
    </div>
  );
}
