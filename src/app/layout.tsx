import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dorijan Tomić - Creative Developer",
  description:
    "Creative developer based in Osijek, crafting digital experiences at Mono. I turn ideas into beautiful, functional realities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-dark text-white font-sans custom-scrollbar`}
      >
        <Cursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
