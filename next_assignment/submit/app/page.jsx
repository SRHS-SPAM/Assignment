import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const nameList = [
    { name: "지민철", url: "/" },
    { name: "김도원", url: "/dnjeh" },
  ];
  return (
    <main>
      <div className={styles.up_box}>
        <Link href={"/assignment"}>
          <div className={styles.announcement}>과제 보러가기!</div>
        </Link>
      </div>
      <div className={styles.down_box}>
        {nameList.map((arg, i) => (
          <Link href={arg.url} key={i}>
            <div className={styles.name_box}>{arg.name}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
