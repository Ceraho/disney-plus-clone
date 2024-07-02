import { Inter } from "next/font/google";
import "@/app/globals.css";
import HomeNavbar from "@/components/homeNavbar";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Disney+",
  description:
    "It’s movie night at Disney+. Stream now for access to hit movies, original releases, epic adventures, animated classics, and favorite TV series.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={inter.className + " h-full bg-homeBg bg-no-repeat bg-cover"}
      >
        <HomeNavbar />
        <div className="pt-20 px-10">{children}</div>
      </body>
    </html>
  );
}
