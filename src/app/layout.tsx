import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {
  Footer,
  MobileNavBar,
  TalkAbout,
  TopNavBar,
} from "@/components/shared";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Anchor Informatics",
  description: "Financial Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={""}>
        <div className="hidden md:flex">
          <TopNavBar />
        </div>
        <div className="flex md:hidden top-0 fixed z-50 w-full">
          <MobileNavBar />
        </div>
        {children}
        <div>
          <TalkAbout />
          <Footer />
        </div>
      </body>
    </html>
  );
}
