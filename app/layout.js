import "./globals.css";

export const metadata = {
  title: "College Website",
  description: "Developed by - Faiz Ali",
  keywords: ["college website"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
