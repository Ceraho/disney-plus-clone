import Image from "next/image";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full md:h-auto md:min-h-full">
      <body className={inter.className + " bg-loginPageGradient h-full"}>
        <div className="h-full flex flex-col items-center pt-5 md:pb-16">
        <Image
            src={"/DisneyLogo.svg"}
            width={125}
            height={80}
            className="pb-5 md:w-[150px]"
            alt="Disney Logo"
          />
          {children}
        </div>
      </body>
    </html>
  );
}
