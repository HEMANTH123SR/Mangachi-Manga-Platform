"use client";
import {
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  BadgeAlertIcon,
  FanIcon,
  InfoIcon,
  InstagramIcon,
  MailIcon,
  RecycleIcon,
  RulerIcon,
  ThumbsUpIcon,
  TwitterIcon,
  UserIcon,
  Clock10Icon,
  ListIcon,
  SettingsIcon,
  ShareIcon,
  SignalIcon,
} from "@/lib/Icons";
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
        <nav className="flex flex-col mt-4 space-y-4 ">
          <a
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            href="#"
          >
            <UserIcon className="h-5 w-5 text-gray-500" />
            <span className="ml-2">Community</span>
          </a>
          <a
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            href="#"
          >
            <FanIcon className="h-5 w-5 text-gray-500" />
            <span className="ml-2">Most Popular</span>
          </a>
          <a
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            href="#"
          >
            <RecycleIcon className="h-5 w-5 text-gray-500" />
            <span className="ml-2">Recents</span>
          </a>
          <a
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            href="#"
          >
            <Clock10Icon className="h-5 w-5 text-gray-500" />
            <span className="ml-2">Top 10</span>
          </a>
          <a
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            href="#"
          >
            <SettingsIcon className="h-5 w-5 text-gray-500" />
            <span className="ml-2">Settings</span>
          </a>
          <a
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            href="#"
          >
            <ShareIcon className="h-5 w-5 text-gray-500" />
            <span className="ml-2">My Publish</span>
          </a>
          <a
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            href="#"
          >
            <SignalIcon className="h-5 w-5 text-gray-500" />
            <span className="ml-2">Notifications</span>
          </a>
          <a
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            href="#"
          >
            <ListIcon className="h-5 w-5 text-gray-500" />
            <span className="ml-2">Recently Added</span>
          </a>
          <a
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            href="#"
          >
            <ThumbsUpIcon className="h-5 w-5 text-gray-500" />
            <span className="ml-2">Liked</span>
          </a>
          <a
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            href="#"
          >
            <UserIcon className="h-5 w-5 text-gray-500" />
            <span className="ml-2">Profile</span>
          </a>
          <a
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            href="#"
          >
            <InfoIcon className="h-5 w-5 text-gray-500" />
            <span className="ml-2">About Us</span>
          </a>
          <a
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            href="#"
          >
            <BadgeAlertIcon className="h-5 w-5 text-gray-500" />
            <span className="ml-2">Announcements</span>
          </a>
          <a
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            href="#"
          >
            <RulerIcon className="h-5 w-5 text-gray-500" />
            <span className="ml-2">Site Rules</span>
          </a>
        </nav>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
      <SheetFooter>
        <div className="flex justify-around mt-auto p-4 border-t border-gray-200 w-full">
          <a
            className="flex items-center text-gray-700 hover:text-gray-500"
            href="#"
          >
            <MailIcon className="h-5 w-5" />
          </a>
          <a
            className="flex items-center text-gray-700 hover:text-gray-500"
            href="https://twitter.com/iam_Hemanth_sr"
            target="_blank"
          >
            <TwitterIcon className="h-5 w-5" />
          </a>
          <a
            className="flex items-center text-gray-700 hover:text-gray-500"
            href="https://www.instagram.com/_hemanth_sr_?igsh=MTczM3l1enFwMHZzaw=="
            target="_blank"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>
      </SheetFooter>
    </SheetContent>
  );
};
