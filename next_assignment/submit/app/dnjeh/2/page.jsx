import styles from "./page.module.css";
export default function Page() {
  const a = [
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
    <div className={styles.container}>
      <div className={styles.chessboard}>
        {a.map((ai, i) => {
          return (
            <div className={styles.row} key={i}>
              {ai.map((aj, j) => {
                return (
                  <div
                    className={`${styles.col} ${
                      (i + j) % 2 == 0 ? styles.even : styles.odd
                    }`}
                    key={j}
                  >
                    {aj}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
