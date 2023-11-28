import style from "./page.module.css";
import { useState } from "react";
export default function Col(props) {
    let [coloor, setcoloor] = useState(false);
    return (
        <div
            onClick={() => {
                fetch("/api/min/chess?coloor=" + coloor)
                    .then((r) => r.json())
                    .then((result) => {
                        setcoloor(result);
                        console.log(result);
                    });
            }}
            className={`${style.col} ${
                coloor
                    ? style.gren
                    : props.rowIndex % 2 === 0
                    ? props.colIndex % 2 === 1
                        ? style.even
                        : style.odd
                    : props.colIndex % 2 === 0
                    ? style.even
                    : style.odd
            }`}
        >
            {props.piece}
        </div>
    );
}
