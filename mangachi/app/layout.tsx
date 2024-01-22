import React from "react";
import type { Metadata } from "next";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter } from "next/font/google";
import "./globals.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { NavBar } from "@/components/NavBar";
import { SideMenu } from "@/components/SideMeny";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/sonner"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mangachi ",
  description: "Mangachi is a manga reader app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <Sheet>
          <NavBar>
            <SheetTrigger asChild className="bg-white">
              <Button className="p-0 m-0  text-primary bg-white hover:bg-white">
                <GiHamburgerMenu className="text-2xl sm:text-3xl text-text hover:text-3xl" />
              </Button>
            </SheetTrigger>
          </NavBar>
          {children}

          <SideMenu />
        </Sheet>
        <Analytics />
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  );
}
