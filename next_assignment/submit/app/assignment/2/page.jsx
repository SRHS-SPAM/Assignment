import style from "./page.module.css";

export default function Page() {
  const chessList = [
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
  ];

  return (
    <div className={style.container}>
      <div className={style.chessboard}>
        {chessList.map((row, i) => (
          <div className={style.row} key={i}>
            {row.map((col, j) => (
              <div
                className={`${style.col} ${
                  i % 2 === 0
                    ? j % 2 === 0
                      ? style.even
                      : style.odd
                    : j % 2 === 0
                    ? style.odd
                    : style.even
                }`}
                key={j}
              >
                {col}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
