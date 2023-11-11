"use client";
import style from "./page.module.css";

const Col = (props) => {
  const col = props.col;
  const colIndex = props.colIndex;
  const rowIndex = props.rowIndex;
  return (
    <>
      <div
        className={`${style.col} ${
          (rowIndex + colIndex) % 2 == 0 ? style.even : style.odd
        }`}
        onClick={() => {
          fetch("/api/assignment/chess", {
            method: "POST",
            body: JSON.stringify({
              i: rowIndex,
              j: colIndex,
            }),
          })
            .then((r) => r.json())
            .then((r) => {
              JSON.parse(r);
              console.log(r);
            });
        }}
      >
        {col}
      </div>
    </>
  );
};

export default Col;
