import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css"
import HomeHeader from "@/components/shared/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vote",
  description: "School Online Voting System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body className={inter.className}>
        <main className="pt-16 h-screen overflow-x-hidden">
          <HomeHeader/>
          {children}
        </main>
      </body>
    </html>
  );
}
