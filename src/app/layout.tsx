import type { Metadata } from "next";
import "./globals.css";
import {  Poppins } from "next/font/google";
import Navbar from "@/components/NavBar";

const poppinsSans = Poppins({
  variable: "--poppins",
  subsets: ["latin"],
  weight:['400', '500']
});


export const metadata: Metadata = {
  title: "Forcythe",
  description: "Interview Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsSans.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
