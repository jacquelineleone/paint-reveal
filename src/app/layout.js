import "./globals.css";

export const metadata = {
  title: "Jacqueline Leone",
  description: "Portfolio in progress",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
