import type { Metadata } from "next";
import "./globals.css";
import { MouseFollower } from "@/components/MouseFollower";
import { Header } from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Jean Jr. Portfólio",
  description: "Portfólio Jean Jr. Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-color-[#0a0e0d] flex flex-col items-center`}>
        <Header />
        {children}
        <MouseFollower />
      </body>
    </html>
  );
}
