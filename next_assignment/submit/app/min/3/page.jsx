"use client";
import style from "./page.module.css";
import Col from "./Col";
const chess = [
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
];

export default function Chessboard() {
    return (
        <main className={style.container}>
            <div className={style.chessboard}>
                {chess.map((row, rowIndex) => (
                    <div key={rowIndex} className={style.row}>
                        {row
                            .map((piece, colIndex) => (
                                <Col
                                    key={colIndex}
                                    colIndex={colIndex}
                                    rowIndex={rowIndex}
                                    piece={piece}
                                />
                            ))
                            .reverse()}
                    </div>
                ))}
            </div>
        </main>
    );
}
