import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miralegal — Мария Мирошникова",
  description: "Мария — надежный юридический советник с опытом более 25 лет в вопросах создания и развития бизнеса, инвестиций, покупки и продажи активов",
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
