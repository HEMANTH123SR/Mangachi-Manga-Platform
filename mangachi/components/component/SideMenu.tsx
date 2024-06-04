"use client";
import {
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  PlusCircle,
  LayoutDashboard,
  Bell,
  UsersRound,
  PieChart,
  Fan,
  AlertCircle,
  Twitter,
  Instagram,
  Mail,
  Dice5,
  BookmarkCheck,
  Search
} from "lucide-react";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
export const SideMenu = () => {
  return (
    <SheetContent className="bg-white flex flex-col">
      <SheetHeader>
        <div
          className="
    flex items-center justify-between p-4 bg-[#E11D48] text-white w-11/12"
        >
          <SheetTitle className="text-xl font-bold text-white">
            Mangachi
          </SheetTitle>
        </div>

        <SheetDescription className=" lg:px-4 py-2 text-sm text-gray-600 w-11/12">
          Mangachi Your Passport to Boundless Manga Adventures.
        </SheetDescription>
      </SheetHeader>
      <ScrollArea>
        <nav className="flex flex-col mt-4 space-y-6 sm:space-y-5  ">
          <Link
            href={"/create-manga"}
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            <PlusCircle className="h-5 w-5 text-gray-500" />
            <span className="ml-2">Create Manga</span>
          </Link>
          <Link
            href={"/dashboard"}
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            <LayoutDashboard className="h-5 w-5 text-gray-500" />
            <span className="ml-2">Dashboard</span>
          </Link>
          <Link
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            href={"/notifications"}
          >
            <Bell className="h-5 w-5 text-gray-500" />

            <span className="ml-2">Notifications</span>
          </Link>
          <Link
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            href={"/search"}
          >
            <Search className="h-5 w-5 text-gray-500" />

            <span className="ml-2">Search</span>
          </Link>
          <Link
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            href={"/api/get-random-manga"}
          >
            <Dice5 className="h-5 w-5 text-gray-500" />
            <span className="ml-2">Random</span>
          </Link>
          <Link
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            href={"/bookmarks"}
          >
            <BookmarkCheck className="h-5 w-5 text-gray-500" />
            <span className="ml-2">Bookmarks</span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            href={"/most-popular"}
          >
            <Fan className="h-5 w-5 text-gray-500" />
            <span className="ml-2">Most Popular</span>
          </Link>
          <Link
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            href={"/recents"}
          >
            <PieChart className="h-5 w-5 text-gray-500" />
            <span className="ml-2">Recently Added</span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            href={"/community"}
          >
            <UsersRound className="h-5 w-5 text-gray-500" />
            <span className="ml-2">Community</span>
          </Link>
          <Link
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            href={"/about-us"}
          >
            <AlertCircle className="h-5 w-5 text-gray-500" />
            <span className="ml-2">About Us</span>
          </Link>
        </nav>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
      <SheetFooter>
        <div className="flex justify-around mt-auto p-4 border-t border-gray-200 w-full">
          <a
            className="flex items-center text-gray-700 hover:text-gray-500"
            href="#"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            className="flex items-center text-gray-700 hover:text-gray-500"
            href="https://twitter.com"
            target="_blank"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            className="flex items-center text-gray-700 hover:text-gray-500"
            href="https://www.instagram.com"
            target="_blank"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </SheetFooter>
    </SheetContent>
  );
};
