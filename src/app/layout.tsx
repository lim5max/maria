import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miraligal - Концепты",
  description: "Концепты сайта для юридической практики",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
