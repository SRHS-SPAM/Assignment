import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "즐거운 과제 제출",
  description: "과제 제출 합시다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <Link href={"/"}>
            <div className="home_box">Home</div>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
