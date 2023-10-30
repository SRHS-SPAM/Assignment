import Link from "next/link";
import styles from "./main.module.css";

export default function Main(props) {
  let enable = 5;

  const numberList = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
  ];

  return (
    <div className={styles.container}>
      {numberList.map((args, i) => (
        <div className={styles.box} key={i}>
          {args.map((arg, j) => (
            <Link href={"/" + props.url + "/" + arg} key={j}>
              <div
                className={`${styles.number_box} ${
                  arg <= enable ? styles.enable_box : ""
                } ${arg <= props.complete ? styles.complete_box : ""}`}
              >
                {arg}
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
