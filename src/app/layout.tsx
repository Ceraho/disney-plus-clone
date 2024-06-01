import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Watch new Originals, blockbusters and series - Disney+",
  description: "The streaming home of Disney, Marvel, Pixar, Star Wars, National Geographic, and so much more. Bringing the best movies, shows, and Originals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-heroImage bg-[length:150%] bg-top bg-no-repeat md:bg-contain'}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
