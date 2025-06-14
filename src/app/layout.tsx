import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";

import "./globals.css";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import { NavbarMenu } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oia Properties - Real Estate Agency in Abu Dhabi and Dubai",
  description: "Oia Properties - Real Estate Agency in Abu Dhabi and Dubai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
  className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased overflow-x-clip`}
      >
          <NavbarMenu/>

        {children}
      </body>
    </html>
  );
}
