import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Mangachi from "@/public/Mangachi-logos_transparent.png";
import { MdOutlineMenuBook } from "react-icons/md";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavBar } from "@/components/NavBar";
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
          <SheetContent>
            <SheetHeader className="border-b-2 border-primary py-4 ">
              <div className="flex flex-col justify-center items-center space-y-3 ">
                <div className="flex justify-center items-center">
                  <MdOutlineMenuBook className="text-2xl lg:text-3xl text-primary" />
                  <SheetTitle className="text-2xl lg:text-3xl font-semibold text-primary">
                    Mangachi
                  </SheetTitle>
                </div>
                <SheetDescription className="text-primary text-xs">
                  Mangachi Your Passport to Boundless Manga Adventures.
                </SheetDescription>
              </div>
            </SheetHeader>
            <div></div>

            <SheetFooter>
              {/* <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose> */}
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </body>
    </html>
  );
}
