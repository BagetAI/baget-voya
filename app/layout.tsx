import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Voya | Pre-portioned Global Spice Kits",
  description: "Global flavor, zero waste. Chef-grade spice kits for the world's most iconic recipes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
