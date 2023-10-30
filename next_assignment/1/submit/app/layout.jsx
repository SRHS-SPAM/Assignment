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
          <div className="home_box">Home</div>
        </nav>
        {children}
      </body>
    </html>
  );
}
