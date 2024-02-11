import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { NavBar } from "@/components/component/NavBar";
import { SideMenu } from "@/components/component/SideMenu";
import { Toaster } from "@/components/ui/sonner";
import { GiHamburgerMenu } from "react-icons/gi";

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
    <ClerkProvider>
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
        
            <div className="w-full mt-24">
              <div className="border-t border-gray-700  py-6 border-primary">
                <p className="text-center text-sm">
                  © 2024 Mangachi All Rights Reserved.
                </p>
              </div>
            </div>
            <SideMenu />
          </Sheet>
          <Analytics />
          <Toaster />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
}
