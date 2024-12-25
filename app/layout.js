import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "College Website",
  description: "Developed by - Faiz Ali",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
