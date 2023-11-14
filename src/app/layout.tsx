import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../app/components/Navbar/Navbar";
import Sidebar from "../app/components/Sidebar/Sidebar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/patlogo.png",
  },
  title: "Patagonia Distribution",
  description: "Patagonia Distribution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar desktop">
          <Navbar />
        </div>

        <div className="sidebar mobile">
          <Sidebar />
        </div>
        {children}
      </body>
    </html>
  );
}
