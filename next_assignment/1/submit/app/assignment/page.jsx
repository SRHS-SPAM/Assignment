import Link from "next/link";
import styles from "./assignment.module.css";

export default function assignment() {
  const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className={styles.box}>
      {numberList.map((arg, i) => (
        <Link href={"/assignment/" + arg} key={i}>
          <div className={styles.number_box}>{arg}</div>
        </Link>
      ))}
    </div>
  );
}
