"use client";
import { useState } from "react";
import style from "./page.module.css";

const Col = (props) => {
  const [clicked, setClicked] = useState(false);
  const col = props.col;
  const colIndex = props.colIndex;
  const rowIndex = props.rowIndex;
  return (
    <>
      <div
        className={`${style.col} ${
          (rowIndex + colIndex) % 2 == 0 ? style.even : style.odd
        } ${clicked == true ? style.clicked : ""}`}
        onClick={() => {
          fetch("/api/assignment/chess", {
            method: "POST",
            body: JSON.stringify({
              rowIndex: rowIndex,
              colIndex: colIndex,
            }),
          })
            .then((r) => r.json())
            .then((r) => {
              const result = JSON.parse(r);
              if (colIndex == result.colIndex && rowIndex == result.rowIndex) {
                setClicked(true);
              }
            });
        }}
      >
        {col}
      </div>
    </>
  );
};

export default Col;
