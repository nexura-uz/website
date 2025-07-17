import type { Metadata } from "next";
import "./globals.css";
import { gilroy } from "@/app/fonts"
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";




export const metadata: Metadata = {
  title: "Nexura",
  description: "Dasturiy yechimlar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body className={`min-h-screen flex flex-col justify-between bg-gray-900 text-light-gray ${gilroy.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
