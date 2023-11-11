import style from "./page.module.css";

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
                <div
                  key={colIndex}
                  className={`${style.col} ${
                    rowIndex % 2 === 0
                      ? colIndex % 2 === 1
                        ? style.even
                        : style.odd
                      : colIndex % 2 === 0
                      ? style.even
                      : style.odd
                  }`}
                >
                  {piece}
                </div>
              ))
              .reverse()}
          </div>
        ))}
      </div>
    </main>
  );
}
