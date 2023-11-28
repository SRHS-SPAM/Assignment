import Col from "./Col";
import style from "./page.module.css";

const Page = () => {
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
        {chessList.map((row, rowIndex) => (
          <div className={style.row} key={rowIndex}>
            {row.map((col, colIndex) => (
              <div key={colIndex}>
                <Col rowIndex={rowIndex} colIndex={colIndex} col={col} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
