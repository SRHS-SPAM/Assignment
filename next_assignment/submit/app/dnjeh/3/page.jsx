import Kan from "./kan";
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
        {a.map((ai, i) => (
            <div className={styles.row} key={i}>
              {ai.map((aj, j) => (
                  <Kan ind={i*10+j} kan={aj} key={j}/>
                )
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}
