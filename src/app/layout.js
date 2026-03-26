import "./globals.css";

export const metadata = {
  title: "Video Page",
  description: "Landing page with smart player",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}